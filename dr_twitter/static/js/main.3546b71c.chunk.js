(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){e.exports=n(45)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(28),n(5)),s=n(6),i=n(7),m=n(8),u=n(11),d=n(9);n(29),n(30),n(31),n(32);var h=function(){var e={color:"white",textDecoration:"none",fontSize:"1.2em",fontWeight:"bold"};return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-container"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/"},"Home")),r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/add"},"Add New Tweet")),r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/profile"},"Profile ")),r.a.createElement("li",{className:"last-link"},r.a.createElement("a",{href:"/logout/"},"Logout")))))},f=(n(38),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handelLike=function(){console.log(a.tweetId),console.log(a.props.tweet.id)},a.tweetId=r.a.createRef(),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"tweet"},r.a.createElement("input",{ref:this.tweetId,type:"hidden",value:this.props.tweet.id}),r.a.createElement("img",{src:this.props.src}),r.a.createElement("p",null,this.props.username),r.a.createElement("p",null,this.props.tweet),r.a.createElement("p",null,this.props.tweet.id),r.a.createElement("span",{className:"likes",onClick:this.handelLike},this.props.likes," likes"),r.a.createElement("span",{className:"retweets"},this.props.retweets," retweets"),r.a.createElement("span",{className:"comments"},this.props.comments," comments"))}}]),n}(a.Component)),p=n(22),w=n.n(p),E=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getCookie=function(e){var t;return document.cookie&&""!==document.cookie&&document.cookie.split(";").forEach((function(n){var a=n.trim().match(/(\w+)=(.*)/);void 0!==a&&a[1]===e&&(t=decodeURIComponent(a[2]))})),t},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.getCookie("csrftoken");this.props.get_token(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:this.getCookie("csrftoken")}))}}]),n}(a.Component),v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handelClick=function(){console.log(a.state.tweet)},a.getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.form_submit=function(e){e.preventDefault();w.a.post("api/v1/tweets/add/").set("X-CSRFToken",a.state.csrfMiddleWareToken).send({tweet:a.state.tweet}).then((function(e){return console.log("error")})).catch(console.error)},a.state={csrfMiddleWareToken:"",tweet:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"new-tweet",onSubmit:this.form_submit,method:"POST"},r.a.createElement(E,{get_token:this.getToken}),r.a.createElement("textarea",{rows:"10",cols:"100",onChange:function(t){return e.setState({tweet:t.target.value})}},"Whats on your mind"),r.a.createElement("input",{type:"submit",onClick:this.handelClick,className:"new-tweet-btn",value:"submit"})))}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).reload_tweets=function(){fetch("api/v1/tweets/").then((function(e){return e.json()})).then((function(e){return a.setState({tweets:e})}))},a.getTweetId=function(e){a.setState({selectedTweet:e})},a.componentWillMount=function(){a.reload_tweets()},a.state={tweets:[],selectedTweet:-1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(h,null),r.a.createElement("div",{class:"container"},r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement("section",{class:"tweets"},this.state.tweets.map((function(t){return r.a.createElement(f,{src:"",id:t,tweet:t.tweet,username:t.username,likes:t.likes.length,comments:t.comments.length,retweets:0,getTweetId:e.getTweetId})}))),r.a.createElement("section",{class:"profile"},r.a.createElement("h1",null,"Profile"),r.a.createElement("img",{src:"https://via.placeholder.com/50C/O https://placeholder.com/"}),r.a.createElement("h3",null,"Username: squadran2003"),r.a.createElement("h4",null,"10 Followers"),r.a.createElement("h4",null,"12 Following"))),r.a.createElement(d.a,{exact:!0,path:"/add"},r.a.createElement(v,null))),r.a.createElement("footer",{className:"footer"},r.a.createElement("h4",null,"copy right\xa9 dr twitter 2020-2022"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3546b71c.chunk.js.map