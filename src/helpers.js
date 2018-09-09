import { OrderedMap, Map } from 'immutable';

export const arrToMap = (array, DataRecord = Map) => {
  return array.reduce(
    (acc, data) => acc.set(data.id, new DataRecord(data)),
    new OrderedMap({})
  );
};

export const mapToArr = obj => obj.valueSeq().toArray();
