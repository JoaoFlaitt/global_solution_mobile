import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TrackDetailScreen({ route }: any) {
  const { track } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.meta}>
        Área: {track.area} • Nível: {track.level}
      </Text>

      <Text style={styles.sectionTitle}>Descrição</Text>
      <Text style={styles.text}>{track.description}</Text>

      <Text style={styles.sectionTitle}>Módulos da trilha</Text>
      {track.modules.map((mod: string, index: number) => (
        <View key={index} style={styles.moduleItem}>
          <Text style={styles.moduleIndex}>{index + 1}.</Text>
          <Text style={styles.moduleText}>{mod}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Dica prática</Text>
      <Text style={styles.text}>
        Reserve pelo menos 25 minutos por dia para avançar em um módulo. Pequenas
        sessões diárias acumulam um grande progresso até 2030.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  meta: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#4b5563',
  },
  moduleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  moduleIndex: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  moduleText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
});
