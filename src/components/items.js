import React, { Component } from "react"
import ImageGallery from "./img"
import Fire from "./images/firebook.png"
import Water from "./images/waterbook1.png"
import Air from "./images/windbook.png"
import Earth from "./images/earthbook.png"
const imageData = [
    {bookTitle: "FireMana", image: Fire},
    {bookTitle: "WaterMana", image: Water},
    {bookTitle: "AirMana", image: Air},
    {bookTitle: "EarthMana", image: Earth},
    ];
export default class Items extends Component {
    constructor(props) {
        super();
    
        this.state = {
          bookData: imageData,
          isOpen: true
        };
        this.bookData = this.bookData.bind(this)
    }
    bookData (){
        return this.state.bookData.map(image =>{
        return (
            
                <ImageGallery
                title={image.bookTitle}
                image={image.image}
                />
            
        );
    });
}
    render() {
  
        
        return (
            <div className="items">
                {/* <ImageGallery title="my title" image={Fire} /> */}
                {this.bookData()}
            </div>
        )
    };
    
}