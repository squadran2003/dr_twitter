(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){e.exports=n(46)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),s=n.n(r),c=(n(28),n(4)),l=n(5),i=n(6),m=n(7),u=n(9),f=n(10);n(29),n(30),n(31),n(32);var d=function(){var e={color:"white",textDecoration:"none",fontSize:"1.2em",fontWeight:"bold"};return o.a.createElement("div",null,o.a.createElement("nav",{className:"nav-container"},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/"},"Home")),o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/add"},"Add New Tweet")),o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/profile"},"Profile ")),o.a.createElement("li",{className:"last-link"},o.a.createElement("a",{href:"/logout/"},"Logout")))))},h=(n(38),n(11)),p=n.n(h),v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getCookie=function(e){var t;return document.cookie&&""!==document.cookie&&document.cookie.split(";").forEach((function(n){var a=n.trim().match(/(\w+)=(.*)/);void 0!==a&&a[1]===e&&(t=decodeURIComponent(a[2]))})),t},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.getCookie("csrftoken");this.props.get_token(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:this.getCookie("csrftoken")}))}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.addLikes=function(){p.a.post("api/v1/tweets/like/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:parseInt(a.props.id)}).then((function(e){return console.log(e.data)})).catch(console.error)},a.tweetId=o.a.createRef(),a.csrfMiddleWareToken="",a.linkStyle={color:"#fff",textDecoration:"none",fontSize:"1em"},a}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"tweet"},o.a.createElement(v,{get_token:this.getToken}),o.a.createElement("img",{src:"http://via.placeholder.com/50"}),o.a.createElement("p",null,this.props.username),o.a.createElement("p",null,this.props.tweet),o.a.createElement("p",null,this.props.likes.length),o.a.createElement("span",{className:this.props.likes<1?"likes fa fa-heart":"likes fa fa-heart liked","aria-hidden":"true",onClick:this.addLikes},this.props.likes," likes"),o.a.createElement("span",{className:"retweets fa fa-retweet"},this.props.retweets," retweets"),o.a.createElement("span",{className:"comments fa fa-comments"},o.a.createElement(u.b,{style:this.linkStyle,to:"/comments/".concat(this.props.id,"/").concat(this.props.loggedInUserId)},this.props.comments," ",1==this.props.comments?"comment":"comments")))}}]),n}(a.Component),w=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.form_submit=function(e){e.preventDefault();p.a.post("api/v1/tweets/add/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:a.state.tweet}).then((function(e){return console.log("error")})).catch(console.error)},a.state={csrfMiddleWareToken:"",tweet:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"test"},o.a.createElement("form",{className:"new-tweet",onSubmit:this.form_submit,method:"POST"},o.a.createElement(v,{get_token:this.getToken}),o.a.createElement("textarea",{rows:"10",cols:"100",onChange:function(t){return e.setState({tweet:t.target.value})}},"Whats on your mind"),o.a.createElement("input",{type:"submit",className:"btn",value:"submit"})))}}]),n}(a.Component),E=(n(45),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).fetchComments=function(){var e="api/v1/tweets/comment/".concat(a.props.match.params.id);fetch(e).then((function(e){return e.json()})).then((function(e){return a.setState({comments:e})}))},a.componentWillMount=function(){a.fetchComments(a.props.match.params)},a.getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.followUser=function(e){p.a.post("api/v1/accounts/follow/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({to_follow:parseInt(e.target.id)}).then((function(e){return console.log("success")})).catch(console.error)},a.formSubmit=function(e){e.preventDefault();p.a.post("api/v1/tweets/comment/add/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:parseInt(a.props.match.params.id),comment:a.state.newComment}).then((function(e){return console.log("error")})).catch(console.error)},a.state={comments:[],newComment:"",csrfMiddleWareToken:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"new-comment"},o.a.createElement("form",{method:"POST",onSubmit:this.formSubmit},o.a.createElement(v,{get_token:this.getToken}),o.a.createElement("h4",null,"Add a new comment"),o.a.createElement("textarea",{rows:"5",cols:"100",onChange:function(t){return e.setState({newComment:t.target.value})}}),o.a.createElement("input",{type:"submit",className:"btn",value:"submit"}))),o.a.createElement("div",{className:"comments"},o.a.createElement("h3",null,"Comments"),this.state.comments.length?this.state.comments.map((function(t){return o.a.createElement("div",{className:"comment"},o.a.createElement("h4",null,t.username,": ",t.comment),parseInt(e.props.match.params.loggedInUserId)!==parseInt(t.user)?o.a.createElement("button",{className:"btn",id:t.user,onClick:e.followUser},"follow"):null)})):o.a.createElement("h4",null,"There are no comments for this tweet!"))))}}]),n}(a.Component)),k=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getLoggedInUser=function(){fetch("api/v1/tweets/user/id").then((function(e){return e.json()})).then((function(e){return a.setState({loggedInUserId:e.id})}))},a.getUserProfiler=function(){fetch("api/v1/accounts/profile/").then((function(e){return e.json()})).then((function(e){return a.setState({profile:e})}))},a.reload_tweets=function(){fetch("api/v1/tweets/").then((function(e){return e.json()})).then((function(e){return a.setState({tweets:e})}))},a.componentWillMount=function(){a.getLoggedInUser(),a.getUserProfiler(),a.reload_tweets()},a.state={tweets:[],profile:void 0,loggedInUserId:-1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(d,null),o.a.createElement("div",{class:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(f.a,{exact:!0,path:"/"},o.a.createElement("section",{className:"profile"},o.a.createElement("h1",null,"Profile"),o.a.createElement("img",{src:"https://via.placeholder.com/50C/O https://placeholder.com/"}),o.a.createElement("h3",null,"Username: ",void 0!==this.state.profile?this.state.profile.username:""),o.a.createElement("h4",null,void 0!==this.state.profile?this.state.profile.followers:null," Followers"),o.a.createElement("h4",null,void 0!==this.state.profile?this.state.profile.following.length:null,"  Following")),o.a.createElement("section",{className:"tweets"},this.state.tweets.map((function(t){return o.a.createElement(g,{src:"",id:t.id,user:t.user,tweet:t.tweet,username:t.username,likes:t.likes.length,comments:t.comments.length,retweets:0,loggedInUserId:e.state.loggedInUserId})}))))),o.a.createElement("div",{className:"row-fluid"},o.a.createElement(f.a,{exact:!0,path:"/add"},o.a.createElement(w,null))),o.a.createElement("div",{className:"row-fluid"},o.a.createElement(f.a,{path:"/comments/:id/:loggedInUserId/",component:E}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("h4",null,"copy right\xa9 dr twitter 2020-2022"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.eb13e9e4.chunk.js.map