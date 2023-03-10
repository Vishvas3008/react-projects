import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const MealsList = (props) => {
  const DUMMY_MEALS2 = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const [DUMMY_MEALS, setDummyMeal] = useState([...DUMMY_MEALS2]);

  useEffect(() => {
    if (props.newData) {
      setDummyMeal((prevstate) => {
        return [props.newData, ...prevstate];
      });
    }
  }, [props.newData]);
  const meals = DUMMY_MEALS.map((meals) => {
    return (
      <MealItem
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <ul>
        <Card>{meals}</Card>
      </ul>
    </section>
  );
};
export default MealsList;
