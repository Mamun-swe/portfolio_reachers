import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.scss'
import { ic_keyboard_arrow_left } from 'react-icons-kit/md'
import Icon from 'react-icons-kit'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Axios from 'axios'
import api from '../../../utils/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure({ autoClose: 2000 })
const Edit = () => {
    const { id } = useParams()
    const { register, handleSubmit, errors } = useForm()
    const [description, setDescription] = useState()
    const [descErr, setDescErr] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [years, setYears] = useState([])
    const [publication, setPublication] = useState({})
    const [pubErr, setPubErr] = useState()

    // Fetch Year
    const fetchYear = async () => {
        try {
            const response = await Axios.get(`${api}admin/year`)
            if (response.status === 200) {
                setYears(response.data)
                toast.success(response.data.message)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                toast.warn(error.response.data)
            }
        }
    }


    // Fetch Publication
    const fetchPublication = async () => {
        try {
            const response = await Axios.get(`${api}admin/publication/${id}`)
            if (response.status === 200) {
                setPublication(response.data)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                setPubErr(error.response.data.message)
            }
        }
    }

    // Submit Publication
    const onSubmit = async (data) => {
        if (!description) {
            return setDescErr('Description is required')
        }

        let formData = new FormData()
        formData.append('year', data.year)
        formData.append('title', data.title)
        formData.append('description', description)
        formData.append('_method', 'PUT')

        try {
            setLoading(true)
            const response = await Axios.post(`${api}admin/publication/${id}`, formData)
            if (response.status === 200) {
                fetchYear()
                fetchPublication()
                setLoading(false)
                toast.success(response.data.message)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                toast.warn(error.response)
            }
        }
    }

    useEffect(() => {
        fetchYear()
        fetchPublication()
    }, [id])


    // if not found
    if (pubErr) {
        return (
            <div className="publication-create">
                <div className="container-fluid py-3 py-lg-0">
                    <div className="row">
                        <div className="col-12 pl-lg-0">
                            <div className="card border-0 shadow">
                                <div className="card-header border-bottom bg-white p-4">
                                    <h4>{pubErr ?? pubErr}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="publication-create">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header border-bottom bg-white p-lg-4">
                                <div className="d-flex">
                                    <div><h5 className="mb-0">Create publication</h5></div>
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
                                            {years && years.length > 0 ? years.map((item, i) =>
                                                <option value={item.year} key={i}>{item.year}</option>
                                            ) : null}
                                        </select>
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
                                            defaultValue={publication.title}
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
                                            data={publication ? publication.description : "<p>Write description or add link</p>"}
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
                                            {isLoading ? <span>Updating...</span> : <span>Update</span>}
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
