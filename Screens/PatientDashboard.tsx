import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const PatientDashboard = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Health Records</Title>
          <Paragraph>View your health history and test results.</Paragraph>
          <Button mode="contained" onPress={() => {}}>View</Button>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Appointments</Title>
          <Paragraph>Book or cancel upcoming appointments.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Manage</Button>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Title>Prescriptions</Title>
          <Paragraph>Check current prescriptions and dosage info.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Check</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default PatientDashboard;
