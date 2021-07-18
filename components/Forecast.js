import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Forecast(props) {
    return (
        <View style={{ color: 'white' }}>
            <Text style={styles.Small_text}>Country: {props.country}</Text>
            <Text style={styles.Small_text}>Province: {props.name}</Text>
            <Text style={styles.Small_text}>{props.main}</Text>
            <Text style={styles.Small_text}>{props.description}</Text>
            <View>
                <Text style={styles.Small_text}>{props.temp}<Text style={styles.more_Small_text}>°C</Text></Text>
            </View>
        </View >

    )

}

const styles = StyleSheet.create({
    Big_text: {
        margin: 10,
        fontSize: 30,
        color: '#C0C0C0',
        textAlign: 'center',
    },
    Small_text: {
        margin: 10,
        fontSize: 20,
        color: '#C0C0C0',
        textAlign: 'center',
    },
    more_Small_text: {
        fontSize: 20,
        color: '#C0C0C0',
        textAlign: 'center',
    },
})
