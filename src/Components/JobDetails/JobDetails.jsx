import { useLoaderData, useParams } from "react-router"
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../Utility/LocalStorege";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams()
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id == idInt);

  // console.log(job);
  const handleApplyToast = ()=>{
    saveJobApplication(idInt)
    toast('your toast successfully')
  }
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl">Details coming here</h2>
          <h2>Job details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyToast} className="btn w-full  bg-linear-to-t from-sky-500 to-indigo-500 text-white mt-3">
            Apply Naw
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default JobDetails
