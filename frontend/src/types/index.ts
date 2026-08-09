export interface User{id:string;_id?:string;name:string;email:string;role:'recruiter'|'admin';company:string;title:string}
export type JobStatus='Open'|'Closed'|'Draft';export interface Job{_id:string;title:string;department:string;location:string;type:'Full-time'|'Part-time'|'Contract'|'Internship';description:string;status:JobStatus;deadline?:string;createdAt:string;applicantCount?:number}
export type ApplicantStatus='Applied'|'Screening'|'Interview'|'Offer'|'Hired'|'Rejected';export interface Applicant{_id:string;name:string;email:string;phone:string;job:Pick<Job,'_id'|'title'|'department'>;status:ApplicantStatus;notes:string;resume?:{filename:string;originalName:string};createdAt:string}
export interface DashboardStatistics{totalJobs:number;openJobs:number;totalApplicants:number;hired:number;statusCounts:Partial<Record<ApplicantStatus,number>>;recentApplicants:Applicant[]}
export interface Paginated<T>{items:T[];page:number;pages:number;total:number}
