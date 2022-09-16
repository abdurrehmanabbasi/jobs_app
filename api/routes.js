import express from 'express'
import { createJob, deleteJob, getJob, updateJob } from './controllers/job.js'
import alljobs from './controllers/jobs.js'
const router = express.Router()

// get all jobs
router.get('/jobs',alljobs)

// Get a single job
router.get('/job',getJob)

// Create a job
router.post('/job',createJob)

// update a job
router.put('/job',updateJob)

//delete a job
router.delete('/job',deleteJob)

export default router