var s,j,Q,X,A={},O=[],bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(t,e){for(var n in e)t[n]=e[n];return t}function Y(t){var e=t.parentNode;e&&e.removeChild(t)}function a(t,e,n){var o,i,r,u=arguments,f={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:f[r]=e[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(u[r]);if(n!=null&&(f.children=n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)f[r]===void 0&&(f[r]=t.defaultProps[r]);return H(t,f,o,i,null)}function H(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++s.__v:i};return s.vnode!=null&&s.vnode(r),r}function C(t){return t.children}function S(t,e){this.props=t,this.context=e}function E(t,e){if(e==null)return t.__?E(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?E(t):null}function K(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return K(t)}}function Z(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!M.__r++||X!==s.debounceRendering)&&((X=s.debounceRendering)||Q)(M)}function M(){for(var t;M.__r=j.length;)t=j.sort(function(e,n){return e.__v.__b-n.__v.__b}),j=[],t.some(function(e){var n,o,i,r,u,f;e.__d&&(u=(r=(n=e).__v).__e,(f=n.__P)&&(o=[],(i=b({},r)).__v=r.__v+1,$(f,r,i,n.__n,f.ownerSVGElement!==void 0,r.__h!=null?[u]:null,o,u==null?E(r):u,r.__h),tt(o,r),r.__e!=u&&K(r)))})}function _t(t,e,n,o,i,r,u,f,d,p){var _,h,c,l,v,m,g,y=o&&o.__k||O,w=y.length;for(n.__k=[],_=0;_<e.length;_++)if((l=n.__k[_]=(l=e[_])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?H(null,l,null,null,l):Array.isArray(l)?H(C,{children:l},null,null,null):l.__b>0?H(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(c=y[_])===null||c&&l.key==c.key&&l.type===c.type)y[_]=void 0;else for(h=0;h<w;h++){if((c=y[h])&&l.key==c.key&&l.type===c.type){y[h]=void 0;break}c=null}$(t,l,c=c||A,i,r,u,f,d,p),v=l.__e,(h=l.ref)&&c.ref!=h&&(g||(g=[]),c.ref&&g.push(c.ref,null,l),g.push(h,l.__c||v,l)),v!=null?(m==null&&(m=v),typeof l.type=="function"&&l.__k!=null&&l.__k===c.__k?l.__d=d=et(l,d,t):d=nt(t,l,c,y,v,d),p||n.type!=="option"?typeof n.type=="function"&&(n.__d=d):t.value=""):d&&c.__e==d&&d.parentNode!=t&&(d=E(c))}for(n.__e=m,_=w;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=E(o,_+1)),ot(y[_],y[_]));if(g)for(_=0;_<g.length;_++)rt(g[_],g[++_],g[++_])}function et(t,e,n){var o,i;for(o=0;o<t.__k.length;o++)(i=t.__k[o])&&(i.__=t,e=typeof i.type=="function"?et(i,e,n):nt(n,i,i,t.__k,i.__e,e));return e}function nt(t,e,n,o,i,r){var u,f,d;if(e.__d!==void 0)u=e.__d,e.__d=void 0;else if(n==null||i!=r||i.parentNode==null)t:if(r==null||r.parentNode!==t)t.appendChild(i),u=null;else{for(f=r,d=0;(f=f.nextSibling)&&d<o.length;d+=2)if(f==i)break t;t.insertBefore(i,r),u=r}return u!==void 0?u:i.nextSibling}function Ct(t,e,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in e||P(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||P(t,r,e[r],n[r],o)}function it(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||bt.test(e)?n:n+"px"}function P(t,e,n,o,i){var r;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||it(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||it(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?lt:at,r):t.removeEventListener(e,r?lt:at,r);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break t}catch(u){}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function at(t){this.l[t.type+!1](s.event?s.event(t):t)}function lt(t){this.l[t.type+!0](s.event?s.event(t):t)}function $(t,e,n,o,i,r,u,f,d){var p,_,h,c,l,v,m,g,y,w,D,x=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,f=e.__e=n.__e,e.__h=null,r=[f]),(p=s.__b)&&p(e);try{t:if(typeof x=="function"){if(g=e.props,y=(p=x.contextType)&&o[p.__c],w=p?y?y.props.value:p.__:o,n.__c?m=(_=e.__c=n.__c).__=_.__E:("prototype"in x&&x.prototype.render?e.__c=_=new x(g,w):(e.__c=_=new S(g,w),_.constructor=x,_.render=Nt),y&&y.sub(_),_.props=g,_.state||(_.state={}),_.context=w,_.__n=o,h=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),x.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=b({},_.__s)),b(_.__s,x.getDerivedStateFromProps(g,_.__s))),c=_.props,l=_.state,h)x.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(x.getDerivedStateFromProps==null&&g!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(g,w),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(g,_.__s,w)===!1||e.__v===n.__v){_.props=g,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(T){T&&(T.__=e)}),_.__h.length&&u.push(_);break t}_.componentWillUpdate!=null&&_.componentWillUpdate(g,_.__s,w),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,l,v)})}_.context=w,_.props=g,_.state=_.__s,(p=s.__r)&&p(e),_.__d=!1,_.__v=e,_.__P=t,p=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(o=b(b({},o),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(v=_.getSnapshotBeforeUpdate(c,l)),D=p!=null&&p.type===C&&p.key==null?p.props.children:p,_t(t,Array.isArray(D)?D:[D],e,n,o,i,r,u,f,d),_.base=e.__e,e.__h=null,_.__h.length&&u.push(_),m&&(_.__E=_.__=null),_.__e=!1}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=St(n.__e,e,n,o,i,r,u,d);(p=s.diffed)&&p(e)}catch(T){e.__v=null,(d||r!=null)&&(e.__e=f,e.__h=!!d,r[r.indexOf(f)]=null),s.__e(T,e,n)}}function tt(t,e){s.__c&&s.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){s.__e(o,n.__v)}})}function St(t,e,n,o,i,r,u,f){var d,p,_,h,c=n.props,l=e.props,v=e.type,m=0;if(v==="svg"&&(i=!0),r!=null){for(;m<r.length;m++)if((d=r[m])&&(d===t||(v?d.localName==v:d.nodeType==3))){t=d,r[m]=null;break}}if(t==null){if(v===null)return document.createTextNode(l);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,l.is&&l),r=null,f=!1}if(v===null)c===l||f&&t.data===l||(t.data=l);else{if(r=r&&O.slice.call(t.childNodes),p=(c=n.props||A).dangerouslySetInnerHTML,_=l.dangerouslySetInnerHTML,!f){if(r!=null)for(c={},h=0;h<t.attributes.length;h++)c[t.attributes[h].name]=t.attributes[h].value;(_||p)&&(_&&(p&&_.__html==p.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(Ct(t,l,c,i,f),_)e.__k=[];else if(m=e.props.children,_t(t,Array.isArray(m)?m:[m],e,n,o,i&&v!=="foreignObject",r,u,t.firstChild,f),r!=null)for(m=r.length;m--;)r[m]!=null&&Y(r[m]);f||("value"in l&&(m=l.value)!==void 0&&(m!==t.value||v==="progress"&&!m)&&P(t,"value",m,c.value,!1),"checked"in l&&(m=l.checked)!==void 0&&m!==t.checked&&P(t,"checked",m,c.checked,!1))}return t}function rt(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){s.__e(o,n)}}function ot(t,e,n){var o,i,r;if(s.unmount&&s.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||rt(o,null,e)),n||typeof t.type=="function"||(n=(i=t.__e)!=null),t.__e=t.__d=void 0,(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(u){s.__e(u,e)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&ot(o[r],e,n);i!=null&&Y(i)}function Nt(t,e,n){return this.constructor(t,n)}function L(t,e,n){var o,i,r;s.__&&s.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],$(e,t=(!o&&n||e).__k=a(C,null,[t]),i||A,A,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?O.slice.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o),tt(r,t)}s={__e:function(t,e){for(var n,o,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(r){t=r}throw t},__v:0},S.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof t=="function"&&(t=t(b({},n),this.props)),t&&b(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),Z(this))},S.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Z(this))},S.prototype.render=C,j=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M.__r=0;function U({size:t="small",style:e=""}){return a("svg",{xmlns:"http://www.w3.org/2000/svg",class:`${t==="large"?"h-8 w-8":"h-4 w-4"} ${e!=null?e:""}`,viewBox:"0 0 24 24",stroke:"none",fill:"currentColor"},a("rect",{x:"10",y:"0",width:"4",height:"8",rx:"2",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})),a("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 6.5) rotate(45)",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.125s",repeatCount:"indefinite"})),a("rect",{x:"16",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})),a("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 17.5) rotate(-45)",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.375s",repeatCount:"indefinite"})),a("rect",{x:"10",y:"16",width:"4",height:"8",rx:"2",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})),a("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 17.5) rotate(45)",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.625s",repeatCount:"indefinite"})),a("rect",{x:"0",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})),a("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 6.5) rotate(-45)",opacity:"0"},a("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.875s",repeatCount:"indefinite"})))}function I({title:t,onClick:e,disabled:n=!1,loading:o=!1,type:i="default",style:r}){let u=`h-8 px-2 flex space-x-2 justify-center items-center rounded-md font-bold ${r!=null?r:""}`;switch(i){case"flat":u+=" bg-white text-black",n||(u+=" hover:bg-gray-200");break;case"default":default:u+=" bg-blue-500 text-white",n||(u+=" hover:bg-blue-400")}return n===!0&&(u+=" opacity-80 cursor-not-allowed"),a("button",{class:u,onClick:n===!0?void 0:e},a("div",null,t),o===!0&&a(U,null))}function jt(){window.location.href=window.location.href}function Et(t){let e={};for(let n of Object.getOwnPropertyNames(t))e[n]=t[n];return JSON.stringify(e)}function It({error:t}){return a("div",{class:"w-full flex justify-center p-8"},a("div",{class:"w-full max-w-3xl bg-red-500 rounded-lg p-4"},a("h1",{class:"text-white text-xl font-semibold"},"Error"),a("p",{class:"text-red-100"},"Sorry, something went wrong."),a("pre",{class:"text-white bg-red-900 rounded-lg p-4 mt-2 whitespace-pre-wrap break-all"},Et(t)),a(I,{title:"Reload Page",onClick:jt,type:"flat",style:"w-full mt-2"})))}var z=class extends S{constructor(){super();this.state={error:!1}}componentDidCatch(e){console.error(e),this.setState({error:e})}render({children:e},{error:n}){return n!==!1?a(It,{error:n}):e}},st=z;var ct,k,ut,R=0,W=[],ft=s.__b,pt=s.__r,dt=s.diffed,mt=s.__c,ht=s.unmount;function Dt(t,e){s.__h&&s.__h(k,t,R||e),R=0;var n=k.__H||(k.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function N(t){return R=1,Tt(gt,t)}function Tt(t,e,n){var o=Dt(ct++,2);return o.t=t,o.__c||(o.__=[n?n(e):gt(void 0,e),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=k),o.__}function At(){W.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(F),t.__H.__h.forEach(q),t.__H.__h=[]}catch(e){t.__H.__h=[],s.__e(e,t.__v)}}),W=[]}s.__b=function(t){k=null,ft&&ft(t)},s.__r=function(t){pt&&pt(t),ct=0;var e=(k=t.__c).__H;e&&(e.__h.forEach(F),e.__h.forEach(q),e.__h=[])},s.diffed=function(t){dt&&dt(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(W.push(e)!==1&&ut===s.requestAnimationFrame||((ut=s.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),vt&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);vt&&(o=requestAnimationFrame(i))})(At)),k=void 0},s.__c=function(t,e){e.some(function(n){try{n.__h.forEach(F),n.__h=n.__h.filter(function(o){return!o.__||q(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],s.__e(o,n.__v)}}),mt&&mt(t,e)},s.unmount=function(t){ht&&ht(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(F)}catch(n){s.__e(n,e.__v)}};var vt=typeof requestAnimationFrame=="function";function F(t){var e=k;typeof t.__c=="function"&&t.__c(),k=e}function q(t){var e=k;t.__c=t.__(),k=e}function gt(t,e){return typeof e=="function"?e(t):e}async function Ht(t,e){let n=window.__xsrf_token;return await(await fetch("/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-XSRF-Token":n},body:JSON.stringify({query:t,variables:e})})).json()}function yt([t]){return t}function wt(t,{onCommit:e,onError:n}){let[o,i]=N(!1),[r,u]=N(void 0);if(r!==void 0)throw r;return{commit:d=>{i(!0),Ht(t,d).then(({data:p,errors:_})=>{i(!1),_!=null?typeof n=="function"?n(_):u(_):e(p)}).catch(p=>u(p))},inFlight:o}}var Mt=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})),kt=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}));function V({type:t="info",message:e,style:n}){let o=`flex align-start p-3 rounded-md block font-semibold ${n!=null?n:""}`,i;switch(t){case"error":o+=" bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",i=kt;break;case"warning":o+=" bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",i=kt;break;case"info":default:o+=" bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",i=Mt}return a("div",{class:o},a("div",{class:"mr-2"},i),a("p",{class:"leading-snug"},e))}function B({icon:t,text:e}){return a("div",{class:"flex items-center"},t," ",e)}var Pt=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},a("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})),Ft=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},a("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"}));function Bt(t){let e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=new Date(t);return`${e[o.getDay()]} ${o.getDate()}. ${n[o.getMonth()]} ${o.getFullYear()}`}function J({id:t,html:e,createdAt:n,createdBy:o}){return a("div",{class:"w-full"},a("style",null,".markdown a { text-decoration: underline; }"),a("div",{class:"text-sm leading-tight markdown",dangerouslySetInnerHTML:{__html:e}}),a("div",{class:`
          flex justify-start items-center
          text-sm italic text-gray-400 dark:text-gray-500
          space-x-1
        `},a(B,{icon:Pt,text:o.name}),a("span",{class:"sm:block hidden"},"·"),a(B,{icon:Ft,text:Bt(n)})))}var Ot=a("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor"},a("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}));function G({urlID:t,repliesToID:e}){let[n,o]=N(""),[i,r]=N(null),[u,f]=N([]),{commit:d,inFlight:p}=wt(yt`
    mutation CommentInputMutation($text: String!, $url: ID!) {
      comment(input: { comment: $text, url: $url }) {
        ...CommentFragment
      }
    }

    fragment CommentFragment on Comment {
      id
      html
      createdAt
      createdBy {
        id
        name
      }
    }
  `,{onCommit:({comment:c})=>{o(""),r(null),f([...u,c])},onError:([{message:c}])=>{r(c)}}),_=n.trim().length==0||p,h=c=>{c.preventDefault(),!_&&d({text:n.trim(),url:t})};return a(C,null,u.map(c=>a(J,{...c})),a("form",{class:"w-full",onSubmit:h},i&&a(V,{message:i,type:"error",style:"mb-2"}),a("div",{class:"w-full p-2 rounded bg-gray-200 dark:bg-gray-600"},a("textarea",{class:"w-full h-14 resize-none bg-transparent leading-none",placeholder:"Your thoughts, formatted with *markdown* ...",onInput:c=>o(c.target.value),value:n},n),a(I,{title:a("div",{class:"flex items-center"},Ot," Comment"),onClick:h,disabled:_,loading:p}))))}function $t({urlID:t}){return a("div",{class:"w-full flex flex-col items-center justify-center space-y-1 -mt-3 sm:pl-14"},a(G,{urlID:t}))}var xt=document.getElementById("comments");L(a(st,null,a($t,{urlID:xt.dataset.urlId})),xt);
//# sourceMappingURL=comments.js.map
