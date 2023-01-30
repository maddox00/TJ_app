import React
, { useCallback } from "react";
import {  Button,Dimensions, Linking, StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import Modal from "react-native-modal";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const supportedURL = "https://www.surveymonkey.com/r/JTNBFTP";
const supportedURL2 = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=ebf6c328c2ec134e577da05dd6ba7e9f&gclsrc=3p.ds&msclkid=ebf6c328c2ec134e577da05dd6ba7e9f";
const supportedURL3 = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=ebf6c328c2ec134e577da05dd6ba7e9f&gclsrc=3p.ds&msclkid=ebf6c328c2ec134e577da05dd6ba7e9f";
const supportedURL4 = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=ebf6c328c2ec134e577da05dd6ba7e9f&gclsrc=3p.ds&msclkid=ebf6c328c2ec134e577da05dd6ba7e9f";
const supportedURL5 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
const supportedURL6 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
const supportedURL7 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
const supportedURL8 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
const supportedURL9 = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=ebf6c328c2ec134e577da05dd6ba7e9f&gclsrc=3p.ds&msclkid=ebf6c328c2ec134e577da05dd6ba7e9f";
const unsupportedURL = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=e20fa6d12eee1ca844b7c5a4249e42fe&gclsrc=3p.ds&msclkid=e20fa6d12eee1ca844b7c5a4249e42fe";
const SettingsScreen = () => {
const OpenURLButton = (
  {
  url
  , children,
 
  }
  ) => {
  const handlePress
  = useCallback(async () =>
  {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
  await Linking.openURL(url);
  } else{
    console.log('dont know how to open this URL: ${URL}');
  }
  }, [url]);
   
  return <Button
  title={children}
  onPress={handlePress}
  color= "#0085CC"/>;
  
  };
  const [input1, setInput1] = React.useState()
  const [input2, setInput2] = React.useState()
  const [input3, setInput3] = React.useState()
  const [input4, setInput4] = React.useState()
  const [isModalVisible, setModalVisible] = React.useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

if(typeof supportedURL === 'string'){
  console.log('type is a string');
} else{
  console.log('not a string');
}
function isValidUrl(string){
  try{
    new URL(string);
    return true;
  } catch (err){
    return false;
  }
}
console.log(isValidUrl(supportedURL));



return (
<SafeAreaView style={styles.container}>
<View style={styles.popPlace} > 
     <Text style={styles.modalText} onPress={toggleModal}> Change Link</Text>
      </View>
      <Modal isVisible={isModalVisible}>
       <View style={styles.popPlace2}>
        <Text style={styles.modalText2} onPress={toggleModal}>Hide Link</Text>
       </View>
          
          
          <View style={styles.linkInputBox}>
          <View style={styles.rowContainer}>
            <Text style={styles.nameBox}>
            Survey 1:
            </Text>
            
          <View style={styles.linkBox}>
          <TextInput
                   style={styles.input}
                   onChangeText={(text) => setInput1(text)}
                   value={input1}
                   placeholder=''
                   />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.nameBox}>
            Survey 2:
            </Text>
            
          <View style={styles.linkBox}>
          <TextInput
                   style={styles.input}
                   onChangeText={(text) => setInput2(text)}
                   value={input2}
                   placeholder=''
                   />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.nameBox}>
            Survey 3:
            </Text>
            
          <View style={styles.linkBox}>
          <TextInput
                   style={styles.input}
                   onChangeText={(text) => setInput3(text)}
                   value={input3}
                   placeholder=''
                   />
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.nameBox}>
            Survey 4:
            </Text>
            
          <View style={styles.linkBox}>
          <TextInput
                   style={styles.input}
                   onChangeText={(text) => setInput4(text)}
                   value={input4}
                   placeholder=''
                   />
            </View>
          </View>
       </View>
      </Modal>
<View>
<Text style={styles.surveyTittle}>
    Surveys
</Text>
<View style={styles.surveyContainer}>
  <View style={styles.surveyBox}>
  <Text style={styles.surveyInput}
     onPress={() => {
      Linking.openURL(input1+'');
    }}>
Survey 1
 </Text>
</View>
</View> 
</View>
<View>
<View style={styles.surveyContainer}>
<View style={styles.surveyBox}>
<Text style={styles.surveyInput}
     onPress={() => {
      Linking.openURL(input2+'');
    }}>
 Survey 2
 </Text>
</View>
</View>
</View>
<View>
<View style={styles.surveyContainer}> 
<View style={styles.surveyBox}>
<Text style={styles.surveyInput}
     onPress={() => {
      Linking.openURL(input3+'');
    }}>
 Survey 3
 </Text>
</View>
</View>
</View>
<View>
<View style={styles.surveyContainer}>
<View style={styles.surveyBox}>
<Text style={styles.surveyInput}
     onPress={() => {
      Linking.openURL(input4+'');
    }}>
  Survey 4
 </Text>
</View>
</View>
</View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    
    backgroundColor:'#d6eaf8'
},
surveyTittle:{
    fontSize: deviceHeight/15,
      textAlign: 'center',
    fontWeight: 'bold',
    color: '#0085CC',
       marginTop:deviceHeight/50,
        fontStyle:'normal',
},
 surveyContainer:{  
    marginLeft:deviceWidth/20,
    
   
},
surveyBox:{
  height: deviceHeight/10,
  width: deviceWidth/1.3,
margin:'8%',
  marginTop:deviceHeight/40,
  
 
  borderRadius:30,
 backgroundColor:'#0085CC',
 alignItems:'center',
 justifyContent:'center',
},
surveyInput:{
  color:'white',
  fontSize:deviceHeight/25,
textAlign:'center',

fontWeight:'bold',
justifyContent:'center',
},
popPlace:{
  height: deviceHeight/11,
  width: deviceWidth/5.4,
  backgroundColor:'#0085CC',
  marginLeft:deviceWidth/1.22,
  borderRadius:12,
  justifyContent:'center',
},
popPlace2:{
  height: deviceHeight/18,
  width: deviceWidth/1.1,
  backgroundColor:'#0085CC',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:35,
},
modalText:{
  color:'white',
  fontSize:deviceHeight/45,
  textAlign:'center',
  justifyContent:'center',
  fontWeight:'bold',
  
},
modalText2:{
  color:'white',
  fontSize:deviceHeight/40,
  textAlign:'center',
  justifyContent:'center',
  fontWeight:'bold',
},
linkInputBox:{
  height: deviceHeight/2.3,
  width: deviceWidth/1.1,
  borderRadius:20,
  borderWidth:2,
  backgroundColor:'white',
  marginTop:deviceHeight/10,
  borderWidthColor:'black',
},
linkBox:{
  height: deviceHeight/17,
  width: deviceWidth/1.9,
  borderWidth:1,
  borderWidthColor:'black',
  marginTop:deviceHeight/33,
},
nameBox:{
  fontSize:deviceHeight/35,
  color:'black',
  margin:'5%',
  marginTop:deviceHeight/25,
  
},
rowContainer:{
  flexDirection:'row',
},
});
export default  SettingsScreen;