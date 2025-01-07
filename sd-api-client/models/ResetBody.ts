/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResetBody
 */
export interface ResetBody {
    /**
     * 
     * @type {string}
     * @memberof ResetBody
     */
    sessionHash: string;
    /**
     * 
     * @type {number}
     * @memberof ResetBody
     */
    fnIndex: number;
}

/**
 * Check if a given object implements the ResetBody interface.
 */
export function instanceOfResetBody(value: object): value is ResetBody {
    if (!('sessionHash' in value) || value['sessionHash'] === undefined) return false;
    if (!('fnIndex' in value) || value['fnIndex'] === undefined) return false;
    return true;
}

export function ResetBodyFromJSON(json: any): ResetBody {
    return ResetBodyFromJSONTyped(json, false);
}

export function ResetBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetBody {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionHash': json['session_hash'],
        'fnIndex': json['fn_index'],
    };
}

export function ResetBodyToJSON(json: any): ResetBody {
    return ResetBodyToJSONTyped(json, false);
}

export function ResetBodyToJSONTyped(value?: ResetBody | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'session_hash': value['sessionHash'],
        'fn_index': value['fnIndex'],
    };
}

