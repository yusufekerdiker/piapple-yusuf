import { Component, OnInit } from '@angular/core';
import { AxiosService } from "../service/Axios.service";

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  userNameList:any;
  menuList:any;
  addressList:any;
  categoryList:any;
  restaurantList:any;

  constructor(private axiosService: AxiosService) { 
    

    axiosService.AxiosServiceUser().subscribe((data)=>{
      this.userNameList=data;
      console.log(this.userNameList);
    })

    axiosService.AxiosServiceMenu().subscribe((data)=>{
      this.menuList=data;
      console.log(this.addressList);
    })

    axiosService.AxiosServiceAddress().subscribe((data)=>{
      this.addressList=data;
      console.log(this.addressList);
    })

    axiosService.AxiosServiceCategory().subscribe((data)=>{
      this.categoryList=data;
      console.log(this.categoryList);
    })

    axiosService.AxiosServiceRestaurant().subscribe((data)=>{
      this.restaurantList=data;
      console.log(this.restaurantList);
    })

  }

  ngOnInit(): void {
    // this.axiosService.leer();
    // this.axiosService.getUserData().subscribe(data => {
    //   console.log(data);

    //   const json = JSON.stringify(data)


    //   let app = document.querySelector('.app') as HTMLInputElement;


    //   var newArr = data.map(function(val:string){
    //     app.innerHTML = `
    //     <p>${val}</p>
    //   `;
    //   })
    //   newArr()

      // formJson() {
      //   id: json.id
      //   name: json.name
      //   surname: json.
      // }

      // this.json.map(item => {

      //   app.innerHTML = `
      //   <p>${item}</p>
      // `;
      // })

    // })
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
