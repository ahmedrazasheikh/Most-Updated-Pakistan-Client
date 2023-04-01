 
import { Button,  Pressable , Modal, TouchableOpacity ,  StyleSheet, Image , TextInput ,  Text, View, Dimensions, ScrollView  } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import { useState } from 'react';
export default function Order() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 
const [modalVisible, setModalVisible] = useState(false);
const onPressFunction = ()=>{
  console.log("Ahmed raza");
  setModalVisible(!modalVisible)
}

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /5 }]}  >

    <View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
placeholder={"Search"}
    // value={value}
  />
  <Icon color={"black"} style={styles.icon} name="search1" size={20} />
</View>




<View style={styles.TextWord}     >


<View><Text    style={styles.Word}     >Orders </Text></View>
<View   style={{display : "flex",      marginTop : 2,  alignSelf : "flex-start"   ,  justifyContent : "center" , flexDirection : "row" , alignItems : "center" , justifyContent : "center" }}   ><Text  style={{ color : "gray"  ,    marginRight : 10}}  numberOfLines={1}>__________________________</Text></View>
<View  style={{backgroundColor : "orange", color : "white"    ,    width : 10 , height : 10  , borderRadius : 20 ,   }}   ></View>
</View>



    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
     >

       <TouchableOpacity     onPress={onPressFunction}  style={styles.Innerdiv1}  >


<View   style={styles.Innerdiv2} >



  
<View    style={styles.nameContant1}>


<Text    style={styles.name1} >Order Description </Text>
<Text    style={styles.tkf} >Customer ID  :123796</Text>
<Text   style={styles.tkf} >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>


<View    style={styles.nameContant1}>


<Text    style={styles.name1} >Delivery Description </Text>
<Text     style={styles.tkf} >Delivery ID  :123796</Text>
<Text  style={styles.tkf}   >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant1}>


<Text    style={styles.name1} >Delivery Description </Text>
<Text     style={styles.tkf} >Delivery  :123796</Text>
<Text  style={styles.tkf}  >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant1}>


<Text    style={styles.name1} >Delivery Description </Text>
<Text    style={styles.tkf} >Delivery  :123796</Text>
<Text  style={styles.tkf}  >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>



</View>




       </TouchableOpacity >



      </Modal>


{/* Second */}

<View  style={[styles.Box2, {width : windowWidth -50 , height :windowHeight /1.7 } , styles.shadowProp]}  >


<ScrollView  showsVerticalScrollIndicator={false} >



<View    style={styles.firstSeprater}   >
<TextInput
        style={styles.input2}
        placeholder="Search Customer"
        keyboardType="ascii-capable"
      />

<View   style={styles.iconDiv}    > 



<Pressable onPress={onPressFunction}>
<View    style={styles.nameContant}>


<Text    style={styles.name} >Order Description </Text>
<Text    style={styles.tkf} >Customer ID  :123796</Text>
<Text    style={styles.tkf}  >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
</Pressable>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 




<View    style={styles.nameContant}>


<Text    style={styles.name} >Order Description </Text>
<Text    style={styles.tkf} >Customer ID  :123796</Text>
<Text    style={styles.tkf} >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 




<View    style={styles.nameContant}>


<Text    style={styles.name} >Order Description </Text>
<Text    style={styles.tkf} >Customer ID  :123796</Text>
<Text     style={styles.tkf}  >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 




<View    style={styles.nameContant}>


<Text    style={styles.name} >Order Description </Text>
<Text    style={styles.tkf} >Customer ID  :123796</Text>
<Text  style={styles.tkf}  >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>
<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 




<View    style={styles.nameContant}>


<Text    style={styles.name} >Order Description </Text>
<Text     style={styles.tkf} >Customer ID  :123796</Text>
<Text   style={styles.tkf} >Date  : <Text     style={styles.Id}>12-02-2023</Text>  </Text>

</View>
<View    style={styles.nameContant}>


</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


</View>




  













{/*   */}





</ScrollView>
</View>




{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  }]}  >




  <View    style={styles.InnerDiv34}      >
    
<View><Icon name="select1" size={30} color="white" /></View>
<View><Icon name="message1" size={30} color="white" /></View>
<View><Icon name="home" size={30} color="white" /></View>
<View><Icon name="enviromento" size={30} color="white" /></View>
<View><Icon name="qrcode" size={30} color="white" /></View>

    
    
    </View>
    </View>

 


    </View>
  );
}

