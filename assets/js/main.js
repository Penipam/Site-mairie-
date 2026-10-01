(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
document.documentElement.classList.add('js');
const U='https://www.boscherville.fr/fr/';
const ic={doc:"M6 3h9l3 3v15H6z M15 3v3h3 M9 11h6 M9 15h6",school:"M3 9l9-5 9 5-9 5z M7 11v5c3 2 7 2 10 0v-5",bin:"M4 7h16 M9 7V4h6v3 M6 7l1 14h10l1-14 M10 11v6 M14 11v6",
 hall:"M4 6h16v14H4z M4 10h16 M8 3v5 M16 3v5",fork:"M7 3v8 M5 3v5a2 2 0 0 0 4 0V3 M7 11v10 M16 3c-2 2-2 7 0 9v9",baby:"M12 4a3 3 0 1 1 0 6a3 3 0 1 1 0-6z M6 21c0-4 3-7 6-7s6 3 6 7",
 book:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z M4 19V5 M8 7h7",house:"M3 11l9-7 9 7 M5 10v10h14V10 M10 20v-6h4v6",people:"M8 8a3 3 0 1 1 0 6a3 3 0 1 1 0-6z M16 8a3 3 0 1 1 0 6a3 3 0 1 1 0-6z M2 21c0-3 3-5 6-5s6 2 6 5 M13 18c1-1.5 2.5-2 4-2 2.5 0 5 2 5 5",
 bus:"M5 4h14v13H5z M5 12h14 M8 17v3 M16 17v3",cols:"M3 21h18 M5 21V10 M19 21V10 M9 21V10 M15 21V10 M2 10l10-6 10 6z",map:"M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2z M9 4v14 M15 6v14",
 clock:"M12 3a9 9 0 1 1 0 18a9 9 0 1 1 0-18z M12 7v5l3 2",phone:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
 church:"M12 2v4 M10 4h4 M6 21V11l6-4 6 4v10 M3 21h18 M10 21v-5a2 2 0 0 1 4 0v5",news:"M4 5h13v14H6a2 2 0 0 1-2-2z M17 9h3v8a2 2 0 0 1-2 2 M7 9h7 M7 13h7",
 warn:"M12 3l9 16H3z M12 10v4 M12 17v.5",leaf:"M5 19C5 9 11 5 20 4c-1 9-5 15-15 15z M5 19l8-8",shop:"M4 9l1-5h14l1 5 M4 9h16v11H4z M9 20v-6h6v6",bed:"M3 18V7 M3 14h18v4 M21 14v-3a3 3 0 0 0-3-3h-7v6 M7 11a1.5 1.5 0 1 1 0-.01"};
const icon=k=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ic[k].split(' M').map((s,i)=>`<path d="${i?'M'+s:s}"/>`).join('')}</svg>`;

/* ---------- services (also the search index) ---------- */
const SV=[
 ['doc','Démarches administratives',"État civil, carte d'identité, passeport, recensement citoyen.",'rb/964862/demarches-administratives-111',['nouveau'],'papiers identite passeport naissance mariage deces etat civil recensement carte grise'],
 ['house','Urbanisme','Permis de construire, déclaration préalable, PLU.','',['travaux'],'permis construire declaration prealable plu cloture extension piscine abri'],
 ['map','Cadastre','Réorganisation du cadastre et plans parcellaires.','',['travaux'],'cadastre parcelle terrain'],
 ['warn','Risques majeurs','Information sur les risques industriels.','',['travaux','nouveau'],'risque industriel seveso alerte'],
 ['school','École Simone Veil','Inscriptions, vie de l’école.','rb/969490/ecole-simone-veil',['parents','nouveau'],'ecole inscription maternelle primaire classe'],
 ['fork','Cantine scolaire','Menus et fonctionnement.','rb/969581/cantine-scolaire-12',['parents'],'cantine repas menu restauration scolaire'],
 ['baby','Faire garder son enfant','Assistantes maternelles, accueil de loisirs.','rb/969542/faire-garder-son-enfant',['parents','nouveau'],'garde creche nounou assistante maternelle periscolaire centre de loisirs garderie'],
 ['book','Bibliothèque municipale','Prêts et animations.','rb/966175/bibliotheque-municipale-27',['parents','nouveau'],'bibliotheque livre lecture pret'],
 ['bin','Nos déchets','Collecte, tri, déchetteries, application MonTri.','rb/965018/nos-dechets',['nouveau'],'dechets poubelle tri collecte encombrants dechetterie verre montri'],
 ['hall','Location de salles','Réserver une salle communale.','rb/964992/location-de-salles-8',['nouveau'],'salle location fete anniversaire reservation'],
 ['people','Associations','Sport, culture, loisirs.','',['parents','nouveau'],'association sport club culture'],
 ['bus','Transports',"Bus et transport à la demande Filo'R.",'nw/1274873/717732/filor-comment-ca-marche',['nouveau','visiteurs'],'bus transport filor astuce rouen'],
 ['cols','Conseil municipal 2026','Élus, commissions, séances.','rb/2201708/conseil-municipal-2026-2',['nouveau'],'conseil municipal maire elus adjoints deliberation seance'],
 ['shop','Commerces et marchés','Commerçants, artisans, food trucks.','',['nouveau','visiteurs'],'commerce boulangerie marche artisan food truck restaurant'],
 ['church','Découvrir la commune',"L'abbaye, ses jardins, le manoir de l'Aumônerie.",'rb/939148/decouvrir-st-martin-de-boscherville',['visiteurs'],'abbaye visite jardins tourisme manoir templiers aumonerie patrimoine'],
 ['leaf','Randonnées et loisirs','Sentiers, parc aventure, centres équestres.','rb/939148/decouvrir-st-martin-de-boscherville',['visiteurs'],'randonnee balade foret roumare cheval equitation parc aventure'],
];
const PROFILES=[['tous','Tout voir'],['parents','Je suis parent'],['nouveau',"Je m'installe"],['travaux','Je construis ou rénove'],['visiteurs','Je visite']];
const sgrid=$('#sgrid');
sgrid.innerHTML=SV.map(([k,t,p,h,tags],i)=>`<a class="scard" data-tags="${tags.join(' ')}" href="${U+h}" target="_blank" rel="noopener">${icon(k)}<h3>${t}</h3><p>${p}</p><span class="arr" aria-hidden="true">↗</span></a>`).join('');
$('#profiles').innerHTML=PROFILES.map(([k,l],i)=>`<button class="prof" data-p="${k}" aria-pressed="${i===0}">${l}</button>`).join('');
$('#profiles').addEventListener('click',e=>{const b=e.target.closest('.prof');if(!b)return;
 $$('.prof').forEach(x=>x.setAttribute('aria-pressed',x===b));const p=b.dataset.p;let n=0;
 $$('.scard').forEach(c=>{const ok=p==='tous'||c.dataset.tags.split(' ').includes(p);c.hidden=!ok;c.classList.remove('show');if(ok){void c.offsetWidth;c.style.animationDelay=(n++*35)+'ms';c.classList.add('show')}})});

/* ---------- search ---------- */
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const IDX=[
 ...SV.map(([k,t,p,h,tags,kw])=>({k,t,d:p,c:'Service',h:U+h,kw})),
 {k:'clock',t:"Horaires de la mairie",d:"Lun., mar., jeu., ven. 15 h – 18 h · 1er samedi du mois 9 h – 12 h",c:'Mairie',h:'#semaine',kw:'horaires ouverture heure ouvert ferme samedi'},
 {k:'bin',t:"Horaires de la déchetterie",d:"Lun., mar., ven., sam. 9 h – 12 h / 14 h – 17 h 30 · mer. 9 h – 12 h",c:'Déchets',h:'#dechetterie',kw:'dechetterie decheterie horaires encombrants gravats dechets verts'},
 {k:'bin',t:"Jours de collecte",d:"Ordures ménagères le vendredi · recyclables un mercredi sur deux",c:'Déchets',h:'#dechetterie',kw:'collecte poubelle ordures menageres recyclables jaune calendrier'},
 {k:'hall',t:"Salle des fêtes",d:"500 € le week-end, réservée aux habitants",c:'Commune',h:'#vie-salle',kw:'salle des fetes foyer socio culturel location mariage'},
 {k:'school',t:"École Simone Veil",d:"147 élèves, 6 classes · 02 35 32 05 14",c:'Commune',h:'#vie-ecole',kw:'ecole horaires directrice classes'},
 {k:'warn',t:"Sapeurs-pompiers",d:"Nouvelle caserne route de Quevillon · urgence : 18 ou 112",c:'Commune',h:'#vie-pompiers',kw:'pompiers caserne sdis secours urgence incendie volontaire'},
 {k:'phone',t:"Contacter la mairie",d:"02 35 32 00 08 · mairie-st-martin@boscherville.fr",c:'Mairie',h:'#mairie',kw:'contact telephone email mail adresse rendez-vous maire'},
 {k:'church',t:"L'abbaye Saint-Georges",d:"Abbatiale romane du XIIe siècle, salle capitulaire, jardins",c:'Patrimoine',h:'#histoire',kw:'abbaye eglise abbatiale roman histoire'},
 {k:'news',t:"Journées européennes du Patrimoine",d:"Dans les jardins de l'abbaye Saint-Georges",c:'Actualité',h:U+'nw/1274873/2984841/journees-europeenne-du-patrimoine-1',kw:'jep patrimoine journees'},
 {k:'news',t:"Application MonTri",d:"Savoir quoi jeter, où et quand",c:'Actualité',h:U+'nw/1274873/732279/application-montri',kw:'montri application tri dechets'},
];
IDX.forEach(o=>o.n=norm(o.t+' '+o.d+' '+o.kw+' '+o.c));
const q=$('#q'),res=$('#results');let sel=-1,cur=[];
function render(v){const w=norm(v).trim().split(/\s+/).filter(Boolean);
 if(!w.length){res.hidden=true;cur=[];return}
 cur=IDX.map(o=>({o,s:w.reduce((a,x)=>a+(o.n.includes(x)?(norm(o.t).includes(x)?3:1):-9),0)})).filter(r=>r.s>0).sort((a,b)=>b.s-a.s).slice(0,6).map(r=>r.o);
 sel=cur.length?0:-1;res.hidden=false;
 res.innerHTML=cur.length?cur.map((o,i)=>`<li><a href="${o.h}" ${o.h[0]==='#'?'':'target="_blank" rel="noopener"'} class="${i===0?'sel':''}" style="animation-delay:${i*30}ms"><span class="ico">${icon(o.k)}</span><span class="t">${o.t}</span><span class="c">${o.c}</span><span class="d">${o.d}</span></a></li>`).join('')
 :`<li class="empty">Aucun résultat. Essayez « cantine », « permis » ou appelez le 02 35 32 00 08.</li>`}
if(innerWidth<560)q.placeholder='Que cherchez-vous ?';
q.addEventListener('input',()=>render(q.value));
q.addEventListener('keydown',e=>{const a=$$('#results a');if(!a.length)return;
 if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();sel=(sel+(e.key==='ArrowDown'?1:-1)+a.length)%a.length;a.forEach((x,i)=>x.classList.toggle('sel',i===sel))}
 if(e.key==='Enter'&&sel>=0){e.preventDefault();a[sel].click()}
 if(e.key==='Escape'){q.value='';render('')}});
res.addEventListener('click',e=>{if(e.target.closest('a[href^="#"]')){q.value='';render('')}});
$('#chips').innerHTML=['Horaires','Déchetterie','Cantine','Salle des fêtes','Permis de construire','Pompiers'].map(c=>`<button class="chip">${c}</button>`).join('');
$('#chips').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;q.value=b.textContent;render(q.value);q.focus()});

/* ---------- live status + week schedules ---------- */
const DAYS=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
const paris=()=>new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Paris'}));
const fh=h=>Number.isInteger(h)?`${h}\u00a0h`:`${Math.floor(h)}\u00a0h\u00a0${String(Math.round(h%1*60)).padStart(2,'0')}`;
const PLACES={
 mairie:{name:'Mairie',title:'Accueil du public',
  slots:d=>{const w=d.getDay(),m=d.getMonth();if([1,2,4,5].includes(w))return[[15,18]];if(w===6&&d.getDate()<=7&&m!==6&&m!==7)return[[9,12]];return[]},
  week:w=>[1,2,4,5].includes(w)?[[15,18]]:w===6?[[9,12]]:[],
  note:"Samedi : uniquement le premier du mois (ou le suivant s'il est férié), fermé en juillet et août. Madame le Maire et les adjoints reçoivent sur rendez-vous."},
 dech:{name:'Déchetterie',title:'Déchetterie de Saint-Martin-de-Boscherville',
  slots:d=>{const w=d.getDay();if([1,2,5,6].includes(w))return[[9,12],[14,17.5]];if(w===3)return[[9,12]];return[]},
  note:"Horaires en vigueur depuis le 2 avril 2024 (Métropole Rouen Normandie). Pneus et amiante : déchetterie de Villers-Écalles uniquement. Les collectes sont décalées d'un jour les semaines avec un jour férié."}
};
PLACES.dech.week=w=>PLACES.dech.slots({getDay:()=>w});
function statusOf(P){const now=paris(),h=now.getHours()+now.getMinutes()/60;
 for(const [a,b] of P.slots(now))if(h>=a&&h<b)return{open:true,txt:`${P.name} ouverte · jusqu'à ${fh(b)}`};
 for(let i=0;i<45;i++){const d=new Date(now);d.setDate(now.getDate()+i);for(const [a] of P.slots(d)){if(i===0&&a<=h)continue;
  const when=i===0?"aujourd'hui":i===1?'demain':DAYS[d.getDay()].toLowerCase()+(i>6?' '+d.getDate():'');return{open:false,txt:`${P.name} fermée · ouvre ${when} à ${fh(a)}`}}}
 return{open:false,txt:`${P.name} fermée`}}
