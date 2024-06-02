import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert, StatusBar} from 'react-native';
import {styles} from './styles';
import { Participant } from '../../Components/Participant';

export default function Home(){

  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState('');


  function handleParticipantAdd(){
    if(participants.includes(newParticipant)){
      return Alert.alert('Participante já está na lista de convidados.');
    }
    setParticipants(prevState => [...prevState, newParticipant]);
    setNewParticipant('');
  }


  function handleParticipantRemove(name: string){
    
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de convidados?`, [
      {
        text: 'Não',
        onPress(){
          console.log('Cancelado')}
      },
      {
        text: 'Sim',
        onPress(){
          setParticipants(prevState => prevState.filter(participant => participant !== name));
        }
      }
      
    ])
  }



    return (
      <View style={styles.conteiner}>
        
        <Text style={styles.textTittle}>
          Lista de Convidados
          </Text>

        <Text style={styles.textSubTittle}>
          Sábado, 18 de Maio de 2024.
          </Text>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder='Nome do convidado'
            placeholderTextColor={'#6B6B6B'}
            onChangeText={setNewParticipant}
            value={newParticipant}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participant
            key={item}
            name={item}
            onRemove={()=>handleParticipantRemove(item)}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.textEmpty}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
          )}/>
          
      
      </View>
    )
}
