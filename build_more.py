#!/usr/bin/env python3
"""Second half of the page build: seller (About) pages and the product, artist and watch templates.
Run this one: it runs build.py first.  python3 build_more.py"""
from build import page, note, hero, facts, signup, TRUST

A = 'https://assets.talkshop.live/'
LOGOS = ['walmart', 'microsoft', 'conde-nast', 'dotdash-meredith', 'hearst', 'vogue', 'cosmopolitan', 'people', 'best-buy']


def vid(src, label=''):
    return f'''<div class="vid reveal"><video muted loop playsinline preload="metadata" src="{A}{src}" aria-label="{label}"></video><button type="button">🔇 Sound off</button></div>'''


def tabs(cur):
    items = [('platform', 'The platform'), ('capabilities', 'Capabilities'), ('creators', 'For creators'), ('small-business', 'For small businesses'), ('pricing', 'Pricing')]
    return '<div class="stabs"><div class="wrap"><span>Sell on TSL</span>' + ''.join(
        f'<a href="{k}.html" {"aria-current=page" if k == cur else ""}>{v}</a>' for k, v in items) + '<a class="btn btn-red btn-sm" href="sell.html">Seller sign up</a></div></div>'


LOGOSTRIP = '<section class="logos"><div class="wrap"><span>Powering top brands and retailers</span><div>' + ''.join(
    f'<img loading="lazy" alt="{l.replace("-", " ").title()}" src="{A}images/{l}-brand-logo.svg">' for l in LOGOS) + '</div></div></section>'


def stats(*s):
    return '<div class="stats reveal">' + ''.join(f'<div><b>{a}</b><strong>{b}</strong><span>{c}</span></div>' for a, b, c in s) + '</div><p class="src">Figures as published by TalkShopLive on its seller pages.</p>'


def tiles(items, cols='four'):
    return f'<div class="{cols}">' + ''.join(f'<div class="tile reveal"><span class="k">{k}</span><h3>{h}</h3><p>{p}</p></div>' for k, h, p in items) + '</div>'


def row(eyebrow, h, p, media, flip=False, extra=''):
    return f'''<div class="frow {'flip' if flip else ''}"><div class="reveal"><span class="eyebrow">{eyebrow}</span><h2>{h}</h2><p class="lede">{p}</p>{extra}</div>{media}</div>'''


CTA = '''<section class="tight"><div class="wrap"><div class="signup reveal" style="background:var(--ink)">
  <h2>Ready to go live?</h2><p>It's free to list and stream. You pay only when you sell.</p>
  <a class="g2" href="https://www.g2.com/products/talkshoplive/reviews" target="_blank" rel="noopener"><span class="stars">★★★★★</span> Rated 5/5 by sellers on G2 (6 reviews) ↗</a>
  <div class="cta" style="display:flex;gap:12px;justify-content:center;margin-top:26px;flex-wrap:wrap"><a class="btn btn-red pulse" href="sell.html">Seller sign up</a><a class="btn btn-ghost" href="pricing.html">See pricing</a></div>
</div></div></section>'''

MEET = tiles([
    ('No outbound clicks', 'They buy where they watch', 'Your show is a point of sale wherever it plays, so fans never get routed away.'),
    ('No download', 'Nothing for fans to install', 'No app and no account needed to watch or buy.'),
    ('Real-time', 'Chat and sales, live', 'Answer questions as they come in and watch orders land while you are on air.'),
    ('Embed anywhere', 'One show, every surface', 'Your site, publisher sites, blogs and social profiles, all shoppable.')])
OWN = tiles([
    ('Customer data', 'Your buyers are yours', 'See who bought and reach them again. Access to buyer data is built in.'),
    ('Notifications', 'Followers hear first', 'Your audience is notified every time you go live, with no pay-to-reach.'),
    ('Collaborations', 'Sell together', 'Team up with other brands and still get buyer data on anything sold through your content.')], 'three')

