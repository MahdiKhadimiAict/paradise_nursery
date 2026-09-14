# Paradise Nursery

Paradise Nursery is a simple e-commerce website built with **React.js** and **custom CSS** that lets visitors browse a catalog of houseplants, add them to a shopping cart, and manage their order.

## Features

### Landing Page (`/`)
- Full-screen background image (styling lives in `src/styles/pp.css`)
- Company name and company/about description (`src/components/AboutUs.jsx`)
- **Get Started** button that links to the Product Listing page

### Product Listing Page (`/products`)
- **18 unique houseplants** organized into **3 categories** (6 per category):
  - Low-Light Plants
  - Succulents & Cacti
  - Tropicals
- Each plant card shows a **thumbnail**, **name**, **price**, and an **Add to Cart** button
- The button becomes **disabled ("Added ✓")** once the product is in the cart

### Shopping Cart Page (`/cart`)
- Displays each plant's **thumbnail, name, unit price**, line total, and quantity
- **+ / −** buttons to increase or decrease the quantity of each plant
- **Delete** button to remove a plant from the cart
- Prominently shows the **total number of plants** and the **total cost**
- **Continue Shopping** button links back to the product listing
- **Checkout** button shows a "Coming Soon" message

### Header / Navigation
A navbar appears on the Landing, Product Listing, and Cart pages with links to
**Home**, **Plants**, and **Cart**. The Cart link includes a cart icon with a **badge
that dynamically shows the total number of items** in the cart (updates on every change).

## Tech Stack
- React 19
- React Router (routing)
- Redux Toolkit + React Redux (cart state lives in `src/features/cart/CartSlice.jsx`)
- Vite (build tool)
- Custom CSS only (no UI frameworks)

## Project Structure
```
Paradise Nursery/
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 # entry: Redux <Provider> + <BrowserRouter>
    ├── App.jsx                  # route definitions
    ├── app/store.js             # Redux store
    ├── data/plants.js           # plant catalog (3 categories x 6 plants)
    ├── features/
    │   └── cart/CartSlice.jsx   # Redux slice + selectors for the cart
    ├── components/
    │   ├── Navbar.jsx           # header with cart icon + dynamic badge
    │   └── AboutUs.jsx          # company description
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── ProductList.jsx
    │   └── CartItem.jsx         # shopping cart page
    └── styles/
        ├── index.css            # global styles + imports
        ├── pp.css               # landing page background image (Paradise Nursery)
        ├── navbar.css
        ├── products.css
        └── cart.css
```

## Getting Started
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production Build
```bash
npm run build
npm run preview
```

## Notes
- Plant photos are loaded from Unsplash; if the network is unavailable, the app
  falls back to a local placeholder illustration.
- No backend is required — the cart is stored entirely in Redux state for this demo.