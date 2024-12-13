'use client'

import { Job } from '../types/job'
import { useRouter } from 'next/navigation';

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps) => {
  const router = useRouter();

  return (
    <div 
      className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => router.push(`/jobs/${job._id}`)}
    >
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <p className="text-black mb-4">{job.company}</p>
      <div className="mb-4">
        <p className="text-gray-700">{job.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{job.location}</span>
        <span className="text-gray-500">{job.salary}</span>
      </div>
    </div>
  )
}

export default JobCard 