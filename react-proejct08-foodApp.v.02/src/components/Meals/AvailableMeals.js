import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const { isLoading, error, sendRequest: fetchFood } = useHttp();
  const [meals, setmeals] = useState([]);
  useEffect(() => {
    fetchFood(
      { url: "https://food-v-102-default-rtdb.firebaseio.com/food.json" },
      transformFood
    );
    const mealsList = [];
    function transformFood(data) {
      console.log(data);
      for (const key in data) {
        mealsList.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setmeals(mealsList);
    }
  }, [fetchFood]);
  const mealsList1 = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      {error && <Card>{error}</Card>}
      {isLoading && <Card>loading...</Card>}
      {!isLoading && !error && (
        <Card>
          <ul>{mealsList1}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
