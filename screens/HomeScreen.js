import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import AppHeader from '../components/AppHeader'


export default class HomeScreen extends Component{
    render(){
        return(
         <View>
             <AppHeader title="News Letter"/>
             <TouchableOpacity
             style={styles.buttons}
             onPress={() => this.props.navigation.navigate('JokeScreen')}>
                <Text style={{fontSize:15,alignSelf:'center'}}>Read A Joke</Text>
             </TouchableOpacity>

             <TouchableOpacity
             style={styles.buttons}
             onPress={() => this.props.navigation.navigate('WeatherScreen')}>
                <Text style={{fontSize:15,alignSelf:'center'}}>Weather</Text>
             </TouchableOpacity>

             <TouchableOpacity
             style={styles.buttons}
             onPress={() => this.props.navigation.navigate('HoroscopeScreen')}>
                <Text style={{fontSize:15,alignSelf:'center'}}>Horoscope</Text>
             </TouchableOpacity>

             <TouchableOpacity
             style={styles.buttons}
             onPress={() => this.props.navigation.navigate('NewsScreen')}>
                <Text style={{fontSize:15,alignSelf:'center'}}>Top News</Text>
             </TouchableOpacity>
             <Text style={{textAlign: 'center', margin:5}}>Rate us</Text>
             <TouchableOpacity>
                 <Image
             style={{
                 width:50,
                 height:50,
                 marginTop: -5,
                 marginLeft: 100,
                 alignSelf:'center'
             }}
             source={require('../assets/thumbsdown.png')}
             />

             </TouchableOpacity>
             <TouchableOpacity>
                 <Image
             style={{
                 width:50,
                 height:50,
                 marginTop: -53,
                 marginLeft: -60,
                 alignSelf:'center'
             }}
             source={require('../assets/thumbsup.png')}
             />

             </TouchableOpacity>
         </View>
        )
    }
}

const styles = StyleSheet.create({
buttons:{
    alignSelf:'center',
    borderWidth:3,
    borderColor:"black",
    shadowOpacity:0.5,
    width:175,
    height:25,
    borderRadius:10
}
})