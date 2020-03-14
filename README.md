# Up & Running

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Setup REST API
First you need to install [JSON-Server](https://github.com/typicode/json-server) Its full fake REST API and easy to use for mock data from backend. You can also CRUD data from Postman or Insomnia.

```shell
# To instal JSON server
$ npm install -g json-server

# To run fake data in local folder structure
$ cd phonefinder/server

# run JSON Server
$ json-server fakePhoneData.json

# Now JSON server is running
```

### Running Frontend

**Development**

`yarn run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

`yarn run start-prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`