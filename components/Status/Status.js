import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatusCard from './StatusCard'
import MyStatusCard from './MyStatusCard'
import { FlatList } from 'react-native'
import StatusApi from '../Api/StatusApi'

const Status = () => {
  return (<>
  <MyStatusCard/>
  <View style={{marginVertical:10,marginLeft:13}}>
    <Text style={{fontWeight:'bold', color:'gray'}}>Recent Updats</Text>
  </View>
  <FlatList 
  data={StatusApi}
  renderItem={StatusCard}
  />
  </>
    )
}

export default Status

const styles = StyleSheet.create({})