 
import { StyleSheet, TextInput , TouchableOpacity ,  Image ,   Text, View, Dimensions  } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
export default function ReversiblePageSecond({navigation}) {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

const TransferRevenue = ()=>{
  navigation.navigate('Ranking')
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
  <Icon     color={"black"} style={styles.icon} name="search1" size={20} />
</View>



<View style={styles.TextWord}     >


<View><Text    style={styles.Word}     >Recivable    </Text></View>
<View   style={{display : "flex",      marginTop : 2,  alignSelf : "flex-start"   ,  justifyContent : "center" , flexDirection : "row" , alignItems : "center" , justifyContent : "center" }}   ><Text  style={{ color : "gray"  ,    marginRight : 10}}  numberOfLines={1}>__________________________</Text></View>
<View  style={{backgroundColor : "orange", color : "white"    ,    width : 10 , height : 10  , borderRadius : 20 ,   }}   ></View>
</View>


    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -60 , height :windowHeight /1.7 } , styles.shadowProp]}>






<View style={styles.MainchartBox}       >

<View style={styles.chartBox}      >



{/* Chart1 */}
<TouchableOpacity       onPress={TransferRevenue}    style={styles.centerContent}  >
{/* Here Put The Chart  */}

<Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/3723/3723476.png'}}

      />


<Text  style={styles.BoldText} >Not Due </Text>
<Text  style={styles.Number} >123,554</Text>
<Text    style={{color  :"black"}}>Riyal</Text>
</TouchableOpacity>

{/* Second Chart  */}
<TouchableOpacity       onPress={TransferRevenue}    style={styles.centerContent} >
{/* Here Put The Chart  */}
<Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/3723/3723476.png'}}

      />

<Text  style={styles.BoldText} > Due </Text>
<Text  style={styles.Number} >123,554</Text>
<Text    style={{color  :"black"}} >Riyal</Text>
</TouchableOpacity>


</View>
<View     style={styles.alignselfd}   >


{/* Thirs  Chart  */}
<TouchableOpacity        onPress={TransferRevenue}   style={styles.centerContent1}>
{/* Here Put The Chart  */}
<Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/3723/3723476.png'}}

      />
<Text  style={styles.BoldText} >   Over Due </Text>
<Text  style={styles.Number} >123,554</Text>
<Text   style={{color  :"black"}} >Riyal</Text>
</TouchableOpacity>

</View>

</View>







{/*   */}

<View      style={[styles.InnerMain, {width : "100%"   } ]}           >
  <Text    style={styles.OuterText}  >Total Invoices  <Text  style={styles.InnerText}   >2322</Text>  </Text>
  <Text    style={styles.colorBlack} >Total Purchase   <Text  style={styles.InnerText}   >123456 Riyal        </Text>    </Text>
</View>



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


  colorBlack:{
color : "black"
  }, 
  centerContent:{
display : "flex", 
justifyContent :"center", 
alignItems : "center"
  }, 
  alignselfd:{
    marginTop : 10 , 
alignSelf  :"flex-start"
  }, 

  centerContent1:{
    display : "flex", 
    justifyContent :"center", 
    alignItems : "center"

  }, 

  tinyLogo: {
    width: 100,
    height: 100,
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
  
  Number:{
fontSize : 14 ,
color : "black"
  }, 


BoldText:{
fontWeight  :"700", 
color : "black"
}, 


  OuterText:{
    marginBottom : 5, 
    color : "black"
  }
,

  InnerMain:{
// display : "flex", 
// alignSelf :"flex-end", 
position : "absolute", 
bottom : 10  , 
paddingLeft : 20, 
} , 


MainchartBox:{
  display : "flex", 
  justifyContent : "space-between", 
 
  width : "100%", 
    position : "absolute", 
top : 30,  

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
    marginLeft : 20, 
    fontSize : 24,
    color : "white"
  }
,
shadowProp: {
  

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
    backgroundColor : "white",
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
