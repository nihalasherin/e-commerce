*UrbanCart* is an e-commerce website showcasing essential functionality for an online shopping platform. It utilizes a mock API to deliver a seamless user experience with features such as product listing, detailed product descriptions, search functionality, and product ratings.


 Features

1. *Product Listing*
- Displays a comprehensive list of products fetched from a mock API.
- Each product includes a thumbnail, name, price, and rating.

2. *Product Description*
- Clicking on a product redirects users to a dedicated *Single Product Page*.
- Includes detailed information:
  - Product name
  - High-resolution image
  - Price
  - Description
  - Ratings and reviews

3. *Search Functionality*
- Allows users to search for products by name.
- Real-time filtering to display search results.

4. *Product Ratings*
- Displays a rating out of 5 stars for each product.
- Helps users make informed decisions.

5. *Responsive Design*
- Optimized for desktop, tablet, and mobile devices.

Technologies Used

Frontend
- React.js: Framework for building the user interface.
- React Router: For navigation between pages.
- CSS: Styling and responsive design.

Backend (Mock API)
- *JSON Server*: Simulated backend to provide API endpoints.

Tools & Libraries
- *Axios*: For HTTP requests.
- *Font Awesome* & *React Icons*: For icons and star ratings.


 How to Run the Project

Step 1: Clone the Repository
bash
git clone https://github.com/YourUsername/UrbanCart.git


Step 2: Navigate to the Project Directory
bash
cd UrbanCart


Step 3: Install Dependencies
bash
npm install


Step 4: Start the Mock API
Run the mock API server:
bash
npx json-server --watch db.json --port 5000


Step 5: Start the Application
bash
npm start

