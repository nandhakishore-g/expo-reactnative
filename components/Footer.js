import * as  React from 'react';
import {Text, View , StyleSheet} from 'react-native';

export default function Footer () {
    return (
        <View style = {styles.footer}>
            <Text>Footer Component... !!</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    footer: {
        // width: "100%",
        // height: "5%",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    },
});