const H0=8,H1=19,pos=h=>((h-H0)/(H1-H0)*100).toFixed(2)+'%';
let cur_s='mairie';
function paintPill(el,k){const s=statusOf(PLACES[k]);el.classList.toggle('open',s.open);el.querySelector('span').textContent=s.txt}
function paint(){
 $$('.status[data-s]').forEach(el=>paintPill(el,el.dataset.s));
 const P=PLACES[cur_s];paintPill($('#schedStatus'),cur_s);
 $('#schedTitle').textContent=P.title;$('#schedNote').textContent=P.note;
 const now=paris(),td=now.getDay(),hn=now.getHours()+now.getMinutes()/60;
 const monday=new Date(now);monday.setDate(now.getDate()-((td+6)%7));
 $('#sched').innerHTML=[1,2,3,4,5,6,0].map((w,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);
  const sl=P.week(w);const dim=cur_s==='mairie'&&w===6&&!P.slots(d).length;const sat=cur_s==='mairie'&&w===6;
  const bars=sl.map(([a,b])=>`<span class="slot ${sat?'sat':''}" style="left:${pos(a)};width:calc(${pos(b)} - ${pos(a)});animation-delay:${i*50}ms;${dim?'opacity:.35':''}">${fh(a)} – ${fh(b)}</span>`).join('');
  const needle=w===td&&hn>=H0&&hn<=H1?`<span class="now" style="left:${pos(hn)}" data-t="${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}"></span>`:'';
  const lbl=sat?(dim?'Samedi':'Sam. (ouvert)'):DAYS[w];
  return `<div class="srow ${w===td?'today':''}"><span class="dn">${innerWidth<480?DAYS[w].slice(0,3)+'.':lbl}</span><div class="track">${bars}${needle}${sl.length?'':'<span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:13px;color:var(--ink-2)">Fermé</span>'}</div></div>`}).join('');
 $('#axis').innerHTML=[8,10,12,14,16,18].map(h=>`<span style="left:${pos(h)}">${h}h</span>`).join('');
}
function setTab(k){cur_s=k;$$('.tab').forEach(t=>t.setAttribute('aria-selected',t.dataset.s===k));$('#sideMairie').hidden=k!=='mairie';$('#sideDech').hidden=k!=='dech';paint()}
$$('.tab').forEach(t=>t.addEventListener('click',()=>setTab(t.dataset.s)));
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#dechetterie"]');if(a)setTab('dech');const b=e.target.closest('a[href="#semaine"]');if(b&&b.dataset.s==='mairie')setTab('mairie')});
paint();setInterval(paint,60000);

