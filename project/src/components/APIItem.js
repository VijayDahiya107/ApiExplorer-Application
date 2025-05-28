import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function APIItem({ item, onPress }) {
  const version = Object.keys(item.versions)[0];
  const info = item.versions[version]?.info;
  const description = info?.description?.trim();

  

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>
        {description ? `${description.slice(0, 100)}...` : 'Stock and Forex Data and Realtime Quotes'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  desc: {
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
});
