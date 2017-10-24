import * as _ from 'lodash';
import * as Blueprint from './blueprint';
import * as Ms3 from './ms3/index';
import {loaderInterface} from './common/loader-interface';
import {convertorInterface} from './common/convertor-interface';

console.log(Ms3);

type format = "ms3_1" | "oas" | "blueprint" | "raml_08" | "raml_10";

function validateConvertFormats(from: format, to: format) {
  if (from === to) throw new Error(`Cannot convert from ${from} to ${to}`);
}

function getLoaderByFormat(format: format):loaderInterface {
  return;
}

function getConverterByFormat(format: format):convertorInterface {
  return;
}

export async function convert(source: string | Ms3.interfaces.MS3v1, from: format, to: format, options?: object) {
  validateConvertFormats(from, to);
  if (typeof source == 'string') {
    source = await getLoaderByFormat(from).load();
  }

  const convertor = getConverterByFormat(to);
  const result = convertor.convert(source);
  return result;
}