# ---------------- platform (was: Features)
page('platform.html', 'sellpage', 'The TalkShopLive platform | Live selling for artists, authors and brands',
     'How selling on TalkShopLive works: go live from anywhere, sell inside the video, simulcast to social and embed your show on any site.',
     '<main>' + tabs('platform') + f'''
<section class="phero"><div class="wrap split">
  <div><div class="crumb"><a href="index.html">Home</a> / Sell on TSL</div>
    <h1>The live selling platform behind the drops.</h1>
    <p>Go live, sell inside the video, and keep selling from the replay. Your show is shoppable on TalkShopLive, on social, and anywhere you embed it.</p>
    <div class="cta"><a class="btn btn-red" href="sell.html">Seller sign up</a><a class="btn btn-ghost" href="pricing.html">See pricing</a></div></div>
  {vid('uploads/TSL_SIZZLE_07_2025.mp4', 'TalkShopLive highlights reel')}
</div></section>''' + LOGOSTRIP + '''
<section class="tight">''' + note('1', 'About becomes Sell on TSL', 'The current About menu sits beside the logo, where it reads like company information and is easy to miss, yet all five pages under it are for sellers. Renaming it Sell on TSL, moving it to the right of the category row, and giving the pages their own tab bar tells fans to ignore it and sellers exactly where to go. The videos stay; they are the best thing on these pages.') + '''
  <div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">How it works</span><h2>Four things you can do on day one</h2></div></div>''' + tiles([
         ('01', 'Go live from anywhere', 'Start in minutes from the TalkShopLive Studio app, a desktop browser or your broadcast software.'),
         ('02', 'Chat with your audience', 'Show the product, answer questions, and let the conversation do the selling.'),
         ('03', 'Sell without interrupting', 'Viewers buy during and after the show. Checkout never pulls them out of the video.'),
         ('04', 'Bring guests', 'Invite co-hosts onto the stream from any device, wherever they are.')]) + '''
  </div>
</section>
<section class="tight band"><div class="wrap frows">''' +
     row('See it', 'How a TalkShopLive show comes together', 'Promote before you go live with a shoppable, shareable video. When the show ends, the same video keeps selling.', vid('features/how-tsl-works.mov', 'How TalkShopLive works')) +
     row('Embed', 'Shoppable anywhere it plays', "TalkShopLive's patented player means one show can run on TalkShopLive, your own site, partner sites and social at the same time, and sell on all of them.", vid('features/embeddable-shoppable-anywhere.mp4', 'Embeddable and shoppable anywhere'), True) +
     row('Simulcast', 'Facebook, Instagram and YouTube at once', 'Connect your accounts and your stream becomes shoppable on social. Viewers comment SHOP and get a direct message with links to buy without leaving the app.', vid('features/social-media.mp4', 'Selling on social media')) +
     row('TSL Shoppettes™', 'Your Reels, made shoppable', 'Turn pre-show teasers and clips from your shows into shoppable vertical videos for Instagram and Facebook, to sell before and after the live.', vid('features/tsl-shoppettes-2025.mp4', 'TSL Shoppettes'), True) + '''
</div></section>
<section class="tight"><div class="wrap">''' + stats(('10–14%', 'Viewer to purchase', 'Site-wide conversion average'), ('30%+', 'Cart to purchase', 'Within content, no extra campaigns'), ('20–30%', 'More engagement', 'Comments and questions vs. traditional social')) + '''</div></section>''' + CTA + '</main>')

