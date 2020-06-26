import React from "react";
import AllImages from "./../../allImages.json";
import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";
import { useMediaQuery } from "react-responsive";
// import { useWindowWidth } from "@react-hook/window-size/throttled";

// hard coded values to set scale factor parameters
const breakPointScreenSize = 992; // set when window width ehhhh to switch to collumn small mode
const maxScaleFactor = 0.16; //scale factor on large screens, doesn't change

const HOMEIMAGES = [
  "Brooch with criss cross 1",
  "Brooch with gold disks 2",
  "Brooch with gold wires2"
];

const originalWidths = HOMEIMAGES.map((image, id) => {
  return AllImages[image].width;
});
//console.log(originalWidths);

// Weird Responsive stuff =============================================
// WHY DOES THIS WORK
// a_n = qaw
// b_n = qbw
// a/b = a_n / b_n
// [a,b,c] = [800,200,400]
// w = 800 = width
// q=.88/a
const maxImgIndex = originalWidths.reduce(
  (iMax, x, i, arr) => (x > arr[iMax] ? i : iMax),
  0
);
const sumFirstThree = originalWidths.reduce((a, b) => a + b, 0);
//console.log(sumFirstThree);
const maxImgWidth = originalWidths[maxImgIndex];
//const q = 0.9 / originalWidths[maxImgIndex];
const ratioWidthToLargest = originalWidths.map(
  (width, id) => width / maxImgWidth
);
const ratioWidthToSum = originalWidths.map(
  (width, id) => width / sumFirstThree
);
//console.log(originalWidths[maxImgIndex]);
//console.log(q);
//console.log(ratioWidthToLargest);

// function version
function ImageGrid(props) {
  const isBigScreen = useMediaQuery({ minWidth: breakPointScreenSize });
  //  {isBigScreen ? <p>iz big</p> : <p>iz no big</p>}

  //ohgod oh god
  function populateImages() {
    return HOMEIMAGES.map((image, id) => {
      return (
        <HomeImageTile
          maxScaleFactor={maxScaleFactor}
          naturalWidth={originalWidths[id]}
          isBigScreen={isBigScreen}
          ratioWidthToLargest={ratioWidthToLargest[id]}
          ratioWidthToSum={ratioWidthToSum[id]}
          {...AllImages[image]}
          id={id}
          key={id}
        />
      );
    });
  }

  return (
    <div
      className="row justify-content-center"
      style={{ position: "relative", top: "30px" }}
    >
      <div
        className={`align-items-center ${
          isBigScreen ? "d-flex flex-row" : "d-flex flex-column"
        }`}
      >
        {populateImages()}
      </div>
    </div>
    //  </div>
  );
}

export default ImageGrid;
