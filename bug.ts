function printString(str: string): void {
  console.log(str);
}

function usePrintString(str: string | null): void {
  if (str === null) {
    return;
  }
  printString(str);
}

const myString: string | null = null;
usePrintString(myString); // this line will compile without errors

const myString2: string | undefined = undefined;
usePrintString(myString2); // this line will throw a compile-time error because usePrintString expects null or a string, not undefined

