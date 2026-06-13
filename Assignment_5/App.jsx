import Slick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = Slick.default || Slick;

function App() {

  const data = [
  {
    name: "John",
    img: "https://picsum.photos/200",
    review: "Excellent service and support."
  },
  {
    name: "Sarah",
    img: "https://picsum.photos/201",
    review: "Very easy to use."
  },
  {
    name: "David",
    img: "https://picsum.photos/202",
    review: "Highly recommended."
  },
  {
    name: "Emma",
    img: "https://picsum.photos/203",
    review: "Great experience."
  }
];

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <Slider {...settings}>
  {data.map((d) => (
    <div key={d.name} className="card">
      <div className="card-top">
        <img src={d.img} alt={d.name} />
      </div>

      <div className="card-bottom">
        <h3>{d.name}</h3>
        <p>{d.review}</p>
        <button>Read More</button>
      </div>
    </div>
  ))}
</Slider>
    </div>
  );
}

export default App;
