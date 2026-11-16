---
id: 3
title: Functional Fixation
description: Functional programming and my love for it
date: "2026-11-16"
---

Functional programming is a beautiful programming paradigm. It's main focus is
on *purity*, which is, lack of side effects.

Take this C code for example:

```c
static int num = 0;

int my_func(int x) {
  return x + num++;
}

int main() {
  int result = 0;
  int x = 12;

  for (int i = 0; i <= 10; i++) {
    result += my_func(x);
  }
}
```

For those unfamiliar with C, this code initializes a `result` variable set to 0,
then a constant `x` set to 12. Then, it calls a function `my_func` that returns
the sum of a product plus a counter variable `num` which is initially set to 0.

This is impure! Even though I can call `my_func` multiple times with the same
arguments, it returns a different number each time! This is where functional
programming comes in. Here's our previous example in C, but instead in Haskell:

```haskell
result v = sum [x + v | x <- [0..10]]
```

Since the original C code can be thought about as the sum of the sums of a
constant and value of numbers 0 to 10, we can represent the code quite easily in
Haskell. The sums of each value are calculated by a simple list comprehension,
which draws numbers from the range [0, 10], and maps them to the sum of the
constant and value. Then the values of the list are summed and returned.
Functional programming makes programmers think about "mutations" (changing the
value of a variable, which is impossible in purely functional code) as a
sequence of operations on data.

In this example, the initial data is the numbers in the range [0, 10], which then
are turned into a list of numbers of the sum of themselves and the constant, then
summed into a final single number.

Although this is a relatively simple example, it makes it easy to see how
functional programming actually maps to traditional imperative programming. Now
hold on… what actually is imperative programming? Well, you've likely heard
people drop the words "imperative" and "declarative", but they're not just
buzzwords unlike tech companies like to use them as.

Imperative programming (or more generally, imperative in general), is describing
how to do something–whereas declarative is describing what you want rather than
how to do it. An imperative approach to brushing your teeth would be something
like "pick up your toothbrush, then squeeze toothpaste, then rub the toothbrush
on your teeth for 2 minutes" whereas a declarative approach would be "brush your
teeth".

Important to note, is that since computers don't have brains (unless they're
running a neural network), everything declarative is at some point based on
imperative instructions.

Whew… now that lengthy chunk of description is out of the way, here's
some more actual code.

```c
int main() {
  for (int i = 0; i < 5; i++) {
    // for loop!
  }
}
```

Yep! It's just a for loop. But see that little `++` at the end of `i`? That's a
mutation. This is not allowed in functional programming!

How do you do loops then?! Introducing, recursion:

```haskell
loop n = if n == 0 then () else loop (n - 1)
```

Okay… what does this do?

Loop is a function that does absolutely nothing, `n` times! If `n` is zero, than
the function returns unit (nothing), but if it isn't, than it calls itself again
with a new value of `n`, `n - 1`.

So, so far we've established that functional programming makes programmers think
of mutations as a series of operations on data, that values are immutable
(cannot change), and functions can call themselves. Functions in imperative
languages generally can call themselves, but they lack tail call optimization
and can cause stack overflows. Explaining this entirely is outside the scope of
this blogpost, look it up!

But now what about IO? Since IO is impure (may not return the same result each
time), how is this handled? Well, in impure-functional languages like OCaml (my
love), IO and exceptions are allowed. For example, opening a nonexistent file
just panics with an exception:

```ocaml
let () = open_in "does-not-exist.txt";;
```

```sh
Exception: Sys_error "does-not-exist.txt: No such file or directory".
```

This is normal and expected behavior, programmers can use try and catch to
manage exceptions in their code. However, in purely functional languages, like
Haskell, IO is more complex. IO is a monad, and monads are just monoids in the
class of endofunctors.

Monads can get extremely complex and confusing very quick, and I don't
particularly want to explain them in their entirety. However, here's a concise
example:

Think of a box. It's currently empty. I then place a cake in the box and give it
to my friend. My friend then takes a couple of bites of the cake and then closes
the box again and gives it to another friend. Now that friend has a box, with a
partially eaten cake.

How on earth does this relate to IO?! Okay I need to do some explaining. The box
is a monad, and the cake is a value. In functional programming, you can *bind*
monads to functions. What this does is run the function on the value inside the
monad. This sequencing allows me to simulate IO through monads, because IO is
represented by, well, the IO monad. The "box" can contain the value of the IO or
an IO error. However, as programmers in Haskell, we cannot actually access the raw
value inside the box, as only the main function can actually run IO.

Wow. That's a lot. So functional programming represents mutations as a series of
operations on data, values cannot change, functions can call themselves, and IO
can be simulated through monads in a purely functional language.

The functional programming rabbit hole goes so much deeper, but why would anyone
use this over traditional (easier) imperative programming? Well first, no
mutations makes data races impossible. This entirely eliminates a class of bugs
programmers have struggled with for decades. It also generally results in some
pretty fast code, as compilers do aggressive optimization in most functional
languages. And finally, the code can just look cleaner. Remember the first
example in C? Here's it in another systems programming language that has adopted
many functional programming concepts, Rust!

```rust
fn main() {
  let x = 12;
  let result = (0..=10).map(|v| v + x).sum();
}
```

In addition to the benefits that functional programming languages provide, the
languages themselves generally have very expressive algebraic data types that let
programmers represent complex data in cleanly structured types, often making invalid
state unrepresentative.

Finally, notice any types in any of the code aside from C? Functional
programming compilers are *really* good at infering types from how the functions
themselves are used, making for a nice, often type-free, experience for the developer.

I encourage you, the reader, to explore more into functional programming, as
this blogpost is only the beginning.
