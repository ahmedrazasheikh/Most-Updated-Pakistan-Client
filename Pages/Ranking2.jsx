 
import { StyleSheet, TextInput  , Image ,  Text, View, Dimensions  } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
export default function RankingForSecond() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /6 }]}  >

    <View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
placeholder={"Search"}
    // value={value}
  />
  <Icon  color={"black"} style={styles.icon} name="search1" size={20} />
</View>



<View style={styles.TextWord}     >

<Text    style={styles.Word}     >Ranking  </Text>
</View>



    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -80 , height :windowHeight /2 } , styles.shadowProp]}>






<View style={styles.MainchartBox}       >


<Text  style={styles.Heading}     >Manager</Text>
<View style={styles.chartBox}      >



{/* Chart1 */}
<View style={styles.Founder}    >
{/* Here Put The Chart  */}
<Image
        style={styles.tinyLogo}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzJkp6MiPHw_WxfgvSdbwAr8KvO-X4H2fSw&usqp=CAU'}}

      />
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>

{/* Second Chart  */}
<View   style={styles.Founder}  >
<Image
        style={styles.tinyLogo}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzJkp6MiPHw_WxfgvSdbwAr8KvO-X4H2fSw&usqp=CAU'}}

      />
{/* Here Put The Chart  */}
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>


</View>
<Text  style={styles.Heading}     >Salesman</Text>
<View style={styles.chartBox}      >



{/* Chart1 */}
<View  style={styles.Founder}     >
{/* Here Put The Chart  */}
<Image
        style={styles.tinyLogo}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzJkp6MiPHw_WxfgvSdbwAr8KvO-X4H2fSw&usqp=CAU'}}

      />
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>

{/* Second Chart  */}
<View     style={styles.Founder}   >
{/* Here Put The Chart  */}
<Image
        style={styles.tinyLogo}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzJkp6MiPHw_WxfgvSdbwAr8KvO-X4H2fSw&usqp=CAU'}}

      />
<Text  style={styles.BoldText} >Sarwer Faisal </Text>
<Text  style={styles.Number} >sale 123,554</Text>
<Text>Riyal</Text>
</View>


</View>





<View style={styles.flexLine}     >
  <Text>Due</Text>
  <Text>Not Due </Text>
  <Text>Over Due </Text>
</View>

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
marginBottom : 10 ,



  }, 
  Founder:{
    display : "flex", 
    flexDirection : "column", 
    justifyContent :"center",
    alignItems : "center", 
// backgroundColor : "red",
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
display :"flex",

flexDirection :"column",
  justifyContent : "space-between", 
 
  width : "100%", 
  height : "100%",
// backgroundColor : "blue"
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
    marginTop : 10 , 
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
alignSelf : "flex-start", 
color : "white"
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
