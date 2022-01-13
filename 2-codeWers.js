/*Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match which takes a candidate and a job, which will return a boolean indicating whether the job is a valid match for the candidate.
*/





function match(candidate, job) {
    // is this job a valid match for the candidate?
    if(!candidate.minSalary || !job.maxSalary) 
      throw "error";
      return (candidate.minSalary*0.9) <= job.maxSalary
  }
