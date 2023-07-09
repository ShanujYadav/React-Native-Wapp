import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import ChatApi from '../Api/ChatApi'

const Chat = ({navigation}) => {
  const ChatCard = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 65,
          }}>
          <View style={{ flex: 0.3 }} >
            <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
              <Image
                style={{ height: 50, width: 50, borderRadius: 50 }}
                source={item.image}
              />
            </View>
          </View>
          <View style={{ flex: 1, paddingVertical: 10, marginHorizontal: 7 }}>
            <TouchableOpacity  onPress={()=>navigation.navigate('Message',{
            id:item.id,
            title:item.title,
            image:item.image,      
            time:item.time,
            lastMsg:item.lastMsg,      
            }
            )} >
              <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 17 }}>
                    {item.title}
                  </Text></View>
                <View style={{}}>
                  <Text style={{ fontSize: 13 }}>
                    {item.time}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 300 }}>
                    {item.lastMsg}
                  </Text>
                </View>
                {item.noOfMsg > 0 && (
                  <View style={{ alignItems: 'center', backgroundColor: '#2eb82e', height: 18, width: 18, borderRadius: 50, justifyContent: 'center', }}>
                    <Text style={{ color: '#fff', fontWeight: 600 }}>
                      {item.noOfMsg}
                    </Text>
                  </View>
                )
                }
              </View>
            </TouchableOpacity >
          </View>
        </View>
      </View>
  
    )
  }

  return (

    <FlatList
    data={ChatApi}
    renderItem={ChatCard}
    /> 
  )
}

export default Chat;
const styles = StyleSheet.create({})