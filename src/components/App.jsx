import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

calculate({}, 'name');
const App = () => (
  <>
    <Display result="0" />
    <ButtonPanel />
  </>
);
export default App;
