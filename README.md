<div align="left">

[![Visit Front](./header.png)](https://front.com)

# [Front](https://front.com)<a id="front"></a>

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`frontcore.accounts.addContactsToAccount`](#frontcoreaccountsaddcontactstoaccount)
  * [`frontcore.accounts.createNewAccount`](#frontcoreaccountscreatenewaccount)
  * [`frontcore.accounts.deleteAccount`](#frontcoreaccountsdeleteaccount)
  * [`frontcore.accounts.getAccount`](#frontcoreaccountsgetaccount)
  * [`frontcore.accounts.listAccountContacts`](#frontcoreaccountslistaccountcontacts)
  * [`frontcore.accounts.listCompanyAccounts`](#frontcoreaccountslistcompanyaccounts)
  * [`frontcore.accounts.removeContactFrom`](#frontcoreaccountsremovecontactfrom)
  * [`frontcore.accounts.updateAccount`](#frontcoreaccountsupdateaccount)
  * [`frontcore.analytics.createNewExport`](#frontcoreanalyticscreatenewexport)
  * [`frontcore.analytics.createNewReport`](#frontcoreanalyticscreatenewreport)
  * [`frontcore.analytics.getExport`](#frontcoreanalyticsgetexport)
  * [`frontcore.analytics.getReport`](#frontcoreanalyticsgetreport)
  * [`frontcore.attachments.downloadAttachmentFile`](#frontcoreattachmentsdownloadattachmentfile)
  * [`frontcore.channels.createInboxChannel`](#frontcorechannelscreateinboxchannel)
  * [`frontcore.channels.getChannel`](#frontcorechannelsgetchannel)
  * [`frontcore.channels.list`](#frontcorechannelslist)
  * [`frontcore.channels.listTeam`](#frontcorechannelslistteam)
  * [`frontcore.channels.listTeammate`](#frontcorechannelslistteammate)
  * [`frontcore.channels.updateChannel`](#frontcorechannelsupdatechannel)
  * [`frontcore.channels.validateSMTPSettings`](#frontcorechannelsvalidatesmtpsettings)
  * [`frontcore.comments.addNewComment`](#frontcorecommentsaddnewcomment)
  * [`frontcore.comments.getComment`](#frontcorecommentsgetcomment)
  * [`frontcore.comments.listConversationComments`](#frontcorecommentslistconversationcomments)
  * [`frontcore.comments.listMentionedTeammates`](#frontcorecommentslistmentionedteammates)
  * [`frontcore.contactGroups.addContactsToGroup`](#frontcorecontactgroupsaddcontactstogroup)
  * [`frontcore.contactGroups.createNewGroup`](#frontcorecontactgroupscreatenewgroup)
  * [`frontcore.contactGroups.createNewGroup_0`](#frontcorecontactgroupscreatenewgroup_0)
  * [`frontcore.contactGroups.createTeammateGroup`](#frontcorecontactgroupscreateteammategroup)
  * [`frontcore.contactGroups.deleteGroup`](#frontcorecontactgroupsdeletegroup)
  * [`frontcore.contactGroups.listGroupContacts`](#frontcorecontactgroupslistgroupcontacts)
  * [`frontcore.contactGroups.listGroups`](#frontcorecontactgroupslistgroups)
  * [`frontcore.contactGroups.listTeamGroups`](#frontcorecontactgroupslistteamgroups)
  * [`frontcore.contactGroups.listTeammateGroups`](#frontcorecontactgroupslistteammategroups)
  * [`frontcore.contactGroups.removeContacts`](#frontcorecontactgroupsremovecontacts)
  * [`frontcore.contactHandles.addNewHandle`](#frontcorecontacthandlesaddnewhandle)
  * [`frontcore.contactHandles.removeHandle`](#frontcorecontacthandlesremovehandle)
  * [`frontcore.contactNotes.createNewNote`](#frontcorecontactnotescreatenewnote)
  * [`frontcore.contactNotes.list`](#frontcorecontactnoteslist)
  * [`frontcore.contacts.createNewContact`](#frontcorecontactscreatenewcontact)
  * [`frontcore.contacts.createTeamContact`](#frontcorecontactscreateteamcontact)
  * [`frontcore.contacts.createTeammateContact`](#frontcorecontactscreateteammatecontact)
  * [`frontcore.contacts.deleteContact`](#frontcorecontactsdeletecontact)
  * [`frontcore.contacts.getOneContact`](#frontcorecontactsgetonecontact)
  * [`frontcore.contacts.listCompanyContacts`](#frontcorecontactslistcompanycontacts)
  * [`frontcore.contacts.listConversationsReverseChronologicalOrder`](#frontcorecontactslistconversationsreversechronologicalorder)
  * [`frontcore.contacts.listTeamContacts`](#frontcorecontactslistteamcontacts)
  * [`frontcore.contacts.listTeammateContacts`](#frontcorecontactslistteammatecontacts)
  * [`frontcore.contacts.mergeContacts`](#frontcorecontactsmergecontacts)
  * [`frontcore.contacts.updateContact`](#frontcorecontactsupdatecontact)
  * [`frontcore.conversations.addFollowers`](#frontcoreconversationsaddfollowers)
  * [`frontcore.conversations.addLink`](#frontcoreconversationsaddlink)
  * [`frontcore.conversations.addTagsToConversation`](#frontcoreconversationsaddtagstoconversation)
  * [`frontcore.conversations.createDiscussion`](#frontcoreconversationscreatediscussion)
  * [`frontcore.conversations.getById`](#frontcoreconversationsgetbyid)
  * [`frontcore.conversations.listEvents`](#frontcoreconversationslistevents)
  * [`frontcore.conversations.listFollowers`](#frontcoreconversationslistfollowers)
  * [`frontcore.conversations.listInReverseChronologicalOrder`](#frontcoreconversationslistinreversechronologicalorder)
  * [`frontcore.conversations.listInboxes`](#frontcoreconversationslistinboxes)
  * [`frontcore.conversations.listMessagesInReverseChronologicalOrder`](#frontcoreconversationslistmessagesinreversechronologicalorder)
  * [`frontcore.conversations.removeFollowers`](#frontcoreconversationsremovefollowers)
  * [`frontcore.conversations.removeLinks`](#frontcoreconversationsremovelinks)
  * [`frontcore.conversations.removeTag`](#frontcoreconversationsremovetag)
  * [`frontcore.conversations.searchByQuery`](#frontcoreconversationssearchbyquery)
  * [`frontcore.conversations.updateAssignee`](#frontcoreconversationsupdateassignee)
  * [`frontcore.conversations.updateConversationById`](#frontcoreconversationsupdateconversationbyid)
  * [`frontcore.conversations.updateReminders`](#frontcoreconversationsupdatereminders)
  * [`frontcore.customFields.getList`](#frontcorecustomfieldsgetlist)
  * [`frontcore.customFields.listAccountCustomFields`](#frontcorecustomfieldslistaccountcustomfields)
  * [`frontcore.customFields.listContactCustomFields`](#frontcorecustomfieldslistcontactcustomfields)
  * [`frontcore.customFields.listContactFields`](#frontcorecustomfieldslistcontactfields)
  * [`frontcore.customFields.listConversationCustomFields`](#frontcorecustomfieldslistconversationcustomfields)
  * [`frontcore.customFields.listInboxCustomFields`](#frontcorecustomfieldslistinboxcustomfields)
  * [`frontcore.customFields.listTeammateCustomFields`](#frontcorecustomfieldslistteammatecustomfields)
  * [`frontcore.drafts.createDraftReply`](#frontcoredraftscreatedraftreply)
  * [`frontcore.drafts.createNewDraftMessage`](#frontcoredraftscreatenewdraftmessage)
  * [`frontcore.drafts.deleteDraftMessage`](#frontcoredraftsdeletedraftmessage)
  * [`frontcore.drafts.editMessage`](#frontcoredraftseditmessage)
  * [`frontcore.drafts.listConversationDrafts`](#frontcoredraftslistconversationdrafts)
  * [`frontcore.events.getEvent`](#frontcoreeventsgetevent)
  * [`frontcore.events.listDetailedInboxEvents`](#frontcoreeventslistdetailedinboxevents)
  * [`frontcore.inboxes.addTeammateAccess`](#frontcoreinboxesaddteammateaccess)
  * [`frontcore.inboxes.createDefaultTeamInbox`](#frontcoreinboxescreatedefaultteaminbox)
  * [`frontcore.inboxes.createTeamInbox`](#frontcoreinboxescreateteaminbox)
  * [`frontcore.inboxes.getInbox`](#frontcoreinboxesgetinbox)
  * [`frontcore.inboxes.listChannels`](#frontcoreinboxeslistchannels)
  * [`frontcore.inboxes.listConversationsInbox`](#frontcoreinboxeslistconversationsinbox)
  * [`frontcore.inboxes.listInboxes`](#frontcoreinboxeslistinboxes)
  * [`frontcore.inboxes.listTeamInboxes`](#frontcoreinboxeslistteaminboxes)
  * [`frontcore.inboxes.listTeammatesAccess`](#frontcoreinboxeslistteammatesaccess)
  * [`frontcore.inboxes.removeAccess`](#frontcoreinboxesremoveaccess)
  * [`frontcore.knowledgeBases.createArticleDefaultLocale`](#frontcoreknowledgebasescreatearticledefaultlocale)
  * [`frontcore.knowledgeBases.createArticleLocale`](#frontcoreknowledgebasescreatearticlelocale)
  * [`frontcore.knowledgeBases.createCategoryDefaultLocale`](#frontcoreknowledgebasescreatecategorydefaultlocale)
  * [`frontcore.knowledgeBases.createCategoryInLocale`](#frontcoreknowledgebasescreatecategoryinlocale)
  * [`frontcore.knowledgeBases.createNewKnowledgeBase`](#frontcoreknowledgebasescreatenewknowledgebase)
  * [`frontcore.knowledgeBases.deleteArticle`](#frontcoreknowledgebasesdeletearticle)
  * [`frontcore.knowledgeBases.deleteCategory`](#frontcoreknowledgebasesdeletecategory)
  * [`frontcore.knowledgeBases.downloadAttachmentArticle`](#frontcoreknowledgebasesdownloadattachmentarticle)
  * [`frontcore.knowledgeBases.getArticleById`](#frontcoreknowledgebasesgetarticlebyid)
  * [`frontcore.knowledgeBases.getArticleContent`](#frontcoreknowledgebasesgetarticlecontent)
  * [`frontcore.knowledgeBases.getCategory`](#frontcoreknowledgebasesgetcategory)
  * [`frontcore.knowledgeBases.getCategoryContentDefaultLocale`](#frontcoreknowledgebasesgetcategorycontentdefaultlocale)
  * [`frontcore.knowledgeBases.getCategoryContentLocale`](#frontcoreknowledgebasesgetcategorycontentlocale)
  * [`frontcore.knowledgeBases.getContentDefaultLocale`](#frontcoreknowledgebasesgetcontentdefaultlocale)
  * [`frontcore.knowledgeBases.getContentDefaultLocale_0`](#frontcoreknowledgebasesgetcontentdefaultlocale_0)
  * [`frontcore.knowledgeBases.getKnowledgeBase`](#frontcoreknowledgebasesgetknowledgebase)
  * [`frontcore.knowledgeBases.getKnowledgeBaseContentInLocale`](#frontcoreknowledgebasesgetknowledgebasecontentinlocale)
  * [`frontcore.knowledgeBases.listArticlesInBase`](#frontcoreknowledgebaseslistarticlesinbase)
  * [`frontcore.knowledgeBases.listArticlesInCategory`](#frontcoreknowledgebaseslistarticlesincategory)
  * [`frontcore.knowledgeBases.listCategoriesInBase`](#frontcoreknowledgebaseslistcategoriesinbase)
  * [`frontcore.knowledgeBases.listKnowledgeBases`](#frontcoreknowledgebaseslistknowledgebases)
  * [`frontcore.knowledgeBases.updateArticleContentDefaultLocale`](#frontcoreknowledgebasesupdatearticlecontentdefaultlocale)
  * [`frontcore.knowledgeBases.updateArticleContentLocale`](#frontcoreknowledgebasesupdatearticlecontentlocale)
  * [`frontcore.knowledgeBases.updateCategoryContentLocale`](#frontcoreknowledgebasesupdatecategorycontentlocale)
  * [`frontcore.knowledgeBases.updateCategoryDefaultLocale`](#frontcoreknowledgebasesupdatecategorydefaultlocale)
  * [`frontcore.knowledgeBases.updateDefaultKnowledgeBase`](#frontcoreknowledgebasesupdatedefaultknowledgebase)
  * [`frontcore.knowledgeBases.updateKnowledgeBaseLocale`](#frontcoreknowledgebasesupdateknowledgebaselocale)
  * [`frontcore.links.createLink`](#frontcorelinkscreatelink)
  * [`frontcore.links.getLink`](#frontcorelinksgetlink)
  * [`frontcore.links.listByIdAndType`](#frontcorelinkslistbyidandtype)
  * [`frontcore.links.listConversations`](#frontcorelinkslistconversations)
  * [`frontcore.links.updateLink`](#frontcorelinksupdatelink)
  * [`frontcore.messageTemplateFolders.createChildFolder`](#frontcoremessagetemplatefolderscreatechildfolder)
  * [`frontcore.messageTemplateFolders.createNewFolder`](#frontcoremessagetemplatefolderscreatenewfolder)
  * [`frontcore.messageTemplateFolders.createNewFolder_0`](#frontcoremessagetemplatefolderscreatenewfolder_0)
  * [`frontcore.messageTemplateFolders.createNewFolder_1`](#frontcoremessagetemplatefolderscreatenewfolder_1)
  * [`frontcore.messageTemplateFolders.deleteFolder`](#frontcoremessagetemplatefoldersdeletefolder)
  * [`frontcore.messageTemplateFolders.getChildFolders`](#frontcoremessagetemplatefoldersgetchildfolders)
  * [`frontcore.messageTemplateFolders.getFolder`](#frontcoremessagetemplatefoldersgetfolder)
  * [`frontcore.messageTemplateFolders.listFolders`](#frontcoremessagetemplatefolderslistfolders)
  * [`frontcore.messageTemplateFolders.listTeamFolders`](#frontcoremessagetemplatefolderslistteamfolders)
  * [`frontcore.messageTemplateFolders.listTeammateFolders`](#frontcoremessagetemplatefolderslistteammatefolders)
  * [`frontcore.messageTemplateFolders.updateFolder`](#frontcoremessagetemplatefoldersupdatefolder)
  * [`frontcore.messageTemplates.addNewTeammateTemplate`](#frontcoremessagetemplatesaddnewteammatetemplate)
  * [`frontcore.messageTemplates.createChildTemplate`](#frontcoremessagetemplatescreatechildtemplate)
  * [`frontcore.messageTemplates.createNewTemplate`](#frontcoremessagetemplatescreatenewtemplate)
  * [`frontcore.messageTemplates.createTeamTemplate`](#frontcoremessagetemplatescreateteamtemplate)
  * [`frontcore.messageTemplates.deleteTemplate`](#frontcoremessagetemplatesdeletetemplate)
  * [`frontcore.messageTemplates.getChildTemplates`](#frontcoremessagetemplatesgetchildtemplates)
  * [`frontcore.messageTemplates.getTemplateById`](#frontcoremessagetemplatesgettemplatebyid)
  * [`frontcore.messageTemplates.list`](#frontcoremessagetemplateslist)
  * [`frontcore.messageTemplates.listTeamTemplates`](#frontcoremessagetemplateslistteamtemplates)
  * [`frontcore.messageTemplates.listTeammateTemplates`](#frontcoremessagetemplateslistteammatetemplates)
  * [`frontcore.messageTemplates.updateTemplateById`](#frontcoremessagetemplatesupdatetemplatebyid)
  * [`frontcore.messages.createMessageReply`](#frontcoremessagescreatemessagereply)
  * [`frontcore.messages.createNewMessage`](#frontcoremessagescreatenewmessage)
  * [`frontcore.messages.getMessageById`](#frontcoremessagesgetmessagebyid)
  * [`frontcore.messages.getMessageSeenStatus`](#frontcoremessagesgetmessageseenstatus)
  * [`frontcore.messages.importNewInboxMessage`](#frontcoremessagesimportnewinboxmessage)
  * [`frontcore.messages.markMessageSeen`](#frontcoremessagesmarkmessageseen)
  * [`frontcore.messages.receiveCustomMessage`](#frontcoremessagesreceivecustommessage)
  * [`frontcore.rules.getRule`](#frontcorerulesgetrule)
  * [`frontcore.rules.listAllCompanyRules`](#frontcoreruleslistallcompanyrules)
  * [`frontcore.rules.listCompanyRules`](#frontcoreruleslistcompanyrules)
  * [`frontcore.rules.listTeamRules`](#frontcoreruleslistteamrules)
  * [`frontcore.rules.listTeammateRules`](#frontcoreruleslistteammaterules)
  * [`frontcore.shifts.addTeammatesToShift`](#frontcoreshiftsaddteammatestoshift)
  * [`frontcore.shifts.createShift`](#frontcoreshiftscreateshift)
  * [`frontcore.shifts.createTeamShift`](#frontcoreshiftscreateteamshift)
  * [`frontcore.shifts.getShift`](#frontcoreshiftsgetshift)
  * [`frontcore.shifts.listShiftTeammates`](#frontcoreshiftslistshiftteammates)
  * [`frontcore.shifts.listShifts`](#frontcoreshiftslistshifts)
  * [`frontcore.shifts.listTeamShifts`](#frontcoreshiftslistteamshifts)
  * [`frontcore.shifts.removeTeammatesFromShift`](#frontcoreshiftsremoveteammatesfromshift)
  * [`frontcore.shifts.teammateShiftsList`](#frontcoreshiftsteammateshiftslist)
  * [`frontcore.shifts.updateShift`](#frontcoreshiftsupdateshift)
  * [`frontcore.signatures.createTeamSignature`](#frontcoresignaturescreateteamsignature)
  * [`frontcore.signatures.createTeammateSignature`](#frontcoresignaturescreateteammatesignature)
  * [`frontcore.signatures.deleteSignature`](#frontcoresignaturesdeletesignature)
  * [`frontcore.signatures.getSignature`](#frontcoresignaturesgetsignature)
  * [`frontcore.signatures.listTeam`](#frontcoresignatureslistteam)
  * [`frontcore.signatures.listTeammate`](#frontcoresignatureslistteammate)
  * [`frontcore.signatures.updateSignature`](#frontcoresignaturesupdatesignature)
  * [`frontcore.tags.createChildTag`](#frontcoretagscreatechildtag)
  * [`frontcore.tags.createCompanyTag`](#frontcoretagscreatecompanytag)
  * [`frontcore.tags.createTagOldestTeam`](#frontcoretagscreatetagoldestteam)
  * [`frontcore.tags.createTeamTag`](#frontcoretagscreateteamtag)
  * [`frontcore.tags.createTeammateTag`](#frontcoretagscreateteammatetag)
  * [`frontcore.tags.deleteTag`](#frontcoretagsdeletetag)
  * [`frontcore.tags.getTag`](#frontcoretagsgettag)
  * [`frontcore.tags.listAll`](#frontcoretagslistall)
  * [`frontcore.tags.listChildren`](#frontcoretagslistchildren)
  * [`frontcore.tags.listCompany`](#frontcoretagslistcompany)
  * [`frontcore.tags.listTaggedConversations`](#frontcoretagslisttaggedconversations)
  * [`frontcore.tags.listTeamTags`](#frontcoretagslistteamtags)
  * [`frontcore.tags.listTeammateTags`](#frontcoretagslistteammatetags)
  * [`frontcore.tags.updateTag`](#frontcoretagsupdatetag)
  * [`frontcore.teammates.getInboxList`](#frontcoreteammatesgetinboxlist)
  * [`frontcore.teammates.getTeammateById`](#frontcoreteammatesgetteammatebyid)
  * [`frontcore.teammates.listAssignedConversations`](#frontcoreteammateslistassignedconversations)
  * [`frontcore.teammates.listCompanyMembers`](#frontcoreteammateslistcompanymembers)
  * [`frontcore.teammates.updateTeammate`](#frontcoreteammatesupdateteammate)
  * [`frontcore.teams.addTeammates`](#frontcoreteamsaddteammates)
  * [`frontcore.teams.getWorkspace`](#frontcoreteamsgetworkspace)
  * [`frontcore.teams.listTeams`](#frontcoreteamslistteams)
  * [`frontcore.teams.removeTeammates`](#frontcoreteamsremoveteammates)
  * [`frontcore.tokenIdentity.getDetails`](#frontcoretokenidentitygetdetails)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Front&serviceName=Core&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { FrontCore } from "front-core-typescript-sdk";

const frontcore = new FrontCore({
  // Defining the base path is optional and defaults to https://api2.frontapp.com
  // basePath: "https://api2.frontapp.com",
  accessToken: "ACCESS_TOKEN",
});

const addContactsToAccountResponse =
  await frontcore.accounts.addContactsToAccount({
    accountId: "acc_123",
    contact_ids: ["contact_ids_example"],
  });

console.log(addContactsToAccountResponse);
```

## Reference<a id="reference"></a>


### `frontcore.accounts.addContactsToAccount`<a id="frontcoreaccountsaddcontactstoaccount"></a>

Adds a list of contacts to an Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addContactsToAccountResponse =
  await frontcore.accounts.addContactsToAccount({
    accountId: "acc_123",
    contact_ids: ["contact_ids_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact_ids: `string`[]<a id="contact_ids-string"></a>

The contact IDs to include. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.createNewAccount`<a id="frontcoreaccountscreatenewaccount"></a>

Create a new account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAccountResponse = await frontcore.accounts.createNewAccount({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Account description

##### name: `string`<a id="name-string"></a>

Name of the Account

##### domains: `string`[]<a id="domains-string"></a>

List of domains associated with the Account

##### external_id: `string`<a id="external_id-string"></a>

ID of the Account in an external system

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.deleteAccount`<a id="frontcoreaccountsdeleteaccount"></a>

Deletes an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAccountResponse = await frontcore.accounts.deleteAccount({
  accountId: "acc_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.getAccount`<a id="frontcoreaccountsgetaccount"></a>

Fetches an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountResponse = await frontcore.accounts.getAccount({
  accountId: "acc_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.listAccountContacts`<a id="frontcoreaccountslistaccountcontacts"></a>

Lists the contacts associated with an Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccountContactsResponse =
  await frontcore.accounts.listAccountContacts({
    accountId: "acc_123",
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    limit: 25,
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the contacts. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListAccountContactsResponse](./models/accounts-list-account-contacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.listCompanyAccounts`<a id="frontcoreaccountslistcompanyaccounts"></a>

List the accounts of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyAccountsResponse =
  await frontcore.accounts.listCompanyAccounts({
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the accounts. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListCompanyAccountsResponse](./models/accounts-list-company-accounts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.removeContactFrom`<a id="frontcoreaccountsremovecontactfrom"></a>

Removes a list of contacts from an Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeContactFromResponse = await frontcore.accounts.removeContactFrom({
  accountId: "acc_123",
  contact_ids: ["contact_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact_ids: `string`[]<a id="contact_ids-string"></a>

The contact IDs to include. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}/contacts` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.accounts.updateAccount`<a id="frontcoreaccountsupdateaccount"></a>

Updates an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAccountResponse = await frontcore.accounts.updateAccount({
  accountId: "acc_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

The Account ID. Alternatively, you can supply the account domain or external ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### description: `string`<a id="description-string"></a>

Account description

##### name: `string`<a id="name-string"></a>

Name of the Account

##### domains: `string`[]<a id="domains-string"></a>

List of domains associated with the Account

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this account. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.analytics.createNewExport`<a id="frontcoreanalyticscreatenewexport"></a>

Create a new analytics export of messages or events (activities) over a specific time span.
The export will be executed asynchronously. The response will include a link that can be used to retrieve the export status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewExportResponse = await frontcore.analytics.createNewExport({
  type: "messages",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### columns: [`AnalyticsActivitiesColumns`](./models/analytics-activities-columns.ts)[]<a id="columns-analyticsactivitiescolumnsmodelsanalytics-activities-columnsts"></a>

List of the columns to include in the export. ❗️Columns \\\"Resolution time\\\" and \\\"Final resolution\\\" are deprecated and not supported anymore through the \\\"columns\\\" field. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/exports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.analytics.createNewReport`<a id="frontcoreanalyticscreatenewreport"></a>

Create a new analytics report for a set of metrics over a specific time span. Different filters (e.g. Inbox v Tag v Teammates) will be joined with AND logic, but the IDs within a filter will be joined with OR logic (e.g. Inbox A or Inbox B, Tag A or Tag B).
The report will be executed asynchronously. The response will include a link that can be used to retrieve the
report status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReportResponse = await frontcore.analytics.createNewReport({
  start: 3.14,
  end: 3.14,
  metrics: ["avg_csat_survey_response"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start: `number`<a id="start-number"></a>

Start time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded down to the start of the day.

##### end: `number`<a id="end-number"></a>

End time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded up to the end of the day.

##### metrics: [`AnalyticsMetricId`](./models/analytics-metric-id.ts)[]<a id="metrics-analyticsmetricidmodelsanalytics-metric-idts"></a>

List of the metrics required.

##### timezone: `string`<a id="timezone-string"></a>

[IANA name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the timezone to format the dates with. If omitted, the export will use Etc/UTC.

##### filters: [`AnalyticsFilters`](./models/analytics-filters.ts)<a id="filters-analyticsfiltersmodelsanalytics-filtersts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/reports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.analytics.getExport`<a id="frontcoreanalyticsgetexport"></a>

Fetch an analytics exports. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExportResponse = await frontcore.analytics.getExport({
  exportId: "exp_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### exportId: `string`<a id="exportid-string"></a>

The export ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/exports/{export_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.analytics.getReport`<a id="frontcoreanalyticsgetreport"></a>

Fetch an analytics report. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportResponse = await frontcore.analytics.getReport({
  reportUid: "723ec32796f12c6f05f6b124d8ef76191a38cec990e0f65d549206c51373f1a0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reportUid: `string`<a id="reportuid-string"></a>

The report UID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/reports/{report_uid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.attachments.downloadAttachmentFile`<a id="frontcoreattachmentsdownloadattachmentfile"></a>

Download an attachment file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadAttachmentFileResponse =
  await frontcore.attachments.downloadAttachmentFile({
    attachmentLinkId: "fil_55c8c149",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attachmentLinkId: `string`<a id="attachmentlinkid-string"></a>

The Attachment ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/download/{attachment_link_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.createInboxChannel`<a id="frontcorechannelscreateinboxchannel"></a>

Create a channel in an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInboxChannelResponse = await frontcore.channels.createInboxChannel({
  inboxId: "inb_123",
  type: "custom",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

Type of the channel

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

##### name: `string`<a id="name-string"></a>

Name of the channel

##### settings: [`CreateChannelSettings`](./models/create-channel-settings.ts)<a id="settings-createchannelsettingsmodelscreate-channel-settingsts"></a>

##### send_as: `string`<a id="send_as-string"></a>

Sending address of your channel. Required for SMTP channels.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/channels` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.getChannel`<a id="frontcorechannelsgetchannel"></a>

Fetch a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChannelResponse = await frontcore.channels.getChannel({
  channelId: "cha_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.list`<a id="frontcorechannelslist"></a>

List the channels of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await frontcore.channels.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[ChannelsListResponse](./models/channels-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.listTeam`<a id="frontcorechannelslistteam"></a>

List the channels of a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamResponse = await frontcore.channels.listTeam({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[ChannelsListResponse](./models/channels-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.listTeammate`<a id="frontcorechannelslistteammate"></a>

List the channels of a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateResponse = await frontcore.channels.listTeammate({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ChannelsListResponse](./models/channels-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.updateChannel`<a id="frontcorechannelsupdatechannel"></a>

Update a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateChannelResponse = await frontcore.channels.updateChannel({
  channelId: "cha_123",
  name: "Your channel name",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### name: `string`<a id="name-string"></a>

Name of the channel

##### inbox_id: `string`<a id="inbox_id-string"></a>

ID of the inbox to move this channel to. Will also move corresponding conversations.

##### settings: [`UpdateChannelSettings`](./models/update-channel-settings.ts)<a id="settings-updatechannelsettingsmodelsupdate-channel-settingsts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.channels.validateSMTPSettings`<a id="frontcorechannelsvalidatesmtpsettings"></a>

Asynchronously validate an SMTP channel (this endpoint is irrelevant to other channel types). When you create an SMTP channel via the API, [create a channel](https://dev.frontapp.com/reference/post_inboxes-inbox-id-channels) with type smtp and the send_as set to the needed email address. You then [configure the email provider](https://help.front.com/en/articles/2081), after which you use this endpoint to asynchronously validate the SMTP settings.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateSMTPSettingsResponse =
  await frontcore.channels.validateSMTPSettings({
    channelId: "cha_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### channelId: `string`<a id="channelid-string"></a>

The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ChannelsValidateSmtpSettingsResponse](./models/channels-validate-smtp-settings-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.comments.addNewComment`<a id="frontcorecommentsaddnewcomment"></a>

Add a comment to a [conversation](https://dev.frontapp.com/reference/conversations). If you want to create a new comment-only conversation, use the [Create discussion conversation](https://dev.frontapp.com/reference/create-conversation) endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewCommentResponse = await frontcore.comments.addNewComment({
  conversationId: "cnv_123",
  body: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### body: `string`<a id="body-string"></a>

Content of the comment. Can include markdown formatting.

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate creating the comment. Alternatively, you can supply the author as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1). If omitted, will post as the API Token or OAuth client of the requester.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.comments.getComment`<a id="frontcorecommentsgetcomment"></a>

Fetches a comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommentResponse = await frontcore.comments.getComment({
  commentId: "com_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `string`<a id="commentid-string"></a>

The Comment ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{comment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.comments.listConversationComments`<a id="frontcorecommentslistconversationcomments"></a>

List the comments in a conversation in reverse chronological order (newest first).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationCommentsResponse =
  await frontcore.comments.listConversationComments({
    conversationId: "cnv_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListConversationCommentsResponse](./models/comments-list-conversation-comments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.comments.listMentionedTeammates`<a id="frontcorecommentslistmentionedteammates"></a>

List the teammates mentioned in a comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMentionedTeammatesResponse =
  await frontcore.comments.listMentionedTeammates({
    commentId: "com_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `string`<a id="commentid-string"></a>

The Comment ID

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListMentionedTeammatesResponse](./models/comments-list-mentioned-teammates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{comment_id}/mentions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.addContactsToGroup`<a id="frontcorecontactgroupsaddcontactstogroup"></a>

Add contacts to the requested group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addContactsToGroupResponse =
  await frontcore.contactGroups.addContactsToGroup({
    contactGroupId: "grp_123",
    contact_ids: ["contact_ids_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact_ids: `string`[]<a id="contact_ids-string"></a>

List of IDs of the contacts to add in the requested group. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### contactGroupId: `string`<a id="contactgroupid-string"></a>

The contact group ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups/{contact_group_id}/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.createNewGroup`<a id="frontcorecontactgroupscreatenewgroup"></a>

Create a new contact group in the default team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGroupResponse = await frontcore.contactGroups.createNewGroup({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the group

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.createNewGroup_0`<a id="frontcorecontactgroupscreatenewgroup_0"></a>

Create a new contact group for the requested team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGroup_0Response = await frontcore.contactGroups.createNewGroup_0(
  {
    teamId: "tim_123",
    name: "name_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the group

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/contact_groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.createTeammateGroup`<a id="frontcorecontactgroupscreateteammategroup"></a>

Create a new contact group for the requested teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeammateGroupResponse =
  await frontcore.contactGroups.createTeammateGroup({
    teammateId: "tea_123",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the group

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/contact_groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.deleteGroup`<a id="frontcorecontactgroupsdeletegroup"></a>

Delete a contact group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteGroupResponse = await frontcore.contactGroups.deleteGroup({
  contactGroupId: "grp_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactGroupId: `string`<a id="contactgroupid-string"></a>

The contact group ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups/{contact_group_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.listGroupContacts`<a id="frontcorecontactgroupslistgroupcontacts"></a>

List the contacts belonging to the requested group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupContactsResponse =
  await frontcore.contactGroups.listGroupContacts({
    contactGroupId: "grp_123",
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    limit: 25,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactGroupId: `string`<a id="contactgroupid-string"></a>

The contact group ID

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListAccountContactsResponse](./models/accounts-list-account-contacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups/{contact_group_id}/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.listGroups`<a id="frontcorecontactgroupslistgroups"></a>

List the contact groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGroupsResponse = await frontcore.contactGroups.listGroups();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContactGroupsListGroupsResponse](./models/contact-groups-list-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.listTeamGroups`<a id="frontcorecontactgroupslistteamgroups"></a>

List contact groups belonging to the requested team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamGroupsResponse = await frontcore.contactGroups.listTeamGroups({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[ContactGroupsListGroupsResponse](./models/contact-groups-list-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/contact_groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.listTeammateGroups`<a id="frontcorecontactgroupslistteammategroups"></a>

List the contact groups belonging to the requested teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateGroupsResponse =
  await frontcore.contactGroups.listTeammateGroups({
    teammateId: "tea_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ContactGroupsListGroupsResponse](./models/contact-groups-list-groups-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/contact_groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactGroups.removeContacts`<a id="frontcorecontactgroupsremovecontacts"></a>

Remove contacts from the requested group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeContactsResponse = await frontcore.contactGroups.removeContacts({
  contactGroupId: "grp_123",
  contact_ids: ["contact_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact_ids: `string`[]<a id="contact_ids-string"></a>

List of IDs of the contacts to remove from the requested group. Alternatively, you can supply the contact source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### contactGroupId: `string`<a id="contactgroupid-string"></a>

The contact group ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contact_groups/{contact_group_id}/contacts` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactHandles.addNewHandle`<a id="frontcorecontacthandlesaddnewhandle"></a>

Adds a new handle to a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewHandleResponse = await frontcore.contactHandles.addNewHandle({
  contactId: "crd_123",
  handle: "dwight@limitlesspaper.com",
  source: "email",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### handle: `string`<a id="handle-string"></a>

Handle used to reach the contact.

##### source: `string`<a id="source-string"></a>

Source of the handle. Can be `email`, `phone`, `twitter`, `facebook`, `intercom`, `front_chat`, or `custom`.

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}/handles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactHandles.removeHandle`<a id="frontcorecontacthandlesremovehandle"></a>

Remove a handle from a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeHandleResponse = await frontcore.contactHandles.removeHandle({
  contactId: "crd_123",
  handle: "dwight@limitlesspaper.com",
  source: "email",
  force: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### handle: `string`<a id="handle-string"></a>

Handle used to reach the contact.

##### source: `string`<a id="source-string"></a>

Source of the handle. Can be `email`, `phone`, `twitter`, `facebook`, `intercom`, `front_chat`, or `custom`.

##### force: `boolean`<a id="force-boolean"></a>

Force the deletetion of the contact if the handle is the last one

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}/handles` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactNotes.createNewNote`<a id="frontcorecontactnotescreatenewnote"></a>

Create a new note on a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewNoteResponse = await frontcore.contactNotes.createNewNote({
  contactId: "crd_123",
  author_id: "author_id_example",
  body: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_id: `string`<a id="author_id-string"></a>

ID of teammate creating the note

##### body: `string`<a id="body-string"></a>

Content of the note

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ContactNoteResponses](./models/contact-note-responses.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}/notes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contactNotes.list`<a id="frontcorecontactnoteslist"></a>

List the notes added to a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await frontcore.contactNotes.list({
  contactId: "crd_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ContactNotesListResponse](./models/contact-notes-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}/notes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.createNewContact`<a id="frontcorecontactscreatenewcontact"></a>

Create a new contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewContactResponse = await frontcore.contacts.createNewContact({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### handles: [`ContactHandle`](./models/contact-handle.ts)[]<a id="handles-contacthandlemodelscontact-handlets"></a>

List of the handles for this contact. Each handle object should include `handle` and `source` fields.

##### description: `string`<a id="description-string"></a>

Contact description

##### name: `string`<a id="name-string"></a>

Contact name

##### avatar: `Uint8Array | File | buffer.File`<a id="avatar-uint8array--file--bufferfile"></a>

Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

##### is_spammer: `boolean`<a id="is_spammer-boolean"></a>

Whether or not the contact is marked as a spammer

##### links: `string`[]<a id="links-string"></a>

List of all the links of the contact

##### group_names: `string`[]<a id="group_names-string"></a>

List of all the group names the contact belongs to. It will automatically create missing groups

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.createTeamContact`<a id="frontcorecontactscreateteamcontact"></a>

Create a contact for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamContactResponse = await frontcore.contacts.createTeamContact({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### handles: [`ContactHandle`](./models/contact-handle.ts)[]<a id="handles-contacthandlemodelscontact-handlets"></a>

List of the handles for this contact. Each handle object should include `handle` and `source` fields.

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### description: `string`<a id="description-string"></a>

Contact description

##### name: `string`<a id="name-string"></a>

Contact name

##### avatar: `Uint8Array | File | buffer.File`<a id="avatar-uint8array--file--bufferfile"></a>

Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

##### is_spammer: `boolean`<a id="is_spammer-boolean"></a>

Whether or not the contact is marked as a spammer

##### links: `string`[]<a id="links-string"></a>

List of all the links of the contact

##### group_names: `string`[]<a id="group_names-string"></a>

List of all the group names the contact belongs to. It will automatically create missing groups

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.createTeammateContact`<a id="frontcorecontactscreateteammatecontact"></a>

Create a contact for a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeammateContactResponse =
  await frontcore.contacts.createTeammateContact({
    teammateId: "tea_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### handles: [`ContactHandle`](./models/contact-handle.ts)[]<a id="handles-contacthandlemodelscontact-handlets"></a>

List of the handles for this contact. Each handle object should include `handle` and `source` fields.

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### description: `string`<a id="description-string"></a>

Contact description

##### name: `string`<a id="name-string"></a>

Contact name

##### avatar: `Uint8Array | File | buffer.File`<a id="avatar-uint8array--file--bufferfile"></a>

Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

##### is_spammer: `boolean`<a id="is_spammer-boolean"></a>

Whether or not the contact is marked as a spammer

##### links: `string`[]<a id="links-string"></a>

List of all the links of the contact

##### group_names: `string`[]<a id="group_names-string"></a>

List of all the group names the contact belongs to. It will automatically create missing groups

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.deleteContact`<a id="frontcorecontactsdeletecontact"></a>

Delete a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteContactResponse = await frontcore.contacts.deleteContact({
  contactId: "crd_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.getOneContact`<a id="frontcorecontactsgetonecontact"></a>

Fetch a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOneContactResponse = await frontcore.contacts.getOneContact({
  contactId: "crd_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.listCompanyContacts`<a id="frontcorecontactslistcompanycontacts"></a>

List the contacts of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyContactsResponse =
  await frontcore.contacts.listCompanyContacts({
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places.

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the contacts. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListAccountContactsResponse](./models/accounts-list-account-contacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.listConversationsReverseChronologicalOrder`<a id="frontcorecontactslistconversationsreversechronologicalorder"></a>

List the conversations for a contact in reverse chronological order (newest first). For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationsReverseChronologicalOrderResponse =
  await frontcore.contacts.listConversationsReverseChronologicalOrder({
    contactId: "crd_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The Contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.listTeamContacts`<a id="frontcorecontactslistteamcontacts"></a>

List the contacts of a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamContactsResponse = await frontcore.contacts.listTeamContacts({
  teamId: "tim_123",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places.

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the contacts. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListAccountContactsResponse](./models/accounts-list-account-contacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.listTeammateContacts`<a id="frontcorecontactslistteammatecontacts"></a>

List the contacts of a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateContactsResponse =
  await frontcore.contacts.listTeammateContacts({
    teammateId: "tea_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with the optional properties `updated_after` and `updated_before`, whose value should be a timestamp in seconds with up to 3 decimal places.

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the contacts. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[AccountsListAccountContactsResponse](./models/accounts-list-account-contacts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.mergeContacts`<a id="frontcorecontactsmergecontacts"></a>

Merges the contacts specified into a single contact, deleting the merged-in contacts.
If a target contact ID is supplied, the other contacts will be merged into that one.
Otherwise, some contact in the contact ID list will be treated as the target contact.
Merge conflicts will be resolved in the following ways:
  * name will prioritize manually-updated and non-private contact names
  * descriptions will be concatenated and separated by newlines in order from
    oldest to newest with the (optional) target contact's description first
  * all handles, groups, links, and notes will be preserved
  * other conflicts will use the most recently updated contact's value


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const mergeContactsResponse = await frontcore.contacts.mergeContacts({
  contact_ids: ["contact_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact_ids: `string`[]<a id="contact_ids-string"></a>

Array of all the contact IDs of the contacts to be merged.  If a target contact id is provided and that contact id is not in this array, the length of this array must be between 1 and 49.  If no target contact id is provided or it is contained in this array, the length must be between 2 and 50.

##### target_contact_id: `string`<a id="target_contact_id-string"></a>

Optional contact ID to merge the other contacts into.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/merge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.contacts.updateContact`<a id="frontcorecontactsupdatecontact"></a>

Updates a contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateContactResponse = await frontcore.contacts.updateContact({
  contactId: "crd_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactId: `string`<a id="contactid-string"></a>

The contact ID. Alternatively, you can supply the contact\'s source and handle as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### description: `string`<a id="description-string"></a>

Contact description

##### name: `string`<a id="name-string"></a>

Contact name

##### avatar: `Uint8Array | File | buffer.File`<a id="avatar-uint8array--file--bufferfile"></a>

Binary data of avatar. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

##### is_spammer: `boolean`<a id="is_spammer-boolean"></a>

Whether or not the contact is marked as a spammer

##### links: `string`[]<a id="links-string"></a>

List of all the links of the contact

##### group_names: `string`[]<a id="group_names-string"></a>

List of all the group names the contact belongs to. It will automatically create missing groups

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this contact. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/{contact_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.addFollowers`<a id="frontcoreconversationsaddfollowers"></a>

Adds teammates to the list of followers of a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFollowersResponse = await frontcore.conversations.addFollowers({
  conversationId: "cnv_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

IDs of the teammate to add to the followers list. Alternatively, you can supply the teammates as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/followers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.addLink`<a id="frontcoreconversationsaddlink"></a>

Adds one or more links to a conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLinkResponse = await frontcore.conversations.addLink({
  conversationId: "cnv_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### link_ids: `string`[]<a id="link_ids-string"></a>

Link IDs to add. Either link_ids or link_external_urls must be specified but not both

##### link_external_urls: `string`[]<a id="link_external_urls-string"></a>

Link external URLs to add. Creates links if necessary. Either link_ids or link_external_urls must be specified but not both

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/links` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.addTagsToConversation`<a id="frontcoreconversationsaddtagstoconversation"></a>

Adds one or more tags to a conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTagsToConversationResponse =
  await frontcore.conversations.addTagsToConversation({
    conversationId: "cnv_123",
    tag_ids: ["tag_ids_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag_ids: `string`[]<a id="tag_ids-string"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.createDiscussion`<a id="frontcoreconversationscreatediscussion"></a>

Create a new [conversation](https://dev.frontapp.com/reference/conversations#creating-a-new-conversation) that only supports comments (known as discussions in Front). If you want to create a conversation that supports messages, use the [Create message](https://dev.frontapp.com/reference/post_channels-channel-id-messages) endpoint. If you want to add a comment to an existing conversation, use the [Add comment](https://dev.frontapp.com/reference/post_conversations-conversation-id-comments) endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDiscussionResponse = await frontcore.conversations.createDiscussion(
  {
    type: "discussion",
    subject: "subject_example",
    comment: {
      body: "body_example",
    },
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

Conversation type

##### subject: `string`<a id="subject-string"></a>

Subject of the conversation

##### comment: [`CreateConversationComment`](./models/create-conversation-comment.ts)<a id="comment-createconversationcommentmodelscreate-conversation-commentts"></a>

##### inbox_id: `string`<a id="inbox_id-string"></a>

Inbox ID for the conversation. Either `inbox_id` OR `teammate_ids` must be provided (not both).

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

Teammates to add to the conversation. Either `inbox_id` OR `teammate_ids` must be provided (not both).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.getById`<a id="frontcoreconversationsgetbyid"></a>

Fetch a conversation.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await frontcore.conversations.getById({
  conversationId: "cnv_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.listEvents`<a id="frontcoreconversationslistevents"></a>

List the events that occured for a conversation in reverse chronological order (newest first). The order will respect your company's [bump settings](https://help.front.com/t/y729th/customize-when-conversations-bump-up), which determine when conversations bump to the top.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEventsResponse = await frontcore.conversations.listEvents({
  conversationId: "cnv_123",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListEventsResponse](./models/conversations-list-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.listFollowers`<a id="frontcoreconversationslistfollowers"></a>

List the teammates following a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFollowersResponse = await frontcore.conversations.listFollowers({
  conversationId: "cnv_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListMentionedTeammatesResponse](./models/comments-list-mentioned-teammates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.listInReverseChronologicalOrder`<a id="frontcoreconversationslistinreversechronologicalorder"></a>

List the conversations in the company in reverse chronological order (most recently updated first). The order will respect your company's [bump settings](https://help.front.com/t/y729th/customize-when-conversations-bump-up), which determine when conversations bump to the top. For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInReverseChronologicalOrderResponse =
  await frontcore.conversations.listInReverseChronologicalOrder({
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the conversations. Only supports `date`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.listInboxes`<a id="frontcoreconversationslistinboxes"></a>

List the inboxes in which a conversation is listed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInboxesResponse = await frontcore.conversations.listInboxes({
  conversationId: "cnv_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListInboxesResponse](./models/conversations-list-inboxes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/inboxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.listMessagesInReverseChronologicalOrder`<a id="frontcoreconversationslistmessagesinreversechronologicalorder"></a>

List the messages in a conversation in reverse chronological order (newest first).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMessagesInReverseChronologicalOrderResponse =
  await frontcore.conversations.listMessagesInReverseChronologicalOrder({
    conversationId: "cnv_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the messages. Only supports `created_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[DraftsListConversationDraftsResponse](./models/drafts-list-conversation-drafts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.removeFollowers`<a id="frontcoreconversationsremovefollowers"></a>

Removes teammates from the list of followers of a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFollowersResponse = await frontcore.conversations.removeFollowers({
  conversationId: "cnv_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

IDs of the teammate to remove from the followers list. Alternatively, you can supply the teammates as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/followers` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.removeLinks`<a id="frontcoreconversationsremovelinks"></a>

Removes one or more links to a conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLinksResponse = await frontcore.conversations.removeLinks({
  conversationId: "cnv_123",
  link_ids: ["link_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### link_ids: `string`[]<a id="link_ids-string"></a>

Link IDs to remove.

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/links` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.removeTag`<a id="frontcoreconversationsremovetag"></a>

Removes one or more tags to a conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTagResponse = await frontcore.conversations.removeTag({
  conversationId: "cnv_123",
  tag_ids: ["tag_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tag_ids: `string`[]<a id="tag_ids-string"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/tags` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.searchByQuery`<a id="frontcoreconversationssearchbyquery"></a>

Search for conversations. Response will include a count of total matches and an array of conversations in descending order by last activity.
See the [search syntax documentation](https://dev.frontapp.com/docs/search-1) for usage examples.
**Note:** This endpoint is subject to [proportional rate limiting](https://dev.frontapp.com/docs/rate-limiting#additional-proportional-limiting) at 40% of your company's rate limit.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchByQueryResponse = await frontcore.conversations.searchByQuery({
  query: "inbox:inb_123 tag:tag_345",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

Search query string. See [Search](https://dev.frontapp.com/docs/search-1) topic for usage details.

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsSearchByQueryResponse](./models/conversations-search-by-query-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/search/{query}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.updateAssignee`<a id="frontcoreconversationsupdateassignee"></a>

Assign or unassign a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAssigneeResponse = await frontcore.conversations.updateAssignee({
  conversationId: "cnv_123",
  assignee_id: "assignee_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### assignee_id: `string`<a id="assignee_id-string"></a>

ID of the teammate to assign the conversation to. Set it to null to unassign.

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/assignee` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.updateConversationById`<a id="frontcoreconversationsupdateconversationbyid"></a>

Update a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateConversationByIdResponse =
  await frontcore.conversations.updateConversationById({
    conversationId: "cnv_123",
    status: "archived",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### assignee_id: `string`<a id="assignee_id-string"></a>

ID of the teammate to assign the conversation to. Set it to null to unassign.

##### inbox_id: `string`<a id="inbox_id-string"></a>

ID of the inbox to move the conversation to.

##### status: `string`<a id="status-string"></a>

New status of the conversation

##### tag_ids: `string`[]<a id="tag_ids-string"></a>

List of all the tag IDs replacing the old conversation tags

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this conversation. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.conversations.updateReminders`<a id="frontcoreconversationsupdatereminders"></a>

Snooze or unsnooze a conversation for the provided user.
For private conversations, reminders can only be created and edited through the API for teammates that own the conversation.
For shared conversations, reminders created and edited through the API are shared for all teammates within the shared inbox(es) that the conversation belongs to.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRemindersResponse = await frontcore.conversations.updateReminders({
  conversationId: "cnv_123",
  teammate_id: "teammate_id_example",
  scheduled_at: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_id: `string`<a id="teammate_id-string"></a>

ID of the teammate to create a reminder for. For a private conversation, specify the id of the teammate that owns the conversation. For a shared conversation, use the id of any teammate that has access to the conversation\\\'s shared inbox. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### scheduled_at: `number`<a id="scheduled_at-number"></a>

Timestamp to schedule the reminder for. Set to null to cancel.

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/reminders` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.getList`<a id="frontcorecustomfieldsgetlist"></a>

Lists the custom fields that can be attached to a Link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await frontcore.customFields.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listAccountCustomFields`<a id="frontcorecustomfieldslistaccountcustomfields"></a>

Lists the custom fields that can be attached to an Account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccountCustomFieldsResponse =
  await frontcore.customFields.listAccountCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listContactCustomFields`<a id="frontcorecustomfieldslistcontactcustomfields"></a>

Lists the custom fields that can be attached to a Contact.

> ⚠️ Deprecated endpoint
>
> This endpoint has been deprecated. Please use the fully compatible `GET /contacts/custom_fields` endpoint instead.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContactCustomFieldsResponse =
  await frontcore.customFields.listContactCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listContactFields`<a id="frontcorecustomfieldslistcontactfields"></a>

Lists the custom fields that can be attached to a Contact.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContactFieldsResponse =
  await frontcore.customFields.listContactFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/contacts/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listConversationCustomFields`<a id="frontcorecustomfieldslistconversationcustomfields"></a>

Lists the custom fields that can be attached to a Conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationCustomFieldsResponse =
  await frontcore.customFields.listConversationCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listInboxCustomFields`<a id="frontcorecustomfieldslistinboxcustomfields"></a>

Lists the custom fields that can be attached to an Inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInboxCustomFieldsResponse =
  await frontcore.customFields.listInboxCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.customFields.listTeammateCustomFields`<a id="frontcorecustomfieldslistteammatecustomfields"></a>

Lists the custom fields that can be attached to a Teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateCustomFieldsResponse =
  await frontcore.customFields.listTeammateCustomFields();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsListAccountCustomFieldsResponse](./models/custom-fields-list-account-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/custom_fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.drafts.createDraftReply`<a id="frontcoredraftscreatedraftreply"></a>

Create a new draft as a reply to the last message in the conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDraftReplyResponse = await frontcore.drafts.createDraftReply({
  conversationId: "cnv_123",
  author_id: "author_id_example",
  body: "body_example",
  mode: "private",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate on behalf of whom the draft will be created. Alternatively, you can supply the author ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### body: `string`<a id="body-string"></a>

Body of the draft

##### channel_id: `string`<a id="channel_id-string"></a>

ID of the channel from which the draft will be sent. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### to: `string`[]<a id="to-string"></a>

List of recipient handles who will receive the message once the draft is sent

##### cc: `string`[]<a id="cc-string"></a>

List of recipient handles who will receive a copy of the message once the draft is sent

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a blind copy of the message once the draft is sent

##### subject: `string`<a id="subject-string"></a>

Subject of the draft.

##### quote_body: `string`<a id="quote_body-string"></a>

Body for the quote that the message is referencing. Only available on email channels.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB.

##### mode: `string`<a id="mode-string"></a>

Mode of the draft to create. Can be \\\'private\\\' (draft is visible to the author only) or \\\'shared\\\' (draft is visible to all teammates with access to the conversation).

##### signature_id: `string`<a id="signature_id-string"></a>

ID of the signature to attach to this draft. If null, no signature is attached.

##### should_add_default_signature: `boolean`<a id="should_add_default_signature-boolean"></a>

Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/drafts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.drafts.createNewDraftMessage`<a id="frontcoredraftscreatenewdraftmessage"></a>

Create a draft message which is the first message of a new [conversation](https://dev.frontapp.com/reference/conversations).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDraftMessageResponse =
  await frontcore.drafts.createNewDraftMessage({
    channelId: "cha_123",
    author_id: "author_id_example",
    body: "body_example",
    mode: "private",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate on behalf of whom the draft will be created. Alternatively, you can supply the author ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### body: `string`<a id="body-string"></a>

Body of the draft

##### channelId: `string`<a id="channelid-string"></a>

The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### to: `string`[]<a id="to-string"></a>

List of recipient handles who will receive the message once the draft is sent

##### cc: `string`[]<a id="cc-string"></a>

List of recipient handles who will receive a copy of the message once the draft is sent

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a blind copy of the message once the draft is sent

##### subject: `string`<a id="subject-string"></a>

Subject of the draft.

##### quote_body: `string`<a id="quote_body-string"></a>

Body for the quote that the message is referencing. Only available on email channels.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB.

##### mode: `string`<a id="mode-string"></a>

Mode of the draft to create. Can be \\\'private\\\' (draft is visible to the author only) or \\\'shared\\\' (draft is visible to all teammates with access to the conversation).

##### signature_id: `string`<a id="signature_id-string"></a>

ID of the signature to attach to this draft. If null, no signature is attached.

##### should_add_default_signature: `boolean`<a id="should_add_default_signature-boolean"></a>

Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/drafts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.drafts.deleteDraftMessage`<a id="frontcoredraftsdeletedraftmessage"></a>

Delete a draft message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDraftMessageResponse = await frontcore.drafts.deleteDraftMessage({
  draftId: "msg_123",
  version: "version_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### version: `string`<a id="version-string"></a>

Version of the draft

##### draftId: `string`<a id="draftid-string"></a>

The draft ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/drafts/{draft_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.drafts.editMessage`<a id="frontcoredraftseditmessage"></a>

Edit a draft message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const editMessageResponse = await frontcore.drafts.editMessage({
  messageId: "msg_123",
  author_id: "author_id_example",
  body: "body_example",
  mode: "shared",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate on behalf of whom the draft will be created. Alternatively, you can supply the author ID as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### body: `string`<a id="body-string"></a>

Body of the draft

##### channel_id: `string`<a id="channel_id-string"></a>

ID of the channel from which the draft will be sent. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### messageId: `string`<a id="messageid-string"></a>

The draft ID

##### to: `string`[]<a id="to-string"></a>

List of recipient handles who will receive the message once the draft is sent

##### cc: `string`[]<a id="cc-string"></a>

List of recipient handles who will receive a copy of the message once the draft is sent

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a blind copy of the message once the draft is sent

##### subject: `string`<a id="subject-string"></a>

Subject of the draft.

##### quote_body: `string`<a id="quote_body-string"></a>

Body for the quote that the message is referencing. Only available on email channels.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB.

##### mode: `string`<a id="mode-string"></a>

Mode of the draft to update. Can only be \\\'shared\\\' (draft is visible to all teammates with access to the conversation).

##### signature_id: `string`<a id="signature_id-string"></a>

ID of the signature to attach to this draft. If null, no signature is attached.

##### should_add_default_signature: `boolean`<a id="should_add_default_signature-boolean"></a>

Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;

##### version: `string`<a id="version-string"></a>

Version of the draft

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/drafts/{message_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.drafts.listConversationDrafts`<a id="frontcoredraftslistconversationdrafts"></a>

List the drafts in a conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationDraftsResponse =
  await frontcore.drafts.listConversationDrafts({
    conversationId: "cnv_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

#### 🔄 Return<a id="🔄-return"></a>

[DraftsListConversationDraftsResponse](./models/drafts-list-conversation-drafts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/drafts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.events.getEvent`<a id="frontcoreeventsgetevent"></a>

Fetch an event.
Refer to the [Events](https://dev.frontapp.com/reference/events) topic for more information, including sorting and filtering.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventResponse = await frontcore.events.getEvent({
  eventId: "evt_55c8c149",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### eventId: `string`<a id="eventid-string"></a>

The event ID

#### 🔄 Return<a id="🔄-return"></a>

[EventResponse](./models/event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events/{event_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.events.listDetailedInboxEvents`<a id="frontcoreeventslistdetailedinboxevents"></a>

Lists all the detailed events which occured in the inboxes of the company ordered in reverse chronological order (newest first).
Refer to the [Events](https://dev.frontapp.com/reference/events) topic for more information, including sorting and filtering.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDetailedInboxEventsResponse =
  await frontcore.events.listDetailedInboxEvents({
    limit: 15,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with optional properties `before`, `after`, or `types`. `before` and `after` should be a timestamp in seconds with up to 3 decimal places. `types` should be a list of [event types](https://dev.frontapp.com/reference/events).

##### limit: `number`<a id="limit-number"></a>

Max number of results per page (max 15)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the events. Only supports `created_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListEventsResponse](./models/conversations-list-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.addTeammateAccess`<a id="frontcoreinboxesaddteammateaccess"></a>

Give access to one or more teammates to an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTeammateAccessResponse = await frontcore.inboxes.addTeammateAccess({
  inboxId: "inb_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/teammates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.createDefaultTeamInbox`<a id="frontcoreinboxescreatedefaultteaminbox"></a>

Create an inbox in the default team (workspace). The default team will be the oldest team created that still exists at the time of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDefaultTeamInboxResponse =
  await frontcore.inboxes.createDefaultTeamInbox({
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the inbox

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

An array of teammate IDs that should have access to the inbox. Alternatively, you can supply teammate emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.createTeamInbox`<a id="frontcoreinboxescreateteaminbox"></a>

Create an inbox for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamInboxResponse = await frontcore.inboxes.createTeamInbox({
  teamId: "tim_123",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the inbox

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

An array of teammate IDs that should have access to the inbox. Alternatively, you can supply teammate emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/inboxes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.getInbox`<a id="frontcoreinboxesgetinbox"></a>

Fetch an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboxResponse = await frontcore.inboxes.getInbox({
  inboxId: "inb_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.listChannels`<a id="frontcoreinboxeslistchannels"></a>

List the channels in an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChannelsResponse = await frontcore.inboxes.listChannels({
  inboxId: "inb_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

#### 🔄 Return<a id="🔄-return"></a>

[ChannelsListResponse](./models/channels-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/channels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.listConversationsInbox`<a id="frontcoreinboxeslistconversationsinbox"></a>

List the conversations in an inbox. For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationsInboxResponse =
  await frontcore.inboxes.listConversationsInbox({
    inboxId: "inb_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.listInboxes`<a id="frontcoreinboxeslistinboxes"></a>

List the inboxes of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInboxesResponse = await frontcore.inboxes.listInboxes();
```

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListInboxesResponse](./models/conversations-list-inboxes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.listTeamInboxes`<a id="frontcoreinboxeslistteaminboxes"></a>

List the inboxes belonging to a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamInboxesResponse = await frontcore.inboxes.listTeamInboxes({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListInboxesResponse](./models/conversations-list-inboxes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/inboxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.listTeammatesAccess`<a id="frontcoreinboxeslistteammatesaccess"></a>

List the teammates with access to an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammatesAccessResponse = await frontcore.inboxes.listTeammatesAccess(
  {
    inboxId: "inb_123",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListMentionedTeammatesResponse](./models/comments-list-mentioned-teammates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/teammates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.inboxes.removeAccess`<a id="frontcoreinboxesremoveaccess"></a>

Remove access of one or more teammates from an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAccessResponse = await frontcore.inboxes.removeAccess({
  inboxId: "inb_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/teammates` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.createArticleDefaultLocale`<a id="frontcoreknowledgebasescreatearticledefaultlocale"></a>

Creates an article in a knowledge base in the default locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createArticleDefaultLocaleResponse =
  await frontcore.knowledgeBases.createArticleDefaultLocale({
    knowledgeBaseId: "knb_123",
    status: "draft",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to create the article in

##### category_id: `string`<a id="category_id-string"></a>

ID of the category this article belongs to

##### author_id: `string`<a id="author_id-string"></a>

Teammate ID of the article author

##### subject: `string`<a id="subject-string"></a>

Subject of the article

##### content: `string`<a id="content-string"></a>

HTML content of the article

##### status: `string`<a id="status-string"></a>

Article status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/articles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.createArticleLocale`<a id="frontcoreknowledgebasescreatearticlelocale"></a>

Create an article for a given locale in a knowledge base.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createArticleLocaleResponse =
  await frontcore.knowledgeBases.createArticleLocale({
    knowledgeBaseId: "knb_123",
    locale: "en",
    status: "draft",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to create the article in

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the article\'s content

##### category_id: `string`<a id="category_id-string"></a>

ID of the category this article belongs to

##### author_id: `string`<a id="author_id-string"></a>

Teammate ID of the article author

##### subject: `string`<a id="subject-string"></a>

Subject of the article

##### content: `string`<a id="content-string"></a>

HTML content of the article

##### status: `string`<a id="status-string"></a>

Article status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/locales/{locale}/articles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.createCategoryDefaultLocale`<a id="frontcoreknowledgebasescreatecategorydefaultlocale"></a>

Creates a knowledge base category in the default locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCategoryDefaultLocaleResponse =
  await frontcore.knowledgeBases.createCategoryDefaultLocale({
    knowledgeBaseId: "knb_123",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the knowledge base category

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to create the category in

##### description: `string`<a id="description-string"></a>

Description of the knowledge base category

##### parent_category_id: `string`<a id="parent_category_id-string"></a>

ID of the parent category

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.createCategoryInLocale`<a id="frontcoreknowledgebasescreatecategoryinlocale"></a>

Creates a knowledge base category for a given locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCategoryInLocaleResponse =
  await frontcore.knowledgeBases.createCategoryInLocale({
    knowledgeBaseId: "knb_123",
    locale: "en",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the knowledge base category

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to create the category in

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the category\'s content

##### description: `string`<a id="description-string"></a>

Description of the knowledge base category

##### parent_category_id: `string`<a id="parent_category_id-string"></a>

ID of the parent category

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/locales/{locale}/categories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.createNewKnowledgeBase`<a id="frontcoreknowledgebasescreatenewknowledgebase"></a>

Creates a knowledge base.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewKnowledgeBaseResponse =
  await frontcore.knowledgeBases.createNewKnowledgeBase({
    name: "name_example",
    type: "internal",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the knowledge base

##### type: `string`<a id="type-string"></a>

Determines if the knowledge base is publicly available or private only to your company

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.deleteArticle`<a id="frontcoreknowledgebasesdeletearticle"></a>

Deletes an article and all its content and translations.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteArticleResponse = await frontcore.knowledgeBases.deleteArticle({
  articleId: "kba_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.deleteCategory`<a id="frontcoreknowledgebasesdeletecategory"></a>

Deletes a knowledge base category.

> ⚠️ Warning
>
> When a category is deleted, all articles in the category are also deleted.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCategoryResponse = await frontcore.knowledgeBases.deleteCategory({
  categoryId: "kbc_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.downloadAttachmentArticle`<a id="frontcoreknowledgebasesdownloadattachmentarticle"></a>

Downloads the attachment from an article.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadAttachmentArticleResponse =
  await frontcore.knowledgeBases.downloadAttachmentArticle({
    articleId: "kba_123",
    attachmentId: "attachmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article

##### attachmentId: `string`<a id="attachmentid-string"></a>

The ID of the file to download

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}/download/{attachment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getArticleById`<a id="frontcoreknowledgebasesgetarticlebyid"></a>

Fetches a knowledge base article.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getArticleByIdResponse = await frontcore.knowledgeBases.getArticleById({
  articleId: "kba_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getArticleContent`<a id="frontcoreknowledgebasesgetarticlecontent"></a>

Fetches a knowledge base article with content for a given locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getArticleContentResponse =
  await frontcore.knowledgeBases.getArticleContent({
    articleId: "kba_123",
    locale: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to fetch

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}/locales/{locale}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getCategory`<a id="frontcoreknowledgebasesgetcategory"></a>

Fetches a knowledge base category.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoryResponse = await frontcore.knowledgeBases.getCategory({
  categoryId: "kbc_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getCategoryContentDefaultLocale`<a id="frontcoreknowledgebasesgetcategorycontentdefaultlocale"></a>

Fetches a knowledge base category with content in the default locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoryContentDefaultLocaleResponse =
  await frontcore.knowledgeBases.getCategoryContentDefaultLocale({
    categoryId: "kbc_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getCategoryContentLocale`<a id="frontcoreknowledgebasesgetcategorycontentlocale"></a>

Fetches a knowledge base category with content for a given locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoryContentLocaleResponse =
  await frontcore.knowledgeBases.getCategoryContentLocale({
    categoryId: "kbc_123",
    locale: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to fetch

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}/locales/{locale}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getContentDefaultLocale`<a id="frontcoreknowledgebasesgetcontentdefaultlocale"></a>

Fetches a knowledge base article with content in the default locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentDefaultLocaleResponse =
  await frontcore.knowledgeBases.getContentDefaultLocale({
    articleId: "kba_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getContentDefaultLocale_0`<a id="frontcoreknowledgebasesgetcontentdefaultlocale_0"></a>

Fetches a knowledge base with its content in the default locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentDefaultLocale_0Response =
  await frontcore.knowledgeBases.getContentDefaultLocale_0({
    knowledgeBaseId: "knb_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getKnowledgeBase`<a id="frontcoreknowledgebasesgetknowledgebase"></a>

Fetches a knowledge base.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKnowledgeBaseResponse =
  await frontcore.knowledgeBases.getKnowledgeBase({
    knowledgeBaseId: "knb_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.getKnowledgeBaseContentInLocale`<a id="frontcoreknowledgebasesgetknowledgebasecontentinlocale"></a>

Fetches a knowledge base with its content for a given locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKnowledgeBaseContentInLocaleResponse =
  await frontcore.knowledgeBases.getKnowledgeBaseContentInLocale({
    knowledgeBaseId: "knb_123",
    locale: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to fetch

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the content to fetch

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/locales/{locale}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.listArticlesInBase`<a id="frontcoreknowledgebaseslistarticlesinbase"></a>

List articles in a knowledge base

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listArticlesInBaseResponse =
  await frontcore.knowledgeBases.listArticlesInBase({
    knowledgeBaseId: "knb_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[KnowledgeBasesListArticlesInCategoryResponse](./models/knowledge-bases-list-articles-in-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/articles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.listArticlesInCategory`<a id="frontcoreknowledgebaseslistarticlesincategory"></a>

List articles in a category.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listArticlesInCategoryResponse =
  await frontcore.knowledgeBases.listArticlesInCategory({
    categoryId: "kbc_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[KnowledgeBasesListArticlesInCategoryResponse](./models/knowledge-bases-list-articles-in-category-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}/articles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.listCategoriesInBase`<a id="frontcoreknowledgebaseslistcategoriesinbase"></a>

List categories in a knowledge base.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCategoriesInBaseResponse =
  await frontcore.knowledgeBases.listCategoriesInBase({
    knowledgeBaseId: "knb_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[KnowledgeBasesListCategoriesInBaseResponse](./models/knowledge-bases-list-categories-in-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.listKnowledgeBases`<a id="frontcoreknowledgebaseslistknowledgebases"></a>

List the knowledge bases of the company.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listKnowledgeBasesResponse =
  await frontcore.knowledgeBases.listKnowledgeBases();
```

#### 🔄 Return<a id="🔄-return"></a>

[KnowledgeBasesListKnowledgeBasesResponse](./models/knowledge-bases-list-knowledge-bases-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateArticleContentDefaultLocale`<a id="frontcoreknowledgebasesupdatearticlecontentdefaultlocale"></a>

Updates an article's content in the default locale

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateArticleContentDefaultLocaleResponse =
  await frontcore.knowledgeBases.updateArticleContentDefaultLocale({
    articleId: "kba_123",
    status: "draft",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to update

##### author_id: `string`<a id="author_id-string"></a>

Teammate ID of the article author

##### subject: `string`<a id="subject-string"></a>

Subject of the article

##### content: `string`<a id="content-string"></a>

HTML content of the article

##### status: `string`<a id="status-string"></a>

Article status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateArticleContentLocale`<a id="frontcoreknowledgebasesupdatearticlecontentlocale"></a>

Updates an article's content for a given locale.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateArticleContentLocaleResponse =
  await frontcore.knowledgeBases.updateArticleContentLocale({
    articleId: "kba_123",
    locale: "en",
    status: "draft",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### articleId: `string`<a id="articleid-string"></a>

The ID of the article to update

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content

##### author_id: `string`<a id="author_id-string"></a>

Teammate ID of the article author

##### subject: `string`<a id="subject-string"></a>

Subject of the article

##### content: `string`<a id="content-string"></a>

HTML content of the article

##### status: `string`<a id="status-string"></a>

Article status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_articles/{article_id}/locales/{locale}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateCategoryContentLocale`<a id="frontcoreknowledgebasesupdatecategorycontentlocale"></a>

Updates a knowledge base category for a given locale. Will republish the knowledge base if the knowledge base is currently published.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryContentLocaleResponse =
  await frontcore.knowledgeBases.updateCategoryContentLocale({
    categoryId: "kbc_123",
    locale: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to update

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content

##### description: `string`<a id="description-string"></a>

Description of the knowledge base category

##### name: `string`<a id="name-string"></a>

Name of the knowledge base category

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}/locales/{locale}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateCategoryDefaultLocale`<a id="frontcoreknowledgebasesupdatecategorydefaultlocale"></a>

Updates a knowledge base category in the default locale. Will republish the knowledge base if the knowledge base is currently published.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCategoryDefaultLocaleResponse =
  await frontcore.knowledgeBases.updateCategoryDefaultLocale({
    categoryId: "kbc_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### categoryId: `string`<a id="categoryid-string"></a>

The ID of the category to update

##### description: `string`<a id="description-string"></a>

Description of the knowledge base category

##### name: `string`<a id="name-string"></a>

Name of the knowledge base category

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_base_categories/{category_id}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateDefaultKnowledgeBase`<a id="frontcoreknowledgebasesupdatedefaultknowledgebase"></a>

Updates a knowledge base in the default locale. Will republish the knowledge base if the knowledge base is currently published.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDefaultKnowledgeBaseResponse =
  await frontcore.knowledgeBases.updateDefaultKnowledgeBase({
    knowledgeBaseId: "knb_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to update

##### name: `string`<a id="name-string"></a>

Name of the knowledge base

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.knowledgeBases.updateKnowledgeBaseLocale`<a id="frontcoreknowledgebasesupdateknowledgebaselocale"></a>

Updates a knowledge base for a given locale. Will republish the knowledge base if the knowledge base is currently published.

**Note**: You must use an API token to authenticate. OAuth is not supported at this time.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateKnowledgeBaseLocaleResponse =
  await frontcore.knowledgeBases.updateKnowledgeBaseLocale({
    knowledgeBaseId: "knb_123",
    locale: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### knowledgeBaseId: `string`<a id="knowledgebaseid-string"></a>

The ID of the knowledge base to update

##### locale: `string`<a id="locale-string"></a>

The [locale](https://dev.frontapp.com/reference/knowledge-bases#locales) of the updated content

##### name: `string`<a id="name-string"></a>

Name of the knowledge base

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/knowledge_bases/{knowledge_base_id}/locales/{locale}/content` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.links.createLink`<a id="frontcorelinkscreatelink"></a>

Create a link. You must supply either `pattern` or `external_url` in the request, but not both (`pattern` is for dynamic objects while `external_url` is for standard links). If `pattern` is provided, the API call updates the dynamic objects matching the exact pattern. If the link is resolved to an installed links integration, any name retrieved from the integration will override the provided name in the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createLinkResponse = await frontcore.links.createLink({
  pattern: "ORDER-123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the link. If none is specified, the external_url is used as a default

##### external_url: `string`<a id="external_url-string"></a>

Underlying identifying url of the link

##### pattern: `string`<a id="pattern-string"></a>

The string that dynamic object configurations will match on to update a specific dynamic object. For example, if you\\\'ve configured a dynamic object to match on ORDER-{Digits}, and you want to specifically update the dynamic objects for ORDER-777 to retrieve the latest information from external systems, send \\\"ORDER-777\\\". Repeat for other specific identifiers, such as \\\"ORDER-435\\\".

#### 🔄 Return<a id="🔄-return"></a>

[LinkResponse](./models/link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.links.getLink`<a id="frontcorelinksgetlink"></a>

Fetch a link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLinkResponse = await frontcore.links.getLink({
  linkId: "top_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### linkId: `string`<a id="linkid-string"></a>

The link ID

#### 🔄 Return<a id="🔄-return"></a>

[LinkResponse](./models/link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links/{link_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.links.listByIdAndType`<a id="frontcorelinkslistbyidandtype"></a>

List the links of the company paginated by id. Allows filtering by link type via the q.types param.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByIdAndTypeResponse = await frontcore.links.listByIdAndType({
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `types`, whose value should be a list of link types (examples - `web`, `jira`, `asana` ).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the links. Only supports `id`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[LinksListByIdAndTypeResponse](./models/links-list-by-id-and-type-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.links.listConversations`<a id="frontcorelinkslistconversations"></a>

List the conversations linked to a specific link. For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConversationsResponse = await frontcore.links.listConversations({
  linkId: "top_123",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### linkId: `string`<a id="linkid-string"></a>

The Link ID

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the conversations. Only supports `date`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links/{link_id}/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.links.updateLink`<a id="frontcorelinksupdatelink"></a>

Update a link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLinkResponse = await frontcore.links.updateLink({
  linkId: "top_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### linkId: `string`<a id="linkid-string"></a>

The link ID

##### name: `string`<a id="name-string"></a>

Name of the link

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/links/{link_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.createChildFolder`<a id="frontcoremessagetemplatefolderscreatechildfolder"></a>

Create a new message template folder as a child of the given folder

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChildFolderResponse =
  await frontcore.messageTemplateFolders.createChildFolder({
    messageTemplateFolderId: "rsf_123",
    name: "PTO templates",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template folder

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The parent message template folder ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}/message_template_folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.createNewFolder`<a id="frontcoremessagetemplatefolderscreatenewfolder"></a>

Create a new message template folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFolderResponse =
  await frontcore.messageTemplateFolders.createNewFolder({
    name: "PTO templates",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template folder

##### parent_folder_id: `string`<a id="parent_folder_id-string"></a>

ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.createNewFolder_0`<a id="frontcoremessagetemplatefolderscreatenewfolder_0"></a>

Create a new message template folder belonging to the requested teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFolder_0Response =
  await frontcore.messageTemplateFolders.createNewFolder_0({
    teammateId: "tea_123",
    name: "PTO templates",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template folder

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### parent_folder_id: `string`<a id="parent_folder_id-string"></a>

ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/message_template_folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.createNewFolder_1`<a id="frontcoremessagetemplatefolderscreatenewfolder_1"></a>

Create a new message template folder belonging to the requested team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewFolder_1Response =
  await frontcore.messageTemplateFolders.createNewFolder_1({
    teamId: "tim_55c8c149",
    name: "PTO templates",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template folder

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### parent_folder_id: `string`<a id="parent_folder_id-string"></a>

ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/message_template_folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.deleteFolder`<a id="frontcoremessagetemplatefoldersdeletefolder"></a>

Delete a message template folder and child folders/templates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderResponse =
  await frontcore.messageTemplateFolders.deleteFolder({
    messageTemplateFolderId: "rsf_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The message template folder id

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersDeleteFolderResponse](./models/message-template-folders-delete-folder-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.getChildFolders`<a id="frontcoremessagetemplatefoldersgetchildfolders"></a>

Fetch the child message templates folders of a message template folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChildFoldersResponse =
  await frontcore.messageTemplateFolders.getChildFolders({
    messageTemplateFolderId: "rsf_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The message template folder ID

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersListFoldersResponse](./models/message-template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}/message_template_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.getFolder`<a id="frontcoremessagetemplatefoldersgetfolder"></a>

Fetch a message template folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderResponse = await frontcore.messageTemplateFolders.getFolder({
  messageTemplateFolderId: "rsf_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The message template folder ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.listFolders`<a id="frontcoremessagetemplatefolderslistfolders"></a>

List the message template folders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFoldersResponse = await frontcore.messageTemplateFolders.listFolders({
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message template folders. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersListFoldersResponse](./models/message-template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.listTeamFolders`<a id="frontcoremessagetemplatefolderslistteamfolders"></a>

List the message template folders belonging to the requested team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamFoldersResponse =
  await frontcore.messageTemplateFolders.listTeamFolders({
    teamId: "tim_55c8c149",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message template folders. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersListFoldersResponse](./models/message-template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/message_template_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.listTeammateFolders`<a id="frontcoremessagetemplatefolderslistteammatefolders"></a>

List the message template folders belonging to the requested teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateFoldersResponse =
  await frontcore.messageTemplateFolders.listTeammateFolders({
    teammateId: "tea_123",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message template folders. Either `created_at` or `updated_at`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersListFoldersResponse](./models/message-template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/message_template_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplateFolders.updateFolder`<a id="frontcoremessagetemplatefoldersupdatefolder"></a>

Update message template folder

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFolderResponse =
  await frontcore.messageTemplateFolders.updateFolder({
    messageTemplateFolderId: "rsf_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The message template folder ID

##### name: `string`<a id="name-string"></a>

Name of the message template folder

##### parent_folder_id: `string`<a id="parent_folder_id-string"></a>

ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.addNewTeammateTemplate`<a id="frontcoremessagetemplatesaddnewteammatetemplate"></a>

Create a new message template for the given teammate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewTeammateTemplateResponse =
  await frontcore.messageTemplates.addNewTeammateTemplate({
    teammateId: "tea_123",
    name: "Out of Office",
    subject: "Out of Office",
    body: "Sorry, I'm OOO until October 25th.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template

##### body: `string`<a id="body-string"></a>

Body of the message template

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### subject: `string`<a id="subject-string"></a>

Subject of the message template. If not set, the name will be used to populate the subject.

##### folder_id: `string`<a id="folder_id-string"></a>

ID of the message template folder to place this message template in

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/message_templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.createChildTemplate`<a id="frontcoremessagetemplatescreatechildtemplate"></a>

Create a new message template as a child of the given folder

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChildTemplateResponse =
  await frontcore.messageTemplates.createChildTemplate({
    messageTemplateFolderId: "rsf_123",
    name: "Out of Office",
    subject: "Out of Office",
    body: "Sorry, I'm OOO until October 25th.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template

##### body: `string`<a id="body-string"></a>

Body of the message template

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The parent message template folder ID

##### subject: `string`<a id="subject-string"></a>

Subject of the message template. If not set, the name will be used to populate the subject.

##### inbox_ids: `string`[]<a id="inbox_ids-string"></a>

The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}/message_templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.createNewTemplate`<a id="frontcoremessagetemplatescreatenewtemplate"></a>

Create a new message template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTemplateResponse =
  await frontcore.messageTemplates.createNewTemplate({
    name: "Out of Office",
    subject: "Out of Office",
    body: "Sorry, I'm OOO until October 25th.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template

##### body: `string`<a id="body-string"></a>

Body of the message template

##### subject: `string`<a id="subject-string"></a>

Subject of the message template. If not set, the name will be used to populate the subject.

##### folder_id: `string`<a id="folder_id-string"></a>

ID of the message template folder to place this message template in

##### inbox_ids: `string`[]<a id="inbox_ids-string"></a>

The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.createTeamTemplate`<a id="frontcoremessagetemplatescreateteamtemplate"></a>

Create a new message template for the given team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamTemplateResponse =
  await frontcore.messageTemplates.createTeamTemplate({
    teamId: "tim_55c8c149",
    name: "Out of Office",
    subject: "Out of Office",
    body: "Sorry, I'm OOO until October 25th.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the message template

##### body: `string`<a id="body-string"></a>

Body of the message template

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### subject: `string`<a id="subject-string"></a>

Subject of the message template. If not set, the name will be used to populate the subject.

##### folder_id: `string`<a id="folder_id-string"></a>

ID of the message template folder to place this message template in

##### inbox_ids: `string`[]<a id="inbox_ids-string"></a>

The specific inboxes this template is available in. If unspecified or null, then it will be available in all inboxes. Array should be non-empty.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/message_templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.deleteTemplate`<a id="frontcoremessagetemplatesdeletetemplate"></a>

Delete a message template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTemplateResponse = await frontcore.messageTemplates.deleteTemplate({
  messageTemplateId: "rsp_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateId: `string`<a id="messagetemplateid-string"></a>

The message template ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_templates/{message_template_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.getChildTemplates`<a id="frontcoremessagetemplatesgetchildtemplates"></a>

Fetch the child message templates of a message template folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getChildTemplatesResponse =
  await frontcore.messageTemplates.getChildTemplates({
    messageTemplateFolderId: "rsf_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateFolderId: `string`<a id="messagetemplatefolderid-string"></a>

The message template folder ID

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplateFoldersListFoldersResponse](./models/message-template-folders-list-folders-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_template_folders/{message_template_folder_id}/message_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.getTemplateById`<a id="frontcoremessagetemplatesgettemplatebyid"></a>

Fetch a message template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTemplateByIdResponse =
  await frontcore.messageTemplates.getTemplateById({
    messageTemplateId: "rsp_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateId: `string`<a id="messagetemplateid-string"></a>

The message template ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_templates/{message_template_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.list`<a id="frontcoremessagetemplateslist"></a>

List the message templates.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await frontcore.messageTemplates.list({
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplatesListResponse](./models/message-templates-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.listTeamTemplates`<a id="frontcoremessagetemplateslistteamtemplates"></a>

List the message templates belonging to the requested team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamTemplatesResponse =
  await frontcore.messageTemplates.listTeamTemplates({
    teamId: "tim_55c8c149",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplatesListResponse](./models/message-templates-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/message_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.listTeammateTemplates`<a id="frontcoremessagetemplateslistteammatetemplates"></a>

List the message templates belonging to the requested teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateTemplatesResponse =
  await frontcore.messageTemplates.listTeammateTemplates({
    teammateId: "tea_123",
    sortOrder: "asc",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the message templates. Either `created_at`, `updated_at`, or `sort_order`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[MessageTemplatesListResponse](./models/message-templates-list-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/message_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messageTemplates.updateTemplateById`<a id="frontcoremessagetemplatesupdatetemplatebyid"></a>

Update message template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTemplateByIdResponse =
  await frontcore.messageTemplates.updateTemplateById({
    messageTemplateId: "rsp_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageTemplateId: `string`<a id="messagetemplateid-string"></a>

The message template ID

##### name: `string`<a id="name-string"></a>

Name of the message template

##### subject: `string`<a id="subject-string"></a>

Subject of the message template

##### body: `string`<a id="body-string"></a>

Body of the message template

##### folder_id: `string`<a id="folder_id-string"></a>

ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.

##### inbox_ids: `string`[]<a id="inbox_ids-string"></a>

The specific inboxes this template is available in. If null, then it will be available in all inboxes. Array should be non-empty. If unspecified, will retain previous value.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1). Max 25 MB. Specify an empty array to delete all attachments from a message template. If unspecified, it will retain previous value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/message_templates/{message_template_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.createMessageReply`<a id="frontcoremessagescreatemessagereply"></a>

Reply to a conversation by sending a message and appending it to the conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMessageReplyResponse = await frontcore.messages.createMessageReply({
  conversationId: "cnv_123",
  body: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### body: `string`<a id="body-string"></a>

Body of the message

##### conversationId: `string`<a id="conversationid-string"></a>

The conversation ID

##### to: `string`[]<a id="to-string"></a>

List of the recipient handles who will receive this message

##### cc: `string`[]<a id="cc-string"></a>

List of the recipient handles who will receive a copy of this message

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a copy of this message

##### sender_name: `string`<a id="sender_name-string"></a>

Name used for the sender info of the message

##### subject: `string`<a id="subject-string"></a>

Subject of the message for email message

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate on behalf of whom the answer is sent

##### channel_id: `string`<a id="channel_id-string"></a>

Channel ID the message is sent from

##### text: `string`<a id="text-string"></a>

Text version of the body for email messages

##### quote_body: `string`<a id="quote_body-string"></a>

Body for the quote that the message is referencing. Only available on email channels.

##### options: [`OutboundReplyMessageOptions`](./models/outbound-reply-message-options.ts)<a id="options-outboundreplymessageoptionsmodelsoutbound-reply-message-optionsts"></a>

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

##### signature_id: `string`<a id="signature_id-string"></a>

ID of the signature to attach to this draft. If null, no signature is attached.

##### should_add_default_signature: `boolean`<a id="should_add_default_signature-boolean"></a>

Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/conversations/{conversation_id}/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.createNewMessage`<a id="frontcoremessagescreatenewmessage"></a>

Send a new message from a channel. This is one of the ways to create a new [conversation](https://dev.frontapp.com/reference/conversations#creating-a-new-conversation). The new conversation will support both messages and comments (discussions).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMessageResponse = await frontcore.messages.createNewMessage({
  channelId: "cha_123",
  to: ["to_example"],
  body: "body_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### to: `string`[]<a id="to-string"></a>

List of the recipient handles who will receive this message

##### body: `string`<a id="body-string"></a>

Body of the message

##### channelId: `string`<a id="channelid-string"></a>

The sending channel ID. Alternatively, you can supply the sending channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### cc: `string`[]<a id="cc-string"></a>

List of the recipient handles who will receive a copy of this message

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a blind copy of this message

##### sender_name: `string`<a id="sender_name-string"></a>

Name used for the sender info of the message

##### subject: `string`<a id="subject-string"></a>

Subject of the message for email message

##### author_id: `string`<a id="author_id-string"></a>

ID of the teammate on behalf of whom the answer is sent

##### text: `string`<a id="text-string"></a>

Text version of the body for email messages

##### options: [`OutboundMessageOptions`](./models/outbound-message-options.ts)<a id="options-outboundmessageoptionsmodelsoutbound-message-optionsts"></a>

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1). Max 25 MB.

##### signature_id: `string`<a id="signature_id-string"></a>

ID of the signature to attach to this draft. If null, no signature is attached.

##### should_add_default_signature: `boolean`<a id="should_add_default_signature-boolean"></a>

Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.getMessageById`<a id="frontcoremessagesgetmessagebyid"></a>

Fetch a message.

> ℹ️ The HTTP Header `Accept` can be used to request the message in a different format.
> By default, Front will return the documented JSON response. By requesting `message/rfc822`, the response will contain the message in the EML format (for email messages only).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageByIdResponse = await frontcore.messages.getMessageById({
  messageId: "msg_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

The message ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{message_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.getMessageSeenStatus`<a id="frontcoremessagesgetmessageseenstatus"></a>

Get the seen receipts for the given message. If no seen-by information is available, there will be a single entry for the first time the message was seen by any recipient. If seen-by information is available, there will be an entry for each recipient who has seen the message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageSeenStatusResponse =
  await frontcore.messages.getMessageSeenStatus({
    messageId: "msg_123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

The message ID

#### 🔄 Return<a id="🔄-return"></a>

[MessagesGetMessageSeenStatusResponse](./models/messages-get-message-seen-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{message_id}/seen` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.importNewInboxMessage`<a id="frontcoremessagesimportnewinboxmessage"></a>

Import a new message in an inbox.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const importNewInboxMessageResponse =
  await frontcore.messages.importNewInboxMessage({
    inboxId: "inb_123",
    sender: {
      handle: "handle_example",
    },
    to: ["to_example"],
    body: "body_example",
    body_format: "markdown",
    external_id: "external_id_example",
    created_at: 1,
    type: "email",
    metadata: {
      is_inbound: true,
      should_skip_rules: true,
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sender: [`ImportMessageSender`](./models/import-message-sender.ts)<a id="sender-importmessagesendermodelsimport-message-senderts"></a>

##### to: `string`[]<a id="to-string"></a>

List of the recipient handles who will receive this message

##### body: `string`<a id="body-string"></a>

Body of the message

##### external_id: `string`<a id="external_id-string"></a>

External identifier of the message. Front won\\\'t import two messages with the same external ID.

##### created_at: `number`<a id="created_at-number"></a>

Date at which the message as been sent or received.

##### metadata: [`ImportMessageMetadata`](./models/import-message-metadata.ts)<a id="metadata-importmessagemetadatamodelsimport-message-metadatats"></a>

##### inboxId: `string`<a id="inboxid-string"></a>

The Inbox ID

##### tags: `string`[]<a id="tags-string"></a>

List of tag names to add to the conversation

##### cc: `string`[]<a id="cc-string"></a>

List of the recipient handles who will receive a copy of this message

##### bcc: `string`[]<a id="bcc-string"></a>

List of the recipient handles who will receive a blind copy of this message

##### subject: `string`<a id="subject-string"></a>

Subject of the message

##### body_format: `string`<a id="body_format-string"></a>

Format of the message body. Can be `markdown` (default) or `html`, and can only be specified for `email` type.

##### type: `string`<a id="type-string"></a>

Type of the message to import. Default is `email`.

##### assignee_id: `string`<a id="assignee_id-string"></a>

ID of the teammate who will be assigned to the conversation.

##### conversation_id: `string`<a id="conversation_id-string"></a>

If supplied, Front will thread this message into conversation with the given ID. Note that including this parameter nullifies the `thread_ref` parameter _completely_.

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

#### 🔄 Return<a id="🔄-return"></a>

[MessagesReceiveCustomMessageResponse](./models/messages-receive-custom-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inboxes/{inbox_id}/imported_messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.markMessageSeen`<a id="frontcoremessagesmarkmessageseen"></a>

Mark an outbound message from Front as seen. Note, the message seen route should only be called in response to an actual end-user's message-seen action. In accordance with this behavior, the route is rate limited to 10 requests per hour. The request body should send an empty object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markMessageSeenResponse = await frontcore.messages.markMessageSeen({
  messageId: "msg_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

The message ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messages/{message_id}/seen` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.messages.receiveCustomMessage`<a id="frontcoremessagesreceivecustommessage"></a>

Receive a custom message in Front. This endpoint is available for custom channels **ONLY**.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const receiveCustomMessageResponse =
  await frontcore.messages.receiveCustomMessage({
    channelId: "cha_123",
    sender: {
      handle: "handle_example",
    },
    body: "body_example",
    body_format: "markdown",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sender: [`CustomMessageSender`](./models/custom-message-sender.ts)<a id="sender-custommessagesendermodelscustom-message-senderts"></a>

##### body: `string`<a id="body-string"></a>

Body of the message

##### channelId: `string`<a id="channelid-string"></a>

The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### subject: `string`<a id="subject-string"></a>

Subject of the message

##### body_format: `string`<a id="body_format-string"></a>

Format of the message body. Can be `markdown` (default) or `html`.

##### metadata: [`CustomMessageMetadata`](./models/custom-message-metadata.ts)<a id="metadata-custommessagemetadatamodelscustom-message-metadatats"></a>

##### attachments: `Uint8Array | File | buffer.File`[]<a id="attachments-uint8array--file--bufferfile"></a>

Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.

#### 🔄 Return<a id="🔄-return"></a>

[MessagesReceiveCustomMessageResponse](./models/messages-receive-custom-message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/channels/{channel_id}/incoming_messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.rules.getRule`<a id="frontcorerulesgetrule"></a>

Fetch a rule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRuleResponse = await frontcore.rules.getRule({
  ruleId: "rul_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ruleId: `string`<a id="ruleid-string"></a>

The Rule ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rules/{rule_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.rules.listAllCompanyRules`<a id="frontcoreruleslistallcompanyrules"></a>

List the company rules.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllCompanyRulesResponse = await frontcore.rules.listAllCompanyRules();
```

#### 🔄 Return<a id="🔄-return"></a>

[RulesListAllCompanyRulesResponse](./models/rules-list-all-company-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.rules.listCompanyRules`<a id="frontcoreruleslistcompanyrules"></a>

List the rules of the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyRulesResponse = await frontcore.rules.listCompanyRules();
```

#### 🔄 Return<a id="🔄-return"></a>

[RulesListAllCompanyRulesResponse](./models/rules-list-all-company-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.rules.listTeamRules`<a id="frontcoreruleslistteamrules"></a>

List the rules of a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamRulesResponse = await frontcore.rules.listTeamRules({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[RulesListAllCompanyRulesResponse](./models/rules-list-all-company-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.rules.listTeammateRules`<a id="frontcoreruleslistteammaterules"></a>

List the rules of a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateRulesResponse = await frontcore.rules.listTeammateRules({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[RulesListAllCompanyRulesResponse](./models/rules-list-all-company-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.addTeammatesToShift`<a id="frontcoreshiftsaddteammatestoshift"></a>

Add teammates to a shift. The selected teammates must be in the team that owns the shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTeammatesToShiftResponse = await frontcore.shifts.addTeammatesToShift({
  shiftId: "shf_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### shiftId: `string`<a id="shiftid-string"></a>

The Shift ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shift/{shift_id}/teammates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.createShift`<a id="frontcoreshiftscreateshift"></a>

Create a shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createShiftResponse = await frontcore.shifts.createShift({
  name: "name_example",
  color: "black",
  timezone: "timezone_example",
  times: {},
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the shift

##### color: `string`<a id="color-string"></a>

Color of the shift

##### timezone: `string`<a id="timezone-string"></a>

A timezone name as defined in the IANA tz database

##### times: [`ShiftIntervals`](./models/shift-intervals.ts)<a id="times-shiftintervalsmodelsshift-intervalsts"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ShiftResponse](./models/shift-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shifts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.createTeamShift`<a id="frontcoreshiftscreateteamshift"></a>

Create a shift for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamShiftResponse = await frontcore.shifts.createTeamShift({
  teamId: "tim_123",
  name: "name_example",
  color: "black",
  timezone: "timezone_example",
  times: {},
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the shift

##### color: `string`<a id="color-string"></a>

Color of the shift

##### timezone: `string`<a id="timezone-string"></a>

A timezone name as defined in the IANA tz database

##### times: [`ShiftIntervals`](./models/shift-intervals.ts)<a id="times-shiftintervalsmodelsshift-intervalsts"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### teamId: `string`<a id="teamid-string"></a>

The Team ID

#### 🔄 Return<a id="🔄-return"></a>

[ShiftResponse](./models/shift-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/shifts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.getShift`<a id="frontcoreshiftsgetshift"></a>

Fetch a shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getShiftResponse = await frontcore.shifts.getShift({
  shiftId: "shf_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shiftId: `string`<a id="shiftid-string"></a>

The Shift ID

#### 🔄 Return<a id="🔄-return"></a>

[ShiftResponse](./models/shift-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shift/{shift_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.listShiftTeammates`<a id="frontcoreshiftslistshiftteammates"></a>

List the teammates assigned to a shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listShiftTeammatesResponse = await frontcore.shifts.listShiftTeammates({
  shiftId: "shf_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shiftId: `string`<a id="shiftid-string"></a>

The Shift ID

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListMentionedTeammatesResponse](./models/comments-list-mentioned-teammates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shift/{shift_id}/teammates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.listShifts`<a id="frontcoreshiftslistshifts"></a>

List the shifts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listShiftsResponse = await frontcore.shifts.listShifts();
```

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsListShiftsResponse](./models/shifts-list-shifts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.listTeamShifts`<a id="frontcoreshiftslistteamshifts"></a>

List the shifts for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamShiftsResponse = await frontcore.shifts.listTeamShifts({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsListShiftsResponse](./models/shifts-list-shifts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/shifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.removeTeammatesFromShift`<a id="frontcoreshiftsremoveteammatesfromshift"></a>

Remove teammates from a shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeammatesFromShiftResponse =
  await frontcore.shifts.removeTeammatesFromShift({
    shiftId: "shf_123",
    teammate_ids: ["teammate_ids_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### shiftId: `string`<a id="shiftid-string"></a>

The Shift ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shift/{shift_id}/teammates` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.teammateShiftsList`<a id="frontcoreshiftsteammateshiftslist"></a>

Lists all the shifts for the teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const teammateShiftsListResponse = await frontcore.shifts.teammateShiftsList({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ShiftsListShiftsResponse](./models/shifts-list-shifts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/shifts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.shifts.updateShift`<a id="frontcoreshiftsupdateshift"></a>

Update a shift.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateShiftResponse = await frontcore.shifts.updateShift({
  shiftId: "shf_123",
  color: "black",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shiftId: `string`<a id="shiftid-string"></a>

The Shift ID

##### name: `string`<a id="name-string"></a>

Name of the shift

##### color: `string`<a id="color-string"></a>

Color of the shift

##### timezone: `string`<a id="timezone-string"></a>

A timezone name as defined in the IANA tz database

##### times: [`ShiftIntervals`](./models/shift-intervals.ts)<a id="times-shiftintervalsmodelsshift-intervalsts"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

List of all the teammate ids who will be part of this shift. Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shifts/{shift_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.createTeamSignature`<a id="frontcoresignaturescreateteamsignature"></a>

Create a new signature for the given team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamSignatureResponse =
  await frontcore.signatures.createTeamSignature({
    teamId: "tim_123",
    name: "name_example",
    body: "body_example",
    is_default: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the signature

##### body: `string`<a id="body-string"></a>

Body of the signature

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### sender_info: `string`<a id="sender_info-string"></a>

Sender info of the signature that will appear in the From line of emails sent.

##### is_visible_for_all_teammate_channels: `boolean`<a id="is_visible_for_all_teammate_channels-boolean"></a>

Whether or not the signature is visible in all individual channels for teammates in the given team.

##### is_default: `boolean`<a id="is_default-boolean"></a>

If true, the signature will be set as the default signature for the team.

##### channel_ids: `string`[]<a id="channel_ids-string"></a>

The specific channels this signature is available in. If omitted or null, the signature will be available in all channels the team has access to. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/signatures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.createTeammateSignature`<a id="frontcoresignaturescreateteammatesignature"></a>

Create a new signature for the given teammate

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeammateSignatureResponse =
  await frontcore.signatures.createTeammateSignature({
    teammateId: "tea_123",
    name: "name_example",
    body: "body_example",
    is_default: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the signature

##### body: `string`<a id="body-string"></a>

Body of the signature

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### sender_info: `string`<a id="sender_info-string"></a>

Sender info of the signature that will appear in the From line of emails sent.

##### is_default: `boolean`<a id="is_default-boolean"></a>

If true, the signature will be set as the default signature for the teammate.

##### channel_ids: `string`[]<a id="channel_ids-string"></a>

The specific channels this signature is available in. If omitted or null, the signature will be available in all channels the teammate has access to. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/signatures` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.deleteSignature`<a id="frontcoresignaturesdeletesignature"></a>

Delete signature

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSignatureResponse = await frontcore.signatures.deleteSignature({
  signatureId: "sig_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signatureId: `string`<a id="signatureid-string"></a>

The signature ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/signatures/{signature_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.getSignature`<a id="frontcoresignaturesgetsignature"></a>

Get the given signature.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSignatureResponse = await frontcore.signatures.getSignature({
  signatureId: "sig_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signatureId: `string`<a id="signatureid-string"></a>

The signature ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/signatures/{signature_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.listTeam`<a id="frontcoresignatureslistteam"></a>

List the signatures belonging to the given team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamResponse = await frontcore.signatures.listTeam({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

#### 🔄 Return<a id="🔄-return"></a>

[SignaturesListTeammateResponse](./models/signatures-list-teammate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/signatures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.listTeammate`<a id="frontcoresignatureslistteammate"></a>

List the signatures belonging to the given teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateResponse = await frontcore.signatures.listTeammate({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[SignaturesListTeammateResponse](./models/signatures-list-teammate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/signatures` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.signatures.updateSignature`<a id="frontcoresignaturesupdatesignature"></a>

Update signature

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSignatureResponse = await frontcore.signatures.updateSignature({
  signatureId: "sig_123",
  is_default: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signatureId: `string`<a id="signatureid-string"></a>

The signature ID

##### name: `string`<a id="name-string"></a>

Name of the signature

##### sender_info: `string`<a id="sender_info-string"></a>

Sender info of the signature that will appear in the From line of emails sent.

##### body: `string`<a id="body-string"></a>

Body of the signature

##### is_visible_for_all_teammate_channels: `boolean`<a id="is_visible_for_all_teammate_channels-boolean"></a>

Whether or not the signature is visible in all individual channels for teammates in the given team. Can only be set for shared signatures.

##### is_default: `boolean`<a id="is_default-boolean"></a>

If true, the signature will be set as the default signature for the team or teammate.

##### channel_ids: `string`[]<a id="channel_ids-string"></a>

The specific shared channels this signature if available in. If null, then it will be available in all channels. If unspecified, will retain previous value. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/signatures/{signature_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.createChildTag`<a id="frontcoretagscreatechildtag"></a>

Creates a child tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createChildTagResponse = await frontcore.tags.createChildTag({
  tagId: "tag_123",
  name: "name_example",
  highlight: "grey",
  is_visible_in_conversation_lists: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the tag

##### tagId: `string`<a id="tagid-string"></a>

The tag ID

##### description: `string`<a id="description-string"></a>

Description of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}/children` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.createCompanyTag`<a id="frontcoretagscreatecompanytag"></a>

Create a company tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCompanyTagResponse = await frontcore.tags.createCompanyTag({
  name: "name_example",
  highlight: "grey",
  is_visible_in_conversation_lists: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the tag

##### description: `string`<a id="description-string"></a>

Description of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.createTagOldestTeam`<a id="frontcoretagscreatetagoldestteam"></a>

Create a tag in the oldest team (workspace). This is a legacy endpoint. Use the Create company tag, Create team tag, or Create teammate tag endpoints instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTagOldestTeamResponse = await frontcore.tags.createTagOldestTeam({
  name: "name_example",
  highlight: "grey",
  is_visible_in_conversation_lists: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the tag

##### description: `string`<a id="description-string"></a>

Description of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.createTeamTag`<a id="frontcoretagscreateteamtag"></a>

Create a tag for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamTagResponse = await frontcore.tags.createTeamTag({
  teamId: "tim_123",
  name: "name_example",
  highlight: "grey",
  is_visible_in_conversation_lists: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the tag

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### description: `string`<a id="description-string"></a>

Description of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.createTeammateTag`<a id="frontcoretagscreateteammatetag"></a>

Create a tag for a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeammateTagResponse = await frontcore.tags.createTeammateTag({
  teammateId: "tea_123",
  name: "name_example",
  highlight: "grey",
  is_visible_in_conversation_lists: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name of the tag

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### description: `string`<a id="description-string"></a>

Description of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.deleteTag`<a id="frontcoretagsdeletetag"></a>

Delete a tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTagResponse = await frontcore.tags.deleteTag({
  tagId: "tag_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagId: `string`<a id="tagid-string"></a>

The ID of the tag to delete

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.getTag`<a id="frontcoretagsgettag"></a>

Fetch a tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagResponse = await frontcore.tags.getTag({
  tagId: "tag_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagId: `string`<a id="tagid-string"></a>

The tag ID

#### 🔄 Return<a id="🔄-return"></a>

[TagResponse](./models/tag-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listAll`<a id="frontcoretagslistall"></a>

List all the tags of the company that the API token has access to, whether they be company tags, team tags, or teammate tags.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await frontcore.tags.listAll({
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the tags. Only supports `id`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[TagsListCompanyResponse](./models/tags-list-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listChildren`<a id="frontcoretagslistchildren"></a>

List the children of a specific tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listChildrenResponse = await frontcore.tags.listChildren({
  tagId: "tag_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagId: `string`<a id="tagid-string"></a>

The tag ID

#### 🔄 Return<a id="🔄-return"></a>

[TagsListCompanyResponse](./models/tags-list-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}/children` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listCompany`<a id="frontcoretagslistcompany"></a>

List the company tags.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyResponse = await frontcore.tags.listCompany({
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the tags. Only supports `id`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[TagsListCompanyResponse](./models/tags-list-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/company/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listTaggedConversations`<a id="frontcoretagslisttaggedconversations"></a>

List the conversations tagged with a tag. For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTaggedConversationsResponse =
  await frontcore.tags.listTaggedConversations({
    tagId: "tag_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagId: `string`<a id="tagid-string"></a>

The ID of the tag

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listTeamTags`<a id="frontcoretagslistteamtags"></a>

List the tags for a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamTagsResponse = await frontcore.tags.listTeamTags({
  teamId: "tim_123",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The team ID

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the tags. Only supports `id`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[TagsListCompanyResponse](./models/tags-list-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.listTeammateTags`<a id="frontcoretagslistteammatetags"></a>

List the tags for a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeammateTagsResponse = await frontcore.tags.listTeammateTags({
  teammateId: "tea_123",
  limit: 25,
  pageToken:
    "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  sortOrder: "asc",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

##### sortBy: `string`<a id="sortby-string"></a>

Field used to sort the tags. Only supports `id`.

##### sortOrder: `'asc' | 'desc'`<a id="sortorder-asc--desc"></a>

Order by which results should be sorted

#### 🔄 Return<a id="🔄-return"></a>

[TagsListCompanyResponse](./models/tags-list-company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tags.updateTag`<a id="frontcoretagsupdatetag"></a>

Update a tag.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTagResponse = await frontcore.tags.updateTag({
  tagId: "tag_123",
  highlight: "grey",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tagId: `string`<a id="tagid-string"></a>

The tag ID

##### description: `string`<a id="description-string"></a>

Description of the tag

##### name: `string`<a id="name-string"></a>

Name of the tag

##### highlight: `string`<a id="highlight-string"></a>

Highlight color of the tag.

##### parent_tag_id: `string`<a id="parent_tag_id-string"></a>

ID of the parent of this tag. Set to `null` to remove  the parent tag.

##### is_visible_in_conversation_lists: `boolean`<a id="is_visible_in_conversation_lists-boolean"></a>

Whether the tag is visible in conversation lists.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags/{tag_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teammates.getInboxList`<a id="frontcoreteammatesgetinboxlist"></a>

Returns list of inboxes the teammate has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInboxListResponse = await frontcore.teammates.getInboxList({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[ConversationsListInboxesResponse](./models/conversations-list-inboxes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/inboxes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teammates.getTeammateById`<a id="frontcoreteammatesgetteammatebyid"></a>

Fetch a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeammateByIdResponse = await frontcore.teammates.getTeammateById({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🔄 Return<a id="🔄-return"></a>

[TeammateResponse](./models/teammate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teammates.listAssignedConversations`<a id="frontcoreteammateslistassignedconversations"></a>

List the conversations assigned to a teammate in reverse chronological order (most recently updated first). For more advanced filtering, see the [search endpoint](https://dev.frontapp.com/reference/conversations#search-conversations).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAssignedConversationsResponse =
  await frontcore.teammates.listAssignedConversations({
    teammateId: "tea_123",
    limit: 25,
    pageToken:
      "https://yourCompany.api.frontapp.com/endpoint?limit=25&page_token=92f32bcd7625333caf4e0f8fc26d920c812f",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### q: `string`<a id="q-string"></a>

[Search query object](https://dev.frontapp.com/docs/query-object-q) with a property `statuses`, whose value should be a list of conversation statuses (`assigned`, `unassigned`, `archived`, or `deleted`).

##### limit: `number`<a id="limit-number"></a>

Max number of results per [page](https://dev.frontapp.com/docs/pagination)

##### pageToken: `string`<a id="pagetoken-string"></a>

Token to use to request the [next page](https://dev.frontapp.com/docs/pagination)

#### 🔄 Return<a id="🔄-return"></a>

[ContactsListConversationsReverseChronologicalOrderResponse](./models/contacts-list-conversations-reverse-chronological-order-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}/conversations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teammates.listCompanyMembers`<a id="frontcoreteammateslistcompanymembers"></a>

List the teammates in the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCompanyMembersResponse =
  await frontcore.teammates.listCompanyMembers();
```

#### 🔄 Return<a id="🔄-return"></a>

[CommentsListMentionedTeammatesResponse](./models/comments-list-mentioned-teammates-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teammates.updateTeammate`<a id="frontcoreteammatesupdateteammate"></a>

Update a teammate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeammateResponse = await frontcore.teammates.updateTeammate({
  teammateId: "tea_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammateId: `string`<a id="teammateid-string"></a>

The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

##### username: `string`<a id="username-string"></a>

New username. It must be unique and can only contains lowercase letters, numbers and underscores.

##### first_name: `string`<a id="first_name-string"></a>

New first name

##### last_name: `string`<a id="last_name-string"></a>

New last name

##### is_available: `boolean`<a id="is_available-boolean"></a>

New availability status

##### custom_fields: `object`<a id="custom_fields-object"></a>

Custom field attributes for this teammate. If you want to keep all custom fields the same when updating this resource, do not include any custom fields in the update. If you want to update custom fields, make sure to include all custom fields, not just the fields you want to add or update. If you send only the custom fields you want to update, the other custom fields will be erased. You can retrieve the existing custom fields before making the update to note the current fields.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teammates/{teammate_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teams.addTeammates`<a id="frontcoreteamsaddteammates"></a>

Add one or more teammates to a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTeammatesResponse = await frontcore.teams.addTeammates({
  teamId: "tim_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### teamId: `string`<a id="teamid-string"></a>

The Team ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/teammates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teams.getWorkspace`<a id="frontcoreteamsgetworkspace"></a>

Fetch a team (workspace).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkspaceResponse = await frontcore.teams.getWorkspace({
  teamId: "tim_123",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

The Team ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teams.listTeams`<a id="frontcoreteamslistteams"></a>

List the teams (workspaces) in the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTeamsResponse = await frontcore.teams.listTeams();
```

#### 🔄 Return<a id="🔄-return"></a>

[TeamsListTeamsResponse](./models/teams-list-teams-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.teams.removeTeammates`<a id="frontcoreteamsremoveteammates"></a>

Remove one or more teammates from a team (workspace). Alternatively, you can supply emails as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTeammatesResponse = await frontcore.teams.removeTeammates({
  teamId: "tim_123",
  teammate_ids: ["teammate_ids_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teammate_ids: `string`[]<a id="teammate_ids-string"></a>

##### teamId: `string`<a id="teamid-string"></a>

The Team ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{team_id}/teammates` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `frontcore.tokenIdentity.getDetails`<a id="frontcoretokenidentitygetdetails"></a>

Fetch the details of the API token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await frontcore.tokenIdentity.getDetails();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
