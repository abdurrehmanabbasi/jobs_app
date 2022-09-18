import Ajv from 'ajv'

const ajv =new Ajv()

const userSchema={
    type:["object"],
    properties:{
        fullname:{type:"string"},
        email:{type:"string"},
        password:{type:"string"}
    },
    required:["fullname","email","password"],
    additionalProperties:false
}

export const validUserSchema = ajv.compile(userSchema)
