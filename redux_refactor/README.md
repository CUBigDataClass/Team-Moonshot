# Team Moonshot, Redux Style

### How to use?

**Install MongoDB:

*** Mac
```bash
# Update brew formulae
brew update
# Install MongoDB
brew install mongodb
```

***Ubuntu
```
apt-get update
apt-get install mongodb
```

**Configure MongoDB**

Note: Make sure you have the directory and its permissions setup (i.e. `/data/db`):
```bash
sudo mkdir -p /data/db
sudo chown -R `id -u` /data/db
```

**Run mongoDBr**
```bash
mongod
```

### Build & Dev

**Installation**
```bash
# Install node modules
npm install
```

**Development**

```bash
# Starts the server with Hot Reloading
# Run webpack through webpack.config.dev.js
npm run dev

```

**Production**

Run the commands below for a production build, i.e. what is deployed to Heroku. If you are deploying to Heroku or similar, we assume that you serving the pages over HTTPS.

```bash
# Clean public folder
# Run webpack through webpack.config.prod.js
npm run build

# Start server
## Note: You need MongoDB running
npm start
```

Credits to [react-webpack-node](https://github.com/choonkending/react-webpack-node)

License
===============
MIT
