/**
 * Layout chung
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import { FC, Fragment, ReactNode } from "react";

/**
 * Type prop của layout
 * @author CreatedBy: dbhuan (09/10/2021)
 */
interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
	return (
		<Fragment>
			<div>{children}</div>
		</Fragment>
	);
};

export default Layout;
