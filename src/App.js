import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { useEffect } from "react";
import items from "./data";

const allCategory = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategory);

function App() {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, [items]);

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategory);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