const styles = StyleSheet.create({


  tkf:{
color : "black"
  }, 

  nameContant1:{
    marginTop  : 25 , 
    paddingLeft  :  30 , 
// backgroundColor  : "red", 
  }, 
  setSize:{
    fontSize : 15,
    color : "black",
      }, 
      setSize1:{
    fontSize : 15,
    color : "black",
    fontWeight : "bold",
      }, 
      ModalInnerend:{
    // backgroundColor  :"red", 
    display : "flex",
     flexDirection : "row", 
     marginBottom  :10,
     justifyContent  : "space-between"
      }, 
    ModalInnerstart:{
    display : "flex", 
    justifyContent  : "center",
    padding  : 20 , 
    // backgroundColor  : "grey"
    }, 
      Innerdiv2:{
    width : "100%", 
    height : "70%", 
    borderTopLeftRadius : 40 , 
    borderTopRightRadius : 40 ,
    backgroundColor  : "white",
    // alignSelf  : "flex-end", 
    borderRadius  :10 , 
    zIndex :  122, 
      }, 
      Innerdiv1:{
    flex  : 1, 
    // display  : "flex",
    // height  : "100%", 
    justifyContent : "flex-end", 
    alignItems  : "center",
    // backgroundColor : "red",
    backgroundColor  : "rgba(0,0,0,0.5)", 
      }
    ,  
  inputContainer: {
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
    input: {
      height: 40,
      // margin: 20,
      borderWidth: 1,
      padding: 10,
      fontSize : 17 , 
      width  :300 , 
      backgroundColor :"white", 
      borderRadius : 20, 
    },
  plan:{
color :"#00308F"
  }, 

  name:{
    fontWeight : "bold", 
    color : "black",
marginRight : 25 ,
fontSize : 20  ,
  }, 
  name1:{
    fontWeight : "bold", 
marginRight : 25 ,
color : "black", 
fontSize : 20  ,
  }, 

  outerFlex:{
display : "flex", 
justifyContent : "flex-end", 
flexDirection : "row", 
alignItems : "center", 
  }, 
  ImagesFlex:{
    marginLeft :12 , 
display : "flex", 
flexDirection : "row"
  }, 
  buttoncv:{
backgroundColor : "red",
padding : 5 ,
color : "white", 
borderRadius : 5 ,   
  }, 
  buttoncv2
  
  :{
backgroundColor : "#61b33b",
padding : 5 ,
color : "white", 
borderRadius : 5 ,   
  }, 
  firstSeprater:{
    paddingTop : 12, 
    borderColor : "black", 
    borderBottomWidth : 1 ,
    width : "100%",
  }, 
  secondint:{
display : "flex", 
     
    justifyContent : "space-between", 
    alignItems : "center", 
flexDirection : "row", 
  }, 
  employeeName:{
fontWeight : "bold", 
fontSize : 15 , 
  }, 
  Id5:{
    color : "#12AD2B", 
  }, 
  Id:{
    color : "orange"
  },
  Id2:{
    color : "red"
  }

  ,
  stretch:{
    width: 60,
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75, 

 marginRight :7

  }, 
  stretch2:{
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75, 

 marginRight :7

  }, 
  nameContant:{
  

//  backgroundColor  : "red", 
display : "flex",
 flexDirection : "column",
  }, 
  iconDiv:{
display : "flex",
flexDirection : "row",
width : "100%", 
paddingLeft : 15 ,
marginBottom : 12, 
paddingTop : 20 ,
justifyContent : "flex-start" 

  }, 
  Number:{
fontSize : 14 ,
  }, 


BoldText:{
fontWeight  :"700"
}, 


  OuterText:{
    marginBottom : 20 
  }
,

  InnerMain:{
// display : "flex", 
// alignSelf :"flex-end", 
position : "absolute", 
bottom : 30  , 
paddingLeft : 20, 
} , 


MainchartBox:{
  display : "flex", 
  justifyContent : "space-between", 
 
  width : "100%", 
    position : "absolute", 
top : 30 
  },


  InnerText:{
  
alignSelf : "flex-end", 

  },      
  chartBox:{
position : "relative", 
flexDirection : "row", 
justifyContent : "space-between",
// width : "100%" 
  }, 

  Word:{
    // marginTop : 10 , 
    marginRight : 10 , 
    // marginLeft : 20, 
    fontSize : 24,
    color : "white"
  }
,

shadowProp: {
  borderTopEndRadius : 12, 
    borderTopStartRadius : 12,
    borderBottomEndRadius :12, 
    borderBottomStartRadius : 12,
},



InnerText:{
color :"orange"
}, 

  
TextWord:{
  marginTop : 10 , 
display : "flex", 
flexDirection : "row", 
justifyContent : "center",

alignItems : "center", 
  // backgroundColor : "red",
// alignSelf : "flex-start", 
color : "white" , 
}, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width  :290 , 
    backgroundColor :"white", 
    borderRadius : 20, 
  },
  input2:
  {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width  :"100%" , 
    borderColor : "gray", 
    backgroundColor :"white", 
    borderRadius : 10, 
  }, 
  container:{
    
    flex : 1, 
    justifyContent  : "space-between",
    alignItems : "center"
  }, 
  BoxText:{
color : "white"
  }, 
  firstRowofSquare:{
flexDirection : "row", 
marginBottom : 40,  

  }, 

  Box2:{ 
    elevation : 3 , 
     borderTopEndRadius : 12 , 
     borderTopStartRadius :   12 ,
     borderBottomEndRadius : 12 , 
     borderBottomStartRadius :   12 ,
     marginTop : 50 ,
     borderColor : "black", 
     // borderWidth : 4,   
     padding : 30 ,
       flexDirection :"column",  
 
   },  
  Box1:{
    // marginTop :24 , 
    // flex : 1, 
    justifyContent  :"center", 
    alignItems :"center", 
    borderBottomEndRadius : 12 , 
borderBottomStartRadius :   12 ,
    backgroundColor : "#005A9C", 
  }, 
  Box3:{
    justifyContent : "space-evenly",
    paddingLeft : 40 ,
    paddingRight : 40 , 
    alignItems : "center",
    flexDirection  : "row",
    width : "100%",
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    backgroundColor: "#005A9C",   
  }, 
  InnerDiv34:{
display :"flex", 
flexDirection : "row", 
justifyContent :"space-between",
alignItems : "center",
// backgroundColor : "red", 
width : "100%"

  }, 
  square: {
    width: 100,
    marginRight : 40,
    flex  : 1, 
    justifyContent :"center", 
    alignItems : "center", 
    height: 100,
    // 
    backgroundColor: "#005A9C",
    borderRadius : 15,
  },
});
