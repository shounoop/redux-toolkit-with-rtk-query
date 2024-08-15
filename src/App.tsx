import './App.css';
import { Counter } from './redux/features/counter/Counter';
import Products from './redux/features/products';
import { User } from './redux/features/users/User';

function App() {
	return (
		<div className="App">
			<Counter />

			<Products />

			<User />
		</div>
	);
}

export default App;
