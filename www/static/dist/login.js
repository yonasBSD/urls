var c,E,Q,X,H={},q=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function K(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var _,i,o,s=arguments,u={};for(o in t)o=="key"?_=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(s[o]);if(n!=null&&(u.children=n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return A(e,u,_,i,null)}function A(e,t,n,_,i){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++c.__v:i};return c.vnode!=null&&c.vnode(o),o}function j(e){return e.children}function S(e,t){this.props=e,this.context=t}function N(e,t){if(t==null)return e.__?N(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?N(e):null}function Y(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Y(e)}}function Z(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!L.__r++||X!==c.debounceRendering)&&((X=c.debounceRendering)||Q)(L)}function L(){for(var e;L.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,_,i,o,s,u;t.__d&&(s=(o=(n=t).__v).__e,(u=n.__P)&&(_=[],(i=C({},o)).__v=o.__v+1,B(u,o,i,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[s]:null,_,s==null?N(o):s,o.__h),ee(_,o),o.__e!=s&&Y(o)))})}function _e(e,t,n,_,i,o,s,u,p,h){var r,v,f,a,g,m,d,y=_&&_.__k||q,k=y.length;for(n.__k=[],r=0;r<t.length;r++)if((a=n.__k[r]=(a=t[r])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?A(null,a,null,null,a):Array.isArray(a)?A(j,{children:a},null,null,null):a.__b>0?A(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(f=y[r])===null||f&&a.key==f.key&&a.type===f.type)y[r]=void 0;else for(v=0;v<k;v++){if((f=y[v])&&a.key==f.key&&a.type===f.type){y[v]=void 0;break}f=null}B(e,a,f=f||H,i,o,s,u,p,h),g=a.__e,(v=a.ref)&&f.ref!=v&&(d||(d=[]),f.ref&&d.push(f.ref,null,a),d.push(v,a.__c||g,a)),g!=null?(m==null&&(m=g),typeof a.type=="function"&&a.__k!=null&&a.__k===f.__k?a.__d=p=te(a,p,e):p=ne(e,a,f,y,g,p),h||n.type!=="option"?typeof n.type=="function"&&(n.__d=p):e.value=""):p&&f.__e==p&&p.parentNode!=e&&(p=N(f))}for(n.__e=m,r=k;r--;)y[r]!=null&&(typeof n.type=="function"&&y[r].__e!=null&&y[r].__e==n.__d&&(n.__d=N(_,r+1)),re(y[r],y[r]));if(d)for(r=0;r<d.length;r++)oe(d[r],d[++r],d[++r])}function te(e,t,n){var _,i;for(_=0;_<e.__k.length;_++)(i=e.__k[_])&&(i.__=e,t=typeof i.type=="function"?te(i,t,n):ne(n,i,i,e.__k,i.__e,t));return t}function ne(e,t,n,_,i,o){var s,u,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),s=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<_.length;p+=2)if(u==i)break e;e.insertBefore(i,o),s=o}return s!==void 0?s:i.nextSibling}function we(e,t,n,_,i){var o;for(o in n)o==="children"||o==="key"||o in t||$(e,o,null,n[o],_);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||$(e,o,t[o],n[o],_)}function ie(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ke.test(t)?n:n+"px"}function $(e,t,n,_,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||ie(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||ie(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?ae:le,o):e.removeEventListener(t,o?ae:le,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch(s){}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function le(e){this.l[e.type+!1](c.event?c.event(e):e)}function ae(e){this.l[e.type+!0](c.event?c.event(e):e)}function B(e,t,n,_,i,o,s,u,p){var h,r,v,f,a,g,m,d,y,k,I,x=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=t.__e=n.__e,t.__h=null,o=[u]),(h=c.__b)&&h(t);try{e:if(typeof x=="function"){if(d=t.props,y=(h=x.contextType)&&_[h.__c],k=h?y?y.props.value:h.__:_,n.__c?m=(r=t.__c=n.__c).__=r.__E:("prototype"in x&&x.prototype.render?t.__c=r=new x(d,k):(t.__c=r=new S(d,k),r.constructor=x,r.render=xe),y&&y.sub(r),r.props=d,r.state||(r.state={}),r.context=k,r.__n=_,v=r.__d=!0,r.__h=[]),r.__s==null&&(r.__s=r.state),x.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=C({},r.__s)),C(r.__s,x.getDerivedStateFromProps(d,r.__s))),f=r.props,a=r.state,v)x.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(x.getDerivedStateFromProps==null&&d!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,k),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,k)===!1||t.__v===n.__v){r.props=d,r.state=r.__s,t.__v!==n.__v&&(r.__d=!1),r.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,a,g)})}r.context=k,r.props=d,r.state=r.__s,(h=c.__r)&&h(t),r.__d=!1,r.__v=t,r.__P=e,h=r.render(r.props,r.state,r.context),r.state=r.__s,r.getChildContext!=null&&(_=C(C({},_),r.getChildContext())),v||r.getSnapshotBeforeUpdate==null||(g=r.getSnapshotBeforeUpdate(f,a)),I=h!=null&&h.type===j&&h.key==null?h.props.children:h,_e(e,Array.isArray(I)?I:[I],t,n,_,i,o,s,u,p),r.base=t.__e,t.__h=null,r.__h.length&&s.push(r),m&&(r.__E=r.__=null),r.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=be(n.__e,t,n,_,i,o,s,p);(h=c.diffed)&&h(t)}catch(P){t.__v=null,(p||o!=null)&&(t.__e=u,t.__h=!!p,o[o.indexOf(u)]=null),c.__e(P,t,n)}}function ee(e,t){c.__c&&c.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){c.__e(_,n.__v)}})}function be(e,t,n,_,i,o,s,u){var p,h,r,v,f=n.props,a=t.props,g=t.type,m=0;if(g==="svg"&&(i=!0),o!=null){for(;m<o.length;m++)if((p=o[m])&&(p===e||(g?p.localName==g:p.nodeType==3))){e=p,o[m]=null;break}}if(e==null){if(g===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,a.is&&a),o=null,u=!1}if(g===null)f===a||u&&e.data===a||(e.data=a);else{if(o=o&&q.slice.call(e.childNodes),h=(f=n.props||H).dangerouslySetInnerHTML,r=a.dangerouslySetInnerHTML,!u){if(o!=null)for(f={},v=0;v<e.attributes.length;v++)f[e.attributes[v].name]=e.attributes[v].value;(r||h)&&(r&&(h&&r.__html==h.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(we(e,a,f,i,u),r)t.__k=[];else if(m=t.props.children,_e(e,Array.isArray(m)?m:[m],t,n,_,i&&g!=="foreignObject",o,s,e.firstChild,u),o!=null)for(m=o.length;m--;)o[m]!=null&&K(o[m]);u||("value"in a&&(m=a.value)!==void 0&&(m!==e.value||g==="progress"&&!m)&&$(e,"value",m,f.value,!1),"checked"in a&&(m=a.checked)!==void 0&&m!==e.checked&&$(e,"checked",m,f.checked,!1))}return e}function oe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){c.__e(_,n)}}function re(e,t,n){var _,i,o;if(c.unmount&&c.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||oe(_,null,t)),n||typeof e.type=="function"||(n=(i=e.__e)!=null),e.__e=e.__d=void 0,(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(s){c.__e(s,t)}_.base=_.__P=null}if(_=e.__k)for(o=0;o<_.length;o++)_[o]&&re(_[o],t,n);i!=null&&K(i)}function xe(e,t,n){return this.constructor(e,n)}function R(e,t,n){var _,i,o;c.__&&c.__(e,t),i=(_=typeof n=="function")?null:n&&n.__k||t.__k,o=[],B(t,e=(!_&&n||t).__k=l(j,null,[e]),i||H,H,t.ownerSVGElement!==void 0,!_&&n?[n]:i?null:t.firstChild?q.slice.call(t.childNodes):null,o,!_&&n?n:i?i.__e:t.firstChild,_),ee(o,e)}c={__e:function(e,t){for(var n,_,i;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&_.getDerivedStateFromError!=null&&(n.setState(_.getDerivedStateFromError(e)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),i=n.__d),i)return n.__E=n}catch(o){e=o}throw e},__v:0},S.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Z(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Z(this))},S.prototype.render=j,E=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,L.__r=0;var se,w,ce,O=0,U=[],ue=c.__b,fe=c.__r,pe=c.diffed,de=c.__c,he=c.unmount;function Ce(e,t){c.__h&&c.__h(w,e,O||t),O=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function b(e){return O=1,Se(me,e)}function Se(e,t,n){var _=Ce(se++,2);return _.t=e,_.__c||(_.__=[n?n(t):me(void 0,t),function(i){var o=_.t(_.__[0],i);_.__[0]!==o&&(_.__=[o,_.__[1]],_.__c.setState({}))}],_.__c=w),_.__}function Ee(){U.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(D),e.__H.__h.forEach(W),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}}),U=[]}c.__b=function(e){w=null,ue&&ue(e)},c.__r=function(e){fe&&fe(e),se=0;var t=(w=e.__c).__H;t&&(t.__h.forEach(D),t.__h.forEach(W),t.__h=[])},c.diffed=function(e){pe&&pe(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(U.push(t)!==1&&ce===c.requestAnimationFrame||((ce=c.requestAnimationFrame)||function(n){var _,i=function(){clearTimeout(o),ge&&cancelAnimationFrame(_),setTimeout(n)},o=setTimeout(i,100);ge&&(_=requestAnimationFrame(i))})(Ee)),w=void 0},c.__c=function(e,t){t.some(function(n){try{n.__h.forEach(D),n.__h=n.__h.filter(function(_){return!_.__||W(_)})}catch(_){t.some(function(i){i.__h&&(i.__h=[])}),t=[],c.__e(_,n.__v)}}),de&&de(e,t)},c.unmount=function(e){he&&he(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(D)}catch(n){c.__e(n,t.__v)}};var ge=typeof requestAnimationFrame=="function";function D(e){var t=w;typeof e.__c=="function"&&e.__c(),w=t}function W(e){var t=w;e.__c=e.__(),w=t}function me(e,t){return typeof t=="function"?t(e):t}async function je(e,t){let n=window.__xsrf_token;return await(await fetch("/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-XSRF-Token":n},body:JSON.stringify({query:e,variables:t})})).json()}function z([e]){return e}function V(e,{onCommit:t,onError:n}){let[_,i]=b(!1),[o,s]=b(void 0);if(o!==void 0)throw o;return{commit:p=>{i(!0),je(e,p).then(({data:h,errors:r})=>{i(!1),r!=null?typeof n=="function"?n(r):s(r):t(h)}).catch(h=>s(h))},inFlight:_}}function G({size:e="small",style:t=""}){return l("svg",{xmlns:"http://www.w3.org/2000/svg",class:`${e==="large"?"h-8 w-8":"h-4 w-4"} ${t!=null?t:""}`,viewBox:"0 0 24 24",stroke:"none",fill:"currentColor"},l("rect",{x:"10",y:"0",width:"4",height:"8",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 6.5) rotate(45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.125s",repeatCount:"indefinite"})),l("rect",{x:"16",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 17.5) rotate(-45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.375s",repeatCount:"indefinite"})),l("rect",{x:"10",y:"16",width:"4",height:"8",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 17.5) rotate(45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.625s",repeatCount:"indefinite"})),l("rect",{x:"0",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 6.5) rotate(-45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.875s",repeatCount:"indefinite"})))}function T({title:e,onClick:t,disabled:n=!1,loading:_=!1,type:i="default",style:o}){let s=`h-8 px-2 flex space-x-2 justify-center items-center rounded-md font-bold ${o!=null?o:""}`;switch(i){case"flat":s+=" bg-white text-black",n||(s+=" hover:bg-gray-200");break;case"default":default:s+=" bg-blue-500 text-white",n||(s+=" hover:bg-blue-400")}return n===!0&&(s+=" opacity-80 cursor-not-allowed"),l("button",{class:s,onClick:n===!0?void 0:t},l("div",null,e),_===!0&&l(G,null))}function Ne(){window.location.href=window.location.href}function Te(e){let t={};for(let n of Object.getOwnPropertyNames(e))t[n]=e[n];return JSON.stringify(t)}function Ie({error:e}){return l("div",{class:"w-full flex justify-center p-8"},l("div",{class:"w-full max-w-3xl bg-red-500 rounded-lg p-4"},l("h1",{class:"text-white text-xl font-semibold"},"Error"),l("p",{class:"text-red-100"},"Sorry, something went wrong."),l("pre",{class:"text-white bg-red-900 rounded-lg p-4 mt-2 whitespace-pre-wrap break-all"},Te(e)),l(T,{title:"Reload Page",onClick:Ne,type:"flat",style:"w-full mt-2"})))}var J=class extends S{constructor(){super();this.state={error:!1}}componentDidCatch(t){console.error(t),this.setState({error:t})}render({children:t},{error:n}){return n!==!1?l(Ie,{error:n}):t}},ve=J;function F({value:e,onChange:t,type:n,label:_,placeholder:i,style:o}){let[s]=b(`input-id-${Math.floor(Math.random()*1e4)}`);return l("div",{class:`w-full ${o!=null?o:""}`},l("label",{class:"text-gray-500 italic",for:s},_),l("input",{class:"w-full p-2 text-md rounded-md bg-gray-200 dark:bg-gray-600 text-black dark:text-white",id:s,type:n!=null?n:"text",value:e,onInput:u=>typeof t=="function"&&t(u.target.value),placeholder:i}))}var Pe=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})),ye=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}));function M({type:e="info",message:t,style:n}){let _=`flex align-start p-3 rounded-md block font-semibold ${n!=null?n:""}`,i;switch(e){case"error":_+=" bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",i=ye;break;case"warning":_+=" bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",i=ye;break;case"info":default:_+=" bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",i=Pe}return l("div",{class:_},l("div",{class:"mr-2"},i),l("p",{class:"leading-snug"},t))}function He(){let[e,t]=b(""),[n,_]=b(""),[i,o]=b(!1),[s,u]=b(null),[p,h]=b(null),r=V(z`
    mutation RequestLogin($email: String!) {
      requestLogin(email: $email) {
        ok
      }
    }
  `,{onCommit:()=>{h(`A login code was sent to ${e}`),u(null),o(!0)},onError:d=>{u(`Could not request code: ${d[0].message}`)}}),v=()=>r.commit({email:e}),f=V(z`
    mutation Login($email: String!, $code: String!) {
      login(email: $email, token: $code)
    }
  `,{onCommit:({login:d})=>{document.cookie=`session=${d};path=/;max-age=7776000`,window.location.href="/"},onError:d=>{u(`Failed to log in: ${d[0].message}`)}}),a=()=>f.commit({email:e,code:n}),g=r.inFlight||f.inFlight,m=d=>{d.preventDefault(),i?a():v()};return l("div",{class:"w-full flex justify-center p-8"},l("form",{class:"w-full max-w-md bg-white dark:bg-gray-800 shadow rounded-lg p-4",onSubmit:m},l("h1",{class:"text-2xl font-semibold"},"Login"),p&&l(M,{message:p,type:"info",style:"mt-2"}),s&&l(M,{message:s,type:"error",style:"mt-2"}),l(F,{label:"Email Address",placeholder:"ada.lovelace@urls.fyi",type:"email",style:"mt-2",value:e,onChange:t}),i&&l(F,{label:"Login Code",placeholder:"12 digit code",style:"mt-2",value:n,onChange:_}),l(T,{title:i?"Login":"Request Code",onClick:m,style:"mt-2 w-full",disabled:g,loading:g}),l("button",{onClick:d=>{d.preventDefault(),o(!i)},class:"w-full mt-2 text-center text-blue-500"},i?"I need a login code":"I already have a login code")))}R(l(ve,null,l(He,null)),document.getElementById("login"));
//# sourceMappingURL=login.js.map
