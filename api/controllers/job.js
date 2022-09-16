import User from '../models/user.model.js'
export const createJob=(req,res)=>{
    const user = new User({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password
    })
    User.create(user, (err,data)=>{
        if(err){
            res.status(500).json({msg:err})
        }else{
            res.send(data)
        }
    })
}

export const getJob=(req,res)=>{
    res.json("Single job")
}

export const updateJob=(req,res)=>{
    res.json("update job")
}

export const deleteJob=(req,res)=>{
    res.json("delete job")
}