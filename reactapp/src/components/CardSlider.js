import Carousel from "react-bootstrap/Carousel";
import './cardslider.css';

function SliderImages() {
  return (
    <div className="slide-hi">
        <Carousel variant="dark">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://images.indianexpress.com/2023/05/Maamannan.jpg"
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
                    src="https://images.thedirect.com/media/article_full/spider-verse-posters_VMqW9U1.jpg"
                    alt="Second slide"
                    style={{margin: "auto"}}
                    />
                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://images.thedirect.com/media/article_full/transformers-rise-of-the-beasts-cast-characters_1.jpg"
                    alt="Third slide"
                    style={{margin: "auto"}}
                    />
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImages;