/**
 * Checkbox component
 * @author CreatedBy: dbhuan (09/10/2021)
 */
import "assets/scss/components/HCheckbox.scss";
import { ChangeEvent, FC } from "react";

export interface ICheckboxProps {
	// label checkbox
	label?: string;

	// checked
	checked?: boolean;

	// giá trị của checkbox
	value?: string;

	// onchange checkbox
	onChange?: (value: boolean) => void;
}

const HCheckbox: FC<ICheckboxProps> = (props: ICheckboxProps) => {
	// các sự kiện của checkbox
	const listener = {
		onChange: (event: ChangeEvent<HTMLInputElement>) => {
			props.onChange && props.onChange(event.target.checked);
		},
	};

	return (
		<label className="checkbox-box">
			{props.label}
			<input
				type="checkbox"
				className="checkbox-box__checkbox"
				checked={props.checked}
				value={props.value}
				{...listener}
			/>
			<span className="checkbox-box__checkmark"></span>
		</label>
	);
};

export default HCheckbox;