# ---------------- capabilities
page('capabilities.html', 'sellpage', 'Capabilities | Sell on TalkShopLive', 'Everything included when you sell on TalkShopLive: unlimited shows, simulcast, embeds, guests, fundraisers, integrations and more.',
     '<main>' + tabs('capabilities') + hero('<a href="platform.html">Sell on TSL</a> / Capabilities', 'Everything you need to sell live.', 'One channel, unlimited shows, and the tools to reach fans wherever they already are.',
                                            '<div class="cta"><a class="btn btn-red" href="sell.html">Seller sign up</a></div>') + '''
<section class="tight">''' + note('1', 'Same content, easier to scan', 'The live Capabilities page is a long single column. The twelve capabilities are unchanged here, grouped into three jobs a seller actually has: go live, reach people, and run the business.') + '''
<div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Go live</span><h2>Your channel, your shows</h2></div></div>''' + tiles([
         ('Free', 'Free to list and stream', 'You get your own channel to broadcast, share shows and build an audience.'),
         ('Unlimited', 'As many shows as you like', 'Build an audience over time with regular shows, special offers and exclusives.'),
         ('Guests', 'Multiple participants', 'Invite others to join from any device and any location.'),
         ('Pro tools', 'Broadcast software', 'Use OBS Studio, vMix, Restream, Wirecast and more for a produced show.')]) + '''
  <div class="sec-head" style="margin-top:56px"><div><span class="eyebrow">Reach people</span><h2>Be shoppable everywhere</h2></div></div>''' + tiles([
         ('Simulcast', 'Shoppable on social', 'Stream to Facebook, Instagram and YouTube at once, with buying built in.'),
         ('Embed', 'Sell from any page', 'Your show is a point of sale wherever it is shared, even after it ends.'),
         ('Audience', 'Own your followers', 'Followers are notified each time you go live, and you can reach customers any time.'),
         ('Influencers', 'Let others sell for you', 'Other sellers can feature your product, with payout and fulfillment through your account.')]) + '''
  <div class="sec-head" style="margin-top:56px"><div><span class="eyebrow">Run the business</span><h2>Commerce, handled</h2></div></div>''' + tiles([
         ('Checkout', 'Frictionless buying', 'No app or account needed to buy. Buyers never leave your video.'),
         ('Integrations', 'Shopify and more', 'Sync products, customers and orders with third-party apps and integrations.'),
         ('Giving', 'Fundraisers', 'Add a charity to a show, or run fundraiser-only shows.'),
         ('Licensed', 'Alcohol sales', 'Verified licensed sellers can sell alcoholic beverages within the United States.')]) + '''
</div></section>''' + CTA + '</main>')

# ---------------- creators
page('creators.html', 'sellpage', 'For creators and influencers | Sell on TalkShopLive', 'TalkShopLive for creators and influencers: sell live to your audience, keep your buyer data, and reach followers without paying to be seen.',
     '<main>' + tabs('creators') + hero('<a href="platform.html">Sell on TSL</a> / For creators', 'Your audience. Your sales. Your data.', 'For artists, authors, creators and influencers. Sell live to the people who already follow you, and keep the relationship afterwards.',
                                        '<div class="cta"><a class="btn btn-red" href="sell.html">Seller sign up</a><a class="btn btn-ghost" href="platform.html">Watch how it works</a></div>') + LOGOSTRIP + '''
<section class="tight">''' + note('1', 'Lead with what creators care about', 'The live page opens with a paragraph about ecommerce strategy. Creators want to know three things: can I reach my fans, do I keep the data, and what does it cost. Those now lead. The live page quotes a flat 10% fee while the Pricing page says 10.25% + 30¢, so this page links to Pricing instead of repeating a number.') + '''
<div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Built with transparency</span><h2>The audience stays yours</h2></div></div>''' + OWN + '''
</div></section>
<section class="tight band"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Meet fans where they are</span><h2>One show, everywhere</h2></div></div>''' + MEET + '''
</div></section>
<section class="tight"><div class="wrap">''' + stats(('10–14%', 'Viewer to purchase', 'Site-wide conversion average'), ('30%+', 'Cart to purchase', 'Within content, no extra campaigns'), ('20–30%', 'More engagement', 'Comments and questions vs. traditional social')) + '''
  <div class="two" style="margin-top:28px">
    <div class="tile reveal"><span class="k">No fee to start</span><h3>Free to sign up and stream</h3><p>Creating a channel takes three steps. Payments, product management and shipping labels are included.</p><a class="btn btn-line btn-sm" style="margin-top:16px" href="pricing.html">See pricing</a></div>
    <div class="tile dk reveal"><span class="k">Add-ons</span><h3>Sell more than the record</h3><p>List merch alongside the signed item and it appears in the fan's cart as an add-on from you.</p><a class="btn btn-red btn-sm" style="margin-top:16px" href="merch.html">See how it looks</a></div>
  </div>
</div></section>''' + CTA + '</main>')

