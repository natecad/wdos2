document.addEventListener('DOMContentLoaded', () => {
    const orderTable = document.getElementById('checkoutTable');
    const totalPriceSpan = document.getElementById('checkoutTotal');
    const form = document.getElementById('checkoutForm');

    const order = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the "cart" data
    let total = 0;

    if (order.length > 0) {
        orderTable.innerHTML = '<tr><th>Item</th><th>Quantity</th><th>Price</th></tr>';
        order.forEach(item => {
            const price = item.unitPrice * item.quantity;
            total += price;
            orderTable.innerHTML += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${price.toFixed(2)}</td></tr>`;
        });
    } else {
        orderTable.innerHTML = '<tr><td colspan="3">No items in order</td></tr>';
    }

    totalPriceSpan.textContent = `$${total.toFixed(2)}`;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const payment = document.getElementById('payment').value.trim();

        if (name && email && address && payment) {
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate() + 5);
            const formattedDate = deliveryDate.toDateString();

            alert(`Thank you for your purchase, ${name}! Your order will be delivered by ${formattedDate}.`);
            localStorage.removeItem('cart'); // Clear the cart after purchase
            window.location.href = 'order.html';
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
});