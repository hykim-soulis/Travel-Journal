import React from 'react';
import '../App.css';

export default function Card(props) {
  return (
    <div>
      <section className="card">
        <img src={props.item.imageUrl} className="card--img" />
        <div className="card--info">
          <p className="card--location">
            🚩{props.item.location.toUpperCase()}
            <a href={props.item.googleMapsUrl} className="card-map">
              View on Google Maps
            </a>
          </p>

          <h2 className="card--title">{props.item.title}</h2>
          <h5 className="card--dates">
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <p className="card-description">{props.item.description}</p>
        </div>
      </section>
      <hr />
    </div>
  );
}
