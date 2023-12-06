import React from "react"
import "./login.css"
import { Formik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import  { useCookies } from "react-cookie"

export default function Login(props) {
    const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password must be maximum 32 characters long"),
    });

    return (

        <div className="login">
            <Formik
                    validationSchema={schema}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                    axios.post('http://localhost:5000/api/user/login', {
                        email: values.email,
                        password: values.password
                    })
                    .then(function (response) {
                        props.setCookie("user", response.data.token,{path: "/"});
                        window.location.reload();
                    })
                    .catch(function (error) {
                        alert(error.response.data.error);
                    });
                    }}
                >
                    {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    }) => (
                    <div className="login">
                        <div className="form">
                    {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <form noValidate onSubmit={handleSubmit}>
                            <span>Login</span>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Email"
                            className="form-control inp_text"
                            id="email"
                            />
                            {/* If validation is not passed show errors */}
                            <p className="error">
                            {errors.email && touched.email && errors.email}
                            </p>
                            {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                            <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                            className="form-control"
                            />
                            {/* If validation is not passed show errors */}
                            <p className="error">
                            {errors.password && touched.password && errors.password}
                            </p>
                            {/* Click on submit button to submit the form */}
                            <button type="submit">Login</button>
                        </form>
                        </div>
                    </div>
                    )}
            </Formik>
        </div>
    )
}
