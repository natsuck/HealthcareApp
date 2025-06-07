import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const AdminDashboard = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Patient Records</Title>
          <Paragraph>Manage and update patient information.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Manage</Button>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 15 }}>
        <Card.Content>
          <Title>Doctor Schedules</Title>
          <Paragraph>Manage doctor availability and shifts.</Paragraph>
          <Button mode="contained" onPress={() => {}}>View Schedules</Button>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Title>Reports</Title>
          <Paragraph>Generate performance and appointment reports.</Paragraph>
          <Button mode="contained" onPress={() => {}}>Generate</Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default AdminDashboard;
