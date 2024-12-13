'use client'

import { useState } from 'react'

export default function CVUploadForm({ jobId }: { jobId: string }) {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [uploadSuccess, setUploadSuccess] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        setUploading(true)
        const formData = new FormData()
        formData.append('cv', file)
        formData.append('jobId', jobId)

        try {
            const response = await fetch('/api/upload-cv', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setUploadSuccess(true)
            } else {
                throw new Error('CV upload failed')
            }
        } catch (error) {
            console.error('Error uploading CV:', error)
            alert('Failed to upload CV. Please try again.')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Upload Your CV</h2>
            {uploadSuccess ? (
                <p className="text-green-600">Your CV has been successfully uploaded!</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-gray-700">
                            Choose a file
                        </label>
                        <input
                            type="file"
                            id="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={!file || uploading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {uploading ? 'Uploading...' : 'Upload CV'}
                    </button>
                </form>
            )}
        </div>
    )
}

