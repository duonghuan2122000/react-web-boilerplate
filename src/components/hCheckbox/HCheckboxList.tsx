/**
 * CheckboxList component
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import { FC, Fragment, useEffect, useState } from "react";
import HCheckbox, { ICheckboxProps } from "./HCheckbox";

interface ICheckboxListProps {
	// danh sách checkbox đã được checked
	checkedList: any[];

	// giá trị của danh sách checkbox (value)
	data: ICheckboxProps[];

	// sự kiện thay đổi checkbox list
	onChange?: (checkedList: any[]) => void;
}

const HCheckboxList: FC<ICheckboxListProps> = (props: ICheckboxListProps) => {
	const [checkedList, setCheckedList] = useState<boolean[]>([]);

	useEffect(() => {
		let newCheckedList = checkedList;
		for (let i = 0; i < props.data.length; i++) {
			let itemChecked = props.checkedList.findIndex(
				(ic) => ic === props.data[i].value
			);
			if (itemChecked !== -1) {
				newCheckedList[i] = true;
			} else {
				newCheckedList[i] = false;
			}
		}
		setCheckedList(newCheckedList);
		// eslint-disable-next-line
	}, []);

	/**
	 * Hàm được gọi khi một trong các checkbox thay đổi trạng thái
	 * @param checked checkbox có được check hay ko
	 * @param index vị trí checkbox thay đổi
	 * CreatedBy: dbhuan 09/10/2021
	 */
	const onChangeCheckbox = (checked: boolean, index: number) => {
		let newCheckedList = checkedList;
		newCheckedList[index] = checked;
		setCheckedList(newCheckedList);
		let newCheckedListVal = props.data
			.filter((item, i) => newCheckedList[i] === true)
			.map((item) => item.value);
		props.onChange && props.onChange(newCheckedListVal);
	};

	return (
		<Fragment>
			{props.data.map((checkbox, index) => (
				<HCheckbox
					key={index}
					className="mr-2"
					{...checkbox}
					onChange={(checked) => onChangeCheckbox(checked, index)}
				/>
			))}
		</Fragment>
	);
};

export default HCheckboxList;
