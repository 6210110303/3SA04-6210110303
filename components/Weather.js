import React, { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        description: '-',
        temp: 0,
        name: '-',
        country: '-',
        feels_like: '-',
        temp_min: '-',
        temp_max: '-',
        zipCode: '-',
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
                        temp: json.main.temp,
                        name: json.name,
                        country: json.sys.country,
                        feels_like: json.main.feels_like,
                        temp_min: json.main.temp_min,
                        temp_max: json.main.temp_max,
                        zipCode: props.zipCode,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../weather_bg.jpg')} style={styles.scene}>
            <View style={styles.back} >
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scene: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    back: {
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        width: '100%',
        height: '48%',
        borderRadius: 35,
    },
    Small_text: {
        margin: 10,
        fontSize: 20,
        color: '#C0C0C0'
    }
})
