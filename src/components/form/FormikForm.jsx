import React from 'react';
import {Formik, Field, Form} from 'formik';
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
                        Address: "",
                        mobile: ""
                    }}
                    // validationSchema = {formValSchema}
            >
                {
                    // (formikProps)=> console.log(formikProps)
                }
                <Form className='form-form'>
                    <Field className='form-field' name='name'      type = 'text'   placeholder = "Имя пользователя" />
                    <Field className='form-field' name='lastName'  type = 'text'   placeholder = "Фамилия пользователя" />
                    <Field className='form-field' name='age'       type = 'number' placeholder = "Возраст пользователя" />
                    <Field className='form-field' name='email'     type = 'email'  placeholder = "Имейл" />
                    <Field className='form-field' name='Address'   type = 'test'   placeholder = "Адрес доставки" />
                    <Field className='form-field' name='Phone'     type = 'tel'    placeholder = "Мобильный телефон" />
                    <Field className='form-field' name='submit'    type = 'button' value = "Checkout" />
                </Form>
            </Formik>
        </div>
    )
        ;
};

export default FormikForm;