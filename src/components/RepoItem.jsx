import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepoItem = (props) => (
    <View key={props.id} style={styles.container}>
      <StyledText big bold blue>id: {props.id}</StyledText>
      <StyledText>FullName: {props.fullName}</StyledText>
      <StyledText>Description: {props.description}</StyledText>
      <StyledText>Language: {props.language}</StyledText>
      <StyledText>Starts: {props.stargazersCount}</StyledText>
      <StyledText>Review: {props.reviewCount}</StyledText>
      <StyledText>Rating: {props.ratingAverage}</StyledText>
    </View>
  )

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5
    },
  })

export default RepoItem;