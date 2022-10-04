import './index.scss'
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>123</div>
  );
};

export default App;
