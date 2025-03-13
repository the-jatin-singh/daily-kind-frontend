import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Logout from '../components/Logout';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import BaseButton from '../components/BaseButton';

const IconWithBg = ({ children, bgColor = "#01B2A91F" }) => {
  return (
    <View style={{ backgroundColor: bgColor, width: 30, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6 }}>
      {children}
    </View>
  )
}

export default function Home() {
  const [quote, setQuote] = useState({ quote: '', author: '' });
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/quotes/random');
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={{ color: COLORS.h1Color, marginTop: 78, fontSize: 22, fontWeight: 600 }} >Daily Quote...</Text>

      <View style={styles.timerContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <IconWithBg>
            <Ionicons name="time-sharp" size={24} color="#01B2A980" />
          </IconWithBg>
          <Text style={{ color: "#01B2A9", fontWeight: 500, fontSize: 18 }}>8 hours</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <IconWithBg>
              <Ionicons name="thumbs-up-sharp" size={20} color="#01B2A980" />
            </IconWithBg>
            <Text style={{ color: "#01B2A9", fontWeight: 500, fontSize: 18 }}>8</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <IconWithBg>
              <Ionicons name="thumbs-down-sharp" size={20} color="#01B2A980" />
            </IconWithBg>
            <Text style={{ color: "#01B2A9", fontWeight: 500, fontSize: 18 }}>8</Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteContainer}>
        {isLoading ? (
          <Text style={styles.messageText}>Loading...</Text>
        ) : quote.quote ? (
          <>
            <Text style={styles.quoteText}>{quote.quote}</Text>
            <Text style={styles.authorText}>- {quote.author}</Text>
          </>
        ) : (
          <Text style={styles.messageText}>No quote available. Try refreshing!</Text>
        )}
      </View>

      <BaseButton size="lg" variant="primary" onPress={fetchRandomQuote} loading={isLoading}>
        Refresh
      </BaseButton>

      <View style={styles.logoutContainer}>
        <Logout />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    padding: 32,
    gap: 30,

  },
  logoutContainer: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#01B2A9",
    borderRadius: 20,
  },
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

  },
  quoteContainer: {
    minHeight: 100,
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 18,
    color: COLORS.h1Color
  },
  authorText: {
    fontSize: 16,
    color: COLORS.h1Color,
    marginTop: 10,
    fontStyle: 'italic'
  },
  messageText: {
    fontSize: 16,
    color: COLORS.h1Color,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})