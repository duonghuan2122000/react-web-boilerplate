/**
 * Demo view
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import HButton from "components/hButton/HButton";
import HCheckbox, { ICheckboxProps } from "components/hCheckbox/HCheckbox";
import HCheckboxList from "components/hCheckbox/HCheckboxList";
import HInput from "components/hInput/HInput";
import HRadio from "components/hRadio/HRadio";
import HDropdown from "components/hDropdown/HDropdown";
import { useEffect, useRef, useState } from "react";
import useFetch from "commons/hooks/useFetch";
import { stat } from "fs";
import useForm from "commons/hooks/useForm";

class User {
	fullName: string;
	age: number;

	constructor(fullName: string, age: number) {
		this.fullName = fullName;
		this.age = age;
	}
}

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

	const demoRef = useRef(null);

	// eslint-disable-next-line
	const { data } = useForm<User>({
		initialValues: {
			age: 1,
			fullName: "Huân",
		},
	});

	const state = useFetch("http://localhost:8080/test400", {method: "POST"});

	if (state.data) console.log(state.data);
	if (state.error) console.log(state.error);

	return (
		<div className="m-2" ref={demoRef}>
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

			<hr />

			<div className="m-2">
				<HRadio label="radio" />
			</div>

			<hr />

			<div className="m-2">
				<HButton text="Button" onClick={() => alert("click")} />
			</div>

			<hr />

			<div className="m-2">
				<HDropdown
					data={["Item 1", "Item 2", "Item 3"]}
					renderToggle={() => <HButton text="Dropdown" />}
					renderItem={(item) => <div>{item}</div>}
				/>
			</div>
		</div>
	);
};

export default Demo;
