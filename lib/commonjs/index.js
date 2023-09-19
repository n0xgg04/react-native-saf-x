"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFile = copyFile;
exports.createDocument = createDocument;
exports.createFile = createFile;
exports.default = void 0;
exports.exists = exists;
exports.getPersistedUriPermissions = getPersistedUriPermissions;
exports.hasPermission = hasPermission;
exports.listFiles = listFiles;
exports.mkdir = mkdir;
exports.moveFile = moveFile;
exports.openDocument = openDocument;
exports.openDocumentTree = openDocumentTree;
exports.readFile = readFile;
exports.releasePersistableUriPermission = releasePersistableUriPermission;
exports.rename = rename;
exports.stat = stat;
exports.unlink = unlink;
exports.writeFile = writeFile;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-saf-x' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
let SafX;
if (_reactNative.Platform.OS === 'android') {
  SafX = _reactNative.NativeModules.SafX ? _reactNative.NativeModules.SafX : new Proxy({}, {
    get() {
      throw new Error(LINKING_ERROR);
    }
  });
} else {
  // @ts-ignore
  SafX = {};
}
/**
 * Open the Document Picker to select a folder. Read/Write Permission will be granted to the selected folder.
 * Returns an object of type `DocumentFileDetail` or `null` if user did not select a folder.
 */
function openDocumentTree(persist) {
  return SafX.openDocumentTree(persist);
}
/**
 * Open the Document Picker to select a file.
 * DocumentFileDetail is always an array.
 * @returns `DocumentFileDetail[]` or `null` if user did not select a file.
 */
function openDocument(options) {
  const {
    persist = false,
    multiple = false
  } = options;
  return SafX.openDocument(persist, multiple);
}

/**
 * Open the Document Picker to save a file.
 * Returns an object of type `DocumentFileDetail` or `null` if user did not select a file.
 */
function createDocument(data, options) {
  if (!options) options = {};
  const {
    encoding,
    initialName,
    mimeType
  } = options;
  return SafX.createDocument(data, encoding, initialName, mimeType);
}

/** Check if you have permission to access the uri. */
function hasPermission(uriString) {
  return SafX.hasPermission(uriString);
}

/** Check if there's a document located at the given uri. */
function exists(uriString) {
  return SafX.exists(uriString);
}

/** Read contents of the given uri. uri must point to a file. */
function readFile(uriString, options) {
  if (!options) options = {};
  const {
    encoding
  } = options;
  return SafX.readFile(uriString, encoding);
}

/**
 * Writes the given data to the file at given uri.
 * Tries to create the file if does not already exist before writing to it.
 * Resolves with given uriString if successful.
 */
function writeFile(uriString, data, options) {
  if (!options) options = {};
  const {
    encoding,
    append,
    mimeType
  } = options;
  return SafX.writeFile(uriString, data, encoding, mimeType, !!append);
}

/**
 * Creates an empty file at given uri.
 * Rejects if a file or directory exist at given uri.
 */
function createFile(uriString, options) {
  if (!options) options = {};
  const {
    mimeType
  } = options;
  return SafX.createFile(uriString, mimeType);
}

/**
 * Removes the file or directory at given uri.
 * Resolves with `true` if delete is successful, throws otherwise.
 */
function unlink(uriString) {
  return SafX.unlink(uriString);
}

/**
 * Create a directory at given uri.
 * Automatically creates folders in path if needed.
 * You can use it to create nested directories easily.
 * Rejects if it fails.
 */
function mkdir(uriString) {
  return SafX.mkdir(uriString);
}

/**
 * Renames the document at given uri.
 * uri can be file or folder.
 * Resolves with `true` if successful and `false` otherwise.
 */
function rename(uriString, newName) {
  return SafX.rename(uriString, newName);
}

/** Returns a list of all the persisted uri permissions. */
function getPersistedUriPermissions() {
  return SafX.getPersistedUriPermissions();
}

/** Remove a uri from persisted uri permissions list. */
function releasePersistableUriPermission(uriString) {
  return SafX.releasePersistableUriPermission(uriString);
}

/** List all files and folders in a directory uri. */
function listFiles(uriString) {
  return SafX.listFiles(uriString);
}

/** Get details for a file/directory at given uri. */
function stat(uriString) {
  return SafX.stat(uriString);
}
/**
 * Copy file from source uri to destination uri.
 * promise Rejects if destination already exists and `replaceIfDestinationExists` option is not set to true.
 * Does not support moving directories.
 */
function copyFile(srcUri, destUri, options) {
  if (!options) options = {};
  const {
    replaceIfDestinationExists = false
  } = options;
  return SafX.transferFile(srcUri, destUri, replaceIfDestinationExists, true);
}

/**
 * Move file from source uri to destination uri.
 * promise Rejects if destination already exists and `replaceIfDestinationExists` option is not set to true.
 * Does not support moving directories.
 */
function moveFile(srcUri, destUri, options) {
  if (!options) options = {};
  const {
    replaceIfDestinationExists = false
  } = options;
  return SafX.transferFile(srcUri, destUri, replaceIfDestinationExists, false);
}
var _default = {
  openDocumentTree,
  openDocument,
  createDocument,
  hasPermission,
  exists,
  readFile,
  writeFile,
  createFile,
  unlink,
  mkdir,
  rename,
  getPersistedUriPermissions,
  releasePersistableUriPermission,
  listFiles,
  stat,
  copyFile,
  moveFile
};
exports.default = _default;
//# sourceMappingURL=index.js.map