// load the SDK for JavaScript
const AWS = require('aws-sdk');

// set the region
// AWS.config.update({region:'us-west-2'});

// create an ec2 object
const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

// setup params
const params = {
    InstanceIds: ['i-090a8d8483a0d480a']
};

ec2.terminateInstances(params, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    console.log(data);           // successful response
  }  
});