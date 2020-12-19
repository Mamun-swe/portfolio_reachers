import React, { useState } from 'react'
import '../../../styles/admin/basic-info/style.scss'
import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isName, setName] = useState()
    const [information, setInformation] = useState()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            const newData = {
                name: data.name,
                information: information
            }


            // setLoading(true)
            console.log(newData)
        } catch (error) {
            if (error) {
                setLoading(false)
                console.log(error)
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
        </div>
    );
};

export default Index;