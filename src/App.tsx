import './App.css';
import { Counter } from './redux/features/counter/Counter';
import { User } from './redux/features/users/User';

function App() {
	return (
		<div className="App">
			<Counter />

			<User />
		</div>
	);
}

export default App;
