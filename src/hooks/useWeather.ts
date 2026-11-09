import { useCallback, useEffect, useState } from "react";

import {
    getCachedWeather,
    getWeather,
    WeatherData,
} from "@/services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fromCache, setFromCache] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    setError(null);

    getWeather()
      .then((data) => {
        // API berhasil
        setWeather(data);
        setFromCache(false);
      })
      .catch(() =>
        // API gagal (offline/timeout) -> coba pakai data tersimpan.
        // Jika cache juga kosong, getCachedWeather() akan reject
        // dan ditangkap .catch() di bawah.
        getCachedWeather().then((cached) => {
          setWeather(cached);
          setFromCache(true);
        }),
      )
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { weather, loading, error, fromCache, refresh: load };
}