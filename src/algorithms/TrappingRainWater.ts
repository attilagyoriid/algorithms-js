/** @format */

class TrappingRainWater {
  getRainWaterAmount(list: number[]): number {
    let left = 0;
    let right = list.length - 1;
    let leftMax = list[left];
    let rightMax = list[right];
    let result = 0;

    while (left < right) {
      if (leftMax < rightMax) {
        left++;
        leftMax = Math.max(leftMax, list[left]);
        result += leftMax - list[left];
      } else {
        right--;
        rightMax = Math.max(rightMax, list[right]);
        result += rightMax - list[right];
      }
    }

    return result;
  }
}

export default TrappingRainWater;
