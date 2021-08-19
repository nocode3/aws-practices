## AWS Practices - Building Virtual Infrastructure: 가상 인프라 구축

### ch03. 가상 서버: EC2
1. 가상화와 EC2
   - Hypervior: type1(HVM, PVM), type2
   - AMI
   - Instance
2. 가상 서버 시작
   - EC2 인스턴스 생성
   - 가상 서버 시작
3. 가상 서버 운영
   - ssh: 가상 서버 접속
   - 가상 서버 모니터링
   - 가상 서버 상태 변경
   - 가상 서버 크기 변경
4. 네트워크 설정
    - Security Group: 방화벽: 아파치 웹서버 운영

      ```bash
      # yum install -y httpd
      # systemctl enable httpd
      # service httpd start
      ```
      
    - 고정 IP (Elastic IP): 아파치 웹서버 접속
    - Network Interface 추가(다른 IP 주소의 웹사이트 운영하기)

### ch04. 인프라 프로그래밍 기본
1. AWS API 소개 
2. AWS CLI 사용하기 
3. AWS SDK 프로그래밍 
4. 배포 자동화: CloudFormation

### ch05. 시스템 보안
1. 보안 책임 
2. 소프트웨어 최신으로 유지하기 
3. IAM: AWS 계정 보안
4. 트래픽 제어
5. VPC: 가상 사설 네트워크


