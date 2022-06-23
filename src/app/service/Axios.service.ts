import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AxiosService {
    // urlUser = "https://piapple-backend.herokuapp.com/user/all";
    // urlOrders = "http://localhost:3000/orders";
    user = 'https://postgresql-backend.herokuapp.com/user';
    menu = 'https://postgresql-backend.herokuapp.com/menu';
    address = 'https://postgresql-backend.herokuapp.com/address';
    category = 'https://postgresql-backend.herokuapp.com/category';
    restaurant = 'https://postgresql-backend.herokuapp.com/restaurant';

    constructor(private http: HttpClient) { }
    AxiosServiceUser() {
        return this.http.get(this.user);
    }

    AxiosServiceMenu() {
        return this.http.get(this.menu);
    }

    AxiosServiceAddress() {
        return this.http.get(this.address);
    }

    AxiosServiceCategory() {
        return this.http.get(this.category);
    }

    AxiosServiceRestaurant() {
        return this.http.get(this.restaurant);
    }

    // leer () {
    //     return axios.get(this.urlUser).then(response => {
    //         console.log(response)
    //     }).catch(error => {console.log(error)})
    // }

    // getUserData(){
    //     return this.http.get<any>(this.urlUser);
    // }
}

/*
import { Injectable } from '@angular/core';
// import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AxiosService {
    // urlUser = "https://piapple-backend.herokuapp.com/user/all";
    // urlOrders = "http://localhost:3000/orders";
    url = 'https://postgre-backend.herokuapp.com/user';
    constructor(private http: HttpClient) { }
    AxiosService() {
        return this.http.get(this.url);
    }
    // leer () {
    //     return axios.get(this.urlUser).then(response => {
    //         console.log(response)
    //     }).catch(error => {console.log(error)})
    // }

    // getUserData(){
    //     return this.http.get<any>(this.urlUser);
    // }
}

*/