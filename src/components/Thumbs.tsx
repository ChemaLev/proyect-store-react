import { useState } from "react";
import { ProductDetail } from "../types";

const Thumbs: React.FC<ProductDetail> = ({ product }) => {
  const { images } = product;

  const [imageFull, setImageFull] = useState<string>(images[0]);

  const handlerClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const targetName = event.target as HTMLImageElement;
    if (targetName.tagName == "IMG") {
      const newImage = targetName.src;
      setImageFull(newImage);
    }
  };

  return (
    <div className="product-images">
      <div className="product-images-secondary" onClick={handlerClick}>
        {images.map((image, index) => {
          return (
            <img
              key={index}
              className="product-image-mini"
              src={image}
              alt=""
            />
          );
        })}
      </div>
      <div className="product-image-principal">
        <img className="product-image-full" src={imageFull} alt="" />
      </div>
    </div>
  );
};

export default Thumbs;
