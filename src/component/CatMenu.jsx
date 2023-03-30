import React from "react";

const CatMenu = ({ filterMenu, catItems }) => {
  return (
    <>
      <div className="nav">
        <div className="button-design">
          {catItems.map((curElem, index) => {
            return (
              <button
                className="border-0"
                key={index}
                onClick={() => filterMenu(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CatMenu;
