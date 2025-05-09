import { View, Text, Button } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo!</Text>
      <CustomButton
        title="Ver Detalhes"
        onPress={() => navigation.navigate('Details', { id: 1 })}
      />
    </View>
  );
}