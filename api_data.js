define({ "api": [
  {
    "type": "get",
    "url": "/bridge/stats",
    "title": "Get bridge statistics (techs & vintages)",
    "description": "<p>Return statistics about EATs techs &amp; vintages bridged</p>",
    "version": "1.0.0",
    "name": "BridgeContentStatistics",
    "group": "Bridge",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of EATs bridged</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "techBlends",
            "description": "<p>List of tech blends</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "vintages",
            "description": "<p>Dictionary of vintages and their counts</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/bridge.route.ts",
    "groupTitle": "Bridge",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bridge/recent",
    "title": "Get recent bridge transactions",
    "description": "<p>Return a list of certificartes that have recently been bridging on or off</p>",
    "version": "1.0.0",
    "name": "BridgeRecentTransactions",
    "group": "Bridge",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "txs",
            "description": "<p>List of recent bridge transactions</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/bridge.route.ts",
    "groupTitle": "Bridge",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bridge",
    "title": "Get bridge summary",
    "description": "<p>Return statistics about bridging-on and bridging-off</p>",
    "version": "1.0.0",
    "name": "BridgeSummary",
    "group": "Bridge",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "inbound",
            "description": "<p>List of inbound bridge transactions</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "outbound",
            "description": "<p>List of outbound bridge transactions</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/bridge.route.ts",
    "groupTitle": "Bridge",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/bridge/bridge-off",
    "title": "Get bridge off requests for an organization",
    "description": "<p>Get a list of bridge off requests for an organization</p>",
    "version": "1.0.0",
    "name": "OrganizationBridgeOffRequests",
    "group": "Bridge",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "bridgeOffs",
            "description": "<p>List of bridge off requests</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/bridge.route.ts",
    "groupTitle": "Bridge",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eac/:certificateId",
    "title": "Get one energy attribute certificate",
    "description": "<p>Get energy attribute certificate information.</p>",
    "version": "1.0.0",
    "name": "GetEnergyAttributeCertificate",
    "group": "EnergyAttributeCertificate",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/eac.route.ts",
    "groupTitle": "EnergyAttributeCertificate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/eac",
    "title": "List all energy attribute certificates",
    "description": "<p>Get a list of energy attribute certificates.</p>",
    "version": "1.0.0",
    "name": "ListEnergyAttributeCertificates",
    "group": "EnergyAttributeCertificate",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>List page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "perPage",
            "defaultValue": "1",
            "description": "<p>energy-attribute-certificate's per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "IMPORTED",
              "TOKENIZED",
              "RETIRED",
              "REVOKED"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>energy-attribute-certificate status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "None",
              "Green-e"
            ],
            "optional": true,
            "field": "endorsement",
            "description": "<p>energy-attribute-certificate endorsement</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "admin",
              "user"
            ],
            "optional": true,
            "field": "techType",
            "description": "<p>energy-attribute-certificate techType</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "REC",
              "IREC",
              "GO"
            ],
            "optional": true,
            "field": "type",
            "description": "<p>energy-attribute-certificate type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "quantity",
            "description": "<p>energy-attribute-certificate quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "PJM-GATS",
              "M-RETS",
              "NAR",
              "NYGATS",
              "ERCOT",
              "NVTRECS"
            ],
            "optional": true,
            "field": "registry",
            "description": "<p>energy-attribute-certificate registry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeCertificate[]",
            "optional": false,
            "field": "energy-attribute-certificate[]",
            "description": "<p>EnergyAttributeCertificate's that match the query params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example",
          "content": "[\n {}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can list the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/eac.route.ts",
    "groupTitle": "EnergyAttributeCertificate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/eac/list",
    "title": "List all energy attribute certificates with given IDs",
    "description": "<p>Get a list of energy attribute certificates.</p>",
    "version": "1.0.0",
    "name": "ListEnergyAttributeCertificatesByIds",
    "group": "EnergyAttributeCertificate",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "certificateIds",
        "description": "<p>Array of UUID Strings of the certificates</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "page",
        "defaultValue": "1",
        "description": "<p>List page</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "perPage",
        "defaultValue": "1",
        "description": "<p>energy-attribute-certificate's per page</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "IMPORTED",
          "TOKENIZED",
          "RETIRED",
          "REVOKED"
        ],
        "optional": true,
        "field": "status",
        "description": "<p>energy-attribute-certificate status</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "None",
          "Green-e"
        ],
        "optional": true,
        "field": "endorsement",
        "description": "<p>energy-attribute-certificate endorsement</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "admin",
          "user"
        ],
        "optional": true,
        "field": "techType",
        "description": "<p>energy-attribute-certificate techType</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "REC",
          "IREC",
          "GO"
        ],
        "optional": true,
        "field": "type",
        "description": "<p>energy-attribute-certificate type</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "quantity",
        "description": "<p>energy-attribute-certificate quantity</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "PJM-GATS",
          "M-RETS",
          "NAR",
          "NYGATS",
          "ERCOT",
          "NVTRECS"
        ],
        "optional": true,
        "field": "registry",
        "description": "<p>energy-attribute-certificate registry</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeCertificate[]",
            "optional": false,
            "field": "energy-attribute-certificate[]",
            "description": "<p>EnergyAttributeCertificate's that match the query params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can list the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/eac.route.ts",
    "groupTitle": "EnergyAttributeCertificate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/eac/request-batch-mint-signature",
    "title": "Request a mint signature for a batch of certificates",
    "description": "<p>Request a cryptographic signature from the backend that permits a particular address to mint multiple Jasmine EAT</p>",
    "version": "1.0.0",
    "name": "RequestBatchMintSignature",
    "group": "EnergyAttributeCertificate",
    "permission": [
      {
        "name": "GENERATOR"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "minterAddress",
        "description": "<p>Blockchain address of the requesting minter</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "certificateId",
        "description": "<p>String UUID of the certificate to be minted</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Medias[]",
            "optional": false,
            "field": "media",
            "description": "<p>Media instances</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/eac.route.ts",
    "groupTitle": "EnergyAttributeCertificate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/eac/:certificateId/request-mint-signature",
    "title": "Request a mint signature for a certificate",
    "description": "<p>Request a cryptographic signature from the backend that permits a particular address to mint a Jasmine EAT</p>",
    "version": "1.0.0",
    "name": "RequestMintSignature",
    "group": "EnergyAttributeCertificate",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "minterAddress",
        "description": "<p>Blockchain address of the requesting minter</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "certificateId",
        "description": "<p>String UUID of the certificate to be minted</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Medias[]",
            "optional": false,
            "field": "media",
            "description": "<p>Media instances</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/eac.route.ts",
    "groupTitle": "EnergyAttributeCertificate",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/eat/metadata",
    "title": "Get EATs",
    "description": "<p>Return EATs for a given set of energyAttributeTokenIds</p>",
    "version": "1.0.0",
    "name": "GetEATs",
    "group": "EnergyAttributeToken",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "energyAttributeTokenIds",
        "description": "<p>Array of token ids</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeToken[]",
            "optional": false,
            "field": "tokens",
            "description": "<p>List of EATs</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat/:energyAttributeTokenId([0-9]+).json",
    "title": "Get EAT JSON metadata",
    "description": "<p>Return EAT token metadata</p>",
    "version": "1.0.0",
    "name": "TokenJSONMetadata",
    "group": "EnergyAttributeToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "energyAttributeTokenId",
            "description": "<p>Token id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Token id</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Token name</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Token description</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Token image</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "external_url",
            "description": "<p>Token external url</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "background_color",
            "description": "<p>Token background color</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "attributes",
            "description": "<p>Token attributes</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/eat/metadata",
    "title": "Get Batch EAT metadata",
    "description": "<p>Return metadata for a set of EAT tokens</p>",
    "version": "1.0.0",
    "name": "TokenMetadata",
    "group": "EnergyAttributeToken",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "energyAttributeTokenIds",
        "description": "<p>Array of token ids</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EATMetadata[]",
            "optional": false,
            "field": "/",
            "description": "<p>List of EATs</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat",
    "title": "Get EATs for a wallet",
    "description": "<p>Return EATs held by a given wallet</p>",
    "version": "1.0.0",
    "name": "TokenizationMetadata",
    "group": "EnergyAttributeToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "holderAddress",
            "description": "<p>Wallet address</p>"
          },
          {
            "group": "200 OK",
            "type": "EnergyAttributeTokenHolding",
            "optional": false,
            "field": "holding",
            "description": "<p>List of EATs</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "contractAddress",
            "description": "<p>Contract address</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat/summary",
    "title": "Get EAT tokenization summary",
    "description": "<p>Return a summary of recent tokenizations</p>",
    "version": "1.0.0",
    "name": "TokenizationStatistics",
    "group": "EnergyAttributeToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletAddress",
            "description": "<p>Wallet address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of EATs tokenized</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "techBlends",
            "description": "<p>List of tech blends</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "vintages",
            "description": "<p>Dictionary of vintages and their counts</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat/stats",
    "title": "Get EAT statistics (techs & vintages)",
    "description": "<p>Return User Token Stats</p>",
    "version": "1.0.0",
    "name": "TokenizationUserStats",
    "group": "EnergyAttributeToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of EATs tokenized</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "techBlends",
            "description": "<p>List of tech blends</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "vintages",
            "description": "<p>Dictionary of vintages and their counts</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat/retirements",
    "title": "Get EAT retirements summary (techs & vintages)",
    "description": "<p>Return retired EATs for a given wallet</p>",
    "version": "1.0.0",
    "name": "UserTokenRetirementsSummary",
    "group": "EnergyAttributeToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of EATs retired</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "techBlends",
            "description": "<p>List of tech blends</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "vintages",
            "description": "<p>Dictionary of vintages and their counts</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/eat/with-prices",
    "title": "Get EATs with prices",
    "description": "<p>Return EATs held by a given wallet with prices (calculated based on eligible pools for token)</p>",
    "version": "1.0.0",
    "name": "UserTokenWithPrices",
    "group": "EnergyAttributeToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeTokenBalance",
            "optional": false,
            "field": "holding",
            "description": "<p>List of EATs with prices</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/eat.route.ts",
    "groupTitle": "EnergyAttributeToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/id/:energyCertificateRetirementId",
    "title": "Get an energy certificate retirement record",
    "description": "<p>Get an energy certificate retirement.</p>",
    "version": "1.0.0",
    "name": "GetEnergyCertificateRetirement",
    "group": "EnergyCertificateRetirement",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serialNumber",
            "description": "<p>Energy certificate serial number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyCertificateRetirement",
            "optional": false,
            "field": "/",
            "description": "<p>Energy certificate retirement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/:transactionHash",
    "title": "Get retirement record by transaction hash",
    "description": "<p>Get records of energy certificate retirement.</p>",
    "version": "1.0.0",
    "name": "GetRetirementByTransactionHash",
    "group": "EnergyCertificateRetirement",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "RetirementTransaction",
            "optional": false,
            "field": "retirement",
            "description": "<p>Energy certificate retirement</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement"
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/transactions",
    "title": "List recent retirements grouped by transaction",
    "description": "<p>List recent retirements grouped by transaction</p>",
    "version": "1.0.0",
    "name": "RecentRetirementTransactions",
    "group": "EnergyCertificateRetirement",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyCertificateRetirement[]",
            "optional": false,
            "field": "retirements",
            "description": "<p>Energy certificate retirements grouped by transaction</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "409 Conflict": [
          {
            "group": "409 Conflict",
            "optional": false,
            "field": "MySQLError",
            "description": "<p>Some parameters are already presents in database (username or email)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "409",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"statusCode\": 409,\n  \"statusText\": \"Conflict\",\n  \"errors\": [\n    \"Duplicate entry for key IDX.542115fs84521fsd\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/transactions",
    "title": "List recent retirements",
    "description": "<p>List recent retirements</p>",
    "version": "1.0.0",
    "name": "RecentRetirementTransactions",
    "group": "EnergyCertificateRetirement",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response example",
          "content": "{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "409 Conflict": [
          {
            "group": "409 Conflict",
            "optional": false,
            "field": "MySQLError",
            "description": "<p>Some parameters are already presents in database (username or email)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "409",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"statusCode\": 409,\n  \"statusText\": \"Conflict\",\n  \"errors\": [\n    \"Duplicate entry for key IDX.542115fs84521fsd\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/:chainId/retirement/download-pdfs",
    "title": "Download attestation PDFs for retirements",
    "description": "<p>Returns a signed url for a zip or a batched pdf for available transactions</p>",
    "version": "1.0.0",
    "name": "RetirementDownloadAttestationPDFs",
    "group": "EnergyCertificateRetirement",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "transactionHashes",
        "description": "<p>Retirement transaction hashes</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>AWS PDF/Zip signed file url</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/summary",
    "title": "",
    "description": "<p>Return retirement metadata</p>",
    "version": "1.0.0",
    "name": "RetirementMetadata",
    "group": "EnergyCertificateRetirement",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Metadata",
            "optional": false,
            "field": "media",
            "description": "<p>Media instances</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route does not exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement"
  },
  {
    "type": "get",
    "url": "/:chainId/retirement/summary",
    "title": "",
    "description": "<p>Return retirement metadata</p>",
    "version": "1.0.0",
    "name": "RetirementMetadata",
    "group": "EnergyCertificateRetirement",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Metadata",
            "optional": false,
            "field": "media",
            "description": "<p>Media instances</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Route does not exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement"
  },
  {
    "type": "post",
    "url": "/:chainId/retirement/view-pdfs",
    "title": "View attestation PDFs for retirements",
    "description": "<p>Returns attestation PDFs for retirements (if available)</p>",
    "version": "1.0.0",
    "name": "RetirementViewAttestationPDFs",
    "group": "EnergyCertificateRetirement",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "transactionHashes",
        "description": "<p>Retirement transaction hashes</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "RetirementAttestationPDF[]",
            "optional": false,
            "field": ".",
            "description": "<p>AWS PDF file instances</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": ".url",
            "description": "<p>AWS PDF file url</p>"
          },
          {
            "group": "200 OK",
            "type": "EnergyCertificateRetirement[]",
            "optional": false,
            "field": ".retirementTransactions",
            "description": "<p>Retirement transactions</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": ".size",
            "description": "<p>AWS PDF file size</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": ".contentType",
            "description": "<p>AWS PDF file content type</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/:chainId/retirement/",
    "title": "Submit retirement information for a retired energy attribute certificate",
    "description": "<p>Submit retirement information</p>",
    "version": "1.0.0",
    "name": "SubmitEnergyCertificateRetirement",
    "group": "EnergyCertificateRetirement",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "transactionHash",
        "description": "<p>Transaction hash</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet address</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "quantity",
        "description": "<p>Quantity</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "reason",
        "description": "<p>Reason for retirement</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "beneficiary",
        "description": "<p>Beneficiary of retirement</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "EAT",
          "JLT"
        ],
        "optional": true,
        "field": "retirementType",
        "description": "<p>Retirement type</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": true,
        "field": "auditRequested",
        "description": "<p>Audit requested</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "auditYear",
        "description": "<p>Audit year</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "PENDING",
          "INITIATED",
          "SUBMITTED",
          "COMPLETED",
          "CANCELLED"
        ],
        "optional": false,
        "field": "status",
        "description": "<p>Status</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "organizationId",
        "description": "<p>Organization id</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "409 Conflict": [
          {
            "group": "409 Conflict",
            "optional": false,
            "field": "MySQLError",
            "description": "<p>Some parameters are already presents in database (username or email)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "409",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"statusCode\": 409,\n  \"statusText\": \"Conflict\",\n  \"errors\": [\n    \"Duplicate entry for key IDX.542115fs84521fsd\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/retirement.route.ts",
    "groupTitle": "EnergyCertificateRetirement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/generator/",
    "title": "Create a new generator application",
    "description": "<p>Create new generator application</p>",
    "version": "1.0.0",
    "name": "CreateEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>Name of the electrical generation facility or unit</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "organizationId",
        "description": "<p>Organization id</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Some parameters may contain invalid values</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can create the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only admins can create the data</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "409 Conflict": [
          {
            "group": "409 Conflict",
            "optional": false,
            "field": "MySQLError",
            "description": "<p>Some parameters are already presents in database (username or email)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "409",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"statusCode\": 409,\n  \"statusText\": \"Conflict\",\n  \"errors\": [\n    \"Duplicate entry for key IDX.542115fs84521fsd\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/generator",
    "title": "Get all generators for organization",
    "description": "<p>Get all generators for organization</p>",
    "version": "1.0.0",
    "name": "GetEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/generator/:generatorId",
    "title": "Get an energy generator record",
    "description": "<p>Get an energy generator record</p>",
    "version": "1.0.0",
    "name": "GetEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/generator/:generatorId",
    "title": "Get an energy generator record",
    "description": "<p>Get an energy generator record</p>",
    "version": "1.0.0",
    "name": "GetEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/generator/:generatorId",
    "title": "Upload documents to in-progress Energy Generator application",
    "description": "<p>Append document to EnergyGenerator</p>",
    "version": "1.0.0",
    "name": "PostEnergyGeneratorDocuments",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/generator/:generatorId",
    "title": "Append detail to an in-progress Energy Generator application",
    "description": "<p>Append details to EnergyGenerator</p>",
    "version": "1.0.0",
    "name": "PutEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/generator/:generatorId",
    "title": "Submit a pending generator application for review",
    "description": "<p>Submit EnergyGenerator for review</p>",
    "version": "1.0.0",
    "name": "SubmitEnergyGenerator",
    "group": "EnergyGenerator",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Energy certificate retirement id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyGenerator",
            "optional": false,
            "field": "EnergyGenerator",
            "description": "<p>object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Only authenticated users can access the data</p>"
          }
        ],
        "403 Forbidden": [
          {
            "group": "403 Forbidden",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Only user with same id or admins can access the data</p>"
          }
        ],
        "404 Not Found": [
          {
            "group": "404 Not Found",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User does not exist</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"statusCode\": 401,\n  \"statusText\": \"Unauthorized\",\n  \"errors\": [\n    \"Password must match to authorize a token generating\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "403",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"statusCode\": 403,\n  \"statusText\": \"Forbidden\",\n  \"errors\": [\n    \"Only user with same id or admin can access to resource\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/generator.route.ts",
    "groupTitle": "EnergyGenerator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/estimates/rec-value",
    "title": "Obtain value of RECs based on UniSwap price",
    "description": "<p>Obtain value of RECs based on UniSwap price.</p>",
    "version": "1.0.0",
    "name": "RecValueEstimate",
    "group": "Estimates",
    "permission": [
      {
        "name": "public"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": true,
        "field": "certificateIds",
        "description": "<p>Array of UUID Strings of the certificates</p>"
      },
      {
        "group": "Body",
        "type": "Number[]",
        "optional": true,
        "field": "quantities",
        "description": "<p>Array of numbers of the quantities of the certificates</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Payload example",
          "content": "{\n   \"certificateIds\": [\n      \"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaa10\",\n       \"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaa11\",\n       \"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaa12\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "InvalidCertificateIds",
            "description": "<p>CertificateIds is required as array of unique UUID strings.</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/estimates.route.ts",
    "groupTitle": "Estimates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"https://*\""
            ],
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin URL</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/estimates/rec-value/:poolAddress",
    "title": "Obtain value of RECs based on UniSwap price, fetched by pool address",
    "description": "<p>Obtain value of RECs based on UniSwap price, fetched by pool address.</p>",
    "version": "1.0.0",
    "name": "RecValueEstimateByPoolAddress",
    "group": "Estimates",
    "permission": [
      {
        "name": "public"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "quantity",
        "description": "<p>Quantitiy of RECs to estimate value for</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Payload example",
          "content": "{\n   \"quantity\": 5000\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "InvalidAmount",
            "description": "<p>quantity is required as a number.</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/estimates.route.ts",
    "groupTitle": "Estimates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/estimates/solar-rec-revenue",
    "title": "Estimate",
    "description": "<p>Estimate annual REC revenue from a residential solar installation</p>",
    "version": "1.0.0",
    "name": "SolarRecRevenueEstimate",
    "group": "Estimates",
    "permission": [
      {
        "name": "public"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "address",
        "description": "<p>Street address of generator</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "annualProduction",
        "description": "<p>Estimated annual energy production in kWh (optional)</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "tilt",
        "description": "<p>Angle of solar panel tilt on roof (optional)</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "azimuth",
        "description": "<p>Orientation angle of solar panel (optional)</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Payload example",
          "content": "{\n   \"address\": \"1600 Pennsylvania Ave Washington DC\"\n}",
          "type": "json"
        },
        {
          "title": "Payload example",
          "content": "{\n   \"location\": { \"lat\": \"\", lng: \"\" },\n   \"annualProduction\": 9150\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "InvalidAnnualProduction",
            "description": "<p>Annual production is required as number.</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/estimates.route.ts",
    "groupTitle": "Estimates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"https://*\""
            ],
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin URL</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/estimates/uniswap/lp",
    "title": "Obtain USD value a UniSwap LP position given the LP ID",
    "description": "<p>Obtain USD value a UniSwap LP position given the LP ID</p>",
    "version": "1.0.0",
    "name": "UniSwapLPValueEstimateById",
    "group": "Estimates",
    "permission": [
      {
        "name": "public"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": true,
        "field": "lpId",
        "description": "<p>ID of the UniSwap LP position</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Payload example",
          "content": "{\n   \"lpId\": 8912412481\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400 Bad Request": [
          {
            "group": "400 Bad Request",
            "optional": false,
            "field": "InvalidAmount",
            "description": "<p>quantity is required as a number.</p>"
          }
        ],
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"statusCode\": 400,\n  \"statusText\": \"Bad request\",\n  \"errors\": [\n    {\n      \"field\": \"email\",\n      \"types\": [\n        \"string.email\"\n      ],\n      \"messages\": [\n        \"\\\"email\\\" must be a valid email address\"\n      ]\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/estimates.route.ts",
    "groupTitle": "Estimates",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/fjlt/:symbol",
    "title": "",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "BasisPool",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:address",
    "title": "",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "BasisPool",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:address/positions",
    "title": "",
    "description": "<p>Return all positions from a basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolDeposits",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:address/withdrawRequest",
    "title": "",
    "description": "<p>Return all withdrawRequest from a basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolDeposits",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:address/history",
    "title": "",
    "description": "<p>Return the recent transaction history for a basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolHistory",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:address/price",
    "title": "",
    "description": "<p>Return the price history for a specific basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolPriceHistory",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress/data",
    "title": "Get Basis Pool Chart Data",
    "description": "<p>Return the price (or dialy volume or total value locked) history for a specific basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolPriceHistory",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poolAddress",
            "description": "<p>Address of the pool</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"price\"",
              "\"daily_volume\"",
              "\"total_value_locked\""
            ],
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to return</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "startDate",
            "description": "<p>Start date of the data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endDate",
            "description": "<p>End date of the data</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "today",
              "yesterday",
              "this_month",
              "last_month",
              "this_quarter",
              "maximum",
              "data_maximum",
              "last_3d",
              "last_7d",
              "last_14d",
              "last_28d",
              "last_30d",
              "last_90d",
              "last_week_mon_sun",
              "last_week_sun_sat",
              "last_quarter",
              "last_year",
              "this_week_mon_today",
              "this_week_sun_today",
              "this_year"
            ],
            "optional": true,
            "field": "datePreset",
            "description": "<p>Timeframe to return <strong>StartDate &amp; EndDate MUST be <code>null</code> if datePreset is provided</strong></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "ChartData[]",
            "optional": false,
            "field": ".",
            "description": ""
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "..date",
            "description": "<p>Date of the data point</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "..value",
            "description": "<p>Value of the data point</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/fjlt/:address/summary",
    "title": "",
    "description": "<p>Return summary of a deployed basis pool</p>",
    "version": "1.0.0",
    "name": "BasisPoolSummary",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress",
    "title": "Get Basis Pool By Address",
    "description": "<p>Returns a basis pool by address</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolByAddress",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poolAddress",
            "description": "<p>Address of the pool</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletAddress",
            "description": "<p>Optional wallet address (If provided, will return eligible tokens &amp; balance for the wallet)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "BasisPool",
            "optional": false,
            "field": ".",
            "description": "<p>Basis pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.techBlends",
            "description": "<p>Stats of tech blends in the pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.vintages",
            "description": "<p>Stats of vintages in the pool</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:symbol",
    "title": "Get Basis Pool By Symbol",
    "description": "<p>Returns a basis pool by symbol</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolBySymbol",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>Symbol of the pool</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletAddress",
            "description": "<p>Optional wallet address (If provided, will return eligible tokens &amp; balance for the wallet)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "BasisPool",
            "optional": false,
            "field": ".",
            "description": "<p>Basis pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.techBlends",
            "description": "<p>Stats of tech blends in the pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.vintages",
            "description": "<p>Stats of vintages in the pool</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress/deposits",
    "title": "Get Basis Pool Deposits",
    "description": "<p>Return all deposits from a basis pool</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolDeposits",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poolAddress",
            "description": "<p>Address of the pool</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeToken[]",
            "optional": false,
            "field": "deposits",
            "description": "<p>List of deposits</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of deposits</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress/eligible",
    "title": "Get Basis Pool Eligible Tokens for wallet",
    "description": "<p>Return all eligible tokens from a wallet for a basis pool</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolEligibleTokens",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "EnergyAttributeToken[]",
            "optional": false,
            "field": "eligibleTokens",
            "description": "<p>List of eligible EATs</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of eligible EATs</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "totalTokens",
            "description": "<p>Total number of EATs in the wallet</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress/history",
    "title": "Get Basis Pool History",
    "description": "<p>Return the recent transaction history for a basis pool</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolHistory",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poolAddress",
            "description": "<p>Address of the pool</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Transaction[]",
            "optional": false,
            "field": "transactions",
            "description": "<p>List of transactions</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:poolAddress/summary",
    "title": "Get Basis Pool Summary",
    "description": "<p>Return summary of a deployed basis pool</p>",
    "version": "1.0.0",
    "name": "GetBasisPoolSummary",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "poolAddress",
            "description": "<p>Address of the pool</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletAddress",
            "description": "<p>Optional wallet address (If provided, will return eligible tokens &amp; balance for the wallet)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "BasisPool",
            "optional": false,
            "field": ".",
            "description": "<p>Basis pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.techBlends",
            "description": "<p>Stats of tech blends in the pool</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "/.vintages",
            "description": "<p>Stats of vintages in the pool</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt",
    "title": "Return all basis pools",
    "description": "<p>Return jasmine basis pool token</p>",
    "version": "1.0.0",
    "name": "GetBasisPools",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "walletAddress",
            "description": "<p>Optional wallet address (If provided, will return eligible tokens &amp; balance for the wallet)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "BasisPool[]",
            "optional": false,
            "field": "pools",
            "description": "<p>List of basis pools</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total number of basis pools</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "activity",
            "description": "<p>Total activity</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "activity.dailyVolume",
            "description": "<p>Total daily volume</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "activity.monthlyVolume",
            "description": "<p>Total monthly volume</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "activity.totalValueLocked",
            "description": "<p>Total value locked</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/:walletAddress/balance",
    "title": "Get Basis Pool Balance for wallet",
    "description": "<p>Return the balance of a wallet for a basis pool</p>",
    "version": "1.0.0",
    "name": "GetJLTUserBalance",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "totalTokens",
            "description": "<p>Total number of EATs in the wallet (as a bigint string)</p>"
          },
          {
            "group": "200 OK",
            "type": "BasisPoolBalance[]",
            "optional": false,
            "field": "balances",
            "description": "<p>Balance of the wallet</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "balances.priceUSD",
            "description": "<p>Price of the token in USD</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "balances.balance",
            "description": "<p>Balance of the token in the wallet (as a bigint string)</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "balances.blockNumber",
            "description": "<p>Block number of the balance</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "balances.walletAddress",
            "description": "<p>Wallet address</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "balances.poolAddress",
            "description": "<p>Pool address</p>"
          },
          {
            "group": "200 OK",
            "type": "BasisPool",
            "optional": false,
            "field": "balances.pool",
            "description": "<p>Basis pool</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/fjlt/metadata/:symbol",
    "title": "",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadata",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/metadata/:symbol",
    "title": "",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadata",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/metadata/:symbol",
    "title": "",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadata",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/jlt/metadata/:address",
    "title": "Get ERC-1046 compliant metadata by address",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadataByAddress",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address of the token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "interop",
            "description": "<p>Interoperability information</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1046",
            "description": "<p>Whether the token is ERC-1046 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc721",
            "description": "<p>Whether the token is ERC-721 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1155",
            "description": "<p>Whether the token is ERC-1155 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "decimals",
            "description": "<p>Number of decimals</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URI of the token image</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>List of URIs of the token images</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "icons",
            "description": "<p>List of URIs of the token icons</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary of the token</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/trade/token/metadata/:address",
    "title": "Get ERC-1046 compliant metadata by address",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadataByAddress",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Address of the token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "interop",
            "description": "<p>Interoperability information</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1046",
            "description": "<p>Whether the token is ERC-1046 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc721",
            "description": "<p>Whether the token is ERC-721 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1155",
            "description": "<p>Whether the token is ERC-1155 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "decimals",
            "description": "<p>Number of decimals</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URI of the token image</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>List of URIs of the token images</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "icons",
            "description": "<p>List of URIs of the token icons</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary of the token</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/trade.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jlt/metadata/:symbol",
    "title": "Get ERC-1046 compliant metadata by symbol",
    "description": "<p>Returns ERC-1046 compliant metadata. This route is returned by JLT smart contracts.</p>",
    "version": "1.0.0",
    "name": "GetTokenMetadataBySymbol",
    "group": "JasmineBasisToken",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "symbol",
            "description": "<p>Symbol of the token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "interop",
            "description": "<p>Interoperability information</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1046",
            "description": "<p>Whether the token is ERC-1046 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc721",
            "description": "<p>Whether the token is ERC-721 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Boolean",
            "optional": false,
            "field": "interop.erc1155",
            "description": "<p>Whether the token is ERC-1155 compliant</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "decimals",
            "description": "<p>Number of decimals</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URI of the token image</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "images",
            "description": "<p>List of URIs of the token images</p>"
          },
          {
            "group": "200 OK",
            "type": "String[]",
            "optional": false,
            "field": "icons",
            "description": "<p>List of URIs of the token icons</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "summary",
            "description": "<p>Summary of the token</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/jlt.route.ts",
    "groupTitle": "JasmineBasisToken",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/fjlt/getTokenPairPrice",
    "title": "",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "GetTokenPairPrice",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt/:walletAddress/balance",
    "title": "",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "JLTUserBalance",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/fjlt",
    "title": "",
    "description": "<p>Return jasmine basis pool token</p>",
    "version": "1.0.0",
    "name": "TokenizationStatistics",
    "group": "JasmineBasisToken",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Server Error": [
          {
            "group": "500 Server Error",
            "optional": false,
            "field": "internal",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/fjlt.route.ts",
    "groupTitle": "JasmineBasisToken"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Ping API root",
    "version": "1.0.0",
    "name": "Status",
    "group": "Main",
    "permission": [
      {
        "name": "public"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "/",
            "description": "<p>Success message as &quot;OK&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200\nOK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "NotAcceptable",
            "description": "<p>An expected header value was not passed correctly.</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>An unexpected error was occurred.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/main.route.ts",
    "groupTitle": "Main"
  },
  {
    "type": "post",
    "url": "/organization/:organizationId/add-wallet",
    "title": "Add wallet to organization",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "AddWalletToOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization ID</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "walletAddresses",
        "description": "<p>List of wallet addresses</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "role",
        "description": "<p>Authorized role within organization (optional)</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/organization.route.ts",
    "groupTitle": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/organization/:organizationId/wallets",
    "title": "Get list of wallet addresses within an organization",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "GetWalletsInOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/organization.route.ts",
    "groupTitle": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/organization/kyc",
    "title": "Submit KYC request",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "SubmitOrganizationKycRequest",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>Organization ID</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "name",
        "description": "<p>User name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "email",
        "description": "<p>User email</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "businessName",
        "description": "<p>User business name</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "address",
        "description": "<p>User address</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "address2",
        "description": "<p>User address 2</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "city",
        "description": "<p>User city</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "state",
        "description": "<p>User state</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "zip",
        "description": "<p>User zip</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "registries",
        "description": "<p>User registries</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "registriesInfo",
        "description": "<p>User registries info</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/organization.route.ts",
    "groupTitle": "Organization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/organization",
    "title": "Get an organization",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "getAuthedOrganization",
    "group": "Organization",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{ }</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/organization.route.ts",
    "groupTitle": "Organization",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/organization",
    "title": "",
    "description": "<p>Return</p>",
    "version": "1.0.0",
    "name": "getAuthedOrganization",
    "group": "Organization",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{ }</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/organization.route.ts",
    "groupTitle": "Organization",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/portfolio/lp-positions/:walletAddress",
    "title": "Get UniSwap (V3) LP positions",
    "description": "<p>Return User's UniSwap LP Positions</p>",
    "version": "1.0.0",
    "name": "GetLPPositionsForAddress",
    "group": "Portfolio",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "positions",
            "description": "<p>as position ID keys and position details as values</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/portfolio.route.ts",
    "groupTitle": "Portfolio",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/portfolio/retirement/download-pdfs",
    "title": "Download attestation PDFs for retirements",
    "description": "<p>Returns attestation PDFs for retirements (if available)</p>",
    "version": "1.0.0",
    "name": "GetRetirementAttestations",
    "group": "Portfolio",
    "body": [
      {
        "group": "Body",
        "type": "String[]",
        "optional": false,
        "field": "transactionHashes",
        "description": "<p>Retirement transaction hashes</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "RetirementAttestationPDF[]",
            "optional": false,
            "field": ".",
            "description": "<p>AWS PDF file instances</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": ".url",
            "description": "<p>AWS PDF file url</p>"
          },
          {
            "group": "200 OK",
            "type": "EnergyCertificateRetirement[]",
            "optional": false,
            "field": ".retirementTransactions",
            "description": "<p>Retirement transactions</p>"
          },
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": ".size",
            "description": "<p>AWS PDF file size</p>"
          },
          {
            "group": "200 OK",
            "type": "String",
            "optional": false,
            "field": ".contentType",
            "description": "<p>AWS PDF file content type</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/portfolio.route.ts",
    "groupTitle": "Portfolio",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/portfolio/eats-summary/:walletAddress",
    "title": "Get EAT statistics (techs & vintages)",
    "description": "<p>Return User Token Stats</p>",
    "version": "1.0.0",
    "name": "GetUserTokenStats",
    "group": "Portfolio",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of EATs tokenized</p>"
          },
          {
            "group": "200 OK",
            "type": "Object[]",
            "optional": false,
            "field": "techBlends",
            "description": "<p>List of tech blends</p>"
          },
          {
            "group": "200 OK",
            "type": "Object",
            "optional": false,
            "field": "vintages",
            "description": "<p>Dictionary of vintages and their counts</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/portfolio.route.ts",
    "groupTitle": "Portfolio",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/tag/eat/:tokenId",
    "title": "Add a tag to an EAT",
    "description": "<p>Add a tag to an EAT</p>",
    "version": "1.0.0",
    "name": "AddTokenTag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tokenId",
            "description": "<p>ID of the token to add the tag to</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "tagText",
        "description": "<p>Tag text</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": true,
        "field": "tagId",
        "description": "<p>ID of the tag to add (if such tag already exists)</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"0x...\""
        ],
        "optional": false,
        "field": "walletAddress",
        "description": "<p>Wallet's address</p>"
      }
    ],
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{}</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/tags.route.ts",
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/tag/eat/:tokenId",
    "title": "Remove a tag from an EAT",
    "description": "<p>Remove a tag from an EAT</p>",
    "version": "1.0.0",
    "name": "DeleteTokenTag",
    "group": "Tags",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{}</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/tags.route.ts",
    "groupTitle": "Tags",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/tags",
    "title": "Get tags for an organization",
    "description": "<p>Get organization token tags</p>",
    "version": "1.0.0",
    "name": "GetTagsForOrg",
    "group": "Tags",
    "error": {
      "fields": {
        "406 Not Acceptable": [
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type header must be &quot;application/json&quot;.</p>"
          },
          {
            "group": "406 Not Acceptable",
            "optional": false,
            "field": "Origin",
            "description": "<p>Origin header must be &quot;https://*&quot;.</p>"
          }
        ],
        "417 Expectation Failed": [
          {
            "group": "417 Expectation Failed",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The id parameters failed to match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "406",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"statusCode\": 406,\n  \"statusText\": \"Not acceptable\",\n  \"errors\": [\n    \"Content-Type should be application/json or multipart/form-data, text/html given\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "417",
          "content": "HTTP/1.1 417 ExpectationFailed\n{\n  \"statusCode\": 417,\n  \"statusText\": \"Expectation failed\",\n  \"errors\": [\n    \"id must be a number\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/core/routes/v1/tags.route.ts",
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>Mime-type of the request</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"pk_...\""
            ],
            "optional": false,
            "field": "X-API-KEY",
            "description": "<p>Organization's API key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0x...\""
            ],
            "optional": false,
            "field": "walletAddress",
            "description": "<p>Wallet's address</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/liquidity",
    "title": "Get liquidity for a given token pair at each fee tier",
    "description": "<p>Get liquidity for a given token pair</p>",
    "version": "1.0.0",
    "name": "GetTokenPairLiquidity",
    "group": "Trade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chainId",
            "description": "<p>Chain ID</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/trade.route.ts",
    "groupTitle": "Trade"
  },
  {
    "type": "get",
    "url": "/wallet",
    "title": "Get wallet information & organization",
    "description": "<p>Return wallet and any associated organization</p>",
    "version": "1.0.0",
    "name": "GetWallet",
    "group": "Wallet",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{ }</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/wallet.route.ts",
    "groupTitle": "Wallet",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/walletuser/registry-access",
    "title": "Get wallet registry access list",
    "description": "<p>Return user registry access list</p>",
    "version": "1.0.0",
    "name": "GetWalletRegistryAccess",
    "group": "Wallet",
    "success": {
      "fields": {
        "200 OK": [
          {
            "group": "200 OK",
            "optional": false,
            "field": "/",
            "description": "<p>{ }</p>"
          }
        ]
      }
    },
    "filename": "src/api/core/routes/v1/wallet.route.ts",
    "groupTitle": "Wallet",
    "error": {
      "examples": [
        {
          "title": "500",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"statusCode\": 500,\n  \"statusText\": \"Server error\",\n  \"errors\": [\n    \"Oops, an unexpected error was occurred\"\n  ]\n}",
          "type": "json"
        },
        {
          "title": "404",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"statusCode\": 404,\n  \"statusText\": \"Not found\",\n  \"errors\": [\n    \"The requested resource cannot be found\"\n  ]\n}",
          "type": "json"
        }
      ]
    }
  }
] });
