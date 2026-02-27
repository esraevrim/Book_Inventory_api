document.addEventListener('DOMContentLoaded', async () => {
    let products = [];

    // localStorage'da veri varsa, onu kullan
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    } else {
        // Eğer localStorage boşsa, fetch ile JSON'dan veri al
        try {
            // Buraya ekleyebilirsin
            console.log('Fetching products...'); // fetch işlemine başlarken bunu loglayacağız

            const response = await fetch('https://raw.githubusercontent.com/esraevrim/products/main/products.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            products = await response.json();

            console.log('Products fetched:', products); // Veriler alındıktan sonra bunu loglayacağız
            localStorage.setItem('products', JSON.stringify(products));
        } catch (error) {
            console.error('Error fetching the JSON data:', error);
        }
    }

    displayProducts(products);
});


function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Önceki içeriği temizle
    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.width = '18rem';
        card.innerHTML = `
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Yazar</b>: ${product.author}</li>
                <li class="list-group-item"><b>Tür</b>: ${product.genre}</li>
                <li class="list-group-item"><b>Fiyat</b>: ${product.price} TL</li>
                <li class="list-group-item"><b>Stok:</b> ${product.stock}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="btn btn-primary" id="edit-btn-${index}">Düzenle</a>
            </div>
            <div class="edit-form" id="edit-form-${index}" style="display: none;">
                <input type="text" id="edit-name-${index}" value="${product.name}" class="form-control mb-2">
                <input type="text" id="edit-author-${index}" value="${product.author}" class="form-control mb-2">
                <input type="text" id="edit-genre-${index}" value="${product.genre}" class="form-control mb-2">
                <input type="number" id="edit-price-${index}" value="${product.price}" class="form-control mb-2">
                <input type="number" id="edit-stock-${index}" value="${product.stock}" class="form-control mb-2">
                <button class="btn btn-success" id="save-btn-${index}">Kaydet</button>
            </div>
        `;
        productList.appendChild(card);

        // Düzenle butonuna tıklandığında formu göster
        const editButton = document.getElementById(`edit-btn-${index}`);
        const editForm = document.getElementById(`edit-form-${index}`);
        const saveButton = document.getElementById(`save-btn-${index}`);

        editButton.addEventListener('click', (e) => {
            e.preventDefault();
            editForm.style.display = 'block';
        });

        // Kaydet butonuna tıklandığında kartı güncelle ve localStorage'a kaydet
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Formdaki yeni değerleri al
            const newName = document.getElementById(`edit-name-${index}`).value;
            const newAuthor = document.getElementById(`edit-author-${index}`).value;
            const newGenre = document.getElementById(`edit-genre-${index}`).value;
            const newPrice = document.getElementById(`edit-price-${index}`).value;
            const newStock = document.getElementById(`edit-stock-${index}`).value;

            // Ürün bilgilerini güncelle
            products[index] = {
                ...products[index],
                name: newName,
                author: newAuthor,
                genre: newGenre,
                price: newPrice,
                stock: newStock,
            };
            localStorage.setItem('products', JSON.stringify(products));
            console.log(products);
            displayProducts(products);
        });
    });
}
