import React, { Component } from 'react';
import Request from "superagent";
import comments from './comments.css';
import  CsrfToken from '../csrfToken';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[],
            newComment:"",
            csrfMiddleWareToken:'',
        }
        
    }
    textBoxStyles = {
        minWidth:'100%'
    }
    btn={
        backgroundColor: '#644892',
        height:'40px',
        color:'#FFFFFF',
        padding:'2px',
        fontSize: '1.1em',
        minWidth:'20%',
    }
    fetchComments=()=>{
        const url = `api/v1/tweets/comment/${this.props.match.params.id}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>this.setState({comments:data}))
        
      }
    componentWillMount=()=>{
        this.fetchComments(this.props.match.params);
    }
    getToken=(token)=>{
        this.setState({csrfMiddleWareToken:token});
    }
    followUser=(e)=>{
        const url = `api/v1/accounts/follow/`;
        Request.post(url)
        .set("X-CSRFToken", this.state.csrfMiddleWareToken)
        .send({
            // 'csrfmiddlewaretoken': this.state.csrfMiddleWareToken,
            'to_follow':parseInt(e.target.id),
        })
        .then(response=>console.log("success"))
        .catch(console.error);
    }
    formSubmit=(e)=>{
        e.preventDefault();
        const url = 'api/v1/tweets/comment/add/';
        Request.post(url)
        .set("X-CSRFToken", this.state.csrfMiddleWareToken)
        .send({
            // 'csrfmiddlewaretoken': this.state.csrfMiddleWareToken,
            'tweet':parseInt(this.props.match.params.id),
            'comment':this.state.newComment
        })
        .then(response=>console.log("error"))
        .catch(console.error);


    }
    render() { 
        return ( 
            <div>
                <div className="comment-container">
                    <div className="new-comment">
                        <form method="POST" onSubmit={this.formSubmit}>
                            <CsrfToken get_token={this.getToken}/>
                            <h4>Add a new comment</h4>
                            <textarea style={this.textBoxStyles} rows="5" onChange={e=>this.setState({newComment:e.target.value})}>
                            
                            </textarea >
                            <input type="submit" className="btn" value="submit"/>
                        </form>
                        
                    </div>
                    <div className="comments">
                        <h3>Comments</h3>
                        {this.state.comments.length?
                            this.state.comments.map(comment=>{
                                return <div className="comment">
                                        <h4>{comment.username}: {comment.comment}</h4>
                                        {parseInt(this.props.match.params.loggedInUserId)!==parseInt(comment.user)?
                                            <button style={this.btn} id={comment.user} onClick={this.followUser}>follow</button>
                                        :null}
                                    </div>
                            }):
                            <h4>There are no comments for this tweet!</h4>
                        }
                    
                    </div>
                </div>
            </div>
         );
    }
}



export default Comments;