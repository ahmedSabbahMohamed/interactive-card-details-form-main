import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { addData } from "../redux/dataSlice"
import { motion } from "framer-motion"

function Form() {
    const dispatch = useDispatch()
    // formik logic
    const formik = useFormik({
        initialValues: {
            name: "",
            cardNum: "",
            mm: "",
            yy: "",
            cvc: ""
        },
        // validation
        validationSchema: Yup.object({
            name: Yup.string()
            .required("Can't be blank")
            .max(15, "Name must be 15 character or less"),
            cardNum: Yup.string()
            .matches(/\d{4}\s\d{4}\s\d{4}\s\d{4}/, "Wrong format")
            .max(19, "Wrong format")
            .required("Can't be blank"),
            mm: Yup.string()
            .matches(/\d{2}||\d{1}/, "Wrong format")
            .required("Can't be blank"),
            yy: Yup.string()
            .matches(/\d{2}/, "Wrong format")
            .required("Can't be blank"),
            cvc: Yup.string()
            .matches(/\d{3}/, "Wrong fromat")
            .required("Can't be blank")
        }),
        // handle submit
            onSubmit: () => {                
                let getData = document.querySelector(".get-data")
                let success = document.querySelector(".success")
                getData.classList.add("d-none")
                success.classList.remove("d-none")
            }
        })
        
        dispatch(addData(formik.values))

    return(
        <>
        <div className="p-3">
            <motion.form
                onSubmit={formik.handleSubmit}
                initial={{ y: "-100vh"}}
                animate={{ y: 0}}
                transition={{ delay: 1, duration: 1, type: "spring", stiffness: 120}}
            >
                <div className="my-4">
                    <label
                        className={`form-label text-uppercase fs-6 text-secondary ${formik.touched.name && formik.errors.name? "text-danger":""}`}
                        htmlFor="name"
                    >
                        {formik.touched.name && formik.errors.name? formik.errors.name:"cardholder name"}
                    </label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={`form-control form-control-lg ${formik.touched.name && formik.errors.name? "border border-danger":""}`}
                        type="text"
                        id="name"
                        placeholder="e.g. Jane Appleseed"
                    />
                </div>
                <div className="my-4">
                    <label
                        className={`form-label text-uppercase fs-6 text-secondary ${formik.touched.cardNum && formik.errors.cardNum? "text-danger":""}`}
                        htmlFor="cardNum"
                    >
                        {formik.touched.cardNum && formik.errors.cardNum? formik.errors.cardNum:"card number"}
                    </label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={`form-control form-control-lg ${formik.touched.cardNum && formik.errors.cardNum? "border border-danger":""}`}
                        type="text"
                        id="cardNum"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                </div>
                <div className="my-4 row row-cols-2">

                    <div className="">
                        <label
                            className="form-label text-uppercase fs-6 text-secondary"
                            htmlFor="mm-yy"
                        >
                            exp.date (MM/YY)
                        </label>
                        <div className="row row-cols-2">
                            <div>
                                <input
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className={`form-control form-control-lg ${formik.touched.mm && formik.errors.mm? "border border-danger":""}`}
                                    type="text"
                                    placeholder="MM"
                                    id="mm"
                                />
                                <label
                                    className={formik.touched.mm && formik.errors.mm? "form-label text-uppercase fs-6 text-danger":""}
                                    htmlFor="mm"
                                >
                                    {formik.touched.mm && formik.errors.mm? formik.errors.mm:""}
                                </label>
                            </div>
                            <div>
                                <input
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    className={`form-control form-control-lg ${formik.touched.yy && formik.errors.yy? "border border-danger":""}`}
                                    type="text"
                                    placeholder="YY"
                                    id="yy"
                                />
                                <label
                                    className={formik.touched.yy && formik.errors.yy? "form-label text-uppercase fs-6 text-danger":""}
                                    htmlFor="yy"
                                 >
                                    {formik.touched.yy && formik.errors.yy? formik.errors.yy:""}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                    <label
                        className={`form-label text-uppercase fs-6 text-secondary ${formik.touched.cvc && formik.errors.cvc? "text-danger":""}`}
                        htmlFor="cvc"
                    >
                        {formik.touched.cvc && formik.errors.cvc? formik.errors.cvc:"cvc"}
                    </label>
                    <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={`form-control form-control-lg ${formik.touched.cvc && formik.errors.cvc? "border border-danger":""}`}
                        type="text"
                        id="cvc"
                        placeholder="e.g. 123"
                    />
                    </div>
                </div>
                    <motion.button
                        whileTap={{ scale: 0.8}}
                        className="btn btn-lg text-white text-center w-100"
                        type="submit"
                    >
                        Confirm
                    </motion.button>
            </motion.form>
        </div>
        </>
    )
}

export default Form