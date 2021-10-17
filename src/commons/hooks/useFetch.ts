/**
 * Hook fetch data sử dụng axios
 * @author CreatedBy: dbhuan (15/10/2021)
 */

import { useEffect, useReducer } from "react";
import axios, { AxiosRequestConfig } from "axios";

class FetchError {
	// mã lỗi
	code?: string;

	// mô tả mã lỗi
	message?: string;

	constructor(code?: string, message?: string) {
		this.code = code;
		this.message = message;
	}
}

const errInfoDefault = new FetchError("E3000");

// hook fetch data
interface IFetchState<T> {
	// dữ liệu khi fetch thành công
	data?: T;

	// error khi fetch thất bại
	error?: FetchError;
}

type FetchAction<T> =
	| { type: "loading" }
	| { type: "success"; payload: T }
	| { type: "error"; payload: FetchError };

const useFetch = <T = unknown>(
	url?: string,
	config: AxiosRequestConfig = {
		method: "GET",
	}
): IFetchState<T> => {
	// giá trị khởi tạo
	const initialState: IFetchState<T> = {};

	// reducer của fetch data
	const fetchReducer = (
		state: IFetchState<T>,
		action: FetchAction<T>
	): IFetchState<T> => {
		switch (action.type) {
			case "loading":
				return { ...initialState };
			case "success":
				return { ...initialState, data: action.payload };
			case "error":
				return { ...initialState, error: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(fetchReducer, initialState);

	useEffect(() => {
		// nếu url không tồn tại thì return
		if (!url) return;

		const fetchData = async () => {
			
			dispatch({ type: "loading" });

			try {
				let res = await axios(url, config);

				let data = res.data as T;

				dispatch({ type: "success", payload: data });
			} catch (error) {
				if (axios.isAxiosError(error)) {
					// nếu là lỗi do fetch data
					let errInfo = error.response?.data as FetchError;
					dispatch({ type: "error", payload: errInfo });
				} else {
					// nếu lỗi stock
					dispatch({ type: "error", payload: errInfoDefault });
				}
			}
		};

		fetchData();
	}, [url]);

	return state;
};

export default useFetch;
