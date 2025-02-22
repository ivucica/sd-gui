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
 * @interface SamplerItem
 */
export interface SamplerItem {
    /**
     * 
     * @type {string}
     * @memberof SamplerItem
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SamplerItem
     */
    aliases: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SamplerItem
     */
    options: { [key: string]: string; };
}

/**
 * Check if a given object implements the SamplerItem interface.
 */
export function instanceOfSamplerItem(value: object): value is SamplerItem {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('aliases' in value) || value['aliases'] === undefined) return false;
    if (!('options' in value) || value['options'] === undefined) return false;
    return true;
}

export function SamplerItemFromJSON(json: any): SamplerItem {
    return SamplerItemFromJSONTyped(json, false);
}

export function SamplerItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SamplerItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'aliases': json['aliases'],
        'options': json['options'],
    };
}

export function SamplerItemToJSON(json: any): SamplerItem {
    return SamplerItemToJSONTyped(json, false);
}

export function SamplerItemToJSONTyped(value?: SamplerItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'aliases': value['aliases'],
        'options': value['options'],
    };
}

