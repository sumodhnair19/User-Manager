import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from '../Actions/Detail';
import {fetchGroupUsers, searchUser} from '../Actions/List';

import UsersList from '../Components/UsersList';
import UserModal from '../Components/UserModal';
import Loader from '../SharedComponents/Loader';
import NotFound from '../Components/NotFound';

class GroupDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            msgContent: null,
            msgType: null,
            searchterm: "",
            userupdates: props.userupdates
        }
    }
    handleSearch = (e) => {
        this.setState({ searchterm: e.target.value.replace(/(<([^>]+)>)/ig,"")}, function(){
            if(this.state.searchterm){
                this.props.searchUser(this.state.searchterm, this.props.match.params.groupid);
            }else{
                this.props.fetchGroupUsers(this.props.match.params.groupid);
            }
        });
    }
    componentDidMount(){
        this.props.fetchGroup(this.props.match.params.groupid);
        this.props.fetchGroupUsers(this.props.match.params.groupid);
    }
    static getDerivedStateFromProps(props, state) {
        if(props.userupdates && props.userupdates !== state.userupdates){
            window.scrollTo(0, 0);
            if(props.userupdates.code === 200){
                props.fetchGroupUsers(props.match.params.groupid);
                console.log(props.userupdates.message);
                return{
                    msgContent: props.userupdates.message,
                    msgType: 'alert success',
                    userupdates: props.userupdates
                }
            }else{
                return{
                    msgContent: props.userupdates.error,
                    msgType: 'alert error',
                    userupdates: props.userupdates
                }
            }
        }else{
            return null;
        }
  }
    render(){
        const { group = null, users = null } = this.props;

        return (

          <Fragment>
          {
            group && group.code === 200 && (
              <div className="group-page">
                  {this.state.msgContent &&
                  <div className={this.state.msgType} role="alert">
                      {this.state.msgContent}
                  </div>
                  }
                  <div className="wrap">
                      <div className="col-full">
                          <div className="card">
                              <div className="card-header">
                                  {group.data.title} - Users List
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
                                  <UsersList users={users}/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <UserModal />
              </div>
            )
          }
          {
            group && (group.code === 404 || group.code === 500) && (
              <NotFound />
            )
          }
          {
            !group && <Loader />
          }
          </Fragment>
        )
    }
}


function mapStateToProps(globalState) {
    return {
        users: globalState.users,
        group: globalState.group,
        userupdates: globalState.userupdates
    };
}

export default connect(mapStateToProps, {fetchGroup, fetchGroupUsers, searchUser})(GroupDetails);
