# typescript-template

Template for general **TypeScript** development.

The template contains examples of best practices and standards derived from the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).

## Project Structure

Summary of the project _directories_.

| Directory  | Description        |
| ---------- | ------------------ |
| **_src/_** | Lint the codebase. |

Summary of the project _files_.

| File        | Description        |
| ----------- | ------------------ |
| **lint.sh** | Lint the codebase. |

## Tasks

Summary of the available _NPM Tasks_ and their usage. Details available within each script.

| Task        | Description        |
| ----------- | ------------------ |
| **lint.sh** | Lint the codebase. |

## Usage

Summary of how to add onto the project.

1. Create a new TypeScript file.

```sh
touch src/new_script.ts
```

2. Add new script to the webpack configuration (webpack.config)

```sh
entry: {
  "main": "./src/index.ts",
  "new_script": "./src/new_script.ts",
}
```

3. Import new script into the index.html file.

```sh
entry: {
  "main": "./src/index.ts",
  "new_script": "./src/new_script.ts",
}
```

<script src="main.js"></script>

    <script src="simple.js"></script>
