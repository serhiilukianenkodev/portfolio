import{S as u,N as d,K as f,M as m,A as p}from"./assets/vendor-Bw9Bta1L.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const c="user theme",g=document.querySelector(".theme-list"),n=y(c);n&&a(n);g.addEventListener("click",r=>{if(r.target===r.currentTarget)return;const e=r.target.dataset.themeOption;h(c,e),a(e)});function a(r){const e=document.querySelector("html");e.dataset.theme!==r&&(e.dataset.theme=r)}function h(r,e){localStorage.setItem(r,JSON.stringify(e))}function y(r){try{return JSON.parse(localStorage.getItem(r))}catch(e){console.log(e)}}const w=new u(".swiper-skills",{modules:[d,f,m],slidesPerView:"auto",navigation:!0,keyboard:!0,mousewheel:!0,direction:"horizontal",loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-button-next"},on:{click:({activeIndex:r,clickedIndex:e})=>{r!==e&&w.slideNext()}}});new p(".faq-list",{duration:500,showMultiple:!0,elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-description",activeClass:"is-active"});
//# sourceMappingURL=index.js.map
