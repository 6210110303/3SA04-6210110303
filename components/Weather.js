import React, { useState } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.scene}>
            <View style={styles.back} >
                <Text> </Text>
                <Text style={styles.Small_text}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scene: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    back: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        width: '100%',
        height: '30%',
        alignItems: 'center'
    },
    Small_text: {
        fontSize: 20,
        color: '#C0C0C0'
    }
})
