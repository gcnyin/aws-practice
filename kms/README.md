# KMS

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
