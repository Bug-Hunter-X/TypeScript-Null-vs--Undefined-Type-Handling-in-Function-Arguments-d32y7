function printString(str: string): void {
  console.log(str);
}

function usePrintString(str: string | null | undefined): void {
  if (str === null || str === undefined) {
    return;
  }
  printString(str);
}

const myString: string | null = null;
usePrintString(myString); // Works

const myString2: string | undefined = undefined;
usePrintString(myString2); // Now works correctly as well

const myString3: string = "Hello";
usePrintString(myString3); // Works

