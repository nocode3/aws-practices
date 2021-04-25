// EC2 인스턴스를 시작
var AWS = require('aws-sdk');
// AWS.config.loadFromPath('./config.json');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

var params = {
  InstanceIds: [ 'i-090a8d8483a0d480a' ], // 필수
  DryRun: false
};

ec2.startInstances(params, function (err, data) {
  if (err)
    console.log(err, err.stack);
  else
    console.log(data);
});
