# KMS

# Basic

## Task 1 - Use aws-cli to create a key

```bash
$ aws kms create-key
```

Output:

```json
{
    "KeyMetadata": {
        "AWSAccountId": "494526681395",
        "KeyId": "aa5b2dc0-88ba-4e21-b339-82d8a18e9e6b",
        "Arn": "arn:aws:kms:ap-southeast-1:494526681395:key/aa5b2dc0-88ba-4e21-b339-82d8a18e9e6b",
        "CreationDate": "2020-05-13T15:14:11.382000+08:00",
        "Enabled": true,
        "Description": "",
        "KeyUsage": "ENCRYPT_DECRYPT",
        "KeyState": "Enabled",
        "Origin": "AWS_KMS",
        "KeyManager": "CUSTOMER",
        "CustomerMasterKeySpec": "SYMMETRIC_DEFAULT",
        "EncryptionAlgorithms": [
            "SYMMETRIC_DEFAULT"
        ]
    }
}
```

## Task 2 - Use aws-cli to encrypt data with the key you just created

```bash
$ aws kms encrypt \
--key-id aa5b2dc0-88ba-4e21-b339-82d8a18e9e6b \
--plaintext fileb://plain.txt \
--output text \
--query CiphertextBlob | base64 \
--decode > ExampleEncryptedFile
```

## Task 3 - Use aws-cli to decrypt data with the key you just created

```bash
$ aws kms decrypt \
--ciphertext-blob fileb://ExampleEncryptedFile \
--output text \
--query Plaintext | base64 --decode > ExamplePlaintextFile
```

## Task 4 - Use open source tool shush to do the above action

```bash
export AWS_DEFAULT_REGION=ap-southeast-1; ./shush_darwin_amd64 encrypt hzhuang-key 'Hello, world' > secret.encrypted
```

```bash
./shush_darwin_amd64 decrypt < secret.encrypted > secret.txt
```

# Nice to Have

## Task 1 - audit use of a key using AWS CloudTrail

```bash
aws cloudtrail lookup-events --max-items 100 --lookup-attributes AttributeKey=EventSource,AttributeValue=kms.amazonaws.com > kms.json
```

## Create Alias

```bash
aws kms create-alias --alias-name hzhaung-key aa5b2dc0-88ba-4e21-b339-82d8a18e9e6b
```

## S3

```bash
aws s3 cp s3://aws-training-hzhuang/jdk s3://aws-training-hzhuang-resized/jdk --recursive --sse aws:kms --sse-kms-key-id aa5b2dc0-88ba-4e21-b339-82d8a18e9e6b
```
