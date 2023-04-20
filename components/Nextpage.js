import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Nextpage() {
    return (
        <View style={styles.container}>
            <Text >My new page..</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1
    }
});