# TypeScript Null vs. Undefined Type Handling

This repository demonstrates a subtle difference in how TypeScript handles `null` and `undefined` types when passed as function arguments.

## The Bug

The `bug.ts` file contains a function `usePrintString` that accepts a string or null (`string | null`).  While a `null` value is handled correctly, passing `undefined` results in a compile-time error even though both are often used to represent the absence of a value. 

## Solution

The `bugSolution.ts` file shows how to modify the function signature to accept `undefined` as well, resolving the type-related error.