/* ---------- news ---------- */
const art={
 identite:`<svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice"><rect width="450" height="300" fill="#e8eae2"/><text x="70" y="178" font-family="Marcellus,Georgia,serif" font-size="110" fill="#1c2830">Aa</text><g><rect x="250" y="90" width="44" height="120" rx="6" fill="#2d5a44"/><rect x="302" y="90" width="44" height="120" rx="6" fill="#b04d47"/><rect x="354" y="90" width="44" height="120" rx="6" fill="#c68a2c"/></g><text x="72" y="222" font-family="DM Mono,monospace" font-size="12" letter-spacing="3" fill="#56626a">CHARTE GRAPHIQUE</text></svg>`,
 jep:`<svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Journées européennes du Patrimoine"><rect width="450" height="300" fill="#e7dcc4"/><g transform="translate(225 150) scale(1.5) translate(-230 -145)"><g fill="none" stroke="#1c2830" stroke-width="5" stroke-linecap="round"><path d="M150 168V132a24 24 0 0 1 48 0v36z"/><path d="M198 150H310"/><path d="M280 150v18M300 150v12"/></g><circle cx="174" cy="146" r="6" fill="#c68a2c"/></g></svg>`,
 montri:`<svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice"><rect width="450" height="300" fill="#e8eae2"/><rect x="175" y="40" width="100" height="200" rx="16" fill="#1c2830"/><rect x="185" y="58" width="80" height="160" rx="6" fill="#f3f4ef"/>${[['#e0b12e',75],['#3d6ca6',115],['#2d5a44',155]].map(([c,y])=>`<rect x="197" y="${y}" width="56" height="28" rx="5" fill="${c}"/>`).join('')}<path d="M80 170h50 M90 170l4 60h22l4-60 M96 170v-8h18v8" fill="none" stroke="#2d5a44" stroke-width="5"/><path d="M320 170h50 M330 170l4 60h22l4-60 M336 170v-8h18v8" fill="none" stroke="#c68a2c" stroke-width="5"/></svg>`,
 filor:`<svg viewBox="0 0 450 300" preserveAspectRatio="xMidYMid slice"><rect width="450" height="300" fill="#b8d4e6"/><rect y="220" width="450" height="80" fill="#7a8a86"/><rect y="252" width="450" height="6" fill="#f3f4ef" opacity=".7"/><g transform="translate(115 130)"><rect width="210" height="95" rx="16" fill="#3d6ca6"/><rect x="14" y="16" width="160" height="34" rx="6" fill="#dfeaf3"/><rect x="186" y="16" width="14" height="60" rx="3" fill="#dfeaf3"/><circle cx="48" cy="98" r="17" fill="#1c2830"/><circle cx="165" cy="98" r="17" fill="#1c2830"/></g></svg>`};
