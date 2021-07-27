const returnValue = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\ \n',];

let iterator = 100;

for (let i = 0; i < returnValue.length; i++) {
  setTimeout(() => {
    process.stdout.write(returnValue[i]);
}, iterator += 300);
};


