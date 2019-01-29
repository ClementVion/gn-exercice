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

        <button onClick={this.fetchHotels}> Get hotels </button>
        
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
