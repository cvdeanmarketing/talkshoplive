/* TalkShopLive homepage concept: shared data, header, cart, search and page behaviour.
   Product names, prices and show details as listed on talkshop.live, November 2026. */
const T='https://assets.talkshop.live/thumbnail/', S='https://talkshop.live', FREE=75;
const K=k=>k.startsWith('http')?k:'https://cdn.talkshop.live/'+btoa(JSON.stringify({bucket:'tsl-images-production',key:'variant_images/'+k,edits:{resize:{width:600,fit:'contain'}}}));
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], money=n=>'$'+n.toFixed(2);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

// ---------- catalog
const P={};
// add(id, name, by, price, category, tags[], imageKey, link, {s:signed, t:[badges], w:wasPrice, merch})
const add=(id,n,a,p,cat,g,key,u,o={})=>P[id]={n,a,p,cat,g,i:K(key),u:u[0]==='/'?u:'/product/'+u,t:[],...o};
const PRE=['Preorder'];
// Music
add('randy','Same Old Way, CD Signed','Randy Travis',15.98,'music',['country'],'8300782/original/amstsl-same-old-way-cd-signed.jpg','4ewSvMs-ma9O/same-old-way-cd-signed',{s:1,t:PRE});
add('sheryl','Pick You Up, Oriole & Black Swirl LP Signed','Sheryl Crow',28.98,'music',['rock','pop'],'8112155/original/amstsl-pick-you-up-oriole-black-swirl-lp-exclusive.jpeg','_JNUx7VBCiUZ/pick-you-up-oriole-black-swirl-lp-signed',{s:1});
add('sherylcd','Pick You Up, CD','Sheryl Crow',13.98,'music',['rock','pop'],'8112154/original/amstsl-pick-you-up-cd.jpeg','/channels/sherylcrow');
add('winter',"Winterlicious (D'Luxe), LP Signed",'Debbie Gibson',31.98,'music',['pop','holiday'],'8303352/original/amstsl-winterlicious-d-luxe-lp-signed.png','fsWStKStr6WD/winterlicious-d-luxe-lp-signed',{s:1,t:PRE});
add('dgbody','The Body Remembers, CD with Autograph','Debbie Gibson',31.98,'music',['pop'],'7035384/original/ingramentertainment-the-body-remembers-autographed-cd.jpg','/channels/debbiegibson',{s:1});
add('duff','Holiday Things, Exclusive Sugarplum Glitter Alt Cover LP','Hilary Duff',28.98,'music',['pop','holiday'],'8304183/original/amstsl-holiday-things-exclusive-sugarplum-glitter-alt-cover-lp.png','1D267T5woA30/holiday-things-exclusive-sugarplum-glitter-alt-cover-lp',{t:['Preorder','Exclusive']});
add('bbs2cd','Rattle Ramble and Roll, Signed 2CD Set','Blackberry Smoke',29.99,'music',['rock','country'],'8303612/original/blackberrysmoke-rattle-ramble-and-roll-cd-signed.jpg','_IU38T6a67x4/rattle-ramble-and-roll-signed-2cd-set-limited-first-ever-best-of',{s:1,t:['Limited']});
add('bbs3lp','Rattle Ramble and Roll, Signed 3LP on Sea Green Vinyl','Blackberry Smoke',74.99,'music',['rock','country'],'8304529/original/blackberrysmoke-rattle-ramble-and-roll-3lp-signed.jpg','o7rosTXR5m8N/rattle-ramble-and-roll-signed-3lp-limited-best-of-vol-1-on-sea-green-vinyl',{s:1,t:['Limited']});
add('burnlp','Burn Eternal, LP Signed','Burn Eternal',37.98,'music',['rock'],'8297192/original/amstsl-burn-eternal-lp-signed.jpg','ggqAnotLhZ7T/burn-eternal-lp-signed',{s:1,t:PRE});
add('burncd','Burn Eternal, CD Signed','Burn Eternal',16.98,'music',['rock'],'8297190/original/amstsl-burn-eternal-cd-signed.jpg','1DgPLHJD4bfR/burn-eternal-cd-signed',{s:1,t:PRE});
add('garth','Double LIVE, LP','Garth Brooks',14.97,'music',['country'],'8299896/original/amstsl-double-live-lp.jpg','7SCpBiHiIoKW/double-live-lp');
add('garthanth','Anthology, Part V: The Comeback (Limited Edition)','Garth Brooks',29.95,'music',['country'],'7629383/original/readerlink-anthology-part-v-the-comeback-limited-edition.jpg','v5QS06I2Q6mi/limited-edition-anthology-part-v-the-comeback',{w:39.95,t:['Limited']});
add('seals','The Last Duet, LP Signed','Dan Seals & Friends',56.98,'music',['country'],'8305576/original/amstsl-the-last-duet-lp-signed.jpg','zfzktmwY2Mey/the-last-duet-lp-signed',{s:1});
add('camlp','Lost in Creation, LP Signed','Cam Cole',32.98,'music',['rock'],'8305817/original/aenttsl-lost-in-creation-lp-signed.jpg','k4I8rFJAVlLy/lost-in-creation-lp-signed',{s:1});
add('camcd','Lost in Creation, CD Signed','Cam Cole',18.98,'music',['rock'],'8305324/original/aenttsl-lost-in-creation-cd-signed.jpg','eTwtTPQwyj3L/lost-in-creation-cd-signed',{s:1});
add('foleylp','Alone (Together) A Holiday Companion, LP Signed','Sue Foley',29.98,'music',['holiday','rock'],'8304482/original/amstsl-alone-together-a-holiday-companion-lp-signed.jpg','zLpWoTr3Siq8/alone-together-a-holiday-companion-lp-signed',{s:1,t:PRE});
add('foleycd','Alone (Together) A Holiday Companion, CD Signed','Sue Foley',14.98,'music',['holiday','rock'],'8304476/original/amstsl-alone-together-a-holiday-companion-tsl-exclusive-cd-signed.jpg','pOXfVCO2Ghjz/alone-together-a-holiday-companion-tsl-exclusive-cd-signed',{s:1,t:['Preorder','Exclusive']});
add('clutch','Wasted Lands, LP','Clutch',26.98,'music',['rock'],'8304358/original/amstsl-wasted-lands-lp.jpeg','YepIK0fPKIDh/wasted-lands-lp',{t:PRE});
add('witt',"I Think I'm Spending Christmas With You, LP",'Alicia Witt',39.98,'music',['holiday','pop'],'8304191/original/amstsl-i-think-i-m-spending-christmas-with-you-lp.jpeg','p0KcVxEgdd_E/i-think-i-m-spending-christmas-with-you-lp',{t:PRE});
add('cbzoe','A Charlie Brown Christmas 60th Anniv. Zoetrope Picture Disc, Signed','Vince Guaraldi Trio',79.99,'music',['holiday'],'8304171/original/amstsl-a-charlie-brown-christmas-60th-anniv-zoetrope-picture-disc.jpg','7nwoenbjHkYc/a-charlie-brown-christmas-60th-anniv-zoetrope-picture-disc-signed',{s:1,t:PRE});
add('cbfoil','A Charlie Brown Christmas, Holographic Foil Sleeve LP','Vince Guaraldi Trio',27.98,'music',['holiday'],'8304176/original/amstsl-a-charlie-brown-christmas-holographic-foil-sleeve-lp.jpg','ED2qZ79p_NE4/a-charlie-brown-christmas-holographic-foil-sleeve-lp',{t:PRE});
add('extreme','Paris Rising, 3LP Mint Green','Extreme',44.98,'music',['rock'],'8303954/original/amstsl-paris-rising-3lp-mint-green.jpg','Q5tdLDIXMWWj/paris-rising-3lp-mint-green',{t:PRE});
add('extremecd','Paris Rising, 2CD','Extreme',15.98,'music',['rock'],'8303950/original/amstsl-paris-rising-2cd.jpg','iganRGJdVY9x/paris-rising-2cd',{t:PRE});
add('anthrax','Cursum Perficio, TSL Exclusive Red 2LP Signed','Anthrax',41.99,'music',['rock'],'7846416/original/amstsl-cursum-perficio-tsl-exclusive-color-red-2lp-signed.jpg','OeTm5RulFoP_/cursum-perficio-tsl-exclusive-color-red-2lp-signed',{s:1,t:['Exclusive']});
// Books
add('sour','The Sourdough Hoe, Signed','Angela Sincore',29.99,'book',['cook'],'8153347/original/readerlink-the-sourdough-hoe-signed.jpg','KUgU_jpZ3gtM/the-sourdough-hoe-signed',{s:1,t:PRE});
add('tmi','TMI: Memoirs of a Go-Go, Signed','Jane Wiedlin',35.00,'book',['memoir'],'7807163/original/readerlink-tmi-memoirs-of-a-go-go-signed.jpg','-QUFF18MoWyD/tmi-memoirs-of-a-go-go-signed',{s:1,w:37.50});
add('andy',"Andy's Bravo Scrapbook, Signed",'Andy Cohen',38.00,'book',['memoir'],'8289995/original/readerlink-andy-s-bravo-scrapbook-signed.jpg','_v5hCAY-sVEQ/andy-s-bravo-scrapbook-signed-9d077168',{s:1,t:PRE});
add('dgbook','Eternally Electric: The Message in My Music, Signed','Debbie Gibson',30.00,'book',['memoir'],'8303353/original/readerlink-eternally-electric-the-message-in-my-music-signed.jpg','z5BXcXmEvqEb/eternally-electric-the-message-in-my-music-signed',{s:1,t:PRE});
add('ree','The Pioneer Woman Cooks: The Essential Recipes, Signed Edition','Ree Drummond',32.50,'book',['cook'],'8305820/original/readerlink-the-pioneer-woman-cooks-the-essential-recipes-signed-edition.jpg','__iJwEHD8po8/the-pioneer-woman-cooks-the-essential-recipes-signed-edition',{s:1,t:PRE});
add('blais','Sauce Life: 70+ Recipes to Drizzle, Dip, and Swirl, Signed','Richard & Jazmin Blais',24.95,'book',['cook'],'8304348/original/readerlink-sauce-life-70-recipes-to-drizzle-dip-and-swirl-your-way-to-crave-worthy-meals-signed.jpg','zsk91r0cMIUu/sauce-life-70-recipes-to-drizzle-dip-and-swirl-your-way-to-crave-worthy-meals-signed',{s:1,t:PRE});
add('fischer',"Let's Make Dinner, Signed",'Cailee Fischer',35.00,'book',['cook'],'8305819/original/readerlink-let-s-make-dinner-balanced-pcos-friendly-meals-to-support-your-body-and-feed-everyone-at-the-table-signed.jpg','ZkEyP-b6MN5k/let-s-make-dinner-balanced-pcos-friendly-meals-to-support-your-body-and-feed-everyone-at-the-table-signed',{s:1,t:PRE});
add('calvo','Maximum Flavor at Home, Signed','Adrianne Calvo',32.00,'book',['cook'],'8296458/original/readerlink-maximum-flavor-at-home-signed.jpg','6v1BkuSzkAja/maximum-flavor-at-home-signed',{s:1});
add('payne','Carnival Ghosts: A Memoir of Life, Loss, and Rebirth with Little Feat, Signed','Bill Payne',32.00,'book',['memoir'],'8304526/original/readerlink-carnival-ghosts-a-memoir-of-life-loss-and-rebirth-with-little-feat-signed.jpg','2e3Rx7soQ-WV/carnival-ghosts-a-memoir-of-life-loss-and-rebirth-with-little-feat-signed',{s:1,t:PRE});
add('manz','Revolución to Roxy (Standard), Signed','Phil Manzanera',46.95,'book',['memoir'],'8300689/original/tslmusicmemorabilia-revolucion-to-roxy-standard-signed.jpg','yqdX8kW9CB4a/revolucion-to-roxy-standard-signed',{s:1,t:PRE});
add('billy','Holding My Breath: The Two Testaments of Chuck Billy, Signed','Chuck Billy',26.99,'book',['memoir'],'8300538/original/readerlink-holding-my-breath-the-two-testaments-of-chuck-billy-signed.jpg','PLKJZUASsc70/holding-my-breath-the-two-testaments-of-chuck-billy-signed',{s:1,w:28.99,t:PRE});
add('tjames','Me, The Mob and the Music (Hard Cover), Signed','Tommy James',39.99,'book',['memoir'],'8297695/original/tslmusicmemorabilia-me-the-mob-and-the-music-hard-cover-signed.jpg','WJghx4ygtFtM/me-the-mob-and-the-music-hard-cover-signed',{s:1,t:PRE});
add('elin','The Thoroughbreds, Signed','Elin Hilderbrand & Shelby Cunningham',32.00,'book',['fiction'],'8301272/original/readerlink-the-thoroughbreds-signed.jpg','wnoBHWB1RmEM/the-thoroughbreds-signed',{s:1,t:PRE});
add('dmc',"Darryl's Christmas in Hollis (1st Edition Signed Copies)",'Darryl "DMC" McDaniels',20.99,'book',['fiction'],'8304141/original/ballastbooks-darryl-s-christmas-in-hollis-1st-edition-signed-copies.jpeg','FzrGv6W1oJcl/darryl-s-christmas-in-hollis-1st-edition-signed-copies',{s:1});
add('finn','Your Home Playbook: A Monthly DIY Guide to Routine Home Care, Signed','Casey Finn',29.99,'book',['home'],'8305876/original/readerlink-your-home-playbook-a-monthly-diy-guide-to-routine-home-care-signed.png','c_vgJ7Q4wtCu/your-home-playbook-a-monthly-diy-guide-to-routine-home-care-signed',{s:1,t:PRE});
add('swenson','Raising Autism: An Essential Guide for Caregivers, Signed','Kate Swenson',32.00,'book',['home'],'8303435/original/readerlink-raising-autism-an-essential-guide-for-caregivers-signed.jpg','g4eSSMBInYYK/raising-autism-an-essential-guide-for-caregivers-signed',{s:1,t:PRE});
// Merch
add('bbshat','25th Anniversary Hat','Blackberry Smoke',29.99,'merch',['hats'],'8301268/original/blackberrysmoke-25th-anniversary-hat.jpg','/channels/blackberrysmoke',{merch:1});
add('bbsbadge','25th Anniversary Auto Badge','Blackberry Smoke',29.99,'merch',['gifts'],'8301266/original/blackberrysmoke-25th-anniversary-auto-badge.jpg','/channels/blackberrysmoke',{merch:1});
add('bbstee','25th Anniversary World Tour T-shirt','Blackberry Smoke',35.00,'merch',['apparel'],'8305134/original/blackberrysmoke-bbs-25th-anniversary-world-tour-t-shirt.jpg','7wnmiB6m2Z5c/bbs-25th-anniversary-world-tour-t-shirt',{merch:1});
add('bbssweater','Ugly Knit Christmas Sweater','Blackberry Smoke',69.99,'merch',['apparel'],'8301269/original/blackberrysmoke-ugly-knit-christmas-sweater.jpg','/channels/blackberrysmoke',{merch:1});
// Beauty
const JSR='Jimenez Sisters Ranch', VV='Vintage Vixen Cosmetics';
add('jsr1','Eucalyptus and Lavender Box Set Duo',JSR,23.95,'beauty',['bath'],'8304374/original/jimenezsistersranch-eucalyptus-and-lavender-box-set-duo.jpg','HmoqE4B0D9sI/eucalyptus-and-lavender-box-set-duo');
add('jsr2','Santo and Citrus Box Set Duo',JSR,23.95,'beauty',['bath'],'8304370/original/jimenezsistersranch-santo-and-citrus-box-set-duo.jpg','Hn57SsPoz6jn/santo-and-citrus-box-set-duo');
add('jsr3','Pumpkin Soap Gift Box',JSR,16.95,'beauty',['bath'],'8304360/original/jimenezsistersranch-pumpkin-soap-gift-box.jpg','ztJNQLp1Pzuk/pumpkin-soap-gift-box');
add('jsr4','Lavender Goat Milk Bar Soap',JSR,14.99,'beauty',['bath'],'7440021/original/jimenezsistersranch-lavender-goat-milk-bar-soap.jpeg','FBNYR3EqCh7C/lavender-goat-milk-bar-soap-84dbe9b3',{w:24.00});
add('lancer1','Lancer Mineral Sun Shield Universal Tint SPF 30','',48.00,'beauty',['skin'],'7640194/original/lancerskincare-lancer-mineral-sun-shield-universal-tint-spf-30.png','9jbvI7Fz-CdU/lancer-mineral-sun-shield-universal-tint-spf-30',{w:60.00});
add('lancer2','Lancer The Method: Cleanse Normal-Combination','',48.00,'beauty',['skin'],'7640169/original/lancerskincare-lancer-the-method-cleanse-normal-combination.jpg','poh-Ss58zr4y/lancer-the-method-cleanse-normal-combination',{w:60.00});
add('biodance','Biodance Bio-Collagen Real Deep Mask (4 pack)','Biodance',22.00,'beauty',['skin'],'7696133/original/playlabbeauty-biodance-bio-collagen-real-deep-mask-4-pack.jpg','s4igqzmSzgtd/biodance-bio-collagen-real-deep-mask-4-pack');
add('balm','Helping Hands & Heels Skin Balm, Lavender Rosemary','',20.00,'beauty',['skin'],'7743817/original/helpinghandsheelsskinbalm-helping-hands-heels-skin-balm-white-lavender.png','JNqUCV8kO4bE/helping-hands-heels-skin-balm-lavender-rosemary');
add('vv1','The Loren',VV,24.99,'beauty',['makeup'],'7701722/original/vintagevixencosmetics-the-loren.webp','cNgOBNMyl2fk/the-loren');
add('vv2','Camera!',VV,24.99,'beauty',['makeup'],'7701733/original/vintagevixencosmetics-camera.webp','8QpNdbH08eBV/camera-52d19494');
add('vv3','The Glam Hold Water-Based Lash Adhesive',VV,12.99,'beauty',['makeup'],'7701782/original/vintagevixencosmetics-the-glam-hold-water-based-lash-adhesive.webp','N2ltf5TQIKzP/the-glam-hold-water-based-lash-adhesive');
add('brush','6-Piece Labeled Brush Set','',39.00,'beauty',['makeup'],'7606157/original/lovercosmetics-6-piece-labeled-brush-set.png','4aoDzkHtaQ9h/6-piece-labeled-brush-set');
add('palette','5-Step Palette: Everyday Matte Bestsellers','',100.00,'beauty',['makeup'],'7495374/original/lovercosmetics-5-step-palette-everyday-matte-bestsellers.png','DSD_4CI2AGgs/5-step-palette-everyday-matte-bestsellers',{w:125.00});
add('frag1','Armaf Club de Nuit Blue Iconic EDP 105mL','',42.99,'beauty',['fragrance'],'8278061/original/doublesinluxe-armaf-club-de-nuit-blue-iconic-edp-105ml.png','0izoE6iuCpOf/armaf-club-de-nuit-blue-iconic-edp-105ml');
add('frag2','Lattafa Yara Pink Eau de Parfum for Women 3.4 oz','',39.99,'beauty',['fragrance'],'8278019/original/doublesinluxe-lattafa-yara-pink-eau-de-parfum-for-women-3-4-oz.jpeg','xg2h1fZ75FP6/lattafa-yara-pink-eau-de-parfum-for-women-3-4-oz');
add('frag3','Rasasi Hawas Exotic Eau de Parfum for Men','',46.99,'beauty',['fragrance'],'8278070/original/doublesinluxe-rasasi-hawas-exotic-eau-de-parfum-for-men.png','2GPXKDh_Y3zb/rasasi-hawas-exotic-eau-de-parfum-for-men');
add('frag4',"Armaf Odyssey Tyrant 4-Piece Men's Fragrance Gift Set",'',49.99,'beauty',['fragrance'],'8301566/original/doublesinluxe-armaf-odyssey-tyrant-4-piece-men-s-fragrance-gift-set-new.png','qwG477GdaoOC/armaf-odyssey-tyrant-4-piece-men-s-fragrance-gift-set-new');

