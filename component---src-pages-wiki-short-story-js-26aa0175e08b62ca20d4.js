(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return f}));var n=r(3),a=(r(0),r(243)),o=r(297),i=r(244),c=r(307),s=r(308),l=r(304),u=r.n(l),d=(r(179),{name:"nn640c",styles:"text-decoration:none;color:inherit;"});t.default=function(e){var t=e.data;return Object(n.a)(i.a,null,Object(n.a)(o.Helmet,{title:t.site.siteMetadata.title}),Object(n.a)("h4",null,t.allMarkdownRemark.totalCount," posts"),Object(n.a)("div",{className:"reading_type_style"},Object(n.a)(c.a,{type:"shortest time to read"})),Object(n.a)("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(n.a)("div",{className:"col-md-4 wiki__article",key:t.id},Object(n.a)("div",{className:"blog__post__list"},Object(n.a)(u.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,className:"content__image"}),Object(n.a)("div",{className:"content__spaces"},Object(n.a)(a.a,{to:t.fields.slug,css:d},Object(n.a)("h5",{className:"content__header"},t.frontmatter.title)),t.frontmatter.tags.length>1?Object(n.a)(s.a,{color:"success"},t.frontmatter.tags.join(" ")):Object(n.a)(s.a,{color:"success"},t.frontmatter.tags)," ",Object(n.a)("br",null),Object(n.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))}))))};var f="3814583940"},293:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},294:function(e,t,r){var n;r(30),function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},295:function(e,t,r){r(53),r(12),r(10),r(5),r(26),r(18),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},296:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l}));r(30),r(14),r(12),r(10),r(5),r(26),r(21),r(37),r(18),r(303);var n,a=r(6),o=r.n(a);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function c(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var s="object"==typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,r){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var l=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"==typeof window||!window.document||window.document.createElement},297:function(e,t,r){r(30),r(110),r(12),r(10),r(5),r(26),r(21),r(178),r(109),r(14),r(38),r(45),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=d(r(0)),i=d(r(6)),c=d(r(298)),s=d(r(301)),l=r(302),u=r(295);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,T,b,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),m=(p=h,b=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=c,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),T.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},b);m.renderStatic=m.rewind,t.Helmet=m,t.default=m},298:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r(14),r(18),r(31),r(178),r(109);var a=r(0),o=n(a),i=n(r(299)),c=n(r(300));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s=[],l=void 0;function u(){l=e(s.map((function(e){return e.props}))),d.canUseDOM?t(l):r&&(l=r(l))}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),u()},t.prototype.componentDidUpdate=function(){u()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},t.prototype.render=function(){return o.createElement(n,this.props)},t}(a.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",d.canUseDOM=i.canUseDOM,d}}},299:function(e,t,r){var n;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},300:function(e,t,r){r(75),r(12),r(10),r(5),r(26),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!c(l))return!1;var u=e[l],d=t[l];if(!1===(a=r?r.call(n,u,d,l):void 0)||void 0===a&&u!==d)return!1}return!0}},301:function(e,t,r){"use strict";r(31),r(74),r(33),r(36),r(132),r(12),r(10),r(5),r(26),r(30);var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,s,l,u=n(t),d=n(r);if(u&&d){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var T=t instanceof RegExp,b=r instanceof RegExp;if(T!=b)return!1;if(T&&b)return t.toString()==r.toString();var h=a(t);if((s=h.length)!==a(r).length)return!1;for(c=s;0!=c--;)if(!o.call(r,h[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=s;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},302:function(e,t,r){(function(e){r(110),r(37),r(91),r(21),r(30),r(14),r(12),r(10),r(5),r(26),r(76),r(18),r(53),r(19),r(45),r(47),r(39),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=s(r(0)),i=s(r(133)),c=r(295);function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),r=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},b=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),s=0;s<o.length;s++){var l=o[s],u=(0,i.default)({},a[l],n[l]);a[l]=u}return e}),[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),E=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,A=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;w(c.TAG_NAMES.BODY,n),w(c.TAG_NAMES.HTML,a),_(f,p);var T={baseTag:R(c.TAG_NAMES.BASE,r),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,d)},b={},h={};Object.keys(T).forEach((function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(b[e]=r),n.length&&(h[e]=T[e].oldTags)})),t&&t(),l(e,b,h)},O=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var d=o.indexOf(l);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},C=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=P(r,n),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=C(r),o=O(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return P(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){v&&y(v),e.defer?v=g((function(){A(e,(function(){v=null}))})):(A(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,n),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,a,n),link:M(c.TAG_NAMES.LINK,o,n),meta:M(c.TAG_NAMES.META,i,n),noscript:M(c.TAG_NAMES.NOSCRIPT,s,n),script:M(c.TAG_NAMES.SCRIPT,l,n),style:M(c.TAG_NAMES.STYLE,u,n),title:M(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:b(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:b(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:b(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:b(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:b(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=S}).call(this,r(293))},303:function(e,t,r){(function(t){r(33),r(36),r(5);var n="[object AsyncFunction]",a="[object Function]",o="[object GeneratorFunction]",i="[object Null]",c="[object Proxy]",s="[object Undefined]",l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),f=Object.prototype,p=f.hasOwnProperty,T=f.toString,b=d.Symbol,h=b?b.toStringTag:void 0;function m(e){return null==e?void 0===e?s:i:h&&h in Object(e)?function(e){var t=p.call(e,h),r=e[h];try{e[h]=void 0;var n=!0}catch(o){}var a=T.call(e);n&&(t?e[h]=r:delete e[h]);return a}(e):function(e){return T.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=m(e);return t==a||t==o||t==n||t==c}}).call(this,r(293))},304:function(e,t,r){"use strict";r(12),r(10),r(5),r(54),r(111),r(181);var n=r(28);t.__esModule=!0,t.default=void 0;var a,o=n(r(112)),i=n(r(77)),c=n(r(180)),s=n(r(134)),l=n(r(0)),u=n(r(6)),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),T=function(e){var t=d(e),r=f(t);return p[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,E=new WeakMap;function g(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:o}),l.default.createElement("source",{media:a,srcSet:r,sizes:o}))}))}function y(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,o=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(o?'sizes="'+o+'" ':"")+"/>"}var O=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+l+i+c+r+n+t+o+a+s+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,o=l.default.createElement(R,(0,s.default)({src:t},a));return r.length>1?l.default.createElement("picture",null,n(r),o):o},R=l.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,o=e.style,i=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,s.default)({sizes:r,srcSet:n,src:a},p,{onLoad:i,onError:u,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&T(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&m&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||h&&(b||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:T(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=T(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,o=void 0===a?{}:a,i=e.imgStyle,c=void 0===i?{}:i,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,T=e.fluid,b=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,E=e.Tag,y=e.itemProp,A=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,s.default)({opacity:C?1:0,transition:P?"opacity "+m+"ms":"none"},c),I="boolean"==typeof h?"lightgray":h,j={transitionDelay:m+"ms"},L=(0,s.default)({opacity:this.state.imgLoaded?0:1},P&&j,{},c,{},f),N={title:t,alt:this.state.isVisible?"":r,style:L,className:p};if(T){var k=T,x=k[0];return l.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},l.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),I&&l.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&j)}),x.base64&&l.default.createElement(w,{src:x.base64,spreadProps:N,imageVariants:k,generateSources:v}),x.tracedSVG&&l.default.createElement(w,{src:x.tracedSVG,spreadProps:N,imageVariants:k,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,g(k),l.default.createElement(R,{alt:r,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:A,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:r,title:t,loading:A},x,{imageVariants:k}))}}))}if(b){var G=b,H=G[0],U=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},o);return"inherit"===o.display&&delete U.display,l.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},I&&l.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:I,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&j)}),H.base64&&l.default.createElement(w,{src:H.base64,spreadProps:N,imageVariants:G,generateSources:v}),H.tracedSVG&&l.default.createElement(w,{src:H.tracedSVG,spreadProps:N,imageVariants:G,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,g(G),l.default.createElement(R,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:A,draggable:O})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:r,title:t,loading:A},H,{imageVariants:G}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});C.propTypes={resolutions:P,sizes:M,fixed:u.default.oneOfType([P,u.default.arrayOf(P)]),fluid:u.default.oneOfType([M,u.default.arrayOf(M)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var I=C;t.default=I},306:function(e,t,r){"use strict";r(38);var n=r(28);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(92)).default)(a.default.createElement("path",{d:"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"}),"FormatLineSpacing");t.default=o},307:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r.n(a),i=r(2),c=r(1),s=(r(6),r(4)),l=r(7),u=r(50),d=r(290),f=r(13),p=o.a.forwardRef((function(e,t){var r=e.children,n=e.classes,a=e.className,l=e.color,u=void 0===l?"default":l,p=e.component,T=void 0===p?"button":p,b=e.disabled,h=void 0!==b&&b,m=e.disableFocusRipple,E=void 0!==m&&m,g=e.focusVisibleClassName,y=e.fullWidth,S=void 0!==y&&y,v=e.size,A=void 0===v?"medium":v,O=e.type,_=void 0===O?"button":O,w=e.variant,R=void 0===w?"text":w,C=Object(i.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),P="text"===R,M="outlined"===R,I="contained"===R,j="primary"===u,L="secondary"===u,N=Object(s.a)(n.root,a,P&&[n.text,j&&n.textPrimary,L&&n.textSecondary],M&&[n.outlined,j&&n.outlinedPrimary,L&&n.outlinedSecondary],I&&[n.contained,j&&n.containedPrimary,L&&n.containedSecondary],"medium"!==A&&n["size".concat(Object(f.a)(A))],h&&n.disabled,S&&n.fullWidth,{inherit:n.colorInherit}[u]);return o.a.createElement(d.a,Object(c.a)({className:N,component:T,disabled:h,focusRipple:!E,focusVisibleClassName:Object(s.a)(n.focusVisible,g),ref:t,type:_},C),o.a.createElement("span",{className:n.label},r))})),T=Object(l.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(u.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}}),{name:"MuiButton"})(p),b=r(289),h=r(291),m=r(306),E=r.n(m),g=r(243);function y(){var e=o.a.useState(null),t=e[0],r=e[1],a=function(){r(null)};return Object(n.a)("div",null,Object(n.a)(T,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},variant:"contained",color:"primary"},Object(n.a)(E.a,null)),Object(n.a)(b.a,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:a},Object(n.a)(h.a,{onClick:a},Object(n.a)(g.a,{to:"/wiki/"},"feed")),Object(n.a)(h.a,{onClick:a},Object(n.a)(g.a,{to:"/wiki/new"},"Recently published")),Object(n.a)(h.a,{onClick:a},Object(n.a)(g.a,{to:"/wiki/short-story"},"Shortest time to read"))))}r.d(t,"a",(function(){return y}))},308:function(e,t,r){"use strict";var n=r(1),a=r(46),o=r(0),i=r.n(o),c=r(6),s=r.n(c),l=r(294),u=r.n(l),d=r(296),f={color:s.a.string,pill:s.a.bool,tag:d.c,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),children:s.a.node,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,r=e.cssModule,o=e.color,c=e.innerRef,s=e.pill,l=e.tag,f=Object(a.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.a)(u()(t,"badge","badge-"+o,!!s&&"badge-pill"),r);return f.href&&"span"===l&&(l="a"),i.a.createElement(l,Object(n.a)({},f,{className:p,ref:c}))};p.propTypes=f,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p}}]);
//# sourceMappingURL=component---src-pages-wiki-short-story-js-26aa0175e08b62ca20d4.js.map