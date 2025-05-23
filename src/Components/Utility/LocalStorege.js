 const getStroedJobApplication = ()=>{
    const storedJobAppliction = localStorage.getItem('job-applications');
    if(storedJobAppliction){
        return JSON.parse(storedJobAppliction);
    }
    return [];
 }

 const saveJobApplication = id =>{
    const storedJobApplictions = getStroedJobApplication();
    const exists = storedJobApplictions.find(jobId =>jobId=== id);
    if(!exists){
        storedJobApplictions.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplictions))
    }
 }

 export {getStroedJobApplication, saveJobApplication}