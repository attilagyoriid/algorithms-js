type StrorNum = string | number;

interface FindCommon {
  (arg0: string[], arg1: string[]): boolean;
}
interface findSumPair {
  (arg0: number[], arg1: number): boolean;
}


class ArrayManipulation {


    mergeSortedArrays(array1: number[], array2:number[]):number[] {
        const mergedArray = [];
        let array1Item = array1[0];
        let array2Item = array2[0];
        let i = 1;
        let j = 1;
        if(array1.length === 0) {
          return array2;
        }
        if(array2.length === 0) {
          return array1;
        }
      
        while (array1Item || array2Item){
         if(array2Item === undefined || array1Item < array2Item){
           mergedArray.push(array1Item);
           array1Item = array1[i];
           i++;
         }   
         else {
           mergedArray.push(array2Item);
           array2Item = array2[j];
           j++;
         }
        }
        return mergedArray;
      }

 

      findFirstReoccurringItem(array1: StrorNum[]): StrorNum | undefined {

          const itemsInspected:StrorNum[] = [];
          for (const item of array1) {

            if (itemsInspected.includes(item)) {
              return item;
            }
            itemsInspected.push(item);
            
          }

          return undefined;
      }

      findFirstReoccurringItem2(array1: StrorNum[]): StrorNum | undefined {

        const itemsInspected = new Set<StrorNum>();
        for (const item of array1) {

          if (itemsInspected.has(item)) {
            return item;
          }

          itemsInspected.add(item);
          
        }

        return undefined;
    }

    public findCommonElements: FindCommon = (list1: string[] = [], list2: string[] = []) => {
      for (let i = 0; i < list1.length; i++) {

          if (list2.includes(list1[i])) {
              return true;
          }

      }
      return false;
  }

  public findCommonElements2: FindCommon = (list1: string[] = [], list2: string[] = []) => list1.some(item => list2.includes(item));

  public findCommonElements3: FindCommon = (list1: string[] = [], list2: string[] = []) => {
      const set = new Set();

      list1.some(item => list2.includes(item));
      return true;
  }


  public hasPairInListWithSum(list: number[] = [], sum: number): boolean {
      const mySet = new Set();
      const length = list.length;
      for (let i = 0; i < length; i++) {
          if (mySet.has(list[i])) {
              return true;
          }
          mySet.add(sum - list[i]);
      }
      return false;
  }

}


export default ArrayManipulation;