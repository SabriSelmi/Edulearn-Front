import React, { Component } from 'react';
//import {Redirect} from "react-router-dom"
import { withAuth } from '@okta/okta-react';
import Home from "./Home";
import Home2 from "./HomeLogOut";


//export default
withAuth(class HomeAuth extends Component {
    state = { authenticated: null };

    checkAuthentication=async ()=> {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login= async()=> {
        this.props.auth.login("/");
    }

    logout= async()=> {
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ?
            (<div>
                <Home2 logout={()=>this.logout()}/>

            </div>) :
            (<div>
                <Home login={()=>this.login()}/>
            </div>);

        return (
            <div className="jumbotron">

                {mainContent}
            </div>
        );
    }
});
