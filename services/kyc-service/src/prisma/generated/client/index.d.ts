
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserKYC
 * 
 */
export type UserKYC = $Result.DefaultSelection<Prisma.$UserKYCPayload>
/**
 * Model KYCAmlScreening
 * 
 */
export type KYCAmlScreening = $Result.DefaultSelection<Prisma.$KYCAmlScreeningPayload>
/**
 * Model KYCWebhookLog
 * 
 */
export type KYCWebhookLog = $Result.DefaultSelection<Prisma.$KYCWebhookLogPayload>
/**
 * Model KYCDocument
 * 
 */
export type KYCDocument = $Result.DefaultSelection<Prisma.$KYCDocumentPayload>
/**
 * Model KYCLevelPolicy
 * 
 */
export type KYCLevelPolicy = $Result.DefaultSelection<Prisma.$KYCLevelPolicyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KYCStatus: {
  NOT_STARTED: 'NOT_STARTED',
  INITIATED: 'INITIATED',
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED',
  RETRY: 'RETRY'
};

export type KYCStatus = (typeof KYCStatus)[keyof typeof KYCStatus]


export const KYCRejectionReason: {
  INVALID_DOCUMENT: 'INVALID_DOCUMENT',
  EXPIRED_DOCUMENT: 'EXPIRED_DOCUMENT',
  POOR_IMAGE_QUALITY: 'POOR_IMAGE_QUALITY',
  SELFIE_MISMATCH: 'SELFIE_MISMATCH',
  MISMATCH_NAME: 'MISMATCH_NAME',
  MISMATCH_ADDRESS: 'MISMATCH_ADDRESS',
  AGE_RESTRICTION: 'AGE_RESTRICTION',
  JURISDICTION_RESTRICTION: 'JURISDICTION_RESTRICTION',
  OTHER: 'OTHER'
};

export type KYCRejectionReason = (typeof KYCRejectionReason)[keyof typeof KYCRejectionReason]


export const KYCDocumentType: {
  ID_CARD_FRONT: 'ID_CARD_FRONT',
  ID_CARD_BACK: 'ID_CARD_BACK',
  PASSPORT: 'PASSPORT',
  DRIVER_LICENSE_FRONT: 'DRIVER_LICENSE_FRONT',
  DRIVER_LICENSE_BACK: 'DRIVER_LICENSE_BACK',
  SELFIE: 'SELFIE',
  PROOF_OF_ADDRESS: 'PROOF_OF_ADDRESS',
  BANK_STATEMENT: 'BANK_STATEMENT',
  UTILITY_BILL: 'UTILITY_BILL'
};

export type KYCDocumentType = (typeof KYCDocumentType)[keyof typeof KYCDocumentType]


export const KYCDocumentStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type KYCDocumentStatus = (typeof KYCDocumentStatus)[keyof typeof KYCDocumentStatus]

}

export type KYCStatus = $Enums.KYCStatus

export const KYCStatus: typeof $Enums.KYCStatus

export type KYCRejectionReason = $Enums.KYCRejectionReason

export const KYCRejectionReason: typeof $Enums.KYCRejectionReason

export type KYCDocumentType = $Enums.KYCDocumentType

export const KYCDocumentType: typeof $Enums.KYCDocumentType

export type KYCDocumentStatus = $Enums.KYCDocumentStatus

