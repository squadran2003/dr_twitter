(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){e.exports=n(46)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=(n(28),n(4)),s=n(5),i=n(6),m=n(7),u=n(9),f=n(10);n(29),n(30),n(31),n(32);var h=function(){var e={color:"white",textDecoration:"none",fontSize:"1.2em",fontWeight:"bold"};return o.a.createElement("div",null,o.a.createElement("nav",{className:"nav-container"},o.a.createElement("ul",{className:"nav"},o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/"},"Home")),o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/add"},"Add New Tweet")),o.a.createElement("li",{className:"link"},o.a.createElement(u.b,{style:e,to:"/profile"},"Profile ")),o.a.createElement("li",{className:"last-link"},o.a.createElement("a",{href:"/logout/"},"Logout")))))},d=(n(38),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).addLikes=function(){var e="api/v1/tweets/like/".concat(a.props.id);fetch(e).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},a.tweetId=o.a.createRef(),a.linkStyle={color:"#2c3b40",textDecoration:"none",fontSize:"1em"},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"tweet"},o.a.createElement("img",{src:"http://via.placeholder.com/50"}),o.a.createElement("p",null,this.props.username),o.a.createElement("p",null,this.props.tweet),o.a.createElement("p",null,this.props.likes.length),o.a.createElement("span",{className:this.props.likes<1?"likes fa fa-heart":"likes fa fa-heart red-heart","aria-hidden":"true",onClick:this.addLikes},this.props.likes," likes"),o.a.createElement("span",{className:"retweets fa fa-retweet"},this.props.retweets," retweets"),o.a.createElement("span",{className:"comments fa fa-comments"},o.a.createElement(u.b,{style:this.linkStyle,to:"/comments/".concat(this.props.id,"/")},this.props.comments," ",1==this.props.comments?"comment":"comments")))}}]),n}(a.Component)),p=n(13),E=n.n(p),v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getCookie=function(e){var t;return document.cookie&&""!==document.cookie&&document.cookie.split(";").forEach((function(n){var a=n.trim().match(/(\w+)=(.*)/);void 0!==a&&a[1]===e&&(t=decodeURIComponent(a[2]))})),t},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.getCookie("csrftoken");this.props.get_token(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:this.getCookie("csrftoken")}))}}]),n}(a.Component),w=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.form_submit=function(e){e.preventDefault();E.a.post("api/v1/tweets/add/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:a.state.tweet}).then((function(e){return console.log("error")})).catch(console.error)},a.state={csrfMiddleWareToken:"",tweet:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"test"},o.a.createElement("form",{className:"new-tweet",onSubmit:this.form_submit,method:"POST"},o.a.createElement(v,{get_token:this.getToken}),o.a.createElement("textarea",{rows:"10",cols:"100",onChange:function(t){return e.setState({tweet:t.target.value})}},"Whats on your mind"),o.a.createElement("input",{type:"submit",className:"new-tweet-btn",value:"submit"})))}}]),n}(a.Component),k=(n(45),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).fetchComments=function(){var e="api/v1/tweets/comment/".concat(a.props.match.params.id);fetch(e).then((function(e){return e.json()})).then((function(e){return a.setState({comments:e})}))},a.componentWillMount=function(){a.fetchComments(a.props.match.params),console.log()},a.getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.followUser=function(e){console.log(e.target)},a.formSubmit=function(e){e.preventDefault();E.a.post("api/v1/tweets/comment/add/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:parseInt(a.props.match.params.id),comment:a.state.newComment}).then((function(e){return console.log("error")})).catch(console.error)},a.state={comments:[],newComment:"",csrfMiddleWareToken:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"new-comment"},o.a.createElement("form",{method:"POST",onSubmit:this.formSubmit},o.a.createElement(v,{get_token:this.getToken}),o.a.createElement("h4",null,"Add a new comment"),o.a.createElement("textarea",{rows:"5",cols:"100",onChange:function(t){return e.setState({newComment:t.target.value})}}),o.a.createElement("input",{type:"submit",className:"new-comment-btn",value:"submit"}))),o.a.createElement("div",{className:"comments"},o.a.createElement("h3",null,"Comments"),this.state.comments.length?this.state.comments.map((function(t){return o.a.createElement("div",{className:"comment"},o.a.createElement("h4",null,"User ",t.user,": ",t.comment),o.a.createElement("button",{id:t.user,onClick:e.followUser,value:"follow"}))})):o.a.createElement("h4",null,"There are no comments for this tweet!"))))}}]),n}(a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).reload_tweets=function(){fetch("api/v1/tweets/").then((function(e){return e.json()})).then((function(e){return a.setState({tweets:e})}))},a.componentWillMount=function(){a.reload_tweets()},a.state={tweets:[]},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(h,null),o.a.createElement("div",{class:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(f.a,{exact:!0,path:"/"},o.a.createElement("section",{class:"profile"},o.a.createElement("h1",null,"Profile"),o.a.createElement("img",{src:"https://via.placeholder.com/50C/O https://placeholder.com/"}),o.a.createElement("h3",null,"Username: squadran2003"),o.a.createElement("h4",null,"10 Followers"),o.a.createElement("h4",null,"12 Following")),o.a.createElement("section",{class:"tweets"},this.state.tweets.map((function(e){return o.a.createElement(d,{src:"",id:e.id,user:e.user,tweet:e.tweet,username:e.username,likes:e.likes.length,comments:e.comments.length,retweets:0})}))))),o.a.createElement("div",{className:"row-fluid"},o.a.createElement(f.a,{exact:!0,path:"/add"},o.a.createElement(w,null))),o.a.createElement("div",{className:"row-fluid"},o.a.createElement(f.a,{path:"/comments/:id/",component:k}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("h4",null,"copy right\xa9 dr twitter 2020-2022"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.9abf87a8.chunk.js.map