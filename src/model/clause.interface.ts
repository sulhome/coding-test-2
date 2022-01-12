import { ClauseItem } from './clause-item.interface';

export interface Clause {
  id: string;
  sourceId: string;
  title: string;
  items: ClauseItem[];
}
