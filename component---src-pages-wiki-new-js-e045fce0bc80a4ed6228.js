(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{242:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return p}));var n=r(3),a=(r(1),r(120)),o=r(252),i=r(230),s=r(265),c=r(266),u=r(258),l=r.n(u),d=(r(166),{name:"7hyyom",styles:"box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.25rem;cursor:pointer;margin-bottom:20px;background-color:#fff;"}),f={name:"nn640c",styles:"text-decoration:none;color:inherit;"};t.default=function(e){var t=e.data;return Object(n.b)(i.a,null,Object(n.b)(o.Helmet,{title:t.site.siteMetadata.title}),Object(n.b)("h4",null,t.allMarkdownRemark.totalCount," posts"),Object(n.b)("div",{className:"reading_type_style"},Object(n.b)(s.a,{type:"Recently Update"})),Object(n.b)("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(n.b)("div",{className:"col-md-4",key:t.id},Object(n.b)("div",{css:d},Object(n.b)(l.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,className:"content__image"}),Object(n.b)("div",{className:"content__spaces"},Object(n.b)(a.a,{to:t.fields.slug,css:f},Object(n.b)("h5",{className:"content__header"},t.frontmatter.title),Object(n.b)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"),Object(n.b)("p",null,t.excerpt)),t.frontmatter.tags.length>1?Object(n.b)(c.a,{color:"success"},t.frontmatter.tags.join(" ")):Object(n.b)(c.a,{color:"success"},t.frontmatter.tags))))}))))};var p="3114683771"},251:function(e,t,r){r(121),r(25),r(23),r(11),r(35),r(32),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},252:function(e,t,r){r(40),r(122),r(25),r(23),r(11),r(35),r(24),r(165),r(49),r(15),r(63),r(33),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=d(r(1)),i=d(r(0)),s=d(r(253)),c=d(r(256)),u=r(257),l=r(251);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,T,E,h=(0,s.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),g=(p=h,E=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,s=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=s,t.titleAttributes=n({},i),t));case l.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case l.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),s=(0,u.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},253:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r(15),r(32),r(41),r(165),r(49);var a=r(1),o=n(a),i=n(r(254)),s=n(r(255));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c=[],u=void 0;function l(){u=e(c.map((function(e){return e.props}))),d.canUseDOM?t(u):r&&(u=r(u))}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return u},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},t.prototype.render=function(){return o.createElement(n,this.props)},t}(a.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",d.canUseDOM=i.canUseDOM,d}}},254:function(e,t,r){var n;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},255:function(e,t,r){r(26),r(25),r(23),r(11),r(35),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var u=o[c];if(!s(u))return!1;var l=e[u],d=t[u];if(!1===(a=r?r.call(n,l,d,u):void 0)||void 0===a&&l!==d)return!1}return!0}},256:function(e,t,r){"use strict";r(41),r(77),r(59),r(64),r(119),r(25),r(23),r(11),r(35),r(40);var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,u,l=n(t),d=n(r);if(l&&d){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,E=r instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==r.toString();var h=a(t);if((c=h.length)!==a(r).length)return!1;for(s=c;0!=s--;)if(!o.call(r,h[s]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(u=h[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},257:function(e,t,r){(function(e){r(122),r(28),r(97),r(24),r(40),r(15),r(25),r(23),r(11),r(35),r(79),r(32),r(121),r(20),r(33),r(78),r(65),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=c(r(1)),i=c(r(124)),s=r(251);function c(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,s.TAG_NAMES.TITLE),r=h(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[s.TAG_NAMES.BASE]})).map((function(e){return e[s.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},E=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===s.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===s.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==s.TAG_PROPERTIES.INNER_HTML&&c!==s.TAG_PROPERTIES.CSS_TEXT&&c!==s.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),c=0;c<o.length;c++){var u=o[c],l=(0,i.default)({},a[u],n[u]);a[u]=l}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){g(e)}),0)}),b=function(e){return clearTimeout(e)},m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,v=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;R(s.TAG_NAMES.BODY,n),R(s.TAG_NAMES.HTML,a),_(f,p);var T={baseTag:w(s.TAG_NAMES.BASE,r),linkTags:w(s.TAG_NAMES.LINK,o),metaTags:w(s.TAG_NAMES.META,i),noscriptTags:w(s.TAG_NAMES.NOSCRIPT,c),scriptTags:w(s.TAG_NAMES.SCRIPT,l),styleTags:w(s.TAG_NAMES.STYLE,d)},E={},h={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)})),t&&t(),u(e,E,h)},O=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),R(s.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(s.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var d=o.indexOf(u);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(s.HELMET_ATTRIBUTE):r.getAttribute(s.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(s.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var r=document.head||document.querySelector(s.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===s.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===s.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(s.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.REACT_TAG_MAP[r]||r]=e[r],t}),t)},I=function(e,t,r){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[s.HELMET_ATTRIBUTE]=!0,a=M(r,n),[o.default.createElement(s.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),o=O(t);return a?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,n)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+l(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[s.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=s.REACT_TAG_MAP[e]||e;if(r===s.TAG_PROPERTIES.INNER_HTML||r===s.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===s.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[s.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){A&&y(A),e.defer?A=m((function(){v(e,(function(){A=null}))})):(v(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(s.TAG_NAMES.BASE,t,n),bodyAttributes:I(s.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:I(s.ATTRIBUTE_NAMES.HTML,a,n),link:I(s.TAG_NAMES.LINK,o,n),meta:I(s.TAG_NAMES.META,i,n),noscript:I(s.TAG_NAMES.NOSCRIPT,c,n),script:I(s.TAG_NAMES.SCRIPT,u,n),style:I(s.TAG_NAMES.STYLE,l,n),title:I(s.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:p(s.ATTRIBUTE_NAMES.BODY,e),defer:h(e,s.HELMET_PROPS.DEFER),encode:h(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(s.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=m,t.warn=S}).call(this,r(123))},258:function(e,t,r){"use strict";r(25),r(23),r(11),r(80),r(125),r(167);var n=r(37);t.__esModule=!0,t.default=void 0;var a,o=n(r(8)),i=n(r(34)),s=n(r(99)),c=n(r(39)),u=n(r(1)),l=n(r(0)),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),T=function(e){var t=d(e),r=f(t);return p[r]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,b=new WeakMap;function m(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:o}),u.default.createElement("source",{media:a,srcSet:r,sizes:o}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function v(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),b.set(e,t)),function(){r.unobserve(e),b.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+u+i+s+r+n+t+o+a+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=u.default.createElement(w,(0,c.default)({src:t},a));return r.length>1?u.default.createElement("picture",null,n(r),o):o},w=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,o=e.style,i=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return u.default.createElement("img",(0,c.default)({sizes:r,srcSet:n,src:a},p,{onLoad:i,onError:l,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));w.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&T(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!E&&g&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||h&&(E||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:T(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=T(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,o=void 0===a?{}:a,i=e.imgStyle,s=void 0===i?{}:i,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,T=e.fluid,E=e.fixed,h=e.backgroundColor,g=e.durationFadeIn,b=e.Tag,y=e.itemProp,v=e.loading,O=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,c.default)({opacity:P?1:0,transition:M?"opacity "+g+"ms":"none"},s),C="boolean"==typeof h?"lightgray":h,L={transitionDelay:g+"ms"},N=(0,c.default)({opacity:this.state.imgLoaded?0:1},M&&L,{},s,{},f),j={title:t,alt:this.state.isVisible?"":r,style:N,className:p};if(T){var G=T,H=G[0];return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&u.default.createElement(b,{title:t,style:(0,c.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&L)}),H.base64&&u.default.createElement(R,{src:H.base64,spreadProps:j,imageVariants:G,generateSources:A}),H.tracedSVG&&u.default.createElement(R,{src:H.tracedSVG,spreadProps:j,imageVariants:G,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,m(G),u.default.createElement(w,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,c.default)({alt:r,title:t,loading:v},H,{imageVariants:G}))}}))}if(E){var k=E,x=k[0],U=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},o);return"inherit"===o.display&&delete U.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},C&&u.default.createElement(b,{title:t,style:(0,c.default)({backgroundColor:C,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},M&&L)}),x.base64&&u.default.createElement(R,{src:x.base64,spreadProps:j,imageVariants:k,generateSources:A}),x.tracedSVG&&u.default.createElement(R,{src:x.tracedSVG,spreadProps:j,imageVariants:k,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,m(k),u.default.createElement(w,{alt:r,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,c.default)({alt:r,title:t,loading:v},x,{imageVariants:k}))}}))}return null},t}(u.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),I=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});P.propTypes={resolutions:M,sizes:I,fixed:l.default.oneOfType([M,l.default.arrayOf(M)]),fluid:l.default.oneOfType([I,l.default.arrayOf(I)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var C=P;t.default=C},265:function(e,t,r){"use strict";var n=r(3),a=r(1),o=r.n(a),i=r(5),s=r(0),c=r.n(s),u=r(100),l={children:c.a.node},d=function(e){return o.a.createElement(u.a,Object(i.a)({group:!0},e))};d.propTypes=l;var f=d,p=r(250),T=r(248),E=r(249),h=r(120);r.d(t,"a",(function(){return g}));var g=function(e){var t,r;function a(t){var r;return(r=e.call(this,t)||this).toggle=r.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r.state={dropdownOpen:!1},r}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},o.render=function(){return Object(n.b)(f,{isOpen:this.state.dropdownOpen,toggle:this.toggle},Object(n.b)(p.a,{caret:!0,color:"success"},this.props.type),Object(n.b)(T.a,null,Object(n.b)(E.a,null,Object(n.b)(h.a,{to:"/wiki/"},"feed")),Object(n.b)(E.a,{divider:!0}),Object(n.b)(E.a,null,Object(n.b)(h.a,{to:"/wiki/new"},"Recently published")),Object(n.b)(E.a,{divider:!0}),Object(n.b)(E.a,null,Object(n.b)(h.a,{to:"/wiki/short-story"},"Shortest time to read"))))},a}(o.a.Component)},266:function(e,t,r){"use strict";var n=r(5),a=r(7),o=r(1),i=r.n(o),s=r(0),c=r.n(s),u=r(6),l=r.n(u),d=r(2),f={color:c.a.string,pill:c.a.bool,tag:d.h,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,r=e.cssModule,o=e.color,s=e.innerRef,c=e.pill,u=e.tag,f=Object(a.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.e)(l()(t,"badge","badge-"+o,!!c&&"badge-pill"),r);return f.href&&"span"===u&&(u="a"),i.a.createElement(u,Object(n.a)({},f,{className:p,ref:s}))};p.propTypes=f,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p}}]);
//# sourceMappingURL=component---src-pages-wiki-new-js-e045fce0bc80a4ed6228.js.map