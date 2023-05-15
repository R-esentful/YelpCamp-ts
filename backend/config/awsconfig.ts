import dotenv from "dotenv";
import { S3Client } from "@aws-sdk/client-s3";
dotenv.config();

const accessKey = process.env.accessKey;
const secretAccessKey = process.env.secretKey;
const s3Config = {
  accessKeyId: accessKey,
  secretAccessKey: secretAccessKey,
  region: "ap-southeast-1",
};

export const s3 = new S3Client(s3Config);
