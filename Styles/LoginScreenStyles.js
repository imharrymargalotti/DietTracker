import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  
    logIn:{
      paddingTop: 200,
      alignItems: 'center',
    },
  
    logoBox: {
      paddingTop: 200,
      alignItems: "center",
      paddingTop: 50
  
    },
  
    logoImg:{
      
      width: 150, 
      height: 150
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