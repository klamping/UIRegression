# Introduction

Visual interface testing is difficult.

Unlike unit testing, it’s not a simple equation of “I send in A and expect out B”. Interfaces are complicated. Not only do you need to test visual output (versus programatic output), you also have to deal with changing content, security restrictions, and content that changes display based on user interaction.

It’s complicated, so lets define the problem we’re trying to solve:

## What is Visual Regression Testing?

### It’s Visual

That’s a no brainer. But really, it’s two parts:

1. We’re testing the visual output of the website. This is not functional testing. That’s a different type of test.
2. We test by comparing the visual output (i.e. diffing) between two versions. 

### It Tests Regressions

Regressions occur when functionality that was working as expected is no longer working as expected. Usually this occurs after a code change, but it can also occur due to different content on the page or a time-based condition occurs (think daylight savings time messing up alarm clocks).

One part of regression testing is that you must have a baseline in place before running your tests. This is not test-driven development (which is a very useful development pattern), where you write your tests then write your code.

In my experience, trying to fit visual output in to the TDD pattern consumes an overwhelming amount of time, and results in a lot of duplicate code (making changes down the line more time consuming).

### It’s Testing

Another no-brainer. Testing isn’t perfect and won’t catch every thing, or be able to test every scenario.

> “Testing shows the presence, not the absence of bugs.” - [Edsger W. Dijkstra](http://en.wikiquote.org/wiki/Edsger_W._Dijkstra#1960s)

While Visual Regression Testing can catch many regressions, it’s also not a perfect test (as there’s really no such thing). Each tool has its own pros and cons, and some are better suited for certain situations than others.

To help with this, we’ll be covering several tools, each excelling at its own thing. We’ll start with Wraith, which, in my opinion, is the easiest tool to get up and running with.