import React, { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e1fcf92b6978b52074cc4a5ae4254ece`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.scene}>
            <View style={styles.back} >
                <Text style={styles.Small_text}>Zip Code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scene: {
        alignItems:'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    back: {
        alignItems:'center',
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        width: '100%',
        height: '70%',
        alignItems: 'center'
    },
    Small_text: {
        margin: 10,
        fontSize: 20,
        color: '#C0C0C0'
    }
})
