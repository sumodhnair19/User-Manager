import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteUser} from '../Actions/Update';
import {handleModal} from "../Actions/Global";

class UsersList extends Component{
    editUser(user){
        this.props.handleModal(user);
    }
    handleDelete(userid){
        this.props.deleteUser(userid);
    }
    renderUsers(users){
        return users.map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.group.title}</td>
                    <td className="md-visible">{moment(user.registered).format('DD.MMM.YY - hh:mm')}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={()=> this.editUser(user)}><i className="fa fa-edit"></i></button>
                        <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (window.confirm('Are you sure to delete this user?'))
                            this.handleDelete(user._id)
                          }
                          }>
                          <i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            );
        })
    }
    render(){
      const {users = []} = this.props;
        return(
            <table className="table table-responsive-lg">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Group</th>
                        <th className="md-visible">Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users && users.length> 0 && this.renderUsers(users)}
                </tbody>
            </table>
        )
    }
}


export default connect(null, { deleteUser, handleModal })(UsersList);
