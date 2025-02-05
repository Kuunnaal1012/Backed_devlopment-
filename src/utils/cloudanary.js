import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
});


const uploadONCloudanary = async (localFilePAth) => {

try{
    if(!localFilePAth) return null
    // upload the file on cloudanary 
   const response = await cloudinary.uploader.upload(localFilePAth,{
        resource_type:'auto'
    })
    // file has been uploaded successfully 
    console.log('File uploades on cloudnary', response.url);
    return response;

}catch(error){
    fs.unlinkSync(localFilePAth) 
    //removethe locally saved temp file as the upload operation got failed 
return null;

}
}



export {uploadONCloudanary}
