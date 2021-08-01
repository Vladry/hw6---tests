import * as Yup from 'yup';
import {REGEXP_EMAIL, REGEXP_TEL} from '../../utils/formRegexp';

const formValSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "не менее 3х символов").required('Required'),
        lastName: Yup.string()
            .min(3, "не менее 3х символов").required('Required'),
        age: Yup.number()
            .min(16, "детям младше 16 лет покупка запрещена").required('Required'),
        email: Yup.string().matches(REGEXP_EMAIL, "incorrect email").required('Required'),
        address: Yup.string()
            .min(15, "адрес содержит не менее 15ти символов").required('Required'),
        mobile: Yup.string()
            .min(10, "номер содержит не менее 10ти цифр")
            .matches(REGEXP_TEL, "ввод номера не действителен")
            .required('Required'),
    }
    )
;


export default formValSchema;