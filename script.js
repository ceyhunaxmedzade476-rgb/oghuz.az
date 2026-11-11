const districtNames = [
    "Abşeron", "Ağcabədi", "Ağdam", "Ağdaş", "Ağstafa", "Ağsu", "Astara", 
    "Babək", "Balakən", "Bərdə", "Beyləqan", "Biləsuvar", "Cəbrayıl", "Cəlilabad", 
    "https://images.unsplash.com/photo-1533240332313-0cb490027156?auto=format&fit=crop&w=800&q=80"
];
// Hər rayon üçün unikal arxa fon şəkilləri
const bgImagesPool = [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1506905925234-a73c1787c9c0?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1565118531796-763e5082d113?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1533240332313-0cb490027156?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1920&q=80"
];
// Generate robust data for all 65 districts dynamically
const districtsData = {};
        id: id,
        name: name,
        image: imagesPool[index % imagesPool.length],
        bgImage: bgImagesPool[index % bgImagesPool.length],
        mapUrl: mapUrl,
        desc: `${name} rayonu Azərbaycanın təkrarsız gözəlliklər diyarlarından biridir. Bu bölgə spesifik landşaftı, yerli tarixi detalları və səmimi qonaqpərvərliyi ilə həm yerli, həm də xarici ziyarətçiləri daim özünə cəlb edir. Özünüz də göstərilən xəritə linkinə klikləyərək bu gözəl rayonun tam koordinatlarını aça bilərsiniz.`,
        places: [
    const data = districtsData[id];
    
    // === Arxa fon şəklini dəyiş ===
    document.body.style.setProperty('--district-bg', `url('${data.bgImage}')`);
    document.body.classList.add('has-district');
    
    // Məlumatları yenilə
    districtNameEl.textContent = data.name;
    districtMainImgEl.src = data.image;
    }
});
