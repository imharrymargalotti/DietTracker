import React, { Component } from 'react';
import {ActivityIndicator, Alert, Button, TextInput, View,  Image, Text } from 'react-native';
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
      dataSource: '',
      isLoading: false
    };
  }
  _checkUser(){
    if (this.state.dataSource == 'no user'){
      Alert.alert('Incorrect username or password');
    }else{
      this.props.navigation.navigate('Home');
    }
  }

   onLogin = () => {
     this.props.navigation.navigate('Home');
    //  this.setState({
    //    isLoading: true
    //  });
    // var url = 'http://cs-ithaca.eastus.cloudapp.azure.com/~hmargalotti/php/login.php'
    // var data = {username: this.state.username, password: this.state.password};
    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    // }).then(res => res.json())
    // .then(responseJson => {
    //   this.setState({
    //    dataSource: responseJson,
    //    isLoading: false
    //   });
    //   this._checkUser();
    //     })
    // .catch(error => Alert.alert('Error:'+ error));
    }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, marginTop:100, marginLeft:50}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
     <View style={styles.container}>

          <View style={styles.logoBox}>
              <Image style={styles.logoImg}
                  source={require("../assets/IthacaCollegeLogo.png")}
              />
              <Text style={styles.logoText}>
                Diet Tracker
              </Text>
          </View>
          <View style={styles.logIn}>

                  <TextInput
                    value={this.state.username}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(username) => this.setState({username})}
                    placeholder={'Username'}
                    style={styles.input}
                  />
                  <TextInput
                    value={this.state.password}
                    underlineColorAndroid="transparent"
                    textAlign={'center'}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                  />
                  <View style={styles.buttonBox}>
                        <Button
                          title={'Login'}
                          onPress={this.onLogin}
                        />
                  </View>


          </View>
      </View>
    );
  }
}
