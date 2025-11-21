import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { tracks } from '../data/tracks';

export default function TracksScreen({ navigation }: any) {
  const [search, setSearch] = useState('');

  const filteredTracks = tracks.filter((track) =>
    track.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua próxima trilha</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar por título..."
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={styles.list}>
        {filteredTracks.map((track) => (
          <TouchableOpacity
            key={track.id}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('TrackDetail', { track })}
          >
            <Text style={styles.cardTitle}>{track.title}</Text>
            <Text style={styles.cardMeta}>
              Área: {track.area} • Nível: {track.level}
            </Text>
            <Text style={styles.cardDescription} numberOfLines={3}>
              {track.description}
            </Text>
            <Text style={styles.cardLink}>Ver detalhes da trilha →</Text>
          </TouchableOpacity>
        ))}

        {filteredTracks.length === 0 && (
          <Text style={styles.emptyText}>
            Nenhuma trilha encontrada. Tente outro termo.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardMeta: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#4b5563',
  },
  cardLink: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: '#4f46e5',
  },
  emptyText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#6b7280',
  },
});
