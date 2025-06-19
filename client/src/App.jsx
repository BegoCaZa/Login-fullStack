import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './lib/providers/AuthProvider';
import Router from './lib/router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
