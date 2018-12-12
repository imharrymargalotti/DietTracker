import {StyleSheet} from 'react-native';

const IStyles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        
    
      },

    topBox: {
        paddingTop: 200,
        alignItems: "center",
        
    },

    bottomBox:{
        paddingTop: 60,
        alignItems: "center"

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

})

export default IStyles;