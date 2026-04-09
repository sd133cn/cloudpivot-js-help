interface Subscription {
  unsubscribe(): void;
}

interface Observable<T> {
  subscribe(next: (value: T) => void): Subscription;
  subscribe(next: (value: T) => void, error: (error: any) => void): Subscription;
  subscribe(next: (value: T) => void, error: (error: any) => void, complete: () => void): Subscription;
}

interface ControlValueChange<T = any> {
  value: T;
  oldValue: T | undefined;
}

interface ControlPropertyChange<T = any> extends ControlValueChange<T> {
  name: string;
}

interface RowChange {
  type: 'insert' | 'remove' | 'insertMulti' | 'removeMulti';
  index: number;
  value: object | undefined;
  oldValue: object | undefined;
  removeIndexs?: number[];
  insertCount?: number;
}

interface RowValueChange {
  index: number;
  columnIndex: number;
  value: object | undefined;
  oldValue: object | undefined;
}

interface ColumnValueChange {
  key: string;
  index: number;
  rowIndex: number;
  value: any[] | undefined;
  oldValue: any[] | undefined;
}
