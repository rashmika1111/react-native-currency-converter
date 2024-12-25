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
      justifyContent: 'flex-start',    // Align content to the top for a different layout
      alignItems: 'center',
      padding: 30,                    // Slightly more padding for a spacious feel
      backgroundColor: '#FAF3E0',      // Light cream background for warmth
    },
    input: {
      height: 45,                     // Slightly shorter input field
      width: '90%',                   // Adjusted width for a more centralized layout
      marginVertical: 15,             // More vertical spacing between inputs
      borderWidth: 2,                 // Thicker border for emphasis
      borderColor: '#A52A2A',         // Warm brown border for a unique look
      borderRadius: 12,               // More rounded corners for a smoother style
      paddingHorizontal: 20,          // More padding for text input
      fontSize: 18,                   // Slightly larger font size
      backgroundColor: '#FFF8DC',     // Light yellowish background for input fields
      color: '#4B0082',               // Indigo text color for contrast
    },
  });
  