class Demo {
  constructor(A, B) {
    this.iNo1 = A;
    this.iNo2 = B;
  }

  Addition() {
    let iAns = 0;
    iAns = this.iNo1 + this.iNo2;
    return iAns;
  }

  Subtraction() {
    let iAns = 0;
    iAns = this.iNo1 - this.iNo2;
    return iAns;
  }
}

function main() {
  let obj2 = new Demo(11, 10);
  let iRet = 0;

  iRet = obj2.Addition();

  console.log("Addition is : ", iRet);

  iRet = obj2.Subtraction();

  console.log("Subtraction is : ", iRet);
}

main();
