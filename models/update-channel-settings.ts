/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Settings to replace. For custom channels, all settings may be replaced. For all other channels, only `undo_send_time` and `all_teammates_can_reply` may be replaced. 
 * @export
 * @interface UpdateChannelSettings
 */
export interface UpdateChannelSettings {
    /**
     * The time (measured in seconds) that users have to undo a send operation in the channel.
     * @type {number}
     * @memberof UpdateChannelSettings
     */
    'undo_send_time'?: UpdateChannelSettingsUndoSendTimeEnum;
    /**
     * Whether teammates without inbox access can reply on this channel. Only allowed for shared channels.
     * @type {boolean}
     * @memberof UpdateChannelSettings
     */
    'all_teammates_can_reply'?: boolean;
    /**
     * The webhook URL outbound messages should be sent to. Only allowed for \"custom\" type channels.
     * @type {string}
     * @memberof UpdateChannelSettings
     */
    'webhook_url'?: string;
}

type UpdateChannelSettingsUndoSendTimeEnum = 0 | 5 | 10 | 15 | 30 | 60


