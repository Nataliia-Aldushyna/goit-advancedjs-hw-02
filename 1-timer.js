import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as B}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector("#datetime-picker"),s=document.querySelector(".timer"),t={main:document.querySelector("body"),startBtn:document.querySelector("button"),days:s.children[0].children[0],hours:s.children[1].children[0],minutes:s.children[2].children[0],seconds:s.children[3].children[0]};t.startBtn.disabled=!0;let a=new Date;const b={enableTime:!0,time_24hr:!0,defaultDate:a,minuteIncrement:1,onClose(e){if(a=e[0].getTime(),a-Date.now()<=0){d(),t.startBtn.disabled=!0;return}t.startBtn.disabled=!1,t.startBtn.dataset.start=a}};t.startBtn.addEventListener("click",v);p(i,b);function v(){if(!t.startBtn.dataset.start){d();return}const e=t.startBtn.dataset.start-Date.now();if(e<=0){d();return}l(e),t.startBtn.disabled=!0,i.disabled=!0,t.main.classList.add("timer-active");const r=setInterval(()=>{const n=t.startBtn.dataset.start-Date.now();if(n<=0){clearInterval(r),i.disabled=!1,t.startBtn.disabled=!1,t.main.classList.remove("timer-active");return}l(n)},1e3)}function o(e){return String(e).toString().padStart(2,"0")}function l(e){const{days:r,hours:n,minutes:c,seconds:u}=S(e);t.days.textContent=o(r),t.hours.textContent=o(n),t.minutes.textContent=o(c),t.seconds.textContent=o(u)}function S(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function d(){B.error({message:"Please choose a date in the future",position:"topRight"})}
//# sourceMappingURL=1-timer.js.map
