import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, Alert } from 'react-native'

const ChatCard = ({ item }) => {
  //const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 65,
        }}>
        <View style={{ flex: 0.3 }} >
          <TouchableOpacity style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 }}
              source={item.image}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, paddingVertical: 10, marginHorizontal: 7 }}>
          <TouchableOpacity style={{}} >
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

      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}

        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{}}>
          <Text>
            jai ho
          </Text>
        </View>
      </Modal> */}

    </View>

  )
}

export default ChatCard
const styles = StyleSheet.create({})