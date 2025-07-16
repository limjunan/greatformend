# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Solution Overview: A Technical Deep Dive

Here's an overview of the key architectural and implementation decisions made.

- **Component-Based Architecture:** The application adheres to a component-based architecture, leveraging React components such as `FormBuilder`, `PreviewForm`, `FieldEditor`, and `FieldPreview`.

- **State Management:** Core application state, including `formConfig` (the form's structural definition) and UI flags like `showPreview` and `showSuccess`, is managed using React's `useState` hook. `useCallback` is employed to memoize functions, optimizing performance by preventing unnecessary re-renders of child components.

- **Uncontrolled Components for Form Submission:** For form data collection in `PreviewForm`, an uncontrolled component approach was chosen. Instead of managing input values via `useState` and `onChange` for every keystroke, `useRef` is utilized to access the DOM form element directly upon submission. This design decision centralizes data extraction logic within `PreviewForm`'s `handleSubmit` function, simplifying the individual `FieldPreview` components by allowing them to manage their own internal state until submission. Data is then extracted using `HTMLFormElement.elements` and `querySelectorAll` for robust collection across various input types, including checkboxes (i dont like checkboxes).

- **Dynamic Form Rendering:** The `PreviewForm` dynamically renders form fields based on the `formConfig` definition. This involves iterating through `formElements` and conditionally rendering the appropriate `FieldPreview` component (e.g., `TextFieldPreview`, `CheckboxFieldPreview`) based on the `element.type`. This approach ensures flexibility and extensibility for different form input types.

- **Single-Page Application (SPA) Architecture:** The entire application operates as a Single-Page Application. Navigation and view changes (e.g., switching between form builder and preview) are handled client-side through React component rendering and state updates.

- **Styling:** Styling is managed using Tailwind CSS, adopting a utility-first approach. I have also followed GFE's fonts and brand colours :-)

## Component Structure

The application is organized into a clear component hierarchy to manage complexity and promote reusability. Key directories and their primary components include:

- **`src/pages/`**: Contains top-level page components that define the main views of the application.
  - `MainPage.tsx`: The primary entry point for the application's UI, orchestrating the form builder, preview, and submission success states.

- **`src/components/`**: Houses reusable UI components, further categorized by their function.
  - **`builder/`**: Components related to the form building interface.
    - `FormBuilder.tsx`: The main component for designing and configuring the form.
    - `EditForm.tsx`: Manages the overall editing experience, including adding and reordering form elements.
    - `AddFormElements.tsx`: Provides controls for adding new types of form fields.
    - `FormElement.tsx`: A wrapper component for individual form elements in the editor, providing common actions like reordering and removal.
  - **`editors/`**: Components for editing the properties of specific form field types.
    - `FieldEditor.tsx`: A generic wrapper for all field-specific editors.
    - `TextFieldEditor.tsx`, `ParagraphFieldEditor.tsx`, `CheckboxFieldEditor.tsx`, `SelectFieldEditor.tsx`: Specific editors for each field type.
  - **`preview/`**: Components for displaying the live preview of the form.
    - `PreviewForm.tsx`: Renders the complete form based on the current configuration, allowing user interaction.
    - `TextFieldPreview.tsx`, `ParagraphFieldPreview.tsx`, `CheckboxFieldPreview.tsx`, `SelectFieldPreview.tsx`: Components that render the display-only version of each field type.
  - **`ui/`**: General-purpose UI components.
    - `Header.tsx`: The application's navigation and action bar.
  - `SubmitSuccess.tsx`: Displays a success message and navigation options after form submission.

- **`src/types.ts`**: Contains TypeScript type definitions and interfaces used across the application, ensuring type safety and clear data structures.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
