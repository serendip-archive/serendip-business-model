/**
 * @module Db
 */

export interface DbCollectionInterface<T> {
  /**
   *
   * @param fieldOrSpec
   * @param options
   */
  ensureIndex(fieldOrSpec: any, options: any): Promise<void>;
  find(query?, skip?: any, limit?: any): Promise<T[]>;
  count(query?): Promise<Number>;

  /**
   *
   * @param model document to insert
   * @param userId userId from users collection
   * @param tackOptions options for EntityChanges tracking
   */
  updateOne(
    model: T,
    userId?: string,
    tackOptions?: { metaOnly: boolean }
  ): Promise<T>;

  /**
   *
   * @param _id id of document to delete
   * @param userId
   * @param tackOptions
   */
  deleteOne(
    _id: string,
    userId?: string,
    tackOptions?: { metaOnly: boolean }
  ): Promise<T>;
  insertOne(
    model: T | any,
    userId?: string,
    tackOptions?: { metaOnly: boolean }
  ): Promise<T>;

  aggregate(
    pipeline: any[],
    options?: CollectionAggregationOptions
  ): Promise<any[]>;
}

/** http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#aggregate */
export interface CollectionAggregationOptions {
  readPreference?: string;
  /**
   * Return the query as cursor, on 2.6 > it returns as a real cursor
   * on pre 2.6 it returns as an emulated cursor.
   */
  cursor?: { batchSize?: number };
  /**
   * Explain returns the aggregation execution plan (requires mongodb 2.6 >).
   */
  explain?: boolean;
  /**
   * Lets the server know if it can use disk to store
   * temporary results for the aggregation (requires mongodb 2.6 >).
   */
  allowDiskUse?: boolean;
  /**
   * specifies a cumulative time limit in milliseconds for processing operations
   * on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.
   */
  maxTimeMS?: number;
  /**
   * Allow driver to bypass schema validation in MongoDB 3.2 or higher.
   */
  bypassDocumentValidation?: boolean;
  hint?: string | object;
  raw?: boolean;
  promoteLongs?: boolean;
  promoteValues?: boolean;
  promoteBuffers?: boolean;
  collation?: any;
  comment?: string;
  session?: any;
}
