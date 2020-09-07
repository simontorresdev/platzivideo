import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

function Loading(props){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />

            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 10,
        width: 200,
        height: 80,
        resizeMode: 'contain'
    }
})
export default Loading;
