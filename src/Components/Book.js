import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import Home from "./Home";

// import Page1 from './Home';
// import Page2 from './Page2';
// Import other pages as needed

function Book() {
  return (
    <HTMLFlipBook width={550} 
    height={650} 
    showCover={true} 
    maxShadowOpacity={0.5}
    mobileScrollSupport={true}
    onFlip={(e) => console.log('Page flipped to:', e.data)}
    className="myBook" >
      <div className="demoPage">
        <Home />
      </div>
      <div className="demoPage">
        <Home />
      </div>
      <div className="demoPage">
        <Home />
      </div>
      <div className="demoPage">
        <Home />
      </div>
      <div className="demoPage">
        <Home />
      </div>
      <div className="demoPage">
        <Home />
      </div>
    </HTMLFlipBook>
  );
}

export default Book;
