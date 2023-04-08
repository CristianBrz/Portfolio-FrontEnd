import { Injectable } from '@angular/core';
import {
  Storage,
  list,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  url: string = '';

  constructor(private storage: Storage) {}

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    // console.log(file);

    const imgRef = ref(this.storage, `img/` + name);

    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((err) => console.log(err));
  }
  getImages() {
    const imagesRef = ref(this.storage, 'img');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          // console.log("url: " + this.url);
        }
      })
      .catch((err) => console.log(err));
  }
}
