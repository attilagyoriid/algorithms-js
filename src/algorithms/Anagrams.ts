/** @format */

class Anagrams {
  anagram(string1: string, string2: string): boolean {
    const str1 = this.getAlphabetCharsOnly(string1);
    const str2 = this.getAlphabetCharsOnly(string2);

    let str1CharMap = this.getCharMap(str1);
    let str2CharMap = this.getCharMap(str2);

    if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
      return false;
    }

    for (let key in str1CharMap) {
      if (str1CharMap[key] !== str2CharMap[key]) {
        return false;
      }
    }
    return true;
  }

  private getAlphabetCharsOnly(str: string) {
    return str.replace(/[^\w]/g, "").toLowerCase();
  }

  private getCharMap(str: string) {
    let strCharMap: { [char: string]: number } = {};

    str.split("").forEach((item) => {
      strCharMap[item] = strCharMap[item] + 1 || 1;
    });

    return strCharMap;
  }
}

export default Anagrams;