const SUBS={music:{country:'Country',rock:'Rock',pop:'Pop',holiday:'Holiday'},book:{cook:'Cookbooks',memoir:'Memoirs',fiction:'Fiction & kids',home:'Home & family'},merch:{apparel:'Apparel',hats:'Hats',gifts:'Gifts'},beauty:{skin:'Skin care',makeup:'Makeup',fragrance:'Fragrance',bath:'Bath & body'}};
const KIND={music:'Music',book:'Book',merch:'Merch',beauty:'Beauty'};

// ---------- live drops
const SHOWS={up:[
 {st:'Tonight',cls:'today',w:'Wed Nov 18 · 6:00 PM',t:'Fall on the Farm, ep. 1',by:'Jimenez Sisters Ranch',k:'Shop-along · bath & body',c:'beauty',img:'f8028d02-660d-4c0c-bae5-0495e20d0df7.JPG',u:'/channels/jimenezsistersranch'},
 {st:'Tonight',cls:'today',w:'Wed Nov 18 · 7:00 PM',t:'A Charlie Brown Christmas, Signed',by:'Vince Guaraldi Trio',k:'Signed music drop',c:'music',img:'a520c1a7-83ad-4ceb-9640-51ab486e6dce.jpg',u:'/watch/-M2FKpbkeKsp'},
 {st:'Tonight',cls:'today',w:'Wed Nov 18 · 7:00 PM',t:'Make Merry',by:'Walmart',k:'Brand shop-along · home',c:'beauty',img:'5ce1c116-ae2a-4448-88e0-703479cecca6.jpg',u:'/channels/walmart'},
 {st:'Tomorrow',w:'Thu Nov 19 · 8:30 PM',t:"Winterlicious (D'Luxe), Signed",by:'Debbie Gibson',k:'Signed music drop',c:'music',img:'64b402d2-0e06-4386-9331-1479f0f5f646.png',u:'/watch/7PPuDP0SCmZx'},
 {st:'Fri',w:'Fri Nov 20 · 6:00 PM',t:'Sauce Life, Signed',by:'Richard & Jazmin Blais',k:'Signed book drop',c:'book',img:'f75b9d52-ba5b-4ed5-8c05-ed8b98bd2e55.jpg',u:'/watch/jzAziJls_c4Q'},
 {st:'Fri',w:'Fri Nov 20 · 7:00 PM',t:"Of Course It's Good!, Signed",by:'Jessica Secrest',k:'Signed book drop',c:'book',img:'70013993-8b01-4287-94a1-cbd0a325bc9a.jpg',u:'/watch/-9TMbkFD9ewi'},
 {st:'Sun',w:'Sun Nov 22 · 7:30 PM',t:'Shred Happens: High Protein, Big Flavor, Signed',by:'Shred Happens',k:'Signed book drop',c:'book',img:'64634000-7101-462c-b87c-7cb680c99cb7.jpg',u:'/watch/Fw-OYxsFKEZ8'},
 {st:'Mon',w:'Mon Nov 23 · 8:30 PM',t:'The Last Duet, Signed',by:'Dan Seals',k:'Signed music drop',c:'music',img:'d22e9af3-f4db-4549-ba92-1e9220379556.jpg',u:'/watch/SdbijS879nFL'},
 {st:'Tue',w:'Tue Nov 24 · 8:00 PM',t:'A Kaleidoscope of Madness, Signed',by:'Cannata / Arc Angel',k:'Signed music drop',c:'music',img:'ba8d52f6-79e3-4611-93ee-f39ba236a276.png',u:'/watch/V0Q08vPOOUIG'},
 {st:'Tue',w:'Tue Nov 24 · 9:00 PM',t:'Alone (Together), Signed',by:'Sue Foley',k:'Signed music drop',c:'music',img:'0f0ee44f-d019-4028-b974-0fdd3ce81bf4.jpg',u:'/watch/e02Qjxv8lDtR'},
 {st:'Dec 9',w:'Wed Dec 9 · 7:00 PM',t:'Same Old Way, Signed',by:'Randy Travis',k:'Signed music drop',c:'music',img:'21289aa3-d3da-4e8d-96ae-a2ccb66fcefd.png',u:'/watch/2frXrNqcbtni'},
 {st:'Jan 24',w:'Sun Jan 24, 2027 · 7:00 PM',t:'Paris Rising, Signed',by:'Extreme',k:'Signed music drop',c:'music',img:'a6e62224-5d11-4c7c-8db6-9ef7124fd694.jpg',u:'/watch/xleS6UHvDT-Q'}
],re:[
 {st:'Replay',cls:'replay',w:'139.5K watched',t:'The Sourdough Hoe, Signed',by:'Angela Sincore',k:'Signed book drop',c:'book',img:'81037108-8566-4e46-946f-cb9dbb34d4b9.jpg',u:'/watch/0b6KL4JCwnAD'},
 {st:'Replay',cls:'replay',w:'109.5K watched',t:'25 Years of Blackberry Smoke: A Celebration',by:'Blackberry Smoke',k:'Signed music drop + merch',c:'music',img:'7987557b-5710-4fc3-97e9-afcde08379ea.jpg',u:'/channels/blackberrysmoke'},
 {st:'Replay',cls:'replay',w:'48.4K watched',t:'Wasted Lands, Signed',by:'Clutch',k:'Signed music drop',c:'music',img:'d1187295-f389-49d1-bf13-a5f96a23bbd5.png',u:'/watch/cTkwNKsO46W5'},
 {st:'Replay',cls:'replay',w:'24.3K watched',t:'Night Divides The Day, Signed',by:'The Doors',k:'Signed music drop',c:'music',img:'5fc7751f-9322-4686-8293-95ec279952e2.jpg',u:'/watch/nOaK-Rub1XJh'},
 {st:'Replay',cls:'replay',w:'6.3K watched',t:'Pick You Up, Signed',by:'Sheryl Crow',k:'Signed music drop',c:'music',img:'c3276338-985b-4e39-ba22-00fd20f9741a.jpg',u:'/watch/WqEU09JaEvnd'}
]};

