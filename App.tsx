import Home from './src/screens/Home';
import { StatusBar } from 'react-native';
export default function app(){
    return (
    <>
        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
        <Home/>
    </>  
)
}
