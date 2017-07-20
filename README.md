# BackEndNodejs
### Restful Service using nodejs, Express and MongoDB

# How to Start
### Clone the repository
### cd NodeBackEndAPI
### npm install
### npm start
### Already connect to the MongoDB server (MongoDB Atlas in cloud), So no need to install mongoDB in local site
### Test (Postman in Chrome)
# How to Use it

## also deployed to AWS EB
### To check all data
  http://node-express-api.w4akj5i3aw.ap-southeast-1.elasticbeanstalk.com/object
  
### To Post new data
  http://node-express-api.w4akj5i3aw.ap-southeast-1.elasticbeanstalk.com/object 
  json data : {"key":"mykey", "value":"value4"}
  
### To get Latest value using mykey
  http://node-express-api.w4akj5i3aw.ap-southeast-1.elasticbeanstalk.com/object/mykey
  
### to get value using mykey and timestamp
  http://node-express-api.w4akj5i3aw.ap-southeast-1.elasticbeanstalk.com/object/mykey?timestamp=1500547999
  
### if you install in your localsite please use 
  localhost:3000/object/
