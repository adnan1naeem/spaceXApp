'use strict';
import React ,{useEffect} from 'react';
import {View , Image} from 'react-native';
import { Styles } from './styles/styles'
import { useDispatch } from 'react-redux';
import {getData} from "../redux/app/operations";

interface Props {
    navigation: StackNavigationProp<'Splash'>;
  }

const Splash: React.FC<Props> = ({ navigation }) => {
    const styles: any = Styles({});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData());
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    },[])

      return (
        <View style={styles.splashContainer}>
        <Image 
            source={require('../assets/images/logo.png')}/>           
        </View>
    );
};


export default Splash;
