import { StyleSheet,View,Text } from 'react-native'
import React from 'react'
import CallCard from './CallCard'
import { FlatList } from 'react-native'
import CallApi from '../Api/CallApi'
import CreateCall from './CreateCall'

const Call = () => {
  return (<>
    <CreateCall />
    <View style={{ marginLeft: 10, marginVertical: 7 }}>
      <Text style={{ fontWeight: 'bold', color: 'gray' }}>Recent</Text>
    </View>
    <FlatList
      data={CallApi}
      renderItem={CallCard}
    />
  </>

  )
}

export default Call

const styles = StyleSheet.create({})