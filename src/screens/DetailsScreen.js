import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ID do Item: {id}</Text>
    </View>
  );
}