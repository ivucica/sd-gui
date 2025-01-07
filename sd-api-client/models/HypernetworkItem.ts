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
 * @interface HypernetworkItem
 */
export interface HypernetworkItem {
    /**
     * 
     * @type {string}
     * @memberof HypernetworkItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HypernetworkItem
     */
    path?: string;
}

/**
 * Check if a given object implements the HypernetworkItem interface.
 */
export function instanceOfHypernetworkItem(value: object): value is HypernetworkItem {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function HypernetworkItemFromJSON(json: any): HypernetworkItem {
    return HypernetworkItemFromJSONTyped(json, false);
}

export function HypernetworkItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): HypernetworkItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'path': json['path'] == null ? undefined : json['path'],
    };
}

export function HypernetworkItemToJSON(json: any): HypernetworkItem {
    return HypernetworkItemToJSONTyped(json, false);
}

export function HypernetworkItemToJSONTyped(value?: HypernetworkItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'path': value['path'],
    };
}

