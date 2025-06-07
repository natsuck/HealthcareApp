import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const DoctorDashboard = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Patient Information</Title>
          <Paragraph>Access detailed health data and visit history.</Paragraph>
          <Button mode="contained" onPress={() => {}}>View Patients</Button>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Treatment Plans</Title>
          <Paragraph>Update and monitor treatment progress.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Update</Button>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Title>Prescribe Medication</Title>
          <Paragraph>Issue or update prescriptions.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Prescribe</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default DoctorDashboard;
