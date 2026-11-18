/* Spinning-record sign-up pop-up and a support chat pop-up. Both are concept demos: nothing is sent anywhere. */
(function(){
  const quiet=['signin','account','sell','seller'].includes(document.body.dataset.page);
  const GENRES=[['Country','#B4532A'],['Rock','#EB0017'],['Pop','#C2338B'],['Holiday','#0F6B4A'],['Books','#2C4BA0'],['Beauty','#B8862B']];
  document.body.insertAdjacentHTML('beforeend',`
  <div class="fab alerts" id="alertsWrap"><button id="alertsFab" aria-label="Get drop alerts"><i class="mini"></i><span>Get drop alerts</span></button><button class="fabx" id="alertsX" aria-label="Shrink to the record">×</button></div>
  <button class="fab chatb" id="chatFab" aria-expanded="false">💬 Chat</button>
  <div class="pop" id="pop" role="dialog" aria-modal="true" aria-labelledby="popTitle">
    <div class="popcard">
      <button class="popx" id="popX" aria-label="Close">×</button>
      <div class="deck"><div class="record"><div class="label" id="popLabel"><span>TSL</span></div></div><div class="arm"><i></i></div>
        <div class="sigdone"><svg viewBox="0 0 300 120" aria-hidden="true"><path d="M14 78 C34 20, 58 18, 56 60 S40 112, 74 70 S96 30, 104 66 S118 92, 132 60 S150 34, 158 64 S176 90, 196 52 S214 36, 222 66 S248 84, 286 40"/></svg></div></div>
      <div class="popbody">
        <form class="popform" id="popForm">
          <span class="eyebrow">Never miss a signed drop</span>
          <h2 id="popTitle">Drop the needle on your favorites.</h2>
          <p>Pick what you're into. We'll tell you when those artists go live, before the signed copies sell out.</p>
          <div class="picks" id="popPicks">${GENRES.map(g=>`<button type="button" class="pick" aria-pressed="false" data-c="${g[1]}">${g[0]}</button>`).join('')}</div>
          <input class="inp" type="email" required placeholder="Email address" aria-label="Email address" autocomplete="email">
          <label class="smsrow"><input type="checkbox" id="popSms"> Text me when my artists go live</label>
          <input class="inp" id="popPhone" type="tel" placeholder="Mobile number" aria-label="Mobile number" autocomplete="tel" hidden>
          <button class="btn btn-red">Put me on the list</button>
          <small>Concept demo: nothing you type is sent or saved. In production this feeds genre segments in HubSpot.</small>
        </form>
        <div class="popdone"><span class="hand2">Signed, sealed.</span><h2 style="margin-top:8px">You're on the list.</h2><p id="popMsg" style="color:var(--mute);margin-top:10px"></p><a class="btn btn-red" style="margin-top:20px" href="live-drops.html">See what's going live</a></div>
      </div>
    </div>
  </div>
  <div class="chatwin" id="chatWin" role="dialog" aria-label="Chat with TalkShopLive">
    <div class="chead"><i class="mini" style="animation-duration:5s"></i><div><b>TalkShopLive help</b><small>Concept demo · answers in seconds</small></div><button id="chatX" aria-label="Close chat">×</button></div>
    <div class="clog" id="chatLog" aria-live="polite"></div>
    <div class="quick" id="chatQuick"></div>
    <form class="cform" id="chatForm"><input placeholder="Type a question" aria-label="Type a question" autocomplete="off"><button aria-label="Send">➤</button></form>
  </div>`);

  // ----- record pop-up
  const pop=document.getElementById('pop'),card=pop.querySelector('.popcard'),label=document.getElementById('popLabel');
  const openPop=()=>{pop.classList.add('open');setTimeout(()=>pop.classList.add('playing'),350);try{sessionStorage.setItem('tsl_pop','1')}catch(e){}};
  const closePop=()=>pop.classList.remove('open','playing');
  document.getElementById('alertsFab').onclick=openPop;
  const wrap=document.getElementById('alertsWrap');let hid=false;try{hid=sessionStorage.getItem('tsl_fab_off')}catch(e){}
  if(hid)wrap.classList.add('min');
  document.getElementById('alertsX').onclick=()=>{wrap.classList.add('min');try{sessionStorage.setItem('tsl_fab_off','1')}catch(e){}};
  document.getElementById('popX').onclick=closePop;
  pop.addEventListener('click',e=>{if(e.target===pop)closePop()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePop();closeChat()}});
  document.getElementById('popPicks').onclick=e=>{const b=e.target.closest('.pick');if(!b)return;
    b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true');
    const on=[...pop.querySelectorAll('.pick[aria-pressed=true]')];
    label.style.setProperty('--lab',on.length?on[on.length-1].dataset.c:'');           // label takes the colour of the last pick
    card.style.setProperty('--rpm',Math.max(1.2,6-on.length*.9)+'s')};                   // more picks, faster spin
  document.getElementById('popSms').onchange=e=>{const p=document.getElementById('popPhone');p.hidden=!e.target.checked;p.required=e.target.checked;if(e.target.checked)p.focus()};
  document.getElementById('popForm').onsubmit=e=>{e.preventDefault();
    const on=[...pop.querySelectorAll('.pick[aria-pressed=true]')].map(b=>b.textContent);
    document.getElementById('popMsg').textContent=(on.length?`We'll send ${on.join(', ')} drops your way`:"We'll send the best drops your way")+(document.getElementById('popSms').checked?', with a text before your artists go live.':'.')+' (Concept demo: nothing was sent.)';
    pop.classList.add('done');label.querySelector('span').textContent=''};
  let seen=false;try{seen=sessionStorage.getItem('tsl_pop')}catch(e){}
  if(!quiet&&!seen&&location.hash!=='#notes')setTimeout(()=>{if(!document.body.classList.contains('cart'))openPop()},9000);

  // ----- chat
  const win=document.getElementById('chatWin'),log=document.getElementById('chatLog'),fab=document.getElementById('chatFab');
  const QA=[
    ['Is it really signed?','Yes. Autographed items are signed by the artist or author. Each listing says what is signed: the cover, an insert or a bookplate.'],
    ["What's a live drop?",'A live, shoppable video hosted by the artist or author. Some perform, some talk and take questions. Everything on screen can be bought during the drop or from the replay.'],
    ['I missed the live','No problem. Replays stay on the site and remain shoppable while copies last. You can also set a reminder for the next one.'],
    ['Where is my order?','Signed and preorder items ship when the release is out. Your account shows each order with its ship date. In the real product I would look it up for you here.'],
    ['Talk to a person','Of course. In the real product this hands you to the support team, with your question attached so you do not have to repeat it.']];
  const say=(t,me)=>{const d=document.createElement('div');d.className='msg'+(me?' me':'');d.textContent=t;log.append(d);log.scrollTop=log.scrollHeight};
  const answer=q=>{say(q,true);const hit=QA.find(([k])=>k===q)||QA.find(([k])=>k.toLowerCase().split(/\W+/).some(w=>w.length>4&&q.toLowerCase().includes(w)));
    setTimeout(()=>say(hit?hit[1]:"Good question. This demo only knows a few answers, so try one of the buttons below. The real version would answer from the help center or pass you to a person."),500)};
  document.getElementById('chatQuick').innerHTML=QA.map(([q])=>`<button type="button">${q}</button>`).join('');
  document.getElementById('chatQuick').onclick=e=>{const b=e.target.closest('button');if(b)answer(b.textContent)};
  document.getElementById('chatForm').onsubmit=e=>{e.preventDefault();const i=e.target.querySelector('input');if(i.value.trim()){answer(i.value.trim());i.value=''}};
  let greeted=false;
  const openChat=()=>{win.classList.add('open');fab.setAttribute('aria-expanded','true');if(!greeted){greeted=true;say('Hi! I can help with signed items, live drops and orders. What do you need?')}};
  function closeChat(){win.classList.remove('open');fab.setAttribute('aria-expanded','false')}
  fab.onclick=()=>win.classList.contains('open')?closeChat():openChat();
  document.getElementById('chatX').onclick=closeChat;
})();
