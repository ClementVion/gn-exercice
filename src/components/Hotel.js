import React, { Component } from 'react';

class Hotel extends Component {

  render() {
    const hotel = this.props.hotel;

    return (
      <div className="Hotel">

        <img 
          className="Hotel__Image" 
          alt={hotel.name} 
          src={hotel.images[0].v_large}
        />
        <h3 className="Hotel__Title"> {hotel.name} </h3>
        <p className="Hotel__Desc"> {hotel.description} </p>
        <div className="Hotel__Rooms"> {hotel.rooms.length} chambres </div>

      </div>
    )

  }

}

export default Hotel;