import React, { Component } from 'react';
import { Alert, Button, TextInput, View, Picker } from 'react-native';
import IStyles from '../Styles/InputStyles'

export default class CalendarScreenInFo extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#54AAE9',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }
  

  render() {
    return (
     
     <View style={IStyles.container}>
            <View style={IStyles.topBox}>
            
                  <TextInput
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Water'}
                    style={IStyles.input}
                  />
                  
                  <View style={IStyles.buttonBox}>
                        <Button 
                          title={'Submit'}
                          onPress={() => this.props.navigation.navigate('Home')}
                        />
                  </View>
          </View>
           <View style = {IStyles.bottomBox}>
                  <TextInput
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Calories'}
                    secureTextEntry={true}
                    style={IStyles.input}
                  />
                  <View style={IStyles.buttonBox}>
                        <Button 
                          title={'Submit'}
                          onPress={() => this.props.navigation.navigate('Home')}
                        />
                  </View>
              
            
          </View>
      </View>
    );
  }
}