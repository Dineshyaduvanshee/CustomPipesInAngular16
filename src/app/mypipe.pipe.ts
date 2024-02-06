// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'mypipe'
// })
// export class MypipePipe implements PipeTransform {

//   transform(value: string, gender: string): string {
//     if (gender.toLowerCase() === 'male') {
//       return 'Mr.' + value;
//     } else {
//       return 'Miss.' + value;
//     }
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender && typeof gender === 'string') {
      const lowerCaseGender = gender.toLowerCase();
      return lowerCaseGender === 'male' ? 'Mr.' + value : 'Miss.' + value;
    } else {
      // Handle the case when gender is undefined or not a string
      return value; // Or any other default behavior you want
    }
  }

}

