import DynamoDB from "aws-sdk/clients/dynamodb"

const dynamodb = new DynamoDB({ region: "ap-southeast-1" });

dynamodb.getItem({
    TableName: "Project_hzhuang",
    Key: {
        projectName: {
            S: "project1"
        },
        projectType: {
            S: "normal"
        }
    }
}).promise().then(console.log);