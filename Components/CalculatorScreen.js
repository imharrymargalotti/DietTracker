import React, {Component} from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

export	default	class	CalculatorScreen	extends	Component	{
render()	{
let	pic	=	{	
uri:	
'https://www.freeiconspng.com/uploads/calculator-icon-10.png'
};		
return	(
<View	style={{alignItems:	'center',	marginTop:	100}}>
<Text>Expected Calories Burned Calculator </Text>
<Image	source={pic}	style={{width:	300,	height:	300}}/>
</View>
);		
}
}