 
import { StyleSheet, Image , TextInput ,  Text, View, Dimensions  } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"  
export default function Employee() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

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


<View><Text    style={styles.Word}     >Employees</Text></View>
<View   style={{display : "flex",      marginTop : 2,  alignSelf : "flex-start"   ,  justifyContent : "center" , flexDirection : "row" , alignItems : "center" , justifyContent : "center" }}   ><Text  style={{ color : "gray"  ,    marginRight : 10}}  numberOfLines={1}>__________________________</Text></View>
<View  style={{backgroundColor : "orange", color : "white"    ,    width : 10 , height : 10  , borderRadius : 20 ,   }}   ></View>
</View>



    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -40 , height :windowHeight /1.8 } , styles.shadowProp]}>



<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />


<View>


<Text    style={styles.employeeName} >Usman Shahid</Text>
<Text    style={styles.Duration} >Employee Since 2022</Text>
<Text    style={styles.Id} >Employee ID 33445566</Text>

</View>

</View>


<View>
<View  style={styles.secondint}    >

<Text    style={styles.Duration}  >Total Scale:    <Text     style={styles.Id}    >167,987 Riyal </Text>   </Text>
<Text  style={styles.Duration}  >Rank :    <Text     style={styles.Id2}    >22nd </Text>   </Text>

</View>
<View>

<Text></Text>
</View>



</View>
<View>
<View  style={styles.secondint}    >

<Text    style={styles.Duration} > Option:     <Text     style={styles.Id5}    >Value  </Text>   </Text>
<Text    style={styles.Duration} >Rank :    <Text     style={styles.Id}    >22nd </Text>   </Text>

</View>
<View>

<Text></Text>
</View>



</View>
</View>

<View    style={styles.firstSeprater}>


<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://media.istockphoto.com/id/492789232/photo/content-young-arab-man-in-traditional-clothing.jpg?s=612x612&w=0&k=20&c=BmsD-FMVfZPqj5jndy3L_jOo6S-sTIZhsH2LCJmc7To='}}

      />


<View>


<Text    style={styles.employeeName} >Haris Ifthikar </Text>
<Text    style={styles.Duration} >Employee Since 2022</Text>
<Text    style={styles.Id} >Employee ID 33445566</Text>

</View>

</View>


<View>
<View  style={styles.secondint}    >

<Text     style={styles.Duration} >Total Scale:    <Text     style={styles.Id}    >167,987 Riyal </Text>   </Text>
<Text     style={styles.Duration} >Rank :    <Text     style={styles.Id2}    >22nd </Text>   </Text>

</View>
<View>

<Text></Text>
</View>



</View>
<View>
<View  style={styles.secondint}    >

<Text     style={styles.Duration} > Option:     <Text     style={styles.Id5}    >Value  </Text>   </Text>
<Text     style={styles.Duration} >Rank :    <Text     style={styles.Id}    >22nd </Text>   </Text>

</View>
<View>

<Text></Text>
</View>



</View>
</View>
  













{/*   */}





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



  Duration:{
   color  : "black"
  },
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
color : "black"
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
  iconDiv:{
display : "flex",
flexDirection : "row",
width : "100%", 
paddingLeft : 15 ,
marginBottom : 12, 
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
   elevation : 5   , 
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    borderBottomEndRadius : 12 , 
    borderBottomStartRadius :   12 ,
    marginTop : 50 ,
    borderColor : "black", 
    // borderWidth : 4,   
    padding : 30 ,
    backgroundColor : "color", 
      flexDirection :"column",  
      alignItems : "center"

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