// ---------- shared header, footer and cart
const user=store.get('tsl_user',null); // null | 'fan' | 'seller' (demo only)
const page=document.body.dataset.page||'home';
const NAV=[['drops','live-drops.html','Live drops'],['music','signed-music.html','Signed music'],['books','signed-books.html','Signed books'],['merch','merch.html','Merch'],['beauty','beauty.html','Beauty & more'],['how','how-it-works.html','How it works'],['notes','liner-notes.html','Liner Notes']];
const SELL=[['platform.html','The platform','How live selling works, with video'],['capabilities.html','Capabilities','Simulcast, embeds, guests, fundraisers'],['creators.html','For creators & influencers','Own your audience and your data'],['small-business.html','For small businesses','Sell live without an app or a studio'],['pricing.html','Pricing','Free to list. Pay only when you sell']];
const EXT=(links,arrow=true)=>links.map(([l,u])=>`<a href="${u}" target="_blank" rel="noopener">${l}${arrow?' ↗':''}</a>`).join('');
const SOCIAL=[
 ['Instagram','https://www.instagram.com/talkshoplive/','<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"/>'],
 ['Facebook','https://www.facebook.com/talkshoplive','<path d="M14.5 8.5V6.8c0-.9.4-1.3 1.4-1.3H17V2.6h-2.3c-2.6 0-3.9 1.5-3.9 3.9v2H8.5v3h2.3v10h3.7v-10h2.6l.4-3z" fill="currentColor" stroke="none"/>'],
 ['LinkedIn','https://www.linkedin.com/company/talkshoplive','<path d="M4 9.5h3.4V20H4zM5.7 4a2 2 0 110 4 2 2 0 010-4zM9.8 9.5H13V11c.5-.9 1.7-1.8 3.4-1.8 3.4 0 4 2.2 4 5.1V20H17v-5c0-1.2 0-2.7-1.7-2.7s-2 1.300-2 2.600V20H9.800z" fill="currentColor" stroke="none"/>'],
 ['TikTok','https://www.tiktok.com/@talkshoplive','<path d="M14 3v11.200a3.300 3.300 0 11-3.300-3.300" /><path d="M14 3c.3 2.600 2 4.300 4.700 4.600"/>'],
 ['X','https://twitter.com/TalkShopLive','<path d="M4 4l16 16M20 4L4 20"/>'],
 ['YouTube','https://www.youtube.com/@TalkShopLive','<rect x="2.5" y="5.500" width="19" height="13" rx="4"/><path d="M10 9.200l5 2.800-5 2.800z" fill="currentColor" stroke="none"/>']];
