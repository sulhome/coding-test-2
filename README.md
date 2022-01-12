# About this Repository

This README file will describe the solution to find duplicate elements in an array of `Clauses` objects

## Libraries used
### object-hash
Get object hash as string, so it can be compared with other objects. I found this method more useful and accurate than comparing individual properties for this scenario

### jest
Test runner and assertion library to write unit tests

## Solution Structure
### data folder
Contains methods to retrieve data, it acts as a repository.

### model folder
Contains object definitions, namely `Caluse` and `ClauseItem`

### services folder
Contains services to process data. `findDuplicates` located in `clauses-service`

## Unit tests
I have added unit test for the service layer, namely `clauses-service.spec.ts`

### Running unit tests
After moving into solution directory run
`npm run test`


## Running the demo
After moving into solution directory run
`npm run start`
