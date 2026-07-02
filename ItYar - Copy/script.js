// تب‌ها
function openTab(tabName) {
    // مخفی کردن همه تب‌ها
    document.querySelectorAll('.tab-page').forEach(function(tab) {
        tab.classList.add('hidden');
    });

    // نمایش تب انتخابی
    document.getElementById(tabName).classList.remove('hidden');

    // تغییر کلاس active
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // پاک کردن نتایج قبلی
    document.querySelectorAll('.results').forEach(function(r) {
        r.classList.add('hidden');
        r.innerHTML = '';
    });
}

// باز کردن تب اول (شبکه)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-btn.active').click();
});

// چک‌باکس کابل خارجی
document.addEventListener('change', function(e) {
    if (e.target.name === 'outdoor') {
        const lengthField = e.target.parentNode.querySelector('input[name="outdoor-length"]');
        if (lengthField) {
            lengthField.classList.toggle('hidden', !e.target.checked);
            if (!e.target.checked) lengthField.value = '';
        }
    }
});

// نمایش عدد اسلایدرها در بخش کامپیوتر
document.getElementById('computer').addEventListener('input', function(e) {
    if (e.target.type === 'range') {
        const valueSpan = e.target.nextElementSibling;
        if (valueSpan && valueSpan.classList.contains('range-value')) {
            valueSpan.textContent = e.target.value;
        }
    }
});

// داده‌ها
const networkEquipment = [
    { name: 'روتر TP-Link Archer AX73', price: 9200000, link: 'https://www.digikala.com/search/category-router/' },
    { name: 'سوییچ 24 پورت گیگابیتی D-Link', price: 14800000, link: 'https://www.digikala.com/search/category-switch/' },
    { name: 'کابل شبکه Cat6 (متری)', price: 58000, link: 'https://www.digikala.com/search/category-network-cable/' },
    { name: 'کابل خارجی (متری)', price: 78000, link: 'https://www.digikala.com/search/category-network-cable/' },
    { name: 'فایروال MikroTik RB4011', price: 18500000, link: 'https://www.digikala.com/search/mikrotik/' },
    { name: 'داکت پلاستیکی 25x25 (متری)', price: 32000, link: 'https://www.digikala.com/search/category-duct/' },
    { name: 'رک شبکه 42 یونیت', price: 28500000, link: 'https://www.digikala.com/search/category-rack/' },
    { name: 'پچ پنل 24 پورت Cat6', price: 8900000, link: 'https://www.digikala.com/search/category-patch-panel/' },
    { name: 'UPS آنلاین 3KVA', price: 48500000, link: 'https://www.digikala.com/search/category-ups/' },
    { name: 'اکسس پوینت Ubiquiti UniFi', price: 22800000, link: 'https://www.digikala.com/search/category-access-point/' },
    { name: 'سرور ذخیره‌سازی NAS Synology', price: 39800000, link: 'https://www.digikala.com/search/category-nas/' }
];

const computerSpecs = {
    daily: { 
        parts: [
            'Intel Core i5-13400 یا Ryzen 5 7600',
            '16GB RAM DDR4 3200MHz',
            '512GB NVMe SSD',
            'گرافیک یکپارچه یا GTX 1650',
            'مانیتور 24 اینچ Full HD',
            'مادربرد B760 یا B650',
            'منبع تغذیه 550W Bronze',
            'فن کیس استاندارد (3 عدد)',
            'کیس ساده با پنل شیشه‌ای',
            'هارد 1TB HDD اضافی'
        ], 
        total: 38000000
    },
    programming: { 
        parts: [
            'Intel Core i7-13700 یا Ryzen 7 7700X',
            '32GB RAM DDR5 6000MHz',
            '1TB NVMe SSD Gen4',
            'RTX 3060 یا بهتر',
            'مانیتور 27 اینچ IPS',
            'مادربرد B760 یا B650',
            'منبع تغذیه 750W Gold',
            'فن کیس RGB (4 عدد)',
            'کیس متوسط گیمینگ',
            'هارد 2TB HDD اضافی'
        ], 
        total: 85000000
    },
    graphic: { 
        parts: [
            'Intel Core i9-13900K یا Ryzen 9 7950X',
'64GB RAM DDR5 6400MHz',
            '2TB NVMe SSD Gen4',
            'RTX 4080 16GB',
            'مانیتور 32 اینچ 4K IPS',
            'مادربرد Z790 یا X670E',
            'منبع تغذیه 1000W Platinum',
            'خنک‌کننده مایع AIO 360mm',
            'کیس گیمینگ حرفه‌ای',
            'هارد 4TB HDD اضافی'
        ], 
        total: 195000000
    },
    gaming: { 
        parts: [
            'Intel Core i9-14900K یا Ryzen 9 7950X3D',
            '64GB RAM DDR5 6400MHz',
            '4TB NVMe SSD Gen4',
            'RTX 4090 24GB',
            'مانیتور 32 اینچ 4K 240Hz OLED',
            'مادربرد Z790 AORUS یا X670E',
            'منبع تغذیه 1200W Titanium',
            'خنک‌کننده مایع حرفه‌ای 420mm',
            'کیس Lian Li O11 یا Corsair 1000D',
            'هارد 8TB HDD اضافی'
        ], 
        total: 380000000
    }
};

