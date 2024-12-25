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

import {SafeAreaView,ScrollView,Text, View,Image, TouchableOpacity} from "react-native"
import React from "react"
import icons from "@/constants/icons"
import images from "@/constants/images"

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

        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">fake name</Text>
          </View>
        </View>
        
       </ScrollView>
      </SafeAreaView>

    )
}
export default Profile