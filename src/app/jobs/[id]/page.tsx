import { Job } from '@/types/job'
import CVUploadForm from '@/components/CVUploadForm'

async function getJob(id: string): Promise<Job> {
  const res = await fetch(`http://localhost:8000/jobs/${id}`) // Replace with your actual API endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch job')
  }
  return res.json()
}

export default async function JobPage({ params }: { params: { id: string } }) {
  const job = await getJob(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{job.job_title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-xl mb-2">{job.company}</p>
        <p className="text-gray-600 mb-2">{job.location}</p>
        <p className="text-gray-500 mb-4">{job.time_posted}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {job.job_type}
          </span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {job.experience}
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Job Categories</h2>
        <p className="mb-4">{job.job_categories}</p>
        <h2 className="text-2xl font-semibold mb-2">Required Skills</h2>
        <p className="mb-4">{job.job_skills}</p>
        <a href={job.job_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-6 inline-block">
          View original job posting
        </a>
        <CVUploadForm jobId={job._id} />
      </div>
    </div>
  )
}

