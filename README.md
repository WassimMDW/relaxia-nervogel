# Relaxia NervoGel advertorial

## Meta Pixel

Create a `.env.local` file in the project root and set the Pixel ID from Meta Events Manager:

```env
VITE_META_PIXEL_ID=YOUR_PIXEL_ID
```

For Vercel, add the same `VITE_META_PIXEL_ID` value under Project Settings > Environment Variables.

For server-side Conversion API tracking, also add these environment variables in Vercel:

```env
META_PIXEL_ID=1545764610552524
META_CAPI_ACCESS_TOKEN=YOUR_SERVER_ACCESS_TOKEN
```

`META_CAPI_ACCESS_TOKEN` is server-only and must never be prefixed with `VITE_` or added to browser source files. The API route at `/api/meta-events` sends `PageView`, `ViewContent`, and `InitiateCheckout` events to Meta and uses matching event IDs to deduplicate browser and server events.

The integration tracks `PageView`, a one-time `ViewContent` event when the product section becomes visible, and `InitiateCheckout` when the final CTA is clicked. The Pixel remains inactive when the browser variable is not configured.

## React + TypeScript + Vite

This project uses React, TypeScript, and Vite for the Relaxia landing page.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
