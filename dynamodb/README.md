# DynamoDB

Create table `Project_hzhunag`

```
aws dynamodb create-table \
   --attribute-definitions AttributeName=projectName,AttributeType=S AttributeName=projectType,AttributeType=S \
   --table-name Project_hzhuang \
   --key-schema AttributeName=projectName,KeyType=HASH AttributeName=projectType,KeyType=RANGE \
   --billing-mode PAY_PER_REQUEST
```
