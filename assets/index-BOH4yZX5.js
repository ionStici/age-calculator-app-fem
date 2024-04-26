(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const h="Field required",g="Invalid day",q="Invalid month",b="Must be in the past",v="red-border",x="red-text",T="hidden",S=document.querySelectorAll(".form__input-box"),D=document.querySelectorAll(".form__input"),F=document.querySelector(".form"),O=document.querySelectorAll(".output__number"),m=new Date,I=m.getFullYear(),w=m.getMonth(),Y=m.getDate(),o=function(c,s,a){S.forEach((r,e)=>{if(r.dataset.type===c||c===e){const n=r.querySelector(".input__message");if(s==="hide"){n.classList.add(T),r.classList.remove(v,x);return}n.classList.remove("hidden"),r.classList.add(v,x),n.textContent=a}})};D.forEach(c=>c.addEventListener("input",function({target:s}){s.value=s.value.replace(/[^0-9]/g,"")}));F.addEventListener("submit",function(c){c.preventDefault();const s=[...D].reduce((t,C)=>(t.push(C.value),t),[]),[a,r,e]=s;a===""?o("day","render",h):a<1||a>31?o("day","render",g):o("day","hide",""),r===""?o("month","render",h):r<1||r>12?o("month","render",q):o("month","hide",""),e===""?o("year","render",h):e>I||e<1900?o("year","render",b):o("year","hide","");const n=new Date(e,r-1,a).getMonth()+1===+r,u=[...S].some(t=>t.classList.contains(x));if(!n&&!u){o("day","render",g),o("month","render",""),o("year","render","");return}if(u)return;const y=new Date(e,r-1,a);let f=I-y.getFullYear(),i=w-y.getMonth(),l=Y-y.getDate();if(i<0&&(f-=1,i+=12),l<0){i-=1;const t=new Date(m.getFullYear(),m.getMonth(),0);l+=t.getDate()}i<0&&(f-=1,i+=12);const p=1e3,L=p/f,_=p/i,M=p/l;O.forEach((t,C,E)=>{if(t.textContent=0,t.dataset.type==="years"){if(t.textContent=t.textContent.padStart(2,"0"),+t.textContent===f)return;const d=setInterval(()=>{t.textContent=+t.textContent+1,t.textContent=t.textContent.padStart(2,"0"),+t.textContent===f&&clearInterval(d)},L)}if(t.dataset.type==="months"){if(t.textContent=t.textContent.padStart(2,"0"),+t.textContent===i)return;const d=setInterval(()=>{t.textContent=+t.textContent+1,t.textContent=t.textContent.padStart(2,"0"),+t.textContent===i&&clearInterval(d)},_)}if(t.dataset.type==="days"){if(t.textContent=t.textContent.padStart(2,"0"),+t.textContent===l)return;const d=setInterval(()=>{t.textContent=+t.textContent+1,t.textContent=t.textContent.padStart(2,"0"),+t.textContent===l&&clearInterval(d)},M)}setTimeout(()=>{E.forEach(d=>{setTimeout(()=>d.classList.add("output__number--finish"),150),setTimeout(()=>d.classList.remove("output__number--finish"),500)})},p+50)})});
