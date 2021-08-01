import React, {useEffect} from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import formValSchema from './formValSchema';
import './formikForm.scss';
import {acts} from '../../redux/loading/';
import sel from '../../redux/loading/selectors';

const FormikForm = () => {
    const dispatch = useDispatch();
    const submit = (formData) => {
        dispatch(acts.submitForm(formData));

    };
    const cart = useSelector(sel.getCart);


    return (
        <div>
            <h3>Provide your personal details in the form below</h3>
            <Formik onSubmit={submit}
                    initialValues={{
                        name: "",
                        lastName: "",
                        age: null,
                        email: '',
                        address: "",
                        mobile: ""
                    }}
                    validationSchema={formValSchema}
            >

                {
                    ({isSubmitting, isValid, touched, errors}) => (
                        <Form className='form-form'>
                            <Field className='form-field' name='name' type='text' placeholder="Имя пользователя"/>
                            {touched.name && errors.name && <ErrorMessage name='name'/>}
                            <Field className='form-field' name='lastName' type='text' placeholder="Фамилия пользователя"/>
                            {touched.lastName && errors.lastName && <ErrorMessage name='lastName'/>}
                            <Field className='form-field' name='age' type='number' placeholder="Возраст пользователя"/>
                            {touched.age && errors.age && <ErrorMessage name='age'/>}
                            <Field className='form-field' name='email' type='email' placeholder="Имейл"/>
                            {touched.email && errors.email && <ErrorMessage name='email'/>}
                            <Field className='form-field' name='address' type='test' placeholder="Адрес доставки"/>
                            {touched.address && errors.address && <ErrorMessage name='address'/>}
                            <Field className='form-field' name='mobile' type='tel' placeholder="Мобильный телефон"/>
                            {touched.mobile && errors.mobile && <ErrorMessage name='mobile'/>}
                            <Field className='form-field' name='submit' type='submit' value="Checkout"
                                   disabled={!isValid || isSubmitting || cart.length === 0 }/>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
        ;
};

export default FormikForm;