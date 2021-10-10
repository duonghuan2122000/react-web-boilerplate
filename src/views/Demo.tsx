/**
 * Demo view
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import HCheckbox, { ICheckboxProps } from "components/hCheckbox/HCheckbox";
import HCheckboxList from "components/hCheckbox/HCheckboxList";
import HInput from "components/hInput/HInput";
import HRadio from "components/hRadio/HRadio";
import { useState } from "react";

const Demo = () => {
	const [valInput, setValInput] = useState("");
	const [checked, setChecked] = useState(false);
	const [checkedList, setCheckedList] = useState<string[]>(["cb1", "cb2"]);
	const [dataCheckboxList] = useState<ICheckboxProps[]>([
		{
			label: "Checkbox 1",
			value: "cb1",
		},
		{
			label: "Checkbox 2",
			value: "cb2",
		},
	]);

	const onChangeCheckboxList = (checkedList: any[]) => {
		console.log(checkedList);
	};

	const onChangeCheckbox = (_: boolean, newCheckedList?: string[]) => {
		console.log(newCheckedList);
		setCheckedList(newCheckedList || []);
	};

	return (
		<div className="m-2">
			<div className="m-2">
				<HInput
					placeholder="input"
					value={valInput}
					label="input"
					onChange={setValInput}
				/>
			</div>

			<hr />

			<div className="m-2">
				<p>Checkbox</p>
				<HCheckbox
					label="checkbox"
					checked={checked}
					onChange={setChecked}
				/>
			</div>

			<hr />

			<div className="m-2">
				<p>Checkbox list (giống vuejs)</p>
				<div className="flex-row">
					<HCheckbox
						label="checkbox 1"
						className="mr-2"
						value="cb1"
						checkedList={checkedList}
						onChange={onChangeCheckbox}
					/>
					<HCheckbox
						label="checkbox 2"
						className="mr-2"
						value="cb2"
						checkedList={checkedList}
						onChange={onChangeCheckbox}
					/>
					<HCheckbox
						label="checkbox 3"
						className="mr-2"
						value="cb3"
						checkedList={checkedList}
						onChange={onChangeCheckbox}
					/>
				</div>
			</div>

			<hr />

			<div className="m-2">
				<p>Checkbox list</p>
				<div className="flex-row">
					<HCheckboxList
						data={dataCheckboxList}
						checkedList={[]}
						onChange={onChangeCheckboxList}
					/>
				</div>
			</div>

			<div className="m-2">
				<HRadio label="radio" />
			</div>
		</div>
	);
};

export default Demo;
