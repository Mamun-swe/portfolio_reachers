import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import api from '../../../utils/api'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PreviewModal from '../../../components/Admin/modal/infopreview/Index'
import NullImage from '../../../assets/static/blank.png'

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()

    const [isName, setName] = useState()
    const [isImage, setImage] = useState()
    const [information, setInformation] = useState()

    const [isLoading, setLoading] = useState(false)
    const [isUpload, setUpload] = useState(false)

    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [isPreview, setPreview] = useState(false)
    const [previewData, setPreviewData] = useState(null)

    useEffect(() => {
        fetchInfo()
    }, [])

    // Fetch Info
    const fetchInfo = async () => {
        try {
            const response = await axios.get(`${api}admin/info/index`)
            if (response.status === 200) {
                setName(response.data.name)
                setImage(response.data.image)
                setInformation(response.data.information)
            }
        } catch (error) {
            if (error) {
                console.log(error.response)
            }
        }
    }

    // Image onChange
    const imageChangeHandeller = async (event) => {
        try {
            setUpload(true)
            let file = event.target.files[0]
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))

            let formData = new FormData()
            formData.append('image', file)

            const response = await axios.post(`${api}admin/update/image`, formData)
            if (response.status === 200) {
                fetchInfo()
                setUpload(false)
                toast.success(response.data.message)
            }
        } catch (error) {
            if (error) {
                console.log(error.response)
            }
        }

    }

    // Preview Handeller
    const previewHandeller = data => {
        setPreviewData({
            name: isName,
            image: previewURL,
            information: information
        })
        setPreview(data)
    }

    // Submit Basic Information
    const onSubmit = async (data) => {
        const newData = {
            name: data.name,
            information: information
        }

        try {
            setLoading(true)
            const response = await axios.post(`${api}admin/update/info`, newData)
            if (response.status === 200) {
                fetchInfo()
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

    return (
        <div className="basic-info">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header bg-white p-lg-4">
                                <h5 className="mb-0">About
                                <span className="text-capitalize">
                                        {isName ? ' ' + isName : <span className="text-muted"> Name</span>}
                                    </span></h5>
                            </div>

                            <div className="card-body p-lg-4">

                                {/* Image Container */}
                                <div className="img-container text-center">
                                    <div className="image rounded-circle border">
                                        {previewURL ?
                                            <img src={previewURL} className="img-fluid" alt="..." />
                                            : isImage ?
                                                <img src={isImage} className="img-fluid" alt="..." />
                                                : <img src={NullImage} className="img-fluid" alt="..." />}
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                <input type="file" className="upload" onChange={imageChangeHandeller} />
                                                {isUpload ?
                                                    <p className="mb-0">Uploading...</p>
                                                    : <p className="mb-0">Change <br /> Picture</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Name */}
                                    <div className="form-group mb-3">
                                        {errors.name && errors.name.message ? (
                                            <small className="text-danger">{errors.name && errors.name.message}</small>
                                        ) : <small>Name</small>
                                        }

                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={isName ? isName : null}
                                            className="form-control shadow-none"
                                            placeholder="Your name"
                                            onChange={(event) => setName(event.target.value)}
                                            ref={register({
                                                required: "Name is required"
                                            })}
                                        />
                                    </div>

                                    {/* Information */}
                                    <div className="form-group mb-4">
                                        <small>Information</small>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={information ? information : "<p>Basic Information</p>"}
                                            onReady={editor => editor}
                                            onChange={(event, editor) => {
                                                const data = editor.getData()
                                                setInformation(data)
                                            }}
                                        />
                                    </div>

                                    <div className="text-right">
                                        {/* Preview button */}
                                        <button
                                            type="button"
                                            className="btn shadow-none px-4 mr-2"
                                            onClick={() => previewHandeller(true)}
                                            disabled={previewURL && isName && information ? false : true}
                                        >Preview</button>

                                        {/* Submit buttton */}
                                        <button type="submit" className="btn shadow-none px-4" disabled={isLoading}>
                                            {isLoading ? <span>Loading...</span> : <span>Update</span>}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Preview Modal Component */}
            {isPreview && previewData ? <PreviewModal hide={previewHandeller} data={previewData} /> : null}
        </div>
    );
};

export default Index;