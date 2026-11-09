import AsyncStorage from "@react-native-async-storage/async-storage";

// ============================================================
// INTERFACE
// ============================================================

// Bentuk data MENTAH yang dikirim API Open-Meteo
export interface OpenMeteoResponse {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
  };
}

// Bentuk OBJECT yang dipakai aplikasi (hasil mapping dari response API)
export interface WeatherData {
  temperature: number; // °C
  humidity: number; // %
  windSpeed: number; // km/jam
  updatedAt: string; // waktu data dari API
}

// ============================================================
// KONFIGURASI
// ============================================================

// Ganti latitude & longitude sesuai lokasi greenhouse kamu
const LATITUDE = -6.2;
const LONGITUDE = 106.82;

const API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}` +
  `&longitude=${LONGITUDE}` +
  `&current=temperature_2m,relative_humidity_2m,wind_speed_10m` +
  `&timezone=auto`;

const CACHE_KEY = "hydrogrow-weather";
const TIMEOUT_MS = 8000;

// ============================================================
// CUSTOM ASYNC FUNCTION
// ============================================================

// Async function buatan sendiri: ambil data dari External API
// lalu masukkan ke object ber-Interface (WeatherData).
export const fetchWeather = async (): Promise<WeatherData> => {
  // fetch() & response.json() adalah PRE-BUILT async function
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Server cuaca error (HTTP ${response.status})`);
  }

  const json: OpenMeteoResponse = await response.json();

  // Masukkan data API ke dalam object sesuai Interface
  const weather: WeatherData = {
    temperature: json.current.temperature_2m,
    humidity: json.current.relative_humidity_2m,
    windSpeed: json.current.wind_speed_10m,
    updatedAt: json.current.time,
  };

  return weather;
};

// ============================================================
// PROMISE: resolve() & reject()
// ============================================================

// Promise manual: reject jika waktu habis
const timeoutAfter = (ms: number): Promise<never> =>
  new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error("Waktu permintaan habis")), ms);
  });

// Promise manual: resolve jika data valid, reject jika tidak
export const validateWeather = (data: WeatherData): Promise<WeatherData> =>
  new Promise((resolve, reject) => {
    const valid =
      Number.isFinite(data.temperature) &&
      Number.isFinite(data.humidity) &&
      data.humidity >= 0 &&
      data.humidity <= 100;

    if (valid) {
      resolve(data);
    } else {
      reject(new Error("Data cuaca dari server tidak valid"));
    }
  });

// Simpan cache ke AsyncStorage (pre-built async function)
export const saveWeatherCache = (data: WeatherData): Promise<void> =>
  AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));

// Baca cache: Promise.resolve jika ada, Promise.reject jika kosong
export const getCachedWeather = (): Promise<WeatherData> =>
  AsyncStorage.getItem(CACHE_KEY).then((raw) => {
    if (raw === null) {
      return Promise.reject(new Error("Belum ada data cuaca tersimpan"));
    }
    return Promise.resolve(JSON.parse(raw) as WeatherData);
  });

// Gabungan: ambil dari API (maks 8 detik) -> validasi -> simpan cache
// Pakai rantai .then() sehingga mudah dibaca alurnya.
export const getWeather = (): Promise<WeatherData> =>
  Promise.race([fetchWeather(), timeoutAfter(TIMEOUT_MS)])
    .then(validateWeather)
    .then((data) => {
      saveWeatherCache(data);
      return data;
    });

// ============================================================
// SARAN PERAWATAN (berdasarkan object WeatherData)
// ============================================================
export const getCareAdvice = (weather: WeatherData): string => {
  if (weather.temperature >= 32) {
    return "Cuaca panas. Periksa air nutrisi lebih sering dan beri peneduh.";
  }
  if (weather.temperature <= 20) {
    return "Cuaca dingin. Pertumbuhan bisa melambat, jaga suhu larutan nutrisi.";
  }
  if (weather.humidity >= 85) {
    return "Kelembapan tinggi. Pastikan sirkulasi udara agar tidak berjamur.";
  }
  if (weather.humidity <= 50) {
    return "Udara kering. Tanaman lebih cepat kehilangan air, cek tandon.";
  }
  return "Kondisi cuaca ideal untuk tanaman hidroponik.";
};