import { Resource } from "sst";
import { Example } from "@users-dynamodb/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
