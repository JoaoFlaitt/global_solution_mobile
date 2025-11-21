import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { tracks } from '../data/tracks';

export default function DashboardScreen() {
  const totalCompletion =
    tracks.reduce((sum, t) => sum + t.completion, 0) / tracks.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, bem-vindo(a) 👋</Text>
      <Text style={styles.subtitle}>
        Aqui você acompanha seu progresso nas trilhas e sua jornada de
        requalificação até 2030.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Linha do tempo dos estudos</Text>
        <ProgressBar
          progress={totalCompletion}
          label="Progresso geral nas trilhas"
        />
        <Text style={styles.cardText}>
          Esta barra mostra uma visão geral do quanto você já avançou nas
          trilhas principais. Use o app todos os dias para manter o ritmo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trilhas em destaque</Text>
        {tracks.map((track) => (
          <View key={track.id} style={styles.trackItem}>
            <Text style={styles.trackTitle}>{track.title}</Text>
            <Text style={styles.trackMeta}>
              Área: {track.area} • Nível: {track.level}
            </Text>
            <ProgressBar progress={track.completion} />
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Conexão com os ODS</Text>
        <Text style={styles.cardText}>
          • ODS 4 – Educação de Qualidade{
}
          • ODS 8 – Trabalho Decente e Crescimento Econômico{
}
          • ODS 9 – Indústria, Inovação e Infraestrutura{
}
          • ODS 10 – Redução das Desigualdades
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    marginTop: 4,
  },
  trackItem: {
    marginBottom: 12,
  },
  trackTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  trackMeta: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
});
