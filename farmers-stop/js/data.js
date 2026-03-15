// =============================================
// FARMERS STOP – Shared Product Data
// =============================================

const PRODUCTS = [
  // FRUITS
  { id:1, name:"Alphonso Mangoes", emoji:"🥭", cat:"fruits", price:180, mrp:240, discount:25, unit:"kg", farm:"Ratnagiri Farms, MH", badge:"Seasonal", fresh:true },
  { id:2, name:"Desi Tomatoes", emoji:"🍅", cat:"vegetables", price:28, mrp:40, discount:30, unit:"kg", farm:"Nashik Valley, MH", badge:"Sale", fresh:true },
  { id:3, name:"Organic Bananas", emoji:"🍌", cat:"fruits", price:40, mrp:55, discount:27, unit:"dozen", farm:"Jalgaon Farmers, MH", badge:"Organic", fresh:true },
  { id:4, name:"Fresh Spinach", emoji:"🥬", cat:"leafy", price:22, mrp:30, discount:27, unit:"bunch", farm:"Pune Green Belt", badge:"Fresh", fresh:true },
  { id:5, name:"Green Capsicum", emoji:"🫑", cat:"vegetables", price:45, mrp:60, discount:25, unit:"kg", farm:"Ooty Farms, TN", badge:"Sale", fresh:true },
  { id:6, name:"Sweet Lime", emoji:"🍋", cat:"fruits", price:35, mrp:50, discount:30, unit:"kg", farm:"Nagpur Orchards", badge:"Fresh", fresh:true },
  { id:7, name:"Bottle Gourd", emoji:"🥒", cat:"vegetables", price:18, mrp:25, discount:28, unit:"piece", farm:"Vidarbha, MH", badge:"", fresh:true },
  { id:8, name:"Fenugreek Leaves", emoji:"🌿", cat:"leafy", price:15, mrp:20, discount:25, unit:"bunch", farm:"Rajasthan Farms", badge:"Fresh", fresh:true },
  { id:9, name:"Watermelon", emoji:"🍉", cat:"seasonal", price:25, mrp:35, discount:29, unit:"kg", farm:"Karnataka Plains", badge:"Seasonal", fresh:true },
  { id:10, name:"Brinjal (Eggplant)", emoji:"🍆", cat:"vegetables", price:30, mrp:42, discount:29, unit:"kg", farm:"Solapur, MH", badge:"", fresh:true },
  { id:11, name:"Desi Guava", emoji:"🍐", cat:"fruits", price:50, mrp:70, discount:29, unit:"kg", farm:"Allahabad Farms, UP", badge:"Organic", fresh:true },
  { id:12, name:"Coriander Bundle", emoji:"🌿", cat:"herbs", price:10, mrp:15, discount:33, unit:"bundle", farm:"Local Farms", badge:"Fresh", fresh:true },
  { id:13, name:"Red Chilli", emoji:"🌶️", cat:"vegetables", price:60, mrp:80, discount:25, unit:"kg", farm:"Andhra Pradesh", badge:"", fresh:false },
  { id:14, name:"Pumpkin", emoji:"🎃", cat:"vegetables", price:22, mrp:30, discount:27, unit:"kg", farm:"Konkan Region, MH", badge:"", fresh:true },
  { id:15, name:"Sweet Potato", emoji:"🍠", cat:"seasonal", price:35, mrp:48, discount:27, unit:"kg", farm:"Bihar Plains", badge:"Seasonal", fresh:true },
  { id:16, name:"Baby Corn", emoji:"🌽", cat:"vegetables", price:55, mrp:75, discount:27, unit:"250g", farm:"Punjab Farms", badge:"Fresh", fresh:true },
];

const SUGGESTIONS = {
  fruits: [3,6,9,11],
  vegetables: [2,5,7,10],
  leafy: [4,8,12],
  seasonal: [1,9,15],
  herbs: [8,12],
  grains: [],
};

// Cart stored in localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('fs_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('fs_cart', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
}
function addToCart(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...prod, qty: 1 }); }
  saveCart(cart);
  showToast(`🛒 ${prod.name} added to cart!`);
}
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function renderProductCard(prod) {
  return `
    <div class="product-card" onclick="location.href='product-detail.html?id=${prod.id}'">
      <div class="product-img">
        <span>${prod.emoji}</span>
        ${prod.badge ? `<span class="product-badge ${prod.fresh ? 'fresh' : ''}">${prod.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${prod.name}</div>
        <div class="product-farm">🌾 ${prod.farm}</div>
        <div class="product-price-row">
          <span class="product-price">₹${prod.price}/${prod.unit}</span>
          <span class="product-mrp">₹${prod.mrp}</span>
          <span class="product-discount">${prod.discount}% off</span>
        </div>
        <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${prod.id})">
          🛒 Add to Cart
        </button>
      </div>
    </div>`;
}
