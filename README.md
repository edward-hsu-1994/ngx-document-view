# ngx-document-view

Simple document viewer.

## Install

```bash
npm install ngx-document-view
```

## Getting Started

app.module.ts

```typescript
// import module
import { DocumentViewModule } from 'ngx-document-view';

@NgModule({
  declarations: [AppComponent],
  imports: [DocumentViewModule], // import
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

app.component.html

```html
<ngx-document-view style="height: 45vh; display: block;" src="http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"></ngx-document-view>
```

### Result

![Imgur](https://i.imgur.com/nntX61Y.gif)
