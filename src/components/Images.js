import React, { useState, useCallback,useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image1 from "../images/NFT.png";
import Image2 from "../images/dating.PNG";
import Image3 from "../images/Screenshot_3.png";
import Image4 from "../images/Screenshot_4.png";
function Images(props) {
  const AllData = [Image1, Image2, Image3, Image4];
  const { images } = props;
  console.log(images);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);


  return (
    <div className="col-lg-12 servicesSectionImage" style={{display:'flex',flexDirection:width>760?'row':'column',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
      {images &&
        images.map((data, index) => (
          <div style={{display:"flex",flexDirection:'column',cursor:'pointer'}}>
            <img
              src={data[0]}
              onClick={() =>  window.open(data[2])}
              width="300"
              height="200"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
            <h3 onClick={() =>  window.open(data[2])} style={{marginTop:'10px',color:'green',cursor:'pointer'}}>{data[1]}</h3>
        </div>
        ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default Images;
