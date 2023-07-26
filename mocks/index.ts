import {Food} from '@models';

const DUMMY_DATA: Food[] = [
  {
    id: 1,
    name: 'Veggie Burger',
    description:
      'A delicious plant-based burger patty with fresh vegetables and special sauce.',
    vegan: true,
    weight: 200,
    calories: 350,
    price: 8.99,
    message: 'Try our best-selling veggie burger!',
    availability: 10,
    spicy: true,
    image:
      'https://assets.bonappetit.com/photos/57acae2d1b33404414975121/4:3/w_3235,h_2426,c_limit/ultimate-veggie-burger.jpg',
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description:
      'Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.',
    vegan: false,
    weight: 400,
    calories: 550,
    price: 12.5,
    spicy: false,
    message: 'Enjoy the authentic taste of Italy!',
    availability: 7,
    image:
      'https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled.jpg',
  },
  {
    id: 3,
    name: 'Greek Salad',
    description:
      'Fresh and healthy salad with tomatoes, cucumbers, olives, feta cheese, and olive oil.',
    vegan: true,
    spicy: true,
    weight: 300,
    calories: 180,
    price: 6.99,
    message: 'Taste the Mediterranean flavors!',
    availability: 15,
    image:
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg',
  },
  {
    id: 4,
    name: 'Spaghetti Bolognese',
    description:
      'Classic Italian pasta dish with a rich meaty Bolognese sauce.',
    vegan: false,
    weight: 350,
    spicy: true,
    calories: 480,
    price: 9.5,
    message: 'A comforting and satisfying meal!',
    availability: 12,
    image:
      'https://supervalu.ie/thumbnail/800x600/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg',
  },
  {
    id: 5,
    name: 'Chocolate Brownie',
    description:
      'Decadent chocolate brownie topped with a scoop of vanilla ice cream.',
    vegan: false,
    weight: 150,
    calories: 380,
    spicy: false,
    price: 4.99,
    message: 'Indulge in our irresistible dessert!',
    availability: 5,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 6,
    name: 'Green Smoothie',
    description:
      'Refreshing smoothie made with spinach, banana, apple, and coconut water.',
    vegan: true,
    spicy: true,
    weight: 250,
    calories: 120,
    price: 5.5,
    message: 'Start your day with a burst of nutrients!',
    availability: 8,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 7,
    name: 'Chicken Caesar Salad',
    description:
      'Classic Caesar salad with grilled chicken, croutons, and Caesar dressing.',
    vegan: false,
    weight: 320,
    calories: 420,
    price: 7.75,
    message: 'A timeless favorite with a twist!',
    availability: 9,
    spicy: true,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 8,
    name: 'Fruit Parfait',
    description:
      'Layers of yogurt, granola, and mixed fruits topped with honey and nuts.',
    vegan: true,
    weight: 180,
    spicy: false,
    calories: 250,
    price: 6.25,
    message: 'A delightful and healthy treat!',
    availability: 6,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  },
  {
    id: 9,
    name: 'Sushi Platter',
    description:
      'Assortment of fresh and colorful sushi rolls with soy sauce and wasabi.',
    vegan: false,
    weight: 500,
    spicy: true,
    calories: 620,
    price: 15.99,
    message: 'Experience the art of Japanese cuisine!',
    availability: 11,
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
  },
];

const getFoodData = (): Promise<Food[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (DUMMY_DATA) {
        resolve(DUMMY_DATA);
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });

export default getFoodData;
