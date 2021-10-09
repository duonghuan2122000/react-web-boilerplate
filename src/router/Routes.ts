/**
 * File định nghĩa router của ứng dụng
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import { FC, lazy } from "react";
import { RouteProps } from "react-router-dom";

export interface IRoute extends RouteProps {
	// đường dẫn
	path?: string;

	// component
	component: FC<IRoute>;

	// cần so khớp chính xác route
	exact?: boolean;
}

const routes: IRoute[] = [
	{
		path: "/",
		component: lazy(() => import("views/Home")),
		exact: true,
	},
	{
		path: "/home",
		component: lazy(() => import("views/Container")),
	},
	{
		path: "/demo",
		component: lazy(() => import("views/Demo")),
	},
];

export default routes;
