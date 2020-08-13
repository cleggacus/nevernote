import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Loading from './loading';

export default (ComponentToProtect:any) => {
  return (props: any) => {
    const [loadingState, setLoadingState] = useState(true);
    const [redirectState, setRedirectState] = useState(false);
  
    axios.get(`/api/user/auth`, {withCredentials: true})
      .then(res => {
        if(res.status === 200){
          setLoadingState(false);
        }else{
          const error = res.data.mes;
          throw error;
        }
      }).catch(err => {
        setLoadingState(false);
        setRedirectState(true);
      });
  
    if (loadingState)
      return <Loading></Loading>;
      
    if (redirectState)
      return <Redirect to="/entry" />;
    
    return <ComponentToProtect {...props} />;
  }
}