const acct=user==='fan'?`<a class="hbtn" href="account.html">My account</a>`:user==='seller'?`<a class="hbtn" href="seller-dashboard.html">Seller dashboard</a>`:`<a class="hbtn solid" href="sign-in.html">Sign in</a>`;
$('#chrome-top').outerHTML=`
<div class="concept"><div class="wrap">
  <span><b>Website concept</b> for TalkShopLive by Courtney Dean<span class="long"> · an independent redesign study, not the live site</span></span>
  <button class="toggle" id="notesBtn" aria-pressed="false"><i></i>Show strategy notes</button>
</div></div>
${page==='holiday'?'':'<a class="promo" href="holiday-sale.html"><b>Holiday Sale</b>Signed music and books, ready to gift.<u>Shop the gift guide →</u></a>'}
<header>
  <div class="wrap nav">
    <a href="index.html" class="logo" aria-label="TalkShopLive home"><span>TSL</span>TalkShopLive</a>
    <div class="search" role="search">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>
      <input id="q" type="search" placeholder="Search artists, authors, signed vinyl, books…" aria-label="Search" autocomplete="off">
      <div class="results" id="results" hidden></div>
    </div>
    ${acct}
    <button class="cartbtn" id="cartBtn" aria-label="Open cart">Cart<b id="cartCount">0</b></button>
  </div>
  <div class="subnav"><div class="wrap subrow"><nav aria-label="Main"><a href="holiday-sale.html" class="sale" ${page==='holiday'?'aria-current="page"':''}>✦ Holiday sale</a>${NAV.map(([id,href,label])=>`<a href="${href}" class="${id==='drops'?'live':''}" ${page===id?'aria-current="page"':''}>${label}</a>`).join('')}</nav>
    <details class="sellmenu"><summary>Sell on TSL</summary><div class="menu">
      <small>For artists, authors, creators and brands</small>
      ${SELL.map(([h,l,d])=>`<a href="${h}"><b>${l}</b><span>${d}</span></a>`).join('')}
      <a class="btn btn-red btn-sm" href="sell.html">Seller sign up</a>
    </div></details></div>
</header>`;
$('#chrome-bottom').outerHTML=`
<footer><div class="wrap">
  <div class="ftop">
    <div class="fbrand">
      <a href="index.html" class="logo" aria-label="TalkShopLive home"><span>TSL</span>TalkShopLive</a>
      <p>Live shopping with artists, authors and creators. Watch the drop, ask a question, and buy the signed copy right inside the video.</p>
      <div class="social">${SOCIAL.map(([n,u,p])=>`<a href="${u}" target="_blank" rel="noopener" aria-label="TalkShopLive on ${n}"><svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg></a>`).join('')}</div>
      <div class="awards"><div><b>EY</b><span>Entrepreneur of the Year<br>Southeast region</span></div><div><b>Inc. 5000</b><span>2025 · #721<br>#16 in Retail</span></div></div>
    </div>
    <nav class="fcols" aria-label="Footer">
      <div><h4>Shop</h4><a href="holiday-sale.html">Holiday sale</a>${NAV.slice(0,5).map(n=>`<a href="${n[1]}">${n[2]}</a>`).join('')}</div>
      <div><h4>Help</h4><a href="how-it-works.html">How it works</a><a href="how-it-works.html#trust">Are autographs real?</a><a href="liner-notes.html">Liner Notes magazine</a><a href="sign-in.html">Sign in</a>${EXT([['Help & Support','https://support.talkshop.live/hc/en-us/categories/115001892428-Help-Center'],['Contact','https://support.talkshop.live/hc/en-us/requests/new'],['Give us feedback','https://docs.google.com/forms/d/e/1FAIpQLSdg9qhcJ2C-KyGk5vwuDSFhfF-YKwW9K2hQUJqCATkkbkK2_w/viewform']])}</div>
      <div><h4>Sell on TSL</h4>${SELL.map(s=>`<a href="${s[0]}">${s[1]}</a>`).join('')}<a href="sell.html">Seller sign up</a>${EXT([['Shopify app','https://apps.shopify.com/talkshoplive'],['Developer API docs','https://docs.talkshop.live/']])}</div>
    </nav>
    <form class="fjoin" data-form>
      <h4>Join the list</h4><p>Be the first to know about live drops and signed releases.</p>
      <div class="field"><input type="email" required placeholder="Your email" aria-label="Your email" autocomplete="email"><button class="btn btn-red">Subscribe</button></div>
      <div class="ok" role="status"></div>
      <small>2.8k+ have joined already</small>
    </form>
  </div>
  <div class="fbot">
    <div>${EXT([['Privacy','https://support.talkshop.live/hc/en-us/articles/115012232647-Privacy-Policy'],['Terms','https://support.talkshop.live/hc/en-us/articles/115012106547-Terms-of-Service'],['Press','https://support.talkshop.live/hc/en-us/articles/360037712211-Press-Coverage'],['Do Not Sell or Share My Personal Information','https://support.talkshop.live/hc/en-us/articles/115012232647-Privacy-Policy']],false)}</div>
    <p>Patented shoppable embedded point-of-sale technology.</p>
    <p class="fconcept">Website concept by Courtney Dean, November 2026. Product names, prices and show details were taken from public pages on talkshop.live and are shown for illustration. Not affiliated with or endorsed by TalkShopLive Inc. <a href="https://talkshop.live" target="_blank" rel="noopener">Visit the live site ↗</a></p>
  </div>
</div></footer>
<div class="scrim" id="scrim"></div>
<aside class="drawer" id="drawer" aria-label="Cart" aria-hidden="true">
  <header><h2>Your cart</h2><button id="closeCart" aria-label="Close cart" style="font-size:26px;line-height:1">×</button></header>
  <div class="body"><div id="lines"></div><div class="xs" id="xs"></div></div>
  <div class="foot">
    <div class="ship"><p id="cShipTxt"></p><div class="bar"><i id="cShipBar"></i></div></div>
    <div class="total" style="margin-top:14px"><span style="font-weight:600">Subtotal</span><b id="cTotal" style="font-size:24px">$0.00</b></div>
    <button class="btn btn-red" id="checkout">Checkout</button>
    <small>Concept demo. Nothing is charged and nothing leaves this browser.</small>
  </div>
</aside>`;

