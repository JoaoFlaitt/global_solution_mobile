import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function OdsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ODS e Futuro do Trabalho</Text>
      <Text style={styles.text}>
        O SkillUpPlus 2030+ foi pensado para apoiar a requalificação profissional
        em um cenário de forte automação, IA e transformação digital.
      </Text>

      <Text style={styles.sectionTitle}>ODS 4 – Educação de Qualidade</Text>
      <Text style={styles.text}>
        • Microcursos curtos, acessíveis pelo celular.{'
'}
        • Trilhas autoexplicativas que permitem estudar em qualquer lugar.{'
'}
        • Foco em competências digitais essenciais para o século XXI.
      </Text>

      <Text style={styles.sectionTitle}>
        ODS 8 – Trabalho Decente e Crescimento Econômico
      </Text>
      <Text style={styles.text}>
        • Incentivo à requalificação de trabalhadores impactados por automação.{'
'}
        • Apoio à transição de carreira para áreas emergentes, como IA e
        sustentabilidade.
      </Text>

      <Text style={styles.sectionTitle}>
        ODS 9 e 10 – Inovação e Redução das Desigualdades
      </Text>
      <Text style={styles.text}>
        • Uso de tecnologias móveis para reduzir barreiras de acesso ao
        conhecimento.{'
'}
        • Inclusão de públicos vulneráveis na economia digital.
      </Text>

      <Text style={styles.sectionTitle}>Impacto Esperado</Text>
      <Text style={styles.text}>
        Ao combinar trilhas práticas, autoavaliação e uma navegação simples, o
        app fortalece a autonomia do usuário para aprender continuamente e se
        manter relevante até 2030.
      </Text>
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
    fontSize: 20,
    fontWeight: '700',
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
});
