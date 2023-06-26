## AWS Practices

### 01. Getting Started: AWS 시작하기

### 02. Building Virtual Infrastructure: 가상 인프라 구축

### 03. Storing Data: 데이터 저장

### 04. Web Application Development: 웹 애플리케이션 만들기

%%{init: {'theme': 'dark', 'themeVariables': {'darkMode': true}, "flowchart" : { "curve" : "basis" } } }%%
flowchart TD
    DF -->EIP
    EIP -->|ingest|TP
    EIP -->|Time Series data query|HDBR
    EIP -->|Stat Query|SR
    TP -->LOG
    TP -->RDB
    TP -->RDBR
    RDB --> OHD
    OHD <--> HDB
    OHD --> SW
    OHD --> HDBR
    SW --> RDBR
    SW --> SR
    DF(Data Feed)
    EIP[[EIP VPP Application]]
    subgraph q/kdb+ Environment
            TP(Tickerplant)
            RDB(Real-time Database)
            HDB(Historical Database)
            OHD[(On-Disk Historical Database)]
        subgraph process
            SW[/Stat Writer/]
            RDBR[/RDB Reader/]
            HDBR[/HDB Reader/]
            SR[/Stat Reader/]
        end
    LOG((Log File))
    end
   
