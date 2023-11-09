import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function Layout1() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <View style={styles.style1}>
        <Image style={styles.img1} source={require('../../assets/Image 95.png')}></Image>

      </View>
      <View style={styles.style2}>
        <Text style={styles.txt2}>MANAGE YOUR</Text>
        <Text style={styles.txt3}>TASK</Text>

      </View>
      <View style={styles.style3}>
        <View style={styles.groupTen}>
          <Image source={require('../../assets/Frame (2).png')}  style={{ width: 30, height: 25, top:8, left:16 }}></Image>
          <TextInput placeholder='Enter your name' style={styles.txtInput}></TextInput>
        </View>

      </View>
      <View style={styles.style4}>
          <Pressable style={styles.btnGetStarted}>
              <Text style={styles.txtButton}>GET STARTED -></Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  style1:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    paddingTop : 82,
  },
  style2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  style3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  style4:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  btnGetStarted:{
    height: 44,
    width: 190,
    borderRadius: "12px",
    backgroundColor: "#00BDD6",
  },
  txtButton:{
    fontSize:16,
    Lineheight:26,
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:400,
    padding:9,
    fontWeight:'bold',
  },
  txt2:{
    fontFamily:'Epilogue',
    fontWeight:700,
    fontSize:24,
    Lineheight:36,
    textAlign:'center',
    color:'#8353E2',
    top:25,
  },
  txt3:{
    fontFamily:'Epilogue',
    fontWeight:700,
    fontSize:24,
    Lineheight:36,
    textAlign:'center',
    color:'#8353E2',
    top:25,
  },
  img1:{
    width:271,
    height:271,

  },
  txtInput:{
    // borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    height: 35,
    borderColor: "#9095A0",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 54,
    paddingLeft: 10,
    // borderRadius:12,
    color:'#BCC1CA',
    position:'absolute',
    left:44,
    top:3,
  },
  groupTen:{
    borderWidth:1,
    borderRadius:12,
    position:'absolute',
    width:334,
    height:43,
  }
});