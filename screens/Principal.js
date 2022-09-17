import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CxTx from '../components/CaixaDeTexto'


export default function App({navigation}) {

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./assets/fundo.jpg')}
    style={styles.img}>
      <CxTx/>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Secundaria')}
      />
      </ImageBackground>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    flexDirection: "column"

    
    
  },
  img:{
 flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
});
