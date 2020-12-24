import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { ic_add, ic_keyboard_arrow_left } from 'react-icons-kit/md'
import Icon from 'react-icons-kit'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Modal from 'react-bootstrap/Modal'

const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [show, setShow] = useState(false)
    const [description, setDescription] = useState()
    const [descErr, setDescErr] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const [year, setYear] = useState(null)
    const [yearErr, setYearErr] = useState(null)


    const onSubmit = async (data) => {
        if (!description) {
            return setDescErr('Description is required')
        }

        const newData = {
            year: data.year,
            title: data.title,
            description: description
        }

        setLoading(true)

        console.log(newData)
    }


    // Submit Year
    const submitYear = async (event) => {
        event.preventDefault()

        if (!year) return setYearErr('Year is required.')
        setYearErr(null)

        try {

            console.log(year)
        } catch (error) {
            if (error) {
                console.log(error.response)
            }
        }
    }

    return (
        <div className="publication-create">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header border-bottom bg-white p-lg-4">
                                <div className="d-flex">
                                    <div><h5 className="mb-0">Publications</h5></div>
                                    <div className="ml-auto">
                                        <Link
                                            type="button"
                                            to="/admin/publications"
                                            className="btn btn-primary shadow-none"
                                        >
                                            <Icon icon={ic_keyboard_arrow_left} size={22} />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body p-lg-4">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* Year */}
                                    <div className="d-flex">
                                        <div className="flex-fill pr-2">
                                            <div className="form-group mb-4">
                                                {errors.year && errors.year.message ? (
                                                    <p className="text-danger">{errors.year && errors.year.message}</p>
                                                ) : <p>Select Year</p>
                                                }

                                                <select
                                                    name="year"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Year is required"
                                                    })}
                                                >
                                                    <option>2020</option>
                                                    <option>2020</option>
                                                    <option>2020</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="ml-auto pt-4">
                                            <button
                                                type="button"
                                                className="btn plus-btn btn-light rounded-circle shadow-none"
                                                onClick={() => setShow(true)}
                                            >
                                                <Icon icon={ic_add} size={22} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="form-group mb-4">

                                        {errors.title && errors.title.message ? (
                                            <p className="text-danger">{errors.title && errors.title.message}</p>
                                        ) : <p>Publication title</p>
                                        }
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control shadow-none"
                                            placeholder="Enter title"
                                            ref={register({
                                                required: "Publication title is required"
                                            })}
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="form-group mb-4">
                                        {descErr ? <p className="text-danger">{descErr}</p>
                                            : <p>Description</p>}
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={description ? description : "<p>Write description or add link</p>"}
                                            onReady={editor => editor}
                                            onChange={(event, editor) => {
                                                const data = editor.getData()
                                                setDescription(data)
                                            }}
                                        />
                                    </div>

                                    <div className="text-right">
                                        <button
                                            type="submit"
                                            className="btn submit-btn shadow-none"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Year Create Modal */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                className="custom-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className="font-weight-bold mb-0">Cretae Year</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitYear}>
                        <div className="form-group mb-4">
                            {yearErr ?
                                <p style={styles.text} className="text-danger">{yearErr}</p>
                                : <p style={styles.text}>Year</p>}
                            <input
                                type="number"
                                style={styles.formControl}
                                className="form-control shadow-none"
                                onChange={(event) => setYear(event.target.value)}
                            />
                        </div>

                        <div className="text-right">
                            <button
                                type="submit"
                                style={styles.submitBtn}
                                className="btn shadow-none submit-btn"
                            >
                                <span>Create</span>
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>


        </div>
    );
};

export default Create;

const styles = {
    text: {
        fontSize: 14,
        marginBottom: 3,
        fontFamily: "Roboto, sans-serif"
    },
    formControl: {
        height: 40,
        fontSize: 14,
        fontFamily: "Roboto, sans-serif"
    },
    submitBtn: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 700,
        background: '#0b1448',
        padding: '10px 30px',
        fontFamily: 'Roboto, sans-serif'
    }
}