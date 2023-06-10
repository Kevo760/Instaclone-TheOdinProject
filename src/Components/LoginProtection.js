import { Navigate} from 'react-router-dom';

// if currentUser is null navigate to login
export const NotLoggedInProtection = ({children, authUser}) => {
    if(!authUser) {
      return <Navigate to='/login/'/>
    }
    return(
      children
    )
  }
  // if currentUser is not null navigate to home
  export const LoggedInProtection = ({children, authUser}) => {
    if(authUser) {
      return <Navigate to='/'/>
    }
    return(
      children
    )
  }