import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

const CreateCall = () => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 65,
                    backgroundColor: '',
                    margin:10
                }}>
                <View style={{ flex: 0.3, }} >
                    <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' ,borderRadius: 50, backgroundColor: '#0e806a' }}>
                            <AntDesign
                                name='link'
                                color='#fff'
                                size={22}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, paddingVertical: 10, marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', }} >
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 17,fontWeight:500 }}>
                                Create Call link
                            </Text>
                        </View>
                    </View>
                    <Text style={{fontSize: 15,color:'gray',fontWeight: 500 }}>
                       Share a link for your WhatsApp call
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default CreateCall

const styles = StyleSheet.create({})