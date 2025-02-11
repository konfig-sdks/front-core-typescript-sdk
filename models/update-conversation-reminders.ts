/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UpdateConversationReminders
 */
export interface UpdateConversationReminders {
    /**
     * ID of the teammate to create a reminder for. For a private conversation, specify the id of the teammate that owns the conversation. For a shared conversation, use the id of any teammate that has access to the conversation\'s shared inbox. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
     * @type {string}
     * @memberof UpdateConversationReminders
     */
    'teammate_id': string;
    /**
     * Timestamp to schedule the reminder for. Set to null to cancel.
     * @type {number}
     * @memberof UpdateConversationReminders
     */
    'scheduled_at': number;
}

