#! /bin/bash
sudo yum install git -y
sudo curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
sudo yum -y install nodejs

git clone https://github.com/aws-bitacademy/myapp2.git
cd /myapp2

npm install
node index.js &