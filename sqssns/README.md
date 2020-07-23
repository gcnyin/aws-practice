# SNS & SQS

## SNS 是什么服务？解决什么问题？

Amazon Simple Notification Service (SNS) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications. Amazon SNS provides topics for high-throughput, push-based, many-to-many messaging. Using Amazon SNS topics, your publisher systems can fan out messages to a large number of subscriber endpoints for parallel processing, including Amazon SQS queues, AWS Lambda functions, and HTTP/S webhooks. Additionally, SNS can be used to fan out notifications to end users using mobile push, SMS, and email.

## SQS 是什么服务？解决什么问题？

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. Get started with SQS in minutes using the AWS console, Command Line Interface or SDK of your choice, and three simple commands.

## Tasks

- [ ] 每 5 mins 自动触发SNS的Topic
- [ ] SNS 自动发送邮件，邮件内容包含所有 event 的内容
- [ ] SNS 向订阅的 SQS中发送消息
- [ ] SQS要有retention(7days) / timeout(5mins)
- [ ] SQS自动触发Lambda运行，Lambda将event的所有内容输出到CloudWatch log中
- [ ] SNS要有 logging / encryption / retry / permission
- [ ] Email Subscription 要有 DLQ
- [ ] SQS要有DLQ / encryption
- [ ] tagging
- [ ] As Code: CFN

## 遇到的问题

cloudWatch Event无法trigger SNS Topic

https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CWE_Troubleshooting.html#NoMessagesPublishedSNS
