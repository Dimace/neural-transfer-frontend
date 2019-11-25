import {Component} from '@angular/core';
import {UploadService} from './services/upload.service';
import {FormBuilder} from '@angular/forms';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'neural-nets-fe';
    imageName = '';
    imageIsLoaded = true;

    form = this.formBuilder.group({
        originalImage: [null],
        styleImage: [null]
    });
    formFiles = {
        'originalImage': null,
        'styleImage': null
    };
    urlsToShow = {
        'originalImage': null,
        'styleImage': null
    };

    // uploadResponse = { status: '', message: '', filePath: '' };
    error = '';

    constructor(private formBuilder: FormBuilder, private uploadService: UploadService) {
    }

    onFileChange(event, inputName: string) {
        console.log('on file change event', event.target.files[0]);
        console.log('on file change input name', inputName);
        if (event.target.files.length > 0) {
            this.formFiles[inputName] = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (event.target.files[0]) {
                    this.urlsToShow[inputName] = reader.result;
                }
            };
            reader.onabort = () => {
                console.log('ABORT');
            };
            reader.readAsDataURL(event.target.files[0]);
        } else {
            this.urlsToShow[inputName] = null;
        }
    }

    onSubmit() {
        const formData = new FormData();
        this.imageIsLoaded = false;
        formData.append('originalImage', this.formFiles['originalImage']);
        formData.append('styleImage', this.formFiles['styleImage']);

        this.uploadService.upload(formData, 'style-transfer').subscribe(
            (res) => {
                console.log('SUCCESS res', res);
                // this.uploadResponse = res;
                this.imageName = res['imageName'];
                // this.imageIsLoaded = true;
            },
            (err) => {
                this.error = err;
                this.imageName = '';
                this.imageIsLoaded = true;
            },
            () => {
                this.imageIsLoaded = true;
                console.log('complete');
            }
        );
    }
}