// ---------- components
const prodCard=id=>{const p=P[id];return `<article class="prod"><a class="im" href="product.html?id=${id}"><img loading="lazy" alt="${p.n}${p.a?' by '+p.a:''}" src="${p.i}"><span class="badges">${p.s?'<span class="bg sig">Signed</span>':''}${p.t.map(t=>`<span class="bg">${t}</span>`).join('')}</span></a>
<h3><a href="product.html?id=${id}">${p.n}</a></h3><span class="by">${p.a?`<a href="artist.html?a=${encodeURIComponent(p.a)}">${p.a}</a>`:SUBS[p.cat][p.g[0]]}</span><div class="pr">${money(p.p)}${p.w?`<s>${money(p.w)}</s>`:''}</div><button class="btn btn-line btn-sm" data-add="${id}">Add to cart</button></article>`};
Object.entries(SHOWS).forEach(([t,l])=>l.forEach((s,i)=>s.id=t+i));
const showCard=s=>`<article class="show"><a class="th" href="watch.html?d=${s.id}"><img loading="lazy" alt="${s.t} with ${s.by}" src="${T+s.img}"><span class="st ${s.cls||''}">${s.st}</span></a>
<div class="bd"><span class="when">${s.w}</span><h3><a href="watch.html?d=${s.id}">${s.t}</a></h3><span class="by">with <a href="artist.html?a=${encodeURIComponent(s.by)}">${s.by}</a></span><span class="kind">${s.k}</span>
${s.cls==='replay'?`<a class="btn btn-red btn-sm" href="watch.html?d=${s.id}">Watch &amp; shop replay</a>`:`<button class="btn btn-line btn-sm" data-remind>Remind me</button>`}</div></article>`;
const shipText=t=>t>=FREE?'🎉 You unlocked free shipping':t>0?`You're ${money(FREE-t)} away from free shipping`:`Free shipping on orders over $${FREE}`;

