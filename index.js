
const {Storage} = require('@google-cloud/storage');
const destBucketName = "tt-output";

exports.listenStorageTechTalks = (event, context) => {

  const storage = new Storage();

  console.log("Event: "+JSON.stringify(event));

  const bucketId = event["attributes"]["bucketId"];
  const objectId = event["attributes"]["objectId"];
  
  storage
    .bucket(bucketId)
    .file(objectId)
    .copy(storage.bucket(destBucketName).file(objectId));

    console.log(
    `gs://${bucketId}/${objectId} moved to gs://${destBucketName}/${objectId}`
    );

};