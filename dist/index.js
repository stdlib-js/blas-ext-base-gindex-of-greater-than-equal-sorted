"use strict";var y=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var p=y(function(J,T){
var g=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-floor/dist'),G=require('@stdlib/blas-ext-base-gindex-of-greater-than-equal/dist').ndarray;function s(r,a,v,e,n){var t,q,i,o,u,d,f,l,c;if(t=v.data,q=v.accessors[0],f=q(t,n),l=q(t,n+(r-1)*e),g(f)||g(l))return G(r,a,t,e,n);if(f>=l)return a<=f?0:-1;for(u=0,d=r;u<d;){if(o=u+k((d-u)/2),c=q(t,n+o*e),g(c))return i=G(r-u,a,t,e,n+u*e),i<0?i:i+u;a<=c?d=o:u=o+1}return u===r?-1:u}T.exports=s
});var O=y(function(K,b){
var x=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-floor/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),S=require('@stdlib/blas-ext-base-gindex-of-greater-than-equal/dist').ndarray,z=p();function A(r,a,v,e,n){var t,q,i,o,u,d,f,l;if(r<=0)return-1;if(f=R(v),f.accessorProtocol)return z(r,a,f,e,n);if(u=v[n],d=v[n+(r-1)*e],x(u)||x(d))return S(r,a,v,e,n);if(u>=d)return a<=u?0:-1;for(i=0,o=r;i<o;){if(q=i+P((o-i)/2),l=v[n+q*e],x(l))return t=S(r-i,a,v,e,n+i*e),t<0?t:t+i;a<=l?o=q:i=q+1}return i===r?-1:i}b.exports=A
});var w=y(function(L,h){
var B=require('@stdlib/strided-base-stride2offset/dist'),C=O();function D(r,a,v,e){return C(r,a,v,e,B(r,e))}h.exports=D
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=w(),H=O();F(j,"ndarray",H);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
