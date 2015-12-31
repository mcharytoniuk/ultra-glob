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

function ultraGlob(globs, options) {
  return RxNode.fromReadableStream(globStream.create(globs, options))
    .reduce((fileList, file) => fileList.concat(file.path), [])
    .toPromise(Promise);
}

module.exports = ultraGlob;
