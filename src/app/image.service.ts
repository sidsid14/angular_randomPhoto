import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ImageResponse {
  description: string;
  created_at: string;
  urls: {
    regular: string;
  };
  user: {
    profile_image: {
      small: string;
    };
    first_name: string;
    instagram_username: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private accessKey = environment.unsplash_key;

  constructor(private http: HttpClient) {}

  getRandomPhoto() {
    return this.http.get<ImageResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`,
        },
      }
    );
  }
}
