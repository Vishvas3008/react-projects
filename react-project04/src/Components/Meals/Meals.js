import { Fragment } from "react";
import MealsSummery from "./MealsSummery";
import MealsList from "./MealsList";


const Meals = (props) => {
  return <Fragment>
    <MealsSummery/>
    <MealsList/>
  </Fragment>;
};
export default Meals;
