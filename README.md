# Local test
git clone https://github.com/Zch-ch/harness-demo.git
cd harness-demo
npm install
npm start

# Docker test
docker build -t harness-demo:latest .
docker run -p 3000:3000 harness-demo:latest
