import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  url: string = '';
  images: string[];

  constructor(private storage: Storage) {
    this.images = [];
  }
  

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `img/` + name);

    console.log(imgRef);

    uploadBytes(imgRef, file)
      .then(async (response) => {
        this.url = null;
        this.url = await getDownloadURL(response.ref);
      })
      .catch((error) => console.log(error));
  }
}
