/** @format */

class Vowels {
  getVowels(text: string): number {
    return [...text].filter((i) => i.match(/[aeiou]/gi)).join("").length;
  }
}

export default Vowels;
