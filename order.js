const parts = {
    processors: [
        { name: "Intel i5", price: 220, img: "https://no.mouser.com/images/marketingid/2016/img/124853014_Intel_Corei5-650014nmDesktopProcessors.png?v=070223.0227h" },
        { name: "Intel i7", price: 220, img: "https://hksmart.lk/wp-content/uploads/2025/01/Untitled-design-2025-01-25T160840.940.png" },
        { name: "AMD Ryzen 5", price: 220, img: "https://www.nexxcom.lk/wp-content/uploads/2024/04/AMD-RYZEN-7-2700-PROCESSOR-min.png" },
        { name: "AMD Ryzen 7", price: 330, img: "https://www.nexxcom.lk/wp-content/uploads/2024/04/AMD-RYZEN-7-2700-PROCESSOR-min.png" },
        { name: "Intel i9", price: 500, img: "https://downloads.lk/wp-content/uploads/2022/11/processer10.png" },
        { name: "AMD Threadripper", price: 900, img: "https://www.dateks.lv/images/pic/2400/2400/160/1758.jpg" },
    ],
    gpus: [
        { name: "GTX 1650", price: 150, img: "https://asset.msi.com/resize/image/global/product/product_10_20191029131030_5db7c9c6b9a7a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" },
        { name: "RTX 3060", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOYMRp_eBYmbRqme11QneGA2Jgi_HfGCFlA&s" },
        { name: "RTX 3080", price: 700, img: "https://mdcomputers.lk/wp-content/uploads/2023/07/4257.jpg" },
        { name: "RX 6600", price: 270, img: "https://static.gigabyte.com/StaticFile/Image/Global/865d279bd693f4c54b7c54c3a97faa25/Product/29603" },
        { name: "RX 6800", price: 480, img: "https://images-cdn.ubuy.co.in/63403ef00dbac1051c112c5c-msi-gaming-radeon-rx-6800-xt-16gb-gdrr6.jpg" },
        { name: "RTX 4090", price: 1500, img: "https://www.gamestreet.lk/images/products/4485.jpg" },
    ],
    motherboards: [
        { name: "MSI B450", price: 100, img: "https://www.sense.lk/images/uploads/product/63369_460_MSI-B450-GAMING-PLUS-MAX-1.png" },
        { name: "ASUS Prime Z590", price: 220, img: "https://dlcdnwebimgs.asus.com/gain/0fe90837-b557-45b4-9be3-f7310a62fdda/w800" },
        { name: "Gigabyte A520", price: 90, img: "https://www.trippodo.com/794900-large_default/gigabyte-a520-aorus-elite-motherboard-amd-a520-socket-am4-atx.jpg" },
        { name: "ASRock B550", price: 120, img: "https://c1.neweggimages.com/ProductImageCompressAll1280/13-157-936-V03.jpg" },
        { name: "MSI X570", price: 250, img: "https://asset.msi.com/resize/image/global/product/product_10_20190527093853_5ceb3fad643f4.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" },
        { name: "ASUS ROG Maximus", price: 400, img: "https://www.gamestreet.lk/images/products/2682.jpg" },
    ],
    ram: [
        { name: "8GB DDR4", price: 40, img: "https://richcom.lk/wp-content/uploads/2023/12/Kingston-8GB-DDR4-2400mhz-Desktop-RAM.png" },
        { name: "16GB DDR4", price: 80, img: "https://creative.lk/wp-content/uploads/2024/05/crucial-16gm-DR-700x700.jpg" },
        { name: "32GB DDR4", price: 160, img: "https://www.tpstech.in/cdn/shop/products/CT32G4DFD832A-_Fom_tpstech.in_-main3.jpg?v=1655381361&width=1445" },
        { name: "64GB DDR4", price: 300, img: "https://www.dateks.lv/images/pic/2400/2400/782/1573.jpg" },
    ],
    storage: [
        { name: "1TB HDD", price: 50, img: "https://mdcomputers.lk/wp-content/uploads/2023/01/images-86.jpeg" },
        { name: "2TB HDD", price: 80, img: "https://mdcomputers.lk/wp-content/uploads/2023/01/images-86.jpeg" },
        { name: "500GB SSD", price: 70, img: "https://redtech.lk/wp-content/uploads/2022/11/500GB-Kingston-NV2-PCIe-4.0-M.2-NVMe-SSD_0004_REDTECH.LK-copy-9-1.png" },
        { name: "1TB SSD", price: 130, img: "https://redtech.lk/wp-content/uploads/2023/09/Order-Now-1TB-SAMSUNG-990-PRO-PCIe-4.0-NVME-SSD.png" },
        { name: "2TB SSD", price: 250, img: "https://i0.wp.com/www.redlinetech.lk/wp-content/uploads/2024/06/SAMSUNG-990-PRO-SSD-2TB-PCIe-4.0-NVMe.webp" },
        { name: "4TB SSD", price: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQodCsyLB0FPtKkkCHyl6RWSP51EXLGh_OLQ&s" },
    ]
};


const cart = [];

function createItemCard(item, category) {
    return `
      <div class="item">
        <img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
        <input type="number" min="0" value="0" id="${item.name.replaceAll(' ', '')}-qty">
        <button onclick="addToCart('${category}', '${item.name}')">Add</button>
      </div>`;
}

function renderItems() {
    for (let category in parts) {
        const container = document.getElementById(category);
        parts[category].forEach(item => {
            container.innerHTML += createItemCard(item, category);
        });
    }
}

function addToCart(category, name) {
    const item = parts[category].find(p => p.name === name);
    const qtyInput = document.getElementById(`${name.replaceAll(' ', '')}-qty`);
    const quantity = parseInt(qtyInput.value);
    if (quantity > 0) {
        cart.push({ name, quantity, unitPrice: item.price });
        updateCart();
        qtyInput.value = 0;
    }
}

function updateCart() {
    const table = document.getElementById("cartTable");
    let total = 0;
    let html = `<tr><th>Item</th><th>Qty</th><th>Price</th></tr>`;
    cart.forEach(item => {
        const price = item.unitPrice * item.quantity;
        total += price;
        html += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>$${price.toFixed(2)}</td></tr>`;
    });
    table.innerHTML = html;
    document.getElementById("totalPrice").textContent = `$${total.toFixed(2)}`;
}

function saveFavourite() {
    localStorage.setItem("favouriteOrder", JSON.stringify(cart));
    alert("Order saved as favourite.");
}

function applyFavourite() {
    const favourite = JSON.parse(localStorage.getItem("favouriteOrder"));
    if (favourite) {
        cart.length = 0;
        favourite.forEach(item => cart.push(item));
        updateCart();
    } else {
        alert("No favourite order found.");
    }
}

function buyNow() {
    localStorage.setItem("currentOrder", JSON.stringify(cart));
    window.location.href = "checkout.html";
}

document.addEventListener("DOMContentLoaded", renderItems);
