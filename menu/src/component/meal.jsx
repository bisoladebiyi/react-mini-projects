import React from 'react'

const Meal = ({ menu }) => {
    return (
        <div className="container">
            {menu.map((meal) => {
        const { id, title, price, img, desc } = meal;
        return (
          <div key={id} className="meals">
            <img src={img} alt="" className="meal-img" />
            <div className="meal-info">
              <div className="name-price">
                <p className="name">{title}</p>
                <p className="price">${price}</p>
              </div>
              <p className="desc">{desc}</p>
            </div>
          </div>
        );
      })}
            
        </div>
    )
}

export default Meal
