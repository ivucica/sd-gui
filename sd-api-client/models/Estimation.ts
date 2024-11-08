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
 * @interface Estimation
 */
export interface Estimation {
    /**
     * 
     * @type {string}
     * @memberof Estimation
     */
    msg?: string;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    queueSize: number;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    avgEventProcessTime?: number;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    avgEventConcurrentProcessTime?: number;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    rankEta?: number;
    /**
     * 
     * @type {number}
     * @memberof Estimation
     */
    queueEta: number;
}

/**
 * Check if a given object implements the Estimation interface.
 */
export function instanceOfEstimation(value: object): value is Estimation {
    if (!('queueSize' in value) || value['queueSize'] === undefined) return false;
    if (!('queueEta' in value) || value['queueEta'] === undefined) return false;
    return true;
}

export function EstimationFromJSON(json: any): Estimation {
    return EstimationFromJSONTyped(json, false);
}

export function EstimationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Estimation {
    if (json == null) {
        return json;
    }
    return {
        
        'msg': json['msg'] == null ? undefined : json['msg'],
        'rank': json['rank'] == null ? undefined : json['rank'],
        'queueSize': json['queue_size'],
        'avgEventProcessTime': json['avg_event_process_time'] == null ? undefined : json['avg_event_process_time'],
        'avgEventConcurrentProcessTime': json['avg_event_concurrent_process_time'] == null ? undefined : json['avg_event_concurrent_process_time'],
        'rankEta': json['rank_eta'] == null ? undefined : json['rank_eta'],
        'queueEta': json['queue_eta'],
    };
}

  export function EstimationToJSON(json: any): Estimation {
      return EstimationToJSONTyped(json, false);
  }

  export function EstimationToJSONTyped(value?: Estimation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'msg': value['msg'],
        'rank': value['rank'],
        'queue_size': value['queueSize'],
        'avg_event_process_time': value['avgEventProcessTime'],
        'avg_event_concurrent_process_time': value['avgEventConcurrentProcessTime'],
        'rank_eta': value['rankEta'],
        'queue_eta': value['queueEta'],
    };
}

