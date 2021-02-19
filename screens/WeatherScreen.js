import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'



export default class WeatherScreen extends Component{
    render(){
        return(
            <View>
         <Text style={{fontSize:50,alignSelf:'center'}}>24F, Partly Sunny, Weather expected to be clear tonight</Text>
         <TouchableOpacity
             onPress={() => this.props.navigation.navigate('HomeScreen')}>
               <Text style={{alignSelf:'center',borderWidth:5,borderRadius:15}}>Go Back To Home</Text>
             </TouchableOpacity>
         </View>
        )
    }
}