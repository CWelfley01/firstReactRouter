import React from "react";
import Items from "./items";
import styles from "../style/store.scss"

export default function Store() {
  return (
  <div className="store">
    <div className="store-header">
      <h1 className="store-title" >Mages Keep</h1>
      <h2 className="store-title" >Books, Scrolls, Spellwork and Ingredients</h2>
    </div>
  
    <div className="item-wrapper">
      <Items />
    </div>
  </div>
  );
}