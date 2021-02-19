import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'



export default class HoroscopeScreen extends Component{
    render(){
        return(
        <View>
            <Text style={{fontSize:50,alignSelf:'center'}}>HoroScope</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>(I don't know a way I can implement a horoscope here sorry.)</Text>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={{alignSelf:'center',borderWidth:5,borderRadius:15}}>Go Back To Home</Text>
             </TouchableOpacity>
        </View>
        )
    }
}