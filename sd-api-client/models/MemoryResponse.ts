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
 * @interface MemoryResponse
 */
export interface MemoryResponse {
    /**
     * System memory stats
     * @type {object}
     * @memberof MemoryResponse
     */
    ram: object;
    /**
     * nVidia CUDA memory stats
     * @type {object}
     * @memberof MemoryResponse
     */
    cuda: object;
}

/**
 * Check if a given object implements the MemoryResponse interface.
 */
export function instanceOfMemoryResponse(value: object): value is MemoryResponse {
    if (!('ram' in value) || value['ram'] === undefined) return false;
    if (!('cuda' in value) || value['cuda'] === undefined) return false;
    return true;
}

export function MemoryResponseFromJSON(json: any): MemoryResponse {
    return MemoryResponseFromJSONTyped(json, false);
}

export function MemoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemoryResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'ram': json['ram'],
        'cuda': json['cuda'],
    };
}

export function MemoryResponseToJSON(json: any): MemoryResponse {
    return MemoryResponseToJSONTyped(json, false);
}

export function MemoryResponseToJSONTyped(value?: MemoryResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ram': value['ram'],
        'cuda': value['cuda'],
    };
}

