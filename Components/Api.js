import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export const Api = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);

            // let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            // setUsers(response.data);

        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {users.length > 0 ? (
                    users.map(user => (
                        <View key={user.id} style={styles.userContainer}>
                            <Text style={styles.text}>ID: {user.id}</Text>
                            <Text style={styles.text}>Name: {user.name}</Text>
                            <Text style={styles.text}>email: {user.email}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.text}>Loading...</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    userContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
});

export default Api;
