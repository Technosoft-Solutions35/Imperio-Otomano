import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PATTERNS = ['◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆ ✦ ◆'];

export default function OttomanHeader({ title, subtitle, showBack, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.borderTop}>
        <Text style={styles.patternText}>{PATTERNS[0]}</Text>
      </View>

      <View style={styles.contentRow}>
        {showBack ? (
          <TouchableOpacity style={styles.backButton} onPress={onBack} accessibilityLabel="Go back">
            <Text style={styles.backArrow}>{'◄'}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.backPlaceholder} />
        )}

        <View style={styles.titleContainer}>
          <Text style={styles.crescent}>☪</Text>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          <Text style={styles.starRow}>★ ◆ ★</Text>
        </View>

        <View style={styles.backPlaceholder} />
      </View>

      <View style={styles.borderBottom}>
        <Text style={styles.patternText}>{PATTERNS[0]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8B0000',
    borderBottomWidth: 3,
    borderBottomColor: '#D4AF37',
    paddingTop: 4,
    paddingBottom: 4,
  },
  borderTop: {
    backgroundColor: '#6B0000',
    paddingVertical: 4,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D4AF37',
  },
  borderBottom: {
    backgroundColor: '#6B0000',
    paddingVertical: 4,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#D4AF37',
  },
  patternText: {
    color: '#D4AF37',
    fontSize: 12,
    letterSpacing: 2,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  backButton: {
    padding: 8,
    marginRight: 4,
  },
  backArrow: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
  },
  backPlaceholder: {
    width: 40,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  crescent: {
    color: '#D4AF37',
    fontSize: 18,
    marginBottom: 2,
  },
  title: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    color: '#E8C97A',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 2,
    fontStyle: 'italic',
  },
  starRow: {
    color: '#D4AF37',
    fontSize: 12,
    marginTop: 4,
    letterSpacing: 4,
  },
});
