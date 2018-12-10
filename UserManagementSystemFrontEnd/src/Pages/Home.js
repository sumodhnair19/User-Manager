import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {contentStats} from '../Actions/Global';
import Loader from '../SharedComponents/Loader';

class Home extends Component{
    componentDidMount(){
        this.props.contentStats();
    }
    render(){
          const { home = false } = this.props;
          return (
            <Fragment>
            { home && ( <div className="home-page">
                  <div className="wrap">
                      <div className="col-half sm">
                          <div className="card widget">
                              <div className="card-body">
                                  <div className="caption">No. Of Users : {home.users} </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-half sm">
                          <div className="card widget">
                              <div className="card-body">
                                    <div className="caption">No. Of Groups : {home.groups} </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            )
            }
            { !home && (<Loader />) }
            </Fragment>
          )
    }
}

function mapStateToProps(globalState) {
    return {
        home: globalState.home
    };
}

export default connect(mapStateToProps, {contentStats})(Home);
