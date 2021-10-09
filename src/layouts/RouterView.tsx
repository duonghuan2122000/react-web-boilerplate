/**
 * Router view
 * @author CreatedBy: dbhuan (09/10/2021)
 */
import { FC } from "react";
import { Route } from "react-router-dom";
import { IRoute } from "router/Routes";

export interface IRouterViewProps extends IRoute {}

const RouterView: FC<IRouterViewProps> = (route: IRouterViewProps) => {
	return (
		<Route
			exact={route.exact}
			path={route.path}
			component={route.component}
		/>
	);
};

export default RouterView;
