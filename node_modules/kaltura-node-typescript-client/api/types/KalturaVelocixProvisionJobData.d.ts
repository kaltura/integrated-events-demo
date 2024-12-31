import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaProvisionJobData, KalturaProvisionJobDataArgs } from './KalturaProvisionJobData';
export interface KalturaVelocixProvisionJobDataArgs extends KalturaProvisionJobDataArgs {
    provisioningParams?: KalturaKeyValue[];
    userName?: string;
    password?: string;
}
export declare class KalturaVelocixProvisionJobData extends KalturaProvisionJobData {
    provisioningParams: KalturaKeyValue[];
    userName: string;
    password: string;
    constructor(data?: KalturaVelocixProvisionJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
