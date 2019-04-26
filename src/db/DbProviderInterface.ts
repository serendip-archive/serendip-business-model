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
  collections(): Promise<string[]>;
  dropDatabase(): Promise<void>;

  dropCollection(name: string): Promise<boolean>;

  stats(): Promise<{
    db: string;
    collections: number;
    indexes: number;
    avgObjSizeByte: number;
    objects: number;
    storageMB: number;
    fsUsedMB: number;
    fsTotalMB: number;
  }>;

  openUploadStreamByFilePath?(filePath: string, metadata: any): Promise<any>

  openDownloadStreamByFilePath?(filePath: string, opts?: { start?: number, end?: number, revision?: number }): Promise<any>
}
