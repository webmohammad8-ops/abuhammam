/* =====================================================
   إعدادات المحل — عدّلها من هون
   phone : رقم الواتس بصيغة دولية بدون + أو أصفار
           مثال: 972599123456  (اتركه فاضي اذا لسا ما عندك الرقم)
   ===================================================== */
const SHOP = {
  name:  "أبو همام",
  place: "بالقرب من مسجد المصطفى",
  phone: "",
};

function waLink(text){
  const base = SHOP.phone ? `https://wa.me/${SHOP.phone}` : `https://wa.me/`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
// كل أزرار الواتس العامة
document.querySelectorAll('.wa-link').forEach(a => {
  a.href = waLink(`السلام عليكم، بدي أطلب من ${SHOP.name}`);
});

/* =====================================================
   بيانات المنيو — عدّل الأسماء والأسعار من هون فقط

   price : السعر بالشيكل. اتركه null اذا بدك تخفي السعر
           (مثلاً العوامة لما تقرر سعرها بدّل null بالرقم)
   unit  : نص صغير جنب السعر (مثل: "للحبة")
   photo : مكان الصورة، بإحدى طريقتين:
           1) اسم ملف داخل مجلد images  مثل: "karabij.jpg"
           2) رابط كامل للصورة مثل: "https://example.com/karabij.jpg"
   ===================================================== */

const MENU = [
  { cat:"كرابيج حلب", sub:"الحبة بشيكل", art:"karabij", items:[
    { name:"كرابيج حلب", desc:"أصابع السميد الحلبية المحشية بالقشطة، تنتهي بالفستق الحلبي. طازجة كل يوم.",
      price:1, unit:"للحبة", photo:"https://i.ytimg.com/vi/wKbX4JF2Q_8/sddefault.jpg", art:"karabij", featured:true },
  ]},
  { cat:"عوامة", sub:"مقرمشة من برّا وطرية من جوّا", art:"awameh", items:[
    { name:"عوامة", desc:"كرات العجين الذهبية المقلية، تُغمس بالقطر وتُقدَّم ساخنة.",
      price:null, unit:"", photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-E8Gsccpuq4XtP34hWfljFnUPyfBeNfkbadXR7X5qvA&s=10", art:"awameh" },
  ]},
  { cat:"مشروبات ساخنة", sub:"كاسة تدفّي القلب", art:"cup", items:[
    { name:"شاي",             desc:"شاي أحمر مغلي على أصوله.",              price:null, photo:"tea.jpg",       art:"cup", online:"tea" },
    { name:"شاي بالنعنع",     desc:"شاي منعش بورق النعنع الأخضر.",          price:null, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_Pzzopy2s2LrgoUbKYFHrUncqfZppLGwqIu6LVgYRQ&s=10",  art:"cup", online:"mint,tea" },
    { name:"قهوة عربية",      desc:"قهوة مهيّلة بالهيل، تُقدَّم بالدلّة.",   price:null, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_p1p63BU9ti_WcTir0vLPHUa5yIjRDRKEm5BmCtOiQ&s=10", art:"cup", online:"arabic,coffee" },
    { name:"نسكافيه",         desc:"كاسة نسكافيه ساخنة بالحليب.",           price:null, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjk-aTLUm8ZzwdynGLS4SJRN2xJUuaSIiIssjqxr7Ug&s=10",   art:"cup", online:"coffee,cup" },
    { name:"سحلب",            desc:"سحلب كريمي بالقرفة والمكسرات.",         price:null, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlCBlwW0P25VeHbbajeWvlBWlD7Q9057RfRIbUBUZtg&s=10",    art:"cup", online:"hot,drink,cinnamon" },
    { name:"شوكولاتة ساخنة",  desc:"شوكولاتة غنية ساخنة للأيام الباردة.",    price:null, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHvL0Z6pPCJXvn30hWll-V3mSeOOlNVojOnFA2J_31w&s=10", art:"cup", online:"hot,chocolate" },
  ]},
];

/* ============ رسومات احتياطية (اذا ما في صورة) ============ */
const ART = {
  karabij: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#7a4a1d" stroke-width="2">
      <g transform="rotate(-14 100 70)"><rect x="30" y="50" width="140" height="34" rx="17" fill="#e7b25f"/><circle cx="34" cy="67" r="15" fill="#fff6dd"/><circle cx="166" cy="67" r="15" fill="#fff6dd"/><circle cx="34" cy="67" r="5" fill="#8fb04a" stroke="none"/><circle cx="166" cy="67" r="5" fill="#8fb04a" stroke="none"/></g>
      <g transform="rotate(8 100 70)"><rect x="34" y="72" width="140" height="34" rx="17" fill="#f0c071"/><circle cx="38" cy="89" r="15" fill="#fff6dd"/><circle cx="170" cy="89" r="15" fill="#fff6dd"/><circle cx="38" cy="89" r="5" fill="#8fb04a" stroke="none"/><circle cx="170" cy="89" r="5" fill="#8fb04a" stroke="none"/></g>
    </g></svg>`,
  awameh: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="112" rx="78" ry="14" fill="#b8741f" opacity=".45"/>
    <g stroke="#7a3f0c" stroke-width="2">
      <circle cx="68" cy="82" r="28" fill="#d98a2b"/><circle cx="132" cy="82" r="28" fill="#cf7d20"/>
      <circle cx="100" cy="52" r="28" fill="#e49a3a"/>
    </g>
    <g fill="#fff3c4" opacity=".7"><ellipse cx="90" cy="42" rx="8" ry="4"/><ellipse cx="58" cy="73" rx="7" ry="3.5"/><ellipse cx="122" cy="73" rx="7" ry="3.5"/></g></svg>`,
  cup: `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#d4af5f" stroke-width="3" stroke-linecap="round" opacity=".8">
      <path d="M82 30c-8 10 8 16 0 28"/><path d="M104 24c-8 10 8 16 0 28"/><path d="M126 30c-8 10 8 16 0 28"/></g>
    <path d="M52 66h96v18c0 22-16 38-48 38s-48-16-48-38z" fill="#f5efe2" stroke="#d4af5f" stroke-width="3"/>
    <path d="M148 74h8c12 0 12 22 0 22h-12" fill="none" stroke="#d4af5f" stroke-width="3"/>
    <ellipse cx="100" cy="66" rx="48" ry="6" fill="#7a4a1d"/>
    <ellipse cx="100" cy="130" rx="62" ry="5" fill="#d4af5f" opacity=".35"/></svg>`,
};

/* ===================== الكود ===================== */
const catsEl = document.getElementById('cats');
const menuEl = document.getElementById('menu');
const modalEl = document.getElementById('itemModal');
const modal = (window.bootstrap) ? new bootstrap.Modal(modalEl) : null;

// مصادر الصورة بالترتيب: صورة المحل المحلية ← صورة أونلاين (للمشروبات) ← الرسمة
function sources(it){
  // photo: رابط كامل (يبدأ بـ http) أو اسم ملف داخل مجلد images
  const list = [/^https?:\/\//.test(it.photo) ? it.photo : `images/${it.photo}`];
  if (it.online) list.push(`https://loremflickr.com/700/500/${it.online}?lock=${it.name.length * 7}`);
  return list;
}

// يبني مربع الصورة مع التراجع التلقائي
function imgBox(it, target){
  const list = sources(it);
  let i = 0;
  const img = new Image();
  img.alt = it.name;
  img.loading = 'lazy';
  img.onerror = () => {
    i++;
    if (i < list.length) img.src = list[i];
    else target.innerHTML = ART[it.art] || '';
  };
  img.src = list[0];
  target.innerHTML = '';
  target.appendChild(img);
}

function priceHTML(it){
  if (it.price == null) return '';
  return `<span class="price">${it.price} ₪ ${it.unit ? `<small>${it.unit}</small>` : ''}</span>`;
}

function render(filter){
  menuEl.innerHTML = '';
  MENU.forEach((sec, si) => {
    if (filter !== 'all' && filter !== si) return;
    const wrap = document.createElement('section');
    wrap.innerHTML = `
      <h3 class="section-title">${sec.cat}</h3>
      <p class="section-sub">${sec.sub || ''}</p>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 justify-content-center"></div>`;
    const row = wrap.querySelector('.row');

    sec.items.forEach((it, ii) => {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `
        <div class="item ${it.featured ? 'featured' : ''}" data-s="${si}" data-i="${ii}">
          <div class="thumb">${it.featured ? '<span class="badge-gold">الأكثر طلباً</span>' : ''}<div class="media"></div></div>
          <div class="item-body">
            <div class="item-top"><h5>${it.name}</h5>${priceHTML(it)}</div>
            <p class="desc">${it.desc}</p>
          </div>
        </div>`;
      row.appendChild(col);
      imgBox(it, col.querySelector('.media'));
    });
    menuEl.appendChild(wrap);
  });
  animate();
}

function animate(){
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.item').forEach(el => io.observe(el));
}

// أزرار الأقسام
catsEl.innerHTML = ['الكل', ...MENU.map(s => s.cat)]
  .map((c, i) => `<button class="cat-btn ${i === 0 ? 'active' : ''}" data-i="${i - 1}">${c}</button>`).join('');

catsEl.addEventListener('click', e => {
  const b = e.target.closest('.cat-btn'); if (!b) return;
  document.querySelectorAll('.cat-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const i = +b.dataset.i;
  render(i < 0 ? 'all' : i);
  menuEl.scrollIntoView({ behavior:'smooth' });
});

// تفاصيل الصنف
menuEl.addEventListener('click', e => {
  const card = e.target.closest('.item'); if (!card || !modal) return;
  const it = MENU[card.dataset.s].items[card.dataset.i];
  imgBox(it, document.getElementById('modalImg'));
  document.getElementById('modalName').textContent = it.name;
  document.getElementById('modalDesc').textContent = it.desc;
  document.getElementById('modalPrice').innerHTML = it.price == null ? '' : `${it.price} ₪ ${it.unit || ''}`;
  document.getElementById('modalWa').href = waLink(`السلام عليكم، بدي أطلب من ${SHOP.name}: ${it.name}`);
  modal.show();
});

render('all');
