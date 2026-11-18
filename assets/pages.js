/* Page templates driven by the shared catalog in site.js: product, artist and watch pages, plus small widgets. */
const qs=new URLSearchParams(location.search);
const sameHost=(a,b)=>a&&b&&(a===b||a.includes(b)||b.includes(a));
const dropsFor=name=>[...SHOWS.up,...SHOWS.re].filter(s=>sameHost(s.by,name));
const productsFor=name=>Object.keys(P).filter(k=>sameHost(P[k].a,name));
const miniRow=id=>`<div class="line"><a href="product.html?id=${id}"><img alt="" src="${P[id].i}"></a><div><strong><a href="product.html?id=${id}">${P[id].n}</a></strong><small>${P[id].merch?'Official merch':(P[id].s?'Signed · ':'')+(P[id].a||SUBS[P[id].cat][P[id].g[0]])}</small></div><button class="btn btn-line btn-sm" data-add="${id}">+ ${money(P[id].p)}</button></div>`;

// ---------- gift tiles and sample orders
$$('[data-gifts]').forEach(el=>el.innerHTML=el.dataset.gifts.split(',').map(id=>`<a class="gift" href="holiday-sale.html"><img loading="lazy" alt="${P[id].n}" src="${P[id].i}"><strong>${P[id].n}</strong><em>${money(P[id].p)}</em>${P[id].w?`<s>${money(P[id].w)}</s>`:''}</a>`).join(''));
$$('[data-order]').forEach((el,i)=>{const p=P[el.dataset.order];el.innerHTML=`<img alt="" src="${p.i}"><div><strong>${p.n}</strong><small>${p.a} · ${money(p.p)} · ${i?'Preorder, ships at release':'Signed cover · arriving Fri Nov 20'}</small></div><span class="pillst ${i?'wait':''}">${i?'Preorder':'Shipped'}</span>`});

// ---------- videos: play muted when on screen, with a sound toggle
$$('.vid').forEach(box=>{const v=box.querySelector('video'),b=box.querySelector('button');
  new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.35}).observe(v);
  if(b)b.onclick=()=>{v.muted=!v.muted;b.textContent=v.muted?'🔇 Sound off':'🔊 Sound on'}});

// ---------- product page
if($('#pdp')){const id=P[qs.get('id')]?qs.get('id'):'winter',p=P[id],drop=dropsFor(p.a)[0],sg=suggest([id]);
  document.title=`${p.n}${p.a?' by '+p.a:''} | TalkShopLive`;
  $('#pdp').innerHTML=`
  <div class="crumb lt"><a href="index.html">Home</a> / <a href="${{music:'signed-music.html',book:'signed-books.html',merch:'merch.html',beauty:'beauty.html'}[p.cat]}">${{music:'Signed music',book:'Signed books',merch:'Merch',beauty:'Beauty'}[p.cat]}</a> / ${p.n}</div>
  <div class="pdp">
    <div class="gal">
      <div class="shot"><img alt="${p.n}" src="${p.i}"><span class="badges">${p.s?'<span class="bg sig">Signed</span>':''}${p.t.map(t=>`<span class="bg">${t}</span>`).join('')}</span></div>
      ${drop?`<a class="clip" href="watch.html?d=${drop.id}"><img alt="" src="${T+drop.img}"><span class="play">▶</span><div><em>${drop.cls==='replay'?'Watch the replay':'Going live '+drop.w}</em><strong>${drop.cls==='replay'?'See '+drop.by+' talk about it':'Hear about it from '+drop.by}</strong></div></a>`:''}
    </div>
    <div class="buybox">
      ${p.a?`<a class="by" href="artist.html?a=${encodeURIComponent(p.a)}">${p.a} →</a>`:''}
      <h1>${p.n}</h1>
      <div class="price">${money(p.p)}${p.w?`<s>${money(p.w)}</s><span class="save">Save ${money(p.w-p.p)}</span>`:''}</div>
      ${p.s?`<div class="sigbox"><span class="k">Signed, for real</span><p>Autographed by ${p.a}. The listing states exactly what is signed (cover, insert or bookplate) so there are no surprises when it arrives.</p></div>`:''}
      ${p.t.includes('Preorder')?'<p class="fine">Preorder: ships when the release is out. You are charged today.</p>':''}
      <button class="btn btn-red big" data-add="${id}">Add to cart · ${money(p.p)}</button>
      <ul class="assure"><li>Shipping cost and ship date shown here, before checkout</li><li>${p.p>=FREE?'Ships free':`Add ${money(FREE-p.p)} more for free shipping`}</li><li>Returns policy linked in plain sight</li></ul>
      <a class="fine" href="${S+p.u}" target="_blank" rel="noopener">See the current listing on talkshop.live ↗</a>
    </div>
  </div>
  ${sg.artist.length?`<div class="pdp-more"><h2>Complete the set</h2><p class="lede">More from ${sg.name}. Add-ons from the same ${p.cat==='beauty'?'seller':'artist'} ship together.</p><div class="xs wide">${sg.artist.map(miniRow).join('')}</div></div>`:''}
  ${sg.similar.length?`<div class="pdp-more"><h2>Fans also buy</h2><div class="grid">${sg.similar.concat(Object.keys(P).filter(k=>P[k].cat===p.cat&&k!==id&&!sg.similar.includes(k)&&!sg.artist.includes(k))).slice(0,4).map(prodCard).join('')}</div></div>`:''}`}

