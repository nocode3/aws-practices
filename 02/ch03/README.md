## Building Virtual Infrastructure: ch03. 가상 서버: EC2


### 01. 가상화와 EC2
1. Hypervior: type1(HVM, PVM), type2 
2. AMI
3. Instance

### 02. 가상 서버 시작
1. EC2 인스턴스 생성
2. 가상 서버 시작

### 03. 가상 서버 운영
1. ssh: 가상 서버 접속
   - 서버 접속
   
     ```bash
     $ ssh -i myskey.pem ec2-user@[public ip]
     ```
     
2. 가상 서버 모니터링
3. 가상 서버 상태 변경 
4. 가상 서버 크기 변경

### 04. 네트워크 설정
1. Security Group: 방화벽: 아파치 웹서버 운영
   - 아파치 웹서버 설치
   
     ```bash
     # yum install -y httpd
     # systemctl enable httpd
     # service httpd start
     ```    
3. Elastic IP(고정 IP): 아파치 웹서버 접속
4. Network Interface 추가(다른 IP 주소의 웹사이트 운영하기)
