# Project Marriage-Media

users

- /api/users (POST)
- /api/users (GET)
- /api/users/profiles (GET)
- /api/users/profile/:id (GET)
- /api/users/:email (GET)
- /api/users/admin/:email (GET)
- /api/userLimitUpdate/:email (PATCH)
- /api/userTypeUpdate/:email (PATCH)
- /api/allUser/:role (GET)
- /api/users/seller/:email (GET)
- /api/users/admin/:id (PUT)
- /api/users/seller/:id (PUT)
- /api/buyers/:id (DELETE)
- /api/sellers/:id (DELETE)

Profile

- /api/searchProfile (GET)
- /api/profiles/:id (GET)
- /api/profile (GET)

  package

  - /api/addPackage (POST)
  - /api/packages (GET)
  - /api/pkg/:pkg (GET)
  - /api/packages/:email (GET)
  - /api/packages/:id (DELETE)
  - /api/pac/:id (GET)
  - /api/packageUpdate/:id (PUT)

  priviledges

  - /api/addPriviledges (PATCH)
  - /api/priviledges (GET)
  - /api/priviledges/:id (GET)

  about

  - /api/addAboutus (POST)
  - /api/aboutus (GET)

  categories

  - /api/categories/ (GET)
  - /api/categories/:id (GET)
  - /api/categories/:name (GET)

  products

  - /api/products (GET)
  - /api/products/:email (GET)
  - /api/addProduct (POST)
  - /api/addProduct/addAdvertisement/:id (PUT)
  - /api/addProduct/removeAdvertisement/:id (PUT)
  - /api/products/:id (DELETE)

  bookings

  - /api/bookings (GET)
  - /api/bookings (POST)
  - /api/bookings/:id (GET)
  - /api/payments (POST)

  wishlists

  - /api/wishlist (POST)
  - /api/wishlists (GET)

  payments

  - /api/create-payment-intent (POST)

  JWT

  - /api/jwt/
