import React, { useState } from "react";
import AllImages from "./../../allImages.json";
import HomeImageTile from "./HomeImageTile.js";
import "./ImageGrid.scss";
import { useMediaQuery } from "react-responsive";
import { useWindowWidth } from "@react-hook/window-size/throttled";

// function version
function ImageGrid(props) {
  //too many packages
  const onlyWidth = useWindowWidth();

  //SHEEET
  const handleMediaQueryChange = matches => {
    if (matches) {
      setScaleFactor(maxScaleFactor);
      toggleImgMargins(false);
    } else {
      setScaleFactor(shet);
      toggleImgMargins(true);
    }
  };

  const isBigScreen = useMediaQuery(
    { minWidth: 992 },
    undefined,
    handleMediaQueryChange
  );
  //  {isBigScreen ? <p>iz big</p> : <p>iz no big</p>}

  const maxScaleFactor = 0.15;
  const shet = 0.3;
  const [scaleFactor, setScaleFactor] = useState(() =>
    isBigScreen ? maxScaleFactor : shet
  );
  const [imgMarginsToggle, toggleImgMargins] = useState(!isBigScreen);

  //ohgod oh god
  function populateImages() {
    const originalWidths = props.homeImages.map((image, id) => {
      return AllImages[image].width;
    });
    return props.homeImages.map((image, id) => {
      return (
        <HomeImageTile
          scaleFactor={scaleFactor}
          maxScaleFactor={maxScaleFactor}
          naturalWidth={originalWidths[id]}
          imgMarginsToggle={imgMarginsToggle}
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
        className={
          isBigScreen
            ? "align-items-center d-flex flex-row"
            : "align-items-center d-flex flex-column"
        }
      >
        {populateImages()}
      </div>
    </div>
    //  </div>
  );
}

export default ImageGrid;
