import renderer from 'react-test-renderer';
import QuotePage from '../components/QuotePage';

it('expect to render quote page', () => {
  const result = renderer.create(<QuotePage />).toJSON;
  expect(result).toMatchSnapshot();
});
