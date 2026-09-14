
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model UserLimits
 * 
 */
export type UserLimits = $Result.DefaultSelection<Prisma.$UserLimitsPayload>
/**
 * Model SelfExclusionRecord
 * 
 */
export type SelfExclusionRecord = $Result.DefaultSelection<Prisma.$SelfExclusionRecordPayload>
/**
 * Model RealityCheckLog
 * 
 */
export type RealityCheckLog = $Result.DefaultSelection<Prisma.$RealityCheckLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CountryCode: {
  PT: 'PT',
  ES: 'ES',
  FR: 'FR',
  DE: 'DE',
  IT: 'IT',
  NL: 'NL',
  MT: 'MT',
  GB: 'GB',
  BR: 'BR',
  OTHER: 'OTHER'
};

export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode]


export const LanguageCode: {
  pt_PT: 'pt_PT',
  en_US: 'en_US',
  es_ES: 'es_ES'
};

export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode]


export const CurrencyCode: {
  EUR: 'EUR',
  USD: 'USD',
  GBP: 'GBP',
  BRL: 'BRL'
};

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode]


export const UserStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  SELF_EXCLUDED: 'SELF_EXCLUDED',
  BANNED: 'BANNED',
  CLOSED: 'CLOSED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const OddsFormat: {
  decimal: 'decimal',
  fractional: 'fractional',
  american: 'american',
  hongkong: 'hongkong',
  indonesian: 'indonesian',
  malay: 'malay'
};

export type OddsFormat = (typeof OddsFormat)[keyof typeof OddsFormat]


export const SelfExcludeDuration: {
  DAYS_7: 'DAYS_7',
  DAYS_30: 'DAYS_30',
  DAYS_90: 'DAYS_90',
  DAYS_180: 'DAYS_180',
  DAYS_365: 'DAYS_365',
  PERMANENT: 'PERMANENT'
};

export type SelfExcludeDuration = (typeof SelfExcludeDuration)[keyof typeof SelfExcludeDuration]

}

export type CountryCode = $Enums.CountryCode

export const CountryCode: typeof $Enums.CountryCode

export type LanguageCode = $Enums.LanguageCode

export const LanguageCode: typeof $Enums.LanguageCode

export type CurrencyCode = $Enums.CurrencyCode

export const CurrencyCode: typeof $Enums.CurrencyCode

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type OddsFormat = $Enums.OddsFormat

export const OddsFormat: typeof $Enums.OddsFormat

export type SelfExcludeDuration = $Enums.SelfExcludeDuration

