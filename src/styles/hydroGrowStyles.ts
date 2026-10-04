import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },

  content: {
    padding: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    fontSize: 42,
    marginRight: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#166534',
  },

  subtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 2,
  },

  welcomeCard: {
    backgroundColor: '#166534',
    padding: 20,
    borderRadius: 18,
    marginBottom: 24,
  },

  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },

  welcomeText: {
    fontSize: 14,
    color: '#dcfce7',
    lineHeight: 21,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 12,
  },

  dashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  statEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },

  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#166534',
  },

  statLabel: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
    textAlign: 'center',
  },

  plantCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },

  plantEmoji: {
    fontSize: 38,
    marginRight: 15,
  },

  plantInfo: {
    flex: 1,
  },

  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },

  plantQuantity: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },

  condition: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    marginTop: 20,
    marginBottom: 30,
  },
});