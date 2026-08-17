---
title: "Optimal Policy Selection Under Bilateral Preferences"
slug: "optimal-policy-selection-under-bilateral-preferences"
date: 2025-03-29
description: "Looking at everyday bilateral disagreements and optimal policy selection, inspired by the classic roommate dilemma."
keywords:
    - "Policy Selection"
    - "Greedy Algorithms"
    - "Decision Theory"
    - "Daniel Bruwel"
    - "Mathematical Optimization"
---

I was talking the other day to a colleague about the challange of living with "opinionated roommates". The problem that came up was that people often have prefferences towards how a house is arranged, where the spoons go, how often cleaning happens, etc. but its common for one person to have really strong opinions and one person to have more moderate views. Often, this leads to the person with stronger opinions dominating the decision-making process.

I was curious if there was a better way to deal with this. One of the things I had heared was an idea of assining a "50:50" to the problem, where you say something like "I'm 60 for having the spoons in this draw and 40 for the other draw" as a way of quantifying how much you care about the specific problem. This is good for individual decisions but breaks down across multiple repeat decisions if someone has a strong polerisation.

The natural thing to do is to think about this as a score function from each person, and wanting to ballance things out as much as possible, beacuse after enough "60:40" opinions loos to "10:90" opinions, you should get to win one. If we agree that things should be ballanced, we can formalise the entire problem and try to solve it. In doing so, I realised that this is a pretty common issue in lots of situations outside of household disagreements.

The problem can be formulated by looking at a collection of $n$ policies, where each policy is binary—meaning it can either be implemented ($\pi_i = 1$) or not implemented ($\pi_i = 0$). We assumed that each agent has a linear scoring function that distributes across the policies, defined as $s_a(\pi) = m_a \cdot \pi + c_a$, where $m_a$ represents a vector of weights for each policy.

To find the optimal subset of policies, we need to maximize the utility for both agents. By applying a log-loss relative risk aversion utility, we established the following objective function:

$$
L(x) = -(m_0 \cdot \pi + b_0)(m_1 \cdot \pi + b_1)
$$

This is a simple but slightly annoying objective function, and it can be solved in a few different ways:

-   **Brute Force Exact Solution:** Check all $2^n$ combinations.
-   **Continuous Approximation:** We can extend the binary variables into a continuous space $[0, 1]^n$, turning the objective function into a standard quadratic form ($\pi^T M \pi$) that can be solved efficiently with quadratic programming.
-   **Greedy Algorithms:** Instead of checking every combination, we found that greedy algorithms—such as iteratively adding policies that increase joint utility—approximate the efficiency frontier extremely well.

These are pretty straight forward, and can be implemented efficiently in most cases, though they do require knowing all the possible policies in advance, and the scoring function. Which is a little annoying to do.

While the above is nice, and the "50:50" strategy is clean and casual its not super practicle or accurate, and can easily be abused. It would also be nice to have an "online" approach that doesn't need all the policies computed in advance.

Doing a bit of reading there is a concept called "Quadratic Voting" where you give each individual a fixed "budget" of tokens that they can spend on votes, and you can cast multiple votes on a specific policy. However, the cost to cast $n$ votes on any given policy is quadratically $n^2$ which leads to a linear incremental utility of voting which turns out to force the voting to be optimal in the sence that the number of votes cast represents the intensity of prefference.
