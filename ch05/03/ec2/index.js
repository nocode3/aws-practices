const AWS = require('aws-sdk');

const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

const params = {
    InstanceIds: ['i-090a8d8483a0d480a']
};

ec2.terminateInstances(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  } else {
    console.log(data);
  }  
});