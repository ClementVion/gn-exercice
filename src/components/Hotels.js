import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHotels } from '../actions/hotelActions';
import Hotel from './Hotel.js';

const mapStateToProps = state => ({
  hotels: state.hotelReducer.hotels.city
})

const mapDispatchToProps = dispatch => ({
  fetchHotels: () => dispatch(fetchHotels())
})

class Hotels extends Component {

  fetchHotels = (event) => {
    this.props.fetchHotels();
  }

  render() {

    return (
      <div className="Hotels">

        <h1 className="Hotels__Title"> Hotels in Amsterdam </h1>

        <div 
          className="Hotels__Button"
          onClick={this.fetchHotels}> 
            Show hotels
        </div>
        
        <div className="Hotels__List">
          {this.props.hotels && this.props.hotels.hotels.map((hotel, index) => {
            return (
              <Hotel 
                key={'hotel-card-' + index}
                hotel={hotel}
              />
            )
          })}
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
