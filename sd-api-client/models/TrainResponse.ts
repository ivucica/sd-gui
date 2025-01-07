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
 * @interface TrainResponse
 */
export interface TrainResponse {
    /**
     * Response string from train embedding or hypernetwork task.
     * @type {string}
     * @memberof TrainResponse
     */
    info: string;
}

/**
 * Check if a given object implements the TrainResponse interface.
 */
export function instanceOfTrainResponse(value: object): value is TrainResponse {
    if (!('info' in value) || value['info'] === undefined) return false;
    return true;
}

export function TrainResponseFromJSON(json: any): TrainResponse {
    return TrainResponseFromJSONTyped(json, false);
}

export function TrainResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrainResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'info': json['info'],
    };
}

export function TrainResponseToJSON(json: any): TrainResponse {
    return TrainResponseToJSONTyped(json, false);
}

export function TrainResponseToJSONTyped(value?: TrainResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'info': value['info'],
    };
}

