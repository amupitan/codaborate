import { mount, shallow } from 'enzyme';
import * as React from 'react';

import '../../setupTests';
import Notepad from './Notepad';

describe('Notepad', () => {
  it('renders without crashing', () => {
    const component = mount(<Notepad />);
    component.unmount();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<Notepad />);

    expect(component).toMatchSnapshot();
  });

  it('should render content', () => {
    const content = 'this is some content 😎';
    const component = shallow(<Notepad content={content} />);

    expect(component).toMatchSnapshot();
  });
});