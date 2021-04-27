#! /bin/bash
sudo yum install git -y
sudo curl --silent --location https://rpm.nodesource.com/setup_7.x|bash -
sudo yum -y install nodejs

git clone https://github.com/kickscar/aws-practices.git
cd aws-practices/myapp

npm install
node app.js &