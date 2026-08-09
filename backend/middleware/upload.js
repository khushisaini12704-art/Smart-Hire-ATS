const multer=require('multer');const path=require('path');const crypto=require('crypto');
const storage=multer.diskStorage({destination:path.join(__dirname,'../uploads'),filename:(req,file,cb)=>cb(null,`${Date.now()}-${crypto.randomBytes(8).toString('hex')}.pdf`)});
module.exports=multer({storage,limits:{fileSize:5*1024*1024},fileFilter:(req,file,cb)=>file.mimetype==='application/pdf'?cb(null,true):cb(new Error('Resume must be a PDF file'))});
