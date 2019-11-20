import React from 'react';
import { render } from '@testing-library/react';

import Hero from '~/components/Hero';

describe('[Component] Hero', () => {
  const setup = () => {
    const info = {
      title: 'Some Test',
      datetime: 'November 15 - 20, 2019',
      location: {
        city: 'Vancouver',
        country: 'Canada',
      },
      deadline: '11/20/2019',
    };
    const utils = render(<Hero data={info} />);

    return {
      info,
      utils,
    };
  };

  it('should be match snapshot', () => {
    const { utils } = setup();
    const { getByTestId } = utils;
    expect(getByTestId('hero')).toMatchSnapshot();
  });

  it('should render Hero with properties', () => {
    const { utils, info } = setup();
    const { getByText, debug } = utils;
    const { city, country } = info.location;

    Object.values(info).forEach(prop => {
      const text = typeof prop !== 'string' ? `${city} - ${country}` : prop;
      expect(getByText(text)).toBeTruthy();
    });
  });
});
