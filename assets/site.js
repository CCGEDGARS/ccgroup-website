document.querySelectorAll('#programma details.mod').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){document.querySelectorAll('#programma details.mod[open]').forEach(function(o){if(o!==d)o.open=false;});}});});


(function(){var d=document.documentElement;d.classList.add('js');
var R=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function fmt(v,dec){return v.toFixed(dec).replace('.',',');}
function count(el){var to=parseFloat(el.dataset.count),dec=+el.dataset.dec,p=el.dataset.prefix||'',s=el.dataset.suffix||'';if(R){return;}var t0=null,dur=1400;function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/dur,1),e=1-Math.pow(1-k,3);el.textContent=p+fmt(to*e,dec)+s;if(k<1)requestAnimationFrame(step);}el.textContent=p+fmt(0,dec)+s;requestAnimationFrame(step);}
document.querySelectorAll('section .wrap > *').forEach(function(n){n.classList.add('reveal');});
if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(n){n.classList.add('in');});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target);}});},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(n){io.observe(n);});
})();
