import React from "react";
 



export default function  ImageGallery( props ) {
  return (
    <div className="spellbook">
      <h1>{props.title}</h1>
      <img src={props.image} />
    </div>
  );
  
    
};

// this.state = {
//   bookData: imageGallery,
//   isOpen: true
// };