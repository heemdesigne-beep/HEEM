const C = window.SITE_CONTENT;

function setColors(){
  const r = document.documentElement;
  Object.entries(C.colors || {}).forEach(([key,value]) => r.style.setProperty(`--${key}`, value));
}

function tags(tags){ return tags.map(t => `<span class="tag">${t}</span>`).join(''); }
function esc(s){ return String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }
function paragraphs(arr){ return arr.map(p => `<p>${p}</p>`).join(''); }
function image(path, alt=''){ return path ? `<img src="${esc(path)}" alt="${esc(alt)}">` : ''; }

function render(){
  setColors();
  document.title = `${C.brand.latinName} — ${C.brand.owner} | Portfolio`;
  const app = document.getElementById('app');
  app.innerHTML = `
    <nav class="nav">
      <a class="logo" href="#top"><span class="logo-mark">${C.brand.logoLetter}</span><span>${C.brand.name}</span></a>
      <div class="links">${C.nav.map(n => `<a href="${n.href}" class="${n.className||''}">${n.label}</a>`).join('')}</div>
      <a href="#work" class="cta solid">شوف الشغل</a>
    </nav>

    <header class="hero" id="top">
      <div class="giant-word">PORTFOLIO</div>
      <div class="side-type">${C.brand.heroSideType.join('<br>')}</div>
      <div class="petals"><span></span><span></span><span></span><span></span><span></span></div>
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <div class="kicker">${C.brand.heroKicker}</div>
          <h1>${C.brand.heroTitle[0]}<br><span class="thin">${C.brand.heroTitle[1]}</span><br>${C.brand.heroTitle[2]}</h1>
          <p class="lead">${C.brand.heroSubtitle}</p>
          <div class="hero-actions"><a class="cta solid" href="#work">${C.brand.primaryCTA}</a><a class="cta" href="#contact">${C.brand.secondaryCTA}</a></div>
          <div class="hero-meta">${C.stats.map(s => `<div class="meta"><b>${s.number}</b>${s.label}</div>`).join('')}</div>
        </div>
        <div class="stage">
          <div class="profile-art">
            <div class="profile-shape has-image"><div class="profile-fallback"></div>${image(C.brand.photo, C.brand.owner)}</div>
            <div class="name-strip">DESIGNER<br>EDITOR</div>
            ${C.heroCards.map(card => `<div class="float-card ${card.className}"><b>${card.title}</b>${card.text}</div>`).join('')}
          </div>
        </div>
      </div>
    </header>

    <section class="section light">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">TABLE OF CONTENT</div><h2>الموقع ده مش معرض صور. ده طريقة تفكير.</h2></div><p>كل جزء هنا معموله هدف: يبين الفرق بين حد بيرص عناصر، وحد فاهم الرسالة والهوية والإيقاع.</p></div>
        <div class="toc">${C.tableOfContent.map(x => `<div class="toc-card" data-num="${x.number}"><small>${x.small}</small><h3>${x.title}</h3></div>`).join('')}</div>
      </div>
    </section>

    <section class="section dark" id="about">
      <div class="wrap about-grid">
        <div class="about-photo">${image(C.brand.photo, C.brand.owner)}</div>
        <div class="about-copy"><div class="eyebrow">${C.about.eyebrow}</div><h3>${C.about.title}</h3>${paragraphs(C.about.paragraphs)}<div class="stats">${C.about.stats.map(s => `<div class="stat"><strong>${s.number}</strong><span>${s.label}</span></div>`).join('')}</div></div>
      </div>
    </section>

    <section class="section dark" id="ai">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">${C.ai.eyebrow}</div><h2>${C.ai.title}</h2></div><p>${C.ai.intro}</p></div>
        <div class="ai-grid">
          <div class="ai-box"><h3>${C.ai.left.title}</h3><div class="prompt">${C.ai.left.prompt}</div><ul>${C.ai.left.points.map(p => `<li><b>${p[0]}</b>${p[1]}</li>`).join('')}</ul><div class="stamp">${C.ai.left.stamp}</div></div>
          <div class="ai-box heem"><h3>${C.ai.right.title}</h3><ul>${C.ai.right.points.map(p => `<li><b>${p[0]}</b>${p[1]}</li>`).join('')}</ul><div class="stamp">${C.ai.right.stamp}</div></div>
        </div>
      </div>
    </section>

    <section class="section light" id="services">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">SERVICES</div><h2>مش خدمات متفرقة. نظام كامل.</h2></div><p>الهدف إن كل حاجة خارجة من البراند يبقى لها نفس النفس: من اللوجو للبوست للريل للباكچينج.</p></div>
        <div class="services">${C.services.map(s => `<div class="service" data-num="${s.number}"><b>${s.letter}</b><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>
      </div>
    </section>

    <section class="section dark" id="work">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">SELECTED WORK</div><h2>شغل مختار من البورتفوليو.</h2></div><p>المشاريع هنا متقسمة كأنها Gallery حي: كل كارت له Mood وهدف ومساحة تتطور لما تركب صورك النهائية.</p></div>
        <div class="work-wall">${renderProjects(C.projects.slice(0,3))}</div>
        <div class="work-wall" style="margin-top:20px;grid-template-columns:.92fr 1.08fr">${renderProjects(C.projects.slice(3,6))}</div>
      </div>
    </section>

    <section class="section dark" id="edit">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">VIDEO EDITING</div><h2>المونتاج مش قص ولزق. المونتاج سبب يخليهم يكملوا.</h2></div><p>هنا مكان فيديوهاتك: ريلز، إعلانات قصيرة، قبل/بعد، ومحتوى تيك توك. الكروت معمولة كـ thumbnails جاهزة للربط.</p></div>
        <div class="video-grid">${C.videos.map((v,i)=>`<a class="video" href="${v.link || '#'}" target="_blank"><div class="screen"><div class="timeline"><i style="--h:${18+i*6}"></i><i style="--h:${34+i*2}"></i><i style="--h:${12+i*8}"></i><i style="--h:${42-i*4}"></i><i style="--h:${26+i*5}"></i></div></div><h3>${v.title}</h3><p>${v.text}</p></a>`).join('')}</div>
      </div>
    </section>

    <section class="section dark">
      <div class="wrap">
        <div class="section-head"><div><div class="eyebrow">PROCESS</div><h2>أنا بمشيها كده.</h2></div><p>من أول الفكرة لحد التسليم، مفيش مرحلة معمولة عشوائي.</p></div>
        <div class="process">${C.process.map(s => `<div class="step"><b>${s.number}</b><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>
      </div>
    </section>

    <section class="contact" id="contact"><div class="wrap"><div class="contact-card"><div><div class="eyebrow">LET'S WORK</div><h2>${C.contact.title}</h2><p>${C.contact.text}</p><div class="contact-links">${C.contact.links.map(a => `<a href="${a.href}" target="_blank">${a.label}</a>`).join('')}</div></div><div class="qr-zone">${C.contact.cards.map(c => `<div class="qr"><div class="qr-pattern"></div><b>${c.title}</b><span>${c.text}</span></div>`).join('')}</div></div></div></section>
    <footer class="footer">${C.brand.latinName} — ${C.brand.owner}. ${C.brand.role}.</footer>
  `;
}

function renderProjects(projects){
  if(projects.length === 3){
    return `<div class="project ${projects[0].layout||'big'}">${projectMarkup(projects[0])}</div><div class="work-stack">${projects.slice(1).map(p => `<div class="project ${p.layout||'small'}">${projectMarkup(p)}</div>`).join('')}</div>`;
  }
  return `<div class="work-stack">${projects.slice(0,2).map(p => `<div class="project ${p.layout||'small'}">${projectMarkup(p)}</div>`).join('')}</div><div class="project ${projects[2]?.layout||'big'}">${projectMarkup(projects[2])}</div>`;
}

function projectMarkup(p){
  return `<div class="mock">${image(p.image, p.title)}</div><div class="project-info"><h3>${p.title}</h3><p>${p.text}</p><div class="tags">${tags(p.tags||[])}</div></div>`;
}

render();
