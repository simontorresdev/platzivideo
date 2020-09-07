import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native'

function Componente(props){
    return(
        <View>
            <Text style={style.texto}>
                Hola este es un componente
                <Text style={style.especial}>Hola</Text>
                
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    texto:{
        padding: 100,
        backgroundColor: '#000',
        color:'#fff',
        textAlign:'center'
    },
    especial:{
        padding: 100,
        backgroundColor: '#fff',
        color:'#000',
        textAlign:'center'
    }
})
export default Componente;