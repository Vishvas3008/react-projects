import React, { Fragment } from "react";
import classes from "./Header.module.css"
import foodImage from "../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onshowcart={props.onshowcart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt="This is just a pic"></img>
      </div>
    </Fragment>
  );
};

export default Header;
