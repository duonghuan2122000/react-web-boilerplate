/**
 * App
 * @author CreatedBy: dbhuan (09/10/2021)
 */
import RouterView from "layouts/RouterView";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "router/Routes";

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					{routes.map((route, i) => (
						<RouterView key={i} {...route} />
					))}
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
