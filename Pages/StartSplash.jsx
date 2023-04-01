
import { MotiPressable  } from 'moti/interactions'
import { MotiView , useAnimationState } from 'moti';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable, 
  useColorScheme,
  View,
  Button,
  TouchableOpacity, 
  Alert
} from 'react-native';
import { useState } from 'react';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function SplashScreen({navigation}) {
console.log('Working Properly!!');
const [plus,setPlus] = useState(false)
const [changeHandler,setChangeHandler ] = useState("none")

const ahmedFunc = ()=>{
  setPlus(!plus)
 if (changeHandler === "none") {
  setChangeHandler("flex")
} 
 else if (changeHandler === "flex") {
  setChangeHandler("none")
} 





}




const pageTransfer = ()=>{
  console.log(`Page Transfer `)
  navigation.navigate('homepage')
}



// First   
const useFadeInDown = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      position : "relative", 
      bottom : -100 ,
      left : 100 ,  
    },
    to: {
      opacity: 1,
      // translateY: 0,
      bottom : 0 ,
      left :-7 ,  
    },
  });
};
const fadeInDown = useFadeInDown();
const onPress = () => {
  fadeInDown.transitionTo((state) => {
    if (state === 'from') {
      return 'to';
    } else {
      return 'from';
    }
  });

};



// Second 
const useFadeInDownSecond = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      position : "relative", 
      bottom : -100 ,
      left : -100 ,

    },
    to: {
      opacity: 1,
      bottom : 0 ,
      left : 8 ,   
    },
  });
};
const fadeInDownSeconod = useFadeInDownSecond();
const onPressSecond = () => {
  fadeInDownSeconod.transitionTo((state) => {
    if (state === 'from') {
      return 'to';
    } else {
      return 'from';
    }
  });

};


// Third 

const useFadeInDownThird = () => {
  return useAnimationState({
    from: {
      opacity: 0,
      position : "relative", 
      bottom : -100 , 

    },
    to: {
      opacity: 1,
      bottom : 100 ,
    },
  });
};
const fadeInDownThird = useFadeInDownThird();
const onPressThird = () => {
  fadeInDownThird.transitionTo((state) => {
    if (state === 'from') {
      return 'to';
    } else {
      return 'from';
    }
  });

};



const raza = ()=>{
  onPress()
  onPressSecond()
  onPressThird()
  ahmedFunc()
}




  return (
     <View style={styles.container}>

<View  style={styles.outerMain   }   >

<View  style={styles.Innerone}   >



<Pressable  onPress={pageTransfer}  >


<MotiView     state={fadeInDown}   style={styles.ball4} >

  <Text     style={styles.plusIcon2}         >2</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>
  </MotiView>
</Pressable>

  




  <Pressable     onPress={pageTransfer}   >

  <MotiView          state={fadeInDownThird}           style={styles.ball2} >

  <Text     style={styles.plusIcon2}         >1</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>


  </MotiView>

  </Pressable>





  <Pressable     onPress={pageTransfer}>

  <MotiView     state={fadeInDownSeconod}  style={styles.ball3} >

<Text     style={styles.plusIcon2}         >3</Text>
<Text     style={styles.plusIcon2}         >Branch </Text>
</MotiView>

  </Pressable>

  





</View>

<View      style={styles.InnerSecond} >


<MotiPressable    onPress={raza}       style={styles.ball}>
<Text        style={styles.SetIconSize}    > {plus ? "+" : "x"}</Text>
</MotiPressable>
</View>


</View>




















     





    </View>
  
  );
}

const styles = StyleSheet.create({

  SetIconSize:{
fontSize : 30 ,
marginRight : 7  , 
    color : "white", 
  }, 
  plusIcon2 : {
    fontSize: 20, 
    color : "white"
      }, 
  plusIcon:{
    fontSize: 5, 
    // marginRight : 5, 
      }, 
  InnerSecond: {
// backgroundColor : "pink",
  } ,  


  Innerone:{ 
  


    // display : "none", 
  flexDirection : "row",
// backgroundColor : "yellow", 
  }, 




  outerMain:{
    height : "50%", 
// backgroundColor : "red", 
// borderColor : "black", 
// borderWidth: 20 , 
display : "flex", 
// flexDirection : "", 
justifyContent : "center",
alignItems : "center", 

  }, 

  mainPart:{
flex :1 , 
alignItems : "center",
justifyContent : "flex-start" , 
    backgroundColor : "red", 
  }, 
button:{
  backgroundColor : "red"
},


container: {
  flex: 1,
justifyContent : "center"
},
FirstBall:{
backgroundColor :"red", 
justifyContent : "center",
flexDirection :"column",    
alignItems : "center", 
}, 
secondBalls1:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
// display :{changeHandler}

},
secondBalls2:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
marginBottom : 70, 

// marginTop : 20, 
},
secondBalls3:{
justifyContent : "center",   
alignItems : "center", 
flexDirection : "row" , 
},


  plusIcon2 : {
fontSize: 20, 
color : "white"
  }, 


  ball3:{
    width: 100,
    height: 100,
      alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  },
  
  ball2:{
    width: 100,
    height: 100,
    alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  }, 
  plusIcon:{
    fontSize: 34, 
    color : "white", 
    marginRight : 5, 
      }, 

  ball: {
    width: 100,
    height: 100,
      alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
    color : "white",
  },
  ball4: {
    width: 100,
    height: 100,
      alignItems : "center",
    justifyContent : "center" , 
    borderRadius: 100,
    backgroundColor: '#005A9C',
  },
  plusIcon2 : {
    fontSize: 20, 
    color : "white"
      }, 
});

export default SplashScreen  ;