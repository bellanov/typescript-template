# typescript-template

Template for general **TypeScript** development.

The template contains examples of best practices and standards derived from the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).

## Project Structure

Summary of the project _directories_.

| Directory     | Description                                              |
| ------------- | -------------------------------------------------------- |
| **_src/_**    | Contains source code, written in _TypeScript_.           |
| **_public/_** | Contains compiled _TypeScript_, written in _JavaScript_. |

Summary of the project _files_.

| File        | Description        |
| ----------- | ------------------ |
| **lint.sh** | Lint the codebase. |

## Tasks

Summary of the available _NPM Tasks_ and their usage. Details available within each script.

| Task            | Description                             |
| --------------- | --------------------------------------- |
| **format**      | _Lint_ / _format_ the codebase.         |
| **build**       | Execute a _production_ build.           |
| **check-types** | Compile _TypeScript_ into _JavaScript_. |
| **dev**         | Execute a _development_ build.          |
| **start**       | Start the development server.           |
| **test**        | Execute _unit tests_.                   |

## Usage

Summary of how to add onto the project.

1. Create a new TypeScript file.

```sh
touch src/new_script.ts
```

2. Add new **entry** for the script to the _webpack configuration (webpack.config.js)_ so its contents are compiled as part of our **bundle**.

```sh
entry: {
  "main": "./src/index.ts",
  "new_script": "./src/new_script.ts",
}
```

3. Import compiled _JavaScript_ file into the **index.html** file.

```javascript
<script src="main.js"></script>
<script src="new_script.js"></script>
```
