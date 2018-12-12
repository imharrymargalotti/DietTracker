import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#54AAE9',
    },
  
    logIn:{
      paddingTop: 300,
      alignItems: 'center',
    },
  
    logoBox: {
      paddingTop: 200,
      alignItems: "center",
      paddingTop: 50
  
    },
  
    logoImg:{
      
      width: 100, 
      height: 100
    },
  
    logoText:{
      fontSize:30,
      paddingTop: 50
  
    },
  
  input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center"
    },
  
    buttonBox:{
      paddingTop: 10,
      width: "70%",
    }
  });

  export default styles;