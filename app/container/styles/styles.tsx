export const Styles = ({  }) => {
  return {
    mainContainer:{
      flex:1,
      backgroundColor:'#253837'
    },
    container: {
        borderRadius:10,
        backgroundColor:'white',  
        flexDirection:'row',
        borderWidth:1,
        borderColor:'black',
        marginVertical:15,
        marginHorizontal:10,
    },
    splashContainer: {
      flex: 1,
      backgroundColor:'#253837',
      justifyContent:'center', 
      alignItems:'center'    
    },
    Text:{
        fontSize:30,
        color:'white'
    },
    buttonBorder:{
        width:'50%',
        borderRadius:10,
    },
    NothingFound:{
        fontSize:30, 
        color:'white', 
        flex:1, 
        alignSelf:'center'
    },
    color:{
        color:'white'
    },
    detail:{
        color:'white',
        flex:1
    },
    textColor:{
        color:'white',
        fontSize:20, 
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        padding:15,
        textAlign:'center',
        textTransform:'uppercase',
    },
    searchButton:{
        borderRadius: 22,
        borderColor: '#E5E4E4',
        borderWidth: 2,
        height: 45,
        width: '20%',
        justifyContent: 'center'
    },
    SearchContainer:{
        marginVertical: '5%', 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    FlexDirection:{
        flexDirection:'row'
    },
    searchBar:{
        borderRadius: 22,
        borderColor: '#E5E4E4',
        borderWidth: 2,
        height: 45,
        width: '75%',
        backgroundColor: '#F1F1F1',
    },searchBTN:{
        paddingHorizontal:20,
        fontSize: 14,
        paddingVertical: 2,
        flex: 1,
    },
    card:{
        borderRadius:10,
        backgroundColor:'#005837',
        margin:10, 
        padding:5,
        flexDirection:'row'
    },
    Image:{
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 200,
        alignSelf: 'center',
    },
    containerDetail:{
      flex:1,
      backgroundColor:'#253837'
    },
    header:{
        backgroundColor:'#fff',
        padding:20,
    },
    BackImage:{
        alignSelf:'center', 
        width:20, 
        height:20
    },
    detailImage:{
        alignSelf:'center',
        marginVertical:20,
        width:'90%',
        borderRadius:20,
        resizeMode:'cover'
    },
    headerName:{
        width:'90%',
        textAlign:'center',
        color:'black',
        fontSize:20, 
        fontWeight:'bold'
    },
    details:{
        fontSize:16,
        marginVertical:10 ,
        color:'white'
    },
    missionName:{
        color:'white',
        fontSize:20, 
        fontWeight:'bold'
    },
    flightNumber:{
        alignSelf:'center', 
        color:'white',
        fontSize:15
    },
    failed:{
        color:'white',
        fontSize:17, 
        fontWeight:'800'
    }
  };
};
