import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import jobService from '../services/jobService';

const ListJob = () => {
      const [jobs, setJobs] = useState([]);
      const [newJob, setNewJob] = useState({
            title: '',
            company: '',
            location: '',
      })

      const fetchApi = async () => {
            try {
                  const response = await jobService.getJobs();
                  if (response) {
                        setJobs(response);
                  }
                  console.log('Jobs fetched successfully:', response);
            } catch (err) {
                  console.error('Error fetching jobs:', err);
            }
      }

      useEffect(() => {
            fetchApi();
      }, []);

    


      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const response = await jobService.createJob(newJob);
                  console.log('Job created successfully:', response);
                  setNewJob({ title: '', company: '', location: '', date_posted: '' });
                  fetchApi();
            } catch (err) {
                  console.error('Error creating job:', err);
            }
      }

        const handleDelete = async (id) => {
            const confirmed = window.confirm('Bạn có chắc chắn muốn xoá công việc này không?');
            if (!confirmed) return;

            try {
                  await jobService.deleteJob(id);
                  fetchApi(); // load lại danh sách
            } catch (error) {
                  console.error('Error deleting job:', error);
            }
      };

    
            



      return (
            <div>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                              <Form.Control
                                    type="text"
                                    placeholder="Title"
                                    value={newJob.title}
                                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                              />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                              <Form.Control type="text"
                                    placeholder="Company"
                                    value={newJob.company}
                                    onChange={(e) => setNewJob({ ...newJob, company: e.target.value })
                                    }
                              />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                              <Form.Control type="text"
                                    placeholder="Location"
                                    value={newJob.location}
                                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}

                              />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                              <Form.Control type="date"
                                    placeholder="Date"
                                    value={newJob.date_posted}
                                    onChange={(e) => setNewJob({ ...newJob, date_posted: e.target.value })}
                              />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                              Submit
                        </Button>
                  </Form>
                  <h2>Danh sách công việc</h2>
                  <Table striped bordered hover>
                        <thead>
                              <tr>
                                    <th>Title</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Date</th>
                              </tr>
                        </thead>
                        <tbody>
                              {jobs.map((job, index) => {
                                    return (
                                          <tr key={job._id}>
                                                <td>{job.title}</td>
                                                <td>{job.company}</td>
                                                <td>{job.location}</td>
                                                <td>{job.date_posted}</td>
                                                <td>
                                                    
                                                      <Button variant="danger" onClick={() => handleDelete(job._id)}
                                                      >Delete</Button>
                                                </td>
                                          </tr>
                                    )
                              })}

                        </tbody>
                  </Table>
            </div>
      );
};

export default ListJob;