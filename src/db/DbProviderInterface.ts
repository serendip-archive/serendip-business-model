import { EntityChangeModel, DbCollectionInterface } from "..";
export interface DbProviderInterface {
  /**
   * return db collection as interface
   */
  collection<T>(
    collectionName: string,
    trackChanges?: boolean
  ): Promise<DbCollectionInterface<T>>;
  changes: DbCollectionInterface<EntityChangeModel>;
  /**
   * options for this provider
   */
  initiate(options?): Promise<void>;
}
