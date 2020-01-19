import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import MapView, {Marker, Callout} from "react-native-maps";
import {requestPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import {MaterialIcons} from '@expo/vector-icons'

function Main({navigation}) {
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(()=>{
        async function loadInitialPosition() {
            const {granted} = await requestPermissionsAsync();
            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const {latitude, longitude} = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta:0.04,
                });

            }
        }
        loadInitialPosition();
    }, []);

    if(!currentRegion){
        return null;
    }
    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude:-15.789695, longitude:-47.9269767 }} >
                <Image style={styles.avatar} source={{uri:'https://avatars0.githubusercontent.com/u/5393392?s=460&v=4'}} />
                <Callout onPress={()=>{
                    // navegação
                    navigation.navigate('Profile', {github_username:'guilhermebferreira'})
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Guilherme Ferreira</Text>
                        <Text style={styles.devBio}>Full Stack Developer</Text>
                        <Text style={styles.devTechs}>Python, PHP</Text>
                    </View>
                </Callout>
            </Marker>

        </MapView>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeHolder="Buscar Devs por techs..."
                    placeHolderTextColor="#999"
                    autoCapitalize="words"
                    autoCorret={false}
                />
                {/*TODO: mover o input para acima do teclado quando  teclado estiver sendo exibido
                        searchForm:{
                            bottom: 20,
                            ...
                        }
                */}



                <TouchableOpacity onPress={()=>{}} style={styles.loadButton} >
                    <MaterialIcons name="my-location" size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar:{
        width: 54,
        height: 54,
        borderWidth: 4,
        borderRadius: 4,
        borderColor:'#fff'
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio:{
        color: '#666',
        marginTop:5,
    },
    devTechs:{

        marginTop:5,
    },
    searchForm:{
        position:'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row' // display flex padrão do react native
    },
    searchInput:{
        flex: 1,
        height: 50,
        backgroundColor:'#fff',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        //propriedades de sombra para o iOS
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 6,
            height:6,
        },
        //propriedade de sombra para o android
        elevation: 2,
    },
    loadButton:{
        width:50,
        height: 50,
        backgroundColor: '#8e4dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
})

export default Main;