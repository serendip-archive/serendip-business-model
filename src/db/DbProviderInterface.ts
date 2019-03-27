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

  events: {
    [key: string]: any;
  };
  /**
   * options for this provider
   */
  initiate(options?): Promise<void>;

  dropDatabase(): Promise<void>;

  dropCollection(name: string): Promise<boolean>;
}
