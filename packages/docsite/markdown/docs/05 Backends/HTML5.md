---
path: '/docs/backends/html5'
title: 'HTML5 Backend'
---

_New to React DnD? [Read the overview](/docs/overview) before jumping into the docs._

# HTML5

This is the primary backend supported by React-DnD. It uses [the HTML5 drag and drop API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_and_drop) under the hood and hides [its quirks](http://quirksmode.org/blog/archives/2009/09/the_html5_drag.html).

### Installation

```
npm install react-dnd-html5-backend
```

### Extras

Aside from the default export, the HTML5 backend module also provides a few extras:

- **`getEmptyImage()`**: a function returning a transparent empty [`Image`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image). Use `connect.dragPreview()` of the [DragSourceConnector](/docs/api/drag-source-connector) to hide the browser-drawn drag preview completely. Handy for drawing the [custom drag layers with `DragLayer`](/docs/api/drag-layer). Note that the custom drag previews don't work in IE.

- **`NativeTypes`**: an enumeration of three constants, `NativeTypes.FILE`, `NativeTypes.URL` and `NativeTypes.TEXT`. You may register the [drop targets](/docs/api/drop-target) for these types to handle the drop of the native files, URLs, or the regular page text.

### Usage

```jsx
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default function MyReactApp() {
  return (
    <DndProvider backend={HTML5Backend}>
      /* your drag-and-drop application */
    </DndProvider>
  )
}
```

When you call `getItem()` on a monitor, the HTML5 backend exposes various data from the event, depending on the drop type:

- `NativeTypes.FILE`:
  - `getItem().files`, with an array of files
  - `getItem().items`, with `event.dataTransfer.items` (which you can use to list files when a directory is dropped)
- `NativeTypes.URL`:
  - `getItem().urls`, an array with the dropped URLs
- `NativeTypes.TEXT`:
  - `getItem().text`, the text that has been dropped
