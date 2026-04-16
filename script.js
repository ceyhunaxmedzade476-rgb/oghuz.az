const districtNames = [
    "Abşeron", "Ağcabədi", "Ağdam", "Ağdaş", "Ağstafa", "Ağsu", "Astara", 
    "Babək", "Balakən", "Bərdə", "Beyləqan", "Biləsuvar", "Cəbrayıl", "Cəlilabad", 
    "Culfa", "Daşkəsən", "Füzuli", "Gədəbəy", "Goranboy", "Göyçay", "Göygöl", 
    "Hacıqabul", "Xaçmaz", "Xızı", "Xocalı", "Xocavənd", "İmişli", "İsmayıllı", 
    "Kəlbəcər", "Kəngərli", "Kürdəmir", "Qax", "Qazax", "Qəbələ", "Qobustan", 
    "Quba", "Qubadlı", "Qusar", "Laçın", "Lerik", "Lənkəran", "Masallı", 
    "Neftçala", "Oğuz", "Ordubad", "Saatlı", "Sabirabad", "Sədərək", "Salyan", 
    "Samux", "Şabran", "Şahbuz", "Şəki", "Şamaxı", "Şəmkir", "Şərur", "Şuşa", 
    "Siyəzən", "Tərtər", "Tovuz", "Ucar", "Yardımlı", "Yevlax", "Zəngilan", "Zərdab"
];

const imagesPool = [
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506905925234-a73c1787c9c0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565118531796-763e5082d113?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616215317424-3453b0a233b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533240332313-0cb490027156?auto=format&fit=crop&w=800&q=80"
];

// Generate robust data for all 65 districts dynamically
const districtsData = {};

districtNames.forEach((name, index) => {
    // Generate simple ID
    const id = name.toLowerCase().replace(/ə/g, 'e').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ı/g, 'i');
    
    // Create a direct Google Maps search URL specific to this region
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' rayonu, Azərbaycan')}`;
    
    // We deterministically assign different images to keep it looking nice
    districtsData[id] = {
        id: id,
        name: name,
        image: imagesPool[index % imagesPool.length],
        mapUrl: mapUrl,
        desc: `${name} rayonu, Azərbaycanın təkrarsız gözəlliklər diyarlarından biridir. Bu bölgə spesifik landşaftı, yerli tarixi detalları və səmimi qonaqpərvərliyi ilə həm yerli, həm də xarici ziyarətçiləri daim özünə cəlb edir. Özünüz də xəritəyə baxaraq bu gözəl rayonun tam koordinatlarını kəşf edə bilərsiniz.`,
        places: [
            { img: imagesPool[(index + 3) % imagesPool.length], title: `${name} Bölgəsindən Mənzərə` },
            { img: imagesPool[(index + 5) % imagesPool.length], title: `Təbiətin Göstərdiyi Gözəllik` },
            { img: imagesPool[(index + 7) % imagesPool.length], title: `Sakinlik Axtaranlar Üçün` }
        ]
    };
});

const districtListEl = document.getElementById('district-list');
const searchInput = document.getElementById('search-input');
const welcomeMessageEl = document.getElementById('welcome-message');
const districtDetailsEl = document.getElementById('district-details');

const districtNameEl = document.getElementById('district-name');
const districtMainImgEl = document.getElementById('district-main-img');
const districtDescEl = document.getElementById('district-desc');
const placesGridEl = document.getElementById('places-grid');
const mapLinkEl = document.getElementById('district-map-link');

// Düymələri listə əlavə etmək üçün
function renderDistrictsList(filterText = "") {
    districtListEl.innerHTML = '';
    let hasResults = false;

    Object.values(districtsData).forEach(district => {
        if(district.name.toLowerCase().includes(filterText.toLowerCase())) {
            hasResults = true;
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = 'district-btn';
            button.textContent = district.name;
            button.dataset.id = district.id; // Store ID to match later
            button.onclick = () => selectDistrict(district.id, button);
            
            li.appendChild(button);
            districtListEl.appendChild(li);
        }
    });

    if(!hasResults) {
        districtListEl.innerHTML = '<li style="padding: 10px; color: #64748b; text-align: center;">Nəticə tapılmadı</li>';
    }
}

// Rayon Seçildikdə
function selectDistrict(id, buttonEl) {
    // Digər butonlardan aktivi sil
    const buttons = document.querySelectorAll('.district-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Klik olunan butonu aktiv et
    if(buttonEl) {
        buttonEl.classList.add('active');
    }

    const data = districtsData[id];
    
    // Məlumatları yenilə
    districtNameEl.textContent = data.name;
    districtMainImgEl.src = data.image;
    districtDescEl.textContent = data.desc;
    mapLinkEl.href = data.mapUrl; // Google Maps URL update
    
    // Gəzməli yerləri təmizlə və yenilə
    placesGridEl.innerHTML = '';
    data.places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <div class="place-img-container">
                <img src="${place.img}" alt="${place.title}">
            </div>
            <!-- sadəcə şəkil tələb elədiyiniz üçün info silinib, amma başlıq saxlaya bilərik: -->
            <!-- <div class="place-info"><h4>${place.title}</h4></div> -->
        `;
        placesGridEl.appendChild(card);
    });

    // Welcome mesajı gizlə
    welcomeMessageEl.classList.add('hidden');
    
    // Animasiyanı təzələ
    districtDetailsEl.classList.remove('hidden');
    districtDetailsEl.style.animation = 'none';
    districtDetailsEl.offsetHeight; /* trigger reflow */
    districtDetailsEl.style.animation = null; 
    
    // Mobil görünüşdə scroll etdir
    if(window.innerWidth <= 900) {
        document.querySelector('.content-area').scrollTo(0, 0);
    }
}

// Axtarış xanası fırlandıqca
searchInput.addEventListener('input', (e) => {
    renderDistrictsList(e.target.value);
});

// İlkin işə salma
renderDistrictsList();
