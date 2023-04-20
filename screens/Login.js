import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text>Login Screen flow from here...</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text>Move to Foodie uploads...</Text>
            </TouchableOpacity> */}
            <Button
                title="Move to foodie screen"
                onPress={() => navigation.navigate('Signup')}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Login