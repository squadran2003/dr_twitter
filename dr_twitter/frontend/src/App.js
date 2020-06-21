import React, { Component } from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Nav from './Components/nav/nav.js';
import Tweet from './Components/tweet/tweet.js';
import NewTweet from './Components/tweet/newTweet';
import Comments from './Components/comments/comments';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets:[
      
      ],
      profile:undefined,
      loggedInUserId:-1,
    }
  }
  getLoggedInUser=()=>{
    const url = "api/v1/tweets/user/id";
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({loggedInUserId:data.id}))
  }
  getUserProfiler=()=>{
    const url = "api/v1/accounts/profile/";
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({profile:data}))
  }
  reload_tweets=()=>{
    const url = "api/v1/tweets/";
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({tweets:data}))
  }

    componentWillMount=()=>{
      this.getLoggedInUser();
      this.getUserProfiler();
      this.reload_tweets();

    }
  
  render(
    ) 
    
    {
      return (
        <div>
          <HashRouter>
              <Nav/>
                <div class="container">
                    <div className="row">
                        <Route exact path="/">
                            <section className="profile">
                                    <h1>Profile</h1>
                                    <img src="https://via.placeholder.com/50C/O https://placeholder.com/"/>
                                    
                                    <h3>Username: {this.state.profile!==undefined?this.state.profile.username:""}</h3>
                                    <h4>{this.state.profile!==undefined?this.state.profile.followers:null} Followers</h4>
                                    <h4>{this.state.profile!==undefined?this.state.profile.following.length:null}  Following</h4>
                              </section>
                              <section className="tweets">
                              {this.state.tweets.map((tweet)=>{
                                return <Tweet 
                                          src={""} 
                                          id={tweet.id}
                                          user={tweet.user}
                                          tweet={tweet.tweet} 
                                          username={tweet.username} 
                                          likes={tweet.likes.length} 
                                          comments={tweet.comments.length}
                                          retweets={0}
                                          loggedInUserId={this.state.loggedInUserId}
                                          >
                                        </Tweet>
                              })}
                              </section>
                        </Route>
                    </div>
                    <div className="row-fluid">
                      <Route exact path="/add">
                            <NewTweet/>
                      </Route>
                    </div>
                    <div className="row-fluid">
                      <Route path="/comments/:id/:loggedInUserId/" component={Comments}/>
                    </div>
                            
                </div>
                <footer className="footer">
                  <h4>copy right&copy; dr twitter 2020-2022</h4>
                </footer>
          </HashRouter>
        </div>
      );
  }
}
export default App;


