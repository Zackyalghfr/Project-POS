// logic pesanan
document.getElementById('user-name').textContent = getCurrentUser();
document.getElementById('order-number').textContent = 'Pesanan #' + getOrderNumber();
updateCartBadge();
renderPesanan();

function renderPesanan() {
    const cart  = getCart();
    const list  = document.getElementById('order-list');
    const items = Object.entries(cart).filter(([, q]) => q > 0);

    if (items.length === 0) {
        list.innerHTML = '<p style="color:#888;text-align:center;margin-top:40px;">Belum ada pesanan. Tambah makanan dari Menu Utama.</p>';
        document.getElementById('subtotal-bar').textContent = 'Subtotal (0 items): Rp. 0';
        return;
    }

    list.innerHTML = items.map(([id, qty]) => {
        const m = menuData.find(x => x.id == id);
        return `
            <div class="order-item">
                <img src="${m.img}" alt="${m.name}"
                    onerror="this.src='https://placehold.co/80x64/e0e3ea/555?text=No+Image'">
                <div class="order-item-info">
                    <div class="order-item-name">${m.name}</div>
                    <div class="order-item-price">${fmtRp(m.price)}</div>
                </div>
                <div class="order-item-controls">
                    <span class="qty-badge">x${qty}</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQty(${id}, -1)">${SVG.minus}</button>
                        <button class="qty-btn" onclick="changeQty(${id},  1)">${SVG.plus}</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
    const sub      = items.reduce((acc, [id, q]) => acc + (menuData.find(x => x.id == id).price * q), 0);

    document.getElementById('subtotal-bar').textContent =
        `Subtotal (${totalQty} items): ${fmtRp(sub)}`;
}

function changeQty(id, delta) {
    const cart = getCart();
    cart[id] = Math.max(0, (cart[id] || 0) + delta);
    if (cart[id] === 0) delete cart[id];
    saveCart(cart);
    updateCartBadge();
    renderPesanan();
}