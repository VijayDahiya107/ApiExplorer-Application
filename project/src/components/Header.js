import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

export default function Header({ search, onChange }) {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput
        placeholder="Search APIs..."
        placeholderTextColor="#aaa"
        style={styles.search}
        value={search}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f5e8c7',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  search: {
    flex: 1,
    backgroundColor: '#fffaf0',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
    borderColor: '#d2b48c',
    borderWidth: 1,
    fontFamily: 'serif',
  },
});
