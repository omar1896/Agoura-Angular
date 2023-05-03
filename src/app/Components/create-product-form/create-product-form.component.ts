import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators ,FormBuilder, FormArray} from '@angular/forms';
import { CreateBidService } from 'src/app/Service/create-bid.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent {
  files!:FileList;
  validationForm:FormGroup;
  step:number;
  public constructor(private fb:FormBuilder,private myService:CreateBidService){
    this.step=1;
    this.validationForm = fb.group({
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      address: fb.group({
        country:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        city:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        street:new FormControl(null,[Validators.required, Validators.minLength(5)]),
        zipcode:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]{5,9}$")]),
      }),
      features: fb.group({
        bedRooms:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        baths:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        area:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        kitchen:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
        guests:new FormControl(null,[Validators.required, Validators.min(1),Validators.pattern("^[0-9]+$")]),
      }),
      aboutPlace: new FormControl(null,[Validators.required, Validators.minLength(100)]),
      startBid: new FormControl(null,[Validators.required,Validators.min(1),Validators.pattern("^[0-9]+$")]),
      duration:new FormControl(null,[Validators.required,Validators.min(7),Validators.max(30),Validators.pattern("^[0-9]+$")]),
      agreeToTerms:new FormControl(null,[Validators.required]),
      images:new FormControl([],[Validators.required,Validators.min(1),])
    });
  }
  get title () {
    return this.validationForm.controls["title"];
  }
  get aboutPlace () {
    return this.validationForm.controls["aboutPlace"];
  }
  get duration () {
    return this.validationForm.controls["duration"];
  }
  get startBid () {
    return this.validationForm.controls["startBid"];
  }
  get agreeToTerms () {
    return this.validationForm.controls["agreeToTerms"];
  }
  get country () {
    return this.validationForm.controls["address"].get("country");
  }
  get city () {
    return this.validationForm.controls["address"].get("city");
  }
  get street () {
    return this.validationForm.controls["address"].get("street");
  }
  get zipcode () {
    return this.validationForm.controls["address"].get("zipcode");
  }
  get bedRooms () {
    return this.validationForm.controls["features"].get("bedRooms");
  }
  get baths () {
    return this.validationForm.controls["features"].get("baths");
  }
  get area () {
    return this.validationForm.controls["features"].get("area");
  }
  get kitchen () {
    return this.validationForm.controls["features"].get("kitchen");
  }
  get guests () {
    return this.validationForm.controls["features"].get("guests");
  }
  get images () {
    return this.validationForm.controls["images"] as FormArray;
  }

  onFileSelected(event: any) {
    this.files = event.target.files;
  }

  send(){


    if(this.validationForm.valid){
      let formData=new FormData()
      formData.append("data",JSON.stringify(this.validationForm.value))
      if(this.files){
        for(let i=0;i<this.files.length;i++){
          formData.append(`photo`,this.files[i])
        }
      }
      let bid=this.myService.post(formData);
      console.log("created success",bid)
    }
  }

  get firstPageValid(){
    return this.title.valid && this.country?.valid && this.city?.valid && this.street?.valid && this.zipcode?.valid
  }

  next() {
    console.log(`step ${this.step} form ${this.validationForm.valid}`)
    this.step++;
    }
  prev() {
    console.log(`step ${this.step} form ${this.validationForm.valid}`)
    this.step--;
    }
}