// ---------- artist page
if($('#artist')){const name=qs.get('a')||'Blackberry Smoke',ids=productsFor(name),drops=dropsFor(name),next=drops.find(d=>d.cls!=='replay');
  document.title=`${name} | TalkShopLive`;
  $('#artist').innerHTML=`
  <section class="phero"><div class="wrap ahead">
    ${drops[0]?`<img class="avatar" alt="" src="${T+drops[0].img}">`:ids[0]?`<img class="avatar" alt="" src="${P[ids[0]].i}">`:''}
    <div><div class="crumb"><a href="index.html">Home</a> / Artists</div><h1>${name}</h1>
      <p>${next?`Going live ${next.w}. `:''}${ids.length} ${ids.length===1?'item':'items'} in the store${drops.some(d=>d.cls==='replay')?', replay available':''}.</p>
      <div class="sw big" data-switch><button aria-pressed="false">＋ Follow</button><button class="n" aria-pressed="false">🔔 Notify me when live</button></div>
      <p class="fine" style="color:rgba(255,255,255,.55);margin-top:10px">Follow keeps ${name} in your feed. Notify sends an alert before each drop.</p></div>
  </div></section>
  ${drops.length?`<section class="tight"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Live drops</span><h2>Watch ${name}</h2></div></div><div class="dgrid">${drops.map(showCard).join('')}</div></div></section>`:''}
  <section class="tight ${drops.length?'band':''}"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">The store</span><h2>${ids.length?'Shop '+name:'Nothing listed yet'}</h2>${ids.length?'':'<p class="lede">Products appear here when the drop is announced. Follow to hear first.</p>'}</div></div><div class="grid">${ids.map(prodCard).join('')}</div></div></section>`;
  $$('#artist [data-switch]').forEach(g=>g.onclick=e=>{const b=e.target.closest('button');if(b)b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')})}

// ---------- watch page
if($('#watch')){const all=[...SHOWS.up,...SHOWS.re],s=all.find(x=>x.id===qs.get('d'))||SHOWS.up[3],replay=s.cls==='replay';
  let ids=productsFor(s.by);const own=ids.length>0;
  if(!own)ids=Object.keys(P).filter(k=>P[k].cat===s.c).slice(0,4);
  document.title=`${s.t} with ${s.by} | TalkShopLive`;
  $('#watch').innerHTML=`
  <div class="crumb lt"><a href="index.html">Home</a> / <a href="live-drops.html">Live drops</a> / ${s.t}</div>
  <div class="watch">
    <div>
      <div class="stage"><img alt="${s.t}" src="${T+s.img}">
        <span class="tag">${replay?'Replay':s.cls==='today'?'Live tonight':'Upcoming drop'}</span><span class="count">${s.w}</span>
        ${replay?'<span class="bigplay">▶</span>':''}
        <div class="chat" aria-hidden="true"><span><b>Jamie</b>Is this one signed on the cover?</span><span><b>Marcus</b>Grabbed mine. Gift sorted 🎁</span><span><b>Priya</b>Tell the story behind it!</span></div>
      </div>
      <div class="winfo"><div><span class="eyebrow">${s.k}</span><h1>${s.t}</h1><p>with <a href="artist.html?a=${encodeURIComponent(s.by)}">${s.by}</a> · ${s.w}</p></div>
        <div class="wbtns">${replay?'':'<button class="btn btn-red" data-remind>Remind me</button>'}<a class="btn btn-line" href="artist.html?a=${encodeURIComponent(s.by)}">＋ Follow ${s.by.split(' ')[0]}</a></div></div>
      <p class="fine">${replay?'This drop has ended. The replay stays shoppable while copies last.':'This is a live, shoppable video. Everything on screen can be bought here during the drop, and from the replay afterwards.'} <a href="${S+s.u}" target="_blank" rel="noopener">Open the real page on talkshop.live ↗</a></p>
    </div>
    <aside class="shopside"><h2>${own?'Shop this drop':'Shop along'}</h2><small>${own?'From '+s.by+'. Add without leaving the video.':'Products are pinned here when the drop starts. In the meantime:'}</small>
      <div class="xs wide">${ids.slice(0,6).map(miniRow).join('')}</div>
    </aside>
  </div>`}

// seller menu: close when clicking away
document.addEventListener('click',e=>{const m=$('.sellmenu');if(m&&!e.target.closest('.sellmenu'))m.open=false});
