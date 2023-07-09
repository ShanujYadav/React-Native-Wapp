import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MidSection from '../midSection/MidSection';

const TopSection = () => {
    return (<>
            <View style={styles.container}>
                <Text style={styles.header}>WhatsApp</Text>
                <View style={styles.iconContainer}>
                    <AntDesign
                        style={styles.icon}
                        name='camerao'
                        color="#fff"
                        size={22} />
                    <AntDesign
                        style={styles.icon}
                        name='search1'
                        color="#fff"
                        size={22} />
                    <Entypo
                        style={styles.icon}
                        name="dots-three-vertical"
                        color="#fff"
                        size={20} />
                </View>
            </View>
            <MidSection/>
 </>
    )
}
export default TopSection

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0e806a'
    },
    header: {
        marginTop: 50,
        marginHorizontal: 20,
        color: '#fff',
        fontWeight: 500,
        fontSize: 20
    },
    iconContainer: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    icon: {
        marginLeft: 20
    }
})