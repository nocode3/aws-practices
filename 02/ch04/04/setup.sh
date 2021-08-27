#! /bin/bash
sudo yum install git -y
sudo curl --silent --location https://rpm.nodesource.com/setup_14.x | bash -
sudo yum -y install nodejs

git clone -b basic --single-branch https://github.com/kickscar/aws-example-myapp.git myapp
cd myapp

npm install
node index.js &