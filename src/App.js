import './App.css';
import JsonPlaceHolderView from './features/JsonPlaceHolder/JsonPlaceHolderView';
import ProductView from './features/product/ProductView';

const App = () => {
  return (
    <div className="App">
      {/* <JsonPlaceHolderView/> */}
      <ProductView/>
    </div>
  );
}
export default App;
