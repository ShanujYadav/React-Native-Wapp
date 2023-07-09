import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";


const MyStatusCard = () => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 65,
                    backgroundColor: ''
                }}>
                <View style={{ flex: 0.3, }} >
                    <View style={{ height: 65, width: '100%', justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 50,  resizeMode: 'cover',}}
                            source={require('../../assets/img/com.jpg')}
                        />
                        <View style={{backgroundColor:'#fff',position:'absolute', top: 35, left: 44,borderRadius:50 }}>
                        <AntDesign
                            style={{}}
                            name='pluscircle'
                            color="#2eb82e"
                            size={22} />
                        </View>
                        </View>
                </View>
                <View style={{ flex: 1, paddingVertical: 10, marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', }} >
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 17,fontWeight:500 }}>
                                My Status
                            </Text></View>
                    </View>
                    <Text>
                        Tab to add status update
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default MyStatusCard

const styles = StyleSheet.create({
    icon:{
        marginTop:10
    }
})