/**
 * File định nghĩa i18n lang
 * @author CreatedBy: dbhuan (09/10/2021)
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import test from "./vi/test.json";

const resources = {
	vi: {
		test,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "vi",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
