import React, { Component } from 'react';
import { Alert, Button, TextInput, View,  Image, Text } from 'react-native';
import styles from '../Styles/LoginScreenStyles'

export default class LoginScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#54AAE9',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
     
     <View style={styles.container}>

          <View style={styles.logoBox}>
              <Image style={styles.logoImg}
                  source={require("../assets/IthacaCollegeLogo.png")}
              />
              <Text style={styles.logoText}>
                Diet App
              </Text>
          </View>
          <View style={styles.logIn}>
            
                  <TextInput
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                  />
                  <TextInput
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  <View style={styles.buttonBox}>
                        <Button 
                          title={'Login'}
                          onPress={() => this.props.navigation.navigate('Home')}
                        />
                  </View>
              
            
          </View>
      </View>
    );
  }
}