import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";


const Job = ({ job }) => {
    const {
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      job_type,
      location,
      salary,
      id,
    } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-2xl text-[#474747]">
          {job_title}
        </h2>
        <p className="font-semibold text-[#757575] text-xl">{company_name}</p>
        <div>
          <button className="px-4 font-extrabold py-2 rounded border border-[#9873FF] mr-4 text-[#9873FF]">
            {remote_or_onsite}
          </button>
          <button className="px-4 py-2 font-extrabold rounded border border-[#9873FF] mr-4 text-[#9873FF]">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <h2 className="flex mr-4 font-semibold text-[#757575]">
            <IoLocationSharp className="text-2xl mr-2" />
            {location}
          </h2>
          <h2 className="flex font-semibold text-[#757575]">
            <AiOutlineDollarCircle className="text-2xl mr-2" /> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-[#9478FF] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job
