// logic pembayaran
document.getElementById('user-name').textContent = getCurrentUser();
updateCartBadge();

// Tandai metode yang sudah dipilih sebelumnya
selectPayment(getSelectedPayment());

function selectPayment(method) {
    saveSelectedPayment(method);
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    const el = document.getElementById('pay-' + method);
    if (el) el.classList.add('selected');
}