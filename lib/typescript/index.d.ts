export declare type Encoding = 'utf8' | 'base64' | 'ascii';
export declare type DocumentFileDetail = {
    uri: string;
    name: string;
    type: 'directory' | 'file';
    lastModified: number;
    mime: string;
    size: number;
};
export declare type FileOperationOptions = {
    /** Defaults to `'utf8'` */
    encoding?: Encoding;
    /** Append data to the file. If not set file content will be overwritten. */
    append?: boolean;
    /** mime type of the file being saved. Defaults to '\*\/\*' */
    mimeType?: string;
};
export declare type CreateDocumentOptions = FileOperationOptions & {
    /** initial display name when opening file picker */
    initialName?: string;
};
/**
 * Open the Document Picker to select a folder. Read/Write Permission will be granted to the selected folder.
 * Returns an object of type `DocumentFileDetail` or `null` if user did not select a folder.
 */
export declare function openDocumentTree(persist: boolean, defaultUri : string): Promise<DocumentFileDetail | null>;
export declare type OpenDocumentOptions = {
    /** should the permission of returned document(s) be persisted ? */
    persist?: boolean;
    /** should the file picker allow multiple documents ? */
    multiple?: boolean;
};
/**
 * Open the Document Picker to select a file.
 * DocumentFileDetail is always an array.
 * @returns `DocumentFileDetail[]` or `null` if user did not select a file.
 */
export declare function openDocument(options: OpenDocumentOptions): Promise<DocumentFileDetail[] | null>;
/**
 * Open the Document Picker to save a file.
 * Returns an object of type `DocumentFileDetail` or `null` if user did not select a file.
 */
export declare function createDocument(data: string, options?: CreateDocumentOptions): Promise<DocumentFileDetail | null>;
/** Check if you have permission to access the uri. */
export declare function hasPermission(uriString: string): Promise<boolean>;
/** Check if there's a document located at the given uri. */
export declare function exists(uriString: string): Promise<boolean>;
/** Read contents of the given uri. uri must point to a file. */
export declare function readFile(uriString: string, options?: Pick<FileOperationOptions, 'encoding'>): Promise<string>;
/**
 * Writes the given data to the file at given uri.
 * Tries to create the file if does not already exist before writing to it.
 * Resolves with given uriString if successful.
 */
export declare function writeFile(uriString: string, data: string, options?: FileOperationOptions): Promise<void>;
/**
 * Creates an empty file at given uri.
 * Rejects if a file or directory exist at given uri.
 */
export declare function createFile(uriString: string, options?: Pick<FileOperationOptions, 'mimeType'>): Promise<DocumentFileDetail>;
/**
 * Removes the file or directory at given uri.
 * Resolves with `true` if delete is successful, throws otherwise.
 */
export declare function unlink(uriString: string): Promise<boolean>;
/**
 * Create a directory at given uri.
 * Automatically creates folders in path if needed.
 * You can use it to create nested directories easily.
 * Rejects if it fails.
 */
export declare function mkdir(uriString: string): Promise<DocumentFileDetail>;
/**
 * Renames the document at given uri.
 * uri can be file or folder.
 * Resolves with `true` if successful and `false` otherwise.
 */
export declare function rename(uriString: string, newName: string): Promise<DocumentFileDetail>;
/** Returns a list of all the persisted uri permissions. */
export declare function getPersistedUriPermissions(): Promise<string[]>;
/** Remove a uri from persisted uri permissions list. */
export declare function releasePersistableUriPermission(uriString: string): Promise<void>;
/** List all files and folders in a directory uri. */
export declare function listFiles(uriString: string): Promise<DocumentFileDetail[]>;
export declare function unzip(uriString: string, destUriString: string): Promise<void>;
/** Get details for a file/directory at given uri. */
export declare function stat(uriString: string): Promise<DocumentFileDetail>;
declare type FileTransferOptions = {
    replaceIfDestinationExists?: boolean;
};
/**
 * Copy file from source uri to destination uri.
 * promise Rejects if destination already exists and `replaceIfDestinationExists` option is not set to true.
 * Does not support moving directories.
 */
export declare function copyFile(srcUri: string, destUri: string, options?: FileTransferOptions): Promise<DocumentFileDetail | null>;
/**
 * Move file from source uri to destination uri.
 * promise Rejects if destination already exists and `replaceIfDestinationExists` option is not set to true.
 * Does not support moving directories.
 */
export declare function moveFile(srcUri: string, destUri: string, options?: FileTransferOptions): Promise<DocumentFileDetail | null>;
declare const _default: {
    openDocumentTree: typeof openDocumentTree;
    openDocument: typeof openDocument;
    createDocument: typeof createDocument;
    hasPermission: typeof hasPermission;
    exists: typeof exists;
    readFile: typeof readFile;
    writeFile: typeof writeFile;
    createFile: typeof createFile;
    unlink: typeof unlink;
    mkdir: typeof mkdir;
    rename: typeof rename;
    getPersistedUriPermissions: typeof getPersistedUriPermissions;
    releasePersistableUriPermission: typeof releasePersistableUriPermission;
    listFiles: typeof listFiles;
    stat: typeof stat;
    copyFile: typeof copyFile;
    moveFile: typeof moveFile;
};
export default _default;
//# sourceMappingURL=index.d.ts.map
