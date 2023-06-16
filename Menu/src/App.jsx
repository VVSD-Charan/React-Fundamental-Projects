import { useState } from "react";
import { Title } from "./Title";
import { menu } from "./data";
import { Menu } from "./Menu";
import { Categories } from "./Categories";

//Stores catrgories of all menu items
//Creating set to remove duplicates
//Converting set into array by adding "all" as an element
// console.log(menu);
let allItems = [];
menu.map((item)=>{
  allItems.push(item.category);
})
// console.log(allItems);
const allCategories=['all',...new Set(allItems)];

const App = () => {

  const [menuItems,setMenuItems]=useState(menu);
  const [categories,setCategories]=useState(allCategories);
  const filterItems = (category) =>
  {
    console.log(category);
    const newItems = menu.filter((item)=>item.category===category);
    setMenuItems(newItems);

    if(category==="all")
    {
      setMenuItems(menu);
    }
  }

  return (
    <main>
      <section className="menu">
        <Title text='Our Menu' />
        <Categories myCategories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section> 
    </main>
  );
};
export default App;
