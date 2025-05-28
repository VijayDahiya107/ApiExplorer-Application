import React from 'react';
import { View, Text, StyleSheet, Button, Linking, ScrollView } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

export default function DetailScreen({ route }) {
  const { item } = route.params;
  const version = Object.keys(item.versions)[0];
  const details = item.versions[version];
  const description = details.info?.description || 'Stock and Forex Data and Realtime Quotes';
  const contact = details.info?.contact?.email || ' email: contact@1forge.com name: 1Forge';
  const baseURL = details.swaggerUrl || 'http://1forge.com/openapi.json';

  const { isDark } = useThemeContext();

  const openDocs = () => {
    const url = `https://api.apis.guru/v2/specs/${item.name}/${version}.json`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#1e1e1e' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>{item.name}</Text>
      <Text style={[styles.text, { color: isDark ? '#ccc' : '#333' }]}>{description}</Text>

      <Text style={[styles.subtitle, { color: isDark ? '#ddd' : '#000' }]}>Base URL</Text>
      <Text style={[styles.text, { color: isDark ? '#ccc' : '#333' }]}>{baseURL}</Text>

      <Text style={[styles.subtitle, { color: isDark ? '#ddd' : '#000' }]}>Contact</Text>
      <Text style={[styles.text, { color: isDark ? '#ccc' : '#333' }]}>{contact}</Text>

      <Button title="Visit Docs" onPress={openDocs} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 15 },
  text: { fontSize: 14, marginBottom: 10 },
});
