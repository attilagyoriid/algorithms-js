
class Algorithm {

    public findCommonElements: (arg0: string[], arg1: string[]) => boolean = (list1: string[] = [], list2: string[] = []) => {
        for (let i = 0; i < list1.length; i++) {

            if (list2.includes(list1[i])) {
                return true;
            }

        }
        return false;
    }

    public findCommonElements2: (arg0: string[], arg1: string[]) => boolean = (list1: string[] = [], list2: string[] = []) => list1.some(item => list2.includes(item));

    public findCommonElements3: (arg0: string[], arg1: string[]) => boolean = (list1: string[] = [], list2: string[] = []) => {
        const set = new Set();

        list1.some(item => list2.includes(item));
        return true;
    }


    public hasPairInListWithSum: (arg0: number[], arg1: number) => boolean = (list: number[] = [], sum: number) => {
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

export default Algorithm;