// ---------- cart: same-artist add-ons first, then similar items
let cart=store.get('tsl_cart',[]).filter(i=>P[i]);
function suggest(list=cart){const cart=list,have=new Set(cart),keys=Object.keys(P).filter(k=>!have.has(k)),last=P[cart[cart.length-1]];
  if(!last)return {artist:[],similar:[]};
  const artists=[...new Set(cart.map(i=>P[i].a).filter(Boolean))].reverse();
  const artist=artists.flatMap(a=>keys.filter(k=>P[k].a===a).sort((x,y)=>(P[y].merch||0)-(P[x].merch||0))).slice(0,3);
  const mine=new Set(cart.flatMap(i=>P[i].g)),inCart=new Set(artists);
  const similar=keys.filter(k=>!inCart.has(P[k].a)&&!P[k].merch).map(k=>({k,sc:(P[k].cat===last.cat?P[k].g.filter(g=>mine.has(g)).length*2+1:0)})).filter(x=>x.sc>0).sort((x,y)=>y.sc-x.sc).slice(0,3).map(x=>x.k);
  return {artist,similar,name:artist[0]?P[artist[0]].a:''}}
function draw(){const t=cart.reduce((s,i)=>s+P[i].p,0);store.set('tsl_cart',cart);
  $('#cartCount').textContent=cart.length;
  $('#lines').innerHTML=cart.length?cart.map(id=>`<div class="line"><img alt="" src="${P[id].i}"><div><strong>${P[id].n}</strong><small>${P[id].a||KIND[P[id].cat]}</small></div><div style="text-align:right"><b>${money(P[id].p)}</b><br><button data-rm="${id}">Remove</button></div></div>`).join(''):'<p class="empty">Your cart is empty.<br>Add something signed.</p>';
  const s=suggest(),row=id=>`<div class="line"><img alt="" src="${P[id].i}"><div><strong>${P[id].n}</strong><small>${P[id].merch?'Official merch':(P[id].s?'Signed · ':'')+(P[id].a||SUBS[P[id].cat][P[id].g[0]])}</small></div><button class="btn btn-line btn-sm" style="text-decoration:none;color:var(--ink)" data-add="${id}">+ ${money(P[id].p)}</button></div>`;
  $('#xs').innerHTML=(s.artist.length?`<h3>More from ${s.name}</h3><small>Add-ons from the same ${P[s.artist[0]].cat==='beauty'?'seller':'artist'} ship together.</small>`+s.artist.map(row).join(''):'')+(s.similar.length?`<h3>Fans also add</h3><small>Similar picks, based on what's in your cart.</small>`+s.similar.map(row).join(''):'');
  $('#cTotal').textContent=money(t);$('#cShipTxt').textContent=shipText(t);$('#cShipBar').style.width=Math.min(100,t/FREE*100)+'%'}
