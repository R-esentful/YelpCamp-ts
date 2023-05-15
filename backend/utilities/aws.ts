import dotenv from "dotenv";
import { ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";
import { bucket } from "./variables";
import { s3 } from "../config/awsconfig";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
dotenv.config();

/**
 * @description checks if there is an existing folder for the specific campground.
 * @param id Gets the id of the campground
 * @returns True if it already exists, if not then it creates the folder.
 */
export const checkFolder = async (id: string) => {
  const prefix = `campground/${id}/`;

  const command = new ListObjectsV2Command({ Bucket: bucket, Prefix: prefix, MaxKeys: 1 });
  const response = await s3.send(command);
  const objects = response.Contents;

  const folderExists = objects!.length > 0;
  if (!folderExists) {
    const command = new PutObjectCommand({ Bucket: bucket, Key: prefix, Body: "" });
    await s3.send(command);
  }
  return prefix;
};

export const uploadImage = async (id: string, imageNo: string, location: string, type: string) => {
  const key = `campgrounds/${id}/${imageNo}`;
  const command = new PutObjectCommand({ Bucket: bucket, Key: location, ContentType: type });
  const signedURL = await getSignedUrl(s3, command, { expiresIn: 3600 });
  return signedURL;
};
