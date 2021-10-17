/**
 * hook phục vụ cho form: data, validate
 * @author CreatedBy: dbhuan (15/10/2021)
 */

import { ChangeEvent, FormEvent, useState } from "react";

type FormValidations<T extends {}> = Partial<Record<keyof T, FormValidation>>;

interface FormValidation {
	// rule không được để trống
	required?: {
        msgError: string;
    }

	// rule số ký tự tối thiểu
	minLength?: {
		minLen: number;
        msgError: string;
	};

	// rule số ký tự tối đa
	maxLength?: {
		maxLen: number;
        msgError: string;
	};

	// rule kiểm tra hai field có giá trị giống nhau
	match?: {
		field: string;
        msgError: string;
	};
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

interface IFormOptions<T> {
	// giá trị khởi tạo
	initialValues?: Partial<T>;

	// rule validate form
	validations?: FormValidations<T>;

	// hàm submit
	onSubmit?: () => void;
}

/**
 * Hook form
 * @author CreatedBy: dbhuan (12/10/2021)
 */
const useForm = <T extends Record<keyof T, any> = {}>(
	options: IFormOptions<T>
) => {
	// state data form
	const [data, setData] = useState<T>((options?.initialValues || {}) as T);

	// state error
	const [errors, setErrors] = useState<ErrorRecord<T>>({});

	/**
	 * Hàm xử lý thay đổi data của form
	 * @author CreatedBy: dbhuan (12/10/2021)
	 */
	const handleChange =
		(key: keyof T) =>
		(e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
			let value = e.target.value;
			setData({ ...data, [key]: value });
		};

	/**
	 * Hàm xử lý submit form
	 * @author CreatedBy: dbhuan (12/10/2021)
	 */
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// validate form
		const validations = options?.validations;

		// kiểm tra validate
		if (validations) {
			// set mặc định là valid thành công
			let valid = true;

			// tạo mảng chứa danh sách lỗi
			let newErrors: ErrorRecord<T> = {};

			// lặp từng rule để xử lý
			for (const key in validations) {
				// lấy giá trị input cần valid
				const value = data[key];

				// lấy rule valid
				const validation = validations[key];

                if(validation?.required && validateRequired(value)){
                    valid = false;
                    newErrors[key] = validation.required.msgError;
                }
			}

			// nếu có lỗi thì return
			if (!valid) {
				setErrors(newErrors);
				return;
			}
		}

		// không có lỗi, set errors thành rỗng.
		setErrors({});

		// gọi hàm submit
		if (options?.onSubmit) {
			options.onSubmit();
		}
	};

	return {
		data,
		errors,
		handleChange,
		handleSubmit,
	};
};

/**
 * Hàm kiểm tra value không được trống
 * @author CreatedBy: dbhuan (15/10/2021)
 */
const validateRequired = (value: any) => {
	return !value || value === "" || value === undefined || value === null
		? false
		: true;
};

/**
 * Hàm kiểm tra số ký tự tối đa
 * @author CreatedBy: dbhuan (15/10/2021)
 */
const validateMaxLength = (value: string, maxLen: number) => {
	return !value || value.length <= maxLen;
};

/**
 * Hàm kiểm tra số ký tự tối thiểu của chuỗi
 * @author CreatedBy: dbhuan (15/10/2021)
 */
const validateMinLength = (value: string, minLen: number) => {
	return !value || value.length >= minLen;
};

/**
 * Hàm kiểm tra hai object bằng nhau
 * @author CreatedBy: dbhuan (15/10/2021)
 */
const validateMatch = (value: any, otherValue: any) => {
	return value === otherValue;
};

export default useForm;