const openCart=()=>{document.body.classList.add('cart');$('#drawer').setAttribute('aria-hidden','false')};
const closeCart=()=>{document.body.classList.remove('cart');$('#drawer').setAttribute('aria-hidden','true')};
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]'),r=e.target.closest('[data-rm]'),m=e.target.closest('[data-remind]');
  if(a){if(!cart.includes(a.dataset.add))cart.push(a.dataset.add);draw();openCart()}
  if(r){cart=cart.filter(i=>i!==r.dataset.rm);draw()}
  if(m){m.textContent='✓ Reminder set';m.classList.replace('btn-line','btn-red');m.disabled=true}
  if(!e.target.closest('.search'))$('#results').hidden=true});
$('#cartBtn').onclick=openCart;$('#closeCart').onclick=closeCart;$('#scrim').onclick=closeCart;
document.addEventListener('keydown',e=>e.key==='Escape'&&closeCart());
$('#checkout').onclick=()=>{$('#checkout').textContent='This is a concept. Checkout happens on talkshop.live'};
draw();

// ---------- search across products and drops
const INDEX=[...Object.entries(P).map(([id,p])=>({t:p.n,s:p.a||SUBS[p.cat][p.g[0]],k:KIND[p.cat],i:p.i,u:'product.html?id='+id,x:money(p.p),h:p.g.map(g=>SUBS[p.cat][g]).join(' ')+(p.s?' signed autographed':'')})),...[...SHOWS.up,...SHOWS.re].map(s=>({t:s.t,s:'with '+s.by+' · '+s.w,k:s.cls==='replay'?'Replay':'Live drop',i:T+s.img,u:'watch.html?d='+s.id,x:'',h:s.k}))];
$('#q').oninput=e=>{const v=e.target.value.trim().toLowerCase(),r=$('#results');if(v.length<2){r.hidden=true;return}
  const hits=INDEX.filter(o=>(o.t+' '+o.s+' '+o.k+' '+o.h).toLowerCase().includes(v)).slice(0,7);r.hidden=false;
  r.innerHTML=hits.length?hits.map(o=>`<a href="${o.u}"><img alt="" src="${o.i}"><div><strong>${o.t}</strong><small>${o.s}${o.x?' · '+o.x:''}</small></div><em>${o.k}</em></a>`).join(''):`<p>No matches for "${e.target.value.replace(/[<>&]/g,'')}". Try an artist, a genre or "signed".</p>`};
$('#q').onfocus=e=>e.target.dispatchEvent(new Event('input'));

// ---------- product shelves: <div data-shelf data-cat="music" data-filters data-limit="8" data-ids="a,b">
$$('[data-shelf]').forEach(el=>{const d=el.dataset,all=d.ids?d.ids.split(','):Object.keys(P).filter(k=>P[k].cat===d.cat);
  let sub='all',signed=false,sort='new';
  const grid=document.createElement('div');grid.className='grid';
  const render=()=>{let ids=all.filter(k=>(sub==='all'||P[k].g.includes(sub))&&(!signed||P[k].s));
    if(sort==='low')ids=[...ids].sort((a,b)=>P[a].p-P[b].p);if(sort==='high')ids=[...ids].sort((a,b)=>P[b].p-P[a].p);
    if(d.limit)ids=ids.slice(0,+d.limit);
    grid.innerHTML=ids.length?ids.map(prodCard).join(''):'<p class="empty" style="grid-column:1/-1">Nothing matches those filters yet.</p>';
    const c=el.querySelector('.fcount');if(c)c.textContent=ids.length+(ids.length===1?' item':' items')};
  if('filters' in d){const bar=document.createElement('div');bar.className='fbar';
    const hasSigned=all.some(k=>P[k].s);
    bar.innerHTML=`<div class="tabs"><button class="chip" aria-pressed="true" data-sub="all">All</button>${Object.entries(SUBS[d.cat]).map(([k,v])=>`<button class="chip" aria-pressed="false" data-sub="${k}">${v}</button>`).join('')}${hasSigned?'<button class="chip sigchip" aria-pressed="false" data-signed>✍ Signed only</button>':''}</div><div class="fright"><span class="fcount"></span><select aria-label="Sort"><option value="new">Newest</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>`;
    bar.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
      if('signed' in b.dataset){signed=!signed;b.setAttribute('aria-pressed',signed)}else{sub=b.dataset.sub;bar.querySelectorAll('[data-sub]').forEach(x=>x.setAttribute('aria-pressed',x===b))}render()};
    bar.querySelector('select').onchange=e=>{sort=e.target.value;render()};
    const want=new URLSearchParams(location.search).get('g');
    el.append(bar);if(want&&SUBS[d.cat][want]){sub=want;bar.querySelectorAll('[data-sub]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.sub===want))}}
  el.append(grid);render()});

// ---------- drop lists: <div data-drops="up|re" data-filters data-rail>
$$('[data-drops]').forEach(el=>{const d=el.dataset;let c='all';
  const list=document.createElement('div');list.className='rail' in d?'rail':'dgrid';
  const base=d.idx?d.idx.split(',').map(i=>SHOWS[d.drops][+i]):SHOWS[d.drops].filter(s=>!d.only||s.c===d.only);
  const render=()=>{list.innerHTML=base.filter(s=>c==='all'||s.c===c).slice(0,d.limit?+d.limit:99).map(showCard).join('')};
  if('filters' in d){const bar=document.createElement('div');bar.className='fbar';
    bar.innerHTML=`<div class="tabs">${[['all','All drops'],['music','Music'],['book','Books'],['beauty','Beauty & home']].map(([k,v],i)=>`<button class="chip" aria-pressed="${!i}" data-c="${k}">${v}</button>`).join('')}</div>`;
    bar.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;c=b.dataset.c;bar.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));render()};el.append(bar)}
  el.append(list);render()});
