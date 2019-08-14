cd client && npm install && cd ../server && npm install && \
if ! [ -x "$(command -v docker-compose)" ]; then 
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    sudo chmod +x /usr/local/bin/docker-compose
fi