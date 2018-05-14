/* eslint react/no-array-index-key: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';

export default class ImagesSlider extends Component {
  render() {
    const { images } = this.props;
    return (
      <div>
        { (!images || !images.length) ? (<div className="noData">No Data</div>) : null }
        <Carousel>
          {
            images && images.length && images.map((url, index) => (
              <Carousel.Item key={index} className="carouselImageItem">
                <img alt="" width="auto" height={400} src={url} style={{ height: '400px', display: 'block', margin: 'auto' }} />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    );
  }
}

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
ImagesSlider.defaultProps = {
  images: [''],
};
