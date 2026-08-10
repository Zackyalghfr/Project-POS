// logic menu
document.getElementById('user-name').textContent = getCurrentUser();
updateCartBadge();

function filterMenu() {
    const cat = document.getElementById('category-select').value;
    const q   = document.getElementById('search-input').value.toLowerCase();

    const filtered = menuData.filter(m =>
        (cat === 'all' || m.category === cat) &&
        m.name.toLowerCase().includes(q)
    );

    document.getElementById('food-grid').innerHTML = filtered.map(m => `
        <div class="food-card">
            <img src="${m.img}" alt="${m.name}"
                onerror="this.src='https://placehold.co/300x140/e0e3ea/555?text=No+Image'">
            <div class="food-card-body">
                <div class="food-card-name">${m.name}</div>
                <div class="food-card-footer">
                    <span class="price-badge">${fmtRp(m.price)}</span>
                    <button class="add-btn" onclick="addToCart(${m.id})" title="Tambah ke pesanan">
                        ${SVG.plus}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const cart = getCart();
    cart[id] = (cart[id] || 0) + 1;
    saveCart(cart);
    updateCartBadge();
}

filterMenu();