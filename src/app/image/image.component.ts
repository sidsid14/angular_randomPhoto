import { Component, OnInit } from '@angular/core';
import { ImageResponse, ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  data!: ImageResponse;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto() {
    this.imageService.getRandomPhoto().subscribe((data: ImageResponse) => {
      console.log(data);
      this.data = data;
    });
  }
}
