import { Component, OnInit } from '@angular/core';
import { AxiosService } from "../service/Axios.service";

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {


  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    // this.axiosService.leer();
    this.axiosService.getUserData().subscribe(data => {
      console.log(data);

      const json = JSON.stringify(data)


      let app = document.querySelector('.app') as HTMLInputElement;


      var newArr = data.map(function(val:string){
 
        app.innerHTML = `
        <p>${val}</p>
      `;
      })
      newArr()

      formJson() {
        id: json.id
        name: json.name
        surname: json.
      }

      // this.json.map(item => {

      //   app.innerHTML = `
      //   <p>${item}</p>
      // `;
      // })

 
    })
  }

}
