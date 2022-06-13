import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import SplashScreen from '../../pages/registration/SplashScreen';

describe('Login Page', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <SplashScreen />
        </BrowserRouter>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
