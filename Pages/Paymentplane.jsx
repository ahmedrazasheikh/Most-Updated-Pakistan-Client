 
import { Button, StyleSheet, Image , TextInput ,  Text, View, Dimensions  } from 'react-native';
export default function PaymentPlain() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /5 }]}  >

    <TextInput
        style={styles.input}
        placeholder="Search Here"
        keyboardType="ascii-capable"
      />



<View style={styles.TextWord}     >

<Text    style={styles.Word}     >  Payment Plans </Text>
</View>



    </View>



{/* Second */}
<View  style={[styles.Box2, {width : windowWidth -70 , height :windowHeight /1.8 } , styles.shadowProp]}>



<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Usman Shahid</Text>
<Text    style={styles} >145,00 Riyal </Text>

</View>
<View    style={styles.nameContant}>


<Text    style={styles.Id} >ID  75477 </Text>
<Text    style={styles} >12/2/23 </Text>

</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


<View>
<View  style={styles.secondint}    >




<View  style={styles.outerFlex}  >
<Text       >Tags:</Text>
   <View>
  {/* Here is all the images  */}
  <View  style={styles.ImagesFlex}  >

  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
 

  </View>
  
  
  </View>   
</View>

</View>
<View>

<Text></Text>
</View>



</View>
<View>
<View  style={styles.secondint}    >

<View  style={styles.outerFlex}  >
<Text       >Flags :</Text>
   <View>
  {/* Here is all the images  */}
  <View  style={styles.ImagesFlex}  >

  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  
 

  </View>
  
  
  </View>   
</View>



{/* <Text>Rank :    <Text     style={styles.Id}    >22nd </Text>   </Text> */}

<Text         style={styles.buttoncv}   >Approve Requested </Text>


</View>
<View>

<Text></Text>
</View>



</View>
</View>
<View    style={styles.firstSeprater}   >


<View   style={styles.iconDiv}    > 

<Image
        style={styles.stretch}
        source={{uri:'data:image/jpeg;base64,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'}}

      />


<View    style={styles.nameContant}>


<Text    style={styles.name} >Ahmed Raza </Text>
<Text    style={styles} >145,00 Riyal </Text>

</View>
<View    style={styles.nameContant}>


<Text    style={styles.Id} >ID  75477 </Text>
<Text    style={styles} >12/2/23 </Text>

</View>
{/* <Text    style={styles.Duration} >Employee Since 2022</Text> */}


</View>


<View>
<View  style={styles.secondint}    >




<View  style={styles.outerFlex}  >
<Text       >Tags:</Text>
   <View>
  {/* Here is all the images  */}
  <View  style={styles.ImagesFlex}  >

  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
 

  </View>
  
  
  </View>   
</View>

</View>
<View>

<Text></Text>
</View>



</View>
<View>
<View  style={styles.secondint}    >

<View  style={styles.outerFlex}  >
<Text       >Flags :</Text>
   <View>
  {/* Here is all the images  */}
  <View  style={styles.ImagesFlex}  >

  <Image
        style={styles.stretch2}
        source={{uri:'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'}}

      />
  
 

  </View>
  
  
  </View>   
</View>



{/* <Text>Rank :    <Text     style={styles.Id}    >22nd </Text>   </Text> */}

<Text         style={styles.buttoncv2}   >Approved </Text>


</View>
<View>

<Text></Text>
</View>



</View>
</View>


  













{/*   */}





</View>


{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  } ]}  >




  <View    style={styles.InnerDiv}      >
    
    
    
    
       </View>
    </View>


 


    </View>
  );
}

const styles = StyleSheet.create({

  name:{
    fontWeight : "bold", 
marginRight : 17 ,
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
  

 
display : "flex",
 flexDirection : "column",
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
    marginTop : 10 , 
    marginLeft : 20, 
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

  Box2:{ 
   elevation : 5   , 
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    borderBottomEndRadius : 12 , 
    borderBottomStartRadius :   12 ,
    marginTop : 50 ,
    borderColor : "black", 
    // borderWidth : 4,   
    padding : 12 ,
      flexDirection :"column",  
      alignItems : "center"

  }, 
  Box1:{
    marginTop :24 , 
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
    alignItems : "center",
    flexDirection  : "row",
    width : "100%",
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
    backgroundColor: "#005A9C",   
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
