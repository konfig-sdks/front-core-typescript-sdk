/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AccountsApi,
  AnalyticsApi,
  AttachmentsApi,
  ChannelsApi,
  CommentsApi,
  ContactGroupsApi,
  ContactHandlesApi,
  ContactNotesApi,
  ContactsApi,
  ConversationsApi,
  CustomFieldsApi,
  DraftsApi,
  EventsApi,
  InboxesApi,
  KnowledgeBasesApi,
  LinksApi,
  MessageTemplateFoldersApi,
  MessageTemplatesApi,
  MessagesApi,
  RulesApi,
  ShiftsApi,
  SignaturesApi,
  TagsApi,
  TeammatesApi,
  TeamsApi,
  TokenIdentityApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { FrontCoreCustom } from "./client-custom";

export class FrontCore extends FrontCoreCustom {
  readonly accounts: AccountsApi;
  readonly analytics: AnalyticsApi;
  readonly attachments: AttachmentsApi;
  readonly channels: ChannelsApi;
  readonly comments: CommentsApi;
  readonly contactGroups: ContactGroupsApi;
  readonly contactHandles: ContactHandlesApi;
  readonly contactNotes: ContactNotesApi;
  readonly contacts: ContactsApi;
  readonly conversations: ConversationsApi;
  readonly customFields: CustomFieldsApi;
  readonly drafts: DraftsApi;
  readonly events: EventsApi;
  readonly inboxes: InboxesApi;
  readonly knowledgeBases: KnowledgeBasesApi;
  readonly links: LinksApi;
  readonly messageTemplateFolders: MessageTemplateFoldersApi;
  readonly messageTemplates: MessageTemplatesApi;
  readonly messages: MessagesApi;
  readonly rules: RulesApi;
  readonly shifts: ShiftsApi;
  readonly signatures: SignaturesApi;
  readonly tags: TagsApi;
  readonly teammates: TeammatesApi;
  readonly teams: TeamsApi;
  readonly tokenIdentity: TokenIdentityApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.accounts = new AccountsApi(configuration);
    this.analytics = new AnalyticsApi(configuration);
    this.attachments = new AttachmentsApi(configuration);
    this.channels = new ChannelsApi(configuration);
    this.comments = new CommentsApi(configuration);
    this.contactGroups = new ContactGroupsApi(configuration);
    this.contactHandles = new ContactHandlesApi(configuration);
    this.contactNotes = new ContactNotesApi(configuration);
    this.contacts = new ContactsApi(configuration);
    this.conversations = new ConversationsApi(configuration);
    this.customFields = new CustomFieldsApi(configuration);
    this.drafts = new DraftsApi(configuration);
    this.events = new EventsApi(configuration);
    this.inboxes = new InboxesApi(configuration);
    this.knowledgeBases = new KnowledgeBasesApi(configuration);
    this.links = new LinksApi(configuration);
    this.messageTemplateFolders = new MessageTemplateFoldersApi(configuration);
    this.messageTemplates = new MessageTemplatesApi(configuration);
    this.messages = new MessagesApi(configuration);
    this.rules = new RulesApi(configuration);
    this.shifts = new ShiftsApi(configuration);
    this.signatures = new SignaturesApi(configuration);
    this.tags = new TagsApi(configuration);
    this.teammates = new TeammatesApi(configuration);
    this.teams = new TeamsApi(configuration);
    this.tokenIdentity = new TokenIdentityApi(configuration);
  }

}
