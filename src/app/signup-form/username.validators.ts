import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
 static cannotContainSpace(control:AbstractControl):ValidationErrors|null {
    if((control.value as string).indexOf(' ') >=0)
      return{isSpace:true}
    return null
  }

  static ShouldBeUnique(control:AbstractControl):Promise<ValidationErrors|null>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'takhtai')
        resolve({ShouldBeUnique:true})
      else resolve (null)
      },2000)
    })


  }

}
