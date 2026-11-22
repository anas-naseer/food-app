import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const sign_in = () => {
  return (
    <View>
      <Text>sign_in</Text>
      <Button title="Sign up" onPress={() => router.push("/sign_up")} />
    </View>
  )
}

export default sign_in