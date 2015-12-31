/**
 * Copyright (c) 2015-present, mcharytoniuk
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const assert = require('assert');
const gulp = require('gulp');
const ultraGlob = require('./index');

gulp.task('test', function gulpTestTask() {
  return ultraGlob('./*.js').then(function (fileList) {
    assert.strictEqual(2, fileList.length);

    return ultraGlob([
      './*.js',
      '__fixtures__/*.js',
      '{./,./__fixtures/}*.js'
    ]);
  }).then(function (fileList) {
    assert.strictEqual(4, fileList.length);
  });
});
