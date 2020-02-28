import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public base_url: string = "http://localhost:3000/cart-items/"; 



  constructor(private http: HttpClient) { }

  // addItem(item) {
  //   this.http.post(this.base_url, item)
  //   }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.base_url, httpOptions)
  }

  getProductById(id): Observable<any[]> {
    return this.http.get<any[]>(this.base_url + id, httpOptions)
    .pipe(
      catchError(this.handleError)
      )
     }

  postProduct(n1,n2,n3,n4): Observable<any[]> {
    const item = {
      "id": n1,
      "price": n2,
      "product": n3,
      "quantity": n4
    }
    console.log(item)
    return this.http.post<any[]>(this.base_url,item, httpOptions)
  }

  delProductById(id): Observable<any[]> {
    return this.http.delete<any[]>(this.base_url + id, httpOptions)
   }

   updateProductById(price,id): Observable<any[]> {
     const item = {
       "price": price
     }
    return this.http.put<any[]>(this.base_url + id, item, httpOptions)
   }

   handleError(error: HttpErrorResponse){
    // console.log("lalalalalalalala");
    return throwError(error.error.text);
    }
   
  }
