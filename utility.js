//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5MjU3NTIxLCJleHAiOjE2NTkyNjExMjEsIm5iZiI6MTY1OTI1NzUyMSwianRpIjoiQ2hOVjZzN1dHQTZTc2JwRiIsInN1YiI6MTEwLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.H_xe8ho6JD3fw6Lx8uY2scdCNsxqOt9iBAExba4fT3s"; // put access token
const student = {
  name: 'Benya Wongchainuban', // replace with your full name.
  age: 19, // put your age.
  gender: 'Female', // replace with your gender
  department: 'CPE',
  studentcode: '63363607'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: 'Bearer ${accessToken}'
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}
exports.findStudentbyId = function (student_id, cb) {

  cb(student);
}