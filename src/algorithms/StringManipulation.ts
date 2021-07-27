class StringManipulation {


    reverse(str: string): string{
        if(!str || typeof str != 'string' || str.length < 2 ) return str;
        
        const backwards = [];
        const totalItems = str.length - 1;
        for(let i = totalItems; i >= 0; i--){
          backwards.push(str[i]);
        }
        return backwards.join('');
      }
      
      reverse2(str: string): string{
        //check for valid input
        return str.split('').reverse().join('');
      }
      
      reverse3 = (str:string):string => [...str].reverse().join('');
  }