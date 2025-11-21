import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

type LoginScreenProps = {
  onLoginSuccess: (email: string) => void;
};

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Ops!', 'Preencha e-mail e senha para continuar.');
      return;
    }

    const isValidEmail = email.includes('@');
    if (!isValidEmail) {
      Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
      return;
    }

    if (password.length < 4) {
      Alert.alert('Senha fraca', 'A senha deve ter pelo menos 4 caracteres.');
      return;
    }

    onLoginSuccess(email);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://img.icons8.com/color/96/graduation-cap.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>SkillUpPlus 2030+</Text>
        <Text style={styles.subtitle}>
          Requalificação digital para o futuro do trabalho.
        </Text>

        <Text style={styles.label}>E-mail institucional</Text>
        <TextInput
          style={styles.input}
          placeholder="seuemail@fiap.com.br"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button title="Entrar" onPress={handleLogin} />
        </View>

        <Text style={styles.helperText}>
          Ao entrar, você acessa trilhas de IA, sustentabilidade, soft skills e
          muito mais.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    elevation: 4,
  },
  logo: {
    width: 72,
    height: 72,
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    color: '#4b5563',
  },
  label: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
  helperText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
    textAlign: 'center',
  },
});
