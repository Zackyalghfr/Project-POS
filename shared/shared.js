
// Menu Data (sumber data terpusat) 
const menuData = [
    { id: 1, name: 'Nasi Goreng',   price: 12000, category: 'makanan', img: '../gambar/nasigoreng.jpg' },
    { id: 2, name: 'Es Teh Manis',  price: 5000, category: 'minuman', img: '../gambar/estehmanis.jpg' },
    { id: 3, name: 'Ayam Geprek',   price: 12000, category: 'makanan', img: '../gambar/ayamgeprek.jpg' },
    { id: 4, name: 'Sate Ayam',     price: 15000, category: 'makanan', img: '../gambar/sateayam.jpg' },
    { id: 5, name: 'Bakso Malang',  price: 10000, category: 'makanan', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8TicLzIHwfK89-XWDp-XIBSce0ZaZWJuVg&s' },
    { id: 6, name: 'Mie Ayam',      price: 15000, category: 'makanan', img: '../gambar/mieayam.jpg' },
    { id: 7, name: 'Soto Lamongan', price: 12000, category: 'makanan', img: '../gambar/sotolamongan.jpg' },
    { id: 8, name: 'Pecel Lele',    price: 14000, category: 'makanan', img: 'https://asset.kompas.com/crops/vhkkKrYsJtPGU9jIpuht1703nLs=/0x0:1000x667/1200x800/data/photo/2021/03/21/60569b33a2b3d.jpeg' },
];

//  SVG Icons 
const SVG = {
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>`,
    cash: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
        fill="none" stroke="#2456a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M6 12h.01M18 12h.01"/>
    </svg>`,
    qr: `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24"
        fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="5" y="5" width="3" height="3" fill="#111" stroke="none"/>
        <rect x="16" y="5" width="3" height="3" fill="#111" stroke="none"/>
        <rect x="5" y="16" width="3" height="3" fill="#111" stroke="none"/>
        <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3"/>
    </svg>`,
    wallet: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
        fill="none" stroke="#2456a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
    </svg>`,
    card: `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
        fill="none" stroke="#2456a4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
        <line x1="5" y1="15" x2="9" y2="15"/>
    </svg>`,
};


// local storage
function getCart() {
    return JSON.parse(localStorage.getItem('wl_cart') || '{}');
}

function saveCart(cart) {
    localStorage.setItem('wl_cart', JSON.stringify(cart));
}

function getSelectedPayment() {
    return localStorage.getItem('wl_payment') || 'qris';
}

function saveSelectedPayment(method) {
    localStorage.setItem('wl_payment', method);
}

function getOrderNumber() {
    let num = localStorage.getItem('wl_order_number');
    if (!num) {
        num = Math.floor(Math.random() * 9000) + 1000;
        localStorage.setItem('wl_order_number', num);
    }
    return num;
}

function resetOrder() {
    localStorage.removeItem('wl_cart');
    localStorage.removeItem('wl_payment');
    localStorage.removeItem('wl_order_number');
}

function getCurrentUser() {
    return localStorage.getItem('wl_user') || 'User';
}

function saveCurrentUser(name) {
    localStorage.setItem('wl_user', name);
}

// utilities
function fmtRp(n) {
    return 'Rp. ' + n.toLocaleString('id-ID');
}

function getCartCount() {
    const cart = getCart();
    return Object.values(cart).reduce((a, b) => a + b, 0);
}

function updateCartBadge() {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = getCartCount();
}