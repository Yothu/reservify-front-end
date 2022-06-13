import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('App', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
