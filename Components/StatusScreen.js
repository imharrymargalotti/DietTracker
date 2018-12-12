import React, { Component } from "react";
import {View, Text} from 'react-native';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import SStyles from "../Styles/StatusStyles";

const data = [
    {quarter: 1, earnings: 130},
    {quarter: 2, earnings: 165},
    {quarter: 3, earnings: 142},
    {quarter: 4, earnings: 190}
  ];

class StatusScreen extends Component {
  
  render() {
    return (
    
      <View>
          <View style = {SStyles.header} >
            <Text style = {SStyles.headerText}>
              Diet Tracker 
            </Text>
          </View>
          <View style={{paddingTop: 200}}>
          
                    <VictoryChart
                        // domainPadding will add space to each side of VictoryBar to
                        // prevent it from overlapping the axis
                        domainPadding={20}>
                        <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Mon", "Tues", "Wed", "Thurs"]}
                        />
                        <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (`${x}ml`)}
                        />
                        <VictoryBar
                        data={data}
                        x="quarter"
                        y="earnings"
                        />
                </VictoryChart>
          </View>
      </View>
       
    );
  }
}

export default StatusScreen

