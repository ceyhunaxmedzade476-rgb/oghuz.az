const yerlerData = {
    "oguz": [
        { ad: "Xal-Xal Şəlaləsi", sekil: "xalxal.jpg", qeyd: "Təbiət qoynunda möhtəşəm şəlalə." },
        { ad: "Oğuz Çayı", sekil: "oguzchay.jpg", qeyd: "Sərin və təmiz dağ çayı." },
        { ad: "Kalağay Muzeyi", sekil: "muzey.jpg", qeyd: "Tarixi və mədəni eksponatlar." }
    ],
    "gabala": [
        { ad: "Tufandağ", sekil: "tufandag.jpg", qeyd: "Xizək və kanat xətti." },
        { ad: "Nohur Gölü", sekil: "nohur.jpg", qeyd: "Göl kənarında istirahət." },
        { ad: "Yeddigözəl Şəlaləsi", sekil: "7gozel.jpg", qeyd: "Meşə daxilində silsilə şəlalələr." }
    ],
    "sheki": [
        { ad: "Xan Sarayı", sekil: "xan-sarayi.jpg", qeyd: "Dünya əhəmiyyətli tarixi abidə." },
        { ad: "Karvansaray", sekil: "karvansaray.jpg", qeyd: "Qədim ticarət mərkəzi." },
        { ad: "Gələrsən-Görərsən Qalası", sekil: "qala.jpg", qeyd: "Tarixi müdafiə istehkamı." }
    ]
};

function rayonuGoster() {
    const select = document.getElementById('rayonSelect');
    const container = document.getElementById('resultsContainer');
    const secilenRayon = select.value;

    container.innerHTML = ""; // Köhnə nəticələri silirik

    if (secilenRayon && yerlerData[secilenRayon]) {
        yerlerData[secilenRayon].forEach(yer => {
            container.innerHTML += `
                <div class="place-card">
                    <img src="${yer.sekil}" alt="${yer.ad}" style="width:100%; border-radius:8px;">
                    <h4>${yer.ad}</h4>
                    <p>${yer.qeyd}</p>
                </div>
            `;
        });
    }
}
