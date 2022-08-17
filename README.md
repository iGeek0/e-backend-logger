
## Quick start

First run:

```
  npm install
```

Run `npm start` for start the server in port 3000

If you want to load the seed data run:

```
  node seed_db
```
This gonna fill all the collections with fake data and the current token to authorize the endpoinds

The collection are hosted free in atlas, a mongo cloud service.

Cluster: `cluster0.fb9qg7k.mongodb.net`

ENV variables (for test purposes)
```
	USER_ID=test123
	PASSWORD=01fmATgeR5I2VIT2
	DBNAME=test
	TOKEN_SECRET=test123
```
Token saved at authorizations collection:

``
eyJhbGciOiJIUzI1NiIsInR5cCI6InNlY3JldDEyMyJ9.eyJ1c2VyIjoiamVzdXMgb2Nob2EgcmFiZWxvIiwicmVhc29uIjoibmVlZCB0aGUgam9iIn0.dHW2r-cakhppV-4SbwVEv0qvxzG2576CpAwTTmVpt78
``