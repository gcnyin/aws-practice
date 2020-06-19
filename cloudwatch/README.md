# CloudWatch

## 什么是Cloudwatch？

Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers. CloudWatch provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications, and services that run on AWS and on-premises servers. You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

## 我们为什么要使用CloudWatch？

Infrastructure monitoring and troubleshooting

Monitor key metrics and logs, visualize your application and infrastructure stack, create alarms, and correlate metrics and logs to understand and resolve root cause of performance issues in your AWS resources. This includes monitoring your container ecosystem across Amazon ECS, AWS Fargate, Amazon EKS, and Kubernetes.

Mean-time-to-resolution improvement

CloudWatch helps you correlate, visualize, and analyze metrics and logs, so you can act quickly to resolve issues, and combine them with trace data from AWS X-Ray for end-to-end observability. You can also analyze user requests to help speed up troubleshooting and debugging, and reduce overall mean-time-to-resolution (MTTR).

Proactive resource optimization

CloudWatch alarms watch your metric values against thresholds that either you specify, or that CloudWatch creates for you using machine learning models to detect anomalous behavior. If an alarm is triggered, CloudWatch can take action automatically to enable Amazon EC2 Auto Scaling or stop an instance, for example, so you can automate capacity and resource planning.

Application monitoring

Monitor your applications that run on AWS (on Amazon EC2, containers, and serverless) or on-premises. CloudWatch collects data at every layer of the performance stack, including metrics and logs on automatic dashboards.

Log analytics

Explore, analyze, and visualize your logs to address operational issues and improve applications performance. You can perform queries to help you quickly and effectively respond to operational issues. If an issue occurs, you can start querying immediately using a purpose-built query language to rapidly identify potential causes.

## CloudWatch中的metrics是什么？包括哪些种类？我们可以如何使用metrics？

Metrics are the fundamental concept in CloudWatch. A metric represents a time-ordered set of data points that are published to CloudWatch. Think of a metric as a variable to monitor, and the data points as representing the values of that variable over time. For example, the CPU usage of a particular EC2 instance is one metric provided by Amazon EC2. The data points themselves can come from any application or business activity from which you collect data.

AWS services send metrics to CloudWatch, and you can send your own custom metrics to CloudWatch. You can add the data points in any order, and at any rate you choose. You can retrieve statistics about those data points as an ordered set of time-series data.

Metrics exist only in the Region in which they are created. Metrics cannot be deleted, but they automatically expire after 15 months if no new data is published to them. Data points older than 15 months expire on a rolling basis; as new data points come in, data older than 15 months is dropped.

Metrics are uniquely defined by a name, a namespace, and zero or more dimensions. Each data point in a metric has a time stamp, and (optionally) a unit of measure. You can retrieve statistics from CloudWatch for any metric.

##  CloudWatch Events是什么？可以应用在那些场景？

CloudWatch sends events to Amazon EventBridge whenever a CloudWatch alarm changes alarm state. You can use EventBridge and these events to write rules that take actions, such as notifying you, when an alarm changes state.

## 相关概念理解：metrics，periods，namespace，count，dimensions，statistics

Namespaces

A namespace is a container for CloudWatch metrics. Metrics in different namespaces are isolated from each other, so that metrics from different applications are not mistakenly aggregated into the same statistics.

Metrics

Metrics are the fundamental concept in CloudWatch. A metric represents a time-ordered set of data points that are published to CloudWatch. Think of a metric as a variable to monitor, and the data points as representing the values of that variable over time. For example, the CPU usage of a particular EC2 instance is one metric provided by Amazon EC2. The data points themselves can come from any application or business activity from which you collect data.

Dimensions

A dimension is a name/value pair that is part of the identity of a metric. You can assign up to 10 dimensions to a metric.

Statistics

Statistics are metric data aggregations over specified periods of time. CloudWatch provides statistics based on the metric data points provided by your custom data or provided by other AWS services to CloudWatch. Aggregations are made using the namespace, metric name, dimensions, and the data point unit of measure, within the time period you specify. The following table describes the available statistics.
