import React from 'react';
import { render } from '@testing-library/react';

import EventItem from '~/components/EventItem';

describe('[Component] EventItem', () => {
  const setup = () => {
    const info = {
      title: 'Some Test',
      datetime: 'November 15 - 20, 2019',
      location: {
        city: 'SaoPaulo',
        country: 'Brazil',
      },
      deadline: '11/20/2019',
      image:
        'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/37478757-eef9-4cf1-b0c2-9ceb426cffaa.jpg',
    };
    const utils = render(<EventItem data={info} />);

    return {
      info,
      utils,
    };
  };

  it('should be match snapshot', () => {
    const { utils } = setup();
    const { getByTestId } = utils;
    expect(getByTestId('eventItem')).toMatchSnapshot();
  });
});
