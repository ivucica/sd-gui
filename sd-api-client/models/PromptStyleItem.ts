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
 * @interface PromptStyleItem
 */
export interface PromptStyleItem {
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    prompt?: string;
    /**
     * 
     * @type {string}
     * @memberof PromptStyleItem
     */
    negativePrompt?: string;
}

/**
 * Check if a given object implements the PromptStyleItem interface.
 */
export function instanceOfPromptStyleItem(value: object): value is PromptStyleItem {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PromptStyleItemFromJSON(json: any): PromptStyleItem {
    return PromptStyleItemFromJSONTyped(json, false);
}

export function PromptStyleItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromptStyleItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'prompt': json['prompt'] == null ? undefined : json['prompt'],
        'negativePrompt': json['negative_prompt'] == null ? undefined : json['negative_prompt'],
    };
}

export function PromptStyleItemToJSON(json: any): PromptStyleItem {
    return PromptStyleItemToJSONTyped(json, false);
}

export function PromptStyleItemToJSONTyped(value?: PromptStyleItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'prompt': value['prompt'],
        'negative_prompt': value['negativePrompt'],
    };
}

