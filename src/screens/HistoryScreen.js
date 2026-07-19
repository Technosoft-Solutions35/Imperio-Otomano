import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import OttomanHeader from '../components/OttomanHeader';
import ChapterCard from '../components/ChapterCard';
import chapters from '../data/chapters';
import { getProgress } from '../utils/storage';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  'Todos',
  'Orígenes',
  'Fundación',
  'Época Clásica',
  'Suleiman y la Edad de Oro',
  'Política',
  'Sociedad',
  'Militar',
  'Cultura',
  'Declive',
];

export default function HistoryScreen({ navigation }) {
  const [readChapters, setReadChapters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = useCallback(async () => {
    const progress = await getProgress();
    setReadChapters(progress);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadProgress);
    return unsubscribe;
  }, [navigation, loadProgress]);

  const enrichedChapters = chapters.map((ch) => ({
    ...ch,
    isRead: readChapters.includes(ch.id),
  }));

  const filteredChapters = enrichedChapters.filter((ch) => {
    const matchesCategory =
      selectedCategory === 'Todos' || ch.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      ch.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  function handleChapterPress(chapter) {
    navigation.navigate('Chapter', { chapter });
  }

  function renderCategoryButton(category) {
    const isSelected = selectedCategory === category;
    return (
      <TouchableOpacity
        key={category}
        style={[styles.categoryButton, isSelected && styles.categoryButtonActive]}
        onPress={() => setSelectedCategory(category)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.categoryButtonText,
            isSelected && styles.categoryButtonTextActive,
          ]}
          numberOfLines={1}
        >
          {category}
        </Text>
      </TouchableOpacity>
    );
  }

  function renderChapterItem({ item }) {
    return (
      <ChapterCard
        chapter={item}
        onPress={() => handleChapterPress(item)}
      />
    );
  }

  function renderListHeader() {
    return (
      <View>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar capítulo..."
            placeholderTextColor="#8B7D3C"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearch}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <FlatList
          horizontal
          data={CATEGORIES}
          renderItem={({ item }) => renderCategoryButton(item)}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
          style={styles.categoriesList}
        />

        <View style={styles.resultInfo}>
          <Text style={styles.resultText}>
            {filteredChapters.length} capítulo{filteredChapters.length !== 1 ? 's' : ''}
          </Text>
          <Text style={styles.resultDecor}>◆ ✦ ◆</Text>
        </View>
      </View>
    );
  }

  function renderEmptyList() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📜</Text>
        <Text style={styles.emptyText}>No se encontraron capítulos</Text>
        <Text style={styles.emptySubtext}>
          Prueba con otra búsqueda o categoría
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <OttomanHeader
        title="Historia"
        subtitle="Capítulos del Imperio"
        showBack={true}
        onBack={() => navigation.goBack()}
      />

      <FlatList
        data={filteredChapters}
        renderItem={renderChapterItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderListHeader}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4AF37',
    marginHorizontal: 16,
    marginTop: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#F5E6CA',
    fontSize: 15,
    paddingVertical: 8,
  },
  clearSearch: {
    color: '#D4AF37',
    fontSize: 18,
    paddingLeft: 8,
  },
  categoriesList: {
    marginTop: 12,
  },
  categoriesContainer: {
    paddingHorizontal: 12,
    gap: 8,
  },
  categoryButton: {
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D4AF37',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  categoryButtonActive: {
    backgroundColor: '#8B0000',
    borderColor: '#D4AF37',
  },
  categoryButtonText: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '600',
  },
  categoryButtonTextActive: {
    color: '#F5E6CA',
  },
  resultInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 4,
  },
  resultText: {
    color: '#F5E6CA',
    fontSize: 13,
    opacity: 0.7,
  },
  resultDecor: {
    color: '#D4AF37',
    fontSize: 12,
    opacity: 0.5,
    letterSpacing: 3,
  },
  listContent: {
    paddingBottom: 30,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtext: {
    color: '#F5E6CA',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.6,
  },
});
