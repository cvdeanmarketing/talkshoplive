#!/usr/bin/env python3
"""Generates the static pages for the TalkShopLive concept. Run: python3 build.py"""
import pathlib, time
V=int(time.time())  # cache-buster so browsers pick up new styles and scripts
ROOT=pathlib.Path(__file__).parent
T='https://assets.talkshop.live/thumbnail/'

def page(fn,key,title,desc,main):
    (ROOT/fn).write_text(f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<!-- Concept redesign, not the production site. Keep it out of search results. -->
<meta name="robots" content="noindex, nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css?v={V}">
</head>
<body data-page="{key}">
<div id="chrome-top"></div>
{main}
<div id="chrome-bottom"></div>
<script src="assets/site.js?v={V}"></script>
<script src="assets/pages.js?v={V}"></script>
<script src="assets/notes.js?v={V}"></script>
<script src="assets/popups.js?v={V}"></script>
</body>
</html>
''')

def note(n,title,text): return f'<aside class="note"><div><b>{n}</b><strong>{title}</strong><span>{text}</span></div></aside>'
def hero(crumb,h1,p,extra='',cls=''): return f'''<section class="phero {cls}"><div class="wrap">
  <div class="crumb"><a href="index.html">Home</a> / {crumb}</div>
  <h1>{h1}</h1><p>{p}</p>{extra}
</div></section>'''
def facts(*f): return '<div class="facts">'+''.join(f'<span class="fact"><b>{a}</b>{b}</span>' for a,b in f)+'</div>'

TRUST='''<section class="flush"><div class="wrap"><div class="trust reveal">
    <div><span class="sig">Signed, for real</span><h3>Signed by the artist</h3><p>Autographed items are signed by the artist or author who made them.</p></div>
    <div><span class="sig">No surprises</span><h3>Know what's signed</h3><p>Cover, insert or bookplate. Every listing shows exactly what you get.</p></div>
    <div><span class="sig">Up front</span><h3>Shipping before checkout</h3><p>See the cost and the ship date on the product page, preorders included.</p></div>
    <div><span class="sig">Limited</span><h3>Small runs, real scarcity</h3><p>Exclusive colors and signed editions are gone when they're gone.</p></div>
</div></div></section>'''
def signup(h='Never miss a signed drop.',on=('Country','Books')):
    picks=''.join(f'<button type="button" class="pick" aria-pressed="{"true" if g in on else "false"}">{g}</button>' for g in ['Country','Rock','Pop','Holiday','Books','Beauty','Merch'])
    return f'''<section id="alerts" class="flush"><div class="wrap"><form class="signup reveal" data-form>
    <h2>{h}</h2><p>Pick what you love and we'll only send drops that match. Signed editions sell out, so alerts are how collectors get there first.</p>
    <div class="picks">{picks}</div>
    <div class="field"><input type="email" required placeholder="Email address" aria-label="Email address" autocomplete="email"><button class="btn">Send me drops</button></div>
    <div class="ok" role="status"></div>
</form></div></section>'''
TYPES='''<div class="four">
  <div class="tile reveal"><span class="k">Signed drop</span><h3>Meet the maker</h3><p>The artist or author talks through the release and signs copies for fans watching.</p></div>
  <div class="tile reveal"><span class="k">Performance + drop</span><h3>A few songs, too</h3><p>Some artists play live. It's still a drop, so everything on screen can be bought.</p></div>
  <div class="tile reveal"><span class="k">Shop-along</span><h3>Demos from brands</h3><p>Beauty, home and kitchen hosts show how products work while you shop.</p></div>
  <div class="tile dk reveal"><span class="k">Replay</span><h3>Missed it live?</h3><p>Every drop stays watchable and shoppable while copies last.</p></div>
</div>'''
BUNDLE='''<div class="bundle reveal">
    <div>
      <span class="eyebrow" style="color:var(--gold)">Complete the drop</span>
      <h2 style="margin-top:10px">The record's signed. Now build the bundle.</h2>
      <p class="lede">Blackberry Smoke is celebrating 25 years. Pair the signed best-of with the anniversary merch, all from the band's own store.</p>
      <div class="hero-im"><img alt="25 years of Blackberry Smoke live celebration" loading="lazy" src="'''+T+'''7987557b-5710-4fc3-97e9-afcde08379ea.jpg"></div>
    </div>
    <div>
      <div class="adds" id="adds"></div>
      <div class="ship"><p id="bShipTxt"></p><div class="bar"><i id="bShipBar"></i></div></div>
      <div class="total"><div><small style="color:rgba(255,255,255,.6)">Bundle total</small><br><b id="bTotal">$0</b></div><button class="btn btn-red" id="bAdd">Add bundle to cart</button></div>
    </div>
</div>'''
BRANDS='''<div class="beyond">
  <div class="by-card reveal"><div class="th"><img loading="lazy" alt="Fall on the Farm with Jimenez Sisters Ranch" src="'''+T+'''f8028d02-660d-4c0c-bae5-0495e20d0df7.JPG"></div><div class="tx"><h3>Small-batch makers</h3><p>Jimenez Sisters Ranch goes live with seasonal soap and gift sets made on the ranch.</p><a href="https://talkshop.live/channels/jimenezsistersranch" target="_blank" rel="noopener">Visit the channel →</a></div></div>
  <div class="by-card reveal"><div class="th"><img loading="lazy" alt="Make Merry with Walmart" src="'''+T+'''5ce1c116-ae2a-4448-88e0-703479cecca6.jpg"></div><div class="tx"><h3>Brands you know</h3><p>Walmart's Make Merry brings The Pioneer Woman home collection to a live holiday shop-along.</p><a href="https://talkshop.live/channels/walmart" target="_blank" rel="noopener">Visit the channel →</a></div></div>
  <div class="by-card txt reveal"><div class="tx"><h3>Why watch a shop-along?</h3><p>You see the product used before you buy it, and you can ask the host anything in the chat. Same idea as a signed drop, different aisle.</p><a href="how-it-works.html">How live drops work →</a></div></div>
</div>'''
FAQ='''<div class="faq reveal">
  <details open><summary>What is TalkShopLive?</summary><p>TalkShopLive (TSL) is a live shopping platform where musicians, authors and creators host live videos and sell their newest releases, including signed vinyl, CDs, books, merch and exclusive editions, right inside the stream.</p></details>
  <details><summary>What is a live drop? Is it a concert?</summary><p>A live drop is a shoppable live video. Some artists perform, some tell the story behind the release, and all of them take fan questions. Either way, everything on screen can be bought during the drop.</p></details>
  <details><summary>Are the autographs real?</summary><p>Yes. Autographed items are signed by the artist or author, and each listing shows what is signed, such as the cover, an insert or a bookplate.</p></details>
  <details><summary>What if I miss the live?</summary><p>Replays stay on the site and remain shoppable while items are in stock. You can also set a reminder for any upcoming drop.</p></details>
  <details><summary>Do you sell more than music and books?</summary><p>Yes. Alongside signed music and books you'll find artist merch, beauty, home and kitchen, and live shop-alongs from brands and makers.</p></details>
</div>'''

# ---------------- home
home=(ROOT/'partials'/'home.html').read_text()
rep=[('<a class="btn btn-red" href="#drops">See what\'s going live</a>','<a class="btn btn-red pulse" href="live-drops.html"><i></i>See what\'s going live</a>'),
 ('<a class="btn btn-ghost" href="#how">How it works</a>','<a class="btn btn-ghost" href="how-it-works.html">How it works</a>'),
 ('<div class="grid" id="grid"></div>','<div data-shelf data-ids="randy,sheryl,winter,duff,bbs2cd,sour,andy,burnlp"></div>'),
 ('href="https://talkshop.live/category/music" target="_blank" rel="noopener"','href="signed-music.html"'),
 ('href="https://talkshop.live/category/books" target="_blank" rel="noopener"','href="signed-books.html"'),
 ('<a class="cat" href="#bundle"><h3>Artist merch','<a class="cat" href="merch.html"><h3>Artist merch'),
 ('<a class="cat" href="https://talkshop.live/category/beauty" target="_blank" rel="noopener">','<a class="cat" href="beauty.html">'),
 ('<a class="cat" href="#beyond"><h3>Home','<a class="cat" href="beauty.html#brands"><h3>Home'),
 ('<a class="cat" href="#drops"><h3>Replays','<a class="cat" href="live-drops.html#replays"><h3>Replays'),
 ('<button class="chip">Country</button><button class="chip">Rock</button><button class="chip">Pop</button><button class="chip">Metal</button><button class="chip">Blues</button><button class="chip">Holiday</button>','<button class="chip" data-g="country">Country</button><button class="chip" data-g="rock">Rock</button><button class="chip" data-g="pop">Pop</button><button class="chip" data-g="holiday">Holiday</button>'),
 ('<a class="btn btn-line" href="https://talkshop.live/category/autographed" target="_blank" rel="noopener">Shop all signed</a>','<a class="btn btn-line" href="signed-music.html">Shop all signed</a>'),
 ('<a href="https://talkshop.live/category/beauty" target="_blank" rel="noopener">Shop beauty →</a>','<a href="beauty.html">Shop beauty →</a>'),
 ('<a class="btn btn-line" href="https://talkshop.live" target="_blank" rel="noopener">Sell on TalkShopLive</a>','<a class="btn btn-line" href="sell.html">Sell on TalkShopLive</a>'),
 ('Replays stay shoppable after the drop ends.</p>','Replays stay shoppable after the drop ends. <a href="live-drops.html" style="color:var(--red);font-weight:600">See the full schedule →</a></p>'),
 ('<dl class="define reveal">','<div class="vidrow"><div class="reveal"><span class="eyebrow">See it in action</span><h3>This is what a live drop looks like.</h3><p>Artists and authors on camera, fans in the chat, and the signed copy one tap away.</p><a class="btn btn-line" href="live-drops.html">Browse live drops</a></div><div class="vid reveal"><video muted loop playsinline preload="metadata" src="https://assets.talkshop.live/uploads/TSL_SIZZLE_07_2025.mp4" aria-label="TalkShopLive highlights reel"></video><button type="button">🔇 Sound off</button></div></div>\n    <dl class="define reveal">'),
 ('id="picks"','')]
rep.append(('<!-- ================= FAQ ================= -->','''<!-- ================= LINER NOTES ================= -->
<section style="padding-top:0">
  <div class="wrap">
    <div class="sec-head reveal"><div><span class="eyebrow">Liner Notes · the TalkShopLive magazine</span><h2>Stories behind the drops</h2></div><a class="btn btn-line" href="liner-notes.html">Read Liner Notes</a></div>
    <div data-articles data-limit="3"></div>
  </div>
</section>

<!-- ================= FAQ ================= -->'''))
for a,b in rep:
    assert a in home, a[:60]
    home=home.replace(a,b)
HOL='''<!-- ================= HOLIDAY ================= -->
<section style="padding-bottom:0">
  '''+note('★','The holiday sale, prominent without the clip art','The current banner is a stock illustration that links to a plain list. Here the sale sits directly under the hero in its own color, shows four real gifts with prices, and leads to a gift guide organized the way people shop: by who the gift is for and by budget. Measure: banner click-through, sale page conversion, AOV.')+'''
  <div class="wrap"><div class="holiday reveal">
    <div><span class="script">Holiday Sale</span><h2>Signed, sealed, gifted.</h2><p>Autographed records and books make the gift nobody else thought of. Shop by who it's for, or by budget.</p><a class="btn" href="holiday-sale.html">Shop the gift guide</a></div>
    <div class="gifts" data-gifts="duff,ree,foleycd,jsr3"></div>
  </div></div>
</section>

<!-- ================= HOW'''
assert '<!-- ================= HOW' in home
home=home.replace('<!-- ================= HOW',HOL,1)
page('index.html','home','TalkShopLive (TSL) | Shop live with artists and authors. Signed vinyl, books and exclusives','TalkShopLive is live shopping with the artists, authors and creators you love. Watch a live drop, ask a question, and buy the signed vinyl, book or exclusive right inside the video.',home)

# ---------------- live drops
page('live-drops.html','drops','Live drops this week | TalkShopLive','Upcoming live drops and shoppable replays from artists, authors and brands on TalkShopLive.',
'<main>'+hero('Live drops','Live drops','A live drop is a shoppable live video hosted by the person who made the thing. Set a reminder for what is coming up, or watch a replay and shop it now.',
 facts(('Tonight','3 drops going live'),('This week','12 on the schedule'),('Replays','still shoppable')))+'''
<section class="tight">'''+note('1','One schedule, labelled by type','Every card says when, who, what kind of drop and what to do next. Filters split music, books and brand shop-alongs so a Sheryl Crow fan is not scrolling past cookware. Remind me is the main action because each click is a contact tagged by artist.')+'''
  <div class="wrap"><div class="sec-head"><div><span class="eyebrow">On the schedule</span><h2>Coming up</h2></div></div>
  <div data-drops="up" data-filters></div></div>
</section>
<section class="tight band" id="replays"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Missed it live?</span><h2>Replays you can still shop</h2><p class="lede">Most sales happen before and after the live. Replays keep the drop open while copies last.</p></div></div>
  <div data-drops="re"></div>
</div></section>
<section class="tight"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Know what you're watching</span><h2>Four kinds of drop</h2></div><a class="btn btn-line" href="how-it-works.html">How it works</a></div>'''+TYPES+'''
</div></section>'''+signup('Get a nudge before it starts.')+'</main>')

