
// *** Clients shouldn't be forced to depend on methods the do not use ***

// ::::::::::::::::::::::::::::::::::::::::: BAD APROACH :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// interface now demands you to implement all the features as Amazon
interface ICloudProvider {
    storeFile(name: string): void;
    getFile(name: string): void;
    createServer(region: string): void;
    listServers(region: string[]): void;
    getCDNAddress(): void;
}
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// // ::::::::::::::::::::::::::::::::::::::::: GOOD APROACH :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// as we split the behavior in different interface now the new cloud services provider wont have to satisfy every interface just the one needed
interface ICloudHostingProvider {
    createServer(region: string): void;
    listServers(region: string): void;
}

interface ICDNprovider {
    getCDNAddress(): void;
}

interface  ICloudStorageProvider {
    storeFile(name: string): void;
    getFile(name: string): void;
}
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// say we create a library taht makes it easy to integrate apps with various cloud computing providers
class Amazon implements ICloudHostingProvider, ICloudStorageProvider, ICDNprovider {

    //the initial version it only supported amazon cloud, it covered the full set of cloud services and features
    storeFile(name: string): void {}

    getFile(name: string): void{}

    getCDNAddress(): void {}

    listServers(region: string): void {}

    createServer(region: string): void {}
}

class Dropbox implements ICloudStorageProvider{

    // Dropbox is not a cloud computing provider, it only stores documents and media, it's not compatible with the rest of the methods.
    //it doesn't make sence to implemente all of the features that the interface demands to be used
    storeFile(name: string): void {}

    getFile(name: string): void{}
}

// the Amazon object can handle all the methods that live in all the interfaces above
const amazonService = new Amazon();
amazonService.storeFile('my file');
amazonService.getCDNAddress();
amazonService.listServers('west');


// but Dropbox objects dos not care about the methods but the cloudStorageProvider interface ones
const dropboxService =  new Dropbox();
dropboxService.getFile('my file');
dropboxService.storeFile('my other file');

