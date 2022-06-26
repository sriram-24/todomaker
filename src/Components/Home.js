import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { home } from '../Styles/HomeStyles'
import { colorSecondary, colorText, colorTextInverse, style } from '../Styles/Theme'

function Home() {
  return (
    <View>
        <View style={home.topSection}>
            <TouchableOpacity style={style.iconButton}>
                <View>
                    <Icon name="calendar" color={colorText} size={32} />
                </View>
            </TouchableOpacity>
            <Text style={home.today}>Tuesday 24, jun</Text>
            <TouchableOpacity style={style.iconButton}>
            <View>
                    <Icon name="search1" color={colorText} size={32} />
                </View>
            </TouchableOpacity>
        </View>

        <View style={home.status}>
            <View style={home.statusHorizontal}>
                <View style={home.completed}>
                <Icon name="checkcircleo" color={colorTextInverse} size={24} />
                <View style={home.statusCount}>
                    <Text style={home.count}>30</Text>
                    <Text style={home.textColor}>Completed</Text>
                </View>
                </View>
                <View style={home.pending}>
                <Icon name="clockcircleo" color={colorTextInverse} size={24} />
                <View style={home.statusCount}>
                    <Text style={home.count}>30</Text>
                    <Text style={home.textColor}>Pending</Text>
                </View>
                </View>
            </View>
            <View style={home.statusHorizontal}>
                <View style={home.cancelled}>
                <Icon name="closecircleo" color={colorTextInverse} size={24} />
                <View style={home.statusCount}>
                    <Text style={home.count}>30</Text>
                    <Text style={home.textColor}>Cancelled</Text>
                </View>
                </View>
                <View style={home.ongoing}>
                <Icon name="loading1" color={colorTextInverse} size={24} />
                <View style={home.statusCount}>
                    <Text style={home.count}>30</Text>
                    <Text style={home.textColor}>Ongoing</Text>
                </View> 
                </View>
            </View>
        </View>
        <View>
            <View style={home.taskHeader}>
                <Text style={home.taskTitle}>Tasks</Text>
                <TouchableOpacity>
                    <Text>View all</Text>
                </TouchableOpacity>
            </View> 
        </View>

    </View>
  )
}

export default Home