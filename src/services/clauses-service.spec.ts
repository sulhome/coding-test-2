import { Clause } from '../model/clause.interface';
import { findDuplicates } from './clauses-service';

describe('clauses service', () => {
  test('with duplicates, it should return duplicates', async () => {
    const clauses: Clause[] = [
      {
        id: 'id1',
        sourceId: 'sourceId1',
        title: 'title1',
        items: [
          { title: 't1', value: '' },
          { title: 't2', value: '' },
        ],
      },
      {
        id: 'id2',
        sourceId: 'sourceId1',
        title: 'title1',
        items: [
          { title: 't1', value: '' },
          { title: 't2', value: '' },
        ],
      },
      {
        id: 'id2',
        sourceId: 'sourceId1',
        title: 'title1',
        items: [
          { title: 't1', value: '' },
          { title: 't2', value: '' },
        ],
      },
      {
        id: 'id3',
        sourceId: 'sourceId2',
        title: 'title2',
        items: [
          { title: 't3', value: '' },
          { title: 't4', value: '' },
        ],
      },
    ];

    let duplicates = findDuplicates(clauses);
    expect(duplicates.length).toEqual(2);
  });

  test('with no duplicates, it should return empty array', async () => {
    const clauses: Clause[] = [
      {
        id: 'id1',
        sourceId: 'sourceId1',
        title: 'title1',
        items: [
          { title: 't1', value: '' },
          { title: 't2', value: '' },
        ],
      },
      {
        id: 'id2',
        sourceId: 'sourceId2',
        title: 'title1',
        items: [
          { title: 't1', value: '' },
          { title: 't2', value: '' },
        ],
      },
      {
        id: 'id3',
        sourceId: 'sourceId2',
        title: 'title2',
        items: [
          { title: 't3', value: '' },
          { title: 't4', value: '' },
        ],
      },
    ];

    let duplicates = findDuplicates(clauses);
    expect(duplicates.length).toEqual(0);
  });
});
