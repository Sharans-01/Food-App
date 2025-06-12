export const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    image: 'https://images.pexels.com/photos/3872434/pexels-photo-3872434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 42
  },
  {
    id: 'biryani',
    name: 'Briyani',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 67
  },
    {
    id: 'chicken',
    name: 'Chicken',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 67
  },
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 28
  },
 
  {
    id: 'burger',
    name: 'Burger',
    image: 'https://images.pexels.com/photos/4057697/pexels-photo-4057697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 54
  },
  {
    id: 'dessert',
    name: 'Dessert',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 35
  },
  
  
  {
    id: 'drinks',
    name: 'Drinks',
    image: 'https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 46
  }
];

export const recipes = [
  {
  id: '101',
  title: 'Masala Dosa',
  image: '/breakfast/dosa.jpg',
  rating: 4.7,
  time: 30,
  servings: 2,
  difficulty: 'Medium',
  category: 'breakfast',
  cost: 20.00,
  description: 'Crispy fermented rice and lentil crepe filled with spicy mashed potatoes, served with chutney and sambar.'
},

{
  id: '102',
  title: 'Steamed Idli',
  image: '/breakfast/idly.jpg',
  rating: 4.6,
  time: 20,
  servings: 3,
  difficulty: 'Easy',
  category: 'breakfast',
  cost: 15.00,
  description: 'Soft, fluffy steamed rice cakes made from fermented batter, typically served with coconut chutney and hot sambar.'
},

{
  id: '103',
  title: 'Ven Pongal',
  image: '/breakfast/pongal.jpg',
  rating: 4.5,
  time: 25,
  servings: 2,
  difficulty: 'Easy',
  category: 'breakfast',
  cost: 18.50,
  description: 'A savory rice and lentil dish tempered with black pepper, cumin, ginger, and ghee-roasted cashews.'
},
{
  id: '104',
  title: 'Poori with Potato Masala',
  image: '/breakfast/poori.jpg',
  rating: 4.6,
  time: 30,
  servings: 2,
  difficulty: 'Medium',
  category: 'breakfast',
  cost: 22.00,
  description: 'Fluffy deep-fried whole wheat bread served with mildly spiced mashed potato curry.'
},

{
  id: '105',
  title: 'Medu Vada',
  image: '/breakfast/vada.jpg',
  rating: 4.8,
  time: 35,
  servings: 3,
  difficulty: 'Medium',
  category: 'breakfast',
  cost: 20.00,
  description: 'Crispy golden South Indian lentil fritters served with coconut chutney and hot sambar.'
},

// chicken

{
  id: '301',
  title: 'Chicken Lollipop',
  image: '/chicken/lollipop.jpg',
  rating: 4.7,
  time: 30,
  servings: 3,
  difficulty: 'Medium',
  category: 'chicken',
  cost: 22.00,
  description: 'Crispy deep-fried chicken wings frenched into a lollipop shape, marinated with Indo-Chinese spices and served with spicy sauce.'
},
{
  id: '302',
  title: 'Chicken 65',
  image: '/chicken/chicken 65.JPG',
  rating: 4.8,
  time: 25,
  servings: 2,
  difficulty: 'Easy',
  category: 'chicken',
  cost: 20.00,
  description: 'Spicy, deep-fried South Indian chicken dish tossed with curry leaves, green chilies, and a hint of garlic.'
},
{
  id: '303',
  title: 'Tandoori Chicken',
  image: '/chicken/tandoori.jpg',
  rating: 4.9,
  time: 45,
  servings: 2,
  difficulty: 'Medium',
  category: 'chicken',
  cost: 26.00,
  description: 'Whole chicken leg quarters marinated in yogurt and tandoori spices, grilled to smoky perfection.'
},
{
  id: '304',
  title: 'Chicken Pakora',
  image: '/chicken/pakora.jpg',
  rating: 4.6,
  time: 20,
  servings: 3,
  difficulty: 'Easy',
  category: 'chicken',
  cost: 18.00,
  description: 'Bite-sized chicken chunks dipped in spicy gram flour batter and deep-fried until golden and crisp.'
},
{
  id: '305',
  title: 'Pepper Chicken Dry',
  image: '/chicken/pepper.jpg',
  rating: 4.7,
  time: 35,
  servings: 2,
  difficulty: 'Medium',
  category: 'chicken',
  cost: 24.00,
  description: 'A spicy dry chicken dish sautéed with freshly ground black pepper, curry leaves, and aromatic South Indian masalas.'
},
{
  id: '306',
  title: 'Chilli Chicken',
  image: '/chicken/chilli.jpg',
  rating: 4.8,
  time: 30,
  servings: 2,
  difficulty: 'Medium',
  category: 'chicken',
  cost: 23.00,
  description: 'Crispy fried chicken tossed in a spicy Indo-Chinese sauce with bell peppers, onions, and green chilies for a perfect appetizer or side.'
},

//biryani

{
  id: '401',
  title: 'Hyderabadi Chicken Biryani',
  image: '/biryani/hyderabadi.jpg',
  rating: 4.9,
  time: 60,
  servings: 4,
  difficulty: 'Hard',
  category: 'biryani',
  cost: 28.00,
  description: 'Aromatic basmati rice cooked with marinated chicken in rich spices, layered and slow-cooked in traditional dum style.'
},
{
  id: '402',
  title: 'Mutton Biryani',
  image: '/biryani/mutton.jpg',
  rating: 4.8,
  time: 75,
  servings: 4,
  difficulty: 'Hard',
  category: 'biryani',
  cost: 32.00,
  description: 'Tender pieces of mutton layered with long grain rice and cooked on low flame for a flavorful and juicy biryani.'
},
{
  id: '403',
  title: 'Egg Biryani',
  image: '/biryani/egg.jpg',
  rating: 4.6,
  time: 40,
  servings: 3,
  difficulty: 'Medium',
  category: 'biryani',
  cost: 20.00,
  description: 'Boiled eggs cooked in spiced biryani masala and layered with fragrant rice for a quick and satisfying meal.'
},
{
  id: '404',
  title: 'Fish Biryani',
  image: '/biryani/fish.jpg',
  rating: 4.5,
  time: 50,
  servings: 3,
  difficulty: 'Medium',
  category: 'biryani',
  cost: 26.00,
  description: 'Delicate fish fillets marinated in aromatic spices and layered with biryani rice for a seafood twist on the classic.'
},
{
  id: '405',
  title: 'Ambur Biryani',
  image: '/biryani/ambur.jpg',
  rating: 4.8,
  time: 50,
  servings: 4,
  difficulty: 'Medium',
  category: 'biryani',
  cost: 25.00,
  description: 'Tamil Nadu’s famous Ambur Biryani, prepared using seeraga samba rice and a special red chili paste with seared mutton or chicken.'
},
{
  id: '406',
  title: 'Dindigul Biryani',
  image: '/biryani/dindigul.jpg',
  rating: 4.7,
  time: 50,
  servings: 4,
  difficulty: 'Medium',
  category: 'biryani',
  cost: 23.50,
  description: 'A Tamil Nadu specialty biryani made using short-grain seeraga samba rice, peppery masala, and tender meat, known for its tangy and spicy profile.'
},

//pizza

{
  id: '501',
  title: 'Margherita Pizza',
  image: '/pizza/margherita.jpg',
  rating: 4.6,
  time: 20,
  servings: 2,
  difficulty: 'Easy',
  category: 'pizza',
  cost: 14.99,
  description: 'Classic Italian pizza topped with fresh mozzarella, basil leaves, and tomato sauce on a thin crust.'
},
{
  id: '502',
  title: 'Pepperoni Pizza',
  image: '/pizza/pepperoni.jpg',
  rating: 4.8,
  time: 25,
  servings: 3,
  difficulty: 'Easy',
  category: 'pizza',
  cost: 17.99,
  description: 'Loaded with spicy pepperoni slices, mozzarella cheese, and tangy tomato sauce on a crispy base.'
},
{
  id: '503',
  title: 'Veggie Supreme Pizza',
  image: '/pizza/veggie.jpg',
  rating: 4.5,
  time: 25,
  servings: 3,
  difficulty: 'Medium',
  category: 'pizza',
  cost: 15.50,
  description: 'A colorful mix of bell peppers, onions, olives, mushrooms, and tomatoes over a cheesy layer.'
},
{
  id: '512',
  title: 'Farmhouse Veggie Pizza',
  image: '/pizza/farmhouse.jpg',
  rating: 4.6,
  time: 25,
  servings: 3,
  difficulty: 'Easy',
  category: 'pizza',
  cost: 16.50,
  description: 'A delightful mix of fresh capsicum, tomatoes, mushrooms, onions, and sweet corn topped with melted cheese.'
},
{
  id: '504',
  title: 'Chicken Tikka Pizza',
  image: '/pizza/tikka.jpeg',
  rating: 4.7,
  time: 30,
  servings: 3,
  difficulty: 'Medium',
  category: 'pizza',
  cost: 18.50,
  description: 'A fusion pizza with spicy chicken tikka pieces, onions, and mint chutney on a cheese base.'
},


{
  id: '506',
  title: 'BBQ Chicken Pizza',
  image: '/pizza/bbq.jpg',
  rating: 4.8,
  time: 30,
  servings: 3,
  difficulty: 'Medium',
  category: 'pizza',
  cost: 18.99,
  description: 'Tangy barbecue sauce topped with grilled chicken, red onions, and melted mozzarella.'
},
{
  id: '508',
  title: 'Spicy Chicken Sausage Pizza',
  image: '/pizza/sausage.jpg',
  rating: 4.6,
  time: 25,
  servings: 3,
  difficulty: 'Easy',
  category: 'pizza',
  cost: 17.50,
  description: 'A flavorful combination of chicken sausage, chili flakes, and jalapeños on cheesy crust.'
},

{
  id: '509',
  title: 'Tandoori Chicken Pizza',
  image: '/pizza/tandoori pizza.jpg',
  rating: 4.8,
  time: 30,
  servings: 3,
  difficulty: 'Medium',
  category: 'pizza',
  cost: 18.25,
  description: 'Fusion delight with spicy tandoori chicken, onions, and mint mayo on a soft cheese crust.'
},
{
  id: '513',
  title: 'Peri Peri Chicken Pizza',
  image: '/pizza/peri.jpg',
  rating: 4.8,
  time: 28,
  servings: 3,
  difficulty: 'Medium',
  category: 'pizza',
  cost: 19.75,
  description: 'Zesty peri peri marinated chicken chunks, bell peppers, and onions on a spicy tomato base topped with gooey cheese.'
},

//burger

{
  id: '606',
  title: 'Veggie Delight Burger',
  image: '/burger/veg delight.jpeg',
  rating: 4.4,
  time: 18,
  servings: 1,
  difficulty: 'Easy',
  category: 'burger',
  cost: 7.50,
  description: 'Grilled mixed-vegetable patty with fresh greens, cheese, and mayo.'
},
{
  id: '607',
  title: 'Paneer Tikka Burger',
  image: '/burger/tikka burger.jpg',
  rating: 4.6,
  time: 20,
  servings: 1,
  difficulty: 'Medium',
  category: 'burger',
  cost: 8.25,
  description: 'Marinated paneer grilled and stacked with onion rings and mint chutney.'
},
{
  id: '608',
  title: 'Mushroom Swiss Burger',
  image: '/burger/mushroom.jpg',
  rating: 4.5,
  time: 22,
  servings: 1,
  difficulty: 'Medium',
  category: 'burger',
  cost: 8.75,
  description: 'Sautéed mushrooms and Swiss cheese on a grilled veggie patty with creamy sauce.'
},
{
  id: '609',
  title: 'Spicy Bean Burger',
  image: '/burger/beam.jpeg',
  rating: 4.3,
  time: 20,
  servings: 1,
  difficulty: 'Easy',
  category: 'burger',
  cost: 7.25,
  description: 'Spiced black bean patty with jalapeños, lettuce, tomato, and hot sauce.'
},
{
  id: '601',
  title: 'Classic Chicken Burger',
  image: '/burger/classic.jpg',
  rating: 4.7,
  time: 20,
  servings: 1,
  difficulty: 'Easy',
  category: 'burger',
  cost: 8.99,
  description: 'Juicy grilled chicken patty with lettuce, tomato, and mayo in a toasted bun.'
},
{
  id: '602',
  title: 'Cheesy Beef Burger',
  image: '/burger/beef1.jpeg',
  rating: 4.8,
  time: 22,
  servings: 1,
  difficulty: 'Medium',
  category: 'burger',
  cost: 10.50,
  description: 'Grilled beef patty topped with cheddar cheese, onions, pickles, and ketchup.'
},
{
  id: '603',
  title: 'Peri Peri Chicken Burger',
  image: '/burger/peri burger.jpg',
  rating: 4.6,
  time: 18,
  servings: 1,
  difficulty: 'Medium',
  category: 'burger',
  cost: 9.75,
  description: 'Spicy peri peri grilled chicken with lettuce, mayo, and onions in a sesame bun.'
},
{
  id: '604',
  title: 'Crispy Fish Burger',
  image: '/burger/fish burger.jpg',
  rating: 4.5,
  time: 20,
  servings: 1,
  difficulty: 'Medium',
  category: 'burger',
  cost: 9.50,
  description: 'Golden-fried fish fillet, tartar sauce, lettuce, and pickles in a soft bun.'
},
{
  id: '605',
  title: 'Double Chicken Burger',
  image: '/burger/double chicken.jpeg',
  rating: 4.9,
  time: 25,
  servings: 1,
  difficulty: 'Hard',
  category: 'burger',
  cost: 11.25,
  description: 'Two layers of spicy chicken patties with cheese, lettuce, and special sauce.'
},


//deserts

{
  id: '701',
  title: 'Gulab Jamun',
  image: '/dessert/jamun.jpg',
  rating: 4.9,
  time: 30,
  servings: 4,
  difficulty: 'Easy',
  category: 'dessert',
  cost: 5.50,
  description: 'Soft and spongy milk-based balls soaked in rose-flavored sugar syrup.'
},
{
  id: '702',
  title: 'Rasmalai',
  image: '/dessert/rasamalai.jpg',
  rating: 4.8,
  time: 45,
  servings: 4,
  difficulty: 'Medium',
  category: 'dessert',
  cost: 6.75,
  description: 'Creamy, soft paneer discs soaked in flavored thickened milk, garnished with dry fruits.'
},
{
  id: '703',
  title: 'Chocolate Brownie',
  image: '/dessert/brownie.jpg',
  rating: 4.7,
  time: 35,
  servings: 6,
  difficulty: 'Easy',
  category: 'dessert',
  cost: 4.25,
  description: 'Rich and fudgy chocolate brownies with a crispy crust and gooey center.'
},
{
  id: '704',
  title: 'Vanilla Ice Cream',
  image: '/dessert/vanilla.jpg',
  rating: 4.6,
  time: 20,
  servings: 4,
  difficulty: 'Easy',
  category: 'dessert',
  cost: 3.50,
  description: 'Classic creamy vanilla ice cream made with real vanilla beans.'
},
{
  id: '705',
  title: 'Glazed Donuts',
  image: '/dessert/donut.jpeg',
  rating: 4.5,
  time: 25,
  servings: 5,
  difficulty: 'Medium',
  category: 'dessert',
  cost: 5.99,
  description: 'Fluffy fried donuts dipped in a shiny vanilla sugar glaze.'
},
{
  id: '706',
  title: 'Mango Kulfi',
  image: '/dessert/mango.jpeg',
  rating: 4.8,
  time: 40,
  servings: 4,
  difficulty: 'Medium',
  category: 'dessert',
  cost: 4.75,
  description: 'Frozen Indian mango dessert made with condensed milk, cream, and cardamom.'
},

//drinks

{
  id: '801',
  title: 'Masala Chai',
  image: '/drinks/tea.jpg',
  rating: 4.9,
  time: 15,
  servings: 2,
  difficulty: 'Easy',
  category: 'drinks',
  cost: 2.00,
  description: 'Traditional Indian spiced tea made with milk, ginger, and a blend of aromatic spices.'
},
{
  id: '802',
  title: 'Fresh Lime Soda',
  image: '/drinks/lime.jpeg',
  rating: 4.7,
  time: 5,
  servings: 1,
  difficulty: 'Easy',
  category: 'drinks',
  cost: 1.50,
  description: 'Refreshing drink made with fresh lime juice, soda, and a touch of sugar or salt.'
},
{
  id: '803',
  title: 'Mango Lassi',
  image: '/drinks/lassi.jpeg',
  rating: 4.8,
  time: 10,
  servings: 2,
  difficulty: 'Easy',
  category: 'drinks',
  cost: 3.00,
  description: 'Chilled yogurt-based mango drink, sweet and creamy with a hint of cardamom.'
},
{
  id: '804',
  title: 'Cold Coffee',
  image: '/drinks/cold coffee.jpg',
  rating: 4.6,
  time: 8,
  servings: 1,
  difficulty: 'Easy',
  category: 'drinks',
  cost: 3.50,
  description: 'Chilled, frothy coffee blended with milk and sugar. Perfect summer beverage.'
},
{
  id: '805',
  title: 'Taro Bubble Tea',
  image: '/drinks/bubble.jpeg',
  rating: 4.7,
  time: 15,
  servings: 1,
  difficulty: 'Medium',
  category: 'drinks',
  cost: 4.99,
  description: 'Purple taro-flavored tea with chewy tapioca pearls served cold with ice.'
},
{
  id: '806',
  title: 'Strawberry Milkshake',
  image: '/drinks/milkshake.jpg',
  rating: 4.8,
  time: 7,
  servings: 1,
  difficulty: 'Easy',
  category: 'drinks',
  cost: 3.20,
  description: 'Creamy milkshake made with fresh strawberries, milk, and a scoop of ice cream.'
}



















































];