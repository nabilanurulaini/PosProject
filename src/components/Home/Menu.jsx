/* eslint-disable react/prop-types */

import MenuItem from "./MenuItem";
import { Button, Card } from "flowbite-react";
const pizzas = [
  {
      id: 0,
      image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      name: "Cheese Pizza",
      price: 10000,
      quantity: 1,
      notes: ""
  },
  {
      id: 1,
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42-500x500.jpg",
      name: "Burger Pizza",
      price: 50000,
      quantity: 1,
      notes: ""
  },
  {
      id: 2,
      image: "https://cdn1-production-images-kly.akamaized.net/uBuE5OD3B9pUTVNJd81cB819z7Y=/0x194:5616x3359/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3048436/original/030475400_1581499756-shutterstock_413580649.jpg",
      name: "Spaghetti Pizza",
      price: 40000,
      quantity: 1,
      notes: ""
  },
  {
      id: 3,
      image: "https://www.allrecipes.com/thmb/e8uotDI18ieXNBY0KpmtGKbxMRM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_008-4x3-6ed91ba87a1344558aacc0f9ef0f4b41.jpg",
      name: "Mac n Cheese",
      price: 70000,
      quantity: 1,
      notes: ""
  },
  {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlquWG3IxfhfFixOYRDMb98u6h-dxoyPBIgQxxHe6GA&s",
      name: "Supreme Pizza",
      price: 80000,
      quantity: 1,
      notes: ""
  },
  {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9gcYHWhJ3McZtLnRIus_lSbh6bnOJ-XlHA&usqp=CAU",
      name: "Meat Lovers Pizza",
      price: 50000,
      quantity: 1,
      notes: ""
  },
  {
    id: 6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqr01hV4lq1gpUBEbMVYiGXo3HBKKMaZZqotcHvhtLOw&s",
    name: "Pastel Vegetarian",
    price: 50000,
    quantity: 1,
    notes: ""
},
{
  id: 7,
  image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
  name: "Lava Cake",
  price: 50000,
  quantity: 1,
  notes: ""
},
{
  id: 8,
  image: "https://www.southernliving.com/thmb/x5xM5QvARl_og39g1jD1N1HfUlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_005_16x9-24d8c7469367440bb9aad73e9a83ded9.jpg",
  name: "Lasagna",
  price: 50000,
  quantity: 1,
  notes: ""
},
{
  id: 9,
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sous_vide_mashed_potatoes.jpg/640px-Sous_vide_mashed_potatoes.jpg",
  name: "Mashed Potato",
  price: 50000,
  quantity: 1,
  notes: ""
},
{
  id: 10,
  image: "https://img.kurio.network/T5hjAfGtNy_82AO6Lg1eEFgzB4E=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/20/06/04/44e55652-cc69-47fb-aa0b-77504e09c779.jpg",
  name: "Fish n Cips",
  price: 50000,
  quantity: 1,
  notes: ""
},
{
  id: 11,
  image: "https://cdn1-production-images-kly.akamaized.net/SQ3_i0TaxR3iwt6G07nC4YHWVCY=/0x0:1000x563/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4019064/original/079301900_1652242455-shutterstock_348271130.jpg",
  name: "Hot Dog",
  price: 50000,
  quantity: 1,
  notes: ""
}
]//fungsi yang akan reducer tangkep sebagai action
function Menu({ dispatch, searchValue }) {
  const menu = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleAddToCart(pizza) {
    const notes = document.getElementById(`notes_${pizza.id}`).value;
    dispatch({
      type: "add_to_cart",
      payload: { ...pizza, notes },
    });
    document.getElementById(`notes_${pizza.id}`).value = "";
  }

  return (
    <div className="w-[80%]">
      <ul className="grid grid-cols-4 gap-5">
        {menu.map((pizza) => (
          <Card className="bg-[#f5f4ed] w-full p-[10px]" key={pizza.id}>
            <MenuItem
              key={pizza.id}
              name={pizza.name}
              image={pizza.image}
              price={pizza.price}
            />
            <input
              id={`notes_${pizza.id}`}
              className="px-5 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Add notes..."
            />
            <Button onClick={() => handleAddToCart(pizza)} color="warning">
              Add To Cart
            </Button>
          </Card>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
