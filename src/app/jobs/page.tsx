import JobCard from '@/components/JobCard'
import { Job } from '@/types/job'

async function getJobs(): Promise<Job[]> {
  const res = await fetch('http://localhost:8000/jobs') // Replace with your actual API endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch jobs')
  }
  return res.json()
}

export default async function Home() {
  const jobs = await getJobs()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </main>
  )
}

