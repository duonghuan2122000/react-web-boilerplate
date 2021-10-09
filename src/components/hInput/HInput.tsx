/**
 * Component input
 * @author CreatedBy: dbhuan (09/10/2021)
 */
import "assets/scss/components/HInput.scss";
import { ChangeEvent, FC } from "react";

interface IInputProps {
	// text hint của input
	placeholder?: string;

	// giá trị của input
	value?: string;

	// label của input
	label?: string;

	// các sự kiện của input

	// change
	onChange?: (value: string) => void;
}

const HInput: FC<IInputProps> = (props: IInputProps) => {
	// các sự kiện của input
	const listener = {
		onChange: (event: ChangeEvent<HTMLInputElement>) => {
			props.onChange && props.onChange(event.target.value);
		},
	};

	return (
		<div className="input-box">
			{props.label && (
				<label className="input-box__label">{props.label}</label>
			)}
			<input
				type="text"
				className="input-box__input"
				placeholder={props.placeholder}
				value={props.value}
				{...listener}
			/>
		</div>
	);
};

export default HInput;
