import React from "react"
import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { color } from "react-native-reanimated"

const availableZipItems = [    
    { place: "Bangkok", code: '10100' },    
    { place: "Khon Kaen", code: '40000' },       
    { place: "Chiang Mai", code: '50000' },
    { place: "Lampang", code: '52000' },
    { place: "Chiang Rai", code: '57000' },
    { place: "Surat Thani", code: '84000' }, 
    { place: "Songkhla", code: '90000' },
    { place: "Trang", code: '92000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)


export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../home_bg.jpg')} style={styles.scene}>           
                <FlatList
                    data={availableZipItems}
                    keyExtractor={item => item.code}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scene: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    back: {
         alignItems:'center',
         backgroundColor: "rgba(0, 0, 0, 0.75)",
         width: '100%',
         height: '45%',
         alignItems: 'center'
     },
    zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "rgba(0,0,0,0.75)",
        borderColor: 'red'
    },
    zipPlace: {
        flex: 1,
        margin: 10,
        fontSize: 20,
        color: '#C0C0C0',
    },
    zipCode: {
        flex: 1,
        margin: 10,
        fontSize: 20,
        color: '#C0C0C0',
    }
})
