import renderer from 'react-test-renderer';
import WelcomePage from '../components/WelcomePage';

it('expect to render welcome page', () => {
  const result = renderer.create(<WelcomePage />).toJSON;
  expect(result).toMatchSnapshot();
});
