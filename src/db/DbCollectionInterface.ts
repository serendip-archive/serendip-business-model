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

  
}
