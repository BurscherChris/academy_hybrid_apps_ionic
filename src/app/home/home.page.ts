import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { TestPlugin } from '@academy/test-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public buffer = 0.06;
  public progress = 0;
  imageUrl: string = '';
  pluginResult = '';

  constructor(private alertController: AlertController) {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      if (image.webPath) {
        this.imageUrl = image.webPath;
      }
    } catch (exception) {
      console.error(exception);
    }
  }

  async startDownload() {
    // setInterval(() => {
    //   this.buffer += 0.06;
    //   this.progress += 0.06;

    //   // Reset the progress bar when it reaches 100%
    //   // to continuously show the demo
    //   if (this.progress > 1) {
    //     setTimeout(() => {
    //       this.buffer = 0.06;
    //       this.progress = 0;
    //     }, 1000);
    //   }
    // }, 1000);

    const result = await TestPlugin.echo({
      value: 'Hello',
    });

    alert(result.value);
  }
}
