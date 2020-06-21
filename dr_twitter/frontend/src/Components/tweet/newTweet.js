import React, { Component } from 'react';
import Request from "superagent";
import  CsrfToken from '../csrfToken';


class  NewTweet extends Component {
    constructor(props){
        super(props);
        this.state = { 
            csrfMiddleWareToken:'',
            tweet:''
         }
        
    }
    getToken=(token)=>{
        this.setState({csrfMiddleWareToken:token});
    }
    form_submit=(e)=>{
        e.preventDefault();
        const url = 'api/v1/tweets/add/';
        Request.post(url)
        .set("X-CSRFToken", this.state.csrfMiddleWareToken)
        .send({
            // 'csrfmiddlewaretoken': this.state.csrfMiddleWareToken,
            'tweet':this.state.tweet
        })
        .then(response=>console.log("error"))
        .catch(console.error);


    }
    render() { 
        return ( 
            <div className="test">
                <form className="new-tweet" onSubmit={this.form_submit} method="POST">
                    <CsrfToken get_token={this.getToken}/>
                    <textarea  rows="10" cols="100" onChange={e=>this.setState({tweet:e.target.value})}>
                        Whats on your mind
                    </textarea>
                    <input type="submit" className="btn" value="submit"/>
                </form>
            </div>
         );
    }
}
 
export default NewTweet;