import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  progress: number;
  label?: string;
};

export default function ProgressBar({ progress, label }: Props) {
  const safeProgress = Math.min(1, Math.max(0, progress));
  const percentage = Math.round(safeProgress * 100);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.percentage}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  barBackground: {
    height: 12,
    backgroundColor: '#e5e5e5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#4f46e5',
  },
  percentage: {
    marginTop: 2,
    fontSize: 12,
    color: '#555',
  },
});
