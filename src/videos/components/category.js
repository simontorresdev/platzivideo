import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Platform,
} from 'react-native'; 


function Category(props){
    return(
        <ImageBackground 
            style={styles.wrapper} 
            source={{
                uri: props.background_image
            }}
        >
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>        
    )
}

const styles = StyleSheet.create({
     wrapper:{
         width: 250,
         height: 100,
         borderRadius: 10,
         overflow: 'hidden',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#000',
     },
     genre: {
        color: '#fff',
        // fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 10,
        backgroundColor: 'rgba(0,0,0, .50)',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        ...Platform.select({
            ios: {
                fontSize: 10,
            },
            android:{
                fontSize: 30,
            }
        })
     }
});

export default Category;