# ---------------- signed music
page('signed-music.html','music','Signed music: autographed vinyl and CDs | TalkShopLive','Autographed vinyl, signed CDs and exclusive color variants, sold live by the artists on TalkShopLive.',
'<main>'+hero('Signed music','Signed music','Autographed vinyl, signed CDs and color variants pressed only for TalkShopLive, sold by the artists themselves.',
 facts(('Signed','by the artist'),('Exclusive','colors and covers'),('From','$13.98')))+'''
<section class="tight">'''+note('1','A category page that explains itself','Paid ads land on category pages cold. This one opens with a one-line promise, then lets fans filter by genre (matching the ad sitelinks) and flip to signed only. Add to cart opens the cart with same-artist add-ons first.')+'''
  <div class="wrap"><div data-shelf data-cat="music" data-filters></div></div>
</section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Hear it from them</span><h2>Music drops going live</h2></div><a class="btn btn-line" href="live-drops.html">Full schedule</a></div>
  <div data-drops="up" data-only="music" data-limit="4"></div>
</div></section>
<section class="tight" style="padding-bottom:0"></section>'''+TRUST+signup('Never miss a signed record.',('Country','Rock'))+'</main>')

# ---------------- signed books
page('signed-books.html','books','Signed books: autographed cookbooks, memoirs and fiction | TalkShopLive','Signed cookbooks, memoirs and bestsellers, sold live by the authors on TalkShopLive.',
'<main>'+hero('Signed books','Signed books','Cookbooks, memoirs and novels signed by the author, launched in live conversations you can join.',
 facts(('30','TSL authors on the NYT list in 2026'),('Signed','by the author'),('From','$20.99')))+'''
<section class="tight">'''+note('1','Books as a growth vertical','Thirty authors who appeared on TalkShopLive made the NYT list in 2026, so books get the same treatment as music: their own page, their own filters and their own drops. Cross-sell here pairs cookbooks with cookbooks and memoirs with the artist\'s records.')+'''
  <div class="wrap"><div data-shelf data-cat="book" data-filters></div></div>
</section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Meet the author</span><h2>Book drops going live</h2></div><a class="btn btn-line" href="live-drops.html">Full schedule</a></div>
  <div data-drops="up" data-only="book" data-limit="4"></div>
</div></section>
<section class="tight" style="padding-bottom:0"></section>'''+TRUST+signup('Never miss a signed book.',('Books',))+'</main>')

