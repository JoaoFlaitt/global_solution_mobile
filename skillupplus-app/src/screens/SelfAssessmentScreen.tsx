import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SelfAssessmentScreen() {
  const [area, setArea] = useState('IA');
  const [experience, setExperience] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = () => {
    if (!experience || !goal) {
      Alert.alert('Formulário incompleto', 'Preencha todos os campos.');
      return;
    }

    Alert.alert(
      'Autoavaliação registrada',
      `Área: ${area}\nExperiência: ${experience}\nMeta: ${goal}\n\nCom base nisso, o app pode recomendar novas trilhas para você.`
    );

    setExperience('');
    setGoal('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Autoavaliação de Competências</Text>
      <Text style={styles.subtitle}>
        Responda com sinceridade para receber recomendações mais alinhadas às
        suas metas.
      </Text>

      <Text style={styles.label}>Área de interesse principal</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={area} onValueChange={(value) => setArea(value)}>
          <Picker.Item
            label="Inteligência Artificial"
            value="IA"
          />
          <Picker.Item
            label="Sustentabilidade / ESG"
            value="Sustentabilidade"
          />
          <Picker.Item
            label="Soft Skills"
            value="Soft Skills"
          />
        </Picker>
      </View>

      <Text style={styles.label}>Como está sua experiência atual?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: nunca tive contato / fiz alguns cursos / já atuo na área..."
        multiline
        value={experience}
        onChangeText={setExperience}
      />

      <Text style={styles.label}>Qual sua principal meta até 2030?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: migrar de área, crescer na carreira, empreender..."
        multiline
        value={goal}
        onChangeText={setGoal}
      />

      <View style={styles.buttonContainer}>
        <Button title="Salvar autoavaliação" onPress={handleSubmit} />
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
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    marginTop: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16,
  },
});
