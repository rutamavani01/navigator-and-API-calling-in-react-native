import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

export const Main = (props) => {
    return (
        <View>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/3126442/pexels-photo-3126442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={{ width: '100%', height: '70%', marginBottom: 30 }}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={[styles.underlinedText, { fontWeight: '900' }]}>with google</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        width: '90%',
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        fontWeight: 900
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    underlinedText: {
        color: '#298d98',
        textDecorationLine: 'underline',
        fontWeight: 900
    }
})
