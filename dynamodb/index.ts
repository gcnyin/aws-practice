import DynamoDB from "aws-sdk/clients/dynamodb"

const dynamodb = new DynamoDB({ region: "ap-southeast-1" });

const createItem = (order: number) => {
    return {
        TableName: "Project_hzhuang",
        Item: {
            "projectName": {
                S: `project${order}`
            },
            "projectType": {
                S: "normal"
            },
            "memberName": {
                S: `fake_name${order}`
            },
            "fee": {
                N: `1000${order}`
            },
            "open": {
                BOOL: true
            },
            "binary_info": {
                B: "xxx"
            },
            "startDate": {
                S: new Date().toISOString()
            },
            "fake_names": {
                SS: ["fake_name1", "fake_name2"]
            },
            "orders": {
                NS: ["123", "456"]
            },
            "binary_infos": {
                BS: ["aaa", "bbb", "ccc"]
            }
        }
    }
}

dynamodb.putItem(createItem(1)).promise()
dynamodb.putItem(createItem(2)).promise()
dynamodb.putItem(createItem(3)).promise()
dynamodb.putItem(createItem(4)).promise()
dynamodb.putItem(createItem(5)).promise()
