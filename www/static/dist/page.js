var s,E,Q,X,P={},L=[],wt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(t,e){for(var n in e)t[n]=e[n];return t}function Y(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,n){var o,i,r,c=arguments,u={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:u[r]=e[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(c[r]);if(n!=null&&(u.children=n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)u[r]===void 0&&(u[r]=t.defaultProps[r]);return A(t,u,o,i,null)}function A(t,e,n,o,i){var r={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++s.__v:i};return s.vnode!=null&&s.vnode(r),r}function N(t){return t.children}function C(t,e){this.props=t,this.context=e}function T(t,e){if(e==null)return t.__?T(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?T(t):null}function K(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return K(t)}}function Z(t){(!t.__d&&(t.__d=!0)&&E.push(t)&&!U.__r++||X!==s.debounceRendering)&&((X=s.debounceRendering)||Q)(U)}function U(){for(var t;U.__r=E.length;)t=E.sort(function(e,n){return e.__v.__b-n.__v.__b}),E=[],t.some(function(e){var n,o,i,r,c,u;e.__d&&(c=(r=(n=e).__v).__e,(u=n.__P)&&(o=[],(i=S({},r)).__v=r.__v+1,$(u,r,i,n.__n,u.ownerSVGElement!==void 0,r.__h!=null?[c]:null,o,c==null?T(r):c,r.__h),tt(o,r),r.__e!=c&&K(r)))})}function _t(t,e,n,o,i,r,c,u,d,f){var _,g,p,a,v,h,m,y=o&&o.__k||L,b=y.length;for(n.__k=[],_=0;_<e.length;_++)if((a=n.__k[_]=(a=e[_])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?A(null,a,null,null,a):Array.isArray(a)?A(N,{children:a},null,null,null):a.__b>0?A(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=n,a.__b=n.__b+1,(p=y[_])===null||p&&a.key==p.key&&a.type===p.type)y[_]=void 0;else for(g=0;g<b;g++){if((p=y[g])&&a.key==p.key&&a.type===p.type){y[g]=void 0;break}p=null}$(t,a,p=p||P,i,r,c,u,d,f),v=a.__e,(g=a.ref)&&p.ref!=g&&(m||(m=[]),p.ref&&m.push(p.ref,null,a),m.push(g,a.__c||v,a)),v!=null?(h==null&&(h=v),typeof a.type=="function"&&a.__k!=null&&a.__k===p.__k?a.__d=d=et(a,d,t):d=nt(t,a,p,y,v,d),f||n.type!=="option"?typeof n.type=="function"&&(n.__d=d):t.value=""):d&&p.__e==d&&d.parentNode!=t&&(d=T(p))}for(n.__e=h,_=b;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=T(o,_+1)),ot(y[_],y[_]));if(m)for(_=0;_<m.length;_++)rt(m[_],m[++_],m[++_])}function et(t,e,n){var o,i;for(o=0;o<t.__k.length;o++)(i=t.__k[o])&&(i.__=t,e=typeof i.type=="function"?et(i,e,n):nt(n,i,i,t.__k,i.__e,e));return e}function nt(t,e,n,o,i,r){var c,u,d;if(e.__d!==void 0)c=e.__d,e.__d=void 0;else if(n==null||i!=r||i.parentNode==null)t:if(r==null||r.parentNode!==t)t.appendChild(i),c=null;else{for(u=r,d=0;(u=u.nextSibling)&&d<o.length;d+=2)if(u==i)break t;t.insertBefore(i,r),c=r}return c!==void 0?c:i.nextSibling}function xt(t,e,n,o,i){var r;for(r in n)r==="children"||r==="key"||r in e||D(t,r,null,n[r],o);for(r in e)i&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||D(t,r,e[r],n[r],o)}function it(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||wt.test(e)?n:n+"px"}function D(t,e,n,o,i){var r;t:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)n&&e in n||it(t.style,e,"");if(n)for(e in n)o&&n[e]===o[e]||it(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?o||t.addEventListener(e,r?at:lt,r):t.removeEventListener(e,r?at:lt,r);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break t}catch(c){}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function lt(t){this.l[t.type+!1](s.event?s.event(t):t)}function at(t){this.l[t.type+!0](s.event?s.event(t):t)}function $(t,e,n,o,i,r,c,u,d){var f,_,g,p,a,v,h,m,y,b,H,x=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,r=[u]),(f=s.__b)&&f(e);try{t:if(typeof x=="function"){if(m=e.props,y=(f=x.contextType)&&o[f.__c],b=f?y?y.props.value:f.__:o,n.__c?h=(_=e.__c=n.__c).__=_.__E:("prototype"in x&&x.prototype.render?e.__c=_=new x(m,b):(e.__c=_=new C(m,b),_.constructor=x,_.render=Ct),y&&y.sub(_),_.props=m,_.state||(_.state={}),_.context=b,_.__n=o,g=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),x.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=S({},_.__s)),S(_.__s,x.getDerivedStateFromProps(m,_.__s))),p=_.props,a=_.state,g)x.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==p&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,b)===!1||e.__v===n.__v){_.props=m,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(I){I&&(I.__=e)}),_.__h.length&&c.push(_);break t}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(p,a,v)})}_.context=b,_.props=m,_.state=_.__s,(f=s.__r)&&f(e),_.__d=!1,_.__v=e,_.__P=t,f=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(o=S(S({},o),_.getChildContext())),g||_.getSnapshotBeforeUpdate==null||(v=_.getSnapshotBeforeUpdate(p,a)),H=f!=null&&f.type===N&&f.key==null?f.props.children:f,_t(t,Array.isArray(H)?H:[H],e,n,o,i,r,c,u,d),_.base=e.__e,e.__h=null,_.__h.length&&c.push(_),h&&(_.__E=_.__=null),_.__e=!1}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=St(n.__e,e,n,o,i,r,c,d);(f=s.diffed)&&f(e)}catch(I){e.__v=null,(d||r!=null)&&(e.__e=u,e.__h=!!d,r[r.indexOf(u)]=null),s.__e(I,e,n)}}function tt(t,e){s.__c&&s.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(o){o.call(n)})}catch(o){s.__e(o,n.__v)}})}function St(t,e,n,o,i,r,c,u){var d,f,_,g,p=n.props,a=e.props,v=e.type,h=0;if(v==="svg"&&(i=!0),r!=null){for(;h<r.length;h++)if((d=r[h])&&(d===t||(v?d.localName==v:d.nodeType==3))){t=d,r[h]=null;break}}if(t==null){if(v===null)return document.createTextNode(a);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,a.is&&a),r=null,u=!1}if(v===null)p===a||u&&t.data===a||(t.data=a);else{if(r=r&&L.slice.call(t.childNodes),f=(p=n.props||P).dangerouslySetInnerHTML,_=a.dangerouslySetInnerHTML,!u){if(r!=null)for(p={},g=0;g<t.attributes.length;g++)p[t.attributes[g].name]=t.attributes[g].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(xt(t,a,p,i,u),_)e.__k=[];else if(h=e.props.children,_t(t,Array.isArray(h)?h:[h],e,n,o,i&&v!=="foreignObject",r,c,t.firstChild,u),r!=null)for(h=r.length;h--;)r[h]!=null&&Y(r[h]);u||("value"in a&&(h=a.value)!==void 0&&(h!==t.value||v==="progress"&&!h)&&D(t,"value",h,p.value,!1),"checked"in a&&(h=a.checked)!==void 0&&h!==t.checked&&D(t,"checked",h,p.checked,!1))}return t}function rt(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(o){s.__e(o,n)}}function ot(t,e,n){var o,i,r;if(s.unmount&&s.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||rt(o,null,e)),n||typeof t.type=="function"||(n=(i=t.__e)!=null),t.__e=t.__d=void 0,(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(c){s.__e(c,e)}o.base=o.__P=null}if(o=t.__k)for(r=0;r<o.length;r++)o[r]&&ot(o[r],e,n);i!=null&&Y(i)}function Ct(t,e,n){return this.constructor(t,n)}function O(t,e,n){var o,i,r;s.__&&s.__(t,e),i=(o=typeof n=="function")?null:n&&n.__k||e.__k,r=[],$(e,t=(!o&&n||e).__k=l(N,null,[t]),i||P,P,e.ownerSVGElement!==void 0,!o&&n?[n]:i?null:e.firstChild?L.slice.call(e.childNodes):null,r,!o&&n?n:i?i.__e:e.firstChild,o),tt(r,t)}s={__e:function(t,e){for(var n,o,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),i=n.__d),i)return n.__E=n}catch(r){t=r}throw t},__v:0},C.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},n),this.props)),t&&S(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),Z(this))},C.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Z(this))},C.prototype.render=N,E=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U.__r=0;var st,k,ct,R=0,W=[],ut=s.__b,ft=s.__r,pt=s.diffed,dt=s.__c,ht=s.unmount;function jt(t,e){s.__h&&s.__h(k,t,R||e),R=0;var n=k.__H||(k.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function w(t){return R=1,Et(mt,t)}function Et(t,e,n){var o=jt(st++,2);return o.t=t,o.__c||(o.__=[n?n(e):mt(void 0,e),function(i){var r=o.t(o.__[0],i);o.__[0]!==r&&(o.__=[r,o.__[1]],o.__c.setState({}))}],o.__c=k),o.__}function Nt(){W.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(F),t.__H.__h.forEach(q),t.__H.__h=[]}catch(e){t.__H.__h=[],s.__e(e,t.__v)}}),W=[]}s.__b=function(t){k=null,ut&&ut(t)},s.__r=function(t){ft&&ft(t),st=0;var e=(k=t.__c).__H;e&&(e.__h.forEach(F),e.__h.forEach(q),e.__h=[])},s.diffed=function(t){pt&&pt(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(W.push(e)!==1&&ct===s.requestAnimationFrame||((ct=s.requestAnimationFrame)||function(n){var o,i=function(){clearTimeout(r),gt&&cancelAnimationFrame(o),setTimeout(n)},r=setTimeout(i,100);gt&&(o=requestAnimationFrame(i))})(Nt)),k=void 0},s.__c=function(t,e){e.some(function(n){try{n.__h.forEach(F),n.__h=n.__h.filter(function(o){return!o.__||q(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],s.__e(o,n.__v)}}),dt&&dt(t,e)},s.unmount=function(t){ht&&ht(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(F)}catch(n){s.__e(n,e.__v)}};var gt=typeof requestAnimationFrame=="function";function F(t){var e=k;typeof t.__c=="function"&&t.__c(),k=e}function q(t){var e=k;t.__c=t.__(),k=e}function mt(t,e){return typeof e=="function"?e(t):e}function z({size:t="small",style:e=""}){return l("svg",{xmlns:"http://www.w3.org/2000/svg",class:`${t==="large"?"h-8 w-8":"h-4 w-4"} ${e!=null?e:""}`,viewBox:"0 0 24 24",stroke:"none",fill:"currentColor"},l("rect",{x:"10",y:"0",width:"4",height:"8",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 6.5) rotate(45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.125s",repeatCount:"indefinite"})),l("rect",{x:"16",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 17.5) rotate(-45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.375s",repeatCount:"indefinite"})),l("rect",{x:"10",y:"16",width:"4",height:"8",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 17.5) rotate(45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.625s",repeatCount:"indefinite"})),l("rect",{x:"0",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})),l("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 6.5) rotate(-45)",opacity:"0"},l("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.875s",repeatCount:"indefinite"})))}function j({title:t,onClick:e,disabled:n=!1,loading:o=!1,type:i="default",style:r}){let c=`h-8 px-2 flex space-x-2 justify-center items-center rounded-md font-bold ${r!=null?r:""}`;switch(i){case"flat":c+=" bg-white text-black",n||(c+=" hover:bg-gray-200");break;case"default":default:c+=" bg-blue-500 text-white",n||(c+=" hover:bg-blue-400")}return n===!0&&(c+=" opacity-80 cursor-not-allowed"),l("button",{class:c,onClick:n===!0?void 0:e},l("div",null,t),o===!0&&l(z,null))}function Tt(){window.location.href=window.location.href}function Ht(t){let e={};for(let n of Object.getOwnPropertyNames(t))e[n]=t[n];return JSON.stringify(e)}function It({error:t}){return l("div",{class:"w-full flex justify-center p-8"},l("div",{class:"w-full max-w-3xl bg-red-500 rounded-lg p-4"},l("h1",{class:"text-white text-xl font-semibold"},"Error"),l("p",{class:"text-red-100"},"Sorry, something went wrong."),l("pre",{class:"text-white bg-red-900 rounded-lg p-4 mt-2 whitespace-pre-wrap break-all"},Ht(t)),l(j,{title:"Reload Page",onClick:Tt,type:"flat",style:"w-full mt-2"})))}var V=class extends C{constructor(){super();this.state={error:!1}}componentDidCatch(e){console.error(e),this.setState({error:e})}render({children:e},{error:n}){return n!==!1?l(It,{error:n}):e}},vt=V;function M({title:t,href:e,disabled:n=!1,style:o}){let i=`
    block h-8 px-2
    flex space-x-2 justify-center items-center
    rounded-md font-semibold ${o!=null?o:""}
    text-blue-500 dark:text-blue-300
    hover:bg-gray-200 dark:hover:bg-gray-600
  `;return n===!0&&(i+=" opacity-80 cursor-not-allowed"),l("a",{class:i,href:e},t)}async function Pt(t,e){let n=window.__xsrf_token;return await(await fetch("/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-XSRF-Token":n},body:JSON.stringify({query:t,variables:e})})).json()}function yt([t]){return t}function bt(t,{onCommit:e,onError:n}){let[o,i]=w(!1),[r,c]=w(void 0);if(r!==void 0)throw r;return{commit:d=>{i(!0),Pt(t,d).then(({data:f,errors:_})=>{i(!1),_!=null?typeof n=="function"?n(_):c(_):e(f)}).catch(f=>c(f))},inFlight:o}}function G({value:t,onChange:e,label:n,placeholder:o,style:i}){let[r]=w(`input-id-${Math.floor(Math.random()*1e4)}`);return l("div",{class:`w-full ${i!=null?i:""}`},l("label",{class:"text-gray-500 italic",for:r},n),l("input",{class:"w-full p-2 text-md rounded-md bg-gray-200 dark:bg-gray-600 text-black dark:text-white",id:r,type:"text",value:t,onInput:c=>typeof e=="function"&&e(c.target.value),placeholder:o}))}var At=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})),kt=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}));function B({type:t="info",message:e,style:n}){let o=`flex align-start p-3 rounded-md block font-semibold ${n!=null?n:""}`,i;switch(t){case"error":o+=" bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",i=kt;break;case"warning":o+=" bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",i=kt;break;case"info":default:o+=" bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",i=At}return l("div",{class:o},l("div",{class:"mr-2"},i),l("p",{class:"leading-snug"},e))}function J(){let[t,e]=w(""),[n,o]=w(null),[i,r]=w(null),{commit:c,inFlight:u}=bt(yt`
    mutation SubmitUrl($url: String!) {
      submitUrl(input: { url: $url }) {
        id
        title
      }
    }
  `,{onCommit:({submitUrl:{id:f,title:_}})=>{e(null),r(null),o(_?`"${_}" was success submitted`:"Your url was success submitted")},onError:([{message:f}])=>{o(null),r(`Failed to submit: ${f}`)}});return l("form",{class:"w-full",onSubmit:f=>{f.preventDefault(),c({url:t.trim()})}},n&&l(B,{message:n,style:"mb-2"}),i&&l(B,{message:i,type:"error",style:"mb-2"}),l(G,{label:"URL to something interesting",placeholder:"https://urls.fyi",value:t,onChange:e}),l(j,{title:"Submit",style:"w-full mt-2",loading:u,disabled:u}))}function Ut(){let[t,e]=w(!1),n="w-full rounded-t-lg pb-8 -mb-6 p-2";return t&&(n+=" bg-gray-300 dark:bg-gray-900"),l("div",{class:n},l("div",{class:"flex space-x-2 items-center"},l(j,{title:"Submit a url",onClick:()=>e(!t)}),l(M,{title:"/recent",href:"/recent"}),l(M,{title:"/mine",href:"/mine"})),l("div",{class:"mt-4",style:{display:t?void 0:"none"}},l(J,null)))}O(l(vt,null,l(Ut,null)),document.getElementById("header"));
//# sourceMappingURL=page.js.map
