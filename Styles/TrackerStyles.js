import {StyleSheet} from 'react-native';

const trackstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  progress_container: {
    borderWidth: 6,
    borderColor: '#333',
    backgroundColor: '#ccc'
  },
    title:{
        fontSize: 40,
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
  progress_status: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }


});

 export default trackstyles;