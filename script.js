const districtsData = {
    oguz: {
        id: 'oguz',
        name: "Oğuz",
        image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80",
        desc: "Oğuz rayonu özünün sıx meşələri, sərin ləpədöyən bulaqları və səs-küylü şəlalələri ilə hər kəsi məftun edir. Həm tarix, həm də təbiət sevərlər üçün unudulmaz məkandır.",
        places: [
            { name: "Xal-xal Şəlaləsi", img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80", desc: "Meşənin dərinliklərində yerləşən, ziyarətçilərə sərinlik verən məşhur istirahət bölgəsi." },
            { name: "Oğuz Meşələri", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", desc: "Böyük Qafqaz dağlarını bəzəyən zəngin flora və faunaya malik ideal yaşıl örtük." }
        ]
    },
    qebele: {
        id: 'qebele',
        name: "Qəbələ",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        desc: "Qəbələ Azərbaycanın ən qədim şəhərlərindən biridir. Özünün heyrətamiz dağ təbiəti, kanat yolları və müasir turizm infrastrukturu ilə həm yerli, həm də xarici turistlərin sevimlisidir.",
        places: [
            { name: "Yeddi Gözəl Şəlaləsi", img: "https://images.unsplash.com/photo-1508459855340-fb63ac591728?auto=format&fit=crop&w=600&q=80", desc: "Dağların qoynundan axan 7 fərqli pillədən ibarət füsunkar şəlalə." },
            { name: "Tufandağ Kompleksi", img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=600&q=80", desc: "Qış və yay turizmi üçün ölkənin ən məşhur kanat və xizək mərkəzi." },
            { name: "Nohur Gölü", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80", desc: "Sakitlik axtaranlar üçün xüsusi əhəmiyyət daşıyan sakit təbiət məkanı." }
        ]
    },
    seki: {
        id: 'seki',
        name: "Şəki",
        image: "https://images.unsplash.com/photo-1565118531796-763e5082d113?auto=format&fit=crop&w=1200&q=80",
        desc: "Azərbaycanın memarlıq və mədəniyyət incisi olan Şəki, özünün Xan Sarayı, yubanı, pitisi, şəki paxlavası və şirin ləhcəsi ilə hər kəsin ruhunu oxşayır.",
        places: [
            { name: "Şəki Xan Sarayı", img: "https://images.unsplash.com/photo-1600588665792-69025e65d70e?auto=format&fit=crop&w=600&q=80", desc: "Dırnaqsız tikilmiş, şəbəkə sənətinin ən gözəl nümunələrindən biri olan saray." },
            { name: "Karvansaray", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80", desc: "Qədim İpək Yolunun üzərində yerləşən, bu gün də qonaqlarını qəbul edən tarixi abidə." },
            { name: "Kiş Məbədi", img: "https://images.unsplash.com/photo-1590050720239-0d1ce7e954c2?auto=format&fit=crop&w=600&q=80", desc: "Qafqaz Albaniyasına aid, minillik tarixə şahidlik edən ən qədim abidələrdən biri." }
        ]
    },
    quba: {
        id: 'quba',
        name: "Quba",
        image: "https://images.unsplash.com/photo-1506905925234-a73c1787c9c0?auto=format&fit=crop&w=1200&q=80",
        desc: "Qırmızı almaları, bənzərsiz xalıları, ucqar Xınalıq kəndi və Qudyalçay kanyonu ilə hər il minlərlə turisti cəlb edən sərin şimal zonasıdır.",
        places: [
            { name: "Xınalıq Kəndi", img: "https://images.unsplash.com/photo-1616215317424-3453b0a233b2?auto=format&fit=crop&w=600&q=80", desc: "Dağların başında, buludların içində yerləşən, unikal dilə malik qədim kənd." },
            { name: "Qudyalçay Kanyonu", img: "https://images.unsplash.com/photo-1504280655455-8cd7eb8cb4a8?auto=format&fit=crop&w=600&q=80", desc: "Möhtəşəm dağ mənzərəsi və sıldırım qayaların arasından keçən çay dərəsi." }
        ]
    },
    lenkeran: {
        id: 'lenkeran',
        name: "Lənkəran",
        image: "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?auto=format&fit=crop&w=1200&q=80",
        desc: "Azərbaycanın cənub incisi. Sitrus meyvələri, çay plantasiyaları, qara qumlu çimərlikləri və Hirkan Milli Parkı ilə fərqlənir.",
        places: [
            { name: "Hirkan Milli Parkı", img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80", desc: "Dəmir ağaclarının, relikt və endemik növlərin qorunduğu subtropik cəngəllik." },
            { name: "Çay Plantasiyaları", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80", desc: "Yamyaşıl çay tarlaları ilə dolu göz oxşayan Lənkəran təbiəti." }
        ]
    }
};

const districtListEl = document.getElementById('district-list');
const welcomeMessageEl = document.getElementById('welcome-message');
const districtDetailsEl = document.getElementById('district-details');

const districtNameEl = document.getElementById('district-name');
const districtMainImgEl = document.getElementById('district-main-img');
const districtDescEl = document.getElementById('district-desc');
const placesGridEl = document.getElementById('places-grid');

// Rayonlar Siyahısını Doldurmaq
function renderDistrictsList() {
    Object.values(districtsData).forEach(district => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'district-btn';
        button.textContent = district.name;
        button.onclick = () => selectDistrict(district.id, button);
        
        li.appendChild(button);
        districtListEl.appendChild(li);
    });
}

// Rayon Seçildikdə
function selectDistrict(id, buttonEl) {
    // Əvvəlki aktiv düyməni sıfırla
    const buttons = document.querySelectorAll('.district-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Yeni düyməni aktiv et
    if(buttonEl) buttonEl.classList.add('active');

    const data = districtsData[id];
    
    // Məlumatları yenilə
    districtNameEl.textContent = data.name;
    districtMainImgEl.src = data.image;
    districtDescEl.textContent = data.desc;
    
    // Gəzməli yerləri təmizlə və yenilə
    placesGridEl.innerHTML = '';
    data.places.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <div class="place-img-container">
                <img src="${place.img}" alt="${place.name}">
            </div>
            <div class="place-info">
                <h4>${place.name}</h4>
                <p>${place.desc}</p>
            </div>
        `;
        placesGridEl.appendChild(card);
    });

    // Görünüşləri tənzimlə
    welcomeMessageEl.classList.add('hidden');
    
    // Animasiya üçün classı silib-əlavə edək
    districtDetailsEl.classList.remove('hidden');
    districtDetailsEl.style.animation = 'none';
    districtDetailsEl.offsetHeight; /* trigger reflow */
    districtDetailsEl.style.animation = null; 
    
    // Mobildə seçdikdən sonra məzmuna scroll etdirmək
    if(window.innerWidth <= 900) {
        document.querySelector('.content-area').scrollTo(0, 0);
    }
}

// İlkin işə salma
renderDistrictsList();
