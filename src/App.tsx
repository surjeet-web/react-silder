import Carousel from "./Carousel 01/Carousel";

import image1 from "./Carousel 01/imgs/Image-1.jpeg";
import image2 from "./Carousel 01/imgs/Image-2.jpeg";
import image3 from "./Carousel 01/imgs/Image-3.jpeg";
import image4 from "./Carousel 01/imgs/Image-4.jpeg";
import image5 from "./Carousel 01/imgs/Image-5.jpeg";

const imgs = [image1, image2, image3, image4, image5];

const App = () => {
  return <Carousel imgs={imgs} />;
};

export default App;
