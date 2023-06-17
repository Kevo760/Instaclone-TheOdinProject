import { Navigate} from 'react-router-dom';

// if currentUser is null navigate to login
export const NotLoggedInProtection = ({authUser, children}) => {
    if(!authUser) {
      return <Navigate to='/login/'/>
    }
    return(
      children
    )
  }
  // if currentUser is not null navigate to home
  export const LoggedInProtection = ({authUser, children}) => {
    if(authUser) {
      return <Navigate to='/'/>
    }
    return(
      children
    )
  }