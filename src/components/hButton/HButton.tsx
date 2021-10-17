/**
 * Button component
 * @author CreatedBy: dbhuan (10/10/2021)
 */
import "assets/scss/components/HButton.scss";
import { FC } from "react";

interface IButtonProps {
	// text của button
	text: string;

	// loại button
	type?: "primary";

	// sự kiện click button
	onClick?: () => void;
}

const HButton: FC<IButtonProps> = (props: IButtonProps) => {
	const type = props.type || "primary";

	return (
		<div className={`btn btn-${type}`} onClick={props.onClick}>
			<div className="btn__text">{props.text}</div>
		</div>
	);
};

export default HButton;
