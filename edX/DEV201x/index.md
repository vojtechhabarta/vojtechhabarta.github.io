---
title: Famous Painters (edX DEV201x)
layout: default
---

# Famous Painters

Application is deployed to [http://www.habarta.cz/edX/DEV201x/app/painters.html](http://www.habarta.cz/edX/DEV201x/app/painters.html) 
Application is written using TypeScript, Bootstrap and jQuery.
TypeScript code uses internal modules and is organized this way:

### scripts/data.ts

``` ts
module Data {
    export function loadData(url: string): JQueryPromise<Painter[]> {}
    export class Painter {}
    export class Painting {}
}
```

### scripts/rendering.ts

``` ts
module Rendering {
    export class Renderer {
        renderPainterSelect(painters: Data.Painter[]) {}
        renderPainter(painter: Data.Painter) {}
    }
}
```

### scripts/app.ts

``` ts
window.onload = () => {}
```

## Example screenshots

### Michelangelo
![Michelangelo](Michelangelo.png)

### Josef Lada
![Josef Lada](JosefLada.png)
