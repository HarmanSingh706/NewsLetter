import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'



export default class JokeScreen extends Component{
    render(){
        return(
        <View>
            <Text style={{fontSize:50,alignSelf:'center'}}>Q: What is the hardest shape to get out of? A: Tell me. Q: The trap-azoid.</Text>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Text style={{alignSelf:'center',borderWidth:5,borderRadius:15}}>Go Back To Home</Text>
             </TouchableOpacity>
        </View>
        )
    }
}