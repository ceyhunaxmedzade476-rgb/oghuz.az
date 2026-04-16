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

// Reallığa yaxın və konkret gəzməli/tarixi yer adları
const specificPlaces = {
    "abseron": ["Yanardağ", "Qala İncəsənət Kompleksi", "Abşeron Milli Parkı"],
    "agcabedi": ["Qarqar çayı sahilləri", "Ulduztəpə yaşayış yeri", "Tarix-Diyarşünaslıq Muzeyi"],
    "agdam": ["Şahbulaq qalası", "Ağdam Cümə Məscidi (Qalıqları)", "Çaykənd şəlaləsi"],
    "agdas": ["Türyançay Dövlət Təbiət Qoruğu", "Qoşaqovaq kəndi", "Surxay qalası"],
    "agstafa": ["Keşikçidağ Qoruğu", "Qarayazı Dövlət Təbiət Qoruğu", "Poylu körpüsü"],
    "agsu": ["Ağsu aşırımı", "Şeyx Dursun türbəsi", "Bico kəndi (Xalçaları)"],
    "astara": ["Hirkan Milli Parkı", "Astara bulvarı", "Sim şəlaləsi"],
    "babek": ["Əshabi-Kəhf ziyarətgahı", "Sirab mineral suları", "Babək qalası"],
    "balaken": ["Katex şəlaləsi", "Qubek aşırımı", "Asma Körpü"],
    "berde": ["Bərdə türbəsi", "Tərtər çayı bulvarı", "Axsadan baba türbəsi"],
    "beyleqan": ["Örənqala (Beyləqan xarabalıqları)", "Peyğəmbər ziyarətgahı", "Mil düzü mənzərələri"],
    "bilesuvar": ["Mahmudçala gölü", "Çöl-Təpə yaşayış yeri", "Ağdam qalası qalıqları"],
    "cebrayil": ["Xudafərin körpüləri", "Diridağ", "Cəbrayıl bulaqları"],
    "celilabad": ["Muğan düzü", "Göytəpə qədim yaşayış yeri", "İncəçay"],
    "culfa": ["Gülüstan türbəsi", "Əlincə qalası", "İlandağ"],
    "daskesen": ["Xoşbulaq yaylağı", "Dəmir Filizi yataqları", "Çovdar nekropolu"],
    "fuzuli": ["Quruçay vadisi", "Kondələnçay su anbarı", "Qədim Füzuli abidələri"],
    "gedebey": ["Koroğlu qalası", "Qanlıca gölü", "Misəritmə zavodunun qalıqları"],
    "goranboy": ["Tarixi Naftalan zonası", "Gülüstan qalası", "Kürəkçay"],
    "goycay": ["Göyçay Nar bağları", "Yeraltı hamam", "Çərəkə kəndi mənzərələri"],
    "goygol": ["Göygöl Milli Parkı", "Maralgöl", "Alman lüteran kilsəsi"],
    "haciqabul": ["Hacıqabul gölü", "Şirvan dənizkənarı", "Pir Hüseyn xanəgahı"],
    "xacmaz": ["Nabran İstirahət Zonası", "Xudat qalası qalıqları", "Şollar suyu mərmiyi"],
    "xizi": ["Xızı zolaqlı dağları", "Altıağac Milli Parkı", "Cəfər Cabbarlının ev muzeyi"],
    "xocali": ["Əsgəran qalası", "Xocalı kurqanları", "Qarqar çayı"],
    "xocavend": ["Amaras monastırı", "Tuq kəndi", "Azıx mağarası"],
    "imisli": ["Bəhrəmtəpə su qovşağı", "Araz çayı sahili", "Yedditəpə kurqanları"],
    "ismayilli": ["Lahıc qəsəbəsi", "İvanovka kəndi", "Basqal qəsəbəsi"],
    "kelbecer": ["İstisu sanatoriyası", "Xudavəng monastırı", "Tərtər çayı dərəsi"],
    "kengerli": ["Qarabağlar türbəsi", "Çalxanqala", "Şahtaxtı yaşayış yeri"],
    "kurdemir": ["Şirvan düzü bağları", "Şirvanşahlar ovlağı", "Kür çayı sahilləri"],
    "qax": ["İlisu kəndi və şəlaləsi", "Qum məbədi", "Ulu körpü"],
    "qazax": ["Göyəzən dağı", "Avey Dövlət Təbiət Qoruğu", "Sınıq Körpü (Qırmızı Körpü)"],
    "qebele": ["Yeddi Gözəl şəlaləsi", "Tufandağ Kompleksi", "Nohur gölü"],
    "qobustan": ["Qobustan Dövlət Qoruğu", "Palçıq vulkanları", "Diri Baba türbəsi"],
    "quba": ["Xınalıq kəndi", "Qudyalçay kanyonu", "Afurca şəlaləsi"],
    "qubadli": ["Məmər kəndi və mağarası", "Bərgüşad çayı", "Həkəri çayı vadisi"],
    "qusar": ["Şahdağ Qış-Yay Turizm Kompleksi", "Laza kəndi və şəlalələri", "Qusarçay vadisi"],
    "lacin": ["Laçın dəhlizi təbiəti", "Həkəri çayı mənzərəsi", "Zabux kəndi"],
    "lerik": ["Zuvənd Dövlət Təbiət Yasaqlığı", "Buzeyir mağarası", "Uzunömürlülər diyarı"],
    "lenkeran": ["Hirkan Milli Parkı", "Xan Evi", "Qara qum çimərliyi"],
    "masalli": ["Yardımlı-Masallı təkdam sərhəddi", "İstisu müalicəvi suları", "Viləşçay su anbarı"],
    "neftcala": ["Kür çayının Xəzərə töküldüyü yer", "Şirvan Milli Parkı", "Bankə qəsəbəsi"],
    "oguz": ["Xal-xal şəlaləsi", "Oğuz rəngarəng meşələri", "Qədim Udi məbədləri"],
    "ordubad": ["Ordubad Tarixi Mərkəzi", "Zəngəzur Milli Parkı", "Gəmiqaya petroqlifləri"],
    "saatli": ["Araz çayı qayalıqları", "Qarayevkənd kurqanları", "Diyarşünaslıq muzeyi"],
    "sabirabad": ["Suqovuşan (Kür və Arazın birləşməsi)", "Köhnə hamam qalığı", "Qalaqayın kəndi"],
    "sederek": ["Sədərək qalası qalıqları", "Ağrı dağı mənzərəsi", "Ucubiz dağları"],
    "salyan": ["Şirvan Milli Parkı (Ceyranlar)", "Kür çayı bulvarı", "Babazənən dağı"],
    "samux": ["Kür çayı boyunca tuqay meşələri", "Ceyrançöl mənzərəsi", "Eldar şamı Təbiət Qoruğu"],
    "sabran": ["Çıraqqala", "Şabran Dövlət Tarixi Qoruğu", "Şabran meşələri"],
    "sahbuz": ["Batabat gölü və Üzən ada", "Ağgöl", "Badamlı mineral bulaqları"],
    "seki": ["Şəki Xan Sarayı", "Qədim Karvansaray", "Kiş məbədi"],
    "samaxi": ["Pirkulu (Şamaxı Astrofizika Rəsədxanası)", "Cümə Məscidi", "Yeddi Günbəz Türbəsi"],
    "semkir": ["Şəmkir Parkı Və Abidələr", "Alman lüteran kilsəsi", "Qədim Şəmkir qalıqları"],
    "serur": ["Arpaçay su anbarı", "Gümüşlü mağarası", "Əlincə dağının uzaq görünüşü"],
    "susa": ["Məşhur Cıdır düzü", "Şuşa qalası divarları", "Yuxarı Gövhər Ağa məscidi"],
    "siyezen": ["Beşbarmaq dağı", "Giləzi burnu", "Taxtakörpü su anbarı"],
    "terter": ["Tərtər çayı mənzərəsi", "Suqovuşan (Tərtər)", "Taleh bulağı"],
    "tovuz": ["Həsənsu çayı", "Göytəpə Qədim Yaşayış Yeri", "Haçaqaya qalası"],
    "ucar": ["Türyançay sahili", "Ucar Mərkəzi Parkı", "Şirvan düzü kəndləri"],
    "yardimli": ["Təkdam şəlaləsi", "Peşəsər dağı yolları", "Sıx Yardımlı meşələri"],
    "yevlax": ["Kür çayı bulvarı", "Aran geniş mənzərələri", "Zərnəbaş gölü"],
    "zengilan": ["Bəsitçay Dövlət Təbiət Qoruğu", "Araz çayı sahili", "Çinar meşələri"],
    "zerdab": ["Kür çayının yaşıl sahilləri", "Zərdab Tarix Muzeyi", "Həsən bəy Zərdabinin ev muzeyi"]
};

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
    
    // Konkret yerləri dictionary-dən çəkirik, əgər yoxdursa generic yazırıq.
    const placesList = specificPlaces[id] || [
        `${name} Tarixi Mərkəzi`,
        `${name} Təbiət Qoruğu`,
        `Məşhur İstirahət Məkanı`
    ];
    
    districtsData[id] = {
        id: id,
        name: name,
        image: imagesPool[index % imagesPool.length],
        mapUrl: mapUrl,
        desc: `${name} rayonu Azərbaycanın təkrarsız gözəlliklər diyarlarından biridir. Bu bölgə spesifik landşaftı, yerli tarixi detalları və səmimi qonaqpərvərliyi ilə həm yerli, həm də xarici ziyarətçiləri daim özünə cəlb edir. Özünüz də göstərilən xəritə linkinə klikləyərək bu gözəl rayonun tam koordinatlarını aça bilərsiniz.`,
        places: [
            { img: imagesPool[(index + 3) % imagesPool.length], title: placesList[0] },
            { img: imagesPool[(index + 5) % imagesPool.length], title: placesList[1] },
            { img: imagesPool[(index + 7) % imagesPool.length], title: placesList[2] }
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
    
    // Linki Text kimi aşağıda göstər
    mapLinkEl.href = data.mapUrl;
    mapLinkEl.textContent = data.mapUrl;
    
    // Gəzməli yerləri təmizlə və yenilə
    placesGridEl.innerHTML = '';
    data.places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <div class="place-img-container">
                <img src="${place.img}" alt="${place.title}">
            </div>
            <div class="place-info" style="padding: 15px;">
                <h4 style="font-size: 1.1rem; color: #1e293b; text-align: center; margin:0;">${place.title}</h4>
            </div>
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
