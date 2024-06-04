import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export const Register = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 }}>
            <Text style={{ color: '#303030', fontSize: 30, marginBottom: 20, fontWeight: 900 }}>Register Page</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#303030"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#303030"
            />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginVertical: 10,
        borderRadius: 4,
        color: 'black'
    },
    button: {
        width: '80%',
        backgroundColor: '#303030',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        fontWeight: 900
    },
})

