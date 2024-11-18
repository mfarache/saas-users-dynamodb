# SAAS Users Dynamo DB table

Deployment of Dynamo DB table into AWS for a SAAS application

## Table structure

The table uses AWS Single table design approach. 
Different entities such user, suscriptions and checkout payments are stored with different primary and sorting keys

| Field | Type | Description |
| --- | --- | --- |
| PK | string | Primary key |
| SK  | string | Sorting key  |

### Deploying the Dynamo table

We use [SST dev](https://sst.dev/) for deployment into AWS.

You will need an AWS account, together with its secret access key 

You can create a new IAM admin user and create access key for that 
https://docs.aws.amazon.com/IAM/latest/UserGuide/access-key-self-managed.html#Using_CreateAccessKey

Store your secret access key safely

For simplicity we will use environment variables, but this could be done using AWS profiles 

```bash
export AWS_ACCESS_KEY_ID="<YOUR_ACCESS_KEY_ID>" 
export AWS_SECRET_ACCESS_KEY="<YOUR_SECRET_ACCESS_KEY>"
export AWS_REGION="<YOUR_AWS_REGION>"
```

```bash
git clone https://github.com/mfarache/saas-users-dynamodb
npm install
npx sst deploy
```
Your AWS table is created and you will see something similar to 

```bash
SST 3.3.22  ready!

➜  App:        users-dynamodb
   Stage:      mauriciofaracheminquez

~  Deploy

|  Deleted     MAU sst:aws:Dynamo → MAUTable aws:dynamodb:Table (3.5s)
|  Created     MAU sst:aws:Dynamo → MAUTable aws:dynamodb:Table (7.1s)

✓  Complete
   arn: arn:aws:dynamodb:eu-west-1:<YOUR_AWS_ACCOUNT_ID>:table/users-dynamodb-<USERNAME>-SAASUSERSTable
```

Congratulations! You have your database ready to use.

Keep notes of the name of the table in the output (ARN field). It's necessary to setup the Saas boilerplate with this table.
```bash
   users-dynamodb-<USERNAME>-SAASUSERSTable

## Usage

This template uses [npm Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces). 
It has 1 packages to start with and you can add more it.

### Infrastructure

The `infra/` directory allows you to logically split the infrastructure of your app into separate files. This can be helpful as your app grows.

In the template, we have an `storage.ts`. 
These export the created resources. And are imported in the `sst.config.ts`.

---

Join the SST community over on [Discord](https://discord.gg/sst) and follow us on [Twitter](https://twitter.com/SST_dev).