# ---------------- small business
page('small-business.html', 'sellpage', 'For small businesses | Sell on TalkShopLive', 'TalkShopLive for small businesses: sell live from any device with no app for customers, no setup fees and full commerce tools.',
     '<main>' + tabs('small-business') + hero('<a href="platform.html">Sell on TSL</a> / For small businesses', 'Sell live without a studio.', 'Show your products, answer questions and take orders in one video. No app for your customers, no setup fees for you.',
                                              '<div class="cta"><a class="btn btn-red" href="sell.html">Seller sign up</a><a class="btn btn-ghost" href="platform.html">Watch how it works</a></div>') + LOGOSTRIP + '''
<section class="tight">''' + note('1', 'Written for the shop owner', 'This page shared most of its copy and even a headline with the Creators page ("The solution for Creators & Influencers"). It now speaks to a business owner: what it takes to start, what is included, and proof it works.') + '''
<div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">What you get</span><h2>A storefront that talks back</h2></div></div>''' + MEET + '''
</div></section>
<section class="tight band"><div class="wrap">''' + stats(('500–1500%', 'More ecommerce revenue', 'Generated by businesses through annual use'), ('10–14%', 'Viewer to purchase', 'Site-wide conversion average'), ('30%+', 'Cart to purchase', 'Within content, no extra campaigns')) + '''
</div></section>
<section class="tight"><div class="wrap">
  <div class="sec-head"><div><span class="eyebrow">Included</span><h2>The commerce side, handled</h2></div></div>''' + tiles([
         ('Payments', 'Checkout built in', 'Customers pay inside the video. Nothing to wire up.'),
         ('Orders', 'Inventory and orders', 'Manage products, stock and orders, with automated fulfillment options.'),
         ('Shipping', 'Labels included', 'Print shipping labels from your seller account.'),
         ('Shopify', 'Sync your shop', 'Connect Shopify to bring your products in for free.')]) + '''
</div></section>''' + CTA + '</main>')

# ---------------- pricing
def plan(k, h, price, sub, items, btn, href, hot=False):
    return f'''<div class="plan {'hot' if hot else ''} reveal"><span class="k">{k}</span><h3>{h}</h3><div class="amt">{price}</div><small>{sub}</small><ul>{''.join(f'<li>{i}</li>' for i in items)}</ul><a class="btn {'btn-red' if hot else 'btn-line'}" href="{href}">{btn}</a></div>'''


page('pricing.html', 'sellpage', 'Pricing | Sell on TalkShopLive', 'TalkShopLive seller pricing: free to list and stream, with pay-as-you-sell pricing of 10.25% plus 30 cents per item sold.',
     '<main>' + tabs('pricing') + hero('<a href="platform.html">Sell on TSL</a> / Pricing', 'Free to list. Free to stream.', 'No setup fees, no monthly fees. You pay only when you sell.',
                                       facts(('$0', 'to list and stream'), ('Unlimited', 'shows'), ('Pay', 'as you sell'))) + '''
<section class="tight">''' + note('1', 'One price, said once', 'Pricing is the page sellers look for first, and today it is the last item in a menu called About. The plans are unchanged. Worth checking internally: the Creators and Small Business pages quote a flat 10% fee, while this page says 10.25% + 30¢.') + '''
<div class="wrap"><div class="plans">''' +
     plan('Most sellers start here', 'TalkShopLive Storefront', '10.25% + 30¢', 'per item sold', ['Sell live from anywhere, on any device', 'Automated fulfillment options', 'Order and inventory management', 'No setup, monthly or hidden fees'], 'Get started for free', 'sell.html', True) +
     plan('Already on Shopify', 'Shopify integration', 'Free', 'to sync your products', ['Unlimited live shows', 'Checkout synced with your Shopify shop', 'Live streaming for your shop', 'List, stream and embed for free'], 'Seller sign up', 'sell.html') +
     plan('For retailers', 'Retailer integration', "Let's talk", 'with Partner Success', ['Live shopping for your customers', 'Used by leading global retailers', 'Integration support'], 'Contact us', 'sell.html') +
     plan('For publishers', 'Publisher integration', "Let's talk", 'with the Publishing team', ['Shoppable, shareable content on your sites', 'Access to brands and retailers on the platform', 'Integrate with your domains'], 'Contact us', 'sell.html') + '''
</div></div></section>''' + LOGOSTRIP + CTA + '</main>')

