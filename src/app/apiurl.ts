import { environment } from '../environments/environment';

let apiurl: string;

if (environment.production) {
  apiurl = 'https://ellenstyrelius.net/recipesapi/api';
} else {
  apiurl = 'http://recipes.test/api';
}

export default apiurl;