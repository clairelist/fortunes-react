//THIS IS A CLASS COMPONENT
//IT ... POSTS LOGIN INFO TO THE NEEDFUL API AND THEN ALLOWS YOU TO ACCESS THE PROTECTED PART OF THE SITE :)

import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

class Login extends React.component{
    //DATA section
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    //LOGIC section

    handleInput=event=>{
        this.setState({
          credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
          }
        });
      };

      //commented out until I can get an api

    // login=event=>{
    //     event.preventDefault();
    //     axios.post('api',this.state.credentials)
    //     .then(res=>{
    //         const { token, role, username } = res.data;
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("role", role);
    //     localStorage.setItem("username", username);
    //     this.props.history.push('/private');
    //     })
    //     .catch(err=>{
    //         console.error(err);
    //     })
    // }

    //RETURN PSEUD RENDER SECTION
    render(){
        return(
            <div className='login-card'>
                <h3>Please LOG IN.</h3>
            </div>
        )
    }
}