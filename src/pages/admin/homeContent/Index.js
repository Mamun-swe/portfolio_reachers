import React, { useState } from 'react'
import './style.scss'
import axios from 'axios'
import api from '../../../utils/api'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [information, setInformation] = useState()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        const newData = {
            information: information
        }
    }

    return (
        <div className="index">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header bg-white p-lg-4">
                                <h5 className="mb-0">Home page content</h5>
                            </div>
                            <div className="card-body p-lg-4">
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
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

                                    {/* Submit buttton */}
                                    <div className="text-right">
                                        <button type="submit" className="btn shadow-none px-4" disabled={isLoading}>
                                            {isLoading ? <span>Loading...</span> : <span>Add Content</span>}
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

export default Index;