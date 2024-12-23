import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold  text-xl text-amber-500 my-10">Welcome to re sestate</Text>
     <Link href="/sign-in">Sign in</Link>
     <Link href="/explore">Explore</Link>
     <Link href="/profile">Profile</Link>
     <Link href="/properties/1">Properties</Link>
     
    </View>
  );
}
