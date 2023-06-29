import { LitElement, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

console.log('hello-world module');

@customElement('hello-world')
export class HelloElement extends LitElement {
  @state() private _value = '';

  @property()
  set value(v) {
    console.log('setValue');
    this._value = v;
  }

  get value() {
    return this._value;
  }

  firstUpdated() {
    console.log('firstUpdated');
    super.firstUpdated(new Map());
  }

  render() {
    console.log('render');

    return html`
      <h1>Value is ${this.value}</h1>
    
    `;
  }
}
