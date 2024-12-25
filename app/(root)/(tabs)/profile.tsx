// import { useLocalSearchParams } from 'expo-router'
// import React from 'react'
// import { View,Text } from 'react-native'

// const Property = () => {

//     const  {id }  = useLocalSearchParams()

//   return (
//    <View>
//     <Text>Property{id}</Text>
//    </View>
//   )
// }

// export default Property

import {SafeAreaView,ScrollView,Text, View,Image} from "react-native"
import React from "react"
import icons from "@/constants/icons"

const Profile = () =>{

    const handleLogout = async () =>{}
    return(
      <SafeAreaView className="h-full bg-white">
       <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
       >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
       </ScrollView>
      </SafeAreaView>

    )
}
export default Profile