import type { IdentifierSqlToken } from 'slonik';

export type SchemaValuePrimitive = string | number | boolean | undefined;
export type SchemaValue = SchemaValuePrimitive | Record<string, unknown> | unknown[] | null;
export type SchemaLike<Key extends string> = {
  [key in Key]: SchemaValue;
};

export type Table<Keys extends string> = { table: string; fields: Record<Keys, string> };
export type FieldIdentifiers<Key extends string> = {
  [key in Key]: IdentifierSqlToken;
};

export type OrderDirection = 'asc' | 'desc';

export type UpdateWhereData<SetKey extends string, WhereKey extends string> = {
  set: Partial<SchemaLike<SetKey>>;
  where: Partial<SchemaLike<WhereKey>>;
  jsonbMode: 'replace' | 'merge';
};
