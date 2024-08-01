# gulp-glslify-next

Gulp plugin for [glslify](https://www.npmjs.com/package/glslify)

## Installation

Use the following command to install the plugin

```bash
npm install --save-dev https://github.com/rsharpe23/gulp-glslify-next.git
```

## Usage

For the current folder structure

- **project**
    - **shaders**
        - **@default**
            - fragment.glsl
            - vertex.glsl
        - my-func.glsl
        - **glsl-noise**

```javascript
const { src, dest } = require('gulp');
const glslify = require('gulp-glslify-next');
const rename = require('gulp-rename');

exports.default = () => {
  return src('./shaders/@*/*.glsl')
    .pipe(glslify({ basedir: './shaders' }))
    .pipe(rename({ extname: '.build.glsl' }))
    .pipe(dest('./shaders'));
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