$('#news').innerHTML=[
 ['identite','La commune','Nouvelle identité visuelle',"La commune se dote d'une identité graphique qui reflète son caractère et son patrimoine.",'2992706/identite-visuelle'],
 ['jep','Patrimoine','Journées européennes du Patrimoine',"Rendez-vous dans les jardins de l'abbaye Saint-Georges.",'2984841/journees-europeenne-du-patrimoine-1'],
 ['montri','Environnement','Application MonTri',"Une application pour savoir quoi jeter, où et quand.",'732279/application-montri'],
 ['filor','Transports',"Filo'R, comment ça marche ?","Le transport à la demande, mode d'emploi.",'717732/filor-comment-ca-marche']
].map(([a,k,t,p,h])=>`<a class="ncard rv" href="${U}nw/1274873/${h}" target="_blank" rel="noopener"><div class="nimg">${art[a]}</div><span class="k">${k}</span><h3>${t}</h3><p>${p}</p></a>`).join('');

/* ---------- full-bleed slides ---------- */
/* count-up */
const counters=$$('[data-count]');counters.forEach(c=>c.dataset.done='');
function countFrame(){counters.forEach(c=>{if(c.dataset.done)return;if(c.getBoundingClientRect().top<innerHeight*.9){c.dataset.done=1;const to=+c.dataset.count,t0=performance.now();
 const step=t=>{const k=clamp((t-t0)/1400),v=Math.round(to*(1-Math.pow(1-k,3)));c.textContent=v.toLocaleString('fr-FR');if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}})}

/* ---------- history ruler ---------- */
const TL=[
 ["−50","Ier s. av. J.-C.","Un sanctuaire gaulois","Les fouilles ont mis au jour un lieu de culte gaulois, puis gallo-romain, sous l'actuelle abbaye."],
 ["VIIe","VIIe siècle","Une chapelle funéraire","Les premiers chrétiens bâtissent une chapelle entourée de sépultures sur les fondations antiques."],
 ["1050","Vers 1050","La collégiale","Raoul de Tancarville, chambellan de Guillaume le Conquérant, fonde une collégiale dédiée à saint Georges."],
 ["1114","1114","L'abbaye bénédictine","Son fils Guillaume y installe des moines venus de Saint-Évroult : la collégiale devient abbaye."],
 ["XIIe","XIIe siècle","L'abbatiale romane","L'église que l'on visite aujourd'hui est achevée. Elle n'a presque pas été modifiée depuis."],
 ["1791","1791","L'église du village","À la Révolution, l'abbatiale devient église paroissiale, ce qui la sauve de la démolition."]
];
const ruler=$('#ruler'),bar=$('#bar'),era=$('#era');let hi=0;
ruler.insertAdjacentHTML('beforeend',TL.map((e,i)=>`<button data-i="${i}">${e[1]}</button>`).join(''));
function showEra(i,first){hi=(i+TL.length)%TL.length;const e=TL[hi];const bs=$$('#ruler button');
 bs.forEach((b,j)=>b.classList.toggle('on',j===hi));
 const b=bs[hi];bar.style.width=b.offsetWidth+'px';bar.style.transform=`translateX(${b.offsetLeft}px)`;
 const fill=()=>{$('#eraBig').textContent=e[0];$('#eraT').textContent=e[2];$('#eraP').textContent=e[3];era.classList.remove('out')};
 if(first)fill();else{era.classList.add('out');setTimeout(fill,320)}}
ruler.addEventListener('click',e=>{const b=e.target.closest('button');if(b)showEra(+b.dataset.i)});
$('#hprev').onclick=()=>showEra(hi-1);$('#hnext').onclick=()=>showEra(hi+1);
showEra(0,true);addEventListener('resize',()=>showEra(hi,true));

/* ---------- reveals + header ---------- */
const rvs=$$('.rv,.mask');rvs.forEach(el=>{if(el.getBoundingClientRect().top>innerHeight*.95)el.classList.add('pre')});
const top=$('#top'),hero=$('.hero');
function onScroll(){const vh=innerHeight;rvs.forEach(el=>{if(el.classList.contains('pre')&&el.getBoundingClientRect().top<vh*.88)el.classList.remove('pre')});
 top.classList.toggle('solid',hero.getBoundingClientRect().bottom<70)}
addEventListener('scroll',()=>{onScroll();countFrame()},{passive:true});onScroll();countFrame();

/* menu + copy */
const mb=$('#menuBtn'),nav=$('#nav');
mb.addEventListener('click',()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
$$('.copy[data-copy]').forEach(b=>b.addEventListener('click',()=>{const el=document.getElementById(b.dataset.copy),t=el.textContent.trim(),o=b.textContent;
 const ok=()=>{b.textContent='Copié';setTimeout(()=>b.textContent=o,1600)};
 const fb=()=>{const s=getSelection(),rg=document.createRange();rg.selectNodeContents(el);s.removeAllRanges();s.addRange(rg)};
 navigator.clipboard?navigator.clipboard.writeText(t).then(ok,fb):fb()}));
})();
