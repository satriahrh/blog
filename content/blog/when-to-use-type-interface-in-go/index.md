---
title: "When to Use Type Interface in Go?"
location: "Jakarta, Indonesia"
date: "2020-02-06"
language: "en"
---

I have read an article about [how to use type interface in Go](https://medium.com/better-programming/a-real-world-example-of-go-interfaces-98e89b2ddb67) since I subscribe to [Go Telegram Channel](https://t.me/golang).
I read it until the end even though I already know how to use it.
The one thing that came to my mind is, why should I use type interface?

Believe it or not, type interface is a language feature. 
Like any other feature in Go, go routing, defer, type, etc.
Do not get me wrong, I didn't have any problem with type interface.
I was very eager to use go because of this cool feature.

And now, why am I questioning it? It is because the feature is like a weapon.
You should know when to use it, when not to.
This article is all about it.

## When You Should Use It?

You are building online store apps that receive multiple payment methods.
You should then integrate with those payment channels.


Remember when you are going to integrate with a payment channel, you should have come to two main business logics: `inquiry` and `pay`.
Those logics then should be in your `PaymentChannel` interface.
```
type PaymentChannel interface {
	Inquiry()
	Pay()
}
```

From that interface, you should implement for each payment channel their `inquiry` and `pay` behavior.
In this, case we have two payment channels: `DebitCard` and `CreditCard`.

First, we need to implement that interface for `DebitCard`
```
type DebitCard struct {
}

func (d *DebitCard) Inquiry() {
	fmt.Println("Inquiry using DEBIT CARD")
}

func (d *DebitCard) Pay() {
	fmt.Println("Pay using DEBIT CARD")
}
```

Then you also need to implement the interface for `CreditCard`

```
type CreditCard struct {
}

func (c *CreditCard) Inquiry() {
	fmt.Println("Inquiry using CREDIT CARD")
}

func (c *CreditCard) Pay() {
	fmt.Println("Pay using CREDIT CARD")
}
```

We should have a general method to `inquiry` and `pay` from `PaymentChannel`.
```
func pay(paymentChannel PaymentChannel)  {
	paymentChannel.Pay()
}

func inquiry(paymentChannel PaymentChannel)  {
	paymentChannel.Inquiry()
}
```

By now, you should be able to use those payment channel on board.
```
func main()  {
	debitCard := &DebitCard{}
	creditCard := &CreditCard{}

	pay(debitCard)
	inquiry(debitCard)

	pay(creditCard)
	inquiry(creditCard)
}
```

If you run those codes, you will get following output.
```
Pay using DEBIT CARD
Inquiry using DEBIT CARD
Pay using CREDIT CARD
Inquiry using CREDIT CARD
```

## When You Should Not Use It?

In the meantime, I was at a professional Go application development team.
I didn't have any prior knowledge of how to this weapon well, then all implementation my teammates did is the best guru at the moment.
It was not however until I asked my self, "Why did we write type interface? Is it like a function index? Is it a table of content? Is it?"

In case that you have to build a database query, should we need to write an interface on it?
```
type SQL interface {
  CreateMutation(ctx context.Context, mutation Mutation) (mutation Mutation)
  ReadMutation(ctx context.Context, id int) (mutation Mutation)
  ListMutation(ctx context.Context) (mutations[] Mutation)
  UpdateMutation(ctx context.Context, id int, newMutation Mutation) (mutation Mutation)
  DeleteMutation(ctx context.Context, id int)
}
```

That interface can be removed and it can save the entire team from frustration.
You do not need to write back and ford from interface to the implementation to keep your code tidy.

## Conclusion

My post probably just an elementary introduction of what interface is.
I believe so since where I look for a type interface tutorial, it always comes up with an example as I mentioned in the first section.

For me, the real example of the true usage of type interface comes to this article by Hector Yeoman about [Golang and Interfaces Misuse](https://hyeomans.com/golang-and-interfaces-misuse/).
I agree with him.

I am wanting to make that kind of article in the feature with my real case.
I hope I can deliver it asap.
Until next time, please stay tune to my blog.
