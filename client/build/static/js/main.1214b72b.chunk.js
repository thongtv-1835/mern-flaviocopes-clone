(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},44:function(e,t,a){e.exports=a(93)},49:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),s=a.n(o),c=(a(49),a(3)),i=a(2),l=a(6),p=a(4),u=a(7),m=a(95),d=a(98),h=a(97),g=a(5),E=a(9),b=a.n(E),f=a(21),v=a.n(f),O=function(e){return{type:"SET_CURRENT_USER",payload:e}},y=a(15),j=a(41),N=a(16);var S={isAuthenticated:!1,user:{}},T={},C={},R={},k=Object(y.c)({auth:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(N.a)({},t,{isAuthenticated:(e=a.payload,!(void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length)),user:a.payload});default:return t}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;case"CLEAR_ERRORS":return{};default:return e}},tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TAG":return Object(N.a)({},e,{tag:t.payload});case"GET_TAGS":return Object(N.a)({},e,{data:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return Object(N.a)({},e,{data:t.payload});case"GET_POST":return Object(N.a)({},e,{post:t.payload});default:return e}}}),_=[j.a],w=Object(y.e)(k,{},Object(y.d)(y.a.apply(void 0,_),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),P=a(13),D=(a(75),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.loginUser(e.state)},e.state={email:"",password:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"text-center"},"Login"),r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email",onChange:this.onChange,className:this.props.errors.email?"is-invalid":""}),this.props.errors.email&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.email),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"on",onChange:this.onChange,className:this.props.errors.password?"is-invalid":""}),this.props.errors.password&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.password),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component)),x=Object(g.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){t({type:"CLEAR_ERRORS"}),b.a.post("/api/user/login",e).then(function(e){var a=e.data.token;b.a.defaults.headers.common.Authorization=a,localStorage.setItem("jwtToken",a);var n=v()(a);t(O(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(D),G=a(94),A=(a(76),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Dashboard"),r.a.createElement("div",{className:"text-center"},r.a.createElement(G.a,{to:"/",className:"btn bg-gray"},"Blog Page"),r.a.createElement(G.a,{to:"/create-post",className:"btn bg-green"},"Create Post"),r.a.createElement(G.a,{to:"/create-tag",className:"btn bg-green"},"Create Tag")))}),M=function(){return function(e){b.a.get("/api/tag/all").then(function(t){return e({type:"GET_TAGS",payload:t.data})}).catch(function(t){return e({type:"GET_ERRORS",payload:t.response.data})})}},Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.createTag(e.state,e.props.history)},e.state={name:"",description:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Create Tag"),r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("input",{type:"text",name:"name",className:this.props.errors.name?"is-invalid":"",onChange:this.onChange}),this.props.errors.name&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.name),r.a.createElement("input",{type:"text",name:"description",className:this.props.errors.description?"is-invalid":"",onChange:this.onChange}),this.props.errors.description&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.description),r.a.createElement("input",{type:"submit",name:"Create"})))}}]),t}(n.Component),U=Object(g.b)(function(e){return{errors:e.errors}},{createTag:function(e,t){return function(a){b.a.post("/api/tag",e).then(function(e){return t.push("/edit-tag/id/".concat(e.data._id))}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Y),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.editTag(e.props.match.params.id,e.state)},e.state={name:"",description:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadTagData(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){if(e.tags.tag){var t=e.tags.tag,a=t.name,n=t.description;this.setState({name:a,description:n})}}},{key:"render",value:function(){return this.props.tags.tag?r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Edit tag"),r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:this.state.name,className:this.props.errors.name?"is-invalid":"",onChange:this.onChange}),this.props.errors.name&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.name),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",name:"description",id:"description",value:this.state.description,className:this.props.errors.description?"is-invalid":"",onChange:this.onChange}),this.props.errors.description&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.description),r.a.createElement("input",{type:"submit",name:"Update"}))):r.a.createElement("h1",null,"No Tag Found")}}]),t}(n.Component),L=Object(g.b)(function(e){return{errors:e.errors,tags:e.tags}},{editTag:function(e,t){return function(a){b.a.put("/api/tag/id/".concat(e),t).then(function(e){return window.location.reload()}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}},loadTagData:function(e){return function(t){b.a.get("/api/tag/id/".concat(e)).then(function(e){return t({type:"GET_TAG",payload:e.data})}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(I),V=function(e){return function(t){b.a.get("/api/post/cuid/".concat(e)).then(function(e){return t({type:"GET_POST",payload:e.data})}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}},B=(a(77),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.createPost(e.state,e.props.history)},e.state={title:"",subtitle:"",content:"",tag:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getTags()}}]),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Create Post"),r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("input",{name:"title",onChange:this.onChange,className:this.props.errors.title?"is-invalid":"",placeholder:"Title"}),this.props.errors.title&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.title),r.a.createElement("input",{name:"subtitle",onChange:this.onChange,className:this.props.errors.subtitle?"is-invalid":"",placeholder:"Subtitle"}),this.props.errors.subtitle&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.subtitle),r.a.createElement("textarea",{name:"content",onChange:this.onChange,className:this.props.errors.content?"is-invalid":"",placeholder:"Content"}),this.props.errors.content&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.content),r.a.createElement("select",{name:"tag",onChange:this.onChange,className:this.props.errors.tag?"is-invalid":""},r.a.createElement("option",{value:""},"--Select Tag--"),this.props.tags.data&&this.props.tags.data.map(function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})),this.props.errors.tag&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.tag),r.a.createElement("input",{type:"submit",value:"Publish"})))}}]),t}(n.PureComponent)),W=Object(g.b)(function(e){return{errors:e.errors,tags:e.tags}},{getTags:M,createPost:function(e,t){return function(a){b.a.post("/api/post",e).then(function(e){return t.push("/edit-post/cuid/".concat(e.data.cuid))}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(B),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this))).onChange=function(t){e.setState(Object(P.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.editPost(e.props.match.params.cuid,e.state)},e.state={title:"",subtitle:"",content:"",tag:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPost(this.props.match.params.cuid),this.props.getTags()}},{key:"componentWillReceiveProps",value:function(e){if(e.posts.post){var t=e.posts.post,a=t.title,n=t.subtitle,r=t.content,o=e.posts.post.tag._id;this.setState({title:a,subtitle:n,content:r,tag:o})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Edit Post"),r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("label",{for:"title"},"Title"),r.a.createElement("input",{name:"title",id:"title",onChange:this.onChange,className:this.props.errors.title?"is-invalid":"",value:this.state.title}),this.props.errors.title&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.title),r.a.createElement("label",{for:"subtitle"},"Subtitle"),r.a.createElement("input",{name:"subtitle",id:"subtitle",onChange:this.onChange,className:this.props.errors.subtitle?"is-invalid":"",value:this.state.subtitle}),this.props.errors.subtitle&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.subtitle),r.a.createElement("label",{for:"content"},"Content"),r.a.createElement("textarea",{name:"content",id:"content",onChange:this.onChange,className:this.props.errors.content?"is-invalid":"",value:this.state.content}),this.props.errors.content&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.content),r.a.createElement("label",{for:"tag"},"Tag"),r.a.createElement("select",{name:"tag",id:"tag",onChange:this.onChange,className:this.props.errors.tag?"is-invalid":""},r.a.createElement("option",{value:""},"--Select Tag--"),this.props.tags.data&&this.props.tags.data.map(function(t){return e.state.tag===t._id?r.a.createElement("option",{value:t._id,key:t._id,selected:!0},t.name):r.a.createElement("option",{value:t._id,key:t._id},t.name)})),this.props.errors.tag&&r.a.createElement("span",{className:"invalid-feedback"},this.props.errors.tag),r.a.createElement("input",{type:"submit",value:"Update"})))}}]),t}(n.PureComponent),X=Object(g.b)(function(e){return{errors:e.errors,tags:e.tags,posts:e.posts}},{getTags:M,editPost:function(e,t){return function(a){b.a.put("/api/post/cuid/".concat(e),t).then(function(e){return window.location.reload()}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}},getPost:V})(F),J=a(18),z=a.n(J),H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getTags()}},{key:"render",value:function(){return r.a.createElement("aside",null,r.a.createElement("p",null,r.a.createElement(G.a,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"home"},"\ud83c\udfe1")," Home")),r.a.createElement("p",null,"Hi ",r.a.createElement("span",{role:"img","aria-label":"wave"},"\ud83d\udc4b\ud83c\udffc")," I'm Jed, a web developer.",r.a.createElement("br",null),"I create this blog just for learning ReactJS and NodeJS."),r.a.createElement("p",null,"Source: ",r.a.createElement(G.a,{to:"https://flaviocopes.com/"},"Flaviocopes.com")),r.a.createElement("p",null,r.a.createElement("button",null,r.a.createElement("span",{role:"img","aria-label":"moon"},"\ud83c\udf13")," Light|dark mode")),r.a.createElement("h4",null,"My Recommended Courses"),r.a.createElement("ul",null,r.a.createElement("li",null,"Course 1"),r.a.createElement("li",null,"Course 2"),r.a.createElement("li",null,"Course 3"),r.a.createElement("li",null,"Course 4")),this.props.tags.data&&r.a.createElement("div",{className:"tags-cloud"},this.props.tags.data.map(function(e){return r.a.createElement(G.a,{key:e._id,to:"/tag/".concat(e.slug),className:"bg-".concat(e.slug)},e.name)})))}}]),t}(n.PureComponent),$=Object(g.b)(function(e){return{tags:e.tags}},{getTags:M})(H),q=(a(36),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement($,null),r.a.createElement("article",{className:"post-container"},r.a.createElement("ul",{className:"post-list"},this.props.posts.data&&this.props.posts.data.map(function(e){return r.a.createElement("li",{key:e.cuid,className:"post-item"},r.a.createElement(G.a,{to:"/post/".concat(e.slug,"-").concat(e.cuid)},r.a.createElement("h3",{className:"title"},e.title),r.a.createElement("p",{className:"subtitle"},e.subtitle)),r.a.createElement("div",{className:"date-tag"},r.a.createElement(z.a,{format:"MMM DD YYYY"},e.dateAdded),r.a.createElement("div",{className:"tag"},r.a.createElement(G.a,{className:"button-tag bg-".concat(e.tag.slug),to:"/tag/".concat(e.tag.slug)},e.tag.name))))}))))}}]),t}(n.PureComponent)),K=Object(g.b)(function(e){return{posts:e.posts}},{getPosts:function(){return function(e){b.a.get("/api/post/all").then(function(t){e({type:"GET_POSTS",payload:t.data})}).catch(function(t){return e({type:"GET_ERRORS",payload:t.response.data})})}}})(q),Q=a(42),Z=a.n(Q),ee=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.slugcuid.split("-").pop();this.props.getPost(e)}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement($,null),this.props.posts.post&&r.a.createElement("article",{className:"post-container"},r.a.createElement("h1",null,this.props.posts.post.title),r.a.createElement("p",null,this.props.posts.post.subtitle),r.a.createElement("p",{className:"single-post-date"},"Published ",r.a.createElement(z.a,{format:"MMM DD YYYY"},this.props.posts.post.dateAdded)),r.a.createElement("div",{className:"single-post-content"},Z()(this.props.posts.post.content))))}}]),t}(n.PureComponent),te=Object(g.b)(function(e){return{posts:e.posts}},{getPost:V})(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPostsByTagSlug(this.props.match.params.tag)}},{key:"componentWillReceiveProps",value:function(e){e.match.params.tag!==this.props.match.params.tag&&this.props.getPostsByTagSlug(e.match.params.tag)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement($,null),r.a.createElement("article",{className:"post-container"},r.a.createElement("ul",{className:"post-list"},this.props.posts.data&&this.props.posts.data.map(function(e){return r.a.createElement("li",{key:e.cuid,className:"post-item"},r.a.createElement(G.a,{to:"/post/".concat(e.slug,"-").concat(e.cuid)},r.a.createElement("h3",{className:"title"},e.title),r.a.createElement("p",{className:"subtitle"},e.subtitle)),r.a.createElement("div",{className:"date-tag"},r.a.createElement(z.a,{format:"MMM DD YYYY"},e.dateAdded),r.a.createElement("div",{className:"tag"},r.a.createElement(G.a,{to:"/tag/".concat(e.tag.slug),className:"button-tag bg-".concat(e.tag.slug)},e.tag.name))))}))))}}]),t}(n.PureComponent),ne=Object(g.b)(function(e){return{posts:e.posts}},{getPostsByTagSlug:function(e){return function(t){b.a.get("/api/post/tag/slug/".concat(e)).then(function(e){t({type:"GET_POSTS",payload:e.data})}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(ae),re=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={hello:"Hello"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.hello," + ",this.props.name," + ","production"))}}]),t}(r.a.Component);re.defaultProps={name:"World",bar:"Bar"},re.displayName="Foo";var oe=re,se=a(43),ce=a(96),ie=Object(g.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(se.a)(e,["component","auth"]);return a.isAuthenticated?r.a.createElement(d.a,Object.assign({},n,{component:t})):r.a.createElement(ce.a,{to:"/login"})});a(92);if(b.a.defaults.baseURL="https://flaviocopes-clone.herokuapp.com/",localStorage.getItem("jwtToken")){var le=localStorage.getItem("jwtToken");b.a.defaults.headers.common.Authorization=le;var pe=v()(le);w.dispatch(O(pe)),pe.exp<Date.now()/1e3&&(w.dispatch(function(e){delete b.a.defaults.headers.common.Authorization,localStorage.removeItem("jwtToken"),e(O({}))}),window.location.href="/")}var ue=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{store:w},r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{exact:!0,path:"/login",component:x}),r.a.createElement(d.a,{exact:!0,path:"/",component:K}),r.a.createElement(d.a,{exact:!0,path:"/post/:slugcuid",component:te}),r.a.createElement(d.a,{exact:!0,path:"/tag/:tag",component:ne}),r.a.createElement(d.a,{exact:!0,path:"/hello",component:oe}),r.a.createElement(h.a,null,r.a.createElement(ie,{exact:!0,path:"/dashboard",component:A})),r.a.createElement(h.a,null,r.a.createElement(ie,{exact:!0,path:"/create-tag",component:U})),r.a.createElement(h.a,null,r.a.createElement(ie,{exact:!0,path:"/edit-tag/id/:id",component:L})),r.a.createElement(h.a,null,r.a.createElement(ie,{exact:!0,path:"/create-post",component:W})),r.a.createElement(h.a,null,r.a.createElement(ie,{exact:!0,path:"/edit-post/cuid/:cuid",component:X})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.1214b72b.chunk.js.map