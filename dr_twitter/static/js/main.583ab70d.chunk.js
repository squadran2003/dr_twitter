(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),l=(n(26),n(5)),s=n(6),i=n(7),m=n(8),u=n(11),h=n(9);n(27),n(28),n(29),n(30);var f=function(){var e={color:"white",textDecoration:"none",fontSize:"1.2em",fontWeight:"bold"};return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-container"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/"},"Home")),r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/add"},"Add New Tweet")),r.a.createElement("li",{className:"link"},r.a.createElement(u.b,{style:e,to:"/profile"},"Profile ")),r.a.createElement("li",{className:"last-link"},r.a.createElement("a",{href:"/logout/"},"Logout")))))},p=(n(36),function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"tweet"},r.a.createElement("img",{src:this.props.src}),r.a.createElement("p",null,this.props.username),r.a.createElement("p",null,this.props.tweet),r.a.createElement("span",null,this.props.likes," likes"),r.a.createElement("span",{className:"retweets"},this.props.retweets," retweets"),r.a.createElement("span",{className:"comments"},this.props.comments," comments"))}}]),n}(a.Component)),d=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).getCookie=function(e){var t;return document.cookie&&""!==document.cookie&&document.cookie.split(";").forEach((function(n){var a=n.trim().match(/(\w+)=(.*)/);void 0!==a&&a[1]===e&&(t=decodeURIComponent(a[2]))})),t},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.getCookie("csrftoken");this.props.get_token(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:this.getCookie("csrftoken")}))}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handelClick=function(){console.log(a.textInput.textContent)},a.getToken=function(e){a.setState({csrfMiddleWareToken:e})},a.state={csrfMiddleWareToken:""},a.textInput=r.a.createRef(),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"new-tweet"},r.a.createElement(d,{get_token:this.getToken}),r.a.createElement("textarea",{ref:this.textInput,rows:"10",cols:"100"},"Whats on your mind"),r.a.createElement("input",{type:"button",onClick:this.handelClick,className:"new-tweet-btn",value:"submit"})))}}]),n}(a.Component),v=function(e){Object(m.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("api/v1/tweets/").then((function(e){return e.json()})).then((function(e){return a.setState({tweets:e})}))},a.state={tweets:[]},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(f,null),r.a.createElement("div",{class:"container"},r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement("section",{class:"tweets"},this.state.tweets.map((function(e){return r.a.createElement(p,{src:"",tweet:e.tweet,username:e.username,likes:e.likes.length,comments:e.comments.length,retweets:0})}))),r.a.createElement("section",{class:"profile"},r.a.createElement("h1",null,"Profile"),r.a.createElement("img",{src:"https://via.placeholder.com/50C/O https://placeholder.com/"}),r.a.createElement("h3",null,"Username: squadran2003"),r.a.createElement("h4",null,"10 Followers"),r.a.createElement("h4",null,"12 Following"))),r.a.createElement(h.a,{exact:!0,path:"/add"},r.a.createElement(E,null))),r.a.createElement("footer",{className:"footer"},r.a.createElement("h4",null,"copy right\xa9 dr twitter 2020-2022"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.583ab70d.chunk.js.map