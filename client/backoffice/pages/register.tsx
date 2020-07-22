import { Formik, Field } from 'formik';
import { InputField } from '../components/fields/inputfied';
import { Component } from 'react';

export default () => {
    return (
        <>
            <Formik
                onSubmit={() => {}}
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                }}
            >
                {(handleSubmit) => (
                    <form onSubmit={handleSubmit}>
                        <Field name='email' Component={InputField} />
                    </form>
                )}
            </Formik>
        </>
    );
};
