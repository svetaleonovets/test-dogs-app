import { configure, shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ImagesSlider from './ImagesSlider';

configure({ adapter: new Adapter() });

describe('ImagesSliderComponent', () => {
  it('ImagesSliderComponent renders correct number of items', () => {
    const mock = [
      'test1',
      'test2',
      'test3',
    ];

    const wrapper = shallow(<ImagesSlider images={mock} />);
    expect(wrapper.find('.carouselImageItem').length).toBe(mock.length);
  });

  it('ImagesSliderComponent renders image with correct url', () => {
    const mock = [
      'test_url_1',
    ];

    const wrapper = shallow(<ImagesSlider images={mock} />);
    expect(wrapper.find('.carouselImageItem img').prop('src')).toBe(mock[0]);
  });

  it('ImagesSliderComponent renders `no data message` when data is empty array', () => {
    const mock = [];
    const wrapper = shallow(<ImagesSlider images={mock} />);

    const p = wrapper.find('.noData');
    expect(p.text()).toBe('No Data');
  });

  it('ImagesSliderComponent renders `no data message` when data is undefined', () => {
    const mock = undefined;
    const wrapper = shallow(<ImagesSlider images={mock} />);

    const p = wrapper.find('.noData');
    expect(p.text()).toBe('No Data');
  });
});
