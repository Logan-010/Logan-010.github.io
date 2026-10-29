import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import Nav from './Nav';
import Home from './Home';
import NotFound from './NotFound';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import BlogPost from './BlogPost';

import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Nav />
			<main class="flex flex-1 flex-col">
				<Router>
					<Route path="/" component={Home} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/blog" component={Blog} />
					<Route path="/blog/:n" component={BlogPost} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