$$('[data-tab]').forEach(b=>b.onclick=()=>{$$('[data-tab]').forEach(x=>x.setAttribute('aria-selected',x===b));const r=$('#rail');r.innerHTML=SHOWS[b.dataset.tab].map(showCard).join('')});
if($('#rail'))$('#rail').innerHTML=SHOWS.up.map(showCard).join('');

// ---------- bundle builder
if($('#adds')){const BUNDLE=['bbs2cd','bbshat','bbsbadge','bbstee','bbssweater'];
  $('#adds').innerHTML=BUNDLE.map((id,i)=>{const p=P[id];return `<label class="add"><input type="checkbox" value="${id}" ${i<2?'checked':''}><img loading="lazy" alt="" src="${p.i}"><span><strong>${p.n}</strong><small>${p.s?'Signed by the band':'Official merch'}</small></span><em>${money(p.p)}</em></label>`}).join('');
  const bundle=()=>{const ids=$$('#adds input:checked').map(i=>i.value),t=ids.reduce((s,i)=>s+P[i].p,0);
    $('#bTotal').textContent=money(t);$('#bShipTxt').textContent=shipText(t);$('#bShipBar').style.width=Math.min(100,t/FREE*100)+'%';return ids};
  $('#adds').onchange=bundle;bundle();
  $('#bAdd').onclick=()=>{bundle().forEach(id=>{if(!cart.includes(id))cart.push(id)});draw();openCart()}}

// ---------- small behaviours
if($('#heroImg'))$('#heroImg').src=P.winter.i;
if($('#marquee'))$('#marquee').innerHTML=Array(2).fill(['Garth Brooks','Sheryl Crow','Randy Travis','The Doors','Andy Cohen','Debbie Gibson','Hilary Duff','Foreigner','Blackberry Smoke','Clutch','Jane Wiedlin','Elin Hilderbrand','Extreme','Tommy James'].map(n=>`<span>${n}</span><i>✦</i>`).join('')).join('');
$$('[data-form]').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.querySelector('.ok').textContent="You're on the list. (Concept demo: no email was collected.)";f.querySelector('input').value=''});
$$('.picks').forEach(p=>p.onclick=e=>{const b=e.target.closest('.pick');if(b)b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')});
$$('.genres .chip').forEach(c=>c.onclick=()=>location.href='signed-music.html?g='+c.dataset.g);
if(!$('.note'))$('#notesBtn').hidden=true;
$('#notesBtn').onclick=()=>{const on=document.body.classList.toggle('notes');$('#notesBtn').setAttribute('aria-pressed',on);store.set('tsl_notes',on)};
if(location.hash==='#notes'||store.get('tsl_notes',false))document.body.classList.add('notes'),$('#notesBtn').setAttribute('aria-pressed',true);
if($('#countdown')){const dropAt=new Date(2026,10,19,20,30);
  (function tick(){const d=dropAt-Date.now();if(d>0){const h=Math.floor(d/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);$('#countdown').textContent=h>47?'Thu Nov 19 · 8:30 PM':`Live in ${h}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;setTimeout(tick,1000)}else{$('#countdown').textContent='Replay available';$('.tag').textContent='Latest drop'}})()}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});
$$('.reveal').forEach(el=>io.observe(el));
// never leave on-screen content hidden if the observer does not fire
setTimeout(()=>$$('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('in')}),1500);

// ---------- demo accounts (no real authentication: a flag in this browser only)
$$('[data-login]').forEach(f=>f.onsubmit=e=>{e.preventDefault();store.set('tsl_user',f.dataset.login);location.href=f.dataset.next});
$$('[data-signout]').forEach(b=>b.onclick=()=>{store.set('tsl_user',null);location.href='index.html'});
$$('[data-switch]').forEach(g=>g.onclick=e=>{const b=e.target.closest('button');if(b)b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')!=='true')});
// seller sign up: three steps
if($('#wizard')){let step=0;const panes=$$('#wizard .pane'),dots=$$('#wizard .steps li');
  const go=(n,scroll=true)=>{step=n;panes.forEach((p,i)=>p.hidden=i!==n);dots.forEach((d,i)=>{d.classList.toggle('on',i===n);d.classList.toggle('done',i<n)});if(scroll)$('#wizard').scrollIntoView({block:'start'})};
  $('#wizard').onsubmit=e=>{e.preventDefault();if(step<panes.length-1)go(step+1);else{store.set('tsl_user','seller');location.href='seller-dashboard.html'}};
  $$('#wizard [data-back]').forEach(b=>b.onclick=()=>go(step-1));
  $$('#wizard .opts').forEach(o=>o.onclick=e=>{const b=e.target.closest('button');if(b){o.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b))}});
  go(0,false)}
