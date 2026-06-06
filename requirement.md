
Shopping Cart - Redux Assignment
Develop a Shopping Cart application using React & Redux, where users can:

Add products to the cart
Add products to the wishlist
Apply discount coupons

Functional Requirements ===
Feature	Description
Add to Cart	Users should be able to add products to the shopping cart.
Remove from Cart	Users can remove items from their cart.
Increase Quantity	Increase the quantity of a product in the cart.
Decrease Quantity	Decrease the quantity of a product in the cart.
Wishlist Feature	Users can add or remove items from their wishlist.
Apply Coupons	Discount coupons can be applied to the total cart value.

Application Features
Feature	Description
Cart Management	Users can add, remove, increase, or decrease items in their cart.
Wishlist Management	Items can be added or removed from the wishlist.
Discounts	Users can apply promo codes to receive discounts.
State Management	Implement Redux for handling the shopping cart state.
Live Preview

Shopping Cart Application


Redux Setup
Component	Description
Redux Actions	Handles adding/removing items, updating quantities, and applying discounts.
Redux Reducer	Manages cart, wishlist, and discount states.
Cart Component	Displays cart items, total cost, and controls for quantity management.
Wishlist Component	Shows wishlist items and allows easy adding/removal.

Evaluation Criteria
Criteria	Description
Redux State Management	Uses Redux actions & reducers effectively for cart, wishlist, and discount states.
Cart Functionality	Adding, removing, increasing, and decreasing cart items works correctly.
Wishlist Feature	Users can add or remove items from their wishlist.
Coupon Feature	Discounts should be applied and reflected correctly.
Passes Cypress Tests	Must satisfy all test cases.

Project Setup
1️⃣ Install Node.js (Version 16 or later)
Step	Command	Description
Check Node Version	node -v	Verify installed Node.js version.
Install Node.js v16 (if not installed)	nvm install 16	Download and install Node.js v16.
Use Node.js v16	nvm use 16	Set Node.js v16 as the active version.
2️⃣ Install Dependencies
Step	Command	Description
Add Dependencies	(Include Redux and React dependencies in package.json if required.)	Define required libraries.
Install Packages	npm install	Install dependencies from package.json.
3️⃣ Run the Project
Step	Command	Description
Start Development Server	npm start	Launches the project on http://localhost:8080.
