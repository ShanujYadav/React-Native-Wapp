import { StyleSheet} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import ChatCard from './ChatCard'
import ChatApi from '../Api/ChatApi'

const Chat = () => {
  return (
    <FlatList
    data={ChatApi}
    renderItem={ChatCard}
    /> 
  )
}

export default Chat
const styles = StyleSheet.create({})