"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var y=q(function(A,d){
var O=require('@stdlib/math-base-special-floor/dist');function G(r,e,i,t,o){var v,a,n,u,s,c,l;if(v=i.data,a=i.accessors[0],c=a(v,o),l=a(v,o+(r-1)*t),c>=l)return e<=c?0:-1;for(u=0,s=r;u<s;)n=u+O((s-u)/2),e<=a(v,o+n*t)?s=n:u=n+1;return u===r?-1:u}d.exports=G
});var f=q(function(B,g){
var S=require('@stdlib/math-base-special-floor/dist'),T=require('@stdlib/array-base-arraylike2object/dist'),b=y();function w(r,e,i,t,o){var v,a,n,u,s,c;if(r<=0)return-1;if(c=T(i),c.accessorProtocol)return b(r,e,c,t,o);if(u=i[o],s=i[o+(r-1)*t],u>=s)return e<=u?0:-1;for(a=0,n=r;a<n;)v=a+S((n-a)/2),e<=i[o+v*t]?n=v:a=v+1;return a===r?-1:a}g.exports=w
});var p=q(function(C,h){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=f();function P(r,e,i,t){return k(r,e,i,t,j(r,t))}h.exports=P
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=p(),m=f();R(x,"ndarray",m);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
