'use strict';
import React ,{useEffect, useState} from 'react';
import {View , TouchableOpacity,Image, Keyboard,TextInput,Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { Styles } from './styles/styles';

interface Props {
    navigation: StackNavigationProp<'HomeScreen'>;
  }

const HomeScreen: React.FC<Props> = ({ navigation }) =>  {
    const [upcoming, setUpcoming] = useState(true);
    const [past, setPast] = useState(false);
    const data = useSelector((state) => state.app.spaceData.data);
    const [searchData , setSearchData] = useState();
    const [searchText , setSearchText] = useState();
    const styles: any = Styles({});

    //By Default data set first time
    useEffect(()=>{
        searchItem(true);   
     },[])

    //Search according to upcoming and past content
    const searchItem = (checkUpcoming) => {
        if (checkUpcoming) {
            setSearchData(data?.filter((item)=> item?.upcoming))
        }else if (!checkUpcoming) {
            setSearchData(data?.filter((item)=> !item?.upcoming))
        }
    }
    //Search data from list by its name
    const searchItemData = (text) => {
        let query = text.toLowerCase()
        if(!query || query === ''){
            if (upcoming) {
                setSearchData(data?.filter((item)=> item.upcoming))
            }if (past) {
                setSearchData(data?.filter((item)=> !item.upcoming))
            }
        }else if (query){
            let filteredName
            if (upcoming) {
                filteredName = data?.filter(item => {
                return item.mission_name != undefined && item.mission_name != null && item?.upcoming
                    ? item.mission_name.toLowerCase().match(query)
                    : false})            
            }else if (past) {
                filteredName = data?.filter(item => {
                return item.mission_name != undefined && item.mission_name != null && !item?.upcoming
                    ? item.mission_name.toLowerCase().match(query)
                    : false})
           }
           if(filteredName.length > 0){
            setSearchData(filteredName);
           }else setSearchData([])
        }
    }
    //Triggered when Upcoming button click
    const buttonUpcoming = () => {
        setUpcoming(true)
        setPast(false)
        setSearchText('')
        searchItem(true)
    }
    //Triggered when Past button click
    const buttonPast = () => {
        setPast(true)
        setUpcoming(false)
        setSearchText('')
        searchItem(false)
    }
    //Triggered when user search
    const SearchTextInout =(text) => {
        setSearchText(text)
        searchItemData(text)
    }

    const detailScreen = (item) => {
        navigation.navigate('SpaceDetail',{item: item})
    }

      return (
        <View style={styles.mainContainer}>
            {/* Tab Bar --------------------Start-------------------------------------*/}
            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.buttonBorder,{backgroundColor: upcoming ? '#005837': 'white',}]}
                    onPress={buttonUpcoming}>
                    <Text style={[styles.text,{color: upcoming? 'white' : '#005837'}]}>upcoming</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.buttonBorder,{backgroundColor: past ? '#005837': 'white',}]}
                    onPress={buttonPast}>
                    <Text style={[styles.text,{color:past ? 'white': '#005837'}]}>past</Text>
                </TouchableOpacity>            
            </View>
            {/* search Bar --------------------Start-------------------------------------*/}
            <View style={styles.SearchContainer}>
                <View style={styles.searchBar}>
                    <TextInput
                        onChangeText={text => {SearchTextInout(text)}}
                        editable={true}
                        value={searchText}
                        style={styles.searchBTN}
                        autoFocus={true}
                        placeholder={'Search here... '}
                        placeholderTextColor={'#AEAEAE'}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {Keyboard.dismiss()}}
                    style={styles.searchButton}>
                    <Text style={{alignSelf: 'center', color: 'white'}}>Search</Text>
                </TouchableOpacity>
            </View>
            {/* Flatlist Data --------------------Start-------------------------------------*/}
            {data ? 
                <FlatList
                    data={searchData}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.card}
                        onPress={()=>detailScreen(item)}>
                            <Image style={styles.Image}
                            resizeMode={'cover'}
                            source={require('../assets/images/image.png')}
                        />
                        <View style={{marginHorizontal:10,flex:1}}>
                                <Text style={styles.textColor}>{item?.mission_name}</Text>
                                <Text style={styles.detail} numberOfLines={2}>{item?.details}</Text>
                                <View style={[styles.FlexDirection, {justifyContent:'space-between'}]}>
                                    <Text style={styles.color}>Launch Year:{item?.launch_year}</Text>
                                    <View style={styles.FlexDirection}>
                                        <Text style={styles.color}>Status:</Text>
                                        <Text style={{color:item?.launch_success? 'white':'red'}}>{item?.launch_success ? ' Success' : ' Failed'}</Text>
                                    </View>
                                </View>
                        </View>
                        </TouchableOpacity>
                    )}
                />
            :<Text style={styles.NothingFound}>Nothing Found!</Text>}
        </View>
    );
};

export default HomeScreen;

