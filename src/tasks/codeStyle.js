function codeStyleTask() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FooBar\n";
    } else if (i % 3 === 0) {
      result += "Foo\n";
    } else if (i % 5 === 0) {
      result += "Bar\n";
    } else {
      result += `${i}\n`;
    }
  }
  return result;
}

export default codeStyleTask;
