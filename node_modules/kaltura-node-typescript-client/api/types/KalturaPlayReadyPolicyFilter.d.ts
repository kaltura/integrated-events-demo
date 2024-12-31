import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyPolicyBaseFilter, KalturaPlayReadyPolicyBaseFilterArgs } from './KalturaPlayReadyPolicyBaseFilter';
export interface KalturaPlayReadyPolicyFilterArgs extends KalturaPlayReadyPolicyBaseFilterArgs {
}
export declare class KalturaPlayReadyPolicyFilter extends KalturaPlayReadyPolicyBaseFilter {
    constructor(data?: KalturaPlayReadyPolicyFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
