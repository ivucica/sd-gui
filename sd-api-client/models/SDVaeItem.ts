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
 * @interface SDVaeItem
 */
export interface SDVaeItem {
    /**
     * 
     * @type {string}
     * @memberof SDVaeItem
     */
    modelName: string;
    /**
     * 
     * @type {string}
     * @memberof SDVaeItem
     */
    filename: string;
}

/**
 * Check if a given object implements the SDVaeItem interface.
 */
export function instanceOfSDVaeItem(value: object): value is SDVaeItem {
    if (!('modelName' in value) || value['modelName'] === undefined) return false;
    if (!('filename' in value) || value['filename'] === undefined) return false;
    return true;
}

export function SDVaeItemFromJSON(json: any): SDVaeItem {
    return SDVaeItemFromJSONTyped(json, false);
}

export function SDVaeItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SDVaeItem {
    if (json == null) {
        return json;
    }
    return {
        
        'modelName': json['model_name'],
        'filename': json['filename'],
    };
}

export function SDVaeItemToJSON(json: any): SDVaeItem {
    return SDVaeItemToJSONTyped(json, false);
}

export function SDVaeItemToJSONTyped(value?: SDVaeItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'model_name': value['modelName'],
        'filename': value['filename'],
    };
}

