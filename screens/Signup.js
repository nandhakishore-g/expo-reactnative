import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Signup = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const url =  "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false));
    }  , []);

    return (
        <View style={styles.container}>
            {loading ? (
                <Text> loading...</Text>
            ) : (
                data.map((post) => {
                    return (
                     <View>
                        <Text style={styles.title}>{post.title}</Text>
                        <Text>{post.body}</Text>
                     </View>
                    )
                })
            )
        }

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

export default Signup