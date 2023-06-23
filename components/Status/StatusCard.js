import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MyStatusCard from './MyStatusCard'

const StatusCard = ({ item }) => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 65,
                    backgroundColor: ''
                }}>
                <View style={{ flex: 0.3, }} >
                    <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 50,borderWidth:3,borderColor:'#2eb82e' }}
                            source={item.image}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, paddingVertical: 10, marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', }} >
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 17 }}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                    <Text>
                        {item.time}
                    </Text>

                </View>
            </View>


        </View>
    )
}

export default StatusCard

const styles = StyleSheet.create({})