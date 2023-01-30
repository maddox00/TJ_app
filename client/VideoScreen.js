import React
, { useCallback } from "react";
import {  Button,Dimensions, Linking, StyleSheet, View, Text, SafeAreaView, TextInput, TouchableHighlight } from "react-native";
import Modal from "react-native-modal";

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;


const DetailsScreen = () => {
  const supportedURL =  '';
  const supportedURL2 = '';
  const supportedURL3 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL4 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL5 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL6 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL7 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL8 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const supportedURL9 = "https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep";
  const unsupportedURL = "https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=e20fa6d12eee1ca844b7c5a4249e42fe&gclsrc=3p.ds&msclkid=e20fa6d12eee1ca844b7c5a4249e42fe";
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
  

  
 // https://www.youtube.com/watch?v=cwyJHy8zaE4&ab_channel=EMTprep
 //https://www.surveymonkey.com/welcome/sem/?program=7013A000000mweBQAQ&utm_bu=CR&utm_campaign=71700000059045632&utm_adgroup=58700005410222026&utm_content=43700049190995539&utm_medium=cpc&utm_source=bing&utm_term=p49190995539&utm_kxconfid=s4bvpi0ju&gclid=e20fa6d12eee1ca844b7c5a4249e42fe&gclsrc=3p.ds&msclkid=e20fa6d12eee1ca844b7c5a4249e42fe
 
 
 const link = input1
 
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
            Video 1:
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
            Video 2:
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
            Video 3:
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
            Video 4:
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
<Text style={styles.videoTittle}>
Training Videos
</Text>
<View style={styles.videoContainer}>
  <View style={styles.videoBox}>
    <Text style={styles.videoInput}
     onPress={() => {
      Linking.openURL(input1+'');
    }}>
Video 1
</Text>
</View>



<View style={styles.videoBox}>
<Text style={styles.videoInput}
     onPress={() => {
      Linking.openURL(input2+'');
    }}>
 Video 2
 </Text>
</View>
</View>
</View>
<View>
<View style={styles.videoContainer}>
  <View style={styles.videoBox}>
  <Text style={styles.videoInput}
     onPress={() => {
      Linking.openURL(input3+'');
    }}>
 Video 3
 </Text>
</View>


<View style={styles.videoBox}>
<Text style={styles.videoInput}
     onPress={() => {
      Linking.openURL(input4+'');
    }}>
 Video 4
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
    fontFamily:'',
    backgroundColor:'#d6eaf8'
},
videoTittle:{
    fontSize: deviceHeight/15,
      textAlign: 'center',
    fontWeight: 'bold',
    color: '#0085CC',
       marginTop:deviceHeight/38,
        
       
},
 videoContainer:{
    flexDirection:'row'
},
videoBox:{
  height: deviceHeight/6,
  width: deviceWidth/2.7,
    borderWidth:1,
    margin:'5%',
    marginTop:deviceHeight/15,
   backgroundColor:'#0085CC',
   aligntems:'center',
   justifyContent:'center',
   marginLeft:deviceWidth/15,
   borderRadius:35,
   
},
videoInput:{
color:'white',
fontSize:deviceHeight/25,
textAlign:'center',
fontWeight:'bold',

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
  fontSize:deviceHeight/30,
  color:'black',
  margin:'5%',
 marginTop:deviceHeight/30,
},
rowContainer:{
  flexDirection:'row',
},
});
export default  DetailsScreen;