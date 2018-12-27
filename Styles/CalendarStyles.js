
import {StyleSheet} from 'react-native';



 const CStyles = StyleSheet.create({
 
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    alignSelf: 'stretch',

  },

  calendarItem: {
      marginTop: 10,
      marginRight: 45,
      marginLeft:45,
      borderRadius: 20,
      borderWidth: 0.5,
      borderColor: '#ffffff',
      backgroundColor: '#b3e1fc',
      shadowColor: '#000000',
      
    },

  hide: {
    backgroundColor: '#000000'
  },
  input: {
    margin: 15,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#000000',
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white'

  },
  text:{
      color: 'black',
      margin: 10,
      fontWeight: 'bold',
      fontSize:20
  },

 button: {
    marginTop: 30,
    marginBottom: 30,
    height: 40,
    width: '50%',
    justifyContent: 'center',
    marginLeft: 80,
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },

   
    
   


  }
 
});

export default CStyles;