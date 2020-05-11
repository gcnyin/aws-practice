const { Lambda } = require("aws-sdk");

const lambda = new Lambda({ region: "ap-southeast-1" });

exports.handler = async (_event, _context, callback) => {
    const result = await lambda.invoke({ FunctionName: "hzhuang-callee" }).promise();
    console.log('Received response:', JSON.stringify(result));
    callback(null, "Done");
}
