import React from "react";

const MenuItems = ({items}) => {
  return (
    <>
      <div className="row mt-5 d-flex justify-content-center d-grid gap-5">
        {items.map((elem) => {
          const { id, image, name, category, price, description } = elem;
          return (
            <div className="col-sm-3" key={id}>
              <div className="card ms-1">
                <img src={image} className="card-img-top" alt="menuPic" />
                <div className="card-body">
                  <h1 className="card-title">{name}</h1>
                  <p className="card-text">{description}</p>
                  <div className="menu-price-book">
                    <h2>Price : {price}</h2>
                    <a href="#" className="">
                      <button className="btn btn-primary">Order Now</button>
                    </a>
                  </div>
                  <p>*Prices may vary on selected date.</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MenuItems;
