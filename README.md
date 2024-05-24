# RecipeRadar

RecipeRadar is a web application built using React and Vite, designed to help users find recipes and detailed information about food items and their ingredients. The application utilizes the Edamam API to fetch data and provides a user-friendly, responsive interface for an optimal experience across devices.

## Live Demo

Check out the live application here: [RecipeRadar](https://reciperadar-prakash.netlify.app/)

## Features

- **Recipe Search**: Users can search for recipes by entering keywords or ingredients.
- **Detailed Information**: For each recipe, users can view detailed information including ingredients, preparation steps, and nutritional values.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on desktops, tablets, and mobile devices.

## Technologies Used

- **Frontend**: React
- **Build Tool**: Vite
- **API**: Edamam API
- **Styling**: Tailwind CSS
- **Deployment**: Netlify

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/reciperadar.git
   cd reciperadar
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory and add your Edamam API credentials**:
   ```sh
   VITE_APP_EDAMAM_APP_ID=your_app_id
   VITE_APP_EDAMAM_APP_KEY=your_app_key
   ```

4. **Start the development server**:
   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Search for Recipes**: Use the search bar on the homepage to enter recipe names.
2. **View Recipe Details**: Click on a Ingredients to view detailed information of the food item.
3. **Responsive Interface**: Enjoy the application on any device with an adaptive layout.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

1. **Fork the repository**.
2. **Create a new branch**:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```sh
   git commit -m 'Add some feature'
   ```
5. **Push to the branch**:
   ```sh
   git push origin feature/your-feature-name
   ```
6. **Open a pull request**.
