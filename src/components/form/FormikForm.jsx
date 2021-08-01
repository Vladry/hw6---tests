import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import formValSchema from './formValSchema';
import './formikForm.scss';

const submitForm = () => {
};

const FormikForm = () => {
    return (
        <div>
            <h3>Provide your personal details in the form below</h3>
            <Formik onSubmit={submitForm}
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
                {/*{*/}
                {/*    (formikProps) => console.log(formikProps)*/}
                {/*}*/}
                {
                    ({isSubmitting, touched, errors}) => (
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
                            <Field className='form-field' name='submit' type='button' value="Checkout" disabled={isSubmitting}/>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
        ;
};

export default FormikForm;