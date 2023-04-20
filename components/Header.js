import * as  React from 'react';
import { Text , View , StyleSheet, Button , Alert} from 'react-native';

export default function Header() {
    return ( 
        <View style={styles.header}>
            <Text>Header component</Text>
            <Button
                title='Go to Next Page...' 
                onPress={()=> alert('button pressed')}   
            />
        </View>
    );
}

const styles = StyleSheet.create({ 
    header: {
        width: "100%",
        height: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
});