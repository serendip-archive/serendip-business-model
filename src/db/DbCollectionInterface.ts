export interface DbCollectionInterface<T> {
  /**
   *
   * @param fieldOrSpec
   * @param options
   */
  ensureIndex(fieldOrSpec: any, options: any): Promise<void>;
  find(query?, skip?: any, limit?: any): Promise<T[]>;
  count(query?): Promise<Number>;
  updateOne(
    model: T,
    userId?: string,
    tackOptions?: { metaOnly: boolean }
  ): Promise<T>;
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
}
