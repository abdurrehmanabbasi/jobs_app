import mysql from "mysql2";
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
});
 export default conn