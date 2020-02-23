---
title: "How a Request is Made From Your Browser: Part 1 DNS Lookup"
location: "Jakarta, Indonesia"
date: "2020-02-23"
language: "en"
description: "The first thing when you make any request from your browser, it will lookup for the ip address of the domain name. The process consists Local Cache lookup, Recursive DNS Server lookup, DNS server lookup."
---

I was writing this artile somewhen about I was applying for backend engineer position at a tech company.
They was giving me some preliminary question at their first phase of recruitement, which are very basic and surprising at the moment.
I mean they asked me of **How a Request is Made From Your Browser**, which is very trivial question to ask but never ever anyone asked me about this.
So I went around for some references for a good explanations.
Since I made a long answer, I was thinking that this would be a post for my blog.

However I can deliver you a full long post because the topic is too deep for each section.
So I came up with the idea to split the post to several posts.
And the first post you are reading is DNS Lookup.

## DNS Lookup

The first thing when you make any request from your browser, regardless of the http method, it will lookup for the [ip address](https://en.wikipedia.org/wiki/IP_address) of the [domain name](https://en.wikipedia.org/wiki/Domain_name) of the [url address](https://en.wikipedia.org/wiki/URL) you typed in.
We call this process as a Domain Name System (DNS) lookup, which is not quite simple.

I have sum up the process into three processes: Local Cache lookup, Recursive DNS Server lookup, DNS server lookup.

### Local Cache

You or the user of your browser are probably already visit a page under the same domain name.
Lucky for you, the browser maybe stil have a cache for the ip address of that domain name.

But maybe, the browser you are using is detecting that you are not really often accessing some page under that domain name.
And the ip address of that domain name is clened from browser cache.
No need to be panic, you computer might be still save the ip address.

But your computer is not as simple as the browser when dealing with dns lookup.
It won't be just a cache, rather they might be defining an ip address for a specific domain name.
So when you type google.com, it is able that it goes to 127.0.0.1.
This kind of thing can be define at `/etc/hosts` for unix system, that I hope you are not surprised knowing all this as the target audience of my blog come from technical guy.

### Recursive DNS Server

I didn't have better name for this one, since some references I have worked with are mentioning *recursive* so let be it.

Assuming our local cache strategy is not succeed, it is then going into a **Recursive DNS Servers**.
It can be one or more servers to do recursive search of domain name.
By default, the Recursive DNS Servers you are using is set by your Internet Service Provider (ISP).
By the name goes, it search arround the servers recursively bouncing from one server to others.

In some case, they worked with your government to filter your Internet content by manipulating the DNS lookup in their Recursive DNS Servers.
However, you can assign the Recursive DNS server you want to use manually.
You might be hearing some public dns server from cisco, cloudflare, google, comodo, etc.
And I am pretty sure that you were ever or still using it, maybe to access web site your government want you not to access?

### DNS Server

The exhautive recursive search held by Recurisve DNS Search might be still returning a disappointing result.
No worry, because the real dns lookup at the first time come from this process.

TLDR, it consists of multi layered servers consisting: Root DNS Servers, Top Level DNS Servers, Authoritative DNS Servers.

At first, the lookup come into one of some Root DNS located in entire worlds. 
The Root DNS Server will return where is the Top Level DNS Server for the given domain name, in case if the domain name is `satriahrh.github.io` then the Root DNS Server will lookup the Top Level DNS Server for `.io`.

The Top Level DNS Server will then return the Authoritative DNS Server for the domain name.
In case of `satriahrh.github.io`, the Top Level DNS Server for `.io` then return the Authoritative DNS Server for `github.io`.

The Authoritative DNS Server will then return `A Record` assigned by the administrator.
It is consist of set of ip addresses for where the web server is hosted.
By then our browser is able to requesting the http request into one of those ip addresses.

