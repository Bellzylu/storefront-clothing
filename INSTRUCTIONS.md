# Case - Wishlist App 

## Introduction
Your task is to create an engaging product wishlist feature that not only meets functional requirements but also provides a delightful user experience. This feature aims to improve user engagement and facilitate a more personalized shopping experience.

![image](https://i.imgur.com/z0I9DVA.jpg)

## Task
Build a standalone app that enables users to curate and share a product wishlist using our provided API endpoints. This app should allow users to efficiently search for, select, and manage their favorite products.

### Requirements
- Implement a text input for searching and selecting products using the provided API.
- Display selected products in a grid layout as product cards, showing:
   - Product Name
   - Price
   - Variant Name
   - Available Sizes
   - Variants
- Allow users to remove items from the wishlist.
- Enable wishlist sharing through a URL, preserving the wishlist state.
- Incorporate functionality for users to choose their preferred currency (as provided by the API).
- Ensure the app is responsive across different devices.
- Aim for an intuitive and user-friendly interface.
- Notify users about low stock or out-of-stock items.

### Design and Assets
- Use Open Sans font as per the provided screenshot: [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Find the logo and heart icon in the `./assets/` directory.

### Development Guidelines
- Start with a simple setup like create-react-app.
- Choose any frontend framework or vanilla ECMAScript 6.
- Base requirements should be met without external libraries or packages. However, feel free to use them for additional features.
- You have the freedom to structure the project folder as you see fit.
- Ensure the submission is viewable; provide build instructions or a pre-built public folder.

### User Stories (For Context)
- As a user, I want to easily search and add products to my wishlist, so I can keep track of items I'm interested in.
- As a user, I want to share my wishlist with friends, so they know what gifts I would like.
- As a shopper, I want to be notified about stock levels of items in my wishlist, so I can make timely purchase decisions.

### Evaluation Criteria
- Functionality: Does the app meet the specified requirements?
- Usability: Is the app easy to use and navigate?
- Code Quality: Is the code well-organized and readable?
- Creativity: Are there any innovative features or implementations?

### Tips
- Strive for a functional implementation; perfection is not expected.
- Focus on the general logic and workflow; move on if stuck.
- Extra functionality is welcome but not at the expense of significant additional time.
- Understand the implemented features; we'll discuss them during the review.

### Submission
Please submit your project via a GitHub repository link, including any necessary build instructions or a live demo link.

### Contact
For any queries or clarifications, please reach out to alex@frend.no

*We wish you the best of luck and look forward to your creative solutions!*

## API Endpoints

You have access to the following API endpoints:


- All Products: `https://frend-fe-case.vercel.app/api/products`
  - Receives a POST request and returns data, for the correct context.


 ### SEARCH

```json
   {
      "limit": 10,
      "skipFirst": 0,
      "search": "shirts"
  }
```

  - The following data can be passed to the API, to search for the first 10 products


### PRODUCTS BY ID
```json
{
 "products": [887,797]
}
```


  - The following call would return the product with IDs 887 and 797, the API return this ID as "product".
ie 


``` json
{
         ...
         "product": "797",
         "name": "Cosmetics Fold Up Roll",
         "uri": "cosmetics-fold-up-roll",
        ...
}
```



## OPTIONAL ENDPOINTS
### SINGLE PRODUCT



- Single Product: `https://frend-fe-case.vercel.app/api/products/{uri}`
  - Retrieve details for a specific product.
 

### RANDOMIZE STOCK

- Randomize stock: `https://frend-fe-case.vercel.app/api/stock`

Since the app should respond to stock changes, this endpoint can be used to test how the app respond to stock changes.
  
 The stock of the follwing products can receive a randomized stock based of "few", "no", or "yes". 
 Just send a GET request, and the stock will be randomly changed.

_THE ENDPOINT DOES NOT RETURN ANY STOCK VALUES_

```json
[
    {
      "product": "842",
      "name": "Beauty bag",
      "uri": "beauty-bag-2220321-blossom",
    },
    {
      "product": "499",
      "name": "Plissé Jumpsuit",
      "uri": "plisse-jumpsuit-2240615-black",
    },
    {
      "product": "931",
      "name": "Poplin Maxi Dress",
      "uri": "poplin-maxi-dress",
    },
    {
      "product": "932",
      "name": "Poplin Midi Dress",
      "uri": "poplin-midi-dress",
    },
  ],
```



---

Feel free to explore the API and utilize the provided endpoints to create a seamless and engaging wishlist experience for users.



