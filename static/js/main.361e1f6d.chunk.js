(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(14),n(3)),s=n(4),u=n(6),l=n(5),d=n(7);n(15);var m=function(t){var e=t.id;return r.a.createElement("img",{alt:"",src:"http://source.unsplash.com/".concat(e)})};var p=function(t){var e=t.pictures,n=t.lastIndex,a=t.picturesAmount;return r.a.createElement(r.a.Fragment,null,e.slice(n,n+a).map(function(t){return r.a.createElement(m,{key:t,id:t})}))},h=3,f=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).loadNextPicture=function(){t.setState({lastIndex:t.state.lastIndex+h})},t.state={pictures:[],ids:[],lastIndex:0},t}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://picsum.photos/v2/list").then(function(t){return t.json()}).then(function(e){return t.setState({pictures:e,ids:e.map(function(t){return t.url.split("photos/")[1].split('"')[0]})})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-container"},r.a.createElement(p,{pictures:this.state.ids,lastIndex:this.state.lastIndex,picturesAmount:h})),r.a.createElement("button",{onClick:this.loadNextPicture}," Next "))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.361e1f6d.chunk.js.map