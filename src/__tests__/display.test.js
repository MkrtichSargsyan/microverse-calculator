import renderer from 'react-test-renderer';
import Display from '../components/Display';

it('expects to render display component', () => {
  const result = renderer.create(<Display />).toJSON;
  expect(result).toMatchSnapshot();
});
