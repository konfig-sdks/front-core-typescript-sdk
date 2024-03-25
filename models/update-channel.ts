/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UpdateChannelSettings } from './update-channel-settings';

/**
 * 
 * @export
 * @interface UpdateChannel
 */
export interface UpdateChannel {
    /**
     * Name of the channel
     * @type {string}
     * @memberof UpdateChannel
     */
    'name'?: string;
    /**
     * ID of the inbox to move this channel to. Will also move corresponding conversations.
     * @type {string}
     * @memberof UpdateChannel
     */
    'inbox_id'?: string;
    /**
     * 
     * @type {UpdateChannelSettings}
     * @memberof UpdateChannel
     */
    'settings'?: UpdateChannelSettings;
}

