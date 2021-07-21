// const Profile = () => {
//     return (
//         <h1>
//             Profile page
//         </h1>
//     )
// }

// export default Profile

import { useHistory, Link, Switch, Route, useRouteMatch } from "react-router-dom"
import { useEffect } from 'react'
import View from './View'
import Edit from './Edit'

const Profile = ({login}) => {

    const hist = useHistory();

    useEffect(() => {
        if(!login){
            hist.push('/')
        }
    }, [login, hist])

    const { path, url } = useRouteMatch();

    return (
        <>
           <h1>Profile Page</h1> 

           <ul>
               <li>
                   <Link to={`${url}/viewProf`}>View Profile</Link>
               </li>
               <li>
                   <Link to={`${url}/editProf`}>Edit Profile</Link>
               </li>
           </ul>

           <Switch>
               <Route path={`${path}/viewProf`} component={View}/>
               <Route path={`${path}/editProf`} component={Edit}/>
           </Switch>
        </>
    )
}

export default Profile