# ---------------- merch
page('merch.html','merch','Artist merch | TalkShopLive','Official artist merch on TalkShopLive: tees, hats and gifts to pair with your signed record.',
'<main>'+hero('Merch','Artist merch','Tees, hats and gifts from the artists you collect. Add them to a signed record and it all ships together.',
 facts(('Official','from the artist store'),('Pairs with','your signed record')))+'''
<section class="tight">'''+note('1','Merch gets a front door','Merch exists on the site today but only turns up in search, filed under Music or Clothing. Blackberry Smoke is the only artist on this page because theirs is the only merch I could find listed. That is the opportunity: every drop could carry two or three add-ons, and the bundle builder below shows what it does to basket size.')+'''
  <div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">Featured store</span><h2>Blackberry Smoke: 25th anniversary</h2></div></div>
    <div data-shelf data-cat="merch" data-filters></div>
  </div>
</section>
<section class="flush" id="bundle"><div class="wrap">'''+BUNDLE+'''</div></section>
<section class="flush"><div class="wrap"><div class="two">
  <div class="tile reveal"><span class="k">In the cart</span><h3>Add-ons that make sense</h3><p>Add a signed record and the cart shows that artist's merch first, then similar releases. No generic bestsellers.</p></div>
  <div class="tile dk reveal"><span class="k">For artists</span><h3>Bring merch to your next drop</h3><p>A hat next to the signed CD is the easiest way to lift a $30 basket. List add-ons when you schedule a drop.</p><a class="btn btn-red btn-sm" style="margin-top:16px" href="sell.html">Seller sign up</a></div>
</div></div></section></main>''')

