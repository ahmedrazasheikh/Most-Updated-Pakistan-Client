import { StyleSheet,     Image ,  TouchableOpacity , TextInput ,  Text, View, Dimensions  } from 'react-native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import Icon from "react-native-vector-icons/AntDesign"

export default function KPLSecondThird({navigation}) {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

const pageTransfer = ()=>{
  navigation.navigate('Order')
}




const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

  return ( 


  <View style={styles.container}>

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


<View><Text    style={styles.Word}     >KPI's   </Text></View>
<View   style={{display : "flex",      marginTop : 2,  alignSelf : "flex-start"   ,  justifyContent : "center" , flexDirection : "row" , alignItems : "center" , justifyContent : "center" }}   ><Text  style={{ color : "gray"  ,    marginRight : 10}}  numberOfLines={1}>__________________________</Text></View>
<View  style={{backgroundColor : "orange", color : "white"    ,    width : 10 , height : 10  , borderRadius : 20 ,   }}   ></View>
</View>



    </View>



{/* Second */}
<TouchableOpacity   onPress={pageTransfer} style={[styles.Box2, {width : windowWidth -60 , height :windowHeight /1.9  } , styles.shadowProp]}>






<View style={styles.MainchartBox}       >


{/* <Text  style={styles.Heading}     >Manager</Text> */}
<View style={styles.chartBox}      >



{/* Chart1 */}
<View style={styles.Founder}    >
{/* */}
<View style={styles.setThese}  >
<Text  style={styles.bold}  >Total Purchase   </Text>
<Text  style={styles.colorBlack} >134,222 Riyal</Text>
</View>

{/* Here Put The Chart  */}

<Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1810/1810720.png'}}

      />  

</View>

{/* Second Chart  */}
<View   style={styles.Founder}  >
{/* Here Put The Chart  */}

<View   style={styles.setThese}>

<Text  style={styles.bold}  >Credit Score  </Text>
<Text  style={styles.colorBlack} >87%</Text>
</View>

<Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1810/1810720.png'}}

      />  
</View>


</View>
{/* <Text  style={styles.Heading}     >Salesman</Text> */}
<View style={styles.chartBox}      >



{/* Chart1 */}
<View  style={styles.Founder}     >


  <View style={styles.setThese} >

<Text  style={styles.bold}  >Reaction Time </Text>
<Text style={styles.colorBlack}>1hr 30m</Text>
  </View>
  <Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1810/1810720.png'}}

      />  

</View>

{/* Second Chart  */}
<View     style={styles.Founder}   >
  <View  style={styles.setThese} >

<Text  style={styles.bold}  >Completion Time </Text>
<Text    style={styles.colorBlack}>87%</Text>
  </View>
  <Image
        style={styles.tinyLogo}
        source={{uri:'https://cdn-icons-png.flaticon.com/512/1810/1810720.png'}}

      />  



</View>


</View>







</View>








</TouchableOpacity>


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
    color : "black",
  }, 
  bold:{
    color : "black", 
fontWeight : "bold", 
  }, 
 
  setThese:{
    width  : "100%", 
    display  : "flex", 
    justifyContent  : "flex-start",
    alignItems  : "flex-start",
// backgroundColor  :  "red", 
color  : "black"
  } , 
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
  
  Heading:{
color : "#00308F", 
fontSize : 20 , 



  }, 
  Founder:{
    color : "black",
    display : "flex", 
    flexDirection : "column", 
    justifyContent :"center",
    alignItems : "center", 
    // elevation : 20 ,
    borderWidth : 0.9, 
    padding : 5 , 
    borderColor  :"gray",
    borderRadius : 10 , 
// backgroundColor : "red",

  }, 



  Number:{
fontSize : 14 ,
  }, 


BoldText:{
fontWeight  :"700"
}, 


  OuterText:{
    marginBottom : 5,
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
display :"flex",
flexDirection :"column",
width : "100%", 
height : "100%", 
marginTop  : 30 , 
// justifyContent : "center", 
// backgroundColor : "blue"
  },


  InnerText:{
  
alignSelf : "flex-end", 

  },      
  chartBox:{
position : "relative", 
flexDirection : "row", 
// alignContent  :"flex-start", 
justifyContent : "space-between",
marginBottom  : 20 ,
// width : "100%" 
  }, 

  Word:{
    marginRight : 10 , 
    // marginTop : 10 , 
    // marginLeft : 20, 
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
  flexLine:{
display : "flex",
flexDirection :"row",
// backgroundColor : "red", 
justifyContent : "space-between",
width : "100%"
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
    padding : 20 ,
    backgroundColor  :"white",
      flexDirection :"column",  
      alignItems : "center",
      justifyContent : "center"

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

