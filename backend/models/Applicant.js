const mongoose=require('mongoose');
const applicantSchema=new mongoose.Schema({
  name:{type:String,required:true,trim:true,maxlength:100},email:{type:String,required:true,lowercase:true,trim:true,match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},
  phone:{type:String,trim:true,maxlength:30,default:''},job:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true,index:true},
  recruiter:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},status:{type:String,enum:['Applied','Screening','Interview','Offer','Hired','Rejected'],default:'Applied',index:true},
  resume:{filename:String,originalName:String,mimetype:String,path:String,size:Number},notes:{type:String,trim:true,maxlength:3000,default:''}
},{timestamps:true});
applicantSchema.index({recruiter:1,email:1,job:1},{unique:true});
applicantSchema.index({name:'text',email:'text'});
module.exports=mongoose.model('Applicant',applicantSchema);
