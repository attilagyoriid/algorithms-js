/** @format */

class Steps {
  steps(num: number): string[] {
    const stepsList: string[] = [];
    let toPrint: string = "#";

    for (let i = 1; i <= num; i++) {
      stepsList.push(toPrint.repeat(i).padEnd(num, " "));
    }
    console.log(stepsList);
    return stepsList;
  }
}

export default Steps;
