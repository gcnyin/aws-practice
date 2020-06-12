# DynamoDB

Create table `Project_hzhunag`

```
aws dynamodb create-table \
   --attribute-definitions AttributeName=projectName,AttributeType=S AttributeName=projectType,AttributeType=S \
   --table-name Project_hzhuang \
   --key-schema AttributeName=projectName,KeyType=HASH AttributeName=projectType,KeyType=RANGE \
   --billing-mode PAY_PER_REQUEST
```
## Backup

备份

```
aws dynamodb create-backup --table-name Project_hzhuang --backup-name Project_hzhuang_backup
```

还原

```
aws dynamodb restore-table-from-backup --target-table-name Project_hzhuang_new --backup-arn arn:aws:dynamodb:ap-southeast-1:494526681395:table/Project_hzhuang/backup/01591943461094-17dc201c
```

Enable point in time recovery

```
aws dynamodb update-continuous-backups --table-name Project_hzhuang --point-in-time-recovery-specification PointInTimeRecoveryEnabled=True
```

查看table backup信息

```
aws dynamodb describe-continuous-backups --table-name Project_hzhuang
```

还原

```
aws dynamodb restore-table-to-point-in-time --source-table-name Project_hzhuang --target-table-name Project_hzhuang_point_in_time --use-latest-restorable-time
```