const jobSchema = require('../models/job');

const createJob = async (req, res) => {
    try {
        const job = new jobSchema(req.body);
        await job.save();
        res.status(201).json({ message: 'Job created successfully', job });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getJobs = async (req, res) => {
    try {
        const jobs = await jobSchema.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getJobsById = async (req, res) => {
    try {
        const job = await jobSchema.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateJob = async (req, res) => {
    try {
        const job = await jobSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {     
            return res.status(404).json({ message: 'Job not found' });
        } 
        res.status(200).json({ message: 'Job updated successfully', job });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteJob = async (req, res) => {
    try {
        const job = await jobSchema.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createJob,
    getJobs,
    getJobsById,
    updateJob,
    deleteJob
};