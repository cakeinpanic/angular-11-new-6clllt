import { Component } from '@angular/core';
import { HelloElement } from './hello-element';

console.assert(HelloElement !== undefined);

@Component({
  selector: 'my-app',
  template: `
    <p>⬇️This is a LitElement inside an Angular component!</p>
    <hello-world value="5"></hello-world>
  `,
})
export class AppComponent {
  name = 'Angular and LitElement';
}
