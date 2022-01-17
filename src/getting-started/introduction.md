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

## Disadvantages of serverless

Whilst serverless has many advantages, it also has some disadvantages and different ways of doing things compared to traditional infrastructure. The disadvantages below are common gotchas to be aware of and depend on the context of how serverless infrastructure is used.

### Learning curve

Serverless requires a different mindset to traditional infrastructure. With traditional infrastructure, the concepts are largely the same - running software on virtual machines. Serverless has a different way of doing things, and is largely event-driven. This means you need to shift your focus closer to the events that trigger something that is running on serverless infrastructure (e.g. a HTTP request triggering a function).

Best practices in serverless are also different. For example, functions running on Function-as-a-Service infrastructure should do one thing, one thing well, and be small. This is to mitigate other disadvantages, like cold start times.

### Monitoring and debugging

Serverless makes it harder to monitor requests and responses end-to-end using traditional monitoring tools. Monitoring becomes distributed, and debugging can end up relying on reverse engineering log traces to find the root cause of an issue.

### Local testing

As serverless removes the need and ability to manage or see anything other than your application code, you have no visibility of the backend processes. This makes it harder (not impossible) to locally test your application as you can't replicate the infrastructure locally.

One way to mitigate this is to always deploy your code, and test it with the serverless service you are using.

### Different security and compliance concerns

With serverless, as the management of underlying infrastructure is abstracted away to a cloud provider, you are relying on the cloud provider to implement security measures well. Further, you can't perform a penetration test on the underlying server, because you don't have access to it.

Serverless also tends to use servers that are multi-tenancy. This can be an issue for compliance and legal reasons in highly regulated industries.

### Long running processes have limitations

Certain serverless implementations, for example Function-as-a-Service (FaaS), have limitations around long running processes. FaaS tends to have a timeout of less than 30 minutes, which makes it impossible to run long running tasks.

Further, as serverless providers charge for the amount of time code is running, it could end up costing more to run long-running processes using serverless compared to traditional infrastructure.

### Cold starts

Cold starts can be an issue in serverless. As serverless infrastructure will scale down to zero when an application is not in use; it may require a cold start when an event invokes the application. This can sometimes be a few seconds.

Although, if a piece of code is used regularly, it will be warm - which means you eliminate the cold start.

### Vendor lock-in

Serverless infrastructure tends to be tightly coupled and integrated with cloud provider services and APIs. This can create vendor lock-in, as serverless implementations are non-typical and can vary between cloud providers.

Although, it's important to note that there is always a level of vendor lock-in when utilising a cloud provider, serverless or not.

### Costs

Depending on the use case for serverless, it can end up being more expensive than traditional infrastructure. An example of this is if you have a reliable, consistent traffic pattern. It may be cheaper to buy a virtual machine to run your service on.

Although, it does depend on the context and the use case. For example, the time saved by not managing servers may offset the increased costs.
