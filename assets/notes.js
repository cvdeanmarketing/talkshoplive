/* Liner Notes: the TalkShopLive magazine. Headlines are placeholders; no article copy has been written. */
const ARTICLES=[
 {c:'Gift guides',t:'The signed vinyl gift guide for every kind of music fan',d:'Who to buy for, what to spend, and which signed records will still be in stock.',img:'a520c1a7-83ad-4ceb-9640-51ab486e6dce.jpg',shop:['cbzoe','winter','duff','foleylp']},
 {c:"Collector's corner",t:"Signed cover, insert or bookplate: what's the difference?",d:'A plain-English guide to the three ways an item gets signed, and what each means for collectors.',img:'5fc7751f-9322-4686-8293-95ec279952e2.jpg',shop:['sheryl','anthrax','bbs3lp','seals']},
 {c:'Behind the drop',t:'Behind the drop: 25 years of Blackberry Smoke',d:'What happened on the live, what sold first, and the merch fans added to their carts.',img:'7987557b-5710-4fc3-97e9-afcde08379ea.jpg',shop:['bbs2cd','bbshat','bbstee','bbs3lp']},
 {c:"Collector's corner",t:'Why collectors chase color variants',d:'Exclusive pressings, small runs and which colors tend to disappear first.',img:'c3276338-985b-4e39-ba22-00fd20f9741a.jpg',shop:['sheryl','extreme','duff','anthrax']},
 {c:'Book club',t:'Cookbooks worth getting signed this season',d:'New releases from the authors going live, with the recipes everyone is talking about.',img:'81037108-8566-4e46-946f-cb9dbb34d4b9.jpg',shop:['sour','ree','blais','calvo']},
 {c:'New here',t:'Your first live drop: what to expect',d:'How to set a reminder, ask a question in the chat and check out without leaving the video.',img:'64b402d2-0e06-4386-9331-1479f0f5f646.png',shop:['winter','dgbook','dgbody','randy']},
 {c:'Seller playbook',t:'How to plan a drop that sells before you go live',d:'Teasers, reminders and add-ons: a checklist for artists, authors and brands.',img:'d1187295-f389-49d1-bf13-a5f96a23bbd5.png',shop:['clutch','camlp','burnlp','extreme']},
 {c:'Beauty',t:'Shop-along 101: buying beauty live',d:'Why seeing a product worn on camera beats reading the label.',img:'f8028d02-660d-4c0c-bae5-0495e20d0df7.JPG',shop:['jsr1','biodance','lancer1','vv1']}];
const noteCard=(a,i)=>`<article class="ncard"><a class="th" href="article.html?i=${i}"><img loading="lazy" alt="" src="${T+a.img}"><span class="ph">Placeholder</span></a><div><span class="eyebrow">${a.c}</span><h3><a href="article.html?i=${i}">${a.t}</a></h3><p>${a.d}</p><small>4 min read · shoppable</small></div></article>`;

// lists: <div data-articles data-limit="3" data-filters>
document.querySelectorAll('[data-articles]').forEach(el=>{const d=el.dataset;let c='All';
  const cats=['All',...new Set(ARTICLES.map(a=>a.c))],grid=document.createElement('div');grid.className='ngrid';
  const render=()=>{grid.innerHTML=ARTICLES.map((a,i)=>[a,i]).filter(([a])=>c==='All'||a.c===c).slice(d.skip?+d.skip:0).slice(0,d.limit?+d.limit:99).map(([a,i])=>noteCard(a,i)).join('')};
  if('filters' in d){const bar=document.createElement('div');bar.className='fbar';
    bar.innerHTML=`<div class="tabs">${cats.map((k,i)=>`<button class="chip" aria-pressed="${!i}">${k}</button>`).join('')}</div>`;
    bar.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;c=b.textContent;bar.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));render()};el.append(bar)}
  el.append(grid);render()});

// featured story on the magazine front page
const feat=document.getElementById('featured');
if(feat){const a=ARTICLES[0];feat.innerHTML=`<a class="fimg" href="article.html?i=0"><img alt="" src="${T+a.img}"><span class="ph">Placeholder</span></a><div><span class="eyebrow">Featured · ${a.c}</span><h2><a href="article.html?i=0">${a.t}</a></h2><p>${a.d}</p><a class="btn btn-red" href="article.html?i=0">Read the story</a></div>`}

// article template
const art=document.getElementById('article');
if(art){const i=Math.min(ARTICLES.length-1,Math.max(0,+new URLSearchParams(location.search).get('i')||0)),a=ARTICLES[i];
  document.title=a.t+' | Liner Notes by TalkShopLive';
  const bars=n=>Array.from({length:n},(_,k)=>`<i style="width:${[100,96,99,92,97,64][k%6]}%"></i>`).join('');
  art.innerHTML=`
  <div class="crumb lt"><a href="index.html">Home</a> / <a href="liner-notes.html">Liner Notes</a> / ${a.c}</div>
  <div class="ahero"><span class="eyebrow">${a.c}</span><h1>${a.t}</h1><p>${a.d}</p><small>By the TalkShopLive team · 4 min read</small></div>
  <div class="aimg"><img alt="" src="${T+a.img}"></div>
  <div class="abody">
    <div class="phnote"><b>Placeholder article.</b> The headline, summary and layout are real; the copy below is not written yet.</div>
    <div class="skel">${bars(6)}</div>
    <h2>Section heading goes here</h2>
    <div class="skel">${bars(5)}</div>
    <aside class="shopstory"><span class="eyebrow">Shop the story</span><h3>Mentioned in this article</h3><div class="xs wide">${a.shop.map(miniRow).join('')}</div></aside>
    <h2>Another section heading</h2>
    <div class="skel">${bars(6)}</div>
  </div>
  <div class="pdp-more"><h2>Keep reading</h2><div class="ngrid">${ARTICLES.map((x,k)=>[x,k]).filter(([,k])=>k!==i).slice(0,3).map(([x,k])=>noteCard(x,k)).join('')}</div></div>`}
