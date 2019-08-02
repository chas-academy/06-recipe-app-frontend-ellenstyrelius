import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedRecipesService {

  constructor(private http: HttpClient) { }

  url = 'http://recipes.test/api/auth/saved-recipes';
  accessToken = localStorage.getItem('accessToken');
  authHeader = `Bearer ${this.accessToken}`;
  contentType = 'application/json';

  getFetchData = (headers) => {
    const fetchData = {
      headers: new HttpHeaders(headers)
    }
    return fetchData;
  }

  saveRecipe(recipeDetails) {
    const { id, label, image } = recipeDetails;
    const requestBody = {
      'id': id,
      'label': label,
      'image': image
    }
    const fetchData = this.getFetchData({'Authorization': this.authHeader,
    'Content-Type': this.contentType});
    const request = this.http.post(this.url, requestBody, fetchData);
    request.subscribe(data =>
      console.log(data)
    );
  }

  getSavedRecipes() {
    const fetchData = this.getFetchData({'Authorization': this.authHeader});
    return this.http.get(this.url, fetchData);
  }

  removeSavedRecipe(recipeId) {
    const fetchData = this.getFetchData({'Authorization': this.authHeader});
    return this.http.delete(`${this.url}/${recipeId}`, fetchData);
  }

  removeAll() {
    const fetchData = this.getFetchData({'Authorization': this.authHeader});
    return this.http.delete(this.url, fetchData);
  }
}