# ---------------- beauty
page('beauty.html','beauty','Beauty and brand shop-alongs | TalkShopLive','Skincare, makeup, fragrance and home shop-alongs, demoed live on TalkShopLive.',
'<main>'+hero('Beauty & more','Beauty, home and brand shop-alongs','Hosts and makers demo their favorites live, and you shop along as they go. Same idea as a signed drop, different aisle.',
 facts(('Live','demos you can ask questions in'),('From','$12.99')))+'''
<section class="tight">'''+note('1','Beauty gets a home of its own','Beauty and brand partners are real revenue, but mixed into the same rail as signed records they blur what TalkShopLive is. Here they have their own page, their own word (shop-along) and their own filters. Cart suggestions stay inside the category: soap with soap, not soap with Garth Brooks.')+'''
  <div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">This week</span><h2>Shop-alongs going live</h2></div><a class="btn btn-line" href="live-drops.html">Full schedule</a></div>
    <div data-drops="up" data-only="beauty"></div>
  </div>
</section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Shop beauty</span><h2>Skin, makeup, fragrance and bath</h2></div></div>
  <div data-shelf data-cat="beauty" data-filters></div>
</div></section>
<section class="tight" id="brands"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Home &amp; kitchen</span><h2>Makers and brands</h2></div></div>'''+BRANDS+'''
</div></section>'''+signup('Never miss a shop-along.',('Beauty',))+'</main>')


def rev(stars, title, body, who, item):
    return f'''<article class="rev reveal"><span class="sampletag">Sample</span><div class="stars" aria-label="{stars} out of 5 stars">{'★'*stars}<i>{'★'*(5-stars)}</i></div><h3>{title}</h3><p>{body}</p><footer><b>{who}</b><span>Verified buyer · {item}</span></footer></article>'''
