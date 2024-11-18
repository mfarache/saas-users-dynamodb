/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "users-dynamodb",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const storage = await import("./infra/storage");
    return {
      arn: storage.table.arn,
    };
  },
});
