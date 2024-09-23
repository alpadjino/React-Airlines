import React from 'react'
import store from '@store/store';
import { Provider } from 'react-redux';
import MainPage from '@pages/MainPage';

const App = () => {
  return (
		<Provider store={store}>
			<MainPage />
		</Provider>
	);
}

export default App;
