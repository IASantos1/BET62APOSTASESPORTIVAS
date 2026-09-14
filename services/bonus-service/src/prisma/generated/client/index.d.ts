
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
 * Model BonusCampaign
 * 
 */
export type BonusCampaign = $Result.DefaultSelection<Prisma.$BonusCampaignPayload>
/**
 * Model UserBonus
 * 
 */
export type UserBonus = $Result.DefaultSelection<Prisma.$UserBonusPayload>
/**
 * Model RolloverLedgerEntry
 * 
 */
export type RolloverLedgerEntry = $Result.DefaultSelection<Prisma.$RolloverLedgerEntryPayload>
/**
 * Model FreeBet
 * 
 */
export type FreeBet = $Result.DefaultSelection<Prisma.$FreeBetPayload>
/**
 * Model CasinoFreeSpin
 * 
 */
export type CasinoFreeSpin = $Result.DefaultSelection<Prisma.$CasinoFreeSpinPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BonusType: {
  WELCOME_MATCH: 'WELCOME_MATCH',
  RELOAD_MATCH: 'RELOAD_MATCH',
  FREEBET: 'FREEBET',
  FREE_SPINS: 'FREE_SPINS',
  CASHBACK_LOSS: 'CASHBACK_LOSS',
  CASHBACK_DEPOSIT: 'CASHBACK_DEPOSIT',
  RISK_FREE_BET: 'RISK_FREE_BET',
  REFERRAL: 'REFERRAL',
  LOYALTY: 'LOYALTY',
  COMP_POINTS: 'COMP_POINTS',
  NO_DEPOSIT: 'NO_DEPOSIT',
  PERSONALIZED: 'PERSONALIZED'
};

export type BonusType = (typeof BonusType)[keyof typeof BonusType]


export const BonusTrigger: {
  MANUAL: 'MANUAL',
  FIRST_DEPOSIT: 'FIRST_DEPOSIT',
  DEPOSIT: 'DEPOSIT',
  SIGNUP: 'SIGNUP',
  BET_WON: 'BET_WON',
  BET_LOST: 'BET_LOST',
  LOYALTY_LEVEL: 'LOYALTY_LEVEL',
  REFERRAL_SIGNUP: 'REFERRAL_SIGNUP',
  REFERRAL_DEPOSIT: 'REFERRAL_DEPOSIT',
  WEEKLY_SCHEDULED: 'WEEKLY_SCHEDULED',
  MONTHLY_SCHEDULED: 'MONTHLY_SCHEDULED',
  CAMPAIGN_CODE: 'CAMPAIGN_CODE',
  BIRTHDAY: 'BIRTHDAY'
};

export type BonusTrigger = (typeof BonusTrigger)[keyof typeof BonusTrigger]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  EXPIRED: 'EXPIRED',
  ARCHIVED: 'ARCHIVED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const CasinoContributionCategory: {
  SLOTS_ONLY: 'SLOTS_ONLY',
  STANDARD_MIX: 'STANDARD_MIX',
  TABLES_ONLY: 'TABLES_ONLY',
  LIVE_DEALER_EXCLUDED: 'LIVE_DEALER_EXCLUDED',
  SPORTS_ONLY: 'SPORTS_ONLY'
};

export type CasinoContributionCategory = (typeof CasinoContributionCategory)[keyof typeof CasinoContributionCategory]


export const BonusStatus: {
  AVAILABLE: 'AVAILABLE',
  ACTIVE: 'ACTIVE',
  LOCKED: 'LOCKED',
  ROLLOVER_COMPLETE: 'ROLLOVER_COMPLETE',
  RELEASED: 'RELEASED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  USED: 'USED',
  VOID: 'VOID'
};

export type BonusStatus = (typeof BonusStatus)[keyof typeof BonusStatus]


export const RolloverStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETE: 'COMPLETE',
  EXPIRED: 'EXPIRED',
  FORFEITED: 'FORFEITED',
  RELEASED: 'RELEASED'
};

export type RolloverStatus = (typeof RolloverStatus)[keyof typeof RolloverStatus]

}

export type BonusType = $Enums.BonusType

export const BonusType: typeof $Enums.BonusType

export type BonusTrigger = $Enums.BonusTrigger

export const BonusTrigger: typeof $Enums.BonusTrigger

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type CasinoContributionCategory = $Enums.CasinoContributionCategory

export const CasinoContributionCategory: typeof $Enums.CasinoContributionCategory

export type BonusStatus = $Enums.BonusStatus

export const BonusStatus: typeof $Enums.BonusStatus

export type RolloverStatus = $Enums.RolloverStatus

