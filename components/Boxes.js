import * as  React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function Boxes() {
    const next_page_pressed = () => {
        alert("Alert Pressed...")
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.inner}>
                    <Text>Box one</Text>
                    <Button 
                        title='Next page...!'
                        color='#841584'
                        onPress={next_page_pressed}  
                    />
                </Text>
            </View>
       
            <View style={styles.box}>
                <View style = {styles.inner}>
                    <Text>Box 2</Text>
                </View>   
            </View>
        </View>
    );
}j 


const styles = StyleSheet.create({ 
    container: { 
        width: "100%",
        height: "85%",
        alignItems:  'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: "50%",
        height: "50%",
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        alignItems:  'center',
        justifyContent: 'center',
    }
});