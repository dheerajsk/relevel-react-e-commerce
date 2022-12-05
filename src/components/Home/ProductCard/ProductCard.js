
import "./ProductCard.css";
import AppContext from "../../../context";
import { useContext } from "react";

function ProductCard(values) {
  
  const {dispatcherEvents} = useContext(AppContext);

  function AddtoCart(){
    dispatcherEvents("ADD_ITEM", values.item);
  }

  const key = values.item.id+"svg";

  let stars = [];
  for (let i = 0; i < Number(values.item.rating.rate); i++) {
    stars[i] = 1;
  }
  return (
    <div className="card">
      <h5 className="card-title">{values.item.title}</h5>
      <img src={values.item.image} alt="..."></img>
      <hr />
      <div className="card-body">
        <p className="card-text">{values.item.category}</p>
        <p className="stars">
          {stars.map((x, i) => (
            <svg
              key={key + i}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ))}
          &nbsp;&nbsp;
          <span>{values.item.rating.count}</span>
        </p>
        <p className="card-text">{values.item.description}</p>
        <a href="#" className="btn btn-success flex-box" onClick={AddtoCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-plus"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
            />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          &nbsp;Add To Cart
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
