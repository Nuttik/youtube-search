import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Item } from '../../../core/models/search-item.model';

@Component({
  selector: 'app-card-creation-form',
  templateUrl: './card-creation-form.component.html',
  styleUrls: ['./card-creation-form.component.scss'],
})
export class CardCreationFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
      ],
      description: ['', Validators.maxLength(255)],
      imageLink: [
        '',
        Validators.compose([Validators.required, imageUrlValidator()]),
      ],
      videoLink: [
        '',
        Validators.compose([Validators.required, videoUrlValidator()]),
      ],
      creationDate: [
        '',
        Validators.compose([Validators.required, pastDateValidator()]),
      ],
      tags: this.fb.array([this.createTag()]),
    });
  }

  private createTag(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  addTag(): void {
    if (this.tags.length < 5) {
      this.tags.push(this.createTag());
    }
  }

  removeTag(index: number): void {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const tags = this.form.value.tags.map(
        (item: { name: string }) => item.name
      );
      const customVideo: Item = {
        kind: 'custom-video',
        id: generateRandomId(),
        snippet: {
          publishedAt: new Date(this.form.value.creationDate).toISOString(),
          title: this.form.value.title,
          description: this.form.value.description,
          thumbnails: {
            medium: {
              url: this.form.value.imageLink,
              width: 320,
              height: 180,
            },
          },
          tags: tags,
          videoLink: this.form.value.videoLink,
        },
        statistics: {
          viewCount: '0',
          likeCount: '0',
          favoriteCount: '0',
          commentCount: '0',
        },
      };
      console.log('Form submitted', customVideo);
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.form.reset();

    //убираю из очищенной формы ошибки
    this.form.markAsPristine();
    this.form.markAsUntouched();

    while (this.tags.length > 1) {
      this.tags.removeAt(1);
    }
    if (this.tags.length === 0) {
      this.tags.push(this.createTag());
    }
  }
}

export function pastDateValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: ValidationErrors } | null => {
    const dateValue = control.value;
    const error: ValidationErrors = {
      pastDate: 'The date must be in the past',
    };
    if (dateValue && new Date(dateValue) > new Date()) {
      return error;
    }
    return null;
  };
}

// валидация ссылки на изображение
export function imageUrlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const url = control.value;
    const regex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i;
    const valid = regex.test(url);
    return valid
      ? null
      : { invalidImageUrl: 'The URL is not a valid image link' };
  };
}

// валидация ссылки на видео
export function videoUrlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const url = control.value;
    const regex = /^(https?:\/\/.*\.(?:mp4|mov|avi|wmv|flv|mkv|webm))$/i;
    const valid = regex.test(url);
    return valid
      ? null
      : { invalidVideoUrl: 'The URL is not a valid video link' };
  };
}

//генерируем рандомный id длинной 11 символов
function generateRandomId(length: number = 11): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
