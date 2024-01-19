import { MAX_FILE_SIZE_KB } from "../../constants";

export const encodedImageSizeCheck = (encodedImageURL: string): boolean => {

    const stringLength = encodedImageURL.length - 'data:image/png;base64,'.length;

    const sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
    const sizeInKb = sizeInBytes/1024;
    console.log(sizeInKb)
    console.log(MAX_FILE_SIZE_KB)
    return sizeInKb < MAX_FILE_SIZE_KB
}