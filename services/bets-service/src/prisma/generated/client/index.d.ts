
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
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model BetSelection
 * 
 */
export type BetSelection = $Result.DefaultSelection<Prisma.$BetSelectionPayload>
/**
 * Model CashoutRecord
 * 
 */
export type CashoutRecord = $Result.DefaultSelection<Prisma.$CashoutRecordPayload>
/**
 * Model BetSettlementLog
 * 
 */
export type BetSettlementLog = $Result.DefaultSelection<Prisma.$BetSettlementLogPayload>
/**
 * Model BetSlipDraft
 * 
 */
export type BetSlipDraft = $Result.DefaultSelection<Prisma.$BetSlipDraftPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BetType: {
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE',
  SYSTEM: 'SYSTEM',
  CHAIN: 'CHAIN'
};

export type BetType = (typeof BetType)[keyof typeof BetType]


export const SystemBetType: {
  T_2_OF_3: 'T_2_OF_3',
  T_2_OF_4: 'T_2_OF_4',
  T_3_OF_4: 'T_3_OF_4',
  T_2_OF_5: 'T_2_OF_5',
  T_3_OF_5: 'T_3_OF_5',
  T_4_OF_5: 'T_4_OF_5',
  T_2_OF_6: 'T_2_OF_6',
  T_3_OF_6: 'T_3_OF_6',
  T_4_OF_6: 'T_4_OF_6',
  T_5_OF_6: 'T_5_OF_6'
};

export type SystemBetType = (typeof SystemBetType)[keyof typeof SystemBetType]


export const BetStatus: {
  PENDING: 'PENDING',
  PLACED: 'PLACED',
  LIVE: 'LIVE',
  WON: 'WON',
  LOST: 'LOST',
  HALF_WON: 'HALF_WON',
  HALF_LOST: 'HALF_LOST',
  VOID: 'VOID',
  CASHOUT: 'CASHOUT',
  CASHOUT_PARTIAL: 'CASHOUT_PARTIAL',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  UNDER_REVIEW: 'UNDER_REVIEW'
};

export type BetStatus = (typeof BetStatus)[keyof typeof BetStatus]


export const BetAcceptanceType: {
  ACCEPT_HIGHER_ODDS: 'ACCEPT_HIGHER_ODDS',
  ACCEPT_ANY_ODDS: 'ACCEPT_ANY_ODDS',
  ACCEPT_NO_CHANGE: 'ACCEPT_NO_CHANGE',
  ACCEPT_EQUAL_OR_HIGHER: 'ACCEPT_EQUAL_OR_HIGHER'
};

export type BetAcceptanceType = (typeof BetAcceptanceType)[keyof typeof BetAcceptanceType]


export const MarketType: {
  MATCH_WINNER_1X2: 'MATCH_WINNER_1X2',
  MATCH_WINNER_12: 'MATCH_WINNER_12',
  OVER_UNDER_TOTAL: 'OVER_UNDER_TOTAL',
  OVER_UNDER_HOME: 'OVER_UNDER_HOME',
  OVER_UNDER_AWAY: 'OVER_UNDER_AWAY',
  BTTS_YES_NO: 'BTTS_YES_NO',
  CORRECT_SCORE: 'CORRECT_SCORE',
  HALF_TIME_RESULT: 'HALF_TIME_RESULT',
  HALF_TIME_FULL_TIME: 'HALF_TIME_FULL_TIME',
  DOUBLE_CHANCE: 'DOUBLE_CHANCE',
  ASIAN_HANDICAP: 'ASIAN_HANDICAP',
  EUROPEAN_HANDICAP: 'EUROPEAN_HANDICAP',
  FIRST_GOAL_SCORER: 'FIRST_GOAL_SCORER',
  ANYTIME_GOAL_SCORER: 'ANYTIME_GOAL_SCORER',
  EXACT_GOALS: 'EXACT_GOALS',
  MATCH_RESULT_BOTH_TEAMS_TO_SCORE: 'MATCH_RESULT_BOTH_TEAMS_TO_SCORE',
  DRAW_NO_BET: 'DRAW_NO_BET',
  TOTAL_CORNERS: 'TOTAL_CORNERS',
  TOTAL_CARDS: 'TOTAL_CARDS',
  NEXT_GOAL: 'NEXT_GOAL',
  WINNING_MARGIN: 'WINNING_MARGIN',
  SET_WINNER: 'SET_WINNER',
  GAME_WINNER: 'GAME_WINNER',
  TIE_NO_BET: 'TIE_NO_BET',
  TOTAL_POINTS: 'TOTAL_POINTS',
  MONEYLINE: 'MONEYLINE',
  SPREAD: 'SPREAD',
  TOTAL: 'TOTAL'
};

export type MarketType = (typeof MarketType)[keyof typeof MarketType]


export const SelectionOutcome: {
  HOME: 'HOME',
  DRAW: 'DRAW',
  AWAY: 'AWAY',
  OVER: 'OVER',
  UNDER: 'UNDER',
  YES: 'YES',
  NO: 'NO',
  WON: 'WON',
  LOST: 'LOST',
  VOID: 'VOID',
  PENDING: 'PENDING',
  HALF_WON: 'HALF_WON',
  HALF_LOST: 'HALF_LOST'
};

export type SelectionOutcome = (typeof SelectionOutcome)[keyof typeof SelectionOutcome]


export const CashoutType: {
  FULL: 'FULL',
  PARTIAL: 'PARTIAL',
  AUTO: 'AUTO'
};

export type CashoutType = (typeof CashoutType)[keyof typeof CashoutType]


export const CashoutStatus: {
  REQUESTED: 'REQUESTED',
  PROCESSING: 'PROCESSING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED',
  REJECTED: 'REJECTED'
};

export type CashoutStatus = (typeof CashoutStatus)[keyof typeof CashoutStatus]

}

export type BetType = $Enums.BetType

export const BetType: typeof $Enums.BetType

export type SystemBetType = $Enums.SystemBetType

export const SystemBetType: typeof $Enums.SystemBetType

export type BetStatus = $Enums.BetStatus

export const BetStatus: typeof $Enums.BetStatus

export type BetAcceptanceType = $Enums.BetAcceptanceType

export const BetAcceptanceType: typeof $Enums.BetAcceptanceType

export type MarketType = $Enums.MarketType

export const MarketType: typeof $Enums.MarketType

export type SelectionOutcome = $Enums.SelectionOutcome

export const SelectionOutcome: typeof $Enums.SelectionOutcome

export type CashoutType = $Enums.CashoutType

export const CashoutType: typeof $Enums.CashoutType

export type CashoutStatus = $Enums.CashoutStatus