REVIEWS = '''<section class="tight band" id="trust">''' + note('2', 'Trust is the product, and there are no reviews anywhere', 'Collectors say trust is everything with signed goods, yet the site shows no reviews, and the TalkShopLive page on Trustpilot is unclaimed with zero reviews. This section answers "is it real?" in four steps, then shows buyer reviews. The review cards are labelled samples: I have not invented real customer quotes. To fill them, send a review request seven days after delivery through HubSpot and show the results here and on every product page. The wording stays within what can be verified: it does not promise how items are signed beyond "by the artist", and it does not promise returns, because a collector forum quotes TalkShopLive as not accepting returns based on signature quality. A clear, published authenticity and returns policy would let this section say more.') + '''
<div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Is it really signed?</span><h2>The autograph is the whole point.<br>Here is how you know it is real.</h2></div></div>
  <div class="four">
    <div class="tile reveal"><span class="k">1. They sign it</span><h3>Signed by the artist</h3><p>The artist or author signs the copies for their own drop.</p></div>
    <div class="tile reveal"><span class="k">2. You see them</span><h3>Live, on camera</h3><p>The person who signed it hosts the drop. Ask them about it in the chat while you shop.</p></div>
    <div class="tile reveal"><span class="k">3. No surprises</span><h3>The listing says where</h3><p>Cover, insert or bookplate. You know exactly what is signed before you buy.</p></div>
    <div class="tile dk reveal"><span class="k">4. We're here</span><h3>Questions about your order?</h3><p>Our support team is here to help, before you buy and after it arrives.</p><a class="btn btn-red btn-sm" style="margin-top:16px" href="https://support.talkshop.live/hc/en-us/requests/new" target="_blank" rel="noopener">Contact us</a></div>
  </div>
  <div class="revhead reveal">
    <div><span class="eyebrow">From fans who bought</span><h2>What buyers say</h2></div>
    <div class="score"><b>4.8</b><div><div class="stars">★★★★★</div><span>Sample score · reviews from verified buyers only</span></div></div>
  </div>
  <div class="revs">''' + rev(5, 'Signed right on the cover', 'Watched the drop, ordered during it, and the signature is on the jacket exactly as the listing said. Framing this one.', 'Jamie R.', 'Signed LP') + rev(5, 'Cheaper than I expected', 'A signed record for about the price of a regular one. I asked a question in the chat and got an answer, which made it feel real.', 'Marcus T.', 'Signed CD') + rev(4, 'Clear about what was signed', 'Mine came with a signed insert, not a signed cover, and the page told me that up front. Shipping took a while because it was a preorder.', 'Priya S.', 'Signed LP, preorder') + rev(5, 'The perfect gift', 'Bought the signed cookbook for my mom after watching the replay. She did not believe it was really signed until she saw the author hold it up.', 'Dana K.', 'Signed book') + '''</div>
  <p class="src">Sample reviews shown to illustrate the layout. Real reviews would come from verified buyers after delivery.</p>
  <div class="creds reveal"><div><b>Inc. 5000</b><span>2025 · #721 overall, #16 in Retail</span></div><div><b>EY</b><span>Entrepreneur of the Year, Southeast region</span></div><div><b>30</b><span>TalkShopLive authors on the NYT bestseller list in 2026</span></div><a href="https://www.g2.com/products/talkshoplive/reviews" target="_blank" rel="noopener"><b>5/5 on G2 ↗</b><span>Rated by sellers who use TalkShopLive (6 reviews)</span></a></div>
</div></section>'''

# ---------------- how it works
page('how-it-works.html','how','How TalkShopLive works | Live drops explained','How live drops work on TalkShopLive: watch the artist live, shop inside the video, and get it signed.',
'<main>'+hero('How it works','Part record store signing, part front row.','TalkShopLive is where musicians and authors go live to launch what they just made. You watch, ask questions, and buy the signed copy right inside the video.',
 '<div class="cta"><a class="btn btn-red" href="live-drops.html">See what\'s going live</a><a class="btn btn-ghost" href="signed-music.html">Shop signed music</a></div>')+'''
<section class="tight">'''+note('1','The page the brand never had','There is no plain explanation of TalkShopLive anywhere on the current site, and the welcome email pitches selling rather than shopping. This page is the single definition that ads, bios, emails and search results can all point to.')+'''
  <div class="wrap">
    <div class="how">
      <div class="step reveal"><b>01</b><h3>Watch the drop</h3><p>An artist or author goes live to share something new. Some talk, some play a few songs, all of them answer fans in the chat.</p></div>
      <div class="step reveal"><b>02</b><h3>Shop inside the video</h3><p>Everything they hold up is one tap away. Add the signed copy, the exclusive color, or the merch without leaving the stream.</p></div>
      <div class="step reveal"><b>03</b><h3>Get it signed</h3><p>Autographed and limited editions ship to your door. Missed it live? The replay stays shoppable while copies last.</p></div>
    </div>
    <dl class="define reveal"><dt><small>What's a</small>Live drop?</dt><dd>A live, shoppable video hosted by the person who made the thing. It can be a conversation, a performance or a demo. You can always buy what's on screen, during the drop or from the replay.</dd></dl>
  </div>
</section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Know what you're watching</span><h2>Four kinds of drop</h2></div></div>'''+TYPES+'''
</div></section>
<section class="tight"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">About the autographs</span><h2>What "signed" means here</h2></div></div>
  <div class="two">
    <div class="tile reveal"><span class="k">Signed cover</span><h3>On the item itself</h3><p>The artist signs the album jacket, CD booklet or the book's title page.</p></div>
    <div class="tile reveal"><span class="k">Signed insert</span><h3>On a card or bookplate</h3><p>The artist signs an art card, insert or bookplate that ships with the item. Listings say which one you're getting.</p></div>
  </div>
</div></section>'''+REVIEWS+'''
<section class="tight"><div class="wrap">
  <div class="sec-head" style="justify-content:center;text-align:center"><div><span class="eyebrow">Good to know</span><h2>Questions fans ask</h2></div></div>'''+FAQ+'''
</div></section>'''+signup()+'</main>')

# ---------------- holiday sale
def aisle(id,eyebrow,h,ids,lede=''):
    return f'''<div class="aisle" id="{id}"><div class="sec-head"><div><span class="eyebrow">{eyebrow}</span><h2>{h}</h2>{f'<p class="lede">{lede}</p>' if lede else ''}</div></div><div data-shelf data-ids="{ids}"></div></div>'''