export const KYCDocumentStatus: typeof $Enums.KYCDocumentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserKYCS
 * const userKYCS = await prisma.userKYC.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserKYCS
   * const userKYCS = await prisma.userKYC.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.userKYC`: Exposes CRUD operations for the **UserKYC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserKYCS
    * const userKYCS = await prisma.userKYC.findMany()
    * ```
    */
  get userKYC(): Prisma.UserKYCDelegate<ExtArgs>;

  /**
   * `prisma.kYCAmlScreening`: Exposes CRUD operations for the **KYCAmlScreening** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KYCAmlScreenings
    * const kYCAmlScreenings = await prisma.kYCAmlScreening.findMany()
    * ```
    */
  get kYCAmlScreening(): Prisma.KYCAmlScreeningDelegate<ExtArgs>;

  /**
   * `prisma.kYCWebhookLog`: Exposes CRUD operations for the **KYCWebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KYCWebhookLogs
    * const kYCWebhookLogs = await prisma.kYCWebhookLog.findMany()
    * ```
    */
  get kYCWebhookLog(): Prisma.KYCWebhookLogDelegate<ExtArgs>;

  /**
   * `prisma.kYCDocument`: Exposes CRUD operations for the **KYCDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KYCDocuments
    * const kYCDocuments = await prisma.kYCDocument.findMany()
    * ```
    */
  get kYCDocument(): Prisma.KYCDocumentDelegate<ExtArgs>;

  /**
   * `prisma.kYCLevelPolicy`: Exposes CRUD operations for the **KYCLevelPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KYCLevelPolicies
    * const kYCLevelPolicies = await prisma.kYCLevelPolicy.findMany()
    * ```
    */
  get kYCLevelPolicy(): Prisma.KYCLevelPolicyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserKYC: 'UserKYC',
    KYCAmlScreening: 'KYCAmlScreening',
    KYCWebhookLog: 'KYCWebhookLog',
    KYCDocument: 'KYCDocument',
    KYCLevelPolicy: 'KYCLevelPolicy'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "userKYC" | "kYCAmlScreening" | "kYCWebhookLog" | "kYCDocument" | "kYCLevelPolicy"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserKYC: {
        payload: Prisma.$UserKYCPayload<ExtArgs>
        fields: Prisma.UserKYCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserKYCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserKYCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          findFirst: {
            args: Prisma.UserKYCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserKYCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          findMany: {
            args: Prisma.UserKYCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>[]
          }
          create: {
            args: Prisma.UserKYCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          createMany: {
            args: Prisma.UserKYCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserKYCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>[]
          }
          delete: {
            args: Prisma.UserKYCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          update: {
            args: Prisma.UserKYCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          deleteMany: {
            args: Prisma.UserKYCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserKYCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserKYCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKYCPayload>
          }
          aggregate: {
            args: Prisma.UserKYCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserKYC>
          }
          groupBy: {
            args: Prisma.UserKYCGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserKYCGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserKYCCountArgs<ExtArgs>
            result: $Utils.Optional<UserKYCCountAggregateOutputType> | number
          }
        }
      }
      KYCAmlScreening: {
        payload: Prisma.$KYCAmlScreeningPayload<ExtArgs>
        fields: Prisma.KYCAmlScreeningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KYCAmlScreeningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KYCAmlScreeningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          findFirst: {
            args: Prisma.KYCAmlScreeningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KYCAmlScreeningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          findMany: {
            args: Prisma.KYCAmlScreeningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>[]
          }
          create: {
            args: Prisma.KYCAmlScreeningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          createMany: {
            args: Prisma.KYCAmlScreeningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KYCAmlScreeningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>[]
          }
          delete: {
            args: Prisma.KYCAmlScreeningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          update: {
            args: Prisma.KYCAmlScreeningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          deleteMany: {
            args: Prisma.KYCAmlScreeningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KYCAmlScreeningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KYCAmlScreeningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCAmlScreeningPayload>
          }
          aggregate: {
            args: Prisma.KYCAmlScreeningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKYCAmlScreening>
          }
          groupBy: {
            args: Prisma.KYCAmlScreeningGroupByArgs<ExtArgs>
            result: $Utils.Optional<KYCAmlScreeningGroupByOutputType>[]
          }
          count: {
            args: Prisma.KYCAmlScreeningCountArgs<ExtArgs>
            result: $Utils.Optional<KYCAmlScreeningCountAggregateOutputType> | number
          }
        }
      }
      KYCWebhookLog: {
        payload: Prisma.$KYCWebhookLogPayload<ExtArgs>
        fields: Prisma.KYCWebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KYCWebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KYCWebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          findFirst: {
            args: Prisma.KYCWebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KYCWebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          findMany: {
            args: Prisma.KYCWebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>[]
          }
          create: {
            args: Prisma.KYCWebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          createMany: {
            args: Prisma.KYCWebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KYCWebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>[]
          }
          delete: {
            args: Prisma.KYCWebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          update: {
            args: Prisma.KYCWebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.KYCWebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KYCWebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KYCWebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCWebhookLogPayload>
          }
          aggregate: {
            args: Prisma.KYCWebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKYCWebhookLog>
          }
          groupBy: {
            args: Prisma.KYCWebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<KYCWebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.KYCWebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<KYCWebhookLogCountAggregateOutputType> | number
          }
        }
      }
      KYCDocument: {
        payload: Prisma.$KYCDocumentPayload<ExtArgs>
        fields: Prisma.KYCDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KYCDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KYCDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          findFirst: {
            args: Prisma.KYCDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KYCDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          findMany: {
            args: Prisma.KYCDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>[]
          }
          create: {
            args: Prisma.KYCDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          createMany: {
            args: Prisma.KYCDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KYCDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>[]
          }
          delete: {
            args: Prisma.KYCDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          update: {
            args: Prisma.KYCDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          deleteMany: {
            args: Prisma.KYCDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KYCDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KYCDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCDocumentPayload>
          }
          aggregate: {
            args: Prisma.KYCDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKYCDocument>
          }
          groupBy: {
            args: Prisma.KYCDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<KYCDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.KYCDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<KYCDocumentCountAggregateOutputType> | number
          }
        }
      }
      KYCLevelPolicy: {
        payload: Prisma.$KYCLevelPolicyPayload<ExtArgs>
        fields: Prisma.KYCLevelPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KYCLevelPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KYCLevelPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          findFirst: {
            args: Prisma.KYCLevelPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KYCLevelPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          findMany: {
            args: Prisma.KYCLevelPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>[]
          }
          create: {
            args: Prisma.KYCLevelPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          createMany: {
            args: Prisma.KYCLevelPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KYCLevelPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>[]
          }
          delete: {
            args: Prisma.KYCLevelPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          update: {
            args: Prisma.KYCLevelPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          deleteMany: {
            args: Prisma.KYCLevelPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KYCLevelPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KYCLevelPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KYCLevelPolicyPayload>
          }
          aggregate: {
            args: Prisma.KYCLevelPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKYCLevelPolicy>
          }
          groupBy: {
            args: Prisma.KYCLevelPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<KYCLevelPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KYCLevelPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<KYCLevelPolicyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserKYCCountOutputType
   */

  export type UserKYCCountOutputType = {
    documents: number
    webhookLogs: number
    amlScreenings: number
  }

  export type UserKYCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserKYCCountOutputTypeCountDocumentsArgs
    webhookLogs?: boolean | UserKYCCountOutputTypeCountWebhookLogsArgs
    amlScreenings?: boolean | UserKYCCountOutputTypeCountAmlScreeningsArgs
  }

  // Custom InputTypes
  /**
   * UserKYCCountOutputType without action
   */
  export type UserKYCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYCCountOutputType
     */
    select?: UserKYCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserKYCCountOutputType without action
   */
  export type UserKYCCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCDocumentWhereInput
  }

  /**
   * UserKYCCountOutputType without action
   */
  export type UserKYCCountOutputTypeCountWebhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCWebhookLogWhereInput
  }

  /**
   * UserKYCCountOutputType without action
   */
  export type UserKYCCountOutputTypeCountAmlScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCAmlScreeningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserKYC
   */

  export type AggregateUserKYC = {
    _count: UserKYCCountAggregateOutputType | null
    _avg: UserKYCAvgAggregateOutputType | null
    _sum: UserKYCSumAggregateOutputType | null
    _min: UserKYCMinAggregateOutputType | null
    _max: UserKYCMaxAggregateOutputType | null
  }

  export type UserKYCAvgAggregateOutputType = {
    level: number | null
    riskScore: number | null
  }

  export type UserKYCSumAggregateOutputType = {
    level: number | null
    riskScore: number | null
  }

  export type UserKYCMinAggregateOutputType = {
    userId: string | null
    level: number | null
    status: $Enums.KYCStatus | null
    externalApplicantId: string | null
    externalInspectionId: string | null
    firstSubmittedAt: Date | null
    lastSubmittedAt: Date | null
    reviewedAt: Date | null
    reviewerNote: string | null
    rejectionReason: $Enums.KYCRejectionReason | null
    rejectionDetails: string | null
    isActive: boolean | null
    expiresAt: Date | null
    riskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserKYCMaxAggregateOutputType = {
    userId: string | null
    level: number | null
    status: $Enums.KYCStatus | null
    externalApplicantId: string | null
    externalInspectionId: string | null
    firstSubmittedAt: Date | null
    lastSubmittedAt: Date | null
    reviewedAt: Date | null
    reviewerNote: string | null
    rejectionReason: $Enums.KYCRejectionReason | null
    rejectionDetails: string | null
    isActive: boolean | null
    expiresAt: Date | null
    riskScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserKYCCountAggregateOutputType = {
    userId: number
    level: number
    status: number
    externalApplicantId: number
    externalInspectionId: number
    firstSubmittedAt: number
    lastSubmittedAt: number
    reviewedAt: number
    reviewerNote: number
    rejectionReason: number
    rejectionDetails: number
    providerRawResponse: number
    isActive: number
    expiresAt: number
    riskScore: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserKYCAvgAggregateInputType = {
    level?: true
    riskScore?: true
  }

  export type UserKYCSumAggregateInputType = {
    level?: true
    riskScore?: true
  }

  export type UserKYCMinAggregateInputType = {
    userId?: true
    level?: true
    status?: true
    externalApplicantId?: true
    externalInspectionId?: true
    firstSubmittedAt?: true
    lastSubmittedAt?: true
    reviewedAt?: true
    reviewerNote?: true
    rejectionReason?: true
    rejectionDetails?: true
    isActive?: true
    expiresAt?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserKYCMaxAggregateInputType = {
    userId?: true
    level?: true
    status?: true
    externalApplicantId?: true
    externalInspectionId?: true
    firstSubmittedAt?: true
    lastSubmittedAt?: true
    reviewedAt?: true
    reviewerNote?: true
    rejectionReason?: true
    rejectionDetails?: true
    isActive?: true
    expiresAt?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserKYCCountAggregateInputType = {
    userId?: true
    level?: true
    status?: true
    externalApplicantId?: true
    externalInspectionId?: true
    firstSubmittedAt?: true
    lastSubmittedAt?: true
    reviewedAt?: true
    reviewerNote?: true
    rejectionReason?: true
    rejectionDetails?: true
    providerRawResponse?: true
    isActive?: true
    expiresAt?: true
    riskScore?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserKYCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKYC to aggregate.
     */
    where?: UserKYCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKYCS to fetch.
     */
    orderBy?: UserKYCOrderByWithRelationInput | UserKYCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserKYCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKYCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKYCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserKYCS
    **/
    _count?: true | UserKYCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserKYCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserKYCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserKYCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserKYCMaxAggregateInputType
  }

  export type GetUserKYCAggregateType<T extends UserKYCAggregateArgs> = {
        [P in keyof T & keyof AggregateUserKYC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserKYC[P]>
      : GetScalarType<T[P], AggregateUserKYC[P]>
  }




  export type UserKYCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKYCWhereInput
    orderBy?: UserKYCOrderByWithAggregationInput | UserKYCOrderByWithAggregationInput[]
    by: UserKYCScalarFieldEnum[] | UserKYCScalarFieldEnum
    having?: UserKYCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserKYCCountAggregateInputType | true
    _avg?: UserKYCAvgAggregateInputType
    _sum?: UserKYCSumAggregateInputType
    _min?: UserKYCMinAggregateInputType
    _max?: UserKYCMaxAggregateInputType
  }

  export type UserKYCGroupByOutputType = {
    userId: string
    level: number
    status: $Enums.KYCStatus
    externalApplicantId: string | null
    externalInspectionId: string | null
    firstSubmittedAt: Date | null
    lastSubmittedAt: Date | null
    reviewedAt: Date | null
    reviewerNote: string | null
    rejectionReason: $Enums.KYCRejectionReason | null
    rejectionDetails: string | null
    providerRawResponse: JsonValue | null
    isActive: boolean
    expiresAt: Date | null
    riskScore: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserKYCCountAggregateOutputType | null
    _avg: UserKYCAvgAggregateOutputType | null
    _sum: UserKYCSumAggregateOutputType | null
    _min: UserKYCMinAggregateOutputType | null
    _max: UserKYCMaxAggregateOutputType | null
  }

  type GetUserKYCGroupByPayload<T extends UserKYCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserKYCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserKYCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserKYCGroupByOutputType[P]>
            : GetScalarType<T[P], UserKYCGroupByOutputType[P]>
        }
      >
    >


  export type UserKYCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    level?: boolean
    status?: boolean
    externalApplicantId?: boolean
    externalInspectionId?: boolean
    firstSubmittedAt?: boolean
    lastSubmittedAt?: boolean
    reviewedAt?: boolean
    reviewerNote?: boolean
    rejectionReason?: boolean
    rejectionDetails?: boolean
    providerRawResponse?: boolean
    isActive?: boolean
    expiresAt?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    documents?: boolean | UserKYC$documentsArgs<ExtArgs>
    webhookLogs?: boolean | UserKYC$webhookLogsArgs<ExtArgs>
    amlScreenings?: boolean | UserKYC$amlScreeningsArgs<ExtArgs>
    _count?: boolean | UserKYCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKYC"]>

  export type UserKYCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    level?: boolean
    status?: boolean
    externalApplicantId?: boolean
    externalInspectionId?: boolean
    firstSubmittedAt?: boolean
    lastSubmittedAt?: boolean
    reviewedAt?: boolean
    reviewerNote?: boolean
    rejectionReason?: boolean
    rejectionDetails?: boolean
    providerRawResponse?: boolean
    isActive?: boolean
    expiresAt?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["userKYC"]>

  export type UserKYCSelectScalar = {
    userId?: boolean
    level?: boolean
    status?: boolean
    externalApplicantId?: boolean
    externalInspectionId?: boolean
    firstSubmittedAt?: boolean
    lastSubmittedAt?: boolean
    reviewedAt?: boolean
    reviewerNote?: boolean
    rejectionReason?: boolean
    rejectionDetails?: boolean
    providerRawResponse?: boolean
    isActive?: boolean
    expiresAt?: boolean
    riskScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserKYCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserKYC$documentsArgs<ExtArgs>
    webhookLogs?: boolean | UserKYC$webhookLogsArgs<ExtArgs>
    amlScreenings?: boolean | UserKYC$amlScreeningsArgs<ExtArgs>
    _count?: boolean | UserKYCCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserKYCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserKYCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserKYC"
    objects: {
      documents: Prisma.$KYCDocumentPayload<ExtArgs>[]
      webhookLogs: Prisma.$KYCWebhookLogPayload<ExtArgs>[]
      amlScreenings: Prisma.$KYCAmlScreeningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      level: number
      status: $Enums.KYCStatus
      externalApplicantId: string | null
      externalInspectionId: string | null
      firstSubmittedAt: Date | null
      lastSubmittedAt: Date | null
      reviewedAt: Date | null
      reviewerNote: string | null
      rejectionReason: $Enums.KYCRejectionReason | null
      rejectionDetails: string | null
      providerRawResponse: Prisma.JsonValue | null
      isActive: boolean
      expiresAt: Date | null
      riskScore: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["userKYC"]>
    composites: {}
  }

  type UserKYCGetPayload<S extends boolean | null | undefined | UserKYCDefaultArgs> = $Result.GetResult<Prisma.$UserKYCPayload, S>

  type UserKYCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserKYCFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserKYCCountAggregateInputType | true
    }

  export interface UserKYCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserKYC'], meta: { name: 'UserKYC' } }
    /**
     * Find zero or one UserKYC that matches the filter.
     * @param {UserKYCFindUniqueArgs} args - Arguments to find a UserKYC
     * @example
     * // Get one UserKYC
     * const userKYC = await prisma.userKYC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserKYCFindUniqueArgs>(args: SelectSubset<T, UserKYCFindUniqueArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserKYC that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserKYCFindUniqueOrThrowArgs} args - Arguments to find a UserKYC
     * @example
     * // Get one UserKYC
     * const userKYC = await prisma.userKYC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserKYCFindUniqueOrThrowArgs>(args: SelectSubset<T, UserKYCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserKYC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCFindFirstArgs} args - Arguments to find a UserKYC
     * @example
     * // Get one UserKYC
     * const userKYC = await prisma.userKYC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserKYCFindFirstArgs>(args?: SelectSubset<T, UserKYCFindFirstArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserKYC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCFindFirstOrThrowArgs} args - Arguments to find a UserKYC
     * @example
     * // Get one UserKYC
     * const userKYC = await prisma.userKYC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserKYCFindFirstOrThrowArgs>(args?: SelectSubset<T, UserKYCFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserKYCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserKYCS
     * const userKYCS = await prisma.userKYC.findMany()
     * 
     * // Get first 10 UserKYCS
     * const userKYCS = await prisma.userKYC.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userKYCWithUserIdOnly = await prisma.userKYC.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserKYCFindManyArgs>(args?: SelectSubset<T, UserKYCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserKYC.
     * @param {UserKYCCreateArgs} args - Arguments to create a UserKYC.
     * @example
     * // Create one UserKYC
     * const UserKYC = await prisma.userKYC.create({
     *   data: {
     *     // ... data to create a UserKYC
     *   }
     * })
     * 
     */
    create<T extends UserKYCCreateArgs>(args: SelectSubset<T, UserKYCCreateArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserKYCS.
     * @param {UserKYCCreateManyArgs} args - Arguments to create many UserKYCS.
     * @example
     * // Create many UserKYCS
     * const userKYC = await prisma.userKYC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserKYCCreateManyArgs>(args?: SelectSubset<T, UserKYCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserKYCS and returns the data saved in the database.
     * @param {UserKYCCreateManyAndReturnArgs} args - Arguments to create many UserKYCS.
     * @example
     * // Create many UserKYCS
     * const userKYC = await prisma.userKYC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserKYCS and only return the `userId`
     * const userKYCWithUserIdOnly = await prisma.userKYC.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserKYCCreateManyAndReturnArgs>(args?: SelectSubset<T, UserKYCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserKYC.
     * @param {UserKYCDeleteArgs} args - Arguments to delete one UserKYC.
     * @example
     * // Delete one UserKYC
     * const UserKYC = await prisma.userKYC.delete({
     *   where: {
     *     // ... filter to delete one UserKYC
     *   }
     * })
     * 
     */
    delete<T extends UserKYCDeleteArgs>(args: SelectSubset<T, UserKYCDeleteArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserKYC.
     * @param {UserKYCUpdateArgs} args - Arguments to update one UserKYC.
     * @example
     * // Update one UserKYC
     * const userKYC = await prisma.userKYC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserKYCUpdateArgs>(args: SelectSubset<T, UserKYCUpdateArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserKYCS.
     * @param {UserKYCDeleteManyArgs} args - Arguments to filter UserKYCS to delete.
     * @example
     * // Delete a few UserKYCS
     * const { count } = await prisma.userKYC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserKYCDeleteManyArgs>(args?: SelectSubset<T, UserKYCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKYCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserKYCS
     * const userKYC = await prisma.userKYC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserKYCUpdateManyArgs>(args: SelectSubset<T, UserKYCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserKYC.
     * @param {UserKYCUpsertArgs} args - Arguments to update or create a UserKYC.
     * @example
     * // Update or create a UserKYC
     * const userKYC = await prisma.userKYC.upsert({
     *   create: {
     *     // ... data to create a UserKYC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserKYC we want to update
     *   }
     * })
     */
    upsert<T extends UserKYCUpsertArgs>(args: SelectSubset<T, UserKYCUpsertArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserKYCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCCountArgs} args - Arguments to filter UserKYCS to count.
     * @example
     * // Count the number of UserKYCS
     * const count = await prisma.userKYC.count({
     *   where: {
     *     // ... the filter for the UserKYCS we want to count
     *   }
     * })
    **/
    count<T extends UserKYCCountArgs>(
      args?: Subset<T, UserKYCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserKYCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserKYC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserKYCAggregateArgs>(args: Subset<T, UserKYCAggregateArgs>): Prisma.PrismaPromise<GetUserKYCAggregateType<T>>

    /**
     * Group by UserKYC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKYCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserKYCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserKYCGroupByArgs['orderBy'] }
        : { orderBy?: UserKYCGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserKYCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserKYCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserKYC model
   */
  readonly fields: UserKYCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserKYC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserKYCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends UserKYC$documentsArgs<ExtArgs> = {}>(args?: Subset<T, UserKYC$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findMany"> | Null>
    webhookLogs<T extends UserKYC$webhookLogsArgs<ExtArgs> = {}>(args?: Subset<T, UserKYC$webhookLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findMany"> | Null>
    amlScreenings<T extends UserKYC$amlScreeningsArgs<ExtArgs> = {}>(args?: Subset<T, UserKYC$amlScreeningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserKYC model
   */ 
  interface UserKYCFieldRefs {
    readonly userId: FieldRef<"UserKYC", 'String'>
    readonly level: FieldRef<"UserKYC", 'Int'>
    readonly status: FieldRef<"UserKYC", 'KYCStatus'>
    readonly externalApplicantId: FieldRef<"UserKYC", 'String'>
    readonly externalInspectionId: FieldRef<"UserKYC", 'String'>
    readonly firstSubmittedAt: FieldRef<"UserKYC", 'DateTime'>
    readonly lastSubmittedAt: FieldRef<"UserKYC", 'DateTime'>
    readonly reviewedAt: FieldRef<"UserKYC", 'DateTime'>
    readonly reviewerNote: FieldRef<"UserKYC", 'String'>
    readonly rejectionReason: FieldRef<"UserKYC", 'KYCRejectionReason'>
    readonly rejectionDetails: FieldRef<"UserKYC", 'String'>
    readonly providerRawResponse: FieldRef<"UserKYC", 'Json'>
    readonly isActive: FieldRef<"UserKYC", 'Boolean'>
    readonly expiresAt: FieldRef<"UserKYC", 'DateTime'>
    readonly riskScore: FieldRef<"UserKYC", 'Float'>
    readonly createdAt: FieldRef<"UserKYC", 'DateTime'>
    readonly updatedAt: FieldRef<"UserKYC", 'DateTime'>
    readonly deletedAt: FieldRef<"UserKYC", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserKYC findUnique
   */
  export type UserKYCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter, which UserKYC to fetch.
     */
    where: UserKYCWhereUniqueInput
  }

  /**
   * UserKYC findUniqueOrThrow
   */
  export type UserKYCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter, which UserKYC to fetch.
     */
    where: UserKYCWhereUniqueInput
  }

  /**
   * UserKYC findFirst
   */
  export type UserKYCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter, which UserKYC to fetch.
     */
    where?: UserKYCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKYCS to fetch.
     */
    orderBy?: UserKYCOrderByWithRelationInput | UserKYCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKYCS.
     */
    cursor?: UserKYCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKYCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKYCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKYCS.
     */
    distinct?: UserKYCScalarFieldEnum | UserKYCScalarFieldEnum[]
  }

  /**
   * UserKYC findFirstOrThrow
   */
  export type UserKYCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter, which UserKYC to fetch.
     */
    where?: UserKYCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKYCS to fetch.
     */
    orderBy?: UserKYCOrderByWithRelationInput | UserKYCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKYCS.
     */
    cursor?: UserKYCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKYCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKYCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKYCS.
     */
    distinct?: UserKYCScalarFieldEnum | UserKYCScalarFieldEnum[]
  }

  /**
   * UserKYC findMany
   */
  export type UserKYCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter, which UserKYCS to fetch.
     */
    where?: UserKYCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKYCS to fetch.
     */
    orderBy?: UserKYCOrderByWithRelationInput | UserKYCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserKYCS.
     */
    cursor?: UserKYCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKYCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKYCS.
     */
    skip?: number
    distinct?: UserKYCScalarFieldEnum | UserKYCScalarFieldEnum[]
  }

  /**
   * UserKYC create
   */
  export type UserKYCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * The data needed to create a UserKYC.
     */
    data: XOR<UserKYCCreateInput, UserKYCUncheckedCreateInput>
  }

  /**
   * UserKYC createMany
   */
  export type UserKYCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserKYCS.
     */
    data: UserKYCCreateManyInput | UserKYCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserKYC createManyAndReturn
   */
  export type UserKYCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserKYCS.
     */
    data: UserKYCCreateManyInput | UserKYCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserKYC update
   */
  export type UserKYCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * The data needed to update a UserKYC.
     */
    data: XOR<UserKYCUpdateInput, UserKYCUncheckedUpdateInput>
    /**
     * Choose, which UserKYC to update.
     */
    where: UserKYCWhereUniqueInput
  }

  /**
   * UserKYC updateMany
   */
  export type UserKYCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserKYCS.
     */
    data: XOR<UserKYCUpdateManyMutationInput, UserKYCUncheckedUpdateManyInput>
    /**
     * Filter which UserKYCS to update
     */
    where?: UserKYCWhereInput
  }

  /**
   * UserKYC upsert
   */
  export type UserKYCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * The filter to search for the UserKYC to update in case it exists.
     */
    where: UserKYCWhereUniqueInput
    /**
     * In case the UserKYC found by the `where` argument doesn't exist, create a new UserKYC with this data.
     */
    create: XOR<UserKYCCreateInput, UserKYCUncheckedCreateInput>
    /**
     * In case the UserKYC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserKYCUpdateInput, UserKYCUncheckedUpdateInput>
  }

  /**
   * UserKYC delete
   */
  export type UserKYCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    /**
     * Filter which UserKYC to delete.
     */
    where: UserKYCWhereUniqueInput
  }

  /**
   * UserKYC deleteMany
   */
  export type UserKYCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKYCS to delete
     */
    where?: UserKYCWhereInput
  }

  /**
   * UserKYC.documents
   */
  export type UserKYC$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    where?: KYCDocumentWhereInput
    orderBy?: KYCDocumentOrderByWithRelationInput | KYCDocumentOrderByWithRelationInput[]
    cursor?: KYCDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KYCDocumentScalarFieldEnum | KYCDocumentScalarFieldEnum[]
  }

  /**
   * UserKYC.webhookLogs
   */
  export type UserKYC$webhookLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    where?: KYCWebhookLogWhereInput
    orderBy?: KYCWebhookLogOrderByWithRelationInput | KYCWebhookLogOrderByWithRelationInput[]
    cursor?: KYCWebhookLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KYCWebhookLogScalarFieldEnum | KYCWebhookLogScalarFieldEnum[]
  }

  /**
   * UserKYC.amlScreenings
   */
  export type UserKYC$amlScreeningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    where?: KYCAmlScreeningWhereInput
    orderBy?: KYCAmlScreeningOrderByWithRelationInput | KYCAmlScreeningOrderByWithRelationInput[]
    cursor?: KYCAmlScreeningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KYCAmlScreeningScalarFieldEnum | KYCAmlScreeningScalarFieldEnum[]
  }

  /**
   * UserKYC without action
   */
  export type UserKYCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
  }


  /**
   * Model KYCAmlScreening
   */

  export type AggregateKYCAmlScreening = {
    _count: KYCAmlScreeningCountAggregateOutputType | null
    _avg: KYCAmlScreeningAvgAggregateOutputType | null
    _sum: KYCAmlScreeningSumAggregateOutputType | null
    _min: KYCAmlScreeningMinAggregateOutputType | null
    _max: KYCAmlScreeningMaxAggregateOutputType | null
  }

  export type KYCAmlScreeningAvgAggregateOutputType = {
    totalHits: number | null
    score: number | null
  }

  export type KYCAmlScreeningSumAggregateOutputType = {
    totalHits: number | null
    score: number | null
  }

  export type KYCAmlScreeningMinAggregateOutputType = {
    id: string | null
    userId: string | null
    requestId: string | null
    status: string | null
    totalHits: number | null
    score: number | null
    screenedAt: Date | null
  }

  export type KYCAmlScreeningMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    requestId: string | null
    status: string | null
    totalHits: number | null
    score: number | null
    screenedAt: Date | null
  }

  export type KYCAmlScreeningCountAggregateOutputType = {
    id: number
    userId: number
    requestId: number
    status: number
    totalHits: number
    score: number
    hitsJson: number
    screenedAt: number
    _all: number
  }


  export type KYCAmlScreeningAvgAggregateInputType = {
    totalHits?: true
    score?: true
  }

  export type KYCAmlScreeningSumAggregateInputType = {
    totalHits?: true
    score?: true
  }

  export type KYCAmlScreeningMinAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    status?: true
    totalHits?: true
    score?: true
    screenedAt?: true
  }

  export type KYCAmlScreeningMaxAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    status?: true
    totalHits?: true
    score?: true
    screenedAt?: true
  }

  export type KYCAmlScreeningCountAggregateInputType = {
    id?: true
    userId?: true
    requestId?: true
    status?: true
    totalHits?: true
    score?: true
    hitsJson?: true
    screenedAt?: true
    _all?: true
  }

  export type KYCAmlScreeningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCAmlScreening to aggregate.
     */
    where?: KYCAmlScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCAmlScreenings to fetch.
     */
    orderBy?: KYCAmlScreeningOrderByWithRelationInput | KYCAmlScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KYCAmlScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCAmlScreenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCAmlScreenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KYCAmlScreenings
    **/
    _count?: true | KYCAmlScreeningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KYCAmlScreeningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KYCAmlScreeningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KYCAmlScreeningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KYCAmlScreeningMaxAggregateInputType
  }

  export type GetKYCAmlScreeningAggregateType<T extends KYCAmlScreeningAggregateArgs> = {
        [P in keyof T & keyof AggregateKYCAmlScreening]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKYCAmlScreening[P]>
      : GetScalarType<T[P], AggregateKYCAmlScreening[P]>
  }




  export type KYCAmlScreeningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCAmlScreeningWhereInput
    orderBy?: KYCAmlScreeningOrderByWithAggregationInput | KYCAmlScreeningOrderByWithAggregationInput[]
    by: KYCAmlScreeningScalarFieldEnum[] | KYCAmlScreeningScalarFieldEnum
    having?: KYCAmlScreeningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KYCAmlScreeningCountAggregateInputType | true
    _avg?: KYCAmlScreeningAvgAggregateInputType
    _sum?: KYCAmlScreeningSumAggregateInputType
    _min?: KYCAmlScreeningMinAggregateInputType
    _max?: KYCAmlScreeningMaxAggregateInputType
  }

  export type KYCAmlScreeningGroupByOutputType = {
    id: string
    userId: string
    requestId: string | null
    status: string
    totalHits: number
    score: number | null
    hitsJson: JsonValue | null
    screenedAt: Date
    _count: KYCAmlScreeningCountAggregateOutputType | null
    _avg: KYCAmlScreeningAvgAggregateOutputType | null
    _sum: KYCAmlScreeningSumAggregateOutputType | null
    _min: KYCAmlScreeningMinAggregateOutputType | null
    _max: KYCAmlScreeningMaxAggregateOutputType | null
  }

  type GetKYCAmlScreeningGroupByPayload<T extends KYCAmlScreeningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KYCAmlScreeningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KYCAmlScreeningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KYCAmlScreeningGroupByOutputType[P]>
            : GetScalarType<T[P], KYCAmlScreeningGroupByOutputType[P]>
        }
      >
    >


  export type KYCAmlScreeningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestId?: boolean
    status?: boolean
    totalHits?: boolean
    score?: boolean
    hitsJson?: boolean
    screenedAt?: boolean
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kYCAmlScreening"]>

  export type KYCAmlScreeningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    requestId?: boolean
    status?: boolean
    totalHits?: boolean
    score?: boolean
    hitsJson?: boolean
    screenedAt?: boolean
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kYCAmlScreening"]>

  export type KYCAmlScreeningSelectScalar = {
    id?: boolean
    userId?: boolean
    requestId?: boolean
    status?: boolean
    totalHits?: boolean
    score?: boolean
    hitsJson?: boolean
    screenedAt?: boolean
  }

  export type KYCAmlScreeningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }
  export type KYCAmlScreeningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }

  export type $KYCAmlScreeningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KYCAmlScreening"
    objects: {
      userKYC: Prisma.$UserKYCPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      requestId: string | null
      status: string
      totalHits: number
      score: number | null
      hitsJson: Prisma.JsonValue | null
      screenedAt: Date
    }, ExtArgs["result"]["kYCAmlScreening"]>
    composites: {}
  }

  type KYCAmlScreeningGetPayload<S extends boolean | null | undefined | KYCAmlScreeningDefaultArgs> = $Result.GetResult<Prisma.$KYCAmlScreeningPayload, S>

  type KYCAmlScreeningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KYCAmlScreeningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KYCAmlScreeningCountAggregateInputType | true
    }

  export interface KYCAmlScreeningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KYCAmlScreening'], meta: { name: 'KYCAmlScreening' } }
    /**
     * Find zero or one KYCAmlScreening that matches the filter.
     * @param {KYCAmlScreeningFindUniqueArgs} args - Arguments to find a KYCAmlScreening
     * @example
     * // Get one KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KYCAmlScreeningFindUniqueArgs>(args: SelectSubset<T, KYCAmlScreeningFindUniqueArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KYCAmlScreening that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KYCAmlScreeningFindUniqueOrThrowArgs} args - Arguments to find a KYCAmlScreening
     * @example
     * // Get one KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KYCAmlScreeningFindUniqueOrThrowArgs>(args: SelectSubset<T, KYCAmlScreeningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KYCAmlScreening that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningFindFirstArgs} args - Arguments to find a KYCAmlScreening
     * @example
     * // Get one KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KYCAmlScreeningFindFirstArgs>(args?: SelectSubset<T, KYCAmlScreeningFindFirstArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KYCAmlScreening that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningFindFirstOrThrowArgs} args - Arguments to find a KYCAmlScreening
     * @example
     * // Get one KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KYCAmlScreeningFindFirstOrThrowArgs>(args?: SelectSubset<T, KYCAmlScreeningFindFirstOrThrowArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KYCAmlScreenings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KYCAmlScreenings
     * const kYCAmlScreenings = await prisma.kYCAmlScreening.findMany()
     * 
     * // Get first 10 KYCAmlScreenings
     * const kYCAmlScreenings = await prisma.kYCAmlScreening.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kYCAmlScreeningWithIdOnly = await prisma.kYCAmlScreening.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KYCAmlScreeningFindManyArgs>(args?: SelectSubset<T, KYCAmlScreeningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KYCAmlScreening.
     * @param {KYCAmlScreeningCreateArgs} args - Arguments to create a KYCAmlScreening.
     * @example
     * // Create one KYCAmlScreening
     * const KYCAmlScreening = await prisma.kYCAmlScreening.create({
     *   data: {
     *     // ... data to create a KYCAmlScreening
     *   }
     * })
     * 
     */
    create<T extends KYCAmlScreeningCreateArgs>(args: SelectSubset<T, KYCAmlScreeningCreateArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KYCAmlScreenings.
     * @param {KYCAmlScreeningCreateManyArgs} args - Arguments to create many KYCAmlScreenings.
     * @example
     * // Create many KYCAmlScreenings
     * const kYCAmlScreening = await prisma.kYCAmlScreening.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KYCAmlScreeningCreateManyArgs>(args?: SelectSubset<T, KYCAmlScreeningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KYCAmlScreenings and returns the data saved in the database.
     * @param {KYCAmlScreeningCreateManyAndReturnArgs} args - Arguments to create many KYCAmlScreenings.
     * @example
     * // Create many KYCAmlScreenings
     * const kYCAmlScreening = await prisma.kYCAmlScreening.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KYCAmlScreenings and only return the `id`
     * const kYCAmlScreeningWithIdOnly = await prisma.kYCAmlScreening.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KYCAmlScreeningCreateManyAndReturnArgs>(args?: SelectSubset<T, KYCAmlScreeningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KYCAmlScreening.
     * @param {KYCAmlScreeningDeleteArgs} args - Arguments to delete one KYCAmlScreening.
     * @example
     * // Delete one KYCAmlScreening
     * const KYCAmlScreening = await prisma.kYCAmlScreening.delete({
     *   where: {
     *     // ... filter to delete one KYCAmlScreening
     *   }
     * })
     * 
     */
    delete<T extends KYCAmlScreeningDeleteArgs>(args: SelectSubset<T, KYCAmlScreeningDeleteArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KYCAmlScreening.
     * @param {KYCAmlScreeningUpdateArgs} args - Arguments to update one KYCAmlScreening.
     * @example
     * // Update one KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KYCAmlScreeningUpdateArgs>(args: SelectSubset<T, KYCAmlScreeningUpdateArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KYCAmlScreenings.
     * @param {KYCAmlScreeningDeleteManyArgs} args - Arguments to filter KYCAmlScreenings to delete.
     * @example
     * // Delete a few KYCAmlScreenings
     * const { count } = await prisma.kYCAmlScreening.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KYCAmlScreeningDeleteManyArgs>(args?: SelectSubset<T, KYCAmlScreeningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KYCAmlScreenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KYCAmlScreenings
     * const kYCAmlScreening = await prisma.kYCAmlScreening.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KYCAmlScreeningUpdateManyArgs>(args: SelectSubset<T, KYCAmlScreeningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KYCAmlScreening.
     * @param {KYCAmlScreeningUpsertArgs} args - Arguments to update or create a KYCAmlScreening.
     * @example
     * // Update or create a KYCAmlScreening
     * const kYCAmlScreening = await prisma.kYCAmlScreening.upsert({
     *   create: {
     *     // ... data to create a KYCAmlScreening
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KYCAmlScreening we want to update
     *   }
     * })
     */
    upsert<T extends KYCAmlScreeningUpsertArgs>(args: SelectSubset<T, KYCAmlScreeningUpsertArgs<ExtArgs>>): Prisma__KYCAmlScreeningClient<$Result.GetResult<Prisma.$KYCAmlScreeningPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KYCAmlScreenings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningCountArgs} args - Arguments to filter KYCAmlScreenings to count.
     * @example
     * // Count the number of KYCAmlScreenings
     * const count = await prisma.kYCAmlScreening.count({
     *   where: {
     *     // ... the filter for the KYCAmlScreenings we want to count
     *   }
     * })
    **/
    count<T extends KYCAmlScreeningCountArgs>(
      args?: Subset<T, KYCAmlScreeningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KYCAmlScreeningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KYCAmlScreening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KYCAmlScreeningAggregateArgs>(args: Subset<T, KYCAmlScreeningAggregateArgs>): Prisma.PrismaPromise<GetKYCAmlScreeningAggregateType<T>>

    /**
     * Group by KYCAmlScreening.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCAmlScreeningGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KYCAmlScreeningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KYCAmlScreeningGroupByArgs['orderBy'] }
        : { orderBy?: KYCAmlScreeningGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KYCAmlScreeningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKYCAmlScreeningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KYCAmlScreening model
   */
  readonly fields: KYCAmlScreeningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KYCAmlScreening.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KYCAmlScreeningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userKYC<T extends UserKYCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserKYCDefaultArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KYCAmlScreening model
   */ 
  interface KYCAmlScreeningFieldRefs {
    readonly id: FieldRef<"KYCAmlScreening", 'String'>
    readonly userId: FieldRef<"KYCAmlScreening", 'String'>
    readonly requestId: FieldRef<"KYCAmlScreening", 'String'>
    readonly status: FieldRef<"KYCAmlScreening", 'String'>
    readonly totalHits: FieldRef<"KYCAmlScreening", 'Int'>
    readonly score: FieldRef<"KYCAmlScreening", 'Float'>
    readonly hitsJson: FieldRef<"KYCAmlScreening", 'Json'>
    readonly screenedAt: FieldRef<"KYCAmlScreening", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KYCAmlScreening findUnique
   */
  export type KYCAmlScreeningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter, which KYCAmlScreening to fetch.
     */
    where: KYCAmlScreeningWhereUniqueInput
  }

  /**
   * KYCAmlScreening findUniqueOrThrow
   */
  export type KYCAmlScreeningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter, which KYCAmlScreening to fetch.
     */
    where: KYCAmlScreeningWhereUniqueInput
  }

  /**
   * KYCAmlScreening findFirst
   */
  export type KYCAmlScreeningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter, which KYCAmlScreening to fetch.
     */
    where?: KYCAmlScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCAmlScreenings to fetch.
     */
    orderBy?: KYCAmlScreeningOrderByWithRelationInput | KYCAmlScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCAmlScreenings.
     */
    cursor?: KYCAmlScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCAmlScreenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCAmlScreenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCAmlScreenings.
     */
    distinct?: KYCAmlScreeningScalarFieldEnum | KYCAmlScreeningScalarFieldEnum[]
  }

  /**
   * KYCAmlScreening findFirstOrThrow
   */
  export type KYCAmlScreeningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter, which KYCAmlScreening to fetch.
     */
    where?: KYCAmlScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCAmlScreenings to fetch.
     */
    orderBy?: KYCAmlScreeningOrderByWithRelationInput | KYCAmlScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCAmlScreenings.
     */
    cursor?: KYCAmlScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCAmlScreenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCAmlScreenings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCAmlScreenings.
     */
    distinct?: KYCAmlScreeningScalarFieldEnum | KYCAmlScreeningScalarFieldEnum[]
  }

  /**
   * KYCAmlScreening findMany
   */
  export type KYCAmlScreeningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter, which KYCAmlScreenings to fetch.
     */
    where?: KYCAmlScreeningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCAmlScreenings to fetch.
     */
    orderBy?: KYCAmlScreeningOrderByWithRelationInput | KYCAmlScreeningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KYCAmlScreenings.
     */
    cursor?: KYCAmlScreeningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCAmlScreenings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCAmlScreenings.
     */
    skip?: number
    distinct?: KYCAmlScreeningScalarFieldEnum | KYCAmlScreeningScalarFieldEnum[]
  }

  /**
   * KYCAmlScreening create
   */
  export type KYCAmlScreeningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * The data needed to create a KYCAmlScreening.
     */
    data: XOR<KYCAmlScreeningCreateInput, KYCAmlScreeningUncheckedCreateInput>
  }

  /**
   * KYCAmlScreening createMany
   */
  export type KYCAmlScreeningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KYCAmlScreenings.
     */
    data: KYCAmlScreeningCreateManyInput | KYCAmlScreeningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KYCAmlScreening createManyAndReturn
   */
  export type KYCAmlScreeningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KYCAmlScreenings.
     */
    data: KYCAmlScreeningCreateManyInput | KYCAmlScreeningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KYCAmlScreening update
   */
  export type KYCAmlScreeningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * The data needed to update a KYCAmlScreening.
     */
    data: XOR<KYCAmlScreeningUpdateInput, KYCAmlScreeningUncheckedUpdateInput>
    /**
     * Choose, which KYCAmlScreening to update.
     */
    where: KYCAmlScreeningWhereUniqueInput
  }

  /**
   * KYCAmlScreening updateMany
   */
  export type KYCAmlScreeningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KYCAmlScreenings.
     */
    data: XOR<KYCAmlScreeningUpdateManyMutationInput, KYCAmlScreeningUncheckedUpdateManyInput>
    /**
     * Filter which KYCAmlScreenings to update
     */
    where?: KYCAmlScreeningWhereInput
  }

  /**
   * KYCAmlScreening upsert
   */
  export type KYCAmlScreeningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * The filter to search for the KYCAmlScreening to update in case it exists.
     */
    where: KYCAmlScreeningWhereUniqueInput
    /**
     * In case the KYCAmlScreening found by the `where` argument doesn't exist, create a new KYCAmlScreening with this data.
     */
    create: XOR<KYCAmlScreeningCreateInput, KYCAmlScreeningUncheckedCreateInput>
    /**
     * In case the KYCAmlScreening was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KYCAmlScreeningUpdateInput, KYCAmlScreeningUncheckedUpdateInput>
  }

  /**
   * KYCAmlScreening delete
   */
  export type KYCAmlScreeningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
    /**
     * Filter which KYCAmlScreening to delete.
     */
    where: KYCAmlScreeningWhereUniqueInput
  }

  /**
   * KYCAmlScreening deleteMany
   */
  export type KYCAmlScreeningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCAmlScreenings to delete
     */
    where?: KYCAmlScreeningWhereInput
  }

  /**
   * KYCAmlScreening without action
   */
  export type KYCAmlScreeningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCAmlScreening
     */
    select?: KYCAmlScreeningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCAmlScreeningInclude<ExtArgs> | null
  }


  /**
   * Model KYCWebhookLog
   */

  export type AggregateKYCWebhookLog = {
    _count: KYCWebhookLogCountAggregateOutputType | null
    _min: KYCWebhookLogMinAggregateOutputType | null
    _max: KYCWebhookLogMaxAggregateOutputType | null
  }

  export type KYCWebhookLogMinAggregateOutputType = {
    id: string | null
    provider: string | null
    eventType: string | null
    externalApplicantId: string | null
    correlationId: string | null
    signatureValid: boolean | null
    processed: boolean | null
    processedAt: Date | null
    processingError: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KYCWebhookLogMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    eventType: string | null
    externalApplicantId: string | null
    correlationId: string | null
    signatureValid: boolean | null
    processed: boolean | null
    processedAt: Date | null
    processingError: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KYCWebhookLogCountAggregateOutputType = {
    id: number
    provider: number
    eventType: number
    externalApplicantId: number
    correlationId: number
    headersJson: number
    payloadJson: number
    signatureValid: number
    processed: number
    processedAt: number
    processingError: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KYCWebhookLogMinAggregateInputType = {
    id?: true
    provider?: true
    eventType?: true
    externalApplicantId?: true
    correlationId?: true
    signatureValid?: true
    processed?: true
    processedAt?: true
    processingError?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KYCWebhookLogMaxAggregateInputType = {
    id?: true
    provider?: true
    eventType?: true
    externalApplicantId?: true
    correlationId?: true
    signatureValid?: true
    processed?: true
    processedAt?: true
    processingError?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KYCWebhookLogCountAggregateInputType = {
    id?: true
    provider?: true
    eventType?: true
    externalApplicantId?: true
    correlationId?: true
    headersJson?: true
    payloadJson?: true
    signatureValid?: true
    processed?: true
    processedAt?: true
    processingError?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KYCWebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCWebhookLog to aggregate.
     */
    where?: KYCWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCWebhookLogs to fetch.
     */
    orderBy?: KYCWebhookLogOrderByWithRelationInput | KYCWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KYCWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KYCWebhookLogs
    **/
    _count?: true | KYCWebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KYCWebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KYCWebhookLogMaxAggregateInputType
  }

  export type GetKYCWebhookLogAggregateType<T extends KYCWebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregateKYCWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKYCWebhookLog[P]>
      : GetScalarType<T[P], AggregateKYCWebhookLog[P]>
  }




  export type KYCWebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCWebhookLogWhereInput
    orderBy?: KYCWebhookLogOrderByWithAggregationInput | KYCWebhookLogOrderByWithAggregationInput[]
    by: KYCWebhookLogScalarFieldEnum[] | KYCWebhookLogScalarFieldEnum
    having?: KYCWebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KYCWebhookLogCountAggregateInputType | true
    _min?: KYCWebhookLogMinAggregateInputType
    _max?: KYCWebhookLogMaxAggregateInputType
  }

  export type KYCWebhookLogGroupByOutputType = {
    id: string
    provider: string
    eventType: string
    externalApplicantId: string | null
    correlationId: string | null
    headersJson: JsonValue | null
    payloadJson: JsonValue
    signatureValid: boolean
    processed: boolean
    processedAt: Date | null
    processingError: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: KYCWebhookLogCountAggregateOutputType | null
    _min: KYCWebhookLogMinAggregateOutputType | null
    _max: KYCWebhookLogMaxAggregateOutputType | null
  }

  type GetKYCWebhookLogGroupByPayload<T extends KYCWebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KYCWebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KYCWebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KYCWebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], KYCWebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type KYCWebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventType?: boolean
    externalApplicantId?: boolean
    correlationId?: boolean
    headersJson?: boolean
    payloadJson?: boolean
    signatureValid?: boolean
    processed?: boolean
    processedAt?: boolean
    processingError?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userKYC?: boolean | KYCWebhookLog$userKYCArgs<ExtArgs>
  }, ExtArgs["result"]["kYCWebhookLog"]>

  export type KYCWebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    eventType?: boolean
    externalApplicantId?: boolean
    correlationId?: boolean
    headersJson?: boolean
    payloadJson?: boolean
    signatureValid?: boolean
    processed?: boolean
    processedAt?: boolean
    processingError?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userKYC?: boolean | KYCWebhookLog$userKYCArgs<ExtArgs>
  }, ExtArgs["result"]["kYCWebhookLog"]>

  export type KYCWebhookLogSelectScalar = {
    id?: boolean
    provider?: boolean
    eventType?: boolean
    externalApplicantId?: boolean
    correlationId?: boolean
    headersJson?: boolean
    payloadJson?: boolean
    signatureValid?: boolean
    processed?: boolean
    processedAt?: boolean
    processingError?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KYCWebhookLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | KYCWebhookLog$userKYCArgs<ExtArgs>
  }
  export type KYCWebhookLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | KYCWebhookLog$userKYCArgs<ExtArgs>
  }

  export type $KYCWebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KYCWebhookLog"
    objects: {
      userKYC: Prisma.$UserKYCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      eventType: string
      externalApplicantId: string | null
      correlationId: string | null
      headersJson: Prisma.JsonValue | null
      payloadJson: Prisma.JsonValue
      signatureValid: boolean
      processed: boolean
      processedAt: Date | null
      processingError: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kYCWebhookLog"]>
    composites: {}
  }

  type KYCWebhookLogGetPayload<S extends boolean | null | undefined | KYCWebhookLogDefaultArgs> = $Result.GetResult<Prisma.$KYCWebhookLogPayload, S>

  type KYCWebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KYCWebhookLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KYCWebhookLogCountAggregateInputType | true
    }

  export interface KYCWebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KYCWebhookLog'], meta: { name: 'KYCWebhookLog' } }
    /**
     * Find zero or one KYCWebhookLog that matches the filter.
     * @param {KYCWebhookLogFindUniqueArgs} args - Arguments to find a KYCWebhookLog
     * @example
     * // Get one KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KYCWebhookLogFindUniqueArgs>(args: SelectSubset<T, KYCWebhookLogFindUniqueArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KYCWebhookLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KYCWebhookLogFindUniqueOrThrowArgs} args - Arguments to find a KYCWebhookLog
     * @example
     * // Get one KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KYCWebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, KYCWebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KYCWebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogFindFirstArgs} args - Arguments to find a KYCWebhookLog
     * @example
     * // Get one KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KYCWebhookLogFindFirstArgs>(args?: SelectSubset<T, KYCWebhookLogFindFirstArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KYCWebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogFindFirstOrThrowArgs} args - Arguments to find a KYCWebhookLog
     * @example
     * // Get one KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KYCWebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, KYCWebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KYCWebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KYCWebhookLogs
     * const kYCWebhookLogs = await prisma.kYCWebhookLog.findMany()
     * 
     * // Get first 10 KYCWebhookLogs
     * const kYCWebhookLogs = await prisma.kYCWebhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kYCWebhookLogWithIdOnly = await prisma.kYCWebhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KYCWebhookLogFindManyArgs>(args?: SelectSubset<T, KYCWebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KYCWebhookLog.
     * @param {KYCWebhookLogCreateArgs} args - Arguments to create a KYCWebhookLog.
     * @example
     * // Create one KYCWebhookLog
     * const KYCWebhookLog = await prisma.kYCWebhookLog.create({
     *   data: {
     *     // ... data to create a KYCWebhookLog
     *   }
     * })
     * 
     */
    create<T extends KYCWebhookLogCreateArgs>(args: SelectSubset<T, KYCWebhookLogCreateArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KYCWebhookLogs.
     * @param {KYCWebhookLogCreateManyArgs} args - Arguments to create many KYCWebhookLogs.
     * @example
     * // Create many KYCWebhookLogs
     * const kYCWebhookLog = await prisma.kYCWebhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KYCWebhookLogCreateManyArgs>(args?: SelectSubset<T, KYCWebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KYCWebhookLogs and returns the data saved in the database.
     * @param {KYCWebhookLogCreateManyAndReturnArgs} args - Arguments to create many KYCWebhookLogs.
     * @example
     * // Create many KYCWebhookLogs
     * const kYCWebhookLog = await prisma.kYCWebhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KYCWebhookLogs and only return the `id`
     * const kYCWebhookLogWithIdOnly = await prisma.kYCWebhookLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KYCWebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, KYCWebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KYCWebhookLog.
     * @param {KYCWebhookLogDeleteArgs} args - Arguments to delete one KYCWebhookLog.
     * @example
     * // Delete one KYCWebhookLog
     * const KYCWebhookLog = await prisma.kYCWebhookLog.delete({
     *   where: {
     *     // ... filter to delete one KYCWebhookLog
     *   }
     * })
     * 
     */
    delete<T extends KYCWebhookLogDeleteArgs>(args: SelectSubset<T, KYCWebhookLogDeleteArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KYCWebhookLog.
     * @param {KYCWebhookLogUpdateArgs} args - Arguments to update one KYCWebhookLog.
     * @example
     * // Update one KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KYCWebhookLogUpdateArgs>(args: SelectSubset<T, KYCWebhookLogUpdateArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KYCWebhookLogs.
     * @param {KYCWebhookLogDeleteManyArgs} args - Arguments to filter KYCWebhookLogs to delete.
     * @example
     * // Delete a few KYCWebhookLogs
     * const { count } = await prisma.kYCWebhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KYCWebhookLogDeleteManyArgs>(args?: SelectSubset<T, KYCWebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KYCWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KYCWebhookLogs
     * const kYCWebhookLog = await prisma.kYCWebhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KYCWebhookLogUpdateManyArgs>(args: SelectSubset<T, KYCWebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KYCWebhookLog.
     * @param {KYCWebhookLogUpsertArgs} args - Arguments to update or create a KYCWebhookLog.
     * @example
     * // Update or create a KYCWebhookLog
     * const kYCWebhookLog = await prisma.kYCWebhookLog.upsert({
     *   create: {
     *     // ... data to create a KYCWebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KYCWebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends KYCWebhookLogUpsertArgs>(args: SelectSubset<T, KYCWebhookLogUpsertArgs<ExtArgs>>): Prisma__KYCWebhookLogClient<$Result.GetResult<Prisma.$KYCWebhookLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KYCWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogCountArgs} args - Arguments to filter KYCWebhookLogs to count.
     * @example
     * // Count the number of KYCWebhookLogs
     * const count = await prisma.kYCWebhookLog.count({
     *   where: {
     *     // ... the filter for the KYCWebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends KYCWebhookLogCountArgs>(
      args?: Subset<T, KYCWebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KYCWebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KYCWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KYCWebhookLogAggregateArgs>(args: Subset<T, KYCWebhookLogAggregateArgs>): Prisma.PrismaPromise<GetKYCWebhookLogAggregateType<T>>

    /**
     * Group by KYCWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCWebhookLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KYCWebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KYCWebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: KYCWebhookLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KYCWebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKYCWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KYCWebhookLog model
   */
  readonly fields: KYCWebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KYCWebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KYCWebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userKYC<T extends KYCWebhookLog$userKYCArgs<ExtArgs> = {}>(args?: Subset<T, KYCWebhookLog$userKYCArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KYCWebhookLog model
   */ 
  interface KYCWebhookLogFieldRefs {
    readonly id: FieldRef<"KYCWebhookLog", 'String'>
    readonly provider: FieldRef<"KYCWebhookLog", 'String'>
    readonly eventType: FieldRef<"KYCWebhookLog", 'String'>
    readonly externalApplicantId: FieldRef<"KYCWebhookLog", 'String'>
    readonly correlationId: FieldRef<"KYCWebhookLog", 'String'>
    readonly headersJson: FieldRef<"KYCWebhookLog", 'Json'>
    readonly payloadJson: FieldRef<"KYCWebhookLog", 'Json'>
    readonly signatureValid: FieldRef<"KYCWebhookLog", 'Boolean'>
    readonly processed: FieldRef<"KYCWebhookLog", 'Boolean'>
    readonly processedAt: FieldRef<"KYCWebhookLog", 'DateTime'>
    readonly processingError: FieldRef<"KYCWebhookLog", 'String'>
    readonly userId: FieldRef<"KYCWebhookLog", 'String'>
    readonly createdAt: FieldRef<"KYCWebhookLog", 'DateTime'>
    readonly updatedAt: FieldRef<"KYCWebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KYCWebhookLog findUnique
   */
  export type KYCWebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which KYCWebhookLog to fetch.
     */
    where: KYCWebhookLogWhereUniqueInput
  }

  /**
   * KYCWebhookLog findUniqueOrThrow
   */
  export type KYCWebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which KYCWebhookLog to fetch.
     */
    where: KYCWebhookLogWhereUniqueInput
  }

  /**
   * KYCWebhookLog findFirst
   */
  export type KYCWebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which KYCWebhookLog to fetch.
     */
    where?: KYCWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCWebhookLogs to fetch.
     */
    orderBy?: KYCWebhookLogOrderByWithRelationInput | KYCWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCWebhookLogs.
     */
    cursor?: KYCWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCWebhookLogs.
     */
    distinct?: KYCWebhookLogScalarFieldEnum | KYCWebhookLogScalarFieldEnum[]
  }

  /**
   * KYCWebhookLog findFirstOrThrow
   */
  export type KYCWebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which KYCWebhookLog to fetch.
     */
    where?: KYCWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCWebhookLogs to fetch.
     */
    orderBy?: KYCWebhookLogOrderByWithRelationInput | KYCWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCWebhookLogs.
     */
    cursor?: KYCWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCWebhookLogs.
     */
    distinct?: KYCWebhookLogScalarFieldEnum | KYCWebhookLogScalarFieldEnum[]
  }

  /**
   * KYCWebhookLog findMany
   */
  export type KYCWebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter, which KYCWebhookLogs to fetch.
     */
    where?: KYCWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCWebhookLogs to fetch.
     */
    orderBy?: KYCWebhookLogOrderByWithRelationInput | KYCWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KYCWebhookLogs.
     */
    cursor?: KYCWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCWebhookLogs.
     */
    skip?: number
    distinct?: KYCWebhookLogScalarFieldEnum | KYCWebhookLogScalarFieldEnum[]
  }

  /**
   * KYCWebhookLog create
   */
  export type KYCWebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to create a KYCWebhookLog.
     */
    data: XOR<KYCWebhookLogCreateInput, KYCWebhookLogUncheckedCreateInput>
  }

  /**
   * KYCWebhookLog createMany
   */
  export type KYCWebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KYCWebhookLogs.
     */
    data: KYCWebhookLogCreateManyInput | KYCWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KYCWebhookLog createManyAndReturn
   */
  export type KYCWebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KYCWebhookLogs.
     */
    data: KYCWebhookLogCreateManyInput | KYCWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KYCWebhookLog update
   */
  export type KYCWebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * The data needed to update a KYCWebhookLog.
     */
    data: XOR<KYCWebhookLogUpdateInput, KYCWebhookLogUncheckedUpdateInput>
    /**
     * Choose, which KYCWebhookLog to update.
     */
    where: KYCWebhookLogWhereUniqueInput
  }

  /**
   * KYCWebhookLog updateMany
   */
  export type KYCWebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KYCWebhookLogs.
     */
    data: XOR<KYCWebhookLogUpdateManyMutationInput, KYCWebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which KYCWebhookLogs to update
     */
    where?: KYCWebhookLogWhereInput
  }

  /**
   * KYCWebhookLog upsert
   */
  export type KYCWebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * The filter to search for the KYCWebhookLog to update in case it exists.
     */
    where: KYCWebhookLogWhereUniqueInput
    /**
     * In case the KYCWebhookLog found by the `where` argument doesn't exist, create a new KYCWebhookLog with this data.
     */
    create: XOR<KYCWebhookLogCreateInput, KYCWebhookLogUncheckedCreateInput>
    /**
     * In case the KYCWebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KYCWebhookLogUpdateInput, KYCWebhookLogUncheckedUpdateInput>
  }

  /**
   * KYCWebhookLog delete
   */
  export type KYCWebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
    /**
     * Filter which KYCWebhookLog to delete.
     */
    where: KYCWebhookLogWhereUniqueInput
  }

  /**
   * KYCWebhookLog deleteMany
   */
  export type KYCWebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCWebhookLogs to delete
     */
    where?: KYCWebhookLogWhereInput
  }

  /**
   * KYCWebhookLog.userKYC
   */
  export type KYCWebhookLog$userKYCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKYC
     */
    select?: UserKYCSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKYCInclude<ExtArgs> | null
    where?: UserKYCWhereInput
  }

  /**
   * KYCWebhookLog without action
   */
  export type KYCWebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCWebhookLog
     */
    select?: KYCWebhookLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCWebhookLogInclude<ExtArgs> | null
  }


  /**
   * Model KYCDocument
   */

  export type AggregateKYCDocument = {
    _count: KYCDocumentCountAggregateOutputType | null
    _avg: KYCDocumentAvgAggregateOutputType | null
    _sum: KYCDocumentSumAggregateOutputType | null
    _min: KYCDocumentMinAggregateOutputType | null
    _max: KYCDocumentMaxAggregateOutputType | null
  }

  export type KYCDocumentAvgAggregateOutputType = {
    kycLevel: number | null
    fileSizeKb: number | null
  }

  export type KYCDocumentSumAggregateOutputType = {
    kycLevel: number | null
    fileSizeKb: number | null
  }

  export type KYCDocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kycLevel: number | null
    documentType: $Enums.KYCDocumentType | null
    fileName: string | null
    fileHash: string | null
    fileSizeKb: number | null
    documentStatus: $Enums.KYCDocumentStatus | null
    submittedAt: Date | null
    verifiedAt: Date | null
    rejectedReason: string | null
    countryOfIssue: string | null
    numberMasked: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type KYCDocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kycLevel: number | null
    documentType: $Enums.KYCDocumentType | null
    fileName: string | null
    fileHash: string | null
    fileSizeKb: number | null
    documentStatus: $Enums.KYCDocumentStatus | null
    submittedAt: Date | null
    verifiedAt: Date | null
    rejectedReason: string | null
    countryOfIssue: string | null
    numberMasked: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type KYCDocumentCountAggregateOutputType = {
    id: number
    userId: number
    kycLevel: number
    documentType: number
    fileName: number
    fileHash: number
    fileSizeKb: number
    documentStatus: number
    submittedAt: number
    verifiedAt: number
    rejectedReason: number
    countryOfIssue: number
    numberMasked: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type KYCDocumentAvgAggregateInputType = {
    kycLevel?: true
    fileSizeKb?: true
  }

  export type KYCDocumentSumAggregateInputType = {
    kycLevel?: true
    fileSizeKb?: true
  }

  export type KYCDocumentMinAggregateInputType = {
    id?: true
    userId?: true
    kycLevel?: true
    documentType?: true
    fileName?: true
    fileHash?: true
    fileSizeKb?: true
    documentStatus?: true
    submittedAt?: true
    verifiedAt?: true
    rejectedReason?: true
    countryOfIssue?: true
    numberMasked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type KYCDocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    kycLevel?: true
    documentType?: true
    fileName?: true
    fileHash?: true
    fileSizeKb?: true
    documentStatus?: true
    submittedAt?: true
    verifiedAt?: true
    rejectedReason?: true
    countryOfIssue?: true
    numberMasked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type KYCDocumentCountAggregateInputType = {
    id?: true
    userId?: true
    kycLevel?: true
    documentType?: true
    fileName?: true
    fileHash?: true
    fileSizeKb?: true
    documentStatus?: true
    submittedAt?: true
    verifiedAt?: true
    rejectedReason?: true
    countryOfIssue?: true
    numberMasked?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type KYCDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCDocument to aggregate.
     */
    where?: KYCDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCDocuments to fetch.
     */
    orderBy?: KYCDocumentOrderByWithRelationInput | KYCDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KYCDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KYCDocuments
    **/
    _count?: true | KYCDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KYCDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KYCDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KYCDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KYCDocumentMaxAggregateInputType
  }

  export type GetKYCDocumentAggregateType<T extends KYCDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateKYCDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKYCDocument[P]>
      : GetScalarType<T[P], AggregateKYCDocument[P]>
  }




  export type KYCDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCDocumentWhereInput
    orderBy?: KYCDocumentOrderByWithAggregationInput | KYCDocumentOrderByWithAggregationInput[]
    by: KYCDocumentScalarFieldEnum[] | KYCDocumentScalarFieldEnum
    having?: KYCDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KYCDocumentCountAggregateInputType | true
    _avg?: KYCDocumentAvgAggregateInputType
    _sum?: KYCDocumentSumAggregateInputType
    _min?: KYCDocumentMinAggregateInputType
    _max?: KYCDocumentMaxAggregateInputType
  }

  export type KYCDocumentGroupByOutputType = {
    id: string
    userId: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName: string | null
    fileHash: string | null
    fileSizeKb: number | null
    documentStatus: $Enums.KYCDocumentStatus
    submittedAt: Date | null
    verifiedAt: Date | null
    rejectedReason: string | null
    countryOfIssue: string | null
    numberMasked: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: KYCDocumentCountAggregateOutputType | null
    _avg: KYCDocumentAvgAggregateOutputType | null
    _sum: KYCDocumentSumAggregateOutputType | null
    _min: KYCDocumentMinAggregateOutputType | null
    _max: KYCDocumentMaxAggregateOutputType | null
  }

  type GetKYCDocumentGroupByPayload<T extends KYCDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KYCDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KYCDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KYCDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], KYCDocumentGroupByOutputType[P]>
        }
      >
    >


  export type KYCDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kycLevel?: boolean
    documentType?: boolean
    fileName?: boolean
    fileHash?: boolean
    fileSizeKb?: boolean
    documentStatus?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    rejectedReason?: boolean
    countryOfIssue?: boolean
    numberMasked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kYCDocument"]>

  export type KYCDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kycLevel?: boolean
    documentType?: boolean
    fileName?: boolean
    fileHash?: boolean
    fileSizeKb?: boolean
    documentStatus?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    rejectedReason?: boolean
    countryOfIssue?: boolean
    numberMasked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kYCDocument"]>

  export type KYCDocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    kycLevel?: boolean
    documentType?: boolean
    fileName?: boolean
    fileHash?: boolean
    fileSizeKb?: boolean
    documentStatus?: boolean
    submittedAt?: boolean
    verifiedAt?: boolean
    rejectedReason?: boolean
    countryOfIssue?: boolean
    numberMasked?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type KYCDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }
  export type KYCDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKYC?: boolean | UserKYCDefaultArgs<ExtArgs>
  }

  export type $KYCDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KYCDocument"
    objects: {
      userKYC: Prisma.$UserKYCPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kycLevel: number
      documentType: $Enums.KYCDocumentType
      fileName: string | null
      fileHash: string | null
      fileSizeKb: number | null
      documentStatus: $Enums.KYCDocumentStatus
      submittedAt: Date | null
      verifiedAt: Date | null
      rejectedReason: string | null
      countryOfIssue: string | null
      numberMasked: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["kYCDocument"]>
    composites: {}
  }

  type KYCDocumentGetPayload<S extends boolean | null | undefined | KYCDocumentDefaultArgs> = $Result.GetResult<Prisma.$KYCDocumentPayload, S>

  type KYCDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KYCDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KYCDocumentCountAggregateInputType | true
    }

  export interface KYCDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KYCDocument'], meta: { name: 'KYCDocument' } }
    /**
     * Find zero or one KYCDocument that matches the filter.
     * @param {KYCDocumentFindUniqueArgs} args - Arguments to find a KYCDocument
     * @example
     * // Get one KYCDocument
     * const kYCDocument = await prisma.kYCDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KYCDocumentFindUniqueArgs>(args: SelectSubset<T, KYCDocumentFindUniqueArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KYCDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KYCDocumentFindUniqueOrThrowArgs} args - Arguments to find a KYCDocument
     * @example
     * // Get one KYCDocument
     * const kYCDocument = await prisma.kYCDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KYCDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, KYCDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KYCDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentFindFirstArgs} args - Arguments to find a KYCDocument
     * @example
     * // Get one KYCDocument
     * const kYCDocument = await prisma.kYCDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KYCDocumentFindFirstArgs>(args?: SelectSubset<T, KYCDocumentFindFirstArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KYCDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentFindFirstOrThrowArgs} args - Arguments to find a KYCDocument
     * @example
     * // Get one KYCDocument
     * const kYCDocument = await prisma.kYCDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KYCDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, KYCDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KYCDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KYCDocuments
     * const kYCDocuments = await prisma.kYCDocument.findMany()
     * 
     * // Get first 10 KYCDocuments
     * const kYCDocuments = await prisma.kYCDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kYCDocumentWithIdOnly = await prisma.kYCDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KYCDocumentFindManyArgs>(args?: SelectSubset<T, KYCDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KYCDocument.
     * @param {KYCDocumentCreateArgs} args - Arguments to create a KYCDocument.
     * @example
     * // Create one KYCDocument
     * const KYCDocument = await prisma.kYCDocument.create({
     *   data: {
     *     // ... data to create a KYCDocument
     *   }
     * })
     * 
     */
    create<T extends KYCDocumentCreateArgs>(args: SelectSubset<T, KYCDocumentCreateArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KYCDocuments.
     * @param {KYCDocumentCreateManyArgs} args - Arguments to create many KYCDocuments.
     * @example
     * // Create many KYCDocuments
     * const kYCDocument = await prisma.kYCDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KYCDocumentCreateManyArgs>(args?: SelectSubset<T, KYCDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KYCDocuments and returns the data saved in the database.
     * @param {KYCDocumentCreateManyAndReturnArgs} args - Arguments to create many KYCDocuments.
     * @example
     * // Create many KYCDocuments
     * const kYCDocument = await prisma.kYCDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KYCDocuments and only return the `id`
     * const kYCDocumentWithIdOnly = await prisma.kYCDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KYCDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, KYCDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KYCDocument.
     * @param {KYCDocumentDeleteArgs} args - Arguments to delete one KYCDocument.
     * @example
     * // Delete one KYCDocument
     * const KYCDocument = await prisma.kYCDocument.delete({
     *   where: {
     *     // ... filter to delete one KYCDocument
     *   }
     * })
     * 
     */
    delete<T extends KYCDocumentDeleteArgs>(args: SelectSubset<T, KYCDocumentDeleteArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KYCDocument.
     * @param {KYCDocumentUpdateArgs} args - Arguments to update one KYCDocument.
     * @example
     * // Update one KYCDocument
     * const kYCDocument = await prisma.kYCDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KYCDocumentUpdateArgs>(args: SelectSubset<T, KYCDocumentUpdateArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KYCDocuments.
     * @param {KYCDocumentDeleteManyArgs} args - Arguments to filter KYCDocuments to delete.
     * @example
     * // Delete a few KYCDocuments
     * const { count } = await prisma.kYCDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KYCDocumentDeleteManyArgs>(args?: SelectSubset<T, KYCDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KYCDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KYCDocuments
     * const kYCDocument = await prisma.kYCDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KYCDocumentUpdateManyArgs>(args: SelectSubset<T, KYCDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KYCDocument.
     * @param {KYCDocumentUpsertArgs} args - Arguments to update or create a KYCDocument.
     * @example
     * // Update or create a KYCDocument
     * const kYCDocument = await prisma.kYCDocument.upsert({
     *   create: {
     *     // ... data to create a KYCDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KYCDocument we want to update
     *   }
     * })
     */
    upsert<T extends KYCDocumentUpsertArgs>(args: SelectSubset<T, KYCDocumentUpsertArgs<ExtArgs>>): Prisma__KYCDocumentClient<$Result.GetResult<Prisma.$KYCDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KYCDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentCountArgs} args - Arguments to filter KYCDocuments to count.
     * @example
     * // Count the number of KYCDocuments
     * const count = await prisma.kYCDocument.count({
     *   where: {
     *     // ... the filter for the KYCDocuments we want to count
     *   }
     * })
    **/
    count<T extends KYCDocumentCountArgs>(
      args?: Subset<T, KYCDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KYCDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KYCDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KYCDocumentAggregateArgs>(args: Subset<T, KYCDocumentAggregateArgs>): Prisma.PrismaPromise<GetKYCDocumentAggregateType<T>>

    /**
     * Group by KYCDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KYCDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KYCDocumentGroupByArgs['orderBy'] }
        : { orderBy?: KYCDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KYCDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKYCDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KYCDocument model
   */
  readonly fields: KYCDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KYCDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KYCDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userKYC<T extends UserKYCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserKYCDefaultArgs<ExtArgs>>): Prisma__UserKYCClient<$Result.GetResult<Prisma.$UserKYCPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KYCDocument model
   */ 
  interface KYCDocumentFieldRefs {
    readonly id: FieldRef<"KYCDocument", 'String'>
    readonly userId: FieldRef<"KYCDocument", 'String'>
    readonly kycLevel: FieldRef<"KYCDocument", 'Int'>
    readonly documentType: FieldRef<"KYCDocument", 'KYCDocumentType'>
    readonly fileName: FieldRef<"KYCDocument", 'String'>
    readonly fileHash: FieldRef<"KYCDocument", 'String'>
    readonly fileSizeKb: FieldRef<"KYCDocument", 'Int'>
    readonly documentStatus: FieldRef<"KYCDocument", 'KYCDocumentStatus'>
    readonly submittedAt: FieldRef<"KYCDocument", 'DateTime'>
    readonly verifiedAt: FieldRef<"KYCDocument", 'DateTime'>
    readonly rejectedReason: FieldRef<"KYCDocument", 'String'>
    readonly countryOfIssue: FieldRef<"KYCDocument", 'String'>
    readonly numberMasked: FieldRef<"KYCDocument", 'String'>
    readonly expiresAt: FieldRef<"KYCDocument", 'DateTime'>
    readonly createdAt: FieldRef<"KYCDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"KYCDocument", 'DateTime'>
    readonly deletedAt: FieldRef<"KYCDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KYCDocument findUnique
   */
  export type KYCDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KYCDocument to fetch.
     */
    where: KYCDocumentWhereUniqueInput
  }

  /**
   * KYCDocument findUniqueOrThrow
   */
  export type KYCDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KYCDocument to fetch.
     */
    where: KYCDocumentWhereUniqueInput
  }

  /**
   * KYCDocument findFirst
   */
  export type KYCDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KYCDocument to fetch.
     */
    where?: KYCDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCDocuments to fetch.
     */
    orderBy?: KYCDocumentOrderByWithRelationInput | KYCDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCDocuments.
     */
    cursor?: KYCDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCDocuments.
     */
    distinct?: KYCDocumentScalarFieldEnum | KYCDocumentScalarFieldEnum[]
  }

  /**
   * KYCDocument findFirstOrThrow
   */
  export type KYCDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KYCDocument to fetch.
     */
    where?: KYCDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCDocuments to fetch.
     */
    orderBy?: KYCDocumentOrderByWithRelationInput | KYCDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCDocuments.
     */
    cursor?: KYCDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCDocuments.
     */
    distinct?: KYCDocumentScalarFieldEnum | KYCDocumentScalarFieldEnum[]
  }

  /**
   * KYCDocument findMany
   */
  export type KYCDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KYCDocuments to fetch.
     */
    where?: KYCDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCDocuments to fetch.
     */
    orderBy?: KYCDocumentOrderByWithRelationInput | KYCDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KYCDocuments.
     */
    cursor?: KYCDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCDocuments.
     */
    skip?: number
    distinct?: KYCDocumentScalarFieldEnum | KYCDocumentScalarFieldEnum[]
  }

  /**
   * KYCDocument create
   */
  export type KYCDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a KYCDocument.
     */
    data: XOR<KYCDocumentCreateInput, KYCDocumentUncheckedCreateInput>
  }

  /**
   * KYCDocument createMany
   */
  export type KYCDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KYCDocuments.
     */
    data: KYCDocumentCreateManyInput | KYCDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KYCDocument createManyAndReturn
   */
  export type KYCDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KYCDocuments.
     */
    data: KYCDocumentCreateManyInput | KYCDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KYCDocument update
   */
  export type KYCDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a KYCDocument.
     */
    data: XOR<KYCDocumentUpdateInput, KYCDocumentUncheckedUpdateInput>
    /**
     * Choose, which KYCDocument to update.
     */
    where: KYCDocumentWhereUniqueInput
  }

  /**
   * KYCDocument updateMany
   */
  export type KYCDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KYCDocuments.
     */
    data: XOR<KYCDocumentUpdateManyMutationInput, KYCDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KYCDocuments to update
     */
    where?: KYCDocumentWhereInput
  }

  /**
   * KYCDocument upsert
   */
  export type KYCDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the KYCDocument to update in case it exists.
     */
    where: KYCDocumentWhereUniqueInput
    /**
     * In case the KYCDocument found by the `where` argument doesn't exist, create a new KYCDocument with this data.
     */
    create: XOR<KYCDocumentCreateInput, KYCDocumentUncheckedCreateInput>
    /**
     * In case the KYCDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KYCDocumentUpdateInput, KYCDocumentUncheckedUpdateInput>
  }

  /**
   * KYCDocument delete
   */
  export type KYCDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
    /**
     * Filter which KYCDocument to delete.
     */
    where: KYCDocumentWhereUniqueInput
  }

  /**
   * KYCDocument deleteMany
   */
  export type KYCDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCDocuments to delete
     */
    where?: KYCDocumentWhereInput
  }

  /**
   * KYCDocument without action
   */
  export type KYCDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCDocument
     */
    select?: KYCDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KYCDocumentInclude<ExtArgs> | null
  }


  /**
   * Model KYCLevelPolicy
   */

  export type AggregateKYCLevelPolicy = {
    _count: KYCLevelPolicyCountAggregateOutputType | null
    _avg: KYCLevelPolicyAvgAggregateOutputType | null
    _sum: KYCLevelPolicySumAggregateOutputType | null
    _min: KYCLevelPolicyMinAggregateOutputType | null
    _max: KYCLevelPolicyMaxAggregateOutputType | null
  }

  export type KYCLevelPolicyAvgAggregateOutputType = {
    level: number | null
    depositDaily: number | null
    depositWeekly: number | null
    depositMonthly: number | null
    withdrawalDaily: number | null
    withdrawalMonthly: number | null
    stakePerBetMax: number | null
    cumulativeBalanceMax: number | null
  }

  export type KYCLevelPolicySumAggregateOutputType = {
    level: number | null
    depositDaily: number | null
    depositWeekly: number | null
    depositMonthly: number | null
    withdrawalDaily: number | null
    withdrawalMonthly: number | null
    stakePerBetMax: number | null
    cumulativeBalanceMax: number | null
  }

  export type KYCLevelPolicyMinAggregateOutputType = {
    level: number | null
    label: string | null
    description: string | null
    depositDaily: number | null
    depositWeekly: number | null
    depositMonthly: number | null
    withdrawalDaily: number | null
    withdrawalMonthly: number | null
    stakePerBetMax: number | null
    cumulativeBalanceMax: number | null
    withdrawalAllowed: boolean | null
    liveBetAllowed: boolean | null
    casinoAllowed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KYCLevelPolicyMaxAggregateOutputType = {
    level: number | null
    label: string | null
    description: string | null
    depositDaily: number | null
    depositWeekly: number | null
    depositMonthly: number | null
    withdrawalDaily: number | null
    withdrawalMonthly: number | null
    stakePerBetMax: number | null
    cumulativeBalanceMax: number | null
    withdrawalAllowed: boolean | null
    liveBetAllowed: boolean | null
    casinoAllowed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KYCLevelPolicyCountAggregateOutputType = {
    level: number
    label: number
    description: number
    depositDaily: number
    depositWeekly: number
    depositMonthly: number
    withdrawalDaily: number
    withdrawalMonthly: number
    stakePerBetMax: number
    cumulativeBalanceMax: number
    withdrawalAllowed: number
    liveBetAllowed: number
    casinoAllowed: number
    requiredChecks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KYCLevelPolicyAvgAggregateInputType = {
    level?: true
    depositDaily?: true
    depositWeekly?: true
    depositMonthly?: true
    withdrawalDaily?: true
    withdrawalMonthly?: true
    stakePerBetMax?: true
    cumulativeBalanceMax?: true
  }

  export type KYCLevelPolicySumAggregateInputType = {
    level?: true
    depositDaily?: true
    depositWeekly?: true
    depositMonthly?: true
    withdrawalDaily?: true
    withdrawalMonthly?: true
    stakePerBetMax?: true
    cumulativeBalanceMax?: true
  }

  export type KYCLevelPolicyMinAggregateInputType = {
    level?: true
    label?: true
    description?: true
    depositDaily?: true
    depositWeekly?: true
    depositMonthly?: true
    withdrawalDaily?: true
    withdrawalMonthly?: true
    stakePerBetMax?: true
    cumulativeBalanceMax?: true
    withdrawalAllowed?: true
    liveBetAllowed?: true
    casinoAllowed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KYCLevelPolicyMaxAggregateInputType = {
    level?: true
    label?: true
    description?: true
    depositDaily?: true
    depositWeekly?: true
    depositMonthly?: true
    withdrawalDaily?: true
    withdrawalMonthly?: true
    stakePerBetMax?: true
    cumulativeBalanceMax?: true
    withdrawalAllowed?: true
    liveBetAllowed?: true
    casinoAllowed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KYCLevelPolicyCountAggregateInputType = {
    level?: true
    label?: true
    description?: true
    depositDaily?: true
    depositWeekly?: true
    depositMonthly?: true
    withdrawalDaily?: true
    withdrawalMonthly?: true
    stakePerBetMax?: true
    cumulativeBalanceMax?: true
    withdrawalAllowed?: true
    liveBetAllowed?: true
    casinoAllowed?: true
    requiredChecks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KYCLevelPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCLevelPolicy to aggregate.
     */
    where?: KYCLevelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCLevelPolicies to fetch.
     */
    orderBy?: KYCLevelPolicyOrderByWithRelationInput | KYCLevelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KYCLevelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCLevelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCLevelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KYCLevelPolicies
    **/
    _count?: true | KYCLevelPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KYCLevelPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KYCLevelPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KYCLevelPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KYCLevelPolicyMaxAggregateInputType
  }

  export type GetKYCLevelPolicyAggregateType<T extends KYCLevelPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateKYCLevelPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKYCLevelPolicy[P]>
      : GetScalarType<T[P], AggregateKYCLevelPolicy[P]>
  }




  export type KYCLevelPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KYCLevelPolicyWhereInput
    orderBy?: KYCLevelPolicyOrderByWithAggregationInput | KYCLevelPolicyOrderByWithAggregationInput[]
    by: KYCLevelPolicyScalarFieldEnum[] | KYCLevelPolicyScalarFieldEnum
    having?: KYCLevelPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KYCLevelPolicyCountAggregateInputType | true
    _avg?: KYCLevelPolicyAvgAggregateInputType
    _sum?: KYCLevelPolicySumAggregateInputType
    _min?: KYCLevelPolicyMinAggregateInputType
    _max?: KYCLevelPolicyMaxAggregateInputType
  }

  export type KYCLevelPolicyGroupByOutputType = {
    level: number
    label: string
    description: string
    depositDaily: number
    depositWeekly: number
    depositMonthly: number
    withdrawalDaily: number
    withdrawalMonthly: number
    stakePerBetMax: number
    cumulativeBalanceMax: number
    withdrawalAllowed: boolean
    liveBetAllowed: boolean
    casinoAllowed: boolean
    requiredChecks: string[]
    createdAt: Date
    updatedAt: Date
    _count: KYCLevelPolicyCountAggregateOutputType | null
    _avg: KYCLevelPolicyAvgAggregateOutputType | null
    _sum: KYCLevelPolicySumAggregateOutputType | null
    _min: KYCLevelPolicyMinAggregateOutputType | null
    _max: KYCLevelPolicyMaxAggregateOutputType | null
  }

  type GetKYCLevelPolicyGroupByPayload<T extends KYCLevelPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KYCLevelPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KYCLevelPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KYCLevelPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], KYCLevelPolicyGroupByOutputType[P]>
        }
      >
    >


  export type KYCLevelPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    level?: boolean
    label?: boolean
    description?: boolean
    depositDaily?: boolean
    depositWeekly?: boolean
    depositMonthly?: boolean
    withdrawalDaily?: boolean
    withdrawalMonthly?: boolean
    stakePerBetMax?: boolean
    cumulativeBalanceMax?: boolean
    withdrawalAllowed?: boolean
    liveBetAllowed?: boolean
    casinoAllowed?: boolean
    requiredChecks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kYCLevelPolicy"]>

  export type KYCLevelPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    level?: boolean
    label?: boolean
    description?: boolean
    depositDaily?: boolean
    depositWeekly?: boolean
    depositMonthly?: boolean
    withdrawalDaily?: boolean
    withdrawalMonthly?: boolean
    stakePerBetMax?: boolean
    cumulativeBalanceMax?: boolean
    withdrawalAllowed?: boolean
    liveBetAllowed?: boolean
    casinoAllowed?: boolean
    requiredChecks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kYCLevelPolicy"]>

  export type KYCLevelPolicySelectScalar = {
    level?: boolean
    label?: boolean
    description?: boolean
    depositDaily?: boolean
    depositWeekly?: boolean
    depositMonthly?: boolean
    withdrawalDaily?: boolean
    withdrawalMonthly?: boolean
    stakePerBetMax?: boolean
    cumulativeBalanceMax?: boolean
    withdrawalAllowed?: boolean
    liveBetAllowed?: boolean
    casinoAllowed?: boolean
    requiredChecks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $KYCLevelPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KYCLevelPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      level: number
      label: string
      description: string
      depositDaily: number
      depositWeekly: number
      depositMonthly: number
      withdrawalDaily: number
      withdrawalMonthly: number
      stakePerBetMax: number
      cumulativeBalanceMax: number
      withdrawalAllowed: boolean
      liveBetAllowed: boolean
      casinoAllowed: boolean
      requiredChecks: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kYCLevelPolicy"]>
    composites: {}
  }

  type KYCLevelPolicyGetPayload<S extends boolean | null | undefined | KYCLevelPolicyDefaultArgs> = $Result.GetResult<Prisma.$KYCLevelPolicyPayload, S>

  type KYCLevelPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KYCLevelPolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KYCLevelPolicyCountAggregateInputType | true
    }

  export interface KYCLevelPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KYCLevelPolicy'], meta: { name: 'KYCLevelPolicy' } }
    /**
     * Find zero or one KYCLevelPolicy that matches the filter.
     * @param {KYCLevelPolicyFindUniqueArgs} args - Arguments to find a KYCLevelPolicy
     * @example
     * // Get one KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KYCLevelPolicyFindUniqueArgs>(args: SelectSubset<T, KYCLevelPolicyFindUniqueArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KYCLevelPolicy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KYCLevelPolicyFindUniqueOrThrowArgs} args - Arguments to find a KYCLevelPolicy
     * @example
     * // Get one KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KYCLevelPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, KYCLevelPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KYCLevelPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyFindFirstArgs} args - Arguments to find a KYCLevelPolicy
     * @example
     * // Get one KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KYCLevelPolicyFindFirstArgs>(args?: SelectSubset<T, KYCLevelPolicyFindFirstArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KYCLevelPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyFindFirstOrThrowArgs} args - Arguments to find a KYCLevelPolicy
     * @example
     * // Get one KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KYCLevelPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, KYCLevelPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KYCLevelPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KYCLevelPolicies
     * const kYCLevelPolicies = await prisma.kYCLevelPolicy.findMany()
     * 
     * // Get first 10 KYCLevelPolicies
     * const kYCLevelPolicies = await prisma.kYCLevelPolicy.findMany({ take: 10 })
     * 
     * // Only select the `level`
     * const kYCLevelPolicyWithLevelOnly = await prisma.kYCLevelPolicy.findMany({ select: { level: true } })
     * 
     */
    findMany<T extends KYCLevelPolicyFindManyArgs>(args?: SelectSubset<T, KYCLevelPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KYCLevelPolicy.
     * @param {KYCLevelPolicyCreateArgs} args - Arguments to create a KYCLevelPolicy.
     * @example
     * // Create one KYCLevelPolicy
     * const KYCLevelPolicy = await prisma.kYCLevelPolicy.create({
     *   data: {
     *     // ... data to create a KYCLevelPolicy
     *   }
     * })
     * 
     */
    create<T extends KYCLevelPolicyCreateArgs>(args: SelectSubset<T, KYCLevelPolicyCreateArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KYCLevelPolicies.
     * @param {KYCLevelPolicyCreateManyArgs} args - Arguments to create many KYCLevelPolicies.
     * @example
     * // Create many KYCLevelPolicies
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KYCLevelPolicyCreateManyArgs>(args?: SelectSubset<T, KYCLevelPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KYCLevelPolicies and returns the data saved in the database.
     * @param {KYCLevelPolicyCreateManyAndReturnArgs} args - Arguments to create many KYCLevelPolicies.
     * @example
     * // Create many KYCLevelPolicies
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KYCLevelPolicies and only return the `level`
     * const kYCLevelPolicyWithLevelOnly = await prisma.kYCLevelPolicy.createManyAndReturn({ 
     *   select: { level: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KYCLevelPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, KYCLevelPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KYCLevelPolicy.
     * @param {KYCLevelPolicyDeleteArgs} args - Arguments to delete one KYCLevelPolicy.
     * @example
     * // Delete one KYCLevelPolicy
     * const KYCLevelPolicy = await prisma.kYCLevelPolicy.delete({
     *   where: {
     *     // ... filter to delete one KYCLevelPolicy
     *   }
     * })
     * 
     */
    delete<T extends KYCLevelPolicyDeleteArgs>(args: SelectSubset<T, KYCLevelPolicyDeleteArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KYCLevelPolicy.
     * @param {KYCLevelPolicyUpdateArgs} args - Arguments to update one KYCLevelPolicy.
     * @example
     * // Update one KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KYCLevelPolicyUpdateArgs>(args: SelectSubset<T, KYCLevelPolicyUpdateArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KYCLevelPolicies.
     * @param {KYCLevelPolicyDeleteManyArgs} args - Arguments to filter KYCLevelPolicies to delete.
     * @example
     * // Delete a few KYCLevelPolicies
     * const { count } = await prisma.kYCLevelPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KYCLevelPolicyDeleteManyArgs>(args?: SelectSubset<T, KYCLevelPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KYCLevelPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KYCLevelPolicies
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KYCLevelPolicyUpdateManyArgs>(args: SelectSubset<T, KYCLevelPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KYCLevelPolicy.
     * @param {KYCLevelPolicyUpsertArgs} args - Arguments to update or create a KYCLevelPolicy.
     * @example
     * // Update or create a KYCLevelPolicy
     * const kYCLevelPolicy = await prisma.kYCLevelPolicy.upsert({
     *   create: {
     *     // ... data to create a KYCLevelPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KYCLevelPolicy we want to update
     *   }
     * })
     */
    upsert<T extends KYCLevelPolicyUpsertArgs>(args: SelectSubset<T, KYCLevelPolicyUpsertArgs<ExtArgs>>): Prisma__KYCLevelPolicyClient<$Result.GetResult<Prisma.$KYCLevelPolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KYCLevelPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyCountArgs} args - Arguments to filter KYCLevelPolicies to count.
     * @example
     * // Count the number of KYCLevelPolicies
     * const count = await prisma.kYCLevelPolicy.count({
     *   where: {
     *     // ... the filter for the KYCLevelPolicies we want to count
     *   }
     * })
    **/
    count<T extends KYCLevelPolicyCountArgs>(
      args?: Subset<T, KYCLevelPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KYCLevelPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KYCLevelPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KYCLevelPolicyAggregateArgs>(args: Subset<T, KYCLevelPolicyAggregateArgs>): Prisma.PrismaPromise<GetKYCLevelPolicyAggregateType<T>>

    /**
     * Group by KYCLevelPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KYCLevelPolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KYCLevelPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KYCLevelPolicyGroupByArgs['orderBy'] }
        : { orderBy?: KYCLevelPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KYCLevelPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKYCLevelPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KYCLevelPolicy model
   */
  readonly fields: KYCLevelPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KYCLevelPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KYCLevelPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KYCLevelPolicy model
   */ 
  interface KYCLevelPolicyFieldRefs {
    readonly level: FieldRef<"KYCLevelPolicy", 'Int'>
    readonly label: FieldRef<"KYCLevelPolicy", 'String'>
    readonly description: FieldRef<"KYCLevelPolicy", 'String'>
    readonly depositDaily: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly depositWeekly: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly depositMonthly: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly withdrawalDaily: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly withdrawalMonthly: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly stakePerBetMax: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly cumulativeBalanceMax: FieldRef<"KYCLevelPolicy", 'Float'>
    readonly withdrawalAllowed: FieldRef<"KYCLevelPolicy", 'Boolean'>
    readonly liveBetAllowed: FieldRef<"KYCLevelPolicy", 'Boolean'>
    readonly casinoAllowed: FieldRef<"KYCLevelPolicy", 'Boolean'>
    readonly requiredChecks: FieldRef<"KYCLevelPolicy", 'String[]'>
    readonly createdAt: FieldRef<"KYCLevelPolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"KYCLevelPolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KYCLevelPolicy findUnique
   */
  export type KYCLevelPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter, which KYCLevelPolicy to fetch.
     */
    where: KYCLevelPolicyWhereUniqueInput
  }

  /**
   * KYCLevelPolicy findUniqueOrThrow
   */
  export type KYCLevelPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter, which KYCLevelPolicy to fetch.
     */
    where: KYCLevelPolicyWhereUniqueInput
  }

  /**
   * KYCLevelPolicy findFirst
   */
  export type KYCLevelPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter, which KYCLevelPolicy to fetch.
     */
    where?: KYCLevelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCLevelPolicies to fetch.
     */
    orderBy?: KYCLevelPolicyOrderByWithRelationInput | KYCLevelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCLevelPolicies.
     */
    cursor?: KYCLevelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCLevelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCLevelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCLevelPolicies.
     */
    distinct?: KYCLevelPolicyScalarFieldEnum | KYCLevelPolicyScalarFieldEnum[]
  }

  /**
   * KYCLevelPolicy findFirstOrThrow
   */
  export type KYCLevelPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter, which KYCLevelPolicy to fetch.
     */
    where?: KYCLevelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCLevelPolicies to fetch.
     */
    orderBy?: KYCLevelPolicyOrderByWithRelationInput | KYCLevelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KYCLevelPolicies.
     */
    cursor?: KYCLevelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCLevelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCLevelPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KYCLevelPolicies.
     */
    distinct?: KYCLevelPolicyScalarFieldEnum | KYCLevelPolicyScalarFieldEnum[]
  }

  /**
   * KYCLevelPolicy findMany
   */
  export type KYCLevelPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter, which KYCLevelPolicies to fetch.
     */
    where?: KYCLevelPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KYCLevelPolicies to fetch.
     */
    orderBy?: KYCLevelPolicyOrderByWithRelationInput | KYCLevelPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KYCLevelPolicies.
     */
    cursor?: KYCLevelPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KYCLevelPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KYCLevelPolicies.
     */
    skip?: number
    distinct?: KYCLevelPolicyScalarFieldEnum | KYCLevelPolicyScalarFieldEnum[]
  }

  /**
   * KYCLevelPolicy create
   */
  export type KYCLevelPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * The data needed to create a KYCLevelPolicy.
     */
    data: XOR<KYCLevelPolicyCreateInput, KYCLevelPolicyUncheckedCreateInput>
  }

  /**
   * KYCLevelPolicy createMany
   */
  export type KYCLevelPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KYCLevelPolicies.
     */
    data: KYCLevelPolicyCreateManyInput | KYCLevelPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KYCLevelPolicy createManyAndReturn
   */
  export type KYCLevelPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KYCLevelPolicies.
     */
    data: KYCLevelPolicyCreateManyInput | KYCLevelPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KYCLevelPolicy update
   */
  export type KYCLevelPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * The data needed to update a KYCLevelPolicy.
     */
    data: XOR<KYCLevelPolicyUpdateInput, KYCLevelPolicyUncheckedUpdateInput>
    /**
     * Choose, which KYCLevelPolicy to update.
     */
    where: KYCLevelPolicyWhereUniqueInput
  }

  /**
   * KYCLevelPolicy updateMany
   */
  export type KYCLevelPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KYCLevelPolicies.
     */
    data: XOR<KYCLevelPolicyUpdateManyMutationInput, KYCLevelPolicyUncheckedUpdateManyInput>
    /**
     * Filter which KYCLevelPolicies to update
     */
    where?: KYCLevelPolicyWhereInput
  }

  /**
   * KYCLevelPolicy upsert
   */
  export type KYCLevelPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * The filter to search for the KYCLevelPolicy to update in case it exists.
     */
    where: KYCLevelPolicyWhereUniqueInput
    /**
     * In case the KYCLevelPolicy found by the `where` argument doesn't exist, create a new KYCLevelPolicy with this data.
     */
    create: XOR<KYCLevelPolicyCreateInput, KYCLevelPolicyUncheckedCreateInput>
    /**
     * In case the KYCLevelPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KYCLevelPolicyUpdateInput, KYCLevelPolicyUncheckedUpdateInput>
  }

  /**
   * KYCLevelPolicy delete
   */
  export type KYCLevelPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
    /**
     * Filter which KYCLevelPolicy to delete.
     */
    where: KYCLevelPolicyWhereUniqueInput
  }

  /**
   * KYCLevelPolicy deleteMany
   */
  export type KYCLevelPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KYCLevelPolicies to delete
     */
    where?: KYCLevelPolicyWhereInput
  }

  /**
   * KYCLevelPolicy without action
   */
  export type KYCLevelPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KYCLevelPolicy
     */
    select?: KYCLevelPolicySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserKYCScalarFieldEnum: {
    userId: 'userId',
    level: 'level',
    status: 'status',
    externalApplicantId: 'externalApplicantId',
    externalInspectionId: 'externalInspectionId',
    firstSubmittedAt: 'firstSubmittedAt',
    lastSubmittedAt: 'lastSubmittedAt',
    reviewedAt: 'reviewedAt',
    reviewerNote: 'reviewerNote',
    rejectionReason: 'rejectionReason',
    rejectionDetails: 'rejectionDetails',
    providerRawResponse: 'providerRawResponse',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    riskScore: 'riskScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserKYCScalarFieldEnum = (typeof UserKYCScalarFieldEnum)[keyof typeof UserKYCScalarFieldEnum]


  export const KYCAmlScreeningScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    requestId: 'requestId',
    status: 'status',
    totalHits: 'totalHits',
    score: 'score',
    hitsJson: 'hitsJson',
    screenedAt: 'screenedAt'
  };

  export type KYCAmlScreeningScalarFieldEnum = (typeof KYCAmlScreeningScalarFieldEnum)[keyof typeof KYCAmlScreeningScalarFieldEnum]


  export const KYCWebhookLogScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    eventType: 'eventType',
    externalApplicantId: 'externalApplicantId',
    correlationId: 'correlationId',
    headersJson: 'headersJson',
    payloadJson: 'payloadJson',
    signatureValid: 'signatureValid',
    processed: 'processed',
    processedAt: 'processedAt',
    processingError: 'processingError',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KYCWebhookLogScalarFieldEnum = (typeof KYCWebhookLogScalarFieldEnum)[keyof typeof KYCWebhookLogScalarFieldEnum]


  export const KYCDocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kycLevel: 'kycLevel',
    documentType: 'documentType',
    fileName: 'fileName',
    fileHash: 'fileHash',
    fileSizeKb: 'fileSizeKb',
    documentStatus: 'documentStatus',
    submittedAt: 'submittedAt',
    verifiedAt: 'verifiedAt',
    rejectedReason: 'rejectedReason',
    countryOfIssue: 'countryOfIssue',
    numberMasked: 'numberMasked',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type KYCDocumentScalarFieldEnum = (typeof KYCDocumentScalarFieldEnum)[keyof typeof KYCDocumentScalarFieldEnum]


  export const KYCLevelPolicyScalarFieldEnum: {
    level: 'level',
    label: 'label',
    description: 'description',
    depositDaily: 'depositDaily',
    depositWeekly: 'depositWeekly',
    depositMonthly: 'depositMonthly',
    withdrawalDaily: 'withdrawalDaily',
    withdrawalMonthly: 'withdrawalMonthly',
    stakePerBetMax: 'stakePerBetMax',
    cumulativeBalanceMax: 'cumulativeBalanceMax',
    withdrawalAllowed: 'withdrawalAllowed',
    liveBetAllowed: 'liveBetAllowed',
    casinoAllowed: 'casinoAllowed',
    requiredChecks: 'requiredChecks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KYCLevelPolicyScalarFieldEnum = (typeof KYCLevelPolicyScalarFieldEnum)[keyof typeof KYCLevelPolicyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'KYCStatus'
   */
  export type EnumKYCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCStatus'>
    


  /**
   * Reference to a field of type 'KYCStatus[]'
   */
  export type ListEnumKYCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'KYCRejectionReason'
   */
  export type EnumKYCRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCRejectionReason'>
    


  /**
   * Reference to a field of type 'KYCRejectionReason[]'
   */
  export type ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCRejectionReason[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'KYCDocumentType'
   */
  export type EnumKYCDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCDocumentType'>
    


  /**
   * Reference to a field of type 'KYCDocumentType[]'
   */
  export type ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCDocumentType[]'>
    


  /**
   * Reference to a field of type 'KYCDocumentStatus'
   */
  export type EnumKYCDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCDocumentStatus'>
    


  /**
   * Reference to a field of type 'KYCDocumentStatus[]'
   */
  export type ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KYCDocumentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserKYCWhereInput = {
    AND?: UserKYCWhereInput | UserKYCWhereInput[]
    OR?: UserKYCWhereInput[]
    NOT?: UserKYCWhereInput | UserKYCWhereInput[]
    userId?: StringFilter<"UserKYC"> | string
    level?: IntFilter<"UserKYC"> | number
    status?: EnumKYCStatusFilter<"UserKYC"> | $Enums.KYCStatus
    externalApplicantId?: StringNullableFilter<"UserKYC"> | string | null
    externalInspectionId?: StringNullableFilter<"UserKYC"> | string | null
    firstSubmittedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    lastSubmittedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    reviewerNote?: StringNullableFilter<"UserKYC"> | string | null
    rejectionReason?: EnumKYCRejectionReasonNullableFilter<"UserKYC"> | $Enums.KYCRejectionReason | null
    rejectionDetails?: StringNullableFilter<"UserKYC"> | string | null
    providerRawResponse?: JsonNullableFilter<"UserKYC">
    isActive?: BoolFilter<"UserKYC"> | boolean
    expiresAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    riskScore?: FloatNullableFilter<"UserKYC"> | number | null
    createdAt?: DateTimeFilter<"UserKYC"> | Date | string
    updatedAt?: DateTimeFilter<"UserKYC"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    documents?: KYCDocumentListRelationFilter
    webhookLogs?: KYCWebhookLogListRelationFilter
    amlScreenings?: KYCAmlScreeningListRelationFilter
  }

  export type UserKYCOrderByWithRelationInput = {
    userId?: SortOrder
    level?: SortOrder
    status?: SortOrder
    externalApplicantId?: SortOrderInput | SortOrder
    externalInspectionId?: SortOrderInput | SortOrder
    firstSubmittedAt?: SortOrderInput | SortOrder
    lastSubmittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewerNote?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    rejectionDetails?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    documents?: KYCDocumentOrderByRelationAggregateInput
    webhookLogs?: KYCWebhookLogOrderByRelationAggregateInput
    amlScreenings?: KYCAmlScreeningOrderByRelationAggregateInput
  }

  export type UserKYCWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserKYCWhereInput | UserKYCWhereInput[]
    OR?: UserKYCWhereInput[]
    NOT?: UserKYCWhereInput | UserKYCWhereInput[]
    level?: IntFilter<"UserKYC"> | number
    status?: EnumKYCStatusFilter<"UserKYC"> | $Enums.KYCStatus
    externalApplicantId?: StringNullableFilter<"UserKYC"> | string | null
    externalInspectionId?: StringNullableFilter<"UserKYC"> | string | null
    firstSubmittedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    lastSubmittedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    reviewedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    reviewerNote?: StringNullableFilter<"UserKYC"> | string | null
    rejectionReason?: EnumKYCRejectionReasonNullableFilter<"UserKYC"> | $Enums.KYCRejectionReason | null
    rejectionDetails?: StringNullableFilter<"UserKYC"> | string | null
    providerRawResponse?: JsonNullableFilter<"UserKYC">
    isActive?: BoolFilter<"UserKYC"> | boolean
    expiresAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    riskScore?: FloatNullableFilter<"UserKYC"> | number | null
    createdAt?: DateTimeFilter<"UserKYC"> | Date | string
    updatedAt?: DateTimeFilter<"UserKYC"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserKYC"> | Date | string | null
    documents?: KYCDocumentListRelationFilter
    webhookLogs?: KYCWebhookLogListRelationFilter
    amlScreenings?: KYCAmlScreeningListRelationFilter
  }, "userId">

  export type UserKYCOrderByWithAggregationInput = {
    userId?: SortOrder
    level?: SortOrder
    status?: SortOrder
    externalApplicantId?: SortOrderInput | SortOrder
    externalInspectionId?: SortOrderInput | SortOrder
    firstSubmittedAt?: SortOrderInput | SortOrder
    lastSubmittedAt?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    reviewerNote?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    rejectionDetails?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserKYCCountOrderByAggregateInput
    _avg?: UserKYCAvgOrderByAggregateInput
    _max?: UserKYCMaxOrderByAggregateInput
    _min?: UserKYCMinOrderByAggregateInput
    _sum?: UserKYCSumOrderByAggregateInput
  }

  export type UserKYCScalarWhereWithAggregatesInput = {
    AND?: UserKYCScalarWhereWithAggregatesInput | UserKYCScalarWhereWithAggregatesInput[]
    OR?: UserKYCScalarWhereWithAggregatesInput[]
    NOT?: UserKYCScalarWhereWithAggregatesInput | UserKYCScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserKYC"> | string
    level?: IntWithAggregatesFilter<"UserKYC"> | number
    status?: EnumKYCStatusWithAggregatesFilter<"UserKYC"> | $Enums.KYCStatus
    externalApplicantId?: StringNullableWithAggregatesFilter<"UserKYC"> | string | null
    externalInspectionId?: StringNullableWithAggregatesFilter<"UserKYC"> | string | null
    firstSubmittedAt?: DateTimeNullableWithAggregatesFilter<"UserKYC"> | Date | string | null
    lastSubmittedAt?: DateTimeNullableWithAggregatesFilter<"UserKYC"> | Date | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"UserKYC"> | Date | string | null
    reviewerNote?: StringNullableWithAggregatesFilter<"UserKYC"> | string | null
    rejectionReason?: EnumKYCRejectionReasonNullableWithAggregatesFilter<"UserKYC"> | $Enums.KYCRejectionReason | null
    rejectionDetails?: StringNullableWithAggregatesFilter<"UserKYC"> | string | null
    providerRawResponse?: JsonNullableWithAggregatesFilter<"UserKYC">
    isActive?: BoolWithAggregatesFilter<"UserKYC"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserKYC"> | Date | string | null
    riskScore?: FloatNullableWithAggregatesFilter<"UserKYC"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserKYC"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserKYC"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserKYC"> | Date | string | null
  }

  export type KYCAmlScreeningWhereInput = {
    AND?: KYCAmlScreeningWhereInput | KYCAmlScreeningWhereInput[]
    OR?: KYCAmlScreeningWhereInput[]
    NOT?: KYCAmlScreeningWhereInput | KYCAmlScreeningWhereInput[]
    id?: StringFilter<"KYCAmlScreening"> | string
    userId?: StringFilter<"KYCAmlScreening"> | string
    requestId?: StringNullableFilter<"KYCAmlScreening"> | string | null
    status?: StringFilter<"KYCAmlScreening"> | string
    totalHits?: IntFilter<"KYCAmlScreening"> | number
    score?: FloatNullableFilter<"KYCAmlScreening"> | number | null
    hitsJson?: JsonNullableFilter<"KYCAmlScreening">
    screenedAt?: DateTimeFilter<"KYCAmlScreening"> | Date | string
    userKYC?: XOR<UserKYCRelationFilter, UserKYCWhereInput>
  }

  export type KYCAmlScreeningOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalHits?: SortOrder
    score?: SortOrderInput | SortOrder
    hitsJson?: SortOrderInput | SortOrder
    screenedAt?: SortOrder
    userKYC?: UserKYCOrderByWithRelationInput
  }

  export type KYCAmlScreeningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KYCAmlScreeningWhereInput | KYCAmlScreeningWhereInput[]
    OR?: KYCAmlScreeningWhereInput[]
    NOT?: KYCAmlScreeningWhereInput | KYCAmlScreeningWhereInput[]
    userId?: StringFilter<"KYCAmlScreening"> | string
    requestId?: StringNullableFilter<"KYCAmlScreening"> | string | null
    status?: StringFilter<"KYCAmlScreening"> | string
    totalHits?: IntFilter<"KYCAmlScreening"> | number
    score?: FloatNullableFilter<"KYCAmlScreening"> | number | null
    hitsJson?: JsonNullableFilter<"KYCAmlScreening">
    screenedAt?: DateTimeFilter<"KYCAmlScreening"> | Date | string
    userKYC?: XOR<UserKYCRelationFilter, UserKYCWhereInput>
  }, "id">

  export type KYCAmlScreeningOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalHits?: SortOrder
    score?: SortOrderInput | SortOrder
    hitsJson?: SortOrderInput | SortOrder
    screenedAt?: SortOrder
    _count?: KYCAmlScreeningCountOrderByAggregateInput
    _avg?: KYCAmlScreeningAvgOrderByAggregateInput
    _max?: KYCAmlScreeningMaxOrderByAggregateInput
    _min?: KYCAmlScreeningMinOrderByAggregateInput
    _sum?: KYCAmlScreeningSumOrderByAggregateInput
  }

  export type KYCAmlScreeningScalarWhereWithAggregatesInput = {
    AND?: KYCAmlScreeningScalarWhereWithAggregatesInput | KYCAmlScreeningScalarWhereWithAggregatesInput[]
    OR?: KYCAmlScreeningScalarWhereWithAggregatesInput[]
    NOT?: KYCAmlScreeningScalarWhereWithAggregatesInput | KYCAmlScreeningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KYCAmlScreening"> | string
    userId?: StringWithAggregatesFilter<"KYCAmlScreening"> | string
    requestId?: StringNullableWithAggregatesFilter<"KYCAmlScreening"> | string | null
    status?: StringWithAggregatesFilter<"KYCAmlScreening"> | string
    totalHits?: IntWithAggregatesFilter<"KYCAmlScreening"> | number
    score?: FloatNullableWithAggregatesFilter<"KYCAmlScreening"> | number | null
    hitsJson?: JsonNullableWithAggregatesFilter<"KYCAmlScreening">
    screenedAt?: DateTimeWithAggregatesFilter<"KYCAmlScreening"> | Date | string
  }

  export type KYCWebhookLogWhereInput = {
    AND?: KYCWebhookLogWhereInput | KYCWebhookLogWhereInput[]
    OR?: KYCWebhookLogWhereInput[]
    NOT?: KYCWebhookLogWhereInput | KYCWebhookLogWhereInput[]
    id?: StringFilter<"KYCWebhookLog"> | string
    provider?: StringFilter<"KYCWebhookLog"> | string
    eventType?: StringFilter<"KYCWebhookLog"> | string
    externalApplicantId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    correlationId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    headersJson?: JsonNullableFilter<"KYCWebhookLog">
    payloadJson?: JsonFilter<"KYCWebhookLog">
    signatureValid?: BoolFilter<"KYCWebhookLog"> | boolean
    processed?: BoolFilter<"KYCWebhookLog"> | boolean
    processedAt?: DateTimeNullableFilter<"KYCWebhookLog"> | Date | string | null
    processingError?: StringNullableFilter<"KYCWebhookLog"> | string | null
    userId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    createdAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
    userKYC?: XOR<UserKYCNullableRelationFilter, UserKYCWhereInput> | null
  }

  export type KYCWebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    externalApplicantId?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    headersJson?: SortOrderInput | SortOrder
    payloadJson?: SortOrder
    signatureValid?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processingError?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userKYC?: UserKYCOrderByWithRelationInput
  }

  export type KYCWebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KYCWebhookLogWhereInput | KYCWebhookLogWhereInput[]
    OR?: KYCWebhookLogWhereInput[]
    NOT?: KYCWebhookLogWhereInput | KYCWebhookLogWhereInput[]
    provider?: StringFilter<"KYCWebhookLog"> | string
    eventType?: StringFilter<"KYCWebhookLog"> | string
    externalApplicantId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    correlationId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    headersJson?: JsonNullableFilter<"KYCWebhookLog">
    payloadJson?: JsonFilter<"KYCWebhookLog">
    signatureValid?: BoolFilter<"KYCWebhookLog"> | boolean
    processed?: BoolFilter<"KYCWebhookLog"> | boolean
    processedAt?: DateTimeNullableFilter<"KYCWebhookLog"> | Date | string | null
    processingError?: StringNullableFilter<"KYCWebhookLog"> | string | null
    userId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    createdAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
    userKYC?: XOR<UserKYCNullableRelationFilter, UserKYCWhereInput> | null
  }, "id">

  export type KYCWebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    externalApplicantId?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    headersJson?: SortOrderInput | SortOrder
    payloadJson?: SortOrder
    signatureValid?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    processingError?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KYCWebhookLogCountOrderByAggregateInput
    _max?: KYCWebhookLogMaxOrderByAggregateInput
    _min?: KYCWebhookLogMinOrderByAggregateInput
  }

  export type KYCWebhookLogScalarWhereWithAggregatesInput = {
    AND?: KYCWebhookLogScalarWhereWithAggregatesInput | KYCWebhookLogScalarWhereWithAggregatesInput[]
    OR?: KYCWebhookLogScalarWhereWithAggregatesInput[]
    NOT?: KYCWebhookLogScalarWhereWithAggregatesInput | KYCWebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KYCWebhookLog"> | string
    provider?: StringWithAggregatesFilter<"KYCWebhookLog"> | string
    eventType?: StringWithAggregatesFilter<"KYCWebhookLog"> | string
    externalApplicantId?: StringNullableWithAggregatesFilter<"KYCWebhookLog"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"KYCWebhookLog"> | string | null
    headersJson?: JsonNullableWithAggregatesFilter<"KYCWebhookLog">
    payloadJson?: JsonWithAggregatesFilter<"KYCWebhookLog">
    signatureValid?: BoolWithAggregatesFilter<"KYCWebhookLog"> | boolean
    processed?: BoolWithAggregatesFilter<"KYCWebhookLog"> | boolean
    processedAt?: DateTimeNullableWithAggregatesFilter<"KYCWebhookLog"> | Date | string | null
    processingError?: StringNullableWithAggregatesFilter<"KYCWebhookLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"KYCWebhookLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KYCWebhookLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KYCWebhookLog"> | Date | string
  }

  export type KYCDocumentWhereInput = {
    AND?: KYCDocumentWhereInput | KYCDocumentWhereInput[]
    OR?: KYCDocumentWhereInput[]
    NOT?: KYCDocumentWhereInput | KYCDocumentWhereInput[]
    id?: StringFilter<"KYCDocument"> | string
    userId?: StringFilter<"KYCDocument"> | string
    kycLevel?: IntFilter<"KYCDocument"> | number
    documentType?: EnumKYCDocumentTypeFilter<"KYCDocument"> | $Enums.KYCDocumentType
    fileName?: StringNullableFilter<"KYCDocument"> | string | null
    fileHash?: StringNullableFilter<"KYCDocument"> | string | null
    fileSizeKb?: IntNullableFilter<"KYCDocument"> | number | null
    documentStatus?: EnumKYCDocumentStatusFilter<"KYCDocument"> | $Enums.KYCDocumentStatus
    submittedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    rejectedReason?: StringNullableFilter<"KYCDocument"> | string | null
    countryOfIssue?: StringNullableFilter<"KYCDocument"> | string | null
    numberMasked?: StringNullableFilter<"KYCDocument"> | string | null
    expiresAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KYCDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KYCDocument"> | Date | string
    deletedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    userKYC?: XOR<UserKYCRelationFilter, UserKYCWhereInput>
  }

  export type KYCDocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kycLevel?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    fileSizeKb?: SortOrderInput | SortOrder
    documentStatus?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    countryOfIssue?: SortOrderInput | SortOrder
    numberMasked?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userKYC?: UserKYCOrderByWithRelationInput
  }

  export type KYCDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KYCDocumentWhereInput | KYCDocumentWhereInput[]
    OR?: KYCDocumentWhereInput[]
    NOT?: KYCDocumentWhereInput | KYCDocumentWhereInput[]
    userId?: StringFilter<"KYCDocument"> | string
    kycLevel?: IntFilter<"KYCDocument"> | number
    documentType?: EnumKYCDocumentTypeFilter<"KYCDocument"> | $Enums.KYCDocumentType
    fileName?: StringNullableFilter<"KYCDocument"> | string | null
    fileHash?: StringNullableFilter<"KYCDocument"> | string | null
    fileSizeKb?: IntNullableFilter<"KYCDocument"> | number | null
    documentStatus?: EnumKYCDocumentStatusFilter<"KYCDocument"> | $Enums.KYCDocumentStatus
    submittedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    rejectedReason?: StringNullableFilter<"KYCDocument"> | string | null
    countryOfIssue?: StringNullableFilter<"KYCDocument"> | string | null
    numberMasked?: StringNullableFilter<"KYCDocument"> | string | null
    expiresAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KYCDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KYCDocument"> | Date | string
    deletedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    userKYC?: XOR<UserKYCRelationFilter, UserKYCWhereInput>
  }, "id">

  export type KYCDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kycLevel?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    fileSizeKb?: SortOrderInput | SortOrder
    documentStatus?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    countryOfIssue?: SortOrderInput | SortOrder
    numberMasked?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: KYCDocumentCountOrderByAggregateInput
    _avg?: KYCDocumentAvgOrderByAggregateInput
    _max?: KYCDocumentMaxOrderByAggregateInput
    _min?: KYCDocumentMinOrderByAggregateInput
    _sum?: KYCDocumentSumOrderByAggregateInput
  }

  export type KYCDocumentScalarWhereWithAggregatesInput = {
    AND?: KYCDocumentScalarWhereWithAggregatesInput | KYCDocumentScalarWhereWithAggregatesInput[]
    OR?: KYCDocumentScalarWhereWithAggregatesInput[]
    NOT?: KYCDocumentScalarWhereWithAggregatesInput | KYCDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KYCDocument"> | string
    userId?: StringWithAggregatesFilter<"KYCDocument"> | string
    kycLevel?: IntWithAggregatesFilter<"KYCDocument"> | number
    documentType?: EnumKYCDocumentTypeWithAggregatesFilter<"KYCDocument"> | $Enums.KYCDocumentType
    fileName?: StringNullableWithAggregatesFilter<"KYCDocument"> | string | null
    fileHash?: StringNullableWithAggregatesFilter<"KYCDocument"> | string | null
    fileSizeKb?: IntNullableWithAggregatesFilter<"KYCDocument"> | number | null
    documentStatus?: EnumKYCDocumentStatusWithAggregatesFilter<"KYCDocument"> | $Enums.KYCDocumentStatus
    submittedAt?: DateTimeNullableWithAggregatesFilter<"KYCDocument"> | Date | string | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"KYCDocument"> | Date | string | null
    rejectedReason?: StringNullableWithAggregatesFilter<"KYCDocument"> | string | null
    countryOfIssue?: StringNullableWithAggregatesFilter<"KYCDocument"> | string | null
    numberMasked?: StringNullableWithAggregatesFilter<"KYCDocument"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"KYCDocument"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KYCDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KYCDocument"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"KYCDocument"> | Date | string | null
  }

  export type KYCLevelPolicyWhereInput = {
    AND?: KYCLevelPolicyWhereInput | KYCLevelPolicyWhereInput[]
    OR?: KYCLevelPolicyWhereInput[]
    NOT?: KYCLevelPolicyWhereInput | KYCLevelPolicyWhereInput[]
    level?: IntFilter<"KYCLevelPolicy"> | number
    label?: StringFilter<"KYCLevelPolicy"> | string
    description?: StringFilter<"KYCLevelPolicy"> | string
    depositDaily?: FloatFilter<"KYCLevelPolicy"> | number
    depositWeekly?: FloatFilter<"KYCLevelPolicy"> | number
    depositMonthly?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalDaily?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalMonthly?: FloatFilter<"KYCLevelPolicy"> | number
    stakePerBetMax?: FloatFilter<"KYCLevelPolicy"> | number
    cumulativeBalanceMax?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    liveBetAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    casinoAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    requiredChecks?: StringNullableListFilter<"KYCLevelPolicy">
    createdAt?: DateTimeFilter<"KYCLevelPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"KYCLevelPolicy"> | Date | string
  }

  export type KYCLevelPolicyOrderByWithRelationInput = {
    level?: SortOrder
    label?: SortOrder
    description?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
    withdrawalAllowed?: SortOrder
    liveBetAllowed?: SortOrder
    casinoAllowed?: SortOrder
    requiredChecks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCLevelPolicyWhereUniqueInput = Prisma.AtLeast<{
    level?: number
    AND?: KYCLevelPolicyWhereInput | KYCLevelPolicyWhereInput[]
    OR?: KYCLevelPolicyWhereInput[]
    NOT?: KYCLevelPolicyWhereInput | KYCLevelPolicyWhereInput[]
    label?: StringFilter<"KYCLevelPolicy"> | string
    description?: StringFilter<"KYCLevelPolicy"> | string
    depositDaily?: FloatFilter<"KYCLevelPolicy"> | number
    depositWeekly?: FloatFilter<"KYCLevelPolicy"> | number
    depositMonthly?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalDaily?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalMonthly?: FloatFilter<"KYCLevelPolicy"> | number
    stakePerBetMax?: FloatFilter<"KYCLevelPolicy"> | number
    cumulativeBalanceMax?: FloatFilter<"KYCLevelPolicy"> | number
    withdrawalAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    liveBetAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    casinoAllowed?: BoolFilter<"KYCLevelPolicy"> | boolean
    requiredChecks?: StringNullableListFilter<"KYCLevelPolicy">
    createdAt?: DateTimeFilter<"KYCLevelPolicy"> | Date | string
    updatedAt?: DateTimeFilter<"KYCLevelPolicy"> | Date | string
  }, "level">

  export type KYCLevelPolicyOrderByWithAggregationInput = {
    level?: SortOrder
    label?: SortOrder
    description?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
    withdrawalAllowed?: SortOrder
    liveBetAllowed?: SortOrder
    casinoAllowed?: SortOrder
    requiredChecks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KYCLevelPolicyCountOrderByAggregateInput
    _avg?: KYCLevelPolicyAvgOrderByAggregateInput
    _max?: KYCLevelPolicyMaxOrderByAggregateInput
    _min?: KYCLevelPolicyMinOrderByAggregateInput
    _sum?: KYCLevelPolicySumOrderByAggregateInput
  }

  export type KYCLevelPolicyScalarWhereWithAggregatesInput = {
    AND?: KYCLevelPolicyScalarWhereWithAggregatesInput | KYCLevelPolicyScalarWhereWithAggregatesInput[]
    OR?: KYCLevelPolicyScalarWhereWithAggregatesInput[]
    NOT?: KYCLevelPolicyScalarWhereWithAggregatesInput | KYCLevelPolicyScalarWhereWithAggregatesInput[]
    level?: IntWithAggregatesFilter<"KYCLevelPolicy"> | number
    label?: StringWithAggregatesFilter<"KYCLevelPolicy"> | string
    description?: StringWithAggregatesFilter<"KYCLevelPolicy"> | string
    depositDaily?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    depositWeekly?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    depositMonthly?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    withdrawalDaily?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    withdrawalMonthly?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    stakePerBetMax?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    cumulativeBalanceMax?: FloatWithAggregatesFilter<"KYCLevelPolicy"> | number
    withdrawalAllowed?: BoolWithAggregatesFilter<"KYCLevelPolicy"> | boolean
    liveBetAllowed?: BoolWithAggregatesFilter<"KYCLevelPolicy"> | boolean
    casinoAllowed?: BoolWithAggregatesFilter<"KYCLevelPolicy"> | boolean
    requiredChecks?: StringNullableListFilter<"KYCLevelPolicy">
    createdAt?: DateTimeWithAggregatesFilter<"KYCLevelPolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KYCLevelPolicy"> | Date | string
  }

  export type UserKYCCreateInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentCreateNestedManyWithoutUserKYCInput
    webhookLogs?: KYCWebhookLogCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCUncheckedCreateInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentUncheckedCreateNestedManyWithoutUserKYCInput
    webhookLogs?: KYCWebhookLogUncheckedCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningUncheckedCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUpdateManyWithoutUserKYCNestedInput
    webhookLogs?: KYCWebhookLogUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUncheckedUpdateManyWithoutUserKYCNestedInput
    webhookLogs?: KYCWebhookLogUncheckedUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCCreateManyInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserKYCUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserKYCUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCAmlScreeningCreateInput = {
    id?: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
    userKYC: UserKYCCreateNestedOneWithoutAmlScreeningsInput
  }

  export type KYCAmlScreeningUncheckedCreateInput = {
    id?: string
    userId: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
  }

  export type KYCAmlScreeningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userKYC?: UserKYCUpdateOneRequiredWithoutAmlScreeningsNestedInput
  }

  export type KYCAmlScreeningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCAmlScreeningCreateManyInput = {
    id?: string
    userId: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
  }

  export type KYCAmlScreeningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCAmlScreeningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCWebhookLogCreateInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userKYC?: UserKYCCreateNestedOneWithoutWebhookLogsInput
  }

  export type KYCWebhookLogUncheckedCreateInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCWebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userKYC?: UserKYCUpdateOneWithoutWebhookLogsNestedInput
  }

  export type KYCWebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCWebhookLogCreateManyInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCWebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCWebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCDocumentCreateInput = {
    id?: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userKYC: UserKYCCreateNestedOneWithoutDocumentsInput
  }

  export type KYCDocumentUncheckedCreateInput = {
    id?: string
    userId: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type KYCDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userKYC?: UserKYCUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type KYCDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCDocumentCreateManyInput = {
    id?: string
    userId: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type KYCDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCLevelPolicyCreateInput = {
    level: number
    label: string
    description: string
    depositDaily: number
    depositWeekly: number
    depositMonthly: number
    withdrawalDaily: number
    withdrawalMonthly: number
    stakePerBetMax: number
    cumulativeBalanceMax: number
    withdrawalAllowed: boolean
    liveBetAllowed: boolean
    casinoAllowed: boolean
    requiredChecks?: KYCLevelPolicyCreaterequiredChecksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCLevelPolicyUncheckedCreateInput = {
    level: number
    label: string
    description: string
    depositDaily: number
    depositWeekly: number
    depositMonthly: number
    withdrawalDaily: number
    withdrawalMonthly: number
    stakePerBetMax: number
    cumulativeBalanceMax: number
    withdrawalAllowed: boolean
    liveBetAllowed: boolean
    casinoAllowed: boolean
    requiredChecks?: KYCLevelPolicyCreaterequiredChecksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCLevelPolicyUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    depositDaily?: FloatFieldUpdateOperationsInput | number
    depositWeekly?: FloatFieldUpdateOperationsInput | number
    depositMonthly?: FloatFieldUpdateOperationsInput | number
    withdrawalDaily?: FloatFieldUpdateOperationsInput | number
    withdrawalMonthly?: FloatFieldUpdateOperationsInput | number
    stakePerBetMax?: FloatFieldUpdateOperationsInput | number
    cumulativeBalanceMax?: FloatFieldUpdateOperationsInput | number
    withdrawalAllowed?: BoolFieldUpdateOperationsInput | boolean
    liveBetAllowed?: BoolFieldUpdateOperationsInput | boolean
    casinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiredChecks?: KYCLevelPolicyUpdaterequiredChecksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCLevelPolicyUncheckedUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    depositDaily?: FloatFieldUpdateOperationsInput | number
    depositWeekly?: FloatFieldUpdateOperationsInput | number
    depositMonthly?: FloatFieldUpdateOperationsInput | number
    withdrawalDaily?: FloatFieldUpdateOperationsInput | number
    withdrawalMonthly?: FloatFieldUpdateOperationsInput | number
    stakePerBetMax?: FloatFieldUpdateOperationsInput | number
    cumulativeBalanceMax?: FloatFieldUpdateOperationsInput | number
    withdrawalAllowed?: BoolFieldUpdateOperationsInput | boolean
    liveBetAllowed?: BoolFieldUpdateOperationsInput | boolean
    casinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiredChecks?: KYCLevelPolicyUpdaterequiredChecksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCLevelPolicyCreateManyInput = {
    level: number
    label: string
    description: string
    depositDaily: number
    depositWeekly: number
    depositMonthly: number
    withdrawalDaily: number
    withdrawalMonthly: number
    stakePerBetMax: number
    cumulativeBalanceMax: number
    withdrawalAllowed: boolean
    liveBetAllowed: boolean
    casinoAllowed: boolean
    requiredChecks?: KYCLevelPolicyCreaterequiredChecksInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCLevelPolicyUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    depositDaily?: FloatFieldUpdateOperationsInput | number
    depositWeekly?: FloatFieldUpdateOperationsInput | number
    depositMonthly?: FloatFieldUpdateOperationsInput | number
    withdrawalDaily?: FloatFieldUpdateOperationsInput | number
    withdrawalMonthly?: FloatFieldUpdateOperationsInput | number
    stakePerBetMax?: FloatFieldUpdateOperationsInput | number
    cumulativeBalanceMax?: FloatFieldUpdateOperationsInput | number
    withdrawalAllowed?: BoolFieldUpdateOperationsInput | boolean
    liveBetAllowed?: BoolFieldUpdateOperationsInput | boolean
    casinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiredChecks?: KYCLevelPolicyUpdaterequiredChecksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCLevelPolicyUncheckedUpdateManyInput = {
    level?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    depositDaily?: FloatFieldUpdateOperationsInput | number
    depositWeekly?: FloatFieldUpdateOperationsInput | number
    depositMonthly?: FloatFieldUpdateOperationsInput | number
    withdrawalDaily?: FloatFieldUpdateOperationsInput | number
    withdrawalMonthly?: FloatFieldUpdateOperationsInput | number
    stakePerBetMax?: FloatFieldUpdateOperationsInput | number
    cumulativeBalanceMax?: FloatFieldUpdateOperationsInput | number
    withdrawalAllowed?: BoolFieldUpdateOperationsInput | boolean
    liveBetAllowed?: BoolFieldUpdateOperationsInput | boolean
    casinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    requiredChecks?: KYCLevelPolicyUpdaterequiredChecksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumKYCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCStatusFilter<$PrismaModel> | $Enums.KYCStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumKYCRejectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCRejectionReason | EnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel> | $Enums.KYCRejectionReason | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KYCDocumentListRelationFilter = {
    every?: KYCDocumentWhereInput
    some?: KYCDocumentWhereInput
    none?: KYCDocumentWhereInput
  }

  export type KYCWebhookLogListRelationFilter = {
    every?: KYCWebhookLogWhereInput
    some?: KYCWebhookLogWhereInput
    none?: KYCWebhookLogWhereInput
  }

  export type KYCAmlScreeningListRelationFilter = {
    every?: KYCAmlScreeningWhereInput
    some?: KYCAmlScreeningWhereInput
    none?: KYCAmlScreeningWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KYCDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KYCWebhookLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KYCAmlScreeningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserKYCCountOrderByAggregateInput = {
    userId?: SortOrder
    level?: SortOrder
    status?: SortOrder
    externalApplicantId?: SortOrder
    externalInspectionId?: SortOrder
    firstSubmittedAt?: SortOrder
    lastSubmittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewerNote?: SortOrder
    rejectionReason?: SortOrder
    rejectionDetails?: SortOrder
    providerRawResponse?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserKYCAvgOrderByAggregateInput = {
    level?: SortOrder
    riskScore?: SortOrder
  }

  export type UserKYCMaxOrderByAggregateInput = {
    userId?: SortOrder
    level?: SortOrder
    status?: SortOrder
    externalApplicantId?: SortOrder
    externalInspectionId?: SortOrder
    firstSubmittedAt?: SortOrder
    lastSubmittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewerNote?: SortOrder
    rejectionReason?: SortOrder
    rejectionDetails?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserKYCMinOrderByAggregateInput = {
    userId?: SortOrder
    level?: SortOrder
    status?: SortOrder
    externalApplicantId?: SortOrder
    externalInspectionId?: SortOrder
    firstSubmittedAt?: SortOrder
    lastSubmittedAt?: SortOrder
    reviewedAt?: SortOrder
    reviewerNote?: SortOrder
    rejectionReason?: SortOrder
    rejectionDetails?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    riskScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserKYCSumOrderByAggregateInput = {
    level?: SortOrder
    riskScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumKYCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumKYCRejectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCRejectionReason | EnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKYCRejectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.KYCRejectionReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserKYCRelationFilter = {
    is?: UserKYCWhereInput
    isNot?: UserKYCWhereInput
  }

  export type KYCAmlScreeningCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    status?: SortOrder
    totalHits?: SortOrder
    score?: SortOrder
    hitsJson?: SortOrder
    screenedAt?: SortOrder
  }

  export type KYCAmlScreeningAvgOrderByAggregateInput = {
    totalHits?: SortOrder
    score?: SortOrder
  }

  export type KYCAmlScreeningMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    status?: SortOrder
    totalHits?: SortOrder
    score?: SortOrder
    screenedAt?: SortOrder
  }

  export type KYCAmlScreeningMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    requestId?: SortOrder
    status?: SortOrder
    totalHits?: SortOrder
    score?: SortOrder
    screenedAt?: SortOrder
  }

  export type KYCAmlScreeningSumOrderByAggregateInput = {
    totalHits?: SortOrder
    score?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserKYCNullableRelationFilter = {
    is?: UserKYCWhereInput | null
    isNot?: UserKYCWhereInput | null
  }

  export type KYCWebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    externalApplicantId?: SortOrder
    correlationId?: SortOrder
    headersJson?: SortOrder
    payloadJson?: SortOrder
    signatureValid?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    processingError?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCWebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    externalApplicantId?: SortOrder
    correlationId?: SortOrder
    signatureValid?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    processingError?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCWebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    eventType?: SortOrder
    externalApplicantId?: SortOrder
    correlationId?: SortOrder
    signatureValid?: SortOrder
    processed?: SortOrder
    processedAt?: SortOrder
    processingError?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumKYCDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentType | EnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentTypeFilter<$PrismaModel> | $Enums.KYCDocumentType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumKYCDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentStatus | EnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentStatusFilter<$PrismaModel> | $Enums.KYCDocumentStatus
  }

  export type KYCDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kycLevel?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    fileSizeKb?: SortOrder
    documentStatus?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectedReason?: SortOrder
    countryOfIssue?: SortOrder
    numberMasked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type KYCDocumentAvgOrderByAggregateInput = {
    kycLevel?: SortOrder
    fileSizeKb?: SortOrder
  }

  export type KYCDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kycLevel?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    fileSizeKb?: SortOrder
    documentStatus?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectedReason?: SortOrder
    countryOfIssue?: SortOrder
    numberMasked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type KYCDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kycLevel?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileHash?: SortOrder
    fileSizeKb?: SortOrder
    documentStatus?: SortOrder
    submittedAt?: SortOrder
    verifiedAt?: SortOrder
    rejectedReason?: SortOrder
    countryOfIssue?: SortOrder
    numberMasked?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type KYCDocumentSumOrderByAggregateInput = {
    kycLevel?: SortOrder
    fileSizeKb?: SortOrder
  }

  export type EnumKYCDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentType | EnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.KYCDocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumKYCDocumentTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumKYCDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentStatus | EnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCDocumentStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type KYCLevelPolicyCountOrderByAggregateInput = {
    level?: SortOrder
    label?: SortOrder
    description?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
    withdrawalAllowed?: SortOrder
    liveBetAllowed?: SortOrder
    casinoAllowed?: SortOrder
    requiredChecks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCLevelPolicyAvgOrderByAggregateInput = {
    level?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
  }

  export type KYCLevelPolicyMaxOrderByAggregateInput = {
    level?: SortOrder
    label?: SortOrder
    description?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
    withdrawalAllowed?: SortOrder
    liveBetAllowed?: SortOrder
    casinoAllowed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCLevelPolicyMinOrderByAggregateInput = {
    level?: SortOrder
    label?: SortOrder
    description?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
    withdrawalAllowed?: SortOrder
    liveBetAllowed?: SortOrder
    casinoAllowed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KYCLevelPolicySumOrderByAggregateInput = {
    level?: SortOrder
    depositDaily?: SortOrder
    depositWeekly?: SortOrder
    depositMonthly?: SortOrder
    withdrawalDaily?: SortOrder
    withdrawalMonthly?: SortOrder
    stakePerBetMax?: SortOrder
    cumulativeBalanceMax?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KYCDocumentCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput> | KYCDocumentCreateWithoutUserKYCInput[] | KYCDocumentUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCDocumentCreateOrConnectWithoutUserKYCInput | KYCDocumentCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCDocumentCreateManyUserKYCInputEnvelope
    connect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
  }

  export type KYCWebhookLogCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput> | KYCWebhookLogCreateWithoutUserKYCInput[] | KYCWebhookLogUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCWebhookLogCreateOrConnectWithoutUserKYCInput | KYCWebhookLogCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCWebhookLogCreateManyUserKYCInputEnvelope
    connect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
  }

  export type KYCAmlScreeningCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput> | KYCAmlScreeningCreateWithoutUserKYCInput[] | KYCAmlScreeningUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCAmlScreeningCreateOrConnectWithoutUserKYCInput | KYCAmlScreeningCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCAmlScreeningCreateManyUserKYCInputEnvelope
    connect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
  }

  export type KYCDocumentUncheckedCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput> | KYCDocumentCreateWithoutUserKYCInput[] | KYCDocumentUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCDocumentCreateOrConnectWithoutUserKYCInput | KYCDocumentCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCDocumentCreateManyUserKYCInputEnvelope
    connect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
  }

  export type KYCWebhookLogUncheckedCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput> | KYCWebhookLogCreateWithoutUserKYCInput[] | KYCWebhookLogUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCWebhookLogCreateOrConnectWithoutUserKYCInput | KYCWebhookLogCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCWebhookLogCreateManyUserKYCInputEnvelope
    connect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
  }

  export type KYCAmlScreeningUncheckedCreateNestedManyWithoutUserKYCInput = {
    create?: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput> | KYCAmlScreeningCreateWithoutUserKYCInput[] | KYCAmlScreeningUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCAmlScreeningCreateOrConnectWithoutUserKYCInput | KYCAmlScreeningCreateOrConnectWithoutUserKYCInput[]
    createMany?: KYCAmlScreeningCreateManyUserKYCInputEnvelope
    connect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKYCStatusFieldUpdateOperationsInput = {
    set?: $Enums.KYCStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumKYCRejectionReasonFieldUpdateOperationsInput = {
    set?: $Enums.KYCRejectionReason | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KYCDocumentUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput> | KYCDocumentCreateWithoutUserKYCInput[] | KYCDocumentUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCDocumentCreateOrConnectWithoutUserKYCInput | KYCDocumentCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCDocumentUpsertWithWhereUniqueWithoutUserKYCInput | KYCDocumentUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCDocumentCreateManyUserKYCInputEnvelope
    set?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    disconnect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    delete?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    connect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    update?: KYCDocumentUpdateWithWhereUniqueWithoutUserKYCInput | KYCDocumentUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCDocumentUpdateManyWithWhereWithoutUserKYCInput | KYCDocumentUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCDocumentScalarWhereInput | KYCDocumentScalarWhereInput[]
  }

  export type KYCWebhookLogUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput> | KYCWebhookLogCreateWithoutUserKYCInput[] | KYCWebhookLogUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCWebhookLogCreateOrConnectWithoutUserKYCInput | KYCWebhookLogCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCWebhookLogUpsertWithWhereUniqueWithoutUserKYCInput | KYCWebhookLogUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCWebhookLogCreateManyUserKYCInputEnvelope
    set?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    disconnect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    delete?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    connect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    update?: KYCWebhookLogUpdateWithWhereUniqueWithoutUserKYCInput | KYCWebhookLogUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCWebhookLogUpdateManyWithWhereWithoutUserKYCInput | KYCWebhookLogUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCWebhookLogScalarWhereInput | KYCWebhookLogScalarWhereInput[]
  }

  export type KYCAmlScreeningUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput> | KYCAmlScreeningCreateWithoutUserKYCInput[] | KYCAmlScreeningUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCAmlScreeningCreateOrConnectWithoutUserKYCInput | KYCAmlScreeningCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCAmlScreeningUpsertWithWhereUniqueWithoutUserKYCInput | KYCAmlScreeningUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCAmlScreeningCreateManyUserKYCInputEnvelope
    set?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    disconnect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    delete?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    connect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    update?: KYCAmlScreeningUpdateWithWhereUniqueWithoutUserKYCInput | KYCAmlScreeningUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCAmlScreeningUpdateManyWithWhereWithoutUserKYCInput | KYCAmlScreeningUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCAmlScreeningScalarWhereInput | KYCAmlScreeningScalarWhereInput[]
  }

  export type KYCDocumentUncheckedUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput> | KYCDocumentCreateWithoutUserKYCInput[] | KYCDocumentUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCDocumentCreateOrConnectWithoutUserKYCInput | KYCDocumentCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCDocumentUpsertWithWhereUniqueWithoutUserKYCInput | KYCDocumentUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCDocumentCreateManyUserKYCInputEnvelope
    set?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    disconnect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    delete?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    connect?: KYCDocumentWhereUniqueInput | KYCDocumentWhereUniqueInput[]
    update?: KYCDocumentUpdateWithWhereUniqueWithoutUserKYCInput | KYCDocumentUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCDocumentUpdateManyWithWhereWithoutUserKYCInput | KYCDocumentUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCDocumentScalarWhereInput | KYCDocumentScalarWhereInput[]
  }

  export type KYCWebhookLogUncheckedUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput> | KYCWebhookLogCreateWithoutUserKYCInput[] | KYCWebhookLogUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCWebhookLogCreateOrConnectWithoutUserKYCInput | KYCWebhookLogCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCWebhookLogUpsertWithWhereUniqueWithoutUserKYCInput | KYCWebhookLogUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCWebhookLogCreateManyUserKYCInputEnvelope
    set?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    disconnect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    delete?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    connect?: KYCWebhookLogWhereUniqueInput | KYCWebhookLogWhereUniqueInput[]
    update?: KYCWebhookLogUpdateWithWhereUniqueWithoutUserKYCInput | KYCWebhookLogUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCWebhookLogUpdateManyWithWhereWithoutUserKYCInput | KYCWebhookLogUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCWebhookLogScalarWhereInput | KYCWebhookLogScalarWhereInput[]
  }

  export type KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCNestedInput = {
    create?: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput> | KYCAmlScreeningCreateWithoutUserKYCInput[] | KYCAmlScreeningUncheckedCreateWithoutUserKYCInput[]
    connectOrCreate?: KYCAmlScreeningCreateOrConnectWithoutUserKYCInput | KYCAmlScreeningCreateOrConnectWithoutUserKYCInput[]
    upsert?: KYCAmlScreeningUpsertWithWhereUniqueWithoutUserKYCInput | KYCAmlScreeningUpsertWithWhereUniqueWithoutUserKYCInput[]
    createMany?: KYCAmlScreeningCreateManyUserKYCInputEnvelope
    set?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    disconnect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    delete?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    connect?: KYCAmlScreeningWhereUniqueInput | KYCAmlScreeningWhereUniqueInput[]
    update?: KYCAmlScreeningUpdateWithWhereUniqueWithoutUserKYCInput | KYCAmlScreeningUpdateWithWhereUniqueWithoutUserKYCInput[]
    updateMany?: KYCAmlScreeningUpdateManyWithWhereWithoutUserKYCInput | KYCAmlScreeningUpdateManyWithWhereWithoutUserKYCInput[]
    deleteMany?: KYCAmlScreeningScalarWhereInput | KYCAmlScreeningScalarWhereInput[]
  }

  export type UserKYCCreateNestedOneWithoutAmlScreeningsInput = {
    create?: XOR<UserKYCCreateWithoutAmlScreeningsInput, UserKYCUncheckedCreateWithoutAmlScreeningsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutAmlScreeningsInput
    connect?: UserKYCWhereUniqueInput
  }

  export type UserKYCUpdateOneRequiredWithoutAmlScreeningsNestedInput = {
    create?: XOR<UserKYCCreateWithoutAmlScreeningsInput, UserKYCUncheckedCreateWithoutAmlScreeningsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutAmlScreeningsInput
    upsert?: UserKYCUpsertWithoutAmlScreeningsInput
    connect?: UserKYCWhereUniqueInput
    update?: XOR<XOR<UserKYCUpdateToOneWithWhereWithoutAmlScreeningsInput, UserKYCUpdateWithoutAmlScreeningsInput>, UserKYCUncheckedUpdateWithoutAmlScreeningsInput>
  }

  export type UserKYCCreateNestedOneWithoutWebhookLogsInput = {
    create?: XOR<UserKYCCreateWithoutWebhookLogsInput, UserKYCUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutWebhookLogsInput
    connect?: UserKYCWhereUniqueInput
  }

  export type UserKYCUpdateOneWithoutWebhookLogsNestedInput = {
    create?: XOR<UserKYCCreateWithoutWebhookLogsInput, UserKYCUncheckedCreateWithoutWebhookLogsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutWebhookLogsInput
    upsert?: UserKYCUpsertWithoutWebhookLogsInput
    disconnect?: UserKYCWhereInput | boolean
    delete?: UserKYCWhereInput | boolean
    connect?: UserKYCWhereUniqueInput
    update?: XOR<XOR<UserKYCUpdateToOneWithWhereWithoutWebhookLogsInput, UserKYCUpdateWithoutWebhookLogsInput>, UserKYCUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type UserKYCCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserKYCCreateWithoutDocumentsInput, UserKYCUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutDocumentsInput
    connect?: UserKYCWhereUniqueInput
  }

  export type EnumKYCDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.KYCDocumentType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumKYCDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.KYCDocumentStatus
  }

  export type UserKYCUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserKYCCreateWithoutDocumentsInput, UserKYCUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserKYCCreateOrConnectWithoutDocumentsInput
    upsert?: UserKYCUpsertWithoutDocumentsInput
    connect?: UserKYCWhereUniqueInput
    update?: XOR<XOR<UserKYCUpdateToOneWithWhereWithoutDocumentsInput, UserKYCUpdateWithoutDocumentsInput>, UserKYCUncheckedUpdateWithoutDocumentsInput>
  }

  export type KYCLevelPolicyCreaterequiredChecksInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KYCLevelPolicyUpdaterequiredChecksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumKYCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCStatusFilter<$PrismaModel> | $Enums.KYCStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCRejectionReason | EnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel> | $Enums.KYCRejectionReason | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCStatus | EnumKYCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCStatus[] | ListEnumKYCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumKYCRejectionReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCRejectionReason | EnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.KYCRejectionReason[] | ListEnumKYCRejectionReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumKYCRejectionReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.KYCRejectionReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumKYCRejectionReasonNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumKYCDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentType | EnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentTypeFilter<$PrismaModel> | $Enums.KYCDocumentType
  }

  export type NestedEnumKYCDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentStatus | EnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentStatusFilter<$PrismaModel> | $Enums.KYCDocumentStatus
  }

  export type NestedEnumKYCDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentType | EnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentType[] | ListEnumKYCDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.KYCDocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumKYCDocumentTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumKYCDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KYCDocumentStatus | EnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KYCDocumentStatus[] | ListEnumKYCDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKYCDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.KYCDocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKYCDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumKYCDocumentStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KYCDocumentCreateWithoutUserKYCInput = {
    id?: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type KYCDocumentUncheckedCreateWithoutUserKYCInput = {
    id?: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type KYCDocumentCreateOrConnectWithoutUserKYCInput = {
    where: KYCDocumentWhereUniqueInput
    create: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCDocumentCreateManyUserKYCInputEnvelope = {
    data: KYCDocumentCreateManyUserKYCInput | KYCDocumentCreateManyUserKYCInput[]
    skipDuplicates?: boolean
  }

  export type KYCWebhookLogCreateWithoutUserKYCInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCWebhookLogUncheckedCreateWithoutUserKYCInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCWebhookLogCreateOrConnectWithoutUserKYCInput = {
    where: KYCWebhookLogWhereUniqueInput
    create: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCWebhookLogCreateManyUserKYCInputEnvelope = {
    data: KYCWebhookLogCreateManyUserKYCInput | KYCWebhookLogCreateManyUserKYCInput[]
    skipDuplicates?: boolean
  }

  export type KYCAmlScreeningCreateWithoutUserKYCInput = {
    id?: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
  }

  export type KYCAmlScreeningUncheckedCreateWithoutUserKYCInput = {
    id?: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
  }

  export type KYCAmlScreeningCreateOrConnectWithoutUserKYCInput = {
    where: KYCAmlScreeningWhereUniqueInput
    create: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCAmlScreeningCreateManyUserKYCInputEnvelope = {
    data: KYCAmlScreeningCreateManyUserKYCInput | KYCAmlScreeningCreateManyUserKYCInput[]
    skipDuplicates?: boolean
  }

  export type KYCDocumentUpsertWithWhereUniqueWithoutUserKYCInput = {
    where: KYCDocumentWhereUniqueInput
    update: XOR<KYCDocumentUpdateWithoutUserKYCInput, KYCDocumentUncheckedUpdateWithoutUserKYCInput>
    create: XOR<KYCDocumentCreateWithoutUserKYCInput, KYCDocumentUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCDocumentUpdateWithWhereUniqueWithoutUserKYCInput = {
    where: KYCDocumentWhereUniqueInput
    data: XOR<KYCDocumentUpdateWithoutUserKYCInput, KYCDocumentUncheckedUpdateWithoutUserKYCInput>
  }

  export type KYCDocumentUpdateManyWithWhereWithoutUserKYCInput = {
    where: KYCDocumentScalarWhereInput
    data: XOR<KYCDocumentUpdateManyMutationInput, KYCDocumentUncheckedUpdateManyWithoutUserKYCInput>
  }

  export type KYCDocumentScalarWhereInput = {
    AND?: KYCDocumentScalarWhereInput | KYCDocumentScalarWhereInput[]
    OR?: KYCDocumentScalarWhereInput[]
    NOT?: KYCDocumentScalarWhereInput | KYCDocumentScalarWhereInput[]
    id?: StringFilter<"KYCDocument"> | string
    userId?: StringFilter<"KYCDocument"> | string
    kycLevel?: IntFilter<"KYCDocument"> | number
    documentType?: EnumKYCDocumentTypeFilter<"KYCDocument"> | $Enums.KYCDocumentType
    fileName?: StringNullableFilter<"KYCDocument"> | string | null
    fileHash?: StringNullableFilter<"KYCDocument"> | string | null
    fileSizeKb?: IntNullableFilter<"KYCDocument"> | number | null
    documentStatus?: EnumKYCDocumentStatusFilter<"KYCDocument"> | $Enums.KYCDocumentStatus
    submittedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    verifiedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    rejectedReason?: StringNullableFilter<"KYCDocument"> | string | null
    countryOfIssue?: StringNullableFilter<"KYCDocument"> | string | null
    numberMasked?: StringNullableFilter<"KYCDocument"> | string | null
    expiresAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
    createdAt?: DateTimeFilter<"KYCDocument"> | Date | string
    updatedAt?: DateTimeFilter<"KYCDocument"> | Date | string
    deletedAt?: DateTimeNullableFilter<"KYCDocument"> | Date | string | null
  }

  export type KYCWebhookLogUpsertWithWhereUniqueWithoutUserKYCInput = {
    where: KYCWebhookLogWhereUniqueInput
    update: XOR<KYCWebhookLogUpdateWithoutUserKYCInput, KYCWebhookLogUncheckedUpdateWithoutUserKYCInput>
    create: XOR<KYCWebhookLogCreateWithoutUserKYCInput, KYCWebhookLogUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCWebhookLogUpdateWithWhereUniqueWithoutUserKYCInput = {
    where: KYCWebhookLogWhereUniqueInput
    data: XOR<KYCWebhookLogUpdateWithoutUserKYCInput, KYCWebhookLogUncheckedUpdateWithoutUserKYCInput>
  }

  export type KYCWebhookLogUpdateManyWithWhereWithoutUserKYCInput = {
    where: KYCWebhookLogScalarWhereInput
    data: XOR<KYCWebhookLogUpdateManyMutationInput, KYCWebhookLogUncheckedUpdateManyWithoutUserKYCInput>
  }

  export type KYCWebhookLogScalarWhereInput = {
    AND?: KYCWebhookLogScalarWhereInput | KYCWebhookLogScalarWhereInput[]
    OR?: KYCWebhookLogScalarWhereInput[]
    NOT?: KYCWebhookLogScalarWhereInput | KYCWebhookLogScalarWhereInput[]
    id?: StringFilter<"KYCWebhookLog"> | string
    provider?: StringFilter<"KYCWebhookLog"> | string
    eventType?: StringFilter<"KYCWebhookLog"> | string
    externalApplicantId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    correlationId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    headersJson?: JsonNullableFilter<"KYCWebhookLog">
    payloadJson?: JsonFilter<"KYCWebhookLog">
    signatureValid?: BoolFilter<"KYCWebhookLog"> | boolean
    processed?: BoolFilter<"KYCWebhookLog"> | boolean
    processedAt?: DateTimeNullableFilter<"KYCWebhookLog"> | Date | string | null
    processingError?: StringNullableFilter<"KYCWebhookLog"> | string | null
    userId?: StringNullableFilter<"KYCWebhookLog"> | string | null
    createdAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
    updatedAt?: DateTimeFilter<"KYCWebhookLog"> | Date | string
  }

  export type KYCAmlScreeningUpsertWithWhereUniqueWithoutUserKYCInput = {
    where: KYCAmlScreeningWhereUniqueInput
    update: XOR<KYCAmlScreeningUpdateWithoutUserKYCInput, KYCAmlScreeningUncheckedUpdateWithoutUserKYCInput>
    create: XOR<KYCAmlScreeningCreateWithoutUserKYCInput, KYCAmlScreeningUncheckedCreateWithoutUserKYCInput>
  }

  export type KYCAmlScreeningUpdateWithWhereUniqueWithoutUserKYCInput = {
    where: KYCAmlScreeningWhereUniqueInput
    data: XOR<KYCAmlScreeningUpdateWithoutUserKYCInput, KYCAmlScreeningUncheckedUpdateWithoutUserKYCInput>
  }

  export type KYCAmlScreeningUpdateManyWithWhereWithoutUserKYCInput = {
    where: KYCAmlScreeningScalarWhereInput
    data: XOR<KYCAmlScreeningUpdateManyMutationInput, KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCInput>
  }

  export type KYCAmlScreeningScalarWhereInput = {
    AND?: KYCAmlScreeningScalarWhereInput | KYCAmlScreeningScalarWhereInput[]
    OR?: KYCAmlScreeningScalarWhereInput[]
    NOT?: KYCAmlScreeningScalarWhereInput | KYCAmlScreeningScalarWhereInput[]
    id?: StringFilter<"KYCAmlScreening"> | string
    userId?: StringFilter<"KYCAmlScreening"> | string
    requestId?: StringNullableFilter<"KYCAmlScreening"> | string | null
    status?: StringFilter<"KYCAmlScreening"> | string
    totalHits?: IntFilter<"KYCAmlScreening"> | number
    score?: FloatNullableFilter<"KYCAmlScreening"> | number | null
    hitsJson?: JsonNullableFilter<"KYCAmlScreening">
    screenedAt?: DateTimeFilter<"KYCAmlScreening"> | Date | string
  }

  export type UserKYCCreateWithoutAmlScreeningsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentCreateNestedManyWithoutUserKYCInput
    webhookLogs?: KYCWebhookLogCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCUncheckedCreateWithoutAmlScreeningsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentUncheckedCreateNestedManyWithoutUserKYCInput
    webhookLogs?: KYCWebhookLogUncheckedCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCCreateOrConnectWithoutAmlScreeningsInput = {
    where: UserKYCWhereUniqueInput
    create: XOR<UserKYCCreateWithoutAmlScreeningsInput, UserKYCUncheckedCreateWithoutAmlScreeningsInput>
  }

  export type UserKYCUpsertWithoutAmlScreeningsInput = {
    update: XOR<UserKYCUpdateWithoutAmlScreeningsInput, UserKYCUncheckedUpdateWithoutAmlScreeningsInput>
    create: XOR<UserKYCCreateWithoutAmlScreeningsInput, UserKYCUncheckedCreateWithoutAmlScreeningsInput>
    where?: UserKYCWhereInput
  }

  export type UserKYCUpdateToOneWithWhereWithoutAmlScreeningsInput = {
    where?: UserKYCWhereInput
    data: XOR<UserKYCUpdateWithoutAmlScreeningsInput, UserKYCUncheckedUpdateWithoutAmlScreeningsInput>
  }

  export type UserKYCUpdateWithoutAmlScreeningsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUpdateManyWithoutUserKYCNestedInput
    webhookLogs?: KYCWebhookLogUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCUncheckedUpdateWithoutAmlScreeningsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUncheckedUpdateManyWithoutUserKYCNestedInput
    webhookLogs?: KYCWebhookLogUncheckedUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCCreateWithoutWebhookLogsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCUncheckedCreateWithoutWebhookLogsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    documents?: KYCDocumentUncheckedCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningUncheckedCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCCreateOrConnectWithoutWebhookLogsInput = {
    where: UserKYCWhereUniqueInput
    create: XOR<UserKYCCreateWithoutWebhookLogsInput, UserKYCUncheckedCreateWithoutWebhookLogsInput>
  }

  export type UserKYCUpsertWithoutWebhookLogsInput = {
    update: XOR<UserKYCUpdateWithoutWebhookLogsInput, UserKYCUncheckedUpdateWithoutWebhookLogsInput>
    create: XOR<UserKYCCreateWithoutWebhookLogsInput, UserKYCUncheckedCreateWithoutWebhookLogsInput>
    where?: UserKYCWhereInput
  }

  export type UserKYCUpdateToOneWithWhereWithoutWebhookLogsInput = {
    where?: UserKYCWhereInput
    data: XOR<UserKYCUpdateWithoutWebhookLogsInput, UserKYCUncheckedUpdateWithoutWebhookLogsInput>
  }

  export type UserKYCUpdateWithoutWebhookLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCUncheckedUpdateWithoutWebhookLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: KYCDocumentUncheckedUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCCreateWithoutDocumentsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    webhookLogs?: KYCWebhookLogCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCUncheckedCreateWithoutDocumentsInput = {
    userId: string
    level?: number
    status?: $Enums.KYCStatus
    externalApplicantId?: string | null
    externalInspectionId?: string | null
    firstSubmittedAt?: Date | string | null
    lastSubmittedAt?: Date | string | null
    reviewedAt?: Date | string | null
    reviewerNote?: string | null
    rejectionReason?: $Enums.KYCRejectionReason | null
    rejectionDetails?: string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    expiresAt?: Date | string | null
    riskScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    webhookLogs?: KYCWebhookLogUncheckedCreateNestedManyWithoutUserKYCInput
    amlScreenings?: KYCAmlScreeningUncheckedCreateNestedManyWithoutUserKYCInput
  }

  export type UserKYCCreateOrConnectWithoutDocumentsInput = {
    where: UserKYCWhereUniqueInput
    create: XOR<UserKYCCreateWithoutDocumentsInput, UserKYCUncheckedCreateWithoutDocumentsInput>
  }

  export type UserKYCUpsertWithoutDocumentsInput = {
    update: XOR<UserKYCUpdateWithoutDocumentsInput, UserKYCUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserKYCCreateWithoutDocumentsInput, UserKYCUncheckedCreateWithoutDocumentsInput>
    where?: UserKYCWhereInput
  }

  export type UserKYCUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserKYCWhereInput
    data: XOR<UserKYCUpdateWithoutDocumentsInput, UserKYCUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserKYCUpdateWithoutDocumentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookLogs?: KYCWebhookLogUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUpdateManyWithoutUserKYCNestedInput
  }

  export type UserKYCUncheckedUpdateWithoutDocumentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    status?: EnumKYCStatusFieldUpdateOperationsInput | $Enums.KYCStatus
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    externalInspectionId?: NullableStringFieldUpdateOperationsInput | string | null
    firstSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviewerNote?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableEnumKYCRejectionReasonFieldUpdateOperationsInput | $Enums.KYCRejectionReason | null
    rejectionDetails?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    webhookLogs?: KYCWebhookLogUncheckedUpdateManyWithoutUserKYCNestedInput
    amlScreenings?: KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCNestedInput
  }

  export type KYCDocumentCreateManyUserKYCInput = {
    id?: string
    kycLevel: number
    documentType: $Enums.KYCDocumentType
    fileName?: string | null
    fileHash?: string | null
    fileSizeKb?: number | null
    documentStatus?: $Enums.KYCDocumentStatus
    submittedAt?: Date | string | null
    verifiedAt?: Date | string | null
    rejectedReason?: string | null
    countryOfIssue?: string | null
    numberMasked?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type KYCWebhookLogCreateManyUserKYCInput = {
    id?: string
    provider: string
    eventType: string
    externalApplicantId?: string | null
    correlationId?: string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson: JsonNullValueInput | InputJsonValue
    signatureValid?: boolean
    processed?: boolean
    processedAt?: Date | string | null
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KYCAmlScreeningCreateManyUserKYCInput = {
    id?: string
    requestId?: string | null
    status: string
    totalHits?: number
    score?: number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: Date | string
  }

  export type KYCDocumentUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCDocumentUncheckedUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCDocumentUncheckedUpdateManyWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    kycLevel?: IntFieldUpdateOperationsInput | number
    documentType?: EnumKYCDocumentTypeFieldUpdateOperationsInput | $Enums.KYCDocumentType
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    fileSizeKb?: NullableIntFieldUpdateOperationsInput | number | null
    documentStatus?: EnumKYCDocumentStatusFieldUpdateOperationsInput | $Enums.KYCDocumentStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    countryOfIssue?: NullableStringFieldUpdateOperationsInput | string | null
    numberMasked?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KYCWebhookLogUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCWebhookLogUncheckedUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCWebhookLogUncheckedUpdateManyWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    externalApplicantId?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    headersJson?: NullableJsonNullValueInput | InputJsonValue
    payloadJson?: JsonNullValueInput | InputJsonValue
    signatureValid?: BoolFieldUpdateOperationsInput | boolean
    processed?: BoolFieldUpdateOperationsInput | boolean
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCAmlScreeningUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCAmlScreeningUncheckedUpdateWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KYCAmlScreeningUncheckedUpdateManyWithoutUserKYCInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalHits?: IntFieldUpdateOperationsInput | number
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    hitsJson?: NullableJsonNullValueInput | InputJsonValue
    screenedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserKYCCountOutputTypeDefaultArgs instead
     */
    export type UserKYCCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserKYCCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserKYCDefaultArgs instead
     */
    export type UserKYCArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserKYCDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KYCAmlScreeningDefaultArgs instead
     */
    export type KYCAmlScreeningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KYCAmlScreeningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KYCWebhookLogDefaultArgs instead
     */
    export type KYCWebhookLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KYCWebhookLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KYCDocumentDefaultArgs instead
     */
    export type KYCDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KYCDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KYCLevelPolicyDefaultArgs instead
     */
    export type KYCLevelPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KYCLevelPolicyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}