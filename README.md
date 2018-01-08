# ngx-collapsible

Independent collapsible / accordion module for Angular (2 & above). Without dependency on either Bootstrap or jQuery.

## Install

First you need to install the module with [npm](https://www.npmjs.com/):

```sh
npm install ngx-collapsible --save
```

Or with [yarn](https://yarnpkg.com/):

```sh
yarn add ngx-collapsible
```

## How to use

### 1. Import the `CollapsibleModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapsibleModule } from 'ngx-collapsible';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CollapsibleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Use the directive in your component:

```html
<div ngxCollapsible [selected]="selected" accordion="true">

  <h2 collapsible-header="install">Header 1</h2>
  <p collapsible-content="install">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

  <h2 collapsible-header="use">Header 2</h2>
  <p collapsible-content="use">Incidunt pariatur consequuntur fugit laborum facilis maxime fugiat dolores officiis impedit.</p>

  <h2 collapsible-header="changelog">Header 3</h2>
  <p collapsible-content="changelog">non dolorum voluptatem maiores vel dolorem repellendus id nemo? Commodi, nam!</p>

</div>
```