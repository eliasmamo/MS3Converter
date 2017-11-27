import { API } from './../../../ms3/ms3-v1-api-interface';
import Extension from './../../../ms3/ms3-v1-extension-interface';

export const originalProjectWithResources: Extension = {
  'ms3_version': '1.0.1',
  'settings': {
    'extends': {
      'entityTypeName': 'api',
      'ms3_version': '1.0.1',
      'settings': {
        'baseUri': 'http://mergeAPI',
        'title': 'Merge API',
      },
      'annotationTypes': [
        {
          'name': 'annotation',
          'description': 'desc',
          'type': 'string'
        }
      ],
      'resources': [
        {
          'path': '\/res',
          'name': 'res2',
          'methods': [
            {
              'active': true,
              'name': 'GET'
            }
          ],
          '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
        },
        {
          'path': '\/res',
          'name': 'res3',
          'methods': [
            {
              'active': true,
              'name': 'GET'
            }
          ],
          '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
        },
        {
          'path': '\/res',
          'name': 'common resource',
          'methods': [
            {
              'active': true,
              'name': 'GET'
            },
            {
              'active': true,
              'name': 'POST',
              'headers': [
                {
                  'displayName': 'resourcePOSTQueryP',
                  'type': 'string',
                  'repeat': false,
                  'required': false
                },
                {
                  'displayName': 'header2',
                  'type': 'string',
                  'repeat': false,
                  'required': false
                }
              ],
            }
          ],
          '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
        }
      ]
    },
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
  },
  'entityTypeName': 'api',
  'annotationTypes': [
    {
      'name': 'annotation',
      'description': 'description',
      'type': 'string'
    }
  ],
  'resources': [
    {
      'path': '\/res',
      'name': 'res',
      'type': 'resourceType1',
      'methods': [
        {
          'active': true,
          'name': 'GET'
        },
        {
          'active': true,
          'name': 'POST',
          'description': 'resourcePOST desc',
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'selectedTraits': [
            'trait2'
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ]
        },
        {
          'active': true,
          'name': 'PUT',
          'headers': [
            {
              'displayName': 'resourcePUTHeader',
              'type': 'boolean',
              'repeat': false,
              'required': false,
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': 'resourcePUTResponse200',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            },
            {
              'code': '201',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            }
          ]
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
      'selectedTraits': [
        'trait1'
      ]
    },
    {
      'path': '\/res',
      'name': 'common resource',
      'methods': [
        {
          'active': true,
          'name': 'POST',
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
        },
        {
          'active': true,
          'name': 'PUT'
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
    }
  ],
};

export const resultProjectWithResources: API = {
  'ms3_version': '1.0.1',
  'settings': {
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
  },
  'annotationTypes': [
    {
      'name': 'annotation',
      'description': 'description',
      'type': 'string'
    }
  ],
  'resources': [
    {
      'path': '\/res',
      'name': 'res',
      'type': 'resourceType1',
      'methods': [
        {
          'active': true,
          'name': 'GET'
        },
        {
          'active': true,
          'name': 'POST',
          'description': 'resourcePOST desc',
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'selectedTraits': [
            'trait2'
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ]
        },
        {
          'active': true,
          'name': 'PUT',
          'headers': [
            {
              'displayName': 'resourcePUTHeader',
              'type': 'boolean',
              'repeat': false,
              'required': false,
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': 'resourcePUTResponse200',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            },
            {
              'code': '201',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            }
          ]
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
      'selectedTraits': [
        'trait1'
      ]
    },
    {
      'path': '\/res',
      'name': 'common resource',
      'methods': [
        {
          'active': true,
          'name': 'POST',
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            },
            {
              'displayName': 'header2',
              'type': 'string',
              'repeat': false,
              'required': false
            }
          ],
        },
        {
          'active': true,
          'name': 'PUT'
        },
        {
          'active': true,
          'name': 'GET'
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
    },
    {
      'path': '\/res',
      'name': 'res2',
      'methods': [
        {
          'active': true,
          'name': 'GET'
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
    },
    {
      'path': '\/res',
      'name': 'res3',
      'methods': [
        {
          'active': true,
          'name': 'GET'
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
    },
  ],
  'entityTypeName': 'api'
};