page('holiday-sale.html','holiday','Holiday Sale: signed music and books to gift | TalkShopLive','The TalkShopLive holiday gift guide: signed records, signed books, artist merch and gifts under $20.',
'<main>'+hero('Holiday sale','Signed, sealed, gifted.','Autographed records and books are the gift nobody else thought of. Pick who it\'s for, or pick a budget.',
 '''<div class="jump"><a href="#records">Holiday records</a><a href="#readers">For readers &amp; cooks</a><a href="#deals">Marked down</a><a href="#under20">Under $20</a><a href="#fans">For the superfan</a><a href="#selfcare">Self-care sets</a></div>''','pine').replace('<h1>','<span class="script">Holiday Sale</span><h1>',1)+'''
<section class="tight">'''+note('1','A gift guide, not a product list','The sale banner currently opens a flat grid that reads like a spreadsheet. Shoppers buying gifts think in recipients and budgets, so the page is organized that way, with jump links at the top. Marked-down items only appear where the live site shows a real sale price; I have not invented discounts or shipping deadlines.')+'''
  <div class="wrap">
'''+aisle('records','For the music lover','Holiday records, some signed','cbzoe,winter,duff,foleylp,witt,cbfoil,foleycd','New holiday albums and anniversary pressings, with autographed editions while they last.')
+aisle('readers','For readers and cooks','Signed books to unwrap','ree,sour,blais,calvo,elin,andy,dgbook,dmc')
+aisle('deals','Marked down now','On sale','garthanth,tmi,billy,lancer1,lancer2,jsr4,palette','Real markdowns as listed today.')
+aisle('under20','Stocking stuffers','Gifts under $20','vv3,sherylcd,garth,foleycd,randy,extremecd,jsr3,burncd')
+aisle('fans','For the superfan','Signed record plus the merch','bbs2cd,bbshat,bbstee,bbsbadge,bbssweater,bbs3lp','Add the hat to the signed CD and it ships together.')
+aisle('selfcare','For a quiet night in','Self-care sets','jsr1,jsr2,biodance,frag4')+'''
  </div>
</section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Shop it live</span><h2>Holiday drops going live</h2><p class="lede">Watch the artist, ask a question, and gift the signed copy.</p></div><a class="btn btn-line" href="live-drops.html">Full schedule</a></div>
  <div data-drops="up" data-idx="1,2,3,9"></div>
</div></section>'''+signup('Get the next holiday drop first.',('Holiday',))+'</main>')

# ---------------- customer sign in
page('sign-in.html','signin','Sign in | TalkShopLive','Sign in to your TalkShopLive account to follow artists, manage reminders and track signed orders.',
'''<main class="auth">
  <div class="side"><span class="pill">For fans and shoppers</span><h1>Welcome back.</h1>
    <ul><li>Follow artists and authors so their drops reach you first</li><li>Manage reminders and choose email or text</li><li>Track signed orders and preorders in one place</li></ul>
  </div>
  <div class="main"><form class="formcard" data-login="fan" data-next="account.html">
    <h2>Sign in</h2><p>New here? Signing in with a new email creates your fan account.</p>
    <label class="lbl" for="em">Email</label><input class="inp" id="em" type="email" value="demo.fan@example.com" required autocomplete="off">
    <label class="lbl" for="pw">Password</label><input class="inp" id="pw" type="password" value="demo-login" required autocomplete="off">
    <button class="btn btn-red">Sign in</button>
    <div class="demo"><b>Demo login is filled in.</b> Press Sign in to walk through the fan account. Nothing is sent anywhere; this page does not create or check real accounts.</div>
    <p class="alt">Artist, author or brand? <a href="sell.html">Seller sign up</a></p>
  </form></div>
</main>''')

# ---------------- fan account
def follow(name,img,meta,f='true',n='false'):
    return f'''<div class="rowi"><img alt="" src="{T}{img}"><div><strong>{name}</strong><small>{meta}</small></div><div class="sw" data-switch><button aria-pressed="{f}">Following</button><button class="n" aria-pressed="{n}">🔔 Notify me</button></div></div>'''
