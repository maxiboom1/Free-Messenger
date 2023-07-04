import { UploadedFile } from "express-fileupload";
import { v4 as uuid } from "uuid";
import path from "path";

const imagesFolder = path.join(__dirname, "..", "1-assets", "images");

function getImagePath(imageName: string): string{
    return imagesFolder + "/" + imageName;
}

// Get array of files, iterate on it and saves. Returns array of savedFileNames
async function saveFile(images: UploadedFile[]) : Promise<string[]>{
        
    const uniqueImgNames = [];
    
    for(let i = 0; i<images.length; i++){
        
        const image = images[i];
        
        const fileExtension = image.name.slice(image.name.lastIndexOf("."));

        const uniqueImgName = uuid() + fileExtension;
    
        const absolutePath = getImagePath(uniqueImgName); 
        
        await image.mv(absolutePath);

        uniqueImgNames.push(uniqueImgName);

    }

    return uniqueImgNames;
}

export default {
    getImagePath,
    saveFile,
}