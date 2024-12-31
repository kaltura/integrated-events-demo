import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';
export interface KalturaExecuteMetadataXsltObjectTaskArgs extends KalturaObjectTaskArgs {
    metadataProfileId?: number;
    metadataObjectType?: KalturaMetadataObjectType;
    xslt?: string;
}
export declare class KalturaExecuteMetadataXsltObjectTask extends KalturaObjectTask {
    metadataProfileId: number;
    metadataObjectType: KalturaMetadataObjectType;
    xslt: string;
    constructor(data?: KalturaExecuteMetadataXsltObjectTaskArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