const laptops = [
    { name: 'Lenovo IdeaPad 3 - امور روزمره', price: 38000000, link: 'https://www.digikala.com/search/lenovo-ideapad/' },
    { name: 'ASUS VivoBook Pro - گرافیک و برنامه‌نویسی', price: 68000000, link: 'https://www.digikala.com/search/asus-vivobook/' },
    { name: 'MSI GF63 - گیمینگ', price: 89000000, link: 'https://www.digikala.com/search/msi-gf/' },
    { name: 'MacBook Air M3 - حرفه‌ای', price: 98000000, link: 'https://www.digikala.com/search/apple-macbook-air/' }
];

// شبکه
function submitNetwork() {
    const data = new FormData(document.getElementById('network-form'));
    let area = parseInt(data.get('area')) || 0;
    const budget = parseInt(data.get('budget')) || 0;
    const outdoor = data.get('outdoor');
    const outdoorLength = parseInt(data.get('outdoor-length')) || 0;

    if (area < 50) {
        alert('حداقل مساحت ساختمان برای محاسبه دقیق ۵۰ متر مربع است. مقدار به ۵۰ متر تغییر یافت.');
        area = 50;
    }

    let selected = [];
    let total = 0;

    selected.push(networkEquipment[0]);
    total += networkEquipment[0].price;

    if (data.get('users') !== '1-10') {
        selected.push(networkEquipment[1]);
        total += networkEquipment[1].price;
    }

    const cableMeters = Math.max(50, Math.round(area * 0.8));
    const cableName = 'کابل شبکه Cat6 (' + cableMeters + ' متر)';
    const cablePrice = networkEquipment[2].price * cableMeters;
    selected.push({ name: cableName, price: cablePrice, link: networkEquipment[2].link });
    total += cablePrice;

    if (outdoor && outdoorLength > 0) {
        const outdoorName = 'کابل خارجی (' + outdoorLength + ' متر)';
        const outdoorPrice = networkEquipment[3].price * outdoorLength;
        selected.push({ name: outdoorName, price: outdoorPrice, link: networkEquipment[3].link });
        total += outdoorPrice;
    }

    const ductMeters = Math.round(cableMeters * 1.2);
    const ductName = 'داکت پلاستیکی (' + ductMeters + ' متر)';
    const ductPrice = networkEquipment[5].price * ductMeters;
    selected.push({ name: ductName, price: ductPrice, link: networkEquipment[5].link });
    total += ductPrice;

    if (data.get('high-security')) {
        selected.push(networkEquipment[4]);
        total += networkEquipment[4].price;
    }

    selected.push(networkEquipment[6]); total += networkEquipment[6].price;
    selected.push(networkEquipment[7]); total += networkEquipment[7].price;
    selected.push(networkEquipment[8]); total += networkEquipment[8].price;
    selected.push(networkEquipment[9]); total += networkEquipment[9].price;
    selected.push(networkEquipment[10]); total += networkEquipment[10].price;

    if (budget > 0 && total > budget) {
        alert('مجموع: ' + total.toLocaleString() + ' تومان — ' + (total - budget) + ' تومان بیشتر نیاز است.');
    }

    displayResults('network-results', selected, total);
}

// کامپیوتر
function submitComputerBasic() {
    const data = new FormData(document.getElementById('computer-basic-form'));
    let usage = data.get('usage') || 'daily';
    const hardwareImportance = parseInt(data.get('hardware-importance')) || 5;
// ارتقا خودکار بر اساس اهمیت سخت‌افزار
    if (hardwareImportance > 7 && usage === 'daily') usage = 'programming';
    if (hardwareImportance > 8 && usage === 'programming') usage = 'graphic';
    if (hardwareImportance > 9 && usage === 'graphic') usage = 'gaming';

    const specs = computerSpecs[usage];

    const itemNames = ['پردازنده (CPU)', 'رم (RAM)', 'حافظه اصلی (SSD)', 'کارت گرافیک', 'مانیتور', 'مادربرد', 'منبع تغذیه', 'فن و خنک‌کننده', 'کیس', 'حافظه اضافی (HDD)'];

    const items = specs.parts.map(function(part, i) {
        return {
            name: itemNames[i],
            specs: part,
            link: 'https://www.digikala.com/search/category-computer-components/'
        };
    });

    displayResults('computer-results', items, specs.total, true);
}

// لپ‌تاپ
function submitLaptop() {
    const data = new FormData(document.getElementById('laptop-form'));
    const brand = data.get('brand');
    const budget = parseInt(data.get('budget')) || 0;

    let filtered = laptops.filter(function(l) { return budget === 0 || l.price <= budget; });
    if (brand) {
        filtered = filtered.sort(function(a, b) { return a.name.toLowerCase().includes(brand) ? -1 : 1; });
    }

    displayResults('laptop-results', filtered, null);
}

// نمایش نتایج — کاملاً بدون backtick و بدون خطا
function displayResults(containerId, items, total, showSpecs) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<h3>پیشنهادها:</h3>';

    items.forEach(function(item) {
        let html = '<div class="item">';
        html += '<strong>' + item.name + '</strong><br>';
        if (showSpecs && item.specs) html += '<small>' + item.specs + '</small><br>';
        if (item.price !== undefined) html += '<strong>قیمت تقریبی: ' + item.price.toLocaleString() + ' تومان</strong><br>';
        if (item.link) html += '<a href="' + item.link + '" target="_blank">مشاهده و خرید در دیجی‌کالا ↗</a>';
        html += '</div>';
        container.innerHTML += html;
    });

    if (total !== null && containerId !== 'laptop-results') {
        container.innerHTML += '<p style="font-size:18px; color:#001F3F;"><strong>مجموع تقریبی: ' + total.toLocaleString() + ' تومان</strong></p>';
    }
    container.classList.remove('hidden');
}