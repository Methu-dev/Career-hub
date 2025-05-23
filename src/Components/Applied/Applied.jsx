import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStroedJobApplication } from "../Utility/LocalStorege";



const Applied = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobFilter = filter =>{
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
      const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === 'Remote')
      setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  }
  useEffect(() => {
    const storedJobIds = getStroedJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobsApplied);
    }
  }, [jobs]);


  return (
    <div>
      <h1>Jobs I Applied: {appliedJobs.length}</h1>
      <details className="dropdown">
        <summary className="btn m-4">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => handleJobFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} <br /> {job.company_name}: {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Applied
