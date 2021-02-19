
import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'



export default class NewsScreen extends Component{
    render(){
        return(
        <View>
            <Text style={{fontSize:50,alignSelf:'center'}}> Biden pledges billions to help poor countries get COVID vaccines</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>In a reversal of his predecessor's U.S.-centric approach to tackling the coronavirus pandemic, President Biden is ramping up pressure on America's wealthiest allies Friday to get COVID-19 vaccine doses into poor and developing countries. Mr. Biden told his fellow G7 leaders during a virtual summit that the U.S. would contribute up to $4 billion to COVAX, the World Health Organization-backed initiative aimed at ensuring equitable access to vaccines around the world.</Text>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={{alignSelf:'center',borderWidth:5,borderRadius:15}}>Go Back To Home</Text>
             </TouchableOpacity>
        </View>
        )
    }
}