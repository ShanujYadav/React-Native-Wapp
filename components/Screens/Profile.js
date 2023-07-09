import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = ({navigation,route}) => {
const id=route.params.id;
const title=route.params.title;
const image=route.params.image;

  return (
    <View style={styles.maincontainer}>
    <ScrollView >
      <View style={styles.topContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity >
            <AntDesign
              style={styles.backIcon}
              name='arrowleft'
              color="#fff"
              size={22} />
          </TouchableOpacity>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50, marginTop: 30, }}
            source={image}
          />
          <Entypo
            style={styles.icon}
            name="dots-three-vertical"
            color="#fff"
            size={20} />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
          <Text style={{ fontSize: 25 }}>{title}</Text>
          <Text style={{ fontSize: 17, color: 'gray' }}>+91 8123456789</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 40, marginTop: 30 }}>
          <View>
            <FontAwsome
              style={{ marginLeft: 7 }}
              name="phone"
              color="#0e806a"
              size={25} />
            <Text style={styles.iconText}>Audio</Text>
          </View>
          <View>
            <FontAwsome
              style={{ marginLeft: 7 }}
              name='video-camera'
              color="#0e806a"
              size={25} />
            <Text style={styles.iconText}>Video</Text>
          </View>
          <View>
            <FontAwsome
              style={{ marginLeft: 7 }}
              name="rupee"
              color="#0e806a"
              size={25} />
            <Text style={styles.iconText}>Pay</Text>
          </View>
          <View>
            <AntDesign
              style={{ marginLeft: 7 }}
              name="search1"
              color="#0e806a"
              size={25} />
            <Text style={styles.iconText}>Search</Text>
          </View>

        </View>
      </View>

      {/* notification group */}
      <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 55, alignItems: 'center' }}>
          <FontAwsome5
            name='bell'
            color="gray"
            size={20} />
          <Text style={styles.services}>Mute Notification</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 50, alignItems: 'center' }}>
          <Ionicons
            name='musical-note'
            color="gray"
            size={20} />
          <Text style={styles.services}>Custom Notification</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 50, alignItems: 'center' }}>
          <Entypo
            name='image-inverted'
            color="gray"
            size={20} />
          <Text style={styles.services}>Media visibility</Text>
        </View>
      </View>
      {/* encryption group */}
      <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 70, alignItems: 'center' }}>
          <Entypo
            name='lock'
            color="gray"
            size={20} />
          <View>
            <Text style={styles.services}>Encryption</Text>
            <Text style={{ color: 'gray', paddingHorizontal: 30 }}>Messages and calls are end-to-end encrypted.Tab to verify</Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 50, alignItems: 'center' }}>
          <Ionicons
            name='timer-outline'
            color="gray"
            size={20} />
          <View>
            <Text style={styles.services}>Disappearing messages</Text>
            <Text style={{ marginLeft: 30, color: 'gray' }}>Off</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 50, alignItems: 'center' }}>
          <MaterialCommunityIcons
            name='message-text-lock'
            color="gray"
            size={20} />
          <Text style={styles.services}>Chat Lock</Text>
        </View>
      </View>

      {/* Block Section */}
      <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 55, alignItems: 'center' }}>
          <Entypo
            name='block'
            color="red"
            size={20} />

          <Text style={{ fontSize: 16, marginLeft: 30, color: 'red' }}>Block {title}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20, height: 55, alignItems: 'center' }}>
          <AntDesign
            name='dislike1'
            color="red"
            size={20} />
          <Text style={{ fontSize: 16, marginLeft: 30, color: 'red' }}>Report {title}</Text>
        </View>
      </View>

    </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  topContainer: {
    height: 300,
    backgroundColor: '#fff'
  },
  iconContainer: {
    marginTop: 30,
    flexDirection: 'row',
    marginHorizontal: 10
  },
  icon: {
    marginRight: 5,
    marginTop: 30,
    color: 'gray'
  },
  backIcon: {
    marginTop: 30,
    marginLeft: 5,
    color: 'gray'
  },
  iconText: {
    fontSize: 15,
    marginTop: 5,
    color: '#0e806a',
    fontWeight: 400
  },
  services: {
    fontSize: 16,
    marginLeft: 30
  }
})