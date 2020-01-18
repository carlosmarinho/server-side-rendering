import React from 'react';
/*import { Route } from 'react-router-dom';*/
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage'

export default [
    {
        path: '/',
        ...HomePage,
        //remember that we change the export home to an object 
        //thats the reason that we are spreading the component is the home file
        // component: HomePage,
        exact: true
    },
    {
        ...UserListPage,
        // the same as above
        // loadData,
        // component: UserListPage
        path: '/users',
    }
]

/*we are going to change to not use the Route
and use react-route-config
export default () => {
    return (
        
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
        /</div>
    )
}
*/