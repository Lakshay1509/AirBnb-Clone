import React, { useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

export default UserContext;

export function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  
  useEffect(() => {
    if(!user){
      axios.get('/api/v1/users/profile').then(({data})=>{
        
        setUser(data.data.name)
        setReady(true)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },[])
  
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  )
}
