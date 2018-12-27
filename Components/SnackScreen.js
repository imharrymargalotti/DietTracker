import React, { Component } from 'react';
import { Alert, Button, TextInput, View, Picker, Text, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import snackStyles from '../Styles/SnackStyles'


export default class SnackScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#54AAE9',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props); 
   this.state = { isLoading: true,};
  }


componentDidMount() {
    var myHeaders = new Headers();

    myHeaders.append('Content-Type','text/plain');

    return fetch(`http://cs-ithaca.eastus.cloudapp.azure.com/~agiesey/getSnack.php`, { method: 'GET',headers: myHeaders,})

    .then(response => response.json())
    .then(responseJson => {

    this.setState({ isLoading: false, dataSource: responseJson,},

function() {});})

.catch(error => {console.error(error);});}

_renderItem = dataSource => {return(
<View>
<Text style={snackStyles.phoneScreenListText}>ID: {dataSource.item.ID}{"\n"}
Name: {dataSource.item.name}{"\n"}Calories: {dataSource.item.calories}{"\n"}
Carbs: {dataSource.item.carbs} {"\n"} Protein: {dataSource.item.protien}{"\n"}Fat: {dataSource.item.fat}{"\n"}</Text>

</View>

);

}
render(){

return(

<View style={snackStyles.phoneScreen}>

<Text style={snackStyles.phoneSreenText}> {"\n"} {"\n"} All Healthy Snacks with {"\n"} Nurtition Facts: </Text>
<FlatList style={snackStyles.phoneScreenList} data = {this.state.dataSource} renderItem = {this._renderItem} />

</View>

);

}

}