# ---------------- templates filled in by assets/pages.js
page('product.html', 'product', 'Product | TalkShopLive', 'Signed and exclusive releases on TalkShopLive.',
     '<main><section class="tight" style="padding-top:28px">' + note('1', 'Video commerce, with the video', 'Today a product page is a single image with no shipping cost, no return policy, no clip from the show, and recommendations from unrelated artists. This template puts the drop next to the product, says what is signed, shows shipping before checkout, and recommends the same artist first.') + '<div class="wrap" id="pdp"></div></section>' + TRUST + '</main>')
page('artist.html', 'artist', 'Artist | TalkShopLive', 'Artist channel on TalkShopLive.',
     '<main><div id="artist"></div><section class="tight" style="padding-top:0">' + note('1', 'Follow and Notify, side by side', 'Artist pages today offer only Notify me. A quiet Follow gives fans a lighter option and builds an audience for ads and email, while Notify stays the opt-in for alerts.') + '</section>' + signup() + '</main>')
page('watch.html', 'watch', 'Live drop | TalkShopLive', 'Watch and shop a live drop on TalkShopLive.',
     '<main><section class="tight" style="padding-top:28px">' + note('1', 'The drop page says what it is', 'A first-time visitor from an ad lands here. The page labels the format, shows when it happens, pins the products beside the video and offers a reminder, so the visit becomes either a sale or a contact.') + '<div class="wrap" id="watch"></div></section>' + signup('Get a nudge before the next one.') + '</main>')
# ---------------- Liner Notes (magazine)
page('liner-notes.html', 'notes', 'Liner Notes | The TalkShopLive magazine', 'Liner Notes is the TalkShopLive magazine: gift guides, collector tips and the stories behind the live drops.',
     '<main><section class="phero notes"><div class="wrap"><div class="crumb"><a href="index.html">Home</a> / Liner Notes</div><span class="script">the TalkShopLive magazine</span><h1>Liner Notes</h1><p>The stories behind the drops. Gift guides, collector know-how and what happened on the live, with everything mentioned one tap from your cart.</p></div></section>'
     + '<section class="tight">' + note('1', 'A magazine, not a "blog"', 'The site has no editorial content today, so it earns no search traffic for questions like "signed copy of" or "signed vinyl gift guide", and gives AI assistants nothing to quote. Liner Notes takes its name from the notes on a record sleeve. Every story is shoppable, so content does two jobs: it brings in free traffic and it cross-sells. Headlines here are placeholders drawn from likely search topics; the real list should come from Search Console.')
     + '<div class="wrap"><div class="featured reveal" id="featured"></div></div></section>'
     + '<section class="tight band"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Latest</span><h2>Fresh off the press</h2></div></div><div data-articles data-filters></div><p class="src">Headlines and summaries are placeholders. No articles have been written yet.</p></div></section>'
     + signup('Get Liner Notes in your inbox.', ('Holiday',)) + '</main>')
page('article.html', 'notes', 'Liner Notes | TalkShopLive', 'A story from Liner Notes, the TalkShopLive magazine.',
     '<main><section class="tight" style="padding-top:28px">' + note('1', 'Every story sells something', 'The article template puts a "Shop the story" block in the middle of the piece, using the same add-to-cart rows as the cart. A gift guide that ranks on Google becomes a landing page that converts.') + '<div class="wrap narrow" id="article"></div></section>' + signup('Get Liner Notes in your inbox.') + '</main>')
print('built seller + template pages')
