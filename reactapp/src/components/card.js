import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Premieres.css";
import { Link } from "react-router-dom";

function CardComponent2() {
  return (
    <div>

        <h2 id="pre-head">EVENTS</h2>
    
    <div className="card-pre">
      <Card>
        <Card.Img
          src="https://e1.pxfuel.com/desktop-wallpaper/224/561/desktop-wallpaper-pin-on-anirudh-ravichander-%E2%9D%A4-anirudh-ravichander-thumbnail.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>Anirudh</Card.Title>
          <Card.Text></Card.Text>
          <Link to='/concertbooking'>
          <Button>
            BOOK Ticket
          </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          src="https://e1.pxfuel.com/desktop-wallpaper/935/19/desktop-wallpaper-hiphop-tamizha-adhi-latest-stills-of-hiphop-tamizha-adhi-hiphop-tamizha-adhi-thumbnail.jpg"
          alt="Card image"
        />
        <Card.Body>
          <Card.Title>Hiphop Tamizha</Card.Title>
          <Card.Text></Card.Text>
          <Link to={'/concertbooking'}>
          <Button>
          BOOK Ticket
          </Button>
          </Link>
        </Card.Body>
      </Card>

    </div>
    </div>
  );
}

export default CardComponent2;