page('account.html','account','My account | TalkShopLive','Your TalkShopLive account: following, reminders, orders and alert settings.',
'''<main>'''+hero('My account','Hi, Demo Fan.','This is what a signed-in fan sees: who they follow, what is coming up, their orders, and control over every alert.','<div class="cta"><button class="btn btn-ghost" data-signout>Sign out of demo</button></div>')+'''
<section class="tight">'''+note('1','Follow and Notify are different promises','Today the only option on an artist page is Notify me, and the account has no following list or alert settings, so a fan who gets one alert too many can only unsubscribe from everything. Splitting quiet Follow from opt-in Notify, with per-artist toggles and a pause, protects the contact list. Each toggle maps to a HubSpot subscription type.')+'''
<div class="wrap dash">
  <nav class="side-nav" aria-label="Account"><a class="on" href="#following">Following</a><a href="#reminders">Reminders</a><a href="#orders">Orders</a><a href="#alerts">Alert settings</a><a href="#foryou">For you</a><button data-signout>Sign out</button></nav>
  <div>
    <div class="panel" id="following"><h2>Following</h2><p>Following shapes what you see. Notify me sends an alert when that artist goes live.</p>
      '''+follow('Debbie Gibson','64b402d2-0e06-4386-9331-1479f0f5f646.png','Goes live Thu Nov 19 · 8:30 PM','true','true')+follow('Blackberry Smoke','7987557b-5710-4fc3-97e9-afcde08379ea.jpg','Replay available · new merch')+follow('Randy Travis','21289aa3-d3da-4e8d-96ae-a2ccb66fcefd.png','Goes live Wed Dec 9 · 7:00 PM','true','true')+follow('Sheryl Crow','c3276338-985b-4e39-ba22-00fd20f9741a.jpg','Replay available')+'''
    </div>
    <div class="panel" id="reminders"><h2>Your reminders</h2><p>We'll send one message an hour before each drop, and the replay afterwards if you miss it.</p>
      <div data-drops="up" data-idx="3,10" data-rail></div>
    </div>
    <div class="panel" id="orders"><h2>Orders <span class="sample">Sample data</span></h2><p>Signed items and preorders, with what is signed and when it ships.</p>
      <div class="rowi" data-order="sheryl"></div><div class="rowi" data-order="sour"></div>
    </div>
    <div class="panel" id="alerts"><h2>Alert settings</h2><p>Choose how you hear from us. Turn down the volume without losing your artists.</p>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Live drop reminders</strong><small>When an artist you've turned Notify on for is about to go live</small></div><div class="sw" data-switch><button aria-pressed="true">Email</button><button aria-pressed="true">Text</button></div></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>New signed arrivals</strong><small>Weekly, only for the genres you pick</small></div><div class="sw" data-switch><button aria-pressed="true">Email</button><button aria-pressed="false">Text</button></div></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Back in stock</strong><small>For items you tried to buy that sold out</small></div><div class="sw" data-switch><button aria-pressed="true">Email</button><button aria-pressed="false">Text</button></div></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Need a break?</strong><small>Pause everything for 30 days. Your follows stay put.</small></div><div class="sw" data-switch><button aria-pressed="false">Pause alerts</button></div></div>
    </div>
    <div class="panel" id="foryou"><h2>Picked for you</h2><p>Based on the artists you follow.</p><div data-shelf data-ids="dgbook,bbshat,garth,dgbody"></div></div>
  </div>
</div></section></main>''')

# ---------------- seller sign up
page('sell.html','sell','Sell on TalkShopLive | Seller sign up','Artists, authors and brands: go live on TalkShopLive and sell signed releases, merch and exclusives directly to fans.',
'<main>'+hero('Seller sign up','Go live. Sell straight to your fans.','For artists, authors, labels, publishers and brands. Host a live drop, sell signed and exclusive editions inside the video, and keep selling from the replay.',
 facts(('30','TSL authors made the NYT list in 2026'),('2x','audience growth in 2024'),('25%','sales lift from shoppable simulcasts'))+'<p style="font-size:12.5px;margin-top:14px;color:rgba(255,255,255,.5)">Company-reported figures. Sources: Modern Retail, January 2025; Distill Intelligence, 2026.</p><div class="cta"><a class="btn btn-red" href="#apply">Start seller sign up</a></div>')+'''
<section class="tight">'''+note('1','Split fans from sellers','Today "buy and sell almost anything" speaks to both audiences at once, and the fan welcome email pitches opening a channel. Sellers get this page and their own sign-up; everything else on the site speaks to fans. The header labels the button Seller sign up so a fan never lands in the wrong flow.')+'''
  <div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">How selling works</span><h2>Three steps to your first drop</h2></div></div>
    <div class="how">
      <div class="step reveal"><b>01</b><h3>Set up your channel</h3><p>Tell us who you are and what you make. Add your products, including signed and exclusive editions.</p></div>
      <div class="step reveal"><b>02</b><h3>Schedule a drop</h3><p>Pick a date and a format. Fans set reminders, and we send them back to you an hour before.</p></div>
      <div class="step reveal"><b>03</b><h3>Go live and keep selling</h3><p>Sell inside the video, add merch in the cart, and let the replay keep working after you sign off.</p></div>
    </div>
  </div>
</section>
<section class="tight band" id="apply"><div class="wrap" style="max-width:720px">
  <form id="wizard" class="formcard" style="max-width:none">
    <ol class="steps"><li>About you</li><li>What you sell</li><li>Your first drop</li></ol>
    <div class="pane"><h2>Create your seller account</h2><p>Step 1 of 3</p>
      <label class="lbl" for="s1">Your name</label><input class="inp" id="s1" value="Demo Seller" required>
      <label class="lbl" for="s2">Work email</label><input class="inp" id="s2" type="email" value="demo.seller@example.com" required autocomplete="off">
      <label class="lbl" for="s3">Password</label><input class="inp" id="s3" type="password" value="demo-login" required autocomplete="off">
      <button class="btn btn-red">Continue</button>
      <div class="demo"><b>Demo details are filled in.</b> Click through all three steps to see the seller dashboard. Nothing is sent anywhere; this does not create a real account.</div>
    </div>
    <div class="pane" hidden><h2>What do you sell?</h2><p>Step 2 of 3</p>
      <label class="lbl">Category</label>
      <div class="opts"><button type="button" aria-pressed="true">Music<small>Vinyl, CDs, box sets</small></button><button type="button" aria-pressed="false">Books<small>Signed editions, preorders</small></button><button type="button" aria-pressed="false">Beauty<small>Skin, makeup, fragrance</small></button><button type="button" aria-pressed="false">Home &amp; brand<small>Kitchen, decor, gifts</small></button></div>
      <label class="lbl" for="s4">Channel name</label><input class="inp" id="s4" value="Demo Records" required>
      <label class="lbl" for="s5">Website or social link</label><input class="inp" id="s5" value="https://example.com">
      <div class="btnrow"><button type="button" class="btn btn-line" data-back>Back</button><button class="btn btn-red" style="flex:1">Continue</button></div>
    </div>
    <div class="pane" hidden><h2>Plan your first drop</h2><p>Step 3 of 3</p>
      <label class="lbl">Format</label>
      <div class="opts"><button type="button" aria-pressed="true">Signed drop<small>Talk, take questions, sign</small></button><button type="button" aria-pressed="false">Performance + drop<small>Play a few songs</small></button></div>
      <label class="lbl" for="s6">Target date</label><input class="inp" id="s6" type="date" value="2026-12-10">
      <label class="lbl">Add-ons in the cart</label>
      <div class="opts"><button type="button" aria-pressed="true">Yes, offer merch add-ons<small>Hat, tee or bundle next to the signed item</small></button><button type="button" aria-pressed="false">Not yet<small>Signed item only</small></button></div>
      <div class="btnrow"><button type="button" class="btn btn-line" data-back>Back</button><button class="btn btn-red" style="flex:1">Create seller account</button></div>
    </div>
    <p class="alt">Here to shop? <a href="sign-in.html">Fan sign in</a></p>
  </form>
</div></section></main>''')

