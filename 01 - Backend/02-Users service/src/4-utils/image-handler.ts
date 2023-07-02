import { UploadedFile } from "express-fileupload";
import { v4 as uuid } from "uuid";
import path from "path";
import fsPromises from "fs/promises";

const imagesFolder = path.join(__dirname, "..", "1-assets", "images");

function getImagePath(imageName: string): string{
    return imagesFolder + "/" + imageName;
}

async function saveFile(image: UploadedFile) : Promise<string>{
    
    const fileExtension = image.name.slice(image.name.lastIndexOf("."));

    const uniqueImgName = uuid() + fileExtension;

    const absolutePath = getImagePath(uniqueImgName); 
    
    await image.mv(absolutePath);

    return uniqueImgName;
}


async function updateFile(image: UploadedFile, currentImageName: string) : Promise<string>{
    
    // Delete old image with given imageName
    await deleteImage(currentImageName);

    const newName = await saveFile(image);

    return newName;
}

async function deleteImage(imageName: string): Promise<void>{
    try {
        // If no image sent, or not found on hard disk:
        if (!imageName) return;

        // Get absolute path:
        const absolutePath = getImagePath(imageName);

        // Delete image:
        await fsPromises.unlink(absolutePath);
    }
    catch (err: any) {
        console.error(err.message);
    }

}

export default {
    getImagePath,
    saveFile,
    updateFile,
    deleteImage
}