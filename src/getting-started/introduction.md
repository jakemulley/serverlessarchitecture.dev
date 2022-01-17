---
title: Introduction to serverless
tagline: Learn what serverless is, the advantages and disadvantages of serverless, and when to use it.
---

## What is serverless?

Serverless (short for "serverless computing") is a cloud-native architectural pattern. It allows developers to focus on developing and running applications and services in the cloud, without having to manage the underlying servers. Serverless is still backed by servers, but the management is abstracted away to a cloud provider, such as [Amazon Web Services (AWS)](https://aws.amazon.com/), [Microsoft Azure (Azure)](https://azure.microsoft.com), or [Google Cloud Platform (GCP)](https://cloud.google.com).

Utilising serverless architecture offsets the need for a developer to provision, maintain, and scale servers. This includes the maintenance, patching, capacity planning and management, scalability, and availability of servers.

Historically, "serverless" has been synonymous with "[Function as a Service](https://en.wikipedia.org/wiki/Function_as_a_service)" (FaaS). More recently, cloud providers have started to offer serverless equivalents of traditional infrastructure, such as databases, queuing systems, event buses, blob storage, and API gateways.

That's all serverless is: cloud services that don't require a developer to manage the underlying servers and the complexities that come with that.

## Advantages of serverless

Compared to traditional infrastructure and architectural patterns, serverless can offer lots of advantages, ranging from cost efficiency to increased environmental sustainability.

### No server management

Although serverless architectures are still backed by servers, the management aspect is offset to a cloud provider. This means you don't need to manage the server your application runs on. This includes the maintenance, patching, capacity planning and management, scalability, and availability of servers. This frees up your time to focus on building an application, rather than configuring and maintaining the underlying servers.

### Reduced cost

With traditional infrastructure, you'd provision servers based on the projection of usage for an application. This typically means that a server would be over-provisioned, to account for peaks in traffic; and you'd be paying for CPU time or disk space, whether it was in use or not.

With serverless, you are only charged for what is used. You don't need to capacity plan or over-provision, as server provisioning and scaling is dynamic, near real-time, and managed by a cloud provider. This allows serverless infrastructure to automatically scale up and down (including to zero) as needed. This can result in a reduced cost for workloads; as you are not paying for idle compute power when your service has no or low traffic compared to the peaks you may have provisioned for in traditional infrastructure. If your application has no traffic or does not need to run, the cost is zero when using serverless. You no longer need to pay for idle CPU time or unused disk space. Typically, resource utilisation is automatically optimised too, meaning you get value for money.

Further, there is also a reduction in time and people cost, as you don't need to worry about server management; or necessarily have the skills for server management. You can focus on the application you are building.

### Scalability

When utilising serverless, you don't have to worry about scalability. Serverless is inherently scalable by default, and infrastructure will scale up and down based on demand. This includes scaling down to zero when a service is not in use and infinitely up when there is peak demand or an unusual spike in traffic.

You don't need to capacity plan or guess how much compute you need to provision for serverless infrastructure, as it is ready, available, and can be utilised on demand.

### Increased productivity

As serverless gives you time back from managing servers, it can increase your productivity by allowing you to focus on your application rather than server management and configuration.

Serverless is also typically used for microservices, which makes it easier to deploy and manage. You can redeploy, reiterate, or rebuild one microservice at a time rather than redeploying whole monolithic applications.

### Reduced latency

Serverless makes it easier to run your code closer to your users, usually at the edge. You can typically adopt a multi-region architecture without unnecessarily increasing cost, as you don't need to provision servers that run all the time in multiple regions.

This can reduce latency and Time to First Byte for applications if done correctly.

### Increased environmental sustainability

Traditional infrastructure is usually on 24 hours a day, 7 days a week. Serverless infrastructure can scale down to zero. This uses less energy than idle CPU time on a provisioned server. Serverless infrastructure is delivered on demand when and as it is needed.

As serverless can scale down to zero and is never over-provisioned, it can increase environmental sustainability for a service. When your service isn't in use, it's not idly running on a server. It scales down to zero, increasing environmental sustainability by using less energy.

### Reduced complexity

As server management is abstracted away to cloud providers, it can reduce complexity of an application. You no longer need to worry about the operating system, hardware, dependencies, patching or management of the servers. You can focus on your application code.

Serverless also promotes "honest architecture". People can perceive serverless as more complex; since architectural diagrams for serverless applications tend to be more _honest_ and detailed than traditional infrastructure. Yan Cui of The Burning Monk covers this in more detail in their blog post "[Even simple serverless applications have complex architecture diagrams - so what?](https://theburningmonk.com/2020/11/even-simple-serverless-applications-have-complex-architecture-diagrams-so-what/)".

### Reduced time to market

Since serverless reduces your operational overhead (i.e. server management), it can reduce time to market for an application. It can also enable quicker deployments, and the ability to focus on building an application rather than configuring servers. This allows you to release and iterate quickly, getting your application to market faster.

### Reduced security risk

With serverless, you're not managing the server itself. This can reduce your security risk by having one less thing to patch (the server) and allows you to focus on application security instead.

The management of the operating system, hardware, and local dependencies is managed by a cloud provider, who would also typically have more skill and expertise to ensure security in depth.
