import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OAS20Interface from '../../../oas/oas-20-api-interface';

import mergeLibraryToMs3 from '../../merge-library-to-ms3';
import mergeTypesAndTraits from '../merge-resource-types-and-traits';

import convertSecuritySchemes from './security-schemes-to-oas';
import convertResourcesToPaths from './resources-to-paths';

import { convertDataTypesToSchemas, convertExternalSchemas, convertExternalSchemasReferences } from './datatypes-to-schemas';
import { convertInlineExamples, convertExternalExamples, convertExternalExampleReferences } from '../examples-to-oas';

import { cloneDeep, map } from 'lodash';
import * as urlParser from 'url-parse';

class MS3toOAS20 {
  oasAPI: OAS20Interface.API;
  externalFiles: any = {
    examples: [],
    schemas: []
  };
  mediaTypes: string[] = [];

  constructor(private ms3API: MS3Interface.API, private options: any) {}

  static create(ms3API: MS3Interface.API, options: any) {
    return new MS3toOAS20(ms3API, options);
  }

  convert() {
    const parsedBaseUri: any = urlParser(this.ms3API.settings.baseUri || '/');
    this.oasAPI = {
      swagger: '2.0',
      info: this.convertSettings(),
      paths: {},
      basePath: decodeURI(parsedBaseUri.pathname) || '/',
      host: decodeURI(parsedBaseUri.host)
    };

    if (this.ms3API.libraries) this.ms3API = mergeLibraryToMs3(this.ms3API);

    if (this.ms3API.settings.protocols) {
      this.oasAPI.schemes = map(this.ms3API.settings.protocols, (protocol: string) => {
        return <'http' | 'https'> protocol.toLowerCase();
      });
    }

    if (this.ms3API.dataTypes) {
      if (this.options.destinationPath && !this.options.asSingleFile) {
        this.externalFiles.schemas = this.externalFiles.schemas.concat(convertExternalSchemas(this.ms3API, this.options.destinationPath));
        this.oasAPI.definitions = convertExternalSchemasReferences(this.ms3API);
      }
      else this.oasAPI.definitions = convertDataTypesToSchemas(this.ms3API);
    }

    if (this.ms3API.examples && this.options.destinationPath) {
      this.externalFiles.examples = this.externalFiles.examples.concat(convertExternalExamples(this.ms3API.examples, this.options.destinationPath));
    }

    if (this.ms3API.securitySchemes) this.oasAPI.securityDefinitions = convertSecuritySchemes(this.ms3API);

    if (this.ms3API.resources) {
      let mergedApi: MS3Interface.API = cloneDeep(this.ms3API);
      if (this.ms3API.resourcesTypes || this.ms3API.traits) {
        mergedApi = mergeTypesAndTraits(this.ms3API);
      }
      this.oasAPI.paths = convertResourcesToPaths(mergedApi, this.options.asSingleFile);
    }

    return {
      API: this.oasAPI,
      externalFiles: this.externalFiles
    };
  }

  private convertSettings(): OAS20Interface.Info {
    const settings = this.ms3API.settings;

    if (!settings.title) {
      throw new Error('MS3 API settings must contain title property.');
    }

    const info: OAS20Interface.Info = {
      title: settings.title,
      version: settings.version || '2.0'
    };

    if (settings.description) info.description = settings.description;

    return info;
  }
}

export default function convertOAS20(ms3API: MS3Interface.API, options: any): any {
  return MS3toOAS20.create(ms3API, options).convert();
}