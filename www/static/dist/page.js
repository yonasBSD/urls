var c,N,J,Q,H={},L=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(e,t){for(var r in t)e[r]=t[r];return e}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,r){var o,l,n,_=arguments,u={};for(n in t)n=="key"?o=t[n]:n=="ref"?l=t[n]:u[n]=t[n];if(arguments.length>3)for(r=[r],n=3;n<arguments.length;n++)r.push(_[n]);if(r!=null&&(u.children=r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)u[n]===void 0&&(u[n]=e.defaultProps[n]);return I(e,u,o,l,null)}function I(e,t,r,o,l){var n={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++c.__v:l};return c.vnode!=null&&c.vnode(n),n}function C(e){return e.children}function j(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?T(e):null}function K(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return K(e)}}function Z(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!M.__r++||Q!==c.debounceRendering)&&((Q=c.debounceRendering)||J)(M)}function M(){for(var e;M.__r=N.length;)e=N.sort(function(t,r){return t.__v.__b-r.__v.__b}),N=[],e.some(function(t){var r,o,l,n,_,u;t.__d&&(_=(n=(r=t).__v).__e,(u=r.__P)&&(o=[],(l=S({},n)).__v=n.__v+1,$(u,n,l,r.__n,u.ownerSVGElement!==void 0,n.__h!=null?[_]:null,o,_==null?T(n):_,n.__h),ee(o,n),n.__e!=_&&K(n)))})}function ie(e,t,r,o,l,n,_,u,f,p){var i,g,d,a,v,h,m,y=o&&o.__k||L,w=y.length;for(r.__k=[],i=0;i<t.length;i++)if((a=r.__k[i]=(a=t[i])==null||typeof a=="boolean"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?I(null,a,null,null,a):Array.isArray(a)?I(C,{children:a},null,null,null):a.__b>0?I(a.type,a.props,a.key,null,a.__v):a)!=null){if(a.__=r,a.__b=r.__b+1,(d=y[i])===null||d&&a.key==d.key&&a.type===d.type)y[i]=void 0;else for(g=0;g<w;g++){if((d=y[g])&&a.key==d.key&&a.type===d.type){y[g]=void 0;break}d=null}$(e,a,d=d||H,l,n,_,u,f,p),v=a.__e,(g=a.ref)&&d.ref!=g&&(m||(m=[]),d.ref&&m.push(d.ref,null,a),m.push(g,a.__c||v,a)),v!=null?(h==null&&(h=v),typeof a.type=="function"&&a.__k!=null&&a.__k===d.__k?a.__d=f=te(a,f,e):f=re(e,a,d,y,v,f),p||r.type!=="option"?typeof r.type=="function"&&(r.__d=f):e.value=""):f&&d.__e==f&&f.parentNode!=e&&(f=T(d))}for(r.__e=h,i=w;i--;)y[i]!=null&&(typeof r.type=="function"&&y[i].__e!=null&&y[i].__e==r.__d&&(r.__d=T(o,i+1)),oe(y[i],y[i]));if(m)for(i=0;i<m.length;i++)ne(m[i],m[++i],m[++i])}function te(e,t,r){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,t=typeof l.type=="function"?te(l,t,r):re(r,l,l,e.__k,l.__e,t));return t}function re(e,t,r,o,l,n){var _,u,f;if(t.__d!==void 0)_=t.__d,t.__d=void 0;else if(r==null||l!=n||l.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(l),_=null;else{for(u=n,f=0;(u=u.nextSibling)&&f<o.length;f+=2)if(u==l)break e;e.insertBefore(l,n),_=n}return _!==void 0?_:l.nextSibling}function xe(e,t,r,o,l){var n;for(n in r)n==="children"||n==="key"||n in t||B(e,n,null,r[n],o);for(n in t)l&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===t[n]||B(e,n,t[n],r[n],o)}function le(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||ke.test(t)?r:r+"px"}function B(e,t,r,o,l){var n;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||le(e.style,t,"");if(r)for(t in r)o&&r[t]===o[t]||le(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?o||e.addEventListener(t,n?ae:se,n):e.removeEventListener(t,n?ae:se,n);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch(_){}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function se(e){this.l[e.type+!1](c.event?c.event(e):e)}function ae(e){this.l[e.type+!0](c.event?c.event(e):e)}function $(e,t,r,o,l,n,_,u,f){var p,i,g,d,a,v,h,m,y,w,P,x=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(f=r.__h,u=t.__e=r.__e,t.__h=null,n=[u]),(p=c.__b)&&p(t);try{e:if(typeof x=="function"){if(m=t.props,y=(p=x.contextType)&&o[p.__c],w=p?y?y.props.value:p.__:o,r.__c?h=(i=t.__c=r.__c).__=i.__E:("prototype"in x&&x.prototype.render?t.__c=i=new x(m,w):(t.__c=i=new j(m,w),i.constructor=x,i.render=Ce),y&&y.sub(i),i.props=m,i.state||(i.state={}),i.context=w,i.__n=o,g=i.__d=!0,i.__h=[]),i.__s==null&&(i.__s=i.state),x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=S({},i.__s)),S(i.__s,x.getDerivedStateFromProps(m,i.__s))),d=i.props,a=i.state,g)x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,w),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,w)===!1||t.__v===r.__v){i.props=m,i.state=i.__s,t.__v!==r.__v&&(i.__d=!1),i.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(A){A&&(A.__=t)}),i.__h.length&&_.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,a,v)})}i.context=w,i.props=m,i.state=i.__s,(p=c.__r)&&p(t),i.__d=!1,i.__v=t,i.__P=e,p=i.render(i.props,i.state,i.context),i.state=i.__s,i.getChildContext!=null&&(o=S(S({},o),i.getChildContext())),g||i.getSnapshotBeforeUpdate==null||(v=i.getSnapshotBeforeUpdate(d,a)),P=p!=null&&p.type===C&&p.key==null?p.props.children:p,ie(e,Array.isArray(P)?P:[P],t,r,o,l,n,_,u,f),i.base=t.__e,t.__h=null,i.__h.length&&_.push(i),h&&(i.__E=i.__=null),i.__e=!1}else n==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Se(r.__e,t,r,o,l,n,_,f);(p=c.diffed)&&p(t)}catch(A){t.__v=null,(f||n!=null)&&(t.__e=u,t.__h=!!f,n[n.indexOf(u)]=null),c.__e(A,t,r)}}function ee(e,t){c.__c&&c.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){c.__e(o,r.__v)}})}function Se(e,t,r,o,l,n,_,u){var f,p,i,g,d=r.props,a=t.props,v=t.type,h=0;if(v==="svg"&&(l=!0),n!=null){for(;h<n.length;h++)if((f=n[h])&&(f===e||(v?f.localName==v:f.nodeType==3))){e=f,n[h]=null;break}}if(e==null){if(v===null)return document.createTextNode(a);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,a.is&&a),n=null,u=!1}if(v===null)d===a||u&&e.data===a||(e.data=a);else{if(n=n&&L.slice.call(e.childNodes),p=(d=r.props||H).dangerouslySetInnerHTML,i=a.dangerouslySetInnerHTML,!u){if(n!=null)for(d={},g=0;g<e.attributes.length;g++)d[e.attributes[g].name]=e.attributes[g].value;(i||p)&&(i&&(p&&i.__html==p.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(xe(e,a,d,l,u),i)t.__k=[];else if(h=t.props.children,ie(e,Array.isArray(h)?h:[h],t,r,o,l&&v!=="foreignObject",n,_,e.firstChild,u),n!=null)for(h=n.length;h--;)n[h]!=null&&X(n[h]);u||("value"in a&&(h=a.value)!==void 0&&(h!==e.value||v==="progress"&&!h)&&B(e,"value",h,d.value,!1),"checked"in a&&(h=a.checked)!==void 0&&h!==e.checked&&B(e,"checked",h,d.checked,!1))}return e}function ne(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(o){c.__e(o,r)}}function oe(e,t,r){var o,l,n;if(c.unmount&&c.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ne(o,null,t)),r||typeof e.type=="function"||(r=(l=e.__e)!=null),e.__e=e.__d=void 0,(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){c.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&oe(o[n],t,r);l!=null&&X(l)}function Ce(e,t,r){return this.constructor(e,r)}function R(e,t,r){var o,l,n;c.__&&c.__(e,t),l=(o=typeof r=="function")?null:r&&r.__k||t.__k,n=[],$(t,e=(!o&&r||t).__k=s(C,null,[e]),l||H,H,t.ownerSVGElement!==void 0,!o&&r?[r]:l?null:t.firstChild?L.slice.call(t.childNodes):null,n,!o&&r?r:l?l.__e:t.firstChild,o),ee(n,e)}c={__e:function(e,t){for(var r,o,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),l=r.__d),l)return r.__E=r}catch(n){e=n}throw e},__v:0},j.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},r),this.props)),e&&S(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Z(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Z(this))},j.prototype.render=C,N=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M.__r=0;var _e,k,ce,O=0,z=[],ue=c.__b,fe=c.__r,pe=c.diffed,de=c.__c,he=c.unmount;function je(e,t){c.__h&&c.__h(k,e,O||t),O=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function b(e){return O=1,Ee(me,e)}function Ee(e,t,r){var o=je(_e++,2);return o.t=e,o.__c||(o.__=[r?r(t):me(void 0,t),function(l){var n=o.t(o.__[0],l);o.__[0]!==n&&(o.__=[n,o.__[1]],o.__c.setState({}))}],o.__c=k),o.__}function Ne(){z.forEach(function(e){if(e.__P)try{e.__H.__h.forEach(D),e.__H.__h.forEach(q),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}}),z=[]}c.__b=function(e){k=null,ue&&ue(e)},c.__r=function(e){fe&&fe(e),_e=0;var t=(k=e.__c).__H;t&&(t.__h.forEach(D),t.__h.forEach(q),t.__h=[])},c.diffed=function(e){pe&&pe(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(z.push(t)!==1&&ce===c.requestAnimationFrame||((ce=c.requestAnimationFrame)||function(r){var o,l=function(){clearTimeout(n),ge&&cancelAnimationFrame(o),setTimeout(r)},n=setTimeout(l,100);ge&&(o=requestAnimationFrame(l))})(Ne)),k=void 0},c.__c=function(e,t){t.some(function(r){try{r.__h.forEach(D),r.__h=r.__h.filter(function(o){return!o.__||q(o)})}catch(o){t.some(function(l){l.__h&&(l.__h=[])}),t=[],c.__e(o,r.__v)}}),de&&de(e,t)},c.unmount=function(e){he&&he(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(D)}catch(r){c.__e(r,t.__v)}};var ge=typeof requestAnimationFrame=="function";function D(e){var t=k;typeof e.__c=="function"&&e.__c(),k=t}function q(e){var t=k;e.__c=e.__(),k=t}function me(e,t){return typeof t=="function"?t(e):t}function V({size:e="small",style:t=""}){return s("svg",{xmlns:"http://www.w3.org/2000/svg",class:`${e==="large"?"h-8 w-8":"h-4 w-4"} ${t!=null?t:""}`,viewBox:"0 0 24 24",stroke:"none",fill:"currentColor"},s("rect",{x:"10",y:"0",width:"4",height:"8",rx:"2",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"})),s("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 6.5) rotate(45)",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.125s",repeatCount:"indefinite"})),s("rect",{x:"16",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.25s",repeatCount:"indefinite"})),s("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(17.5, 17.5) rotate(-45)",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.375s",repeatCount:"indefinite"})),s("rect",{x:"10",y:"16",width:"4",height:"8",rx:"2",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})),s("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 17.5) rotate(45)",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.625s",repeatCount:"indefinite"})),s("rect",{x:"0",y:"10",width:"8",height:"4",rx:"2",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.75s",repeatCount:"indefinite"})),s("rect",{x:"-2",y:"-4",width:"4",height:"8",rx:"2",transform:"translate(6.5, 6.5) rotate(-45)",opacity:"0"},s("animate",{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.875s",repeatCount:"indefinite"})))}function E({title:e,onClick:t,disabled:r=!1,loading:o=!1,type:l="default",style:n}){let _=`h-8 px-2 flex space-x-2 justify-center items-center rounded-md font-bold ${n!=null?n:""}`;switch(l){case"flat":_+=" bg-white text-black",r||(_+=" hover:bg-gray-200");break;case"default":default:_+=" bg-blue-500 text-white",r||(_+=" hover:bg-blue-400")}return r===!0&&(_+=" opacity-80 cursor-not-allowed"),s("button",{class:_,onClick:r===!0?void 0:t},s("div",null,e),o===!0&&s(V,null))}function Te(){window.location.href=window.location.href}function Pe(e){let t={};for(let r of Object.getOwnPropertyNames(e))t[r]=e[r];return JSON.stringify(t)}function Ae({error:e}){return s("div",{class:"w-full flex justify-center p-8"},s("div",{class:"w-full max-w-3xl bg-red-500 rounded-lg p-4"},s("h1",{class:"text-white text-xl font-semibold"},"Error"),s("p",{class:"text-red-100"},"Sorry, something went wrong."),s("pre",{class:"text-white bg-red-900 rounded-lg p-4 mt-2 whitespace-pre-wrap break-all"},Pe(e)),s(E,{title:"Reload Page",onClick:Te,type:"flat",style:"w-full mt-2"})))}var W=class extends j{constructor(){super();this.state={error:!1}}componentDidCatch(t){console.error(t),this.setState({error:t})}render({children:t},{error:r}){return r!==!1?s(Ae,{error:r}):t}},ve=W;function U({title:e,href:t,disabled:r=!1,style:o}){let l=`
    block h-8 px-2
    flex space-x-2 justify-center items-center
    rounded-md font-semibold ${o!=null?o:""}
    text-blue-500 dark:text-blue-300
    hover:bg-gray-200 dark:hover:bg-gray-600
  `;return r===!0&&(l+=" opacity-80 cursor-not-allowed"),s("a",{class:l,href:t},e)}async function He(e,t){let r=window.__xsrf_token;return await(await fetch("/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json","X-XSRF-Token":r},body:JSON.stringify({query:e,variables:t})})).json()}function ye([e]){return e}function be(e,{onCommit:t,onError:r}){let[o,l]=b(!1),[n,_]=b(void 0);if(n!==void 0)throw n;return{commit:f=>{l(!0),He(e,f).then(({data:p,errors:i})=>{l(!1),i!=null?typeof r=="function"?r(i):_(i):t(p)}).catch(p=>_(p))},inFlight:o}}function G({value:e,onChange:t,label:r,placeholder:o,style:l}){let[n]=b(`input-id-${Math.floor(Math.random()*1e4)}`);return s("div",{class:`w-full ${l!=null?l:""}`},s("label",{class:"text-gray-500 italic",for:n},r),s("input",{class:"w-full p-2 text-md rounded-md bg-gray-200 dark:bg-gray-600 text-black dark:text-white",id:n,type:"text",value:e,onInput:_=>typeof t=="function"&&t(_.target.value),placeholder:o}))}var Ie=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})),we=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}));function F({type:e="info",message:t,style:r}){let o=`flex align-start p-3 rounded-md block font-semibold ${r!=null?r:""}`,l;switch(e){case"error":o+=" bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200",l=we;break;case"warning":o+=" bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",l=we;break;case"info":default:o+=" bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",l=Ie}return s("div",{class:o},s("div",{class:"mr-2"},l),s("p",{class:"leading-snug"},t))}function Y(){let[e,t]=b(""),[r,o]=b(null),[l,n]=b(null),{commit:_,inFlight:u}=be(ye`
    mutation SubmitUrl($url: String!) {
      submitUrl(input: { url: $url }) {
        id
        title
      }
    }
  `,{onCommit:({submitUrl:{id:p,title:i}})=>{t(""),n(null),o(i?`"${i}" was successfully submitted`:"Your url was successfully submitted")},onError:([{message:p}])=>{o(null),n(`Failed to submit: ${p}`)}});return s("form",{class:"w-full",onSubmit:p=>{p.preventDefault(),_({url:e.trim()})}},r&&s(F,{message:r,style:"mb-2"}),l&&s(F,{message:l,type:"error",style:"mb-2"}),s(G,{label:"URL to something interesting",placeholder:"https://urls.fyi",value:e,onChange:t}),s(E,{title:"Submit",style:"w-full mt-2",loading:u,disabled:u}))}function Me({initDidVote:e,initCount:t}){let[r,o]=b(e!=null?e:!1),[l,n]=b(t!=null?t:0),_=`
        block w-10 h-10 flex-none m-2 mr-0
        flex flex-col justify-center items-center
        border-2 border-blue-500 rounded
        ${r?"bg-blue-500 text-white":"text-blue-500"}
  `;return s("button",{class:_,onClick:f=>{f.preventDefault(),r?(n(l-1),o(!1)):(n(l+1),o(!0))}},s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},s("path",{"fill-rule":"evenodd",d:"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"})),s("span",{class:"text-xs leading-none"},l))}function Be(){let[e,t]=b(!1),r="w-full rounded-t-lg pb-8 -mb-6 p-2";return e&&(r+=" bg-gray-50 dark:bg-gray-900"),s(C,null,s("div",{class:`
        w-full max-w-screen-md p-4 mb-8
        space-y-4
        bg-white dark:bg-gray-800 shadow rounded-lg
      `},[{title:"Test title here",description:"Your description here.",url:"https://tilman.dev",image:"https://opengraph.githubassets.com/fc650ffe80c1f30447363840b1e7531d7ef69c492576ba8c0dbf9c9ac2c31ae8/dyedgreen/deno-sqlite"},{title:"Test title here",didVote:!0,description:"Your description here.",url:"https://tilman.dev"},{title:"The Accidental Rush for Anthrax Island",description:"Gruinard Island, in the north-west of Scotland, was where Britain tested its biological weapons. That story&#39;s been told many times: but I found something in ...",url:"https://tilman.dev",image:"https://i.ytimg.com/vi/suAC_PDP3Sk/maxresdefault.jpg"},{title:"Models of Generics and Metaprogramming: Go, Rust, Swift, D and More",description:"Your description here.",url:"https://tilman.dev",image:"https://opengraph.githubassets.com/fc650ffe80c1f30447363840b1e7531d7ef69c492576ba8c0dbf9c9ac2c31ae8/dyedgreen/deno-sqlite"}].map(({title:l,description:n,image:_,url:u,didVote:f})=>s("a",{class:"block w-full sm:flex rounded hover:bg-gray-200 dark:hover:bg-gray-700",href:u},s(Me,{initDidVote:f,initCount:42}),s("div",{class:"sm:flex-grow p-2"},s("h1",{class:"leading-5 text-xl font-semibold"},l),s("p",{class:"mt-1 leading-4 text-sm text-gray-600 dark:text-gray-500"},s("span",{class:"text-gray-400 underline italic"},u)," · ",n),s("div",{class:`
                  flex items-center mt-1
                  italic leading-4 text-sm text-gray-400 dark:text-gray-500
                `},s("a",{class:"block p-1 -ml-1 rounded-xl flex items-center hover:bg-gray-300",href:"/user/..."},s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},s("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})),"Peter Parker"),"·",s("a",{class:"block p-1 rounded-xl flex items-center hover:bg-gray-300",href:"/user/..."},s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 mr-1",viewBox:"0 0 20 20",fill:"currentColor"},s("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),s("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})),"5 Comments"),"· Jun. 24. 2021")),_&&s("img",{class:"w-full sm:w-40 sm:h-20 max-w-full rounded shadow-xl",src:_})))),s("div",{class:r},s("div",{class:"flex space-x-2 items-center"},s(E,{title:"Submit a url",onClick:()=>t(!e)}),s(U,{title:"/recent",href:"/recent"}),s(U,{title:"/mine",href:"/mine"})),s("div",{class:"mt-4",style:{display:e?void 0:"none"}},s(Y,null))))}R(s(ve,null,s(Be,null)),document.getElementById("header"));
//# sourceMappingURL=page.js.map
