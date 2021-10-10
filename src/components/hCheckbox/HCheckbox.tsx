/**
 * Checkbox component
 * @author CreatedBy: dbhuan (09/10/2021)
 */
import "assets/scss/components/HCheckbox.scss";
import { ChangeEvent, FC, useEffect, useState } from "react";

export interface ICheckboxProps {
	// label checkbox
	label?: string;

	// checked
	checked?: boolean;

	// giá trị của checkbox
	value?: string;

	// custom class cho input
	className?: string;

	// checkedList: danh sách checkbox đã được checked: [] (sử dụng trong trường hợp có nhiều checkbox cùng checkedList)
	// checkedList: ['cb1', 'cb2']
	checkedList?: string[];

	// onchange checkbox
	onChange?: (value: boolean, checkedList?: string[]) => void;
}

const HCheckbox: FC<ICheckboxProps> = (props: ICheckboxProps) => {
	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		setChecked(props.checked || false);
		if (props.checkedList && props.value) {
			if (props.checkedList.includes(props.value)) {
				setChecked(true);
			} else {
				setChecked(false);
			}
		}
	});

	// các sự kiện của checkbox
	const listener = {
		onChange: (event: ChangeEvent<HTMLInputElement>) => {
			let checked = event.target.checked;
			setChecked(checked);
			let newCheckedList: string[] | undefined = undefined;
			if (props.checkedList && props.value) {
				if (checked) {
					newCheckedList = [...props.checkedList, props.value];
				} else {
					newCheckedList = props.checkedList.filter(
						(item) => item !== props.value
					);
				}
			}
			props.onChange && props.onChange(checked, newCheckedList);
		},
	};

	return (
		<label
			className={
				props.className
					? `checkbox-box ${props.className}`
					: "checkbox-box"
			}
		>
			{props.label}
			<input
				type="checkbox"
				className="checkbox-box__checkbox"
				checked={checked}
				value={props.value}
				{...listener}
			/>
			<span className="checkbox-box__checkmark"></span>
		</label>
	);
};

export default HCheckbox;
