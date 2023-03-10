import { useState, Fragment } from "react";
import MealsSummery from "./MealsSummery";
import MealsList from "./MealsList";

const Meals = (props) => {
  const [newdataobj, setnewdataobj] = useState("");
  const newAddedData = (obj) => {
    // console.log(obj);
    setnewdataobj(obj)
  };
  return (
    <Fragment>
      <MealsSummery newData={newAddedData} />
      <MealsList newData={newdataobj} />
    </Fragment>
  );
};
export default Meals;
