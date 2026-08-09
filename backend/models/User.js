const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  name:{type:String,required:true,trim:true,minlength:2,maxlength:80},
  email:{type:String,required:true,unique:true,lowercase:true,trim:true,match:/^[^\s@]+@[^\s@]+\.[^\s@]+$/},
  password:{type:String,required:true,minlength:8,select:false},
  role:{type:String,enum:['recruiter','admin'],default:'recruiter'},
  company:{type:String,trim:true,maxlength:120,default:''},
  title:{type:String,trim:true,maxlength:100,default:''}
},{timestamps:true});
userSchema.pre('save',async function(next){if(!this.isModified('password')) return next();this.password=await bcrypt.hash(this.password,12);next();});
userSchema.methods.comparePassword=function(value){return bcrypt.compare(value,this.password);};
module.exports=mongoose.model('User',userSchema);
