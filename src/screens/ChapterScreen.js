import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import OttomanHeader from '../components/OttomanHeader';
import { saveProgress } from '../utils/storage';

const { width } = Dimensions.get('window');
const DECORATION = '◆ ✦ ★ ✦ ◆';
const SEPARATOR = '★ ◆ ✦ ◆ ★';

export default function ChapterScreen({ route, navigation }) {
  const { chapter } = route.params;
  const [isRead, setIsRead] = useState(false);
  const [showReadButton, setShowReadButton] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonTranslate = useRef(new Animated.Value(30)).current;
  const checkOpacity = useRef(new Animated.Value(0)).current;
  const checkScale = useRef(new Animated.Value(0.5)).current;

  function handleScroll(event) {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (distanceFromBottom < 200) {
      if (!showReadButton) {
        setShowReadButton(true);
        Animated.parallel([
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(buttonTranslate, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
        ]).start();
      }
    }
  }

  async function handleMarkAsRead() {
    if (isRead) return;
    const result = await saveProgress(chapter.id);
    if (result) {
      setIsRead(true);
      Animated.sequence([
        Animated.parallel([
          Animated.timing(checkOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(checkScale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }

  function increaseFontSize() {
    setFontSize((prev) => Math.min(prev + 2, 28));
  }

  function decreaseFontSize() {
    setFontSize((prev) => Math.max(prev - 2, 12));
  }

  const contentSections = chapter.content.split('\n\n');

  return (
    <View style={styles.container}>
      <OttomanHeader
        title={chapter.title}
        subtitle={chapter.category}
        showBack={true}
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.iconSection}>
          <Text style={styles.chapterIcon}>{chapter.icon}</Text>
          <View style={styles.iconDecor}>
            <Text style={styles.iconDecorText}>{DECORATION}</Text>
          </View>
        </View>

        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>{chapter.category}</Text>
        </View>

        <View style={styles.fontSizeControls}>
          <TouchableOpacity
            style={styles.fontSizeButton}
            onPress={decreaseFontSize}
            activeOpacity={0.7}
          >
            <Text style={styles.fontSizeButtonText}>A-</Text>
          </TouchableOpacity>
          <Text style={styles.fontSizeLabel}>Tamaño</Text>
          <TouchableOpacity
            style={styles.fontSizeButton}
            onPress={increaseFontSize}
            activeOpacity={0.7}
          >
            <Text style={styles.fontSizeButtonText}>A+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentDivider}>
          <Text style={styles.dividerText}>{SEPARATOR}</Text>
        </View>

        {contentSections.map((section, index) => (
          <View key={index}>
            <Text style={[styles.contentText, { fontSize }]}>
              {section.trim()}
            </Text>
            {index < contentSections.length - 1 && (
              <View style={styles.sectionSeparator}>
                <Text style={styles.sectionSeparatorText}>{DECORATION}</Text>
              </View>
            )}
          </View>
        ))}

        <View style={styles.endDecor}>
          <Text style={styles.endDecorText}>★ ◆ ✦ ◆ ★</Text>
        </View>

        {isRead && (
          <Animated.View
            style={[
              styles.readConfirmation,
              {
                opacity: checkOpacity,
                transform: [{ scale: checkScale }],
              },
            ]}
          >
            <Text style={styles.readConfirmationIcon}>✓</Text>
            <Text style={styles.readConfirmationText}>Capítulo leído</Text>
          </Animated.View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>

      {!isRead && (
        <Animated.View
          style={[
            styles.readButtonContainer,
            {
              opacity: buttonOpacity,
              transform: [{ translateY: buttonTranslate }],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.readButton}
            onPress={handleMarkAsRead}
            activeOpacity={0.7}
          >
            <Text style={styles.readButtonText}>Marcar como leído</Text>
            <Text style={styles.readButtonIcon}>✓</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d1a',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 12,
  },
  chapterIcon: {
    fontSize: 56,
    marginBottom: 8,
  },
  iconDecor: {
    alignItems: 'center',
  },
  iconDecorText: {
    color: '#D4AF37',
    fontSize: 14,
    letterSpacing: 4,
    opacity: 0.6,
  },
  categoryBadge: {
    backgroundColor: '#8B0000',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'center',
    marginBottom: 12,
  },
  categoryBadgeText: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  fontSizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 12,
  },
  fontSizeButton: {
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D4AF37',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontSizeButtonText: {
    color: '#D4AF37',
    fontSize: 14,
    fontWeight: 'bold',
  },
  fontSizeLabel: {
    color: '#F5E6CA',
    fontSize: 12,
    opacity: 0.6,
  },
  contentDivider: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerText: {
    color: '#D4AF37',
    fontSize: 14,
    letterSpacing: 6,
    opacity: 0.5,
  },
  contentText: {
    color: '#F5E6CA',
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 4,
  },
  sectionSeparator: {
    alignItems: 'center',
    marginVertical: 20,
  },
  sectionSeparatorText: {
    color: '#D4AF37',
    fontSize: 14,
    letterSpacing: 6,
    opacity: 0.4,
  },
  endDecor: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  endDecorText: {
    color: '#D4AF37',
    fontSize: 16,
    letterSpacing: 8,
  },
  readConfirmation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a4a2a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2ecc71',
    paddingVertical: 12,
    marginBottom: 20,
  },
  readConfirmationIcon: {
    color: '#2ecc71',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 8,
  },
  readConfirmationText: {
    color: '#2ecc71',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 80,
  },
  readButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  readButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B0000',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D4AF37',
    paddingVertical: 14,
    paddingHorizontal: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  readButtonText: {
    color: '#D4AF37',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  readButtonIcon: {
    color: '#D4AF37',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
