const mongoose=require('mongoose');
const jobSchema=new mongoose.Schema({
  title:{type:String,required:true,trim:true,maxlength:120},department:{type:String,required:true,trim:true,maxlength:100},
  location:{type:String,required:true,trim:true,maxlength:120},type:{type:String,enum:['Full-time','Part-time','Contract','Internship'],required:true},
  description:{type:String,required:true,trim:true,maxlength:5000},status:{type:String,enum:['Open','Closed','Draft'],default:'Open'},
  recruiter:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},deadline:{type:Date}
},{timestamps:true});
jobSchema.index({title:'text',department:'text',location:'text'});
module.exports=mongoose.model('Job',jobSchema);
