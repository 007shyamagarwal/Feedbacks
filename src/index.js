import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './utils/store.js';
import NavigationBar from './organisms/NavigationBar';
import Home from './organisms/Home';
import LatestComments from './organisms/LatestComments';
import Footer from './organisms/Footer';
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <NavigationBar />
        <Home />
        <LatestComments />

        <Footer />
      </>
    </Provider>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
