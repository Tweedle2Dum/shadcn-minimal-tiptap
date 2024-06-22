# Minimal Tiptap Editor Component

This is a Minimal Tiptap Editor component built for [Shadcn](https://shadcn.com). It provides a simple and clean editor for users to write and format text.

[View the demo](https://shadcn-minimal-tiptap.vercel.app)

## Installation

Before you can use the Minimal Tiptap Editor Component, you will need to install the following packages:

```bash
npm i @tiptap/extension-image @tiptap/extension-link @tiptap/pm @tiptap/react @tiptap/starter-kit
```

The Minimal Tiptap Editor Component is depends on the following components from shadcn:

- [Button](https://ui.shadcn.com/docs/components/button)
- [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu)
- [Input](https://ui.shadcn.com/docs/components/input)
- [Label](https://ui.shadcn.com/docs/components/label)
- [Popover](https://ui.shadcn.com/docs/components/popover)
- [Separator](https://ui.shadcn.com/docs/components/separator)
- [Switch](https://ui.shadcn.com/docs/components/switch)
- [Toggle](https://ui.shadcn.com/docs/components/toggle)
- [Tooltip](https://ui.shadcn.com/docs/components/tooltip)

The Minimal Tiptap Editor uses [icons from Radix UI](https://icons.radix-ui.com) so you will need to install that or update the component to use a different library.

```bash
npm install @radix-ui/react-icons
```

Next, copy and paste the code from the `src` directory for `minimal-tiptap` into your project and customize to your needs. The code is yours.

## Props

The Minimal Tiptap Editor Component accepts the following props:

- `value` is the initial value of the editor.
- `outputValue` is the format of the output value. It can be 'html', 'json', or 'text'. Default is 'html'.
- `disabled` is a boolean to disable the editor.
- `contentClass` is a string to add a class to the editor content.
- `onValueChange` is a function that accepts a string and updates the value of the editor.

## Usage

```jsx
import React, { useState } from 'react'

import { MinimalTiptapEditor } from './minimal-tiptap'

export const App = () => {
  const [value, setValue] = useState('')

  return (
    <MinimalTiptapEditor
      value={value}
      onValueChange={setValue}
      outputValue="json"
      disabled={false}
      contentClass="max-w-3xl mx-auto mt-8"
    />
  )
}
```
