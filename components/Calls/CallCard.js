import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FontAwsome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import CreateCall from './CreateCall';

const CallCard = ({ item }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', height: 65 }}>
                <View style={{ flex: 0.3 }} >
                    <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 50 }}
                            source={item.image} />
                    </View>
                </View>
                <View style={{ flex: 1, marginHorizontal: 7 }}>
                    <View style={{}} >
                        <View style={{}}>
                            <Text style={{ fontSize: 17 }}>
                                {item.title}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ paddingVertical: 7 ,marginRight:5}}>
                                {item.call === 'in' ? (
                                    < Feather style={{}}
                                        name='arrow-down-left'
                                        color='green'
                                        size={18}
                                    />
                                ) : 
                                < Feather style={{}}
                                name='arrow-up-right'
                                color='red'
                                size={18}
                            />
                                }
                            </View>
                            <View style={{ paddingVertical: 5 }}>
                                <Text style={{ fontSize: 15, color: 'gray', fontWeight: 500 }}>
                                    {item.time}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.3 }} >
                    <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                        <FontAwsome
                            name='phone'
                            color='green'
                            size={22} />
                    </View>
                </View>

            </View>

        </View>
    )
}

export default CallCard

const styles = StyleSheet.create({})