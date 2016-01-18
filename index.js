/**
 * Copyright (c) 2015-present, mcharytoniuk
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const globStream = require('glob-stream');
const Promise = require('bluebird');
const RxNode = require('rx-node');

function readableStream(globs, options) {
  return globStream.create(globs, options);
}

function ultraGlob(globs, options) {
  return RxNode.fromReadableStream(readableStream(globs, options))
    .reduce((fileList, file) => fileList.concat(file.path), [])
    .toPromise(Promise);
}

ultraGlob.readableStream = readableStream;

module.exports = ultraGlob;
