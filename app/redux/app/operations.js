import * as actions from "./actions";
import RestApi from "../../restclient/RestApi";

export const getData= () => dispatch =>{
  try {
      return  RestApi.getInstance().get('launches',
      {
        headers:{'Accept':'application/json'}
      })
          .then((json)=>{
            if (json.error){
              console.log('Error : ', json.error)
            } else{
              const {data} = json;
              dispatch(actions.getData(data));
            }
          })
          .catch((error) => {
            console.log('ErrorError : ', error)
          });
    }
  catch (e) {
    console.log('catch : ', e)
  }
}
