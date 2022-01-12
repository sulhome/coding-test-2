import { getData } from './data/clauses-repository';
import { findDuplicates } from './services/clauses-service';
import { Clause } from './model/clause.interface';

const clauses = getData();
const duplicates = findDuplicates(clauses);
if(duplicates.length > 0){
  console.log(`Total number of duplicate records: ${duplicates.length}`);
  console.log(`Duplicate records`);
  duplicates.forEach((duplicateItem: Clause, index: number) => {
    console.log(`################### Duplicate Record # ${index + 1} ###################`);
    console.log(duplicateItem);
  });
} else {
  console.log(`No duplicates found`);
}

