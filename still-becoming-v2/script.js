(() => {
  'use strict';
  const fragments = [
    {
      id:'vlog', type:'video', title:'The light before the ending',
      file:'untitled-3-final-final2.mp4', src:'assets/video/unfinished-vlog.mp4',
      date:'2025-03-14', stoppedAt:'0:26 / the ending is still open', status:'ROUGH CUT · V03',
      reason:'I never found the opening shot.', todo:'find a way in', thought:'a beginning, somewhere',
      annotationTitle:'The part I came back for',
      annotation:'The light on the water in the third clip. Nothing I edited since is as good.',
      possibility:'Maybe a two-minute film with no voiceover. Maybe just these 26 seconds, left alone.',
      captions:'', description:''
    },
    {
      id:'piano', type:'audio', title:'Four bars that feel like a question',
      file:'piano-idea-003.m4a', src:'assets/audio/unfinished-piano-track.m4a',
      date:'2025-08-21', stoppedAt:'0:34 / bar 9 is missing', status:'MELODY STUDY · TAKE 03',
      reason:'I ran out of ending.', todo:'leave room for bar 9', thought:'no answer, yet',
      annotationTitle:'Listen to the space after it',
      annotation:'Four bars that feel like a question. I kept looking for the chord that would make them sound certain.',
      possibility:'Someone else could answer it. Or nobody does.', description:''
    },
    {
      id:'plog', type:'image', title:'A street I have not put in order',
      file:'plog-selects-v0.jpg', src:'assets/images/unfinished-plog.jpg',
      alt:'An unfinished collage of three portraits among green leaves, white tulips, and purple flowers.',
      date:'2025-06-30', stoppedAt:'photograph 7 / sequence unresolved', status:'CONTACT SHEET · V00',
      reason:'Collected everything, arranged nothing.', todo:'find the first image', thought:'start anywhere',
      annotationTitle:'What the photograph cannot keep',
      annotation:'Photo 3. I still remember the smell of that street.',
      possibility:'A loose row of pictures with no fixed order might be enough.'
    },
    {
      id:'poster', type:'image', title:'A shape waiting for its sentence',
      file:'poster-final-final2.png', src:'assets/images/unfinished-poster.png',
      alt:'A cream bakery poster draft with handwritten Bread lettering, an illustrated pastry, and an empty QR-code placeholder.',
      date:'2025-10-09', stoppedAt:'layer 14 / headline undecided', status:'LAYOUT STUDY · V02',
      reason:"I couldn't decide what the headline should say.", todo:'headline', thought:'the shape was right',
      annotationTitle:'The first decision survived',
      annotation:'The big shape in the upper left. It was the first decision and it was right.',
      possibility:'The type can move again. The shape does not need to apologise for being here.'
    },
    {
      id:'wireframe', type:'prototype', title:'An app that starts with one question',
      file:'app-wireframe-v0.html', src:'assets/html/unfinished-app-wireframe.html',
          ready:true,
      date:'2025-11-18', stoppedAt:'screen 3 / screens 4–9 unbuilt', status:'PROTOTYPE · V00',
      reason:'The idea outgrew the wireframe.', todo:'what happens next?', thought:'one question is enough',
      annotationTitle:'Before it became complicated',
      annotation:'The way the first screen asks only one question. I lost that simplicity when I started adding everything else.',
      possibility:'It might become an app. It can also remain a useful sketch.'
    },
    {
      id:'doc', type:'text', title:'A promise to come back',
      file:'untitled-essay-v0.txt', date:'2026-01-05', stoppedAt:'page 2 / mid-sentence', status:'WORKING DOCUMENT · V00',
      reason:'I lost the thread.', todo:'find a better example', thought:'the sentence can wait',
      annotationTitle:"The line I couldn't write twice",
      annotation:"The sentence about the promise. I can't write it again in quite the same way.",
      possibility:'Rewritten, borrowed from, or left exactly here.',
      document:{ title:'On keeping things', opening:'An archive is not a place.', deleted:'An archive is a shelf.',
        continuation:'It is a promise to come back, and the promise is',
        note:'[find a better example]', ending:'The second thing I wanted to say is that nothing gets finished because' }
    }
  ];

  // Each gallery is one fragment: one favorite and one shared set of thoughts.
  fragments.push(...[
  {
    "id": "rock-museum-unity",
    "type": "gallery",
    "title": "Rock Museum \u2014 Unity",
    "status": "UNFINISHED",
    "images": [
      {
        "src": "assets/images/unfinished-rock-museum-unity.png",
        "alt": "Exterior of a virtual rock museum built from stacked shipping containers."
      },
      {
        "src": "assets/images/unfinished-rock-museum-unity1.png",
        "alt": "A curved museum gallery with framed musicians and seating."
      },
      {
        "src": "assets/images/unfinished-rock-museum-unity2.png",
        "alt": "A virtual exhibition of drums, guitars, and other instruments."
      }
    ]
  },
  {
    "id": "music-board",
    "type": "gallery",
    "title": "Music Board",
    "status": "UNFINISHED",
    "images": [
      {
        "src": "assets/images/unfinished-music-board.JPG",
        "alt": "A group gathered around the music board in a classroom."
      },
      {
        "src": "assets/images/unfinished-music-board1.JPG",
        "alt": "A close view of the music board circuit and multicolored wires."
      },
      {
        "src": "assets/images/unfinished-music-board2.JPG",
        "alt": "People testing the long cardboard music board together."
      }
    ]
  },
  {
    "id": "rulebook",
    "type": "pdf",
    "title": "One World Left \u2014 Rulebook",
    "status": "UNFINISHED",
    "src": "assets/documents/unfinished-rulebook.pdf"
  }
]);

const documentParagraphs = ["Conducting the Underground Symphony", "Concept Statement", "This project is an interactive simulation of the Shanghai metro system as a living musical ecosystem, built around my own memories. Five metro lines \u2014 Line 1, 2, 10, 11, and 13 \u2014 run continuously on screen. Each line is tuned to one note of the Chinese pentatonic scale. Trains move along their routes, and every time a train arrives at a station, it sounds its note. When it arrives at a memory station \u2014 a place that carries a personal memory for me \u2014 a photograph surfaces on screen, and a caption describes what happened there.", "The project matters to me because I grew up taking these lines. The metro was how I got to school trips, to the Expo, to my first internship, to the theater on weekends. But those experiences are invisible inside the system. No map shows where a memory lives. This piece tries to make that visible: to ask what a city sounds like when it runs not just on electricity and schedules, but on all the accumulated experience of its passengers.", "Code expresses this idea by running the system generatively. I do not place the sounds manually. The trains move on their own, the notes emerge from the logic of arrivals, and the photographs appear because the system crosses a threshold. The memories are embedded in the rules, not drawn by hand."];
  // Retain stable IDs and the original storage key so previous favorites survive.
  const $ = id => document.getElementById(id);
  const KEY = 'still-becoming-v2';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const el = (tag, text, className) => {
    const n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    if (className) n.className = className;
    return n;
  };
  const labels = {video:'video',audio:'audio',image:'image',prototype:'interactive prototype',text:'writing',gallery:'image series',pdf:'PDF document'};
  const doc = fragments.find(f => f.id === 'doc');
  Object.assign(doc,{title:documentParagraphs[0],file:'unfinished-project.docx',src:'assets/documents/unfinished-project.docx'});
  Object.assign(fragments.find(f => f.id === 'wireframe'),{title:'Playlist Copilot',file:'unfinished-app-wireframe.html'});
  fragments.forEach(f => { if (f.src) f.file = f.src.split('/').pop(); });
  let state = {shelf:[], notes:{}, visits:{}, deskNotes:{}};
  let storageOK = true;
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (saved && typeof saved === 'object') {
      state = {...state,...saved};
      state.shelf = Array.isArray(saved.shelf) ? saved.shelf.filter(id => fragments.some(f => f.id === id)) : [];
      for (const key of ['notes','visits','deskNotes']) {
        if (!state[key] || typeof state[key] !== 'object' || Array.isArray(state[key])) state[key] = {};
      }
    }
  } catch { storageOK = false; }
  let current = null, activeNote = null, mode = 'text', unfolding = false, feedbackTimer;
  function feedback(text, persistent = false) {
    clearTimeout(feedbackTimer); $('feedback').textContent = text;
    if (!persistent) feedbackTimer = setTimeout(() => { $('feedback').textContent = ''; }, 3800);
  }
  function save() {
    try { localStorage.setItem(KEY,JSON.stringify(state)); storageOK = true; }
    catch { storageOK = false; feedback('Browser storage is unavailable. Changes will last for this visit only.',true); }
  }
  const cutouts = new Map();
  // Make only edge-connected white matte transparent; paper highlights remain intact.
  // Supplied files stay untouched. Results are cached transparent PNGs in memory.
  async function cutout(src) {
    if (cutouts.has(src)) return cutouts.get(src);
    const promise = (async () => {
      const img = new Image(); img.src = window.paperballSources?.[src] || src; await img.decode();
      const canvas = document.createElement('canvas'); canvas.width=img.naturalWidth; canvas.height=img.naturalHeight;
      const ctx = canvas.getContext('2d',{willReadFrequently:true}); ctx.drawImage(img,0,0);
      try {
        const pixels=ctx.getImageData(0,0,canvas.width,canvas.height), d=pixels.data;
        if(d.some((value,index)=>index%4===3 && value===0)) return src;
        const w=canvas.width,h=canvas.height,visited=new Uint8Array(w*h), queue=new Int32Array(w*h);
        let head=0,tail=0;
        function add(p) {
          if(p<0 || p>=w*h || visited[p]) return;
          visited[p]=1; const k=p*4;
          if(d[k+3]<12 || (d[k]>239 && d[k+1]>239 && d[k+2]>239)) queue[tail++]=p;
        }
        for(let x=0;x<w;x++){add(x);add((h-1)*w+x);}
        for(let y=0;y<h;y++){add(y*w);add(y*w+w-1);}
        while(head<tail){const p=queue[head++];d[p*4+3]=0;if(p%w)add(p-1);if(p%w<w-1)add(p+1);add(p-w);add(p+w);}
        // Film perforations are intentional transparent openings.
        if(src.includes('film_strip')) for(let i=0;i<d.length;i+=4) if(d[i]>239 && d[i+1]>239 && d[i+2]>239)d[i+3]=0;
        ctx.putImageData(pixels,0,0);return canvas.toDataURL('image/png');
      } catch { return src; } // Direct file previews still work without canvas access.
    })().catch(() => src);
    cutouts.set(src,promise); return promise;
  }
  async function decorateImage(img,src) {img.src=await cutout(src);}
  document.querySelectorAll('[data-cutout]').forEach(img => decorateImage(img,img.getAttribute('src')));
  let drawerTimer, drawerFrame=1;
  const drawer=$('shelfBtn').querySelector('img');
  const drawerSources=Array.from({length:6},(_,i)=>cutout(`assets/drawer${i+1}.png`));
  $('shelfBtn').addEventListener('pointerenter',async()=>{
    if(reduced.matches)return; const sources=await Promise.all(drawerSources);clearInterval(drawerTimer);
    drawerTimer=setInterval(()=>{drawerFrame=Math.min(6,drawerFrame+1);drawer.src=sources[drawerFrame-1];if(drawerFrame===6)clearInterval(drawerTimer);},110);
  });
  $('shelfBtn').addEventListener('pointerleave',async()=>{clearInterval(drawerTimer);drawerFrame=1;drawer.src=await drawerSources[0];});
  const frames = Array.from({length:5},(_,i) => cutout(`assets/paperball${i+1}.png`));
  frames[0].then(async src => {
    $('paperFrame').src=src;
    await $('paperFrame').decode();
    $('unfold').classList.add('paper-ready');
  });
  // Intro sound is trimmed during playback; the original MP3 remains unchanged.
  const introSound = $('unfoldSound');
  const INTRO_SOUND = { duration: 6800, fadeOut: 1600, fadeIn: 100, volume: 0.65 };
  let soundFrame = 0, soundStopTimer = 0, soundRun = 0;
  function stopIntroSound() {
    soundRun++;
    cancelAnimationFrame(soundFrame);
    clearTimeout(soundStopTimer);
    introSound.pause();
    introSound.volume = 0;
  }
  function startIntroSound() {
    stopIntroSound();
    // The shortened reduced-motion intro should not leave a longer sound behind.
    if (reduced.matches || document.hidden) return;
    const run = soundRun;
    const started = performance.now();
    introSound.currentTime = 0;
    introSound.volume = 0;
    // Start inside the click handler so browsers permit user-initiated playback.
    introSound.play().then(() => {
      if (run !== soundRun || $('intro').hidden) introSound.pause();
    }).catch(() => { if (run === soundRun) stopIntroSound(); });
    function envelope(now) {
      if (run !== soundRun) return;
      const elapsed = now - started;
      if (elapsed >= INTRO_SOUND.duration || document.hidden || $('intro').hidden) {
        stopIntroSound(); return;
      }
      const fadeIn = Math.min(1, elapsed / INTRO_SOUND.fadeIn);
      const remaining = Math.min(1, (INTRO_SOUND.duration - elapsed) / INTRO_SOUND.fadeOut);
      // Smoothstep reaches silence gently, without an abrupt edge at the cutoff.
      const fadeOut = remaining * remaining * (3 - 2 * remaining);
      introSound.volume = INTRO_SOUND.volume * fadeIn * fadeOut;
      soundFrame = requestAnimationFrame(envelope);
    }
    soundFrame = requestAnimationFrame(envelope);
    // A wall-clock cutoff also applies if rendering is delayed or backgrounded.
    soundStopTimer = setTimeout(() => {
      if (run === soundRun) stopIntroSound();
    }, INTRO_SOUND.duration);
  }
  reduced.addEventListener('change', event => { if (event.matches) stopIntroSound(); });
  const delay = ms => new Promise(resolve => setTimeout(resolve,ms));
  async function enter() {
    if(unfolding)return; unfolding=true;
    startIntroSound();
    $('unfold').disabled=true; $('intro').classList.add('unfolding');
    const sources=await Promise.all(frames);
    for(let i=1;i<sources.length;i++) {
      if(reduced.matches){$('paperFrame').src=sources[4];break;}
      $('paperNext').src=sources[i]; await $('paperNext').decode().catch(()=>{});
      const next=$('paperNext').animate([{opacity:0,transform:'translate(-50%,-50%) scale(.96)'},{opacity:1,transform:'translate(-50%,-50%) scale(1)'}],{duration:1150,easing:'ease-in-out',fill:'forwards'});
      const previous=$('paperFrame').animate([{opacity:1},{opacity:0}],{duration:1150,easing:'ease-in-out',fill:'forwards'});
      await next.finished;
      $('paperFrame').src=sources[i]; await $('paperFrame').decode().catch(()=>{});
      next.cancel(); previous.cancel(); await delay(180);
    }
    await delay(reduced.matches ? 50 : 700);
    $('intro').classList.add('leaving'); await delay(reduced.matches ? 0 : 950);
    stopIntroSound();
    $('intro').hidden=true; $('desktop').hidden=false; $('desktop').classList.add('desktop-enter');
    route(); $('app').focus({preventScroll:true});
    if(!storageOK) feedback('Browser storage is unavailable. Changes will last for this visit only.',true);
  }
  $('unfold').addEventListener('click',enter);
  function pick() {
    const pool=fragments.filter(f => f.id!==current?.id);
    const weights=pool.map(f => 1/Math.sqrt(1+(Number(state.visits[f.id]?.count)||0)));
    let ticket=Math.random()*weights.reduce((a,b)=>a+b,0);
    return pool.find((f,i)=>(ticket-=weights[i])<0)||pool[pool.length-1];
  }
  function stopMedia(){stopIntroSound();document.querySelectorAll('video,audio').forEach(m=>m.pause());}
  function showFragment(f) {
    stopMedia(); current=f;
    history.replaceState(null,'',`#${f.id}`);
    state.visits[f.id]={count:(Number(state.visits[f.id]?.count)||0)+1,at:Date.now()}; save();
    $('meta').replaceChildren();
    const rows=[['title',f.title],['type',labels[f.type]],['status',f.status.toLowerCase()],['last touched',f.date ? new Intl.DateTimeFormat('en',{dateStyle:'medium'}).format(new Date(f.date+'T12:00:00')) : null],['what I liked about it',f.annotation],['why it stopped',f.reason]];
    for(const [label,value] of rows){if(!value)continue;const row=el('div');row.append(el('dt',label),el('dd',value,label==='title'?'title':''));$('meta').append(row);}
    renderMedia(f); renderNotes(); updateFavorite();
    $('announcement').textContent=`Surfaced: ${f.title}. ${labels[f.type]}.`;
  }
  function route(){showFragment(fragments.find(f=>f.id===location.hash.slice(1))||pick());}
  function ornament(src,className){const img=el('img',undefined,`decor ${className}`);img.alt='';img.src=`assets/${src}`;decorateImage(img,img.src);$('decorations').append(img);}
  function renderMedia(f) {
    const work=$('work');work.replaceChildren();$('decorations').replaceChildren();
    work.className=`work arriving${f.type==='audio'?' is-audio':''}`;
    let media;
    if(f.type==='gallery') {
      work.append(renderGallery(f));
    } else if(f.type==='pdf') {
      work.append(renderPaperDocument(f));
    } else if(f.type==='image') {media=el('img');media.src=f.src;media.alt=f.alt;work.append(media);}
    else if(f.type==='audio') {
      const wrap=el('div',undefined,'audio-fragment');const cassette=el('img');cassette.src='assets/cassette_tape.png';cassette.alt='';
      media=el('audio');wrap.append(cassette,media);work.append(wrap);
    } else if(f.type==='video') {media=el('video');media.playsInline=true;work.append(media);}
    else if(f.type==='prototype') {
      const frame=el('iframe');frame.title=f.title;frame.src=f.src;frame.setAttribute('sandbox','allow-scripts');work.append(frame);
    } else {
      const paper=el('article',undefined,'document');paper.append(el('h2',documentParagraphs[0]));
      documentParagraphs.slice(1).forEach(p=>paper.append(el('p',p)));
      const link=el('a','unfinished-project.docx');link.href=f.src;link.download='unfinished-project.docx';paper.append(link);work.append(paper);
    }
    if(media && ['audio','video'].includes(f.type)){media.controls=true;media.preload='metadata';media.src=f.src;media.setAttribute('aria-label',f.title);}
    if(media)media.addEventListener('error',()=>{const p=el('p',`Could not load ${f.file}.`,'document');media.replaceWith(p);},{once:true});
    const index=fragments.indexOf(f);
    if(f.type==='video') {
      const variant=f.id==='vlog'?3:2;ornament(`film_strip_${variant}_up.png`,'up');ornament(`film_strip_${variant}_down.png`,'down');
    } else if(f.id==='plog') {ornament('film_strip_1_left.png','left');ornament('film_strip_1_right.png','right');}
    if(f.type!=='audio') ornament(['beige_masking_tape.png','masking_tape.png','grid_masking_tape.png','white_masking_tape.png'][index%4],'tape');
  }
  // Render exported PDF pages directly, avoiding the browser's PDF viewer chrome.
  function renderPaperDocument(f) {
    const wrap=el('div',undefined,'pdf-fragment');
    const pages=el('div',undefined,'paper-pages');
    pages.tabIndex=0;pages.setAttribute('role','region');
    pages.setAttribute('aria-label',`${f.title}: scroll through 12 pages`);
    const thumbnails=el('div',undefined,'paper-thumbnails');
    thumbnails.setAttribute('role','group');thumbnails.setAttribute('aria-label','Rulebook pages');
    const sheets=[],buttons=[];
    const pageSizes=[[1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600], [1141, 1600]];
    function markPage(index) {
      buttons.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    }
    function goToPage(index) {
      const top=sheets[index].offsetTop-sheets[0].offsetTop;
      pages.scrollTo({top,behavior:reduced.matches?'instant':'smooth'});
      markPage(index);
    }
    for(let index=0;index<12;index++) {
      const number=index+1;
      const src=`assets/documents/rulebook-pages/page-${String(number).padStart(2,'0')}.jpg`;
      const sheet=el('figure',undefined,'paper-page');
      const image=el('img');image.src=src;image.alt=`${f.title}, page ${number}`;
      image.decoding='async';image.loading=index===0?'eager':'lazy';
      // Reserve each page's true proportions so thumbnail targets do not move while loading.
      [image.width,image.height]=pageSizes[index];
      sheet.append(image,el('figcaption',String(number)));pages.append(sheet);sheets.push(sheet);
      const button=el('button');button.type='button';button.setAttribute('aria-label',`Go to page ${number}`);
      const thumb=el('img');thumb.src=src;thumb.alt='';thumb.loading='lazy';
      button.append(thumb,el('span',String(number)));
      button.addEventListener('click',()=>goToPage(index));
      button.addEventListener('keydown',event=>{
        if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
        event.preventDefault();
        const next=event.key==='Home'?0:event.key==='End'?11:Math.max(0,Math.min(11,index+(event.key==='ArrowRight'?1:-1)));
        buttons[next].focus();goToPage(next);
      });
      thumbnails.append(button);buttons.push(button);
    }
    pages.addEventListener('scroll',()=>{
      const origin=sheets[0].offsetTop;
      let nearest=0;
      sheets.forEach((sheet,index)=>{if(sheet.offsetTop-origin<=pages.scrollTop+pages.clientHeight/2)nearest=index;});
      markPage(nearest);
    },{passive:true});
    const link=el('a','unfinished-rulebook.pdf');link.href=f.src;link.target='_blank';link.rel='noopener';
    wrap.append(pages,thumbnails,link);markPage(0);return wrap;
  }
  function renderGallery(f) {
    const gallery=el('div',undefined,'fragment-gallery');
    const figure=el('figure');
    const image=el('img');image.decoding='async';
    const caption=el('figcaption');caption.setAttribute('aria-live','polite');
    const error=el('p',undefined,'gallery-error');error.hidden=true;
    image.addEventListener('error',()=>{error.hidden=false;error.textContent='Could not load this image.';});
    figure.append(image,caption,error);
    const thumbnails=el('div',undefined,'gallery-thumbnails');
    thumbnails.setAttribute('role','group');thumbnails.setAttribute('aria-label',`Images in ${f.title}`);
    function select(index) {
      const item=f.images[index];error.hidden=true;image.src=item.src;image.alt=item.alt;
      caption.textContent=`${index+1} / ${f.images.length}`;
      [...thumbnails.children].forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
    }
    f.images.forEach((item,index)=>{
      const button=el('button');button.type='button';
      button.setAttribute('aria-label',`View image ${index+1}: ${item.alt}`);
      const thumb=el('img');thumb.src=item.src;thumb.alt='';thumb.loading='lazy';
      button.append(thumb);button.addEventListener('click',()=>select(index));
      button.addEventListener('keydown',event=>{
        const keys={ArrowRight:1,ArrowLeft:-1,Home:-index,End:f.images.length-1-index};
        if(!(event.key in keys))return;event.preventDefault();
        const next=(index+keys[event.key]+f.images.length)%f.images.length;
        select(next);thumbnails.children[next].focus();
      });
      thumbnails.append(button);
    });
    gallery.append(figure,thumbnails);select(0);return gallery;
  }
  function updateFavorite(){const kept=state.shelf.includes(current?.id);$('keepBtn').textContent=kept?'added to favorites':'add to favorite';$('keepBtn').setAttribute('aria-pressed',String(kept));$('shelfCount').textContent=state.shelf.length;}
  $('keepBtn').addEventListener('click',()=>{if(!current)return;const kept=state.shelf.includes(current.id);state.shelf=kept?state.shelf.filter(id=>id!==current.id):[...state.shelf,current.id];save();updateFavorite();feedback(kept?'Removed from my favorites.':'Added to my favorites.');});
  $('backBtn').addEventListener('click',()=>showFragment(pick()));
  function renderShelf(){
    $('shelfItems').replaceChildren();
    if(!state.shelf.length)$('shelfItems').append(el('p','No favorites yet.'));
    state.shelf.forEach(id=>{const f=fragments.find(f=>f.id===id);if(!f)return;const button=el('button',undefined,'shelf-item');button.type='button';button.append(el('strong',f.title),el('span',labels[f.type]));button.addEventListener('click',()=>{$('shelf').close();showFragment(f);});$('shelfItems').append(button);});
  }
  $('shelfBtn').addEventListener('click',()=>{stopMedia();renderShelf();$('shelf').showModal();$('shelfBtn').setAttribute('aria-expanded','true');});
  $('shelfClose').addEventListener('click',()=>$('shelf').close());
  $('shelf').addEventListener('close',()=>{$('shelfBtn').setAttribute('aria-expanded','false');$('shelfBtn').focus();});
  $('shelf').addEventListener('click',e=>{if(e.target===$('shelf')){const r=$('shelf').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('shelf').close();}});
  function notesForCurrent(){
    if(!Array.isArray(state.deskNotes[current.id])) {
      const previous=Array.isArray(state.notes[current.id])?state.notes[current.id]:[];
      state.deskNotes[current.id]=previous.filter(n=>typeof n.text==='string').map(n=>({id:crypto.randomUUID(),text:n.text,strokes:[],t:n.t}));
      if(!state.deskNotes[current.id].length)state.deskNotes[current.id].push({id:crypto.randomUUID(),text:'',strokes:[]});
    }
    return state.deskNotes[current.id];
  }
  function setMode(next){mode=next;$('notes').dataset.mode=mode;document.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tool===mode)));if(mode==='text')activeNote?.querySelector('textarea').focus();}
  document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.tool)));
  $('addNote').addEventListener('click',()=>{notesForCurrent().push({id:crypto.randomUUID(),text:'',strokes:[]});save();renderNotes();activeNote=$('notes').lastElementChild;setMode('text');activeNote.scrollIntoView({block:'nearest',behavior:reduced.matches?'instant':'smooth'});});
  const observers=[];
  function renderNotes(){
    observers.splice(0).forEach(o=>o.disconnect());$('notes').replaceChildren();$('notes').dataset.mode=mode;
    notesForCurrent().forEach((note,index)=>{
      if(!Array.isArray(note.strokes))note.strokes=[];
      const paper=el('div',undefined,`note${index%2?' pinned':''}`);
      const text=el('textarea');text.value=typeof note.text==='string'?note.text:'';text.maxLength=2000;text.setAttribute('aria-label',`Thought ${index+1} for ${current.title}`);text.spellcheck=true;
      text.addEventListener('focus',()=>{activeNote=paper;});text.addEventListener('input',()=>{note.text=text.value;save();});
      const canvas=el('canvas');canvas.setAttribute('aria-label',`Drawing on thought ${index+1}; use the T tool to write a text alternative.`);
      const remove=el('button','×','note-remove');remove.type='button';remove.setAttribute('aria-label',`Remove thought ${index+1}`);
      remove.addEventListener('click',()=>{const list=notesForCurrent();const i=list.findIndex(n=>n.id===note.id);list.splice(i,1);save();renderNotes();$('addNote').focus();});
      paper.append(text,canvas,remove);$('notes').append(paper);attachDrawing(canvas,note,paper);
    });
    activeNote=$('notes').firstElementChild;
  }
  function attachDrawing(canvas,note,paper){
    const ctx=canvas.getContext('2d');let stroke=null,dragging=false;
    function repaint(){
      const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(paper.clientWidth*dpr);canvas.height=Math.round(paper.clientHeight*dpr);
      ctx.setTransform(canvas.width,0,0,canvas.height,0,0);ctx.clearRect(0,0,1,1);ctx.lineCap='round';ctx.lineJoin='round';
      for(const s of note.strokes){if(!Array.isArray(s.points)||!s.points.length)continue;ctx.globalCompositeOperation=s.erase?'destination-out':'source-over';ctx.strokeStyle='#183554';ctx.lineWidth=s.erase?.075:.009;ctx.beginPath();ctx.moveTo(...s.points[0]);s.points.slice(1).forEach(p=>ctx.lineTo(...p));if(s.points.length===1)ctx.lineTo(s.points[0][0]+.0001,s.points[0][1]+.0001);ctx.stroke();}
      ctx.globalCompositeOperation='source-over';
    }
    // Pointer coordinates are normalized, so saved drawings survive responsive resizing.
    function point(e){
      const matrix=new DOMMatrix(getComputedStyle(paper).transform);const inverse=matrix.inverse();
      const r=paper.getBoundingClientRect();const local=new DOMPoint(e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2).matrixTransform(inverse);
      return [Math.max(0,Math.min(1,(local.x+paper.offsetWidth/2)/paper.offsetWidth)),Math.max(0,Math.min(1,(local.y+paper.offsetHeight/2)/paper.offsetHeight))];
    }
    canvas.addEventListener('pointerdown',e=>{if(mode==='text'||e.button!==0)return;e.preventDefault();activeNote=paper;dragging=true;stroke={erase:mode==='erase',points:[point(e)]};note.strokes.push(stroke);canvas.setPointerCapture(e.pointerId);repaint();});
    canvas.addEventListener('pointermove',e=>{if(!dragging)return;stroke.points.push(point(e));repaint();});
    function end(){if(!dragging)return;dragging=false;stroke=null;save();}
    canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);canvas.addEventListener('lostpointercapture',end);
    const observer=new ResizeObserver(repaint);observer.observe(paper);observers.push(observer);repaint();
  }
  window.addEventListener('hashchange',()=>{if(!$('desktop').hidden)route();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopMedia();});
  window.addEventListener('pagehide',stopMedia);
  if(fragments.some(f=>f.id===location.hash.slice(1))){$('intro').hidden=true;$('desktop').hidden=false;route();}
})();
