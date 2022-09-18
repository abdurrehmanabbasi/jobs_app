import User from '../models/user.model.js'
import {validUserSchema} from '../models/user.schema.js'



export const createJob=(req,res,next)=>{

    if(!validUserSchema(req.body)){
        const err={code:400,message:validUserSchema.errors}

        return next(err)
        
    }
    const user = new User({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password
    })

    User.create(user, (err,data)=>{
        if(err){
            err.code=1062
            next(err)
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