export const SelfExcludeDuration: typeof $Enums.SelfExcludeDuration

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
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
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs>;

  /**
   * `prisma.userLimits`: Exposes CRUD operations for the **UserLimits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLimits
    * const userLimits = await prisma.userLimits.findMany()
    * ```
    */
  get userLimits(): Prisma.UserLimitsDelegate<ExtArgs>;

  /**
   * `prisma.selfExclusionRecord`: Exposes CRUD operations for the **SelfExclusionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SelfExclusionRecords
    * const selfExclusionRecords = await prisma.selfExclusionRecord.findMany()
    * ```
    */
  get selfExclusionRecord(): Prisma.SelfExclusionRecordDelegate<ExtArgs>;

  /**
   * `prisma.realityCheckLog`: Exposes CRUD operations for the **RealityCheckLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealityCheckLogs
    * const realityCheckLogs = await prisma.realityCheckLog.findMany()
    * ```
    */
  get realityCheckLog(): Prisma.RealityCheckLogDelegate<ExtArgs>;
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
    UserProfile: 'UserProfile',
    UserPreferences: 'UserPreferences',
    UserLimits: 'UserLimits',
    SelfExclusionRecord: 'SelfExclusionRecord',
    RealityCheckLog: 'RealityCheckLog'
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
      modelProps: "userProfile" | "userPreferences" | "userLimits" | "selfExclusionRecord" | "realityCheckLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      UserLimits: {
        payload: Prisma.$UserLimitsPayload<ExtArgs>
        fields: Prisma.UserLimitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLimitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLimitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          findFirst: {
            args: Prisma.UserLimitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLimitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          findMany: {
            args: Prisma.UserLimitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>[]
          }
          create: {
            args: Prisma.UserLimitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          createMany: {
            args: Prisma.UserLimitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLimitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>[]
          }
          delete: {
            args: Prisma.UserLimitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          update: {
            args: Prisma.UserLimitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          deleteMany: {
            args: Prisma.UserLimitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLimitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLimitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLimitsPayload>
          }
          aggregate: {
            args: Prisma.UserLimitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLimits>
          }
          groupBy: {
            args: Prisma.UserLimitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLimitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLimitsCountArgs<ExtArgs>
            result: $Utils.Optional<UserLimitsCountAggregateOutputType> | number
          }
        }
      }
      SelfExclusionRecord: {
        payload: Prisma.$SelfExclusionRecordPayload<ExtArgs>
        fields: Prisma.SelfExclusionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SelfExclusionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SelfExclusionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          findFirst: {
            args: Prisma.SelfExclusionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SelfExclusionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          findMany: {
            args: Prisma.SelfExclusionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>[]
          }
          create: {
            args: Prisma.SelfExclusionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          createMany: {
            args: Prisma.SelfExclusionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SelfExclusionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>[]
          }
          delete: {
            args: Prisma.SelfExclusionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          update: {
            args: Prisma.SelfExclusionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          deleteMany: {
            args: Prisma.SelfExclusionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SelfExclusionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SelfExclusionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SelfExclusionRecordPayload>
          }
          aggregate: {
            args: Prisma.SelfExclusionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSelfExclusionRecord>
          }
          groupBy: {
            args: Prisma.SelfExclusionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SelfExclusionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SelfExclusionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SelfExclusionRecordCountAggregateOutputType> | number
          }
        }
      }
      RealityCheckLog: {
        payload: Prisma.$RealityCheckLogPayload<ExtArgs>
        fields: Prisma.RealityCheckLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealityCheckLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealityCheckLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          findFirst: {
            args: Prisma.RealityCheckLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealityCheckLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          findMany: {
            args: Prisma.RealityCheckLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>[]
          }
          create: {
            args: Prisma.RealityCheckLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          createMany: {
            args: Prisma.RealityCheckLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealityCheckLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>[]
          }
          delete: {
            args: Prisma.RealityCheckLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          update: {
            args: Prisma.RealityCheckLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          deleteMany: {
            args: Prisma.RealityCheckLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealityCheckLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RealityCheckLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealityCheckLogPayload>
          }
          aggregate: {
            args: Prisma.RealityCheckLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealityCheckLog>
          }
          groupBy: {
            args: Prisma.RealityCheckLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealityCheckLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealityCheckLogCountArgs<ExtArgs>
            result: $Utils.Optional<RealityCheckLogCountAggregateOutputType> | number
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
   * Count Type UserProfileCountOutputType
   */

  export type UserProfileCountOutputType = {
    selfExclusionRecords: number
    realityCheckLogs: number
  }

  export type UserProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selfExclusionRecords?: boolean | UserProfileCountOutputTypeCountSelfExclusionRecordsArgs
    realityCheckLogs?: boolean | UserProfileCountOutputTypeCountRealityCheckLogsArgs
  }

  // Custom InputTypes
  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfileCountOutputType
     */
    select?: UserProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountSelfExclusionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelfExclusionRecordWhereInput
  }

  /**
   * UserProfileCountOutputType without action
   */
  export type UserProfileCountOutputTypeCountRealityCheckLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealityCheckLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    vipLevel: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    vipLevel: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    country: $Enums.CountryCode | null
    phoneNumber: string | null
    phoneVerifiedAt: Date | null
    city: string | null
    address: string | null
    postalCode: string | null
    preferredLanguage: $Enums.LanguageCode | null
    preferredCurrency: $Enums.CurrencyCode | null
    timezone: string | null
    marketingOptIn: boolean | null
    smsOptIn: boolean | null
    pushOptIn: boolean | null
    status: $Enums.UserStatus | null
    registeredFromIp: string | null
    affiliateCode: string | null
    vipLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    country: $Enums.CountryCode | null
    phoneNumber: string | null
    phoneVerifiedAt: Date | null
    city: string | null
    address: string | null
    postalCode: string | null
    preferredLanguage: $Enums.LanguageCode | null
    preferredCurrency: $Enums.CurrencyCode | null
    timezone: string | null
    marketingOptIn: boolean | null
    smsOptIn: boolean | null
    pushOptIn: boolean | null
    status: $Enums.UserStatus | null
    registeredFromIp: string | null
    affiliateCode: string | null
    vipLevel: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    fullName: number
    dateOfBirth: number
    gender: number
    country: number
    phoneNumber: number
    phoneVerifiedAt: number
    city: number
    address: number
    postalCode: number
    preferredLanguage: number
    preferredCurrency: number
    timezone: number
    marketingOptIn: number
    smsOptIn: number
    pushOptIn: number
    status: number
    registeredFromIp: number
    registeredLocation: number
    affiliateCode: number
    vipLevel: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    vipLevel?: true
  }

  export type UserProfileSumAggregateInputType = {
    vipLevel?: true
  }

  export type UserProfileMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    phoneNumber?: true
    phoneVerifiedAt?: true
    city?: true
    address?: true
    postalCode?: true
    preferredLanguage?: true
    preferredCurrency?: true
    timezone?: true
    marketingOptIn?: true
    smsOptIn?: true
    pushOptIn?: true
    status?: true
    registeredFromIp?: true
    affiliateCode?: true
    vipLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    phoneNumber?: true
    phoneVerifiedAt?: true
    city?: true
    address?: true
    postalCode?: true
    preferredLanguage?: true
    preferredCurrency?: true
    timezone?: true
    marketingOptIn?: true
    smsOptIn?: true
    pushOptIn?: true
    status?: true
    registeredFromIp?: true
    affiliateCode?: true
    vipLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    gender?: true
    country?: true
    phoneNumber?: true
    phoneVerifiedAt?: true
    city?: true
    address?: true
    postalCode?: true
    preferredLanguage?: true
    preferredCurrency?: true
    timezone?: true
    marketingOptIn?: true
    smsOptIn?: true
    pushOptIn?: true
    status?: true
    registeredFromIp?: true
    registeredLocation?: true
    affiliateCode?: true
    vipLevel?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    userId: string
    firstName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    gender: string | null
    country: $Enums.CountryCode
    phoneNumber: string | null
    phoneVerifiedAt: Date | null
    city: string | null
    address: string | null
    postalCode: string | null
    preferredLanguage: $Enums.LanguageCode
    preferredCurrency: $Enums.CurrencyCode
    timezone: string | null
    marketingOptIn: boolean
    smsOptIn: boolean
    pushOptIn: boolean
    status: $Enums.UserStatus
    registeredFromIp: string | null
    registeredLocation: JsonValue | null
    affiliateCode: string | null
    vipLevel: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    phoneNumber?: boolean
    phoneVerifiedAt?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    preferredLanguage?: boolean
    preferredCurrency?: boolean
    timezone?: boolean
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: boolean
    registeredFromIp?: boolean
    registeredLocation?: boolean
    affiliateCode?: boolean
    vipLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    preferences?: boolean | UserProfile$preferencesArgs<ExtArgs>
    limits?: boolean | UserProfile$limitsArgs<ExtArgs>
    selfExclusionRecords?: boolean | UserProfile$selfExclusionRecordsArgs<ExtArgs>
    realityCheckLogs?: boolean | UserProfile$realityCheckLogsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    phoneNumber?: boolean
    phoneVerifiedAt?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    preferredLanguage?: boolean
    preferredCurrency?: boolean
    timezone?: boolean
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: boolean
    registeredFromIp?: boolean
    registeredLocation?: boolean
    affiliateCode?: boolean
    vipLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    country?: boolean
    phoneNumber?: boolean
    phoneVerifiedAt?: boolean
    city?: boolean
    address?: boolean
    postalCode?: boolean
    preferredLanguage?: boolean
    preferredCurrency?: boolean
    timezone?: boolean
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: boolean
    registeredFromIp?: boolean
    registeredLocation?: boolean
    affiliateCode?: boolean
    vipLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UserProfile$preferencesArgs<ExtArgs>
    limits?: boolean | UserProfile$limitsArgs<ExtArgs>
    selfExclusionRecords?: boolean | UserProfile$selfExclusionRecordsArgs<ExtArgs>
    realityCheckLogs?: boolean | UserProfile$realityCheckLogsArgs<ExtArgs>
    _count?: boolean | UserProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      limits: Prisma.$UserLimitsPayload<ExtArgs> | null
      selfExclusionRecords: Prisma.$SelfExclusionRecordPayload<ExtArgs>[]
      realityCheckLogs: Prisma.$RealityCheckLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string | null
      lastName: string | null
      fullName: string | null
      dateOfBirth: Date | null
      gender: string | null
      country: $Enums.CountryCode
      phoneNumber: string | null
      phoneVerifiedAt: Date | null
      city: string | null
      address: string | null
      postalCode: string | null
      preferredLanguage: $Enums.LanguageCode
      preferredCurrency: $Enums.CurrencyCode
      timezone: string | null
      marketingOptIn: boolean
      smsOptIn: boolean
      pushOptIn: boolean
      status: $Enums.UserStatus
      registeredFromIp: string | null
      registeredLocation: Prisma.JsonValue | null
      affiliateCode: string | null
      vipLevel: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `userId`
     * const userProfileWithUserIdOnly = await prisma.userProfile.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends UserProfile$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    limits<T extends UserProfile$limitsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$limitsArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    selfExclusionRecords<T extends UserProfile$selfExclusionRecordsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$selfExclusionRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findMany"> | Null>
    realityCheckLogs<T extends UserProfile$realityCheckLogsArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$realityCheckLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly firstName: FieldRef<"UserProfile", 'String'>
    readonly lastName: FieldRef<"UserProfile", 'String'>
    readonly fullName: FieldRef<"UserProfile", 'String'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly gender: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'CountryCode'>
    readonly phoneNumber: FieldRef<"UserProfile", 'String'>
    readonly phoneVerifiedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly city: FieldRef<"UserProfile", 'String'>
    readonly address: FieldRef<"UserProfile", 'String'>
    readonly postalCode: FieldRef<"UserProfile", 'String'>
    readonly preferredLanguage: FieldRef<"UserProfile", 'LanguageCode'>
    readonly preferredCurrency: FieldRef<"UserProfile", 'CurrencyCode'>
    readonly timezone: FieldRef<"UserProfile", 'String'>
    readonly marketingOptIn: FieldRef<"UserProfile", 'Boolean'>
    readonly smsOptIn: FieldRef<"UserProfile", 'Boolean'>
    readonly pushOptIn: FieldRef<"UserProfile", 'Boolean'>
    readonly status: FieldRef<"UserProfile", 'UserStatus'>
    readonly registeredFromIp: FieldRef<"UserProfile", 'String'>
    readonly registeredLocation: FieldRef<"UserProfile", 'Json'>
    readonly affiliateCode: FieldRef<"UserProfile", 'String'>
    readonly vipLevel: FieldRef<"UserProfile", 'Int'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
    readonly deletedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile.preferences
   */
  export type UserProfile$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * UserProfile.limits
   */
  export type UserProfile$limitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    where?: UserLimitsWhereInput
  }

  /**
   * UserProfile.selfExclusionRecords
   */
  export type UserProfile$selfExclusionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    where?: SelfExclusionRecordWhereInput
    orderBy?: SelfExclusionRecordOrderByWithRelationInput | SelfExclusionRecordOrderByWithRelationInput[]
    cursor?: SelfExclusionRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SelfExclusionRecordScalarFieldEnum | SelfExclusionRecordScalarFieldEnum[]
  }

  /**
   * UserProfile.realityCheckLogs
   */
  export type UserProfile$realityCheckLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    where?: RealityCheckLogWhereInput
    orderBy?: RealityCheckLogOrderByWithRelationInput | RealityCheckLogOrderByWithRelationInput[]
    cursor?: RealityCheckLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealityCheckLogScalarFieldEnum | RealityCheckLogScalarFieldEnum[]
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    defaultStake: number | null
    autoCashoutThreshold: number | null
    realityCheckIntervalMin: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    defaultStake: number | null
    autoCashoutThreshold: number | null
    realityCheckIntervalMin: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    userId: string | null
    oddsFormat: $Enums.OddsFormat | null
    defaultStake: number | null
    betAcceptanceType: string | null
    showLiveScores: boolean | null
    showFavoritesOnly: boolean | null
    darkMode: boolean | null
    autoCashoutEnabled: boolean | null
    autoCashoutThreshold: number | null
    realityCheckEnabled: boolean | null
    realityCheckIntervalMin: number | null
    quickBetEnabled: boolean | null
    soundEnabled: boolean | null
    notificationSoundsEnabled: boolean | null
    deletedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    userId: string | null
    oddsFormat: $Enums.OddsFormat | null
    defaultStake: number | null
    betAcceptanceType: string | null
    showLiveScores: boolean | null
    showFavoritesOnly: boolean | null
    darkMode: boolean | null
    autoCashoutEnabled: boolean | null
    autoCashoutThreshold: number | null
    realityCheckEnabled: boolean | null
    realityCheckIntervalMin: number | null
    quickBetEnabled: boolean | null
    soundEnabled: boolean | null
    notificationSoundsEnabled: boolean | null
    deletedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    userId: number
    oddsFormat: number
    defaultStake: number
    betAcceptanceType: number
    showLiveScores: number
    showFavoritesOnly: number
    darkMode: number
    autoCashoutEnabled: number
    autoCashoutThreshold: number
    realityCheckEnabled: number
    realityCheckIntervalMin: number
    quickBetEnabled: number
    soundEnabled: number
    notificationSoundsEnabled: number
    favoriteSports: number
    favoriteLeagues: number
    favoriteTeams: number
    deletedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    defaultStake?: true
    autoCashoutThreshold?: true
    realityCheckIntervalMin?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    defaultStake?: true
    autoCashoutThreshold?: true
    realityCheckIntervalMin?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    userId?: true
    oddsFormat?: true
    defaultStake?: true
    betAcceptanceType?: true
    showLiveScores?: true
    showFavoritesOnly?: true
    darkMode?: true
    autoCashoutEnabled?: true
    autoCashoutThreshold?: true
    realityCheckEnabled?: true
    realityCheckIntervalMin?: true
    quickBetEnabled?: true
    soundEnabled?: true
    notificationSoundsEnabled?: true
    deletedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    userId?: true
    oddsFormat?: true
    defaultStake?: true
    betAcceptanceType?: true
    showLiveScores?: true
    showFavoritesOnly?: true
    darkMode?: true
    autoCashoutEnabled?: true
    autoCashoutThreshold?: true
    realityCheckEnabled?: true
    realityCheckIntervalMin?: true
    quickBetEnabled?: true
    soundEnabled?: true
    notificationSoundsEnabled?: true
    deletedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    userId?: true
    oddsFormat?: true
    defaultStake?: true
    betAcceptanceType?: true
    showLiveScores?: true
    showFavoritesOnly?: true
    darkMode?: true
    autoCashoutEnabled?: true
    autoCashoutThreshold?: true
    realityCheckEnabled?: true
    realityCheckIntervalMin?: true
    quickBetEnabled?: true
    soundEnabled?: true
    notificationSoundsEnabled?: true
    favoriteSports?: true
    favoriteLeagues?: true
    favoriteTeams?: true
    deletedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    userId: string
    oddsFormat: $Enums.OddsFormat
    defaultStake: number | null
    betAcceptanceType: string
    showLiveScores: boolean
    showFavoritesOnly: boolean
    darkMode: boolean
    autoCashoutEnabled: boolean
    autoCashoutThreshold: number | null
    realityCheckEnabled: boolean
    realityCheckIntervalMin: number
    quickBetEnabled: boolean
    soundEnabled: boolean
    notificationSoundsEnabled: boolean
    favoriteSports: string[]
    favoriteLeagues: string[]
    favoriteTeams: string[]
    deletedAt: Date | null
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    oddsFormat?: boolean
    defaultStake?: boolean
    betAcceptanceType?: boolean
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: boolean
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: boolean
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: boolean
    favoriteLeagues?: boolean
    favoriteTeams?: boolean
    deletedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    oddsFormat?: boolean
    defaultStake?: boolean
    betAcceptanceType?: boolean
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: boolean
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: boolean
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: boolean
    favoriteLeagues?: boolean
    favoriteTeams?: boolean
    deletedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    userId?: boolean
    oddsFormat?: boolean
    defaultStake?: boolean
    betAcceptanceType?: boolean
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: boolean
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: boolean
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: boolean
    favoriteLeagues?: boolean
    favoriteTeams?: boolean
    deletedAt?: boolean
  }

  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      oddsFormat: $Enums.OddsFormat
      defaultStake: number | null
      betAcceptanceType: string
      showLiveScores: boolean
      showFavoritesOnly: boolean
      darkMode: boolean
      autoCashoutEnabled: boolean
      autoCashoutThreshold: number | null
      realityCheckEnabled: boolean
      realityCheckIntervalMin: number
      quickBetEnabled: boolean
      soundEnabled: boolean
      notificationSoundsEnabled: boolean
      favoriteSports: string[]
      favoriteLeagues: string[]
      favoriteTeams: string[]
      deletedAt: Date | null
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPreferencesWithUserIdOnly = await prisma.userPreferences.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `userId`
     * const userPreferencesWithUserIdOnly = await prisma.userPreferences.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
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
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserPreferences model
   */ 
  interface UserPreferencesFieldRefs {
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly oddsFormat: FieldRef<"UserPreferences", 'OddsFormat'>
    readonly defaultStake: FieldRef<"UserPreferences", 'Float'>
    readonly betAcceptanceType: FieldRef<"UserPreferences", 'String'>
    readonly showLiveScores: FieldRef<"UserPreferences", 'Boolean'>
    readonly showFavoritesOnly: FieldRef<"UserPreferences", 'Boolean'>
    readonly darkMode: FieldRef<"UserPreferences", 'Boolean'>
    readonly autoCashoutEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly autoCashoutThreshold: FieldRef<"UserPreferences", 'Float'>
    readonly realityCheckEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly realityCheckIntervalMin: FieldRef<"UserPreferences", 'Int'>
    readonly quickBetEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly soundEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly notificationSoundsEnabled: FieldRef<"UserPreferences", 'Boolean'>
    readonly favoriteSports: FieldRef<"UserPreferences", 'String[]'>
    readonly favoriteLeagues: FieldRef<"UserPreferences", 'String[]'>
    readonly favoriteTeams: FieldRef<"UserPreferences", 'String[]'>
    readonly deletedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model UserLimits
   */

  export type AggregateUserLimits = {
    _count: UserLimitsCountAggregateOutputType | null
    _avg: UserLimitsAvgAggregateOutputType | null
    _sum: UserLimitsSumAggregateOutputType | null
    _min: UserLimitsMinAggregateOutputType | null
    _max: UserLimitsMaxAggregateOutputType | null
  }

  export type UserLimitsAvgAggregateOutputType = {
    depositDailyLimit: number | null
    depositWeeklyLimit: number | null
    depositMonthlyLimit: number | null
    wagerDailyLimit: number | null
    wagerWeeklyLimit: number | null
    wagerMonthlyLimit: number | null
    lossDailyLimit: number | null
    lossWeeklyLimit: number | null
    lossMonthlyLimit: number | null
    sessionTimeLimitMin: number | null
    stakePerBetMax: number | null
    stakePerBetMin: number | null
    withdrawalDailyLimit: number | null
    withdrawalMonthlyLimit: number | null
    kycLevelApplied: number | null
  }

  export type UserLimitsSumAggregateOutputType = {
    depositDailyLimit: number | null
    depositWeeklyLimit: number | null
    depositMonthlyLimit: number | null
    wagerDailyLimit: number | null
    wagerWeeklyLimit: number | null
    wagerMonthlyLimit: number | null
    lossDailyLimit: number | null
    lossWeeklyLimit: number | null
    lossMonthlyLimit: number | null
    sessionTimeLimitMin: number | null
    stakePerBetMax: number | null
    stakePerBetMin: number | null
    withdrawalDailyLimit: number | null
    withdrawalMonthlyLimit: number | null
    kycLevelApplied: number | null
  }

  export type UserLimitsMinAggregateOutputType = {
    userId: string | null
    depositDailyLimit: number | null
    depositWeeklyLimit: number | null
    depositMonthlyLimit: number | null
    wagerDailyLimit: number | null
    wagerWeeklyLimit: number | null
    wagerMonthlyLimit: number | null
    lossDailyLimit: number | null
    lossWeeklyLimit: number | null
    lossMonthlyLimit: number | null
    sessionTimeLimitMin: number | null
    stakePerBetMax: number | null
    stakePerBetMin: number | null
    withdrawalDailyLimit: number | null
    withdrawalMonthlyLimit: number | null
    kycLevelApplied: number | null
    deletedAt: Date | null
  }

  export type UserLimitsMaxAggregateOutputType = {
    userId: string | null
    depositDailyLimit: number | null
    depositWeeklyLimit: number | null
    depositMonthlyLimit: number | null
    wagerDailyLimit: number | null
    wagerWeeklyLimit: number | null
    wagerMonthlyLimit: number | null
    lossDailyLimit: number | null
    lossWeeklyLimit: number | null
    lossMonthlyLimit: number | null
    sessionTimeLimitMin: number | null
    stakePerBetMax: number | null
    stakePerBetMin: number | null
    withdrawalDailyLimit: number | null
    withdrawalMonthlyLimit: number | null
    kycLevelApplied: number | null
    deletedAt: Date | null
  }

  export type UserLimitsCountAggregateOutputType = {
    userId: number
    depositDailyLimit: number
    depositWeeklyLimit: number
    depositMonthlyLimit: number
    wagerDailyLimit: number
    wagerWeeklyLimit: number
    wagerMonthlyLimit: number
    lossDailyLimit: number
    lossWeeklyLimit: number
    lossMonthlyLimit: number
    sessionTimeLimitMin: number
    stakePerBetMax: number
    stakePerBetMin: number
    withdrawalDailyLimit: number
    withdrawalMonthlyLimit: number
    kycLevelApplied: number
    deletedAt: number
    _all: number
  }


  export type UserLimitsAvgAggregateInputType = {
    depositDailyLimit?: true
    depositWeeklyLimit?: true
    depositMonthlyLimit?: true
    wagerDailyLimit?: true
    wagerWeeklyLimit?: true
    wagerMonthlyLimit?: true
    lossDailyLimit?: true
    lossWeeklyLimit?: true
    lossMonthlyLimit?: true
    sessionTimeLimitMin?: true
    stakePerBetMax?: true
    stakePerBetMin?: true
    withdrawalDailyLimit?: true
    withdrawalMonthlyLimit?: true
    kycLevelApplied?: true
  }

  export type UserLimitsSumAggregateInputType = {
    depositDailyLimit?: true
    depositWeeklyLimit?: true
    depositMonthlyLimit?: true
    wagerDailyLimit?: true
    wagerWeeklyLimit?: true
    wagerMonthlyLimit?: true
    lossDailyLimit?: true
    lossWeeklyLimit?: true
    lossMonthlyLimit?: true
    sessionTimeLimitMin?: true
    stakePerBetMax?: true
    stakePerBetMin?: true
    withdrawalDailyLimit?: true
    withdrawalMonthlyLimit?: true
    kycLevelApplied?: true
  }

  export type UserLimitsMinAggregateInputType = {
    userId?: true
    depositDailyLimit?: true
    depositWeeklyLimit?: true
    depositMonthlyLimit?: true
    wagerDailyLimit?: true
    wagerWeeklyLimit?: true
    wagerMonthlyLimit?: true
    lossDailyLimit?: true
    lossWeeklyLimit?: true
    lossMonthlyLimit?: true
    sessionTimeLimitMin?: true
    stakePerBetMax?: true
    stakePerBetMin?: true
    withdrawalDailyLimit?: true
    withdrawalMonthlyLimit?: true
    kycLevelApplied?: true
    deletedAt?: true
  }

  export type UserLimitsMaxAggregateInputType = {
    userId?: true
    depositDailyLimit?: true
    depositWeeklyLimit?: true
    depositMonthlyLimit?: true
    wagerDailyLimit?: true
    wagerWeeklyLimit?: true
    wagerMonthlyLimit?: true
    lossDailyLimit?: true
    lossWeeklyLimit?: true
    lossMonthlyLimit?: true
    sessionTimeLimitMin?: true
    stakePerBetMax?: true
    stakePerBetMin?: true
    withdrawalDailyLimit?: true
    withdrawalMonthlyLimit?: true
    kycLevelApplied?: true
    deletedAt?: true
  }

  export type UserLimitsCountAggregateInputType = {
    userId?: true
    depositDailyLimit?: true
    depositWeeklyLimit?: true
    depositMonthlyLimit?: true
    wagerDailyLimit?: true
    wagerWeeklyLimit?: true
    wagerMonthlyLimit?: true
    lossDailyLimit?: true
    lossWeeklyLimit?: true
    lossMonthlyLimit?: true
    sessionTimeLimitMin?: true
    stakePerBetMax?: true
    stakePerBetMin?: true
    withdrawalDailyLimit?: true
    withdrawalMonthlyLimit?: true
    kycLevelApplied?: true
    deletedAt?: true
    _all?: true
  }

  export type UserLimitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLimits to aggregate.
     */
    where?: UserLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLimits to fetch.
     */
    orderBy?: UserLimitsOrderByWithRelationInput | UserLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLimits
    **/
    _count?: true | UserLimitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLimitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLimitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLimitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLimitsMaxAggregateInputType
  }

  export type GetUserLimitsAggregateType<T extends UserLimitsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLimits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLimits[P]>
      : GetScalarType<T[P], AggregateUserLimits[P]>
  }




  export type UserLimitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLimitsWhereInput
    orderBy?: UserLimitsOrderByWithAggregationInput | UserLimitsOrderByWithAggregationInput[]
    by: UserLimitsScalarFieldEnum[] | UserLimitsScalarFieldEnum
    having?: UserLimitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLimitsCountAggregateInputType | true
    _avg?: UserLimitsAvgAggregateInputType
    _sum?: UserLimitsSumAggregateInputType
    _min?: UserLimitsMinAggregateInputType
    _max?: UserLimitsMaxAggregateInputType
  }

  export type UserLimitsGroupByOutputType = {
    userId: string
    depositDailyLimit: number | null
    depositWeeklyLimit: number | null
    depositMonthlyLimit: number | null
    wagerDailyLimit: number | null
    wagerWeeklyLimit: number | null
    wagerMonthlyLimit: number | null
    lossDailyLimit: number | null
    lossWeeklyLimit: number | null
    lossMonthlyLimit: number | null
    sessionTimeLimitMin: number | null
    stakePerBetMax: number | null
    stakePerBetMin: number
    withdrawalDailyLimit: number | null
    withdrawalMonthlyLimit: number | null
    kycLevelApplied: number
    deletedAt: Date | null
    _count: UserLimitsCountAggregateOutputType | null
    _avg: UserLimitsAvgAggregateOutputType | null
    _sum: UserLimitsSumAggregateOutputType | null
    _min: UserLimitsMinAggregateOutputType | null
    _max: UserLimitsMaxAggregateOutputType | null
  }

  type GetUserLimitsGroupByPayload<T extends UserLimitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLimitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLimitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLimitsGroupByOutputType[P]>
            : GetScalarType<T[P], UserLimitsGroupByOutputType[P]>
        }
      >
    >


  export type UserLimitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    depositDailyLimit?: boolean
    depositWeeklyLimit?: boolean
    depositMonthlyLimit?: boolean
    wagerDailyLimit?: boolean
    wagerWeeklyLimit?: boolean
    wagerMonthlyLimit?: boolean
    lossDailyLimit?: boolean
    lossWeeklyLimit?: boolean
    lossMonthlyLimit?: boolean
    sessionTimeLimitMin?: boolean
    stakePerBetMax?: boolean
    stakePerBetMin?: boolean
    withdrawalDailyLimit?: boolean
    withdrawalMonthlyLimit?: boolean
    kycLevelApplied?: boolean
    deletedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLimits"]>

  export type UserLimitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    depositDailyLimit?: boolean
    depositWeeklyLimit?: boolean
    depositMonthlyLimit?: boolean
    wagerDailyLimit?: boolean
    wagerWeeklyLimit?: boolean
    wagerMonthlyLimit?: boolean
    lossDailyLimit?: boolean
    lossWeeklyLimit?: boolean
    lossMonthlyLimit?: boolean
    sessionTimeLimitMin?: boolean
    stakePerBetMax?: boolean
    stakePerBetMin?: boolean
    withdrawalDailyLimit?: boolean
    withdrawalMonthlyLimit?: boolean
    kycLevelApplied?: boolean
    deletedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLimits"]>

  export type UserLimitsSelectScalar = {
    userId?: boolean
    depositDailyLimit?: boolean
    depositWeeklyLimit?: boolean
    depositMonthlyLimit?: boolean
    wagerDailyLimit?: boolean
    wagerWeeklyLimit?: boolean
    wagerMonthlyLimit?: boolean
    lossDailyLimit?: boolean
    lossWeeklyLimit?: boolean
    lossMonthlyLimit?: boolean
    sessionTimeLimitMin?: boolean
    stakePerBetMax?: boolean
    stakePerBetMin?: boolean
    withdrawalDailyLimit?: boolean
    withdrawalMonthlyLimit?: boolean
    kycLevelApplied?: boolean
    deletedAt?: boolean
  }

  export type UserLimitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type UserLimitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $UserLimitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLimits"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      depositDailyLimit: number | null
      depositWeeklyLimit: number | null
      depositMonthlyLimit: number | null
      wagerDailyLimit: number | null
      wagerWeeklyLimit: number | null
      wagerMonthlyLimit: number | null
      lossDailyLimit: number | null
      lossWeeklyLimit: number | null
      lossMonthlyLimit: number | null
      sessionTimeLimitMin: number | null
      stakePerBetMax: number | null
      stakePerBetMin: number
      withdrawalDailyLimit: number | null
      withdrawalMonthlyLimit: number | null
      kycLevelApplied: number
      deletedAt: Date | null
    }, ExtArgs["result"]["userLimits"]>
    composites: {}
  }

  type UserLimitsGetPayload<S extends boolean | null | undefined | UserLimitsDefaultArgs> = $Result.GetResult<Prisma.$UserLimitsPayload, S>

  type UserLimitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLimitsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLimitsCountAggregateInputType | true
    }

  export interface UserLimitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLimits'], meta: { name: 'UserLimits' } }
    /**
     * Find zero or one UserLimits that matches the filter.
     * @param {UserLimitsFindUniqueArgs} args - Arguments to find a UserLimits
     * @example
     * // Get one UserLimits
     * const userLimits = await prisma.userLimits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLimitsFindUniqueArgs>(args: SelectSubset<T, UserLimitsFindUniqueArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLimits that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLimitsFindUniqueOrThrowArgs} args - Arguments to find a UserLimits
     * @example
     * // Get one UserLimits
     * const userLimits = await prisma.userLimits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLimitsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLimitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsFindFirstArgs} args - Arguments to find a UserLimits
     * @example
     * // Get one UserLimits
     * const userLimits = await prisma.userLimits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLimitsFindFirstArgs>(args?: SelectSubset<T, UserLimitsFindFirstArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLimits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsFindFirstOrThrowArgs} args - Arguments to find a UserLimits
     * @example
     * // Get one UserLimits
     * const userLimits = await prisma.userLimits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLimitsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLimitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLimits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLimits
     * const userLimits = await prisma.userLimits.findMany()
     * 
     * // Get first 10 UserLimits
     * const userLimits = await prisma.userLimits.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userLimitsWithUserIdOnly = await prisma.userLimits.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserLimitsFindManyArgs>(args?: SelectSubset<T, UserLimitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLimits.
     * @param {UserLimitsCreateArgs} args - Arguments to create a UserLimits.
     * @example
     * // Create one UserLimits
     * const UserLimits = await prisma.userLimits.create({
     *   data: {
     *     // ... data to create a UserLimits
     *   }
     * })
     * 
     */
    create<T extends UserLimitsCreateArgs>(args: SelectSubset<T, UserLimitsCreateArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLimits.
     * @param {UserLimitsCreateManyArgs} args - Arguments to create many UserLimits.
     * @example
     * // Create many UserLimits
     * const userLimits = await prisma.userLimits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLimitsCreateManyArgs>(args?: SelectSubset<T, UserLimitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLimits and returns the data saved in the database.
     * @param {UserLimitsCreateManyAndReturnArgs} args - Arguments to create many UserLimits.
     * @example
     * // Create many UserLimits
     * const userLimits = await prisma.userLimits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLimits and only return the `userId`
     * const userLimitsWithUserIdOnly = await prisma.userLimits.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLimitsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLimitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLimits.
     * @param {UserLimitsDeleteArgs} args - Arguments to delete one UserLimits.
     * @example
     * // Delete one UserLimits
     * const UserLimits = await prisma.userLimits.delete({
     *   where: {
     *     // ... filter to delete one UserLimits
     *   }
     * })
     * 
     */
    delete<T extends UserLimitsDeleteArgs>(args: SelectSubset<T, UserLimitsDeleteArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLimits.
     * @param {UserLimitsUpdateArgs} args - Arguments to update one UserLimits.
     * @example
     * // Update one UserLimits
     * const userLimits = await prisma.userLimits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLimitsUpdateArgs>(args: SelectSubset<T, UserLimitsUpdateArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLimits.
     * @param {UserLimitsDeleteManyArgs} args - Arguments to filter UserLimits to delete.
     * @example
     * // Delete a few UserLimits
     * const { count } = await prisma.userLimits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLimitsDeleteManyArgs>(args?: SelectSubset<T, UserLimitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLimits
     * const userLimits = await prisma.userLimits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLimitsUpdateManyArgs>(args: SelectSubset<T, UserLimitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLimits.
     * @param {UserLimitsUpsertArgs} args - Arguments to update or create a UserLimits.
     * @example
     * // Update or create a UserLimits
     * const userLimits = await prisma.userLimits.upsert({
     *   create: {
     *     // ... data to create a UserLimits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLimits we want to update
     *   }
     * })
     */
    upsert<T extends UserLimitsUpsertArgs>(args: SelectSubset<T, UserLimitsUpsertArgs<ExtArgs>>): Prisma__UserLimitsClient<$Result.GetResult<Prisma.$UserLimitsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsCountArgs} args - Arguments to filter UserLimits to count.
     * @example
     * // Count the number of UserLimits
     * const count = await prisma.userLimits.count({
     *   where: {
     *     // ... the filter for the UserLimits we want to count
     *   }
     * })
    **/
    count<T extends UserLimitsCountArgs>(
      args?: Subset<T, UserLimitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLimitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLimitsAggregateArgs>(args: Subset<T, UserLimitsAggregateArgs>): Prisma.PrismaPromise<GetUserLimitsAggregateType<T>>

    /**
     * Group by UserLimits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLimitsGroupByArgs} args - Group by arguments.
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
      T extends UserLimitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLimitsGroupByArgs['orderBy'] }
        : { orderBy?: UserLimitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLimitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLimitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLimits model
   */
  readonly fields: UserLimitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLimits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLimitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserLimits model
   */ 
  interface UserLimitsFieldRefs {
    readonly userId: FieldRef<"UserLimits", 'String'>
    readonly depositDailyLimit: FieldRef<"UserLimits", 'Float'>
    readonly depositWeeklyLimit: FieldRef<"UserLimits", 'Float'>
    readonly depositMonthlyLimit: FieldRef<"UserLimits", 'Float'>
    readonly wagerDailyLimit: FieldRef<"UserLimits", 'Float'>
    readonly wagerWeeklyLimit: FieldRef<"UserLimits", 'Float'>
    readonly wagerMonthlyLimit: FieldRef<"UserLimits", 'Float'>
    readonly lossDailyLimit: FieldRef<"UserLimits", 'Float'>
    readonly lossWeeklyLimit: FieldRef<"UserLimits", 'Float'>
    readonly lossMonthlyLimit: FieldRef<"UserLimits", 'Float'>
    readonly sessionTimeLimitMin: FieldRef<"UserLimits", 'Int'>
    readonly stakePerBetMax: FieldRef<"UserLimits", 'Float'>
    readonly stakePerBetMin: FieldRef<"UserLimits", 'Float'>
    readonly withdrawalDailyLimit: FieldRef<"UserLimits", 'Float'>
    readonly withdrawalMonthlyLimit: FieldRef<"UserLimits", 'Float'>
    readonly kycLevelApplied: FieldRef<"UserLimits", 'Int'>
    readonly deletedAt: FieldRef<"UserLimits", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLimits findUnique
   */
  export type UserLimitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter, which UserLimits to fetch.
     */
    where: UserLimitsWhereUniqueInput
  }

  /**
   * UserLimits findUniqueOrThrow
   */
  export type UserLimitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter, which UserLimits to fetch.
     */
    where: UserLimitsWhereUniqueInput
  }

  /**
   * UserLimits findFirst
   */
  export type UserLimitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter, which UserLimits to fetch.
     */
    where?: UserLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLimits to fetch.
     */
    orderBy?: UserLimitsOrderByWithRelationInput | UserLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLimits.
     */
    cursor?: UserLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLimits.
     */
    distinct?: UserLimitsScalarFieldEnum | UserLimitsScalarFieldEnum[]
  }

  /**
   * UserLimits findFirstOrThrow
   */
  export type UserLimitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter, which UserLimits to fetch.
     */
    where?: UserLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLimits to fetch.
     */
    orderBy?: UserLimitsOrderByWithRelationInput | UserLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLimits.
     */
    cursor?: UserLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLimits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLimits.
     */
    distinct?: UserLimitsScalarFieldEnum | UserLimitsScalarFieldEnum[]
  }

  /**
   * UserLimits findMany
   */
  export type UserLimitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter, which UserLimits to fetch.
     */
    where?: UserLimitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLimits to fetch.
     */
    orderBy?: UserLimitsOrderByWithRelationInput | UserLimitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLimits.
     */
    cursor?: UserLimitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLimits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLimits.
     */
    skip?: number
    distinct?: UserLimitsScalarFieldEnum | UserLimitsScalarFieldEnum[]
  }

  /**
   * UserLimits create
   */
  export type UserLimitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLimits.
     */
    data: XOR<UserLimitsCreateInput, UserLimitsUncheckedCreateInput>
  }

  /**
   * UserLimits createMany
   */
  export type UserLimitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLimits.
     */
    data: UserLimitsCreateManyInput | UserLimitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLimits createManyAndReturn
   */
  export type UserLimitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLimits.
     */
    data: UserLimitsCreateManyInput | UserLimitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLimits update
   */
  export type UserLimitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLimits.
     */
    data: XOR<UserLimitsUpdateInput, UserLimitsUncheckedUpdateInput>
    /**
     * Choose, which UserLimits to update.
     */
    where: UserLimitsWhereUniqueInput
  }

  /**
   * UserLimits updateMany
   */
  export type UserLimitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLimits.
     */
    data: XOR<UserLimitsUpdateManyMutationInput, UserLimitsUncheckedUpdateManyInput>
    /**
     * Filter which UserLimits to update
     */
    where?: UserLimitsWhereInput
  }

  /**
   * UserLimits upsert
   */
  export type UserLimitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLimits to update in case it exists.
     */
    where: UserLimitsWhereUniqueInput
    /**
     * In case the UserLimits found by the `where` argument doesn't exist, create a new UserLimits with this data.
     */
    create: XOR<UserLimitsCreateInput, UserLimitsUncheckedCreateInput>
    /**
     * In case the UserLimits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLimitsUpdateInput, UserLimitsUncheckedUpdateInput>
  }

  /**
   * UserLimits delete
   */
  export type UserLimitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
    /**
     * Filter which UserLimits to delete.
     */
    where: UserLimitsWhereUniqueInput
  }

  /**
   * UserLimits deleteMany
   */
  export type UserLimitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLimits to delete
     */
    where?: UserLimitsWhereInput
  }

  /**
   * UserLimits without action
   */
  export type UserLimitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLimits
     */
    select?: UserLimitsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLimitsInclude<ExtArgs> | null
  }


  /**
   * Model SelfExclusionRecord
   */

  export type AggregateSelfExclusionRecord = {
    _count: SelfExclusionRecordCountAggregateOutputType | null
    _min: SelfExclusionRecordMinAggregateOutputType | null
    _max: SelfExclusionRecordMaxAggregateOutputType | null
  }

  export type SelfExclusionRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: $Enums.SelfExcludeDuration | null
    startedAt: Date | null
    endsAt: Date | null
    reason: string | null
    revokedAt: Date | null
    revokedBy: string | null
    isActive: boolean | null
  }

  export type SelfExclusionRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: $Enums.SelfExcludeDuration | null
    startedAt: Date | null
    endsAt: Date | null
    reason: string | null
    revokedAt: Date | null
    revokedBy: string | null
    isActive: boolean | null
  }

  export type SelfExclusionRecordCountAggregateOutputType = {
    id: number
    userId: number
    duration: number
    startedAt: number
    endsAt: number
    reason: number
    revokedAt: number
    revokedBy: number
    isActive: number
    _all: number
  }


  export type SelfExclusionRecordMinAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startedAt?: true
    endsAt?: true
    reason?: true
    revokedAt?: true
    revokedBy?: true
    isActive?: true
  }

  export type SelfExclusionRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startedAt?: true
    endsAt?: true
    reason?: true
    revokedAt?: true
    revokedBy?: true
    isActive?: true
  }

  export type SelfExclusionRecordCountAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startedAt?: true
    endsAt?: true
    reason?: true
    revokedAt?: true
    revokedBy?: true
    isActive?: true
    _all?: true
  }

  export type SelfExclusionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelfExclusionRecord to aggregate.
     */
    where?: SelfExclusionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelfExclusionRecords to fetch.
     */
    orderBy?: SelfExclusionRecordOrderByWithRelationInput | SelfExclusionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SelfExclusionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelfExclusionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelfExclusionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SelfExclusionRecords
    **/
    _count?: true | SelfExclusionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SelfExclusionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SelfExclusionRecordMaxAggregateInputType
  }

  export type GetSelfExclusionRecordAggregateType<T extends SelfExclusionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSelfExclusionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSelfExclusionRecord[P]>
      : GetScalarType<T[P], AggregateSelfExclusionRecord[P]>
  }




  export type SelfExclusionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SelfExclusionRecordWhereInput
    orderBy?: SelfExclusionRecordOrderByWithAggregationInput | SelfExclusionRecordOrderByWithAggregationInput[]
    by: SelfExclusionRecordScalarFieldEnum[] | SelfExclusionRecordScalarFieldEnum
    having?: SelfExclusionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SelfExclusionRecordCountAggregateInputType | true
    _min?: SelfExclusionRecordMinAggregateInputType
    _max?: SelfExclusionRecordMaxAggregateInputType
  }

  export type SelfExclusionRecordGroupByOutputType = {
    id: string
    userId: string
    duration: $Enums.SelfExcludeDuration
    startedAt: Date
    endsAt: Date | null
    reason: string | null
    revokedAt: Date | null
    revokedBy: string | null
    isActive: boolean
    _count: SelfExclusionRecordCountAggregateOutputType | null
    _min: SelfExclusionRecordMinAggregateOutputType | null
    _max: SelfExclusionRecordMaxAggregateOutputType | null
  }

  type GetSelfExclusionRecordGroupByPayload<T extends SelfExclusionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SelfExclusionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SelfExclusionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SelfExclusionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SelfExclusionRecordGroupByOutputType[P]>
        }
      >
    >


  export type SelfExclusionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    startedAt?: boolean
    endsAt?: boolean
    reason?: boolean
    revokedAt?: boolean
    revokedBy?: boolean
    isActive?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selfExclusionRecord"]>

  export type SelfExclusionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    startedAt?: boolean
    endsAt?: boolean
    reason?: boolean
    revokedAt?: boolean
    revokedBy?: boolean
    isActive?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["selfExclusionRecord"]>

  export type SelfExclusionRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    duration?: boolean
    startedAt?: boolean
    endsAt?: boolean
    reason?: boolean
    revokedAt?: boolean
    revokedBy?: boolean
    isActive?: boolean
  }

  export type SelfExclusionRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type SelfExclusionRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $SelfExclusionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SelfExclusionRecord"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      duration: $Enums.SelfExcludeDuration
      startedAt: Date
      endsAt: Date | null
      reason: string | null
      revokedAt: Date | null
      revokedBy: string | null
      isActive: boolean
    }, ExtArgs["result"]["selfExclusionRecord"]>
    composites: {}
  }

  type SelfExclusionRecordGetPayload<S extends boolean | null | undefined | SelfExclusionRecordDefaultArgs> = $Result.GetResult<Prisma.$SelfExclusionRecordPayload, S>

  type SelfExclusionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SelfExclusionRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SelfExclusionRecordCountAggregateInputType | true
    }

  export interface SelfExclusionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SelfExclusionRecord'], meta: { name: 'SelfExclusionRecord' } }
    /**
     * Find zero or one SelfExclusionRecord that matches the filter.
     * @param {SelfExclusionRecordFindUniqueArgs} args - Arguments to find a SelfExclusionRecord
     * @example
     * // Get one SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SelfExclusionRecordFindUniqueArgs>(args: SelectSubset<T, SelfExclusionRecordFindUniqueArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SelfExclusionRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SelfExclusionRecordFindUniqueOrThrowArgs} args - Arguments to find a SelfExclusionRecord
     * @example
     * // Get one SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SelfExclusionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SelfExclusionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SelfExclusionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordFindFirstArgs} args - Arguments to find a SelfExclusionRecord
     * @example
     * // Get one SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SelfExclusionRecordFindFirstArgs>(args?: SelectSubset<T, SelfExclusionRecordFindFirstArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SelfExclusionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordFindFirstOrThrowArgs} args - Arguments to find a SelfExclusionRecord
     * @example
     * // Get one SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SelfExclusionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SelfExclusionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SelfExclusionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SelfExclusionRecords
     * const selfExclusionRecords = await prisma.selfExclusionRecord.findMany()
     * 
     * // Get first 10 SelfExclusionRecords
     * const selfExclusionRecords = await prisma.selfExclusionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const selfExclusionRecordWithIdOnly = await prisma.selfExclusionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SelfExclusionRecordFindManyArgs>(args?: SelectSubset<T, SelfExclusionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SelfExclusionRecord.
     * @param {SelfExclusionRecordCreateArgs} args - Arguments to create a SelfExclusionRecord.
     * @example
     * // Create one SelfExclusionRecord
     * const SelfExclusionRecord = await prisma.selfExclusionRecord.create({
     *   data: {
     *     // ... data to create a SelfExclusionRecord
     *   }
     * })
     * 
     */
    create<T extends SelfExclusionRecordCreateArgs>(args: SelectSubset<T, SelfExclusionRecordCreateArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SelfExclusionRecords.
     * @param {SelfExclusionRecordCreateManyArgs} args - Arguments to create many SelfExclusionRecords.
     * @example
     * // Create many SelfExclusionRecords
     * const selfExclusionRecord = await prisma.selfExclusionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SelfExclusionRecordCreateManyArgs>(args?: SelectSubset<T, SelfExclusionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SelfExclusionRecords and returns the data saved in the database.
     * @param {SelfExclusionRecordCreateManyAndReturnArgs} args - Arguments to create many SelfExclusionRecords.
     * @example
     * // Create many SelfExclusionRecords
     * const selfExclusionRecord = await prisma.selfExclusionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SelfExclusionRecords and only return the `id`
     * const selfExclusionRecordWithIdOnly = await prisma.selfExclusionRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SelfExclusionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SelfExclusionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SelfExclusionRecord.
     * @param {SelfExclusionRecordDeleteArgs} args - Arguments to delete one SelfExclusionRecord.
     * @example
     * // Delete one SelfExclusionRecord
     * const SelfExclusionRecord = await prisma.selfExclusionRecord.delete({
     *   where: {
     *     // ... filter to delete one SelfExclusionRecord
     *   }
     * })
     * 
     */
    delete<T extends SelfExclusionRecordDeleteArgs>(args: SelectSubset<T, SelfExclusionRecordDeleteArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SelfExclusionRecord.
     * @param {SelfExclusionRecordUpdateArgs} args - Arguments to update one SelfExclusionRecord.
     * @example
     * // Update one SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SelfExclusionRecordUpdateArgs>(args: SelectSubset<T, SelfExclusionRecordUpdateArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SelfExclusionRecords.
     * @param {SelfExclusionRecordDeleteManyArgs} args - Arguments to filter SelfExclusionRecords to delete.
     * @example
     * // Delete a few SelfExclusionRecords
     * const { count } = await prisma.selfExclusionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SelfExclusionRecordDeleteManyArgs>(args?: SelectSubset<T, SelfExclusionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SelfExclusionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SelfExclusionRecords
     * const selfExclusionRecord = await prisma.selfExclusionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SelfExclusionRecordUpdateManyArgs>(args: SelectSubset<T, SelfExclusionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SelfExclusionRecord.
     * @param {SelfExclusionRecordUpsertArgs} args - Arguments to update or create a SelfExclusionRecord.
     * @example
     * // Update or create a SelfExclusionRecord
     * const selfExclusionRecord = await prisma.selfExclusionRecord.upsert({
     *   create: {
     *     // ... data to create a SelfExclusionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SelfExclusionRecord we want to update
     *   }
     * })
     */
    upsert<T extends SelfExclusionRecordUpsertArgs>(args: SelectSubset<T, SelfExclusionRecordUpsertArgs<ExtArgs>>): Prisma__SelfExclusionRecordClient<$Result.GetResult<Prisma.$SelfExclusionRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SelfExclusionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordCountArgs} args - Arguments to filter SelfExclusionRecords to count.
     * @example
     * // Count the number of SelfExclusionRecords
     * const count = await prisma.selfExclusionRecord.count({
     *   where: {
     *     // ... the filter for the SelfExclusionRecords we want to count
     *   }
     * })
    **/
    count<T extends SelfExclusionRecordCountArgs>(
      args?: Subset<T, SelfExclusionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SelfExclusionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SelfExclusionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SelfExclusionRecordAggregateArgs>(args: Subset<T, SelfExclusionRecordAggregateArgs>): Prisma.PrismaPromise<GetSelfExclusionRecordAggregateType<T>>

    /**
     * Group by SelfExclusionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SelfExclusionRecordGroupByArgs} args - Group by arguments.
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
      T extends SelfExclusionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SelfExclusionRecordGroupByArgs['orderBy'] }
        : { orderBy?: SelfExclusionRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SelfExclusionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelfExclusionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SelfExclusionRecord model
   */
  readonly fields: SelfExclusionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SelfExclusionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SelfExclusionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SelfExclusionRecord model
   */ 
  interface SelfExclusionRecordFieldRefs {
    readonly id: FieldRef<"SelfExclusionRecord", 'String'>
    readonly userId: FieldRef<"SelfExclusionRecord", 'String'>
    readonly duration: FieldRef<"SelfExclusionRecord", 'SelfExcludeDuration'>
    readonly startedAt: FieldRef<"SelfExclusionRecord", 'DateTime'>
    readonly endsAt: FieldRef<"SelfExclusionRecord", 'DateTime'>
    readonly reason: FieldRef<"SelfExclusionRecord", 'String'>
    readonly revokedAt: FieldRef<"SelfExclusionRecord", 'DateTime'>
    readonly revokedBy: FieldRef<"SelfExclusionRecord", 'String'>
    readonly isActive: FieldRef<"SelfExclusionRecord", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SelfExclusionRecord findUnique
   */
  export type SelfExclusionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter, which SelfExclusionRecord to fetch.
     */
    where: SelfExclusionRecordWhereUniqueInput
  }

  /**
   * SelfExclusionRecord findUniqueOrThrow
   */
  export type SelfExclusionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter, which SelfExclusionRecord to fetch.
     */
    where: SelfExclusionRecordWhereUniqueInput
  }

  /**
   * SelfExclusionRecord findFirst
   */
  export type SelfExclusionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter, which SelfExclusionRecord to fetch.
     */
    where?: SelfExclusionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelfExclusionRecords to fetch.
     */
    orderBy?: SelfExclusionRecordOrderByWithRelationInput | SelfExclusionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelfExclusionRecords.
     */
    cursor?: SelfExclusionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelfExclusionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelfExclusionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelfExclusionRecords.
     */
    distinct?: SelfExclusionRecordScalarFieldEnum | SelfExclusionRecordScalarFieldEnum[]
  }

  /**
   * SelfExclusionRecord findFirstOrThrow
   */
  export type SelfExclusionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter, which SelfExclusionRecord to fetch.
     */
    where?: SelfExclusionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelfExclusionRecords to fetch.
     */
    orderBy?: SelfExclusionRecordOrderByWithRelationInput | SelfExclusionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SelfExclusionRecords.
     */
    cursor?: SelfExclusionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelfExclusionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelfExclusionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SelfExclusionRecords.
     */
    distinct?: SelfExclusionRecordScalarFieldEnum | SelfExclusionRecordScalarFieldEnum[]
  }

  /**
   * SelfExclusionRecord findMany
   */
  export type SelfExclusionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter, which SelfExclusionRecords to fetch.
     */
    where?: SelfExclusionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SelfExclusionRecords to fetch.
     */
    orderBy?: SelfExclusionRecordOrderByWithRelationInput | SelfExclusionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SelfExclusionRecords.
     */
    cursor?: SelfExclusionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SelfExclusionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SelfExclusionRecords.
     */
    skip?: number
    distinct?: SelfExclusionRecordScalarFieldEnum | SelfExclusionRecordScalarFieldEnum[]
  }

  /**
   * SelfExclusionRecord create
   */
  export type SelfExclusionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SelfExclusionRecord.
     */
    data: XOR<SelfExclusionRecordCreateInput, SelfExclusionRecordUncheckedCreateInput>
  }

  /**
   * SelfExclusionRecord createMany
   */
  export type SelfExclusionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SelfExclusionRecords.
     */
    data: SelfExclusionRecordCreateManyInput | SelfExclusionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SelfExclusionRecord createManyAndReturn
   */
  export type SelfExclusionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SelfExclusionRecords.
     */
    data: SelfExclusionRecordCreateManyInput | SelfExclusionRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SelfExclusionRecord update
   */
  export type SelfExclusionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SelfExclusionRecord.
     */
    data: XOR<SelfExclusionRecordUpdateInput, SelfExclusionRecordUncheckedUpdateInput>
    /**
     * Choose, which SelfExclusionRecord to update.
     */
    where: SelfExclusionRecordWhereUniqueInput
  }

  /**
   * SelfExclusionRecord updateMany
   */
  export type SelfExclusionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SelfExclusionRecords.
     */
    data: XOR<SelfExclusionRecordUpdateManyMutationInput, SelfExclusionRecordUncheckedUpdateManyInput>
    /**
     * Filter which SelfExclusionRecords to update
     */
    where?: SelfExclusionRecordWhereInput
  }

  /**
   * SelfExclusionRecord upsert
   */
  export type SelfExclusionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SelfExclusionRecord to update in case it exists.
     */
    where: SelfExclusionRecordWhereUniqueInput
    /**
     * In case the SelfExclusionRecord found by the `where` argument doesn't exist, create a new SelfExclusionRecord with this data.
     */
    create: XOR<SelfExclusionRecordCreateInput, SelfExclusionRecordUncheckedCreateInput>
    /**
     * In case the SelfExclusionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SelfExclusionRecordUpdateInput, SelfExclusionRecordUncheckedUpdateInput>
  }

  /**
   * SelfExclusionRecord delete
   */
  export type SelfExclusionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
    /**
     * Filter which SelfExclusionRecord to delete.
     */
    where: SelfExclusionRecordWhereUniqueInput
  }

  /**
   * SelfExclusionRecord deleteMany
   */
  export type SelfExclusionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SelfExclusionRecords to delete
     */
    where?: SelfExclusionRecordWhereInput
  }

  /**
   * SelfExclusionRecord without action
   */
  export type SelfExclusionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SelfExclusionRecord
     */
    select?: SelfExclusionRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SelfExclusionRecordInclude<ExtArgs> | null
  }


  /**
   * Model RealityCheckLog
   */

  export type AggregateRealityCheckLog = {
    _count: RealityCheckLogCountAggregateOutputType | null
    _avg: RealityCheckLogAvgAggregateOutputType | null
    _sum: RealityCheckLogSumAggregateOutputType | null
    _min: RealityCheckLogMinAggregateOutputType | null
    _max: RealityCheckLogMaxAggregateOutputType | null
  }

  export type RealityCheckLogAvgAggregateOutputType = {
    wageredDuringSession: number | null
    won: number | null
    lost: number | null
    net: number | null
  }

  export type RealityCheckLogSumAggregateOutputType = {
    wageredDuringSession: number | null
    won: number | null
    lost: number | null
    net: number | null
  }

  export type RealityCheckLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    sessionStartAt: Date | null
    checkAt: Date | null
    acknowledgedAt: Date | null
    continuePlay: boolean | null
    wageredDuringSession: number | null
    won: number | null
    lost: number | null
    net: number | null
  }

  export type RealityCheckLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    sessionStartAt: Date | null
    checkAt: Date | null
    acknowledgedAt: Date | null
    continuePlay: boolean | null
    wageredDuringSession: number | null
    won: number | null
    lost: number | null
    net: number | null
  }

  export type RealityCheckLogCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    sessionStartAt: number
    checkAt: number
    acknowledgedAt: number
    continuePlay: number
    wageredDuringSession: number
    won: number
    lost: number
    net: number
    _all: number
  }


  export type RealityCheckLogAvgAggregateInputType = {
    wageredDuringSession?: true
    won?: true
    lost?: true
    net?: true
  }

  export type RealityCheckLogSumAggregateInputType = {
    wageredDuringSession?: true
    won?: true
    lost?: true
    net?: true
  }

  export type RealityCheckLogMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    sessionStartAt?: true
    checkAt?: true
    acknowledgedAt?: true
    continuePlay?: true
    wageredDuringSession?: true
    won?: true
    lost?: true
    net?: true
  }

  export type RealityCheckLogMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    sessionStartAt?: true
    checkAt?: true
    acknowledgedAt?: true
    continuePlay?: true
    wageredDuringSession?: true
    won?: true
    lost?: true
    net?: true
  }

  export type RealityCheckLogCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    sessionStartAt?: true
    checkAt?: true
    acknowledgedAt?: true
    continuePlay?: true
    wageredDuringSession?: true
    won?: true
    lost?: true
    net?: true
    _all?: true
  }

  export type RealityCheckLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealityCheckLog to aggregate.
     */
    where?: RealityCheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealityCheckLogs to fetch.
     */
    orderBy?: RealityCheckLogOrderByWithRelationInput | RealityCheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealityCheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealityCheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealityCheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealityCheckLogs
    **/
    _count?: true | RealityCheckLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealityCheckLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealityCheckLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealityCheckLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealityCheckLogMaxAggregateInputType
  }

  export type GetRealityCheckLogAggregateType<T extends RealityCheckLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRealityCheckLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealityCheckLog[P]>
      : GetScalarType<T[P], AggregateRealityCheckLog[P]>
  }




  export type RealityCheckLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealityCheckLogWhereInput
    orderBy?: RealityCheckLogOrderByWithAggregationInput | RealityCheckLogOrderByWithAggregationInput[]
    by: RealityCheckLogScalarFieldEnum[] | RealityCheckLogScalarFieldEnum
    having?: RealityCheckLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealityCheckLogCountAggregateInputType | true
    _avg?: RealityCheckLogAvgAggregateInputType
    _sum?: RealityCheckLogSumAggregateInputType
    _min?: RealityCheckLogMinAggregateInputType
    _max?: RealityCheckLogMaxAggregateInputType
  }

  export type RealityCheckLogGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    sessionStartAt: Date
    checkAt: Date
    acknowledgedAt: Date | null
    continuePlay: boolean | null
    wageredDuringSession: number
    won: number
    lost: number
    net: number
    _count: RealityCheckLogCountAggregateOutputType | null
    _avg: RealityCheckLogAvgAggregateOutputType | null
    _sum: RealityCheckLogSumAggregateOutputType | null
    _min: RealityCheckLogMinAggregateOutputType | null
    _max: RealityCheckLogMaxAggregateOutputType | null
  }

  type GetRealityCheckLogGroupByPayload<T extends RealityCheckLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealityCheckLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealityCheckLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealityCheckLogGroupByOutputType[P]>
            : GetScalarType<T[P], RealityCheckLogGroupByOutputType[P]>
        }
      >
    >


  export type RealityCheckLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    sessionStartAt?: boolean
    checkAt?: boolean
    acknowledgedAt?: boolean
    continuePlay?: boolean
    wageredDuringSession?: boolean
    won?: boolean
    lost?: boolean
    net?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realityCheckLog"]>

  export type RealityCheckLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    sessionStartAt?: boolean
    checkAt?: boolean
    acknowledgedAt?: boolean
    continuePlay?: boolean
    wageredDuringSession?: boolean
    won?: boolean
    lost?: boolean
    net?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realityCheckLog"]>

  export type RealityCheckLogSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    sessionStartAt?: boolean
    checkAt?: boolean
    acknowledgedAt?: boolean
    continuePlay?: boolean
    wageredDuringSession?: boolean
    won?: boolean
    lost?: boolean
    net?: boolean
  }

  export type RealityCheckLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type RealityCheckLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $RealityCheckLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RealityCheckLog"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string
      sessionStartAt: Date
      checkAt: Date
      acknowledgedAt: Date | null
      continuePlay: boolean | null
      wageredDuringSession: number
      won: number
      lost: number
      net: number
    }, ExtArgs["result"]["realityCheckLog"]>
    composites: {}
  }

  type RealityCheckLogGetPayload<S extends boolean | null | undefined | RealityCheckLogDefaultArgs> = $Result.GetResult<Prisma.$RealityCheckLogPayload, S>

  type RealityCheckLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RealityCheckLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RealityCheckLogCountAggregateInputType | true
    }

  export interface RealityCheckLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RealityCheckLog'], meta: { name: 'RealityCheckLog' } }
    /**
     * Find zero or one RealityCheckLog that matches the filter.
     * @param {RealityCheckLogFindUniqueArgs} args - Arguments to find a RealityCheckLog
     * @example
     * // Get one RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealityCheckLogFindUniqueArgs>(args: SelectSubset<T, RealityCheckLogFindUniqueArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RealityCheckLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RealityCheckLogFindUniqueOrThrowArgs} args - Arguments to find a RealityCheckLog
     * @example
     * // Get one RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealityCheckLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RealityCheckLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RealityCheckLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogFindFirstArgs} args - Arguments to find a RealityCheckLog
     * @example
     * // Get one RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealityCheckLogFindFirstArgs>(args?: SelectSubset<T, RealityCheckLogFindFirstArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RealityCheckLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogFindFirstOrThrowArgs} args - Arguments to find a RealityCheckLog
     * @example
     * // Get one RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealityCheckLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RealityCheckLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RealityCheckLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealityCheckLogs
     * const realityCheckLogs = await prisma.realityCheckLog.findMany()
     * 
     * // Get first 10 RealityCheckLogs
     * const realityCheckLogs = await prisma.realityCheckLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realityCheckLogWithIdOnly = await prisma.realityCheckLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RealityCheckLogFindManyArgs>(args?: SelectSubset<T, RealityCheckLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RealityCheckLog.
     * @param {RealityCheckLogCreateArgs} args - Arguments to create a RealityCheckLog.
     * @example
     * // Create one RealityCheckLog
     * const RealityCheckLog = await prisma.realityCheckLog.create({
     *   data: {
     *     // ... data to create a RealityCheckLog
     *   }
     * })
     * 
     */
    create<T extends RealityCheckLogCreateArgs>(args: SelectSubset<T, RealityCheckLogCreateArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RealityCheckLogs.
     * @param {RealityCheckLogCreateManyArgs} args - Arguments to create many RealityCheckLogs.
     * @example
     * // Create many RealityCheckLogs
     * const realityCheckLog = await prisma.realityCheckLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealityCheckLogCreateManyArgs>(args?: SelectSubset<T, RealityCheckLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RealityCheckLogs and returns the data saved in the database.
     * @param {RealityCheckLogCreateManyAndReturnArgs} args - Arguments to create many RealityCheckLogs.
     * @example
     * // Create many RealityCheckLogs
     * const realityCheckLog = await prisma.realityCheckLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RealityCheckLogs and only return the `id`
     * const realityCheckLogWithIdOnly = await prisma.realityCheckLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealityCheckLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RealityCheckLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RealityCheckLog.
     * @param {RealityCheckLogDeleteArgs} args - Arguments to delete one RealityCheckLog.
     * @example
     * // Delete one RealityCheckLog
     * const RealityCheckLog = await prisma.realityCheckLog.delete({
     *   where: {
     *     // ... filter to delete one RealityCheckLog
     *   }
     * })
     * 
     */
    delete<T extends RealityCheckLogDeleteArgs>(args: SelectSubset<T, RealityCheckLogDeleteArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RealityCheckLog.
     * @param {RealityCheckLogUpdateArgs} args - Arguments to update one RealityCheckLog.
     * @example
     * // Update one RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealityCheckLogUpdateArgs>(args: SelectSubset<T, RealityCheckLogUpdateArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RealityCheckLogs.
     * @param {RealityCheckLogDeleteManyArgs} args - Arguments to filter RealityCheckLogs to delete.
     * @example
     * // Delete a few RealityCheckLogs
     * const { count } = await prisma.realityCheckLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealityCheckLogDeleteManyArgs>(args?: SelectSubset<T, RealityCheckLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealityCheckLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealityCheckLogs
     * const realityCheckLog = await prisma.realityCheckLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealityCheckLogUpdateManyArgs>(args: SelectSubset<T, RealityCheckLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RealityCheckLog.
     * @param {RealityCheckLogUpsertArgs} args - Arguments to update or create a RealityCheckLog.
     * @example
     * // Update or create a RealityCheckLog
     * const realityCheckLog = await prisma.realityCheckLog.upsert({
     *   create: {
     *     // ... data to create a RealityCheckLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealityCheckLog we want to update
     *   }
     * })
     */
    upsert<T extends RealityCheckLogUpsertArgs>(args: SelectSubset<T, RealityCheckLogUpsertArgs<ExtArgs>>): Prisma__RealityCheckLogClient<$Result.GetResult<Prisma.$RealityCheckLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RealityCheckLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogCountArgs} args - Arguments to filter RealityCheckLogs to count.
     * @example
     * // Count the number of RealityCheckLogs
     * const count = await prisma.realityCheckLog.count({
     *   where: {
     *     // ... the filter for the RealityCheckLogs we want to count
     *   }
     * })
    **/
    count<T extends RealityCheckLogCountArgs>(
      args?: Subset<T, RealityCheckLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealityCheckLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealityCheckLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealityCheckLogAggregateArgs>(args: Subset<T, RealityCheckLogAggregateArgs>): Prisma.PrismaPromise<GetRealityCheckLogAggregateType<T>>

    /**
     * Group by RealityCheckLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealityCheckLogGroupByArgs} args - Group by arguments.
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
      T extends RealityCheckLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealityCheckLogGroupByArgs['orderBy'] }
        : { orderBy?: RealityCheckLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealityCheckLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealityCheckLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RealityCheckLog model
   */
  readonly fields: RealityCheckLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RealityCheckLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealityCheckLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RealityCheckLog model
   */ 
  interface RealityCheckLogFieldRefs {
    readonly id: FieldRef<"RealityCheckLog", 'String'>
    readonly userId: FieldRef<"RealityCheckLog", 'String'>
    readonly sessionId: FieldRef<"RealityCheckLog", 'String'>
    readonly sessionStartAt: FieldRef<"RealityCheckLog", 'DateTime'>
    readonly checkAt: FieldRef<"RealityCheckLog", 'DateTime'>
    readonly acknowledgedAt: FieldRef<"RealityCheckLog", 'DateTime'>
    readonly continuePlay: FieldRef<"RealityCheckLog", 'Boolean'>
    readonly wageredDuringSession: FieldRef<"RealityCheckLog", 'Float'>
    readonly won: FieldRef<"RealityCheckLog", 'Float'>
    readonly lost: FieldRef<"RealityCheckLog", 'Float'>
    readonly net: FieldRef<"RealityCheckLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * RealityCheckLog findUnique
   */
  export type RealityCheckLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter, which RealityCheckLog to fetch.
     */
    where: RealityCheckLogWhereUniqueInput
  }

  /**
   * RealityCheckLog findUniqueOrThrow
   */
  export type RealityCheckLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter, which RealityCheckLog to fetch.
     */
    where: RealityCheckLogWhereUniqueInput
  }

  /**
   * RealityCheckLog findFirst
   */
  export type RealityCheckLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter, which RealityCheckLog to fetch.
     */
    where?: RealityCheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealityCheckLogs to fetch.
     */
    orderBy?: RealityCheckLogOrderByWithRelationInput | RealityCheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealityCheckLogs.
     */
    cursor?: RealityCheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealityCheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealityCheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealityCheckLogs.
     */
    distinct?: RealityCheckLogScalarFieldEnum | RealityCheckLogScalarFieldEnum[]
  }

  /**
   * RealityCheckLog findFirstOrThrow
   */
  export type RealityCheckLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter, which RealityCheckLog to fetch.
     */
    where?: RealityCheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealityCheckLogs to fetch.
     */
    orderBy?: RealityCheckLogOrderByWithRelationInput | RealityCheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealityCheckLogs.
     */
    cursor?: RealityCheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealityCheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealityCheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealityCheckLogs.
     */
    distinct?: RealityCheckLogScalarFieldEnum | RealityCheckLogScalarFieldEnum[]
  }

  /**
   * RealityCheckLog findMany
   */
  export type RealityCheckLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter, which RealityCheckLogs to fetch.
     */
    where?: RealityCheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealityCheckLogs to fetch.
     */
    orderBy?: RealityCheckLogOrderByWithRelationInput | RealityCheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealityCheckLogs.
     */
    cursor?: RealityCheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealityCheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealityCheckLogs.
     */
    skip?: number
    distinct?: RealityCheckLogScalarFieldEnum | RealityCheckLogScalarFieldEnum[]
  }

  /**
   * RealityCheckLog create
   */
  export type RealityCheckLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RealityCheckLog.
     */
    data: XOR<RealityCheckLogCreateInput, RealityCheckLogUncheckedCreateInput>
  }

  /**
   * RealityCheckLog createMany
   */
  export type RealityCheckLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RealityCheckLogs.
     */
    data: RealityCheckLogCreateManyInput | RealityCheckLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RealityCheckLog createManyAndReturn
   */
  export type RealityCheckLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RealityCheckLogs.
     */
    data: RealityCheckLogCreateManyInput | RealityCheckLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealityCheckLog update
   */
  export type RealityCheckLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RealityCheckLog.
     */
    data: XOR<RealityCheckLogUpdateInput, RealityCheckLogUncheckedUpdateInput>
    /**
     * Choose, which RealityCheckLog to update.
     */
    where: RealityCheckLogWhereUniqueInput
  }

  /**
   * RealityCheckLog updateMany
   */
  export type RealityCheckLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RealityCheckLogs.
     */
    data: XOR<RealityCheckLogUpdateManyMutationInput, RealityCheckLogUncheckedUpdateManyInput>
    /**
     * Filter which RealityCheckLogs to update
     */
    where?: RealityCheckLogWhereInput
  }

  /**
   * RealityCheckLog upsert
   */
  export type RealityCheckLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RealityCheckLog to update in case it exists.
     */
    where: RealityCheckLogWhereUniqueInput
    /**
     * In case the RealityCheckLog found by the `where` argument doesn't exist, create a new RealityCheckLog with this data.
     */
    create: XOR<RealityCheckLogCreateInput, RealityCheckLogUncheckedCreateInput>
    /**
     * In case the RealityCheckLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealityCheckLogUpdateInput, RealityCheckLogUncheckedUpdateInput>
  }

  /**
   * RealityCheckLog delete
   */
  export type RealityCheckLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
    /**
     * Filter which RealityCheckLog to delete.
     */
    where: RealityCheckLogWhereUniqueInput
  }

  /**
   * RealityCheckLog deleteMany
   */
  export type RealityCheckLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealityCheckLogs to delete
     */
    where?: RealityCheckLogWhereInput
  }

  /**
   * RealityCheckLog without action
   */
  export type RealityCheckLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealityCheckLog
     */
    select?: RealityCheckLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealityCheckLogInclude<ExtArgs> | null
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


  export const UserProfileScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    fullName: 'fullName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    country: 'country',
    phoneNumber: 'phoneNumber',
    phoneVerifiedAt: 'phoneVerifiedAt',
    city: 'city',
    address: 'address',
    postalCode: 'postalCode',
    preferredLanguage: 'preferredLanguage',
    preferredCurrency: 'preferredCurrency',
    timezone: 'timezone',
    marketingOptIn: 'marketingOptIn',
    smsOptIn: 'smsOptIn',
    pushOptIn: 'pushOptIn',
    status: 'status',
    registeredFromIp: 'registeredFromIp',
    registeredLocation: 'registeredLocation',
    affiliateCode: 'affiliateCode',
    vipLevel: 'vipLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    userId: 'userId',
    oddsFormat: 'oddsFormat',
    defaultStake: 'defaultStake',
    betAcceptanceType: 'betAcceptanceType',
    showLiveScores: 'showLiveScores',
    showFavoritesOnly: 'showFavoritesOnly',
    darkMode: 'darkMode',
    autoCashoutEnabled: 'autoCashoutEnabled',
    autoCashoutThreshold: 'autoCashoutThreshold',
    realityCheckEnabled: 'realityCheckEnabled',
    realityCheckIntervalMin: 'realityCheckIntervalMin',
    quickBetEnabled: 'quickBetEnabled',
    soundEnabled: 'soundEnabled',
    notificationSoundsEnabled: 'notificationSoundsEnabled',
    favoriteSports: 'favoriteSports',
    favoriteLeagues: 'favoriteLeagues',
    favoriteTeams: 'favoriteTeams',
    deletedAt: 'deletedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const UserLimitsScalarFieldEnum: {
    userId: 'userId',
    depositDailyLimit: 'depositDailyLimit',
    depositWeeklyLimit: 'depositWeeklyLimit',
    depositMonthlyLimit: 'depositMonthlyLimit',
    wagerDailyLimit: 'wagerDailyLimit',
    wagerWeeklyLimit: 'wagerWeeklyLimit',
    wagerMonthlyLimit: 'wagerMonthlyLimit',
    lossDailyLimit: 'lossDailyLimit',
    lossWeeklyLimit: 'lossWeeklyLimit',
    lossMonthlyLimit: 'lossMonthlyLimit',
    sessionTimeLimitMin: 'sessionTimeLimitMin',
    stakePerBetMax: 'stakePerBetMax',
    stakePerBetMin: 'stakePerBetMin',
    withdrawalDailyLimit: 'withdrawalDailyLimit',
    withdrawalMonthlyLimit: 'withdrawalMonthlyLimit',
    kycLevelApplied: 'kycLevelApplied',
    deletedAt: 'deletedAt'
  };

  export type UserLimitsScalarFieldEnum = (typeof UserLimitsScalarFieldEnum)[keyof typeof UserLimitsScalarFieldEnum]


  export const SelfExclusionRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duration: 'duration',
    startedAt: 'startedAt',
    endsAt: 'endsAt',
    reason: 'reason',
    revokedAt: 'revokedAt',
    revokedBy: 'revokedBy',
    isActive: 'isActive'
  };

  export type SelfExclusionRecordScalarFieldEnum = (typeof SelfExclusionRecordScalarFieldEnum)[keyof typeof SelfExclusionRecordScalarFieldEnum]


  export const RealityCheckLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    sessionStartAt: 'sessionStartAt',
    checkAt: 'checkAt',
    acknowledgedAt: 'acknowledgedAt',
    continuePlay: 'continuePlay',
    wageredDuringSession: 'wageredDuringSession',
    won: 'won',
    lost: 'lost',
    net: 'net'
  };

  export type RealityCheckLogScalarFieldEnum = (typeof RealityCheckLogScalarFieldEnum)[keyof typeof RealityCheckLogScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CountryCode'
   */
  export type EnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode'>
    


  /**
   * Reference to a field of type 'CountryCode[]'
   */
  export type ListEnumCountryCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CountryCode[]'>
    


  /**
   * Reference to a field of type 'LanguageCode'
   */
  export type EnumLanguageCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageCode'>
    


  /**
   * Reference to a field of type 'LanguageCode[]'
   */
  export type ListEnumLanguageCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LanguageCode[]'>
    


  /**
   * Reference to a field of type 'CurrencyCode'
   */
  export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>
    


  /**
   * Reference to a field of type 'CurrencyCode[]'
   */
  export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OddsFormat'
   */
  export type EnumOddsFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OddsFormat'>
    


  /**
   * Reference to a field of type 'OddsFormat[]'
   */
  export type ListEnumOddsFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OddsFormat[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SelfExcludeDuration'
   */
  export type EnumSelfExcludeDurationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelfExcludeDuration'>
    


  /**
   * Reference to a field of type 'SelfExcludeDuration[]'
   */
  export type ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelfExcludeDuration[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    userId?: UuidFilter<"UserProfile"> | string
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    fullName?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    country?: EnumCountryCodeFilter<"UserProfile"> | $Enums.CountryCode
    phoneNumber?: StringNullableFilter<"UserProfile"> | string | null
    phoneVerifiedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    postalCode?: StringNullableFilter<"UserProfile"> | string | null
    preferredLanguage?: EnumLanguageCodeFilter<"UserProfile"> | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFilter<"UserProfile"> | $Enums.CurrencyCode
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    marketingOptIn?: BoolFilter<"UserProfile"> | boolean
    smsOptIn?: BoolFilter<"UserProfile"> | boolean
    pushOptIn?: BoolFilter<"UserProfile"> | boolean
    status?: EnumUserStatusFilter<"UserProfile"> | $Enums.UserStatus
    registeredFromIp?: StringNullableFilter<"UserProfile"> | string | null
    registeredLocation?: JsonNullableFilter<"UserProfile">
    affiliateCode?: StringNullableFilter<"UserProfile"> | string | null
    vipLevel?: IntNullableFilter<"UserProfile"> | number | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    limits?: XOR<UserLimitsNullableRelationFilter, UserLimitsWhereInput> | null
    selfExclusionRecords?: SelfExclusionRecordListRelationFilter
    realityCheckLogs?: RealityCheckLogListRelationFilter
  }

  export type UserProfileOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    phoneVerifiedAt?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrder
    preferredCurrency?: SortOrder
    timezone?: SortOrderInput | SortOrder
    marketingOptIn?: SortOrder
    smsOptIn?: SortOrder
    pushOptIn?: SortOrder
    status?: SortOrder
    registeredFromIp?: SortOrderInput | SortOrder
    registeredLocation?: SortOrderInput | SortOrder
    affiliateCode?: SortOrderInput | SortOrder
    vipLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    limits?: UserLimitsOrderByWithRelationInput
    selfExclusionRecords?: SelfExclusionRecordOrderByRelationAggregateInput
    realityCheckLogs?: RealityCheckLogOrderByRelationAggregateInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    fullName?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    country?: EnumCountryCodeFilter<"UserProfile"> | $Enums.CountryCode
    phoneNumber?: StringNullableFilter<"UserProfile"> | string | null
    phoneVerifiedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    city?: StringNullableFilter<"UserProfile"> | string | null
    address?: StringNullableFilter<"UserProfile"> | string | null
    postalCode?: StringNullableFilter<"UserProfile"> | string | null
    preferredLanguage?: EnumLanguageCodeFilter<"UserProfile"> | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFilter<"UserProfile"> | $Enums.CurrencyCode
    timezone?: StringNullableFilter<"UserProfile"> | string | null
    marketingOptIn?: BoolFilter<"UserProfile"> | boolean
    smsOptIn?: BoolFilter<"UserProfile"> | boolean
    pushOptIn?: BoolFilter<"UserProfile"> | boolean
    status?: EnumUserStatusFilter<"UserProfile"> | $Enums.UserStatus
    registeredFromIp?: StringNullableFilter<"UserProfile"> | string | null
    registeredLocation?: JsonNullableFilter<"UserProfile">
    affiliateCode?: StringNullableFilter<"UserProfile"> | string | null
    vipLevel?: IntNullableFilter<"UserProfile"> | number | null
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    limits?: XOR<UserLimitsNullableRelationFilter, UserLimitsWhereInput> | null
    selfExclusionRecords?: SelfExclusionRecordListRelationFilter
    realityCheckLogs?: RealityCheckLogListRelationFilter
  }, "userId">

  export type UserProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    phoneVerifiedAt?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    preferredLanguage?: SortOrder
    preferredCurrency?: SortOrder
    timezone?: SortOrderInput | SortOrder
    marketingOptIn?: SortOrder
    smsOptIn?: SortOrder
    pushOptIn?: SortOrder
    status?: SortOrder
    registeredFromIp?: SortOrderInput | SortOrder
    registeredLocation?: SortOrderInput | SortOrder
    affiliateCode?: SortOrderInput | SortOrder
    vipLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    country?: EnumCountryCodeWithAggregatesFilter<"UserProfile"> | $Enums.CountryCode
    phoneNumber?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    phoneVerifiedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    city?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    preferredLanguage?: EnumLanguageCodeWithAggregatesFilter<"UserProfile"> | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeWithAggregatesFilter<"UserProfile"> | $Enums.CurrencyCode
    timezone?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    marketingOptIn?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    smsOptIn?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    pushOptIn?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"UserProfile"> | $Enums.UserStatus
    registeredFromIp?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    registeredLocation?: JsonNullableWithAggregatesFilter<"UserProfile">
    affiliateCode?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    vipLevel?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    userId?: UuidFilter<"UserPreferences"> | string
    oddsFormat?: EnumOddsFormatFilter<"UserPreferences"> | $Enums.OddsFormat
    defaultStake?: FloatNullableFilter<"UserPreferences"> | number | null
    betAcceptanceType?: StringFilter<"UserPreferences"> | string
    showLiveScores?: BoolFilter<"UserPreferences"> | boolean
    showFavoritesOnly?: BoolFilter<"UserPreferences"> | boolean
    darkMode?: BoolFilter<"UserPreferences"> | boolean
    autoCashoutEnabled?: BoolFilter<"UserPreferences"> | boolean
    autoCashoutThreshold?: FloatNullableFilter<"UserPreferences"> | number | null
    realityCheckEnabled?: BoolFilter<"UserPreferences"> | boolean
    realityCheckIntervalMin?: IntFilter<"UserPreferences"> | number
    quickBetEnabled?: BoolFilter<"UserPreferences"> | boolean
    soundEnabled?: BoolFilter<"UserPreferences"> | boolean
    notificationSoundsEnabled?: BoolFilter<"UserPreferences"> | boolean
    favoriteSports?: StringNullableListFilter<"UserPreferences">
    favoriteLeagues?: StringNullableListFilter<"UserPreferences">
    favoriteTeams?: StringNullableListFilter<"UserPreferences">
    deletedAt?: DateTimeNullableFilter<"UserPreferences"> | Date | string | null
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    userId?: SortOrder
    oddsFormat?: SortOrder
    defaultStake?: SortOrderInput | SortOrder
    betAcceptanceType?: SortOrder
    showLiveScores?: SortOrder
    showFavoritesOnly?: SortOrder
    darkMode?: SortOrder
    autoCashoutEnabled?: SortOrder
    autoCashoutThreshold?: SortOrderInput | SortOrder
    realityCheckEnabled?: SortOrder
    realityCheckIntervalMin?: SortOrder
    quickBetEnabled?: SortOrder
    soundEnabled?: SortOrder
    notificationSoundsEnabled?: SortOrder
    favoriteSports?: SortOrder
    favoriteLeagues?: SortOrder
    favoriteTeams?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    oddsFormat?: EnumOddsFormatFilter<"UserPreferences"> | $Enums.OddsFormat
    defaultStake?: FloatNullableFilter<"UserPreferences"> | number | null
    betAcceptanceType?: StringFilter<"UserPreferences"> | string
    showLiveScores?: BoolFilter<"UserPreferences"> | boolean
    showFavoritesOnly?: BoolFilter<"UserPreferences"> | boolean
    darkMode?: BoolFilter<"UserPreferences"> | boolean
    autoCashoutEnabled?: BoolFilter<"UserPreferences"> | boolean
    autoCashoutThreshold?: FloatNullableFilter<"UserPreferences"> | number | null
    realityCheckEnabled?: BoolFilter<"UserPreferences"> | boolean
    realityCheckIntervalMin?: IntFilter<"UserPreferences"> | number
    quickBetEnabled?: BoolFilter<"UserPreferences"> | boolean
    soundEnabled?: BoolFilter<"UserPreferences"> | boolean
    notificationSoundsEnabled?: BoolFilter<"UserPreferences"> | boolean
    favoriteSports?: StringNullableListFilter<"UserPreferences">
    favoriteLeagues?: StringNullableListFilter<"UserPreferences">
    favoriteTeams?: StringNullableListFilter<"UserPreferences">
    deletedAt?: DateTimeNullableFilter<"UserPreferences"> | Date | string | null
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    userId?: SortOrder
    oddsFormat?: SortOrder
    defaultStake?: SortOrderInput | SortOrder
    betAcceptanceType?: SortOrder
    showLiveScores?: SortOrder
    showFavoritesOnly?: SortOrder
    darkMode?: SortOrder
    autoCashoutEnabled?: SortOrder
    autoCashoutThreshold?: SortOrderInput | SortOrder
    realityCheckEnabled?: SortOrder
    realityCheckIntervalMin?: SortOrder
    quickBetEnabled?: SortOrder
    soundEnabled?: SortOrder
    notificationSoundsEnabled?: SortOrder
    favoriteSports?: SortOrder
    favoriteLeagues?: SortOrder
    favoriteTeams?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserPreferences"> | string
    oddsFormat?: EnumOddsFormatWithAggregatesFilter<"UserPreferences"> | $Enums.OddsFormat
    defaultStake?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    betAcceptanceType?: StringWithAggregatesFilter<"UserPreferences"> | string
    showLiveScores?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    showFavoritesOnly?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    darkMode?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    autoCashoutEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    autoCashoutThreshold?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    realityCheckEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    realityCheckIntervalMin?: IntWithAggregatesFilter<"UserPreferences"> | number
    quickBetEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    soundEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    notificationSoundsEnabled?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    favoriteSports?: StringNullableListFilter<"UserPreferences">
    favoriteLeagues?: StringNullableListFilter<"UserPreferences">
    favoriteTeams?: StringNullableListFilter<"UserPreferences">
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserPreferences"> | Date | string | null
  }

  export type UserLimitsWhereInput = {
    AND?: UserLimitsWhereInput | UserLimitsWhereInput[]
    OR?: UserLimitsWhereInput[]
    NOT?: UserLimitsWhereInput | UserLimitsWhereInput[]
    userId?: UuidFilter<"UserLimits"> | string
    depositDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    depositWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    depositMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    sessionTimeLimitMin?: IntNullableFilter<"UserLimits"> | number | null
    stakePerBetMax?: FloatNullableFilter<"UserLimits"> | number | null
    stakePerBetMin?: FloatFilter<"UserLimits"> | number
    withdrawalDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    withdrawalMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    kycLevelApplied?: IntFilter<"UserLimits"> | number
    deletedAt?: DateTimeNullableFilter<"UserLimits"> | Date | string | null
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type UserLimitsOrderByWithRelationInput = {
    userId?: SortOrder
    depositDailyLimit?: SortOrderInput | SortOrder
    depositWeeklyLimit?: SortOrderInput | SortOrder
    depositMonthlyLimit?: SortOrderInput | SortOrder
    wagerDailyLimit?: SortOrderInput | SortOrder
    wagerWeeklyLimit?: SortOrderInput | SortOrder
    wagerMonthlyLimit?: SortOrderInput | SortOrder
    lossDailyLimit?: SortOrderInput | SortOrder
    lossWeeklyLimit?: SortOrderInput | SortOrder
    lossMonthlyLimit?: SortOrderInput | SortOrder
    sessionTimeLimitMin?: SortOrderInput | SortOrder
    stakePerBetMax?: SortOrderInput | SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrderInput | SortOrder
    withdrawalMonthlyLimit?: SortOrderInput | SortOrder
    kycLevelApplied?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserLimitsWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserLimitsWhereInput | UserLimitsWhereInput[]
    OR?: UserLimitsWhereInput[]
    NOT?: UserLimitsWhereInput | UserLimitsWhereInput[]
    depositDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    depositWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    depositMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    wagerMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossWeeklyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    lossMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    sessionTimeLimitMin?: IntNullableFilter<"UserLimits"> | number | null
    stakePerBetMax?: FloatNullableFilter<"UserLimits"> | number | null
    stakePerBetMin?: FloatFilter<"UserLimits"> | number
    withdrawalDailyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    withdrawalMonthlyLimit?: FloatNullableFilter<"UserLimits"> | number | null
    kycLevelApplied?: IntFilter<"UserLimits"> | number
    deletedAt?: DateTimeNullableFilter<"UserLimits"> | Date | string | null
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "userId">

  export type UserLimitsOrderByWithAggregationInput = {
    userId?: SortOrder
    depositDailyLimit?: SortOrderInput | SortOrder
    depositWeeklyLimit?: SortOrderInput | SortOrder
    depositMonthlyLimit?: SortOrderInput | SortOrder
    wagerDailyLimit?: SortOrderInput | SortOrder
    wagerWeeklyLimit?: SortOrderInput | SortOrder
    wagerMonthlyLimit?: SortOrderInput | SortOrder
    lossDailyLimit?: SortOrderInput | SortOrder
    lossWeeklyLimit?: SortOrderInput | SortOrder
    lossMonthlyLimit?: SortOrderInput | SortOrder
    sessionTimeLimitMin?: SortOrderInput | SortOrder
    stakePerBetMax?: SortOrderInput | SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrderInput | SortOrder
    withdrawalMonthlyLimit?: SortOrderInput | SortOrder
    kycLevelApplied?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserLimitsCountOrderByAggregateInput
    _avg?: UserLimitsAvgOrderByAggregateInput
    _max?: UserLimitsMaxOrderByAggregateInput
    _min?: UserLimitsMinOrderByAggregateInput
    _sum?: UserLimitsSumOrderByAggregateInput
  }

  export type UserLimitsScalarWhereWithAggregatesInput = {
    AND?: UserLimitsScalarWhereWithAggregatesInput | UserLimitsScalarWhereWithAggregatesInput[]
    OR?: UserLimitsScalarWhereWithAggregatesInput[]
    NOT?: UserLimitsScalarWhereWithAggregatesInput | UserLimitsScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserLimits"> | string
    depositDailyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    depositWeeklyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    depositMonthlyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    wagerDailyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    wagerWeeklyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    wagerMonthlyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    lossDailyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    lossWeeklyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    lossMonthlyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    sessionTimeLimitMin?: IntNullableWithAggregatesFilter<"UserLimits"> | number | null
    stakePerBetMax?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    stakePerBetMin?: FloatWithAggregatesFilter<"UserLimits"> | number
    withdrawalDailyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    withdrawalMonthlyLimit?: FloatNullableWithAggregatesFilter<"UserLimits"> | number | null
    kycLevelApplied?: IntWithAggregatesFilter<"UserLimits"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserLimits"> | Date | string | null
  }

  export type SelfExclusionRecordWhereInput = {
    AND?: SelfExclusionRecordWhereInput | SelfExclusionRecordWhereInput[]
    OR?: SelfExclusionRecordWhereInput[]
    NOT?: SelfExclusionRecordWhereInput | SelfExclusionRecordWhereInput[]
    id?: UuidFilter<"SelfExclusionRecord"> | string
    userId?: UuidFilter<"SelfExclusionRecord"> | string
    duration?: EnumSelfExcludeDurationFilter<"SelfExclusionRecord"> | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFilter<"SelfExclusionRecord"> | Date | string
    endsAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    reason?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    revokedAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    revokedBy?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    isActive?: BoolFilter<"SelfExclusionRecord"> | boolean
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type SelfExclusionRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type SelfExclusionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SelfExclusionRecordWhereInput | SelfExclusionRecordWhereInput[]
    OR?: SelfExclusionRecordWhereInput[]
    NOT?: SelfExclusionRecordWhereInput | SelfExclusionRecordWhereInput[]
    userId?: UuidFilter<"SelfExclusionRecord"> | string
    duration?: EnumSelfExcludeDurationFilter<"SelfExclusionRecord"> | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFilter<"SelfExclusionRecord"> | Date | string
    endsAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    reason?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    revokedAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    revokedBy?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    isActive?: BoolFilter<"SelfExclusionRecord"> | boolean
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id">

  export type SelfExclusionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedBy?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: SelfExclusionRecordCountOrderByAggregateInput
    _max?: SelfExclusionRecordMaxOrderByAggregateInput
    _min?: SelfExclusionRecordMinOrderByAggregateInput
  }

  export type SelfExclusionRecordScalarWhereWithAggregatesInput = {
    AND?: SelfExclusionRecordScalarWhereWithAggregatesInput | SelfExclusionRecordScalarWhereWithAggregatesInput[]
    OR?: SelfExclusionRecordScalarWhereWithAggregatesInput[]
    NOT?: SelfExclusionRecordScalarWhereWithAggregatesInput | SelfExclusionRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SelfExclusionRecord"> | string
    userId?: UuidWithAggregatesFilter<"SelfExclusionRecord"> | string
    duration?: EnumSelfExcludeDurationWithAggregatesFilter<"SelfExclusionRecord"> | $Enums.SelfExcludeDuration
    startedAt?: DateTimeWithAggregatesFilter<"SelfExclusionRecord"> | Date | string
    endsAt?: DateTimeNullableWithAggregatesFilter<"SelfExclusionRecord"> | Date | string | null
    reason?: StringNullableWithAggregatesFilter<"SelfExclusionRecord"> | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"SelfExclusionRecord"> | Date | string | null
    revokedBy?: StringNullableWithAggregatesFilter<"SelfExclusionRecord"> | string | null
    isActive?: BoolWithAggregatesFilter<"SelfExclusionRecord"> | boolean
  }

  export type RealityCheckLogWhereInput = {
    AND?: RealityCheckLogWhereInput | RealityCheckLogWhereInput[]
    OR?: RealityCheckLogWhereInput[]
    NOT?: RealityCheckLogWhereInput | RealityCheckLogWhereInput[]
    id?: UuidFilter<"RealityCheckLog"> | string
    userId?: UuidFilter<"RealityCheckLog"> | string
    sessionId?: StringFilter<"RealityCheckLog"> | string
    sessionStartAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    checkAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    acknowledgedAt?: DateTimeNullableFilter<"RealityCheckLog"> | Date | string | null
    continuePlay?: BoolNullableFilter<"RealityCheckLog"> | boolean | null
    wageredDuringSession?: FloatFilter<"RealityCheckLog"> | number
    won?: FloatFilter<"RealityCheckLog"> | number
    lost?: FloatFilter<"RealityCheckLog"> | number
    net?: FloatFilter<"RealityCheckLog"> | number
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type RealityCheckLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    sessionStartAt?: SortOrder
    checkAt?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    continuePlay?: SortOrderInput | SortOrder
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type RealityCheckLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RealityCheckLogWhereInput | RealityCheckLogWhereInput[]
    OR?: RealityCheckLogWhereInput[]
    NOT?: RealityCheckLogWhereInput | RealityCheckLogWhereInput[]
    userId?: UuidFilter<"RealityCheckLog"> | string
    sessionId?: StringFilter<"RealityCheckLog"> | string
    sessionStartAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    checkAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    acknowledgedAt?: DateTimeNullableFilter<"RealityCheckLog"> | Date | string | null
    continuePlay?: BoolNullableFilter<"RealityCheckLog"> | boolean | null
    wageredDuringSession?: FloatFilter<"RealityCheckLog"> | number
    won?: FloatFilter<"RealityCheckLog"> | number
    lost?: FloatFilter<"RealityCheckLog"> | number
    net?: FloatFilter<"RealityCheckLog"> | number
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id">

  export type RealityCheckLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    sessionStartAt?: SortOrder
    checkAt?: SortOrder
    acknowledgedAt?: SortOrderInput | SortOrder
    continuePlay?: SortOrderInput | SortOrder
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
    _count?: RealityCheckLogCountOrderByAggregateInput
    _avg?: RealityCheckLogAvgOrderByAggregateInput
    _max?: RealityCheckLogMaxOrderByAggregateInput
    _min?: RealityCheckLogMinOrderByAggregateInput
    _sum?: RealityCheckLogSumOrderByAggregateInput
  }

  export type RealityCheckLogScalarWhereWithAggregatesInput = {
    AND?: RealityCheckLogScalarWhereWithAggregatesInput | RealityCheckLogScalarWhereWithAggregatesInput[]
    OR?: RealityCheckLogScalarWhereWithAggregatesInput[]
    NOT?: RealityCheckLogScalarWhereWithAggregatesInput | RealityCheckLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RealityCheckLog"> | string
    userId?: UuidWithAggregatesFilter<"RealityCheckLog"> | string
    sessionId?: StringWithAggregatesFilter<"RealityCheckLog"> | string
    sessionStartAt?: DateTimeWithAggregatesFilter<"RealityCheckLog"> | Date | string
    checkAt?: DateTimeWithAggregatesFilter<"RealityCheckLog"> | Date | string
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"RealityCheckLog"> | Date | string | null
    continuePlay?: BoolNullableWithAggregatesFilter<"RealityCheckLog"> | boolean | null
    wageredDuringSession?: FloatWithAggregatesFilter<"RealityCheckLog"> | number
    won?: FloatWithAggregatesFilter<"RealityCheckLog"> | number
    lost?: FloatWithAggregatesFilter<"RealityCheckLog"> | number
    net?: FloatWithAggregatesFilter<"RealityCheckLog"> | number
  }

  export type UserProfileCreateInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
    limits?: UserLimitsCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
    limits?: UserLimitsUncheckedCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUncheckedUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPreferencesCreateInput = {
    oddsFormat?: $Enums.OddsFormat
    defaultStake?: number | null
    betAcceptanceType?: string
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: number | null
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: number
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: UserPreferencesCreatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesCreatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesCreatefavoriteTeamsInput | string[]
    deletedAt?: Date | string | null
    profile: UserProfileCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    userId: string
    oddsFormat?: $Enums.OddsFormat
    defaultStake?: number | null
    betAcceptanceType?: string
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: number | null
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: number
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: UserPreferencesCreatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesCreatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesCreatefavoriteTeamsInput | string[]
    deletedAt?: Date | string | null
  }

  export type UserPreferencesUpdateInput = {
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPreferencesCreateManyInput = {
    userId: string
    oddsFormat?: $Enums.OddsFormat
    defaultStake?: number | null
    betAcceptanceType?: string
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: number | null
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: number
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: UserPreferencesCreatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesCreatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesCreatefavoriteTeamsInput | string[]
    deletedAt?: Date | string | null
  }

  export type UserPreferencesUpdateManyMutationInput = {
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLimitsCreateInput = {
    depositDailyLimit?: number | null
    depositWeeklyLimit?: number | null
    depositMonthlyLimit?: number | null
    wagerDailyLimit?: number | null
    wagerWeeklyLimit?: number | null
    wagerMonthlyLimit?: number | null
    lossDailyLimit?: number | null
    lossWeeklyLimit?: number | null
    lossMonthlyLimit?: number | null
    sessionTimeLimitMin?: number | null
    stakePerBetMax?: number | null
    stakePerBetMin?: number
    withdrawalDailyLimit?: number | null
    withdrawalMonthlyLimit?: number | null
    kycLevelApplied?: number
    deletedAt?: Date | string | null
    profile: UserProfileCreateNestedOneWithoutLimitsInput
  }

  export type UserLimitsUncheckedCreateInput = {
    userId: string
    depositDailyLimit?: number | null
    depositWeeklyLimit?: number | null
    depositMonthlyLimit?: number | null
    wagerDailyLimit?: number | null
    wagerWeeklyLimit?: number | null
    wagerMonthlyLimit?: number | null
    lossDailyLimit?: number | null
    lossWeeklyLimit?: number | null
    lossMonthlyLimit?: number | null
    sessionTimeLimitMin?: number | null
    stakePerBetMax?: number | null
    stakePerBetMin?: number
    withdrawalDailyLimit?: number | null
    withdrawalMonthlyLimit?: number | null
    kycLevelApplied?: number
    deletedAt?: Date | string | null
  }

  export type UserLimitsUpdateInput = {
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneRequiredWithoutLimitsNestedInput
  }

  export type UserLimitsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLimitsCreateManyInput = {
    userId: string
    depositDailyLimit?: number | null
    depositWeeklyLimit?: number | null
    depositMonthlyLimit?: number | null
    wagerDailyLimit?: number | null
    wagerWeeklyLimit?: number | null
    wagerMonthlyLimit?: number | null
    lossDailyLimit?: number | null
    lossWeeklyLimit?: number | null
    lossMonthlyLimit?: number | null
    sessionTimeLimitMin?: number | null
    stakePerBetMax?: number | null
    stakePerBetMin?: number
    withdrawalDailyLimit?: number | null
    withdrawalMonthlyLimit?: number | null
    kycLevelApplied?: number
    deletedAt?: Date | string | null
  }

  export type UserLimitsUpdateManyMutationInput = {
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLimitsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SelfExclusionRecordCreateInput = {
    id?: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
    profile: UserProfileCreateNestedOneWithoutSelfExclusionRecordsInput
  }

  export type SelfExclusionRecordUncheckedCreateInput = {
    id?: string
    userId: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
  }

  export type SelfExclusionRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    profile?: UserProfileUpdateOneRequiredWithoutSelfExclusionRecordsNestedInput
  }

  export type SelfExclusionRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelfExclusionRecordCreateManyInput = {
    id?: string
    userId: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
  }

  export type SelfExclusionRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelfExclusionRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RealityCheckLogCreateInput = {
    id?: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
    profile: UserProfileCreateNestedOneWithoutRealityCheckLogsInput
  }

  export type RealityCheckLogUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
  }

  export type RealityCheckLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    profile?: UserProfileUpdateOneRequiredWithoutRealityCheckLogsNestedInput
  }

  export type RealityCheckLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type RealityCheckLogCreateManyInput = {
    id?: string
    userId: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
  }

  export type RealityCheckLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type RealityCheckLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type EnumLanguageCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageCode | EnumLanguageCodeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageCodeFilter<$PrismaModel> | $Enums.LanguageCode
  }

  export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type UserPreferencesNullableRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type UserLimitsNullableRelationFilter = {
    is?: UserLimitsWhereInput | null
    isNot?: UserLimitsWhereInput | null
  }

  export type SelfExclusionRecordListRelationFilter = {
    every?: SelfExclusionRecordWhereInput
    some?: SelfExclusionRecordWhereInput
    none?: SelfExclusionRecordWhereInput
  }

  export type RealityCheckLogListRelationFilter = {
    every?: RealityCheckLogWhereInput
    some?: RealityCheckLogWhereInput
    none?: RealityCheckLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SelfExclusionRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealityCheckLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    phoneVerifiedAt?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    preferredLanguage?: SortOrder
    preferredCurrency?: SortOrder
    timezone?: SortOrder
    marketingOptIn?: SortOrder
    smsOptIn?: SortOrder
    pushOptIn?: SortOrder
    status?: SortOrder
    registeredFromIp?: SortOrder
    registeredLocation?: SortOrder
    affiliateCode?: SortOrder
    vipLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    vipLevel?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    phoneVerifiedAt?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    preferredLanguage?: SortOrder
    preferredCurrency?: SortOrder
    timezone?: SortOrder
    marketingOptIn?: SortOrder
    smsOptIn?: SortOrder
    pushOptIn?: SortOrder
    status?: SortOrder
    registeredFromIp?: SortOrder
    affiliateCode?: SortOrder
    vipLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    phoneNumber?: SortOrder
    phoneVerifiedAt?: SortOrder
    city?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    preferredLanguage?: SortOrder
    preferredCurrency?: SortOrder
    timezone?: SortOrder
    marketingOptIn?: SortOrder
    smsOptIn?: SortOrder
    pushOptIn?: SortOrder
    status?: SortOrder
    registeredFromIp?: SortOrder
    affiliateCode?: SortOrder
    vipLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    vipLevel?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type EnumLanguageCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageCode | EnumLanguageCodeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageCodeWithAggregatesFilter<$PrismaModel> | $Enums.LanguageCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageCodeFilter<$PrismaModel>
    _max?: NestedEnumLanguageCodeFilter<$PrismaModel>
  }

  export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type EnumOddsFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.OddsFormat | EnumOddsFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOddsFormatFilter<$PrismaModel> | $Enums.OddsFormat
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    userId?: SortOrder
    oddsFormat?: SortOrder
    defaultStake?: SortOrder
    betAcceptanceType?: SortOrder
    showLiveScores?: SortOrder
    showFavoritesOnly?: SortOrder
    darkMode?: SortOrder
    autoCashoutEnabled?: SortOrder
    autoCashoutThreshold?: SortOrder
    realityCheckEnabled?: SortOrder
    realityCheckIntervalMin?: SortOrder
    quickBetEnabled?: SortOrder
    soundEnabled?: SortOrder
    notificationSoundsEnabled?: SortOrder
    favoriteSports?: SortOrder
    favoriteLeagues?: SortOrder
    favoriteTeams?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    defaultStake?: SortOrder
    autoCashoutThreshold?: SortOrder
    realityCheckIntervalMin?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    userId?: SortOrder
    oddsFormat?: SortOrder
    defaultStake?: SortOrder
    betAcceptanceType?: SortOrder
    showLiveScores?: SortOrder
    showFavoritesOnly?: SortOrder
    darkMode?: SortOrder
    autoCashoutEnabled?: SortOrder
    autoCashoutThreshold?: SortOrder
    realityCheckEnabled?: SortOrder
    realityCheckIntervalMin?: SortOrder
    quickBetEnabled?: SortOrder
    soundEnabled?: SortOrder
    notificationSoundsEnabled?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    userId?: SortOrder
    oddsFormat?: SortOrder
    defaultStake?: SortOrder
    betAcceptanceType?: SortOrder
    showLiveScores?: SortOrder
    showFavoritesOnly?: SortOrder
    darkMode?: SortOrder
    autoCashoutEnabled?: SortOrder
    autoCashoutThreshold?: SortOrder
    realityCheckEnabled?: SortOrder
    realityCheckIntervalMin?: SortOrder
    quickBetEnabled?: SortOrder
    soundEnabled?: SortOrder
    notificationSoundsEnabled?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    defaultStake?: SortOrder
    autoCashoutThreshold?: SortOrder
    realityCheckIntervalMin?: SortOrder
  }

  export type EnumOddsFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OddsFormat | EnumOddsFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOddsFormatWithAggregatesFilter<$PrismaModel> | $Enums.OddsFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOddsFormatFilter<$PrismaModel>
    _max?: NestedEnumOddsFormatFilter<$PrismaModel>
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

  export type UserLimitsCountOrderByAggregateInput = {
    userId?: SortOrder
    depositDailyLimit?: SortOrder
    depositWeeklyLimit?: SortOrder
    depositMonthlyLimit?: SortOrder
    wagerDailyLimit?: SortOrder
    wagerWeeklyLimit?: SortOrder
    wagerMonthlyLimit?: SortOrder
    lossDailyLimit?: SortOrder
    lossWeeklyLimit?: SortOrder
    lossMonthlyLimit?: SortOrder
    sessionTimeLimitMin?: SortOrder
    stakePerBetMax?: SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrder
    withdrawalMonthlyLimit?: SortOrder
    kycLevelApplied?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserLimitsAvgOrderByAggregateInput = {
    depositDailyLimit?: SortOrder
    depositWeeklyLimit?: SortOrder
    depositMonthlyLimit?: SortOrder
    wagerDailyLimit?: SortOrder
    wagerWeeklyLimit?: SortOrder
    wagerMonthlyLimit?: SortOrder
    lossDailyLimit?: SortOrder
    lossWeeklyLimit?: SortOrder
    lossMonthlyLimit?: SortOrder
    sessionTimeLimitMin?: SortOrder
    stakePerBetMax?: SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrder
    withdrawalMonthlyLimit?: SortOrder
    kycLevelApplied?: SortOrder
  }

  export type UserLimitsMaxOrderByAggregateInput = {
    userId?: SortOrder
    depositDailyLimit?: SortOrder
    depositWeeklyLimit?: SortOrder
    depositMonthlyLimit?: SortOrder
    wagerDailyLimit?: SortOrder
    wagerWeeklyLimit?: SortOrder
    wagerMonthlyLimit?: SortOrder
    lossDailyLimit?: SortOrder
    lossWeeklyLimit?: SortOrder
    lossMonthlyLimit?: SortOrder
    sessionTimeLimitMin?: SortOrder
    stakePerBetMax?: SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrder
    withdrawalMonthlyLimit?: SortOrder
    kycLevelApplied?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserLimitsMinOrderByAggregateInput = {
    userId?: SortOrder
    depositDailyLimit?: SortOrder
    depositWeeklyLimit?: SortOrder
    depositMonthlyLimit?: SortOrder
    wagerDailyLimit?: SortOrder
    wagerWeeklyLimit?: SortOrder
    wagerMonthlyLimit?: SortOrder
    lossDailyLimit?: SortOrder
    lossWeeklyLimit?: SortOrder
    lossMonthlyLimit?: SortOrder
    sessionTimeLimitMin?: SortOrder
    stakePerBetMax?: SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrder
    withdrawalMonthlyLimit?: SortOrder
    kycLevelApplied?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserLimitsSumOrderByAggregateInput = {
    depositDailyLimit?: SortOrder
    depositWeeklyLimit?: SortOrder
    depositMonthlyLimit?: SortOrder
    wagerDailyLimit?: SortOrder
    wagerWeeklyLimit?: SortOrder
    wagerMonthlyLimit?: SortOrder
    lossDailyLimit?: SortOrder
    lossWeeklyLimit?: SortOrder
    lossMonthlyLimit?: SortOrder
    sessionTimeLimitMin?: SortOrder
    stakePerBetMax?: SortOrder
    stakePerBetMin?: SortOrder
    withdrawalDailyLimit?: SortOrder
    withdrawalMonthlyLimit?: SortOrder
    kycLevelApplied?: SortOrder
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

  export type EnumSelfExcludeDurationFilter<$PrismaModel = never> = {
    equals?: $Enums.SelfExcludeDuration | EnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    in?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    not?: NestedEnumSelfExcludeDurationFilter<$PrismaModel> | $Enums.SelfExcludeDuration
  }

  export type SelfExclusionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    reason?: SortOrder
    revokedAt?: SortOrder
    revokedBy?: SortOrder
    isActive?: SortOrder
  }

  export type SelfExclusionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    reason?: SortOrder
    revokedAt?: SortOrder
    revokedBy?: SortOrder
    isActive?: SortOrder
  }

  export type SelfExclusionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endsAt?: SortOrder
    reason?: SortOrder
    revokedAt?: SortOrder
    revokedBy?: SortOrder
    isActive?: SortOrder
  }

  export type EnumSelfExcludeDurationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelfExcludeDuration | EnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    in?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    not?: NestedEnumSelfExcludeDurationWithAggregatesFilter<$PrismaModel> | $Enums.SelfExcludeDuration
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSelfExcludeDurationFilter<$PrismaModel>
    _max?: NestedEnumSelfExcludeDurationFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RealityCheckLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    sessionStartAt?: SortOrder
    checkAt?: SortOrder
    acknowledgedAt?: SortOrder
    continuePlay?: SortOrder
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
  }

  export type RealityCheckLogAvgOrderByAggregateInput = {
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
  }

  export type RealityCheckLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    sessionStartAt?: SortOrder
    checkAt?: SortOrder
    acknowledgedAt?: SortOrder
    continuePlay?: SortOrder
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
  }

  export type RealityCheckLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    sessionStartAt?: SortOrder
    checkAt?: SortOrder
    acknowledgedAt?: SortOrder
    continuePlay?: SortOrder
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
  }

  export type RealityCheckLogSumOrderByAggregateInput = {
    wageredDuringSession?: SortOrder
    won?: SortOrder
    lost?: SortOrder
    net?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserPreferencesCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserLimitsCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserLimitsCreateOrConnectWithoutProfileInput
    connect?: UserLimitsWhereUniqueInput
  }

  export type SelfExclusionRecordCreateNestedManyWithoutProfileInput = {
    create?: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput> | SelfExclusionRecordCreateWithoutProfileInput[] | SelfExclusionRecordUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SelfExclusionRecordCreateOrConnectWithoutProfileInput | SelfExclusionRecordCreateOrConnectWithoutProfileInput[]
    createMany?: SelfExclusionRecordCreateManyProfileInputEnvelope
    connect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
  }

  export type RealityCheckLogCreateNestedManyWithoutProfileInput = {
    create?: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput> | RealityCheckLogCreateWithoutProfileInput[] | RealityCheckLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RealityCheckLogCreateOrConnectWithoutProfileInput | RealityCheckLogCreateOrConnectWithoutProfileInput[]
    createMany?: RealityCheckLogCreateManyProfileInputEnvelope
    connect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserLimitsUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserLimitsCreateOrConnectWithoutProfileInput
    connect?: UserLimitsWhereUniqueInput
  }

  export type SelfExclusionRecordUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput> | SelfExclusionRecordCreateWithoutProfileInput[] | SelfExclusionRecordUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SelfExclusionRecordCreateOrConnectWithoutProfileInput | SelfExclusionRecordCreateOrConnectWithoutProfileInput[]
    createMany?: SelfExclusionRecordCreateManyProfileInputEnvelope
    connect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
  }

  export type RealityCheckLogUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput> | RealityCheckLogCreateWithoutProfileInput[] | RealityCheckLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RealityCheckLogCreateOrConnectWithoutProfileInput | RealityCheckLogCreateOrConnectWithoutProfileInput[]
    createMany?: RealityCheckLogCreateManyProfileInputEnvelope
    connect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCountryCodeFieldUpdateOperationsInput = {
    set?: $Enums.CountryCode
  }

  export type EnumLanguageCodeFieldUpdateOperationsInput = {
    set?: $Enums.LanguageCode
  }

  export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPreferencesUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    upsert?: UserPreferencesUpsertWithoutProfileInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutProfileInput, UserPreferencesUpdateWithoutProfileInput>, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserLimitsUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserLimitsCreateOrConnectWithoutProfileInput
    upsert?: UserLimitsUpsertWithoutProfileInput
    disconnect?: UserLimitsWhereInput | boolean
    delete?: UserLimitsWhereInput | boolean
    connect?: UserLimitsWhereUniqueInput
    update?: XOR<XOR<UserLimitsUpdateToOneWithWhereWithoutProfileInput, UserLimitsUpdateWithoutProfileInput>, UserLimitsUncheckedUpdateWithoutProfileInput>
  }

  export type SelfExclusionRecordUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput> | SelfExclusionRecordCreateWithoutProfileInput[] | SelfExclusionRecordUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SelfExclusionRecordCreateOrConnectWithoutProfileInput | SelfExclusionRecordCreateOrConnectWithoutProfileInput[]
    upsert?: SelfExclusionRecordUpsertWithWhereUniqueWithoutProfileInput | SelfExclusionRecordUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SelfExclusionRecordCreateManyProfileInputEnvelope
    set?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    disconnect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    delete?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    connect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    update?: SelfExclusionRecordUpdateWithWhereUniqueWithoutProfileInput | SelfExclusionRecordUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SelfExclusionRecordUpdateManyWithWhereWithoutProfileInput | SelfExclusionRecordUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SelfExclusionRecordScalarWhereInput | SelfExclusionRecordScalarWhereInput[]
  }

  export type RealityCheckLogUpdateManyWithoutProfileNestedInput = {
    create?: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput> | RealityCheckLogCreateWithoutProfileInput[] | RealityCheckLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RealityCheckLogCreateOrConnectWithoutProfileInput | RealityCheckLogCreateOrConnectWithoutProfileInput[]
    upsert?: RealityCheckLogUpsertWithWhereUniqueWithoutProfileInput | RealityCheckLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: RealityCheckLogCreateManyProfileInputEnvelope
    set?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    disconnect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    delete?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    connect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    update?: RealityCheckLogUpdateWithWhereUniqueWithoutProfileInput | RealityCheckLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: RealityCheckLogUpdateManyWithWhereWithoutProfileInput | RealityCheckLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: RealityCheckLogScalarWhereInput | RealityCheckLogScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    upsert?: UserPreferencesUpsertWithoutProfileInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutProfileInput, UserPreferencesUpdateWithoutProfileInput>, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserLimitsUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserLimitsCreateOrConnectWithoutProfileInput
    upsert?: UserLimitsUpsertWithoutProfileInput
    disconnect?: UserLimitsWhereInput | boolean
    delete?: UserLimitsWhereInput | boolean
    connect?: UserLimitsWhereUniqueInput
    update?: XOR<XOR<UserLimitsUpdateToOneWithWhereWithoutProfileInput, UserLimitsUpdateWithoutProfileInput>, UserLimitsUncheckedUpdateWithoutProfileInput>
  }

  export type SelfExclusionRecordUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput> | SelfExclusionRecordCreateWithoutProfileInput[] | SelfExclusionRecordUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SelfExclusionRecordCreateOrConnectWithoutProfileInput | SelfExclusionRecordCreateOrConnectWithoutProfileInput[]
    upsert?: SelfExclusionRecordUpsertWithWhereUniqueWithoutProfileInput | SelfExclusionRecordUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SelfExclusionRecordCreateManyProfileInputEnvelope
    set?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    disconnect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    delete?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    connect?: SelfExclusionRecordWhereUniqueInput | SelfExclusionRecordWhereUniqueInput[]
    update?: SelfExclusionRecordUpdateWithWhereUniqueWithoutProfileInput | SelfExclusionRecordUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SelfExclusionRecordUpdateManyWithWhereWithoutProfileInput | SelfExclusionRecordUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SelfExclusionRecordScalarWhereInput | SelfExclusionRecordScalarWhereInput[]
  }

  export type RealityCheckLogUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput> | RealityCheckLogCreateWithoutProfileInput[] | RealityCheckLogUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: RealityCheckLogCreateOrConnectWithoutProfileInput | RealityCheckLogCreateOrConnectWithoutProfileInput[]
    upsert?: RealityCheckLogUpsertWithWhereUniqueWithoutProfileInput | RealityCheckLogUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: RealityCheckLogCreateManyProfileInputEnvelope
    set?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    disconnect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    delete?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    connect?: RealityCheckLogWhereUniqueInput | RealityCheckLogWhereUniqueInput[]
    update?: RealityCheckLogUpdateWithWhereUniqueWithoutProfileInput | RealityCheckLogUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: RealityCheckLogUpdateManyWithWhereWithoutProfileInput | RealityCheckLogUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: RealityCheckLogScalarWhereInput | RealityCheckLogScalarWhereInput[]
  }

  export type UserPreferencesCreatefavoriteSportsInput = {
    set: string[]
  }

  export type UserPreferencesCreatefavoriteLeaguesInput = {
    set: string[]
  }

  export type UserPreferencesCreatefavoriteTeamsInput = {
    set: string[]
  }

  export type UserProfileCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPreferencesInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnumOddsFormatFieldUpdateOperationsInput = {
    set?: $Enums.OddsFormat
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPreferencesUpdatefavoriteSportsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatefavoriteLeaguesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatefavoriteTeamsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPreferencesInput
    upsert?: UserProfileUpsertWithoutPreferencesInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutPreferencesInput, UserProfileUpdateWithoutPreferencesInput>, UserProfileUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserProfileCreateNestedOneWithoutLimitsInput = {
    create?: XOR<UserProfileCreateWithoutLimitsInput, UserProfileUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutLimitsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUpdateOneRequiredWithoutLimitsNestedInput = {
    create?: XOR<UserProfileCreateWithoutLimitsInput, UserProfileUncheckedCreateWithoutLimitsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutLimitsInput
    upsert?: UserProfileUpsertWithoutLimitsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutLimitsInput, UserProfileUpdateWithoutLimitsInput>, UserProfileUncheckedUpdateWithoutLimitsInput>
  }

  export type UserProfileCreateNestedOneWithoutSelfExclusionRecordsInput = {
    create?: XOR<UserProfileCreateWithoutSelfExclusionRecordsInput, UserProfileUncheckedCreateWithoutSelfExclusionRecordsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSelfExclusionRecordsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type EnumSelfExcludeDurationFieldUpdateOperationsInput = {
    set?: $Enums.SelfExcludeDuration
  }

  export type UserProfileUpdateOneRequiredWithoutSelfExclusionRecordsNestedInput = {
    create?: XOR<UserProfileCreateWithoutSelfExclusionRecordsInput, UserProfileUncheckedCreateWithoutSelfExclusionRecordsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutSelfExclusionRecordsInput
    upsert?: UserProfileUpsertWithoutSelfExclusionRecordsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutSelfExclusionRecordsInput, UserProfileUpdateWithoutSelfExclusionRecordsInput>, UserProfileUncheckedUpdateWithoutSelfExclusionRecordsInput>
  }

  export type UserProfileCreateNestedOneWithoutRealityCheckLogsInput = {
    create?: XOR<UserProfileCreateWithoutRealityCheckLogsInput, UserProfileUncheckedCreateWithoutRealityCheckLogsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutRealityCheckLogsInput
    connect?: UserProfileWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserProfileUpdateOneRequiredWithoutRealityCheckLogsNestedInput = {
    create?: XOR<UserProfileCreateWithoutRealityCheckLogsInput, UserProfileUncheckedCreateWithoutRealityCheckLogsInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutRealityCheckLogsInput
    upsert?: UserProfileUpsertWithoutRealityCheckLogsInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutRealityCheckLogsInput, UserProfileUpdateWithoutRealityCheckLogsInput>, UserProfileUncheckedUpdateWithoutRealityCheckLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumCountryCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeFilter<$PrismaModel> | $Enums.CountryCode
  }

  export type NestedEnumLanguageCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageCode | EnumLanguageCodeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageCodeFilter<$PrismaModel> | $Enums.LanguageCode
  }

  export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CountryCode | EnumCountryCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CountryCode[] | ListEnumCountryCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCountryCodeWithAggregatesFilter<$PrismaModel> | $Enums.CountryCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCountryCodeFilter<$PrismaModel>
    _max?: NestedEnumCountryCodeFilter<$PrismaModel>
  }

  export type NestedEnumLanguageCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LanguageCode | EnumLanguageCodeFieldRefInput<$PrismaModel>
    in?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LanguageCode[] | ListEnumLanguageCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageCodeWithAggregatesFilter<$PrismaModel> | $Enums.LanguageCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageCodeFilter<$PrismaModel>
    _max?: NestedEnumLanguageCodeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumOddsFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.OddsFormat | EnumOddsFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOddsFormatFilter<$PrismaModel> | $Enums.OddsFormat
  }

  export type NestedEnumOddsFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OddsFormat | EnumOddsFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OddsFormat[] | ListEnumOddsFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOddsFormatWithAggregatesFilter<$PrismaModel> | $Enums.OddsFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOddsFormatFilter<$PrismaModel>
    _max?: NestedEnumOddsFormatFilter<$PrismaModel>
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

  export type NestedEnumSelfExcludeDurationFilter<$PrismaModel = never> = {
    equals?: $Enums.SelfExcludeDuration | EnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    in?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    not?: NestedEnumSelfExcludeDurationFilter<$PrismaModel> | $Enums.SelfExcludeDuration
  }

  export type NestedEnumSelfExcludeDurationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelfExcludeDuration | EnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    in?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelfExcludeDuration[] | ListEnumSelfExcludeDurationFieldRefInput<$PrismaModel>
    not?: NestedEnumSelfExcludeDurationWithAggregatesFilter<$PrismaModel> | $Enums.SelfExcludeDuration
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSelfExcludeDurationFilter<$PrismaModel>
    _max?: NestedEnumSelfExcludeDurationFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutProfileInput = {
    oddsFormat?: $Enums.OddsFormat
    defaultStake?: number | null
    betAcceptanceType?: string
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: number | null
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: number
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: UserPreferencesCreatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesCreatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesCreatefavoriteTeamsInput | string[]
    deletedAt?: Date | string | null
  }

  export type UserPreferencesUncheckedCreateWithoutProfileInput = {
    oddsFormat?: $Enums.OddsFormat
    defaultStake?: number | null
    betAcceptanceType?: string
    showLiveScores?: boolean
    showFavoritesOnly?: boolean
    darkMode?: boolean
    autoCashoutEnabled?: boolean
    autoCashoutThreshold?: number | null
    realityCheckEnabled?: boolean
    realityCheckIntervalMin?: number
    quickBetEnabled?: boolean
    soundEnabled?: boolean
    notificationSoundsEnabled?: boolean
    favoriteSports?: UserPreferencesCreatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesCreatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesCreatefavoriteTeamsInput | string[]
    deletedAt?: Date | string | null
  }

  export type UserPreferencesCreateOrConnectWithoutProfileInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
  }

  export type UserLimitsCreateWithoutProfileInput = {
    depositDailyLimit?: number | null
    depositWeeklyLimit?: number | null
    depositMonthlyLimit?: number | null
    wagerDailyLimit?: number | null
    wagerWeeklyLimit?: number | null
    wagerMonthlyLimit?: number | null
    lossDailyLimit?: number | null
    lossWeeklyLimit?: number | null
    lossMonthlyLimit?: number | null
    sessionTimeLimitMin?: number | null
    stakePerBetMax?: number | null
    stakePerBetMin?: number
    withdrawalDailyLimit?: number | null
    withdrawalMonthlyLimit?: number | null
    kycLevelApplied?: number
    deletedAt?: Date | string | null
  }

  export type UserLimitsUncheckedCreateWithoutProfileInput = {
    depositDailyLimit?: number | null
    depositWeeklyLimit?: number | null
    depositMonthlyLimit?: number | null
    wagerDailyLimit?: number | null
    wagerWeeklyLimit?: number | null
    wagerMonthlyLimit?: number | null
    lossDailyLimit?: number | null
    lossWeeklyLimit?: number | null
    lossMonthlyLimit?: number | null
    sessionTimeLimitMin?: number | null
    stakePerBetMax?: number | null
    stakePerBetMin?: number
    withdrawalDailyLimit?: number | null
    withdrawalMonthlyLimit?: number | null
    kycLevelApplied?: number
    deletedAt?: Date | string | null
  }

  export type UserLimitsCreateOrConnectWithoutProfileInput = {
    where: UserLimitsWhereUniqueInput
    create: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
  }

  export type SelfExclusionRecordCreateWithoutProfileInput = {
    id?: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
  }

  export type SelfExclusionRecordUncheckedCreateWithoutProfileInput = {
    id?: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
  }

  export type SelfExclusionRecordCreateOrConnectWithoutProfileInput = {
    where: SelfExclusionRecordWhereUniqueInput
    create: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput>
  }

  export type SelfExclusionRecordCreateManyProfileInputEnvelope = {
    data: SelfExclusionRecordCreateManyProfileInput | SelfExclusionRecordCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type RealityCheckLogCreateWithoutProfileInput = {
    id?: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
  }

  export type RealityCheckLogUncheckedCreateWithoutProfileInput = {
    id?: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
  }

  export type RealityCheckLogCreateOrConnectWithoutProfileInput = {
    where: RealityCheckLogWhereUniqueInput
    create: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput>
  }

  export type RealityCheckLogCreateManyProfileInputEnvelope = {
    data: RealityCheckLogCreateManyProfileInput | RealityCheckLogCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesUpsertWithoutProfileInput = {
    update: XOR<UserPreferencesUpdateWithoutProfileInput, UserPreferencesUncheckedUpdateWithoutProfileInput>
    create: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutProfileInput, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserPreferencesUpdateWithoutProfileInput = {
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPreferencesUncheckedUpdateWithoutProfileInput = {
    oddsFormat?: EnumOddsFormatFieldUpdateOperationsInput | $Enums.OddsFormat
    defaultStake?: NullableFloatFieldUpdateOperationsInput | number | null
    betAcceptanceType?: StringFieldUpdateOperationsInput | string
    showLiveScores?: BoolFieldUpdateOperationsInput | boolean
    showFavoritesOnly?: BoolFieldUpdateOperationsInput | boolean
    darkMode?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutThreshold?: NullableFloatFieldUpdateOperationsInput | number | null
    realityCheckEnabled?: BoolFieldUpdateOperationsInput | boolean
    realityCheckIntervalMin?: IntFieldUpdateOperationsInput | number
    quickBetEnabled?: BoolFieldUpdateOperationsInput | boolean
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    notificationSoundsEnabled?: BoolFieldUpdateOperationsInput | boolean
    favoriteSports?: UserPreferencesUpdatefavoriteSportsInput | string[]
    favoriteLeagues?: UserPreferencesUpdatefavoriteLeaguesInput | string[]
    favoriteTeams?: UserPreferencesUpdatefavoriteTeamsInput | string[]
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLimitsUpsertWithoutProfileInput = {
    update: XOR<UserLimitsUpdateWithoutProfileInput, UserLimitsUncheckedUpdateWithoutProfileInput>
    create: XOR<UserLimitsCreateWithoutProfileInput, UserLimitsUncheckedCreateWithoutProfileInput>
    where?: UserLimitsWhereInput
  }

  export type UserLimitsUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserLimitsWhereInput
    data: XOR<UserLimitsUpdateWithoutProfileInput, UserLimitsUncheckedUpdateWithoutProfileInput>
  }

  export type UserLimitsUpdateWithoutProfileInput = {
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLimitsUncheckedUpdateWithoutProfileInput = {
    depositDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    depositMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    wagerMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossWeeklyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    lossMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    sessionTimeLimitMin?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerBetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    stakePerBetMin?: FloatFieldUpdateOperationsInput | number
    withdrawalDailyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    withdrawalMonthlyLimit?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SelfExclusionRecordUpsertWithWhereUniqueWithoutProfileInput = {
    where: SelfExclusionRecordWhereUniqueInput
    update: XOR<SelfExclusionRecordUpdateWithoutProfileInput, SelfExclusionRecordUncheckedUpdateWithoutProfileInput>
    create: XOR<SelfExclusionRecordCreateWithoutProfileInput, SelfExclusionRecordUncheckedCreateWithoutProfileInput>
  }

  export type SelfExclusionRecordUpdateWithWhereUniqueWithoutProfileInput = {
    where: SelfExclusionRecordWhereUniqueInput
    data: XOR<SelfExclusionRecordUpdateWithoutProfileInput, SelfExclusionRecordUncheckedUpdateWithoutProfileInput>
  }

  export type SelfExclusionRecordUpdateManyWithWhereWithoutProfileInput = {
    where: SelfExclusionRecordScalarWhereInput
    data: XOR<SelfExclusionRecordUpdateManyMutationInput, SelfExclusionRecordUncheckedUpdateManyWithoutProfileInput>
  }

  export type SelfExclusionRecordScalarWhereInput = {
    AND?: SelfExclusionRecordScalarWhereInput | SelfExclusionRecordScalarWhereInput[]
    OR?: SelfExclusionRecordScalarWhereInput[]
    NOT?: SelfExclusionRecordScalarWhereInput | SelfExclusionRecordScalarWhereInput[]
    id?: UuidFilter<"SelfExclusionRecord"> | string
    userId?: UuidFilter<"SelfExclusionRecord"> | string
    duration?: EnumSelfExcludeDurationFilter<"SelfExclusionRecord"> | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFilter<"SelfExclusionRecord"> | Date | string
    endsAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    reason?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    revokedAt?: DateTimeNullableFilter<"SelfExclusionRecord"> | Date | string | null
    revokedBy?: StringNullableFilter<"SelfExclusionRecord"> | string | null
    isActive?: BoolFilter<"SelfExclusionRecord"> | boolean
  }

  export type RealityCheckLogUpsertWithWhereUniqueWithoutProfileInput = {
    where: RealityCheckLogWhereUniqueInput
    update: XOR<RealityCheckLogUpdateWithoutProfileInput, RealityCheckLogUncheckedUpdateWithoutProfileInput>
    create: XOR<RealityCheckLogCreateWithoutProfileInput, RealityCheckLogUncheckedCreateWithoutProfileInput>
  }

  export type RealityCheckLogUpdateWithWhereUniqueWithoutProfileInput = {
    where: RealityCheckLogWhereUniqueInput
    data: XOR<RealityCheckLogUpdateWithoutProfileInput, RealityCheckLogUncheckedUpdateWithoutProfileInput>
  }

  export type RealityCheckLogUpdateManyWithWhereWithoutProfileInput = {
    where: RealityCheckLogScalarWhereInput
    data: XOR<RealityCheckLogUpdateManyMutationInput, RealityCheckLogUncheckedUpdateManyWithoutProfileInput>
  }

  export type RealityCheckLogScalarWhereInput = {
    AND?: RealityCheckLogScalarWhereInput | RealityCheckLogScalarWhereInput[]
    OR?: RealityCheckLogScalarWhereInput[]
    NOT?: RealityCheckLogScalarWhereInput | RealityCheckLogScalarWhereInput[]
    id?: UuidFilter<"RealityCheckLog"> | string
    userId?: UuidFilter<"RealityCheckLog"> | string
    sessionId?: StringFilter<"RealityCheckLog"> | string
    sessionStartAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    checkAt?: DateTimeFilter<"RealityCheckLog"> | Date | string
    acknowledgedAt?: DateTimeNullableFilter<"RealityCheckLog"> | Date | string | null
    continuePlay?: BoolNullableFilter<"RealityCheckLog"> | boolean | null
    wageredDuringSession?: FloatFilter<"RealityCheckLog"> | number
    won?: FloatFilter<"RealityCheckLog"> | number
    lost?: FloatFilter<"RealityCheckLog"> | number
    net?: FloatFilter<"RealityCheckLog"> | number
  }

  export type UserProfileCreateWithoutPreferencesInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    limits?: UserLimitsCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutPreferencesInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    limits?: UserLimitsUncheckedCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutPreferencesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
  }

  export type UserProfileUpsertWithoutPreferencesInput = {
    update: XOR<UserProfileUpdateWithoutPreferencesInput, UserProfileUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutPreferencesInput, UserProfileUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserProfileUpdateWithoutPreferencesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limits?: UserLimitsUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutPreferencesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    limits?: UserLimitsUncheckedUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileCreateWithoutLimitsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutLimitsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedCreateNestedManyWithoutProfileInput
    realityCheckLogs?: RealityCheckLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutLimitsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutLimitsInput, UserProfileUncheckedCreateWithoutLimitsInput>
  }

  export type UserProfileUpsertWithoutLimitsInput = {
    update: XOR<UserProfileUpdateWithoutLimitsInput, UserProfileUncheckedUpdateWithoutLimitsInput>
    create: XOR<UserProfileCreateWithoutLimitsInput, UserProfileUncheckedCreateWithoutLimitsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutLimitsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutLimitsInput, UserProfileUncheckedUpdateWithoutLimitsInput>
  }

  export type UserProfileUpdateWithoutLimitsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutLimitsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedUpdateManyWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileCreateWithoutSelfExclusionRecordsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
    limits?: UserLimitsCreateNestedOneWithoutProfileInput
    realityCheckLogs?: RealityCheckLogCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutSelfExclusionRecordsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
    limits?: UserLimitsUncheckedCreateNestedOneWithoutProfileInput
    realityCheckLogs?: RealityCheckLogUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutSelfExclusionRecordsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutSelfExclusionRecordsInput, UserProfileUncheckedCreateWithoutSelfExclusionRecordsInput>
  }

  export type UserProfileUpsertWithoutSelfExclusionRecordsInput = {
    update: XOR<UserProfileUpdateWithoutSelfExclusionRecordsInput, UserProfileUncheckedUpdateWithoutSelfExclusionRecordsInput>
    create: XOR<UserProfileCreateWithoutSelfExclusionRecordsInput, UserProfileUncheckedCreateWithoutSelfExclusionRecordsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutSelfExclusionRecordsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutSelfExclusionRecordsInput, UserProfileUncheckedUpdateWithoutSelfExclusionRecordsInput>
  }

  export type UserProfileUpdateWithoutSelfExclusionRecordsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUpdateOneWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutSelfExclusionRecordsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUncheckedUpdateOneWithoutProfileNestedInput
    realityCheckLogs?: RealityCheckLogUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileCreateWithoutRealityCheckLogsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
    limits?: UserLimitsCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordCreateNestedManyWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutRealityCheckLogsInput = {
    userId: string
    firstName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    country?: $Enums.CountryCode
    phoneNumber?: string | null
    phoneVerifiedAt?: Date | string | null
    city?: string | null
    address?: string | null
    postalCode?: string | null
    preferredLanguage?: $Enums.LanguageCode
    preferredCurrency?: $Enums.CurrencyCode
    timezone?: string | null
    marketingOptIn?: boolean
    smsOptIn?: boolean
    pushOptIn?: boolean
    status?: $Enums.UserStatus
    registeredFromIp?: string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: string | null
    vipLevel?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
    limits?: UserLimitsUncheckedCreateNestedOneWithoutProfileInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedCreateNestedManyWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutRealityCheckLogsInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutRealityCheckLogsInput, UserProfileUncheckedCreateWithoutRealityCheckLogsInput>
  }

  export type UserProfileUpsertWithoutRealityCheckLogsInput = {
    update: XOR<UserProfileUpdateWithoutRealityCheckLogsInput, UserProfileUncheckedUpdateWithoutRealityCheckLogsInput>
    create: XOR<UserProfileCreateWithoutRealityCheckLogsInput, UserProfileUncheckedCreateWithoutRealityCheckLogsInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutRealityCheckLogsInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutRealityCheckLogsInput, UserProfileUncheckedUpdateWithoutRealityCheckLogsInput>
  }

  export type UserProfileUpdateWithoutRealityCheckLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUpdateManyWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutRealityCheckLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    country?: EnumCountryCodeFieldUpdateOperationsInput | $Enums.CountryCode
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    preferredLanguage?: EnumLanguageCodeFieldUpdateOperationsInput | $Enums.LanguageCode
    preferredCurrency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    marketingOptIn?: BoolFieldUpdateOperationsInput | boolean
    smsOptIn?: BoolFieldUpdateOperationsInput | boolean
    pushOptIn?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    registeredFromIp?: NullableStringFieldUpdateOperationsInput | string | null
    registeredLocation?: NullableJsonNullValueInput | InputJsonValue
    affiliateCode?: NullableStringFieldUpdateOperationsInput | string | null
    vipLevel?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
    limits?: UserLimitsUncheckedUpdateOneWithoutProfileNestedInput
    selfExclusionRecords?: SelfExclusionRecordUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type SelfExclusionRecordCreateManyProfileInput = {
    id?: string
    duration: $Enums.SelfExcludeDuration
    startedAt?: Date | string
    endsAt?: Date | string | null
    reason?: string | null
    revokedAt?: Date | string | null
    revokedBy?: string | null
    isActive?: boolean
  }

  export type RealityCheckLogCreateManyProfileInput = {
    id?: string
    sessionId: string
    sessionStartAt: Date | string
    checkAt?: Date | string
    acknowledgedAt?: Date | string | null
    continuePlay?: boolean | null
    wageredDuringSession?: number
    won?: number
    lost?: number
    net?: number
  }

  export type SelfExclusionRecordUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelfExclusionRecordUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SelfExclusionRecordUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: EnumSelfExcludeDurationFieldUpdateOperationsInput | $Enums.SelfExcludeDuration
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RealityCheckLogUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type RealityCheckLogUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }

  export type RealityCheckLogUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    sessionStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    continuePlay?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wageredDuringSession?: FloatFieldUpdateOperationsInput | number
    won?: FloatFieldUpdateOperationsInput | number
    lost?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserProfileCountOutputTypeDefaultArgs instead
     */
    export type UserProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesDefaultArgs instead
     */
    export type UserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLimitsDefaultArgs instead
     */
    export type UserLimitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLimitsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SelfExclusionRecordDefaultArgs instead
     */
    export type SelfExclusionRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SelfExclusionRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RealityCheckLogDefaultArgs instead
     */
    export type RealityCheckLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RealityCheckLogDefaultArgs<ExtArgs>

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