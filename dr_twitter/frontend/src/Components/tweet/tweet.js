import React, { Component } from 'react';
import {Link } from 'react-router-dom'; 
import tweet from './tweet.css';
import Request from "superagent";
import  CsrfToken from '../csrfToken';

class Tweet extends Component {
    constructor(props){
        super(props);
        this.tweetId = React.createRef();
        this.csrfMiddleWareToken = "";
        this.linkStyle={
            color:'#fff',
            textDecoration: 'none',
            fontSize: '1em',
            display:'inline'
        }

    }
    getToken=(token)=>{
        this.setState({csrfMiddleWareToken:token});
    }
    addLikes=()=>{
        const url = `api/v1/tweets/like/`;
        Request.post(url)
        .set("X-CSRFToken", this.state.csrfMiddleWareToken)
        .send({
            'tweet':parseInt(this.props.id),
        })
        .then(response=>console.log(response.data))
        .catch(console.error);
    }
    render(
    ) { 
        return ( 
            <div className="tweet">
                <CsrfToken get_token={this.getToken}/>
                <img src="http://via.placeholder.com/50" />
                <p>{this.props.username}</p>
                <p>
                {this.props.tweet}
                </p>
                <p>{this.props.likes.length}</p>
                <span 
                    className={this.props.likes<1?"likes fa fa-heart":"likes fa fa-heart liked"} 
                    aria-hidden="true" onClick={this.addLikes}>{this.props.likes} likes</span>
                <span className="retweets fa fa-retweet">{this.props.retweets} retweets</span>
                <div className="comments">
                    <span className="fa fa-comments">
                            <Link style={this.linkStyle} to={`/comments/${this.props.id}/${this.props.loggedInUserId}`}>
                                {this.props.comments} {this.props.comments==1?"comment":"comments"}
                            </Link>
                    </span>
                </div>
               
            </div>
         );
    }
}
 
export default Tweet;