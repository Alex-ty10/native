import { Text, View, FlatList } from "react-native";
import repositories from "../data/repositories";
import RepoItem from "./RepoItem";

const RepoList = () => {
  return (
    <FlatList 
      data={repositories}
      renderItem={({item: repo}) => (
        <RepoItem {...repo} />
      )}
    />
  )
}

export default RepoList;