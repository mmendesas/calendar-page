import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '~/components/Header';

describe('[Component] Header', () => {
  const setup = () => {
    const utils = render(
      <Router>
        <Header />
      </Router>
    );

    return {
      utils,
    };
  };

  it('should be match snapshot', () => {
    const { utils } = setup();
    const { getByTestId } = utils;
    expect(getByTestId('header')).toMatchSnapshot();
  });

  it('should render Header with link to events page', () => {
    const { utils } = setup();
    const { getByText, debug } = utils;

    expect(getByText('Events')).toHaveProperty(
      'href',
      'http://localhost/events'
    );
  });
});
