const Stream = require('stream');
const glsl = require('glslify');

class _Stream extends Stream.Transform {
  constructor(opts) {
    super({ objectMode: true });
    this.opts = opts;
  }

  _transform(chunk, encoding, cb) {
    const file = chunk.clone({ contents: false });
    const src = glsl(chunk.contents.toString(), this.opts);
    file.contents = new Buffer.from(src);
    cb(null, file);
  }
}

module.exports = opts => new _Stream(opts);