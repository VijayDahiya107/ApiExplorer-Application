import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, RefreshControl, ActivityIndicator,StyleSheet } from 'react-native';
import { fetchAPIs } from '../services/apiService';
import Header from '../components/Header';
import APIItem from '../components/APIItem';
import { useThemeContext } from '../context/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { isDark } = useThemeContext();

  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const ITEMS_PER_PAGE = 20;
  const [page, setPage] = useState(1);

  const loadData = async () => {
    try {
      setRefreshing(true);
      const result = await fetchAPIs();
      const apiArray = Object.entries(result).map(([name, versions]) => ({ name, versions }));
      setData(apiArray);
      setDisplayedData(apiArray.slice(0, ITEMS_PER_PAGE));
      setPage(1);
    } catch {
      setData([]);
      setDisplayedData([]);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    
    loadData();
  }, []);

  useEffect(() => {
    if (!search) {
      const newData = data.slice(0, page * ITEMS_PER_PAGE);
      setDisplayedData(newData);
    } else {
      const filtered = data.filter(api =>
        api.name.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayedData(filtered);
    }
  }, [search, page, data]);

  const loadMore = () => {
    if (!loadingMore && !search && displayedData.length < data.length) {
      setLoadingMore(true);
      setTimeout(() => {
        setPage(prev => prev + 1);
        setLoadingMore(false);
      }, 500);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fdf6e3' }]}>
  <Header search={search} onChange={setSearch} />
  <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>🔍 API Explorer</Text>



      <FlatList
        data={displayedData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <APIItem item={item} onPress={() => navigation.navigate('Detail', { item })} />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadData} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loadingMore && !search ? <ActivityIndicator style={{ margin: 10 }} /> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#aaa',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    elevation: 2,
  },
});

