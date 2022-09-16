import db from "./db.js"
const tblname="exampletbl"

const User = function(user){
    this.fullname = user.fullname
    this.email=user.email
    this.password=user.password
}

User.create = (newUser, result)=>{
    db.query(`INSERT INTO ${tblname} SET ? `,newUser,(err,res)=>{
        if(err){
            console.log("Error :",err)
            result(err, null)
            return
        }
        console.log("New user is created with ",{id: res.insertId,...newUser});
        result(null,{id: res.insertId,...newUser})
    });
    
}
// conn.query("INSERT INTO `exampletbl`(`fullname`, `email`, `password`) VALUES ('abdur rehman','ara@gmail.com','ara')",function (err,result,fields) {
//   if(err){
//     console.log(err)
//   }
//   console.log(result)
//   console.log(fields)
// })

export default User