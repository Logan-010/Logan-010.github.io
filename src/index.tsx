import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import Nav from './Nav';
import Home from './Home';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Nav />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
