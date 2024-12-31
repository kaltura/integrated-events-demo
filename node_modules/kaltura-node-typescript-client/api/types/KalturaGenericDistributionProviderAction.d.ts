import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaGenericDistributionProviderParser } from './KalturaGenericDistributionProviderParser';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaGenericDistributionProviderActionArgs extends KalturaObjectBaseArgs {
    genericDistributionProviderId?: number;
    action?: KalturaDistributionAction;
    resultsParser?: KalturaGenericDistributionProviderParser;
    protocol?: KalturaDistributionProtocol;
    serverAddress?: string;
    remotePath?: string;
    remoteUsername?: string;
    remotePassword?: string;
    editableFields?: string;
    mandatoryFields?: string;
}
export declare class KalturaGenericDistributionProviderAction extends KalturaObjectBase {
    readonly id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    genericDistributionProviderId: number;
    action: KalturaDistributionAction;
    readonly status: KalturaGenericDistributionProviderStatus;
    resultsParser: KalturaGenericDistributionProviderParser;
    protocol: KalturaDistributionProtocol;
    serverAddress: string;
    remotePath: string;
    remoteUsername: string;
    remotePassword: string;
    editableFields: string;
    mandatoryFields: string;
    readonly mrssTransformer: string;
    readonly mrssValidator: string;
    readonly resultsTransformer: string;
    constructor(data?: KalturaGenericDistributionProviderActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