export const RolloverStatus: typeof $Enums.RolloverStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BonusCampaigns
 * const bonusCampaigns = await prisma.bonusCampaign.findMany()
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
   * // Fetch zero or more BonusCampaigns
   * const bonusCampaigns = await prisma.bonusCampaign.findMany()
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
   * `prisma.bonusCampaign`: Exposes CRUD operations for the **BonusCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BonusCampaigns
    * const bonusCampaigns = await prisma.bonusCampaign.findMany()
    * ```
    */
  get bonusCampaign(): Prisma.BonusCampaignDelegate<ExtArgs>;

  /**
   * `prisma.userBonus`: Exposes CRUD operations for the **UserBonus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBonuses
    * const userBonuses = await prisma.userBonus.findMany()
    * ```
    */
  get userBonus(): Prisma.UserBonusDelegate<ExtArgs>;

  /**
   * `prisma.rolloverLedgerEntry`: Exposes CRUD operations for the **RolloverLedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolloverLedgerEntries
    * const rolloverLedgerEntries = await prisma.rolloverLedgerEntry.findMany()
    * ```
    */
  get rolloverLedgerEntry(): Prisma.RolloverLedgerEntryDelegate<ExtArgs>;

  /**
   * `prisma.freeBet`: Exposes CRUD operations for the **FreeBet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FreeBets
    * const freeBets = await prisma.freeBet.findMany()
    * ```
    */
  get freeBet(): Prisma.FreeBetDelegate<ExtArgs>;

  /**
   * `prisma.casinoFreeSpin`: Exposes CRUD operations for the **CasinoFreeSpin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoFreeSpins
    * const casinoFreeSpins = await prisma.casinoFreeSpin.findMany()
    * ```
    */
  get casinoFreeSpin(): Prisma.CasinoFreeSpinDelegate<ExtArgs>;
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
    BonusCampaign: 'BonusCampaign',
    UserBonus: 'UserBonus',
    RolloverLedgerEntry: 'RolloverLedgerEntry',
    FreeBet: 'FreeBet',
    CasinoFreeSpin: 'CasinoFreeSpin'
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
      modelProps: "bonusCampaign" | "userBonus" | "rolloverLedgerEntry" | "freeBet" | "casinoFreeSpin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BonusCampaign: {
        payload: Prisma.$BonusCampaignPayload<ExtArgs>
        fields: Prisma.BonusCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BonusCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BonusCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          findFirst: {
            args: Prisma.BonusCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BonusCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          findMany: {
            args: Prisma.BonusCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>[]
          }
          create: {
            args: Prisma.BonusCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          createMany: {
            args: Prisma.BonusCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BonusCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>[]
          }
          delete: {
            args: Prisma.BonusCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          update: {
            args: Prisma.BonusCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          deleteMany: {
            args: Prisma.BonusCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BonusCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BonusCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusCampaignPayload>
          }
          aggregate: {
            args: Prisma.BonusCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBonusCampaign>
          }
          groupBy: {
            args: Prisma.BonusCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<BonusCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.BonusCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<BonusCampaignCountAggregateOutputType> | number
          }
        }
      }
      UserBonus: {
        payload: Prisma.$UserBonusPayload<ExtArgs>
        fields: Prisma.UserBonusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBonusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBonusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          findFirst: {
            args: Prisma.UserBonusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBonusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          findMany: {
            args: Prisma.UserBonusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>[]
          }
          create: {
            args: Prisma.UserBonusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          createMany: {
            args: Prisma.UserBonusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBonusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>[]
          }
          delete: {
            args: Prisma.UserBonusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          update: {
            args: Prisma.UserBonusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          deleteMany: {
            args: Prisma.UserBonusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBonusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBonusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBonusPayload>
          }
          aggregate: {
            args: Prisma.UserBonusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBonus>
          }
          groupBy: {
            args: Prisma.UserBonusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBonusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBonusCountArgs<ExtArgs>
            result: $Utils.Optional<UserBonusCountAggregateOutputType> | number
          }
        }
      }
      RolloverLedgerEntry: {
        payload: Prisma.$RolloverLedgerEntryPayload<ExtArgs>
        fields: Prisma.RolloverLedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolloverLedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolloverLedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.RolloverLedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolloverLedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          findMany: {
            args: Prisma.RolloverLedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>[]
          }
          create: {
            args: Prisma.RolloverLedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          createMany: {
            args: Prisma.RolloverLedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolloverLedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.RolloverLedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          update: {
            args: Prisma.RolloverLedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.RolloverLedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolloverLedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolloverLedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolloverLedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.RolloverLedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolloverLedgerEntry>
          }
          groupBy: {
            args: Prisma.RolloverLedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolloverLedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolloverLedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RolloverLedgerEntryCountAggregateOutputType> | number
          }
        }
      }
      FreeBet: {
        payload: Prisma.$FreeBetPayload<ExtArgs>
        fields: Prisma.FreeBetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FreeBetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FreeBetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          findFirst: {
            args: Prisma.FreeBetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FreeBetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          findMany: {
            args: Prisma.FreeBetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>[]
          }
          create: {
            args: Prisma.FreeBetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          createMany: {
            args: Prisma.FreeBetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FreeBetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>[]
          }
          delete: {
            args: Prisma.FreeBetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          update: {
            args: Prisma.FreeBetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          deleteMany: {
            args: Prisma.FreeBetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FreeBetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FreeBetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FreeBetPayload>
          }
          aggregate: {
            args: Prisma.FreeBetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreeBet>
          }
          groupBy: {
            args: Prisma.FreeBetGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreeBetGroupByOutputType>[]
          }
          count: {
            args: Prisma.FreeBetCountArgs<ExtArgs>
            result: $Utils.Optional<FreeBetCountAggregateOutputType> | number
          }
        }
      }
      CasinoFreeSpin: {
        payload: Prisma.$CasinoFreeSpinPayload<ExtArgs>
        fields: Prisma.CasinoFreeSpinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoFreeSpinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoFreeSpinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          findFirst: {
            args: Prisma.CasinoFreeSpinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoFreeSpinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          findMany: {
            args: Prisma.CasinoFreeSpinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>[]
          }
          create: {
            args: Prisma.CasinoFreeSpinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          createMany: {
            args: Prisma.CasinoFreeSpinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoFreeSpinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>[]
          }
          delete: {
            args: Prisma.CasinoFreeSpinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          update: {
            args: Prisma.CasinoFreeSpinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          deleteMany: {
            args: Prisma.CasinoFreeSpinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoFreeSpinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoFreeSpinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoFreeSpinPayload>
          }
          aggregate: {
            args: Prisma.CasinoFreeSpinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoFreeSpin>
          }
          groupBy: {
            args: Prisma.CasinoFreeSpinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoFreeSpinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoFreeSpinCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoFreeSpinCountAggregateOutputType> | number
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
   * Count Type BonusCampaignCountOutputType
   */

  export type BonusCampaignCountOutputType = {
    userBonuses: number
    freeBets: number
    casinoFreeSpins: number
  }

  export type BonusCampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBonuses?: boolean | BonusCampaignCountOutputTypeCountUserBonusesArgs
    freeBets?: boolean | BonusCampaignCountOutputTypeCountFreeBetsArgs
    casinoFreeSpins?: boolean | BonusCampaignCountOutputTypeCountCasinoFreeSpinsArgs
  }

  // Custom InputTypes
  /**
   * BonusCampaignCountOutputType without action
   */
  export type BonusCampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaignCountOutputType
     */
    select?: BonusCampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BonusCampaignCountOutputType without action
   */
  export type BonusCampaignCountOutputTypeCountUserBonusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBonusWhereInput
  }

  /**
   * BonusCampaignCountOutputType without action
   */
  export type BonusCampaignCountOutputTypeCountFreeBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreeBetWhereInput
  }

  /**
   * BonusCampaignCountOutputType without action
   */
  export type BonusCampaignCountOutputTypeCountCasinoFreeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoFreeSpinWhereInput
  }


  /**
   * Count Type UserBonusCountOutputType
   */

  export type UserBonusCountOutputType = {
    rolloverLedgerEntries: number
  }

  export type UserBonusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolloverLedgerEntries?: boolean | UserBonusCountOutputTypeCountRolloverLedgerEntriesArgs
  }

  // Custom InputTypes
  /**
   * UserBonusCountOutputType without action
   */
  export type UserBonusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonusCountOutputType
     */
    select?: UserBonusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserBonusCountOutputType without action
   */
  export type UserBonusCountOutputTypeCountRolloverLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolloverLedgerEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BonusCampaign
   */

  export type AggregateBonusCampaign = {
    _count: BonusCampaignCountAggregateOutputType | null
    _avg: BonusCampaignAvgAggregateOutputType | null
    _sum: BonusCampaignSumAggregateOutputType | null
    _min: BonusCampaignMinAggregateOutputType | null
    _max: BonusCampaignMaxAggregateOutputType | null
  }

  export type BonusCampaignAvgAggregateOutputType = {
    matchPercent: Decimal | null
    maxAmount: Decimal | null
    minDepositAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    validityDays: number | null
    freeSpinsCount: number | null
    sportMinOdds: Decimal | null
    maxBonusPerUser: Decimal | null
  }

  export type BonusCampaignSumAggregateOutputType = {
    matchPercent: Decimal | null
    maxAmount: Decimal | null
    minDepositAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    validityDays: number | null
    freeSpinsCount: number | null
    sportMinOdds: Decimal | null
    maxBonusPerUser: Decimal | null
  }

  export type BonusCampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    bonusType: $Enums.BonusType | null
    trigger: $Enums.BonusTrigger | null
    status: $Enums.CampaignStatus | null
    matchPercent: Decimal | null
    maxAmount: Decimal | null
    minDepositAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    startsAt: Date | null
    expiresAt: Date | null
    validityDays: number | null
    freeSpinsCount: number | null
    freeSpinsGameId: string | null
    sportMinOdds: Decimal | null
    maxBonusPerUser: Decimal | null
    wageringSportAllowed: boolean | null
    wageringCasinoAllowed: boolean | null
    description: string | null
    termsHtml: string | null
    isPromo: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BonusCampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    bonusType: $Enums.BonusType | null
    trigger: $Enums.BonusTrigger | null
    status: $Enums.CampaignStatus | null
    matchPercent: Decimal | null
    maxAmount: Decimal | null
    minDepositAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    startsAt: Date | null
    expiresAt: Date | null
    validityDays: number | null
    freeSpinsCount: number | null
    freeSpinsGameId: string | null
    sportMinOdds: Decimal | null
    maxBonusPerUser: Decimal | null
    wageringSportAllowed: boolean | null
    wageringCasinoAllowed: boolean | null
    description: string | null
    termsHtml: string | null
    isPromo: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BonusCampaignCountAggregateOutputType = {
    id: number
    name: number
    code: number
    bonusType: number
    trigger: number
    status: number
    matchPercent: number
    maxAmount: number
    minDepositAmount: number
    minOddsRequirement: number
    rolloverMultiplier: number
    rolloverContributionCategory: number
    startsAt: number
    expiresAt: number
    validityDays: number
    freeSpinsCount: number
    freeSpinsGameId: number
    eligibleCountries: number
    eligibleSports: number
    sportMinOdds: number
    maxBonusPerUser: number
    wageringSportAllowed: number
    wageringCasinoAllowed: number
    description: number
    termsHtml: number
    metadata: number
    isPromo: number
    createdBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BonusCampaignAvgAggregateInputType = {
    matchPercent?: true
    maxAmount?: true
    minDepositAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    validityDays?: true
    freeSpinsCount?: true
    sportMinOdds?: true
    maxBonusPerUser?: true
  }

  export type BonusCampaignSumAggregateInputType = {
    matchPercent?: true
    maxAmount?: true
    minDepositAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    validityDays?: true
    freeSpinsCount?: true
    sportMinOdds?: true
    maxBonusPerUser?: true
  }

  export type BonusCampaignMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    bonusType?: true
    trigger?: true
    status?: true
    matchPercent?: true
    maxAmount?: true
    minDepositAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    startsAt?: true
    expiresAt?: true
    validityDays?: true
    freeSpinsCount?: true
    freeSpinsGameId?: true
    sportMinOdds?: true
    maxBonusPerUser?: true
    wageringSportAllowed?: true
    wageringCasinoAllowed?: true
    description?: true
    termsHtml?: true
    isPromo?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BonusCampaignMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    bonusType?: true
    trigger?: true
    status?: true
    matchPercent?: true
    maxAmount?: true
    minDepositAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    startsAt?: true
    expiresAt?: true
    validityDays?: true
    freeSpinsCount?: true
    freeSpinsGameId?: true
    sportMinOdds?: true
    maxBonusPerUser?: true
    wageringSportAllowed?: true
    wageringCasinoAllowed?: true
    description?: true
    termsHtml?: true
    isPromo?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BonusCampaignCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    bonusType?: true
    trigger?: true
    status?: true
    matchPercent?: true
    maxAmount?: true
    minDepositAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    startsAt?: true
    expiresAt?: true
    validityDays?: true
    freeSpinsCount?: true
    freeSpinsGameId?: true
    eligibleCountries?: true
    eligibleSports?: true
    sportMinOdds?: true
    maxBonusPerUser?: true
    wageringSportAllowed?: true
    wageringCasinoAllowed?: true
    description?: true
    termsHtml?: true
    metadata?: true
    isPromo?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BonusCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonusCampaign to aggregate.
     */
    where?: BonusCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusCampaigns to fetch.
     */
    orderBy?: BonusCampaignOrderByWithRelationInput | BonusCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BonusCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BonusCampaigns
    **/
    _count?: true | BonusCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BonusCampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BonusCampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BonusCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BonusCampaignMaxAggregateInputType
  }

  export type GetBonusCampaignAggregateType<T extends BonusCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateBonusCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonusCampaign[P]>
      : GetScalarType<T[P], AggregateBonusCampaign[P]>
  }




  export type BonusCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonusCampaignWhereInput
    orderBy?: BonusCampaignOrderByWithAggregationInput | BonusCampaignOrderByWithAggregationInput[]
    by: BonusCampaignScalarFieldEnum[] | BonusCampaignScalarFieldEnum
    having?: BonusCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BonusCampaignCountAggregateInputType | true
    _avg?: BonusCampaignAvgAggregateInputType
    _sum?: BonusCampaignSumAggregateInputType
    _min?: BonusCampaignMinAggregateInputType
    _max?: BonusCampaignMaxAggregateInputType
  }

  export type BonusCampaignGroupByOutputType = {
    id: string
    name: string
    code: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status: $Enums.CampaignStatus
    matchPercent: Decimal | null
    maxAmount: Decimal | null
    minDepositAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    startsAt: Date | null
    expiresAt: Date | null
    validityDays: number | null
    freeSpinsCount: number | null
    freeSpinsGameId: string | null
    eligibleCountries: string[]
    eligibleSports: string[]
    sportMinOdds: Decimal | null
    maxBonusPerUser: Decimal | null
    wageringSportAllowed: boolean
    wageringCasinoAllowed: boolean
    description: string | null
    termsHtml: string | null
    metadata: JsonValue | null
    isPromo: boolean
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BonusCampaignCountAggregateOutputType | null
    _avg: BonusCampaignAvgAggregateOutputType | null
    _sum: BonusCampaignSumAggregateOutputType | null
    _min: BonusCampaignMinAggregateOutputType | null
    _max: BonusCampaignMaxAggregateOutputType | null
  }

  type GetBonusCampaignGroupByPayload<T extends BonusCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BonusCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BonusCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BonusCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], BonusCampaignGroupByOutputType[P]>
        }
      >
    >


  export type BonusCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    bonusType?: boolean
    trigger?: boolean
    status?: boolean
    matchPercent?: boolean
    maxAmount?: boolean
    minDepositAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    validityDays?: boolean
    freeSpinsCount?: boolean
    freeSpinsGameId?: boolean
    eligibleCountries?: boolean
    eligibleSports?: boolean
    sportMinOdds?: boolean
    maxBonusPerUser?: boolean
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: boolean
    termsHtml?: boolean
    metadata?: boolean
    isPromo?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userBonuses?: boolean | BonusCampaign$userBonusesArgs<ExtArgs>
    freeBets?: boolean | BonusCampaign$freeBetsArgs<ExtArgs>
    casinoFreeSpins?: boolean | BonusCampaign$casinoFreeSpinsArgs<ExtArgs>
    _count?: boolean | BonusCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonusCampaign"]>

  export type BonusCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    bonusType?: boolean
    trigger?: boolean
    status?: boolean
    matchPercent?: boolean
    maxAmount?: boolean
    minDepositAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    validityDays?: boolean
    freeSpinsCount?: boolean
    freeSpinsGameId?: boolean
    eligibleCountries?: boolean
    eligibleSports?: boolean
    sportMinOdds?: boolean
    maxBonusPerUser?: boolean
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: boolean
    termsHtml?: boolean
    metadata?: boolean
    isPromo?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["bonusCampaign"]>

  export type BonusCampaignSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    bonusType?: boolean
    trigger?: boolean
    status?: boolean
    matchPercent?: boolean
    maxAmount?: boolean
    minDepositAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    validityDays?: boolean
    freeSpinsCount?: boolean
    freeSpinsGameId?: boolean
    eligibleCountries?: boolean
    eligibleSports?: boolean
    sportMinOdds?: boolean
    maxBonusPerUser?: boolean
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: boolean
    termsHtml?: boolean
    metadata?: boolean
    isPromo?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BonusCampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBonuses?: boolean | BonusCampaign$userBonusesArgs<ExtArgs>
    freeBets?: boolean | BonusCampaign$freeBetsArgs<ExtArgs>
    casinoFreeSpins?: boolean | BonusCampaign$casinoFreeSpinsArgs<ExtArgs>
    _count?: boolean | BonusCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BonusCampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BonusCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BonusCampaign"
    objects: {
      userBonuses: Prisma.$UserBonusPayload<ExtArgs>[]
      freeBets: Prisma.$FreeBetPayload<ExtArgs>[]
      casinoFreeSpins: Prisma.$CasinoFreeSpinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      bonusType: $Enums.BonusType
      trigger: $Enums.BonusTrigger
      status: $Enums.CampaignStatus
      matchPercent: Prisma.Decimal | null
      maxAmount: Prisma.Decimal | null
      minDepositAmount: Prisma.Decimal | null
      minOddsRequirement: Prisma.Decimal | null
      rolloverMultiplier: Prisma.Decimal | null
      rolloverContributionCategory: $Enums.CasinoContributionCategory | null
      startsAt: Date | null
      expiresAt: Date | null
      validityDays: number | null
      freeSpinsCount: number | null
      freeSpinsGameId: string | null
      eligibleCountries: string[]
      eligibleSports: string[]
      sportMinOdds: Prisma.Decimal | null
      maxBonusPerUser: Prisma.Decimal | null
      wageringSportAllowed: boolean
      wageringCasinoAllowed: boolean
      description: string | null
      termsHtml: string | null
      metadata: Prisma.JsonValue | null
      isPromo: boolean
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["bonusCampaign"]>
    composites: {}
  }

  type BonusCampaignGetPayload<S extends boolean | null | undefined | BonusCampaignDefaultArgs> = $Result.GetResult<Prisma.$BonusCampaignPayload, S>

  type BonusCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BonusCampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BonusCampaignCountAggregateInputType | true
    }

  export interface BonusCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BonusCampaign'], meta: { name: 'BonusCampaign' } }
    /**
     * Find zero or one BonusCampaign that matches the filter.
     * @param {BonusCampaignFindUniqueArgs} args - Arguments to find a BonusCampaign
     * @example
     * // Get one BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BonusCampaignFindUniqueArgs>(args: SelectSubset<T, BonusCampaignFindUniqueArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BonusCampaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BonusCampaignFindUniqueOrThrowArgs} args - Arguments to find a BonusCampaign
     * @example
     * // Get one BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BonusCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, BonusCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BonusCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignFindFirstArgs} args - Arguments to find a BonusCampaign
     * @example
     * // Get one BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BonusCampaignFindFirstArgs>(args?: SelectSubset<T, BonusCampaignFindFirstArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BonusCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignFindFirstOrThrowArgs} args - Arguments to find a BonusCampaign
     * @example
     * // Get one BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BonusCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, BonusCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BonusCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BonusCampaigns
     * const bonusCampaigns = await prisma.bonusCampaign.findMany()
     * 
     * // Get first 10 BonusCampaigns
     * const bonusCampaigns = await prisma.bonusCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bonusCampaignWithIdOnly = await prisma.bonusCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BonusCampaignFindManyArgs>(args?: SelectSubset<T, BonusCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BonusCampaign.
     * @param {BonusCampaignCreateArgs} args - Arguments to create a BonusCampaign.
     * @example
     * // Create one BonusCampaign
     * const BonusCampaign = await prisma.bonusCampaign.create({
     *   data: {
     *     // ... data to create a BonusCampaign
     *   }
     * })
     * 
     */
    create<T extends BonusCampaignCreateArgs>(args: SelectSubset<T, BonusCampaignCreateArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BonusCampaigns.
     * @param {BonusCampaignCreateManyArgs} args - Arguments to create many BonusCampaigns.
     * @example
     * // Create many BonusCampaigns
     * const bonusCampaign = await prisma.bonusCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BonusCampaignCreateManyArgs>(args?: SelectSubset<T, BonusCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BonusCampaigns and returns the data saved in the database.
     * @param {BonusCampaignCreateManyAndReturnArgs} args - Arguments to create many BonusCampaigns.
     * @example
     * // Create many BonusCampaigns
     * const bonusCampaign = await prisma.bonusCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BonusCampaigns and only return the `id`
     * const bonusCampaignWithIdOnly = await prisma.bonusCampaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BonusCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, BonusCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BonusCampaign.
     * @param {BonusCampaignDeleteArgs} args - Arguments to delete one BonusCampaign.
     * @example
     * // Delete one BonusCampaign
     * const BonusCampaign = await prisma.bonusCampaign.delete({
     *   where: {
     *     // ... filter to delete one BonusCampaign
     *   }
     * })
     * 
     */
    delete<T extends BonusCampaignDeleteArgs>(args: SelectSubset<T, BonusCampaignDeleteArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BonusCampaign.
     * @param {BonusCampaignUpdateArgs} args - Arguments to update one BonusCampaign.
     * @example
     * // Update one BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BonusCampaignUpdateArgs>(args: SelectSubset<T, BonusCampaignUpdateArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BonusCampaigns.
     * @param {BonusCampaignDeleteManyArgs} args - Arguments to filter BonusCampaigns to delete.
     * @example
     * // Delete a few BonusCampaigns
     * const { count } = await prisma.bonusCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BonusCampaignDeleteManyArgs>(args?: SelectSubset<T, BonusCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BonusCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BonusCampaigns
     * const bonusCampaign = await prisma.bonusCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BonusCampaignUpdateManyArgs>(args: SelectSubset<T, BonusCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BonusCampaign.
     * @param {BonusCampaignUpsertArgs} args - Arguments to update or create a BonusCampaign.
     * @example
     * // Update or create a BonusCampaign
     * const bonusCampaign = await prisma.bonusCampaign.upsert({
     *   create: {
     *     // ... data to create a BonusCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BonusCampaign we want to update
     *   }
     * })
     */
    upsert<T extends BonusCampaignUpsertArgs>(args: SelectSubset<T, BonusCampaignUpsertArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BonusCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignCountArgs} args - Arguments to filter BonusCampaigns to count.
     * @example
     * // Count the number of BonusCampaigns
     * const count = await prisma.bonusCampaign.count({
     *   where: {
     *     // ... the filter for the BonusCampaigns we want to count
     *   }
     * })
    **/
    count<T extends BonusCampaignCountArgs>(
      args?: Subset<T, BonusCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BonusCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BonusCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BonusCampaignAggregateArgs>(args: Subset<T, BonusCampaignAggregateArgs>): Prisma.PrismaPromise<GetBonusCampaignAggregateType<T>>

    /**
     * Group by BonusCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCampaignGroupByArgs} args - Group by arguments.
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
      T extends BonusCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BonusCampaignGroupByArgs['orderBy'] }
        : { orderBy?: BonusCampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BonusCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBonusCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BonusCampaign model
   */
  readonly fields: BonusCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BonusCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BonusCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBonuses<T extends BonusCampaign$userBonusesArgs<ExtArgs> = {}>(args?: Subset<T, BonusCampaign$userBonusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findMany"> | Null>
    freeBets<T extends BonusCampaign$freeBetsArgs<ExtArgs> = {}>(args?: Subset<T, BonusCampaign$freeBetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findMany"> | Null>
    casinoFreeSpins<T extends BonusCampaign$casinoFreeSpinsArgs<ExtArgs> = {}>(args?: Subset<T, BonusCampaign$casinoFreeSpinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the BonusCampaign model
   */ 
  interface BonusCampaignFieldRefs {
    readonly id: FieldRef<"BonusCampaign", 'String'>
    readonly name: FieldRef<"BonusCampaign", 'String'>
    readonly code: FieldRef<"BonusCampaign", 'String'>
    readonly bonusType: FieldRef<"BonusCampaign", 'BonusType'>
    readonly trigger: FieldRef<"BonusCampaign", 'BonusTrigger'>
    readonly status: FieldRef<"BonusCampaign", 'CampaignStatus'>
    readonly matchPercent: FieldRef<"BonusCampaign", 'Decimal'>
    readonly maxAmount: FieldRef<"BonusCampaign", 'Decimal'>
    readonly minDepositAmount: FieldRef<"BonusCampaign", 'Decimal'>
    readonly minOddsRequirement: FieldRef<"BonusCampaign", 'Decimal'>
    readonly rolloverMultiplier: FieldRef<"BonusCampaign", 'Decimal'>
    readonly rolloverContributionCategory: FieldRef<"BonusCampaign", 'CasinoContributionCategory'>
    readonly startsAt: FieldRef<"BonusCampaign", 'DateTime'>
    readonly expiresAt: FieldRef<"BonusCampaign", 'DateTime'>
    readonly validityDays: FieldRef<"BonusCampaign", 'Int'>
    readonly freeSpinsCount: FieldRef<"BonusCampaign", 'Int'>
    readonly freeSpinsGameId: FieldRef<"BonusCampaign", 'String'>
    readonly eligibleCountries: FieldRef<"BonusCampaign", 'String[]'>
    readonly eligibleSports: FieldRef<"BonusCampaign", 'String[]'>
    readonly sportMinOdds: FieldRef<"BonusCampaign", 'Decimal'>
    readonly maxBonusPerUser: FieldRef<"BonusCampaign", 'Decimal'>
    readonly wageringSportAllowed: FieldRef<"BonusCampaign", 'Boolean'>
    readonly wageringCasinoAllowed: FieldRef<"BonusCampaign", 'Boolean'>
    readonly description: FieldRef<"BonusCampaign", 'String'>
    readonly termsHtml: FieldRef<"BonusCampaign", 'String'>
    readonly metadata: FieldRef<"BonusCampaign", 'Json'>
    readonly isPromo: FieldRef<"BonusCampaign", 'Boolean'>
    readonly createdBy: FieldRef<"BonusCampaign", 'String'>
    readonly createdAt: FieldRef<"BonusCampaign", 'DateTime'>
    readonly updatedAt: FieldRef<"BonusCampaign", 'DateTime'>
    readonly deletedAt: FieldRef<"BonusCampaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BonusCampaign findUnique
   */
  export type BonusCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter, which BonusCampaign to fetch.
     */
    where: BonusCampaignWhereUniqueInput
  }

  /**
   * BonusCampaign findUniqueOrThrow
   */
  export type BonusCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter, which BonusCampaign to fetch.
     */
    where: BonusCampaignWhereUniqueInput
  }

  /**
   * BonusCampaign findFirst
   */
  export type BonusCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter, which BonusCampaign to fetch.
     */
    where?: BonusCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusCampaigns to fetch.
     */
    orderBy?: BonusCampaignOrderByWithRelationInput | BonusCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonusCampaigns.
     */
    cursor?: BonusCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonusCampaigns.
     */
    distinct?: BonusCampaignScalarFieldEnum | BonusCampaignScalarFieldEnum[]
  }

  /**
   * BonusCampaign findFirstOrThrow
   */
  export type BonusCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter, which BonusCampaign to fetch.
     */
    where?: BonusCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusCampaigns to fetch.
     */
    orderBy?: BonusCampaignOrderByWithRelationInput | BonusCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonusCampaigns.
     */
    cursor?: BonusCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonusCampaigns.
     */
    distinct?: BonusCampaignScalarFieldEnum | BonusCampaignScalarFieldEnum[]
  }

  /**
   * BonusCampaign findMany
   */
  export type BonusCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter, which BonusCampaigns to fetch.
     */
    where?: BonusCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusCampaigns to fetch.
     */
    orderBy?: BonusCampaignOrderByWithRelationInput | BonusCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BonusCampaigns.
     */
    cursor?: BonusCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusCampaigns.
     */
    skip?: number
    distinct?: BonusCampaignScalarFieldEnum | BonusCampaignScalarFieldEnum[]
  }

  /**
   * BonusCampaign create
   */
  export type BonusCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a BonusCampaign.
     */
    data: XOR<BonusCampaignCreateInput, BonusCampaignUncheckedCreateInput>
  }

  /**
   * BonusCampaign createMany
   */
  export type BonusCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BonusCampaigns.
     */
    data: BonusCampaignCreateManyInput | BonusCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BonusCampaign createManyAndReturn
   */
  export type BonusCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BonusCampaigns.
     */
    data: BonusCampaignCreateManyInput | BonusCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BonusCampaign update
   */
  export type BonusCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a BonusCampaign.
     */
    data: XOR<BonusCampaignUpdateInput, BonusCampaignUncheckedUpdateInput>
    /**
     * Choose, which BonusCampaign to update.
     */
    where: BonusCampaignWhereUniqueInput
  }

  /**
   * BonusCampaign updateMany
   */
  export type BonusCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BonusCampaigns.
     */
    data: XOR<BonusCampaignUpdateManyMutationInput, BonusCampaignUncheckedUpdateManyInput>
    /**
     * Filter which BonusCampaigns to update
     */
    where?: BonusCampaignWhereInput
  }

  /**
   * BonusCampaign upsert
   */
  export type BonusCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the BonusCampaign to update in case it exists.
     */
    where: BonusCampaignWhereUniqueInput
    /**
     * In case the BonusCampaign found by the `where` argument doesn't exist, create a new BonusCampaign with this data.
     */
    create: XOR<BonusCampaignCreateInput, BonusCampaignUncheckedCreateInput>
    /**
     * In case the BonusCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BonusCampaignUpdateInput, BonusCampaignUncheckedUpdateInput>
  }

  /**
   * BonusCampaign delete
   */
  export type BonusCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    /**
     * Filter which BonusCampaign to delete.
     */
    where: BonusCampaignWhereUniqueInput
  }

  /**
   * BonusCampaign deleteMany
   */
  export type BonusCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonusCampaigns to delete
     */
    where?: BonusCampaignWhereInput
  }

  /**
   * BonusCampaign.userBonuses
   */
  export type BonusCampaign$userBonusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    where?: UserBonusWhereInput
    orderBy?: UserBonusOrderByWithRelationInput | UserBonusOrderByWithRelationInput[]
    cursor?: UserBonusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBonusScalarFieldEnum | UserBonusScalarFieldEnum[]
  }

  /**
   * BonusCampaign.freeBets
   */
  export type BonusCampaign$freeBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    where?: FreeBetWhereInput
    orderBy?: FreeBetOrderByWithRelationInput | FreeBetOrderByWithRelationInput[]
    cursor?: FreeBetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FreeBetScalarFieldEnum | FreeBetScalarFieldEnum[]
  }

  /**
   * BonusCampaign.casinoFreeSpins
   */
  export type BonusCampaign$casinoFreeSpinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    where?: CasinoFreeSpinWhereInput
    orderBy?: CasinoFreeSpinOrderByWithRelationInput | CasinoFreeSpinOrderByWithRelationInput[]
    cursor?: CasinoFreeSpinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasinoFreeSpinScalarFieldEnum | CasinoFreeSpinScalarFieldEnum[]
  }

  /**
   * BonusCampaign without action
   */
  export type BonusCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
  }


  /**
   * Model UserBonus
   */

  export type AggregateUserBonus = {
    _count: UserBonusCountAggregateOutputType | null
    _avg: UserBonusAvgAggregateOutputType | null
    _sum: UserBonusSumAggregateOutputType | null
    _min: UserBonusMinAggregateOutputType | null
    _max: UserBonusMaxAggregateOutputType | null
  }

  export type UserBonusAvgAggregateOutputType = {
    grantedAmount: Decimal | null
    maxAmount: Decimal | null
    usedAmount: Decimal | null
    releasedAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverRequiredTotal: Decimal | null
    rolloverCompletedReal: Decimal | null
    rolloverCompletedWeighted: Decimal | null
    rolloverPercent: Decimal | null
  }

  export type UserBonusSumAggregateOutputType = {
    grantedAmount: Decimal | null
    maxAmount: Decimal | null
    usedAmount: Decimal | null
    releasedAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverRequiredTotal: Decimal | null
    rolloverCompletedReal: Decimal | null
    rolloverCompletedWeighted: Decimal | null
    rolloverPercent: Decimal | null
  }

  export type UserBonusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusType: $Enums.BonusType | null
    status: $Enums.BonusStatus | null
    grantedAmount: Decimal | null
    grantedCurrency: string | null
    maxAmount: Decimal | null
    usedAmount: Decimal | null
    releasedAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | null
    rolloverCompletedReal: Decimal | null
    rolloverCompletedWeighted: Decimal | null
    rolloverPercent: Decimal | null
    rolloverStatus: $Enums.RolloverStatus | null
    grantedAt: Date | null
    activatedAt: Date | null
    expiresAt: Date | null
    lastContributionAt: Date | null
    releasedAt: Date | null
    cancelledAt: Date | null
    cancelledReason: string | null
    referenceDepositId: string | null
    promocodeUsed: string | null
    freebetIdExternal: string | null
    description: string | null
    noteAdmin: string | null
    createdByAdminId: string | null
    walletId: string | null
  }

  export type UserBonusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusType: $Enums.BonusType | null
    status: $Enums.BonusStatus | null
    grantedAmount: Decimal | null
    grantedCurrency: string | null
    maxAmount: Decimal | null
    usedAmount: Decimal | null
    releasedAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | null
    rolloverCompletedReal: Decimal | null
    rolloverCompletedWeighted: Decimal | null
    rolloverPercent: Decimal | null
    rolloverStatus: $Enums.RolloverStatus | null
    grantedAt: Date | null
    activatedAt: Date | null
    expiresAt: Date | null
    lastContributionAt: Date | null
    releasedAt: Date | null
    cancelledAt: Date | null
    cancelledReason: string | null
    referenceDepositId: string | null
    promocodeUsed: string | null
    freebetIdExternal: string | null
    description: string | null
    noteAdmin: string | null
    createdByAdminId: string | null
    walletId: string | null
  }

  export type UserBonusCountAggregateOutputType = {
    id: number
    userId: number
    campaignId: number
    bonusType: number
    status: number
    grantedAmount: number
    grantedCurrency: number
    maxAmount: number
    usedAmount: number
    releasedAmount: number
    minOddsRequirement: number
    rolloverMultiplier: number
    rolloverContributionCategory: number
    rolloverRequiredTotal: number
    rolloverCompletedReal: number
    rolloverCompletedWeighted: number
    rolloverPercent: number
    rolloverStatus: number
    grantedAt: number
    activatedAt: number
    expiresAt: number
    lastContributionAt: number
    releasedAt: number
    cancelledAt: number
    cancelledReason: number
    referenceDepositId: number
    promocodeUsed: number
    freebetIdExternal: number
    description: number
    noteAdmin: number
    createdByAdminId: number
    metadata: number
    walletId: number
    _all: number
  }


  export type UserBonusAvgAggregateInputType = {
    grantedAmount?: true
    maxAmount?: true
    usedAmount?: true
    releasedAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverRequiredTotal?: true
    rolloverCompletedReal?: true
    rolloverCompletedWeighted?: true
    rolloverPercent?: true
  }

  export type UserBonusSumAggregateInputType = {
    grantedAmount?: true
    maxAmount?: true
    usedAmount?: true
    releasedAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverRequiredTotal?: true
    rolloverCompletedReal?: true
    rolloverCompletedWeighted?: true
    rolloverPercent?: true
  }

  export type UserBonusMinAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusType?: true
    status?: true
    grantedAmount?: true
    grantedCurrency?: true
    maxAmount?: true
    usedAmount?: true
    releasedAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    rolloverRequiredTotal?: true
    rolloverCompletedReal?: true
    rolloverCompletedWeighted?: true
    rolloverPercent?: true
    rolloverStatus?: true
    grantedAt?: true
    activatedAt?: true
    expiresAt?: true
    lastContributionAt?: true
    releasedAt?: true
    cancelledAt?: true
    cancelledReason?: true
    referenceDepositId?: true
    promocodeUsed?: true
    freebetIdExternal?: true
    description?: true
    noteAdmin?: true
    createdByAdminId?: true
    walletId?: true
  }

  export type UserBonusMaxAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusType?: true
    status?: true
    grantedAmount?: true
    grantedCurrency?: true
    maxAmount?: true
    usedAmount?: true
    releasedAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    rolloverRequiredTotal?: true
    rolloverCompletedReal?: true
    rolloverCompletedWeighted?: true
    rolloverPercent?: true
    rolloverStatus?: true
    grantedAt?: true
    activatedAt?: true
    expiresAt?: true
    lastContributionAt?: true
    releasedAt?: true
    cancelledAt?: true
    cancelledReason?: true
    referenceDepositId?: true
    promocodeUsed?: true
    freebetIdExternal?: true
    description?: true
    noteAdmin?: true
    createdByAdminId?: true
    walletId?: true
  }

  export type UserBonusCountAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusType?: true
    status?: true
    grantedAmount?: true
    grantedCurrency?: true
    maxAmount?: true
    usedAmount?: true
    releasedAmount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    rolloverContributionCategory?: true
    rolloverRequiredTotal?: true
    rolloverCompletedReal?: true
    rolloverCompletedWeighted?: true
    rolloverPercent?: true
    rolloverStatus?: true
    grantedAt?: true
    activatedAt?: true
    expiresAt?: true
    lastContributionAt?: true
    releasedAt?: true
    cancelledAt?: true
    cancelledReason?: true
    referenceDepositId?: true
    promocodeUsed?: true
    freebetIdExternal?: true
    description?: true
    noteAdmin?: true
    createdByAdminId?: true
    metadata?: true
    walletId?: true
    _all?: true
  }

  export type UserBonusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBonus to aggregate.
     */
    where?: UserBonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBonuses to fetch.
     */
    orderBy?: UserBonusOrderByWithRelationInput | UserBonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBonuses
    **/
    _count?: true | UserBonusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBonusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBonusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBonusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBonusMaxAggregateInputType
  }

  export type GetUserBonusAggregateType<T extends UserBonusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBonus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBonus[P]>
      : GetScalarType<T[P], AggregateUserBonus[P]>
  }




  export type UserBonusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBonusWhereInput
    orderBy?: UserBonusOrderByWithAggregationInput | UserBonusOrderByWithAggregationInput[]
    by: UserBonusScalarFieldEnum[] | UserBonusScalarFieldEnum
    having?: UserBonusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBonusCountAggregateInputType | true
    _avg?: UserBonusAvgAggregateInputType
    _sum?: UserBonusSumAggregateInputType
    _min?: UserBonusMinAggregateInputType
    _max?: UserBonusMaxAggregateInputType
  }

  export type UserBonusGroupByOutputType = {
    id: string
    userId: string
    campaignId: string | null
    bonusType: $Enums.BonusType
    status: $Enums.BonusStatus
    grantedAmount: Decimal
    grantedCurrency: string
    maxAmount: Decimal | null
    usedAmount: Decimal | null
    releasedAmount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    rolloverContributionCategory: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal
    rolloverCompletedReal: Decimal
    rolloverCompletedWeighted: Decimal
    rolloverPercent: Decimal | null
    rolloverStatus: $Enums.RolloverStatus
    grantedAt: Date
    activatedAt: Date | null
    expiresAt: Date | null
    lastContributionAt: Date | null
    releasedAt: Date | null
    cancelledAt: Date | null
    cancelledReason: string | null
    referenceDepositId: string | null
    promocodeUsed: string | null
    freebetIdExternal: string | null
    description: string | null
    noteAdmin: string | null
    createdByAdminId: string | null
    metadata: JsonValue | null
    walletId: string | null
    _count: UserBonusCountAggregateOutputType | null
    _avg: UserBonusAvgAggregateOutputType | null
    _sum: UserBonusSumAggregateOutputType | null
    _min: UserBonusMinAggregateOutputType | null
    _max: UserBonusMaxAggregateOutputType | null
  }

  type GetUserBonusGroupByPayload<T extends UserBonusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBonusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBonusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBonusGroupByOutputType[P]>
            : GetScalarType<T[P], UserBonusGroupByOutputType[P]>
        }
      >
    >


  export type UserBonusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusType?: boolean
    status?: boolean
    grantedAmount?: boolean
    grantedCurrency?: boolean
    maxAmount?: boolean
    usedAmount?: boolean
    releasedAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    rolloverRequiredTotal?: boolean
    rolloverCompletedReal?: boolean
    rolloverCompletedWeighted?: boolean
    rolloverPercent?: boolean
    rolloverStatus?: boolean
    grantedAt?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastContributionAt?: boolean
    releasedAt?: boolean
    cancelledAt?: boolean
    cancelledReason?: boolean
    referenceDepositId?: boolean
    promocodeUsed?: boolean
    freebetIdExternal?: boolean
    description?: boolean
    noteAdmin?: boolean
    createdByAdminId?: boolean
    metadata?: boolean
    walletId?: boolean
    campaign?: boolean | UserBonus$campaignArgs<ExtArgs>
    rolloverLedgerEntries?: boolean | UserBonus$rolloverLedgerEntriesArgs<ExtArgs>
    _count?: boolean | UserBonusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBonus"]>

  export type UserBonusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusType?: boolean
    status?: boolean
    grantedAmount?: boolean
    grantedCurrency?: boolean
    maxAmount?: boolean
    usedAmount?: boolean
    releasedAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    rolloverRequiredTotal?: boolean
    rolloverCompletedReal?: boolean
    rolloverCompletedWeighted?: boolean
    rolloverPercent?: boolean
    rolloverStatus?: boolean
    grantedAt?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastContributionAt?: boolean
    releasedAt?: boolean
    cancelledAt?: boolean
    cancelledReason?: boolean
    referenceDepositId?: boolean
    promocodeUsed?: boolean
    freebetIdExternal?: boolean
    description?: boolean
    noteAdmin?: boolean
    createdByAdminId?: boolean
    metadata?: boolean
    walletId?: boolean
    campaign?: boolean | UserBonus$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["userBonus"]>

  export type UserBonusSelectScalar = {
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusType?: boolean
    status?: boolean
    grantedAmount?: boolean
    grantedCurrency?: boolean
    maxAmount?: boolean
    usedAmount?: boolean
    releasedAmount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    rolloverContributionCategory?: boolean
    rolloverRequiredTotal?: boolean
    rolloverCompletedReal?: boolean
    rolloverCompletedWeighted?: boolean
    rolloverPercent?: boolean
    rolloverStatus?: boolean
    grantedAt?: boolean
    activatedAt?: boolean
    expiresAt?: boolean
    lastContributionAt?: boolean
    releasedAt?: boolean
    cancelledAt?: boolean
    cancelledReason?: boolean
    referenceDepositId?: boolean
    promocodeUsed?: boolean
    freebetIdExternal?: boolean
    description?: boolean
    noteAdmin?: boolean
    createdByAdminId?: boolean
    metadata?: boolean
    walletId?: boolean
  }

  export type UserBonusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | UserBonus$campaignArgs<ExtArgs>
    rolloverLedgerEntries?: boolean | UserBonus$rolloverLedgerEntriesArgs<ExtArgs>
    _count?: boolean | UserBonusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserBonusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | UserBonus$campaignArgs<ExtArgs>
  }

  export type $UserBonusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBonus"
    objects: {
      campaign: Prisma.$BonusCampaignPayload<ExtArgs> | null
      rolloverLedgerEntries: Prisma.$RolloverLedgerEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      campaignId: string | null
      bonusType: $Enums.BonusType
      status: $Enums.BonusStatus
      grantedAmount: Prisma.Decimal
      grantedCurrency: string
      maxAmount: Prisma.Decimal | null
      usedAmount: Prisma.Decimal | null
      releasedAmount: Prisma.Decimal | null
      minOddsRequirement: Prisma.Decimal | null
      rolloverMultiplier: Prisma.Decimal | null
      rolloverContributionCategory: $Enums.CasinoContributionCategory | null
      rolloverRequiredTotal: Prisma.Decimal
      rolloverCompletedReal: Prisma.Decimal
      rolloverCompletedWeighted: Prisma.Decimal
      rolloverPercent: Prisma.Decimal | null
      rolloverStatus: $Enums.RolloverStatus
      grantedAt: Date
      activatedAt: Date | null
      expiresAt: Date | null
      lastContributionAt: Date | null
      releasedAt: Date | null
      cancelledAt: Date | null
      cancelledReason: string | null
      referenceDepositId: string | null
      promocodeUsed: string | null
      freebetIdExternal: string | null
      description: string | null
      noteAdmin: string | null
      createdByAdminId: string | null
      metadata: Prisma.JsonValue | null
      walletId: string | null
    }, ExtArgs["result"]["userBonus"]>
    composites: {}
  }

  type UserBonusGetPayload<S extends boolean | null | undefined | UserBonusDefaultArgs> = $Result.GetResult<Prisma.$UserBonusPayload, S>

  type UserBonusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBonusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBonusCountAggregateInputType | true
    }

  export interface UserBonusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBonus'], meta: { name: 'UserBonus' } }
    /**
     * Find zero or one UserBonus that matches the filter.
     * @param {UserBonusFindUniqueArgs} args - Arguments to find a UserBonus
     * @example
     * // Get one UserBonus
     * const userBonus = await prisma.userBonus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBonusFindUniqueArgs>(args: SelectSubset<T, UserBonusFindUniqueArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserBonus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBonusFindUniqueOrThrowArgs} args - Arguments to find a UserBonus
     * @example
     * // Get one UserBonus
     * const userBonus = await prisma.userBonus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBonusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBonusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserBonus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusFindFirstArgs} args - Arguments to find a UserBonus
     * @example
     * // Get one UserBonus
     * const userBonus = await prisma.userBonus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBonusFindFirstArgs>(args?: SelectSubset<T, UserBonusFindFirstArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserBonus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusFindFirstOrThrowArgs} args - Arguments to find a UserBonus
     * @example
     * // Get one UserBonus
     * const userBonus = await prisma.userBonus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBonusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBonusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserBonuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBonuses
     * const userBonuses = await prisma.userBonus.findMany()
     * 
     * // Get first 10 UserBonuses
     * const userBonuses = await prisma.userBonus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBonusWithIdOnly = await prisma.userBonus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBonusFindManyArgs>(args?: SelectSubset<T, UserBonusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserBonus.
     * @param {UserBonusCreateArgs} args - Arguments to create a UserBonus.
     * @example
     * // Create one UserBonus
     * const UserBonus = await prisma.userBonus.create({
     *   data: {
     *     // ... data to create a UserBonus
     *   }
     * })
     * 
     */
    create<T extends UserBonusCreateArgs>(args: SelectSubset<T, UserBonusCreateArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserBonuses.
     * @param {UserBonusCreateManyArgs} args - Arguments to create many UserBonuses.
     * @example
     * // Create many UserBonuses
     * const userBonus = await prisma.userBonus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBonusCreateManyArgs>(args?: SelectSubset<T, UserBonusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBonuses and returns the data saved in the database.
     * @param {UserBonusCreateManyAndReturnArgs} args - Arguments to create many UserBonuses.
     * @example
     * // Create many UserBonuses
     * const userBonus = await prisma.userBonus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBonuses and only return the `id`
     * const userBonusWithIdOnly = await prisma.userBonus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBonusCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBonusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserBonus.
     * @param {UserBonusDeleteArgs} args - Arguments to delete one UserBonus.
     * @example
     * // Delete one UserBonus
     * const UserBonus = await prisma.userBonus.delete({
     *   where: {
     *     // ... filter to delete one UserBonus
     *   }
     * })
     * 
     */
    delete<T extends UserBonusDeleteArgs>(args: SelectSubset<T, UserBonusDeleteArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserBonus.
     * @param {UserBonusUpdateArgs} args - Arguments to update one UserBonus.
     * @example
     * // Update one UserBonus
     * const userBonus = await prisma.userBonus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBonusUpdateArgs>(args: SelectSubset<T, UserBonusUpdateArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserBonuses.
     * @param {UserBonusDeleteManyArgs} args - Arguments to filter UserBonuses to delete.
     * @example
     * // Delete a few UserBonuses
     * const { count } = await prisma.userBonus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBonusDeleteManyArgs>(args?: SelectSubset<T, UserBonusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBonuses
     * const userBonus = await prisma.userBonus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBonusUpdateManyArgs>(args: SelectSubset<T, UserBonusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBonus.
     * @param {UserBonusUpsertArgs} args - Arguments to update or create a UserBonus.
     * @example
     * // Update or create a UserBonus
     * const userBonus = await prisma.userBonus.upsert({
     *   create: {
     *     // ... data to create a UserBonus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBonus we want to update
     *   }
     * })
     */
    upsert<T extends UserBonusUpsertArgs>(args: SelectSubset<T, UserBonusUpsertArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserBonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusCountArgs} args - Arguments to filter UserBonuses to count.
     * @example
     * // Count the number of UserBonuses
     * const count = await prisma.userBonus.count({
     *   where: {
     *     // ... the filter for the UserBonuses we want to count
     *   }
     * })
    **/
    count<T extends UserBonusCountArgs>(
      args?: Subset<T, UserBonusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBonusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBonusAggregateArgs>(args: Subset<T, UserBonusAggregateArgs>): Prisma.PrismaPromise<GetUserBonusAggregateType<T>>

    /**
     * Group by UserBonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBonusGroupByArgs} args - Group by arguments.
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
      T extends UserBonusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBonusGroupByArgs['orderBy'] }
        : { orderBy?: UserBonusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBonusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBonusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBonus model
   */
  readonly fields: UserBonusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBonus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBonusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends UserBonus$campaignArgs<ExtArgs> = {}>(args?: Subset<T, UserBonus$campaignArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    rolloverLedgerEntries<T extends UserBonus$rolloverLedgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, UserBonus$rolloverLedgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserBonus model
   */ 
  interface UserBonusFieldRefs {
    readonly id: FieldRef<"UserBonus", 'String'>
    readonly userId: FieldRef<"UserBonus", 'String'>
    readonly campaignId: FieldRef<"UserBonus", 'String'>
    readonly bonusType: FieldRef<"UserBonus", 'BonusType'>
    readonly status: FieldRef<"UserBonus", 'BonusStatus'>
    readonly grantedAmount: FieldRef<"UserBonus", 'Decimal'>
    readonly grantedCurrency: FieldRef<"UserBonus", 'String'>
    readonly maxAmount: FieldRef<"UserBonus", 'Decimal'>
    readonly usedAmount: FieldRef<"UserBonus", 'Decimal'>
    readonly releasedAmount: FieldRef<"UserBonus", 'Decimal'>
    readonly minOddsRequirement: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverMultiplier: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverContributionCategory: FieldRef<"UserBonus", 'CasinoContributionCategory'>
    readonly rolloverRequiredTotal: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverCompletedReal: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverCompletedWeighted: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverPercent: FieldRef<"UserBonus", 'Decimal'>
    readonly rolloverStatus: FieldRef<"UserBonus", 'RolloverStatus'>
    readonly grantedAt: FieldRef<"UserBonus", 'DateTime'>
    readonly activatedAt: FieldRef<"UserBonus", 'DateTime'>
    readonly expiresAt: FieldRef<"UserBonus", 'DateTime'>
    readonly lastContributionAt: FieldRef<"UserBonus", 'DateTime'>
    readonly releasedAt: FieldRef<"UserBonus", 'DateTime'>
    readonly cancelledAt: FieldRef<"UserBonus", 'DateTime'>
    readonly cancelledReason: FieldRef<"UserBonus", 'String'>
    readonly referenceDepositId: FieldRef<"UserBonus", 'String'>
    readonly promocodeUsed: FieldRef<"UserBonus", 'String'>
    readonly freebetIdExternal: FieldRef<"UserBonus", 'String'>
    readonly description: FieldRef<"UserBonus", 'String'>
    readonly noteAdmin: FieldRef<"UserBonus", 'String'>
    readonly createdByAdminId: FieldRef<"UserBonus", 'String'>
    readonly metadata: FieldRef<"UserBonus", 'Json'>
    readonly walletId: FieldRef<"UserBonus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserBonus findUnique
   */
  export type UserBonusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter, which UserBonus to fetch.
     */
    where: UserBonusWhereUniqueInput
  }

  /**
   * UserBonus findUniqueOrThrow
   */
  export type UserBonusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter, which UserBonus to fetch.
     */
    where: UserBonusWhereUniqueInput
  }

  /**
   * UserBonus findFirst
   */
  export type UserBonusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter, which UserBonus to fetch.
     */
    where?: UserBonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBonuses to fetch.
     */
    orderBy?: UserBonusOrderByWithRelationInput | UserBonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBonuses.
     */
    cursor?: UserBonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBonuses.
     */
    distinct?: UserBonusScalarFieldEnum | UserBonusScalarFieldEnum[]
  }

  /**
   * UserBonus findFirstOrThrow
   */
  export type UserBonusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter, which UserBonus to fetch.
     */
    where?: UserBonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBonuses to fetch.
     */
    orderBy?: UserBonusOrderByWithRelationInput | UserBonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBonuses.
     */
    cursor?: UserBonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBonuses.
     */
    distinct?: UserBonusScalarFieldEnum | UserBonusScalarFieldEnum[]
  }

  /**
   * UserBonus findMany
   */
  export type UserBonusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter, which UserBonuses to fetch.
     */
    where?: UserBonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBonuses to fetch.
     */
    orderBy?: UserBonusOrderByWithRelationInput | UserBonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBonuses.
     */
    cursor?: UserBonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBonuses.
     */
    skip?: number
    distinct?: UserBonusScalarFieldEnum | UserBonusScalarFieldEnum[]
  }

  /**
   * UserBonus create
   */
  export type UserBonusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBonus.
     */
    data: XOR<UserBonusCreateInput, UserBonusUncheckedCreateInput>
  }

  /**
   * UserBonus createMany
   */
  export type UserBonusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBonuses.
     */
    data: UserBonusCreateManyInput | UserBonusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBonus createManyAndReturn
   */
  export type UserBonusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBonuses.
     */
    data: UserBonusCreateManyInput | UserBonusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBonus update
   */
  export type UserBonusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBonus.
     */
    data: XOR<UserBonusUpdateInput, UserBonusUncheckedUpdateInput>
    /**
     * Choose, which UserBonus to update.
     */
    where: UserBonusWhereUniqueInput
  }

  /**
   * UserBonus updateMany
   */
  export type UserBonusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBonuses.
     */
    data: XOR<UserBonusUpdateManyMutationInput, UserBonusUncheckedUpdateManyInput>
    /**
     * Filter which UserBonuses to update
     */
    where?: UserBonusWhereInput
  }

  /**
   * UserBonus upsert
   */
  export type UserBonusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBonus to update in case it exists.
     */
    where: UserBonusWhereUniqueInput
    /**
     * In case the UserBonus found by the `where` argument doesn't exist, create a new UserBonus with this data.
     */
    create: XOR<UserBonusCreateInput, UserBonusUncheckedCreateInput>
    /**
     * In case the UserBonus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBonusUpdateInput, UserBonusUncheckedUpdateInput>
  }

  /**
   * UserBonus delete
   */
  export type UserBonusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
    /**
     * Filter which UserBonus to delete.
     */
    where: UserBonusWhereUniqueInput
  }

  /**
   * UserBonus deleteMany
   */
  export type UserBonusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBonuses to delete
     */
    where?: UserBonusWhereInput
  }

  /**
   * UserBonus.campaign
   */
  export type UserBonus$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    where?: BonusCampaignWhereInput
  }

  /**
   * UserBonus.rolloverLedgerEntries
   */
  export type UserBonus$rolloverLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    where?: RolloverLedgerEntryWhereInput
    orderBy?: RolloverLedgerEntryOrderByWithRelationInput | RolloverLedgerEntryOrderByWithRelationInput[]
    cursor?: RolloverLedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolloverLedgerEntryScalarFieldEnum | RolloverLedgerEntryScalarFieldEnum[]
  }

  /**
   * UserBonus without action
   */
  export type UserBonusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBonus
     */
    select?: UserBonusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBonusInclude<ExtArgs> | null
  }


  /**
   * Model RolloverLedgerEntry
   */

  export type AggregateRolloverLedgerEntry = {
    _count: RolloverLedgerEntryCountAggregateOutputType | null
    _avg: RolloverLedgerEntryAvgAggregateOutputType | null
    _sum: RolloverLedgerEntrySumAggregateOutputType | null
    _min: RolloverLedgerEntryMinAggregateOutputType | null
    _max: RolloverLedgerEntryMaxAggregateOutputType | null
  }

  export type RolloverLedgerEntryAvgAggregateOutputType = {
    wageredAmount: Decimal | null
    contributionPercent: Decimal | null
    weightedContributionAmount: Decimal | null
    oddsAtBet: Decimal | null
    winningAmount: Decimal | null
    selectionCount: number | null
  }

  export type RolloverLedgerEntrySumAggregateOutputType = {
    wageredAmount: Decimal | null
    contributionPercent: Decimal | null
    weightedContributionAmount: Decimal | null
    oddsAtBet: Decimal | null
    winningAmount: Decimal | null
    selectionCount: number | null
  }

  export type RolloverLedgerEntryMinAggregateOutputType = {
    id: string | null
    userBonusId: string | null
    transactionDate: Date | null
    betId: string | null
    casinoRoundId: string | null
    wageredAmount: Decimal | null
    sourceType: string | null
    sportType: string | null
    casinoCategory: string | null
    contributionPercent: Decimal | null
    weightedContributionAmount: Decimal | null
    oddsAtBet: Decimal | null
    winningAmount: Decimal | null
    selectionCount: number | null
    referenceCorrelationId: string | null
  }

  export type RolloverLedgerEntryMaxAggregateOutputType = {
    id: string | null
    userBonusId: string | null
    transactionDate: Date | null
    betId: string | null
    casinoRoundId: string | null
    wageredAmount: Decimal | null
    sourceType: string | null
    sportType: string | null
    casinoCategory: string | null
    contributionPercent: Decimal | null
    weightedContributionAmount: Decimal | null
    oddsAtBet: Decimal | null
    winningAmount: Decimal | null
    selectionCount: number | null
    referenceCorrelationId: string | null
  }

  export type RolloverLedgerEntryCountAggregateOutputType = {
    id: number
    userBonusId: number
    transactionDate: number
    betId: number
    casinoRoundId: number
    wageredAmount: number
    sourceType: number
    sportType: number
    casinoCategory: number
    contributionPercent: number
    weightedContributionAmount: number
    oddsAtBet: number
    winningAmount: number
    selectionCount: number
    referenceCorrelationId: number
    _all: number
  }


  export type RolloverLedgerEntryAvgAggregateInputType = {
    wageredAmount?: true
    contributionPercent?: true
    weightedContributionAmount?: true
    oddsAtBet?: true
    winningAmount?: true
    selectionCount?: true
  }

  export type RolloverLedgerEntrySumAggregateInputType = {
    wageredAmount?: true
    contributionPercent?: true
    weightedContributionAmount?: true
    oddsAtBet?: true
    winningAmount?: true
    selectionCount?: true
  }

  export type RolloverLedgerEntryMinAggregateInputType = {
    id?: true
    userBonusId?: true
    transactionDate?: true
    betId?: true
    casinoRoundId?: true
    wageredAmount?: true
    sourceType?: true
    sportType?: true
    casinoCategory?: true
    contributionPercent?: true
    weightedContributionAmount?: true
    oddsAtBet?: true
    winningAmount?: true
    selectionCount?: true
    referenceCorrelationId?: true
  }

  export type RolloverLedgerEntryMaxAggregateInputType = {
    id?: true
    userBonusId?: true
    transactionDate?: true
    betId?: true
    casinoRoundId?: true
    wageredAmount?: true
    sourceType?: true
    sportType?: true
    casinoCategory?: true
    contributionPercent?: true
    weightedContributionAmount?: true
    oddsAtBet?: true
    winningAmount?: true
    selectionCount?: true
    referenceCorrelationId?: true
  }

  export type RolloverLedgerEntryCountAggregateInputType = {
    id?: true
    userBonusId?: true
    transactionDate?: true
    betId?: true
    casinoRoundId?: true
    wageredAmount?: true
    sourceType?: true
    sportType?: true
    casinoCategory?: true
    contributionPercent?: true
    weightedContributionAmount?: true
    oddsAtBet?: true
    winningAmount?: true
    selectionCount?: true
    referenceCorrelationId?: true
    _all?: true
  }

  export type RolloverLedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolloverLedgerEntry to aggregate.
     */
    where?: RolloverLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolloverLedgerEntries to fetch.
     */
    orderBy?: RolloverLedgerEntryOrderByWithRelationInput | RolloverLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolloverLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolloverLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolloverLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolloverLedgerEntries
    **/
    _count?: true | RolloverLedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolloverLedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolloverLedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolloverLedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolloverLedgerEntryMaxAggregateInputType
  }

  export type GetRolloverLedgerEntryAggregateType<T extends RolloverLedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRolloverLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolloverLedgerEntry[P]>
      : GetScalarType<T[P], AggregateRolloverLedgerEntry[P]>
  }




  export type RolloverLedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolloverLedgerEntryWhereInput
    orderBy?: RolloverLedgerEntryOrderByWithAggregationInput | RolloverLedgerEntryOrderByWithAggregationInput[]
    by: RolloverLedgerEntryScalarFieldEnum[] | RolloverLedgerEntryScalarFieldEnum
    having?: RolloverLedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolloverLedgerEntryCountAggregateInputType | true
    _avg?: RolloverLedgerEntryAvgAggregateInputType
    _sum?: RolloverLedgerEntrySumAggregateInputType
    _min?: RolloverLedgerEntryMinAggregateInputType
    _max?: RolloverLedgerEntryMaxAggregateInputType
  }

  export type RolloverLedgerEntryGroupByOutputType = {
    id: string
    userBonusId: string
    transactionDate: Date
    betId: string | null
    casinoRoundId: string | null
    wageredAmount: Decimal
    sourceType: string
    sportType: string | null
    casinoCategory: string | null
    contributionPercent: Decimal | null
    weightedContributionAmount: Decimal | null
    oddsAtBet: Decimal | null
    winningAmount: Decimal | null
    selectionCount: number | null
    referenceCorrelationId: string | null
    _count: RolloverLedgerEntryCountAggregateOutputType | null
    _avg: RolloverLedgerEntryAvgAggregateOutputType | null
    _sum: RolloverLedgerEntrySumAggregateOutputType | null
    _min: RolloverLedgerEntryMinAggregateOutputType | null
    _max: RolloverLedgerEntryMaxAggregateOutputType | null
  }

  type GetRolloverLedgerEntryGroupByPayload<T extends RolloverLedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolloverLedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolloverLedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolloverLedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RolloverLedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type RolloverLedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBonusId?: boolean
    transactionDate?: boolean
    betId?: boolean
    casinoRoundId?: boolean
    wageredAmount?: boolean
    sourceType?: boolean
    sportType?: boolean
    casinoCategory?: boolean
    contributionPercent?: boolean
    weightedContributionAmount?: boolean
    oddsAtBet?: boolean
    winningAmount?: boolean
    selectionCount?: boolean
    referenceCorrelationId?: boolean
    userBonus?: boolean | UserBonusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolloverLedgerEntry"]>

  export type RolloverLedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userBonusId?: boolean
    transactionDate?: boolean
    betId?: boolean
    casinoRoundId?: boolean
    wageredAmount?: boolean
    sourceType?: boolean
    sportType?: boolean
    casinoCategory?: boolean
    contributionPercent?: boolean
    weightedContributionAmount?: boolean
    oddsAtBet?: boolean
    winningAmount?: boolean
    selectionCount?: boolean
    referenceCorrelationId?: boolean
    userBonus?: boolean | UserBonusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolloverLedgerEntry"]>

  export type RolloverLedgerEntrySelectScalar = {
    id?: boolean
    userBonusId?: boolean
    transactionDate?: boolean
    betId?: boolean
    casinoRoundId?: boolean
    wageredAmount?: boolean
    sourceType?: boolean
    sportType?: boolean
    casinoCategory?: boolean
    contributionPercent?: boolean
    weightedContributionAmount?: boolean
    oddsAtBet?: boolean
    winningAmount?: boolean
    selectionCount?: boolean
    referenceCorrelationId?: boolean
  }

  export type RolloverLedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBonus?: boolean | UserBonusDefaultArgs<ExtArgs>
  }
  export type RolloverLedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBonus?: boolean | UserBonusDefaultArgs<ExtArgs>
  }

  export type $RolloverLedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolloverLedgerEntry"
    objects: {
      userBonus: Prisma.$UserBonusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userBonusId: string
      transactionDate: Date
      betId: string | null
      casinoRoundId: string | null
      wageredAmount: Prisma.Decimal
      sourceType: string
      sportType: string | null
      casinoCategory: string | null
      contributionPercent: Prisma.Decimal | null
      weightedContributionAmount: Prisma.Decimal | null
      oddsAtBet: Prisma.Decimal | null
      winningAmount: Prisma.Decimal | null
      selectionCount: number | null
      referenceCorrelationId: string | null
    }, ExtArgs["result"]["rolloverLedgerEntry"]>
    composites: {}
  }

  type RolloverLedgerEntryGetPayload<S extends boolean | null | undefined | RolloverLedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$RolloverLedgerEntryPayload, S>

  type RolloverLedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolloverLedgerEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolloverLedgerEntryCountAggregateInputType | true
    }

  export interface RolloverLedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolloverLedgerEntry'], meta: { name: 'RolloverLedgerEntry' } }
    /**
     * Find zero or one RolloverLedgerEntry that matches the filter.
     * @param {RolloverLedgerEntryFindUniqueArgs} args - Arguments to find a RolloverLedgerEntry
     * @example
     * // Get one RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolloverLedgerEntryFindUniqueArgs>(args: SelectSubset<T, RolloverLedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RolloverLedgerEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolloverLedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a RolloverLedgerEntry
     * @example
     * // Get one RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolloverLedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RolloverLedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RolloverLedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryFindFirstArgs} args - Arguments to find a RolloverLedgerEntry
     * @example
     * // Get one RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolloverLedgerEntryFindFirstArgs>(args?: SelectSubset<T, RolloverLedgerEntryFindFirstArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RolloverLedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryFindFirstOrThrowArgs} args - Arguments to find a RolloverLedgerEntry
     * @example
     * // Get one RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolloverLedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RolloverLedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RolloverLedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolloverLedgerEntries
     * const rolloverLedgerEntries = await prisma.rolloverLedgerEntry.findMany()
     * 
     * // Get first 10 RolloverLedgerEntries
     * const rolloverLedgerEntries = await prisma.rolloverLedgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolloverLedgerEntryWithIdOnly = await prisma.rolloverLedgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolloverLedgerEntryFindManyArgs>(args?: SelectSubset<T, RolloverLedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RolloverLedgerEntry.
     * @param {RolloverLedgerEntryCreateArgs} args - Arguments to create a RolloverLedgerEntry.
     * @example
     * // Create one RolloverLedgerEntry
     * const RolloverLedgerEntry = await prisma.rolloverLedgerEntry.create({
     *   data: {
     *     // ... data to create a RolloverLedgerEntry
     *   }
     * })
     * 
     */
    create<T extends RolloverLedgerEntryCreateArgs>(args: SelectSubset<T, RolloverLedgerEntryCreateArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RolloverLedgerEntries.
     * @param {RolloverLedgerEntryCreateManyArgs} args - Arguments to create many RolloverLedgerEntries.
     * @example
     * // Create many RolloverLedgerEntries
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolloverLedgerEntryCreateManyArgs>(args?: SelectSubset<T, RolloverLedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolloverLedgerEntries and returns the data saved in the database.
     * @param {RolloverLedgerEntryCreateManyAndReturnArgs} args - Arguments to create many RolloverLedgerEntries.
     * @example
     * // Create many RolloverLedgerEntries
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolloverLedgerEntries and only return the `id`
     * const rolloverLedgerEntryWithIdOnly = await prisma.rolloverLedgerEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolloverLedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RolloverLedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RolloverLedgerEntry.
     * @param {RolloverLedgerEntryDeleteArgs} args - Arguments to delete one RolloverLedgerEntry.
     * @example
     * // Delete one RolloverLedgerEntry
     * const RolloverLedgerEntry = await prisma.rolloverLedgerEntry.delete({
     *   where: {
     *     // ... filter to delete one RolloverLedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends RolloverLedgerEntryDeleteArgs>(args: SelectSubset<T, RolloverLedgerEntryDeleteArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RolloverLedgerEntry.
     * @param {RolloverLedgerEntryUpdateArgs} args - Arguments to update one RolloverLedgerEntry.
     * @example
     * // Update one RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolloverLedgerEntryUpdateArgs>(args: SelectSubset<T, RolloverLedgerEntryUpdateArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RolloverLedgerEntries.
     * @param {RolloverLedgerEntryDeleteManyArgs} args - Arguments to filter RolloverLedgerEntries to delete.
     * @example
     * // Delete a few RolloverLedgerEntries
     * const { count } = await prisma.rolloverLedgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolloverLedgerEntryDeleteManyArgs>(args?: SelectSubset<T, RolloverLedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolloverLedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolloverLedgerEntries
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolloverLedgerEntryUpdateManyArgs>(args: SelectSubset<T, RolloverLedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolloverLedgerEntry.
     * @param {RolloverLedgerEntryUpsertArgs} args - Arguments to update or create a RolloverLedgerEntry.
     * @example
     * // Update or create a RolloverLedgerEntry
     * const rolloverLedgerEntry = await prisma.rolloverLedgerEntry.upsert({
     *   create: {
     *     // ... data to create a RolloverLedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolloverLedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends RolloverLedgerEntryUpsertArgs>(args: SelectSubset<T, RolloverLedgerEntryUpsertArgs<ExtArgs>>): Prisma__RolloverLedgerEntryClient<$Result.GetResult<Prisma.$RolloverLedgerEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RolloverLedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryCountArgs} args - Arguments to filter RolloverLedgerEntries to count.
     * @example
     * // Count the number of RolloverLedgerEntries
     * const count = await prisma.rolloverLedgerEntry.count({
     *   where: {
     *     // ... the filter for the RolloverLedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends RolloverLedgerEntryCountArgs>(
      args?: Subset<T, RolloverLedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolloverLedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolloverLedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolloverLedgerEntryAggregateArgs>(args: Subset<T, RolloverLedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetRolloverLedgerEntryAggregateType<T>>

    /**
     * Group by RolloverLedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolloverLedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends RolloverLedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolloverLedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: RolloverLedgerEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolloverLedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolloverLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolloverLedgerEntry model
   */
  readonly fields: RolloverLedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolloverLedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolloverLedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBonus<T extends UserBonusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserBonusDefaultArgs<ExtArgs>>): Prisma__UserBonusClient<$Result.GetResult<Prisma.$UserBonusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RolloverLedgerEntry model
   */ 
  interface RolloverLedgerEntryFieldRefs {
    readonly id: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly userBonusId: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly transactionDate: FieldRef<"RolloverLedgerEntry", 'DateTime'>
    readonly betId: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly casinoRoundId: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly wageredAmount: FieldRef<"RolloverLedgerEntry", 'Decimal'>
    readonly sourceType: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly sportType: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly casinoCategory: FieldRef<"RolloverLedgerEntry", 'String'>
    readonly contributionPercent: FieldRef<"RolloverLedgerEntry", 'Decimal'>
    readonly weightedContributionAmount: FieldRef<"RolloverLedgerEntry", 'Decimal'>
    readonly oddsAtBet: FieldRef<"RolloverLedgerEntry", 'Decimal'>
    readonly winningAmount: FieldRef<"RolloverLedgerEntry", 'Decimal'>
    readonly selectionCount: FieldRef<"RolloverLedgerEntry", 'Int'>
    readonly referenceCorrelationId: FieldRef<"RolloverLedgerEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolloverLedgerEntry findUnique
   */
  export type RolloverLedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which RolloverLedgerEntry to fetch.
     */
    where: RolloverLedgerEntryWhereUniqueInput
  }

  /**
   * RolloverLedgerEntry findUniqueOrThrow
   */
  export type RolloverLedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which RolloverLedgerEntry to fetch.
     */
    where: RolloverLedgerEntryWhereUniqueInput
  }

  /**
   * RolloverLedgerEntry findFirst
   */
  export type RolloverLedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which RolloverLedgerEntry to fetch.
     */
    where?: RolloverLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolloverLedgerEntries to fetch.
     */
    orderBy?: RolloverLedgerEntryOrderByWithRelationInput | RolloverLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolloverLedgerEntries.
     */
    cursor?: RolloverLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolloverLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolloverLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolloverLedgerEntries.
     */
    distinct?: RolloverLedgerEntryScalarFieldEnum | RolloverLedgerEntryScalarFieldEnum[]
  }

  /**
   * RolloverLedgerEntry findFirstOrThrow
   */
  export type RolloverLedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which RolloverLedgerEntry to fetch.
     */
    where?: RolloverLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolloverLedgerEntries to fetch.
     */
    orderBy?: RolloverLedgerEntryOrderByWithRelationInput | RolloverLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolloverLedgerEntries.
     */
    cursor?: RolloverLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolloverLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolloverLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolloverLedgerEntries.
     */
    distinct?: RolloverLedgerEntryScalarFieldEnum | RolloverLedgerEntryScalarFieldEnum[]
  }

  /**
   * RolloverLedgerEntry findMany
   */
  export type RolloverLedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which RolloverLedgerEntries to fetch.
     */
    where?: RolloverLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolloverLedgerEntries to fetch.
     */
    orderBy?: RolloverLedgerEntryOrderByWithRelationInput | RolloverLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolloverLedgerEntries.
     */
    cursor?: RolloverLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolloverLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolloverLedgerEntries.
     */
    skip?: number
    distinct?: RolloverLedgerEntryScalarFieldEnum | RolloverLedgerEntryScalarFieldEnum[]
  }

  /**
   * RolloverLedgerEntry create
   */
  export type RolloverLedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a RolloverLedgerEntry.
     */
    data: XOR<RolloverLedgerEntryCreateInput, RolloverLedgerEntryUncheckedCreateInput>
  }

  /**
   * RolloverLedgerEntry createMany
   */
  export type RolloverLedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolloverLedgerEntries.
     */
    data: RolloverLedgerEntryCreateManyInput | RolloverLedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolloverLedgerEntry createManyAndReturn
   */
  export type RolloverLedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RolloverLedgerEntries.
     */
    data: RolloverLedgerEntryCreateManyInput | RolloverLedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolloverLedgerEntry update
   */
  export type RolloverLedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a RolloverLedgerEntry.
     */
    data: XOR<RolloverLedgerEntryUpdateInput, RolloverLedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which RolloverLedgerEntry to update.
     */
    where: RolloverLedgerEntryWhereUniqueInput
  }

  /**
   * RolloverLedgerEntry updateMany
   */
  export type RolloverLedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolloverLedgerEntries.
     */
    data: XOR<RolloverLedgerEntryUpdateManyMutationInput, RolloverLedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which RolloverLedgerEntries to update
     */
    where?: RolloverLedgerEntryWhereInput
  }

  /**
   * RolloverLedgerEntry upsert
   */
  export type RolloverLedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the RolloverLedgerEntry to update in case it exists.
     */
    where: RolloverLedgerEntryWhereUniqueInput
    /**
     * In case the RolloverLedgerEntry found by the `where` argument doesn't exist, create a new RolloverLedgerEntry with this data.
     */
    create: XOR<RolloverLedgerEntryCreateInput, RolloverLedgerEntryUncheckedCreateInput>
    /**
     * In case the RolloverLedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolloverLedgerEntryUpdateInput, RolloverLedgerEntryUncheckedUpdateInput>
  }

  /**
   * RolloverLedgerEntry delete
   */
  export type RolloverLedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which RolloverLedgerEntry to delete.
     */
    where: RolloverLedgerEntryWhereUniqueInput
  }

  /**
   * RolloverLedgerEntry deleteMany
   */
  export type RolloverLedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolloverLedgerEntries to delete
     */
    where?: RolloverLedgerEntryWhereInput
  }

  /**
   * RolloverLedgerEntry without action
   */
  export type RolloverLedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolloverLedgerEntry
     */
    select?: RolloverLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolloverLedgerEntryInclude<ExtArgs> | null
  }


  /**
   * Model FreeBet
   */

  export type AggregateFreeBet = {
    _count: FreeBetCountAggregateOutputType | null
    _avg: FreeBetAvgAggregateOutputType | null
    _sum: FreeBetSumAggregateOutputType | null
    _min: FreeBetMinAggregateOutputType | null
    _max: FreeBetMaxAggregateOutputType | null
  }

  export type FreeBetAvgAggregateOutputType = {
    amount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    remainingAmount: Decimal | null
  }

  export type FreeBetSumAggregateOutputType = {
    amount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    remainingAmount: Decimal | null
  }

  export type FreeBetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusId: string | null
    status: $Enums.BonusStatus | null
    amount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    sportTypeRestriction: string | null
    leagueRestriction: string | null
    startsAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
    usedBetId: string | null
    remainingAmount: Decimal | null
    grantedBy: string | null
    correlationId: string | null
    deletedAt: Date | null
  }

  export type FreeBetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusId: string | null
    status: $Enums.BonusStatus | null
    amount: Decimal | null
    minOddsRequirement: Decimal | null
    rolloverMultiplier: Decimal | null
    sportTypeRestriction: string | null
    leagueRestriction: string | null
    startsAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
    usedBetId: string | null
    remainingAmount: Decimal | null
    grantedBy: string | null
    correlationId: string | null
    deletedAt: Date | null
  }

  export type FreeBetCountAggregateOutputType = {
    id: number
    userId: number
    campaignId: number
    bonusId: number
    status: number
    amount: number
    minOddsRequirement: number
    rolloverMultiplier: number
    sportTypeRestriction: number
    leagueRestriction: number
    startsAt: number
    expiresAt: number
    usedAt: number
    usedBetId: number
    remainingAmount: number
    grantedBy: number
    correlationId: number
    deletedAt: number
    _all: number
  }


  export type FreeBetAvgAggregateInputType = {
    amount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    remainingAmount?: true
  }

  export type FreeBetSumAggregateInputType = {
    amount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    remainingAmount?: true
  }

  export type FreeBetMinAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    status?: true
    amount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    sportTypeRestriction?: true
    leagueRestriction?: true
    startsAt?: true
    expiresAt?: true
    usedAt?: true
    usedBetId?: true
    remainingAmount?: true
    grantedBy?: true
    correlationId?: true
    deletedAt?: true
  }

  export type FreeBetMaxAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    status?: true
    amount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    sportTypeRestriction?: true
    leagueRestriction?: true
    startsAt?: true
    expiresAt?: true
    usedAt?: true
    usedBetId?: true
    remainingAmount?: true
    grantedBy?: true
    correlationId?: true
    deletedAt?: true
  }

  export type FreeBetCountAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    status?: true
    amount?: true
    minOddsRequirement?: true
    rolloverMultiplier?: true
    sportTypeRestriction?: true
    leagueRestriction?: true
    startsAt?: true
    expiresAt?: true
    usedAt?: true
    usedBetId?: true
    remainingAmount?: true
    grantedBy?: true
    correlationId?: true
    deletedAt?: true
    _all?: true
  }

  export type FreeBetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreeBet to aggregate.
     */
    where?: FreeBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeBets to fetch.
     */
    orderBy?: FreeBetOrderByWithRelationInput | FreeBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FreeBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FreeBets
    **/
    _count?: true | FreeBetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreeBetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreeBetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreeBetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreeBetMaxAggregateInputType
  }

  export type GetFreeBetAggregateType<T extends FreeBetAggregateArgs> = {
        [P in keyof T & keyof AggregateFreeBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreeBet[P]>
      : GetScalarType<T[P], AggregateFreeBet[P]>
  }




  export type FreeBetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FreeBetWhereInput
    orderBy?: FreeBetOrderByWithAggregationInput | FreeBetOrderByWithAggregationInput[]
    by: FreeBetScalarFieldEnum[] | FreeBetScalarFieldEnum
    having?: FreeBetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreeBetCountAggregateInputType | true
    _avg?: FreeBetAvgAggregateInputType
    _sum?: FreeBetSumAggregateInputType
    _min?: FreeBetMinAggregateInputType
    _max?: FreeBetMaxAggregateInputType
  }

  export type FreeBetGroupByOutputType = {
    id: string
    userId: string
    campaignId: string | null
    bonusId: string | null
    status: $Enums.BonusStatus
    amount: Decimal
    minOddsRequirement: Decimal
    rolloverMultiplier: Decimal | null
    sportTypeRestriction: string | null
    leagueRestriction: string | null
    startsAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
    usedBetId: string | null
    remainingAmount: Decimal | null
    grantedBy: string | null
    correlationId: string | null
    deletedAt: Date | null
    _count: FreeBetCountAggregateOutputType | null
    _avg: FreeBetAvgAggregateOutputType | null
    _sum: FreeBetSumAggregateOutputType | null
    _min: FreeBetMinAggregateOutputType | null
    _max: FreeBetMaxAggregateOutputType | null
  }

  type GetFreeBetGroupByPayload<T extends FreeBetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreeBetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreeBetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreeBetGroupByOutputType[P]>
            : GetScalarType<T[P], FreeBetGroupByOutputType[P]>
        }
      >
    >


  export type FreeBetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    status?: boolean
    amount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    sportTypeRestriction?: boolean
    leagueRestriction?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    usedBetId?: boolean
    remainingAmount?: boolean
    grantedBy?: boolean
    correlationId?: boolean
    deletedAt?: boolean
    campaign?: boolean | FreeBet$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["freeBet"]>

  export type FreeBetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    status?: boolean
    amount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    sportTypeRestriction?: boolean
    leagueRestriction?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    usedBetId?: boolean
    remainingAmount?: boolean
    grantedBy?: boolean
    correlationId?: boolean
    deletedAt?: boolean
    campaign?: boolean | FreeBet$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["freeBet"]>

  export type FreeBetSelectScalar = {
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    status?: boolean
    amount?: boolean
    minOddsRequirement?: boolean
    rolloverMultiplier?: boolean
    sportTypeRestriction?: boolean
    leagueRestriction?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    usedBetId?: boolean
    remainingAmount?: boolean
    grantedBy?: boolean
    correlationId?: boolean
    deletedAt?: boolean
  }

  export type FreeBetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | FreeBet$campaignArgs<ExtArgs>
  }
  export type FreeBetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | FreeBet$campaignArgs<ExtArgs>
  }

  export type $FreeBetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FreeBet"
    objects: {
      campaign: Prisma.$BonusCampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      campaignId: string | null
      bonusId: string | null
      status: $Enums.BonusStatus
      amount: Prisma.Decimal
      minOddsRequirement: Prisma.Decimal
      rolloverMultiplier: Prisma.Decimal | null
      sportTypeRestriction: string | null
      leagueRestriction: string | null
      startsAt: Date | null
      expiresAt: Date | null
      usedAt: Date | null
      usedBetId: string | null
      remainingAmount: Prisma.Decimal | null
      grantedBy: string | null
      correlationId: string | null
      deletedAt: Date | null
    }, ExtArgs["result"]["freeBet"]>
    composites: {}
  }

  type FreeBetGetPayload<S extends boolean | null | undefined | FreeBetDefaultArgs> = $Result.GetResult<Prisma.$FreeBetPayload, S>

  type FreeBetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FreeBetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FreeBetCountAggregateInputType | true
    }

  export interface FreeBetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FreeBet'], meta: { name: 'FreeBet' } }
    /**
     * Find zero or one FreeBet that matches the filter.
     * @param {FreeBetFindUniqueArgs} args - Arguments to find a FreeBet
     * @example
     * // Get one FreeBet
     * const freeBet = await prisma.freeBet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FreeBetFindUniqueArgs>(args: SelectSubset<T, FreeBetFindUniqueArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FreeBet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FreeBetFindUniqueOrThrowArgs} args - Arguments to find a FreeBet
     * @example
     * // Get one FreeBet
     * const freeBet = await prisma.freeBet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FreeBetFindUniqueOrThrowArgs>(args: SelectSubset<T, FreeBetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FreeBet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetFindFirstArgs} args - Arguments to find a FreeBet
     * @example
     * // Get one FreeBet
     * const freeBet = await prisma.freeBet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FreeBetFindFirstArgs>(args?: SelectSubset<T, FreeBetFindFirstArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FreeBet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetFindFirstOrThrowArgs} args - Arguments to find a FreeBet
     * @example
     * // Get one FreeBet
     * const freeBet = await prisma.freeBet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FreeBetFindFirstOrThrowArgs>(args?: SelectSubset<T, FreeBetFindFirstOrThrowArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FreeBets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FreeBets
     * const freeBets = await prisma.freeBet.findMany()
     * 
     * // Get first 10 FreeBets
     * const freeBets = await prisma.freeBet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freeBetWithIdOnly = await prisma.freeBet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FreeBetFindManyArgs>(args?: SelectSubset<T, FreeBetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FreeBet.
     * @param {FreeBetCreateArgs} args - Arguments to create a FreeBet.
     * @example
     * // Create one FreeBet
     * const FreeBet = await prisma.freeBet.create({
     *   data: {
     *     // ... data to create a FreeBet
     *   }
     * })
     * 
     */
    create<T extends FreeBetCreateArgs>(args: SelectSubset<T, FreeBetCreateArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FreeBets.
     * @param {FreeBetCreateManyArgs} args - Arguments to create many FreeBets.
     * @example
     * // Create many FreeBets
     * const freeBet = await prisma.freeBet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FreeBetCreateManyArgs>(args?: SelectSubset<T, FreeBetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FreeBets and returns the data saved in the database.
     * @param {FreeBetCreateManyAndReturnArgs} args - Arguments to create many FreeBets.
     * @example
     * // Create many FreeBets
     * const freeBet = await prisma.freeBet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FreeBets and only return the `id`
     * const freeBetWithIdOnly = await prisma.freeBet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FreeBetCreateManyAndReturnArgs>(args?: SelectSubset<T, FreeBetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FreeBet.
     * @param {FreeBetDeleteArgs} args - Arguments to delete one FreeBet.
     * @example
     * // Delete one FreeBet
     * const FreeBet = await prisma.freeBet.delete({
     *   where: {
     *     // ... filter to delete one FreeBet
     *   }
     * })
     * 
     */
    delete<T extends FreeBetDeleteArgs>(args: SelectSubset<T, FreeBetDeleteArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FreeBet.
     * @param {FreeBetUpdateArgs} args - Arguments to update one FreeBet.
     * @example
     * // Update one FreeBet
     * const freeBet = await prisma.freeBet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FreeBetUpdateArgs>(args: SelectSubset<T, FreeBetUpdateArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FreeBets.
     * @param {FreeBetDeleteManyArgs} args - Arguments to filter FreeBets to delete.
     * @example
     * // Delete a few FreeBets
     * const { count } = await prisma.freeBet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FreeBetDeleteManyArgs>(args?: SelectSubset<T, FreeBetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FreeBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FreeBets
     * const freeBet = await prisma.freeBet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FreeBetUpdateManyArgs>(args: SelectSubset<T, FreeBetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FreeBet.
     * @param {FreeBetUpsertArgs} args - Arguments to update or create a FreeBet.
     * @example
     * // Update or create a FreeBet
     * const freeBet = await prisma.freeBet.upsert({
     *   create: {
     *     // ... data to create a FreeBet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FreeBet we want to update
     *   }
     * })
     */
    upsert<T extends FreeBetUpsertArgs>(args: SelectSubset<T, FreeBetUpsertArgs<ExtArgs>>): Prisma__FreeBetClient<$Result.GetResult<Prisma.$FreeBetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FreeBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetCountArgs} args - Arguments to filter FreeBets to count.
     * @example
     * // Count the number of FreeBets
     * const count = await prisma.freeBet.count({
     *   where: {
     *     // ... the filter for the FreeBets we want to count
     *   }
     * })
    **/
    count<T extends FreeBetCountArgs>(
      args?: Subset<T, FreeBetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreeBetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FreeBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FreeBetAggregateArgs>(args: Subset<T, FreeBetAggregateArgs>): Prisma.PrismaPromise<GetFreeBetAggregateType<T>>

    /**
     * Group by FreeBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreeBetGroupByArgs} args - Group by arguments.
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
      T extends FreeBetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FreeBetGroupByArgs['orderBy'] }
        : { orderBy?: FreeBetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FreeBetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreeBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FreeBet model
   */
  readonly fields: FreeBetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FreeBet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FreeBetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends FreeBet$campaignArgs<ExtArgs> = {}>(args?: Subset<T, FreeBet$campaignArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the FreeBet model
   */ 
  interface FreeBetFieldRefs {
    readonly id: FieldRef<"FreeBet", 'String'>
    readonly userId: FieldRef<"FreeBet", 'String'>
    readonly campaignId: FieldRef<"FreeBet", 'String'>
    readonly bonusId: FieldRef<"FreeBet", 'String'>
    readonly status: FieldRef<"FreeBet", 'BonusStatus'>
    readonly amount: FieldRef<"FreeBet", 'Decimal'>
    readonly minOddsRequirement: FieldRef<"FreeBet", 'Decimal'>
    readonly rolloverMultiplier: FieldRef<"FreeBet", 'Decimal'>
    readonly sportTypeRestriction: FieldRef<"FreeBet", 'String'>
    readonly leagueRestriction: FieldRef<"FreeBet", 'String'>
    readonly startsAt: FieldRef<"FreeBet", 'DateTime'>
    readonly expiresAt: FieldRef<"FreeBet", 'DateTime'>
    readonly usedAt: FieldRef<"FreeBet", 'DateTime'>
    readonly usedBetId: FieldRef<"FreeBet", 'String'>
    readonly remainingAmount: FieldRef<"FreeBet", 'Decimal'>
    readonly grantedBy: FieldRef<"FreeBet", 'String'>
    readonly correlationId: FieldRef<"FreeBet", 'String'>
    readonly deletedAt: FieldRef<"FreeBet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FreeBet findUnique
   */
  export type FreeBetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter, which FreeBet to fetch.
     */
    where: FreeBetWhereUniqueInput
  }

  /**
   * FreeBet findUniqueOrThrow
   */
  export type FreeBetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter, which FreeBet to fetch.
     */
    where: FreeBetWhereUniqueInput
  }

  /**
   * FreeBet findFirst
   */
  export type FreeBetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter, which FreeBet to fetch.
     */
    where?: FreeBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeBets to fetch.
     */
    orderBy?: FreeBetOrderByWithRelationInput | FreeBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreeBets.
     */
    cursor?: FreeBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreeBets.
     */
    distinct?: FreeBetScalarFieldEnum | FreeBetScalarFieldEnum[]
  }

  /**
   * FreeBet findFirstOrThrow
   */
  export type FreeBetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter, which FreeBet to fetch.
     */
    where?: FreeBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeBets to fetch.
     */
    orderBy?: FreeBetOrderByWithRelationInput | FreeBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FreeBets.
     */
    cursor?: FreeBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FreeBets.
     */
    distinct?: FreeBetScalarFieldEnum | FreeBetScalarFieldEnum[]
  }

  /**
   * FreeBet findMany
   */
  export type FreeBetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter, which FreeBets to fetch.
     */
    where?: FreeBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FreeBets to fetch.
     */
    orderBy?: FreeBetOrderByWithRelationInput | FreeBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FreeBets.
     */
    cursor?: FreeBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FreeBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FreeBets.
     */
    skip?: number
    distinct?: FreeBetScalarFieldEnum | FreeBetScalarFieldEnum[]
  }

  /**
   * FreeBet create
   */
  export type FreeBetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * The data needed to create a FreeBet.
     */
    data: XOR<FreeBetCreateInput, FreeBetUncheckedCreateInput>
  }

  /**
   * FreeBet createMany
   */
  export type FreeBetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FreeBets.
     */
    data: FreeBetCreateManyInput | FreeBetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FreeBet createManyAndReturn
   */
  export type FreeBetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FreeBets.
     */
    data: FreeBetCreateManyInput | FreeBetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FreeBet update
   */
  export type FreeBetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * The data needed to update a FreeBet.
     */
    data: XOR<FreeBetUpdateInput, FreeBetUncheckedUpdateInput>
    /**
     * Choose, which FreeBet to update.
     */
    where: FreeBetWhereUniqueInput
  }

  /**
   * FreeBet updateMany
   */
  export type FreeBetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FreeBets.
     */
    data: XOR<FreeBetUpdateManyMutationInput, FreeBetUncheckedUpdateManyInput>
    /**
     * Filter which FreeBets to update
     */
    where?: FreeBetWhereInput
  }

  /**
   * FreeBet upsert
   */
  export type FreeBetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * The filter to search for the FreeBet to update in case it exists.
     */
    where: FreeBetWhereUniqueInput
    /**
     * In case the FreeBet found by the `where` argument doesn't exist, create a new FreeBet with this data.
     */
    create: XOR<FreeBetCreateInput, FreeBetUncheckedCreateInput>
    /**
     * In case the FreeBet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FreeBetUpdateInput, FreeBetUncheckedUpdateInput>
  }

  /**
   * FreeBet delete
   */
  export type FreeBetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
    /**
     * Filter which FreeBet to delete.
     */
    where: FreeBetWhereUniqueInput
  }

  /**
   * FreeBet deleteMany
   */
  export type FreeBetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FreeBets to delete
     */
    where?: FreeBetWhereInput
  }

  /**
   * FreeBet.campaign
   */
  export type FreeBet$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    where?: BonusCampaignWhereInput
  }

  /**
   * FreeBet without action
   */
  export type FreeBetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FreeBet
     */
    select?: FreeBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FreeBetInclude<ExtArgs> | null
  }


  /**
   * Model CasinoFreeSpin
   */

  export type AggregateCasinoFreeSpin = {
    _count: CasinoFreeSpinCountAggregateOutputType | null
    _avg: CasinoFreeSpinAvgAggregateOutputType | null
    _sum: CasinoFreeSpinSumAggregateOutputType | null
    _min: CasinoFreeSpinMinAggregateOutputType | null
    _max: CasinoFreeSpinMaxAggregateOutputType | null
  }

  export type CasinoFreeSpinAvgAggregateOutputType = {
    countTotal: number | null
    countUsed: number | null
    betAmountPerSpin: Decimal | null
  }

  export type CasinoFreeSpinSumAggregateOutputType = {
    countTotal: number | null
    countUsed: number | null
    betAmountPerSpin: Decimal | null
  }

  export type CasinoFreeSpinMinAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusId: string | null
    gameId: string | null
    gameProvider: string | null
    countTotal: number | null
    countUsed: number | null
    status: $Enums.BonusStatus | null
    betAmountPerSpin: Decimal | null
    expiresAt: Date | null
    usedAt: Date | null
    correlationId: string | null
  }

  export type CasinoFreeSpinMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    campaignId: string | null
    bonusId: string | null
    gameId: string | null
    gameProvider: string | null
    countTotal: number | null
    countUsed: number | null
    status: $Enums.BonusStatus | null
    betAmountPerSpin: Decimal | null
    expiresAt: Date | null
    usedAt: Date | null
    correlationId: string | null
  }

  export type CasinoFreeSpinCountAggregateOutputType = {
    id: number
    userId: number
    campaignId: number
    bonusId: number
    gameId: number
    gameProvider: number
    countTotal: number
    countUsed: number
    status: number
    betAmountPerSpin: number
    expiresAt: number
    usedAt: number
    correlationId: number
    _all: number
  }


  export type CasinoFreeSpinAvgAggregateInputType = {
    countTotal?: true
    countUsed?: true
    betAmountPerSpin?: true
  }

  export type CasinoFreeSpinSumAggregateInputType = {
    countTotal?: true
    countUsed?: true
    betAmountPerSpin?: true
  }

  export type CasinoFreeSpinMinAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    gameId?: true
    gameProvider?: true
    countTotal?: true
    countUsed?: true
    status?: true
    betAmountPerSpin?: true
    expiresAt?: true
    usedAt?: true
    correlationId?: true
  }

  export type CasinoFreeSpinMaxAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    gameId?: true
    gameProvider?: true
    countTotal?: true
    countUsed?: true
    status?: true
    betAmountPerSpin?: true
    expiresAt?: true
    usedAt?: true
    correlationId?: true
  }

  export type CasinoFreeSpinCountAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    bonusId?: true
    gameId?: true
    gameProvider?: true
    countTotal?: true
    countUsed?: true
    status?: true
    betAmountPerSpin?: true
    expiresAt?: true
    usedAt?: true
    correlationId?: true
    _all?: true
  }

  export type CasinoFreeSpinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoFreeSpin to aggregate.
     */
    where?: CasinoFreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoFreeSpins to fetch.
     */
    orderBy?: CasinoFreeSpinOrderByWithRelationInput | CasinoFreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoFreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoFreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoFreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoFreeSpins
    **/
    _count?: true | CasinoFreeSpinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasinoFreeSpinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasinoFreeSpinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoFreeSpinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoFreeSpinMaxAggregateInputType
  }

  export type GetCasinoFreeSpinAggregateType<T extends CasinoFreeSpinAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoFreeSpin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoFreeSpin[P]>
      : GetScalarType<T[P], AggregateCasinoFreeSpin[P]>
  }




  export type CasinoFreeSpinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoFreeSpinWhereInput
    orderBy?: CasinoFreeSpinOrderByWithAggregationInput | CasinoFreeSpinOrderByWithAggregationInput[]
    by: CasinoFreeSpinScalarFieldEnum[] | CasinoFreeSpinScalarFieldEnum
    having?: CasinoFreeSpinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoFreeSpinCountAggregateInputType | true
    _avg?: CasinoFreeSpinAvgAggregateInputType
    _sum?: CasinoFreeSpinSumAggregateInputType
    _min?: CasinoFreeSpinMinAggregateInputType
    _max?: CasinoFreeSpinMaxAggregateInputType
  }

  export type CasinoFreeSpinGroupByOutputType = {
    id: string
    userId: string
    campaignId: string | null
    bonusId: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed: number
    status: $Enums.BonusStatus
    betAmountPerSpin: Decimal | null
    expiresAt: Date | null
    usedAt: Date | null
    correlationId: string | null
    _count: CasinoFreeSpinCountAggregateOutputType | null
    _avg: CasinoFreeSpinAvgAggregateOutputType | null
    _sum: CasinoFreeSpinSumAggregateOutputType | null
    _min: CasinoFreeSpinMinAggregateOutputType | null
    _max: CasinoFreeSpinMaxAggregateOutputType | null
  }

  type GetCasinoFreeSpinGroupByPayload<T extends CasinoFreeSpinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoFreeSpinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoFreeSpinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoFreeSpinGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoFreeSpinGroupByOutputType[P]>
        }
      >
    >


  export type CasinoFreeSpinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    gameId?: boolean
    gameProvider?: boolean
    countTotal?: boolean
    countUsed?: boolean
    status?: boolean
    betAmountPerSpin?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    correlationId?: boolean
    campaign?: boolean | CasinoFreeSpin$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["casinoFreeSpin"]>

  export type CasinoFreeSpinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    gameId?: boolean
    gameProvider?: boolean
    countTotal?: boolean
    countUsed?: boolean
    status?: boolean
    betAmountPerSpin?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    correlationId?: boolean
    campaign?: boolean | CasinoFreeSpin$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["casinoFreeSpin"]>

  export type CasinoFreeSpinSelectScalar = {
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    bonusId?: boolean
    gameId?: boolean
    gameProvider?: boolean
    countTotal?: boolean
    countUsed?: boolean
    status?: boolean
    betAmountPerSpin?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    correlationId?: boolean
  }

  export type CasinoFreeSpinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CasinoFreeSpin$campaignArgs<ExtArgs>
  }
  export type CasinoFreeSpinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CasinoFreeSpin$campaignArgs<ExtArgs>
  }

  export type $CasinoFreeSpinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoFreeSpin"
    objects: {
      campaign: Prisma.$BonusCampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      campaignId: string | null
      bonusId: string | null
      gameId: string
      gameProvider: string
      countTotal: number
      countUsed: number
      status: $Enums.BonusStatus
      betAmountPerSpin: Prisma.Decimal | null
      expiresAt: Date | null
      usedAt: Date | null
      correlationId: string | null
    }, ExtArgs["result"]["casinoFreeSpin"]>
    composites: {}
  }

  type CasinoFreeSpinGetPayload<S extends boolean | null | undefined | CasinoFreeSpinDefaultArgs> = $Result.GetResult<Prisma.$CasinoFreeSpinPayload, S>

  type CasinoFreeSpinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoFreeSpinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoFreeSpinCountAggregateInputType | true
    }

  export interface CasinoFreeSpinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoFreeSpin'], meta: { name: 'CasinoFreeSpin' } }
    /**
     * Find zero or one CasinoFreeSpin that matches the filter.
     * @param {CasinoFreeSpinFindUniqueArgs} args - Arguments to find a CasinoFreeSpin
     * @example
     * // Get one CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoFreeSpinFindUniqueArgs>(args: SelectSubset<T, CasinoFreeSpinFindUniqueArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoFreeSpin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoFreeSpinFindUniqueOrThrowArgs} args - Arguments to find a CasinoFreeSpin
     * @example
     * // Get one CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoFreeSpinFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoFreeSpinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoFreeSpin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinFindFirstArgs} args - Arguments to find a CasinoFreeSpin
     * @example
     * // Get one CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoFreeSpinFindFirstArgs>(args?: SelectSubset<T, CasinoFreeSpinFindFirstArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoFreeSpin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinFindFirstOrThrowArgs} args - Arguments to find a CasinoFreeSpin
     * @example
     * // Get one CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoFreeSpinFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoFreeSpinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoFreeSpins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoFreeSpins
     * const casinoFreeSpins = await prisma.casinoFreeSpin.findMany()
     * 
     * // Get first 10 CasinoFreeSpins
     * const casinoFreeSpins = await prisma.casinoFreeSpin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoFreeSpinWithIdOnly = await prisma.casinoFreeSpin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoFreeSpinFindManyArgs>(args?: SelectSubset<T, CasinoFreeSpinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoFreeSpin.
     * @param {CasinoFreeSpinCreateArgs} args - Arguments to create a CasinoFreeSpin.
     * @example
     * // Create one CasinoFreeSpin
     * const CasinoFreeSpin = await prisma.casinoFreeSpin.create({
     *   data: {
     *     // ... data to create a CasinoFreeSpin
     *   }
     * })
     * 
     */
    create<T extends CasinoFreeSpinCreateArgs>(args: SelectSubset<T, CasinoFreeSpinCreateArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoFreeSpins.
     * @param {CasinoFreeSpinCreateManyArgs} args - Arguments to create many CasinoFreeSpins.
     * @example
     * // Create many CasinoFreeSpins
     * const casinoFreeSpin = await prisma.casinoFreeSpin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoFreeSpinCreateManyArgs>(args?: SelectSubset<T, CasinoFreeSpinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoFreeSpins and returns the data saved in the database.
     * @param {CasinoFreeSpinCreateManyAndReturnArgs} args - Arguments to create many CasinoFreeSpins.
     * @example
     * // Create many CasinoFreeSpins
     * const casinoFreeSpin = await prisma.casinoFreeSpin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoFreeSpins and only return the `id`
     * const casinoFreeSpinWithIdOnly = await prisma.casinoFreeSpin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoFreeSpinCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoFreeSpinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoFreeSpin.
     * @param {CasinoFreeSpinDeleteArgs} args - Arguments to delete one CasinoFreeSpin.
     * @example
     * // Delete one CasinoFreeSpin
     * const CasinoFreeSpin = await prisma.casinoFreeSpin.delete({
     *   where: {
     *     // ... filter to delete one CasinoFreeSpin
     *   }
     * })
     * 
     */
    delete<T extends CasinoFreeSpinDeleteArgs>(args: SelectSubset<T, CasinoFreeSpinDeleteArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoFreeSpin.
     * @param {CasinoFreeSpinUpdateArgs} args - Arguments to update one CasinoFreeSpin.
     * @example
     * // Update one CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoFreeSpinUpdateArgs>(args: SelectSubset<T, CasinoFreeSpinUpdateArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoFreeSpins.
     * @param {CasinoFreeSpinDeleteManyArgs} args - Arguments to filter CasinoFreeSpins to delete.
     * @example
     * // Delete a few CasinoFreeSpins
     * const { count } = await prisma.casinoFreeSpin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoFreeSpinDeleteManyArgs>(args?: SelectSubset<T, CasinoFreeSpinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoFreeSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoFreeSpins
     * const casinoFreeSpin = await prisma.casinoFreeSpin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoFreeSpinUpdateManyArgs>(args: SelectSubset<T, CasinoFreeSpinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoFreeSpin.
     * @param {CasinoFreeSpinUpsertArgs} args - Arguments to update or create a CasinoFreeSpin.
     * @example
     * // Update or create a CasinoFreeSpin
     * const casinoFreeSpin = await prisma.casinoFreeSpin.upsert({
     *   create: {
     *     // ... data to create a CasinoFreeSpin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoFreeSpin we want to update
     *   }
     * })
     */
    upsert<T extends CasinoFreeSpinUpsertArgs>(args: SelectSubset<T, CasinoFreeSpinUpsertArgs<ExtArgs>>): Prisma__CasinoFreeSpinClient<$Result.GetResult<Prisma.$CasinoFreeSpinPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoFreeSpins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinCountArgs} args - Arguments to filter CasinoFreeSpins to count.
     * @example
     * // Count the number of CasinoFreeSpins
     * const count = await prisma.casinoFreeSpin.count({
     *   where: {
     *     // ... the filter for the CasinoFreeSpins we want to count
     *   }
     * })
    **/
    count<T extends CasinoFreeSpinCountArgs>(
      args?: Subset<T, CasinoFreeSpinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoFreeSpinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoFreeSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoFreeSpinAggregateArgs>(args: Subset<T, CasinoFreeSpinAggregateArgs>): Prisma.PrismaPromise<GetCasinoFreeSpinAggregateType<T>>

    /**
     * Group by CasinoFreeSpin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoFreeSpinGroupByArgs} args - Group by arguments.
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
      T extends CasinoFreeSpinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoFreeSpinGroupByArgs['orderBy'] }
        : { orderBy?: CasinoFreeSpinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoFreeSpinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoFreeSpinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoFreeSpin model
   */
  readonly fields: CasinoFreeSpinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoFreeSpin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoFreeSpinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CasinoFreeSpin$campaignArgs<ExtArgs> = {}>(args?: Subset<T, CasinoFreeSpin$campaignArgs<ExtArgs>>): Prisma__BonusCampaignClient<$Result.GetResult<Prisma.$BonusCampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the CasinoFreeSpin model
   */ 
  interface CasinoFreeSpinFieldRefs {
    readonly id: FieldRef<"CasinoFreeSpin", 'String'>
    readonly userId: FieldRef<"CasinoFreeSpin", 'String'>
    readonly campaignId: FieldRef<"CasinoFreeSpin", 'String'>
    readonly bonusId: FieldRef<"CasinoFreeSpin", 'String'>
    readonly gameId: FieldRef<"CasinoFreeSpin", 'String'>
    readonly gameProvider: FieldRef<"CasinoFreeSpin", 'String'>
    readonly countTotal: FieldRef<"CasinoFreeSpin", 'Int'>
    readonly countUsed: FieldRef<"CasinoFreeSpin", 'Int'>
    readonly status: FieldRef<"CasinoFreeSpin", 'BonusStatus'>
    readonly betAmountPerSpin: FieldRef<"CasinoFreeSpin", 'Decimal'>
    readonly expiresAt: FieldRef<"CasinoFreeSpin", 'DateTime'>
    readonly usedAt: FieldRef<"CasinoFreeSpin", 'DateTime'>
    readonly correlationId: FieldRef<"CasinoFreeSpin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CasinoFreeSpin findUnique
   */
  export type CasinoFreeSpinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which CasinoFreeSpin to fetch.
     */
    where: CasinoFreeSpinWhereUniqueInput
  }

  /**
   * CasinoFreeSpin findUniqueOrThrow
   */
  export type CasinoFreeSpinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which CasinoFreeSpin to fetch.
     */
    where: CasinoFreeSpinWhereUniqueInput
  }

  /**
   * CasinoFreeSpin findFirst
   */
  export type CasinoFreeSpinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which CasinoFreeSpin to fetch.
     */
    where?: CasinoFreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoFreeSpins to fetch.
     */
    orderBy?: CasinoFreeSpinOrderByWithRelationInput | CasinoFreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoFreeSpins.
     */
    cursor?: CasinoFreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoFreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoFreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoFreeSpins.
     */
    distinct?: CasinoFreeSpinScalarFieldEnum | CasinoFreeSpinScalarFieldEnum[]
  }

  /**
   * CasinoFreeSpin findFirstOrThrow
   */
  export type CasinoFreeSpinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which CasinoFreeSpin to fetch.
     */
    where?: CasinoFreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoFreeSpins to fetch.
     */
    orderBy?: CasinoFreeSpinOrderByWithRelationInput | CasinoFreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoFreeSpins.
     */
    cursor?: CasinoFreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoFreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoFreeSpins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoFreeSpins.
     */
    distinct?: CasinoFreeSpinScalarFieldEnum | CasinoFreeSpinScalarFieldEnum[]
  }

  /**
   * CasinoFreeSpin findMany
   */
  export type CasinoFreeSpinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter, which CasinoFreeSpins to fetch.
     */
    where?: CasinoFreeSpinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoFreeSpins to fetch.
     */
    orderBy?: CasinoFreeSpinOrderByWithRelationInput | CasinoFreeSpinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoFreeSpins.
     */
    cursor?: CasinoFreeSpinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoFreeSpins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoFreeSpins.
     */
    skip?: number
    distinct?: CasinoFreeSpinScalarFieldEnum | CasinoFreeSpinScalarFieldEnum[]
  }

  /**
   * CasinoFreeSpin create
   */
  export type CasinoFreeSpinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * The data needed to create a CasinoFreeSpin.
     */
    data: XOR<CasinoFreeSpinCreateInput, CasinoFreeSpinUncheckedCreateInput>
  }

  /**
   * CasinoFreeSpin createMany
   */
  export type CasinoFreeSpinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoFreeSpins.
     */
    data: CasinoFreeSpinCreateManyInput | CasinoFreeSpinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoFreeSpin createManyAndReturn
   */
  export type CasinoFreeSpinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoFreeSpins.
     */
    data: CasinoFreeSpinCreateManyInput | CasinoFreeSpinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasinoFreeSpin update
   */
  export type CasinoFreeSpinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * The data needed to update a CasinoFreeSpin.
     */
    data: XOR<CasinoFreeSpinUpdateInput, CasinoFreeSpinUncheckedUpdateInput>
    /**
     * Choose, which CasinoFreeSpin to update.
     */
    where: CasinoFreeSpinWhereUniqueInput
  }

  /**
   * CasinoFreeSpin updateMany
   */
  export type CasinoFreeSpinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoFreeSpins.
     */
    data: XOR<CasinoFreeSpinUpdateManyMutationInput, CasinoFreeSpinUncheckedUpdateManyInput>
    /**
     * Filter which CasinoFreeSpins to update
     */
    where?: CasinoFreeSpinWhereInput
  }

  /**
   * CasinoFreeSpin upsert
   */
  export type CasinoFreeSpinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * The filter to search for the CasinoFreeSpin to update in case it exists.
     */
    where: CasinoFreeSpinWhereUniqueInput
    /**
     * In case the CasinoFreeSpin found by the `where` argument doesn't exist, create a new CasinoFreeSpin with this data.
     */
    create: XOR<CasinoFreeSpinCreateInput, CasinoFreeSpinUncheckedCreateInput>
    /**
     * In case the CasinoFreeSpin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoFreeSpinUpdateInput, CasinoFreeSpinUncheckedUpdateInput>
  }

  /**
   * CasinoFreeSpin delete
   */
  export type CasinoFreeSpinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
    /**
     * Filter which CasinoFreeSpin to delete.
     */
    where: CasinoFreeSpinWhereUniqueInput
  }

  /**
   * CasinoFreeSpin deleteMany
   */
  export type CasinoFreeSpinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoFreeSpins to delete
     */
    where?: CasinoFreeSpinWhereInput
  }

  /**
   * CasinoFreeSpin.campaign
   */
  export type CasinoFreeSpin$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusCampaign
     */
    select?: BonusCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusCampaignInclude<ExtArgs> | null
    where?: BonusCampaignWhereInput
  }

  /**
   * CasinoFreeSpin without action
   */
  export type CasinoFreeSpinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoFreeSpin
     */
    select?: CasinoFreeSpinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoFreeSpinInclude<ExtArgs> | null
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


  export const BonusCampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    bonusType: 'bonusType',
    trigger: 'trigger',
    status: 'status',
    matchPercent: 'matchPercent',
    maxAmount: 'maxAmount',
    minDepositAmount: 'minDepositAmount',
    minOddsRequirement: 'minOddsRequirement',
    rolloverMultiplier: 'rolloverMultiplier',
    rolloverContributionCategory: 'rolloverContributionCategory',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    validityDays: 'validityDays',
    freeSpinsCount: 'freeSpinsCount',
    freeSpinsGameId: 'freeSpinsGameId',
    eligibleCountries: 'eligibleCountries',
    eligibleSports: 'eligibleSports',
    sportMinOdds: 'sportMinOdds',
    maxBonusPerUser: 'maxBonusPerUser',
    wageringSportAllowed: 'wageringSportAllowed',
    wageringCasinoAllowed: 'wageringCasinoAllowed',
    description: 'description',
    termsHtml: 'termsHtml',
    metadata: 'metadata',
    isPromo: 'isPromo',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BonusCampaignScalarFieldEnum = (typeof BonusCampaignScalarFieldEnum)[keyof typeof BonusCampaignScalarFieldEnum]


  export const UserBonusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    campaignId: 'campaignId',
    bonusType: 'bonusType',
    status: 'status',
    grantedAmount: 'grantedAmount',
    grantedCurrency: 'grantedCurrency',
    maxAmount: 'maxAmount',
    usedAmount: 'usedAmount',
    releasedAmount: 'releasedAmount',
    minOddsRequirement: 'minOddsRequirement',
    rolloverMultiplier: 'rolloverMultiplier',
    rolloverContributionCategory: 'rolloverContributionCategory',
    rolloverRequiredTotal: 'rolloverRequiredTotal',
    rolloverCompletedReal: 'rolloverCompletedReal',
    rolloverCompletedWeighted: 'rolloverCompletedWeighted',
    rolloverPercent: 'rolloverPercent',
    rolloverStatus: 'rolloverStatus',
    grantedAt: 'grantedAt',
    activatedAt: 'activatedAt',
    expiresAt: 'expiresAt',
    lastContributionAt: 'lastContributionAt',
    releasedAt: 'releasedAt',
    cancelledAt: 'cancelledAt',
    cancelledReason: 'cancelledReason',
    referenceDepositId: 'referenceDepositId',
    promocodeUsed: 'promocodeUsed',
    freebetIdExternal: 'freebetIdExternal',
    description: 'description',
    noteAdmin: 'noteAdmin',
    createdByAdminId: 'createdByAdminId',
    metadata: 'metadata',
    walletId: 'walletId'
  };

  export type UserBonusScalarFieldEnum = (typeof UserBonusScalarFieldEnum)[keyof typeof UserBonusScalarFieldEnum]


  export const RolloverLedgerEntryScalarFieldEnum: {
    id: 'id',
    userBonusId: 'userBonusId',
    transactionDate: 'transactionDate',
    betId: 'betId',
    casinoRoundId: 'casinoRoundId',
    wageredAmount: 'wageredAmount',
    sourceType: 'sourceType',
    sportType: 'sportType',
    casinoCategory: 'casinoCategory',
    contributionPercent: 'contributionPercent',
    weightedContributionAmount: 'weightedContributionAmount',
    oddsAtBet: 'oddsAtBet',
    winningAmount: 'winningAmount',
    selectionCount: 'selectionCount',
    referenceCorrelationId: 'referenceCorrelationId'
  };

  export type RolloverLedgerEntryScalarFieldEnum = (typeof RolloverLedgerEntryScalarFieldEnum)[keyof typeof RolloverLedgerEntryScalarFieldEnum]


  export const FreeBetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    campaignId: 'campaignId',
    bonusId: 'bonusId',
    status: 'status',
    amount: 'amount',
    minOddsRequirement: 'minOddsRequirement',
    rolloverMultiplier: 'rolloverMultiplier',
    sportTypeRestriction: 'sportTypeRestriction',
    leagueRestriction: 'leagueRestriction',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    usedBetId: 'usedBetId',
    remainingAmount: 'remainingAmount',
    grantedBy: 'grantedBy',
    correlationId: 'correlationId',
    deletedAt: 'deletedAt'
  };

  export type FreeBetScalarFieldEnum = (typeof FreeBetScalarFieldEnum)[keyof typeof FreeBetScalarFieldEnum]


  export const CasinoFreeSpinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    campaignId: 'campaignId',
    bonusId: 'bonusId',
    gameId: 'gameId',
    gameProvider: 'gameProvider',
    countTotal: 'countTotal',
    countUsed: 'countUsed',
    status: 'status',
    betAmountPerSpin: 'betAmountPerSpin',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    correlationId: 'correlationId'
  };

  export type CasinoFreeSpinScalarFieldEnum = (typeof CasinoFreeSpinScalarFieldEnum)[keyof typeof CasinoFreeSpinScalarFieldEnum]


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
   * Reference to a field of type 'BonusType'
   */
  export type EnumBonusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusType'>
    


  /**
   * Reference to a field of type 'BonusType[]'
   */
  export type ListEnumBonusTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusType[]'>
    


  /**
   * Reference to a field of type 'BonusTrigger'
   */
  export type EnumBonusTriggerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusTrigger'>
    


  /**
   * Reference to a field of type 'BonusTrigger[]'
   */
  export type ListEnumBonusTriggerFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusTrigger[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CasinoContributionCategory'
   */
  export type EnumCasinoContributionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoContributionCategory'>
    


  /**
   * Reference to a field of type 'CasinoContributionCategory[]'
   */
  export type ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoContributionCategory[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BonusStatus'
   */
  export type EnumBonusStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusStatus'>
    


  /**
   * Reference to a field of type 'BonusStatus[]'
   */
  export type ListEnumBonusStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BonusStatus[]'>
    


  /**
   * Reference to a field of type 'RolloverStatus'
   */
  export type EnumRolloverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolloverStatus'>
    


  /**
   * Reference to a field of type 'RolloverStatus[]'
   */
  export type ListEnumRolloverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolloverStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BonusCampaignWhereInput = {
    AND?: BonusCampaignWhereInput | BonusCampaignWhereInput[]
    OR?: BonusCampaignWhereInput[]
    NOT?: BonusCampaignWhereInput | BonusCampaignWhereInput[]
    id?: StringFilter<"BonusCampaign"> | string
    name?: StringFilter<"BonusCampaign"> | string
    code?: StringNullableFilter<"BonusCampaign"> | string | null
    bonusType?: EnumBonusTypeFilter<"BonusCampaign"> | $Enums.BonusType
    trigger?: EnumBonusTriggerFilter<"BonusCampaign"> | $Enums.BonusTrigger
    status?: EnumCampaignStatusFilter<"BonusCampaign"> | $Enums.CampaignStatus
    matchPercent?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxAmount?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableFilter<"BonusCampaign"> | $Enums.CasinoContributionCategory | null
    startsAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    validityDays?: IntNullableFilter<"BonusCampaign"> | number | null
    freeSpinsCount?: IntNullableFilter<"BonusCampaign"> | number | null
    freeSpinsGameId?: StringNullableFilter<"BonusCampaign"> | string | null
    eligibleCountries?: StringNullableListFilter<"BonusCampaign">
    eligibleSports?: StringNullableListFilter<"BonusCampaign">
    sportMinOdds?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFilter<"BonusCampaign"> | boolean
    wageringCasinoAllowed?: BoolFilter<"BonusCampaign"> | boolean
    description?: StringNullableFilter<"BonusCampaign"> | string | null
    termsHtml?: StringNullableFilter<"BonusCampaign"> | string | null
    metadata?: JsonNullableFilter<"BonusCampaign">
    isPromo?: BoolFilter<"BonusCampaign"> | boolean
    createdBy?: StringNullableFilter<"BonusCampaign"> | string | null
    createdAt?: DateTimeFilter<"BonusCampaign"> | Date | string
    updatedAt?: DateTimeFilter<"BonusCampaign"> | Date | string
    deletedAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    userBonuses?: UserBonusListRelationFilter
    freeBets?: FreeBetListRelationFilter
    casinoFreeSpins?: CasinoFreeSpinListRelationFilter
  }

  export type BonusCampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    bonusType?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    matchPercent?: SortOrderInput | SortOrder
    maxAmount?: SortOrderInput | SortOrder
    minDepositAmount?: SortOrderInput | SortOrder
    minOddsRequirement?: SortOrderInput | SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    rolloverContributionCategory?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    validityDays?: SortOrderInput | SortOrder
    freeSpinsCount?: SortOrderInput | SortOrder
    freeSpinsGameId?: SortOrderInput | SortOrder
    eligibleCountries?: SortOrder
    eligibleSports?: SortOrder
    sportMinOdds?: SortOrderInput | SortOrder
    maxBonusPerUser?: SortOrderInput | SortOrder
    wageringSportAllowed?: SortOrder
    wageringCasinoAllowed?: SortOrder
    description?: SortOrderInput | SortOrder
    termsHtml?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    isPromo?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userBonuses?: UserBonusOrderByRelationAggregateInput
    freeBets?: FreeBetOrderByRelationAggregateInput
    casinoFreeSpins?: CasinoFreeSpinOrderByRelationAggregateInput
  }

  export type BonusCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: BonusCampaignWhereInput | BonusCampaignWhereInput[]
    OR?: BonusCampaignWhereInput[]
    NOT?: BonusCampaignWhereInput | BonusCampaignWhereInput[]
    bonusType?: EnumBonusTypeFilter<"BonusCampaign"> | $Enums.BonusType
    trigger?: EnumBonusTriggerFilter<"BonusCampaign"> | $Enums.BonusTrigger
    status?: EnumCampaignStatusFilter<"BonusCampaign"> | $Enums.CampaignStatus
    matchPercent?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxAmount?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableFilter<"BonusCampaign"> | $Enums.CasinoContributionCategory | null
    startsAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    validityDays?: IntNullableFilter<"BonusCampaign"> | number | null
    freeSpinsCount?: IntNullableFilter<"BonusCampaign"> | number | null
    freeSpinsGameId?: StringNullableFilter<"BonusCampaign"> | string | null
    eligibleCountries?: StringNullableListFilter<"BonusCampaign">
    eligibleSports?: StringNullableListFilter<"BonusCampaign">
    sportMinOdds?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: DecimalNullableFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFilter<"BonusCampaign"> | boolean
    wageringCasinoAllowed?: BoolFilter<"BonusCampaign"> | boolean
    description?: StringNullableFilter<"BonusCampaign"> | string | null
    termsHtml?: StringNullableFilter<"BonusCampaign"> | string | null
    metadata?: JsonNullableFilter<"BonusCampaign">
    isPromo?: BoolFilter<"BonusCampaign"> | boolean
    createdBy?: StringNullableFilter<"BonusCampaign"> | string | null
    createdAt?: DateTimeFilter<"BonusCampaign"> | Date | string
    updatedAt?: DateTimeFilter<"BonusCampaign"> | Date | string
    deletedAt?: DateTimeNullableFilter<"BonusCampaign"> | Date | string | null
    userBonuses?: UserBonusListRelationFilter
    freeBets?: FreeBetListRelationFilter
    casinoFreeSpins?: CasinoFreeSpinListRelationFilter
  }, "id" | "name" | "code">

  export type BonusCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    bonusType?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    matchPercent?: SortOrderInput | SortOrder
    maxAmount?: SortOrderInput | SortOrder
    minDepositAmount?: SortOrderInput | SortOrder
    minOddsRequirement?: SortOrderInput | SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    rolloverContributionCategory?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    validityDays?: SortOrderInput | SortOrder
    freeSpinsCount?: SortOrderInput | SortOrder
    freeSpinsGameId?: SortOrderInput | SortOrder
    eligibleCountries?: SortOrder
    eligibleSports?: SortOrder
    sportMinOdds?: SortOrderInput | SortOrder
    maxBonusPerUser?: SortOrderInput | SortOrder
    wageringSportAllowed?: SortOrder
    wageringCasinoAllowed?: SortOrder
    description?: SortOrderInput | SortOrder
    termsHtml?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    isPromo?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BonusCampaignCountOrderByAggregateInput
    _avg?: BonusCampaignAvgOrderByAggregateInput
    _max?: BonusCampaignMaxOrderByAggregateInput
    _min?: BonusCampaignMinOrderByAggregateInput
    _sum?: BonusCampaignSumOrderByAggregateInput
  }

  export type BonusCampaignScalarWhereWithAggregatesInput = {
    AND?: BonusCampaignScalarWhereWithAggregatesInput | BonusCampaignScalarWhereWithAggregatesInput[]
    OR?: BonusCampaignScalarWhereWithAggregatesInput[]
    NOT?: BonusCampaignScalarWhereWithAggregatesInput | BonusCampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BonusCampaign"> | string
    name?: StringWithAggregatesFilter<"BonusCampaign"> | string
    code?: StringNullableWithAggregatesFilter<"BonusCampaign"> | string | null
    bonusType?: EnumBonusTypeWithAggregatesFilter<"BonusCampaign"> | $Enums.BonusType
    trigger?: EnumBonusTriggerWithAggregatesFilter<"BonusCampaign"> | $Enums.BonusTrigger
    status?: EnumCampaignStatusWithAggregatesFilter<"BonusCampaign"> | $Enums.CampaignStatus
    matchPercent?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxAmount?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableWithAggregatesFilter<"BonusCampaign"> | $Enums.CasinoContributionCategory | null
    startsAt?: DateTimeNullableWithAggregatesFilter<"BonusCampaign"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"BonusCampaign"> | Date | string | null
    validityDays?: IntNullableWithAggregatesFilter<"BonusCampaign"> | number | null
    freeSpinsCount?: IntNullableWithAggregatesFilter<"BonusCampaign"> | number | null
    freeSpinsGameId?: StringNullableWithAggregatesFilter<"BonusCampaign"> | string | null
    eligibleCountries?: StringNullableListFilter<"BonusCampaign">
    eligibleSports?: StringNullableListFilter<"BonusCampaign">
    sportMinOdds?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: DecimalNullableWithAggregatesFilter<"BonusCampaign"> | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolWithAggregatesFilter<"BonusCampaign"> | boolean
    wageringCasinoAllowed?: BoolWithAggregatesFilter<"BonusCampaign"> | boolean
    description?: StringNullableWithAggregatesFilter<"BonusCampaign"> | string | null
    termsHtml?: StringNullableWithAggregatesFilter<"BonusCampaign"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"BonusCampaign">
    isPromo?: BoolWithAggregatesFilter<"BonusCampaign"> | boolean
    createdBy?: StringNullableWithAggregatesFilter<"BonusCampaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BonusCampaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BonusCampaign"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BonusCampaign"> | Date | string | null
  }

  export type UserBonusWhereInput = {
    AND?: UserBonusWhereInput | UserBonusWhereInput[]
    OR?: UserBonusWhereInput[]
    NOT?: UserBonusWhereInput | UserBonusWhereInput[]
    id?: StringFilter<"UserBonus"> | string
    userId?: StringFilter<"UserBonus"> | string
    campaignId?: StringNullableFilter<"UserBonus"> | string | null
    bonusType?: EnumBonusTypeFilter<"UserBonus"> | $Enums.BonusType
    status?: EnumBonusStatusFilter<"UserBonus"> | $Enums.BonusStatus
    grantedAmount?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFilter<"UserBonus"> | string
    maxAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    usedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableFilter<"UserBonus"> | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverPercent?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFilter<"UserBonus"> | $Enums.RolloverStatus
    grantedAt?: DateTimeFilter<"UserBonus"> | Date | string
    activatedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    lastContributionAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledReason?: StringNullableFilter<"UserBonus"> | string | null
    referenceDepositId?: StringNullableFilter<"UserBonus"> | string | null
    promocodeUsed?: StringNullableFilter<"UserBonus"> | string | null
    freebetIdExternal?: StringNullableFilter<"UserBonus"> | string | null
    description?: StringNullableFilter<"UserBonus"> | string | null
    noteAdmin?: StringNullableFilter<"UserBonus"> | string | null
    createdByAdminId?: StringNullableFilter<"UserBonus"> | string | null
    metadata?: JsonNullableFilter<"UserBonus">
    walletId?: StringNullableFilter<"UserBonus"> | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
    rolloverLedgerEntries?: RolloverLedgerEntryListRelationFilter
  }

  export type UserBonusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusType?: SortOrder
    status?: SortOrder
    grantedAmount?: SortOrder
    grantedCurrency?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    usedAmount?: SortOrderInput | SortOrder
    releasedAmount?: SortOrderInput | SortOrder
    minOddsRequirement?: SortOrderInput | SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    rolloverContributionCategory?: SortOrderInput | SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrderInput | SortOrder
    rolloverStatus?: SortOrder
    grantedAt?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastContributionAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelledReason?: SortOrderInput | SortOrder
    referenceDepositId?: SortOrderInput | SortOrder
    promocodeUsed?: SortOrderInput | SortOrder
    freebetIdExternal?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    noteAdmin?: SortOrderInput | SortOrder
    createdByAdminId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    walletId?: SortOrderInput | SortOrder
    campaign?: BonusCampaignOrderByWithRelationInput
    rolloverLedgerEntries?: RolloverLedgerEntryOrderByRelationAggregateInput
  }

  export type UserBonusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserBonusWhereInput | UserBonusWhereInput[]
    OR?: UserBonusWhereInput[]
    NOT?: UserBonusWhereInput | UserBonusWhereInput[]
    userId?: StringFilter<"UserBonus"> | string
    campaignId?: StringNullableFilter<"UserBonus"> | string | null
    bonusType?: EnumBonusTypeFilter<"UserBonus"> | $Enums.BonusType
    status?: EnumBonusStatusFilter<"UserBonus"> | $Enums.BonusStatus
    grantedAmount?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFilter<"UserBonus"> | string
    maxAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    usedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableFilter<"UserBonus"> | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverPercent?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFilter<"UserBonus"> | $Enums.RolloverStatus
    grantedAt?: DateTimeFilter<"UserBonus"> | Date | string
    activatedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    lastContributionAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledReason?: StringNullableFilter<"UserBonus"> | string | null
    referenceDepositId?: StringNullableFilter<"UserBonus"> | string | null
    promocodeUsed?: StringNullableFilter<"UserBonus"> | string | null
    freebetIdExternal?: StringNullableFilter<"UserBonus"> | string | null
    description?: StringNullableFilter<"UserBonus"> | string | null
    noteAdmin?: StringNullableFilter<"UserBonus"> | string | null
    createdByAdminId?: StringNullableFilter<"UserBonus"> | string | null
    metadata?: JsonNullableFilter<"UserBonus">
    walletId?: StringNullableFilter<"UserBonus"> | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
    rolloverLedgerEntries?: RolloverLedgerEntryListRelationFilter
  }, "id">

  export type UserBonusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusType?: SortOrder
    status?: SortOrder
    grantedAmount?: SortOrder
    grantedCurrency?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    usedAmount?: SortOrderInput | SortOrder
    releasedAmount?: SortOrderInput | SortOrder
    minOddsRequirement?: SortOrderInput | SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    rolloverContributionCategory?: SortOrderInput | SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrderInput | SortOrder
    rolloverStatus?: SortOrder
    grantedAt?: SortOrder
    activatedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    lastContributionAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelledReason?: SortOrderInput | SortOrder
    referenceDepositId?: SortOrderInput | SortOrder
    promocodeUsed?: SortOrderInput | SortOrder
    freebetIdExternal?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    noteAdmin?: SortOrderInput | SortOrder
    createdByAdminId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    walletId?: SortOrderInput | SortOrder
    _count?: UserBonusCountOrderByAggregateInput
    _avg?: UserBonusAvgOrderByAggregateInput
    _max?: UserBonusMaxOrderByAggregateInput
    _min?: UserBonusMinOrderByAggregateInput
    _sum?: UserBonusSumOrderByAggregateInput
  }

  export type UserBonusScalarWhereWithAggregatesInput = {
    AND?: UserBonusScalarWhereWithAggregatesInput | UserBonusScalarWhereWithAggregatesInput[]
    OR?: UserBonusScalarWhereWithAggregatesInput[]
    NOT?: UserBonusScalarWhereWithAggregatesInput | UserBonusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserBonus"> | string
    userId?: StringWithAggregatesFilter<"UserBonus"> | string
    campaignId?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    bonusType?: EnumBonusTypeWithAggregatesFilter<"UserBonus"> | $Enums.BonusType
    status?: EnumBonusStatusWithAggregatesFilter<"UserBonus"> | $Enums.BonusStatus
    grantedAmount?: DecimalWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringWithAggregatesFilter<"UserBonus"> | string
    maxAmount?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    usedAmount?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableWithAggregatesFilter<"UserBonus"> | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverPercent?: DecimalNullableWithAggregatesFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusWithAggregatesFilter<"UserBonus"> | $Enums.RolloverStatus
    grantedAt?: DateTimeWithAggregatesFilter<"UserBonus"> | Date | string
    activatedAt?: DateTimeNullableWithAggregatesFilter<"UserBonus"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserBonus"> | Date | string | null
    lastContributionAt?: DateTimeNullableWithAggregatesFilter<"UserBonus"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"UserBonus"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"UserBonus"> | Date | string | null
    cancelledReason?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    referenceDepositId?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    promocodeUsed?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    freebetIdExternal?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    description?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    noteAdmin?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    createdByAdminId?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"UserBonus">
    walletId?: StringNullableWithAggregatesFilter<"UserBonus"> | string | null
  }

  export type RolloverLedgerEntryWhereInput = {
    AND?: RolloverLedgerEntryWhereInput | RolloverLedgerEntryWhereInput[]
    OR?: RolloverLedgerEntryWhereInput[]
    NOT?: RolloverLedgerEntryWhereInput | RolloverLedgerEntryWhereInput[]
    id?: StringFilter<"RolloverLedgerEntry"> | string
    userBonusId?: StringFilter<"RolloverLedgerEntry"> | string
    transactionDate?: DateTimeFilter<"RolloverLedgerEntry"> | Date | string
    betId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoRoundId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    wageredAmount?: DecimalFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string
    sourceType?: StringFilter<"RolloverLedgerEntry"> | string
    sportType?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoCategory?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    contributionPercent?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    winningAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    selectionCount?: IntNullableFilter<"RolloverLedgerEntry"> | number | null
    referenceCorrelationId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    userBonus?: XOR<UserBonusRelationFilter, UserBonusWhereInput>
  }

  export type RolloverLedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    userBonusId?: SortOrder
    transactionDate?: SortOrder
    betId?: SortOrderInput | SortOrder
    casinoRoundId?: SortOrderInput | SortOrder
    wageredAmount?: SortOrder
    sourceType?: SortOrder
    sportType?: SortOrderInput | SortOrder
    casinoCategory?: SortOrderInput | SortOrder
    contributionPercent?: SortOrderInput | SortOrder
    weightedContributionAmount?: SortOrderInput | SortOrder
    oddsAtBet?: SortOrderInput | SortOrder
    winningAmount?: SortOrderInput | SortOrder
    selectionCount?: SortOrderInput | SortOrder
    referenceCorrelationId?: SortOrderInput | SortOrder
    userBonus?: UserBonusOrderByWithRelationInput
  }

  export type RolloverLedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RolloverLedgerEntryWhereInput | RolloverLedgerEntryWhereInput[]
    OR?: RolloverLedgerEntryWhereInput[]
    NOT?: RolloverLedgerEntryWhereInput | RolloverLedgerEntryWhereInput[]
    userBonusId?: StringFilter<"RolloverLedgerEntry"> | string
    transactionDate?: DateTimeFilter<"RolloverLedgerEntry"> | Date | string
    betId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoRoundId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    wageredAmount?: DecimalFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string
    sourceType?: StringFilter<"RolloverLedgerEntry"> | string
    sportType?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoCategory?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    contributionPercent?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    winningAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    selectionCount?: IntNullableFilter<"RolloverLedgerEntry"> | number | null
    referenceCorrelationId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    userBonus?: XOR<UserBonusRelationFilter, UserBonusWhereInput>
  }, "id">

  export type RolloverLedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userBonusId?: SortOrder
    transactionDate?: SortOrder
    betId?: SortOrderInput | SortOrder
    casinoRoundId?: SortOrderInput | SortOrder
    wageredAmount?: SortOrder
    sourceType?: SortOrder
    sportType?: SortOrderInput | SortOrder
    casinoCategory?: SortOrderInput | SortOrder
    contributionPercent?: SortOrderInput | SortOrder
    weightedContributionAmount?: SortOrderInput | SortOrder
    oddsAtBet?: SortOrderInput | SortOrder
    winningAmount?: SortOrderInput | SortOrder
    selectionCount?: SortOrderInput | SortOrder
    referenceCorrelationId?: SortOrderInput | SortOrder
    _count?: RolloverLedgerEntryCountOrderByAggregateInput
    _avg?: RolloverLedgerEntryAvgOrderByAggregateInput
    _max?: RolloverLedgerEntryMaxOrderByAggregateInput
    _min?: RolloverLedgerEntryMinOrderByAggregateInput
    _sum?: RolloverLedgerEntrySumOrderByAggregateInput
  }

  export type RolloverLedgerEntryScalarWhereWithAggregatesInput = {
    AND?: RolloverLedgerEntryScalarWhereWithAggregatesInput | RolloverLedgerEntryScalarWhereWithAggregatesInput[]
    OR?: RolloverLedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: RolloverLedgerEntryScalarWhereWithAggregatesInput | RolloverLedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolloverLedgerEntry"> | string
    userBonusId?: StringWithAggregatesFilter<"RolloverLedgerEntry"> | string
    transactionDate?: DateTimeWithAggregatesFilter<"RolloverLedgerEntry"> | Date | string
    betId?: StringNullableWithAggregatesFilter<"RolloverLedgerEntry"> | string | null
    casinoRoundId?: StringNullableWithAggregatesFilter<"RolloverLedgerEntry"> | string | null
    wageredAmount?: DecimalWithAggregatesFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string
    sourceType?: StringWithAggregatesFilter<"RolloverLedgerEntry"> | string
    sportType?: StringNullableWithAggregatesFilter<"RolloverLedgerEntry"> | string | null
    casinoCategory?: StringNullableWithAggregatesFilter<"RolloverLedgerEntry"> | string | null
    contributionPercent?: DecimalNullableWithAggregatesFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: DecimalNullableWithAggregatesFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: DecimalNullableWithAggregatesFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    winningAmount?: DecimalNullableWithAggregatesFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    selectionCount?: IntNullableWithAggregatesFilter<"RolloverLedgerEntry"> | number | null
    referenceCorrelationId?: StringNullableWithAggregatesFilter<"RolloverLedgerEntry"> | string | null
  }

  export type FreeBetWhereInput = {
    AND?: FreeBetWhereInput | FreeBetWhereInput[]
    OR?: FreeBetWhereInput[]
    NOT?: FreeBetWhereInput | FreeBetWhereInput[]
    id?: StringFilter<"FreeBet"> | string
    userId?: StringFilter<"FreeBet"> | string
    campaignId?: StringNullableFilter<"FreeBet"> | string | null
    bonusId?: StringNullableFilter<"FreeBet"> | string | null
    status?: EnumBonusStatusFilter<"FreeBet"> | $Enums.BonusStatus
    amount?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: StringNullableFilter<"FreeBet"> | string | null
    leagueRestriction?: StringNullableFilter<"FreeBet"> | string | null
    startsAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedBetId?: StringNullableFilter<"FreeBet"> | string | null
    remainingAmount?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    grantedBy?: StringNullableFilter<"FreeBet"> | string | null
    correlationId?: StringNullableFilter<"FreeBet"> | string | null
    deletedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
  }

  export type FreeBetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    sportTypeRestriction?: SortOrderInput | SortOrder
    leagueRestriction?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    usedBetId?: SortOrderInput | SortOrder
    remainingAmount?: SortOrderInput | SortOrder
    grantedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    campaign?: BonusCampaignOrderByWithRelationInput
  }

  export type FreeBetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FreeBetWhereInput | FreeBetWhereInput[]
    OR?: FreeBetWhereInput[]
    NOT?: FreeBetWhereInput | FreeBetWhereInput[]
    userId?: StringFilter<"FreeBet"> | string
    campaignId?: StringNullableFilter<"FreeBet"> | string | null
    bonusId?: StringNullableFilter<"FreeBet"> | string | null
    status?: EnumBonusStatusFilter<"FreeBet"> | $Enums.BonusStatus
    amount?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: StringNullableFilter<"FreeBet"> | string | null
    leagueRestriction?: StringNullableFilter<"FreeBet"> | string | null
    startsAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedBetId?: StringNullableFilter<"FreeBet"> | string | null
    remainingAmount?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    grantedBy?: StringNullableFilter<"FreeBet"> | string | null
    correlationId?: StringNullableFilter<"FreeBet"> | string | null
    deletedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
  }, "id">

  export type FreeBetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrderInput | SortOrder
    sportTypeRestriction?: SortOrderInput | SortOrder
    leagueRestriction?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    usedBetId?: SortOrderInput | SortOrder
    remainingAmount?: SortOrderInput | SortOrder
    grantedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FreeBetCountOrderByAggregateInput
    _avg?: FreeBetAvgOrderByAggregateInput
    _max?: FreeBetMaxOrderByAggregateInput
    _min?: FreeBetMinOrderByAggregateInput
    _sum?: FreeBetSumOrderByAggregateInput
  }

  export type FreeBetScalarWhereWithAggregatesInput = {
    AND?: FreeBetScalarWhereWithAggregatesInput | FreeBetScalarWhereWithAggregatesInput[]
    OR?: FreeBetScalarWhereWithAggregatesInput[]
    NOT?: FreeBetScalarWhereWithAggregatesInput | FreeBetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FreeBet"> | string
    userId?: StringWithAggregatesFilter<"FreeBet"> | string
    campaignId?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    bonusId?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    status?: EnumBonusStatusWithAggregatesFilter<"FreeBet"> | $Enums.BonusStatus
    amount?: DecimalWithAggregatesFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalWithAggregatesFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: DecimalNullableWithAggregatesFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    leagueRestriction?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    startsAt?: DateTimeNullableWithAggregatesFilter<"FreeBet"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"FreeBet"> | Date | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"FreeBet"> | Date | string | null
    usedBetId?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    remainingAmount?: DecimalNullableWithAggregatesFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    grantedBy?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"FreeBet"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"FreeBet"> | Date | string | null
  }

  export type CasinoFreeSpinWhereInput = {
    AND?: CasinoFreeSpinWhereInput | CasinoFreeSpinWhereInput[]
    OR?: CasinoFreeSpinWhereInput[]
    NOT?: CasinoFreeSpinWhereInput | CasinoFreeSpinWhereInput[]
    id?: StringFilter<"CasinoFreeSpin"> | string
    userId?: StringFilter<"CasinoFreeSpin"> | string
    campaignId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    bonusId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    gameId?: StringFilter<"CasinoFreeSpin"> | string
    gameProvider?: StringFilter<"CasinoFreeSpin"> | string
    countTotal?: IntFilter<"CasinoFreeSpin"> | number
    countUsed?: IntFilter<"CasinoFreeSpin"> | number
    status?: EnumBonusStatusFilter<"CasinoFreeSpin"> | $Enums.BonusStatus
    betAmountPerSpin?: DecimalNullableFilter<"CasinoFreeSpin"> | Decimal | DecimalJsLike | number | string | null
    expiresAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    correlationId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
  }

  export type CasinoFreeSpinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    gameProvider?: SortOrder
    countTotal?: SortOrder
    countUsed?: SortOrder
    status?: SortOrder
    betAmountPerSpin?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    campaign?: BonusCampaignOrderByWithRelationInput
  }

  export type CasinoFreeSpinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasinoFreeSpinWhereInput | CasinoFreeSpinWhereInput[]
    OR?: CasinoFreeSpinWhereInput[]
    NOT?: CasinoFreeSpinWhereInput | CasinoFreeSpinWhereInput[]
    userId?: StringFilter<"CasinoFreeSpin"> | string
    campaignId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    bonusId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    gameId?: StringFilter<"CasinoFreeSpin"> | string
    gameProvider?: StringFilter<"CasinoFreeSpin"> | string
    countTotal?: IntFilter<"CasinoFreeSpin"> | number
    countUsed?: IntFilter<"CasinoFreeSpin"> | number
    status?: EnumBonusStatusFilter<"CasinoFreeSpin"> | $Enums.BonusStatus
    betAmountPerSpin?: DecimalNullableFilter<"CasinoFreeSpin"> | Decimal | DecimalJsLike | number | string | null
    expiresAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    correlationId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    campaign?: XOR<BonusCampaignNullableRelationFilter, BonusCampaignWhereInput> | null
  }, "id">

  export type CasinoFreeSpinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    bonusId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    gameProvider?: SortOrder
    countTotal?: SortOrder
    countUsed?: SortOrder
    status?: SortOrder
    betAmountPerSpin?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    _count?: CasinoFreeSpinCountOrderByAggregateInput
    _avg?: CasinoFreeSpinAvgOrderByAggregateInput
    _max?: CasinoFreeSpinMaxOrderByAggregateInput
    _min?: CasinoFreeSpinMinOrderByAggregateInput
    _sum?: CasinoFreeSpinSumOrderByAggregateInput
  }

  export type CasinoFreeSpinScalarWhereWithAggregatesInput = {
    AND?: CasinoFreeSpinScalarWhereWithAggregatesInput | CasinoFreeSpinScalarWhereWithAggregatesInput[]
    OR?: CasinoFreeSpinScalarWhereWithAggregatesInput[]
    NOT?: CasinoFreeSpinScalarWhereWithAggregatesInput | CasinoFreeSpinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoFreeSpin"> | string
    userId?: StringWithAggregatesFilter<"CasinoFreeSpin"> | string
    campaignId?: StringNullableWithAggregatesFilter<"CasinoFreeSpin"> | string | null
    bonusId?: StringNullableWithAggregatesFilter<"CasinoFreeSpin"> | string | null
    gameId?: StringWithAggregatesFilter<"CasinoFreeSpin"> | string
    gameProvider?: StringWithAggregatesFilter<"CasinoFreeSpin"> | string
    countTotal?: IntWithAggregatesFilter<"CasinoFreeSpin"> | number
    countUsed?: IntWithAggregatesFilter<"CasinoFreeSpin"> | number
    status?: EnumBonusStatusWithAggregatesFilter<"CasinoFreeSpin"> | $Enums.BonusStatus
    betAmountPerSpin?: DecimalNullableWithAggregatesFilter<"CasinoFreeSpin"> | Decimal | DecimalJsLike | number | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CasinoFreeSpin"> | Date | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"CasinoFreeSpin"> | Date | string | null
    correlationId?: StringNullableWithAggregatesFilter<"CasinoFreeSpin"> | string | null
  }

  export type BonusCampaignCreateInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusCreateNestedManyWithoutCampaignInput
    freeBets?: FreeBetCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusUncheckedCreateNestedManyWithoutCampaignInput
    freeBets?: FreeBetUncheckedCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUpdateManyWithoutCampaignNestedInput
    freeBets?: FreeBetUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUncheckedUpdateManyWithoutCampaignNestedInput
    freeBets?: FreeBetUncheckedUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignCreateManyInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BonusCampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BonusCampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserBonusCreateInput = {
    id?: string
    userId: string
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
    campaign?: BonusCampaignCreateNestedOneWithoutUserBonusesInput
    rolloverLedgerEntries?: RolloverLedgerEntryCreateNestedManyWithoutUserBonusInput
  }

  export type UserBonusUncheckedCreateInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
    rolloverLedgerEntries?: RolloverLedgerEntryUncheckedCreateNestedManyWithoutUserBonusInput
  }

  export type UserBonusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: BonusCampaignUpdateOneWithoutUserBonusesNestedInput
    rolloverLedgerEntries?: RolloverLedgerEntryUpdateManyWithoutUserBonusNestedInput
  }

  export type UserBonusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    rolloverLedgerEntries?: RolloverLedgerEntryUncheckedUpdateManyWithoutUserBonusNestedInput
  }

  export type UserBonusCreateManyInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
  }

  export type UserBonusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserBonusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryCreateInput = {
    id?: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
    userBonus: UserBonusCreateNestedOneWithoutRolloverLedgerEntriesInput
  }

  export type RolloverLedgerEntryUncheckedCreateInput = {
    id?: string
    userBonusId: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
  }

  export type RolloverLedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
    userBonus?: UserBonusUpdateOneRequiredWithoutRolloverLedgerEntriesNestedInput
  }

  export type RolloverLedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBonusId?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryCreateManyInput = {
    id?: string
    userBonusId: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
  }

  export type RolloverLedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBonusId?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreeBetCreateInput = {
    id?: string
    userId: string
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
    campaign?: BonusCampaignCreateNestedOneWithoutFreeBetsInput
  }

  export type FreeBetUncheckedCreateInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
  }

  export type FreeBetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaign?: BonusCampaignUpdateOneWithoutFreeBetsNestedInput
  }

  export type FreeBetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FreeBetCreateManyInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
  }

  export type FreeBetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FreeBetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoFreeSpinCreateInput = {
    id?: string
    userId: string
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
    campaign?: BonusCampaignCreateNestedOneWithoutCasinoFreeSpinsInput
  }

  export type CasinoFreeSpinUncheckedCreateInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
  }

  export type CasinoFreeSpinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: BonusCampaignUpdateOneWithoutCasinoFreeSpinsNestedInput
  }

  export type CasinoFreeSpinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasinoFreeSpinCreateManyInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
  }

  export type CasinoFreeSpinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasinoFreeSpinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumBonusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusType | EnumBonusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTypeFilter<$PrismaModel> | $Enums.BonusType
  }

  export type EnumBonusTriggerFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusTrigger | EnumBonusTriggerFieldRefInput<$PrismaModel>
    in?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTriggerFilter<$PrismaModel> | $Enums.BonusTrigger
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumCasinoContributionCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoContributionCategory | EnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel> | $Enums.CasinoContributionCategory | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserBonusListRelationFilter = {
    every?: UserBonusWhereInput
    some?: UserBonusWhereInput
    none?: UserBonusWhereInput
  }

  export type FreeBetListRelationFilter = {
    every?: FreeBetWhereInput
    some?: FreeBetWhereInput
    none?: FreeBetWhereInput
  }

  export type CasinoFreeSpinListRelationFilter = {
    every?: CasinoFreeSpinWhereInput
    some?: CasinoFreeSpinWhereInput
    none?: CasinoFreeSpinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserBonusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FreeBetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasinoFreeSpinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BonusCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    bonusType?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    matchPercent?: SortOrder
    maxAmount?: SortOrder
    minDepositAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    validityDays?: SortOrder
    freeSpinsCount?: SortOrder
    freeSpinsGameId?: SortOrder
    eligibleCountries?: SortOrder
    eligibleSports?: SortOrder
    sportMinOdds?: SortOrder
    maxBonusPerUser?: SortOrder
    wageringSportAllowed?: SortOrder
    wageringCasinoAllowed?: SortOrder
    description?: SortOrder
    termsHtml?: SortOrder
    metadata?: SortOrder
    isPromo?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BonusCampaignAvgOrderByAggregateInput = {
    matchPercent?: SortOrder
    maxAmount?: SortOrder
    minDepositAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    validityDays?: SortOrder
    freeSpinsCount?: SortOrder
    sportMinOdds?: SortOrder
    maxBonusPerUser?: SortOrder
  }

  export type BonusCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    bonusType?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    matchPercent?: SortOrder
    maxAmount?: SortOrder
    minDepositAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    validityDays?: SortOrder
    freeSpinsCount?: SortOrder
    freeSpinsGameId?: SortOrder
    sportMinOdds?: SortOrder
    maxBonusPerUser?: SortOrder
    wageringSportAllowed?: SortOrder
    wageringCasinoAllowed?: SortOrder
    description?: SortOrder
    termsHtml?: SortOrder
    isPromo?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BonusCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    bonusType?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    matchPercent?: SortOrder
    maxAmount?: SortOrder
    minDepositAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    validityDays?: SortOrder
    freeSpinsCount?: SortOrder
    freeSpinsGameId?: SortOrder
    sportMinOdds?: SortOrder
    maxBonusPerUser?: SortOrder
    wageringSportAllowed?: SortOrder
    wageringCasinoAllowed?: SortOrder
    description?: SortOrder
    termsHtml?: SortOrder
    isPromo?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BonusCampaignSumOrderByAggregateInput = {
    matchPercent?: SortOrder
    maxAmount?: SortOrder
    minDepositAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    validityDays?: SortOrder
    freeSpinsCount?: SortOrder
    sportMinOdds?: SortOrder
    maxBonusPerUser?: SortOrder
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

  export type EnumBonusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusType | EnumBonusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTypeWithAggregatesFilter<$PrismaModel> | $Enums.BonusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusTypeFilter<$PrismaModel>
    _max?: NestedEnumBonusTypeFilter<$PrismaModel>
  }

  export type EnumBonusTriggerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusTrigger | EnumBonusTriggerFieldRefInput<$PrismaModel>
    in?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTriggerWithAggregatesFilter<$PrismaModel> | $Enums.BonusTrigger
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusTriggerFilter<$PrismaModel>
    _max?: NestedEnumBonusTriggerFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumCasinoContributionCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoContributionCategory | EnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCasinoContributionCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.CasinoContributionCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumBonusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusStatus | EnumBonusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusStatusFilter<$PrismaModel> | $Enums.BonusStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumRolloverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RolloverStatus | EnumRolloverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRolloverStatusFilter<$PrismaModel> | $Enums.RolloverStatus
  }

  export type BonusCampaignNullableRelationFilter = {
    is?: BonusCampaignWhereInput | null
    isNot?: BonusCampaignWhereInput | null
  }

  export type RolloverLedgerEntryListRelationFilter = {
    every?: RolloverLedgerEntryWhereInput
    some?: RolloverLedgerEntryWhereInput
    none?: RolloverLedgerEntryWhereInput
  }

  export type RolloverLedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBonusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusType?: SortOrder
    status?: SortOrder
    grantedAmount?: SortOrder
    grantedCurrency?: SortOrder
    maxAmount?: SortOrder
    usedAmount?: SortOrder
    releasedAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrder
    rolloverStatus?: SortOrder
    grantedAt?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastContributionAt?: SortOrder
    releasedAt?: SortOrder
    cancelledAt?: SortOrder
    cancelledReason?: SortOrder
    referenceDepositId?: SortOrder
    promocodeUsed?: SortOrder
    freebetIdExternal?: SortOrder
    description?: SortOrder
    noteAdmin?: SortOrder
    createdByAdminId?: SortOrder
    metadata?: SortOrder
    walletId?: SortOrder
  }

  export type UserBonusAvgOrderByAggregateInput = {
    grantedAmount?: SortOrder
    maxAmount?: SortOrder
    usedAmount?: SortOrder
    releasedAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrder
  }

  export type UserBonusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusType?: SortOrder
    status?: SortOrder
    grantedAmount?: SortOrder
    grantedCurrency?: SortOrder
    maxAmount?: SortOrder
    usedAmount?: SortOrder
    releasedAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrder
    rolloverStatus?: SortOrder
    grantedAt?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastContributionAt?: SortOrder
    releasedAt?: SortOrder
    cancelledAt?: SortOrder
    cancelledReason?: SortOrder
    referenceDepositId?: SortOrder
    promocodeUsed?: SortOrder
    freebetIdExternal?: SortOrder
    description?: SortOrder
    noteAdmin?: SortOrder
    createdByAdminId?: SortOrder
    walletId?: SortOrder
  }

  export type UserBonusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusType?: SortOrder
    status?: SortOrder
    grantedAmount?: SortOrder
    grantedCurrency?: SortOrder
    maxAmount?: SortOrder
    usedAmount?: SortOrder
    releasedAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverContributionCategory?: SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrder
    rolloverStatus?: SortOrder
    grantedAt?: SortOrder
    activatedAt?: SortOrder
    expiresAt?: SortOrder
    lastContributionAt?: SortOrder
    releasedAt?: SortOrder
    cancelledAt?: SortOrder
    cancelledReason?: SortOrder
    referenceDepositId?: SortOrder
    promocodeUsed?: SortOrder
    freebetIdExternal?: SortOrder
    description?: SortOrder
    noteAdmin?: SortOrder
    createdByAdminId?: SortOrder
    walletId?: SortOrder
  }

  export type UserBonusSumOrderByAggregateInput = {
    grantedAmount?: SortOrder
    maxAmount?: SortOrder
    usedAmount?: SortOrder
    releasedAmount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    rolloverRequiredTotal?: SortOrder
    rolloverCompletedReal?: SortOrder
    rolloverCompletedWeighted?: SortOrder
    rolloverPercent?: SortOrder
  }

  export type EnumBonusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusStatus | EnumBonusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusStatusWithAggregatesFilter<$PrismaModel> | $Enums.BonusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusStatusFilter<$PrismaModel>
    _max?: NestedEnumBonusStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumRolloverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolloverStatus | EnumRolloverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRolloverStatusWithAggregatesFilter<$PrismaModel> | $Enums.RolloverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolloverStatusFilter<$PrismaModel>
    _max?: NestedEnumRolloverStatusFilter<$PrismaModel>
  }

  export type UserBonusRelationFilter = {
    is?: UserBonusWhereInput
    isNot?: UserBonusWhereInput
  }

  export type RolloverLedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userBonusId?: SortOrder
    transactionDate?: SortOrder
    betId?: SortOrder
    casinoRoundId?: SortOrder
    wageredAmount?: SortOrder
    sourceType?: SortOrder
    sportType?: SortOrder
    casinoCategory?: SortOrder
    contributionPercent?: SortOrder
    weightedContributionAmount?: SortOrder
    oddsAtBet?: SortOrder
    winningAmount?: SortOrder
    selectionCount?: SortOrder
    referenceCorrelationId?: SortOrder
  }

  export type RolloverLedgerEntryAvgOrderByAggregateInput = {
    wageredAmount?: SortOrder
    contributionPercent?: SortOrder
    weightedContributionAmount?: SortOrder
    oddsAtBet?: SortOrder
    winningAmount?: SortOrder
    selectionCount?: SortOrder
  }

  export type RolloverLedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userBonusId?: SortOrder
    transactionDate?: SortOrder
    betId?: SortOrder
    casinoRoundId?: SortOrder
    wageredAmount?: SortOrder
    sourceType?: SortOrder
    sportType?: SortOrder
    casinoCategory?: SortOrder
    contributionPercent?: SortOrder
    weightedContributionAmount?: SortOrder
    oddsAtBet?: SortOrder
    winningAmount?: SortOrder
    selectionCount?: SortOrder
    referenceCorrelationId?: SortOrder
  }

  export type RolloverLedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userBonusId?: SortOrder
    transactionDate?: SortOrder
    betId?: SortOrder
    casinoRoundId?: SortOrder
    wageredAmount?: SortOrder
    sourceType?: SortOrder
    sportType?: SortOrder
    casinoCategory?: SortOrder
    contributionPercent?: SortOrder
    weightedContributionAmount?: SortOrder
    oddsAtBet?: SortOrder
    winningAmount?: SortOrder
    selectionCount?: SortOrder
    referenceCorrelationId?: SortOrder
  }

  export type RolloverLedgerEntrySumOrderByAggregateInput = {
    wageredAmount?: SortOrder
    contributionPercent?: SortOrder
    weightedContributionAmount?: SortOrder
    oddsAtBet?: SortOrder
    winningAmount?: SortOrder
    selectionCount?: SortOrder
  }

  export type FreeBetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    sportTypeRestriction?: SortOrder
    leagueRestriction?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    usedBetId?: SortOrder
    remainingAmount?: SortOrder
    grantedBy?: SortOrder
    correlationId?: SortOrder
    deletedAt?: SortOrder
  }

  export type FreeBetAvgOrderByAggregateInput = {
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    remainingAmount?: SortOrder
  }

  export type FreeBetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    sportTypeRestriction?: SortOrder
    leagueRestriction?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    usedBetId?: SortOrder
    remainingAmount?: SortOrder
    grantedBy?: SortOrder
    correlationId?: SortOrder
    deletedAt?: SortOrder
  }

  export type FreeBetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    sportTypeRestriction?: SortOrder
    leagueRestriction?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    usedBetId?: SortOrder
    remainingAmount?: SortOrder
    grantedBy?: SortOrder
    correlationId?: SortOrder
    deletedAt?: SortOrder
  }

  export type FreeBetSumOrderByAggregateInput = {
    amount?: SortOrder
    minOddsRequirement?: SortOrder
    rolloverMultiplier?: SortOrder
    remainingAmount?: SortOrder
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

  export type CasinoFreeSpinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    gameId?: SortOrder
    gameProvider?: SortOrder
    countTotal?: SortOrder
    countUsed?: SortOrder
    status?: SortOrder
    betAmountPerSpin?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    correlationId?: SortOrder
  }

  export type CasinoFreeSpinAvgOrderByAggregateInput = {
    countTotal?: SortOrder
    countUsed?: SortOrder
    betAmountPerSpin?: SortOrder
  }

  export type CasinoFreeSpinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    gameId?: SortOrder
    gameProvider?: SortOrder
    countTotal?: SortOrder
    countUsed?: SortOrder
    status?: SortOrder
    betAmountPerSpin?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    correlationId?: SortOrder
  }

  export type CasinoFreeSpinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    bonusId?: SortOrder
    gameId?: SortOrder
    gameProvider?: SortOrder
    countTotal?: SortOrder
    countUsed?: SortOrder
    status?: SortOrder
    betAmountPerSpin?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    correlationId?: SortOrder
  }

  export type CasinoFreeSpinSumOrderByAggregateInput = {
    countTotal?: SortOrder
    countUsed?: SortOrder
    betAmountPerSpin?: SortOrder
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

  export type BonusCampaignCreateeligibleCountriesInput = {
    set: string[]
  }

  export type BonusCampaignCreateeligibleSportsInput = {
    set: string[]
  }

  export type UserBonusCreateNestedManyWithoutCampaignInput = {
    create?: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput> | UserBonusCreateWithoutCampaignInput[] | UserBonusUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UserBonusCreateOrConnectWithoutCampaignInput | UserBonusCreateOrConnectWithoutCampaignInput[]
    createMany?: UserBonusCreateManyCampaignInputEnvelope
    connect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
  }

  export type FreeBetCreateNestedManyWithoutCampaignInput = {
    create?: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput> | FreeBetCreateWithoutCampaignInput[] | FreeBetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FreeBetCreateOrConnectWithoutCampaignInput | FreeBetCreateOrConnectWithoutCampaignInput[]
    createMany?: FreeBetCreateManyCampaignInputEnvelope
    connect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
  }

  export type CasinoFreeSpinCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput> | CasinoFreeSpinCreateWithoutCampaignInput[] | CasinoFreeSpinUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CasinoFreeSpinCreateOrConnectWithoutCampaignInput | CasinoFreeSpinCreateOrConnectWithoutCampaignInput[]
    createMany?: CasinoFreeSpinCreateManyCampaignInputEnvelope
    connect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
  }

  export type UserBonusUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput> | UserBonusCreateWithoutCampaignInput[] | UserBonusUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UserBonusCreateOrConnectWithoutCampaignInput | UserBonusCreateOrConnectWithoutCampaignInput[]
    createMany?: UserBonusCreateManyCampaignInputEnvelope
    connect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
  }

  export type FreeBetUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput> | FreeBetCreateWithoutCampaignInput[] | FreeBetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FreeBetCreateOrConnectWithoutCampaignInput | FreeBetCreateOrConnectWithoutCampaignInput[]
    createMany?: FreeBetCreateManyCampaignInputEnvelope
    connect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
  }

  export type CasinoFreeSpinUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput> | CasinoFreeSpinCreateWithoutCampaignInput[] | CasinoFreeSpinUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CasinoFreeSpinCreateOrConnectWithoutCampaignInput | CasinoFreeSpinCreateOrConnectWithoutCampaignInput[]
    createMany?: CasinoFreeSpinCreateManyCampaignInputEnvelope
    connect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBonusTypeFieldUpdateOperationsInput = {
    set?: $Enums.BonusType
  }

  export type EnumBonusTriggerFieldUpdateOperationsInput = {
    set?: $Enums.BonusTrigger
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CasinoContributionCategory | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BonusCampaignUpdateeligibleCountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BonusCampaignUpdateeligibleSportsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserBonusUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput> | UserBonusCreateWithoutCampaignInput[] | UserBonusUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UserBonusCreateOrConnectWithoutCampaignInput | UserBonusCreateOrConnectWithoutCampaignInput[]
    upsert?: UserBonusUpsertWithWhereUniqueWithoutCampaignInput | UserBonusUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: UserBonusCreateManyCampaignInputEnvelope
    set?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    disconnect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    delete?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    connect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    update?: UserBonusUpdateWithWhereUniqueWithoutCampaignInput | UserBonusUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: UserBonusUpdateManyWithWhereWithoutCampaignInput | UserBonusUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: UserBonusScalarWhereInput | UserBonusScalarWhereInput[]
  }

  export type FreeBetUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput> | FreeBetCreateWithoutCampaignInput[] | FreeBetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FreeBetCreateOrConnectWithoutCampaignInput | FreeBetCreateOrConnectWithoutCampaignInput[]
    upsert?: FreeBetUpsertWithWhereUniqueWithoutCampaignInput | FreeBetUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: FreeBetCreateManyCampaignInputEnvelope
    set?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    disconnect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    delete?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    connect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    update?: FreeBetUpdateWithWhereUniqueWithoutCampaignInput | FreeBetUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: FreeBetUpdateManyWithWhereWithoutCampaignInput | FreeBetUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: FreeBetScalarWhereInput | FreeBetScalarWhereInput[]
  }

  export type CasinoFreeSpinUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput> | CasinoFreeSpinCreateWithoutCampaignInput[] | CasinoFreeSpinUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CasinoFreeSpinCreateOrConnectWithoutCampaignInput | CasinoFreeSpinCreateOrConnectWithoutCampaignInput[]
    upsert?: CasinoFreeSpinUpsertWithWhereUniqueWithoutCampaignInput | CasinoFreeSpinUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CasinoFreeSpinCreateManyCampaignInputEnvelope
    set?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    disconnect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    delete?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    connect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    update?: CasinoFreeSpinUpdateWithWhereUniqueWithoutCampaignInput | CasinoFreeSpinUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CasinoFreeSpinUpdateManyWithWhereWithoutCampaignInput | CasinoFreeSpinUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CasinoFreeSpinScalarWhereInput | CasinoFreeSpinScalarWhereInput[]
  }

  export type UserBonusUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput> | UserBonusCreateWithoutCampaignInput[] | UserBonusUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: UserBonusCreateOrConnectWithoutCampaignInput | UserBonusCreateOrConnectWithoutCampaignInput[]
    upsert?: UserBonusUpsertWithWhereUniqueWithoutCampaignInput | UserBonusUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: UserBonusCreateManyCampaignInputEnvelope
    set?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    disconnect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    delete?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    connect?: UserBonusWhereUniqueInput | UserBonusWhereUniqueInput[]
    update?: UserBonusUpdateWithWhereUniqueWithoutCampaignInput | UserBonusUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: UserBonusUpdateManyWithWhereWithoutCampaignInput | UserBonusUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: UserBonusScalarWhereInput | UserBonusScalarWhereInput[]
  }

  export type FreeBetUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput> | FreeBetCreateWithoutCampaignInput[] | FreeBetUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: FreeBetCreateOrConnectWithoutCampaignInput | FreeBetCreateOrConnectWithoutCampaignInput[]
    upsert?: FreeBetUpsertWithWhereUniqueWithoutCampaignInput | FreeBetUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: FreeBetCreateManyCampaignInputEnvelope
    set?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    disconnect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    delete?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    connect?: FreeBetWhereUniqueInput | FreeBetWhereUniqueInput[]
    update?: FreeBetUpdateWithWhereUniqueWithoutCampaignInput | FreeBetUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: FreeBetUpdateManyWithWhereWithoutCampaignInput | FreeBetUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: FreeBetScalarWhereInput | FreeBetScalarWhereInput[]
  }

  export type CasinoFreeSpinUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput> | CasinoFreeSpinCreateWithoutCampaignInput[] | CasinoFreeSpinUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CasinoFreeSpinCreateOrConnectWithoutCampaignInput | CasinoFreeSpinCreateOrConnectWithoutCampaignInput[]
    upsert?: CasinoFreeSpinUpsertWithWhereUniqueWithoutCampaignInput | CasinoFreeSpinUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CasinoFreeSpinCreateManyCampaignInputEnvelope
    set?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    disconnect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    delete?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    connect?: CasinoFreeSpinWhereUniqueInput | CasinoFreeSpinWhereUniqueInput[]
    update?: CasinoFreeSpinUpdateWithWhereUniqueWithoutCampaignInput | CasinoFreeSpinUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CasinoFreeSpinUpdateManyWithWhereWithoutCampaignInput | CasinoFreeSpinUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CasinoFreeSpinScalarWhereInput | CasinoFreeSpinScalarWhereInput[]
  }

  export type BonusCampaignCreateNestedOneWithoutUserBonusesInput = {
    create?: XOR<BonusCampaignCreateWithoutUserBonusesInput, BonusCampaignUncheckedCreateWithoutUserBonusesInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutUserBonusesInput
    connect?: BonusCampaignWhereUniqueInput
  }

  export type RolloverLedgerEntryCreateNestedManyWithoutUserBonusInput = {
    create?: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput> | RolloverLedgerEntryCreateWithoutUserBonusInput[] | RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput[]
    connectOrCreate?: RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput | RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput[]
    createMany?: RolloverLedgerEntryCreateManyUserBonusInputEnvelope
    connect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
  }

  export type RolloverLedgerEntryUncheckedCreateNestedManyWithoutUserBonusInput = {
    create?: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput> | RolloverLedgerEntryCreateWithoutUserBonusInput[] | RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput[]
    connectOrCreate?: RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput | RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput[]
    createMany?: RolloverLedgerEntryCreateManyUserBonusInputEnvelope
    connect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
  }

  export type EnumBonusStatusFieldUpdateOperationsInput = {
    set?: $Enums.BonusStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumRolloverStatusFieldUpdateOperationsInput = {
    set?: $Enums.RolloverStatus
  }

  export type BonusCampaignUpdateOneWithoutUserBonusesNestedInput = {
    create?: XOR<BonusCampaignCreateWithoutUserBonusesInput, BonusCampaignUncheckedCreateWithoutUserBonusesInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutUserBonusesInput
    upsert?: BonusCampaignUpsertWithoutUserBonusesInput
    disconnect?: BonusCampaignWhereInput | boolean
    delete?: BonusCampaignWhereInput | boolean
    connect?: BonusCampaignWhereUniqueInput
    update?: XOR<XOR<BonusCampaignUpdateToOneWithWhereWithoutUserBonusesInput, BonusCampaignUpdateWithoutUserBonusesInput>, BonusCampaignUncheckedUpdateWithoutUserBonusesInput>
  }

  export type RolloverLedgerEntryUpdateManyWithoutUserBonusNestedInput = {
    create?: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput> | RolloverLedgerEntryCreateWithoutUserBonusInput[] | RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput[]
    connectOrCreate?: RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput | RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput[]
    upsert?: RolloverLedgerEntryUpsertWithWhereUniqueWithoutUserBonusInput | RolloverLedgerEntryUpsertWithWhereUniqueWithoutUserBonusInput[]
    createMany?: RolloverLedgerEntryCreateManyUserBonusInputEnvelope
    set?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    disconnect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    delete?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    connect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    update?: RolloverLedgerEntryUpdateWithWhereUniqueWithoutUserBonusInput | RolloverLedgerEntryUpdateWithWhereUniqueWithoutUserBonusInput[]
    updateMany?: RolloverLedgerEntryUpdateManyWithWhereWithoutUserBonusInput | RolloverLedgerEntryUpdateManyWithWhereWithoutUserBonusInput[]
    deleteMany?: RolloverLedgerEntryScalarWhereInput | RolloverLedgerEntryScalarWhereInput[]
  }

  export type RolloverLedgerEntryUncheckedUpdateManyWithoutUserBonusNestedInput = {
    create?: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput> | RolloverLedgerEntryCreateWithoutUserBonusInput[] | RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput[]
    connectOrCreate?: RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput | RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput[]
    upsert?: RolloverLedgerEntryUpsertWithWhereUniqueWithoutUserBonusInput | RolloverLedgerEntryUpsertWithWhereUniqueWithoutUserBonusInput[]
    createMany?: RolloverLedgerEntryCreateManyUserBonusInputEnvelope
    set?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    disconnect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    delete?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    connect?: RolloverLedgerEntryWhereUniqueInput | RolloverLedgerEntryWhereUniqueInput[]
    update?: RolloverLedgerEntryUpdateWithWhereUniqueWithoutUserBonusInput | RolloverLedgerEntryUpdateWithWhereUniqueWithoutUserBonusInput[]
    updateMany?: RolloverLedgerEntryUpdateManyWithWhereWithoutUserBonusInput | RolloverLedgerEntryUpdateManyWithWhereWithoutUserBonusInput[]
    deleteMany?: RolloverLedgerEntryScalarWhereInput | RolloverLedgerEntryScalarWhereInput[]
  }

  export type UserBonusCreateNestedOneWithoutRolloverLedgerEntriesInput = {
    create?: XOR<UserBonusCreateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedCreateWithoutRolloverLedgerEntriesInput>
    connectOrCreate?: UserBonusCreateOrConnectWithoutRolloverLedgerEntriesInput
    connect?: UserBonusWhereUniqueInput
  }

  export type UserBonusUpdateOneRequiredWithoutRolloverLedgerEntriesNestedInput = {
    create?: XOR<UserBonusCreateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedCreateWithoutRolloverLedgerEntriesInput>
    connectOrCreate?: UserBonusCreateOrConnectWithoutRolloverLedgerEntriesInput
    upsert?: UserBonusUpsertWithoutRolloverLedgerEntriesInput
    connect?: UserBonusWhereUniqueInput
    update?: XOR<XOR<UserBonusUpdateToOneWithWhereWithoutRolloverLedgerEntriesInput, UserBonusUpdateWithoutRolloverLedgerEntriesInput>, UserBonusUncheckedUpdateWithoutRolloverLedgerEntriesInput>
  }

  export type BonusCampaignCreateNestedOneWithoutFreeBetsInput = {
    create?: XOR<BonusCampaignCreateWithoutFreeBetsInput, BonusCampaignUncheckedCreateWithoutFreeBetsInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutFreeBetsInput
    connect?: BonusCampaignWhereUniqueInput
  }

  export type BonusCampaignUpdateOneWithoutFreeBetsNestedInput = {
    create?: XOR<BonusCampaignCreateWithoutFreeBetsInput, BonusCampaignUncheckedCreateWithoutFreeBetsInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutFreeBetsInput
    upsert?: BonusCampaignUpsertWithoutFreeBetsInput
    disconnect?: BonusCampaignWhereInput | boolean
    delete?: BonusCampaignWhereInput | boolean
    connect?: BonusCampaignWhereUniqueInput
    update?: XOR<XOR<BonusCampaignUpdateToOneWithWhereWithoutFreeBetsInput, BonusCampaignUpdateWithoutFreeBetsInput>, BonusCampaignUncheckedUpdateWithoutFreeBetsInput>
  }

  export type BonusCampaignCreateNestedOneWithoutCasinoFreeSpinsInput = {
    create?: XOR<BonusCampaignCreateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedCreateWithoutCasinoFreeSpinsInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutCasinoFreeSpinsInput
    connect?: BonusCampaignWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BonusCampaignUpdateOneWithoutCasinoFreeSpinsNestedInput = {
    create?: XOR<BonusCampaignCreateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedCreateWithoutCasinoFreeSpinsInput>
    connectOrCreate?: BonusCampaignCreateOrConnectWithoutCasinoFreeSpinsInput
    upsert?: BonusCampaignUpsertWithoutCasinoFreeSpinsInput
    disconnect?: BonusCampaignWhereInput | boolean
    delete?: BonusCampaignWhereInput | boolean
    connect?: BonusCampaignWhereUniqueInput
    update?: XOR<XOR<BonusCampaignUpdateToOneWithWhereWithoutCasinoFreeSpinsInput, BonusCampaignUpdateWithoutCasinoFreeSpinsInput>, BonusCampaignUncheckedUpdateWithoutCasinoFreeSpinsInput>
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

  export type NestedEnumBonusTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusType | EnumBonusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTypeFilter<$PrismaModel> | $Enums.BonusType
  }

  export type NestedEnumBonusTriggerFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusTrigger | EnumBonusTriggerFieldRefInput<$PrismaModel>
    in?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTriggerFilter<$PrismaModel> | $Enums.BonusTrigger
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoContributionCategory | EnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel> | $Enums.CasinoContributionCategory | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumBonusTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusType | EnumBonusTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusType[] | ListEnumBonusTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTypeWithAggregatesFilter<$PrismaModel> | $Enums.BonusType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusTypeFilter<$PrismaModel>
    _max?: NestedEnumBonusTypeFilter<$PrismaModel>
  }

  export type NestedEnumBonusTriggerWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusTrigger | EnumBonusTriggerFieldRefInput<$PrismaModel>
    in?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusTrigger[] | ListEnumBonusTriggerFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusTriggerWithAggregatesFilter<$PrismaModel> | $Enums.BonusTrigger
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusTriggerFilter<$PrismaModel>
    _max?: NestedEnumBonusTriggerFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumCasinoContributionCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoContributionCategory | EnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CasinoContributionCategory[] | ListEnumCasinoContributionCategoryFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCasinoContributionCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.CasinoContributionCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumCasinoContributionCategoryNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBonusStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusStatus | EnumBonusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusStatusFilter<$PrismaModel> | $Enums.BonusStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumRolloverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RolloverStatus | EnumRolloverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRolloverStatusFilter<$PrismaModel> | $Enums.RolloverStatus
  }

  export type NestedEnumBonusStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BonusStatus | EnumBonusStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BonusStatus[] | ListEnumBonusStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBonusStatusWithAggregatesFilter<$PrismaModel> | $Enums.BonusStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBonusStatusFilter<$PrismaModel>
    _max?: NestedEnumBonusStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRolloverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolloverStatus | EnumRolloverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolloverStatus[] | ListEnumRolloverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRolloverStatusWithAggregatesFilter<$PrismaModel> | $Enums.RolloverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolloverStatusFilter<$PrismaModel>
    _max?: NestedEnumRolloverStatusFilter<$PrismaModel>
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

  export type UserBonusCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
    rolloverLedgerEntries?: RolloverLedgerEntryCreateNestedManyWithoutUserBonusInput
  }

  export type UserBonusUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
    rolloverLedgerEntries?: RolloverLedgerEntryUncheckedCreateNestedManyWithoutUserBonusInput
  }

  export type UserBonusCreateOrConnectWithoutCampaignInput = {
    where: UserBonusWhereUniqueInput
    create: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput>
  }

  export type UserBonusCreateManyCampaignInputEnvelope = {
    data: UserBonusCreateManyCampaignInput | UserBonusCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type FreeBetCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
  }

  export type FreeBetUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
  }

  export type FreeBetCreateOrConnectWithoutCampaignInput = {
    where: FreeBetWhereUniqueInput
    create: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput>
  }

  export type FreeBetCreateManyCampaignInputEnvelope = {
    data: FreeBetCreateManyCampaignInput | FreeBetCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CasinoFreeSpinCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
  }

  export type CasinoFreeSpinUncheckedCreateWithoutCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
  }

  export type CasinoFreeSpinCreateOrConnectWithoutCampaignInput = {
    where: CasinoFreeSpinWhereUniqueInput
    create: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput>
  }

  export type CasinoFreeSpinCreateManyCampaignInputEnvelope = {
    data: CasinoFreeSpinCreateManyCampaignInput | CasinoFreeSpinCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserBonusUpsertWithWhereUniqueWithoutCampaignInput = {
    where: UserBonusWhereUniqueInput
    update: XOR<UserBonusUpdateWithoutCampaignInput, UserBonusUncheckedUpdateWithoutCampaignInput>
    create: XOR<UserBonusCreateWithoutCampaignInput, UserBonusUncheckedCreateWithoutCampaignInput>
  }

  export type UserBonusUpdateWithWhereUniqueWithoutCampaignInput = {
    where: UserBonusWhereUniqueInput
    data: XOR<UserBonusUpdateWithoutCampaignInput, UserBonusUncheckedUpdateWithoutCampaignInput>
  }

  export type UserBonusUpdateManyWithWhereWithoutCampaignInput = {
    where: UserBonusScalarWhereInput
    data: XOR<UserBonusUpdateManyMutationInput, UserBonusUncheckedUpdateManyWithoutCampaignInput>
  }

  export type UserBonusScalarWhereInput = {
    AND?: UserBonusScalarWhereInput | UserBonusScalarWhereInput[]
    OR?: UserBonusScalarWhereInput[]
    NOT?: UserBonusScalarWhereInput | UserBonusScalarWhereInput[]
    id?: StringFilter<"UserBonus"> | string
    userId?: StringFilter<"UserBonus"> | string
    campaignId?: StringNullableFilter<"UserBonus"> | string | null
    bonusType?: EnumBonusTypeFilter<"UserBonus"> | $Enums.BonusType
    status?: EnumBonusStatusFilter<"UserBonus"> | $Enums.BonusStatus
    grantedAmount?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFilter<"UserBonus"> | string
    maxAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    usedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: EnumCasinoContributionCategoryNullableFilter<"UserBonus"> | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string
    rolloverPercent?: DecimalNullableFilter<"UserBonus"> | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFilter<"UserBonus"> | $Enums.RolloverStatus
    grantedAt?: DateTimeFilter<"UserBonus"> | Date | string
    activatedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    lastContributionAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"UserBonus"> | Date | string | null
    cancelledReason?: StringNullableFilter<"UserBonus"> | string | null
    referenceDepositId?: StringNullableFilter<"UserBonus"> | string | null
    promocodeUsed?: StringNullableFilter<"UserBonus"> | string | null
    freebetIdExternal?: StringNullableFilter<"UserBonus"> | string | null
    description?: StringNullableFilter<"UserBonus"> | string | null
    noteAdmin?: StringNullableFilter<"UserBonus"> | string | null
    createdByAdminId?: StringNullableFilter<"UserBonus"> | string | null
    metadata?: JsonNullableFilter<"UserBonus">
    walletId?: StringNullableFilter<"UserBonus"> | string | null
  }

  export type FreeBetUpsertWithWhereUniqueWithoutCampaignInput = {
    where: FreeBetWhereUniqueInput
    update: XOR<FreeBetUpdateWithoutCampaignInput, FreeBetUncheckedUpdateWithoutCampaignInput>
    create: XOR<FreeBetCreateWithoutCampaignInput, FreeBetUncheckedCreateWithoutCampaignInput>
  }

  export type FreeBetUpdateWithWhereUniqueWithoutCampaignInput = {
    where: FreeBetWhereUniqueInput
    data: XOR<FreeBetUpdateWithoutCampaignInput, FreeBetUncheckedUpdateWithoutCampaignInput>
  }

  export type FreeBetUpdateManyWithWhereWithoutCampaignInput = {
    where: FreeBetScalarWhereInput
    data: XOR<FreeBetUpdateManyMutationInput, FreeBetUncheckedUpdateManyWithoutCampaignInput>
  }

  export type FreeBetScalarWhereInput = {
    AND?: FreeBetScalarWhereInput | FreeBetScalarWhereInput[]
    OR?: FreeBetScalarWhereInput[]
    NOT?: FreeBetScalarWhereInput | FreeBetScalarWhereInput[]
    id?: StringFilter<"FreeBet"> | string
    userId?: StringFilter<"FreeBet"> | string
    campaignId?: StringNullableFilter<"FreeBet"> | string | null
    bonusId?: StringNullableFilter<"FreeBet"> | string | null
    status?: EnumBonusStatusFilter<"FreeBet"> | $Enums.BonusStatus
    amount?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: StringNullableFilter<"FreeBet"> | string | null
    leagueRestriction?: StringNullableFilter<"FreeBet"> | string | null
    startsAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
    usedBetId?: StringNullableFilter<"FreeBet"> | string | null
    remainingAmount?: DecimalNullableFilter<"FreeBet"> | Decimal | DecimalJsLike | number | string | null
    grantedBy?: StringNullableFilter<"FreeBet"> | string | null
    correlationId?: StringNullableFilter<"FreeBet"> | string | null
    deletedAt?: DateTimeNullableFilter<"FreeBet"> | Date | string | null
  }

  export type CasinoFreeSpinUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CasinoFreeSpinWhereUniqueInput
    update: XOR<CasinoFreeSpinUpdateWithoutCampaignInput, CasinoFreeSpinUncheckedUpdateWithoutCampaignInput>
    create: XOR<CasinoFreeSpinCreateWithoutCampaignInput, CasinoFreeSpinUncheckedCreateWithoutCampaignInput>
  }

  export type CasinoFreeSpinUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CasinoFreeSpinWhereUniqueInput
    data: XOR<CasinoFreeSpinUpdateWithoutCampaignInput, CasinoFreeSpinUncheckedUpdateWithoutCampaignInput>
  }

  export type CasinoFreeSpinUpdateManyWithWhereWithoutCampaignInput = {
    where: CasinoFreeSpinScalarWhereInput
    data: XOR<CasinoFreeSpinUpdateManyMutationInput, CasinoFreeSpinUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CasinoFreeSpinScalarWhereInput = {
    AND?: CasinoFreeSpinScalarWhereInput | CasinoFreeSpinScalarWhereInput[]
    OR?: CasinoFreeSpinScalarWhereInput[]
    NOT?: CasinoFreeSpinScalarWhereInput | CasinoFreeSpinScalarWhereInput[]
    id?: StringFilter<"CasinoFreeSpin"> | string
    userId?: StringFilter<"CasinoFreeSpin"> | string
    campaignId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    bonusId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
    gameId?: StringFilter<"CasinoFreeSpin"> | string
    gameProvider?: StringFilter<"CasinoFreeSpin"> | string
    countTotal?: IntFilter<"CasinoFreeSpin"> | number
    countUsed?: IntFilter<"CasinoFreeSpin"> | number
    status?: EnumBonusStatusFilter<"CasinoFreeSpin"> | $Enums.BonusStatus
    betAmountPerSpin?: DecimalNullableFilter<"CasinoFreeSpin"> | Decimal | DecimalJsLike | number | string | null
    expiresAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    usedAt?: DateTimeNullableFilter<"CasinoFreeSpin"> | Date | string | null
    correlationId?: StringNullableFilter<"CasinoFreeSpin"> | string | null
  }

  export type BonusCampaignCreateWithoutUserBonusesInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    freeBets?: FreeBetCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignUncheckedCreateWithoutUserBonusesInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    freeBets?: FreeBetUncheckedCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignCreateOrConnectWithoutUserBonusesInput = {
    where: BonusCampaignWhereUniqueInput
    create: XOR<BonusCampaignCreateWithoutUserBonusesInput, BonusCampaignUncheckedCreateWithoutUserBonusesInput>
  }

  export type RolloverLedgerEntryCreateWithoutUserBonusInput = {
    id?: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
  }

  export type RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput = {
    id?: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
  }

  export type RolloverLedgerEntryCreateOrConnectWithoutUserBonusInput = {
    where: RolloverLedgerEntryWhereUniqueInput
    create: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput>
  }

  export type RolloverLedgerEntryCreateManyUserBonusInputEnvelope = {
    data: RolloverLedgerEntryCreateManyUserBonusInput | RolloverLedgerEntryCreateManyUserBonusInput[]
    skipDuplicates?: boolean
  }

  export type BonusCampaignUpsertWithoutUserBonusesInput = {
    update: XOR<BonusCampaignUpdateWithoutUserBonusesInput, BonusCampaignUncheckedUpdateWithoutUserBonusesInput>
    create: XOR<BonusCampaignCreateWithoutUserBonusesInput, BonusCampaignUncheckedCreateWithoutUserBonusesInput>
    where?: BonusCampaignWhereInput
  }

  export type BonusCampaignUpdateToOneWithWhereWithoutUserBonusesInput = {
    where?: BonusCampaignWhereInput
    data: XOR<BonusCampaignUpdateWithoutUserBonusesInput, BonusCampaignUncheckedUpdateWithoutUserBonusesInput>
  }

  export type BonusCampaignUpdateWithoutUserBonusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freeBets?: FreeBetUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignUncheckedUpdateWithoutUserBonusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freeBets?: FreeBetUncheckedUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type RolloverLedgerEntryUpsertWithWhereUniqueWithoutUserBonusInput = {
    where: RolloverLedgerEntryWhereUniqueInput
    update: XOR<RolloverLedgerEntryUpdateWithoutUserBonusInput, RolloverLedgerEntryUncheckedUpdateWithoutUserBonusInput>
    create: XOR<RolloverLedgerEntryCreateWithoutUserBonusInput, RolloverLedgerEntryUncheckedCreateWithoutUserBonusInput>
  }

  export type RolloverLedgerEntryUpdateWithWhereUniqueWithoutUserBonusInput = {
    where: RolloverLedgerEntryWhereUniqueInput
    data: XOR<RolloverLedgerEntryUpdateWithoutUserBonusInput, RolloverLedgerEntryUncheckedUpdateWithoutUserBonusInput>
  }

  export type RolloverLedgerEntryUpdateManyWithWhereWithoutUserBonusInput = {
    where: RolloverLedgerEntryScalarWhereInput
    data: XOR<RolloverLedgerEntryUpdateManyMutationInput, RolloverLedgerEntryUncheckedUpdateManyWithoutUserBonusInput>
  }

  export type RolloverLedgerEntryScalarWhereInput = {
    AND?: RolloverLedgerEntryScalarWhereInput | RolloverLedgerEntryScalarWhereInput[]
    OR?: RolloverLedgerEntryScalarWhereInput[]
    NOT?: RolloverLedgerEntryScalarWhereInput | RolloverLedgerEntryScalarWhereInput[]
    id?: StringFilter<"RolloverLedgerEntry"> | string
    userBonusId?: StringFilter<"RolloverLedgerEntry"> | string
    transactionDate?: DateTimeFilter<"RolloverLedgerEntry"> | Date | string
    betId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoRoundId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    wageredAmount?: DecimalFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string
    sourceType?: StringFilter<"RolloverLedgerEntry"> | string
    sportType?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    casinoCategory?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
    contributionPercent?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    winningAmount?: DecimalNullableFilter<"RolloverLedgerEntry"> | Decimal | DecimalJsLike | number | string | null
    selectionCount?: IntNullableFilter<"RolloverLedgerEntry"> | number | null
    referenceCorrelationId?: StringNullableFilter<"RolloverLedgerEntry"> | string | null
  }

  export type UserBonusCreateWithoutRolloverLedgerEntriesInput = {
    id?: string
    userId: string
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
    campaign?: BonusCampaignCreateNestedOneWithoutUserBonusesInput
  }

  export type UserBonusUncheckedCreateWithoutRolloverLedgerEntriesInput = {
    id?: string
    userId: string
    campaignId?: string | null
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
  }

  export type UserBonusCreateOrConnectWithoutRolloverLedgerEntriesInput = {
    where: UserBonusWhereUniqueInput
    create: XOR<UserBonusCreateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedCreateWithoutRolloverLedgerEntriesInput>
  }

  export type UserBonusUpsertWithoutRolloverLedgerEntriesInput = {
    update: XOR<UserBonusUpdateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedUpdateWithoutRolloverLedgerEntriesInput>
    create: XOR<UserBonusCreateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedCreateWithoutRolloverLedgerEntriesInput>
    where?: UserBonusWhereInput
  }

  export type UserBonusUpdateToOneWithWhereWithoutRolloverLedgerEntriesInput = {
    where?: UserBonusWhereInput
    data: XOR<UserBonusUpdateWithoutRolloverLedgerEntriesInput, UserBonusUncheckedUpdateWithoutRolloverLedgerEntriesInput>
  }

  export type UserBonusUpdateWithoutRolloverLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: BonusCampaignUpdateOneWithoutUserBonusesNestedInput
  }

  export type UserBonusUncheckedUpdateWithoutRolloverLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BonusCampaignCreateWithoutFreeBetsInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignUncheckedCreateWithoutFreeBetsInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusUncheckedCreateNestedManyWithoutCampaignInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignCreateOrConnectWithoutFreeBetsInput = {
    where: BonusCampaignWhereUniqueInput
    create: XOR<BonusCampaignCreateWithoutFreeBetsInput, BonusCampaignUncheckedCreateWithoutFreeBetsInput>
  }

  export type BonusCampaignUpsertWithoutFreeBetsInput = {
    update: XOR<BonusCampaignUpdateWithoutFreeBetsInput, BonusCampaignUncheckedUpdateWithoutFreeBetsInput>
    create: XOR<BonusCampaignCreateWithoutFreeBetsInput, BonusCampaignUncheckedCreateWithoutFreeBetsInput>
    where?: BonusCampaignWhereInput
  }

  export type BonusCampaignUpdateToOneWithWhereWithoutFreeBetsInput = {
    where?: BonusCampaignWhereInput
    data: XOR<BonusCampaignUpdateWithoutFreeBetsInput, BonusCampaignUncheckedUpdateWithoutFreeBetsInput>
  }

  export type BonusCampaignUpdateWithoutFreeBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignUncheckedUpdateWithoutFreeBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUncheckedUpdateManyWithoutCampaignNestedInput
    casinoFreeSpins?: CasinoFreeSpinUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignCreateWithoutCasinoFreeSpinsInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusCreateNestedManyWithoutCampaignInput
    freeBets?: FreeBetCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignUncheckedCreateWithoutCasinoFreeSpinsInput = {
    id?: string
    name: string
    code?: string | null
    bonusType: $Enums.BonusType
    trigger: $Enums.BonusTrigger
    status?: $Enums.CampaignStatus
    matchPercent?: Decimal | DecimalJsLike | number | string | null
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    validityDays?: number | null
    freeSpinsCount?: number | null
    freeSpinsGameId?: string | null
    eligibleCountries?: BonusCampaignCreateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignCreateeligibleSportsInput | string[]
    sportMinOdds?: Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: boolean
    wageringCasinoAllowed?: boolean
    description?: string | null
    termsHtml?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: boolean
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userBonuses?: UserBonusUncheckedCreateNestedManyWithoutCampaignInput
    freeBets?: FreeBetUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type BonusCampaignCreateOrConnectWithoutCasinoFreeSpinsInput = {
    where: BonusCampaignWhereUniqueInput
    create: XOR<BonusCampaignCreateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedCreateWithoutCasinoFreeSpinsInput>
  }

  export type BonusCampaignUpsertWithoutCasinoFreeSpinsInput = {
    update: XOR<BonusCampaignUpdateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedUpdateWithoutCasinoFreeSpinsInput>
    create: XOR<BonusCampaignCreateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedCreateWithoutCasinoFreeSpinsInput>
    where?: BonusCampaignWhereInput
  }

  export type BonusCampaignUpdateToOneWithWhereWithoutCasinoFreeSpinsInput = {
    where?: BonusCampaignWhereInput
    data: XOR<BonusCampaignUpdateWithoutCasinoFreeSpinsInput, BonusCampaignUncheckedUpdateWithoutCasinoFreeSpinsInput>
  }

  export type BonusCampaignUpdateWithoutCasinoFreeSpinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUpdateManyWithoutCampaignNestedInput
    freeBets?: FreeBetUpdateManyWithoutCampaignNestedInput
  }

  export type BonusCampaignUncheckedUpdateWithoutCasinoFreeSpinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    trigger?: EnumBonusTriggerFieldUpdateOperationsInput | $Enums.BonusTrigger
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    matchPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minDepositAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsCount?: NullableIntFieldUpdateOperationsInput | number | null
    freeSpinsGameId?: NullableStringFieldUpdateOperationsInput | string | null
    eligibleCountries?: BonusCampaignUpdateeligibleCountriesInput | string[]
    eligibleSports?: BonusCampaignUpdateeligibleSportsInput | string[]
    sportMinOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxBonusPerUser?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wageringSportAllowed?: BoolFieldUpdateOperationsInput | boolean
    wageringCasinoAllowed?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    termsHtml?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isPromo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBonuses?: UserBonusUncheckedUpdateManyWithoutCampaignNestedInput
    freeBets?: FreeBetUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type UserBonusCreateManyCampaignInput = {
    id?: string
    userId: string
    bonusType: $Enums.BonusType
    status?: $Enums.BonusStatus
    grantedAmount: Decimal | DecimalJsLike | number | string
    grantedCurrency?: string
    maxAmount?: Decimal | DecimalJsLike | number | string | null
    usedAmount?: Decimal | DecimalJsLike | number | string | null
    releasedAmount?: Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal: Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: Decimal | DecimalJsLike | number | string
    rolloverPercent?: Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: $Enums.RolloverStatus
    grantedAt?: Date | string
    activatedAt?: Date | string | null
    expiresAt?: Date | string | null
    lastContributionAt?: Date | string | null
    releasedAt?: Date | string | null
    cancelledAt?: Date | string | null
    cancelledReason?: string | null
    referenceDepositId?: string | null
    promocodeUsed?: string | null
    freebetIdExternal?: string | null
    description?: string | null
    noteAdmin?: string | null
    createdByAdminId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: string | null
  }

  export type FreeBetCreateManyCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    status?: $Enums.BonusStatus
    amount: Decimal | DecimalJsLike | number | string
    minOddsRequirement?: Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: string | null
    leagueRestriction?: string | null
    startsAt?: Date | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    usedBetId?: string | null
    remainingAmount?: Decimal | DecimalJsLike | number | string | null
    grantedBy?: string | null
    correlationId?: string | null
    deletedAt?: Date | string | null
  }

  export type CasinoFreeSpinCreateManyCampaignInput = {
    id?: string
    userId: string
    bonusId?: string | null
    gameId: string
    gameProvider: string
    countTotal: number
    countUsed?: number
    status?: $Enums.BonusStatus
    betAmountPerSpin?: Decimal | DecimalJsLike | number | string | null
    expiresAt?: Date | string | null
    usedAt?: Date | string | null
    correlationId?: string | null
  }

  export type UserBonusUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    rolloverLedgerEntries?: RolloverLedgerEntryUpdateManyWithoutUserBonusNestedInput
  }

  export type UserBonusUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    rolloverLedgerEntries?: RolloverLedgerEntryUncheckedUpdateManyWithoutUserBonusNestedInput
  }

  export type UserBonusUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusType?: EnumBonusTypeFieldUpdateOperationsInput | $Enums.BonusType
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    grantedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grantedCurrency?: StringFieldUpdateOperationsInput | string
    maxAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    usedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    releasedAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    minOddsRequirement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverContributionCategory?: NullableEnumCasinoContributionCategoryFieldUpdateOperationsInput | $Enums.CasinoContributionCategory | null
    rolloverRequiredTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedReal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverCompletedWeighted?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rolloverStatus?: EnumRolloverStatusFieldUpdateOperationsInput | $Enums.RolloverStatus
    grantedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastContributionAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    referenceDepositId?: NullableStringFieldUpdateOperationsInput | string | null
    promocodeUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdExternal?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    noteAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    createdByAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FreeBetUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FreeBetUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FreeBetUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    minOddsRequirement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rolloverMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sportTypeRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    leagueRestriction?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedBetId?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    grantedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoFreeSpinUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasinoFreeSpinUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CasinoFreeSpinUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bonusId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    gameProvider?: StringFieldUpdateOperationsInput | string
    countTotal?: IntFieldUpdateOperationsInput | number
    countUsed?: IntFieldUpdateOperationsInput | number
    status?: EnumBonusStatusFieldUpdateOperationsInput | $Enums.BonusStatus
    betAmountPerSpin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryCreateManyUserBonusInput = {
    id?: string
    transactionDate?: Date | string
    betId?: string | null
    casinoRoundId?: string | null
    wageredAmount: Decimal | DecimalJsLike | number | string
    sourceType: string
    sportType?: string | null
    casinoCategory?: string | null
    contributionPercent?: Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: Decimal | DecimalJsLike | number | string | null
    winningAmount?: Decimal | DecimalJsLike | number | string | null
    selectionCount?: number | null
    referenceCorrelationId?: string | null
  }

  export type RolloverLedgerEntryUpdateWithoutUserBonusInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryUncheckedUpdateWithoutUserBonusInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolloverLedgerEntryUncheckedUpdateManyWithoutUserBonusInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    betId?: NullableStringFieldUpdateOperationsInput | string | null
    casinoRoundId?: NullableStringFieldUpdateOperationsInput | string | null
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sourceType?: StringFieldUpdateOperationsInput | string
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    casinoCategory?: NullableStringFieldUpdateOperationsInput | string | null
    contributionPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightedContributionAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsAtBet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    winningAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionCount?: NullableIntFieldUpdateOperationsInput | number | null
    referenceCorrelationId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BonusCampaignCountOutputTypeDefaultArgs instead
     */
    export type BonusCampaignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BonusCampaignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBonusCountOutputTypeDefaultArgs instead
     */
    export type UserBonusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBonusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BonusCampaignDefaultArgs instead
     */
    export type BonusCampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BonusCampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBonusDefaultArgs instead
     */
    export type UserBonusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBonusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolloverLedgerEntryDefaultArgs instead
     */
    export type RolloverLedgerEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolloverLedgerEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FreeBetDefaultArgs instead
     */
    export type FreeBetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FreeBetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoFreeSpinDefaultArgs instead
     */
    export type CasinoFreeSpinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoFreeSpinDefaultArgs<ExtArgs>

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