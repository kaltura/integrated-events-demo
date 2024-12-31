import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConvertCollectionFlavorData } from './KalturaConvertCollectionFlavorData';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';
export interface KalturaConvertCollectionJobDataArgs extends KalturaConvartableJobDataArgs {
    destDirLocalPath?: string;
    destDirRemoteUrl?: string;
    destFileName?: string;
    inputXmlLocalPath?: string;
    inputXmlRemoteUrl?: string;
    commandLinesStr?: string;
    flavors?: KalturaConvertCollectionFlavorData[];
}
export declare class KalturaConvertCollectionJobData extends KalturaConvartableJobData {
    destDirLocalPath: string;
    destDirRemoteUrl: string;
    destFileName: string;
    inputXmlLocalPath: string;
    inputXmlRemoteUrl: string;
    commandLinesStr: string;
    flavors: KalturaConvertCollectionFlavorData[];
    constructor(data?: KalturaConvertCollectionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
