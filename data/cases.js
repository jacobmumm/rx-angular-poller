module.exports = [    
    {
      "id": 40,
      "external_id": null,
      "blurb": "First email test case coming in from an email. Help test if this works.\r\nHope it does.\r\n\r\n-JM\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:23:58Z",
      "changed_at": "2016-01-25T23:26:29Z",
      "created_at": "2014-12-03T20:12:23Z",
      "updated_at": "2016-01-25T23:28:33Z",
      "first_opened_at": "2014-12-03T23:04:14Z",
      "opened_at": "2014-12-04T01:35:30Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": true,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-04T23:08:04Z",
      "type": "email",
      "labels": [],
      "subject": "Test case #1",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/40",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/40/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/40/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/40/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/40/links",
          "class": "case_link",
          "count": 2
        },
        "macro_preview": {
          "href": "/api/v2/cases/40/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/40/replies",
          "class": "reply",
          "count": 9
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/40/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/40/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/40/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 3,
          "created_at": "2014-12-03T20:12:23Z",
          "updated_at": "2014-12-03T20:12:23Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "First email test case coming in from an email. Help test if this works.\r\nHope it does.\r\n\r\n-JM\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "<mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Test case #1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/40/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/40",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/40/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 47,
      "external_id": null,
      "blurb": "asdfsadfasdfasdf",
      "priority": 5,
      "locked_until": null,
      "label_ids": [
        1945
      ],
      "active_at": "2016-01-27T00:12:58Z",
      "changed_at": "2016-02-02T20:46:03Z",
      "created_at": "2014-12-05T01:23:13Z",
      "updated_at": "2016-02-02T20:46:03Z",
      "first_opened_at": "2014-12-05T01:24:07Z",
      "opened_at": "2016-01-27T00:22:50Z",
      "first_resolved_at": "2014-12-05T18:47:19Z",
      "resolved_at": "2014-12-05T18:47:19Z",
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-05T01:26:01Z",
      "type": "email",
      "labels": [
        "Label-jake-1435176814.6040902"
      ],
      "subject": "testing",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/47",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/47/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/47/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/47/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/47/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/47/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/47/replies",
          "class": "reply",
          "count": 14
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/47/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/47/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/47/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 163,
          "created_at": "2014-12-05T01:23:13Z",
          "updated_at": "2014-12-05T01:23:13Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdfasdfasdf\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "testing",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/47/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/47",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/47/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1916,
          "created_at": "2016-01-26T22:44:57Z",
          "updated_at": "2016-01-26T22:45:04Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: testing",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/47/replies/10001282",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/47",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/47/replies/10001282/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 52,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-26T00:05:02Z",
      "changed_at": "2016-01-25T23:55:46Z",
      "created_at": "2014-12-09T19:11:16Z",
      "updated_at": "2016-01-26T00:15:37Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": null,
      "type": "email",
      "labels": [],
      "subject": "asdf",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/52",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/52/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/52/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": null,
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/52/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/52/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/52/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/52/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/52/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/52/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/52/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 182,
          "created_at": "2014-12-09T19:11:16Z",
          "updated_at": "2014-12-09T21:50:08Z",
          "sent_at": "2014-12-09T21:50:08Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdf",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": "desk_api",
          "direction": "out",
          "status": "sent",
          "subject": "",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/52/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/52",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/52/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1898,
          "created_at": "2016-01-25T23:58:33Z",
          "updated_at": "2016-01-25T23:58:41Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: ",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/52/replies/10001264",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/52",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/52/replies/10001264/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 84,
      "external_id": null,
      "blurb": "Testing new case notifications.\r\n\r\nTesting new case notifications.\r\n\r\n\r\nTesting new case notifications.\r\n\r\n\r\n\r\nTesting new case notifications.\r\n\r\n\r\n\r\n\r\nTesting new case notifications.\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:20:47Z",
      "changed_at": "2016-01-26T00:22:15Z",
      "created_at": "2014-12-19T02:22:34Z",
      "updated_at": "2016-01-26T00:22:50Z",
      "first_opened_at": "2014-12-19T02:22:55Z",
      "opened_at": "2014-12-19T02:24:52Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-19T21:01:50Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Testing new case notifications",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/84",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/84/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/84/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/84/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/84/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/84/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/84/replies",
          "class": "reply",
          "count": 4
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/84/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/84/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/84/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 228,
          "created_at": "2014-12-19T02:22:34Z",
          "updated_at": "2014-12-19T02:22:34Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Testing new case notifications.\r\n\r\nTesting new case notifications.\r\n\r\n\r\nTesting new case notifications.\r\n\r\n\r\n\r\nTesting new case notifications.\r\n\r\n\r\n\r\n\r\nTesting new case notifications.\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/84/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/84",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/84/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1901,
          "created_at": "2016-01-26T00:21:45Z",
          "updated_at": "2016-01-26T00:22:01Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/84/replies/10001267",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/84",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/84/replies/10001267/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 413,
      "external_id": null,
      "blurb": "fwe 333 444 555 666324 33433",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        12,
        11,
        1944,
        1945
      ],
      "active_at": "2016-02-08T22:41:38Z",
      "changed_at": "2016-02-03T22:00:25Z",
      "created_at": "2015-06-29T21:55:16Z",
      "updated_at": "2016-02-08T22:46:29Z",
      "first_opened_at": "2015-06-29T21:55:30Z",
      "opened_at": "2016-01-27T20:26:28Z",
      "first_resolved_at": "2016-01-27T02:03:27Z",
      "resolved_at": "2016-01-27T02:06:38Z",
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 2,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-09T16:48:42Z",
      "type": "email",
      "labels": [
        "Example",
        "Label-jake-1435176812.998175",
        "Label-jake-1435176814.6040902",
        "More Info"
      ],
      "subject": "test update/ignore recipients",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/413",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/413/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/413/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/25",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/413/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/413/links",
          "class": "case_link",
          "count": 2
        },
        "macro_preview": {
          "href": "/api/v2/cases/413/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/413/replies",
          "class": "reply",
          "count": 32
        },
        "feedbacks": {
          "href": "/api/v2/feedbacks?case_id=413",
          "class": "customer_feedback",
          "count": 2
        },
        "draft": {
          "href": "/api/v2/cases/413/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/413/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/413/attachments",
          "class": "attachment",
          "count": 2
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1042,
          "created_at": "2015-06-29T21:55:16Z",
          "updated_at": "2015-06-29T21:55:16Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdf asdf asdfas asdfasdf\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/413/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/413",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/413/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1946,
          "created_at": "2016-02-03T21:59:15Z",
          "updated_at": "2016-02-03T21:59:23Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": "jacob.mumm@gmail.com",
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/413/replies/10001309",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/413",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/413/replies/10001309/attachments",
              "class": "attachment"
            }
          }
        },
        "feedback": {
          "id": 3,
          "rating": "2",
          "additional_feedback": "",
          "created_at": "2016-02-01T18:56:02Z",
          "updated_at": "2016-02-01T18:56:05Z",
          "rating_type": "four_star",
          "_links": {
            "self": {
              "href": "/api/v2/feedbacks/3",
              "class": "feedback"
            },
            "case": {
              "href": "/api/v2/cases/413",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "reply": {
              "href": "/api/v2/cases/413/replies/10001303",
              "class": "email"
            },
            "user": {
              "href": "/api/v2/users/2",
              "class": "user"
            }
          }
        }
      }
    },
    {
      "id": 437,
      "external_id": null,
      "blurb": "Testing count #3",
      "priority": 5,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:25:36Z",
      "changed_at": "2016-01-26T00:27:49Z",
      "created_at": "2015-07-17T18:15:34Z",
      "updated_at": "2016-01-26T00:31:36Z",
      "first_opened_at": "2015-07-20T15:43:47Z",
      "opened_at": "2015-07-21T02:35:13Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-17T18:17:47Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Testing interaction display count",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/437",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/437/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/437/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/437/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/437/links",
          "class": "case_link",
          "count": 3
        },
        "macro_preview": {
          "href": "/api/v2/cases/437/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/437/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/437/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/437/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/437/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1155,
          "created_at": "2015-07-17T18:15:34Z",
          "updated_at": "2015-07-17T18:15:34Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "test\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/437/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/437",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/437/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1909,
          "created_at": "2016-01-26T00:30:30Z",
          "updated_at": "2016-01-26T00:30:37Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/437/replies/10001275",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/437",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/437/replies/10001275/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 666,
      "external_id": null,
      "blurb": "asewrwer\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        15
      ],
      "active_at": "2016-01-25T23:20:26Z",
      "changed_at": "2016-01-25T23:21:21Z",
      "created_at": "2016-01-05T22:07:41Z",
      "updated_at": "2016-01-25T23:21:33Z",
      "first_opened_at": "2016-01-05T22:08:02Z",
      "opened_at": "2016-01-05T22:08:02Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-05T22:07:41Z",
      "type": "email",
      "labels": [
        "Escalated"
      ],
      "subject": "test reply & update 1",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/666",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/666/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/666/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/666/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/666/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/666/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/666/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/666/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/666/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/666/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1827,
          "created_at": "2016-01-05T22:07:41Z",
          "updated_at": "2016-01-05T22:07:41Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asewrwer\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test reply & update 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/666/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/666",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/666/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1884,
          "created_at": "2016-01-25T23:21:31Z",
          "updated_at": "2016-01-25T23:21:31Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDeskDown\" <mummdesk@is.down322111>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test reply & update 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/666/replies/10001251",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/666",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/666/replies/10001251/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 677,
      "external_id": null,
      "blurb": "alkaw elkwae fklawe flkawefj lkawejf lawefj kalwef lwkaejf alwkejf lwakefj\r\nawlkef jawlkef\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:20:01Z",
      "changed_at": "2016-01-25T23:18:58Z",
      "created_at": "2016-01-22T16:41:30Z",
      "updated_at": "2016-01-25T23:20:18Z",
      "first_opened_at": "2016-01-22T16:42:27Z",
      "opened_at": "2016-01-22T16:42:27Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-22T16:41:30Z",
      "type": "email",
      "labels": [],
      "subject": "test send button 2",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/677",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/677/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/677/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/677/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/677/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/677/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/677/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/677/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/677/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/677/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1862,
          "created_at": "2016-01-22T16:41:30Z",
          "updated_at": "2016-01-22T16:41:30Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "alkaw elkwae fklawe flkawefj lkawejf lawefj kalwef lwkaejf alwkejf lwakefj\r\nawlkef jawlkef\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test send button 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/677/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/677",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/677/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1869,
          "created_at": "2016-01-22T16:44:08Z",
          "updated_at": "2016-01-25T23:18:55Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test send button 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/677/replies/10001237",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/677",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/677/replies/10001237/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 679,
      "external_id": null,
      "blurb": "alskd flkaw lkawj erlkawe rlkawje rklawer\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:13:51Z",
      "changed_at": "2016-01-25T23:14:28Z",
      "created_at": "2016-01-22T16:50:27Z",
      "updated_at": "2016-01-25T23:14:34Z",
      "first_opened_at": "2016-01-22T16:59:42Z",
      "opened_at": "2016-01-25T23:13:15Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:13:15Z",
      "type": "email",
      "labels": [],
      "subject": "test send button 4",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/679",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/679/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/679/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/679/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/679/links",
          "class": "case_link",
          "count": 2
        },
        "macro_preview": {
          "href": "/api/v2/cases/679/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/679/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/679/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/679/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/679/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1871,
          "created_at": "2016-01-22T16:50:27Z",
          "updated_at": "2016-01-22T16:50:27Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "alskd flkaw lkawj erlkawe rlkawje rklawer\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test send button 4",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/679/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/679",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/679/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1875,
          "created_at": "2016-01-22T16:59:57Z",
          "updated_at": "2016-01-25T23:12:37Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test send button 4",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/679/replies/10001243",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/679",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/679/replies/10001243/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 681,
      "external_id": null,
      "blurb": "aslk walk jawlek lawke jalwkerj awlekr awlekrj awlekrj lawker\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-01-22T18:01:43Z",
      "created_at": "2016-01-22T18:01:43Z",
      "updated_at": "2016-01-22T18:01:43Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-22T18:01:43Z",
      "type": "email",
      "labels": [],
      "subject": "test send button 6",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/681",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/681/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/681/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/681/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/681/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/681/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/681/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/681/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/681/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/681/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1877,
          "created_at": "2016-01-22T18:01:43Z",
          "updated_at": "2016-01-22T18:01:43Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "aslk walk jawlek lawke jalwkerj awlekr awlekrj awlekrj lawker\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test send button 6",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/681/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/681",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/681/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 682,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a013a9b7c73G5af47a698b10G52a0184317f45G244Gc7&bcode=1.1453560887.AblM4hkskEjSubJx&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n=================",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-01-25T22:01:40Z",
      "created_at": "2016-01-25T22:01:39Z",
      "updated_at": "2016-01-25T22:01:40Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T22:01:40Z",
      "type": "email",
      "labels": [],
      "subject": "Will Smith and Bronx Zoo are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/682",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/682/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/682/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/682/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/682/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/682/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/682/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/682/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/682/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/682/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1878,
          "created_at": "2016-01-25T22:01:40Z",
          "updated_at": "2016-01-25T22:01:40Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a013a9b7c73G5af47a698b10G52a0184317f45G244Gc7&bcode=1.1453560887.AblM4hkskEjSubJx&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nWill Smith\n\n\"Actor Says He Will Join Wife Jada Pinkett Smith in Not Attending the Academy Awards \"\nhttps://facebook.com/topic/Will-Smith/105569962810962\n\n\nBronx Zoo\n\n\"New York City Organization Offers Cockroach Naming Valentine's Day Gift\"\nhttps://facebook.com/topic/Bronx-Zoo/107825415907120\n\n\nEast Harlem\n\n\"Archaeologists Uncover Burial Ground Dating Back to 17th Century in New York City\"\nhttps://facebook.com/topic/East-Harlem/113361332010836\n\n\n#FlintWaterCrisis\n\n\"Contaminated Water Likely Contributed to Legionnaires' Outbreak, Research Professor Says\"\nhttps://facebook.com/hashtag/flintwatercrisis\n\n\nAnthony Smith\n\n\"Former Oakland Raiders Player Sentenced to Life in Prison for Killing 3 Men\"\nhttps://facebook.com/topic/Anthony-Smith/108092569219585\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS3VvY4Ey4peGIhd&u=100006072257296&mid=52a013a9b7c73G5af47a698b10G52a0184317f45G244Gc7\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Will Smith and Bronx Zoo are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/682/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/682",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/682/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 683,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a2aa1a3809cG5af47a698b10G52a2aeb39836eG244G2299&bcode=1.1453738709.AblKtD7XBTMipm-d&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-01-25T22:01:42Z",
      "created_at": "2016-01-25T22:01:42Z",
      "updated_at": "2016-01-25T22:01:42Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T22:01:42Z",
      "type": "email",
      "labels": [],
      "subject": "Pottstown, Pennsylvania and Casey Neistat are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/683",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/683/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/683/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/683/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/683/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/683/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/683/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/683/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/683/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/683/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1880,
          "created_at": "2016-01-25T22:01:42Z",
          "updated_at": "2016-01-25T22:01:42Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a2aa1a3809cG5af47a698b10G52a2aeb39836eG244G2299&bcode=1.1453738709.AblKtD7XBTMipm-d&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nPottstown, Pennsylvania\n\n\"Pregnant Woman Dies After Shoveling Snow Outside Home\"\nhttps://facebook.com/topic/Pottstown-Pennsylvania/108057895889785\n\n\nCasey Neistat\n\n\"Video Shows YouTuber Snowboarding Through Snow-Covered New York City Streets\"\nhttps://facebook.com/topic/Casey-Neistat/184652541587928\n\n\nAndie MacDowell\n\n\"Actress Posts on Social Media After Being Bumped From 1st Class on Flight\"\nhttps://facebook.com/topic/Andie-MacDowell/108286355860330\n\n\nDanny DeVito\n\n\"Actor Discusses Oscar Nominations and Says Americans Are a 'Bunch of Racists'\"\nhttps://facebook.com/topic/Danny-DeVito/108433702510358\n\n\nWendy's and Burger King\n\n\"Fast Food Restaurants Respond to Each Other on Social Media \"\nhttps://facebook.com/topic/Wendys-and-Burger-King/112985348713850\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS2KwXQmHzPBjjRz&u=100006072257296&mid=52a2aa1a3809cG5af47a698b10G52a2aeb39836eG244G2299\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Pottstown, Pennsylvania and Casey Neistat are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/683/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/683",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/683/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 684,
      "external_id": null,
      "blurb": "Yeah, and maybe you could also tell me why this thing works like this..",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:14:13Z",
      "changed_at": "2016-01-25T23:14:11Z",
      "created_at": "2016-01-25T23:13:15Z",
      "updated_at": "2016-01-25T23:14:35Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:13:15Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test send button 4",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/684",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/684/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/684/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/684/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/684/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/684/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/684/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/684/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/684/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/684/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1881,
          "created_at": "2016-01-25T23:13:15Z",
          "updated_at": "2016-01-25T23:14:10Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Yeah, and maybe you could also tell me why this thing works like this..",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: test send button 4",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/684/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/684",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/684/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1882,
          "created_at": "2016-01-25T23:14:14Z",
          "updated_at": "2016-01-25T23:14:14Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDeskDown\" <mummdesk@is.down322111>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test send button 4",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/684/replies/10001249",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/684",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/684/replies/10001249/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 685,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-01-25T23:14:28Z",
      "created_at": "2016-01-22T16:59:44Z",
      "updated_at": "2016-01-25T23:14:28Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-22T16:59:44Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test send button 4",
      "route_status": "added",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/685",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/685/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/685/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/685/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/685/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/685/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/685/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/685/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/685/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/685/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1874,
          "created_at": "2016-01-22T16:59:44Z",
          "updated_at": "2016-01-25T23:14:28Z",
          "sent_at": "2016-01-22T17:00:30Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Thanks for your kind words. Our goal is to wow you.",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: test send button 4",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/685/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/685",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/685/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 686,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:20:01Z",
      "changed_at": "2016-01-25T23:18:59Z",
      "created_at": "2016-01-22T16:42:29Z",
      "updated_at": "2016-01-25T23:20:19Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-22T16:42:29Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test send button 2",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/686",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/686/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/686/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/686/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/686/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/686/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/686/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/686/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/686/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/686/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1865,
          "created_at": "2016-01-22T16:42:29Z",
          "updated_at": "2016-01-25T23:18:59Z",
          "sent_at": "2016-01-22T16:43:16Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Thanks for your kind words. Our goal is to wow you.",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: test send button 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/686/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/686",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/686/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1883,
          "created_at": "2016-01-25T23:19:02Z",
          "updated_at": "2016-01-25T23:19:08Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test send button 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/686/replies/10001250",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/686",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/686/replies/10001250/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 687,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        15
      ],
      "active_at": "2016-01-25T23:21:25Z",
      "changed_at": "2016-01-25T23:21:22Z",
      "created_at": "2016-01-05T22:08:04Z",
      "updated_at": "2016-01-25T23:21:34Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 1,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-05T22:08:04Z",
      "type": "email",
      "labels": [
        "Escalated"
      ],
      "subject": "Re: test reply & update 1 split off",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/687",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/687/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/687/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/687/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/687/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/687/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/687/replies",
          "class": "reply",
          "count": 9
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/687/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/687/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/687/attachments",
          "class": "attachment",
          "count": 1
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1830,
          "created_at": "2016-01-05T22:08:04Z",
          "updated_at": "2016-01-25T23:21:22Z",
          "sent_at": "2016-01-05T22:09:04Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "awerr awe awer awer wer awer awer",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: test reply & update 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/687/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/687",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/687/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1839,
          "created_at": "2016-01-06T21:23:12Z",
          "updated_at": "2016-01-18T18:56:37Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Hey, check out this attachment.",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test reply & update 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/687/replies/10001214",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/687",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/687/replies/10001214/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 688,
      "external_id": null,
      "blurb": "asdfasdfasdqwerqwerqwer",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:23:21Z",
      "changed_at": "2016-01-25T23:23:19Z",
      "created_at": "2014-12-05T00:41:04Z",
      "updated_at": "2016-01-25T23:23:50Z",
      "first_opened_at": null,
      "opened_at": "2016-01-25T23:23:19Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-05T00:41:04Z",
      "type": "email",
      "labels": [],
      "subject": "Re: new case interaction message test",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/688",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/688/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/688/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/688/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/688/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/688/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/688/replies",
          "class": "reply",
          "count": 7
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/688/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/688/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/688/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 139,
          "created_at": "2014-12-05T00:41:04Z",
          "updated_at": "2016-01-25T23:23:19Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdfasdfasdqwerqwerqwer",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: new case interaction message test",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/688/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/688",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/688/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1031,
          "created_at": "2015-06-27T00:39:42Z",
          "updated_at": "2015-06-27T00:39:52Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "test@test.net",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: new case interaction message test",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/688/replies/10000461",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/688",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/688/replies/10000461/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 689,
      "external_id": null,
      "blurb": "SENDING A REPLY VIA AGENT EMAIL",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:24:32Z",
      "changed_at": "2016-01-25T23:24:27Z",
      "created_at": "2014-12-04T01:35:30Z",
      "updated_at": "2016-01-25T23:28:34Z",
      "first_opened_at": null,
      "opened_at": "2016-01-25T23:24:27Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-04T01:35:30Z",
      "type": "email",
      "labels": [],
      "subject": "Re: Test case #1",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/689",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/689/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/689/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/689/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/689/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/689/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/689/replies",
          "class": "reply",
          "count": 90
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/689/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/689/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/689/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 23,
          "created_at": "2014-12-04T01:35:30Z",
          "updated_at": "2016-01-25T23:24:27Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "SENDING A REPLY VIA AGENT EMAIL",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: Test case #1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/689/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/689",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/689/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1621,
          "created_at": "2015-10-02T00:06:36Z",
          "updated_at": "2015-10-02T00:06:44Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Test case #1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/689/replies/10001026",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/689",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/689/replies/10001026/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 690,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:26:33Z",
      "changed_at": "2016-01-25T23:26:29Z",
      "created_at": "2014-12-04T00:39:46Z",
      "updated_at": "2016-01-25T23:28:35Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-04T00:39:46Z",
      "type": "email",
      "labels": [],
      "subject": "Re: Test case #1",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/690",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/690/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/690/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/690/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/690/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/690/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/690/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/690/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/690/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/690/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 17,
          "created_at": "2014-12-04T00:39:46Z",
          "updated_at": "2016-01-25T23:26:29Z",
          "sent_at": "2015-10-02T00:07:12Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "\nsad\nfsdf\nsad\nf\nsd\n\n",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Test case #1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/690/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/690",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/690/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1888,
          "created_at": "2016-01-25T23:26:20Z",
          "updated_at": "2016-01-25T23:26:26Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Test case #1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/690/replies/10001255",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/690",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/690/replies/10001255/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 691,
      "external_id": null,
      "blurb": "split case message\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:30:26Z",
      "changed_at": "2016-01-25T23:50:42Z",
      "created_at": "2016-01-25T23:29:32Z",
      "updated_at": "2016-01-25T23:54:36Z",
      "first_opened_at": "2016-01-25T23:30:26Z",
      "opened_at": "2016-01-25T23:36:55Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:36:55Z",
      "type": "email",
      "labels": [],
      "subject": "test case split",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/691",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/691/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/691/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/691/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/691/links",
          "class": "case_link",
          "count": 2
        },
        "macro_preview": {
          "href": "/api/v2/cases/691/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/691/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/691/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/691/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/691/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1889,
          "created_at": "2016-01-25T23:29:32Z",
          "updated_at": "2016-01-25T23:29:32Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "split case message\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/691/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/691",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/691/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 692,
      "external_id": null,
      "blurb": "Ok, but what about this other question",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:39:14Z",
      "changed_at": "2016-01-25T23:39:10Z",
      "created_at": "2016-01-25T23:31:43Z",
      "updated_at": "2016-01-25T23:54:37Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:31:43Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test case split",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/692",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/692/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/692/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/692/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/692/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/692/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/692/replies",
          "class": "reply",
          "count": 2
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/692/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/692/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/692/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1893,
          "created_at": "2016-01-25T23:31:43Z",
          "updated_at": "2016-01-25T23:39:10Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Ok, but what about this other question",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/692/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/692",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/692/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1894,
          "created_at": "2016-01-25T23:33:10Z",
          "updated_at": "2016-01-25T23:36:43Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Yeah, draft is in progress...",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/692/replies/10001260",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/692",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/692/replies/10001260/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 693,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:50:46Z",
      "changed_at": "2016-01-25T23:51:16Z",
      "created_at": "2016-01-25T23:30:28Z",
      "updated_at": "2016-01-25T23:54:37Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:30:28Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test case split",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/693",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/693/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/693/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/693/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/693/links",
          "class": "case_link",
          "count": 2
        },
        "macro_preview": {
          "href": "/api/v2/cases/693/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/693/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/693/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/693/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/693/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1891,
          "created_at": "2016-01-25T23:30:28Z",
          "updated_at": "2016-01-25T23:50:43Z",
          "sent_at": "2016-01-25T23:31:10Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "hey, so this answers you question",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/693/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/693",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/693/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 694,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:51:20Z",
      "changed_at": "2016-01-25T23:51:17Z",
      "created_at": "2016-01-25T23:30:40Z",
      "updated_at": "2016-01-25T23:54:37Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-25T23:30:40Z",
      "type": "email",
      "labels": [],
      "subject": "Re: test case split",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/694",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/694/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/694/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/694/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/694/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/694/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/694/replies",
          "class": "reply",
          "count": 2
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/694/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/694/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/694/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1892,
          "created_at": "2016-01-25T23:30:40Z",
          "updated_at": "2016-01-25T23:51:17Z",
          "sent_at": "2016-01-25T23:33:45Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Yeah, that's another issue, but this should do it.",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/694/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/694",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/694/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1897,
          "created_at": "2016-01-25T23:46:53Z",
          "updated_at": "2016-01-25T23:47:00Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test case split",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/694/replies/10001263",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/694",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/694/replies/10001263/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 695,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-25T23:55:50Z",
      "changed_at": "2016-01-25T23:55:46Z",
      "created_at": "2014-12-09T21:49:35Z",
      "updated_at": "2016-01-25T23:58:33Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-09T21:49:35Z",
      "type": "email",
      "labels": [],
      "subject": "Re: ",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/695",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/695/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/695/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": null,
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/695/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/695/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/695/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/695/replies",
          "class": "reply",
          "count": 13
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/695/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/695/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/695/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 186,
          "created_at": "2014-12-09T21:49:35Z",
          "updated_at": "2016-01-25T23:55:46Z",
          "sent_at": "2014-12-09T21:53:56Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdf",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: ",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/695/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/695",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/695/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 199,
          "created_at": "2014-12-10T19:49:08Z",
          "updated_at": "2016-01-25T23:55:15Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "awerrwea",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: ",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/695/replies/247",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/695",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/695/replies/247/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 696,
      "external_id": null,
      "blurb": "more neow",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:23:01Z",
      "changed_at": "2016-01-26T00:24:00Z",
      "created_at": "2014-12-19T02:23:28Z",
      "updated_at": "2016-01-26T00:24:17Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-19T02:23:28Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing new case notifications",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/696",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/696/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/696/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/696/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/696/links",
          "class": "case_link",
          "count": 4
        },
        "macro_preview": {
          "href": "/api/v2/cases/696/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/696/replies",
          "class": "reply",
          "count": 4
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/696/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/696/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/696/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 230,
          "created_at": "2014-12-19T02:23:28Z",
          "updated_at": "2016-01-26T00:21:08Z",
          "sent_at": "2014-12-29T19:48:58Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdf",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/696/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/696",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/696/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 697,
      "external_id": null,
      "blurb": null,
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:23:21Z",
      "changed_at": "2016-01-26T00:23:17Z",
      "created_at": "2015-02-10T19:19:46Z",
      "updated_at": "2016-01-26T00:24:18Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-02-10T19:19:46Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing new case notifications",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/697",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/697/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/697/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/697/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/697/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/697/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/697/replies",
          "class": "reply",
          "count": 2
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/697/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/697/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/697/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 415,
          "created_at": "2015-02-10T19:19:46Z",
          "updated_at": "2016-01-26T00:23:17Z",
          "sent_at": "2015-02-10T19:21:40Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdf",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/697/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/697",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/697/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 419,
          "created_at": "2015-02-10T19:42:20Z",
          "updated_at": "2015-02-10T19:43:04Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/697/replies/515",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/697",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/697/replies/515/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 698,
      "external_id": null,
      "blurb": "asdfwewerwearwerwaer",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:23:43Z",
      "changed_at": "2016-01-26T00:23:40Z",
      "created_at": "2014-12-19T21:01:50Z",
      "updated_at": "2016-01-26T00:24:18Z",
      "first_opened_at": null,
      "opened_at": "2016-01-26T00:23:40Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-19T21:01:50Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing new case notifications",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/698",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/698/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/698/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/698/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/698/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/698/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/698/replies",
          "class": "reply",
          "count": 8
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/698/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/698/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/698/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 268,
          "created_at": "2014-12-19T21:01:50Z",
          "updated_at": "2016-01-26T00:23:39Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdfwewerwearwerwaer",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/698/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/698",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/698/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1902,
          "created_at": "2016-01-26T00:23:45Z",
          "updated_at": "2016-01-26T00:23:45Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDeskDown\" <mummdesk@is.down322111>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/698/replies/10001268",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/698",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/698/replies/10001268/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 699,
      "external_id": null,
      "blurb": "aasdfsadfa",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:24:06Z",
      "changed_at": "2016-01-26T00:24:01Z",
      "created_at": "2014-12-19T02:47:50Z",
      "updated_at": "2016-01-26T00:24:18Z",
      "first_opened_at": null,
      "opened_at": "2016-01-26T00:24:01Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-19T02:47:50Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing new case notifications",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/699",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/699/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/699/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/699/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/699/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/699/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/699/replies",
          "class": "reply",
          "count": 33
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/699/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/699/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/699/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 235,
          "created_at": "2014-12-19T02:47:50Z",
          "updated_at": "2016-01-26T00:24:01Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "aasdfsadfa",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/699/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/699",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/699/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1903,
          "created_at": "2016-01-26T00:24:07Z",
          "updated_at": "2016-01-26T00:24:07Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDeskDown\" <mummdesk@is.down322111>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing new case notifications",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/699/replies/10001269",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/699",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/699/replies/10001269/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 700,
      "external_id": null,
      "blurb": "etawtwaet waetawte wet",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-01-26T00:24:58Z",
      "changed_at": "2016-01-26T00:24:54Z",
      "created_at": "2015-07-28T23:01:39Z",
      "updated_at": "2016-01-26T00:25:15Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-28T23:01:39Z",
      "type": "email",
      "labels": [],
      "subject": "Re: Testing counts",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/700",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/700/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/700/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/700/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/700/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/700/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/700/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/700/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/700/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/700/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1368,
          "created_at": "2015-07-28T23:01:39Z",
          "updated_at": "2016-01-26T00:24:54Z",
          "sent_at": "2015-08-03T22:32:13Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "awef",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing counts",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/700/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/700",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/700/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1392,
          "created_at": "2015-08-03T22:33:15Z",
          "updated_at": "2015-08-05T00:48:27Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing counts",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/700/replies/10000796",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/700",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/700/replies/10000796/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 701,
      "external_id": null,
      "blurb": null,
      "priority": 5,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:25:56Z",
      "changed_at": "2016-01-26T00:25:53Z",
      "created_at": "2015-07-21T02:33:13Z",
      "updated_at": "2016-01-26T00:31:33Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-21T02:33:13Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing interaction display count",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/701",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/701/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/701/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/701/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/701/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/701/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/701/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/701/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/701/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/701/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1186,
          "created_at": "2015-07-21T02:33:13Z",
          "updated_at": "2016-01-26T00:25:53Z",
          "sent_at": "2015-07-21T02:35:17Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Can you please describe the issue you are having in more detail so we can better assist you? Thanks.",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/701/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/701",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/701/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1191,
          "created_at": "2015-07-21T03:17:04Z",
          "updated_at": "2015-07-21T03:17:09Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/701/replies/10000597",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/701",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/701/replies/10000597/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 702,
      "external_id": null,
      "blurb": null,
      "priority": 5,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-02-11T01:35:53Z",
      "changed_at": "2016-02-04T23:01:09Z",
      "created_at": "2015-07-20T16:24:18Z",
      "updated_at": "2016-02-11T02:37:22Z",
      "first_opened_at": null,
      "opened_at": "2016-02-04T22:56:07Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 2,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-20T16:24:18Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing interaction display count",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/702",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/702/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/702/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/702/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/702/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/702/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/702/replies",
          "class": "reply",
          "count": 12
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/702/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/702/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/702/attachments",
          "class": "attachment",
          "count": 2
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1173,
          "created_at": "2015-07-20T16:24:18Z",
          "updated_at": "2016-01-26T00:27:08Z",
          "sent_at": "2015-07-20T16:25:15Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "awerewawerrweawer",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/702/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/702",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/702/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1950,
          "created_at": "2016-02-03T23:12:59Z",
          "updated_at": "2016-02-03T23:13:07Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/702/replies/10001310",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/702",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/702/replies/10001310/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 703,
      "external_id": null,
      "blurb": null,
      "priority": 5,
      "locked_until": null,
      "label_ids": [
        11
      ],
      "active_at": "2016-01-26T00:27:53Z",
      "changed_at": "2016-01-26T00:27:50Z",
      "created_at": "2015-07-20T15:43:49Z",
      "updated_at": "2016-01-26T00:31:35Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "pending",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-20T15:43:49Z",
      "type": "email",
      "labels": [
        "More Info"
      ],
      "subject": "Re: Testing interaction display count",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/703",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/703/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/703/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/703/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/703/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/703/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/703/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/703/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/703/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/703/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1169,
          "created_at": "2015-07-20T15:43:49Z",
          "updated_at": "2016-01-26T00:27:50Z",
          "sent_at": "2015-07-20T16:20:25Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "testing\n\n\n\n\nsome\n\n\n\n\n\n\nreply \n\n\n\n\nand \n\n\n\nscrolling\n\n\n\nbehavior",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/703/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/703",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/703/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1906,
          "created_at": "2016-01-26T00:27:29Z",
          "updated_at": "2016-01-26T00:27:36Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing interaction display count",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/703/replies/10001272",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/703",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/703/replies/10001272/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 705,
      "external_id": null,
      "blurb": "weffw wef waeaw wefa awefawef awef awef waef wef waef waef awef waef awef\r\nwae",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11,
        13,
        15
      ],
      "active_at": "2016-02-01T16:36:36Z",
      "changed_at": "2016-02-01T16:36:59Z",
      "created_at": "2015-07-09T16:48:42Z",
      "updated_at": "2016-02-01T16:36:59Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": "",
      "language": null,
      "received_at": "2015-07-09T16:48:42Z",
      "type": "email",
      "labels": [
        "Escalated",
        "More Info",
        "Sample Case"
      ],
      "subject": "Re: test update/ignore recipients",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/705",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/705/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/705/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/705/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/705/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/705/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/705/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/705/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/705/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/705/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1104,
          "created_at": "2015-07-09T16:48:42Z",
          "updated_at": "2016-01-26T00:48:12Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "weffw wef waeaw wefa awefawef awef awef waef wef waef waef awef waef awef\r\nwae",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": "Jacob Mumm <jacob.mumm@gmail.com>, Jake Mumm <grendian@gmail.com>",
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/705/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/705",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/705/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1138,
          "created_at": "2015-07-14T18:04:58Z",
          "updated_at": "2015-07-20T15:46:01Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": "jacob.mumm@gmail.com",
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/705/replies/10000552",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/705",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/705/replies/10000552/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 706,
      "external_id": null,
      "blurb": "wefwefaw wef wae waef awef waef weaf waef weaf",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        12
      ],
      "active_at": "2016-02-03T19:06:45Z",
      "changed_at": "2016-02-03T17:59:46Z",
      "created_at": "2015-07-09T16:44:41Z",
      "updated_at": "2016-02-03T20:06:23Z",
      "first_opened_at": null,
      "opened_at": "2016-01-26T00:53:09Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 2,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-07-09T16:44:41Z",
      "type": "email",
      "labels": [
        "Example"
      ],
      "subject": "Re: test update/ignore recipients",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/706",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/706/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/706/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/706/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/706/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/706/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/706/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/706/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/706/notes",
          "class": "note",
          "count": 2
        },
        "attachments": {
          "href": "/api/v2/cases/706/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1101,
          "created_at": "2015-07-09T16:44:41Z",
          "updated_at": "2016-01-26T00:53:09Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "wefwefaw wef wae waef awef waef weaf waef weaf",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": "Jacob Mumm <jacob.mumm@gmail.com>",
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/706/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/706",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/706/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1911,
          "created_at": "2016-01-26T00:52:57Z",
          "updated_at": "2016-01-26T00:53:03Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "jmumm@salesforce.com",
          "cc": "jacob.mumm@gmail.com",
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test update/ignore recipients",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/706/replies/10001277",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/706",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/706/replies/10001277/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 707,
      "external_id": null,
      "blurb": "merge case 2 message 1\r\n\r\n",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        1945
      ],
      "active_at": "2016-02-11T01:36:31Z",
      "changed_at": "2016-02-02T20:46:03Z",
      "created_at": "2015-10-13T01:06:56Z",
      "updated_at": "2016-02-11T02:37:22Z",
      "first_opened_at": null,
      "opened_at": "2016-01-27T00:15:14Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-10-13T01:06:56Z",
      "type": "email",
      "labels": [
        "Label-jake-1435176814.6040902"
      ],
      "subject": "test merge case 2",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/707",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/707/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/707/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/707/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/707/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/707/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/707/replies",
          "class": "reply",
          "count": 3
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/707/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/707/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/707/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1667,
          "created_at": "2015-10-13T01:06:56Z",
          "updated_at": "2016-01-26T00:59:07Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "merge case 2 message 1\r\n\r\n",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "Mumm Desk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "test merge case 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/707/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/707",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/707/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1913,
          "created_at": "2016-01-26T01:00:17Z",
          "updated_at": "2016-01-26T01:00:17Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDeskDown\" <mummdesk@is.down322111>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: test merge case 2",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/707/replies/10001279",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/707",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/707/replies/10001279/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 709,
      "external_id": null,
      "blurb": "Yeah, I think case 1 might be looking alright.",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        1945
      ],
      "active_at": "2016-01-28T20:45:54Z",
      "changed_at": "2016-02-02T20:46:04Z",
      "created_at": "2015-10-13T01:05:15Z",
      "updated_at": "2016-02-02T20:46:04Z",
      "first_opened_at": null,
      "opened_at": "2016-01-26T01:04:35Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2015-10-13T01:05:15Z",
      "type": "email",
      "labels": [
        "Label-jake-1435176814.6040902"
      ],
      "subject": "Re: Hey this is case 1",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/709",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/709/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/709/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/2",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/709/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/709/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/709/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/709/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/709/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/709/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/709/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1666,
          "created_at": "2015-10-13T01:05:15Z",
          "updated_at": "2016-01-26T01:04:35Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Yeah, I think case 1 might be looking alright.",
          "from": "Jacob Mumm <jmumm@salesforce.com>",
          "to": "MummDesk <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "gmail",
          "direction": "in",
          "status": "received",
          "subject": "Re: Hey this is case 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/709/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/709",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/709/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1914,
          "created_at": "2016-01-26T01:00:18Z",
          "updated_at": "2016-01-26T01:00:24Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Hey this is case 1",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/709/replies/10001280",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/709",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/709/replies/10001280/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 710,
      "external_id": null,
      "blurb": null,
      "priority": 3,
      "locked_until": null,
      "label_ids": [
        10
      ],
      "active_at": "2016-02-12T20:21:28Z",
      "changed_at": "2016-02-12T20:04:50Z",
      "created_at": "2014-12-08T22:06:23Z",
      "updated_at": "2016-02-12T21:05:49Z",
      "first_opened_at": null,
      "opened_at": "2016-01-27T00:22:51Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 2,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2014-12-08T22:06:23Z",
      "type": "email",
      "labels": [
        "Feedback"
      ],
      "subject": "Re: testing",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/710",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/710/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/5",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/710/labels",
          "class": "label"
        },
        "assigned_user": {
          "href": "/api/v2/users/25",
          "class": "user"
        },
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/710/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/710/links",
          "class": "case_link",
          "count": 1
        },
        "macro_preview": {
          "href": "/api/v2/cases/710/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/710/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/710/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/710/notes",
          "class": "note",
          "count": 1
        },
        "attachments": {
          "href": "/api/v2/cases/710/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 5,
          "first_name": "Jacob",
          "last_name": "Mumm",
          "company": "test.net",
          "company_name": "test.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-03T20:12:22Z",
          "updated_at": "2015-12-21T22:17:55Z",
          "background": null,
          "language": "en_us",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://pbs.twimg.com/profile_images/461568902112083968/7t8s1moP_bigger.jpeg",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "jmumm@salesforce.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [
            {
              "type": "home",
              "value": "27 Spooks Mill Cove\nAsheville, NC"
            }
          ],
          "_links": {
            "self": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/18",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": {
              "href": "/api/v2/twitter_users/5",
              "class": "twitter_user"
            },
            "cases": {
              "href": "/api/v2/customers/5/cases",
              "class": "case",
              "count": 191
            },
            "labels": {
              "href": "/api/v2/customers/5/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 178,
          "created_at": "2014-12-08T22:06:23Z",
          "updated_at": "2016-01-26T01:05:30Z",
          "sent_at": "2014-12-08T22:07:13Z",
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "asdfasdf",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "sent",
          "subject": "Re: testing",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/710/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/710",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/710/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 179,
          "created_at": "2014-12-08T22:06:31Z",
          "updated_at": "2016-02-03T22:03:35Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Thanks so much for your taking the time to share your feedback with us.Adding a label",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "Jacob Mumm <jmumm@salesforce.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: testing",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/710/replies/226",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/710",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/5",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/710/replies/226/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 711,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a520d8d7f90G5af47a698b10G52a5257238262G244Gdc9b&bcode=1.1453908026.Abm3dOw0hFR6sfz2&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-02-18T17:27:21Z",
      "changed_at": "2016-01-29T06:10:31Z",
      "created_at": "2016-01-27T15:45:42Z",
      "updated_at": "2016-02-18T17:36:37Z",
      "first_opened_at": "2016-01-29T06:10:31Z",
      "opened_at": "2016-01-29T06:10:31Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-27T15:45:42Z",
      "type": "email",
      "labels": [],
      "subject": "Oregon Standoff and #WhoIsStaceyDash are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/711",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/711/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/711/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/711/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/711/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/711/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/711/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/711/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/711/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/711/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1939,
          "created_at": "2016-01-27T15:45:42Z",
          "updated_at": "2016-01-27T15:45:42Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a520d8d7f90G5af47a698b10G52a5257238262G244Gdc9b&bcode=1.1453908026.Abm3dOw0hFR6sfz2&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nOregon Standoff\n\n\"1 Dead, 7 Arrested After Traffic Stop of Armed Group Devolves Into Firefight, FBI Says\"\nhttps://facebook.com/topic/Oregon-Standoff/728129103874364\n\n\n#WhoIsStaceyDash\n\n\"Hashtag Surfaces After Actress Gabrielle Union Asks Question in Interview\"\nhttps://facebook.com/hashtag/whoisstaceydash\n\n\nMichigan State Police\n\n\"Man Dies in Car Crash After Allegedly Watching Porn While Driving, Agency Says\"\nhttps://facebook.com/topic/Michigan-State-Police/107541109275821\n\n\nRonda Rousey\n\n\"Estranged Wife of UFC Fighter’s Boyfriend Responds to Alleged Promise Ring Photo\"\nhttps://facebook.com/topic/Ronda-Rousey/107617239267867\n\n\nWahlburgers\n\n\"Restaurant Says Mark Wahlberg's Brother Paul to Attend Its Orlando, Fla., Opening\"\nhttps://facebook.com/topic/Wahlburgers/407169782761755\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS3bnSPkjCtyVX_p&u=100006072257296&mid=52a520d8d7f90G5af47a698b10G52a5257238262G244Gdc9b\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Oregon Standoff and #WhoIsStaceyDash are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/711/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/711",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/711/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1973,
          "created_at": "2016-02-18T17:27:22Z",
          "updated_at": "2016-02-18T17:27:29Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "noreply <noreply@facebookmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Oregon Standoff and #WhoIsStaceyDash are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/711/replies/10001324",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/711",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/711/replies/10001324/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 712,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a79ae3a2e8dG5af47a698b10G52a79f7d0315fG244Gcad&bcode=1.1454078222.AbmSiyo-QMlACBIw&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n================",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-01-29T15:12:18Z",
      "created_at": "2016-01-29T15:12:17Z",
      "updated_at": "2016-01-29T15:12:18Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-01-29T15:12:18Z",
      "type": "email",
      "labels": [],
      "subject": "Alexander Ovechkin and Jonathan Toews and Kelly Slater are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/712",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/712/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/712/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/712/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/712/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/712/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/712/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/712/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/712/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/712/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1941,
          "created_at": "2016-01-29T15:12:17Z",
          "updated_at": "2016-01-29T15:12:17Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52a79ae3a2e8dG5af47a698b10G52a79f7d0315fG244Gcad&bcode=1.1454078222.AbmSiyo-QMlACBIw&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nAlexander Ovechkin and Jonathan Toews\n\n\"NHL Players Suspended 1 Game for Missing All-Star Game\"\nhttps://facebook.com/topic/Alexander-Ovechkin-and-Jonathan-Toews/109355325749603\n\n\nKelly Slater\n\n\"Professional Surfer Reportedly Rescues Woman and Child From Wave in Hawaii \"\nhttps://facebook.com/topic/Kelly-Slater/108578972499715\n\n\nDonald Trump\n\n\"Presidential Candidate Holds Veterans Event After Deciding to Skip GOP Debate\"\nhttps://facebook.com/topic/Donald-Trump/105958659434457\n\n\nZika Virus\n\n\"World Health Organization Estimates 3 to 4 Million People Will Be Infected With Virus\"\nhttps://facebook.com/topic/Zika-Virus/107898719233601\n\n\nMcDonald's\n\n\"Photos Emerge Appearing to Show Fast-Food Chain's Mozzarella Sticks Without Cheese\"\nhttps://facebook.com/topic/McDonalds/112280112117874\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS1UNOvuekZwhUC5&u=100006072257296&mid=52a79ae3a2e8dG5af47a698b10G52a79f7d0315fG244Gcad\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Alexander Ovechkin and Jonathan Toews and Kelly Slater are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/712/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/712",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/712/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 713,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52aa3152be1c9G5af47a698b10G52aa35ec1e49bG244G7c00&bcode=1.1454256045.AbneNB6sJNCr5A66&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11,
        12
      ],
      "active_at": "2016-02-18T17:25:49Z",
      "changed_at": "2016-02-02T20:46:26Z",
      "created_at": "2016-02-02T19:50:55Z",
      "updated_at": "2016-02-18T17:36:37Z",
      "first_opened_at": "2016-02-02T20:46:26Z",
      "opened_at": "2016-02-02T20:46:26Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-02T19:50:55Z",
      "type": "email",
      "labels": [
        "Example",
        "More Info"
      ],
      "subject": "CIA and Angelique Kerber are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/713",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/713/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/713/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/713/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/713/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/713/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/713/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/713/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/713/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/713/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1943,
          "created_at": "2016-02-02T19:50:55Z",
          "updated_at": "2016-02-02T19:50:55Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52aa3152be1c9G5af47a698b10G52aa35ec1e49bG244G7c00&bcode=1.1454256045.AbneNB6sJNCr5A66&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nCIA\n\n\"Government Agency Shares UFO Documents Declassified in 1978, Calls Them 'X-Files'\"\nhttps://facebook.com/topic/CIA/103100849729692\n\n\nAngelique Kerber\n\n\"Tennis Player Defeats Serena Williams, 6-4, 3-6, 6-4, to Win Australian Open Final\"\nhttps://facebook.com/topic/Angelique-Kerber/108326439191640\n\n\nValentin Chmerkovskiy\n\n\"'Dancing With The Stars' Performer Facing $6 Million Lawsuit, Report Says\"\nhttps://facebook.com/topic/Valentin-Chmerkovskiy/139568202727739\n\n\nJohnny Manziel\n\n\"Fort Worth, Texas, Police Respond to Incident Involving Cleveland Browns Quarterback\"\nhttps://facebook.com/topic/Johnny-Manziel/486702781348666\n\n\nMichael Moore\n\n\"Filmmaker Pens Letter Urging Americans to Stop Sending Water to Michigan\"\nhttps://facebook.com/topic/Michael-Moore/105689932798411\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS2gxPCRfg9z_I5i&u=100006072257296&mid=52aa3152be1c9G5af47a698b10G52aa35ec1e49bG244G7c00\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "CIA and Angelique Kerber are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/713/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/713",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/713/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1972,
          "created_at": "2016-02-18T17:25:50Z",
          "updated_at": "2016-02-18T17:25:57Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "noreply <noreply@facebookmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: CIA and Angelique Kerber are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/713/replies/10001323",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/713",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/713/replies/10001323/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 714,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52acbc434738dG5af47a698b10G52acc0dca765fG244G2702&bcode=1.1454430777.AbmJZjBUOau8jMRq&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [
        11,
        12
      ],
      "active_at": "2016-02-11T01:37:02Z",
      "changed_at": "2016-02-02T20:46:26Z",
      "created_at": "2016-02-02T19:50:57Z",
      "updated_at": "2016-02-11T02:37:22Z",
      "first_opened_at": "2016-02-02T20:46:26Z",
      "opened_at": "2016-02-02T20:46:26Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-02T19:50:58Z",
      "type": "email",
      "labels": [
        "Example",
        "More Info"
      ],
      "subject": "Fox & Friends and Denver Broncos are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/714",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/714/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/714/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/714/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/714/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/714/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/714/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/714/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/714/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/714/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1945,
          "created_at": "2016-02-02T19:50:57Z",
          "updated_at": "2016-02-02T19:50:57Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52acbc434738dG5af47a698b10G52acc0dca765fG244G2702&bcode=1.1454430777.AbmJZjBUOau8jMRq&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nFox & Friends\n\n\"Morning Show Guest Says Black Voters Maintain 'Slavish Support' for Democratic Party \"\nhttps://facebook.com/topic/Fox-Friends/104140626289911\n\n\nDenver Broncos\n\n\"NFL Team's Buses Collide on Highway After Pre-Super Bowl Practice, Police Say\"\nhttps://facebook.com/topic/Denver-Broncos/107892942567561\n\n\nMetro-North Railroad\n\n\"High School Student Fatally Struck by Train in the Bronx, Official Says\"\nhttps://facebook.com/topic/Metro-North-Railroad/105444652822583\n\n\nThe Howard Stern Show\n\n\"'Crackhead Bob,' Member of Radio Program's 'Wack Pack,' Dies at Age 56\"\nhttps://facebook.com/topic/The-Howard-Stern-Show/108170129211230\n\n\nPriyanka Chopra\n\n\"Actress Announced as Presenter for 2016 Oscars Broadcast\"\nhttps://facebook.com/topic/Priyanka-Chopra/107932999234432\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS3VWv-DeWOmCk0Q&u=100006072257296&mid=52acbc434738dG5af47a698b10G52acc0dca765fG244G2702\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Fox & Friends and Denver Broncos are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/714/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/714",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/714/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1960,
          "created_at": "2016-02-11T01:37:03Z",
          "updated_at": "2016-02-11T01:37:03Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "\"MummDesk\" <mummdesk@gmail.com>",
          "to": "noreply <noreply@facebookmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Fox & Friends and Denver Broncos are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/714/replies/10001316",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/714",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/714/replies/10001316/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 715,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52af3b29dd732G5af47a698b10G52af3fc33da04G32fG927e&bcode=1.1454602284.AbkYmqyr91vnKBso&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://ww",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-02-10T21:57:27Z",
      "changed_at": "2016-02-10T21:29:45Z",
      "created_at": "2016-02-04T16:11:10Z",
      "updated_at": "2016-02-10T22:45:34Z",
      "first_opened_at": "2016-02-10T21:29:45Z",
      "opened_at": "2016-02-10T21:29:45Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-04T16:11:10Z",
      "type": "email",
      "labels": [],
      "subject": "You have more friends on Facebook than you think",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/715",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/715/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/715/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/715/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/715/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/715/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/715/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/715/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/715/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/715/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1951,
          "created_at": "2016-02-04T16:11:10Z",
          "updated_at": "2016-02-04T16:11:10Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52af3b29dd732G5af47a698b10G52af3fc33da04G32fG927e&bcode=1.1454602284.AbkYmqyr91vnKBso&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www.facebook.com/n/?find-friends%2F&medium=email&mid=52af3b29dd732G5af47a698b10G52af3fc33da04G32fG927e&bcode=1.1454602284.AbkYmqyr91vnKBso&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nThe fastest way to find all of your friends on Facebook is importing your email contacts. Once you've imported your contacts you can view, manage or delete them at any time.\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS1nUTMFwLXkOTO_&u=100006072257296&mid=52af3b29dd732G5af47a698b10G52af3fc33da04G32fG927e\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/715/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/715",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/715/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1959,
          "created_at": "2016-02-10T21:29:47Z",
          "updated_at": "2016-02-10T21:29:55Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "noreply <noreply@facebookmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/715/replies/10001315",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/715",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/715/replies/10001315/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 716,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b1aa75028e2G5af47a698b10G52b1af0e62bb4G32fGd456&bcode=1.1454769599.AbkVdzC9IyhQ7JUw&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://ww",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-06T15:39:26Z",
      "created_at": "2016-02-06T15:39:26Z",
      "updated_at": "2016-02-06T15:39:26Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-06T15:39:26Z",
      "type": "email",
      "labels": [],
      "subject": "You have more friends on Facebook than you think",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/716",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/716/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/716/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/716/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/716/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/716/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/716/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/716/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/716/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/716/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1953,
          "created_at": "2016-02-06T15:39:26Z",
          "updated_at": "2016-02-06T15:39:26Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b1aa75028e2G5af47a698b10G52b1af0e62bb4G32fGd456&bcode=1.1454769599.AbkVdzC9IyhQ7JUw&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www.facebook.com/n/?find-friends%2F&medium=email&mid=52b1aa75028e2G5af47a698b10G52b1af0e62bb4G32fGd456&bcode=1.1454769599.AbkVdzC9IyhQ7JUw&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nThe fastest way to find all of your friends on Facebook is importing your email contacts. Once you've imported your contacts you can view, manage or delete them at any time.\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS1W205uu5rrfGLV&u=100006072257296&mid=52b1aa75028e2G5af47a698b10G52b1af0e62bb4G32fGd456\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/716/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/716",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/716/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 717,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b44a672b037G5af47a698b10G52b44f008b309G32fG66f2&bcode=1.1454949970.AbmgqJLuK-xxKfhu&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://ww",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-08T16:46:21Z",
      "created_at": "2016-02-08T16:46:20Z",
      "updated_at": "2016-02-08T16:46:21Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-08T16:46:20Z",
      "type": "email",
      "labels": [],
      "subject": "You have more friends on Facebook than you think",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/717",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/717/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/717/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/717/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/717/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/717/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/717/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/717/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/717/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/717/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1955,
          "created_at": "2016-02-08T16:46:20Z",
          "updated_at": "2016-02-08T16:46:20Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b44a672b037G5af47a698b10G52b44f008b309G32fG66f2&bcode=1.1454949970.AbmgqJLuK-xxKfhu&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www.facebook.com/n/?find-friends%2F&medium=email&mid=52b44a672b037G5af47a698b10G52b44f008b309G32fG66f2&bcode=1.1454949970.AbmgqJLuK-xxKfhu&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nThe fastest way to find all of your friends on Facebook is importing your email contacts. Once you've imported your contacts you can view, manage or delete them at any time.\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS0K43Z1iiEn7y8O&u=100006072257296&mid=52b44a672b037G5af47a698b10G52b44f008b309G32fG66f2\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/717/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/717",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/717/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 718,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b6bd67bb948G5af47a698b10G52b6c2011bc1aG32fGbfe7&bcode=1.1455118285.AbknQklTzTDao66X&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://ww",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-10T15:38:52Z",
      "created_at": "2016-02-10T15:38:52Z",
      "updated_at": "2016-02-10T15:38:52Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-10T15:38:52Z",
      "type": "email",
      "labels": [],
      "subject": "You have more friends on Facebook than you think",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/718",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/718/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/718/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/718/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/718/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/718/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/718/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/718/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/718/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/718/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1957,
          "created_at": "2016-02-10T15:38:52Z",
          "updated_at": "2016-02-10T15:38:52Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52b6bd67bb948G5af47a698b10G52b6c2011bc1aG32fGbfe7&bcode=1.1455118285.AbknQklTzTDao66X&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www.facebook.com/n/?find-friends%2F&medium=email&mid=52b6bd67bb948G5af47a698b10G52b6c2011bc1aG32fGbfe7&bcode=1.1455118285.AbknQklTzTDao66X&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nThe fastest way to find all of your friends on Facebook is importing your email contacts. Once you've imported your contacts you can view, manage or delete them at any time.\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS2EE0ZusqQoN0Ez&u=100006072257296&mid=52b6bd67bb948G5af47a698b10G52b6c2011bc1aG32fGbfe7\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/718/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/718",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/718/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 719,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52b945d0008c6G5af47a698b10G52b94a6960b98G244G16a5&bcode=1.1455292334.AbmqNzY7o0irJE-S&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-12T15:52:46Z",
      "created_at": "2016-02-12T15:52:45Z",
      "updated_at": "2016-02-12T15:52:46Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-12T15:52:46Z",
      "type": "email",
      "labels": [],
      "subject": "Drita D'Avanzo and NFL are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/719",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/719/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/719/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/719/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/719/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/719/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/719/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/719/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/719/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/719/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1961,
          "created_at": "2016-02-12T15:52:46Z",
          "updated_at": "2016-02-12T15:52:45Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52b945d0008c6G5af47a698b10G52b94a6960b98G244G16a5&bcode=1.1455292334.AbmqNzY7o0irJE-S&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nDrita D'Avanzo\n\n\"'Mob Wives' Personality Arrested in New York, Police Say\"\nhttps://facebook.com/topic/Drita-DAvanzo/104070682961403\n\n\nNFL\n\n\"Group to Protest Beyoncé's Super Bowl Show Outside League's Headquarters, Reports Say\"\nhttps://facebook.com/topic/NFL/108396729192417\n\n\nLIGO\n\n\"Observatory Confirms Existence of Gravitational Waves Predicted by Albert Einstein\"\nhttps://facebook.com/topic/LIGO/108158312544909\n\n\nEli Manning\n\n\"Peyton Manning Spoofs Brother's Reaction at Super Bowl 50\"\nhttps://facebook.com/topic/Eli-Manning/107944929228659\n\n\nLos Zetas\n\n\"At Least 52 Dead in Fatal Drug Cartel Feud in Mexican Prison, Officials Say\"\nhttps://facebook.com/topic/Los-Zetas/107090545995535\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS3nV2bkBsBsHO5G&u=100006072257296&mid=52b945d0008c6G5af47a698b10G52b94a6960b98G244G16a5\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Drita D'Avanzo and NFL are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/719/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/719",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/719/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 720,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52bbca58cc3e3G5af47a698b10G52bbcef22c6b5G244Gba66&bcode=1.1455465350.AbnegNPhljgWvN-g&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-14T20:19:47Z",
      "created_at": "2016-02-14T20:19:46Z",
      "updated_at": "2016-02-14T20:19:47Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-14T20:19:46Z",
      "type": "email",
      "labels": [],
      "subject": "The Walking Dead and Polar Vortex are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/720",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/720/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/720/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/720/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/720/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/720/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/720/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/720/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/720/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/720/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1963,
          "created_at": "2016-02-14T20:19:46Z",
          "updated_at": "2016-02-14T20:19:46Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52bbca58cc3e3G5af47a698b10G52bbcef22c6b5G244Gba66&bcode=1.1455465350.AbnegNPhljgWvN-g&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nThe Walking Dead\n\n\"6th Season of AMC Show Returns Feb. 14\"\nhttps://facebook.com/topic/The-Walking-Dead/136662573036500\n\n\nPolar Vortex\n\n\"Weather Pattern Causes Extreme Low Temperatures Along the East Coast\"\nhttps://facebook.com/topic/Polar-Vortex/111147875602042\n\n\nShaun King\n\n\"Columnist Posts Documents From Case Involving Peyton Manning's Alleged Sexual Assault\"\nhttps://facebook.com/topic/Shaun-King/112247742119877\n\n\nTitanic II\n\n\"Replica of Ship That Struck Iceberg and Sank on Maiden Voyage to Set Sail in 2018\"\nhttps://facebook.com/topic/Titanic-II/153048958040408\n\n\nBill Murray\n\n\"Actor Allegedly Threw Fans' Cellphones Off of Rooftop Bar, Report Says\"\nhttps://facebook.com/topic/Bill-Murray/113251082021805\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS2rlF_T2_QywyYA&u=100006072257296&mid=52bbca58cc3e3G5af47a698b10G52bbcef22c6b5G244Gba66\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "The Walking Dead and Polar Vortex are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/720/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/720",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/720/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 722,
      "external_id": null,
      "blurb": "Testing this stuff.",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": "2016-02-18T17:25:33Z",
      "changed_at": "2016-02-16T21:57:27Z",
      "created_at": "2016-02-16T21:56:05Z",
      "updated_at": "2016-02-18T17:36:38Z",
      "first_opened_at": "2016-02-16T21:57:27Z",
      "opened_at": "2016-02-16T21:57:27Z",
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "open",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": "en",
      "received_at": "2016-02-16T21:56:06Z",
      "type": "email",
      "labels": [],
      "subject": "Testing portal email",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/722",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/722/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/120",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/722/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/722/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/722/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/722/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/722/replies",
          "class": "reply",
          "count": 1
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/722/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/722/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/722/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 120,
          "first_name": "Tester",
          "last_name": "Guy",
          "company": "mail.net",
          "company_name": "mail.net",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2016-02-16T21:56:04Z",
          "updated_at": "2016-02-16T21:56:05Z",
          "background": null,
          "language": "en",
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/cbf1fcbe57acbc7f13aa0155d07978e3?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": null
          },
          "emails": [
            {
              "type": "home",
              "value": "tguy321323123@mail.net"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/120",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/17",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/120/cases",
              "class": "case",
              "count": 1
            },
            "labels": {
              "href": "/api/v2/customers/120/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1967,
          "created_at": "2016-02-16T21:56:06Z",
          "updated_at": "2016-02-16T21:56:06Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "Testing this stuff.",
          "from": "tguy321323123@mail.net",
          "to": null,
          "cc": null,
          "bcc": null,
          "client_type": "desk_portal",
          "direction": "in",
          "status": "received",
          "subject": "Testing portal email",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/722/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/722",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/120",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/722/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": {
          "id": 1969,
          "created_at": "2016-02-16T21:57:29Z",
          "updated_at": "2016-02-16T21:59:27Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "sad fasdfasdf waefwaefwaef\n\nawefawefwa",
          "from": "MummDesk <mummdesk@gmail.com>",
          "to": "<tguy321323123@mail.net>",
          "cc": null,
          "bcc": null,
          "client_type": null,
          "direction": "out",
          "status": "draft",
          "subject": "Re: Testing portal email",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/722/replies/10001321",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": {
              "href": "/api/v2/mailboxes/outbound/1",
              "class": "outbound_mailbox"
            },
            "case": {
              "href": "/api/v2/cases/722",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/120",
              "class": "customer"
            },
            "sent_by": {
              "href": "/api/v2/users/2",
              "class": "user"
            },
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/722/replies/10001321/attachments",
              "class": "attachment"
            }
          }
        }
      }
    },
    {
      "id": 724,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52c357c3ba840G5af47a698b10G52c35c5d1ab12G32fG1c7&bcode=1.1455984351.AbnX1TXGwv-xSUCA&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-20T16:33:06Z",
      "created_at": "2016-02-20T16:33:06Z",
      "updated_at": "2016-02-20T16:33:06Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-20T16:33:06Z",
      "type": "email",
      "labels": [],
      "subject": "You have more friends on Facebook than you think",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/724",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/724/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/724/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/724/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/724/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/724/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/724/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/724/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/724/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/724/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1974,
          "created_at": "2016-02-20T16:33:06Z",
          "updated_at": "2016-02-20T16:33:06Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?medium=email&mid=52c357c3ba840G5af47a698b10G52c35c5d1ab12G32fG1c7&bcode=1.1455984351.AbnX1TXGwv-xSUCA&n_m=mummdesk%40gmail.com&lloc=2nd_cta\n\n\nFind Friends\nhttps://www.facebook.com/n/?find-friends%2F&medium=email&mid=52c357c3ba840G5af47a698b10G52c35c5d1ab12G32fG1c7&bcode=1.1455984351.AbnX1TXGwv-xSUCA&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nThe fastest way to find all of your friends on Facebook is importing your email contacts. Once you've imported your contacts you can view, manage or delete them at any time.\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS1H8ORSCp5z6ZeI&u=100006072257296&mid=52c357c3ba840G5af47a698b10G52c35c5d1ab12G32fG1c7\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "You have more friends on Facebook than you think",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/724/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/724",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/724/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    },
    {
      "id": 725,
      "external_id": null,
      "blurb": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52c5cf58f1e8dG5af47a698b10G52c5d3f25215fG244G8165&bcode=1.1456153890.Ablc4QupPUgfFFbB&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n===============",
      "priority": 4,
      "locked_until": null,
      "label_ids": [],
      "active_at": null,
      "changed_at": "2016-02-22T15:12:06Z",
      "created_at": "2016-02-22T15:12:06Z",
      "updated_at": "2016-02-22T15:12:06Z",
      "first_opened_at": null,
      "opened_at": null,
      "first_resolved_at": null,
      "resolved_at": null,
      "status": "new",
      "active_notes_count": 0,
      "active_attachments_count": 0,
      "has_pending_interactions": false,
      "has_failed_interactions": false,
      "description": null,
      "language": null,
      "received_at": "2016-02-22T15:12:06Z",
      "type": "email",
      "labels": [],
      "subject": "Miss New Jersey and Peter Liang are Trending on Facebook",
      "route_status": "available",
      "custom_fields": {
        "take_over_world_date": null,
        "global_ascension_date": null
      },
      "_links": {
        "self": {
          "href": "/api/v2/cases/725",
          "class": "case"
        },
        "message": {
          "href": "/api/v2/cases/725/message",
          "class": "email"
        },
        "customer": {
          "href": "/api/v2/customers/7",
          "class": "customer"
        },
        "labels": {
          "href": "/api/v2/cases/725/labels",
          "class": "label"
        },
        "assigned_user": null,
        "assigned_group": {
          "href": "/api/v2/groups/3",
          "class": "group"
        },
        "locked_by": null,
        "history": {
          "href": "/api/v2/cases/725/history",
          "class": "history"
        },
        "case_links": {
          "href": "/api/v2/cases/725/links",
          "class": "case_link",
          "count": 0
        },
        "macro_preview": {
          "href": "/api/v2/cases/725/macros/preview",
          "class": "macro_preview"
        },
        "replies": {
          "href": "/api/v2/cases/725/replies",
          "class": "reply",
          "count": 0
        },
        "feedbacks": null,
        "draft": {
          "href": "/api/v2/cases/725/replies/draft",
          "class": "reply"
        },
        "notes": {
          "href": "/api/v2/cases/725/notes",
          "class": "note",
          "count": 0
        },
        "attachments": {
          "href": "/api/v2/cases/725/attachments",
          "class": "attachment",
          "count": 0
        }
      },
      "_embedded": {
        "customer": {
          "id": 7,
          "first_name": "noreply",
          "last_name": "",
          "company": "facebookmail.com",
          "company_name": "facebookmail.com",
          "title": null,
          "external_id": null,
          "locked_until": null,
          "created_at": "2014-12-06T15:44:59Z",
          "updated_at": "2015-12-28T19:57:12Z",
          "background": null,
          "language": null,
          "access_private_portal": true,
          "access_company_cases": false,
          "avatar": "http://www.gravatar.com/avatar/e554508e953f28a3a1305f7e622de128?default=404&rating=PG&size=50",
          "uid": null,
          "custom_fields": {
            "my_coolness_factor": "Nobody"
          },
          "emails": [
            {
              "type": "home",
              "value": "noreply@facebookmail.com"
            }
          ],
          "phone_numbers": [],
          "addresses": [],
          "_links": {
            "self": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "locked_by": null,
            "company": {
              "href": "/api/v2/companies/5",
              "class": "company"
            },
            "facebook_user": null,
            "twitter_user": null,
            "cases": {
              "href": "/api/v2/customers/7/cases",
              "class": "case",
              "count": 161
            },
            "labels": {
              "href": "/api/v2/customers/7/labels",
              "class": "label"
            }
          }
        },
        "message": {
          "id": 1976,
          "created_at": "2016-02-22T15:12:06Z",
          "updated_at": "2016-02-22T15:12:06Z",
          "sent_at": null,
          "erased_at": null,
          "hidden_by": null,
          "hidden_at": null,
          "body": "========================================\nGo to Facebook\nhttps://www.facebook.com/n/?home.php&medium=email&mid=52c5cf58f1e8dG5af47a698b10G52c5d3f25215fG244G8165&bcode=1.1456153890.Ablc4QupPUgfFFbB&n_m=mummdesk%40gmail.com&lloc=1st_cta\n\n========================================\n\nHi Mumm,\n\nHere are the stories people are talking about.\n\nMiss New Jersey\n\n\"Ex-Pageant Winner Cara McCollum Dies Following Car Crash, Family Says\"\nhttps://facebook.com/topic/Miss-New-Jersey/134593936573177\n\n\nPeter Liang\n\n\"Rallies Take Place in Support of Ex-Officer Convicted in Fatal Shooting of Akai Gurley\"\nhttps://facebook.com/topic/Peter-Liang/109358239082421\n\n\nDeadpool\n\n\"Ryan Reynolds Responds to Petition for Marvel Character to Host 'Saturday Night Live'\"\nhttps://facebook.com/topic/Deadpool/103999386304366\n\n\nKim Kardashian\n\n\"Reality TV Personality Shares 1st Photo of Her Son, Saint\"\nhttps://facebook.com/topic/Kim-Kardashian/112949242053725\n\n\nSandy Hook Elementary School\n\n\"Company That Made Rifle Used in 2012 Shooting Seeks to Dismiss Lawsuit\"\nhttps://facebook.com/topic/Sandy-Hook-Elementary-School/571971226152251\n\n\n\n\n\nThanks,\nThe Facebook Team\n\n\n\n========================================\nThis message was sent to mummdesk@gmail.com. If you don't want to receive these emails from Facebook in the future, please follow the link below to unsubscribe.\nhttps://www.facebook.com/o.php?k=AS2D13DW-zdrU5R4&u=100006072257296&mid=52c5cf58f1e8dG5af47a698b10G52c5d3f25215fG244G8165\nFacebook, Inc., Attention: Community Support, Menlo Park, CA 94025\n\n\n",
          "from": "Facebook <notification+zj4ytf_a02_6@facebookmail.com>",
          "to": "Mumm Cust <mummdesk@gmail.com>",
          "cc": null,
          "bcc": null,
          "client_type": "unknown",
          "direction": "in",
          "status": "received",
          "subject": "Miss New Jersey and Peter Liang are Trending on Facebook",
          "hidden": false,
          "_links": {
            "self": {
              "href": "/api/v2/cases/725/message",
              "class": "email"
            },
            "splits": null,
            "outbound_mailbox": null,
            "case": {
              "href": "/api/v2/cases/725",
              "class": "case"
            },
            "customer": {
              "href": "/api/v2/customers/7",
              "class": "customer"
            },
            "sent_by": null,
            "erased_by": null,
            "attachments": {
              "href": "/api/v2/cases/725/message/attachments",
              "class": "attachment"
            }
          }
        },
        "draft": null
      }
    }
  ];