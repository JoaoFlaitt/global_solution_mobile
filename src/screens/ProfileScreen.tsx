import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ProfileScreenProps = {
  onLogout: () => void;
};

export default function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('@skillupplus:user');
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setEmail(parsed.email);
      }
    };
    loadUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Text style={styles.label}>E-mail</Text>
      <Text style={styles.value}>{email ?? 'Não identificado'}</Text>

      <Text style={styles.label}>Objetivo no SkillUpPlus</Text>
      <Text style={styles.value}>
        Requalificar-se para o futuro do trabalho, desenvolvendo competências
        digitais e socioemocionais alinhadas aos ODS.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Sair da conta" onPress={onLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    color: '#4b5563',
  },
  buttonContainer: {
    marginTop: 24,
  },
});
