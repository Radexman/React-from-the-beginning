const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<footer className="footer">
			<p>App created in {currentYear}.</p>
		</footer>
	);
};
export default Footer;
