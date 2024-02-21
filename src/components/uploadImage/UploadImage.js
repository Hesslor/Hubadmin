import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const UploadImage = async image => {
    return new Promise(async resolve => {
        try {
            const uri = image
            const fileName = uri.substring(uri.lastIndexOf("/") + 1);
            const pathForFirebaseStorage = await getPathForFirebaseStorage(uri);
           
            await storage().ref(fileName).putFile(pathForFirebaseStorage);
            await storage().ref(fileName).getDownloadURL().then( uri => {
                resolve(uri)
            })
            
        } catch (error) {
            resolve(error)
        }
    })
}

const getPathForFirebaseStorage = async uri => {
    if(Platform.OS == "ios"){
        return uri
    }
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
}

export default UploadImage;