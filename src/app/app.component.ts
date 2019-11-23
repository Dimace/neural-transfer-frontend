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

    uploadResponse = { status: '', message: '', filePath: '' };
    error = '';

    constructor(private formBuilder: FormBuilder, private uploadService: UploadService) {
    }

    onFileChange(event, inputName: string) {
        if (event.target.files.length > 0) {
            this.formFiles[inputName] = event.target.files[0];
            // this.form.get(inputName).setValue(file);
            // this.formFiles[inputName] = file;
        }
    }

    onSubmit() {
        const formData = new FormData();
        this.imageIsLoaded = false;
        formData.append('originalImage', this.formFiles['originalImage']);
        formData.append('styleImage', this.formFiles['styleImage']);

        this.uploadService.upload(formData, 'style-transfer').pipe(take(1)).subscribe(
            (res) => {
                console.log('SUCCESS');
                this.uploadResponse = res;
                this.imageName = res['imageName'];
                this.imageIsLoaded = true;
            },
            (err) => {
                this.error = err;
                this.imageName = '';
                this.imageIsLoaded = true;
            }
        );
    }
}
