import {submitForm} from './actions';
import {initUserData} from '../../components/form/FormikForm';


describe("checking actions", () => {
    test("checking form data", () => {
        const testFormData = submitForm(initUserData);
        expect(testFormData.payload).toStrictEqual(initUserData);
    });

});
