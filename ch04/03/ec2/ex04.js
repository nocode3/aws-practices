//
// EC2 인스턴스를 시작
//
const AWS = require('aws-sdk');

ec2 = new AWS.EC2({
  region: 'ap-northeast-2',
  apiVersion: '2016-11-15'
});

ec2.startInstances({
  InstanceIds: [ 'i-090a8d8483a0d480a' ],
  DryRun: false
}, function (error, data) {
  if(error){
    console.log(error, error.stack);
    return;
  }
  
  console.log(data);
});
