const asyncHandler=require('express-async-handler');const User=require('../models/User');const token=require('../utils/token');
const response=user=>({token:token(user._id),user:{id:user._id,name:user.name,email:user.email,role:user.role,company:user.company,title:user.title}});
exports.register=asyncHandler(async(req,res)=>{const {name,email,password,company}=req.body;if(await User.findOne({email}))return res.status(409).json({message:'Email is already registered'});const user=await User.create({name,email,password,company});res.status(201).json(response(user));});
exports.login=asyncHandler(async(req,res)=>{const user=await User.findOne({email:req.body.email}).select('+password');if(!user||!(await user.comparePassword(req.body.password)))return res.status(401).json({message:'Invalid email or password'});res.json(response(user));});
exports.me=asyncHandler(async(req,res)=>res.json(req.user));
exports.updateProfile=asyncHandler(async(req,res)=>{['name','company','title'].forEach(k=>{if(req.body[k]!==undefined)req.user[k]=req.body[k]});await req.user.save();res.json(req.user);});
