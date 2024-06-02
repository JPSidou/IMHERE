import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#131016', 
      padding:24
    },
    textTittle:{
      color:'#fff', 
  
      marginTop: 34, 
      fontWeight: 'bold', 
      fontSize: 24
    },
    textSubTittle:{
      color:'#6B6B6B', 
  
      fontSize: 16
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 32,
      marginBottom: 32 
    },
    input:{
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 8,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      marginRight: 10
    },
    buttonText:{
      color: '#fff',
      fontSize: 24,
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 8,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textEmpty:{
      color:'#fff',
      fontSize: 16,
      textAlign: 'center'
    }
  })