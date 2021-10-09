/**
 * Demo view
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import HCheckbox, { ICheckboxProps } from "components/hCheckbox/HCheckbox";
import HCheckboxList from "components/hCheckbox/HCheckboxList";
import HInput from "components/hInput/HInput";
import { useState } from "react";

const Demo = () => {
	const [valInput, setValInput] = useState("");
	const [checked, setChecked] = useState(false);
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
        
    }
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

			<div className="m-2">
				<HCheckbox
					label="checkbox"
					checked={checked}
					onChange={setChecked}
				/>
			</div>

			<div className="m-2">
				<div className="flex-row">
					<HCheckboxList data={dataCheckboxList} checkedList={[]} onChange={onChangeCheckboxList} />
				</div>
			</div>
		</div>
	);
};

export default Demo;
