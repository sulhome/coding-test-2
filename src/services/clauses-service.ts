import { Clause } from '../model/clause.interface';
import hash from 'object-hash';

export function findDuplicates(clauses: Clause[]): Clause[] {
  const duplicates: Clause[] = [];
  clauses.reduce((unique: Clause[], current: Clause) => {
    if (
      !unique.some(
        (clause: Clause) => getObjectHashIgnoreCase(clause) === getObjectHashIgnoreCase(current),
      )
    ) {
      unique.push(current);
    } else {
      duplicates.push(current);
    }
    return unique;
  }, []);
  return duplicates;
}

function getObjectHashIgnoreCase(clause: Clause): string {
  return hash({
    sourceId: clause.sourceId.toLowerCase(),
    title: clause.title.toLowerCase(),
    items: clause.items.map(item => {
      return { title: item.title.toLowerCase(), value: item.value.toLowerCase() };
    }),
  });
}
