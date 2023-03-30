import React, { useState } from "react";
import "./tab.css";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";

const allCatValues = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "All",
];
console.log(allCatValues);

const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);

  const filterMenu = (category) => {
    if (category === "all") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Fevourite Dish
      </h1>
      <hr />
      {/* our menu list will come here */}
      <CatMenu
        filterMenu={filterMenu}
        setItems={setItems}
        catItems={catItems}
      />

      {/* my main items section */}
      <MenuItems items={items} />
    </>
  );
};
export default GalleryReact;
