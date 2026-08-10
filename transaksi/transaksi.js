// logic transaksi

document.getElementById('user-name').textContent = getCurrentUser();
updateCartBadge();

const paymentViews = {
    tunai:     `${SVG.cash}<div class="qr-label">Bayar dengan Tunai</div>`,
    qris:      `<div class="qr-box">${SVG.qr}</div><div class="qr-label">Scan untuk Bayar</div>`,
    kredit:    `${SVG.card}<div class="qr-label">Gesek Kartu Kredit/Debit</div>`,
    spaylater: `${SVG.wallet}<div class="qr-label">Bayar via SpayLater</div>`,
};

renderTransaksi();

function renderTransaksi() {
    const cart  = getCart();
    const items = Object.entries(cart).filter(([, q]) => q > 0);

    const subtotal = items.reduce((acc, [id, q]) => acc + (menuData.find(x => x.id == id).price * q), 0);
    const tax      = Math.round(subtotal * 0.10);
    const total    = subtotal - tax;

    document.getElementById('grand-total-txt').textContent  = `Grand Total: ${fmtRp(subtotal)}`;
    document.getElementById('tax-txt').textContent          = `Pajak (10%): ${fmtRp(tax)}`;
    document.getElementById('total-akhir-txt').textContent  = `Total Akhir: ${fmtRp(total)}`;
    document.getElementById('total-btn').textContent        = total.toLocaleString('id-ID');

    const method = getSelectedPayment();
    document.getElementById('qr-card').innerHTML = paymentViews[method] || paymentViews.qris;
}

function processPayment() {
    const cart = getCart();
    if (Object.keys(cart).length === 0) {
        alert('Tidak ada pesanan! Tambah makanan terlebih dahulu.');
        return;
    }

    alert('Pembayaran berhasil diproses!\nTerima kasih telah memesan di Warung Lalapan!');

    resetOrder();
    window.location.href = '../menu/menu.html';
}