import React from 'react';
import {Text, View, FlatList, Button, TouchableHighlight } from 'react-native'
import CStyles from '../Styles/CalendarStyles'


export default class CalendarScreen extends React.Component {
    static navigationOptions = {
        title: 'Schedule',
        headerStyle: {
          backgroundColor: '#b3e1fc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: "#000000"
          },
      };
        constructor(props){
            super(props);
            const willFocusSubscription = this.props.navigation.addListener(
                'willFocus',
                this._updateState
            )

            this.state = {
                hasUpdated:  false,
                data: [
                    { key: '1' ,Day: 'Monday', 
                                Time: '12:45',
                                Task: 'Bio 1040',
                                Reminder: 'Drink water'}, 
                    { key: '2', Day: 'Monday', 
                                Time: '1:45',
                                Task: 'Chem 3040',
                                Reminder: 'Eat Lunch'}, 
                    { key: '3', Day: 'Monday',
                               Time: '3:45',
                               Task: 'Practice',
                               Reminder: 'Drink water' }, 
                    { key: '4',               },
                    
                    { key: '5', Day: 'Monday', 
                                Time: '6:45',
                               Task: 'Dinner',
                               Reminder: 'Eat more veggies' },
                ],

        }
        

         
            
    }

    // componentDidMount(){
    //     return fetch('http://cs-ithaca.eastus.cloudapp.azure.com/~barr/getNames.php')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    
    //         this.setState({
    //           isLoading: false,
    //           data:responseJson ,
    //         }, function(){
    
    //         });
    
    //       })
    //       .catch((error) =>{
    //         console.error(error);
    //       });
    //   }
    
    


    _renderItem = data => {
        return(
        <TouchableHighlight style = {CStyles.calendarItem} 
         onPress={() => this.props.navigation.navigate('CalInfo')}>
            <Text style={CStyles.text}>
                        {data.item.Day} {'\n'}{data.item.Time} {'\n'}{data.item.Task}{'\n'}{data.item.Reminder}
                    </Text>
        </TouchableHighlight> 
        
        )};

        renderSeparator = () => (
            <View
              style={{
                backgroundColor: 'red',
                height: 0.5,
              }}
            />
          );

      
            _updateState = payload => {
                const Firstname = this.props.navigation.getParam('FirstName', 'No name');
                if( Firstname != 'No name'){
                const Firstname = this.props.navigation.getParam('FirstName', 'No name');
                const Lastname = this.props.navigation.getParam('LastName', 'No name');
                const email = this.props.navigation.getParam('EmailAddy', 'No mail');
                const age = this.props.navigation.getParam('Age', 'No age');
                const updated = this.props.navigation.getParam('updated', 'false')
                this.setState({count: this.state.count + 1});
                var newData = [];
                newData = this.state.data.slice();
                newData.push({ key: '5', FirstName: Firstname, LastName: Lastname, 
                                Email: email, Age: age})
                
                this.setState({data: newData});
                }
              }

           
        
    
    render() {
        const Firstname = this.props.navigation.getParam('FirstName', 'No name');
                const Lastname = this.props.navigation.getParam('LastName', 'No name');
                const email = this.props.navigation.getParam('EmailAddy', 'No mail');
                const age = this.props.navigation.getParam('Age', 'No age');
                const updated = this.props.navigation.getParam('updated', 'false')
                var newData = [];
                newData = this.state.data.slice();
                newData.push({ key: '5', FirstName: Firstname, LastName: Lastname, 
                                Email: email, Age: age})
        return (
                <View style={CStyles.container}>
                    <FlatList data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    
                     />
                </View>
            );
        }
}