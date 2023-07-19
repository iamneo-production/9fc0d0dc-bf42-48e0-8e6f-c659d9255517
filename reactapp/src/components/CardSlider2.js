import Carousel from "react-bootstrap/Carousel";

function SliderImages2() {
  return (
    <div>
        <Carousel variant="dark">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://www.gethucinema.com/wp-content/uploads/2018/06/Anirudh-Ravichander-High-quality-live-in-paris.jpg"
                    alt="First slide"
                    style={{margin: "auto"}}
                    />
                <Carousel.Caption>
                    {/* <h3>AVENGER ENDGAME</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/mIYEGIYo5t4/hqdefault.jpg"
                    alt="Second slide"
                    style={{margin: "auto"}}
                    />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages2;