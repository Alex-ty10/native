import Constants from 'expo-constants'
import { Text, View } from "react-native";
import RepoList from './RepoList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Rate Repository App</Text>
      <RepoList/>
    </View>
  )
}

export default Main
