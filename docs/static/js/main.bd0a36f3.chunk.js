(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(a,e,t){a.exports=t(31)},22:function(a,e,t){},24:function(a,e,t){},31:function(a,e,t){"use strict";t.r(e);var n=t(2),c=t.n(n),o=t(6),d=t.n(o),l=(t(22),t(4)),i=t(11),r=t(12),s=t(15),f=t(13),u=t(16),b=(t(24),t(7)),m=t.n(b),h=t(5),p=t.n(h),v=t(14),E=["faBalanceScale","faCloudSun","faAtom","faBatteryHalf","faBicycle","faBellSlash","faBirthdayCake","faBookDead","faBroadcastTower","faCalendarAlt","faChargingStation","faCar","faCapsules","faCheckDouble","faCloudSunRain","faCloudRain","faCode","faEdit","faEject","faExchangeAlt","faEnvelopeOpenText","faFingerprint","faGraduationCap","faGlobe","faHome","faIdCard","faLaptop","faLaptopCode","faList","faMailBulk","faMicrophone","faMicrophoneAlt","faMoneyCheckAlt","faPlaneDeparture","faSeedling","faRecycle"],g=function(a){return Object(v.kebabCase)(a).replace("fa-","")},k=function(a){function e(){var a,t;Object(i.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(a=Object(f.a)(e)).call.apply(a,[this].concat(c)))).state={icons:[],key:0},t}return Object(u.a)(e,a),Object(r.a)(e,[{key:"palette",value:function(){var a=2+Math.ceil(10*Math.random()),e=m()({count:a,hue:m()()});return Object(l.a)(e).concat(Object(l.a)(e),Object(l.a)(e),Object(l.a)(e),Object(l.a)(e),Object(l.a)(e))}},{key:"changeIcons",value:function(){var a=E.sort(function(){return.5-Math.random()});this.setState({icons:a.slice(0,12).map(g)})}},{key:"changeColors",value:function(){this.setState({key:this.state.key+1})}},{key:"componentDidMount",value:function(){this.changeIcons()}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Icons"},this.state.icons.slice(0,6).map(function(e,t){return c.a.createElement("div",{className:"Icon",key:e},c.a.createElement(p.a,{icon:e,fill:a.palette()}))})),c.a.createElement("div",{className:"Title"},"Font Awesome, ",c.a.createElement("span",{className:"gradient"},"Colored")),c.a.createElement("div",{className:"Icons"},this.state.icons.slice(6,12).map(function(e,t){return c.a.createElement("div",{className:"Icon",key:e},c.a.createElement(p.a,{icon:e,fill:a.palette()}))})),c.a.createElement("div",{className:"Buttons"},c.a.createElement("div",{className:"Button",style:{background:"#FF4136"},onClick:function(){return a.changeColors()}},c.a.createElement(p.a,{icon:"sync-alt",fill0:"#01FF70",fill1:"#FFDC00"}),c.a.createElement("span",null,"Change colors")),c.a.createElement("div",{className:"Button",style:{background:"#0074D9"},onClick:function(){return a.changeIcons()}},c.a.createElement(p.a,{icon:"palette",fill0:"#001f3f"}),c.a.createElement("span",null,"Change icons"))),c.a.createElement("div",{className:"Legend"},c.a.createElement("div",null,"Color ",c.a.createElement("b",null,"individual pieces")," of ",c.a.createElement("a",{href:"https://fontawesome.com/",title:"Font Awesome website",target:"_blank"},"Font Awesome")," icons using React."),c.a.createElement("a",{href:"https://github.com/NTag/react-fontawesome",title:"View Github project"},"View on Github")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(0),w=t(1);C.b.add(w.b),C.b.add(w.o),C.b.add(w.a),C.b.add(w.c),C.b.add(w.e),C.b.add(w.d),C.b.add(w.f),C.b.add(w.g),C.b.add(w.h),C.b.add(w.i),C.b.add(w.l),C.b.add(w.k),C.b.add(w.j),C.b.add(w.m),C.b.add(w.p),C.b.add(w.n),C.b.add(w.q),C.b.add(w.r),C.b.add(w.s),C.b.add(w.u),C.b.add(w.t),C.b.add(w.v),C.b.add(w.x),C.b.add(w.w),C.b.add(w.y),C.b.add(w.z),C.b.add(w.A),C.b.add(w.B),C.b.add(w.C),C.b.add(w.D),C.b.add(w.E),C.b.add(w.F),C.b.add(w.G),C.b.add(w.I),C.b.add(w.K),C.b.add(w.J),C.b.add(w.L),C.b.add(w.H),d.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.bd0a36f3.chunk.js.map