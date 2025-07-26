"use client"
import React, {ChangeEvent, useState} from 'react'
import FormField from "@/components/FormField";
import FileInput from "@/components/FileInput";

const Page = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        visibility: 'public'
    })
    const [error, setError] = useState(null);
    const video = {};

    const handleInputChange = (e:ChangeEvent) =>{
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]: value}))
    }

    return (
        <div className='wrapper-md upload-page'>
            <h1>Upload a Video</h1>

            {error && <div className='error-field'>{error}</div>}
            <form className='rounded-20  shadow-10 gap-6 w-full flex flex-col px-5 py-7.5'>
                <FormField
                    id='title'
                    label='title'
                    placeholder='Enter the clear and concise video title'
                    value={formData.title}
                    onChange={handleInputChange}

                    
                />
                <FormField
                    id='description'
                    label='Description'
                    placeholder='Describe what this video about'
                    value={formData.description}
                    as='textarea'
                    onChange={handleInputChange}


                />
                <FileInput
                    id='video'
                    label='Video'
                    accept='video/*'
                    file={video.file}
                    previewUrl={video.previewUrl}

                />
                <FileInput

                />
                <FormField
                    id='visibility'
                    label='Visibility'

                    value={formData.visibility}
                    as='select'
                    options={[
                        { value: 'public', label: 'Public' },
                        { value: 'private', label: 'Private' },
                    ]}
                    onChange={handleInputChange}


                />
            </form>

        </div>
    )
}
export default Page
