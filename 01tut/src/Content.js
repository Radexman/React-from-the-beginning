const Content = () => {
	const handleNameChange = () => {
		const names = ['Emilia', 'Radek', 'Dave'];
		const int = Math.floor(Math.random() * names.length);
		return names[int];
	};

	const handleClick = () => {
		console.log('Button clicked');
	};

	const handleClickTwo = (name) => {
		console.log(`${name} was clicked`);
	};

	const handleClickThree = (e) => {
		console.log(e.target.textContent);
	};

	return (
		<main>
			<p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
			<button onClick={handleClick}>Click it</button>
			<button onClick={() => handleClickTwo('Radek')}>Click it</button>
			<button onClick={(e) => handleClickThree(e)}>Click it</button>
		</main>
	);
};
export default Content;
