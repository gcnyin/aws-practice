const { S3 } = require("aws-sdk");

const s3 = new S3();

exports.handler = async (_event, _context, _callback) => {
    console.log("start")
    const bucketName = "aws-training-hzhuang";
    const targetBucket = "aws-training-hzhuang-resized";
    const sourceKey = "jdks.txt"
    try {
        const file = await s3.getObject({ Bucket: bucketName, Key: sourceKey }).promise();
        console.log("file", file.Body.toString('ascii').replace(/\n/g, ' '));
        const result = await s3.putObject({ Bucket: targetBucket, Key: sourceKey, Body: file.Body, ContentType: "text/plain" }).promise();
        console.log(JSON.stringify(result.$response, null, 2));
        return "Done";
    } catch (e) {
        console.error(e);
    }
}