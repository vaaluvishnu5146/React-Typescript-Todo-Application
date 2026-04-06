import { Formik } from "formik";
import { validateEmail, validatePassword } from "../utils/validations";
import FormInput from "../elements/FormInput";

function Signup() {
  return (
    <div className="flex flex-col gap-4 w-[400px] mx-auto items-center justify-center h-screen">
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};

          if (values.email == "") {
            errors.email = "Email is required";
          } else if (!validateEmail(values.email)) {
            errors.email = "Invalid email address";
          } else if (values.fullName == "") {
            errors.fullName = "Full name is required";
          } else if (values.password == "") {
            errors.password = "Password is required";
          } else if (values.confirmPassword == "") {
            errors.confirmPassword = "Confirm password is required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
          } else if (!validatePassword(values.password)) {
            errors.password =
              "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
          } else if (!validatePassword(values.confirmPassword)) {
            errors.confirmPassword =
              "Confirm Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          dirty,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <FormInput
                label={"Email Address"}
                type={"email"}
                name={"email"}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <FormInput
                label={"Full Name"}
                type={"text"}
                name={"fullName"}
                value={values.fullName}
                error={errors.fullName}
                touched={touched.fullName}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <FormInput
                label={"Password"}
                type={"password"}
                name={"password"}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <FormInput
                label={"Confirm Password"}
                type={"password"}
                name={"confirmPassword"}
                value={values.confirmPassword}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <button
              disabled={
                Object.keys(errors).length > 0 || !dirty || isSubmitting
              }
              className="w-full"
            >
              Signup
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
