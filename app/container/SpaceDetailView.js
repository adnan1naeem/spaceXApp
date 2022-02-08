'use strict';
import React from 'react';
import {View , Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Styles } from './styles/styles';

interface Props {
    route: RouteProp<ParamList, 'SpaceDetailView'>;
    navigation: StackNavigationProp<'SpaceDetailView'>;
  }

const SpaceDetailView: React.FC<Props> = ({ navigation ,route}) =>  {
    let data = route?.params?.item;
    const styles: any = Styles({});
    const backToHome = () => {
        navigation.goBack();
    }
      return (
        <>
            <View style={styles.containerDetail}>
                <View style={[styles.FlexDirection, styles.header]}>
                    <TouchableOpacity onPress={backToHome}>
                    <Image 
                    style={styles.BackImage}
                    source={require('../assets/images/backArrow.png')}/>
                    </TouchableOpacity>
                        <Text style={styles.headerName}>{data?.rocket?.rocket_name}</Text>
                </View>
                <Image 
                    style={styles.detailImage}
                    source={require('../assets/images/image.png')}/>   
                <View style={{padding:20}}>
                    <View style={[styles.FlexDirection,{marginTop:10}]}>
                        <Text style={styles.missionName}>{data?.mission_name}</Text>     
                        <Text style={styles.flightNumber}>    (Flight Number : {data?.flight_number})</Text>     
                    </View>
                    <Text style={styles.details}>{data?.details}</Text>

                    {data?.launch_failure_details ? 
                    (<>
                        <View style={[styles.FlexDirection,{marginVertical:10}]}>
                            <Text style={styles.failed}>Launch Failure Details</Text>     
                        </View>
                        <Text style={styles.color}>Reason: {data?.launch_failure_details?.reason}</Text>
                        <Text style={styles.color}>Altitude: {data?.launch_failure_details?.altitude}</Text>
                        <Text style={styles.color}>Time: {data?.launch_failure_details?.time}</Text>
                    </>) :
                null}
               </View>
            </View>
        </>
    );
};

export default SpaceDetailView;

