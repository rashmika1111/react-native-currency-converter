import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';




export default function Home() {
    
    const [amountLKR, setAmountLKR] = useState('');
    const [amountUSD, setAmountUSD] = useState(null);
    const exchangeRate = 0.0030;
   
    const convertCurrency = () => {
        const lkr = parseFloat(amountLKR);
        if (!isNaN(lkr)) {
          setAmountUSD((lkr * exchangeRate).toFixed(2));
        } else {
          setAmountUSD(null);
          alert('Please enter a valid amount.');
        }
      };
    
    return (
        <View style={styles.container}>
            <TextInput
                label="LKR Currency"
                mode="outlined"
                value={amountLKR}
                onChangeText={setAmountLKR}
                style={styles.input} />
            <TextInput
                label="USD Currency"
                mode="outlined"
                value={amountUSD}
                style={styles.input} />

            <Button mode="contained" onPress={convertCurrency}>
                Convert
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F0F8FF',
    },
    input: {
      height: 50,
      width: '100%',
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#888',
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      backgroundColor: '#000',
    },
  });
  