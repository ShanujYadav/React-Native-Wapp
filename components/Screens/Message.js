import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import moment from 'moment';

const Message = ({ navigation,route}) => {
  const id=route.params.id;
  const title=route.params.title;
  const image=route.params.image;
  const time=route.params.time;
  const lastMsg=route.params.lastMsg; 

  const [msg,setMsg]=useState();
  const [msgArr,setMsgArr]=useState([])

const onSentHandller=()=>{
  setMsgArr([...msgArr,msg])
  setMsg(null)

}
  return (
    <View style={styles.maincontainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
        <AntDesign
          style={styles.backIcon}
          name='arrowleft'
          color="#fff"
          size={22} />
          </TouchableOpacity>
        <Image
          style={{ height: 35, width: 35, borderRadius: 50, marginTop: 30, marginHorizontal: 5 }}
          source={image}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Profile',{
          id:id,
          title:title,
          image:image,
        })} >
        <Text style={styles.header}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Ionicons
            style={styles.icon}
            name='ios-videocam-outline'
            color="#fff"
            size={22} />
          <FontAwsome
            style={styles.icon}
            name='phone'
            color="#fff"
            size={22} />
          <Entypo
            style={styles.icon}
            name="dots-three-vertical"
            color="#fff"
            size={20} />
        </View>
      </View>

      <View style={{backgroundColor: '#E8EAED',flex:5}}>
      <View style={styles.recivMsgContainer}>
        <Text style={{paddingLeft:20}}>{lastMsg}</Text>
        <Text style={{paddingLeft:20}}>{time}</Text>
        </View>
        {
          msgArr.map((item,index)=>{
            return(
              <View style={styles.sentMsgContainer} key={index}>
              <Text style={{paddingRight:20}} >{item}  {moment().format('LT')}</Text>
              </View>
            )
          })
        }
       
      
        </View>
      <View style={{flex : 0.4 }}>
        <KeyboardAvoidingView style={styles.writeTaskWrapper} >
          <TextInput style={styles.input} placeholder={'Message'} onChangeText={text=>setMsg(text)} value={msg}/>
          <TouchableOpacity >
            <TouchableOpacity style={styles.addWrapper} onPress={onSentHandller}>
              <FontAwsome
              name='arrow-right'
              color='#fff'
              size={20}/>
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAvoidingView>

      </View>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  topContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0e806a',
    flex:0.8
  },
  header: {
    marginTop: 30,
    marginRight: 55,
    color: '#fff',
    fontWeight: 400,
    fontSize: 18
  },
  iconContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  icon: {
    marginLeft: 20
  },
  backIcon: {
    marginTop: 30,
    marginLeft: 5
  },
  sentMsgContainer:{
    backgroundColor:'#99ff99',
    marginTop:10,alignItems:'flex-end',
    marginLeft: 100,
    height:25,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30
  },
  recivMsgContainer:{
    flexDirection:'row',
    backgroundColor:'#fff',
    marginTop:10,
    marginRight:100,
    height:25,
    borderTopRightRadius:30,
    borderBottomRightRadius:30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 1,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor:'#E8EAED'
  },
  input: {
    paddingVertical: 10,
    paddingLeft:20,
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#0e806a',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})