import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {fetchUsers, moreUsers, fetchGroups, searchUser} from '../Actions/List';
import {handleModal} from "../Actions/Global";
import Loader from '../SharedComponents/Loader';
import UserModal from '../Components/UserModal';
import UsersList from '../Components/UsersList';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            skip: 0,
            perPage: 50,
            inPage: 50,
            loading: true,
            msgContent: null,
            msgType: null,
            searchterm: "",
            userupdates: props.userupdates
        };
    }
    handleSearch = (e) => {
        this.setState({ searchterm: e.target.value.replace(/(<([^>]+)>)/ig,"")}, function(){
            if(this.state.searchterm){
                this.props.searchUser(this.state.searchterm);
            }
        });
    }
    addUser =  () =>{
        const  user = {
            _id: "",
            fullname: "",
            email: "",
            group: {
                _id: ""
            },
            type: "add"
        }
        this.props.handleModal(user);
    }
    componentDidMount(){
        this.props.fetchUsers(this.state.skip , this.state.perPage);
        this.props.fetchGroups();
        this.setState({loading: false});
        window.scrollTo(0, 0);
    }
    static getDerivedStateFromProps(props, state) {
        if(props.userupdates && props.userupdates !== state.userupdates){
            window.scrollTo(0, 0);
            if(props.userupdates.code === 200){
                props.fetchUsers(state.skip , state.perPage);
                return{
                    msgContent: props.userupdates.message,
                    msgType: 'alert success',
                    userupdates: props.userupdates,
                    loading: false
                }
            }else{
                return{
                    msgContent: props.userupdates.error,
                    msgType: 'alert error',
                    userupdates: props.userupdates,
                    loading: false
                }
            }
        }else{
            return null;
        }
  }
    render() {
        const { users } = this.props;
        const {loading } =this.state;
        return (
            <Fragment>
            { !loading && <div className="list-page">
                {this.state.msgContent &&
                <div className={this.state.msgType} role="alert">
                    {this.state.msgContent}
                </div>
                }
                <div className="wrap">
                    <div className="col-full">
                        <div className="card">
                            <div className="card-header">
                              Users List
                                <div className="card-actions">
                                    <button className="btn btn-success" onClick={this.addUser}>
                                        <i className="fa fa-user-plus"></i> Add User
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="form-group wrap">
                                    <div className="col-full">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-search"></i></span>
                                            </div>
                                            <input
                                                onChange={this.handleSearch}
                                                value={this.state.searchterm}
                                                name="searchterm"
                                                className="form-control form-control-lg"
                                                placeholder="Search User"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                                <UsersList  loading = {loading} users={users}/>
                            </div>

                        </div>
                    </div>
                </div>
                <UserModal />
            </div>}
            { loading && <Loader/>}
            </Fragment>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        users: globalState.users,
        userupdates: globalState.userupdates
    };
}

export default connect(mapStateToProps, {fetchUsers, moreUsers, fetchGroups, searchUser, handleModal})(Users);