# ---------------- seller dashboard
def task(t,d,done): return f'''<div class="rowi" style="grid-template-columns:1fr auto"><div><strong>{t}</strong><small>{d}</small></div><span class="pillst {'' if done else 'wait'}">{'Done' if done else 'To do'}</span></div>'''
page('seller-dashboard.html','seller','Seller dashboard | TalkShopLive','The TalkShopLive seller dashboard: schedule drops, manage products and add-ons, and see your audience.',
'<main>'+hero('Seller dashboard','Welcome, Demo Records.','This is what a new seller sees after sign-up: a checklist to the first drop, the products and add-ons for it, and the audience building up before going live.','<div class="cta"><button class="btn btn-ghost" data-signout>Sign out of demo</button></div>')+'''
<section class="tight">'''+note('1','Onboarding that points at the first drop','A new seller\'s only job is to get to a first live drop with something signed and at least one add-on. The dashboard leads with that checklist, shows reminders collecting before the show, and treats add-ons as a standard part of setup. All numbers here are sample data.')+'''
<div class="wrap dash">
  <nav class="side-nav" aria-label="Seller"><a class="on" href="#start">Get started</a><a href="#drop">Next drop</a><a href="#products">Products &amp; add-ons</a><a href="#audience">Audience</a><button data-signout>Sign out</button></nav>
  <div>
    <div class="kpis"><div class="kpi"><b>22 days</b><span>until your first drop</span></div><div class="kpi"><b>184</b><span>reminders set <span class="sample">Sample</span></span></div><div class="kpi"><b>3</b><span>products listed</span></div><div class="kpi"><b>1</b><span>add-on attached</span></div></div>
    <div class="panel" id="start"><h2>Get ready for your first drop</h2><p>Four of six steps done.</p>
      '''+task('Create your channel','Demo Records · Music',True)+task('Add your first product','Signed LP, limited to 500',True)+task('Schedule your drop','Thu Dec 10 · 7:00 PM ET',True)+task('Attach an add-on','Tour hat suggested next to the signed LP',True)+task('Say what is signed','Cover, insert or bookplate, shown on the listing',False)+task('Share your drop link','Post it so fans can set a reminder',False)+'''
    </div>
    <div class="panel" id="drop"><h2>Next drop</h2><p>Fans who set a reminder get a message one hour before, and the replay if they miss it.</p>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Demo Records: signed LP launch</strong><small>Thu Dec 10 · 7:00 PM ET · Signed drop</small></div><a class="btn btn-line btn-sm" href="live-drops.html">Preview listing</a></div>
    </div>
    <div class="panel" id="products"><h2>Products &amp; add-ons <span class="sample">Sample data</span></h2><p>What fans see in the video and in the cart. Add-ons appear under "More from Demo Records".</p>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Debut LP, Signed</strong><small>$32.00 · Signed cover · 500 available</small></div><span class="pillst">Main item</span></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Debut CD, Signed</strong><small>$16.00 · Signed insert</small></div><span class="pillst">Main item</span></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Tour Hat</strong><small>$28.00 · Shown in cart next to the LP</small></div><span class="pillst wait">Add-on</span></div>
      <button class="btn btn-line btn-sm" style="margin-top:16px" type="button">+ Add a product or add-on</button>
    </div>
    <div class="panel" id="audience"><h2>Audience <span class="sample">Sample data</span></h2><p>Fans you can reach before the next drop.</p>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Followers</strong><small>See your drops in their feed</small></div><b>412</b></div>
      <div class="rowi" style="grid-template-columns:1fr auto"><div><strong>Notify me</strong><small>Asked for an alert when you go live</small></div><b>184</b></div>
    </div>
  </div>
</div></section></main>''')
print('built')