export const CashoutStatus: typeof $Enums.CashoutStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bets
 * const bets = await prisma.bet.findMany()
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
   * // Fetch zero or more Bets
   * const bets = await prisma.bet.findMany()
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
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs>;

  /**
   * `prisma.betSelection`: Exposes CRUD operations for the **BetSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetSelections
    * const betSelections = await prisma.betSelection.findMany()
    * ```
    */
  get betSelection(): Prisma.BetSelectionDelegate<ExtArgs>;

  /**
   * `prisma.cashoutRecord`: Exposes CRUD operations for the **CashoutRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CashoutRecords
    * const cashoutRecords = await prisma.cashoutRecord.findMany()
    * ```
    */
  get cashoutRecord(): Prisma.CashoutRecordDelegate<ExtArgs>;

  /**
   * `prisma.betSettlementLog`: Exposes CRUD operations for the **BetSettlementLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetSettlementLogs
    * const betSettlementLogs = await prisma.betSettlementLog.findMany()
    * ```
    */
  get betSettlementLog(): Prisma.BetSettlementLogDelegate<ExtArgs>;

  /**
   * `prisma.betSlipDraft`: Exposes CRUD operations for the **BetSlipDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetSlipDrafts
    * const betSlipDrafts = await prisma.betSlipDraft.findMany()
    * ```
    */
  get betSlipDraft(): Prisma.BetSlipDraftDelegate<ExtArgs>;
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
    Bet: 'Bet',
    BetSelection: 'BetSelection',
    CashoutRecord: 'CashoutRecord',
    BetSettlementLog: 'BetSettlementLog',
    BetSlipDraft: 'BetSlipDraft'
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
      modelProps: "bet" | "betSelection" | "cashoutRecord" | "betSettlementLog" | "betSlipDraft"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      BetSelection: {
        payload: Prisma.$BetSelectionPayload<ExtArgs>
        fields: Prisma.BetSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          findFirst: {
            args: Prisma.BetSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          findMany: {
            args: Prisma.BetSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>[]
          }
          create: {
            args: Prisma.BetSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          createMany: {
            args: Prisma.BetSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>[]
          }
          delete: {
            args: Prisma.BetSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          update: {
            args: Prisma.BetSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          deleteMany: {
            args: Prisma.BetSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSelectionPayload>
          }
          aggregate: {
            args: Prisma.BetSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetSelection>
          }
          groupBy: {
            args: Prisma.BetSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<BetSelectionCountAggregateOutputType> | number
          }
        }
      }
      CashoutRecord: {
        payload: Prisma.$CashoutRecordPayload<ExtArgs>
        fields: Prisma.CashoutRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CashoutRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CashoutRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          findFirst: {
            args: Prisma.CashoutRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CashoutRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          findMany: {
            args: Prisma.CashoutRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>[]
          }
          create: {
            args: Prisma.CashoutRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          createMany: {
            args: Prisma.CashoutRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CashoutRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>[]
          }
          delete: {
            args: Prisma.CashoutRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          update: {
            args: Prisma.CashoutRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          deleteMany: {
            args: Prisma.CashoutRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CashoutRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CashoutRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CashoutRecordPayload>
          }
          aggregate: {
            args: Prisma.CashoutRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashoutRecord>
          }
          groupBy: {
            args: Prisma.CashoutRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashoutRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CashoutRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CashoutRecordCountAggregateOutputType> | number
          }
        }
      }
      BetSettlementLog: {
        payload: Prisma.$BetSettlementLogPayload<ExtArgs>
        fields: Prisma.BetSettlementLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetSettlementLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetSettlementLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          findFirst: {
            args: Prisma.BetSettlementLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetSettlementLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          findMany: {
            args: Prisma.BetSettlementLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>[]
          }
          create: {
            args: Prisma.BetSettlementLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          createMany: {
            args: Prisma.BetSettlementLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetSettlementLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>[]
          }
          delete: {
            args: Prisma.BetSettlementLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          update: {
            args: Prisma.BetSettlementLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          deleteMany: {
            args: Prisma.BetSettlementLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetSettlementLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetSettlementLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSettlementLogPayload>
          }
          aggregate: {
            args: Prisma.BetSettlementLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetSettlementLog>
          }
          groupBy: {
            args: Prisma.BetSettlementLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetSettlementLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetSettlementLogCountArgs<ExtArgs>
            result: $Utils.Optional<BetSettlementLogCountAggregateOutputType> | number
          }
        }
      }
      BetSlipDraft: {
        payload: Prisma.$BetSlipDraftPayload<ExtArgs>
        fields: Prisma.BetSlipDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetSlipDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetSlipDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          findFirst: {
            args: Prisma.BetSlipDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetSlipDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          findMany: {
            args: Prisma.BetSlipDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>[]
          }
          create: {
            args: Prisma.BetSlipDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          createMany: {
            args: Prisma.BetSlipDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetSlipDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>[]
          }
          delete: {
            args: Prisma.BetSlipDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          update: {
            args: Prisma.BetSlipDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          deleteMany: {
            args: Prisma.BetSlipDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetSlipDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetSlipDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetSlipDraftPayload>
          }
          aggregate: {
            args: Prisma.BetSlipDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetSlipDraft>
          }
          groupBy: {
            args: Prisma.BetSlipDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetSlipDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetSlipDraftCountArgs<ExtArgs>
            result: $Utils.Optional<BetSlipDraftCountAggregateOutputType> | number
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
   * Count Type BetCountOutputType
   */

  export type BetCountOutputType = {
    selections: number
    cashoutRecords: number
    settlementLogs: number
  }

  export type BetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selections?: boolean | BetCountOutputTypeCountSelectionsArgs
    cashoutRecords?: boolean | BetCountOutputTypeCountCashoutRecordsArgs
    settlementLogs?: boolean | BetCountOutputTypeCountSettlementLogsArgs
  }

  // Custom InputTypes
  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetCountOutputType
     */
    select?: BetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetSelectionWhereInput
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountCashoutRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashoutRecordWhereInput
  }

  /**
   * BetCountOutputType without action
   */
  export type BetCountOutputTypeCountSettlementLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetSettlementLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    selectionsCount: number | null
    winningSelectionsCount: number | null
    stakeAmount: Decimal | null
    stakeRealUsed: Decimal | null
    stakeBonusUsed: Decimal | null
    stakeFreebetUsed: Decimal | null
    totalOdds: Decimal | null
    oddsMultiplier: Decimal | null
    potentialReturn: Decimal | null
    potentialWin: Decimal | null
    maxWinCap: Decimal | null
    acceptedOddsChangeMaxPercent: Decimal | null
    actualOddsChangePercent: Decimal | null
    cashoutValueCurrent: Decimal | null
    cashoutValueMin: Decimal | null
    cashoutValueMax: Decimal | null
    autoCashoutValue: Decimal | null
    partialCashoutRemainingStake: Decimal | null
    partialCashoutTotalCashedOut: Decimal | null
    actualReturn: Decimal | null
    actualWinNet: Decimal | null
    actualTaxDeducted: Decimal | null
    combiBoostPercent: Decimal | null
    accumulatorBonusPercent: Decimal | null
  }

  export type BetSumAggregateOutputType = {
    selectionsCount: number | null
    winningSelectionsCount: number | null
    stakeAmount: Decimal | null
    stakeRealUsed: Decimal | null
    stakeBonusUsed: Decimal | null
    stakeFreebetUsed: Decimal | null
    totalOdds: Decimal | null
    oddsMultiplier: Decimal | null
    potentialReturn: Decimal | null
    potentialWin: Decimal | null
    maxWinCap: Decimal | null
    acceptedOddsChangeMaxPercent: Decimal | null
    actualOddsChangePercent: Decimal | null
    cashoutValueCurrent: Decimal | null
    cashoutValueMin: Decimal | null
    cashoutValueMax: Decimal | null
    autoCashoutValue: Decimal | null
    partialCashoutRemainingStake: Decimal | null
    partialCashoutTotalCashedOut: Decimal | null
    actualReturn: Decimal | null
    actualWinNet: Decimal | null
    actualTaxDeducted: Decimal | null
    combiBoostPercent: Decimal | null
    accumulatorBonusPercent: Decimal | null
  }

  export type BetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    transactionId: string | null
    externalId: string | null
    betNumber: string | null
    betType: $Enums.BetType | null
    systemType: $Enums.SystemBetType | null
    status: $Enums.BetStatus | null
    selectionsCount: number | null
    winningSelectionsCount: number | null
    stakeAmount: Decimal | null
    stakeRealUsed: Decimal | null
    stakeBonusUsed: Decimal | null
    stakeFreebetUsed: Decimal | null
    totalOdds: Decimal | null
    oddsMultiplier: Decimal | null
    potentialReturn: Decimal | null
    potentialWin: Decimal | null
    maxWinCap: Decimal | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    acceptanceType: $Enums.BetAcceptanceType | null
    acceptedOddsChangeMaxPercent: Decimal | null
    actualOddsChangePercent: Decimal | null
    cashoutAvailable: boolean | null
    cashoutValueCurrent: Decimal | null
    cashoutValueMin: Decimal | null
    cashoutValueMax: Decimal | null
    cashoutEnabled: boolean | null
    autoCashoutValue: Decimal | null
    autoCashoutTriggered: boolean | null
    autoCashoutAt: Date | null
    partialCashoutRemainingStake: Decimal | null
    partialCashoutTotalCashedOut: Decimal | null
    placedAt: Date | null
    placedIp: string | null
    placedDevice: string | null
    placedLanguage: string | null
    settledAt: Date | null
    settledBy: string | null
    settlementSource: string | null
    settlementNote: string | null
    actualReturn: Decimal | null
    actualWinNet: Decimal | null
    actualTaxDeducted: Decimal | null
    oddsBoostAppliedId: string | null
    combiBoostPercent: Decimal | null
    accumulatorBonusPercent: Decimal | null
    riskFlagged: boolean | null
    riskReviewed: boolean | null
    riskReviewedAt: Date | null
    riskReviewedBy: string | null
    cancelledReason: string | null
    cancelledAt: Date | null
    cancelledBy: string | null
    correlationId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    transactionId: string | null
    externalId: string | null
    betNumber: string | null
    betType: $Enums.BetType | null
    systemType: $Enums.SystemBetType | null
    status: $Enums.BetStatus | null
    selectionsCount: number | null
    winningSelectionsCount: number | null
    stakeAmount: Decimal | null
    stakeRealUsed: Decimal | null
    stakeBonusUsed: Decimal | null
    stakeFreebetUsed: Decimal | null
    totalOdds: Decimal | null
    oddsMultiplier: Decimal | null
    potentialReturn: Decimal | null
    potentialWin: Decimal | null
    maxWinCap: Decimal | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    acceptanceType: $Enums.BetAcceptanceType | null
    acceptedOddsChangeMaxPercent: Decimal | null
    actualOddsChangePercent: Decimal | null
    cashoutAvailable: boolean | null
    cashoutValueCurrent: Decimal | null
    cashoutValueMin: Decimal | null
    cashoutValueMax: Decimal | null
    cashoutEnabled: boolean | null
    autoCashoutValue: Decimal | null
    autoCashoutTriggered: boolean | null
    autoCashoutAt: Date | null
    partialCashoutRemainingStake: Decimal | null
    partialCashoutTotalCashedOut: Decimal | null
    placedAt: Date | null
    placedIp: string | null
    placedDevice: string | null
    placedLanguage: string | null
    settledAt: Date | null
    settledBy: string | null
    settlementSource: string | null
    settlementNote: string | null
    actualReturn: Decimal | null
    actualWinNet: Decimal | null
    actualTaxDeducted: Decimal | null
    oddsBoostAppliedId: string | null
    combiBoostPercent: Decimal | null
    accumulatorBonusPercent: Decimal | null
    riskFlagged: boolean | null
    riskReviewed: boolean | null
    riskReviewedAt: Date | null
    riskReviewedBy: string | null
    cancelledReason: string | null
    cancelledAt: Date | null
    cancelledBy: string | null
    correlationId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    transactionId: number
    externalId: number
    betNumber: number
    betType: number
    systemType: number
    status: number
    selectionsCount: number
    winningSelectionsCount: number
    stakeAmount: number
    stakeRealUsed: number
    stakeBonusUsed: number
    stakeFreebetUsed: number
    totalOdds: number
    oddsMultiplier: number
    potentialReturn: number
    potentialWin: number
    maxWinCap: number
    bonusIdUsed: number
    freebetIdUsed: number
    acceptanceType: number
    acceptedOddsChangeMaxPercent: number
    actualOddsChangePercent: number
    cashoutAvailable: number
    cashoutValueCurrent: number
    cashoutValueMin: number
    cashoutValueMax: number
    cashoutEnabled: number
    autoCashoutValue: number
    autoCashoutTriggered: number
    autoCashoutAt: number
    partialCashoutRemainingStake: number
    partialCashoutTotalCashedOut: number
    placedAt: number
    placedIp: number
    placedDevice: number
    placedLanguage: number
    settledAt: number
    settledBy: number
    settlementSource: number
    settlementNote: number
    actualReturn: number
    actualWinNet: number
    actualTaxDeducted: number
    oddsBoostAppliedId: number
    combiBoostPercent: number
    accumulatorBonusPercent: number
    riskFlagged: number
    riskFlags: number
    riskReviewed: number
    riskReviewedAt: number
    riskReviewedBy: number
    cancelledReason: number
    cancelledAt: number
    cancelledBy: number
    correlationId: number
    expiresAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    selectionsCount?: true
    winningSelectionsCount?: true
    stakeAmount?: true
    stakeRealUsed?: true
    stakeBonusUsed?: true
    stakeFreebetUsed?: true
    totalOdds?: true
    oddsMultiplier?: true
    potentialReturn?: true
    potentialWin?: true
    maxWinCap?: true
    acceptedOddsChangeMaxPercent?: true
    actualOddsChangePercent?: true
    cashoutValueCurrent?: true
    cashoutValueMin?: true
    cashoutValueMax?: true
    autoCashoutValue?: true
    partialCashoutRemainingStake?: true
    partialCashoutTotalCashedOut?: true
    actualReturn?: true
    actualWinNet?: true
    actualTaxDeducted?: true
    combiBoostPercent?: true
    accumulatorBonusPercent?: true
  }

  export type BetSumAggregateInputType = {
    selectionsCount?: true
    winningSelectionsCount?: true
    stakeAmount?: true
    stakeRealUsed?: true
    stakeBonusUsed?: true
    stakeFreebetUsed?: true
    totalOdds?: true
    oddsMultiplier?: true
    potentialReturn?: true
    potentialWin?: true
    maxWinCap?: true
    acceptedOddsChangeMaxPercent?: true
    actualOddsChangePercent?: true
    cashoutValueCurrent?: true
    cashoutValueMin?: true
    cashoutValueMax?: true
    autoCashoutValue?: true
    partialCashoutRemainingStake?: true
    partialCashoutTotalCashedOut?: true
    actualReturn?: true
    actualWinNet?: true
    actualTaxDeducted?: true
    combiBoostPercent?: true
    accumulatorBonusPercent?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    transactionId?: true
    externalId?: true
    betNumber?: true
    betType?: true
    systemType?: true
    status?: true
    selectionsCount?: true
    winningSelectionsCount?: true
    stakeAmount?: true
    stakeRealUsed?: true
    stakeBonusUsed?: true
    stakeFreebetUsed?: true
    totalOdds?: true
    oddsMultiplier?: true
    potentialReturn?: true
    potentialWin?: true
    maxWinCap?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    acceptanceType?: true
    acceptedOddsChangeMaxPercent?: true
    actualOddsChangePercent?: true
    cashoutAvailable?: true
    cashoutValueCurrent?: true
    cashoutValueMin?: true
    cashoutValueMax?: true
    cashoutEnabled?: true
    autoCashoutValue?: true
    autoCashoutTriggered?: true
    autoCashoutAt?: true
    partialCashoutRemainingStake?: true
    partialCashoutTotalCashedOut?: true
    placedAt?: true
    placedIp?: true
    placedDevice?: true
    placedLanguage?: true
    settledAt?: true
    settledBy?: true
    settlementSource?: true
    settlementNote?: true
    actualReturn?: true
    actualWinNet?: true
    actualTaxDeducted?: true
    oddsBoostAppliedId?: true
    combiBoostPercent?: true
    accumulatorBonusPercent?: true
    riskFlagged?: true
    riskReviewed?: true
    riskReviewedAt?: true
    riskReviewedBy?: true
    cancelledReason?: true
    cancelledAt?: true
    cancelledBy?: true
    correlationId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    transactionId?: true
    externalId?: true
    betNumber?: true
    betType?: true
    systemType?: true
    status?: true
    selectionsCount?: true
    winningSelectionsCount?: true
    stakeAmount?: true
    stakeRealUsed?: true
    stakeBonusUsed?: true
    stakeFreebetUsed?: true
    totalOdds?: true
    oddsMultiplier?: true
    potentialReturn?: true
    potentialWin?: true
    maxWinCap?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    acceptanceType?: true
    acceptedOddsChangeMaxPercent?: true
    actualOddsChangePercent?: true
    cashoutAvailable?: true
    cashoutValueCurrent?: true
    cashoutValueMin?: true
    cashoutValueMax?: true
    cashoutEnabled?: true
    autoCashoutValue?: true
    autoCashoutTriggered?: true
    autoCashoutAt?: true
    partialCashoutRemainingStake?: true
    partialCashoutTotalCashedOut?: true
    placedAt?: true
    placedIp?: true
    placedDevice?: true
    placedLanguage?: true
    settledAt?: true
    settledBy?: true
    settlementSource?: true
    settlementNote?: true
    actualReturn?: true
    actualWinNet?: true
    actualTaxDeducted?: true
    oddsBoostAppliedId?: true
    combiBoostPercent?: true
    accumulatorBonusPercent?: true
    riskFlagged?: true
    riskReviewed?: true
    riskReviewedAt?: true
    riskReviewedBy?: true
    cancelledReason?: true
    cancelledAt?: true
    cancelledBy?: true
    correlationId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    transactionId?: true
    externalId?: true
    betNumber?: true
    betType?: true
    systemType?: true
    status?: true
    selectionsCount?: true
    winningSelectionsCount?: true
    stakeAmount?: true
    stakeRealUsed?: true
    stakeBonusUsed?: true
    stakeFreebetUsed?: true
    totalOdds?: true
    oddsMultiplier?: true
    potentialReturn?: true
    potentialWin?: true
    maxWinCap?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    acceptanceType?: true
    acceptedOddsChangeMaxPercent?: true
    actualOddsChangePercent?: true
    cashoutAvailable?: true
    cashoutValueCurrent?: true
    cashoutValueMin?: true
    cashoutValueMax?: true
    cashoutEnabled?: true
    autoCashoutValue?: true
    autoCashoutTriggered?: true
    autoCashoutAt?: true
    partialCashoutRemainingStake?: true
    partialCashoutTotalCashedOut?: true
    placedAt?: true
    placedIp?: true
    placedDevice?: true
    placedLanguage?: true
    settledAt?: true
    settledBy?: true
    settlementSource?: true
    settlementNote?: true
    actualReturn?: true
    actualWinNet?: true
    actualTaxDeducted?: true
    oddsBoostAppliedId?: true
    combiBoostPercent?: true
    accumulatorBonusPercent?: true
    riskFlagged?: true
    riskFlags?: true
    riskReviewed?: true
    riskReviewedAt?: true
    riskReviewedBy?: true
    cancelledReason?: true
    cancelledAt?: true
    cancelledBy?: true
    correlationId?: true
    expiresAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    transactionId: string | null
    externalId: string | null
    betNumber: string | null
    betType: $Enums.BetType
    systemType: $Enums.SystemBetType | null
    status: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount: number | null
    stakeAmount: Decimal
    stakeRealUsed: Decimal
    stakeBonusUsed: Decimal
    stakeFreebetUsed: Decimal
    totalOdds: Decimal
    oddsMultiplier: Decimal | null
    potentialReturn: Decimal
    potentialWin: Decimal
    maxWinCap: Decimal | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent: Decimal | null
    actualOddsChangePercent: Decimal | null
    cashoutAvailable: boolean
    cashoutValueCurrent: Decimal | null
    cashoutValueMin: Decimal | null
    cashoutValueMax: Decimal | null
    cashoutEnabled: boolean
    autoCashoutValue: Decimal | null
    autoCashoutTriggered: boolean | null
    autoCashoutAt: Date | null
    partialCashoutRemainingStake: Decimal | null
    partialCashoutTotalCashedOut: Decimal | null
    placedAt: Date
    placedIp: string | null
    placedDevice: string | null
    placedLanguage: string | null
    settledAt: Date | null
    settledBy: string | null
    settlementSource: string | null
    settlementNote: string | null
    actualReturn: Decimal | null
    actualWinNet: Decimal | null
    actualTaxDeducted: Decimal | null
    oddsBoostAppliedId: string | null
    combiBoostPercent: Decimal | null
    accumulatorBonusPercent: Decimal | null
    riskFlagged: boolean
    riskFlags: string[]
    riskReviewed: boolean | null
    riskReviewedAt: Date | null
    riskReviewedBy: string | null
    cancelledReason: string | null
    cancelledAt: Date | null
    cancelledBy: string | null
    correlationId: string | null
    expiresAt: Date | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    externalId?: boolean
    betNumber?: boolean
    betType?: boolean
    systemType?: boolean
    status?: boolean
    selectionsCount?: boolean
    winningSelectionsCount?: boolean
    stakeAmount?: boolean
    stakeRealUsed?: boolean
    stakeBonusUsed?: boolean
    stakeFreebetUsed?: boolean
    totalOdds?: boolean
    oddsMultiplier?: boolean
    potentialReturn?: boolean
    potentialWin?: boolean
    maxWinCap?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    acceptanceType?: boolean
    acceptedOddsChangeMaxPercent?: boolean
    actualOddsChangePercent?: boolean
    cashoutAvailable?: boolean
    cashoutValueCurrent?: boolean
    cashoutValueMin?: boolean
    cashoutValueMax?: boolean
    cashoutEnabled?: boolean
    autoCashoutValue?: boolean
    autoCashoutTriggered?: boolean
    autoCashoutAt?: boolean
    partialCashoutRemainingStake?: boolean
    partialCashoutTotalCashedOut?: boolean
    placedAt?: boolean
    placedIp?: boolean
    placedDevice?: boolean
    placedLanguage?: boolean
    settledAt?: boolean
    settledBy?: boolean
    settlementSource?: boolean
    settlementNote?: boolean
    actualReturn?: boolean
    actualWinNet?: boolean
    actualTaxDeducted?: boolean
    oddsBoostAppliedId?: boolean
    combiBoostPercent?: boolean
    accumulatorBonusPercent?: boolean
    riskFlagged?: boolean
    riskFlags?: boolean
    riskReviewed?: boolean
    riskReviewedAt?: boolean
    riskReviewedBy?: boolean
    cancelledReason?: boolean
    cancelledAt?: boolean
    cancelledBy?: boolean
    correlationId?: boolean
    expiresAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    selections?: boolean | Bet$selectionsArgs<ExtArgs>
    cashoutRecords?: boolean | Bet$cashoutRecordsArgs<ExtArgs>
    settlementLogs?: boolean | Bet$settlementLogsArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    externalId?: boolean
    betNumber?: boolean
    betType?: boolean
    systemType?: boolean
    status?: boolean
    selectionsCount?: boolean
    winningSelectionsCount?: boolean
    stakeAmount?: boolean
    stakeRealUsed?: boolean
    stakeBonusUsed?: boolean
    stakeFreebetUsed?: boolean
    totalOdds?: boolean
    oddsMultiplier?: boolean
    potentialReturn?: boolean
    potentialWin?: boolean
    maxWinCap?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    acceptanceType?: boolean
    acceptedOddsChangeMaxPercent?: boolean
    actualOddsChangePercent?: boolean
    cashoutAvailable?: boolean
    cashoutValueCurrent?: boolean
    cashoutValueMin?: boolean
    cashoutValueMax?: boolean
    cashoutEnabled?: boolean
    autoCashoutValue?: boolean
    autoCashoutTriggered?: boolean
    autoCashoutAt?: boolean
    partialCashoutRemainingStake?: boolean
    partialCashoutTotalCashedOut?: boolean
    placedAt?: boolean
    placedIp?: boolean
    placedDevice?: boolean
    placedLanguage?: boolean
    settledAt?: boolean
    settledBy?: boolean
    settlementSource?: boolean
    settlementNote?: boolean
    actualReturn?: boolean
    actualWinNet?: boolean
    actualTaxDeducted?: boolean
    oddsBoostAppliedId?: boolean
    combiBoostPercent?: boolean
    accumulatorBonusPercent?: boolean
    riskFlagged?: boolean
    riskFlags?: boolean
    riskReviewed?: boolean
    riskReviewedAt?: boolean
    riskReviewedBy?: boolean
    cancelledReason?: boolean
    cancelledAt?: boolean
    cancelledBy?: boolean
    correlationId?: boolean
    expiresAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["bet"]>

  export type BetSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    externalId?: boolean
    betNumber?: boolean
    betType?: boolean
    systemType?: boolean
    status?: boolean
    selectionsCount?: boolean
    winningSelectionsCount?: boolean
    stakeAmount?: boolean
    stakeRealUsed?: boolean
    stakeBonusUsed?: boolean
    stakeFreebetUsed?: boolean
    totalOdds?: boolean
    oddsMultiplier?: boolean
    potentialReturn?: boolean
    potentialWin?: boolean
    maxWinCap?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    acceptanceType?: boolean
    acceptedOddsChangeMaxPercent?: boolean
    actualOddsChangePercent?: boolean
    cashoutAvailable?: boolean
    cashoutValueCurrent?: boolean
    cashoutValueMin?: boolean
    cashoutValueMax?: boolean
    cashoutEnabled?: boolean
    autoCashoutValue?: boolean
    autoCashoutTriggered?: boolean
    autoCashoutAt?: boolean
    partialCashoutRemainingStake?: boolean
    partialCashoutTotalCashedOut?: boolean
    placedAt?: boolean
    placedIp?: boolean
    placedDevice?: boolean
    placedLanguage?: boolean
    settledAt?: boolean
    settledBy?: boolean
    settlementSource?: boolean
    settlementNote?: boolean
    actualReturn?: boolean
    actualWinNet?: boolean
    actualTaxDeducted?: boolean
    oddsBoostAppliedId?: boolean
    combiBoostPercent?: boolean
    accumulatorBonusPercent?: boolean
    riskFlagged?: boolean
    riskFlags?: boolean
    riskReviewed?: boolean
    riskReviewedAt?: boolean
    riskReviewedBy?: boolean
    cancelledReason?: boolean
    cancelledAt?: boolean
    cancelledBy?: boolean
    correlationId?: boolean
    expiresAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selections?: boolean | Bet$selectionsArgs<ExtArgs>
    cashoutRecords?: boolean | Bet$cashoutRecordsArgs<ExtArgs>
    settlementLogs?: boolean | Bet$settlementLogsArgs<ExtArgs>
    _count?: boolean | BetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      selections: Prisma.$BetSelectionPayload<ExtArgs>[]
      cashoutRecords: Prisma.$CashoutRecordPayload<ExtArgs>[]
      settlementLogs: Prisma.$BetSettlementLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      transactionId: string | null
      externalId: string | null
      betNumber: string | null
      betType: $Enums.BetType
      systemType: $Enums.SystemBetType | null
      status: $Enums.BetStatus
      selectionsCount: number
      winningSelectionsCount: number | null
      stakeAmount: Prisma.Decimal
      stakeRealUsed: Prisma.Decimal
      stakeBonusUsed: Prisma.Decimal
      stakeFreebetUsed: Prisma.Decimal
      totalOdds: Prisma.Decimal
      oddsMultiplier: Prisma.Decimal | null
      potentialReturn: Prisma.Decimal
      potentialWin: Prisma.Decimal
      maxWinCap: Prisma.Decimal | null
      bonusIdUsed: string | null
      freebetIdUsed: string | null
      acceptanceType: $Enums.BetAcceptanceType
      acceptedOddsChangeMaxPercent: Prisma.Decimal | null
      actualOddsChangePercent: Prisma.Decimal | null
      cashoutAvailable: boolean
      cashoutValueCurrent: Prisma.Decimal | null
      cashoutValueMin: Prisma.Decimal | null
      cashoutValueMax: Prisma.Decimal | null
      cashoutEnabled: boolean
      autoCashoutValue: Prisma.Decimal | null
      autoCashoutTriggered: boolean | null
      autoCashoutAt: Date | null
      partialCashoutRemainingStake: Prisma.Decimal | null
      partialCashoutTotalCashedOut: Prisma.Decimal | null
      placedAt: Date
      placedIp: string | null
      placedDevice: string | null
      placedLanguage: string | null
      settledAt: Date | null
      settledBy: string | null
      settlementSource: string | null
      settlementNote: string | null
      actualReturn: Prisma.Decimal | null
      actualWinNet: Prisma.Decimal | null
      actualTaxDeducted: Prisma.Decimal | null
      oddsBoostAppliedId: string | null
      combiBoostPercent: Prisma.Decimal | null
      accumulatorBonusPercent: Prisma.Decimal | null
      riskFlagged: boolean
      riskFlags: string[]
      riskReviewed: boolean | null
      riskReviewedAt: Date | null
      riskReviewedBy: string | null
      cancelledReason: string | null
      cancelledAt: Date | null
      cancelledBy: string | null
      correlationId: string | null
      expiresAt: Date | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {BetCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetCreateManyAndReturnArgs>(args?: SelectSubset<T, BetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
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
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    selections<T extends Bet$selectionsArgs<ExtArgs> = {}>(args?: Subset<T, Bet$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findMany"> | Null>
    cashoutRecords<T extends Bet$cashoutRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Bet$cashoutRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findMany"> | Null>
    settlementLogs<T extends Bet$settlementLogsArgs<ExtArgs> = {}>(args?: Subset<T, Bet$settlementLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Bet model
   */ 
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'String'>
    readonly userId: FieldRef<"Bet", 'String'>
    readonly walletId: FieldRef<"Bet", 'String'>
    readonly transactionId: FieldRef<"Bet", 'String'>
    readonly externalId: FieldRef<"Bet", 'String'>
    readonly betNumber: FieldRef<"Bet", 'String'>
    readonly betType: FieldRef<"Bet", 'BetType'>
    readonly systemType: FieldRef<"Bet", 'SystemBetType'>
    readonly status: FieldRef<"Bet", 'BetStatus'>
    readonly selectionsCount: FieldRef<"Bet", 'Int'>
    readonly winningSelectionsCount: FieldRef<"Bet", 'Int'>
    readonly stakeAmount: FieldRef<"Bet", 'Decimal'>
    readonly stakeRealUsed: FieldRef<"Bet", 'Decimal'>
    readonly stakeBonusUsed: FieldRef<"Bet", 'Decimal'>
    readonly stakeFreebetUsed: FieldRef<"Bet", 'Decimal'>
    readonly totalOdds: FieldRef<"Bet", 'Decimal'>
    readonly oddsMultiplier: FieldRef<"Bet", 'Decimal'>
    readonly potentialReturn: FieldRef<"Bet", 'Decimal'>
    readonly potentialWin: FieldRef<"Bet", 'Decimal'>
    readonly maxWinCap: FieldRef<"Bet", 'Decimal'>
    readonly bonusIdUsed: FieldRef<"Bet", 'String'>
    readonly freebetIdUsed: FieldRef<"Bet", 'String'>
    readonly acceptanceType: FieldRef<"Bet", 'BetAcceptanceType'>
    readonly acceptedOddsChangeMaxPercent: FieldRef<"Bet", 'Decimal'>
    readonly actualOddsChangePercent: FieldRef<"Bet", 'Decimal'>
    readonly cashoutAvailable: FieldRef<"Bet", 'Boolean'>
    readonly cashoutValueCurrent: FieldRef<"Bet", 'Decimal'>
    readonly cashoutValueMin: FieldRef<"Bet", 'Decimal'>
    readonly cashoutValueMax: FieldRef<"Bet", 'Decimal'>
    readonly cashoutEnabled: FieldRef<"Bet", 'Boolean'>
    readonly autoCashoutValue: FieldRef<"Bet", 'Decimal'>
    readonly autoCashoutTriggered: FieldRef<"Bet", 'Boolean'>
    readonly autoCashoutAt: FieldRef<"Bet", 'DateTime'>
    readonly partialCashoutRemainingStake: FieldRef<"Bet", 'Decimal'>
    readonly partialCashoutTotalCashedOut: FieldRef<"Bet", 'Decimal'>
    readonly placedAt: FieldRef<"Bet", 'DateTime'>
    readonly placedIp: FieldRef<"Bet", 'String'>
    readonly placedDevice: FieldRef<"Bet", 'String'>
    readonly placedLanguage: FieldRef<"Bet", 'String'>
    readonly settledAt: FieldRef<"Bet", 'DateTime'>
    readonly settledBy: FieldRef<"Bet", 'String'>
    readonly settlementSource: FieldRef<"Bet", 'String'>
    readonly settlementNote: FieldRef<"Bet", 'String'>
    readonly actualReturn: FieldRef<"Bet", 'Decimal'>
    readonly actualWinNet: FieldRef<"Bet", 'Decimal'>
    readonly actualTaxDeducted: FieldRef<"Bet", 'Decimal'>
    readonly oddsBoostAppliedId: FieldRef<"Bet", 'String'>
    readonly combiBoostPercent: FieldRef<"Bet", 'Decimal'>
    readonly accumulatorBonusPercent: FieldRef<"Bet", 'Decimal'>
    readonly riskFlagged: FieldRef<"Bet", 'Boolean'>
    readonly riskFlags: FieldRef<"Bet", 'String[]'>
    readonly riskReviewed: FieldRef<"Bet", 'Boolean'>
    readonly riskReviewedAt: FieldRef<"Bet", 'DateTime'>
    readonly riskReviewedBy: FieldRef<"Bet", 'String'>
    readonly cancelledReason: FieldRef<"Bet", 'String'>
    readonly cancelledAt: FieldRef<"Bet", 'DateTime'>
    readonly cancelledBy: FieldRef<"Bet", 'String'>
    readonly correlationId: FieldRef<"Bet", 'String'>
    readonly expiresAt: FieldRef<"Bet", 'DateTime'>
    readonly metadata: FieldRef<"Bet", 'Json'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly updatedAt: FieldRef<"Bet", 'DateTime'>
    readonly deletedAt: FieldRef<"Bet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet createManyAndReturn
   */
  export type BetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
  }

  /**
   * Bet.selections
   */
  export type Bet$selectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    where?: BetSelectionWhereInput
    orderBy?: BetSelectionOrderByWithRelationInput | BetSelectionOrderByWithRelationInput[]
    cursor?: BetSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetSelectionScalarFieldEnum | BetSelectionScalarFieldEnum[]
  }

  /**
   * Bet.cashoutRecords
   */
  export type Bet$cashoutRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    where?: CashoutRecordWhereInput
    orderBy?: CashoutRecordOrderByWithRelationInput | CashoutRecordOrderByWithRelationInput[]
    cursor?: CashoutRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashoutRecordScalarFieldEnum | CashoutRecordScalarFieldEnum[]
  }

  /**
   * Bet.settlementLogs
   */
  export type Bet$settlementLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    where?: BetSettlementLogWhereInput
    orderBy?: BetSettlementLogOrderByWithRelationInput | BetSettlementLogOrderByWithRelationInput[]
    cursor?: BetSettlementLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetSettlementLogScalarFieldEnum | BetSettlementLogScalarFieldEnum[]
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Model BetSelection
   */

  export type AggregateBetSelection = {
    _count: BetSelectionCountAggregateOutputType | null
    _avg: BetSelectionAvgAggregateOutputType | null
    _sum: BetSelectionSumAggregateOutputType | null
    _min: BetSelectionMinAggregateOutputType | null
    _max: BetSelectionMaxAggregateOutputType | null
  }

  export type BetSelectionAvgAggregateOutputType = {
    oddsAtPlacement: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    settledOdds: Decimal | null
    orderIndex: number | null
  }

  export type BetSelectionSumAggregateOutputType = {
    oddsAtPlacement: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    settledOdds: Decimal | null
    orderIndex: number | null
  }

  export type BetSelectionMinAggregateOutputType = {
    id: string | null
    betId: string | null
    eventId: string | null
    marketId: string | null
    selectionId: string | null
    selectionName: string | null
    marketName: string | null
    eventName: string | null
    homeTeamName: string | null
    awayTeamName: string | null
    leagueName: string | null
    sportType: string | null
    kickoffAt: Date | null
    marketType: $Enums.MarketType | null
    outcome: $Enums.SelectionOutcome | null
    oddsAtPlacement: Decimal | null
    oddsDisplayAtPlacement: string | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    status: $Enums.SelectionOutcome | null
    settledAt: Date | null
    settledOdds: Decimal | null
    providerEventId: string | null
    providerMarketId: string | null
    providerSelectionId: string | null
    orderIndex: number | null
    deletedAt: Date | null
  }

  export type BetSelectionMaxAggregateOutputType = {
    id: string | null
    betId: string | null
    eventId: string | null
    marketId: string | null
    selectionId: string | null
    selectionName: string | null
    marketName: string | null
    eventName: string | null
    homeTeamName: string | null
    awayTeamName: string | null
    leagueName: string | null
    sportType: string | null
    kickoffAt: Date | null
    marketType: $Enums.MarketType | null
    outcome: $Enums.SelectionOutcome | null
    oddsAtPlacement: Decimal | null
    oddsDisplayAtPlacement: string | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    status: $Enums.SelectionOutcome | null
    settledAt: Date | null
    settledOdds: Decimal | null
    providerEventId: string | null
    providerMarketId: string | null
    providerSelectionId: string | null
    orderIndex: number | null
    deletedAt: Date | null
  }

  export type BetSelectionCountAggregateOutputType = {
    id: number
    betId: number
    eventId: number
    marketId: number
    selectionId: number
    selectionName: number
    marketName: number
    eventName: number
    homeTeamName: number
    awayTeamName: number
    leagueName: number
    sportType: number
    kickoffAt: number
    marketType: number
    outcome: number
    specifiers: number
    oddsAtPlacement: number
    oddsDisplayAtPlacement: number
    handicapValue: number
    totalLineValue: number
    status: number
    settledAt: number
    settledOdds: number
    resultScore: number
    providerEventId: number
    providerMarketId: number
    providerSelectionId: number
    orderIndex: number
    deletedAt: number
    _all: number
  }


  export type BetSelectionAvgAggregateInputType = {
    oddsAtPlacement?: true
    handicapValue?: true
    totalLineValue?: true
    settledOdds?: true
    orderIndex?: true
  }

  export type BetSelectionSumAggregateInputType = {
    oddsAtPlacement?: true
    handicapValue?: true
    totalLineValue?: true
    settledOdds?: true
    orderIndex?: true
  }

  export type BetSelectionMinAggregateInputType = {
    id?: true
    betId?: true
    eventId?: true
    marketId?: true
    selectionId?: true
    selectionName?: true
    marketName?: true
    eventName?: true
    homeTeamName?: true
    awayTeamName?: true
    leagueName?: true
    sportType?: true
    kickoffAt?: true
    marketType?: true
    outcome?: true
    oddsAtPlacement?: true
    oddsDisplayAtPlacement?: true
    handicapValue?: true
    totalLineValue?: true
    status?: true
    settledAt?: true
    settledOdds?: true
    providerEventId?: true
    providerMarketId?: true
    providerSelectionId?: true
    orderIndex?: true
    deletedAt?: true
  }

  export type BetSelectionMaxAggregateInputType = {
    id?: true
    betId?: true
    eventId?: true
    marketId?: true
    selectionId?: true
    selectionName?: true
    marketName?: true
    eventName?: true
    homeTeamName?: true
    awayTeamName?: true
    leagueName?: true
    sportType?: true
    kickoffAt?: true
    marketType?: true
    outcome?: true
    oddsAtPlacement?: true
    oddsDisplayAtPlacement?: true
    handicapValue?: true
    totalLineValue?: true
    status?: true
    settledAt?: true
    settledOdds?: true
    providerEventId?: true
    providerMarketId?: true
    providerSelectionId?: true
    orderIndex?: true
    deletedAt?: true
  }

  export type BetSelectionCountAggregateInputType = {
    id?: true
    betId?: true
    eventId?: true
    marketId?: true
    selectionId?: true
    selectionName?: true
    marketName?: true
    eventName?: true
    homeTeamName?: true
    awayTeamName?: true
    leagueName?: true
    sportType?: true
    kickoffAt?: true
    marketType?: true
    outcome?: true
    specifiers?: true
    oddsAtPlacement?: true
    oddsDisplayAtPlacement?: true
    handicapValue?: true
    totalLineValue?: true
    status?: true
    settledAt?: true
    settledOdds?: true
    resultScore?: true
    providerEventId?: true
    providerMarketId?: true
    providerSelectionId?: true
    orderIndex?: true
    deletedAt?: true
    _all?: true
  }

  export type BetSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSelection to aggregate.
     */
    where?: BetSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSelections to fetch.
     */
    orderBy?: BetSelectionOrderByWithRelationInput | BetSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetSelections
    **/
    _count?: true | BetSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetSelectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSelectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetSelectionMaxAggregateInputType
  }

  export type GetBetSelectionAggregateType<T extends BetSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateBetSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetSelection[P]>
      : GetScalarType<T[P], AggregateBetSelection[P]>
  }




  export type BetSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetSelectionWhereInput
    orderBy?: BetSelectionOrderByWithAggregationInput | BetSelectionOrderByWithAggregationInput[]
    by: BetSelectionScalarFieldEnum[] | BetSelectionScalarFieldEnum
    having?: BetSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetSelectionCountAggregateInputType | true
    _avg?: BetSelectionAvgAggregateInputType
    _sum?: BetSelectionSumAggregateInputType
    _min?: BetSelectionMinAggregateInputType
    _max?: BetSelectionMaxAggregateInputType
  }

  export type BetSelectionGroupByOutputType = {
    id: string
    betId: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName: string | null
    awayTeamName: string | null
    leagueName: string | null
    sportType: string | null
    kickoffAt: Date
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers: JsonValue | null
    oddsAtPlacement: Decimal
    oddsDisplayAtPlacement: string | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    status: $Enums.SelectionOutcome
    settledAt: Date | null
    settledOdds: Decimal | null
    resultScore: JsonValue | null
    providerEventId: string | null
    providerMarketId: string | null
    providerSelectionId: string | null
    orderIndex: number
    deletedAt: Date | null
    _count: BetSelectionCountAggregateOutputType | null
    _avg: BetSelectionAvgAggregateOutputType | null
    _sum: BetSelectionSumAggregateOutputType | null
    _min: BetSelectionMinAggregateOutputType | null
    _max: BetSelectionMaxAggregateOutputType | null
  }

  type GetBetSelectionGroupByPayload<T extends BetSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], BetSelectionGroupByOutputType[P]>
        }
      >
    >


  export type BetSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    eventId?: boolean
    marketId?: boolean
    selectionId?: boolean
    selectionName?: boolean
    marketName?: boolean
    eventName?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    leagueName?: boolean
    sportType?: boolean
    kickoffAt?: boolean
    marketType?: boolean
    outcome?: boolean
    specifiers?: boolean
    oddsAtPlacement?: boolean
    oddsDisplayAtPlacement?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    status?: boolean
    settledAt?: boolean
    settledOdds?: boolean
    resultScore?: boolean
    providerEventId?: boolean
    providerMarketId?: boolean
    providerSelectionId?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betSelection"]>

  export type BetSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    eventId?: boolean
    marketId?: boolean
    selectionId?: boolean
    selectionName?: boolean
    marketName?: boolean
    eventName?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    leagueName?: boolean
    sportType?: boolean
    kickoffAt?: boolean
    marketType?: boolean
    outcome?: boolean
    specifiers?: boolean
    oddsAtPlacement?: boolean
    oddsDisplayAtPlacement?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    status?: boolean
    settledAt?: boolean
    settledOdds?: boolean
    resultScore?: boolean
    providerEventId?: boolean
    providerMarketId?: boolean
    providerSelectionId?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betSelection"]>

  export type BetSelectionSelectScalar = {
    id?: boolean
    betId?: boolean
    eventId?: boolean
    marketId?: boolean
    selectionId?: boolean
    selectionName?: boolean
    marketName?: boolean
    eventName?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    leagueName?: boolean
    sportType?: boolean
    kickoffAt?: boolean
    marketType?: boolean
    outcome?: boolean
    specifiers?: boolean
    oddsAtPlacement?: boolean
    oddsDisplayAtPlacement?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    status?: boolean
    settledAt?: boolean
    settledOdds?: boolean
    resultScore?: boolean
    providerEventId?: boolean
    providerMarketId?: boolean
    providerSelectionId?: boolean
    orderIndex?: boolean
    deletedAt?: boolean
  }

  export type BetSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }
  export type BetSelectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }

  export type $BetSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetSelection"
    objects: {
      bet: Prisma.$BetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      betId: string
      eventId: string
      marketId: string
      selectionId: string
      selectionName: string
      marketName: string
      eventName: string
      homeTeamName: string | null
      awayTeamName: string | null
      leagueName: string | null
      sportType: string | null
      kickoffAt: Date
      marketType: $Enums.MarketType
      outcome: $Enums.SelectionOutcome
      specifiers: Prisma.JsonValue | null
      oddsAtPlacement: Prisma.Decimal
      oddsDisplayAtPlacement: string | null
      handicapValue: Prisma.Decimal | null
      totalLineValue: Prisma.Decimal | null
      status: $Enums.SelectionOutcome
      settledAt: Date | null
      settledOdds: Prisma.Decimal | null
      resultScore: Prisma.JsonValue | null
      providerEventId: string | null
      providerMarketId: string | null
      providerSelectionId: string | null
      orderIndex: number
      deletedAt: Date | null
    }, ExtArgs["result"]["betSelection"]>
    composites: {}
  }

  type BetSelectionGetPayload<S extends boolean | null | undefined | BetSelectionDefaultArgs> = $Result.GetResult<Prisma.$BetSelectionPayload, S>

  type BetSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetSelectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetSelectionCountAggregateInputType | true
    }

  export interface BetSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetSelection'], meta: { name: 'BetSelection' } }
    /**
     * Find zero or one BetSelection that matches the filter.
     * @param {BetSelectionFindUniqueArgs} args - Arguments to find a BetSelection
     * @example
     * // Get one BetSelection
     * const betSelection = await prisma.betSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetSelectionFindUniqueArgs>(args: SelectSubset<T, BetSelectionFindUniqueArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BetSelection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetSelectionFindUniqueOrThrowArgs} args - Arguments to find a BetSelection
     * @example
     * // Get one BetSelection
     * const betSelection = await prisma.betSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, BetSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BetSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionFindFirstArgs} args - Arguments to find a BetSelection
     * @example
     * // Get one BetSelection
     * const betSelection = await prisma.betSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetSelectionFindFirstArgs>(args?: SelectSubset<T, BetSelectionFindFirstArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BetSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionFindFirstOrThrowArgs} args - Arguments to find a BetSelection
     * @example
     * // Get one BetSelection
     * const betSelection = await prisma.betSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, BetSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BetSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetSelections
     * const betSelections = await prisma.betSelection.findMany()
     * 
     * // Get first 10 BetSelections
     * const betSelections = await prisma.betSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betSelectionWithIdOnly = await prisma.betSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetSelectionFindManyArgs>(args?: SelectSubset<T, BetSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BetSelection.
     * @param {BetSelectionCreateArgs} args - Arguments to create a BetSelection.
     * @example
     * // Create one BetSelection
     * const BetSelection = await prisma.betSelection.create({
     *   data: {
     *     // ... data to create a BetSelection
     *   }
     * })
     * 
     */
    create<T extends BetSelectionCreateArgs>(args: SelectSubset<T, BetSelectionCreateArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BetSelections.
     * @param {BetSelectionCreateManyArgs} args - Arguments to create many BetSelections.
     * @example
     * // Create many BetSelections
     * const betSelection = await prisma.betSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetSelectionCreateManyArgs>(args?: SelectSubset<T, BetSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetSelections and returns the data saved in the database.
     * @param {BetSelectionCreateManyAndReturnArgs} args - Arguments to create many BetSelections.
     * @example
     * // Create many BetSelections
     * const betSelection = await prisma.betSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetSelections and only return the `id`
     * const betSelectionWithIdOnly = await prisma.betSelection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, BetSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BetSelection.
     * @param {BetSelectionDeleteArgs} args - Arguments to delete one BetSelection.
     * @example
     * // Delete one BetSelection
     * const BetSelection = await prisma.betSelection.delete({
     *   where: {
     *     // ... filter to delete one BetSelection
     *   }
     * })
     * 
     */
    delete<T extends BetSelectionDeleteArgs>(args: SelectSubset<T, BetSelectionDeleteArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BetSelection.
     * @param {BetSelectionUpdateArgs} args - Arguments to update one BetSelection.
     * @example
     * // Update one BetSelection
     * const betSelection = await prisma.betSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetSelectionUpdateArgs>(args: SelectSubset<T, BetSelectionUpdateArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BetSelections.
     * @param {BetSelectionDeleteManyArgs} args - Arguments to filter BetSelections to delete.
     * @example
     * // Delete a few BetSelections
     * const { count } = await prisma.betSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetSelectionDeleteManyArgs>(args?: SelectSubset<T, BetSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetSelections
     * const betSelection = await prisma.betSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetSelectionUpdateManyArgs>(args: SelectSubset<T, BetSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetSelection.
     * @param {BetSelectionUpsertArgs} args - Arguments to update or create a BetSelection.
     * @example
     * // Update or create a BetSelection
     * const betSelection = await prisma.betSelection.upsert({
     *   create: {
     *     // ... data to create a BetSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetSelection we want to update
     *   }
     * })
     */
    upsert<T extends BetSelectionUpsertArgs>(args: SelectSubset<T, BetSelectionUpsertArgs<ExtArgs>>): Prisma__BetSelectionClient<$Result.GetResult<Prisma.$BetSelectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BetSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionCountArgs} args - Arguments to filter BetSelections to count.
     * @example
     * // Count the number of BetSelections
     * const count = await prisma.betSelection.count({
     *   where: {
     *     // ... the filter for the BetSelections we want to count
     *   }
     * })
    **/
    count<T extends BetSelectionCountArgs>(
      args?: Subset<T, BetSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetSelectionAggregateArgs>(args: Subset<T, BetSelectionAggregateArgs>): Prisma.PrismaPromise<GetBetSelectionAggregateType<T>>

    /**
     * Group by BetSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSelectionGroupByArgs} args - Group by arguments.
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
      T extends BetSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetSelectionGroupByArgs['orderBy'] }
        : { orderBy?: BetSelectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetSelection model
   */
  readonly fields: BetSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bet<T extends BetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BetDefaultArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BetSelection model
   */ 
  interface BetSelectionFieldRefs {
    readonly id: FieldRef<"BetSelection", 'String'>
    readonly betId: FieldRef<"BetSelection", 'String'>
    readonly eventId: FieldRef<"BetSelection", 'String'>
    readonly marketId: FieldRef<"BetSelection", 'String'>
    readonly selectionId: FieldRef<"BetSelection", 'String'>
    readonly selectionName: FieldRef<"BetSelection", 'String'>
    readonly marketName: FieldRef<"BetSelection", 'String'>
    readonly eventName: FieldRef<"BetSelection", 'String'>
    readonly homeTeamName: FieldRef<"BetSelection", 'String'>
    readonly awayTeamName: FieldRef<"BetSelection", 'String'>
    readonly leagueName: FieldRef<"BetSelection", 'String'>
    readonly sportType: FieldRef<"BetSelection", 'String'>
    readonly kickoffAt: FieldRef<"BetSelection", 'DateTime'>
    readonly marketType: FieldRef<"BetSelection", 'MarketType'>
    readonly outcome: FieldRef<"BetSelection", 'SelectionOutcome'>
    readonly specifiers: FieldRef<"BetSelection", 'Json'>
    readonly oddsAtPlacement: FieldRef<"BetSelection", 'Decimal'>
    readonly oddsDisplayAtPlacement: FieldRef<"BetSelection", 'String'>
    readonly handicapValue: FieldRef<"BetSelection", 'Decimal'>
    readonly totalLineValue: FieldRef<"BetSelection", 'Decimal'>
    readonly status: FieldRef<"BetSelection", 'SelectionOutcome'>
    readonly settledAt: FieldRef<"BetSelection", 'DateTime'>
    readonly settledOdds: FieldRef<"BetSelection", 'Decimal'>
    readonly resultScore: FieldRef<"BetSelection", 'Json'>
    readonly providerEventId: FieldRef<"BetSelection", 'String'>
    readonly providerMarketId: FieldRef<"BetSelection", 'String'>
    readonly providerSelectionId: FieldRef<"BetSelection", 'String'>
    readonly orderIndex: FieldRef<"BetSelection", 'Int'>
    readonly deletedAt: FieldRef<"BetSelection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetSelection findUnique
   */
  export type BetSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter, which BetSelection to fetch.
     */
    where: BetSelectionWhereUniqueInput
  }

  /**
   * BetSelection findUniqueOrThrow
   */
  export type BetSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter, which BetSelection to fetch.
     */
    where: BetSelectionWhereUniqueInput
  }

  /**
   * BetSelection findFirst
   */
  export type BetSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter, which BetSelection to fetch.
     */
    where?: BetSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSelections to fetch.
     */
    orderBy?: BetSelectionOrderByWithRelationInput | BetSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSelections.
     */
    cursor?: BetSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSelections.
     */
    distinct?: BetSelectionScalarFieldEnum | BetSelectionScalarFieldEnum[]
  }

  /**
   * BetSelection findFirstOrThrow
   */
  export type BetSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter, which BetSelection to fetch.
     */
    where?: BetSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSelections to fetch.
     */
    orderBy?: BetSelectionOrderByWithRelationInput | BetSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSelections.
     */
    cursor?: BetSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSelections.
     */
    distinct?: BetSelectionScalarFieldEnum | BetSelectionScalarFieldEnum[]
  }

  /**
   * BetSelection findMany
   */
  export type BetSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter, which BetSelections to fetch.
     */
    where?: BetSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSelections to fetch.
     */
    orderBy?: BetSelectionOrderByWithRelationInput | BetSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetSelections.
     */
    cursor?: BetSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSelections.
     */
    skip?: number
    distinct?: BetSelectionScalarFieldEnum | BetSelectionScalarFieldEnum[]
  }

  /**
   * BetSelection create
   */
  export type BetSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a BetSelection.
     */
    data: XOR<BetSelectionCreateInput, BetSelectionUncheckedCreateInput>
  }

  /**
   * BetSelection createMany
   */
  export type BetSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetSelections.
     */
    data: BetSelectionCreateManyInput | BetSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetSelection createManyAndReturn
   */
  export type BetSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BetSelections.
     */
    data: BetSelectionCreateManyInput | BetSelectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BetSelection update
   */
  export type BetSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a BetSelection.
     */
    data: XOR<BetSelectionUpdateInput, BetSelectionUncheckedUpdateInput>
    /**
     * Choose, which BetSelection to update.
     */
    where: BetSelectionWhereUniqueInput
  }

  /**
   * BetSelection updateMany
   */
  export type BetSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetSelections.
     */
    data: XOR<BetSelectionUpdateManyMutationInput, BetSelectionUncheckedUpdateManyInput>
    /**
     * Filter which BetSelections to update
     */
    where?: BetSelectionWhereInput
  }

  /**
   * BetSelection upsert
   */
  export type BetSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the BetSelection to update in case it exists.
     */
    where: BetSelectionWhereUniqueInput
    /**
     * In case the BetSelection found by the `where` argument doesn't exist, create a new BetSelection with this data.
     */
    create: XOR<BetSelectionCreateInput, BetSelectionUncheckedCreateInput>
    /**
     * In case the BetSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetSelectionUpdateInput, BetSelectionUncheckedUpdateInput>
  }

  /**
   * BetSelection delete
   */
  export type BetSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
    /**
     * Filter which BetSelection to delete.
     */
    where: BetSelectionWhereUniqueInput
  }

  /**
   * BetSelection deleteMany
   */
  export type BetSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSelections to delete
     */
    where?: BetSelectionWhereInput
  }

  /**
   * BetSelection without action
   */
  export type BetSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSelection
     */
    select?: BetSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSelectionInclude<ExtArgs> | null
  }


  /**
   * Model CashoutRecord
   */

  export type AggregateCashoutRecord = {
    _count: CashoutRecordCountAggregateOutputType | null
    _avg: CashoutRecordAvgAggregateOutputType | null
    _sum: CashoutRecordSumAggregateOutputType | null
    _min: CashoutRecordMinAggregateOutputType | null
    _max: CashoutRecordMaxAggregateOutputType | null
  }

  export type CashoutRecordAvgAggregateOutputType = {
    stakeBefore: Decimal | null
    stakeAfter: Decimal | null
    stakeCashedOut: Decimal | null
    amountRequested: Decimal | null
    amountFee: Decimal | null
    amountNetToUser: Decimal | null
    oddsAtCashout: Decimal | null
    probabilityImpliedAtCashout: Decimal | null
    houseEdgePercentApplied: Decimal | null
  }

  export type CashoutRecordSumAggregateOutputType = {
    stakeBefore: Decimal | null
    stakeAfter: Decimal | null
    stakeCashedOut: Decimal | null
    amountRequested: Decimal | null
    amountFee: Decimal | null
    amountNetToUser: Decimal | null
    oddsAtCashout: Decimal | null
    probabilityImpliedAtCashout: Decimal | null
    houseEdgePercentApplied: Decimal | null
  }

  export type CashoutRecordMinAggregateOutputType = {
    id: string | null
    betId: string | null
    userId: string | null
    walletId: string | null
    transactionId: string | null
    cashoutType: $Enums.CashoutType | null
    status: $Enums.CashoutStatus | null
    stakeBefore: Decimal | null
    stakeAfter: Decimal | null
    stakeCashedOut: Decimal | null
    amountRequested: Decimal | null
    amountFee: Decimal | null
    amountNetToUser: Decimal | null
    oddsAtCashout: Decimal | null
    probabilityImpliedAtCashout: Decimal | null
    houseEdgePercentApplied: Decimal | null
    confirmedAt: Date | null
    failedReason: string | null
    failedAt: Date | null
    rejectedReason: string | null
    rejectedAt: Date | null
    correlationId: string | null
    requestIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashoutRecordMaxAggregateOutputType = {
    id: string | null
    betId: string | null
    userId: string | null
    walletId: string | null
    transactionId: string | null
    cashoutType: $Enums.CashoutType | null
    status: $Enums.CashoutStatus | null
    stakeBefore: Decimal | null
    stakeAfter: Decimal | null
    stakeCashedOut: Decimal | null
    amountRequested: Decimal | null
    amountFee: Decimal | null
    amountNetToUser: Decimal | null
    oddsAtCashout: Decimal | null
    probabilityImpliedAtCashout: Decimal | null
    houseEdgePercentApplied: Decimal | null
    confirmedAt: Date | null
    failedReason: string | null
    failedAt: Date | null
    rejectedReason: string | null
    rejectedAt: Date | null
    correlationId: string | null
    requestIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CashoutRecordCountAggregateOutputType = {
    id: number
    betId: number
    userId: number
    walletId: number
    transactionId: number
    cashoutType: number
    status: number
    stakeBefore: number
    stakeAfter: number
    stakeCashedOut: number
    amountRequested: number
    amountFee: number
    amountNetToUser: number
    oddsAtCashout: number
    probabilityImpliedAtCashout: number
    houseEdgePercentApplied: number
    confirmedAt: number
    failedReason: number
    failedAt: number
    rejectedReason: number
    rejectedAt: number
    cashoutSnapshot: number
    correlationId: number
    requestIp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CashoutRecordAvgAggregateInputType = {
    stakeBefore?: true
    stakeAfter?: true
    stakeCashedOut?: true
    amountRequested?: true
    amountFee?: true
    amountNetToUser?: true
    oddsAtCashout?: true
    probabilityImpliedAtCashout?: true
    houseEdgePercentApplied?: true
  }

  export type CashoutRecordSumAggregateInputType = {
    stakeBefore?: true
    stakeAfter?: true
    stakeCashedOut?: true
    amountRequested?: true
    amountFee?: true
    amountNetToUser?: true
    oddsAtCashout?: true
    probabilityImpliedAtCashout?: true
    houseEdgePercentApplied?: true
  }

  export type CashoutRecordMinAggregateInputType = {
    id?: true
    betId?: true
    userId?: true
    walletId?: true
    transactionId?: true
    cashoutType?: true
    status?: true
    stakeBefore?: true
    stakeAfter?: true
    stakeCashedOut?: true
    amountRequested?: true
    amountFee?: true
    amountNetToUser?: true
    oddsAtCashout?: true
    probabilityImpliedAtCashout?: true
    houseEdgePercentApplied?: true
    confirmedAt?: true
    failedReason?: true
    failedAt?: true
    rejectedReason?: true
    rejectedAt?: true
    correlationId?: true
    requestIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashoutRecordMaxAggregateInputType = {
    id?: true
    betId?: true
    userId?: true
    walletId?: true
    transactionId?: true
    cashoutType?: true
    status?: true
    stakeBefore?: true
    stakeAfter?: true
    stakeCashedOut?: true
    amountRequested?: true
    amountFee?: true
    amountNetToUser?: true
    oddsAtCashout?: true
    probabilityImpliedAtCashout?: true
    houseEdgePercentApplied?: true
    confirmedAt?: true
    failedReason?: true
    failedAt?: true
    rejectedReason?: true
    rejectedAt?: true
    correlationId?: true
    requestIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CashoutRecordCountAggregateInputType = {
    id?: true
    betId?: true
    userId?: true
    walletId?: true
    transactionId?: true
    cashoutType?: true
    status?: true
    stakeBefore?: true
    stakeAfter?: true
    stakeCashedOut?: true
    amountRequested?: true
    amountFee?: true
    amountNetToUser?: true
    oddsAtCashout?: true
    probabilityImpliedAtCashout?: true
    houseEdgePercentApplied?: true
    confirmedAt?: true
    failedReason?: true
    failedAt?: true
    rejectedReason?: true
    rejectedAt?: true
    cashoutSnapshot?: true
    correlationId?: true
    requestIp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CashoutRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashoutRecord to aggregate.
     */
    where?: CashoutRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashoutRecords to fetch.
     */
    orderBy?: CashoutRecordOrderByWithRelationInput | CashoutRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CashoutRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashoutRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashoutRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CashoutRecords
    **/
    _count?: true | CashoutRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashoutRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashoutRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashoutRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashoutRecordMaxAggregateInputType
  }

  export type GetCashoutRecordAggregateType<T extends CashoutRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCashoutRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashoutRecord[P]>
      : GetScalarType<T[P], AggregateCashoutRecord[P]>
  }




  export type CashoutRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CashoutRecordWhereInput
    orderBy?: CashoutRecordOrderByWithAggregationInput | CashoutRecordOrderByWithAggregationInput[]
    by: CashoutRecordScalarFieldEnum[] | CashoutRecordScalarFieldEnum
    having?: CashoutRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashoutRecordCountAggregateInputType | true
    _avg?: CashoutRecordAvgAggregateInputType
    _sum?: CashoutRecordSumAggregateInputType
    _min?: CashoutRecordMinAggregateInputType
    _max?: CashoutRecordMaxAggregateInputType
  }

  export type CashoutRecordGroupByOutputType = {
    id: string
    betId: string
    userId: string
    walletId: string
    transactionId: string | null
    cashoutType: $Enums.CashoutType
    status: $Enums.CashoutStatus
    stakeBefore: Decimal
    stakeAfter: Decimal | null
    stakeCashedOut: Decimal | null
    amountRequested: Decimal
    amountFee: Decimal
    amountNetToUser: Decimal
    oddsAtCashout: Decimal | null
    probabilityImpliedAtCashout: Decimal | null
    houseEdgePercentApplied: Decimal
    confirmedAt: Date | null
    failedReason: string | null
    failedAt: Date | null
    rejectedReason: string | null
    rejectedAt: Date | null
    cashoutSnapshot: JsonValue | null
    correlationId: string | null
    requestIp: string | null
    createdAt: Date
    updatedAt: Date
    _count: CashoutRecordCountAggregateOutputType | null
    _avg: CashoutRecordAvgAggregateOutputType | null
    _sum: CashoutRecordSumAggregateOutputType | null
    _min: CashoutRecordMinAggregateOutputType | null
    _max: CashoutRecordMaxAggregateOutputType | null
  }

  type GetCashoutRecordGroupByPayload<T extends CashoutRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashoutRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashoutRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashoutRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CashoutRecordGroupByOutputType[P]>
        }
      >
    >


  export type CashoutRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    cashoutType?: boolean
    status?: boolean
    stakeBefore?: boolean
    stakeAfter?: boolean
    stakeCashedOut?: boolean
    amountRequested?: boolean
    amountFee?: boolean
    amountNetToUser?: boolean
    oddsAtCashout?: boolean
    probabilityImpliedAtCashout?: boolean
    houseEdgePercentApplied?: boolean
    confirmedAt?: boolean
    failedReason?: boolean
    failedAt?: boolean
    rejectedReason?: boolean
    rejectedAt?: boolean
    cashoutSnapshot?: boolean
    correlationId?: boolean
    requestIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashoutRecord"]>

  export type CashoutRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    cashoutType?: boolean
    status?: boolean
    stakeBefore?: boolean
    stakeAfter?: boolean
    stakeCashedOut?: boolean
    amountRequested?: boolean
    amountFee?: boolean
    amountNetToUser?: boolean
    oddsAtCashout?: boolean
    probabilityImpliedAtCashout?: boolean
    houseEdgePercentApplied?: boolean
    confirmedAt?: boolean
    failedReason?: boolean
    failedAt?: boolean
    rejectedReason?: boolean
    rejectedAt?: boolean
    cashoutSnapshot?: boolean
    correlationId?: boolean
    requestIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashoutRecord"]>

  export type CashoutRecordSelectScalar = {
    id?: boolean
    betId?: boolean
    userId?: boolean
    walletId?: boolean
    transactionId?: boolean
    cashoutType?: boolean
    status?: boolean
    stakeBefore?: boolean
    stakeAfter?: boolean
    stakeCashedOut?: boolean
    amountRequested?: boolean
    amountFee?: boolean
    amountNetToUser?: boolean
    oddsAtCashout?: boolean
    probabilityImpliedAtCashout?: boolean
    houseEdgePercentApplied?: boolean
    confirmedAt?: boolean
    failedReason?: boolean
    failedAt?: boolean
    rejectedReason?: boolean
    rejectedAt?: boolean
    cashoutSnapshot?: boolean
    correlationId?: boolean
    requestIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CashoutRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }
  export type CashoutRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }

  export type $CashoutRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CashoutRecord"
    objects: {
      bet: Prisma.$BetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      betId: string
      userId: string
      walletId: string
      transactionId: string | null
      cashoutType: $Enums.CashoutType
      status: $Enums.CashoutStatus
      stakeBefore: Prisma.Decimal
      stakeAfter: Prisma.Decimal | null
      stakeCashedOut: Prisma.Decimal | null
      amountRequested: Prisma.Decimal
      amountFee: Prisma.Decimal
      amountNetToUser: Prisma.Decimal
      oddsAtCashout: Prisma.Decimal | null
      probabilityImpliedAtCashout: Prisma.Decimal | null
      houseEdgePercentApplied: Prisma.Decimal
      confirmedAt: Date | null
      failedReason: string | null
      failedAt: Date | null
      rejectedReason: string | null
      rejectedAt: Date | null
      cashoutSnapshot: Prisma.JsonValue | null
      correlationId: string | null
      requestIp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cashoutRecord"]>
    composites: {}
  }

  type CashoutRecordGetPayload<S extends boolean | null | undefined | CashoutRecordDefaultArgs> = $Result.GetResult<Prisma.$CashoutRecordPayload, S>

  type CashoutRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CashoutRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CashoutRecordCountAggregateInputType | true
    }

  export interface CashoutRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CashoutRecord'], meta: { name: 'CashoutRecord' } }
    /**
     * Find zero or one CashoutRecord that matches the filter.
     * @param {CashoutRecordFindUniqueArgs} args - Arguments to find a CashoutRecord
     * @example
     * // Get one CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CashoutRecordFindUniqueArgs>(args: SelectSubset<T, CashoutRecordFindUniqueArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CashoutRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CashoutRecordFindUniqueOrThrowArgs} args - Arguments to find a CashoutRecord
     * @example
     * // Get one CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CashoutRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CashoutRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CashoutRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordFindFirstArgs} args - Arguments to find a CashoutRecord
     * @example
     * // Get one CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CashoutRecordFindFirstArgs>(args?: SelectSubset<T, CashoutRecordFindFirstArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CashoutRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordFindFirstOrThrowArgs} args - Arguments to find a CashoutRecord
     * @example
     * // Get one CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CashoutRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CashoutRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CashoutRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CashoutRecords
     * const cashoutRecords = await prisma.cashoutRecord.findMany()
     * 
     * // Get first 10 CashoutRecords
     * const cashoutRecords = await prisma.cashoutRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashoutRecordWithIdOnly = await prisma.cashoutRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CashoutRecordFindManyArgs>(args?: SelectSubset<T, CashoutRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CashoutRecord.
     * @param {CashoutRecordCreateArgs} args - Arguments to create a CashoutRecord.
     * @example
     * // Create one CashoutRecord
     * const CashoutRecord = await prisma.cashoutRecord.create({
     *   data: {
     *     // ... data to create a CashoutRecord
     *   }
     * })
     * 
     */
    create<T extends CashoutRecordCreateArgs>(args: SelectSubset<T, CashoutRecordCreateArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CashoutRecords.
     * @param {CashoutRecordCreateManyArgs} args - Arguments to create many CashoutRecords.
     * @example
     * // Create many CashoutRecords
     * const cashoutRecord = await prisma.cashoutRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CashoutRecordCreateManyArgs>(args?: SelectSubset<T, CashoutRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CashoutRecords and returns the data saved in the database.
     * @param {CashoutRecordCreateManyAndReturnArgs} args - Arguments to create many CashoutRecords.
     * @example
     * // Create many CashoutRecords
     * const cashoutRecord = await prisma.cashoutRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CashoutRecords and only return the `id`
     * const cashoutRecordWithIdOnly = await prisma.cashoutRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CashoutRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, CashoutRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CashoutRecord.
     * @param {CashoutRecordDeleteArgs} args - Arguments to delete one CashoutRecord.
     * @example
     * // Delete one CashoutRecord
     * const CashoutRecord = await prisma.cashoutRecord.delete({
     *   where: {
     *     // ... filter to delete one CashoutRecord
     *   }
     * })
     * 
     */
    delete<T extends CashoutRecordDeleteArgs>(args: SelectSubset<T, CashoutRecordDeleteArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CashoutRecord.
     * @param {CashoutRecordUpdateArgs} args - Arguments to update one CashoutRecord.
     * @example
     * // Update one CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CashoutRecordUpdateArgs>(args: SelectSubset<T, CashoutRecordUpdateArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CashoutRecords.
     * @param {CashoutRecordDeleteManyArgs} args - Arguments to filter CashoutRecords to delete.
     * @example
     * // Delete a few CashoutRecords
     * const { count } = await prisma.cashoutRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CashoutRecordDeleteManyArgs>(args?: SelectSubset<T, CashoutRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CashoutRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CashoutRecords
     * const cashoutRecord = await prisma.cashoutRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CashoutRecordUpdateManyArgs>(args: SelectSubset<T, CashoutRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CashoutRecord.
     * @param {CashoutRecordUpsertArgs} args - Arguments to update or create a CashoutRecord.
     * @example
     * // Update or create a CashoutRecord
     * const cashoutRecord = await prisma.cashoutRecord.upsert({
     *   create: {
     *     // ... data to create a CashoutRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CashoutRecord we want to update
     *   }
     * })
     */
    upsert<T extends CashoutRecordUpsertArgs>(args: SelectSubset<T, CashoutRecordUpsertArgs<ExtArgs>>): Prisma__CashoutRecordClient<$Result.GetResult<Prisma.$CashoutRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CashoutRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordCountArgs} args - Arguments to filter CashoutRecords to count.
     * @example
     * // Count the number of CashoutRecords
     * const count = await prisma.cashoutRecord.count({
     *   where: {
     *     // ... the filter for the CashoutRecords we want to count
     *   }
     * })
    **/
    count<T extends CashoutRecordCountArgs>(
      args?: Subset<T, CashoutRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashoutRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CashoutRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CashoutRecordAggregateArgs>(args: Subset<T, CashoutRecordAggregateArgs>): Prisma.PrismaPromise<GetCashoutRecordAggregateType<T>>

    /**
     * Group by CashoutRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashoutRecordGroupByArgs} args - Group by arguments.
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
      T extends CashoutRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CashoutRecordGroupByArgs['orderBy'] }
        : { orderBy?: CashoutRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CashoutRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashoutRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CashoutRecord model
   */
  readonly fields: CashoutRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CashoutRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CashoutRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bet<T extends BetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BetDefaultArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CashoutRecord model
   */ 
  interface CashoutRecordFieldRefs {
    readonly id: FieldRef<"CashoutRecord", 'String'>
    readonly betId: FieldRef<"CashoutRecord", 'String'>
    readonly userId: FieldRef<"CashoutRecord", 'String'>
    readonly walletId: FieldRef<"CashoutRecord", 'String'>
    readonly transactionId: FieldRef<"CashoutRecord", 'String'>
    readonly cashoutType: FieldRef<"CashoutRecord", 'CashoutType'>
    readonly status: FieldRef<"CashoutRecord", 'CashoutStatus'>
    readonly stakeBefore: FieldRef<"CashoutRecord", 'Decimal'>
    readonly stakeAfter: FieldRef<"CashoutRecord", 'Decimal'>
    readonly stakeCashedOut: FieldRef<"CashoutRecord", 'Decimal'>
    readonly amountRequested: FieldRef<"CashoutRecord", 'Decimal'>
    readonly amountFee: FieldRef<"CashoutRecord", 'Decimal'>
    readonly amountNetToUser: FieldRef<"CashoutRecord", 'Decimal'>
    readonly oddsAtCashout: FieldRef<"CashoutRecord", 'Decimal'>
    readonly probabilityImpliedAtCashout: FieldRef<"CashoutRecord", 'Decimal'>
    readonly houseEdgePercentApplied: FieldRef<"CashoutRecord", 'Decimal'>
    readonly confirmedAt: FieldRef<"CashoutRecord", 'DateTime'>
    readonly failedReason: FieldRef<"CashoutRecord", 'String'>
    readonly failedAt: FieldRef<"CashoutRecord", 'DateTime'>
    readonly rejectedReason: FieldRef<"CashoutRecord", 'String'>
    readonly rejectedAt: FieldRef<"CashoutRecord", 'DateTime'>
    readonly cashoutSnapshot: FieldRef<"CashoutRecord", 'Json'>
    readonly correlationId: FieldRef<"CashoutRecord", 'String'>
    readonly requestIp: FieldRef<"CashoutRecord", 'String'>
    readonly createdAt: FieldRef<"CashoutRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CashoutRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CashoutRecord findUnique
   */
  export type CashoutRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter, which CashoutRecord to fetch.
     */
    where: CashoutRecordWhereUniqueInput
  }

  /**
   * CashoutRecord findUniqueOrThrow
   */
  export type CashoutRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter, which CashoutRecord to fetch.
     */
    where: CashoutRecordWhereUniqueInput
  }

  /**
   * CashoutRecord findFirst
   */
  export type CashoutRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter, which CashoutRecord to fetch.
     */
    where?: CashoutRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashoutRecords to fetch.
     */
    orderBy?: CashoutRecordOrderByWithRelationInput | CashoutRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashoutRecords.
     */
    cursor?: CashoutRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashoutRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashoutRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashoutRecords.
     */
    distinct?: CashoutRecordScalarFieldEnum | CashoutRecordScalarFieldEnum[]
  }

  /**
   * CashoutRecord findFirstOrThrow
   */
  export type CashoutRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter, which CashoutRecord to fetch.
     */
    where?: CashoutRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashoutRecords to fetch.
     */
    orderBy?: CashoutRecordOrderByWithRelationInput | CashoutRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CashoutRecords.
     */
    cursor?: CashoutRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashoutRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashoutRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CashoutRecords.
     */
    distinct?: CashoutRecordScalarFieldEnum | CashoutRecordScalarFieldEnum[]
  }

  /**
   * CashoutRecord findMany
   */
  export type CashoutRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter, which CashoutRecords to fetch.
     */
    where?: CashoutRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CashoutRecords to fetch.
     */
    orderBy?: CashoutRecordOrderByWithRelationInput | CashoutRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CashoutRecords.
     */
    cursor?: CashoutRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CashoutRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CashoutRecords.
     */
    skip?: number
    distinct?: CashoutRecordScalarFieldEnum | CashoutRecordScalarFieldEnum[]
  }

  /**
   * CashoutRecord create
   */
  export type CashoutRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CashoutRecord.
     */
    data: XOR<CashoutRecordCreateInput, CashoutRecordUncheckedCreateInput>
  }

  /**
   * CashoutRecord createMany
   */
  export type CashoutRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CashoutRecords.
     */
    data: CashoutRecordCreateManyInput | CashoutRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CashoutRecord createManyAndReturn
   */
  export type CashoutRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CashoutRecords.
     */
    data: CashoutRecordCreateManyInput | CashoutRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CashoutRecord update
   */
  export type CashoutRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CashoutRecord.
     */
    data: XOR<CashoutRecordUpdateInput, CashoutRecordUncheckedUpdateInput>
    /**
     * Choose, which CashoutRecord to update.
     */
    where: CashoutRecordWhereUniqueInput
  }

  /**
   * CashoutRecord updateMany
   */
  export type CashoutRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CashoutRecords.
     */
    data: XOR<CashoutRecordUpdateManyMutationInput, CashoutRecordUncheckedUpdateManyInput>
    /**
     * Filter which CashoutRecords to update
     */
    where?: CashoutRecordWhereInput
  }

  /**
   * CashoutRecord upsert
   */
  export type CashoutRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CashoutRecord to update in case it exists.
     */
    where: CashoutRecordWhereUniqueInput
    /**
     * In case the CashoutRecord found by the `where` argument doesn't exist, create a new CashoutRecord with this data.
     */
    create: XOR<CashoutRecordCreateInput, CashoutRecordUncheckedCreateInput>
    /**
     * In case the CashoutRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CashoutRecordUpdateInput, CashoutRecordUncheckedUpdateInput>
  }

  /**
   * CashoutRecord delete
   */
  export type CashoutRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
    /**
     * Filter which CashoutRecord to delete.
     */
    where: CashoutRecordWhereUniqueInput
  }

  /**
   * CashoutRecord deleteMany
   */
  export type CashoutRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CashoutRecords to delete
     */
    where?: CashoutRecordWhereInput
  }

  /**
   * CashoutRecord without action
   */
  export type CashoutRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashoutRecord
     */
    select?: CashoutRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CashoutRecordInclude<ExtArgs> | null
  }


  /**
   * Model BetSettlementLog
   */

  export type AggregateBetSettlementLog = {
    _count: BetSettlementLogCountAggregateOutputType | null
    _avg: BetSettlementLogAvgAggregateOutputType | null
    _sum: BetSettlementLogSumAggregateOutputType | null
    _min: BetSettlementLogMinAggregateOutputType | null
    _max: BetSettlementLogMaxAggregateOutputType | null
  }

  export type BetSettlementLogAvgAggregateOutputType = {
    actualReturnBefore: Decimal | null
    actualReturnAfter: Decimal | null
  }

  export type BetSettlementLogSumAggregateOutputType = {
    actualReturnBefore: Decimal | null
    actualReturnAfter: Decimal | null
  }

  export type BetSettlementLogMinAggregateOutputType = {
    id: string | null
    betId: string | null
    statusBefore: $Enums.BetStatus | null
    statusAfter: $Enums.BetStatus | null
    settlementSource: string | null
    settledBy: string | null
    actualReturnBefore: Decimal | null
    actualReturnAfter: Decimal | null
    reason: string | null
    note: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type BetSettlementLogMaxAggregateOutputType = {
    id: string | null
    betId: string | null
    statusBefore: $Enums.BetStatus | null
    statusAfter: $Enums.BetStatus | null
    settlementSource: string | null
    settledBy: string | null
    actualReturnBefore: Decimal | null
    actualReturnAfter: Decimal | null
    reason: string | null
    note: string | null
    correlationId: string | null
    createdAt: Date | null
  }

  export type BetSettlementLogCountAggregateOutputType = {
    id: number
    betId: number
    statusBefore: number
    statusAfter: number
    settlementSource: number
    settledBy: number
    actualReturnBefore: number
    actualReturnAfter: number
    selectionsResults: number
    reason: number
    note: number
    correlationId: number
    createdAt: number
    _all: number
  }


  export type BetSettlementLogAvgAggregateInputType = {
    actualReturnBefore?: true
    actualReturnAfter?: true
  }

  export type BetSettlementLogSumAggregateInputType = {
    actualReturnBefore?: true
    actualReturnAfter?: true
  }

  export type BetSettlementLogMinAggregateInputType = {
    id?: true
    betId?: true
    statusBefore?: true
    statusAfter?: true
    settlementSource?: true
    settledBy?: true
    actualReturnBefore?: true
    actualReturnAfter?: true
    reason?: true
    note?: true
    correlationId?: true
    createdAt?: true
  }

  export type BetSettlementLogMaxAggregateInputType = {
    id?: true
    betId?: true
    statusBefore?: true
    statusAfter?: true
    settlementSource?: true
    settledBy?: true
    actualReturnBefore?: true
    actualReturnAfter?: true
    reason?: true
    note?: true
    correlationId?: true
    createdAt?: true
  }

  export type BetSettlementLogCountAggregateInputType = {
    id?: true
    betId?: true
    statusBefore?: true
    statusAfter?: true
    settlementSource?: true
    settledBy?: true
    actualReturnBefore?: true
    actualReturnAfter?: true
    selectionsResults?: true
    reason?: true
    note?: true
    correlationId?: true
    createdAt?: true
    _all?: true
  }

  export type BetSettlementLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSettlementLog to aggregate.
     */
    where?: BetSettlementLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSettlementLogs to fetch.
     */
    orderBy?: BetSettlementLogOrderByWithRelationInput | BetSettlementLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetSettlementLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSettlementLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSettlementLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetSettlementLogs
    **/
    _count?: true | BetSettlementLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetSettlementLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSettlementLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetSettlementLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetSettlementLogMaxAggregateInputType
  }

  export type GetBetSettlementLogAggregateType<T extends BetSettlementLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBetSettlementLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetSettlementLog[P]>
      : GetScalarType<T[P], AggregateBetSettlementLog[P]>
  }




  export type BetSettlementLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetSettlementLogWhereInput
    orderBy?: BetSettlementLogOrderByWithAggregationInput | BetSettlementLogOrderByWithAggregationInput[]
    by: BetSettlementLogScalarFieldEnum[] | BetSettlementLogScalarFieldEnum
    having?: BetSettlementLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetSettlementLogCountAggregateInputType | true
    _avg?: BetSettlementLogAvgAggregateInputType
    _sum?: BetSettlementLogSumAggregateInputType
    _min?: BetSettlementLogMinAggregateInputType
    _max?: BetSettlementLogMaxAggregateInputType
  }

  export type BetSettlementLogGroupByOutputType = {
    id: string
    betId: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy: string | null
    actualReturnBefore: Decimal | null
    actualReturnAfter: Decimal | null
    selectionsResults: JsonValue | null
    reason: string | null
    note: string | null
    correlationId: string | null
    createdAt: Date
    _count: BetSettlementLogCountAggregateOutputType | null
    _avg: BetSettlementLogAvgAggregateOutputType | null
    _sum: BetSettlementLogSumAggregateOutputType | null
    _min: BetSettlementLogMinAggregateOutputType | null
    _max: BetSettlementLogMaxAggregateOutputType | null
  }

  type GetBetSettlementLogGroupByPayload<T extends BetSettlementLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetSettlementLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetSettlementLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetSettlementLogGroupByOutputType[P]>
            : GetScalarType<T[P], BetSettlementLogGroupByOutputType[P]>
        }
      >
    >


  export type BetSettlementLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    settlementSource?: boolean
    settledBy?: boolean
    actualReturnBefore?: boolean
    actualReturnAfter?: boolean
    selectionsResults?: boolean
    reason?: boolean
    note?: boolean
    correlationId?: boolean
    createdAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betSettlementLog"]>

  export type BetSettlementLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    settlementSource?: boolean
    settledBy?: boolean
    actualReturnBefore?: boolean
    actualReturnAfter?: boolean
    selectionsResults?: boolean
    reason?: boolean
    note?: boolean
    correlationId?: boolean
    createdAt?: boolean
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["betSettlementLog"]>

  export type BetSettlementLogSelectScalar = {
    id?: boolean
    betId?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    settlementSource?: boolean
    settledBy?: boolean
    actualReturnBefore?: boolean
    actualReturnAfter?: boolean
    selectionsResults?: boolean
    reason?: boolean
    note?: boolean
    correlationId?: boolean
    createdAt?: boolean
  }

  export type BetSettlementLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }
  export type BetSettlementLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bet?: boolean | BetDefaultArgs<ExtArgs>
  }

  export type $BetSettlementLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetSettlementLog"
    objects: {
      bet: Prisma.$BetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      betId: string
      statusBefore: $Enums.BetStatus
      statusAfter: $Enums.BetStatus
      settlementSource: string
      settledBy: string | null
      actualReturnBefore: Prisma.Decimal | null
      actualReturnAfter: Prisma.Decimal | null
      selectionsResults: Prisma.JsonValue | null
      reason: string | null
      note: string | null
      correlationId: string | null
      createdAt: Date
    }, ExtArgs["result"]["betSettlementLog"]>
    composites: {}
  }

  type BetSettlementLogGetPayload<S extends boolean | null | undefined | BetSettlementLogDefaultArgs> = $Result.GetResult<Prisma.$BetSettlementLogPayload, S>

  type BetSettlementLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetSettlementLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetSettlementLogCountAggregateInputType | true
    }

  export interface BetSettlementLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetSettlementLog'], meta: { name: 'BetSettlementLog' } }
    /**
     * Find zero or one BetSettlementLog that matches the filter.
     * @param {BetSettlementLogFindUniqueArgs} args - Arguments to find a BetSettlementLog
     * @example
     * // Get one BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetSettlementLogFindUniqueArgs>(args: SelectSubset<T, BetSettlementLogFindUniqueArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BetSettlementLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetSettlementLogFindUniqueOrThrowArgs} args - Arguments to find a BetSettlementLog
     * @example
     * // Get one BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetSettlementLogFindUniqueOrThrowArgs>(args: SelectSubset<T, BetSettlementLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BetSettlementLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogFindFirstArgs} args - Arguments to find a BetSettlementLog
     * @example
     * // Get one BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetSettlementLogFindFirstArgs>(args?: SelectSubset<T, BetSettlementLogFindFirstArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BetSettlementLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogFindFirstOrThrowArgs} args - Arguments to find a BetSettlementLog
     * @example
     * // Get one BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetSettlementLogFindFirstOrThrowArgs>(args?: SelectSubset<T, BetSettlementLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BetSettlementLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetSettlementLogs
     * const betSettlementLogs = await prisma.betSettlementLog.findMany()
     * 
     * // Get first 10 BetSettlementLogs
     * const betSettlementLogs = await prisma.betSettlementLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betSettlementLogWithIdOnly = await prisma.betSettlementLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetSettlementLogFindManyArgs>(args?: SelectSubset<T, BetSettlementLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BetSettlementLog.
     * @param {BetSettlementLogCreateArgs} args - Arguments to create a BetSettlementLog.
     * @example
     * // Create one BetSettlementLog
     * const BetSettlementLog = await prisma.betSettlementLog.create({
     *   data: {
     *     // ... data to create a BetSettlementLog
     *   }
     * })
     * 
     */
    create<T extends BetSettlementLogCreateArgs>(args: SelectSubset<T, BetSettlementLogCreateArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BetSettlementLogs.
     * @param {BetSettlementLogCreateManyArgs} args - Arguments to create many BetSettlementLogs.
     * @example
     * // Create many BetSettlementLogs
     * const betSettlementLog = await prisma.betSettlementLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetSettlementLogCreateManyArgs>(args?: SelectSubset<T, BetSettlementLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetSettlementLogs and returns the data saved in the database.
     * @param {BetSettlementLogCreateManyAndReturnArgs} args - Arguments to create many BetSettlementLogs.
     * @example
     * // Create many BetSettlementLogs
     * const betSettlementLog = await prisma.betSettlementLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetSettlementLogs and only return the `id`
     * const betSettlementLogWithIdOnly = await prisma.betSettlementLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetSettlementLogCreateManyAndReturnArgs>(args?: SelectSubset<T, BetSettlementLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BetSettlementLog.
     * @param {BetSettlementLogDeleteArgs} args - Arguments to delete one BetSettlementLog.
     * @example
     * // Delete one BetSettlementLog
     * const BetSettlementLog = await prisma.betSettlementLog.delete({
     *   where: {
     *     // ... filter to delete one BetSettlementLog
     *   }
     * })
     * 
     */
    delete<T extends BetSettlementLogDeleteArgs>(args: SelectSubset<T, BetSettlementLogDeleteArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BetSettlementLog.
     * @param {BetSettlementLogUpdateArgs} args - Arguments to update one BetSettlementLog.
     * @example
     * // Update one BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetSettlementLogUpdateArgs>(args: SelectSubset<T, BetSettlementLogUpdateArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BetSettlementLogs.
     * @param {BetSettlementLogDeleteManyArgs} args - Arguments to filter BetSettlementLogs to delete.
     * @example
     * // Delete a few BetSettlementLogs
     * const { count } = await prisma.betSettlementLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetSettlementLogDeleteManyArgs>(args?: SelectSubset<T, BetSettlementLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetSettlementLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetSettlementLogs
     * const betSettlementLog = await prisma.betSettlementLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetSettlementLogUpdateManyArgs>(args: SelectSubset<T, BetSettlementLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetSettlementLog.
     * @param {BetSettlementLogUpsertArgs} args - Arguments to update or create a BetSettlementLog.
     * @example
     * // Update or create a BetSettlementLog
     * const betSettlementLog = await prisma.betSettlementLog.upsert({
     *   create: {
     *     // ... data to create a BetSettlementLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetSettlementLog we want to update
     *   }
     * })
     */
    upsert<T extends BetSettlementLogUpsertArgs>(args: SelectSubset<T, BetSettlementLogUpsertArgs<ExtArgs>>): Prisma__BetSettlementLogClient<$Result.GetResult<Prisma.$BetSettlementLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BetSettlementLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogCountArgs} args - Arguments to filter BetSettlementLogs to count.
     * @example
     * // Count the number of BetSettlementLogs
     * const count = await prisma.betSettlementLog.count({
     *   where: {
     *     // ... the filter for the BetSettlementLogs we want to count
     *   }
     * })
    **/
    count<T extends BetSettlementLogCountArgs>(
      args?: Subset<T, BetSettlementLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetSettlementLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetSettlementLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetSettlementLogAggregateArgs>(args: Subset<T, BetSettlementLogAggregateArgs>): Prisma.PrismaPromise<GetBetSettlementLogAggregateType<T>>

    /**
     * Group by BetSettlementLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSettlementLogGroupByArgs} args - Group by arguments.
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
      T extends BetSettlementLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetSettlementLogGroupByArgs['orderBy'] }
        : { orderBy?: BetSettlementLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetSettlementLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetSettlementLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetSettlementLog model
   */
  readonly fields: BetSettlementLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetSettlementLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetSettlementLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bet<T extends BetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BetDefaultArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BetSettlementLog model
   */ 
  interface BetSettlementLogFieldRefs {
    readonly id: FieldRef<"BetSettlementLog", 'String'>
    readonly betId: FieldRef<"BetSettlementLog", 'String'>
    readonly statusBefore: FieldRef<"BetSettlementLog", 'BetStatus'>
    readonly statusAfter: FieldRef<"BetSettlementLog", 'BetStatus'>
    readonly settlementSource: FieldRef<"BetSettlementLog", 'String'>
    readonly settledBy: FieldRef<"BetSettlementLog", 'String'>
    readonly actualReturnBefore: FieldRef<"BetSettlementLog", 'Decimal'>
    readonly actualReturnAfter: FieldRef<"BetSettlementLog", 'Decimal'>
    readonly selectionsResults: FieldRef<"BetSettlementLog", 'Json'>
    readonly reason: FieldRef<"BetSettlementLog", 'String'>
    readonly note: FieldRef<"BetSettlementLog", 'String'>
    readonly correlationId: FieldRef<"BetSettlementLog", 'String'>
    readonly createdAt: FieldRef<"BetSettlementLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetSettlementLog findUnique
   */
  export type BetSettlementLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter, which BetSettlementLog to fetch.
     */
    where: BetSettlementLogWhereUniqueInput
  }

  /**
   * BetSettlementLog findUniqueOrThrow
   */
  export type BetSettlementLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter, which BetSettlementLog to fetch.
     */
    where: BetSettlementLogWhereUniqueInput
  }

  /**
   * BetSettlementLog findFirst
   */
  export type BetSettlementLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter, which BetSettlementLog to fetch.
     */
    where?: BetSettlementLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSettlementLogs to fetch.
     */
    orderBy?: BetSettlementLogOrderByWithRelationInput | BetSettlementLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSettlementLogs.
     */
    cursor?: BetSettlementLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSettlementLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSettlementLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSettlementLogs.
     */
    distinct?: BetSettlementLogScalarFieldEnum | BetSettlementLogScalarFieldEnum[]
  }

  /**
   * BetSettlementLog findFirstOrThrow
   */
  export type BetSettlementLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter, which BetSettlementLog to fetch.
     */
    where?: BetSettlementLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSettlementLogs to fetch.
     */
    orderBy?: BetSettlementLogOrderByWithRelationInput | BetSettlementLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSettlementLogs.
     */
    cursor?: BetSettlementLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSettlementLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSettlementLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSettlementLogs.
     */
    distinct?: BetSettlementLogScalarFieldEnum | BetSettlementLogScalarFieldEnum[]
  }

  /**
   * BetSettlementLog findMany
   */
  export type BetSettlementLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter, which BetSettlementLogs to fetch.
     */
    where?: BetSettlementLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSettlementLogs to fetch.
     */
    orderBy?: BetSettlementLogOrderByWithRelationInput | BetSettlementLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetSettlementLogs.
     */
    cursor?: BetSettlementLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSettlementLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSettlementLogs.
     */
    skip?: number
    distinct?: BetSettlementLogScalarFieldEnum | BetSettlementLogScalarFieldEnum[]
  }

  /**
   * BetSettlementLog create
   */
  export type BetSettlementLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * The data needed to create a BetSettlementLog.
     */
    data: XOR<BetSettlementLogCreateInput, BetSettlementLogUncheckedCreateInput>
  }

  /**
   * BetSettlementLog createMany
   */
  export type BetSettlementLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetSettlementLogs.
     */
    data: BetSettlementLogCreateManyInput | BetSettlementLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetSettlementLog createManyAndReturn
   */
  export type BetSettlementLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BetSettlementLogs.
     */
    data: BetSettlementLogCreateManyInput | BetSettlementLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BetSettlementLog update
   */
  export type BetSettlementLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * The data needed to update a BetSettlementLog.
     */
    data: XOR<BetSettlementLogUpdateInput, BetSettlementLogUncheckedUpdateInput>
    /**
     * Choose, which BetSettlementLog to update.
     */
    where: BetSettlementLogWhereUniqueInput
  }

  /**
   * BetSettlementLog updateMany
   */
  export type BetSettlementLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetSettlementLogs.
     */
    data: XOR<BetSettlementLogUpdateManyMutationInput, BetSettlementLogUncheckedUpdateManyInput>
    /**
     * Filter which BetSettlementLogs to update
     */
    where?: BetSettlementLogWhereInput
  }

  /**
   * BetSettlementLog upsert
   */
  export type BetSettlementLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * The filter to search for the BetSettlementLog to update in case it exists.
     */
    where: BetSettlementLogWhereUniqueInput
    /**
     * In case the BetSettlementLog found by the `where` argument doesn't exist, create a new BetSettlementLog with this data.
     */
    create: XOR<BetSettlementLogCreateInput, BetSettlementLogUncheckedCreateInput>
    /**
     * In case the BetSettlementLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetSettlementLogUpdateInput, BetSettlementLogUncheckedUpdateInput>
  }

  /**
   * BetSettlementLog delete
   */
  export type BetSettlementLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
    /**
     * Filter which BetSettlementLog to delete.
     */
    where: BetSettlementLogWhereUniqueInput
  }

  /**
   * BetSettlementLog deleteMany
   */
  export type BetSettlementLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSettlementLogs to delete
     */
    where?: BetSettlementLogWhereInput
  }

  /**
   * BetSettlementLog without action
   */
  export type BetSettlementLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSettlementLog
     */
    select?: BetSettlementLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetSettlementLogInclude<ExtArgs> | null
  }


  /**
   * Model BetSlipDraft
   */

  export type AggregateBetSlipDraft = {
    _count: BetSlipDraftCountAggregateOutputType | null
    _avg: BetSlipDraftAvgAggregateOutputType | null
    _sum: BetSlipDraftSumAggregateOutputType | null
    _min: BetSlipDraftMinAggregateOutputType | null
    _max: BetSlipDraftMaxAggregateOutputType | null
  }

  export type BetSlipDraftAvgAggregateOutputType = {
    stakeAmount: Decimal | null
    stakeBonusUsed: Decimal | null
  }

  export type BetSlipDraftSumAggregateOutputType = {
    stakeAmount: Decimal | null
    stakeBonusUsed: Decimal | null
  }

  export type BetSlipDraftMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    stakeAmount: Decimal | null
    stakeBonusUsed: Decimal | null
    acceptanceType: string | null
    cashoutEnabled: boolean | null
    promocode: string | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    expiresAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type BetSlipDraftMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    stakeAmount: Decimal | null
    stakeBonusUsed: Decimal | null
    acceptanceType: string | null
    cashoutEnabled: boolean | null
    promocode: string | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    expiresAt: Date | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type BetSlipDraftCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    selections: number
    stakeAmount: number
    stakeBonusUsed: number
    acceptanceType: number
    cashoutEnabled: number
    promocode: number
    bonusIdUsed: number
    freebetIdUsed: number
    expiresAt: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type BetSlipDraftAvgAggregateInputType = {
    stakeAmount?: true
    stakeBonusUsed?: true
  }

  export type BetSlipDraftSumAggregateInputType = {
    stakeAmount?: true
    stakeBonusUsed?: true
  }

  export type BetSlipDraftMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    stakeAmount?: true
    stakeBonusUsed?: true
    acceptanceType?: true
    cashoutEnabled?: true
    promocode?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    expiresAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type BetSlipDraftMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    stakeAmount?: true
    stakeBonusUsed?: true
    acceptanceType?: true
    cashoutEnabled?: true
    promocode?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    expiresAt?: true
    updatedAt?: true
    createdAt?: true
  }

  export type BetSlipDraftCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    selections?: true
    stakeAmount?: true
    stakeBonusUsed?: true
    acceptanceType?: true
    cashoutEnabled?: true
    promocode?: true
    bonusIdUsed?: true
    freebetIdUsed?: true
    expiresAt?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type BetSlipDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSlipDraft to aggregate.
     */
    where?: BetSlipDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSlipDrafts to fetch.
     */
    orderBy?: BetSlipDraftOrderByWithRelationInput | BetSlipDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetSlipDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSlipDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSlipDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetSlipDrafts
    **/
    _count?: true | BetSlipDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetSlipDraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSlipDraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetSlipDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetSlipDraftMaxAggregateInputType
  }

  export type GetBetSlipDraftAggregateType<T extends BetSlipDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateBetSlipDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetSlipDraft[P]>
      : GetScalarType<T[P], AggregateBetSlipDraft[P]>
  }




  export type BetSlipDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetSlipDraftWhereInput
    orderBy?: BetSlipDraftOrderByWithAggregationInput | BetSlipDraftOrderByWithAggregationInput[]
    by: BetSlipDraftScalarFieldEnum[] | BetSlipDraftScalarFieldEnum
    having?: BetSlipDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetSlipDraftCountAggregateInputType | true
    _avg?: BetSlipDraftAvgAggregateInputType
    _sum?: BetSlipDraftSumAggregateInputType
    _min?: BetSlipDraftMinAggregateInputType
    _max?: BetSlipDraftMaxAggregateInputType
  }

  export type BetSlipDraftGroupByOutputType = {
    id: string
    sessionId: string
    userId: string | null
    selections: JsonValue
    stakeAmount: Decimal | null
    stakeBonusUsed: Decimal | null
    acceptanceType: string | null
    cashoutEnabled: boolean | null
    promocode: string | null
    bonusIdUsed: string | null
    freebetIdUsed: string | null
    expiresAt: Date | null
    updatedAt: Date | null
    createdAt: Date
    _count: BetSlipDraftCountAggregateOutputType | null
    _avg: BetSlipDraftAvgAggregateOutputType | null
    _sum: BetSlipDraftSumAggregateOutputType | null
    _min: BetSlipDraftMinAggregateOutputType | null
    _max: BetSlipDraftMaxAggregateOutputType | null
  }

  type GetBetSlipDraftGroupByPayload<T extends BetSlipDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetSlipDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetSlipDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetSlipDraftGroupByOutputType[P]>
            : GetScalarType<T[P], BetSlipDraftGroupByOutputType[P]>
        }
      >
    >


  export type BetSlipDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    selections?: boolean
    stakeAmount?: boolean
    stakeBonusUsed?: boolean
    acceptanceType?: boolean
    cashoutEnabled?: boolean
    promocode?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["betSlipDraft"]>

  export type BetSlipDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    selections?: boolean
    stakeAmount?: boolean
    stakeBonusUsed?: boolean
    acceptanceType?: boolean
    cashoutEnabled?: boolean
    promocode?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["betSlipDraft"]>

  export type BetSlipDraftSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    selections?: boolean
    stakeAmount?: boolean
    stakeBonusUsed?: boolean
    acceptanceType?: boolean
    cashoutEnabled?: boolean
    promocode?: boolean
    bonusIdUsed?: boolean
    freebetIdUsed?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }


  export type $BetSlipDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetSlipDraft"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string | null
      selections: Prisma.JsonValue
      stakeAmount: Prisma.Decimal | null
      stakeBonusUsed: Prisma.Decimal | null
      acceptanceType: string | null
      cashoutEnabled: boolean | null
      promocode: string | null
      bonusIdUsed: string | null
      freebetIdUsed: string | null
      expiresAt: Date | null
      updatedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["betSlipDraft"]>
    composites: {}
  }

  type BetSlipDraftGetPayload<S extends boolean | null | undefined | BetSlipDraftDefaultArgs> = $Result.GetResult<Prisma.$BetSlipDraftPayload, S>

  type BetSlipDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetSlipDraftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetSlipDraftCountAggregateInputType | true
    }

  export interface BetSlipDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetSlipDraft'], meta: { name: 'BetSlipDraft' } }
    /**
     * Find zero or one BetSlipDraft that matches the filter.
     * @param {BetSlipDraftFindUniqueArgs} args - Arguments to find a BetSlipDraft
     * @example
     * // Get one BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetSlipDraftFindUniqueArgs>(args: SelectSubset<T, BetSlipDraftFindUniqueArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BetSlipDraft that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetSlipDraftFindUniqueOrThrowArgs} args - Arguments to find a BetSlipDraft
     * @example
     * // Get one BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetSlipDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, BetSlipDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BetSlipDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftFindFirstArgs} args - Arguments to find a BetSlipDraft
     * @example
     * // Get one BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetSlipDraftFindFirstArgs>(args?: SelectSubset<T, BetSlipDraftFindFirstArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BetSlipDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftFindFirstOrThrowArgs} args - Arguments to find a BetSlipDraft
     * @example
     * // Get one BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetSlipDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, BetSlipDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BetSlipDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetSlipDrafts
     * const betSlipDrafts = await prisma.betSlipDraft.findMany()
     * 
     * // Get first 10 BetSlipDrafts
     * const betSlipDrafts = await prisma.betSlipDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betSlipDraftWithIdOnly = await prisma.betSlipDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetSlipDraftFindManyArgs>(args?: SelectSubset<T, BetSlipDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BetSlipDraft.
     * @param {BetSlipDraftCreateArgs} args - Arguments to create a BetSlipDraft.
     * @example
     * // Create one BetSlipDraft
     * const BetSlipDraft = await prisma.betSlipDraft.create({
     *   data: {
     *     // ... data to create a BetSlipDraft
     *   }
     * })
     * 
     */
    create<T extends BetSlipDraftCreateArgs>(args: SelectSubset<T, BetSlipDraftCreateArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BetSlipDrafts.
     * @param {BetSlipDraftCreateManyArgs} args - Arguments to create many BetSlipDrafts.
     * @example
     * // Create many BetSlipDrafts
     * const betSlipDraft = await prisma.betSlipDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetSlipDraftCreateManyArgs>(args?: SelectSubset<T, BetSlipDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetSlipDrafts and returns the data saved in the database.
     * @param {BetSlipDraftCreateManyAndReturnArgs} args - Arguments to create many BetSlipDrafts.
     * @example
     * // Create many BetSlipDrafts
     * const betSlipDraft = await prisma.betSlipDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetSlipDrafts and only return the `id`
     * const betSlipDraftWithIdOnly = await prisma.betSlipDraft.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetSlipDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, BetSlipDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BetSlipDraft.
     * @param {BetSlipDraftDeleteArgs} args - Arguments to delete one BetSlipDraft.
     * @example
     * // Delete one BetSlipDraft
     * const BetSlipDraft = await prisma.betSlipDraft.delete({
     *   where: {
     *     // ... filter to delete one BetSlipDraft
     *   }
     * })
     * 
     */
    delete<T extends BetSlipDraftDeleteArgs>(args: SelectSubset<T, BetSlipDraftDeleteArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BetSlipDraft.
     * @param {BetSlipDraftUpdateArgs} args - Arguments to update one BetSlipDraft.
     * @example
     * // Update one BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetSlipDraftUpdateArgs>(args: SelectSubset<T, BetSlipDraftUpdateArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BetSlipDrafts.
     * @param {BetSlipDraftDeleteManyArgs} args - Arguments to filter BetSlipDrafts to delete.
     * @example
     * // Delete a few BetSlipDrafts
     * const { count } = await prisma.betSlipDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetSlipDraftDeleteManyArgs>(args?: SelectSubset<T, BetSlipDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetSlipDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetSlipDrafts
     * const betSlipDraft = await prisma.betSlipDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetSlipDraftUpdateManyArgs>(args: SelectSubset<T, BetSlipDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetSlipDraft.
     * @param {BetSlipDraftUpsertArgs} args - Arguments to update or create a BetSlipDraft.
     * @example
     * // Update or create a BetSlipDraft
     * const betSlipDraft = await prisma.betSlipDraft.upsert({
     *   create: {
     *     // ... data to create a BetSlipDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetSlipDraft we want to update
     *   }
     * })
     */
    upsert<T extends BetSlipDraftUpsertArgs>(args: SelectSubset<T, BetSlipDraftUpsertArgs<ExtArgs>>): Prisma__BetSlipDraftClient<$Result.GetResult<Prisma.$BetSlipDraftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BetSlipDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftCountArgs} args - Arguments to filter BetSlipDrafts to count.
     * @example
     * // Count the number of BetSlipDrafts
     * const count = await prisma.betSlipDraft.count({
     *   where: {
     *     // ... the filter for the BetSlipDrafts we want to count
     *   }
     * })
    **/
    count<T extends BetSlipDraftCountArgs>(
      args?: Subset<T, BetSlipDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetSlipDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetSlipDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BetSlipDraftAggregateArgs>(args: Subset<T, BetSlipDraftAggregateArgs>): Prisma.PrismaPromise<GetBetSlipDraftAggregateType<T>>

    /**
     * Group by BetSlipDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetSlipDraftGroupByArgs} args - Group by arguments.
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
      T extends BetSlipDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetSlipDraftGroupByArgs['orderBy'] }
        : { orderBy?: BetSlipDraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BetSlipDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetSlipDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetSlipDraft model
   */
  readonly fields: BetSlipDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetSlipDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetSlipDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BetSlipDraft model
   */ 
  interface BetSlipDraftFieldRefs {
    readonly id: FieldRef<"BetSlipDraft", 'String'>
    readonly sessionId: FieldRef<"BetSlipDraft", 'String'>
    readonly userId: FieldRef<"BetSlipDraft", 'String'>
    readonly selections: FieldRef<"BetSlipDraft", 'Json'>
    readonly stakeAmount: FieldRef<"BetSlipDraft", 'Decimal'>
    readonly stakeBonusUsed: FieldRef<"BetSlipDraft", 'Decimal'>
    readonly acceptanceType: FieldRef<"BetSlipDraft", 'String'>
    readonly cashoutEnabled: FieldRef<"BetSlipDraft", 'Boolean'>
    readonly promocode: FieldRef<"BetSlipDraft", 'String'>
    readonly bonusIdUsed: FieldRef<"BetSlipDraft", 'String'>
    readonly freebetIdUsed: FieldRef<"BetSlipDraft", 'String'>
    readonly expiresAt: FieldRef<"BetSlipDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"BetSlipDraft", 'DateTime'>
    readonly createdAt: FieldRef<"BetSlipDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetSlipDraft findUnique
   */
  export type BetSlipDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter, which BetSlipDraft to fetch.
     */
    where: BetSlipDraftWhereUniqueInput
  }

  /**
   * BetSlipDraft findUniqueOrThrow
   */
  export type BetSlipDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter, which BetSlipDraft to fetch.
     */
    where: BetSlipDraftWhereUniqueInput
  }

  /**
   * BetSlipDraft findFirst
   */
  export type BetSlipDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter, which BetSlipDraft to fetch.
     */
    where?: BetSlipDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSlipDrafts to fetch.
     */
    orderBy?: BetSlipDraftOrderByWithRelationInput | BetSlipDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSlipDrafts.
     */
    cursor?: BetSlipDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSlipDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSlipDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSlipDrafts.
     */
    distinct?: BetSlipDraftScalarFieldEnum | BetSlipDraftScalarFieldEnum[]
  }

  /**
   * BetSlipDraft findFirstOrThrow
   */
  export type BetSlipDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter, which BetSlipDraft to fetch.
     */
    where?: BetSlipDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSlipDrafts to fetch.
     */
    orderBy?: BetSlipDraftOrderByWithRelationInput | BetSlipDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetSlipDrafts.
     */
    cursor?: BetSlipDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSlipDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSlipDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetSlipDrafts.
     */
    distinct?: BetSlipDraftScalarFieldEnum | BetSlipDraftScalarFieldEnum[]
  }

  /**
   * BetSlipDraft findMany
   */
  export type BetSlipDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter, which BetSlipDrafts to fetch.
     */
    where?: BetSlipDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetSlipDrafts to fetch.
     */
    orderBy?: BetSlipDraftOrderByWithRelationInput | BetSlipDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetSlipDrafts.
     */
    cursor?: BetSlipDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetSlipDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetSlipDrafts.
     */
    skip?: number
    distinct?: BetSlipDraftScalarFieldEnum | BetSlipDraftScalarFieldEnum[]
  }

  /**
   * BetSlipDraft create
   */
  export type BetSlipDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * The data needed to create a BetSlipDraft.
     */
    data: XOR<BetSlipDraftCreateInput, BetSlipDraftUncheckedCreateInput>
  }

  /**
   * BetSlipDraft createMany
   */
  export type BetSlipDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetSlipDrafts.
     */
    data: BetSlipDraftCreateManyInput | BetSlipDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetSlipDraft createManyAndReturn
   */
  export type BetSlipDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BetSlipDrafts.
     */
    data: BetSlipDraftCreateManyInput | BetSlipDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetSlipDraft update
   */
  export type BetSlipDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * The data needed to update a BetSlipDraft.
     */
    data: XOR<BetSlipDraftUpdateInput, BetSlipDraftUncheckedUpdateInput>
    /**
     * Choose, which BetSlipDraft to update.
     */
    where: BetSlipDraftWhereUniqueInput
  }

  /**
   * BetSlipDraft updateMany
   */
  export type BetSlipDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetSlipDrafts.
     */
    data: XOR<BetSlipDraftUpdateManyMutationInput, BetSlipDraftUncheckedUpdateManyInput>
    /**
     * Filter which BetSlipDrafts to update
     */
    where?: BetSlipDraftWhereInput
  }

  /**
   * BetSlipDraft upsert
   */
  export type BetSlipDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * The filter to search for the BetSlipDraft to update in case it exists.
     */
    where: BetSlipDraftWhereUniqueInput
    /**
     * In case the BetSlipDraft found by the `where` argument doesn't exist, create a new BetSlipDraft with this data.
     */
    create: XOR<BetSlipDraftCreateInput, BetSlipDraftUncheckedCreateInput>
    /**
     * In case the BetSlipDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetSlipDraftUpdateInput, BetSlipDraftUncheckedUpdateInput>
  }

  /**
   * BetSlipDraft delete
   */
  export type BetSlipDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
    /**
     * Filter which BetSlipDraft to delete.
     */
    where: BetSlipDraftWhereUniqueInput
  }

  /**
   * BetSlipDraft deleteMany
   */
  export type BetSlipDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetSlipDrafts to delete
     */
    where?: BetSlipDraftWhereInput
  }

  /**
   * BetSlipDraft without action
   */
  export type BetSlipDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetSlipDraft
     */
    select?: BetSlipDraftSelect<ExtArgs> | null
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


  export const BetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    transactionId: 'transactionId',
    externalId: 'externalId',
    betNumber: 'betNumber',
    betType: 'betType',
    systemType: 'systemType',
    status: 'status',
    selectionsCount: 'selectionsCount',
    winningSelectionsCount: 'winningSelectionsCount',
    stakeAmount: 'stakeAmount',
    stakeRealUsed: 'stakeRealUsed',
    stakeBonusUsed: 'stakeBonusUsed',
    stakeFreebetUsed: 'stakeFreebetUsed',
    totalOdds: 'totalOdds',
    oddsMultiplier: 'oddsMultiplier',
    potentialReturn: 'potentialReturn',
    potentialWin: 'potentialWin',
    maxWinCap: 'maxWinCap',
    bonusIdUsed: 'bonusIdUsed',
    freebetIdUsed: 'freebetIdUsed',
    acceptanceType: 'acceptanceType',
    acceptedOddsChangeMaxPercent: 'acceptedOddsChangeMaxPercent',
    actualOddsChangePercent: 'actualOddsChangePercent',
    cashoutAvailable: 'cashoutAvailable',
    cashoutValueCurrent: 'cashoutValueCurrent',
    cashoutValueMin: 'cashoutValueMin',
    cashoutValueMax: 'cashoutValueMax',
    cashoutEnabled: 'cashoutEnabled',
    autoCashoutValue: 'autoCashoutValue',
    autoCashoutTriggered: 'autoCashoutTriggered',
    autoCashoutAt: 'autoCashoutAt',
    partialCashoutRemainingStake: 'partialCashoutRemainingStake',
    partialCashoutTotalCashedOut: 'partialCashoutTotalCashedOut',
    placedAt: 'placedAt',
    placedIp: 'placedIp',
    placedDevice: 'placedDevice',
    placedLanguage: 'placedLanguage',
    settledAt: 'settledAt',
    settledBy: 'settledBy',
    settlementSource: 'settlementSource',
    settlementNote: 'settlementNote',
    actualReturn: 'actualReturn',
    actualWinNet: 'actualWinNet',
    actualTaxDeducted: 'actualTaxDeducted',
    oddsBoostAppliedId: 'oddsBoostAppliedId',
    combiBoostPercent: 'combiBoostPercent',
    accumulatorBonusPercent: 'accumulatorBonusPercent',
    riskFlagged: 'riskFlagged',
    riskFlags: 'riskFlags',
    riskReviewed: 'riskReviewed',
    riskReviewedAt: 'riskReviewedAt',
    riskReviewedBy: 'riskReviewedBy',
    cancelledReason: 'cancelledReason',
    cancelledAt: 'cancelledAt',
    cancelledBy: 'cancelledBy',
    correlationId: 'correlationId',
    expiresAt: 'expiresAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const BetSelectionScalarFieldEnum: {
    id: 'id',
    betId: 'betId',
    eventId: 'eventId',
    marketId: 'marketId',
    selectionId: 'selectionId',
    selectionName: 'selectionName',
    marketName: 'marketName',
    eventName: 'eventName',
    homeTeamName: 'homeTeamName',
    awayTeamName: 'awayTeamName',
    leagueName: 'leagueName',
    sportType: 'sportType',
    kickoffAt: 'kickoffAt',
    marketType: 'marketType',
    outcome: 'outcome',
    specifiers: 'specifiers',
    oddsAtPlacement: 'oddsAtPlacement',
    oddsDisplayAtPlacement: 'oddsDisplayAtPlacement',
    handicapValue: 'handicapValue',
    totalLineValue: 'totalLineValue',
    status: 'status',
    settledAt: 'settledAt',
    settledOdds: 'settledOdds',
    resultScore: 'resultScore',
    providerEventId: 'providerEventId',
    providerMarketId: 'providerMarketId',
    providerSelectionId: 'providerSelectionId',
    orderIndex: 'orderIndex',
    deletedAt: 'deletedAt'
  };

  export type BetSelectionScalarFieldEnum = (typeof BetSelectionScalarFieldEnum)[keyof typeof BetSelectionScalarFieldEnum]


  export const CashoutRecordScalarFieldEnum: {
    id: 'id',
    betId: 'betId',
    userId: 'userId',
    walletId: 'walletId',
    transactionId: 'transactionId',
    cashoutType: 'cashoutType',
    status: 'status',
    stakeBefore: 'stakeBefore',
    stakeAfter: 'stakeAfter',
    stakeCashedOut: 'stakeCashedOut',
    amountRequested: 'amountRequested',
    amountFee: 'amountFee',
    amountNetToUser: 'amountNetToUser',
    oddsAtCashout: 'oddsAtCashout',
    probabilityImpliedAtCashout: 'probabilityImpliedAtCashout',
    houseEdgePercentApplied: 'houseEdgePercentApplied',
    confirmedAt: 'confirmedAt',
    failedReason: 'failedReason',
    failedAt: 'failedAt',
    rejectedReason: 'rejectedReason',
    rejectedAt: 'rejectedAt',
    cashoutSnapshot: 'cashoutSnapshot',
    correlationId: 'correlationId',
    requestIp: 'requestIp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CashoutRecordScalarFieldEnum = (typeof CashoutRecordScalarFieldEnum)[keyof typeof CashoutRecordScalarFieldEnum]


  export const BetSettlementLogScalarFieldEnum: {
    id: 'id',
    betId: 'betId',
    statusBefore: 'statusBefore',
    statusAfter: 'statusAfter',
    settlementSource: 'settlementSource',
    settledBy: 'settledBy',
    actualReturnBefore: 'actualReturnBefore',
    actualReturnAfter: 'actualReturnAfter',
    selectionsResults: 'selectionsResults',
    reason: 'reason',
    note: 'note',
    correlationId: 'correlationId',
    createdAt: 'createdAt'
  };

  export type BetSettlementLogScalarFieldEnum = (typeof BetSettlementLogScalarFieldEnum)[keyof typeof BetSettlementLogScalarFieldEnum]


  export const BetSlipDraftScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    selections: 'selections',
    stakeAmount: 'stakeAmount',
    stakeBonusUsed: 'stakeBonusUsed',
    acceptanceType: 'acceptanceType',
    cashoutEnabled: 'cashoutEnabled',
    promocode: 'promocode',
    bonusIdUsed: 'bonusIdUsed',
    freebetIdUsed: 'freebetIdUsed',
    expiresAt: 'expiresAt',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type BetSlipDraftScalarFieldEnum = (typeof BetSlipDraftScalarFieldEnum)[keyof typeof BetSlipDraftScalarFieldEnum]


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
   * Reference to a field of type 'BetType'
   */
  export type EnumBetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetType'>
    


  /**
   * Reference to a field of type 'BetType[]'
   */
  export type ListEnumBetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetType[]'>
    


  /**
   * Reference to a field of type 'SystemBetType'
   */
  export type EnumSystemBetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemBetType'>
    


  /**
   * Reference to a field of type 'SystemBetType[]'
   */
  export type ListEnumSystemBetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemBetType[]'>
    


  /**
   * Reference to a field of type 'BetStatus'
   */
  export type EnumBetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetStatus'>
    


  /**
   * Reference to a field of type 'BetStatus[]'
   */
  export type ListEnumBetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BetAcceptanceType'
   */
  export type EnumBetAcceptanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetAcceptanceType'>
    


  /**
   * Reference to a field of type 'BetAcceptanceType[]'
   */
  export type ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetAcceptanceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'MarketType'
   */
  export type EnumMarketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketType'>
    


  /**
   * Reference to a field of type 'MarketType[]'
   */
  export type ListEnumMarketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketType[]'>
    


  /**
   * Reference to a field of type 'SelectionOutcome'
   */
  export type EnumSelectionOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionOutcome'>
    


  /**
   * Reference to a field of type 'SelectionOutcome[]'
   */
  export type ListEnumSelectionOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionOutcome[]'>
    


  /**
   * Reference to a field of type 'CashoutType'
   */
  export type EnumCashoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashoutType'>
    


  /**
   * Reference to a field of type 'CashoutType[]'
   */
  export type ListEnumCashoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashoutType[]'>
    


  /**
   * Reference to a field of type 'CashoutStatus'
   */
  export type EnumCashoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashoutStatus'>
    


  /**
   * Reference to a field of type 'CashoutStatus[]'
   */
  export type ListEnumCashoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CashoutStatus[]'>
    


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


  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: StringFilter<"Bet"> | string
    userId?: StringFilter<"Bet"> | string
    walletId?: StringFilter<"Bet"> | string
    transactionId?: StringNullableFilter<"Bet"> | string | null
    externalId?: StringNullableFilter<"Bet"> | string | null
    betNumber?: StringNullableFilter<"Bet"> | string | null
    betType?: EnumBetTypeFilter<"Bet"> | $Enums.BetType
    systemType?: EnumSystemBetTypeNullableFilter<"Bet"> | $Enums.SystemBetType | null
    status?: EnumBetStatusFilter<"Bet"> | $Enums.BetStatus
    selectionsCount?: IntFilter<"Bet"> | number
    winningSelectionsCount?: IntNullableFilter<"Bet"> | number | null
    stakeAmount?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    maxWinCap?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: StringNullableFilter<"Bet"> | string | null
    freebetIdUsed?: StringNullableFilter<"Bet"> | string | null
    acceptanceType?: EnumBetAcceptanceTypeFilter<"Bet"> | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFilter<"Bet"> | boolean
    cashoutValueCurrent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFilter<"Bet"> | boolean
    autoCashoutValue?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: BoolNullableFilter<"Bet"> | boolean | null
    autoCashoutAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    partialCashoutRemainingStake?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFilter<"Bet"> | Date | string
    placedIp?: StringNullableFilter<"Bet"> | string | null
    placedDevice?: StringNullableFilter<"Bet"> | string | null
    placedLanguage?: StringNullableFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    settledBy?: StringNullableFilter<"Bet"> | string | null
    settlementSource?: StringNullableFilter<"Bet"> | string | null
    settlementNote?: StringNullableFilter<"Bet"> | string | null
    actualReturn?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: StringNullableFilter<"Bet"> | string | null
    combiBoostPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFilter<"Bet"> | boolean
    riskFlags?: StringNullableListFilter<"Bet">
    riskReviewed?: BoolNullableFilter<"Bet"> | boolean | null
    riskReviewedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    riskReviewedBy?: StringNullableFilter<"Bet"> | string | null
    cancelledReason?: StringNullableFilter<"Bet"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    cancelledBy?: StringNullableFilter<"Bet"> | string | null
    correlationId?: StringNullableFilter<"Bet"> | string | null
    expiresAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    metadata?: JsonNullableFilter<"Bet">
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    selections?: BetSelectionListRelationFilter
    cashoutRecords?: CashoutRecordListRelationFilter
    settlementLogs?: BetSettlementLogListRelationFilter
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    betNumber?: SortOrderInput | SortOrder
    betType?: SortOrder
    systemType?: SortOrderInput | SortOrder
    status?: SortOrder
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrderInput | SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrderInput | SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrderInput | SortOrder
    bonusIdUsed?: SortOrderInput | SortOrder
    freebetIdUsed?: SortOrderInput | SortOrder
    acceptanceType?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrderInput | SortOrder
    actualOddsChangePercent?: SortOrderInput | SortOrder
    cashoutAvailable?: SortOrder
    cashoutValueCurrent?: SortOrderInput | SortOrder
    cashoutValueMin?: SortOrderInput | SortOrder
    cashoutValueMax?: SortOrderInput | SortOrder
    cashoutEnabled?: SortOrder
    autoCashoutValue?: SortOrderInput | SortOrder
    autoCashoutTriggered?: SortOrderInput | SortOrder
    autoCashoutAt?: SortOrderInput | SortOrder
    partialCashoutRemainingStake?: SortOrderInput | SortOrder
    partialCashoutTotalCashedOut?: SortOrderInput | SortOrder
    placedAt?: SortOrder
    placedIp?: SortOrderInput | SortOrder
    placedDevice?: SortOrderInput | SortOrder
    placedLanguage?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledBy?: SortOrderInput | SortOrder
    settlementSource?: SortOrderInput | SortOrder
    settlementNote?: SortOrderInput | SortOrder
    actualReturn?: SortOrderInput | SortOrder
    actualWinNet?: SortOrderInput | SortOrder
    actualTaxDeducted?: SortOrderInput | SortOrder
    oddsBoostAppliedId?: SortOrderInput | SortOrder
    combiBoostPercent?: SortOrderInput | SortOrder
    accumulatorBonusPercent?: SortOrderInput | SortOrder
    riskFlagged?: SortOrder
    riskFlags?: SortOrder
    riskReviewed?: SortOrderInput | SortOrder
    riskReviewedAt?: SortOrderInput | SortOrder
    riskReviewedBy?: SortOrderInput | SortOrder
    cancelledReason?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    selections?: BetSelectionOrderByRelationAggregateInput
    cashoutRecords?: CashoutRecordOrderByRelationAggregateInput
    settlementLogs?: BetSettlementLogOrderByRelationAggregateInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    betNumber?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    userId?: StringFilter<"Bet"> | string
    walletId?: StringFilter<"Bet"> | string
    transactionId?: StringNullableFilter<"Bet"> | string | null
    externalId?: StringNullableFilter<"Bet"> | string | null
    betType?: EnumBetTypeFilter<"Bet"> | $Enums.BetType
    systemType?: EnumSystemBetTypeNullableFilter<"Bet"> | $Enums.SystemBetType | null
    status?: EnumBetStatusFilter<"Bet"> | $Enums.BetStatus
    selectionsCount?: IntFilter<"Bet"> | number
    winningSelectionsCount?: IntNullableFilter<"Bet"> | number | null
    stakeAmount?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    maxWinCap?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: StringNullableFilter<"Bet"> | string | null
    freebetIdUsed?: StringNullableFilter<"Bet"> | string | null
    acceptanceType?: EnumBetAcceptanceTypeFilter<"Bet"> | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFilter<"Bet"> | boolean
    cashoutValueCurrent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFilter<"Bet"> | boolean
    autoCashoutValue?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: BoolNullableFilter<"Bet"> | boolean | null
    autoCashoutAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    partialCashoutRemainingStake?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFilter<"Bet"> | Date | string
    placedIp?: StringNullableFilter<"Bet"> | string | null
    placedDevice?: StringNullableFilter<"Bet"> | string | null
    placedLanguage?: StringNullableFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    settledBy?: StringNullableFilter<"Bet"> | string | null
    settlementSource?: StringNullableFilter<"Bet"> | string | null
    settlementNote?: StringNullableFilter<"Bet"> | string | null
    actualReturn?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: StringNullableFilter<"Bet"> | string | null
    combiBoostPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: DecimalNullableFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFilter<"Bet"> | boolean
    riskFlags?: StringNullableListFilter<"Bet">
    riskReviewed?: BoolNullableFilter<"Bet"> | boolean | null
    riskReviewedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    riskReviewedBy?: StringNullableFilter<"Bet"> | string | null
    cancelledReason?: StringNullableFilter<"Bet"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    cancelledBy?: StringNullableFilter<"Bet"> | string | null
    correlationId?: StringNullableFilter<"Bet"> | string | null
    expiresAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    metadata?: JsonNullableFilter<"Bet">
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    selections?: BetSelectionListRelationFilter
    cashoutRecords?: CashoutRecordListRelationFilter
    settlementLogs?: BetSettlementLogListRelationFilter
  }, "id" | "betNumber">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    betNumber?: SortOrderInput | SortOrder
    betType?: SortOrder
    systemType?: SortOrderInput | SortOrder
    status?: SortOrder
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrderInput | SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrderInput | SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrderInput | SortOrder
    bonusIdUsed?: SortOrderInput | SortOrder
    freebetIdUsed?: SortOrderInput | SortOrder
    acceptanceType?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrderInput | SortOrder
    actualOddsChangePercent?: SortOrderInput | SortOrder
    cashoutAvailable?: SortOrder
    cashoutValueCurrent?: SortOrderInput | SortOrder
    cashoutValueMin?: SortOrderInput | SortOrder
    cashoutValueMax?: SortOrderInput | SortOrder
    cashoutEnabled?: SortOrder
    autoCashoutValue?: SortOrderInput | SortOrder
    autoCashoutTriggered?: SortOrderInput | SortOrder
    autoCashoutAt?: SortOrderInput | SortOrder
    partialCashoutRemainingStake?: SortOrderInput | SortOrder
    partialCashoutTotalCashedOut?: SortOrderInput | SortOrder
    placedAt?: SortOrder
    placedIp?: SortOrderInput | SortOrder
    placedDevice?: SortOrderInput | SortOrder
    placedLanguage?: SortOrderInput | SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledBy?: SortOrderInput | SortOrder
    settlementSource?: SortOrderInput | SortOrder
    settlementNote?: SortOrderInput | SortOrder
    actualReturn?: SortOrderInput | SortOrder
    actualWinNet?: SortOrderInput | SortOrder
    actualTaxDeducted?: SortOrderInput | SortOrder
    oddsBoostAppliedId?: SortOrderInput | SortOrder
    combiBoostPercent?: SortOrderInput | SortOrder
    accumulatorBonusPercent?: SortOrderInput | SortOrder
    riskFlagged?: SortOrder
    riskFlags?: SortOrder
    riskReviewed?: SortOrderInput | SortOrder
    riskReviewedAt?: SortOrderInput | SortOrder
    riskReviewedBy?: SortOrderInput | SortOrder
    cancelledReason?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bet"> | string
    userId?: StringWithAggregatesFilter<"Bet"> | string
    walletId?: StringWithAggregatesFilter<"Bet"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    betNumber?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    betType?: EnumBetTypeWithAggregatesFilter<"Bet"> | $Enums.BetType
    systemType?: EnumSystemBetTypeNullableWithAggregatesFilter<"Bet"> | $Enums.SystemBetType | null
    status?: EnumBetStatusWithAggregatesFilter<"Bet"> | $Enums.BetStatus
    selectionsCount?: IntWithAggregatesFilter<"Bet"> | number
    winningSelectionsCount?: IntNullableWithAggregatesFilter<"Bet"> | number | null
    stakeAmount?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string
    maxWinCap?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    freebetIdUsed?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    acceptanceType?: EnumBetAcceptanceTypeWithAggregatesFilter<"Bet"> | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolWithAggregatesFilter<"Bet"> | boolean
    cashoutValueCurrent?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolWithAggregatesFilter<"Bet"> | boolean
    autoCashoutValue?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: BoolNullableWithAggregatesFilter<"Bet"> | boolean | null
    autoCashoutAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    partialCashoutRemainingStake?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    placedIp?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    placedDevice?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    placedLanguage?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    settledAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    settledBy?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    settlementSource?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    settlementNote?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    actualReturn?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    combiBoostPercent?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: DecimalNullableWithAggregatesFilter<"Bet"> | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolWithAggregatesFilter<"Bet"> | boolean
    riskFlags?: StringNullableListFilter<"Bet">
    riskReviewed?: BoolNullableWithAggregatesFilter<"Bet"> | boolean | null
    riskReviewedAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    riskReviewedBy?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    cancelledReason?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    cancelledBy?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Bet">
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
  }

  export type BetSelectionWhereInput = {
    AND?: BetSelectionWhereInput | BetSelectionWhereInput[]
    OR?: BetSelectionWhereInput[]
    NOT?: BetSelectionWhereInput | BetSelectionWhereInput[]
    id?: StringFilter<"BetSelection"> | string
    betId?: StringFilter<"BetSelection"> | string
    eventId?: StringFilter<"BetSelection"> | string
    marketId?: StringFilter<"BetSelection"> | string
    selectionId?: StringFilter<"BetSelection"> | string
    selectionName?: StringFilter<"BetSelection"> | string
    marketName?: StringFilter<"BetSelection"> | string
    eventName?: StringFilter<"BetSelection"> | string
    homeTeamName?: StringNullableFilter<"BetSelection"> | string | null
    awayTeamName?: StringNullableFilter<"BetSelection"> | string | null
    leagueName?: StringNullableFilter<"BetSelection"> | string | null
    sportType?: StringNullableFilter<"BetSelection"> | string | null
    kickoffAt?: DateTimeFilter<"BetSelection"> | Date | string
    marketType?: EnumMarketTypeFilter<"BetSelection"> | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    specifiers?: JsonNullableFilter<"BetSelection">
    oddsAtPlacement?: DecimalFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: StringNullableFilter<"BetSelection"> | string | null
    handicapValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    settledAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
    settledOdds?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    resultScore?: JsonNullableFilter<"BetSelection">
    providerEventId?: StringNullableFilter<"BetSelection"> | string | null
    providerMarketId?: StringNullableFilter<"BetSelection"> | string | null
    providerSelectionId?: StringNullableFilter<"BetSelection"> | string | null
    orderIndex?: IntFilter<"BetSelection"> | number
    deletedAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }

  export type BetSelectionOrderByWithRelationInput = {
    id?: SortOrder
    betId?: SortOrder
    eventId?: SortOrder
    marketId?: SortOrder
    selectionId?: SortOrder
    selectionName?: SortOrder
    marketName?: SortOrder
    eventName?: SortOrder
    homeTeamName?: SortOrderInput | SortOrder
    awayTeamName?: SortOrderInput | SortOrder
    leagueName?: SortOrderInput | SortOrder
    sportType?: SortOrderInput | SortOrder
    kickoffAt?: SortOrder
    marketType?: SortOrder
    outcome?: SortOrder
    specifiers?: SortOrderInput | SortOrder
    oddsAtPlacement?: SortOrder
    oddsDisplayAtPlacement?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    status?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledOdds?: SortOrderInput | SortOrder
    resultScore?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    providerMarketId?: SortOrderInput | SortOrder
    providerSelectionId?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    bet?: BetOrderByWithRelationInput
  }

  export type BetSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    betId_orderIndex?: BetSelectionBetIdOrderIndexCompoundUniqueInput
    AND?: BetSelectionWhereInput | BetSelectionWhereInput[]
    OR?: BetSelectionWhereInput[]
    NOT?: BetSelectionWhereInput | BetSelectionWhereInput[]
    betId?: StringFilter<"BetSelection"> | string
    eventId?: StringFilter<"BetSelection"> | string
    marketId?: StringFilter<"BetSelection"> | string
    selectionId?: StringFilter<"BetSelection"> | string
    selectionName?: StringFilter<"BetSelection"> | string
    marketName?: StringFilter<"BetSelection"> | string
    eventName?: StringFilter<"BetSelection"> | string
    homeTeamName?: StringNullableFilter<"BetSelection"> | string | null
    awayTeamName?: StringNullableFilter<"BetSelection"> | string | null
    leagueName?: StringNullableFilter<"BetSelection"> | string | null
    sportType?: StringNullableFilter<"BetSelection"> | string | null
    kickoffAt?: DateTimeFilter<"BetSelection"> | Date | string
    marketType?: EnumMarketTypeFilter<"BetSelection"> | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    specifiers?: JsonNullableFilter<"BetSelection">
    oddsAtPlacement?: DecimalFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: StringNullableFilter<"BetSelection"> | string | null
    handicapValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    settledAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
    settledOdds?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    resultScore?: JsonNullableFilter<"BetSelection">
    providerEventId?: StringNullableFilter<"BetSelection"> | string | null
    providerMarketId?: StringNullableFilter<"BetSelection"> | string | null
    providerSelectionId?: StringNullableFilter<"BetSelection"> | string | null
    orderIndex?: IntFilter<"BetSelection"> | number
    deletedAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }, "id" | "betId_orderIndex">

  export type BetSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    betId?: SortOrder
    eventId?: SortOrder
    marketId?: SortOrder
    selectionId?: SortOrder
    selectionName?: SortOrder
    marketName?: SortOrder
    eventName?: SortOrder
    homeTeamName?: SortOrderInput | SortOrder
    awayTeamName?: SortOrderInput | SortOrder
    leagueName?: SortOrderInput | SortOrder
    sportType?: SortOrderInput | SortOrder
    kickoffAt?: SortOrder
    marketType?: SortOrder
    outcome?: SortOrder
    specifiers?: SortOrderInput | SortOrder
    oddsAtPlacement?: SortOrder
    oddsDisplayAtPlacement?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    status?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledOdds?: SortOrderInput | SortOrder
    resultScore?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    providerMarketId?: SortOrderInput | SortOrder
    providerSelectionId?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BetSelectionCountOrderByAggregateInput
    _avg?: BetSelectionAvgOrderByAggregateInput
    _max?: BetSelectionMaxOrderByAggregateInput
    _min?: BetSelectionMinOrderByAggregateInput
    _sum?: BetSelectionSumOrderByAggregateInput
  }

  export type BetSelectionScalarWhereWithAggregatesInput = {
    AND?: BetSelectionScalarWhereWithAggregatesInput | BetSelectionScalarWhereWithAggregatesInput[]
    OR?: BetSelectionScalarWhereWithAggregatesInput[]
    NOT?: BetSelectionScalarWhereWithAggregatesInput | BetSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BetSelection"> | string
    betId?: StringWithAggregatesFilter<"BetSelection"> | string
    eventId?: StringWithAggregatesFilter<"BetSelection"> | string
    marketId?: StringWithAggregatesFilter<"BetSelection"> | string
    selectionId?: StringWithAggregatesFilter<"BetSelection"> | string
    selectionName?: StringWithAggregatesFilter<"BetSelection"> | string
    marketName?: StringWithAggregatesFilter<"BetSelection"> | string
    eventName?: StringWithAggregatesFilter<"BetSelection"> | string
    homeTeamName?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    awayTeamName?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    leagueName?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    sportType?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    kickoffAt?: DateTimeWithAggregatesFilter<"BetSelection"> | Date | string
    marketType?: EnumMarketTypeWithAggregatesFilter<"BetSelection"> | $Enums.MarketType
    outcome?: EnumSelectionOutcomeWithAggregatesFilter<"BetSelection"> | $Enums.SelectionOutcome
    specifiers?: JsonNullableWithAggregatesFilter<"BetSelection">
    oddsAtPlacement?: DecimalWithAggregatesFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    handicapValue?: DecimalNullableWithAggregatesFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableWithAggregatesFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeWithAggregatesFilter<"BetSelection"> | $Enums.SelectionOutcome
    settledAt?: DateTimeNullableWithAggregatesFilter<"BetSelection"> | Date | string | null
    settledOdds?: DecimalNullableWithAggregatesFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    resultScore?: JsonNullableWithAggregatesFilter<"BetSelection">
    providerEventId?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    providerMarketId?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    providerSelectionId?: StringNullableWithAggregatesFilter<"BetSelection"> | string | null
    orderIndex?: IntWithAggregatesFilter<"BetSelection"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BetSelection"> | Date | string | null
  }

  export type CashoutRecordWhereInput = {
    AND?: CashoutRecordWhereInput | CashoutRecordWhereInput[]
    OR?: CashoutRecordWhereInput[]
    NOT?: CashoutRecordWhereInput | CashoutRecordWhereInput[]
    id?: StringFilter<"CashoutRecord"> | string
    betId?: StringFilter<"CashoutRecord"> | string
    userId?: StringFilter<"CashoutRecord"> | string
    walletId?: StringFilter<"CashoutRecord"> | string
    transactionId?: StringNullableFilter<"CashoutRecord"> | string | null
    cashoutType?: EnumCashoutTypeFilter<"CashoutRecord"> | $Enums.CashoutType
    status?: EnumCashoutStatusFilter<"CashoutRecord"> | $Enums.CashoutStatus
    stakeBefore?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    stakeAfter?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    confirmedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    failedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    failedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    rejectedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    rejectedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    cashoutSnapshot?: JsonNullableFilter<"CashoutRecord">
    correlationId?: StringNullableFilter<"CashoutRecord"> | string | null
    requestIp?: StringNullableFilter<"CashoutRecord"> | string | null
    createdAt?: DateTimeFilter<"CashoutRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CashoutRecord"> | Date | string
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }

  export type CashoutRecordOrderByWithRelationInput = {
    id?: SortOrder
    betId?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    cashoutType?: SortOrder
    status?: SortOrder
    stakeBefore?: SortOrder
    stakeAfter?: SortOrderInput | SortOrder
    stakeCashedOut?: SortOrderInput | SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrderInput | SortOrder
    probabilityImpliedAtCashout?: SortOrderInput | SortOrder
    houseEdgePercentApplied?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    cashoutSnapshot?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    requestIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bet?: BetOrderByWithRelationInput
  }

  export type CashoutRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CashoutRecordWhereInput | CashoutRecordWhereInput[]
    OR?: CashoutRecordWhereInput[]
    NOT?: CashoutRecordWhereInput | CashoutRecordWhereInput[]
    betId?: StringFilter<"CashoutRecord"> | string
    userId?: StringFilter<"CashoutRecord"> | string
    walletId?: StringFilter<"CashoutRecord"> | string
    transactionId?: StringNullableFilter<"CashoutRecord"> | string | null
    cashoutType?: EnumCashoutTypeFilter<"CashoutRecord"> | $Enums.CashoutType
    status?: EnumCashoutStatusFilter<"CashoutRecord"> | $Enums.CashoutStatus
    stakeBefore?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    stakeAfter?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    confirmedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    failedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    failedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    rejectedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    rejectedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    cashoutSnapshot?: JsonNullableFilter<"CashoutRecord">
    correlationId?: StringNullableFilter<"CashoutRecord"> | string | null
    requestIp?: StringNullableFilter<"CashoutRecord"> | string | null
    createdAt?: DateTimeFilter<"CashoutRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CashoutRecord"> | Date | string
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }, "id">

  export type CashoutRecordOrderByWithAggregationInput = {
    id?: SortOrder
    betId?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    cashoutType?: SortOrder
    status?: SortOrder
    stakeBefore?: SortOrder
    stakeAfter?: SortOrderInput | SortOrder
    stakeCashedOut?: SortOrderInput | SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrderInput | SortOrder
    probabilityImpliedAtCashout?: SortOrderInput | SortOrder
    houseEdgePercentApplied?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    cashoutSnapshot?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    requestIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CashoutRecordCountOrderByAggregateInput
    _avg?: CashoutRecordAvgOrderByAggregateInput
    _max?: CashoutRecordMaxOrderByAggregateInput
    _min?: CashoutRecordMinOrderByAggregateInput
    _sum?: CashoutRecordSumOrderByAggregateInput
  }

  export type CashoutRecordScalarWhereWithAggregatesInput = {
    AND?: CashoutRecordScalarWhereWithAggregatesInput | CashoutRecordScalarWhereWithAggregatesInput[]
    OR?: CashoutRecordScalarWhereWithAggregatesInput[]
    NOT?: CashoutRecordScalarWhereWithAggregatesInput | CashoutRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CashoutRecord"> | string
    betId?: StringWithAggregatesFilter<"CashoutRecord"> | string
    userId?: StringWithAggregatesFilter<"CashoutRecord"> | string
    walletId?: StringWithAggregatesFilter<"CashoutRecord"> | string
    transactionId?: StringNullableWithAggregatesFilter<"CashoutRecord"> | string | null
    cashoutType?: EnumCashoutTypeWithAggregatesFilter<"CashoutRecord"> | $Enums.CashoutType
    status?: EnumCashoutStatusWithAggregatesFilter<"CashoutRecord"> | $Enums.CashoutStatus
    stakeBefore?: DecimalWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    stakeAfter?: DecimalNullableWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: DecimalNullableWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: DecimalNullableWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: DecimalNullableWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalWithAggregatesFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"CashoutRecord"> | Date | string | null
    failedReason?: StringNullableWithAggregatesFilter<"CashoutRecord"> | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"CashoutRecord"> | Date | string | null
    rejectedReason?: StringNullableWithAggregatesFilter<"CashoutRecord"> | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"CashoutRecord"> | Date | string | null
    cashoutSnapshot?: JsonNullableWithAggregatesFilter<"CashoutRecord">
    correlationId?: StringNullableWithAggregatesFilter<"CashoutRecord"> | string | null
    requestIp?: StringNullableWithAggregatesFilter<"CashoutRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CashoutRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CashoutRecord"> | Date | string
  }

  export type BetSettlementLogWhereInput = {
    AND?: BetSettlementLogWhereInput | BetSettlementLogWhereInput[]
    OR?: BetSettlementLogWhereInput[]
    NOT?: BetSettlementLogWhereInput | BetSettlementLogWhereInput[]
    id?: StringFilter<"BetSettlementLog"> | string
    betId?: StringFilter<"BetSettlementLog"> | string
    statusBefore?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    statusAfter?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    settlementSource?: StringFilter<"BetSettlementLog"> | string
    settledBy?: StringNullableFilter<"BetSettlementLog"> | string | null
    actualReturnBefore?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: JsonNullableFilter<"BetSettlementLog">
    reason?: StringNullableFilter<"BetSettlementLog"> | string | null
    note?: StringNullableFilter<"BetSettlementLog"> | string | null
    correlationId?: StringNullableFilter<"BetSettlementLog"> | string | null
    createdAt?: DateTimeFilter<"BetSettlementLog"> | Date | string
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }

  export type BetSettlementLogOrderByWithRelationInput = {
    id?: SortOrder
    betId?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    settlementSource?: SortOrder
    settledBy?: SortOrderInput | SortOrder
    actualReturnBefore?: SortOrderInput | SortOrder
    actualReturnAfter?: SortOrderInput | SortOrder
    selectionsResults?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    bet?: BetOrderByWithRelationInput
  }

  export type BetSettlementLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BetSettlementLogWhereInput | BetSettlementLogWhereInput[]
    OR?: BetSettlementLogWhereInput[]
    NOT?: BetSettlementLogWhereInput | BetSettlementLogWhereInput[]
    betId?: StringFilter<"BetSettlementLog"> | string
    statusBefore?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    statusAfter?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    settlementSource?: StringFilter<"BetSettlementLog"> | string
    settledBy?: StringNullableFilter<"BetSettlementLog"> | string | null
    actualReturnBefore?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: JsonNullableFilter<"BetSettlementLog">
    reason?: StringNullableFilter<"BetSettlementLog"> | string | null
    note?: StringNullableFilter<"BetSettlementLog"> | string | null
    correlationId?: StringNullableFilter<"BetSettlementLog"> | string | null
    createdAt?: DateTimeFilter<"BetSettlementLog"> | Date | string
    bet?: XOR<BetRelationFilter, BetWhereInput>
  }, "id">

  export type BetSettlementLogOrderByWithAggregationInput = {
    id?: SortOrder
    betId?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    settlementSource?: SortOrder
    settledBy?: SortOrderInput | SortOrder
    actualReturnBefore?: SortOrderInput | SortOrder
    actualReturnAfter?: SortOrderInput | SortOrder
    selectionsResults?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BetSettlementLogCountOrderByAggregateInput
    _avg?: BetSettlementLogAvgOrderByAggregateInput
    _max?: BetSettlementLogMaxOrderByAggregateInput
    _min?: BetSettlementLogMinOrderByAggregateInput
    _sum?: BetSettlementLogSumOrderByAggregateInput
  }

  export type BetSettlementLogScalarWhereWithAggregatesInput = {
    AND?: BetSettlementLogScalarWhereWithAggregatesInput | BetSettlementLogScalarWhereWithAggregatesInput[]
    OR?: BetSettlementLogScalarWhereWithAggregatesInput[]
    NOT?: BetSettlementLogScalarWhereWithAggregatesInput | BetSettlementLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BetSettlementLog"> | string
    betId?: StringWithAggregatesFilter<"BetSettlementLog"> | string
    statusBefore?: EnumBetStatusWithAggregatesFilter<"BetSettlementLog"> | $Enums.BetStatus
    statusAfter?: EnumBetStatusWithAggregatesFilter<"BetSettlementLog"> | $Enums.BetStatus
    settlementSource?: StringWithAggregatesFilter<"BetSettlementLog"> | string
    settledBy?: StringNullableWithAggregatesFilter<"BetSettlementLog"> | string | null
    actualReturnBefore?: DecimalNullableWithAggregatesFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: DecimalNullableWithAggregatesFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: JsonNullableWithAggregatesFilter<"BetSettlementLog">
    reason?: StringNullableWithAggregatesFilter<"BetSettlementLog"> | string | null
    note?: StringNullableWithAggregatesFilter<"BetSettlementLog"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"BetSettlementLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BetSettlementLog"> | Date | string
  }

  export type BetSlipDraftWhereInput = {
    AND?: BetSlipDraftWhereInput | BetSlipDraftWhereInput[]
    OR?: BetSlipDraftWhereInput[]
    NOT?: BetSlipDraftWhereInput | BetSlipDraftWhereInput[]
    id?: StringFilter<"BetSlipDraft"> | string
    sessionId?: StringFilter<"BetSlipDraft"> | string
    userId?: StringNullableFilter<"BetSlipDraft"> | string | null
    selections?: JsonFilter<"BetSlipDraft">
    stakeAmount?: DecimalNullableFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: DecimalNullableFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: StringNullableFilter<"BetSlipDraft"> | string | null
    cashoutEnabled?: BoolNullableFilter<"BetSlipDraft"> | boolean | null
    promocode?: StringNullableFilter<"BetSlipDraft"> | string | null
    bonusIdUsed?: StringNullableFilter<"BetSlipDraft"> | string | null
    freebetIdUsed?: StringNullableFilter<"BetSlipDraft"> | string | null
    expiresAt?: DateTimeNullableFilter<"BetSlipDraft"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"BetSlipDraft"> | Date | string | null
    createdAt?: DateTimeFilter<"BetSlipDraft"> | Date | string
  }

  export type BetSlipDraftOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    selections?: SortOrder
    stakeAmount?: SortOrderInput | SortOrder
    stakeBonusUsed?: SortOrderInput | SortOrder
    acceptanceType?: SortOrderInput | SortOrder
    cashoutEnabled?: SortOrderInput | SortOrder
    promocode?: SortOrderInput | SortOrder
    bonusIdUsed?: SortOrderInput | SortOrder
    freebetIdUsed?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type BetSlipDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId?: string
    AND?: BetSlipDraftWhereInput | BetSlipDraftWhereInput[]
    OR?: BetSlipDraftWhereInput[]
    NOT?: BetSlipDraftWhereInput | BetSlipDraftWhereInput[]
    userId?: StringNullableFilter<"BetSlipDraft"> | string | null
    selections?: JsonFilter<"BetSlipDraft">
    stakeAmount?: DecimalNullableFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: DecimalNullableFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: StringNullableFilter<"BetSlipDraft"> | string | null
    cashoutEnabled?: BoolNullableFilter<"BetSlipDraft"> | boolean | null
    promocode?: StringNullableFilter<"BetSlipDraft"> | string | null
    bonusIdUsed?: StringNullableFilter<"BetSlipDraft"> | string | null
    freebetIdUsed?: StringNullableFilter<"BetSlipDraft"> | string | null
    expiresAt?: DateTimeNullableFilter<"BetSlipDraft"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"BetSlipDraft"> | Date | string | null
    createdAt?: DateTimeFilter<"BetSlipDraft"> | Date | string
  }, "id" | "sessionId">

  export type BetSlipDraftOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrderInput | SortOrder
    selections?: SortOrder
    stakeAmount?: SortOrderInput | SortOrder
    stakeBonusUsed?: SortOrderInput | SortOrder
    acceptanceType?: SortOrderInput | SortOrder
    cashoutEnabled?: SortOrderInput | SortOrder
    promocode?: SortOrderInput | SortOrder
    bonusIdUsed?: SortOrderInput | SortOrder
    freebetIdUsed?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BetSlipDraftCountOrderByAggregateInput
    _avg?: BetSlipDraftAvgOrderByAggregateInput
    _max?: BetSlipDraftMaxOrderByAggregateInput
    _min?: BetSlipDraftMinOrderByAggregateInput
    _sum?: BetSlipDraftSumOrderByAggregateInput
  }

  export type BetSlipDraftScalarWhereWithAggregatesInput = {
    AND?: BetSlipDraftScalarWhereWithAggregatesInput | BetSlipDraftScalarWhereWithAggregatesInput[]
    OR?: BetSlipDraftScalarWhereWithAggregatesInput[]
    NOT?: BetSlipDraftScalarWhereWithAggregatesInput | BetSlipDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BetSlipDraft"> | string
    sessionId?: StringWithAggregatesFilter<"BetSlipDraft"> | string
    userId?: StringNullableWithAggregatesFilter<"BetSlipDraft"> | string | null
    selections?: JsonWithAggregatesFilter<"BetSlipDraft">
    stakeAmount?: DecimalNullableWithAggregatesFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: DecimalNullableWithAggregatesFilter<"BetSlipDraft"> | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: StringNullableWithAggregatesFilter<"BetSlipDraft"> | string | null
    cashoutEnabled?: BoolNullableWithAggregatesFilter<"BetSlipDraft"> | boolean | null
    promocode?: StringNullableWithAggregatesFilter<"BetSlipDraft"> | string | null
    bonusIdUsed?: StringNullableWithAggregatesFilter<"BetSlipDraft"> | string | null
    freebetIdUsed?: StringNullableWithAggregatesFilter<"BetSlipDraft"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"BetSlipDraft"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"BetSlipDraft"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BetSlipDraft"> | Date | string
  }

  export type BetCreateInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionCreateNestedManyWithoutBetInput
    cashoutRecords?: CashoutRecordCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionUncheckedCreateNestedManyWithoutBetInput
    cashoutRecords?: CashoutRecordUncheckedCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUpdateManyWithoutBetNestedInput
    cashoutRecords?: CashoutRecordUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUncheckedUpdateManyWithoutBetNestedInput
    cashoutRecords?: CashoutRecordUncheckedUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetSelectionCreateInput = {
    id?: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
    bet: BetCreateNestedOneWithoutSelectionsInput
  }

  export type BetSelectionUncheckedCreateInput = {
    id?: string
    betId: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
  }

  export type BetSelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bet?: BetUpdateOneRequiredWithoutSelectionsNestedInput
  }

  export type BetSelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetSelectionCreateManyInput = {
    id?: string
    betId: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
  }

  export type BetSelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetSelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashoutRecordCreateInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bet: BetCreateNestedOneWithoutCashoutRecordsInput
  }

  export type CashoutRecordUncheckedCreateInput = {
    id?: string
    betId: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashoutRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bet?: BetUpdateOneRequiredWithoutCashoutRecordsNestedInput
  }

  export type CashoutRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashoutRecordCreateManyInput = {
    id?: string
    betId: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashoutRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashoutRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogCreateInput = {
    id?: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    bet: BetCreateNestedOneWithoutSettlementLogsInput
  }

  export type BetSettlementLogUncheckedCreateInput = {
    id?: string
    betId: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type BetSettlementLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bet?: BetUpdateOneRequiredWithoutSettlementLogsNestedInput
  }

  export type BetSettlementLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogCreateManyInput = {
    id?: string
    betId: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type BetSettlementLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    betId?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSlipDraftCreateInput = {
    id?: string
    sessionId: string
    userId?: string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string | null
    acceptanceType?: string | null
    cashoutEnabled?: boolean | null
    promocode?: string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    expiresAt?: Date | string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BetSlipDraftUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId?: string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string | null
    acceptanceType?: string | null
    cashoutEnabled?: boolean | null
    promocode?: string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    expiresAt?: Date | string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BetSlipDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    promocode?: NullableStringFieldUpdateOperationsInput | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSlipDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    promocode?: NullableStringFieldUpdateOperationsInput | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSlipDraftCreateManyInput = {
    id?: string
    sessionId: string
    userId?: string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string | null
    acceptanceType?: string | null
    cashoutEnabled?: boolean | null
    promocode?: string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    expiresAt?: Date | string | null
    updatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BetSlipDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    promocode?: NullableStringFieldUpdateOperationsInput | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSlipDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    selections?: JsonNullValueInput | InputJsonValue
    stakeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeBonusUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acceptanceType?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    promocode?: NullableStringFieldUpdateOperationsInput | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumBetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BetType | EnumBetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetTypeFilter<$PrismaModel> | $Enums.BetType
  }

  export type EnumSystemBetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemBetType | EnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel> | $Enums.SystemBetType | null
  }

  export type EnumBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBetStatusFilter<$PrismaModel> | $Enums.BetStatus
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

  export type EnumBetAcceptanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BetAcceptanceType | EnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel> | $Enums.BetAcceptanceType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type BetSelectionListRelationFilter = {
    every?: BetSelectionWhereInput
    some?: BetSelectionWhereInput
    none?: BetSelectionWhereInput
  }

  export type CashoutRecordListRelationFilter = {
    every?: CashoutRecordWhereInput
    some?: CashoutRecordWhereInput
    none?: CashoutRecordWhereInput
  }

  export type BetSettlementLogListRelationFilter = {
    every?: BetSettlementLogWhereInput
    some?: BetSettlementLogWhereInput
    none?: BetSettlementLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BetSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CashoutRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetSettlementLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    externalId?: SortOrder
    betNumber?: SortOrder
    betType?: SortOrder
    systemType?: SortOrder
    status?: SortOrder
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    acceptanceType?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrder
    actualOddsChangePercent?: SortOrder
    cashoutAvailable?: SortOrder
    cashoutValueCurrent?: SortOrder
    cashoutValueMin?: SortOrder
    cashoutValueMax?: SortOrder
    cashoutEnabled?: SortOrder
    autoCashoutValue?: SortOrder
    autoCashoutTriggered?: SortOrder
    autoCashoutAt?: SortOrder
    partialCashoutRemainingStake?: SortOrder
    partialCashoutTotalCashedOut?: SortOrder
    placedAt?: SortOrder
    placedIp?: SortOrder
    placedDevice?: SortOrder
    placedLanguage?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    settlementSource?: SortOrder
    settlementNote?: SortOrder
    actualReturn?: SortOrder
    actualWinNet?: SortOrder
    actualTaxDeducted?: SortOrder
    oddsBoostAppliedId?: SortOrder
    combiBoostPercent?: SortOrder
    accumulatorBonusPercent?: SortOrder
    riskFlagged?: SortOrder
    riskFlags?: SortOrder
    riskReviewed?: SortOrder
    riskReviewedAt?: SortOrder
    riskReviewedBy?: SortOrder
    cancelledReason?: SortOrder
    cancelledAt?: SortOrder
    cancelledBy?: SortOrder
    correlationId?: SortOrder
    expiresAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrder
    actualOddsChangePercent?: SortOrder
    cashoutValueCurrent?: SortOrder
    cashoutValueMin?: SortOrder
    cashoutValueMax?: SortOrder
    autoCashoutValue?: SortOrder
    partialCashoutRemainingStake?: SortOrder
    partialCashoutTotalCashedOut?: SortOrder
    actualReturn?: SortOrder
    actualWinNet?: SortOrder
    actualTaxDeducted?: SortOrder
    combiBoostPercent?: SortOrder
    accumulatorBonusPercent?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    externalId?: SortOrder
    betNumber?: SortOrder
    betType?: SortOrder
    systemType?: SortOrder
    status?: SortOrder
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    acceptanceType?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrder
    actualOddsChangePercent?: SortOrder
    cashoutAvailable?: SortOrder
    cashoutValueCurrent?: SortOrder
    cashoutValueMin?: SortOrder
    cashoutValueMax?: SortOrder
    cashoutEnabled?: SortOrder
    autoCashoutValue?: SortOrder
    autoCashoutTriggered?: SortOrder
    autoCashoutAt?: SortOrder
    partialCashoutRemainingStake?: SortOrder
    partialCashoutTotalCashedOut?: SortOrder
    placedAt?: SortOrder
    placedIp?: SortOrder
    placedDevice?: SortOrder
    placedLanguage?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    settlementSource?: SortOrder
    settlementNote?: SortOrder
    actualReturn?: SortOrder
    actualWinNet?: SortOrder
    actualTaxDeducted?: SortOrder
    oddsBoostAppliedId?: SortOrder
    combiBoostPercent?: SortOrder
    accumulatorBonusPercent?: SortOrder
    riskFlagged?: SortOrder
    riskReviewed?: SortOrder
    riskReviewedAt?: SortOrder
    riskReviewedBy?: SortOrder
    cancelledReason?: SortOrder
    cancelledAt?: SortOrder
    cancelledBy?: SortOrder
    correlationId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    externalId?: SortOrder
    betNumber?: SortOrder
    betType?: SortOrder
    systemType?: SortOrder
    status?: SortOrder
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    acceptanceType?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrder
    actualOddsChangePercent?: SortOrder
    cashoutAvailable?: SortOrder
    cashoutValueCurrent?: SortOrder
    cashoutValueMin?: SortOrder
    cashoutValueMax?: SortOrder
    cashoutEnabled?: SortOrder
    autoCashoutValue?: SortOrder
    autoCashoutTriggered?: SortOrder
    autoCashoutAt?: SortOrder
    partialCashoutRemainingStake?: SortOrder
    partialCashoutTotalCashedOut?: SortOrder
    placedAt?: SortOrder
    placedIp?: SortOrder
    placedDevice?: SortOrder
    placedLanguage?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    settlementSource?: SortOrder
    settlementNote?: SortOrder
    actualReturn?: SortOrder
    actualWinNet?: SortOrder
    actualTaxDeducted?: SortOrder
    oddsBoostAppliedId?: SortOrder
    combiBoostPercent?: SortOrder
    accumulatorBonusPercent?: SortOrder
    riskFlagged?: SortOrder
    riskReviewed?: SortOrder
    riskReviewedAt?: SortOrder
    riskReviewedBy?: SortOrder
    cancelledReason?: SortOrder
    cancelledAt?: SortOrder
    cancelledBy?: SortOrder
    correlationId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    selectionsCount?: SortOrder
    winningSelectionsCount?: SortOrder
    stakeAmount?: SortOrder
    stakeRealUsed?: SortOrder
    stakeBonusUsed?: SortOrder
    stakeFreebetUsed?: SortOrder
    totalOdds?: SortOrder
    oddsMultiplier?: SortOrder
    potentialReturn?: SortOrder
    potentialWin?: SortOrder
    maxWinCap?: SortOrder
    acceptedOddsChangeMaxPercent?: SortOrder
    actualOddsChangePercent?: SortOrder
    cashoutValueCurrent?: SortOrder
    cashoutValueMin?: SortOrder
    cashoutValueMax?: SortOrder
    autoCashoutValue?: SortOrder
    partialCashoutRemainingStake?: SortOrder
    partialCashoutTotalCashedOut?: SortOrder
    actualReturn?: SortOrder
    actualWinNet?: SortOrder
    actualTaxDeducted?: SortOrder
    combiBoostPercent?: SortOrder
    accumulatorBonusPercent?: SortOrder
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

  export type EnumBetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetType | EnumBetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetTypeWithAggregatesFilter<$PrismaModel> | $Enums.BetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetTypeFilter<$PrismaModel>
    _max?: NestedEnumBetTypeFilter<$PrismaModel>
  }

  export type EnumSystemBetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemBetType | EnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemBetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemBetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel>
  }

  export type EnumBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetStatusFilter<$PrismaModel>
    _max?: NestedEnumBetStatusFilter<$PrismaModel>
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

  export type EnumBetAcceptanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetAcceptanceType | EnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetAcceptanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.BetAcceptanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel>
    _max?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type EnumMarketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeFilter<$PrismaModel> | $Enums.MarketType
  }

  export type EnumSelectionOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeFilter<$PrismaModel> | $Enums.SelectionOutcome
  }

  export type BetRelationFilter = {
    is?: BetWhereInput
    isNot?: BetWhereInput
  }

  export type BetSelectionBetIdOrderIndexCompoundUniqueInput = {
    betId: string
    orderIndex: number
  }

  export type BetSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    eventId?: SortOrder
    marketId?: SortOrder
    selectionId?: SortOrder
    selectionName?: SortOrder
    marketName?: SortOrder
    eventName?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    leagueName?: SortOrder
    sportType?: SortOrder
    kickoffAt?: SortOrder
    marketType?: SortOrder
    outcome?: SortOrder
    specifiers?: SortOrder
    oddsAtPlacement?: SortOrder
    oddsDisplayAtPlacement?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    settledOdds?: SortOrder
    resultScore?: SortOrder
    providerEventId?: SortOrder
    providerMarketId?: SortOrder
    providerSelectionId?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetSelectionAvgOrderByAggregateInput = {
    oddsAtPlacement?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    settledOdds?: SortOrder
    orderIndex?: SortOrder
  }

  export type BetSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    eventId?: SortOrder
    marketId?: SortOrder
    selectionId?: SortOrder
    selectionName?: SortOrder
    marketName?: SortOrder
    eventName?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    leagueName?: SortOrder
    sportType?: SortOrder
    kickoffAt?: SortOrder
    marketType?: SortOrder
    outcome?: SortOrder
    oddsAtPlacement?: SortOrder
    oddsDisplayAtPlacement?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    settledOdds?: SortOrder
    providerEventId?: SortOrder
    providerMarketId?: SortOrder
    providerSelectionId?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    eventId?: SortOrder
    marketId?: SortOrder
    selectionId?: SortOrder
    selectionName?: SortOrder
    marketName?: SortOrder
    eventName?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    leagueName?: SortOrder
    sportType?: SortOrder
    kickoffAt?: SortOrder
    marketType?: SortOrder
    outcome?: SortOrder
    oddsAtPlacement?: SortOrder
    oddsDisplayAtPlacement?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    status?: SortOrder
    settledAt?: SortOrder
    settledOdds?: SortOrder
    providerEventId?: SortOrder
    providerMarketId?: SortOrder
    providerSelectionId?: SortOrder
    orderIndex?: SortOrder
    deletedAt?: SortOrder
  }

  export type BetSelectionSumOrderByAggregateInput = {
    oddsAtPlacement?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    settledOdds?: SortOrder
    orderIndex?: SortOrder
  }

  export type EnumMarketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketTypeFilter<$PrismaModel>
    _max?: NestedEnumMarketTypeFilter<$PrismaModel>
  }

  export type EnumSelectionOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.SelectionOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
    _max?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
  }

  export type EnumCashoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutType | EnumCashoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutTypeFilter<$PrismaModel> | $Enums.CashoutType
  }

  export type EnumCashoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutStatus | EnumCashoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutStatusFilter<$PrismaModel> | $Enums.CashoutStatus
  }

  export type CashoutRecordCountOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    cashoutType?: SortOrder
    status?: SortOrder
    stakeBefore?: SortOrder
    stakeAfter?: SortOrder
    stakeCashedOut?: SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrder
    probabilityImpliedAtCashout?: SortOrder
    houseEdgePercentApplied?: SortOrder
    confirmedAt?: SortOrder
    failedReason?: SortOrder
    failedAt?: SortOrder
    rejectedReason?: SortOrder
    rejectedAt?: SortOrder
    cashoutSnapshot?: SortOrder
    correlationId?: SortOrder
    requestIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashoutRecordAvgOrderByAggregateInput = {
    stakeBefore?: SortOrder
    stakeAfter?: SortOrder
    stakeCashedOut?: SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrder
    probabilityImpliedAtCashout?: SortOrder
    houseEdgePercentApplied?: SortOrder
  }

  export type CashoutRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    cashoutType?: SortOrder
    status?: SortOrder
    stakeBefore?: SortOrder
    stakeAfter?: SortOrder
    stakeCashedOut?: SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrder
    probabilityImpliedAtCashout?: SortOrder
    houseEdgePercentApplied?: SortOrder
    confirmedAt?: SortOrder
    failedReason?: SortOrder
    failedAt?: SortOrder
    rejectedReason?: SortOrder
    rejectedAt?: SortOrder
    correlationId?: SortOrder
    requestIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashoutRecordMinOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    transactionId?: SortOrder
    cashoutType?: SortOrder
    status?: SortOrder
    stakeBefore?: SortOrder
    stakeAfter?: SortOrder
    stakeCashedOut?: SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrder
    probabilityImpliedAtCashout?: SortOrder
    houseEdgePercentApplied?: SortOrder
    confirmedAt?: SortOrder
    failedReason?: SortOrder
    failedAt?: SortOrder
    rejectedReason?: SortOrder
    rejectedAt?: SortOrder
    correlationId?: SortOrder
    requestIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CashoutRecordSumOrderByAggregateInput = {
    stakeBefore?: SortOrder
    stakeAfter?: SortOrder
    stakeCashedOut?: SortOrder
    amountRequested?: SortOrder
    amountFee?: SortOrder
    amountNetToUser?: SortOrder
    oddsAtCashout?: SortOrder
    probabilityImpliedAtCashout?: SortOrder
    houseEdgePercentApplied?: SortOrder
  }

  export type EnumCashoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutType | EnumCashoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.CashoutType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashoutTypeFilter<$PrismaModel>
    _max?: NestedEnumCashoutTypeFilter<$PrismaModel>
  }

  export type EnumCashoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutStatus | EnumCashoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.CashoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashoutStatusFilter<$PrismaModel>
    _max?: NestedEnumCashoutStatusFilter<$PrismaModel>
  }

  export type BetSettlementLogCountOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    settlementSource?: SortOrder
    settledBy?: SortOrder
    actualReturnBefore?: SortOrder
    actualReturnAfter?: SortOrder
    selectionsResults?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSettlementLogAvgOrderByAggregateInput = {
    actualReturnBefore?: SortOrder
    actualReturnAfter?: SortOrder
  }

  export type BetSettlementLogMaxOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    settlementSource?: SortOrder
    settledBy?: SortOrder
    actualReturnBefore?: SortOrder
    actualReturnAfter?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSettlementLogMinOrderByAggregateInput = {
    id?: SortOrder
    betId?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    settlementSource?: SortOrder
    settledBy?: SortOrder
    actualReturnBefore?: SortOrder
    actualReturnAfter?: SortOrder
    reason?: SortOrder
    note?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSettlementLogSumOrderByAggregateInput = {
    actualReturnBefore?: SortOrder
    actualReturnAfter?: SortOrder
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

  export type BetSlipDraftCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    selections?: SortOrder
    stakeAmount?: SortOrder
    stakeBonusUsed?: SortOrder
    acceptanceType?: SortOrder
    cashoutEnabled?: SortOrder
    promocode?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSlipDraftAvgOrderByAggregateInput = {
    stakeAmount?: SortOrder
    stakeBonusUsed?: SortOrder
  }

  export type BetSlipDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    stakeAmount?: SortOrder
    stakeBonusUsed?: SortOrder
    acceptanceType?: SortOrder
    cashoutEnabled?: SortOrder
    promocode?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSlipDraftMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    stakeAmount?: SortOrder
    stakeBonusUsed?: SortOrder
    acceptanceType?: SortOrder
    cashoutEnabled?: SortOrder
    promocode?: SortOrder
    bonusIdUsed?: SortOrder
    freebetIdUsed?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BetSlipDraftSumOrderByAggregateInput = {
    stakeAmount?: SortOrder
    stakeBonusUsed?: SortOrder
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

  export type BetCreateriskFlagsInput = {
    set: string[]
  }

  export type BetSelectionCreateNestedManyWithoutBetInput = {
    create?: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput> | BetSelectionCreateWithoutBetInput[] | BetSelectionUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSelectionCreateOrConnectWithoutBetInput | BetSelectionCreateOrConnectWithoutBetInput[]
    createMany?: BetSelectionCreateManyBetInputEnvelope
    connect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
  }

  export type CashoutRecordCreateNestedManyWithoutBetInput = {
    create?: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput> | CashoutRecordCreateWithoutBetInput[] | CashoutRecordUncheckedCreateWithoutBetInput[]
    connectOrCreate?: CashoutRecordCreateOrConnectWithoutBetInput | CashoutRecordCreateOrConnectWithoutBetInput[]
    createMany?: CashoutRecordCreateManyBetInputEnvelope
    connect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
  }

  export type BetSettlementLogCreateNestedManyWithoutBetInput = {
    create?: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput> | BetSettlementLogCreateWithoutBetInput[] | BetSettlementLogUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSettlementLogCreateOrConnectWithoutBetInput | BetSettlementLogCreateOrConnectWithoutBetInput[]
    createMany?: BetSettlementLogCreateManyBetInputEnvelope
    connect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
  }

  export type BetSelectionUncheckedCreateNestedManyWithoutBetInput = {
    create?: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput> | BetSelectionCreateWithoutBetInput[] | BetSelectionUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSelectionCreateOrConnectWithoutBetInput | BetSelectionCreateOrConnectWithoutBetInput[]
    createMany?: BetSelectionCreateManyBetInputEnvelope
    connect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
  }

  export type CashoutRecordUncheckedCreateNestedManyWithoutBetInput = {
    create?: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput> | CashoutRecordCreateWithoutBetInput[] | CashoutRecordUncheckedCreateWithoutBetInput[]
    connectOrCreate?: CashoutRecordCreateOrConnectWithoutBetInput | CashoutRecordCreateOrConnectWithoutBetInput[]
    createMany?: CashoutRecordCreateManyBetInputEnvelope
    connect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
  }

  export type BetSettlementLogUncheckedCreateNestedManyWithoutBetInput = {
    create?: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput> | BetSettlementLogCreateWithoutBetInput[] | BetSettlementLogUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSettlementLogCreateOrConnectWithoutBetInput | BetSettlementLogCreateOrConnectWithoutBetInput[]
    createMany?: BetSettlementLogCreateManyBetInputEnvelope
    connect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumBetTypeFieldUpdateOperationsInput = {
    set?: $Enums.BetType
  }

  export type NullableEnumSystemBetTypeFieldUpdateOperationsInput = {
    set?: $Enums.SystemBetType | null
  }

  export type EnumBetStatusFieldUpdateOperationsInput = {
    set?: $Enums.BetStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumBetAcceptanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.BetAcceptanceType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BetUpdateriskFlagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BetSelectionUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput> | BetSelectionCreateWithoutBetInput[] | BetSelectionUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSelectionCreateOrConnectWithoutBetInput | BetSelectionCreateOrConnectWithoutBetInput[]
    upsert?: BetSelectionUpsertWithWhereUniqueWithoutBetInput | BetSelectionUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetSelectionCreateManyBetInputEnvelope
    set?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    disconnect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    delete?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    connect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    update?: BetSelectionUpdateWithWhereUniqueWithoutBetInput | BetSelectionUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetSelectionUpdateManyWithWhereWithoutBetInput | BetSelectionUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetSelectionScalarWhereInput | BetSelectionScalarWhereInput[]
  }

  export type CashoutRecordUpdateManyWithoutBetNestedInput = {
    create?: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput> | CashoutRecordCreateWithoutBetInput[] | CashoutRecordUncheckedCreateWithoutBetInput[]
    connectOrCreate?: CashoutRecordCreateOrConnectWithoutBetInput | CashoutRecordCreateOrConnectWithoutBetInput[]
    upsert?: CashoutRecordUpsertWithWhereUniqueWithoutBetInput | CashoutRecordUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: CashoutRecordCreateManyBetInputEnvelope
    set?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    disconnect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    delete?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    connect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    update?: CashoutRecordUpdateWithWhereUniqueWithoutBetInput | CashoutRecordUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: CashoutRecordUpdateManyWithWhereWithoutBetInput | CashoutRecordUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: CashoutRecordScalarWhereInput | CashoutRecordScalarWhereInput[]
  }

  export type BetSettlementLogUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput> | BetSettlementLogCreateWithoutBetInput[] | BetSettlementLogUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSettlementLogCreateOrConnectWithoutBetInput | BetSettlementLogCreateOrConnectWithoutBetInput[]
    upsert?: BetSettlementLogUpsertWithWhereUniqueWithoutBetInput | BetSettlementLogUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetSettlementLogCreateManyBetInputEnvelope
    set?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    disconnect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    delete?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    connect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    update?: BetSettlementLogUpdateWithWhereUniqueWithoutBetInput | BetSettlementLogUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetSettlementLogUpdateManyWithWhereWithoutBetInput | BetSettlementLogUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetSettlementLogScalarWhereInput | BetSettlementLogScalarWhereInput[]
  }

  export type BetSelectionUncheckedUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput> | BetSelectionCreateWithoutBetInput[] | BetSelectionUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSelectionCreateOrConnectWithoutBetInput | BetSelectionCreateOrConnectWithoutBetInput[]
    upsert?: BetSelectionUpsertWithWhereUniqueWithoutBetInput | BetSelectionUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetSelectionCreateManyBetInputEnvelope
    set?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    disconnect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    delete?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    connect?: BetSelectionWhereUniqueInput | BetSelectionWhereUniqueInput[]
    update?: BetSelectionUpdateWithWhereUniqueWithoutBetInput | BetSelectionUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetSelectionUpdateManyWithWhereWithoutBetInput | BetSelectionUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetSelectionScalarWhereInput | BetSelectionScalarWhereInput[]
  }

  export type CashoutRecordUncheckedUpdateManyWithoutBetNestedInput = {
    create?: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput> | CashoutRecordCreateWithoutBetInput[] | CashoutRecordUncheckedCreateWithoutBetInput[]
    connectOrCreate?: CashoutRecordCreateOrConnectWithoutBetInput | CashoutRecordCreateOrConnectWithoutBetInput[]
    upsert?: CashoutRecordUpsertWithWhereUniqueWithoutBetInput | CashoutRecordUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: CashoutRecordCreateManyBetInputEnvelope
    set?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    disconnect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    delete?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    connect?: CashoutRecordWhereUniqueInput | CashoutRecordWhereUniqueInput[]
    update?: CashoutRecordUpdateWithWhereUniqueWithoutBetInput | CashoutRecordUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: CashoutRecordUpdateManyWithWhereWithoutBetInput | CashoutRecordUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: CashoutRecordScalarWhereInput | CashoutRecordScalarWhereInput[]
  }

  export type BetSettlementLogUncheckedUpdateManyWithoutBetNestedInput = {
    create?: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput> | BetSettlementLogCreateWithoutBetInput[] | BetSettlementLogUncheckedCreateWithoutBetInput[]
    connectOrCreate?: BetSettlementLogCreateOrConnectWithoutBetInput | BetSettlementLogCreateOrConnectWithoutBetInput[]
    upsert?: BetSettlementLogUpsertWithWhereUniqueWithoutBetInput | BetSettlementLogUpsertWithWhereUniqueWithoutBetInput[]
    createMany?: BetSettlementLogCreateManyBetInputEnvelope
    set?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    disconnect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    delete?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    connect?: BetSettlementLogWhereUniqueInput | BetSettlementLogWhereUniqueInput[]
    update?: BetSettlementLogUpdateWithWhereUniqueWithoutBetInput | BetSettlementLogUpdateWithWhereUniqueWithoutBetInput[]
    updateMany?: BetSettlementLogUpdateManyWithWhereWithoutBetInput | BetSettlementLogUpdateManyWithWhereWithoutBetInput[]
    deleteMany?: BetSettlementLogScalarWhereInput | BetSettlementLogScalarWhereInput[]
  }

  export type BetCreateNestedOneWithoutSelectionsInput = {
    create?: XOR<BetCreateWithoutSelectionsInput, BetUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: BetCreateOrConnectWithoutSelectionsInput
    connect?: BetWhereUniqueInput
  }

  export type EnumMarketTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarketType
  }

  export type EnumSelectionOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.SelectionOutcome
  }

  export type BetUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: XOR<BetCreateWithoutSelectionsInput, BetUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: BetCreateOrConnectWithoutSelectionsInput
    upsert?: BetUpsertWithoutSelectionsInput
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutSelectionsInput, BetUpdateWithoutSelectionsInput>, BetUncheckedUpdateWithoutSelectionsInput>
  }

  export type BetCreateNestedOneWithoutCashoutRecordsInput = {
    create?: XOR<BetCreateWithoutCashoutRecordsInput, BetUncheckedCreateWithoutCashoutRecordsInput>
    connectOrCreate?: BetCreateOrConnectWithoutCashoutRecordsInput
    connect?: BetWhereUniqueInput
  }

  export type EnumCashoutTypeFieldUpdateOperationsInput = {
    set?: $Enums.CashoutType
  }

  export type EnumCashoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.CashoutStatus
  }

  export type BetUpdateOneRequiredWithoutCashoutRecordsNestedInput = {
    create?: XOR<BetCreateWithoutCashoutRecordsInput, BetUncheckedCreateWithoutCashoutRecordsInput>
    connectOrCreate?: BetCreateOrConnectWithoutCashoutRecordsInput
    upsert?: BetUpsertWithoutCashoutRecordsInput
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutCashoutRecordsInput, BetUpdateWithoutCashoutRecordsInput>, BetUncheckedUpdateWithoutCashoutRecordsInput>
  }

  export type BetCreateNestedOneWithoutSettlementLogsInput = {
    create?: XOR<BetCreateWithoutSettlementLogsInput, BetUncheckedCreateWithoutSettlementLogsInput>
    connectOrCreate?: BetCreateOrConnectWithoutSettlementLogsInput
    connect?: BetWhereUniqueInput
  }

  export type BetUpdateOneRequiredWithoutSettlementLogsNestedInput = {
    create?: XOR<BetCreateWithoutSettlementLogsInput, BetUncheckedCreateWithoutSettlementLogsInput>
    connectOrCreate?: BetCreateOrConnectWithoutSettlementLogsInput
    upsert?: BetUpsertWithoutSettlementLogsInput
    connect?: BetWhereUniqueInput
    update?: XOR<XOR<BetUpdateToOneWithWhereWithoutSettlementLogsInput, BetUpdateWithoutSettlementLogsInput>, BetUncheckedUpdateWithoutSettlementLogsInput>
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

  export type NestedEnumBetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BetType | EnumBetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetTypeFilter<$PrismaModel> | $Enums.BetType
  }

  export type NestedEnumSystemBetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemBetType | EnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel> | $Enums.SystemBetType | null
  }

  export type NestedEnumBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBetStatusFilter<$PrismaModel> | $Enums.BetStatus
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

  export type NestedEnumBetAcceptanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BetAcceptanceType | EnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel> | $Enums.BetAcceptanceType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedEnumBetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetType | EnumBetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetType[] | ListEnumBetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetTypeWithAggregatesFilter<$PrismaModel> | $Enums.BetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetTypeFilter<$PrismaModel>
    _max?: NestedEnumBetTypeFilter<$PrismaModel>
  }

  export type NestedEnumSystemBetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemBetType | EnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemBetType[] | ListEnumSystemBetTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemBetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemBetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemBetTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetStatus[] | ListEnumBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetStatusFilter<$PrismaModel>
    _max?: NestedEnumBetStatusFilter<$PrismaModel>
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

  export type NestedEnumBetAcceptanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetAcceptanceType | EnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BetAcceptanceType[] | ListEnumBetAcceptanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBetAcceptanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.BetAcceptanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel>
    _max?: NestedEnumBetAcceptanceTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumMarketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeFilter<$PrismaModel> | $Enums.MarketType
  }

  export type NestedEnumSelectionOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeFilter<$PrismaModel> | $Enums.SelectionOutcome
  }

  export type NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketType | EnumMarketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketType[] | ListEnumMarketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketTypeFilter<$PrismaModel>
    _max?: NestedEnumMarketTypeFilter<$PrismaModel>
  }

  export type NestedEnumSelectionOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.SelectionOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
    _max?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
  }

  export type NestedEnumCashoutTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutType | EnumCashoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutTypeFilter<$PrismaModel> | $Enums.CashoutType
  }

  export type NestedEnumCashoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutStatus | EnumCashoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutStatusFilter<$PrismaModel> | $Enums.CashoutStatus
  }

  export type NestedEnumCashoutTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutType | EnumCashoutTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutType[] | ListEnumCashoutTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutTypeWithAggregatesFilter<$PrismaModel> | $Enums.CashoutType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashoutTypeFilter<$PrismaModel>
    _max?: NestedEnumCashoutTypeFilter<$PrismaModel>
  }

  export type NestedEnumCashoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CashoutStatus | EnumCashoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CashoutStatus[] | ListEnumCashoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCashoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.CashoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCashoutStatusFilter<$PrismaModel>
    _max?: NestedEnumCashoutStatusFilter<$PrismaModel>
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

  export type BetSelectionCreateWithoutBetInput = {
    id?: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
  }

  export type BetSelectionUncheckedCreateWithoutBetInput = {
    id?: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
  }

  export type BetSelectionCreateOrConnectWithoutBetInput = {
    where: BetSelectionWhereUniqueInput
    create: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput>
  }

  export type BetSelectionCreateManyBetInputEnvelope = {
    data: BetSelectionCreateManyBetInput | BetSelectionCreateManyBetInput[]
    skipDuplicates?: boolean
  }

  export type CashoutRecordCreateWithoutBetInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashoutRecordUncheckedCreateWithoutBetInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CashoutRecordCreateOrConnectWithoutBetInput = {
    where: CashoutRecordWhereUniqueInput
    create: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput>
  }

  export type CashoutRecordCreateManyBetInputEnvelope = {
    data: CashoutRecordCreateManyBetInput | CashoutRecordCreateManyBetInput[]
    skipDuplicates?: boolean
  }

  export type BetSettlementLogCreateWithoutBetInput = {
    id?: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type BetSettlementLogUncheckedCreateWithoutBetInput = {
    id?: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type BetSettlementLogCreateOrConnectWithoutBetInput = {
    where: BetSettlementLogWhereUniqueInput
    create: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput>
  }

  export type BetSettlementLogCreateManyBetInputEnvelope = {
    data: BetSettlementLogCreateManyBetInput | BetSettlementLogCreateManyBetInput[]
    skipDuplicates?: boolean
  }

  export type BetSelectionUpsertWithWhereUniqueWithoutBetInput = {
    where: BetSelectionWhereUniqueInput
    update: XOR<BetSelectionUpdateWithoutBetInput, BetSelectionUncheckedUpdateWithoutBetInput>
    create: XOR<BetSelectionCreateWithoutBetInput, BetSelectionUncheckedCreateWithoutBetInput>
  }

  export type BetSelectionUpdateWithWhereUniqueWithoutBetInput = {
    where: BetSelectionWhereUniqueInput
    data: XOR<BetSelectionUpdateWithoutBetInput, BetSelectionUncheckedUpdateWithoutBetInput>
  }

  export type BetSelectionUpdateManyWithWhereWithoutBetInput = {
    where: BetSelectionScalarWhereInput
    data: XOR<BetSelectionUpdateManyMutationInput, BetSelectionUncheckedUpdateManyWithoutBetInput>
  }

  export type BetSelectionScalarWhereInput = {
    AND?: BetSelectionScalarWhereInput | BetSelectionScalarWhereInput[]
    OR?: BetSelectionScalarWhereInput[]
    NOT?: BetSelectionScalarWhereInput | BetSelectionScalarWhereInput[]
    id?: StringFilter<"BetSelection"> | string
    betId?: StringFilter<"BetSelection"> | string
    eventId?: StringFilter<"BetSelection"> | string
    marketId?: StringFilter<"BetSelection"> | string
    selectionId?: StringFilter<"BetSelection"> | string
    selectionName?: StringFilter<"BetSelection"> | string
    marketName?: StringFilter<"BetSelection"> | string
    eventName?: StringFilter<"BetSelection"> | string
    homeTeamName?: StringNullableFilter<"BetSelection"> | string | null
    awayTeamName?: StringNullableFilter<"BetSelection"> | string | null
    leagueName?: StringNullableFilter<"BetSelection"> | string | null
    sportType?: StringNullableFilter<"BetSelection"> | string | null
    kickoffAt?: DateTimeFilter<"BetSelection"> | Date | string
    marketType?: EnumMarketTypeFilter<"BetSelection"> | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    specifiers?: JsonNullableFilter<"BetSelection">
    oddsAtPlacement?: DecimalFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: StringNullableFilter<"BetSelection"> | string | null
    handicapValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFilter<"BetSelection"> | $Enums.SelectionOutcome
    settledAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
    settledOdds?: DecimalNullableFilter<"BetSelection"> | Decimal | DecimalJsLike | number | string | null
    resultScore?: JsonNullableFilter<"BetSelection">
    providerEventId?: StringNullableFilter<"BetSelection"> | string | null
    providerMarketId?: StringNullableFilter<"BetSelection"> | string | null
    providerSelectionId?: StringNullableFilter<"BetSelection"> | string | null
    orderIndex?: IntFilter<"BetSelection"> | number
    deletedAt?: DateTimeNullableFilter<"BetSelection"> | Date | string | null
  }

  export type CashoutRecordUpsertWithWhereUniqueWithoutBetInput = {
    where: CashoutRecordWhereUniqueInput
    update: XOR<CashoutRecordUpdateWithoutBetInput, CashoutRecordUncheckedUpdateWithoutBetInput>
    create: XOR<CashoutRecordCreateWithoutBetInput, CashoutRecordUncheckedCreateWithoutBetInput>
  }

  export type CashoutRecordUpdateWithWhereUniqueWithoutBetInput = {
    where: CashoutRecordWhereUniqueInput
    data: XOR<CashoutRecordUpdateWithoutBetInput, CashoutRecordUncheckedUpdateWithoutBetInput>
  }

  export type CashoutRecordUpdateManyWithWhereWithoutBetInput = {
    where: CashoutRecordScalarWhereInput
    data: XOR<CashoutRecordUpdateManyMutationInput, CashoutRecordUncheckedUpdateManyWithoutBetInput>
  }

  export type CashoutRecordScalarWhereInput = {
    AND?: CashoutRecordScalarWhereInput | CashoutRecordScalarWhereInput[]
    OR?: CashoutRecordScalarWhereInput[]
    NOT?: CashoutRecordScalarWhereInput | CashoutRecordScalarWhereInput[]
    id?: StringFilter<"CashoutRecord"> | string
    betId?: StringFilter<"CashoutRecord"> | string
    userId?: StringFilter<"CashoutRecord"> | string
    walletId?: StringFilter<"CashoutRecord"> | string
    transactionId?: StringNullableFilter<"CashoutRecord"> | string | null
    cashoutType?: EnumCashoutTypeFilter<"CashoutRecord"> | $Enums.CashoutType
    status?: EnumCashoutStatusFilter<"CashoutRecord"> | $Enums.CashoutStatus
    stakeBefore?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    stakeAfter?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: DecimalNullableFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFilter<"CashoutRecord"> | Decimal | DecimalJsLike | number | string
    confirmedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    failedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    failedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    rejectedReason?: StringNullableFilter<"CashoutRecord"> | string | null
    rejectedAt?: DateTimeNullableFilter<"CashoutRecord"> | Date | string | null
    cashoutSnapshot?: JsonNullableFilter<"CashoutRecord">
    correlationId?: StringNullableFilter<"CashoutRecord"> | string | null
    requestIp?: StringNullableFilter<"CashoutRecord"> | string | null
    createdAt?: DateTimeFilter<"CashoutRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CashoutRecord"> | Date | string
  }

  export type BetSettlementLogUpsertWithWhereUniqueWithoutBetInput = {
    where: BetSettlementLogWhereUniqueInput
    update: XOR<BetSettlementLogUpdateWithoutBetInput, BetSettlementLogUncheckedUpdateWithoutBetInput>
    create: XOR<BetSettlementLogCreateWithoutBetInput, BetSettlementLogUncheckedCreateWithoutBetInput>
  }

  export type BetSettlementLogUpdateWithWhereUniqueWithoutBetInput = {
    where: BetSettlementLogWhereUniqueInput
    data: XOR<BetSettlementLogUpdateWithoutBetInput, BetSettlementLogUncheckedUpdateWithoutBetInput>
  }

  export type BetSettlementLogUpdateManyWithWhereWithoutBetInput = {
    where: BetSettlementLogScalarWhereInput
    data: XOR<BetSettlementLogUpdateManyMutationInput, BetSettlementLogUncheckedUpdateManyWithoutBetInput>
  }

  export type BetSettlementLogScalarWhereInput = {
    AND?: BetSettlementLogScalarWhereInput | BetSettlementLogScalarWhereInput[]
    OR?: BetSettlementLogScalarWhereInput[]
    NOT?: BetSettlementLogScalarWhereInput | BetSettlementLogScalarWhereInput[]
    id?: StringFilter<"BetSettlementLog"> | string
    betId?: StringFilter<"BetSettlementLog"> | string
    statusBefore?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    statusAfter?: EnumBetStatusFilter<"BetSettlementLog"> | $Enums.BetStatus
    settlementSource?: StringFilter<"BetSettlementLog"> | string
    settledBy?: StringNullableFilter<"BetSettlementLog"> | string | null
    actualReturnBefore?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: DecimalNullableFilter<"BetSettlementLog"> | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: JsonNullableFilter<"BetSettlementLog">
    reason?: StringNullableFilter<"BetSettlementLog"> | string | null
    note?: StringNullableFilter<"BetSettlementLog"> | string | null
    correlationId?: StringNullableFilter<"BetSettlementLog"> | string | null
    createdAt?: DateTimeFilter<"BetSettlementLog"> | Date | string
  }

  export type BetCreateWithoutSelectionsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashoutRecords?: CashoutRecordCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutSelectionsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cashoutRecords?: CashoutRecordUncheckedCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutSelectionsInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutSelectionsInput, BetUncheckedCreateWithoutSelectionsInput>
  }

  export type BetUpsertWithoutSelectionsInput = {
    update: XOR<BetUpdateWithoutSelectionsInput, BetUncheckedUpdateWithoutSelectionsInput>
    create: XOR<BetCreateWithoutSelectionsInput, BetUncheckedCreateWithoutSelectionsInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutSelectionsInput, BetUncheckedUpdateWithoutSelectionsInput>
  }

  export type BetUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutRecords?: CashoutRecordUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutRecords?: CashoutRecordUncheckedUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetCreateWithoutCashoutRecordsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutCashoutRecordsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionUncheckedCreateNestedManyWithoutBetInput
    settlementLogs?: BetSettlementLogUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutCashoutRecordsInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutCashoutRecordsInput, BetUncheckedCreateWithoutCashoutRecordsInput>
  }

  export type BetUpsertWithoutCashoutRecordsInput = {
    update: XOR<BetUpdateWithoutCashoutRecordsInput, BetUncheckedUpdateWithoutCashoutRecordsInput>
    create: XOR<BetCreateWithoutCashoutRecordsInput, BetUncheckedCreateWithoutCashoutRecordsInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutCashoutRecordsInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutCashoutRecordsInput, BetUncheckedUpdateWithoutCashoutRecordsInput>
  }

  export type BetUpdateWithoutCashoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutCashoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUncheckedUpdateManyWithoutBetNestedInput
    settlementLogs?: BetSettlementLogUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetCreateWithoutSettlementLogsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionCreateNestedManyWithoutBetInput
    cashoutRecords?: CashoutRecordCreateNestedManyWithoutBetInput
  }

  export type BetUncheckedCreateWithoutSettlementLogsInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    externalId?: string | null
    betNumber?: string | null
    betType: $Enums.BetType
    systemType?: $Enums.SystemBetType | null
    status?: $Enums.BetStatus
    selectionsCount: number
    winningSelectionsCount?: number | null
    stakeAmount: Decimal | DecimalJsLike | number | string
    stakeRealUsed?: Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: Decimal | DecimalJsLike | number | string
    totalOdds: Decimal | DecimalJsLike | number | string
    oddsMultiplier?: Decimal | DecimalJsLike | number | string | null
    potentialReturn: Decimal | DecimalJsLike | number | string
    potentialWin: Decimal | DecimalJsLike | number | string
    maxWinCap?: Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: string | null
    freebetIdUsed?: string | null
    acceptanceType: $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: boolean
    cashoutValueCurrent?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: boolean
    autoCashoutValue?: Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: boolean | null
    autoCashoutAt?: Date | string | null
    partialCashoutRemainingStake?: Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: Decimal | DecimalJsLike | number | string | null
    placedAt: Date | string
    placedIp?: string | null
    placedDevice?: string | null
    placedLanguage?: string | null
    settledAt?: Date | string | null
    settledBy?: string | null
    settlementSource?: string | null
    settlementNote?: string | null
    actualReturn?: Decimal | DecimalJsLike | number | string | null
    actualWinNet?: Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: string | null
    combiBoostPercent?: Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: Decimal | DecimalJsLike | number | string | null
    riskFlagged?: boolean
    riskFlags?: BetCreateriskFlagsInput | string[]
    riskReviewed?: boolean | null
    riskReviewedAt?: Date | string | null
    riskReviewedBy?: string | null
    cancelledReason?: string | null
    cancelledAt?: Date | string | null
    cancelledBy?: string | null
    correlationId?: string | null
    expiresAt?: Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: BetSelectionUncheckedCreateNestedManyWithoutBetInput
    cashoutRecords?: CashoutRecordUncheckedCreateNestedManyWithoutBetInput
  }

  export type BetCreateOrConnectWithoutSettlementLogsInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutSettlementLogsInput, BetUncheckedCreateWithoutSettlementLogsInput>
  }

  export type BetUpsertWithoutSettlementLogsInput = {
    update: XOR<BetUpdateWithoutSettlementLogsInput, BetUncheckedUpdateWithoutSettlementLogsInput>
    create: XOR<BetCreateWithoutSettlementLogsInput, BetUncheckedCreateWithoutSettlementLogsInput>
    where?: BetWhereInput
  }

  export type BetUpdateToOneWithWhereWithoutSettlementLogsInput = {
    where?: BetWhereInput
    data: XOR<BetUpdateWithoutSettlementLogsInput, BetUncheckedUpdateWithoutSettlementLogsInput>
  }

  export type BetUpdateWithoutSettlementLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUpdateManyWithoutBetNestedInput
    cashoutRecords?: CashoutRecordUpdateManyWithoutBetNestedInput
  }

  export type BetUncheckedUpdateWithoutSettlementLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    betNumber?: NullableStringFieldUpdateOperationsInput | string | null
    betType?: EnumBetTypeFieldUpdateOperationsInput | $Enums.BetType
    systemType?: NullableEnumSystemBetTypeFieldUpdateOperationsInput | $Enums.SystemBetType | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    selectionsCount?: IntFieldUpdateOperationsInput | number
    winningSelectionsCount?: NullableIntFieldUpdateOperationsInput | number | null
    stakeAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeRealUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeBonusUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeFreebetUsed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalOdds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    potentialReturn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    potentialWin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinCap?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bonusIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    freebetIdUsed?: NullableStringFieldUpdateOperationsInput | string | null
    acceptanceType?: EnumBetAcceptanceTypeFieldUpdateOperationsInput | $Enums.BetAcceptanceType
    acceptedOddsChangeMaxPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualOddsChangePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    cashoutValueCurrent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutValueMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cashoutEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoCashoutValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    autoCashoutTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    partialCashoutRemainingStake?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    partialCashoutTotalCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placedIp?: NullableStringFieldUpdateOperationsInput | string | null
    placedDevice?: NullableStringFieldUpdateOperationsInput | string | null
    placedLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    settlementSource?: NullableStringFieldUpdateOperationsInput | string | null
    settlementNote?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturn?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualWinNet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualTaxDeducted?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    oddsBoostAppliedId?: NullableStringFieldUpdateOperationsInput | string | null
    combiBoostPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accumulatorBonusPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskFlagged?: BoolFieldUpdateOperationsInput | boolean
    riskFlags?: BetUpdateriskFlagsInput | string[]
    riskReviewed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    riskReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    riskReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: BetSelectionUncheckedUpdateManyWithoutBetNestedInput
    cashoutRecords?: CashoutRecordUncheckedUpdateManyWithoutBetNestedInput
  }

  export type BetSelectionCreateManyBetInput = {
    id?: string
    eventId: string
    marketId: string
    selectionId: string
    selectionName: string
    marketName: string
    eventName: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    leagueName?: string | null
    sportType?: string | null
    kickoffAt: Date | string
    marketType: $Enums.MarketType
    outcome: $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement: Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.SelectionOutcome
    settledAt?: Date | string | null
    settledOdds?: Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: string | null
    providerMarketId?: string | null
    providerSelectionId?: string | null
    orderIndex: number
    deletedAt?: Date | string | null
  }

  export type CashoutRecordCreateManyBetInput = {
    id?: string
    userId: string
    walletId: string
    transactionId?: string | null
    cashoutType: $Enums.CashoutType
    status?: $Enums.CashoutStatus
    stakeBefore: Decimal | DecimalJsLike | number | string
    stakeAfter?: Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: Decimal | DecimalJsLike | number | string | null
    amountRequested: Decimal | DecimalJsLike | number | string
    amountFee?: Decimal | DecimalJsLike | number | string
    amountNetToUser: Decimal | DecimalJsLike | number | string
    oddsAtCashout?: Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: Decimal | DecimalJsLike | number | string
    confirmedAt?: Date | string | null
    failedReason?: string | null
    failedAt?: Date | string | null
    rejectedReason?: string | null
    rejectedAt?: Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: string | null
    requestIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetSettlementLogCreateManyBetInput = {
    id?: string
    statusBefore: $Enums.BetStatus
    statusAfter: $Enums.BetStatus
    settlementSource: string
    settledBy?: string | null
    actualReturnBefore?: Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: string | null
    note?: string | null
    correlationId?: string | null
    createdAt?: Date | string
  }

  export type BetSelectionUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetSelectionUncheckedUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetSelectionUncheckedUpdateManyWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    selectionId?: StringFieldUpdateOperationsInput | string
    selectionName?: StringFieldUpdateOperationsInput | string
    marketName?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    leagueName?: NullableStringFieldUpdateOperationsInput | string | null
    sportType?: NullableStringFieldUpdateOperationsInput | string | null
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketType?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    oddsAtPlacement?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplayAtPlacement?: NullableStringFieldUpdateOperationsInput | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    resultScore?: NullableJsonNullValueInput | InputJsonValue
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMarketId?: NullableStringFieldUpdateOperationsInput | string | null
    providerSelectionId?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CashoutRecordUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashoutRecordUncheckedUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CashoutRecordUncheckedUpdateManyWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutType?: EnumCashoutTypeFieldUpdateOperationsInput | $Enums.CashoutType
    status?: EnumCashoutStatusFieldUpdateOperationsInput | $Enums.CashoutStatus
    stakeBefore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stakeAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stakeCashedOut?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amountRequested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amountNetToUser?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    probabilityImpliedAtCashout?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    houseEdgePercentApplied?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cashoutSnapshot?: NullableJsonNullValueInput | InputJsonValue
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    requestIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogUncheckedUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetSettlementLogUncheckedUpdateManyWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusBefore?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    statusAfter?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    settlementSource?: StringFieldUpdateOperationsInput | string
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    actualReturnBefore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualReturnAfter?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionsResults?: NullableJsonNullValueInput | InputJsonValue
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BetCountOutputTypeDefaultArgs instead
     */
    export type BetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetDefaultArgs instead
     */
    export type BetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetSelectionDefaultArgs instead
     */
    export type BetSelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetSelectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CashoutRecordDefaultArgs instead
     */
    export type CashoutRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CashoutRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetSettlementLogDefaultArgs instead
     */
    export type BetSettlementLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetSettlementLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetSlipDraftDefaultArgs instead
     */
    export type BetSlipDraftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetSlipDraftDefaultArgs<ExtArgs>

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