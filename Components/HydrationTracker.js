import React, { Component } from 'react';
 
import {
  Text,
  View,
  Animated,
  Dimensions,
  Button,
  TextInput
} from 'react-native';

import trackstyles from '../Styles/TrackerStyles'

var { width } = Dimensions.get('window');
var available_width = width - 40 - 12;

export default class HydrationTracker extends Component {
   
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      progress: 0
    };
  }
    
    render(){
    return (
        <View style={trackstyles.container}>
        <Text style={trackstyles.title}>Hydration Tracker</Text>
          <View style={trackstyles.progress_container}>
            <Animated.View
              style={[this.getProgressStyles.call(this)]}
            > 
            </Animated.View>
          </View>
          <Text style={trackstyles.progress_status}>
          { this.state.progress }
          </Text>
          <TextInput
          style={{height: 40,flex: 1, alignItems: 'center', justifyContent: 'center' }}
          placeholder="Enter Amount"
        />
        <Button
            title="Add"
        />
        </View>
    );
}

componentDidMount() {
    this.progress.setValue(0);
    this.progress.addListener((progress) => {
      this.setState({
        progress: parseInt(progress.value) + ' FL OZ'
      });
    });
 
    Animated.timing(this.progress, {
      duration: 1000,
      toValue: 30
    }).start(() => {
      this.setState({
        progress: '30 FL OZ'
      })
    });
}

getProgressStyles() {
  var animated_width = this.progress.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [0, available_width / 2, available_width]
  });
  //red -> orange -> green
  const color_animation = this.progress.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ['rgb(0, 191, 250)', 'rgb(0, 191, 250)', 'rgb(0, 191, 250)']
  });
 
  return {
    width: animated_width,
    height: 300, //height of the progress bar
    backgroundColor: color_animation
  }
}
 
}
