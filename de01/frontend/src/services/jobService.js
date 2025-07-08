import axios from './axios';

const jobService = {
  getJobs: async () => {
    try {
      const response = await axios.get('/jobs');
      console.log('Jobs fetched successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  },

  createJob: async (jobData) => {
    try {
      const response = await axios.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      console.error('Error creating job:', error);
      throw error;
    }
  },

  updateJob: async (jobId, jobData) => {
    try {
      const response = await axios.put(`/jobs/${jobId}`, jobData);
      return response.data;
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  },

  deleteJob: async (jobId) => {
    try {
      const response = await axios.delete(`/jobs/${jobId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting job:', error);
      throw error;
    }
  },
};



export default jobService;