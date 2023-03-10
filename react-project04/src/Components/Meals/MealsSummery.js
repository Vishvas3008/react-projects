import { useState, Fragment } from "react";
import classes from "./MealsSummary.module.css";
const MealsSummery = (props) => {
  const [IsOrdering, setIsOrdering] = useState(false);
  const [Item, setItem] = useState("");
  const [Description, setdescription] = useState("");
  const [Price, setPrice] = useState("");
  const onOrederhandler = () => {
    setIsOrdering(true);
  };
  const onCancelHandler = (e) => {
    e.preventDefault();
    setIsOrdering(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsOrdering(false);
    console.log(Item, Description, Price);
    props.newData({
      name: Item,
      description: Description,
      price: Price,
      id: `m${Math.trunc(Math.random() * 100)}`,
    });
  };
  const onItemChange = (e) => {
    setItem(e.target.value);
  };
  const onDesChange = (e) => {
    setdescription(e.target.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <Fragment>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
        {!IsOrdering && (
          <button onClick={onOrederhandler} className={classes.button}>
            Order
          </button>
        )}
        {IsOrdering && (
          <form>
            <div>
              <label>Item</label>
              <input onChange={onItemChange} type="text"></input>
            </div>
            <div>
              <label>description</label>
              <input onChange={onDesChange} type="text"></input>
            </div>
            <div>
              <label>price</label>
              <input onChange={onPriceChange} type="number"></input>
            </div>
            <div>
              <button onClick={onCancelHandler}>Cancel</button>
              <button onClick={onSubmitHandler}  type="submit">
                ADD
              </button>
            </div>
          </form>
        )}
      </section>
    </Fragment>
  );
};
export default MealsSummery;
