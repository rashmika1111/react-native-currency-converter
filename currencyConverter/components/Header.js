import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Header() {
    return (
        <PaperProvider>
        <View style={styles.container}>
            <Text variant="displayMedium" style={styles.header}>LKR TO USD CONVERTER</Text>
            <Divider />
        </View>    
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2E2E2E', 
      paddingVertical: 30,       // Increased vertical padding for more spacing
      paddingHorizontal: 20,     
      alignItems: 'flex-start',  // Align items to the start (left side)
      borderRadius: 10,          
      margin: 15,                
      shadowColor: '#000',       
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,              // Elevation for Android shadow
    },
    headerText: {
      color: '#FFFFFF',          // White text for contrast against the dark background
      textAlign: 'left',         // Left-align text for a clean layout
      fontWeight: '600',         // Semi-bold text weight
      fontSize: 18,              // Slightly larger font size
      letterSpacing: 1,          // Add spacing between letters for readability
      marginBottom: 10,          // Add margin for spacing below the text
    },
  });