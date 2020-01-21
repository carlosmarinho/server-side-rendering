import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                here's a big list of usrs:
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

//export { loadData };

export default {
    loadData, 
    component: connect(mapStateToProps, { fetchUsers })(UserList)
}