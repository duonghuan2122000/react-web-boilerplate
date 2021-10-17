/**
 * Dropdown component
 * @author CreatedBy: dbhuan (10/10/2021)
 */
import "assets/scss/components/HDropdown.scss";
import useOnClickOutside from "commons/hooks/useOnClickOutside";
import { FC, ReactElement, useRef, useState } from "react";

interface IDropdownProps {
	// data content dropdown
	data: any[];

	// Component phần toggle dropdown
	renderToggle: () => ReactElement;

	// component item dropdown
	renderItem: (item: any) => ReactElement;
}

const HDropdown: FC<IDropdownProps> = (props: IDropdownProps) => {
	// biến xác định trạng thái đóng/mở của dropdown
	const [toggle, setToggle] = useState<boolean>(false);

	const dropdownRef = useRef(null);

	useOnClickOutside(dropdownRef, () => {
		setToggle(false);
	});

	return (
		<div className="dropdown" ref={dropdownRef}>
			<div
				className="dropdown__toggle"
				onClick={() => setToggle(!toggle)}
			>
				{props.renderToggle()}
			</div>
			<div
				className={
					toggle ? "dropdown__content" : "dropdown__content hide"
				}
			>
				{props.data.map((item, index) => (
					<div key={index} className="dropdown__item">
						{props.renderItem(item)}
					</div>
				))}
			</div>
		</div>
	);
};

export default HDropdown;
