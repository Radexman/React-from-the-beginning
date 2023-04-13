import logo from './logo.svg';
import './App.css';

function App() {
	const handleNameChange = () => {
		const names = ['Emilia', 'Radek', 'Dave'];
		const int = Math.floor(Math.random() * names.length);
		return names[int];
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Goodbye {handleNameChange()}</p>
			</header>
		</div>
	);
}

export default App;
