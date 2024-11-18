export const table = new sst.aws.Dynamo("SAAS_USERS", {
    fields: {
      PK: "string",
      SK: "string",
    },
    primaryIndex: { 
        hashKey: "PK", 
        rangeKey: "SK"
    },
  });
