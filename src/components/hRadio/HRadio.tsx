/**
 * Radio component
 * @author CreatedBy: dbhuan (10/10/2021)
 */
import "assets/scss/components/HRadio.scss";

import { FC } from "react";

interface IRadioProps {
	// label của radio
	label?: string;

	// giá trị của radio
	value?: string;

	// trạng thái check của radio
	checked?: boolean;
}

const HRadio: FC<IRadioProps> = (props: IRadioProps) => {
	return (
		<label className="radio-box">
			{props.label}
			<input type="radio" className="radio-box__radio" />
			<span className="radio-box__checkmark"></span>
		</label>
	);
};

export default HRadio;
