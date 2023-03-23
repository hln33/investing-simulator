# documentation for connecting to our postgres db locally

<h1>How to connect to our postgres server:</h1>
- Beforehand, make sure that the "host" field in our Pool object is set to the current public IP of our DB.<br>
- Open a terminal to our source folder and paste in the following code, line by line:<br>
  ```
    export GOOGLE_APPLICATION_CREDENTIALS=key.json
    export DB_PORT='5432'
    export DB_NAME='cmpt372'      
    export DB_USER='postgres'       
    export DB_PASS='123456'
    export INSTANCE_HOST='127.0.0.1'
  ```
<br>
- Next, we'll need to connect to the cloud server through proxy, with the following command below. NOTE, the url in the command will differ depending on the type of system you're using. Here's a list of urls below, with an example for each:<br>

ARM64 (M1 Chips): <br>

curl -o cloud-sql-proxy \
https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.0.0/cloud-sql-proxy.darwin.arm64

<br>
WINDOWS: <br>
wget https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.0.0/cloud-sql-proxy.x64.exe 
-O cloud-sql-proxy.exe

<br>

- You'll notice a cloud-sql-proxy file in your directory. To be able to execute it, enter the following command:<br>
  - chmod +x cloud-sql-proxy<br>

- We'll now execute the file using the following command: <br>
FOR MAC (M1): 
<br>
./cloud-sql-proxy --credentials-file $GOOGLE_APPLICATION_CREDENTIALS fifth-marker-374621:us-central1:investment-sim-db &
<br>
FOR WINDOWS:
<br>
Start-Process -filepath  ".\cloud-sql-proxy.exe" -ArgumentList `
"--credentials-file $env:GOOGLE_APPLICATION_CREDENTIALS" fifth-marker-374621:us-central1:investment-sim-db
<br>

Troubleshooting:<br>
Try ending any postgres or sql processes in your task manager if it fails
<br>
If you have a postgres instance running, it may be using port 5432. If so end it before using running the commands
<br>
Command for brew: brew services stop postgresql
<br>
Reference Documentation/Guides:<br>
https://cloud.google.com/sql/docs/postgres/connect-instance-local-computer#node.js_2<br>
