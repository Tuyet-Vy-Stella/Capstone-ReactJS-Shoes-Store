import React, { useEffect } from "react";
import { Field, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { getProfileApi, updateApi } from "../../redux/reducers/userReducer";

export default function UpdateForm(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileApi());
  }, []);
  console.log(userLogin);
  // Get input from form
  const updateForm = useFormik({
    initialValues: {
      email: userLogin.email,
      name: userLogin.name,
      password: "********",
      phone: userLogin.phone,
      gender: userLogin.gender,
    },

    // Check validation
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required!")
        .email("Email is not in the correct format!"),
      name: Yup.string().required("Name is required!"),
      password: Yup.string().required("Password is required!"),
      phone: Yup.string().required("Phone number is required!"),
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(updateApi(values));
    },
  });

  return (
    <div className="form_container my-5">
      <form
        id="updateForm"
        action=""
        className="d-block"
        onSubmit={updateForm.handleSubmit}
      >
        <div className="row">
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                defaultValue={updateForm.initialValues.email}
                className="form-control"
                required
                disabled
              />
            </div>
          </div>
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                defaultValue={updateForm.initialValues.name}
                className="form-control"
                // pattern="^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$"

                required
                onChange={updateForm.handleChange}
                onBlur={updateForm.handleBlur}
              />
              {/* Text validation */}
              {updateForm.errors.name ? (
                <span className="text-danger">{updateForm.errors.name}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                defaultValue={updateForm.initialValues.password}
                className="form-control"
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                placeholder="Password"
                required
                onChange={updateForm.handleChange}
                onBlur={updateForm.handleBlur}
              />
              {/* Text validation */}
              {updateForm.errors.password ? (
                <span className="text-danger">
                  {updateForm.errors.password}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-5 form-group">
            <div className="item">
              <label htmlFor="">Phone</label>
              <input
                name="phone"
                type="text"
                id="phone"
                defaultValue={updateForm.initialValues.phone}
                className="form-control"
                // pattern="[0-9,+,()]+$"
                placeholder="Phone"
                required
                onChange={updateForm.handleChange}
                onBlur={updateForm.handleBlur}
              />
              {/* Text validation */}
              {updateForm.errors.phone ? (
                <span className="text-danger">{updateForm.errors.phone}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 form-group">{/* Empty */}</div>
          {/* <!-- Gender --> */}
          <div className="col-5 form-group">
            <div className="item border-0 pt-4 d-flex" id="gender">
              <label className="pe-5" htmlFor="">
                Gender
              </label>
              {updateForm.initialValues.gender ? (
                <div className="d-flex">
                  <input
                    type="radio"
                    name="gender"
                    value="true"
                    defaultChecked
                    onChange={updateForm.onChange}
                  />
                  <p className="ps-3 pe-5">Male</p>
                  <input
                    type="radio"
                    name="gender"
                    value="false"
                    onChange={updateForm.onChange}
                  />
                  <p className="ps-3 pe-5">Female</p>
                </div>
              ) : (
                <div className="d-flex">
                  <input
                    type="radio"
                    name="gender"
                    value="true"
                    onChange={updateForm.onChange}
                  />
                  <p className="ps-3 pe-5">Male</p>
                  <input
                    type="radio"
                    name="gender"
                    value="false"
                    defaultChecked
                    onChange={updateForm.onChange}
                  />
                  <p className="ps-3 pe-5">Female</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}
