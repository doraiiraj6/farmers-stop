# 🌿 Farmers Stop – Complete Website

> **"Where farms are right away to your home"**

A full farm-to-home e-commerce website built with pure HTML, CSS & JavaScript.
No frameworks needed. Just open in a browser!

---

## 📁 Project Structure

```
farmers-stop/
│
├── index.html          ← Homepage (hero, categories, flash sale, ads)
├── login.html          ← Sign In / Register page
├── products.html       ← Product listing with filters & search
├── product-detail.html ← Single product detail + suggestions
├── cart.html           ← Shopping cart + order summary
├── payment.html        ← Checkout with UPI / Card / COD
├── orders.html         ← My Orders + delivery tracker
├── admin.html          ← Admin dashboard (password: admin/admin123)
│
├── css/
│   └── style.css       ← All styles (earth tone theme)
│
└── js/
    ├── data.js         ← Shared product data + cart functions
    └── main.js         ← Homepage logic (timer, ads, products)
```

---

## 🚀 How to Open in VS Code

1. Open VS Code
2. File → Open Folder → Select `farmers-stop/`
3. Install the **Live Server** extension (Extensions tab, search "Live Server")
4. Right-click `index.html` → **"Open with Live Server"**
5. Website opens at `http://127.0.0.1:5500`

---

## 🔐 Login Credentials

| Role  | Username | Password  |
|-------|----------|-----------|
| Admin | admin    | admin123  |
| User  | any name | any pass  |

> Admin login redirects to the Admin Panel automatically.

---

## 🌈 Pages & Features

| Page | Features |
|------|----------|
| **Homepage** | Animated hero with floating leaves, ticker ads, categories, flash sale countdown, new arrivals, rotating banners |
| **Login** | Sign in / Register tabs, Guest browsing, animated background |
| **Products** | Category filters, price range slider, search, sort, chips |
| **Product Detail** | Emoji display, quantity selector, add to cart, buy now, related suggestions |
| **Cart** | Qty control, remove items, coupon codes, order summary, cart suggestions |
| **Payment** | UPI (GPay/PhonePe/Paytm), Card form, Net Banking, Cash on Delivery, order placed confirmation |
| **Orders** | Order history, status tracker (5 steps), reorder links |
| **Admin** | Dashboard with stats + chart, product CRUD, order management, customer list, notification sender, ad manager |

---

## 🎨 Color Theme (Mother Earth)

| Color | Hex | Used for |
|-------|-----|----------|
| Mud Brown | `#5C3D2E` | Navbar, footer, headings |
| Leaf Green | `#4A7C59` | Buttons, accents, CTAs |
| Soil Cream | `#C9A87C` | Highlights, offer strips |
| Earth Cream | `#FDF6EC` | Page background |
| Terracotta | `#C0392B` | Badges, alerts |
| Mango | `#E67E22` | Secondary CTAs |

---

## 🛒 Coupon Codes (for testing)
- `FRESH10` → ₹10 off
- `FARM20` → ₹20 off

---

## 🔮 To Go Live (Next Steps)

To make this a real production website, you'll need:

1. **Backend**: Node.js + Express OR PHP OR Python Flask
2. **Database**: MongoDB or MySQL to store products, users, orders
3. **Real Payments**: Integrate Razorpay or PayU (they have Indian UPI support)
4. **Authentication**: JWT tokens or sessions
5. **Hosting**: Deploy to Vercel, Netlify (frontend) + Railway/Render (backend)

### Razorpay Quick Integration:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```
Then create an order via their API and call `rzp.open()` on checkout.

---

## 📱 Mobile Responsive
- Works on mobile, tablet, and desktop
- Navbar collapses on small screens
- Sidebar stacks below products on mobile

---

Made with 🌿 for India's farmers | FarmersStop 2025
