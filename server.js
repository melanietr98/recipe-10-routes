const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Route for a recipe page
app.get('/recipe/:id', (req, res) => {
  const recipe = {
    id: req.params.id,
    title: 'Pesto Pasta',
    ingredients: ['1 pound pasta', '2 cups fresh basil', '1/2 cup pine nuts', '3 cloves garlic', '1/2 cup olive oil', '1/2 cup grated parmesan cheese'],
    directions: ['Cook pasta according to package instructions.', 'Combine basil, pine nuts, garlic, and olive oil in a food processor and pulse until smooth.', 'Add parmesan cheese and pulse until combined.', 'Toss pasta with pesto sauce.', 'Serve hot.']
  };

  res.render('recipe', { recipe });
});

// Route for a recipe list
app.get('/recipes', (req, res) => {
  const recipes = [
    { id: 1, title: 'Pesto Pasta' },,
  ];

  res.render('recipes', { recipes });
});

app.get('/recipes/spaghetti-bolognese', function(req, res) {
  const ingredients = ['1 lb ground beef', '1 onion, chopped', '3 cloves garlic, minced', '1 can crushed tomatoes', '1 tsp dried basil', '1 tsp dried oregano', '1/2 tsp salt', '1/4 tsp black pepper', '1 lb spaghetti'];
  const instructions = ['Brown the beef in a large pot over medium-high heat.', 'Add the onion and garlic and cook until the onion is soft.', 'Add the crushed tomatoes, basil, oregano, salt, and pepper. Bring to a simmer and let cook for 10-15 minutes.', 'While the sauce is cooking, cook the spaghetti according to the package directions.', 'Serve the sauce over the spaghetti.'];

  res.render('spaghetti-bolognese', { ingredients: ingredients, instructions: instructions });
});

app.get('/recipes/chicken-alfredo-pasta', function(req, res) {
  const ingredients = ['1 lb fettuccine pasta', '1 lb chicken breast, cut into small pieces', '2 tbsp butter', '2 garlic cloves, minced', '1 1/2 cups heavy cream', '1 cup grated Parmesan cheese', 'Salt and pepper to taste'];
  const instructions = ['Cook the pasta according to the package directions.', 'In a separate pan, cook the chicken in butter over medium-high heat until no longer pink.', 'Add garlic to the chicken and cook for another minute.', 'Stir in heavy cream and Parmesan cheese and heat until the cheese has melted and the sauce has thickened.', 'Season with salt and pepper to taste.', 'Combine the pasta and sauce in a large serving dish and serve immediately.'];

  res.render('chicken-alfredo-pasta', { ingredients: ingredients, instructions: instructions });
});

app.get('/recipes/veggie-stir-fry', function(req, res) {
  const ingredients = ['2 tablespoons vegetable oil', '2 cloves garlic, minced', '1 tablespoon grated ginger', '1 large onion, sliced', '2 bell peppers, sliced', '1 small head broccoli, chopped', '1 large carrot, sliced', '8 oz mushrooms, sliced', '2 tablespoons soy sauce', '2 tablespoons oyster sauce', '1 tablespoon cornstarch', '1/4 cup water'];
  const instructions = ['Heat the oil in a wok or large skillet over high heat.', 'Add the garlic and ginger and stir-fry for 30 seconds.', 'Add the onion, bell peppers, broccoli, and carrot and stir-fry for 3-4 minutes, or until the vegetables are crisp-tender.', 'Add the mushrooms and stir-fry for another 2-3 minutes.', 'In a small bowl, whisk together the soy sauce, oyster sauce, cornstarch, and water.', 'Add the sauce to the wok and stir-fry until the sauce thickens and coats the vegetables.', 'Serve immediately.'];

  res.render('veggie-stir-fry', { ingredients: ingredients, instructions: instructions });
});


// Route for a recipe search
app.get('/search', (req, res) => {
  const query = req.query.q;

  res.render('search', { query });
});

// Route for a recipe form
app.get('/new-recipe', (req, res) => {
  res.render('new-recipe');
});

// Route for handling recipe form submissions
app.post('/new-recipe', (req, res) => {
  // Handle form submission logic here
});

// Route for an "About Me" page
app.get('/about', (req, res) => {
  res.render('about');
});

// Route for the cooking videos page
app.get('/cooking-videos', (req, res) => {
  const videos = [
    { title: 'How to make lasagna', url: 'https://www.youtube.com/watch?v=0ge3VV-HTTA' },
    { title: 'Easy chicken stir-fry', url: 'https://www.youtube.com/watch?v=5dybdeTylz0' },
    { title: 'Chocolate chip cookie recipe', url: 'https://www.youtube.com/watch?v=loqCY9b7aec' }
  ];
  res.render('cooking-videos', { videos });
});

// Route for a "Desserts" page
app.get('/desserts', (req, res) => {
  const desserts = [
   
  ];

  res.render('desserts', { desserts });
});

// Route for the chocolate cake recipe page
app.get('/desserts/chocolate-cake', (req, res) => {
  const recipe = {
    title: 'Chocolate Cake',
    ingredients: ['flour', 'sugar', 'cocoa powder', 'baking soda', 'salt', 'eggs', 'oil', 'vanilla extract', 'buttermilk', 'hot water'],
    instructions: ['Preheat oven to 350°F (175°C).', 'In a large bowl, whisk together the dry ingredients.', 'Add the wet ingredients and mix until well combined.', 'Add the hot water and mix again until smooth.', 'Pour the batter into a greased 9-inch cake pan.', 'Bake for 30-35 minutes, or until a toothpick inserted into the center of the cake comes out clean.', 'Let cool before serving.'],
  };
  res.render('chocolate-cake', { recipe });
});

// Route for the cheesecake recipe page
app.get('/desserts/cheesecake', (req, res) => {
  const recipe = {
    title: 'Cheesecake',
    ingredients: ['graham cracker crumbs', 'sugar', 'butter', 'cream cheese', 'vanilla extract', 'eggs', 'sour cream'],
    instructions: ['Preheat oven to 325°F (160°C).', 'Mix together graham cracker crumbs, sugar, and melted butter.', 'Press mixture into the bottom of a greased 9-inch springform pan.', 'In a large bowl, beat cream cheese until smooth.', 'Add sugar, vanilla extract, and eggs, and mix until well combined.', 'Fold in sour cream.', 'Pour mixture into the prepared crust.', 'Bake for 45-50 minutes, or until the center is almost set.', 'Let cool before serving.'],
  };
  res.render('cheesecake', { recipe });
});

// Route for the brownie recipe page
app.get('/desserts/brownies', (req, res) => {
  const recipe = {
    title: 'Brownies',
    ingredients: ['unsalted butter', 'granulated sugar', 'cocoa powder', 'salt', 'vanilla extract', 'eggs', 'all-purpose flour', 'chocolate chips'],
    instructions: ['Preheat the oven to 350°F (175°C) and grease a 9-inch square baking pan.', 'Melt the butter in a medium saucepan over low heat.', 'Add the sugar and cocoa powder to the melted butter, whisking until well combined.', 'Add the salt, vanilla extract, and eggs, whisking until the mixture is smooth.', 'Stir in the flour and chocolate chips until just combined.', 'Pour the batter into the prepared pan and smooth the top with a spatula.', 'Bake for 20-25 minutes, or until a toothpick inserted into the center of the brownies comes out with a few moist crumbs attached.', 'Let cool before slicing and serving.'],
  };
  res.render('brownies', { recipe });
});

// Route for a "Contact" page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Route for a 404 error page
app.use((req, res) => {
  res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
