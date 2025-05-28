import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { SafeAreaView, View, Switch, StyleSheet } from 'react-native';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext';

function AppContent() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.switchContainer}>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
        <View style={styles.navigatorContainer}>
          <StackNavigator />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  navigatorContainer: {
    flex: 1,
  },
});
