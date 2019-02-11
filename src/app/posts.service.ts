import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get('/api/posts').pipe(map((res) => res));
  }
}
