import React, {useState} from 'react'
import { StyleSheet,View,TextInput,Text,Image, Button} from 'react-native'

export default function(){
    const [nome, setNome] = useState("")

    
return(

<View>
    <TextInput style={styles.title}>{nome}
    {"\n"}
        {"\n"}

        </TextInput>
     
    <Text style={{marginTop:30}}> De um nome para a pagina: </Text>

    <TextInput
     style={{borderWidth:1, borderColor:'#000' }}
     value={nome}
     onChangeText={text=>setNome(text)}
     />

   
    
        <Image source={require('../assets/dog.jpeg')} 
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            marginTop:30
          }}
        />
        
    
</View>



)

}
const styles = StyleSheet.create({
  title: {
 marginTop: 50,
   fontSize: 60,
    fontWeight: "bold"
  },
});