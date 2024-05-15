## E-commerce React App

This is an e-commerce application built in React. It features basic e-commerce functionalities.

### Functionalities

- **Routes:** The application has two main routes: the home page (Home) and the products page (Productos).
- **Product Listing:** The application displays a list of products obtained from the Fakestore public API. This list has a search filter by product name and sorting by price (ascending or descending).
- **Add Products to Cart:** Each product in the list has a button that allows adding it to the shopping cart (Only when logged in).
- **Shopping Cart:** The shopping cart displays relevant information about the products added by the user. It allows deleting the entered products, updating the total value of the purchase. The cart persists in the browser's localStorage for each user, meaning that if the user logs out and logs back in, the cart will remain loaded.
- **Register:** Allows creating a user and persisting it in Firebase.
- **Login:** After having created users, it is possible to log into the system allowing the functionality of adding products to the cart.

### Installation

To run the application in your local environment, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/Br20/ECommerce
   ```

2. Navigate to the project directory:

   ```
   cd ECommerce
   ```

3. Install the necessary dependencies:

   ```
   npm install
   ```

4. (OPTIONAL) If running in a Node environment, uncomment lines 7 and 14 in /services/firebase.js, create a `.env` file in the project root, and define the following necessary environment variables.

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

   Note: For security reasons, this should be the recommended flow, but for practical purposes, Firebase data was hardcoded in that file.

5. Start the application:

   ```
   npm run dev
   ```

6. Access the application in your web browser via the URL provided by the development server.