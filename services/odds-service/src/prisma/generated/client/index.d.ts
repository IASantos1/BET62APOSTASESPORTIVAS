
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
 * Model Sport
 * 
 */
export type Sport = $Result.DefaultSelection<Prisma.$SportPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model League
 * 
 */
export type League = $Result.DefaultSelection<Prisma.$LeaguePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model MarketSelection
 * 
 */
export type MarketSelection = $Result.DefaultSelection<Prisma.$MarketSelectionPayload>
/**
 * Model LiveMatchUpdate
 * 
 */
export type LiveMatchUpdate = $Result.DefaultSelection<Prisma.$LiveMatchUpdatePayload>
/**
 * Model ProviderSyncState
 * 
 */
export type ProviderSyncState = $Result.DefaultSelection<Prisma.$ProviderSyncStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventStatus: {
  PRE_MATCH: 'PRE_MATCH',
  PRE_LIVE: 'PRE_LIVE',
  LIVE: 'LIVE',
  HALF_TIME: 'HALF_TIME',
  ENDED: 'ENDED',
  FINISHED: 'FINISHED',
  SUSPENDED: 'SUSPENDED',
  POSTPONED: 'POSTPONED',
  CANCELLED: 'CANCELLED',
  ABANDONED: 'ABANDONED',
  INTERRUPTED: 'INTERRUPTED',
  WALKOVER: 'WALKOVER'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


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


export const MarketStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  CLOSED: 'CLOSED',
  SETTLED: 'SETTLED'
};

export type MarketStatus = (typeof MarketStatus)[keyof typeof MarketStatus]


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


export const LiveEventType: {
  GOAL_HOME: 'GOAL_HOME',
  GOAL_AWAY: 'GOAL_AWAY',
  OWN_GOAL_HOME: 'OWN_GOAL_HOME',
  OWN_GOAL_AWAY: 'OWN_GOAL_AWAY',
  YELLOW_CARD: 'YELLOW_CARD',
  RED_CARD: 'RED_CARD',
  SECOND_YELLOW: 'SECOND_YELLOW',
  SUBSTITUTION: 'SUBSTITUTION',
  PENALTY_MISSED: 'PENALTY_MISSED',
  PENALTY_SCORED: 'PENALTY_SCORED',
  KICK_OFF: 'KICK_OFF',
  HALF_TIME_BEGIN: 'HALF_TIME_BEGIN',
  HALF_TIME_END: 'HALF_TIME_END',
  END_OF_REGULATION: 'END_OF_REGULATION',
  EXTRA_TIME_BEGIN: 'EXTRA_TIME_BEGIN',
  PENALTY_SHOOTOUT_BEGIN: 'PENALTY_SHOOTOUT_BEGIN',
  MATCH_ENDED: 'MATCH_ENDED',
  MATCH_SUSPENDED: 'MATCH_SUSPENDED',
  MATCH_POSTPONED: 'MATCH_POSTPONED',
  INJURY: 'INJURY',
  VAR_REVIEW: 'VAR_REVIEW',
  GAME_SCORE: 'GAME_SCORE',
  SET_WON: 'SET_WON',
  MATCH_WON: 'MATCH_WON',
  TIMEOUT: 'TIMEOUT'
};

export type LiveEventType = (typeof LiveEventType)[keyof typeof LiveEventType]

}

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type MarketType = $Enums.MarketType

export const MarketType: typeof $Enums.MarketType

export type MarketStatus = $Enums.MarketStatus

export const MarketStatus: typeof $Enums.MarketStatus

export type SelectionOutcome = $Enums.SelectionOutcome

export const SelectionOutcome: typeof $Enums.SelectionOutcome

export type LiveEventType = $Enums.LiveEventType

export const LiveEventType: typeof $Enums.LiveEventType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sports
 * const sports = await prisma.sport.findMany()
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
   * // Fetch zero or more Sports
   * const sports = await prisma.sport.findMany()
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
   * `prisma.sport`: Exposes CRUD operations for the **Sport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sports
    * const sports = await prisma.sport.findMany()
    * ```
    */
  get sport(): Prisma.SportDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.league`: Exposes CRUD operations for the **League** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leagues
    * const leagues = await prisma.league.findMany()
    * ```
    */
  get league(): Prisma.LeagueDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs>;

  /**
   * `prisma.marketSelection`: Exposes CRUD operations for the **MarketSelection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketSelections
    * const marketSelections = await prisma.marketSelection.findMany()
    * ```
    */
  get marketSelection(): Prisma.MarketSelectionDelegate<ExtArgs>;

  /**
   * `prisma.liveMatchUpdate`: Exposes CRUD operations for the **LiveMatchUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LiveMatchUpdates
    * const liveMatchUpdates = await prisma.liveMatchUpdate.findMany()
    * ```
    */
  get liveMatchUpdate(): Prisma.LiveMatchUpdateDelegate<ExtArgs>;

  /**
   * `prisma.providerSyncState`: Exposes CRUD operations for the **ProviderSyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderSyncStates
    * const providerSyncStates = await prisma.providerSyncState.findMany()
    * ```
    */
  get providerSyncState(): Prisma.ProviderSyncStateDelegate<ExtArgs>;
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
    Sport: 'Sport',
    Country: 'Country',
    League: 'League',
    Team: 'Team',
    Event: 'Event',
    Market: 'Market',
    MarketSelection: 'MarketSelection',
    LiveMatchUpdate: 'LiveMatchUpdate',
    ProviderSyncState: 'ProviderSyncState'
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
      modelProps: "sport" | "country" | "league" | "team" | "event" | "market" | "marketSelection" | "liveMatchUpdate" | "providerSyncState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sport: {
        payload: Prisma.$SportPayload<ExtArgs>
        fields: Prisma.SportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findFirst: {
            args: Prisma.SportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          findMany: {
            args: Prisma.SportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          create: {
            args: Prisma.SportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          createMany: {
            args: Prisma.SportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>[]
          }
          delete: {
            args: Prisma.SportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          update: {
            args: Prisma.SportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          deleteMany: {
            args: Prisma.SportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportPayload>
          }
          aggregate: {
            args: Prisma.SportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSport>
          }
          groupBy: {
            args: Prisma.SportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportCountArgs<ExtArgs>
            result: $Utils.Optional<SportCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      League: {
        payload: Prisma.$LeaguePayload<ExtArgs>
        fields: Prisma.LeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findFirst: {
            args: Prisma.LeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findMany: {
            args: Prisma.LeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          create: {
            args: Prisma.LeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          createMany: {
            args: Prisma.LeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeagueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          delete: {
            args: Prisma.LeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          update: {
            args: Prisma.LeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          deleteMany: {
            args: Prisma.LeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          aggregate: {
            args: Prisma.LeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeague>
          }
          groupBy: {
            args: Prisma.LeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeagueCountArgs<ExtArgs>
            result: $Utils.Optional<LeagueCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      MarketSelection: {
        payload: Prisma.$MarketSelectionPayload<ExtArgs>
        fields: Prisma.MarketSelectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketSelectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketSelectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          findFirst: {
            args: Prisma.MarketSelectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketSelectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          findMany: {
            args: Prisma.MarketSelectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>[]
          }
          create: {
            args: Prisma.MarketSelectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          createMany: {
            args: Prisma.MarketSelectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketSelectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>[]
          }
          delete: {
            args: Prisma.MarketSelectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          update: {
            args: Prisma.MarketSelectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          deleteMany: {
            args: Prisma.MarketSelectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketSelectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketSelectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSelectionPayload>
          }
          aggregate: {
            args: Prisma.MarketSelectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketSelection>
          }
          groupBy: {
            args: Prisma.MarketSelectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketSelectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketSelectionCountArgs<ExtArgs>
            result: $Utils.Optional<MarketSelectionCountAggregateOutputType> | number
          }
        }
      }
      LiveMatchUpdate: {
        payload: Prisma.$LiveMatchUpdatePayload<ExtArgs>
        fields: Prisma.LiveMatchUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiveMatchUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiveMatchUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          findFirst: {
            args: Prisma.LiveMatchUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiveMatchUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          findMany: {
            args: Prisma.LiveMatchUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>[]
          }
          create: {
            args: Prisma.LiveMatchUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          createMany: {
            args: Prisma.LiveMatchUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiveMatchUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>[]
          }
          delete: {
            args: Prisma.LiveMatchUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          update: {
            args: Prisma.LiveMatchUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          deleteMany: {
            args: Prisma.LiveMatchUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiveMatchUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LiveMatchUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiveMatchUpdatePayload>
          }
          aggregate: {
            args: Prisma.LiveMatchUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLiveMatchUpdate>
          }
          groupBy: {
            args: Prisma.LiveMatchUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiveMatchUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiveMatchUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<LiveMatchUpdateCountAggregateOutputType> | number
          }
        }
      }
      ProviderSyncState: {
        payload: Prisma.$ProviderSyncStatePayload<ExtArgs>
        fields: Prisma.ProviderSyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderSyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderSyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          findFirst: {
            args: Prisma.ProviderSyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderSyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          findMany: {
            args: Prisma.ProviderSyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>[]
          }
          create: {
            args: Prisma.ProviderSyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          createMany: {
            args: Prisma.ProviderSyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderSyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>[]
          }
          delete: {
            args: Prisma.ProviderSyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          update: {
            args: Prisma.ProviderSyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          deleteMany: {
            args: Prisma.ProviderSyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderSyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProviderSyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderSyncStatePayload>
          }
          aggregate: {
            args: Prisma.ProviderSyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderSyncState>
          }
          groupBy: {
            args: Prisma.ProviderSyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderSyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderSyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderSyncStateCountAggregateOutputType> | number
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
   * Count Type SportCountOutputType
   */

  export type SportCountOutputType = {
    leagues: number
    teams: number
    events: number
  }

  export type SportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | SportCountOutputTypeCountLeaguesArgs
    teams?: boolean | SportCountOutputTypeCountTeamsArgs
    events?: boolean | SportCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportCountOutputType
     */
    select?: SportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * SportCountOutputType without action
   */
  export type SportCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    leagues: number
    teams: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | CountryCountOutputTypeCountLeaguesArgs
    teams?: boolean | CountryCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type LeagueCountOutputType
   */

  export type LeagueCountOutputType = {
    events: number
  }

  export type LeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | LeagueCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueCountOutputType
     */
    select?: LeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    homeEvents: number
    awayEvents: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeEvents?: boolean | TeamCountOutputTypeCountHomeEventsArgs
    awayEvents?: boolean | TeamCountOutputTypeCountAwayEventsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    markets: number
    liveUpdates: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | EventCountOutputTypeCountMarketsArgs
    liveUpdates?: boolean | EventCountOutputTypeCountLiveUpdatesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountLiveUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveMatchUpdateWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    selections: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    selections?: boolean | MarketCountOutputTypeCountSelectionsArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountSelectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSelectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sport
   */

  export type AggregateSport = {
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  export type SportAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type SportSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type SportMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    active: boolean | null
    orderIndex: number | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SportMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    active: boolean | null
    orderIndex: number | null
    iconUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SportCountAggregateOutputType = {
    id: number
    code: number
    name: number
    active: number
    orderIndex: number
    iconUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SportAvgAggregateInputType = {
    orderIndex?: true
  }

  export type SportSumAggregateInputType = {
    orderIndex?: true
  }

  export type SportMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    orderIndex?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SportMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    orderIndex?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SportCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    active?: true
    orderIndex?: true
    iconUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sport to aggregate.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sports
    **/
    _count?: true | SportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportMaxAggregateInputType
  }

  export type GetSportAggregateType<T extends SportAggregateArgs> = {
        [P in keyof T & keyof AggregateSport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSport[P]>
      : GetScalarType<T[P], AggregateSport[P]>
  }




  export type SportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportWhereInput
    orderBy?: SportOrderByWithAggregationInput | SportOrderByWithAggregationInput[]
    by: SportScalarFieldEnum[] | SportScalarFieldEnum
    having?: SportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportCountAggregateInputType | true
    _avg?: SportAvgAggregateInputType
    _sum?: SportSumAggregateInputType
    _min?: SportMinAggregateInputType
    _max?: SportMaxAggregateInputType
  }

  export type SportGroupByOutputType = {
    id: string
    code: string
    name: string
    active: boolean
    orderIndex: number
    iconUrl: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SportCountAggregateOutputType | null
    _avg: SportAvgAggregateOutputType | null
    _sum: SportSumAggregateOutputType | null
    _min: SportMinAggregateOutputType | null
    _max: SportMaxAggregateOutputType | null
  }

  type GetSportGroupByPayload<T extends SportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportGroupByOutputType[P]>
            : GetScalarType<T[P], SportGroupByOutputType[P]>
        }
      >
    >


  export type SportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    orderIndex?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    leagues?: boolean | Sport$leaguesArgs<ExtArgs>
    teams?: boolean | Sport$teamsArgs<ExtArgs>
    events?: boolean | Sport$eventsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sport"]>

  export type SportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    orderIndex?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["sport"]>

  export type SportSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    active?: boolean
    orderIndex?: boolean
    iconUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | Sport$leaguesArgs<ExtArgs>
    teams?: boolean | Sport$teamsArgs<ExtArgs>
    events?: boolean | Sport$eventsArgs<ExtArgs>
    _count?: boolean | SportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sport"
    objects: {
      leagues: Prisma.$LeaguePayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      active: boolean
      orderIndex: number
      iconUrl: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["sport"]>
    composites: {}
  }

  type SportGetPayload<S extends boolean | null | undefined | SportDefaultArgs> = $Result.GetResult<Prisma.$SportPayload, S>

  type SportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SportCountAggregateInputType | true
    }

  export interface SportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sport'], meta: { name: 'Sport' } }
    /**
     * Find zero or one Sport that matches the filter.
     * @param {SportFindUniqueArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportFindUniqueArgs>(args: SelectSubset<T, SportFindUniqueArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SportFindUniqueOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportFindUniqueOrThrowArgs>(args: SelectSubset<T, SportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportFindFirstArgs>(args?: SelectSubset<T, SportFindFirstArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindFirstOrThrowArgs} args - Arguments to find a Sport
     * @example
     * // Get one Sport
     * const sport = await prisma.sport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportFindFirstOrThrowArgs>(args?: SelectSubset<T, SportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sports
     * const sports = await prisma.sport.findMany()
     * 
     * // Get first 10 Sports
     * const sports = await prisma.sport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportWithIdOnly = await prisma.sport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportFindManyArgs>(args?: SelectSubset<T, SportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sport.
     * @param {SportCreateArgs} args - Arguments to create a Sport.
     * @example
     * // Create one Sport
     * const Sport = await prisma.sport.create({
     *   data: {
     *     // ... data to create a Sport
     *   }
     * })
     * 
     */
    create<T extends SportCreateArgs>(args: SelectSubset<T, SportCreateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sports.
     * @param {SportCreateManyArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportCreateManyArgs>(args?: SelectSubset<T, SportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sports and returns the data saved in the database.
     * @param {SportCreateManyAndReturnArgs} args - Arguments to create many Sports.
     * @example
     * // Create many Sports
     * const sport = await prisma.sport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sports and only return the `id`
     * const sportWithIdOnly = await prisma.sport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportCreateManyAndReturnArgs>(args?: SelectSubset<T, SportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sport.
     * @param {SportDeleteArgs} args - Arguments to delete one Sport.
     * @example
     * // Delete one Sport
     * const Sport = await prisma.sport.delete({
     *   where: {
     *     // ... filter to delete one Sport
     *   }
     * })
     * 
     */
    delete<T extends SportDeleteArgs>(args: SelectSubset<T, SportDeleteArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sport.
     * @param {SportUpdateArgs} args - Arguments to update one Sport.
     * @example
     * // Update one Sport
     * const sport = await prisma.sport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportUpdateArgs>(args: SelectSubset<T, SportUpdateArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sports.
     * @param {SportDeleteManyArgs} args - Arguments to filter Sports to delete.
     * @example
     * // Delete a few Sports
     * const { count } = await prisma.sport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportDeleteManyArgs>(args?: SelectSubset<T, SportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sports
     * const sport = await prisma.sport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportUpdateManyArgs>(args: SelectSubset<T, SportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sport.
     * @param {SportUpsertArgs} args - Arguments to update or create a Sport.
     * @example
     * // Update or create a Sport
     * const sport = await prisma.sport.upsert({
     *   create: {
     *     // ... data to create a Sport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sport we want to update
     *   }
     * })
     */
    upsert<T extends SportUpsertArgs>(args: SelectSubset<T, SportUpsertArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportCountArgs} args - Arguments to filter Sports to count.
     * @example
     * // Count the number of Sports
     * const count = await prisma.sport.count({
     *   where: {
     *     // ... the filter for the Sports we want to count
     *   }
     * })
    **/
    count<T extends SportCountArgs>(
      args?: Subset<T, SportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportAggregateArgs>(args: Subset<T, SportAggregateArgs>): Prisma.PrismaPromise<GetSportAggregateType<T>>

    /**
     * Group by Sport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportGroupByArgs} args - Group by arguments.
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
      T extends SportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportGroupByArgs['orderBy'] }
        : { orderBy?: SportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sport model
   */
  readonly fields: SportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leagues<T extends Sport$leaguesArgs<ExtArgs> = {}>(args?: Subset<T, Sport$leaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany"> | Null>
    teams<T extends Sport$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Sport$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Sport$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sport model
   */ 
  interface SportFieldRefs {
    readonly id: FieldRef<"Sport", 'String'>
    readonly code: FieldRef<"Sport", 'String'>
    readonly name: FieldRef<"Sport", 'String'>
    readonly active: FieldRef<"Sport", 'Boolean'>
    readonly orderIndex: FieldRef<"Sport", 'Int'>
    readonly iconUrl: FieldRef<"Sport", 'String'>
    readonly createdAt: FieldRef<"Sport", 'DateTime'>
    readonly updatedAt: FieldRef<"Sport", 'DateTime'>
    readonly deletedAt: FieldRef<"Sport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sport findUnique
   */
  export type SportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findUniqueOrThrow
   */
  export type SportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport findFirst
   */
  export type SportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findFirstOrThrow
   */
  export type SportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sport to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sports.
     */
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport findMany
   */
  export type SportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter, which Sports to fetch.
     */
    where?: SportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sports to fetch.
     */
    orderBy?: SportOrderByWithRelationInput | SportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sports.
     */
    cursor?: SportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sports.
     */
    skip?: number
    distinct?: SportScalarFieldEnum | SportScalarFieldEnum[]
  }

  /**
   * Sport create
   */
  export type SportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to create a Sport.
     */
    data: XOR<SportCreateInput, SportUncheckedCreateInput>
  }

  /**
   * Sport createMany
   */
  export type SportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport createManyAndReturn
   */
  export type SportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sports.
     */
    data: SportCreateManyInput | SportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sport update
   */
  export type SportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The data needed to update a Sport.
     */
    data: XOR<SportUpdateInput, SportUncheckedUpdateInput>
    /**
     * Choose, which Sport to update.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport updateMany
   */
  export type SportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sports.
     */
    data: XOR<SportUpdateManyMutationInput, SportUncheckedUpdateManyInput>
    /**
     * Filter which Sports to update
     */
    where?: SportWhereInput
  }

  /**
   * Sport upsert
   */
  export type SportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * The filter to search for the Sport to update in case it exists.
     */
    where: SportWhereUniqueInput
    /**
     * In case the Sport found by the `where` argument doesn't exist, create a new Sport with this data.
     */
    create: XOR<SportCreateInput, SportUncheckedCreateInput>
    /**
     * In case the Sport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportUpdateInput, SportUncheckedUpdateInput>
  }

  /**
   * Sport delete
   */
  export type SportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
    /**
     * Filter which Sport to delete.
     */
    where: SportWhereUniqueInput
  }

  /**
   * Sport deleteMany
   */
  export type SportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sports to delete
     */
    where?: SportWhereInput
  }

  /**
   * Sport.leagues
   */
  export type Sport$leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    cursor?: LeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * Sport.teams
   */
  export type Sport$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Sport.events
   */
  export type Sport$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Sport without action
   */
  export type SportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sport
     */
    select?: SportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    flag: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    flag: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    flag: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    flag?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    flag?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    flag?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    code: string
    name: string
    flag: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    flag?: boolean
    leagues?: boolean | Country$leaguesArgs<ExtArgs>
    teams?: boolean | Country$teamsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    flag?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    flag?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leagues?: boolean | Country$leaguesArgs<ExtArgs>
    teams?: boolean | Country$teamsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      leagues: Prisma.$LeaguePayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      flag: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leagues<T extends Country$leaguesArgs<ExtArgs> = {}>(args?: Subset<T, Country$leaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany"> | Null>
    teams<T extends Country$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Country$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly flag: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }

  /**
   * Country.leagues
   */
  export type Country$leaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    cursor?: LeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * Country.teams
   */
  export type Country$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model League
   */

  export type AggregateLeague = {
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  export type LeagueAvgAggregateOutputType = {
    tier: number | null
  }

  export type LeagueSumAggregateOutputType = {
    tier: number | null
  }

  export type LeagueMinAggregateOutputType = {
    id: string | null
    providerLeagueId: string | null
    name: string | null
    sportId: string | null
    countryId: string | null
    tier: number | null
    active: boolean | null
    isTop: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LeagueMaxAggregateOutputType = {
    id: string | null
    providerLeagueId: string | null
    name: string | null
    sportId: string | null
    countryId: string | null
    tier: number | null
    active: boolean | null
    isTop: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LeagueCountAggregateOutputType = {
    id: number
    providerLeagueId: number
    name: number
    sportId: number
    countryId: number
    tier: number
    active: number
    isTop: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type LeagueAvgAggregateInputType = {
    tier?: true
  }

  export type LeagueSumAggregateInputType = {
    tier?: true
  }

  export type LeagueMinAggregateInputType = {
    id?: true
    providerLeagueId?: true
    name?: true
    sportId?: true
    countryId?: true
    tier?: true
    active?: true
    isTop?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LeagueMaxAggregateInputType = {
    id?: true
    providerLeagueId?: true
    name?: true
    sportId?: true
    countryId?: true
    tier?: true
    active?: true
    isTop?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LeagueCountAggregateInputType = {
    id?: true
    providerLeagueId?: true
    name?: true
    sportId?: true
    countryId?: true
    tier?: true
    active?: true
    isTop?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which League to aggregate.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leagues
    **/
    _count?: true | LeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeagueMaxAggregateInputType
  }

  export type GetLeagueAggregateType<T extends LeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeague[P]>
      : GetScalarType<T[P], AggregateLeague[P]>
  }




  export type LeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithAggregationInput | LeagueOrderByWithAggregationInput[]
    by: LeagueScalarFieldEnum[] | LeagueScalarFieldEnum
    having?: LeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeagueCountAggregateInputType | true
    _avg?: LeagueAvgAggregateInputType
    _sum?: LeagueSumAggregateInputType
    _min?: LeagueMinAggregateInputType
    _max?: LeagueMaxAggregateInputType
  }

  export type LeagueGroupByOutputType = {
    id: string
    providerLeagueId: string
    name: string
    sportId: string
    countryId: string | null
    tier: number | null
    active: boolean
    isTop: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  type GetLeagueGroupByPayload<T extends LeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeagueGroupByOutputType[P]>
            : GetScalarType<T[P], LeagueGroupByOutputType[P]>
        }
      >
    >


  export type LeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerLeagueId?: boolean
    name?: boolean
    sportId?: boolean
    countryId?: boolean
    tier?: boolean
    active?: boolean
    isTop?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | League$countryArgs<ExtArgs>
    events?: boolean | League$eventsArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>

  export type LeagueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerLeagueId?: boolean
    name?: boolean
    sportId?: boolean
    countryId?: boolean
    tier?: boolean
    active?: boolean
    isTop?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | League$countryArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>

  export type LeagueSelectScalar = {
    id?: boolean
    providerLeagueId?: boolean
    name?: boolean
    sportId?: boolean
    countryId?: boolean
    tier?: boolean
    active?: boolean
    isTop?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | League$countryArgs<ExtArgs>
    events?: boolean | League$eventsArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeagueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | League$countryArgs<ExtArgs>
  }

  export type $LeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "League"
    objects: {
      sport: Prisma.$SportPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs> | null
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerLeagueId: string
      name: string
      sportId: string
      countryId: string | null
      tier: number | null
      active: boolean
      isTop: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["league"]>
    composites: {}
  }

  type LeagueGetPayload<S extends boolean | null | undefined | LeagueDefaultArgs> = $Result.GetResult<Prisma.$LeaguePayload, S>

  type LeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeagueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeagueCountAggregateInputType | true
    }

  export interface LeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['League'], meta: { name: 'League' } }
    /**
     * Find zero or one League that matches the filter.
     * @param {LeagueFindUniqueArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueFindUniqueArgs>(args: SelectSubset<T, LeagueFindUniqueArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one League that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeagueFindUniqueOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, LeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first League that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueFindFirstArgs>(args?: SelectSubset<T, LeagueFindFirstArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first League that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, LeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.league.findMany()
     * 
     * // Get first 10 Leagues
     * const leagues = await prisma.league.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leagueWithIdOnly = await prisma.league.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeagueFindManyArgs>(args?: SelectSubset<T, LeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a League.
     * @param {LeagueCreateArgs} args - Arguments to create a League.
     * @example
     * // Create one League
     * const League = await prisma.league.create({
     *   data: {
     *     // ... data to create a League
     *   }
     * })
     * 
     */
    create<T extends LeagueCreateArgs>(args: SelectSubset<T, LeagueCreateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leagues.
     * @param {LeagueCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeagueCreateManyArgs>(args?: SelectSubset<T, LeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leagues and returns the data saved in the database.
     * @param {LeagueCreateManyAndReturnArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leagues and only return the `id`
     * const leagueWithIdOnly = await prisma.league.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeagueCreateManyAndReturnArgs>(args?: SelectSubset<T, LeagueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a League.
     * @param {LeagueDeleteArgs} args - Arguments to delete one League.
     * @example
     * // Delete one League
     * const League = await prisma.league.delete({
     *   where: {
     *     // ... filter to delete one League
     *   }
     * })
     * 
     */
    delete<T extends LeagueDeleteArgs>(args: SelectSubset<T, LeagueDeleteArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one League.
     * @param {LeagueUpdateArgs} args - Arguments to update one League.
     * @example
     * // Update one League
     * const league = await prisma.league.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeagueUpdateArgs>(args: SelectSubset<T, LeagueUpdateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leagues.
     * @param {LeagueDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.league.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeagueDeleteManyArgs>(args?: SelectSubset<T, LeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeagueUpdateManyArgs>(args: SelectSubset<T, LeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one League.
     * @param {LeagueUpsertArgs} args - Arguments to update or create a League.
     * @example
     * // Update or create a League
     * const league = await prisma.league.upsert({
     *   create: {
     *     // ... data to create a League
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the League we want to update
     *   }
     * })
     */
    upsert<T extends LeagueUpsertArgs>(args: SelectSubset<T, LeagueUpsertArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.league.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
    **/
    count<T extends LeagueCountArgs>(
      args?: Subset<T, LeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeagueAggregateArgs>(args: Subset<T, LeagueAggregateArgs>): Prisma.PrismaPromise<GetLeagueAggregateType<T>>

    /**
     * Group by League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueGroupByArgs} args - Group by arguments.
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
      T extends LeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueGroupByArgs['orderBy'] }
        : { orderBy?: LeagueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the League model
   */
  readonly fields: LeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for League.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    country<T extends League$countryArgs<ExtArgs> = {}>(args?: Subset<T, League$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    events<T extends League$eventsArgs<ExtArgs> = {}>(args?: Subset<T, League$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the League model
   */ 
  interface LeagueFieldRefs {
    readonly id: FieldRef<"League", 'String'>
    readonly providerLeagueId: FieldRef<"League", 'String'>
    readonly name: FieldRef<"League", 'String'>
    readonly sportId: FieldRef<"League", 'String'>
    readonly countryId: FieldRef<"League", 'String'>
    readonly tier: FieldRef<"League", 'Int'>
    readonly active: FieldRef<"League", 'Boolean'>
    readonly isTop: FieldRef<"League", 'Boolean'>
    readonly createdAt: FieldRef<"League", 'DateTime'>
    readonly updatedAt: FieldRef<"League", 'DateTime'>
    readonly deletedAt: FieldRef<"League", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * League findUnique
   */
  export type LeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findUniqueOrThrow
   */
  export type LeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findFirst
   */
  export type LeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findFirstOrThrow
   */
  export type LeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findMany
   */
  export type LeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League create
   */
  export type LeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a League.
     */
    data: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
  }

  /**
   * League createMany
   */
  export type LeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * League createManyAndReturn
   */
  export type LeagueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * League update
   */
  export type LeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a League.
     */
    data: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
    /**
     * Choose, which League to update.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League updateMany
   */
  export type LeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput
  }

  /**
   * League upsert
   */
  export type LeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the League to update in case it exists.
     */
    where: LeagueWhereUniqueInput
    /**
     * In case the League found by the `where` argument doesn't exist, create a new League with this data.
     */
    create: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
    /**
     * In case the League was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
  }

  /**
   * League delete
   */
  export type LeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter which League to delete.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League deleteMany
   */
  export type LeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leagues to delete
     */
    where?: LeagueWhereInput
  }

  /**
   * League.country
   */
  export type League$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * League.events
   */
  export type League$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * League without action
   */
  export type LeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    providerTeamId: string | null
    name: string | null
    shortName: string | null
    logoUrl: string | null
    sportId: string | null
    countryId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    providerTeamId: string | null
    name: string | null
    shortName: string | null
    logoUrl: string | null
    sportId: string | null
    countryId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    providerTeamId: number
    name: number
    shortName: number
    logoUrl: number
    sportId: number
    countryId: number
    aliases: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    providerTeamId?: true
    name?: true
    shortName?: true
    logoUrl?: true
    sportId?: true
    countryId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    providerTeamId?: true
    name?: true
    shortName?: true
    logoUrl?: true
    sportId?: true
    countryId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    providerTeamId?: true
    name?: true
    shortName?: true
    logoUrl?: true
    sportId?: true
    countryId?: true
    aliases?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    providerTeamId: string
    name: string
    shortName: string | null
    logoUrl: string | null
    sportId: string
    countryId: string | null
    aliases: string[]
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerTeamId?: boolean
    name?: boolean
    shortName?: boolean
    logoUrl?: boolean
    sportId?: boolean
    countryId?: boolean
    aliases?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | Team$countryArgs<ExtArgs>
    homeEvents?: boolean | Team$homeEventsArgs<ExtArgs>
    awayEvents?: boolean | Team$awayEventsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerTeamId?: boolean
    name?: boolean
    shortName?: boolean
    logoUrl?: boolean
    sportId?: boolean
    countryId?: boolean
    aliases?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | Team$countryArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    providerTeamId?: boolean
    name?: boolean
    shortName?: boolean
    logoUrl?: boolean
    sportId?: boolean
    countryId?: boolean
    aliases?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | Team$countryArgs<ExtArgs>
    homeEvents?: boolean | Team$homeEventsArgs<ExtArgs>
    awayEvents?: boolean | Team$awayEventsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    country?: boolean | Team$countryArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      sport: Prisma.$SportPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs> | null
      homeEvents: Prisma.$EventPayload<ExtArgs>[]
      awayEvents: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerTeamId: string
      name: string
      shortName: string | null
      logoUrl: string | null
      sportId: string
      countryId: string | null
      aliases: string[]
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    country<T extends Team$countryArgs<ExtArgs> = {}>(args?: Subset<T, Team$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    homeEvents<T extends Team$homeEventsArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    awayEvents<T extends Team$awayEventsArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly providerTeamId: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly shortName: FieldRef<"Team", 'String'>
    readonly logoUrl: FieldRef<"Team", 'String'>
    readonly sportId: FieldRef<"Team", 'String'>
    readonly countryId: FieldRef<"Team", 'String'>
    readonly aliases: FieldRef<"Team", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }

  /**
   * Team.country
   */
  export type Team$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * Team.homeEvents
   */
  export type Team$homeEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Team.awayEvents
   */
  export type Team$awayEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    minuteOfMatch: number | null
    injuryMinutes: number | null
    marketsCount: number | null
    activeBetCount: number | null
  }

  export type EventSumAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    minuteOfMatch: number | null
    injuryMinutes: number | null
    marketsCount: number | null
    activeBetCount: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    providerEventId: string | null
    name: string | null
    sportId: string | null
    leagueId: string | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeTeamName: string | null
    awayTeamName: string | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    extraTimeScore: string | null
    penaltyScore: string | null
    status: $Enums.EventStatus | null
    kickoffAt: Date | null
    liveStartedAt: Date | null
    liveUpdatedAt: Date | null
    firstHalfStart: Date | null
    secondHalfStart: Date | null
    minuteOfMatch: number | null
    injuryMinutes: number | null
    liveCoverageAvailable: boolean | null
    liveStreamAvailable: boolean | null
    streamUrl: string | null
    isTop: boolean | null
    isFeatured: boolean | null
    oddsLastCheckedAt: Date | null
    marketsCount: number | null
    activeBetCount: number | null
    settledAt: Date | null
    winner: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    providerEventId: string | null
    name: string | null
    sportId: string | null
    leagueId: string | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeTeamName: string | null
    awayTeamName: string | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    extraTimeScore: string | null
    penaltyScore: string | null
    status: $Enums.EventStatus | null
    kickoffAt: Date | null
    liveStartedAt: Date | null
    liveUpdatedAt: Date | null
    firstHalfStart: Date | null
    secondHalfStart: Date | null
    minuteOfMatch: number | null
    injuryMinutes: number | null
    liveCoverageAvailable: boolean | null
    liveStreamAvailable: boolean | null
    streamUrl: string | null
    isTop: boolean | null
    isFeatured: boolean | null
    oddsLastCheckedAt: Date | null
    marketsCount: number | null
    activeBetCount: number | null
    settledAt: Date | null
    winner: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    providerEventId: number
    name: number
    sportId: number
    leagueId: number
    homeTeamId: number
    awayTeamId: number
    homeTeamName: number
    awayTeamName: number
    homeScore: number
    awayScore: number
    homeHalfScore: number
    awayHalfScore: number
    extraTimeScore: number
    penaltyScore: number
    status: number
    kickoffAt: number
    liveStartedAt: number
    liveUpdatedAt: number
    firstHalfStart: number
    secondHalfStart: number
    minuteOfMatch: number
    injuryMinutes: number
    liveCoverageAvailable: number
    liveStreamAvailable: number
    streamUrl: number
    eventMeta: number
    isTop: number
    isFeatured: number
    oddsLastCheckedAt: number
    marketsCount: number
    activeBetCount: number
    settledAt: number
    winner: number
    slug: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    minuteOfMatch?: true
    injuryMinutes?: true
    marketsCount?: true
    activeBetCount?: true
  }

  export type EventSumAggregateInputType = {
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    minuteOfMatch?: true
    injuryMinutes?: true
    marketsCount?: true
    activeBetCount?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    providerEventId?: true
    name?: true
    sportId?: true
    leagueId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeTeamName?: true
    awayTeamName?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    extraTimeScore?: true
    penaltyScore?: true
    status?: true
    kickoffAt?: true
    liveStartedAt?: true
    liveUpdatedAt?: true
    firstHalfStart?: true
    secondHalfStart?: true
    minuteOfMatch?: true
    injuryMinutes?: true
    liveCoverageAvailable?: true
    liveStreamAvailable?: true
    streamUrl?: true
    isTop?: true
    isFeatured?: true
    oddsLastCheckedAt?: true
    marketsCount?: true
    activeBetCount?: true
    settledAt?: true
    winner?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    providerEventId?: true
    name?: true
    sportId?: true
    leagueId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeTeamName?: true
    awayTeamName?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    extraTimeScore?: true
    penaltyScore?: true
    status?: true
    kickoffAt?: true
    liveStartedAt?: true
    liveUpdatedAt?: true
    firstHalfStart?: true
    secondHalfStart?: true
    minuteOfMatch?: true
    injuryMinutes?: true
    liveCoverageAvailable?: true
    liveStreamAvailable?: true
    streamUrl?: true
    isTop?: true
    isFeatured?: true
    oddsLastCheckedAt?: true
    marketsCount?: true
    activeBetCount?: true
    settledAt?: true
    winner?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    providerEventId?: true
    name?: true
    sportId?: true
    leagueId?: true
    homeTeamId?: true
    awayTeamId?: true
    homeTeamName?: true
    awayTeamName?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    extraTimeScore?: true
    penaltyScore?: true
    status?: true
    kickoffAt?: true
    liveStartedAt?: true
    liveUpdatedAt?: true
    firstHalfStart?: true
    secondHalfStart?: true
    minuteOfMatch?: true
    injuryMinutes?: true
    liveCoverageAvailable?: true
    liveStreamAvailable?: true
    streamUrl?: true
    eventMeta?: true
    isTop?: true
    isFeatured?: true
    oddsLastCheckedAt?: true
    marketsCount?: true
    activeBetCount?: true
    settledAt?: true
    winner?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId: string | null
    awayTeamId: string | null
    homeTeamName: string | null
    awayTeamName: string | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    extraTimeScore: string | null
    penaltyScore: string | null
    status: $Enums.EventStatus
    kickoffAt: Date
    liveStartedAt: Date | null
    liveUpdatedAt: Date | null
    firstHalfStart: Date | null
    secondHalfStart: Date | null
    minuteOfMatch: number | null
    injuryMinutes: number | null
    liveCoverageAvailable: boolean | null
    liveStreamAvailable: boolean | null
    streamUrl: string | null
    eventMeta: JsonValue | null
    isTop: boolean | null
    isFeatured: boolean | null
    oddsLastCheckedAt: Date | null
    marketsCount: number
    activeBetCount: number
    settledAt: Date | null
    winner: string | null
    slug: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerEventId?: boolean
    name?: boolean
    sportId?: boolean
    leagueId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    extraTimeScore?: boolean
    penaltyScore?: boolean
    status?: boolean
    kickoffAt?: boolean
    liveStartedAt?: boolean
    liveUpdatedAt?: boolean
    firstHalfStart?: boolean
    secondHalfStart?: boolean
    minuteOfMatch?: boolean
    injuryMinutes?: boolean
    liveCoverageAvailable?: boolean
    liveStreamAvailable?: boolean
    streamUrl?: boolean
    eventMeta?: boolean
    isTop?: boolean
    isFeatured?: boolean
    oddsLastCheckedAt?: boolean
    marketsCount?: boolean
    activeBetCount?: boolean
    settledAt?: boolean
    winner?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    homeTeam?: boolean | Event$homeTeamArgs<ExtArgs>
    awayTeam?: boolean | Event$awayTeamArgs<ExtArgs>
    markets?: boolean | Event$marketsArgs<ExtArgs>
    liveUpdates?: boolean | Event$liveUpdatesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerEventId?: boolean
    name?: boolean
    sportId?: boolean
    leagueId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    extraTimeScore?: boolean
    penaltyScore?: boolean
    status?: boolean
    kickoffAt?: boolean
    liveStartedAt?: boolean
    liveUpdatedAt?: boolean
    firstHalfStart?: boolean
    secondHalfStart?: boolean
    minuteOfMatch?: boolean
    injuryMinutes?: boolean
    liveCoverageAvailable?: boolean
    liveStreamAvailable?: boolean
    streamUrl?: boolean
    eventMeta?: boolean
    isTop?: boolean
    isFeatured?: boolean
    oddsLastCheckedAt?: boolean
    marketsCount?: boolean
    activeBetCount?: boolean
    settledAt?: boolean
    winner?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sport?: boolean | SportDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    homeTeam?: boolean | Event$homeTeamArgs<ExtArgs>
    awayTeam?: boolean | Event$awayTeamArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    providerEventId?: boolean
    name?: boolean
    sportId?: boolean
    leagueId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeTeamName?: boolean
    awayTeamName?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    extraTimeScore?: boolean
    penaltyScore?: boolean
    status?: boolean
    kickoffAt?: boolean
    liveStartedAt?: boolean
    liveUpdatedAt?: boolean
    firstHalfStart?: boolean
    secondHalfStart?: boolean
    minuteOfMatch?: boolean
    injuryMinutes?: boolean
    liveCoverageAvailable?: boolean
    liveStreamAvailable?: boolean
    streamUrl?: boolean
    eventMeta?: boolean
    isTop?: boolean
    isFeatured?: boolean
    oddsLastCheckedAt?: boolean
    marketsCount?: boolean
    activeBetCount?: boolean
    settledAt?: boolean
    winner?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    homeTeam?: boolean | Event$homeTeamArgs<ExtArgs>
    awayTeam?: boolean | Event$awayTeamArgs<ExtArgs>
    markets?: boolean | Event$marketsArgs<ExtArgs>
    liveUpdates?: boolean | Event$liveUpdatesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sport?: boolean | SportDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    homeTeam?: boolean | Event$homeTeamArgs<ExtArgs>
    awayTeam?: boolean | Event$awayTeamArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      sport: Prisma.$SportPayload<ExtArgs>
      league: Prisma.$LeaguePayload<ExtArgs>
      homeTeam: Prisma.$TeamPayload<ExtArgs> | null
      awayTeam: Prisma.$TeamPayload<ExtArgs> | null
      markets: Prisma.$MarketPayload<ExtArgs>[]
      liveUpdates: Prisma.$LiveMatchUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerEventId: string
      name: string
      sportId: string
      leagueId: string
      homeTeamId: string | null
      awayTeamId: string | null
      homeTeamName: string | null
      awayTeamName: string | null
      homeScore: number | null
      awayScore: number | null
      homeHalfScore: number | null
      awayHalfScore: number | null
      extraTimeScore: string | null
      penaltyScore: string | null
      status: $Enums.EventStatus
      kickoffAt: Date
      liveStartedAt: Date | null
      liveUpdatedAt: Date | null
      firstHalfStart: Date | null
      secondHalfStart: Date | null
      minuteOfMatch: number | null
      injuryMinutes: number | null
      liveCoverageAvailable: boolean | null
      liveStreamAvailable: boolean | null
      streamUrl: string | null
      eventMeta: Prisma.JsonValue | null
      isTop: boolean | null
      isFeatured: boolean | null
      oddsLastCheckedAt: Date | null
      marketsCount: number
      activeBetCount: number
      settledAt: Date | null
      winner: string | null
      slug: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sport<T extends SportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SportDefaultArgs<ExtArgs>>): Prisma__SportClient<$Result.GetResult<Prisma.$SportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    homeTeam<T extends Event$homeTeamArgs<ExtArgs> = {}>(args?: Subset<T, Event$homeTeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    awayTeam<T extends Event$awayTeamArgs<ExtArgs> = {}>(args?: Subset<T, Event$awayTeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    markets<T extends Event$marketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany"> | Null>
    liveUpdates<T extends Event$liveUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Event$liveUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly providerEventId: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly sportId: FieldRef<"Event", 'String'>
    readonly leagueId: FieldRef<"Event", 'String'>
    readonly homeTeamId: FieldRef<"Event", 'String'>
    readonly awayTeamId: FieldRef<"Event", 'String'>
    readonly homeTeamName: FieldRef<"Event", 'String'>
    readonly awayTeamName: FieldRef<"Event", 'String'>
    readonly homeScore: FieldRef<"Event", 'Int'>
    readonly awayScore: FieldRef<"Event", 'Int'>
    readonly homeHalfScore: FieldRef<"Event", 'Int'>
    readonly awayHalfScore: FieldRef<"Event", 'Int'>
    readonly extraTimeScore: FieldRef<"Event", 'String'>
    readonly penaltyScore: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly kickoffAt: FieldRef<"Event", 'DateTime'>
    readonly liveStartedAt: FieldRef<"Event", 'DateTime'>
    readonly liveUpdatedAt: FieldRef<"Event", 'DateTime'>
    readonly firstHalfStart: FieldRef<"Event", 'DateTime'>
    readonly secondHalfStart: FieldRef<"Event", 'DateTime'>
    readonly minuteOfMatch: FieldRef<"Event", 'Int'>
    readonly injuryMinutes: FieldRef<"Event", 'Int'>
    readonly liveCoverageAvailable: FieldRef<"Event", 'Boolean'>
    readonly liveStreamAvailable: FieldRef<"Event", 'Boolean'>
    readonly streamUrl: FieldRef<"Event", 'String'>
    readonly eventMeta: FieldRef<"Event", 'Json'>
    readonly isTop: FieldRef<"Event", 'Boolean'>
    readonly isFeatured: FieldRef<"Event", 'Boolean'>
    readonly oddsLastCheckedAt: FieldRef<"Event", 'DateTime'>
    readonly marketsCount: FieldRef<"Event", 'Int'>
    readonly activeBetCount: FieldRef<"Event", 'Int'>
    readonly settledAt: FieldRef<"Event", 'DateTime'>
    readonly winner: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly deletedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.homeTeam
   */
  export type Event$homeTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Event.awayTeam
   */
  export type Event$awayTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Event.markets
   */
  export type Event$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Event.liveUpdates
   */
  export type Event$liveUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    where?: LiveMatchUpdateWhereInput
    orderBy?: LiveMatchUpdateOrderByWithRelationInput | LiveMatchUpdateOrderByWithRelationInput[]
    cursor?: LiveMatchUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiveMatchUpdateScalarFieldEnum | LiveMatchUpdateScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketAvgAggregateOutputType = {
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
  }

  export type MarketSumAggregateOutputType = {
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    providerMarketId: string | null
    eventId: string | null
    type: $Enums.MarketType | null
    name: string | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    period: string | null
    status: $Enums.MarketStatus | null
    displayedName: string | null
    cashoutAvailable: boolean | null
    firstCashoutAt: Date | null
    lastSuspendedAt: Date | null
    suspendedReason: string | null
    source: string | null
    openDate: Date | null
    closeDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    providerMarketId: string | null
    eventId: string | null
    type: $Enums.MarketType | null
    name: string | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    period: string | null
    status: $Enums.MarketStatus | null
    displayedName: string | null
    cashoutAvailable: boolean | null
    firstCashoutAt: Date | null
    lastSuspendedAt: Date | null
    suspendedReason: string | null
    source: string | null
    openDate: Date | null
    closeDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    providerMarketId: number
    eventId: number
    type: number
    name: number
    specifiers: number
    handicapValue: number
    totalLineValue: number
    period: number
    status: number
    displayedName: number
    cashoutAvailable: number
    firstCashoutAt: number
    lastSuspendedAt: number
    suspendedReason: number
    source: number
    openDate: number
    closeDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type MarketAvgAggregateInputType = {
    handicapValue?: true
    totalLineValue?: true
  }

  export type MarketSumAggregateInputType = {
    handicapValue?: true
    totalLineValue?: true
  }

  export type MarketMinAggregateInputType = {
    id?: true
    providerMarketId?: true
    eventId?: true
    type?: true
    name?: true
    handicapValue?: true
    totalLineValue?: true
    period?: true
    status?: true
    displayedName?: true
    cashoutAvailable?: true
    firstCashoutAt?: true
    lastSuspendedAt?: true
    suspendedReason?: true
    source?: true
    openDate?: true
    closeDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    providerMarketId?: true
    eventId?: true
    type?: true
    name?: true
    handicapValue?: true
    totalLineValue?: true
    period?: true
    status?: true
    displayedName?: true
    cashoutAvailable?: true
    firstCashoutAt?: true
    lastSuspendedAt?: true
    suspendedReason?: true
    source?: true
    openDate?: true
    closeDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    providerMarketId?: true
    eventId?: true
    type?: true
    name?: true
    specifiers?: true
    handicapValue?: true
    totalLineValue?: true
    period?: true
    status?: true
    displayedName?: true
    cashoutAvailable?: true
    firstCashoutAt?: true
    lastSuspendedAt?: true
    suspendedReason?: true
    source?: true
    openDate?: true
    closeDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _avg?: MarketAvgAggregateInputType
    _sum?: MarketSumAggregateInputType
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    providerMarketId: string
    eventId: string
    type: $Enums.MarketType
    name: string
    specifiers: JsonValue | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    period: string | null
    status: $Enums.MarketStatus
    displayedName: string | null
    cashoutAvailable: boolean
    firstCashoutAt: Date | null
    lastSuspendedAt: Date | null
    suspendedReason: string | null
    source: string | null
    openDate: Date | null
    closeDate: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerMarketId?: boolean
    eventId?: boolean
    type?: boolean
    name?: boolean
    specifiers?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    period?: boolean
    status?: boolean
    displayedName?: boolean
    cashoutAvailable?: boolean
    firstCashoutAt?: boolean
    lastSuspendedAt?: boolean
    suspendedReason?: boolean
    source?: boolean
    openDate?: boolean
    closeDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    selections?: boolean | Market$selectionsArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerMarketId?: boolean
    eventId?: boolean
    type?: boolean
    name?: boolean
    specifiers?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    period?: boolean
    status?: boolean
    displayedName?: boolean
    cashoutAvailable?: boolean
    firstCashoutAt?: boolean
    lastSuspendedAt?: boolean
    suspendedReason?: boolean
    source?: boolean
    openDate?: boolean
    closeDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    providerMarketId?: boolean
    eventId?: boolean
    type?: boolean
    name?: boolean
    specifiers?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    period?: boolean
    status?: boolean
    displayedName?: boolean
    cashoutAvailable?: boolean
    firstCashoutAt?: boolean
    lastSuspendedAt?: boolean
    suspendedReason?: boolean
    source?: boolean
    openDate?: boolean
    closeDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    selections?: boolean | Market$selectionsArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      selections: Prisma.$MarketSelectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerMarketId: string
      eventId: string
      type: $Enums.MarketType
      name: string
      specifiers: Prisma.JsonValue | null
      handicapValue: Prisma.Decimal | null
      totalLineValue: Prisma.Decimal | null
      period: string | null
      status: $Enums.MarketStatus
      displayedName: string | null
      cashoutAvailable: boolean
      firstCashoutAt: Date | null
      lastSuspendedAt: Date | null
      suspendedReason: string | null
      source: string | null
      openDate: Date | null
      closeDate: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
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
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    selections<T extends Market$selectionsArgs<ExtArgs> = {}>(args?: Subset<T, Market$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Market model
   */ 
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly providerMarketId: FieldRef<"Market", 'String'>
    readonly eventId: FieldRef<"Market", 'String'>
    readonly type: FieldRef<"Market", 'MarketType'>
    readonly name: FieldRef<"Market", 'String'>
    readonly specifiers: FieldRef<"Market", 'Json'>
    readonly handicapValue: FieldRef<"Market", 'Decimal'>
    readonly totalLineValue: FieldRef<"Market", 'Decimal'>
    readonly period: FieldRef<"Market", 'String'>
    readonly status: FieldRef<"Market", 'MarketStatus'>
    readonly displayedName: FieldRef<"Market", 'String'>
    readonly cashoutAvailable: FieldRef<"Market", 'Boolean'>
    readonly firstCashoutAt: FieldRef<"Market", 'DateTime'>
    readonly lastSuspendedAt: FieldRef<"Market", 'DateTime'>
    readonly suspendedReason: FieldRef<"Market", 'String'>
    readonly source: FieldRef<"Market", 'String'>
    readonly openDate: FieldRef<"Market", 'DateTime'>
    readonly closeDate: FieldRef<"Market", 'DateTime'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
    readonly updatedAt: FieldRef<"Market", 'DateTime'>
    readonly deletedAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
  }

  /**
   * Market.selections
   */
  export type Market$selectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    where?: MarketSelectionWhereInput
    orderBy?: MarketSelectionOrderByWithRelationInput | MarketSelectionOrderByWithRelationInput[]
    cursor?: MarketSelectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketSelectionScalarFieldEnum | MarketSelectionScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model MarketSelection
   */

  export type AggregateMarketSelection = {
    _count: MarketSelectionCountAggregateOutputType | null
    _avg: MarketSelectionAvgAggregateOutputType | null
    _sum: MarketSelectionSumAggregateOutputType | null
    _min: MarketSelectionMinAggregateOutputType | null
    _max: MarketSelectionMaxAggregateOutputType | null
  }

  export type MarketSelectionAvgAggregateOutputType = {
    odds: Decimal | null
    probabilityPercent: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    originalOdds: Decimal | null
  }

  export type MarketSelectionSumAggregateOutputType = {
    odds: Decimal | null
    probabilityPercent: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    originalOdds: Decimal | null
  }

  export type MarketSelectionMinAggregateOutputType = {
    id: string | null
    providerSelectionId: string | null
    marketId: string | null
    name: string | null
    outcome: $Enums.SelectionOutcome | null
    odds: Decimal | null
    oddsDisplay: string | null
    status: $Enums.MarketStatus | null
    probabilityPercent: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    originalOdds: Decimal | null
    lastChangedAt: Date | null
    lastChangedBy: string | null
    isTrendingUp: boolean | null
    isBestOffered: boolean | null
  }

  export type MarketSelectionMaxAggregateOutputType = {
    id: string | null
    providerSelectionId: string | null
    marketId: string | null
    name: string | null
    outcome: $Enums.SelectionOutcome | null
    odds: Decimal | null
    oddsDisplay: string | null
    status: $Enums.MarketStatus | null
    probabilityPercent: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    originalOdds: Decimal | null
    lastChangedAt: Date | null
    lastChangedBy: string | null
    isTrendingUp: boolean | null
    isBestOffered: boolean | null
  }

  export type MarketSelectionCountAggregateOutputType = {
    id: number
    providerSelectionId: number
    marketId: number
    name: number
    outcome: number
    odds: number
    oddsDisplay: number
    status: number
    probabilityPercent: number
    handicapValue: number
    totalLineValue: number
    originalOdds: number
    lastChangedAt: number
    lastChangedBy: number
    isTrendingUp: number
    isBestOffered: number
    meta: number
    _all: number
  }


  export type MarketSelectionAvgAggregateInputType = {
    odds?: true
    probabilityPercent?: true
    handicapValue?: true
    totalLineValue?: true
    originalOdds?: true
  }

  export type MarketSelectionSumAggregateInputType = {
    odds?: true
    probabilityPercent?: true
    handicapValue?: true
    totalLineValue?: true
    originalOdds?: true
  }

  export type MarketSelectionMinAggregateInputType = {
    id?: true
    providerSelectionId?: true
    marketId?: true
    name?: true
    outcome?: true
    odds?: true
    oddsDisplay?: true
    status?: true
    probabilityPercent?: true
    handicapValue?: true
    totalLineValue?: true
    originalOdds?: true
    lastChangedAt?: true
    lastChangedBy?: true
    isTrendingUp?: true
    isBestOffered?: true
  }

  export type MarketSelectionMaxAggregateInputType = {
    id?: true
    providerSelectionId?: true
    marketId?: true
    name?: true
    outcome?: true
    odds?: true
    oddsDisplay?: true
    status?: true
    probabilityPercent?: true
    handicapValue?: true
    totalLineValue?: true
    originalOdds?: true
    lastChangedAt?: true
    lastChangedBy?: true
    isTrendingUp?: true
    isBestOffered?: true
  }

  export type MarketSelectionCountAggregateInputType = {
    id?: true
    providerSelectionId?: true
    marketId?: true
    name?: true
    outcome?: true
    odds?: true
    oddsDisplay?: true
    status?: true
    probabilityPercent?: true
    handicapValue?: true
    totalLineValue?: true
    originalOdds?: true
    lastChangedAt?: true
    lastChangedBy?: true
    isTrendingUp?: true
    isBestOffered?: true
    meta?: true
    _all?: true
  }

  export type MarketSelectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSelection to aggregate.
     */
    where?: MarketSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSelections to fetch.
     */
    orderBy?: MarketSelectionOrderByWithRelationInput | MarketSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketSelections
    **/
    _count?: true | MarketSelectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketSelectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSelectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketSelectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketSelectionMaxAggregateInputType
  }

  export type GetMarketSelectionAggregateType<T extends MarketSelectionAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketSelection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketSelection[P]>
      : GetScalarType<T[P], AggregateMarketSelection[P]>
  }




  export type MarketSelectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSelectionWhereInput
    orderBy?: MarketSelectionOrderByWithAggregationInput | MarketSelectionOrderByWithAggregationInput[]
    by: MarketSelectionScalarFieldEnum[] | MarketSelectionScalarFieldEnum
    having?: MarketSelectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketSelectionCountAggregateInputType | true
    _avg?: MarketSelectionAvgAggregateInputType
    _sum?: MarketSelectionSumAggregateInputType
    _min?: MarketSelectionMinAggregateInputType
    _max?: MarketSelectionMaxAggregateInputType
  }

  export type MarketSelectionGroupByOutputType = {
    id: string
    providerSelectionId: string
    marketId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal
    oddsDisplay: string | null
    status: $Enums.MarketStatus
    probabilityPercent: Decimal | null
    handicapValue: Decimal | null
    totalLineValue: Decimal | null
    originalOdds: Decimal | null
    lastChangedAt: Date | null
    lastChangedBy: string | null
    isTrendingUp: boolean
    isBestOffered: boolean
    meta: JsonValue | null
    _count: MarketSelectionCountAggregateOutputType | null
    _avg: MarketSelectionAvgAggregateOutputType | null
    _sum: MarketSelectionSumAggregateOutputType | null
    _min: MarketSelectionMinAggregateOutputType | null
    _max: MarketSelectionMaxAggregateOutputType | null
  }

  type GetMarketSelectionGroupByPayload<T extends MarketSelectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketSelectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketSelectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketSelectionGroupByOutputType[P]>
            : GetScalarType<T[P], MarketSelectionGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerSelectionId?: boolean
    marketId?: boolean
    name?: boolean
    outcome?: boolean
    odds?: boolean
    oddsDisplay?: boolean
    status?: boolean
    probabilityPercent?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    originalOdds?: boolean
    lastChangedAt?: boolean
    lastChangedBy?: boolean
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketSelection"]>

  export type MarketSelectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerSelectionId?: boolean
    marketId?: boolean
    name?: boolean
    outcome?: boolean
    odds?: boolean
    oddsDisplay?: boolean
    status?: boolean
    probabilityPercent?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    originalOdds?: boolean
    lastChangedAt?: boolean
    lastChangedBy?: boolean
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketSelection"]>

  export type MarketSelectionSelectScalar = {
    id?: boolean
    providerSelectionId?: boolean
    marketId?: boolean
    name?: boolean
    outcome?: boolean
    odds?: boolean
    oddsDisplay?: boolean
    status?: boolean
    probabilityPercent?: boolean
    handicapValue?: boolean
    totalLineValue?: boolean
    originalOdds?: boolean
    lastChangedAt?: boolean
    lastChangedBy?: boolean
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: boolean
  }

  export type MarketSelectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }
  export type MarketSelectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
  }

  export type $MarketSelectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketSelection"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerSelectionId: string
      marketId: string
      name: string
      outcome: $Enums.SelectionOutcome
      odds: Prisma.Decimal
      oddsDisplay: string | null
      status: $Enums.MarketStatus
      probabilityPercent: Prisma.Decimal | null
      handicapValue: Prisma.Decimal | null
      totalLineValue: Prisma.Decimal | null
      originalOdds: Prisma.Decimal | null
      lastChangedAt: Date | null
      lastChangedBy: string | null
      isTrendingUp: boolean
      isBestOffered: boolean
      meta: Prisma.JsonValue | null
    }, ExtArgs["result"]["marketSelection"]>
    composites: {}
  }

  type MarketSelectionGetPayload<S extends boolean | null | undefined | MarketSelectionDefaultArgs> = $Result.GetResult<Prisma.$MarketSelectionPayload, S>

  type MarketSelectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketSelectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketSelectionCountAggregateInputType | true
    }

  export interface MarketSelectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketSelection'], meta: { name: 'MarketSelection' } }
    /**
     * Find zero or one MarketSelection that matches the filter.
     * @param {MarketSelectionFindUniqueArgs} args - Arguments to find a MarketSelection
     * @example
     * // Get one MarketSelection
     * const marketSelection = await prisma.marketSelection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketSelectionFindUniqueArgs>(args: SelectSubset<T, MarketSelectionFindUniqueArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketSelection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketSelectionFindUniqueOrThrowArgs} args - Arguments to find a MarketSelection
     * @example
     * // Get one MarketSelection
     * const marketSelection = await prisma.marketSelection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketSelectionFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketSelectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketSelection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionFindFirstArgs} args - Arguments to find a MarketSelection
     * @example
     * // Get one MarketSelection
     * const marketSelection = await prisma.marketSelection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketSelectionFindFirstArgs>(args?: SelectSubset<T, MarketSelectionFindFirstArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketSelection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionFindFirstOrThrowArgs} args - Arguments to find a MarketSelection
     * @example
     * // Get one MarketSelection
     * const marketSelection = await prisma.marketSelection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketSelectionFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketSelectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketSelections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketSelections
     * const marketSelections = await prisma.marketSelection.findMany()
     * 
     * // Get first 10 MarketSelections
     * const marketSelections = await prisma.marketSelection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketSelectionWithIdOnly = await prisma.marketSelection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketSelectionFindManyArgs>(args?: SelectSubset<T, MarketSelectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketSelection.
     * @param {MarketSelectionCreateArgs} args - Arguments to create a MarketSelection.
     * @example
     * // Create one MarketSelection
     * const MarketSelection = await prisma.marketSelection.create({
     *   data: {
     *     // ... data to create a MarketSelection
     *   }
     * })
     * 
     */
    create<T extends MarketSelectionCreateArgs>(args: SelectSubset<T, MarketSelectionCreateArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketSelections.
     * @param {MarketSelectionCreateManyArgs} args - Arguments to create many MarketSelections.
     * @example
     * // Create many MarketSelections
     * const marketSelection = await prisma.marketSelection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketSelectionCreateManyArgs>(args?: SelectSubset<T, MarketSelectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketSelections and returns the data saved in the database.
     * @param {MarketSelectionCreateManyAndReturnArgs} args - Arguments to create many MarketSelections.
     * @example
     * // Create many MarketSelections
     * const marketSelection = await prisma.marketSelection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketSelections and only return the `id`
     * const marketSelectionWithIdOnly = await prisma.marketSelection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketSelectionCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketSelectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarketSelection.
     * @param {MarketSelectionDeleteArgs} args - Arguments to delete one MarketSelection.
     * @example
     * // Delete one MarketSelection
     * const MarketSelection = await prisma.marketSelection.delete({
     *   where: {
     *     // ... filter to delete one MarketSelection
     *   }
     * })
     * 
     */
    delete<T extends MarketSelectionDeleteArgs>(args: SelectSubset<T, MarketSelectionDeleteArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketSelection.
     * @param {MarketSelectionUpdateArgs} args - Arguments to update one MarketSelection.
     * @example
     * // Update one MarketSelection
     * const marketSelection = await prisma.marketSelection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketSelectionUpdateArgs>(args: SelectSubset<T, MarketSelectionUpdateArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketSelections.
     * @param {MarketSelectionDeleteManyArgs} args - Arguments to filter MarketSelections to delete.
     * @example
     * // Delete a few MarketSelections
     * const { count } = await prisma.marketSelection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketSelectionDeleteManyArgs>(args?: SelectSubset<T, MarketSelectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketSelections
     * const marketSelection = await prisma.marketSelection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketSelectionUpdateManyArgs>(args: SelectSubset<T, MarketSelectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketSelection.
     * @param {MarketSelectionUpsertArgs} args - Arguments to update or create a MarketSelection.
     * @example
     * // Update or create a MarketSelection
     * const marketSelection = await prisma.marketSelection.upsert({
     *   create: {
     *     // ... data to create a MarketSelection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketSelection we want to update
     *   }
     * })
     */
    upsert<T extends MarketSelectionUpsertArgs>(args: SelectSubset<T, MarketSelectionUpsertArgs<ExtArgs>>): Prisma__MarketSelectionClient<$Result.GetResult<Prisma.$MarketSelectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketSelections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionCountArgs} args - Arguments to filter MarketSelections to count.
     * @example
     * // Count the number of MarketSelections
     * const count = await prisma.marketSelection.count({
     *   where: {
     *     // ... the filter for the MarketSelections we want to count
     *   }
     * })
    **/
    count<T extends MarketSelectionCountArgs>(
      args?: Subset<T, MarketSelectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketSelectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketSelectionAggregateArgs>(args: Subset<T, MarketSelectionAggregateArgs>): Prisma.PrismaPromise<GetMarketSelectionAggregateType<T>>

    /**
     * Group by MarketSelection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSelectionGroupByArgs} args - Group by arguments.
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
      T extends MarketSelectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketSelectionGroupByArgs['orderBy'] }
        : { orderBy?: MarketSelectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketSelectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketSelectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketSelection model
   */
  readonly fields: MarketSelectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketSelection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketSelectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MarketSelection model
   */ 
  interface MarketSelectionFieldRefs {
    readonly id: FieldRef<"MarketSelection", 'String'>
    readonly providerSelectionId: FieldRef<"MarketSelection", 'String'>
    readonly marketId: FieldRef<"MarketSelection", 'String'>
    readonly name: FieldRef<"MarketSelection", 'String'>
    readonly outcome: FieldRef<"MarketSelection", 'SelectionOutcome'>
    readonly odds: FieldRef<"MarketSelection", 'Decimal'>
    readonly oddsDisplay: FieldRef<"MarketSelection", 'String'>
    readonly status: FieldRef<"MarketSelection", 'MarketStatus'>
    readonly probabilityPercent: FieldRef<"MarketSelection", 'Decimal'>
    readonly handicapValue: FieldRef<"MarketSelection", 'Decimal'>
    readonly totalLineValue: FieldRef<"MarketSelection", 'Decimal'>
    readonly originalOdds: FieldRef<"MarketSelection", 'Decimal'>
    readonly lastChangedAt: FieldRef<"MarketSelection", 'DateTime'>
    readonly lastChangedBy: FieldRef<"MarketSelection", 'String'>
    readonly isTrendingUp: FieldRef<"MarketSelection", 'Boolean'>
    readonly isBestOffered: FieldRef<"MarketSelection", 'Boolean'>
    readonly meta: FieldRef<"MarketSelection", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MarketSelection findUnique
   */
  export type MarketSelectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MarketSelection to fetch.
     */
    where: MarketSelectionWhereUniqueInput
  }

  /**
   * MarketSelection findUniqueOrThrow
   */
  export type MarketSelectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MarketSelection to fetch.
     */
    where: MarketSelectionWhereUniqueInput
  }

  /**
   * MarketSelection findFirst
   */
  export type MarketSelectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MarketSelection to fetch.
     */
    where?: MarketSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSelections to fetch.
     */
    orderBy?: MarketSelectionOrderByWithRelationInput | MarketSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSelections.
     */
    cursor?: MarketSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSelections.
     */
    distinct?: MarketSelectionScalarFieldEnum | MarketSelectionScalarFieldEnum[]
  }

  /**
   * MarketSelection findFirstOrThrow
   */
  export type MarketSelectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MarketSelection to fetch.
     */
    where?: MarketSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSelections to fetch.
     */
    orderBy?: MarketSelectionOrderByWithRelationInput | MarketSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSelections.
     */
    cursor?: MarketSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSelections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSelections.
     */
    distinct?: MarketSelectionScalarFieldEnum | MarketSelectionScalarFieldEnum[]
  }

  /**
   * MarketSelection findMany
   */
  export type MarketSelectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter, which MarketSelections to fetch.
     */
    where?: MarketSelectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSelections to fetch.
     */
    orderBy?: MarketSelectionOrderByWithRelationInput | MarketSelectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketSelections.
     */
    cursor?: MarketSelectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSelections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSelections.
     */
    skip?: number
    distinct?: MarketSelectionScalarFieldEnum | MarketSelectionScalarFieldEnum[]
  }

  /**
   * MarketSelection create
   */
  export type MarketSelectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketSelection.
     */
    data: XOR<MarketSelectionCreateInput, MarketSelectionUncheckedCreateInput>
  }

  /**
   * MarketSelection createMany
   */
  export type MarketSelectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketSelections.
     */
    data: MarketSelectionCreateManyInput | MarketSelectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketSelection createManyAndReturn
   */
  export type MarketSelectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarketSelections.
     */
    data: MarketSelectionCreateManyInput | MarketSelectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketSelection update
   */
  export type MarketSelectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketSelection.
     */
    data: XOR<MarketSelectionUpdateInput, MarketSelectionUncheckedUpdateInput>
    /**
     * Choose, which MarketSelection to update.
     */
    where: MarketSelectionWhereUniqueInput
  }

  /**
   * MarketSelection updateMany
   */
  export type MarketSelectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketSelections.
     */
    data: XOR<MarketSelectionUpdateManyMutationInput, MarketSelectionUncheckedUpdateManyInput>
    /**
     * Filter which MarketSelections to update
     */
    where?: MarketSelectionWhereInput
  }

  /**
   * MarketSelection upsert
   */
  export type MarketSelectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketSelection to update in case it exists.
     */
    where: MarketSelectionWhereUniqueInput
    /**
     * In case the MarketSelection found by the `where` argument doesn't exist, create a new MarketSelection with this data.
     */
    create: XOR<MarketSelectionCreateInput, MarketSelectionUncheckedCreateInput>
    /**
     * In case the MarketSelection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketSelectionUpdateInput, MarketSelectionUncheckedUpdateInput>
  }

  /**
   * MarketSelection delete
   */
  export type MarketSelectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
    /**
     * Filter which MarketSelection to delete.
     */
    where: MarketSelectionWhereUniqueInput
  }

  /**
   * MarketSelection deleteMany
   */
  export type MarketSelectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSelections to delete
     */
    where?: MarketSelectionWhereInput
  }

  /**
   * MarketSelection without action
   */
  export type MarketSelectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSelection
     */
    select?: MarketSelectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSelectionInclude<ExtArgs> | null
  }


  /**
   * Model LiveMatchUpdate
   */

  export type AggregateLiveMatchUpdate = {
    _count: LiveMatchUpdateCountAggregateOutputType | null
    _avg: LiveMatchUpdateAvgAggregateOutputType | null
    _sum: LiveMatchUpdateSumAggregateOutputType | null
    _min: LiveMatchUpdateMinAggregateOutputType | null
    _max: LiveMatchUpdateMaxAggregateOutputType | null
  }

  export type LiveMatchUpdateAvgAggregateOutputType = {
    minute: number | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    clockMinutes: number | null
    stoppageMinutes: number | null
  }

  export type LiveMatchUpdateSumAggregateOutputType = {
    minute: number | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    clockMinutes: number | null
    stoppageMinutes: number | null
  }

  export type LiveMatchUpdateMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.LiveEventType | null
    minute: number | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    period: string | null
    playerName: string | null
    teamSide: string | null
    clockMinutes: number | null
    stoppageMinutes: number | null
    extraTime: boolean | null
    matchStatusAfter: $Enums.EventStatus | null
    createdAt: Date | null
  }

  export type LiveMatchUpdateMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.LiveEventType | null
    minute: number | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    period: string | null
    playerName: string | null
    teamSide: string | null
    clockMinutes: number | null
    stoppageMinutes: number | null
    extraTime: boolean | null
    matchStatusAfter: $Enums.EventStatus | null
    createdAt: Date | null
  }

  export type LiveMatchUpdateCountAggregateOutputType = {
    id: number
    eventId: number
    type: number
    minute: number
    homeScore: number
    awayScore: number
    homeHalfScore: number
    awayHalfScore: number
    period: number
    incidentData: number
    playerName: number
    teamSide: number
    clockMinutes: number
    stoppageMinutes: number
    extraTime: number
    matchStatusAfter: number
    createdAt: number
    _all: number
  }


  export type LiveMatchUpdateAvgAggregateInputType = {
    minute?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    clockMinutes?: true
    stoppageMinutes?: true
  }

  export type LiveMatchUpdateSumAggregateInputType = {
    minute?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    clockMinutes?: true
    stoppageMinutes?: true
  }

  export type LiveMatchUpdateMinAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    minute?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    period?: true
    playerName?: true
    teamSide?: true
    clockMinutes?: true
    stoppageMinutes?: true
    extraTime?: true
    matchStatusAfter?: true
    createdAt?: true
  }

  export type LiveMatchUpdateMaxAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    minute?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    period?: true
    playerName?: true
    teamSide?: true
    clockMinutes?: true
    stoppageMinutes?: true
    extraTime?: true
    matchStatusAfter?: true
    createdAt?: true
  }

  export type LiveMatchUpdateCountAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    minute?: true
    homeScore?: true
    awayScore?: true
    homeHalfScore?: true
    awayHalfScore?: true
    period?: true
    incidentData?: true
    playerName?: true
    teamSide?: true
    clockMinutes?: true
    stoppageMinutes?: true
    extraTime?: true
    matchStatusAfter?: true
    createdAt?: true
    _all?: true
  }

  export type LiveMatchUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveMatchUpdate to aggregate.
     */
    where?: LiveMatchUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveMatchUpdates to fetch.
     */
    orderBy?: LiveMatchUpdateOrderByWithRelationInput | LiveMatchUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiveMatchUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveMatchUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveMatchUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LiveMatchUpdates
    **/
    _count?: true | LiveMatchUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiveMatchUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiveMatchUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiveMatchUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiveMatchUpdateMaxAggregateInputType
  }

  export type GetLiveMatchUpdateAggregateType<T extends LiveMatchUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateLiveMatchUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLiveMatchUpdate[P]>
      : GetScalarType<T[P], AggregateLiveMatchUpdate[P]>
  }




  export type LiveMatchUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiveMatchUpdateWhereInput
    orderBy?: LiveMatchUpdateOrderByWithAggregationInput | LiveMatchUpdateOrderByWithAggregationInput[]
    by: LiveMatchUpdateScalarFieldEnum[] | LiveMatchUpdateScalarFieldEnum
    having?: LiveMatchUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiveMatchUpdateCountAggregateInputType | true
    _avg?: LiveMatchUpdateAvgAggregateInputType
    _sum?: LiveMatchUpdateSumAggregateInputType
    _min?: LiveMatchUpdateMinAggregateInputType
    _max?: LiveMatchUpdateMaxAggregateInputType
  }

  export type LiveMatchUpdateGroupByOutputType = {
    id: string
    eventId: string
    type: $Enums.LiveEventType
    minute: number | null
    homeScore: number | null
    awayScore: number | null
    homeHalfScore: number | null
    awayHalfScore: number | null
    period: string | null
    incidentData: JsonValue | null
    playerName: string | null
    teamSide: string | null
    clockMinutes: number | null
    stoppageMinutes: number | null
    extraTime: boolean | null
    matchStatusAfter: $Enums.EventStatus | null
    createdAt: Date
    _count: LiveMatchUpdateCountAggregateOutputType | null
    _avg: LiveMatchUpdateAvgAggregateOutputType | null
    _sum: LiveMatchUpdateSumAggregateOutputType | null
    _min: LiveMatchUpdateMinAggregateOutputType | null
    _max: LiveMatchUpdateMaxAggregateOutputType | null
  }

  type GetLiveMatchUpdateGroupByPayload<T extends LiveMatchUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiveMatchUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiveMatchUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiveMatchUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], LiveMatchUpdateGroupByOutputType[P]>
        }
      >
    >


  export type LiveMatchUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    minute?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    period?: boolean
    incidentData?: boolean
    playerName?: boolean
    teamSide?: boolean
    clockMinutes?: boolean
    stoppageMinutes?: boolean
    extraTime?: boolean
    matchStatusAfter?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveMatchUpdate"]>

  export type LiveMatchUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    minute?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    period?: boolean
    incidentData?: boolean
    playerName?: boolean
    teamSide?: boolean
    clockMinutes?: boolean
    stoppageMinutes?: boolean
    extraTime?: boolean
    matchStatusAfter?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["liveMatchUpdate"]>

  export type LiveMatchUpdateSelectScalar = {
    id?: boolean
    eventId?: boolean
    type?: boolean
    minute?: boolean
    homeScore?: boolean
    awayScore?: boolean
    homeHalfScore?: boolean
    awayHalfScore?: boolean
    period?: boolean
    incidentData?: boolean
    playerName?: boolean
    teamSide?: boolean
    clockMinutes?: boolean
    stoppageMinutes?: boolean
    extraTime?: boolean
    matchStatusAfter?: boolean
    createdAt?: boolean
  }

  export type LiveMatchUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type LiveMatchUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $LiveMatchUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LiveMatchUpdate"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      type: $Enums.LiveEventType
      minute: number | null
      homeScore: number | null
      awayScore: number | null
      homeHalfScore: number | null
      awayHalfScore: number | null
      period: string | null
      incidentData: Prisma.JsonValue | null
      playerName: string | null
      teamSide: string | null
      clockMinutes: number | null
      stoppageMinutes: number | null
      extraTime: boolean | null
      matchStatusAfter: $Enums.EventStatus | null
      createdAt: Date
    }, ExtArgs["result"]["liveMatchUpdate"]>
    composites: {}
  }

  type LiveMatchUpdateGetPayload<S extends boolean | null | undefined | LiveMatchUpdateDefaultArgs> = $Result.GetResult<Prisma.$LiveMatchUpdatePayload, S>

  type LiveMatchUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LiveMatchUpdateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LiveMatchUpdateCountAggregateInputType | true
    }

  export interface LiveMatchUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LiveMatchUpdate'], meta: { name: 'LiveMatchUpdate' } }
    /**
     * Find zero or one LiveMatchUpdate that matches the filter.
     * @param {LiveMatchUpdateFindUniqueArgs} args - Arguments to find a LiveMatchUpdate
     * @example
     * // Get one LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveMatchUpdateFindUniqueArgs>(args: SelectSubset<T, LiveMatchUpdateFindUniqueArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LiveMatchUpdate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LiveMatchUpdateFindUniqueOrThrowArgs} args - Arguments to find a LiveMatchUpdate
     * @example
     * // Get one LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveMatchUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, LiveMatchUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LiveMatchUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateFindFirstArgs} args - Arguments to find a LiveMatchUpdate
     * @example
     * // Get one LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveMatchUpdateFindFirstArgs>(args?: SelectSubset<T, LiveMatchUpdateFindFirstArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LiveMatchUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateFindFirstOrThrowArgs} args - Arguments to find a LiveMatchUpdate
     * @example
     * // Get one LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveMatchUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, LiveMatchUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LiveMatchUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveMatchUpdates
     * const liveMatchUpdates = await prisma.liveMatchUpdate.findMany()
     * 
     * // Get first 10 LiveMatchUpdates
     * const liveMatchUpdates = await prisma.liveMatchUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liveMatchUpdateWithIdOnly = await prisma.liveMatchUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiveMatchUpdateFindManyArgs>(args?: SelectSubset<T, LiveMatchUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LiveMatchUpdate.
     * @param {LiveMatchUpdateCreateArgs} args - Arguments to create a LiveMatchUpdate.
     * @example
     * // Create one LiveMatchUpdate
     * const LiveMatchUpdate = await prisma.liveMatchUpdate.create({
     *   data: {
     *     // ... data to create a LiveMatchUpdate
     *   }
     * })
     * 
     */
    create<T extends LiveMatchUpdateCreateArgs>(args: SelectSubset<T, LiveMatchUpdateCreateArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LiveMatchUpdates.
     * @param {LiveMatchUpdateCreateManyArgs} args - Arguments to create many LiveMatchUpdates.
     * @example
     * // Create many LiveMatchUpdates
     * const liveMatchUpdate = await prisma.liveMatchUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiveMatchUpdateCreateManyArgs>(args?: SelectSubset<T, LiveMatchUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LiveMatchUpdates and returns the data saved in the database.
     * @param {LiveMatchUpdateCreateManyAndReturnArgs} args - Arguments to create many LiveMatchUpdates.
     * @example
     * // Create many LiveMatchUpdates
     * const liveMatchUpdate = await prisma.liveMatchUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LiveMatchUpdates and only return the `id`
     * const liveMatchUpdateWithIdOnly = await prisma.liveMatchUpdate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiveMatchUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, LiveMatchUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LiveMatchUpdate.
     * @param {LiveMatchUpdateDeleteArgs} args - Arguments to delete one LiveMatchUpdate.
     * @example
     * // Delete one LiveMatchUpdate
     * const LiveMatchUpdate = await prisma.liveMatchUpdate.delete({
     *   where: {
     *     // ... filter to delete one LiveMatchUpdate
     *   }
     * })
     * 
     */
    delete<T extends LiveMatchUpdateDeleteArgs>(args: SelectSubset<T, LiveMatchUpdateDeleteArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LiveMatchUpdate.
     * @param {LiveMatchUpdateUpdateArgs} args - Arguments to update one LiveMatchUpdate.
     * @example
     * // Update one LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiveMatchUpdateUpdateArgs>(args: SelectSubset<T, LiveMatchUpdateUpdateArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LiveMatchUpdates.
     * @param {LiveMatchUpdateDeleteManyArgs} args - Arguments to filter LiveMatchUpdates to delete.
     * @example
     * // Delete a few LiveMatchUpdates
     * const { count } = await prisma.liveMatchUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiveMatchUpdateDeleteManyArgs>(args?: SelectSubset<T, LiveMatchUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LiveMatchUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveMatchUpdates
     * const liveMatchUpdate = await prisma.liveMatchUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiveMatchUpdateUpdateManyArgs>(args: SelectSubset<T, LiveMatchUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LiveMatchUpdate.
     * @param {LiveMatchUpdateUpsertArgs} args - Arguments to update or create a LiveMatchUpdate.
     * @example
     * // Update or create a LiveMatchUpdate
     * const liveMatchUpdate = await prisma.liveMatchUpdate.upsert({
     *   create: {
     *     // ... data to create a LiveMatchUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveMatchUpdate we want to update
     *   }
     * })
     */
    upsert<T extends LiveMatchUpdateUpsertArgs>(args: SelectSubset<T, LiveMatchUpdateUpsertArgs<ExtArgs>>): Prisma__LiveMatchUpdateClient<$Result.GetResult<Prisma.$LiveMatchUpdatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LiveMatchUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateCountArgs} args - Arguments to filter LiveMatchUpdates to count.
     * @example
     * // Count the number of LiveMatchUpdates
     * const count = await prisma.liveMatchUpdate.count({
     *   where: {
     *     // ... the filter for the LiveMatchUpdates we want to count
     *   }
     * })
    **/
    count<T extends LiveMatchUpdateCountArgs>(
      args?: Subset<T, LiveMatchUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiveMatchUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LiveMatchUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveMatchUpdateAggregateArgs>(args: Subset<T, LiveMatchUpdateAggregateArgs>): Prisma.PrismaPromise<GetLiveMatchUpdateAggregateType<T>>

    /**
     * Group by LiveMatchUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveMatchUpdateGroupByArgs} args - Group by arguments.
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
      T extends LiveMatchUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiveMatchUpdateGroupByArgs['orderBy'] }
        : { orderBy?: LiveMatchUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LiveMatchUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveMatchUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LiveMatchUpdate model
   */
  readonly fields: LiveMatchUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LiveMatchUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiveMatchUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the LiveMatchUpdate model
   */ 
  interface LiveMatchUpdateFieldRefs {
    readonly id: FieldRef<"LiveMatchUpdate", 'String'>
    readonly eventId: FieldRef<"LiveMatchUpdate", 'String'>
    readonly type: FieldRef<"LiveMatchUpdate", 'LiveEventType'>
    readonly minute: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly homeScore: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly awayScore: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly homeHalfScore: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly awayHalfScore: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly period: FieldRef<"LiveMatchUpdate", 'String'>
    readonly incidentData: FieldRef<"LiveMatchUpdate", 'Json'>
    readonly playerName: FieldRef<"LiveMatchUpdate", 'String'>
    readonly teamSide: FieldRef<"LiveMatchUpdate", 'String'>
    readonly clockMinutes: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly stoppageMinutes: FieldRef<"LiveMatchUpdate", 'Int'>
    readonly extraTime: FieldRef<"LiveMatchUpdate", 'Boolean'>
    readonly matchStatusAfter: FieldRef<"LiveMatchUpdate", 'EventStatus'>
    readonly createdAt: FieldRef<"LiveMatchUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LiveMatchUpdate findUnique
   */
  export type LiveMatchUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter, which LiveMatchUpdate to fetch.
     */
    where: LiveMatchUpdateWhereUniqueInput
  }

  /**
   * LiveMatchUpdate findUniqueOrThrow
   */
  export type LiveMatchUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter, which LiveMatchUpdate to fetch.
     */
    where: LiveMatchUpdateWhereUniqueInput
  }

  /**
   * LiveMatchUpdate findFirst
   */
  export type LiveMatchUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter, which LiveMatchUpdate to fetch.
     */
    where?: LiveMatchUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveMatchUpdates to fetch.
     */
    orderBy?: LiveMatchUpdateOrderByWithRelationInput | LiveMatchUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveMatchUpdates.
     */
    cursor?: LiveMatchUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveMatchUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveMatchUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveMatchUpdates.
     */
    distinct?: LiveMatchUpdateScalarFieldEnum | LiveMatchUpdateScalarFieldEnum[]
  }

  /**
   * LiveMatchUpdate findFirstOrThrow
   */
  export type LiveMatchUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter, which LiveMatchUpdate to fetch.
     */
    where?: LiveMatchUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveMatchUpdates to fetch.
     */
    orderBy?: LiveMatchUpdateOrderByWithRelationInput | LiveMatchUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LiveMatchUpdates.
     */
    cursor?: LiveMatchUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveMatchUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveMatchUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LiveMatchUpdates.
     */
    distinct?: LiveMatchUpdateScalarFieldEnum | LiveMatchUpdateScalarFieldEnum[]
  }

  /**
   * LiveMatchUpdate findMany
   */
  export type LiveMatchUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter, which LiveMatchUpdates to fetch.
     */
    where?: LiveMatchUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LiveMatchUpdates to fetch.
     */
    orderBy?: LiveMatchUpdateOrderByWithRelationInput | LiveMatchUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LiveMatchUpdates.
     */
    cursor?: LiveMatchUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LiveMatchUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LiveMatchUpdates.
     */
    skip?: number
    distinct?: LiveMatchUpdateScalarFieldEnum | LiveMatchUpdateScalarFieldEnum[]
  }

  /**
   * LiveMatchUpdate create
   */
  export type LiveMatchUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a LiveMatchUpdate.
     */
    data: XOR<LiveMatchUpdateCreateInput, LiveMatchUpdateUncheckedCreateInput>
  }

  /**
   * LiveMatchUpdate createMany
   */
  export type LiveMatchUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveMatchUpdates.
     */
    data: LiveMatchUpdateCreateManyInput | LiveMatchUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LiveMatchUpdate createManyAndReturn
   */
  export type LiveMatchUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LiveMatchUpdates.
     */
    data: LiveMatchUpdateCreateManyInput | LiveMatchUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LiveMatchUpdate update
   */
  export type LiveMatchUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a LiveMatchUpdate.
     */
    data: XOR<LiveMatchUpdateUpdateInput, LiveMatchUpdateUncheckedUpdateInput>
    /**
     * Choose, which LiveMatchUpdate to update.
     */
    where: LiveMatchUpdateWhereUniqueInput
  }

  /**
   * LiveMatchUpdate updateMany
   */
  export type LiveMatchUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveMatchUpdates.
     */
    data: XOR<LiveMatchUpdateUpdateManyMutationInput, LiveMatchUpdateUncheckedUpdateManyInput>
    /**
     * Filter which LiveMatchUpdates to update
     */
    where?: LiveMatchUpdateWhereInput
  }

  /**
   * LiveMatchUpdate upsert
   */
  export type LiveMatchUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the LiveMatchUpdate to update in case it exists.
     */
    where: LiveMatchUpdateWhereUniqueInput
    /**
     * In case the LiveMatchUpdate found by the `where` argument doesn't exist, create a new LiveMatchUpdate with this data.
     */
    create: XOR<LiveMatchUpdateCreateInput, LiveMatchUpdateUncheckedCreateInput>
    /**
     * In case the LiveMatchUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiveMatchUpdateUpdateInput, LiveMatchUpdateUncheckedUpdateInput>
  }

  /**
   * LiveMatchUpdate delete
   */
  export type LiveMatchUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
    /**
     * Filter which LiveMatchUpdate to delete.
     */
    where: LiveMatchUpdateWhereUniqueInput
  }

  /**
   * LiveMatchUpdate deleteMany
   */
  export type LiveMatchUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LiveMatchUpdates to delete
     */
    where?: LiveMatchUpdateWhereInput
  }

  /**
   * LiveMatchUpdate without action
   */
  export type LiveMatchUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveMatchUpdate
     */
    select?: LiveMatchUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiveMatchUpdateInclude<ExtArgs> | null
  }


  /**
   * Model ProviderSyncState
   */

  export type AggregateProviderSyncState = {
    _count: ProviderSyncStateCountAggregateOutputType | null
    _avg: ProviderSyncStateAvgAggregateOutputType | null
    _sum: ProviderSyncStateSumAggregateOutputType | null
    _min: ProviderSyncStateMinAggregateOutputType | null
    _max: ProviderSyncStateMaxAggregateOutputType | null
  }

  export type ProviderSyncStateAvgAggregateOutputType = {
    eventsCreated: number | null
    marketsCreated: number | null
    oddsUpdatedCount: number | null
    syncErrors: number | null
  }

  export type ProviderSyncStateSumAggregateOutputType = {
    eventsCreated: number | null
    marketsCreated: number | null
    oddsUpdatedCount: number | null
    syncErrors: number | null
  }

  export type ProviderSyncStateMinAggregateOutputType = {
    id: string | null
    provider: string | null
    lastFullSyncAt: Date | null
    lastIncrementalSyncAt: Date | null
    nextSyncAt: Date | null
    eventsCreated: number | null
    marketsCreated: number | null
    oddsUpdatedCount: number | null
    lastEventId: string | null
    lastChangeId: string | null
    syncErrors: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderSyncStateMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    lastFullSyncAt: Date | null
    lastIncrementalSyncAt: Date | null
    nextSyncAt: Date | null
    eventsCreated: number | null
    marketsCreated: number | null
    oddsUpdatedCount: number | null
    lastEventId: string | null
    lastChangeId: string | null
    syncErrors: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderSyncStateCountAggregateOutputType = {
    id: number
    provider: number
    lastFullSyncAt: number
    lastIncrementalSyncAt: number
    nextSyncAt: number
    eventsCreated: number
    marketsCreated: number
    oddsUpdatedCount: number
    lastEventId: number
    lastChangeId: number
    state: number
    syncErrors: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderSyncStateAvgAggregateInputType = {
    eventsCreated?: true
    marketsCreated?: true
    oddsUpdatedCount?: true
    syncErrors?: true
  }

  export type ProviderSyncStateSumAggregateInputType = {
    eventsCreated?: true
    marketsCreated?: true
    oddsUpdatedCount?: true
    syncErrors?: true
  }

  export type ProviderSyncStateMinAggregateInputType = {
    id?: true
    provider?: true
    lastFullSyncAt?: true
    lastIncrementalSyncAt?: true
    nextSyncAt?: true
    eventsCreated?: true
    marketsCreated?: true
    oddsUpdatedCount?: true
    lastEventId?: true
    lastChangeId?: true
    syncErrors?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderSyncStateMaxAggregateInputType = {
    id?: true
    provider?: true
    lastFullSyncAt?: true
    lastIncrementalSyncAt?: true
    nextSyncAt?: true
    eventsCreated?: true
    marketsCreated?: true
    oddsUpdatedCount?: true
    lastEventId?: true
    lastChangeId?: true
    syncErrors?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderSyncStateCountAggregateInputType = {
    id?: true
    provider?: true
    lastFullSyncAt?: true
    lastIncrementalSyncAt?: true
    nextSyncAt?: true
    eventsCreated?: true
    marketsCreated?: true
    oddsUpdatedCount?: true
    lastEventId?: true
    lastChangeId?: true
    state?: true
    syncErrors?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderSyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderSyncState to aggregate.
     */
    where?: ProviderSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncStates to fetch.
     */
    orderBy?: ProviderSyncStateOrderByWithRelationInput | ProviderSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderSyncStates
    **/
    _count?: true | ProviderSyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderSyncStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSyncStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderSyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderSyncStateMaxAggregateInputType
  }

  export type GetProviderSyncStateAggregateType<T extends ProviderSyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderSyncState[P]>
      : GetScalarType<T[P], AggregateProviderSyncState[P]>
  }




  export type ProviderSyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderSyncStateWhereInput
    orderBy?: ProviderSyncStateOrderByWithAggregationInput | ProviderSyncStateOrderByWithAggregationInput[]
    by: ProviderSyncStateScalarFieldEnum[] | ProviderSyncStateScalarFieldEnum
    having?: ProviderSyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderSyncStateCountAggregateInputType | true
    _avg?: ProviderSyncStateAvgAggregateInputType
    _sum?: ProviderSyncStateSumAggregateInputType
    _min?: ProviderSyncStateMinAggregateInputType
    _max?: ProviderSyncStateMaxAggregateInputType
  }

  export type ProviderSyncStateGroupByOutputType = {
    id: string
    provider: string
    lastFullSyncAt: Date | null
    lastIncrementalSyncAt: Date | null
    nextSyncAt: Date | null
    eventsCreated: number
    marketsCreated: number
    oddsUpdatedCount: number
    lastEventId: string | null
    lastChangeId: string | null
    state: JsonValue | null
    syncErrors: number
    createdAt: Date
    updatedAt: Date
    _count: ProviderSyncStateCountAggregateOutputType | null
    _avg: ProviderSyncStateAvgAggregateOutputType | null
    _sum: ProviderSyncStateSumAggregateOutputType | null
    _min: ProviderSyncStateMinAggregateOutputType | null
    _max: ProviderSyncStateMaxAggregateOutputType | null
  }

  type GetProviderSyncStateGroupByPayload<T extends ProviderSyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderSyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderSyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderSyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderSyncStateGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    lastFullSyncAt?: boolean
    lastIncrementalSyncAt?: boolean
    nextSyncAt?: boolean
    eventsCreated?: boolean
    marketsCreated?: boolean
    oddsUpdatedCount?: boolean
    lastEventId?: boolean
    lastChangeId?: boolean
    state?: boolean
    syncErrors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerSyncState"]>

  export type ProviderSyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    lastFullSyncAt?: boolean
    lastIncrementalSyncAt?: boolean
    nextSyncAt?: boolean
    eventsCreated?: boolean
    marketsCreated?: boolean
    oddsUpdatedCount?: boolean
    lastEventId?: boolean
    lastChangeId?: boolean
    state?: boolean
    syncErrors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["providerSyncState"]>

  export type ProviderSyncStateSelectScalar = {
    id?: boolean
    provider?: boolean
    lastFullSyncAt?: boolean
    lastIncrementalSyncAt?: boolean
    nextSyncAt?: boolean
    eventsCreated?: boolean
    marketsCreated?: boolean
    oddsUpdatedCount?: boolean
    lastEventId?: boolean
    lastChangeId?: boolean
    state?: boolean
    syncErrors?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ProviderSyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderSyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      lastFullSyncAt: Date | null
      lastIncrementalSyncAt: Date | null
      nextSyncAt: Date | null
      eventsCreated: number
      marketsCreated: number
      oddsUpdatedCount: number
      lastEventId: string | null
      lastChangeId: string | null
      state: Prisma.JsonValue | null
      syncErrors: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["providerSyncState"]>
    composites: {}
  }

  type ProviderSyncStateGetPayload<S extends boolean | null | undefined | ProviderSyncStateDefaultArgs> = $Result.GetResult<Prisma.$ProviderSyncStatePayload, S>

  type ProviderSyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProviderSyncStateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProviderSyncStateCountAggregateInputType | true
    }

  export interface ProviderSyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderSyncState'], meta: { name: 'ProviderSyncState' } }
    /**
     * Find zero or one ProviderSyncState that matches the filter.
     * @param {ProviderSyncStateFindUniqueArgs} args - Arguments to find a ProviderSyncState
     * @example
     * // Get one ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderSyncStateFindUniqueArgs>(args: SelectSubset<T, ProviderSyncStateFindUniqueArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProviderSyncState that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProviderSyncStateFindUniqueOrThrowArgs} args - Arguments to find a ProviderSyncState
     * @example
     * // Get one ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderSyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderSyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProviderSyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateFindFirstArgs} args - Arguments to find a ProviderSyncState
     * @example
     * // Get one ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderSyncStateFindFirstArgs>(args?: SelectSubset<T, ProviderSyncStateFindFirstArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProviderSyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateFindFirstOrThrowArgs} args - Arguments to find a ProviderSyncState
     * @example
     * // Get one ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderSyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderSyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProviderSyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderSyncStates
     * const providerSyncStates = await prisma.providerSyncState.findMany()
     * 
     * // Get first 10 ProviderSyncStates
     * const providerSyncStates = await prisma.providerSyncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerSyncStateWithIdOnly = await prisma.providerSyncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderSyncStateFindManyArgs>(args?: SelectSubset<T, ProviderSyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProviderSyncState.
     * @param {ProviderSyncStateCreateArgs} args - Arguments to create a ProviderSyncState.
     * @example
     * // Create one ProviderSyncState
     * const ProviderSyncState = await prisma.providerSyncState.create({
     *   data: {
     *     // ... data to create a ProviderSyncState
     *   }
     * })
     * 
     */
    create<T extends ProviderSyncStateCreateArgs>(args: SelectSubset<T, ProviderSyncStateCreateArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProviderSyncStates.
     * @param {ProviderSyncStateCreateManyArgs} args - Arguments to create many ProviderSyncStates.
     * @example
     * // Create many ProviderSyncStates
     * const providerSyncState = await prisma.providerSyncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderSyncStateCreateManyArgs>(args?: SelectSubset<T, ProviderSyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderSyncStates and returns the data saved in the database.
     * @param {ProviderSyncStateCreateManyAndReturnArgs} args - Arguments to create many ProviderSyncStates.
     * @example
     * // Create many ProviderSyncStates
     * const providerSyncState = await prisma.providerSyncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderSyncStates and only return the `id`
     * const providerSyncStateWithIdOnly = await prisma.providerSyncState.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderSyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderSyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProviderSyncState.
     * @param {ProviderSyncStateDeleteArgs} args - Arguments to delete one ProviderSyncState.
     * @example
     * // Delete one ProviderSyncState
     * const ProviderSyncState = await prisma.providerSyncState.delete({
     *   where: {
     *     // ... filter to delete one ProviderSyncState
     *   }
     * })
     * 
     */
    delete<T extends ProviderSyncStateDeleteArgs>(args: SelectSubset<T, ProviderSyncStateDeleteArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProviderSyncState.
     * @param {ProviderSyncStateUpdateArgs} args - Arguments to update one ProviderSyncState.
     * @example
     * // Update one ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderSyncStateUpdateArgs>(args: SelectSubset<T, ProviderSyncStateUpdateArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProviderSyncStates.
     * @param {ProviderSyncStateDeleteManyArgs} args - Arguments to filter ProviderSyncStates to delete.
     * @example
     * // Delete a few ProviderSyncStates
     * const { count } = await prisma.providerSyncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderSyncStateDeleteManyArgs>(args?: SelectSubset<T, ProviderSyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderSyncStates
     * const providerSyncState = await prisma.providerSyncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderSyncStateUpdateManyArgs>(args: SelectSubset<T, ProviderSyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderSyncState.
     * @param {ProviderSyncStateUpsertArgs} args - Arguments to update or create a ProviderSyncState.
     * @example
     * // Update or create a ProviderSyncState
     * const providerSyncState = await prisma.providerSyncState.upsert({
     *   create: {
     *     // ... data to create a ProviderSyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderSyncState we want to update
     *   }
     * })
     */
    upsert<T extends ProviderSyncStateUpsertArgs>(args: SelectSubset<T, ProviderSyncStateUpsertArgs<ExtArgs>>): Prisma__ProviderSyncStateClient<$Result.GetResult<Prisma.$ProviderSyncStatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProviderSyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateCountArgs} args - Arguments to filter ProviderSyncStates to count.
     * @example
     * // Count the number of ProviderSyncStates
     * const count = await prisma.providerSyncState.count({
     *   where: {
     *     // ... the filter for the ProviderSyncStates we want to count
     *   }
     * })
    **/
    count<T extends ProviderSyncStateCountArgs>(
      args?: Subset<T, ProviderSyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderSyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderSyncStateAggregateArgs>(args: Subset<T, ProviderSyncStateAggregateArgs>): Prisma.PrismaPromise<GetProviderSyncStateAggregateType<T>>

    /**
     * Group by ProviderSyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderSyncStateGroupByArgs} args - Group by arguments.
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
      T extends ProviderSyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderSyncStateGroupByArgs['orderBy'] }
        : { orderBy?: ProviderSyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderSyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderSyncState model
   */
  readonly fields: ProviderSyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderSyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderSyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ProviderSyncState model
   */ 
  interface ProviderSyncStateFieldRefs {
    readonly id: FieldRef<"ProviderSyncState", 'String'>
    readonly provider: FieldRef<"ProviderSyncState", 'String'>
    readonly lastFullSyncAt: FieldRef<"ProviderSyncState", 'DateTime'>
    readonly lastIncrementalSyncAt: FieldRef<"ProviderSyncState", 'DateTime'>
    readonly nextSyncAt: FieldRef<"ProviderSyncState", 'DateTime'>
    readonly eventsCreated: FieldRef<"ProviderSyncState", 'Int'>
    readonly marketsCreated: FieldRef<"ProviderSyncState", 'Int'>
    readonly oddsUpdatedCount: FieldRef<"ProviderSyncState", 'Int'>
    readonly lastEventId: FieldRef<"ProviderSyncState", 'String'>
    readonly lastChangeId: FieldRef<"ProviderSyncState", 'String'>
    readonly state: FieldRef<"ProviderSyncState", 'Json'>
    readonly syncErrors: FieldRef<"ProviderSyncState", 'Int'>
    readonly createdAt: FieldRef<"ProviderSyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"ProviderSyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderSyncState findUnique
   */
  export type ProviderSyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter, which ProviderSyncState to fetch.
     */
    where: ProviderSyncStateWhereUniqueInput
  }

  /**
   * ProviderSyncState findUniqueOrThrow
   */
  export type ProviderSyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter, which ProviderSyncState to fetch.
     */
    where: ProviderSyncStateWhereUniqueInput
  }

  /**
   * ProviderSyncState findFirst
   */
  export type ProviderSyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter, which ProviderSyncState to fetch.
     */
    where?: ProviderSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncStates to fetch.
     */
    orderBy?: ProviderSyncStateOrderByWithRelationInput | ProviderSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderSyncStates.
     */
    cursor?: ProviderSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderSyncStates.
     */
    distinct?: ProviderSyncStateScalarFieldEnum | ProviderSyncStateScalarFieldEnum[]
  }

  /**
   * ProviderSyncState findFirstOrThrow
   */
  export type ProviderSyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter, which ProviderSyncState to fetch.
     */
    where?: ProviderSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncStates to fetch.
     */
    orderBy?: ProviderSyncStateOrderByWithRelationInput | ProviderSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderSyncStates.
     */
    cursor?: ProviderSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderSyncStates.
     */
    distinct?: ProviderSyncStateScalarFieldEnum | ProviderSyncStateScalarFieldEnum[]
  }

  /**
   * ProviderSyncState findMany
   */
  export type ProviderSyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter, which ProviderSyncStates to fetch.
     */
    where?: ProviderSyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderSyncStates to fetch.
     */
    orderBy?: ProviderSyncStateOrderByWithRelationInput | ProviderSyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderSyncStates.
     */
    cursor?: ProviderSyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderSyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderSyncStates.
     */
    skip?: number
    distinct?: ProviderSyncStateScalarFieldEnum | ProviderSyncStateScalarFieldEnum[]
  }

  /**
   * ProviderSyncState create
   */
  export type ProviderSyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * The data needed to create a ProviderSyncState.
     */
    data: XOR<ProviderSyncStateCreateInput, ProviderSyncStateUncheckedCreateInput>
  }

  /**
   * ProviderSyncState createMany
   */
  export type ProviderSyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderSyncStates.
     */
    data: ProviderSyncStateCreateManyInput | ProviderSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderSyncState createManyAndReturn
   */
  export type ProviderSyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProviderSyncStates.
     */
    data: ProviderSyncStateCreateManyInput | ProviderSyncStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderSyncState update
   */
  export type ProviderSyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * The data needed to update a ProviderSyncState.
     */
    data: XOR<ProviderSyncStateUpdateInput, ProviderSyncStateUncheckedUpdateInput>
    /**
     * Choose, which ProviderSyncState to update.
     */
    where: ProviderSyncStateWhereUniqueInput
  }

  /**
   * ProviderSyncState updateMany
   */
  export type ProviderSyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderSyncStates.
     */
    data: XOR<ProviderSyncStateUpdateManyMutationInput, ProviderSyncStateUncheckedUpdateManyInput>
    /**
     * Filter which ProviderSyncStates to update
     */
    where?: ProviderSyncStateWhereInput
  }

  /**
   * ProviderSyncState upsert
   */
  export type ProviderSyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * The filter to search for the ProviderSyncState to update in case it exists.
     */
    where: ProviderSyncStateWhereUniqueInput
    /**
     * In case the ProviderSyncState found by the `where` argument doesn't exist, create a new ProviderSyncState with this data.
     */
    create: XOR<ProviderSyncStateCreateInput, ProviderSyncStateUncheckedCreateInput>
    /**
     * In case the ProviderSyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderSyncStateUpdateInput, ProviderSyncStateUncheckedUpdateInput>
  }

  /**
   * ProviderSyncState delete
   */
  export type ProviderSyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
    /**
     * Filter which ProviderSyncState to delete.
     */
    where: ProviderSyncStateWhereUniqueInput
  }

  /**
   * ProviderSyncState deleteMany
   */
  export type ProviderSyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderSyncStates to delete
     */
    where?: ProviderSyncStateWhereInput
  }

  /**
   * ProviderSyncState without action
   */
  export type ProviderSyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderSyncState
     */
    select?: ProviderSyncStateSelect<ExtArgs> | null
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


  export const SportScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    active: 'active',
    orderIndex: 'orderIndex',
    iconUrl: 'iconUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SportScalarFieldEnum = (typeof SportScalarFieldEnum)[keyof typeof SportScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    flag: 'flag'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const LeagueScalarFieldEnum: {
    id: 'id',
    providerLeagueId: 'providerLeagueId',
    name: 'name',
    sportId: 'sportId',
    countryId: 'countryId',
    tier: 'tier',
    active: 'active',
    isTop: 'isTop',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type LeagueScalarFieldEnum = (typeof LeagueScalarFieldEnum)[keyof typeof LeagueScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    providerTeamId: 'providerTeamId',
    name: 'name',
    shortName: 'shortName',
    logoUrl: 'logoUrl',
    sportId: 'sportId',
    countryId: 'countryId',
    aliases: 'aliases'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    providerEventId: 'providerEventId',
    name: 'name',
    sportId: 'sportId',
    leagueId: 'leagueId',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    homeTeamName: 'homeTeamName',
    awayTeamName: 'awayTeamName',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    homeHalfScore: 'homeHalfScore',
    awayHalfScore: 'awayHalfScore',
    extraTimeScore: 'extraTimeScore',
    penaltyScore: 'penaltyScore',
    status: 'status',
    kickoffAt: 'kickoffAt',
    liveStartedAt: 'liveStartedAt',
    liveUpdatedAt: 'liveUpdatedAt',
    firstHalfStart: 'firstHalfStart',
    secondHalfStart: 'secondHalfStart',
    minuteOfMatch: 'minuteOfMatch',
    injuryMinutes: 'injuryMinutes',
    liveCoverageAvailable: 'liveCoverageAvailable',
    liveStreamAvailable: 'liveStreamAvailable',
    streamUrl: 'streamUrl',
    eventMeta: 'eventMeta',
    isTop: 'isTop',
    isFeatured: 'isFeatured',
    oddsLastCheckedAt: 'oddsLastCheckedAt',
    marketsCount: 'marketsCount',
    activeBetCount: 'activeBetCount',
    settledAt: 'settledAt',
    winner: 'winner',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    providerMarketId: 'providerMarketId',
    eventId: 'eventId',
    type: 'type',
    name: 'name',
    specifiers: 'specifiers',
    handicapValue: 'handicapValue',
    totalLineValue: 'totalLineValue',
    period: 'period',
    status: 'status',
    displayedName: 'displayedName',
    cashoutAvailable: 'cashoutAvailable',
    firstCashoutAt: 'firstCashoutAt',
    lastSuspendedAt: 'lastSuspendedAt',
    suspendedReason: 'suspendedReason',
    source: 'source',
    openDate: 'openDate',
    closeDate: 'closeDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const MarketSelectionScalarFieldEnum: {
    id: 'id',
    providerSelectionId: 'providerSelectionId',
    marketId: 'marketId',
    name: 'name',
    outcome: 'outcome',
    odds: 'odds',
    oddsDisplay: 'oddsDisplay',
    status: 'status',
    probabilityPercent: 'probabilityPercent',
    handicapValue: 'handicapValue',
    totalLineValue: 'totalLineValue',
    originalOdds: 'originalOdds',
    lastChangedAt: 'lastChangedAt',
    lastChangedBy: 'lastChangedBy',
    isTrendingUp: 'isTrendingUp',
    isBestOffered: 'isBestOffered',
    meta: 'meta'
  };

  export type MarketSelectionScalarFieldEnum = (typeof MarketSelectionScalarFieldEnum)[keyof typeof MarketSelectionScalarFieldEnum]


  export const LiveMatchUpdateScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    type: 'type',
    minute: 'minute',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    homeHalfScore: 'homeHalfScore',
    awayHalfScore: 'awayHalfScore',
    period: 'period',
    incidentData: 'incidentData',
    playerName: 'playerName',
    teamSide: 'teamSide',
    clockMinutes: 'clockMinutes',
    stoppageMinutes: 'stoppageMinutes',
    extraTime: 'extraTime',
    matchStatusAfter: 'matchStatusAfter',
    createdAt: 'createdAt'
  };

  export type LiveMatchUpdateScalarFieldEnum = (typeof LiveMatchUpdateScalarFieldEnum)[keyof typeof LiveMatchUpdateScalarFieldEnum]


  export const ProviderSyncStateScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    lastFullSyncAt: 'lastFullSyncAt',
    lastIncrementalSyncAt: 'lastIncrementalSyncAt',
    nextSyncAt: 'nextSyncAt',
    eventsCreated: 'eventsCreated',
    marketsCreated: 'marketsCreated',
    oddsUpdatedCount: 'oddsUpdatedCount',
    lastEventId: 'lastEventId',
    lastChangeId: 'lastChangeId',
    state: 'state',
    syncErrors: 'syncErrors',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderSyncStateScalarFieldEnum = (typeof ProviderSyncStateScalarFieldEnum)[keyof typeof ProviderSyncStateScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'MarketStatus'
   */
  export type EnumMarketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketStatus'>
    


  /**
   * Reference to a field of type 'MarketStatus[]'
   */
  export type ListEnumMarketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarketStatus[]'>
    


  /**
   * Reference to a field of type 'SelectionOutcome'
   */
  export type EnumSelectionOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionOutcome'>
    


  /**
   * Reference to a field of type 'SelectionOutcome[]'
   */
  export type ListEnumSelectionOutcomeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SelectionOutcome[]'>
    


  /**
   * Reference to a field of type 'LiveEventType'
   */
  export type EnumLiveEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LiveEventType'>
    


  /**
   * Reference to a field of type 'LiveEventType[]'
   */
  export type ListEnumLiveEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LiveEventType[]'>
    


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


  export type SportWhereInput = {
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    id?: StringFilter<"Sport"> | string
    code?: StringFilter<"Sport"> | string
    name?: StringFilter<"Sport"> | string
    active?: BoolFilter<"Sport"> | boolean
    orderIndex?: IntFilter<"Sport"> | number
    iconUrl?: StringNullableFilter<"Sport"> | string | null
    createdAt?: DateTimeFilter<"Sport"> | Date | string
    updatedAt?: DateTimeFilter<"Sport"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Sport"> | Date | string | null
    leagues?: LeagueListRelationFilter
    teams?: TeamListRelationFilter
    events?: EventListRelationFilter
  }

  export type SportOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    orderIndex?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    leagues?: LeagueOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type SportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SportWhereInput | SportWhereInput[]
    OR?: SportWhereInput[]
    NOT?: SportWhereInput | SportWhereInput[]
    name?: StringFilter<"Sport"> | string
    active?: BoolFilter<"Sport"> | boolean
    orderIndex?: IntFilter<"Sport"> | number
    iconUrl?: StringNullableFilter<"Sport"> | string | null
    createdAt?: DateTimeFilter<"Sport"> | Date | string
    updatedAt?: DateTimeFilter<"Sport"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Sport"> | Date | string | null
    leagues?: LeagueListRelationFilter
    teams?: TeamListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "code">

  export type SportOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    orderIndex?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SportCountOrderByAggregateInput
    _avg?: SportAvgOrderByAggregateInput
    _max?: SportMaxOrderByAggregateInput
    _min?: SportMinOrderByAggregateInput
    _sum?: SportSumOrderByAggregateInput
  }

  export type SportScalarWhereWithAggregatesInput = {
    AND?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    OR?: SportScalarWhereWithAggregatesInput[]
    NOT?: SportScalarWhereWithAggregatesInput | SportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sport"> | string
    code?: StringWithAggregatesFilter<"Sport"> | string
    name?: StringWithAggregatesFilter<"Sport"> | string
    active?: BoolWithAggregatesFilter<"Sport"> | boolean
    orderIndex?: IntWithAggregatesFilter<"Sport"> | number
    iconUrl?: StringNullableWithAggregatesFilter<"Sport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sport"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Sport"> | Date | string | null
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    code?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    flag?: StringNullableFilter<"Country"> | string | null
    leagues?: LeagueListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    flag?: SortOrderInput | SortOrder
    leagues?: LeagueOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    flag?: StringNullableFilter<"Country"> | string | null
    leagues?: LeagueListRelationFilter
    teams?: TeamListRelationFilter
  }, "id" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    flag?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    code?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    flag?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type LeagueWhereInput = {
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    id?: StringFilter<"League"> | string
    providerLeagueId?: StringFilter<"League"> | string
    name?: StringFilter<"League"> | string
    sportId?: StringFilter<"League"> | string
    countryId?: StringNullableFilter<"League"> | string | null
    tier?: IntNullableFilter<"League"> | number | null
    active?: BoolFilter<"League"> | boolean
    isTop?: BoolFilter<"League"> | boolean
    createdAt?: DateTimeFilter<"League"> | Date | string
    updatedAt?: DateTimeFilter<"League"> | Date | string
    deletedAt?: DateTimeNullableFilter<"League"> | Date | string | null
    sport?: XOR<SportRelationFilter, SportWhereInput>
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    events?: EventListRelationFilter
  }

  export type LeagueOrderByWithRelationInput = {
    id?: SortOrder
    providerLeagueId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    active?: SortOrder
    isTop?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sport?: SportOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
  }

  export type LeagueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerLeagueId?: string
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    name?: StringFilter<"League"> | string
    sportId?: StringFilter<"League"> | string
    countryId?: StringNullableFilter<"League"> | string | null
    tier?: IntNullableFilter<"League"> | number | null
    active?: BoolFilter<"League"> | boolean
    isTop?: BoolFilter<"League"> | boolean
    createdAt?: DateTimeFilter<"League"> | Date | string
    updatedAt?: DateTimeFilter<"League"> | Date | string
    deletedAt?: DateTimeNullableFilter<"League"> | Date | string | null
    sport?: XOR<SportRelationFilter, SportWhereInput>
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    events?: EventListRelationFilter
  }, "id" | "providerLeagueId">

  export type LeagueOrderByWithAggregationInput = {
    id?: SortOrder
    providerLeagueId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    active?: SortOrder
    isTop?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LeagueCountOrderByAggregateInput
    _avg?: LeagueAvgOrderByAggregateInput
    _max?: LeagueMaxOrderByAggregateInput
    _min?: LeagueMinOrderByAggregateInput
    _sum?: LeagueSumOrderByAggregateInput
  }

  export type LeagueScalarWhereWithAggregatesInput = {
    AND?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    OR?: LeagueScalarWhereWithAggregatesInput[]
    NOT?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"League"> | string
    providerLeagueId?: StringWithAggregatesFilter<"League"> | string
    name?: StringWithAggregatesFilter<"League"> | string
    sportId?: StringWithAggregatesFilter<"League"> | string
    countryId?: StringNullableWithAggregatesFilter<"League"> | string | null
    tier?: IntNullableWithAggregatesFilter<"League"> | number | null
    active?: BoolWithAggregatesFilter<"League"> | boolean
    isTop?: BoolWithAggregatesFilter<"League"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"League"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"League"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"League"> | Date | string | null
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    providerTeamId?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    shortName?: StringNullableFilter<"Team"> | string | null
    logoUrl?: StringNullableFilter<"Team"> | string | null
    sportId?: StringFilter<"Team"> | string
    countryId?: StringNullableFilter<"Team"> | string | null
    aliases?: StringNullableListFilter<"Team">
    sport?: XOR<SportRelationFilter, SportWhereInput>
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    homeEvents?: EventListRelationFilter
    awayEvents?: EventListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    providerTeamId?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    sportId?: SortOrder
    countryId?: SortOrderInput | SortOrder
    aliases?: SortOrder
    sport?: SportOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    homeEvents?: EventOrderByRelationAggregateInput
    awayEvents?: EventOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerTeamId?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    shortName?: StringNullableFilter<"Team"> | string | null
    logoUrl?: StringNullableFilter<"Team"> | string | null
    sportId?: StringFilter<"Team"> | string
    countryId?: StringNullableFilter<"Team"> | string | null
    aliases?: StringNullableListFilter<"Team">
    sport?: XOR<SportRelationFilter, SportWhereInput>
    country?: XOR<CountryNullableRelationFilter, CountryWhereInput> | null
    homeEvents?: EventListRelationFilter
    awayEvents?: EventListRelationFilter
  }, "id" | "providerTeamId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    providerTeamId?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    sportId?: SortOrder
    countryId?: SortOrderInput | SortOrder
    aliases?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    providerTeamId?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    shortName?: StringNullableWithAggregatesFilter<"Team"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Team"> | string | null
    sportId?: StringWithAggregatesFilter<"Team"> | string
    countryId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    aliases?: StringNullableListFilter<"Team">
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    providerEventId?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    sportId?: StringFilter<"Event"> | string
    leagueId?: StringFilter<"Event"> | string
    homeTeamId?: StringNullableFilter<"Event"> | string | null
    awayTeamId?: StringNullableFilter<"Event"> | string | null
    homeTeamName?: StringNullableFilter<"Event"> | string | null
    awayTeamName?: StringNullableFilter<"Event"> | string | null
    homeScore?: IntNullableFilter<"Event"> | number | null
    awayScore?: IntNullableFilter<"Event"> | number | null
    homeHalfScore?: IntNullableFilter<"Event"> | number | null
    awayHalfScore?: IntNullableFilter<"Event"> | number | null
    extraTimeScore?: StringNullableFilter<"Event"> | string | null
    penaltyScore?: StringNullableFilter<"Event"> | string | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    kickoffAt?: DateTimeFilter<"Event"> | Date | string
    liveStartedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    liveUpdatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    firstHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    secondHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    minuteOfMatch?: IntNullableFilter<"Event"> | number | null
    injuryMinutes?: IntNullableFilter<"Event"> | number | null
    liveCoverageAvailable?: BoolNullableFilter<"Event"> | boolean | null
    liveStreamAvailable?: BoolNullableFilter<"Event"> | boolean | null
    streamUrl?: StringNullableFilter<"Event"> | string | null
    eventMeta?: JsonNullableFilter<"Event">
    isTop?: BoolNullableFilter<"Event"> | boolean | null
    isFeatured?: BoolNullableFilter<"Event"> | boolean | null
    oddsLastCheckedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    marketsCount?: IntFilter<"Event"> | number
    activeBetCount?: IntFilter<"Event"> | number
    settledAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    winner?: StringNullableFilter<"Event"> | string | null
    slug?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    sport?: XOR<SportRelationFilter, SportWhereInput>
    league?: XOR<LeagueRelationFilter, LeagueWhereInput>
    homeTeam?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    awayTeam?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    markets?: MarketListRelationFilter
    liveUpdates?: LiveMatchUpdateListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    leagueId?: SortOrder
    homeTeamId?: SortOrderInput | SortOrder
    awayTeamId?: SortOrderInput | SortOrder
    homeTeamName?: SortOrderInput | SortOrder
    awayTeamName?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    homeHalfScore?: SortOrderInput | SortOrder
    awayHalfScore?: SortOrderInput | SortOrder
    extraTimeScore?: SortOrderInput | SortOrder
    penaltyScore?: SortOrderInput | SortOrder
    status?: SortOrder
    kickoffAt?: SortOrder
    liveStartedAt?: SortOrderInput | SortOrder
    liveUpdatedAt?: SortOrderInput | SortOrder
    firstHalfStart?: SortOrderInput | SortOrder
    secondHalfStart?: SortOrderInput | SortOrder
    minuteOfMatch?: SortOrderInput | SortOrder
    injuryMinutes?: SortOrderInput | SortOrder
    liveCoverageAvailable?: SortOrderInput | SortOrder
    liveStreamAvailable?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    eventMeta?: SortOrderInput | SortOrder
    isTop?: SortOrderInput | SortOrder
    isFeatured?: SortOrderInput | SortOrder
    oddsLastCheckedAt?: SortOrderInput | SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sport?: SportOrderByWithRelationInput
    league?: LeagueOrderByWithRelationInput
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
    markets?: MarketOrderByRelationAggregateInput
    liveUpdates?: LiveMatchUpdateOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerEventId?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    sportId?: StringFilter<"Event"> | string
    leagueId?: StringFilter<"Event"> | string
    homeTeamId?: StringNullableFilter<"Event"> | string | null
    awayTeamId?: StringNullableFilter<"Event"> | string | null
    homeTeamName?: StringNullableFilter<"Event"> | string | null
    awayTeamName?: StringNullableFilter<"Event"> | string | null
    homeScore?: IntNullableFilter<"Event"> | number | null
    awayScore?: IntNullableFilter<"Event"> | number | null
    homeHalfScore?: IntNullableFilter<"Event"> | number | null
    awayHalfScore?: IntNullableFilter<"Event"> | number | null
    extraTimeScore?: StringNullableFilter<"Event"> | string | null
    penaltyScore?: StringNullableFilter<"Event"> | string | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    kickoffAt?: DateTimeFilter<"Event"> | Date | string
    liveStartedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    liveUpdatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    firstHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    secondHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    minuteOfMatch?: IntNullableFilter<"Event"> | number | null
    injuryMinutes?: IntNullableFilter<"Event"> | number | null
    liveCoverageAvailable?: BoolNullableFilter<"Event"> | boolean | null
    liveStreamAvailable?: BoolNullableFilter<"Event"> | boolean | null
    streamUrl?: StringNullableFilter<"Event"> | string | null
    eventMeta?: JsonNullableFilter<"Event">
    isTop?: BoolNullableFilter<"Event"> | boolean | null
    isFeatured?: BoolNullableFilter<"Event"> | boolean | null
    oddsLastCheckedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    marketsCount?: IntFilter<"Event"> | number
    activeBetCount?: IntFilter<"Event"> | number
    settledAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    winner?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    sport?: XOR<SportRelationFilter, SportWhereInput>
    league?: XOR<LeagueRelationFilter, LeagueWhereInput>
    homeTeam?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    awayTeam?: XOR<TeamNullableRelationFilter, TeamWhereInput> | null
    markets?: MarketListRelationFilter
    liveUpdates?: LiveMatchUpdateListRelationFilter
  }, "id" | "providerEventId" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    leagueId?: SortOrder
    homeTeamId?: SortOrderInput | SortOrder
    awayTeamId?: SortOrderInput | SortOrder
    homeTeamName?: SortOrderInput | SortOrder
    awayTeamName?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    homeHalfScore?: SortOrderInput | SortOrder
    awayHalfScore?: SortOrderInput | SortOrder
    extraTimeScore?: SortOrderInput | SortOrder
    penaltyScore?: SortOrderInput | SortOrder
    status?: SortOrder
    kickoffAt?: SortOrder
    liveStartedAt?: SortOrderInput | SortOrder
    liveUpdatedAt?: SortOrderInput | SortOrder
    firstHalfStart?: SortOrderInput | SortOrder
    secondHalfStart?: SortOrderInput | SortOrder
    minuteOfMatch?: SortOrderInput | SortOrder
    injuryMinutes?: SortOrderInput | SortOrder
    liveCoverageAvailable?: SortOrderInput | SortOrder
    liveStreamAvailable?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    eventMeta?: SortOrderInput | SortOrder
    isTop?: SortOrderInput | SortOrder
    isFeatured?: SortOrderInput | SortOrder
    oddsLastCheckedAt?: SortOrderInput | SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    winner?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    providerEventId?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    sportId?: StringWithAggregatesFilter<"Event"> | string
    leagueId?: StringWithAggregatesFilter<"Event"> | string
    homeTeamId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    awayTeamId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    homeTeamName?: StringNullableWithAggregatesFilter<"Event"> | string | null
    awayTeamName?: StringNullableWithAggregatesFilter<"Event"> | string | null
    homeScore?: IntNullableWithAggregatesFilter<"Event"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"Event"> | number | null
    homeHalfScore?: IntNullableWithAggregatesFilter<"Event"> | number | null
    awayHalfScore?: IntNullableWithAggregatesFilter<"Event"> | number | null
    extraTimeScore?: StringNullableWithAggregatesFilter<"Event"> | string | null
    penaltyScore?: StringNullableWithAggregatesFilter<"Event"> | string | null
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    kickoffAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    liveStartedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    liveUpdatedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    firstHalfStart?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    secondHalfStart?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    minuteOfMatch?: IntNullableWithAggregatesFilter<"Event"> | number | null
    injuryMinutes?: IntNullableWithAggregatesFilter<"Event"> | number | null
    liveCoverageAvailable?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    liveStreamAvailable?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    streamUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventMeta?: JsonNullableWithAggregatesFilter<"Event">
    isTop?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    isFeatured?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    oddsLastCheckedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    marketsCount?: IntWithAggregatesFilter<"Event"> | number
    activeBetCount?: IntWithAggregatesFilter<"Event"> | number
    settledAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    winner?: StringNullableWithAggregatesFilter<"Event"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    providerMarketId?: StringFilter<"Market"> | string
    eventId?: StringFilter<"Market"> | string
    type?: EnumMarketTypeFilter<"Market"> | $Enums.MarketType
    name?: StringFilter<"Market"> | string
    specifiers?: JsonNullableFilter<"Market">
    handicapValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    period?: StringNullableFilter<"Market"> | string | null
    status?: EnumMarketStatusFilter<"Market"> | $Enums.MarketStatus
    displayedName?: StringNullableFilter<"Market"> | string | null
    cashoutAvailable?: BoolFilter<"Market"> | boolean
    firstCashoutAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    lastSuspendedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    suspendedReason?: StringNullableFilter<"Market"> | string | null
    source?: StringNullableFilter<"Market"> | string | null
    openDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    closeDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    event?: XOR<EventRelationFilter, EventWhereInput>
    selections?: MarketSelectionListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    providerMarketId?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    specifiers?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    status?: SortOrder
    displayedName?: SortOrderInput | SortOrder
    cashoutAvailable?: SortOrder
    firstCashoutAt?: SortOrderInput | SortOrder
    lastSuspendedAt?: SortOrderInput | SortOrder
    suspendedReason?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    openDate?: SortOrderInput | SortOrder
    closeDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    selections?: MarketSelectionOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerMarketId?: string
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    eventId?: StringFilter<"Market"> | string
    type?: EnumMarketTypeFilter<"Market"> | $Enums.MarketType
    name?: StringFilter<"Market"> | string
    specifiers?: JsonNullableFilter<"Market">
    handicapValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    period?: StringNullableFilter<"Market"> | string | null
    status?: EnumMarketStatusFilter<"Market"> | $Enums.MarketStatus
    displayedName?: StringNullableFilter<"Market"> | string | null
    cashoutAvailable?: BoolFilter<"Market"> | boolean
    firstCashoutAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    lastSuspendedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    suspendedReason?: StringNullableFilter<"Market"> | string | null
    source?: StringNullableFilter<"Market"> | string | null
    openDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    closeDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    event?: XOR<EventRelationFilter, EventWhereInput>
    selections?: MarketSelectionListRelationFilter
  }, "id" | "providerMarketId">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    providerMarketId?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    specifiers?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    status?: SortOrder
    displayedName?: SortOrderInput | SortOrder
    cashoutAvailable?: SortOrder
    firstCashoutAt?: SortOrderInput | SortOrder
    lastSuspendedAt?: SortOrderInput | SortOrder
    suspendedReason?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    openDate?: SortOrderInput | SortOrder
    closeDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MarketCountOrderByAggregateInput
    _avg?: MarketAvgOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
    _sum?: MarketSumOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    providerMarketId?: StringWithAggregatesFilter<"Market"> | string
    eventId?: StringWithAggregatesFilter<"Market"> | string
    type?: EnumMarketTypeWithAggregatesFilter<"Market"> | $Enums.MarketType
    name?: StringWithAggregatesFilter<"Market"> | string
    specifiers?: JsonNullableWithAggregatesFilter<"Market">
    handicapValue?: DecimalNullableWithAggregatesFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableWithAggregatesFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    period?: StringNullableWithAggregatesFilter<"Market"> | string | null
    status?: EnumMarketStatusWithAggregatesFilter<"Market"> | $Enums.MarketStatus
    displayedName?: StringNullableWithAggregatesFilter<"Market"> | string | null
    cashoutAvailable?: BoolWithAggregatesFilter<"Market"> | boolean
    firstCashoutAt?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    lastSuspendedAt?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    suspendedReason?: StringNullableWithAggregatesFilter<"Market"> | string | null
    source?: StringNullableWithAggregatesFilter<"Market"> | string | null
    openDate?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    closeDate?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Market"> | Date | string | null
  }

  export type MarketSelectionWhereInput = {
    AND?: MarketSelectionWhereInput | MarketSelectionWhereInput[]
    OR?: MarketSelectionWhereInput[]
    NOT?: MarketSelectionWhereInput | MarketSelectionWhereInput[]
    id?: StringFilter<"MarketSelection"> | string
    providerSelectionId?: StringFilter<"MarketSelection"> | string
    marketId?: StringFilter<"MarketSelection"> | string
    name?: StringFilter<"MarketSelection"> | string
    outcome?: EnumSelectionOutcomeFilter<"MarketSelection"> | $Enums.SelectionOutcome
    odds?: DecimalFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplay?: StringNullableFilter<"MarketSelection"> | string | null
    status?: EnumMarketStatusFilter<"MarketSelection"> | $Enums.MarketStatus
    probabilityPercent?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    handicapValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    originalOdds?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: DateTimeNullableFilter<"MarketSelection"> | Date | string | null
    lastChangedBy?: StringNullableFilter<"MarketSelection"> | string | null
    isTrendingUp?: BoolFilter<"MarketSelection"> | boolean
    isBestOffered?: BoolFilter<"MarketSelection"> | boolean
    meta?: JsonNullableFilter<"MarketSelection">
    market?: XOR<MarketRelationFilter, MarketWhereInput>
  }

  export type MarketSelectionOrderByWithRelationInput = {
    id?: SortOrder
    providerSelectionId?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    outcome?: SortOrder
    odds?: SortOrder
    oddsDisplay?: SortOrderInput | SortOrder
    status?: SortOrder
    probabilityPercent?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    originalOdds?: SortOrderInput | SortOrder
    lastChangedAt?: SortOrderInput | SortOrder
    lastChangedBy?: SortOrderInput | SortOrder
    isTrendingUp?: SortOrder
    isBestOffered?: SortOrder
    meta?: SortOrderInput | SortOrder
    market?: MarketOrderByWithRelationInput
  }

  export type MarketSelectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerSelectionId?: string
    AND?: MarketSelectionWhereInput | MarketSelectionWhereInput[]
    OR?: MarketSelectionWhereInput[]
    NOT?: MarketSelectionWhereInput | MarketSelectionWhereInput[]
    marketId?: StringFilter<"MarketSelection"> | string
    name?: StringFilter<"MarketSelection"> | string
    outcome?: EnumSelectionOutcomeFilter<"MarketSelection"> | $Enums.SelectionOutcome
    odds?: DecimalFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplay?: StringNullableFilter<"MarketSelection"> | string | null
    status?: EnumMarketStatusFilter<"MarketSelection"> | $Enums.MarketStatus
    probabilityPercent?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    handicapValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    originalOdds?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: DateTimeNullableFilter<"MarketSelection"> | Date | string | null
    lastChangedBy?: StringNullableFilter<"MarketSelection"> | string | null
    isTrendingUp?: BoolFilter<"MarketSelection"> | boolean
    isBestOffered?: BoolFilter<"MarketSelection"> | boolean
    meta?: JsonNullableFilter<"MarketSelection">
    market?: XOR<MarketRelationFilter, MarketWhereInput>
  }, "id" | "providerSelectionId">

  export type MarketSelectionOrderByWithAggregationInput = {
    id?: SortOrder
    providerSelectionId?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    outcome?: SortOrder
    odds?: SortOrder
    oddsDisplay?: SortOrderInput | SortOrder
    status?: SortOrder
    probabilityPercent?: SortOrderInput | SortOrder
    handicapValue?: SortOrderInput | SortOrder
    totalLineValue?: SortOrderInput | SortOrder
    originalOdds?: SortOrderInput | SortOrder
    lastChangedAt?: SortOrderInput | SortOrder
    lastChangedBy?: SortOrderInput | SortOrder
    isTrendingUp?: SortOrder
    isBestOffered?: SortOrder
    meta?: SortOrderInput | SortOrder
    _count?: MarketSelectionCountOrderByAggregateInput
    _avg?: MarketSelectionAvgOrderByAggregateInput
    _max?: MarketSelectionMaxOrderByAggregateInput
    _min?: MarketSelectionMinOrderByAggregateInput
    _sum?: MarketSelectionSumOrderByAggregateInput
  }

  export type MarketSelectionScalarWhereWithAggregatesInput = {
    AND?: MarketSelectionScalarWhereWithAggregatesInput | MarketSelectionScalarWhereWithAggregatesInput[]
    OR?: MarketSelectionScalarWhereWithAggregatesInput[]
    NOT?: MarketSelectionScalarWhereWithAggregatesInput | MarketSelectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketSelection"> | string
    providerSelectionId?: StringWithAggregatesFilter<"MarketSelection"> | string
    marketId?: StringWithAggregatesFilter<"MarketSelection"> | string
    name?: StringWithAggregatesFilter<"MarketSelection"> | string
    outcome?: EnumSelectionOutcomeWithAggregatesFilter<"MarketSelection"> | $Enums.SelectionOutcome
    odds?: DecimalWithAggregatesFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplay?: StringNullableWithAggregatesFilter<"MarketSelection"> | string | null
    status?: EnumMarketStatusWithAggregatesFilter<"MarketSelection"> | $Enums.MarketStatus
    probabilityPercent?: DecimalNullableWithAggregatesFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    handicapValue?: DecimalNullableWithAggregatesFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableWithAggregatesFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    originalOdds?: DecimalNullableWithAggregatesFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: DateTimeNullableWithAggregatesFilter<"MarketSelection"> | Date | string | null
    lastChangedBy?: StringNullableWithAggregatesFilter<"MarketSelection"> | string | null
    isTrendingUp?: BoolWithAggregatesFilter<"MarketSelection"> | boolean
    isBestOffered?: BoolWithAggregatesFilter<"MarketSelection"> | boolean
    meta?: JsonNullableWithAggregatesFilter<"MarketSelection">
  }

  export type LiveMatchUpdateWhereInput = {
    AND?: LiveMatchUpdateWhereInput | LiveMatchUpdateWhereInput[]
    OR?: LiveMatchUpdateWhereInput[]
    NOT?: LiveMatchUpdateWhereInput | LiveMatchUpdateWhereInput[]
    id?: StringFilter<"LiveMatchUpdate"> | string
    eventId?: StringFilter<"LiveMatchUpdate"> | string
    type?: EnumLiveEventTypeFilter<"LiveMatchUpdate"> | $Enums.LiveEventType
    minute?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    period?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    incidentData?: JsonNullableFilter<"LiveMatchUpdate">
    playerName?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    teamSide?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    clockMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    stoppageMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    extraTime?: BoolNullableFilter<"LiveMatchUpdate"> | boolean | null
    matchStatusAfter?: EnumEventStatusNullableFilter<"LiveMatchUpdate"> | $Enums.EventStatus | null
    createdAt?: DateTimeFilter<"LiveMatchUpdate"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }

  export type LiveMatchUpdateOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    minute?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    homeHalfScore?: SortOrderInput | SortOrder
    awayHalfScore?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    incidentData?: SortOrderInput | SortOrder
    playerName?: SortOrderInput | SortOrder
    teamSide?: SortOrderInput | SortOrder
    clockMinutes?: SortOrderInput | SortOrder
    stoppageMinutes?: SortOrderInput | SortOrder
    extraTime?: SortOrderInput | SortOrder
    matchStatusAfter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type LiveMatchUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LiveMatchUpdateWhereInput | LiveMatchUpdateWhereInput[]
    OR?: LiveMatchUpdateWhereInput[]
    NOT?: LiveMatchUpdateWhereInput | LiveMatchUpdateWhereInput[]
    eventId?: StringFilter<"LiveMatchUpdate"> | string
    type?: EnumLiveEventTypeFilter<"LiveMatchUpdate"> | $Enums.LiveEventType
    minute?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    period?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    incidentData?: JsonNullableFilter<"LiveMatchUpdate">
    playerName?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    teamSide?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    clockMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    stoppageMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    extraTime?: BoolNullableFilter<"LiveMatchUpdate"> | boolean | null
    matchStatusAfter?: EnumEventStatusNullableFilter<"LiveMatchUpdate"> | $Enums.EventStatus | null
    createdAt?: DateTimeFilter<"LiveMatchUpdate"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
  }, "id">

  export type LiveMatchUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    minute?: SortOrderInput | SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    homeHalfScore?: SortOrderInput | SortOrder
    awayHalfScore?: SortOrderInput | SortOrder
    period?: SortOrderInput | SortOrder
    incidentData?: SortOrderInput | SortOrder
    playerName?: SortOrderInput | SortOrder
    teamSide?: SortOrderInput | SortOrder
    clockMinutes?: SortOrderInput | SortOrder
    stoppageMinutes?: SortOrderInput | SortOrder
    extraTime?: SortOrderInput | SortOrder
    matchStatusAfter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LiveMatchUpdateCountOrderByAggregateInput
    _avg?: LiveMatchUpdateAvgOrderByAggregateInput
    _max?: LiveMatchUpdateMaxOrderByAggregateInput
    _min?: LiveMatchUpdateMinOrderByAggregateInput
    _sum?: LiveMatchUpdateSumOrderByAggregateInput
  }

  export type LiveMatchUpdateScalarWhereWithAggregatesInput = {
    AND?: LiveMatchUpdateScalarWhereWithAggregatesInput | LiveMatchUpdateScalarWhereWithAggregatesInput[]
    OR?: LiveMatchUpdateScalarWhereWithAggregatesInput[]
    NOT?: LiveMatchUpdateScalarWhereWithAggregatesInput | LiveMatchUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LiveMatchUpdate"> | string
    eventId?: StringWithAggregatesFilter<"LiveMatchUpdate"> | string
    type?: EnumLiveEventTypeWithAggregatesFilter<"LiveMatchUpdate"> | $Enums.LiveEventType
    minute?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    homeScore?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    homeHalfScore?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    awayHalfScore?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    period?: StringNullableWithAggregatesFilter<"LiveMatchUpdate"> | string | null
    incidentData?: JsonNullableWithAggregatesFilter<"LiveMatchUpdate">
    playerName?: StringNullableWithAggregatesFilter<"LiveMatchUpdate"> | string | null
    teamSide?: StringNullableWithAggregatesFilter<"LiveMatchUpdate"> | string | null
    clockMinutes?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    stoppageMinutes?: IntNullableWithAggregatesFilter<"LiveMatchUpdate"> | number | null
    extraTime?: BoolNullableWithAggregatesFilter<"LiveMatchUpdate"> | boolean | null
    matchStatusAfter?: EnumEventStatusNullableWithAggregatesFilter<"LiveMatchUpdate"> | $Enums.EventStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"LiveMatchUpdate"> | Date | string
  }

  export type ProviderSyncStateWhereInput = {
    AND?: ProviderSyncStateWhereInput | ProviderSyncStateWhereInput[]
    OR?: ProviderSyncStateWhereInput[]
    NOT?: ProviderSyncStateWhereInput | ProviderSyncStateWhereInput[]
    id?: StringFilter<"ProviderSyncState"> | string
    provider?: StringFilter<"ProviderSyncState"> | string
    lastFullSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    lastIncrementalSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    nextSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    eventsCreated?: IntFilter<"ProviderSyncState"> | number
    marketsCreated?: IntFilter<"ProviderSyncState"> | number
    oddsUpdatedCount?: IntFilter<"ProviderSyncState"> | number
    lastEventId?: StringNullableFilter<"ProviderSyncState"> | string | null
    lastChangeId?: StringNullableFilter<"ProviderSyncState"> | string | null
    state?: JsonNullableFilter<"ProviderSyncState">
    syncErrors?: IntFilter<"ProviderSyncState"> | number
    createdAt?: DateTimeFilter<"ProviderSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderSyncState"> | Date | string
  }

  export type ProviderSyncStateOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    lastFullSyncAt?: SortOrderInput | SortOrder
    lastIncrementalSyncAt?: SortOrderInput | SortOrder
    nextSyncAt?: SortOrderInput | SortOrder
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    lastEventId?: SortOrderInput | SortOrder
    lastChangeId?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    syncErrors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider?: string
    AND?: ProviderSyncStateWhereInput | ProviderSyncStateWhereInput[]
    OR?: ProviderSyncStateWhereInput[]
    NOT?: ProviderSyncStateWhereInput | ProviderSyncStateWhereInput[]
    lastFullSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    lastIncrementalSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    nextSyncAt?: DateTimeNullableFilter<"ProviderSyncState"> | Date | string | null
    eventsCreated?: IntFilter<"ProviderSyncState"> | number
    marketsCreated?: IntFilter<"ProviderSyncState"> | number
    oddsUpdatedCount?: IntFilter<"ProviderSyncState"> | number
    lastEventId?: StringNullableFilter<"ProviderSyncState"> | string | null
    lastChangeId?: StringNullableFilter<"ProviderSyncState"> | string | null
    state?: JsonNullableFilter<"ProviderSyncState">
    syncErrors?: IntFilter<"ProviderSyncState"> | number
    createdAt?: DateTimeFilter<"ProviderSyncState"> | Date | string
    updatedAt?: DateTimeFilter<"ProviderSyncState"> | Date | string
  }, "id" | "provider">

  export type ProviderSyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    lastFullSyncAt?: SortOrderInput | SortOrder
    lastIncrementalSyncAt?: SortOrderInput | SortOrder
    nextSyncAt?: SortOrderInput | SortOrder
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    lastEventId?: SortOrderInput | SortOrder
    lastChangeId?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    syncErrors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderSyncStateCountOrderByAggregateInput
    _avg?: ProviderSyncStateAvgOrderByAggregateInput
    _max?: ProviderSyncStateMaxOrderByAggregateInput
    _min?: ProviderSyncStateMinOrderByAggregateInput
    _sum?: ProviderSyncStateSumOrderByAggregateInput
  }

  export type ProviderSyncStateScalarWhereWithAggregatesInput = {
    AND?: ProviderSyncStateScalarWhereWithAggregatesInput | ProviderSyncStateScalarWhereWithAggregatesInput[]
    OR?: ProviderSyncStateScalarWhereWithAggregatesInput[]
    NOT?: ProviderSyncStateScalarWhereWithAggregatesInput | ProviderSyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProviderSyncState"> | string
    provider?: StringWithAggregatesFilter<"ProviderSyncState"> | string
    lastFullSyncAt?: DateTimeNullableWithAggregatesFilter<"ProviderSyncState"> | Date | string | null
    lastIncrementalSyncAt?: DateTimeNullableWithAggregatesFilter<"ProviderSyncState"> | Date | string | null
    nextSyncAt?: DateTimeNullableWithAggregatesFilter<"ProviderSyncState"> | Date | string | null
    eventsCreated?: IntWithAggregatesFilter<"ProviderSyncState"> | number
    marketsCreated?: IntWithAggregatesFilter<"ProviderSyncState"> | number
    oddsUpdatedCount?: IntWithAggregatesFilter<"ProviderSyncState"> | number
    lastEventId?: StringNullableWithAggregatesFilter<"ProviderSyncState"> | string | null
    lastChangeId?: StringNullableWithAggregatesFilter<"ProviderSyncState"> | string | null
    state?: JsonNullableWithAggregatesFilter<"ProviderSyncState">
    syncErrors?: IntWithAggregatesFilter<"ProviderSyncState"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProviderSyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProviderSyncState"> | Date | string
  }

  export type SportCreateInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueCreateNestedManyWithoutSportInput
    teams?: TeamCreateNestedManyWithoutSportInput
    events?: EventCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueUncheckedCreateNestedManyWithoutSportInput
    teams?: TeamUncheckedCreateNestedManyWithoutSportInput
    events?: EventUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUpdateManyWithoutSportNestedInput
    teams?: TeamUpdateManyWithoutSportNestedInput
    events?: EventUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUncheckedUpdateManyWithoutSportNestedInput
    teams?: TeamUncheckedUpdateManyWithoutSportNestedInput
    events?: EventUncheckedUpdateManyWithoutSportNestedInput
  }

  export type SportCreateManyInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryCreateInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    leagues?: LeagueCreateNestedManyWithoutCountryInput
    teams?: TeamCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    leagues?: LeagueUncheckedCreateNestedManyWithoutCountryInput
    teams?: TeamUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    leagues?: LeagueUpdateManyWithoutCountryNestedInput
    teams?: TeamUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    leagues?: LeagueUncheckedUpdateManyWithoutCountryNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeagueCreateInput = {
    id?: string
    providerLeagueId: string
    name: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutLeaguesInput
    country?: CountryCreateNestedOneWithoutLeaguesInput
    events?: EventCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateInput = {
    id?: string
    providerLeagueId: string
    name: string
    sportId: string
    countryId?: string | null
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutLeaguesNestedInput
    country?: CountryUpdateOneWithoutLeaguesNestedInput
    events?: EventUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueCreateManyInput = {
    id?: string
    providerLeagueId: string
    name: string
    sportId: string
    countryId?: string | null
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LeagueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeagueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamCreateInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    sport: SportCreateNestedOneWithoutTeamsInput
    country?: CountryCreateNestedOneWithoutTeamsInput
    homeEvents?: EventCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    homeEvents?: EventUncheckedCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    sport?: SportUpdateOneRequiredWithoutTeamsNestedInput
    country?: CountryUpdateOneWithoutTeamsNestedInput
    homeEvents?: EventUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    homeEvents?: EventUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
  }

  export type EventCreateInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    league: LeagueCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarketCreateInput = {
    id?: string
    providerMarketId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutMarketsInput
    selections?: MarketSelectionCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    providerMarketId: string
    eventId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: MarketSelectionUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutMarketsNestedInput
    selections?: MarketSelectionUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: MarketSelectionUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    providerMarketId: string
    eventId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarketSelectionCreateInput = {
    id?: string
    providerSelectionId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
    market: MarketCreateNestedOneWithoutSelectionsInput
  }

  export type MarketSelectionUncheckedCreateInput = {
    id?: string
    providerSelectionId: string
    marketId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
    market?: MarketUpdateOneRequiredWithoutSelectionsNestedInput
  }

  export type MarketSelectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionCreateManyInput = {
    id?: string
    providerSelectionId: string
    marketId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LiveMatchUpdateCreateInput = {
    id?: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutLiveUpdatesInput
  }

  export type LiveMatchUpdateUncheckedCreateInput = {
    id?: string
    eventId: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
  }

  export type LiveMatchUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutLiveUpdatesNestedInput
  }

  export type LiveMatchUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveMatchUpdateCreateManyInput = {
    id?: string
    eventId: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
  }

  export type LiveMatchUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveMatchUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderSyncStateCreateInput = {
    id?: string
    provider: string
    lastFullSyncAt?: Date | string | null
    lastIncrementalSyncAt?: Date | string | null
    nextSyncAt?: Date | string | null
    eventsCreated?: number
    marketsCreated?: number
    oddsUpdatedCount?: number
    lastEventId?: string | null
    lastChangeId?: string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderSyncStateUncheckedCreateInput = {
    id?: string
    provider: string
    lastFullSyncAt?: Date | string | null
    lastIncrementalSyncAt?: Date | string | null
    nextSyncAt?: Date | string | null
    eventsCreated?: number
    marketsCreated?: number
    oddsUpdatedCount?: number
    lastEventId?: string | null
    lastChangeId?: string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderSyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    lastFullSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIncrementalSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventsCreated?: IntFieldUpdateOperationsInput | number
    marketsCreated?: IntFieldUpdateOperationsInput | number
    oddsUpdatedCount?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastChangeId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderSyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    lastFullSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIncrementalSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventsCreated?: IntFieldUpdateOperationsInput | number
    marketsCreated?: IntFieldUpdateOperationsInput | number
    oddsUpdatedCount?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastChangeId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderSyncStateCreateManyInput = {
    id?: string
    provider: string
    lastFullSyncAt?: Date | string | null
    lastIncrementalSyncAt?: Date | string | null
    nextSyncAt?: Date | string | null
    eventsCreated?: number
    marketsCreated?: number
    oddsUpdatedCount?: number
    lastEventId?: string | null
    lastChangeId?: string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderSyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    lastFullSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIncrementalSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventsCreated?: IntFieldUpdateOperationsInput | number
    marketsCreated?: IntFieldUpdateOperationsInput | number
    oddsUpdatedCount?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastChangeId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderSyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    lastFullSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastIncrementalSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventsCreated?: IntFieldUpdateOperationsInput | number
    marketsCreated?: IntFieldUpdateOperationsInput | number
    oddsUpdatedCount?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastChangeId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableJsonNullValueInput | InputJsonValue
    syncErrors?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LeagueListRelationFilter = {
    every?: LeagueWhereInput
    some?: LeagueWhereInput
    none?: LeagueWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeagueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SportCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    orderIndex?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SportAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type SportMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    orderIndex?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SportMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    active?: SortOrder
    orderIndex?: SortOrder
    iconUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SportSumOrderByAggregateInput = {
    orderIndex?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    flag?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    flag?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    flag?: SortOrder
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

  export type SportRelationFilter = {
    is?: SportWhereInput
    isNot?: SportWhereInput
  }

  export type CountryNullableRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type LeagueCountOrderByAggregateInput = {
    id?: SortOrder
    providerLeagueId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
    tier?: SortOrder
    active?: SortOrder
    isTop?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeagueAvgOrderByAggregateInput = {
    tier?: SortOrder
  }

  export type LeagueMaxOrderByAggregateInput = {
    id?: SortOrder
    providerLeagueId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
    tier?: SortOrder
    active?: SortOrder
    isTop?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeagueMinOrderByAggregateInput = {
    id?: SortOrder
    providerLeagueId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
    tier?: SortOrder
    active?: SortOrder
    isTop?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LeagueSumOrderByAggregateInput = {
    tier?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    providerTeamId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
    aliases?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    providerTeamId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    providerTeamId?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    logoUrl?: SortOrder
    sportId?: SortOrder
    countryId?: SortOrder
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type LeagueRelationFilter = {
    is?: LeagueWhereInput
    isNot?: LeagueWhereInput
  }

  export type TeamNullableRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type LiveMatchUpdateListRelationFilter = {
    every?: LiveMatchUpdateWhereInput
    some?: LiveMatchUpdateWhereInput
    none?: LiveMatchUpdateWhereInput
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiveMatchUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    leagueId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    extraTimeScore?: SortOrder
    penaltyScore?: SortOrder
    status?: SortOrder
    kickoffAt?: SortOrder
    liveStartedAt?: SortOrder
    liveUpdatedAt?: SortOrder
    firstHalfStart?: SortOrder
    secondHalfStart?: SortOrder
    minuteOfMatch?: SortOrder
    injuryMinutes?: SortOrder
    liveCoverageAvailable?: SortOrder
    liveStreamAvailable?: SortOrder
    streamUrl?: SortOrder
    eventMeta?: SortOrder
    isTop?: SortOrder
    isFeatured?: SortOrder
    oddsLastCheckedAt?: SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
    settledAt?: SortOrder
    winner?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    minuteOfMatch?: SortOrder
    injuryMinutes?: SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    leagueId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    extraTimeScore?: SortOrder
    penaltyScore?: SortOrder
    status?: SortOrder
    kickoffAt?: SortOrder
    liveStartedAt?: SortOrder
    liveUpdatedAt?: SortOrder
    firstHalfStart?: SortOrder
    secondHalfStart?: SortOrder
    minuteOfMatch?: SortOrder
    injuryMinutes?: SortOrder
    liveCoverageAvailable?: SortOrder
    liveStreamAvailable?: SortOrder
    streamUrl?: SortOrder
    isTop?: SortOrder
    isFeatured?: SortOrder
    oddsLastCheckedAt?: SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
    settledAt?: SortOrder
    winner?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    name?: SortOrder
    sportId?: SortOrder
    leagueId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeTeamName?: SortOrder
    awayTeamName?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    extraTimeScore?: SortOrder
    penaltyScore?: SortOrder
    status?: SortOrder
    kickoffAt?: SortOrder
    liveStartedAt?: SortOrder
    liveUpdatedAt?: SortOrder
    firstHalfStart?: SortOrder
    secondHalfStart?: SortOrder
    minuteOfMatch?: SortOrder
    injuryMinutes?: SortOrder
    liveCoverageAvailable?: SortOrder
    liveStreamAvailable?: SortOrder
    streamUrl?: SortOrder
    isTop?: SortOrder
    isFeatured?: SortOrder
    oddsLastCheckedAt?: SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
    settledAt?: SortOrder
    winner?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    minuteOfMatch?: SortOrder
    injuryMinutes?: SortOrder
    marketsCount?: SortOrder
    activeBetCount?: SortOrder
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type EnumMarketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketStatus | EnumMarketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketStatusFilter<$PrismaModel> | $Enums.MarketStatus
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type MarketSelectionListRelationFilter = {
    every?: MarketSelectionWhereInput
    some?: MarketSelectionWhereInput
    none?: MarketSelectionWhereInput
  }

  export type MarketSelectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    providerMarketId?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    specifiers?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    period?: SortOrder
    status?: SortOrder
    displayedName?: SortOrder
    cashoutAvailable?: SortOrder
    firstCashoutAt?: SortOrder
    lastSuspendedAt?: SortOrder
    suspendedReason?: SortOrder
    source?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MarketAvgOrderByAggregateInput = {
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    providerMarketId?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    period?: SortOrder
    status?: SortOrder
    displayedName?: SortOrder
    cashoutAvailable?: SortOrder
    firstCashoutAt?: SortOrder
    lastSuspendedAt?: SortOrder
    suspendedReason?: SortOrder
    source?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    providerMarketId?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    period?: SortOrder
    status?: SortOrder
    displayedName?: SortOrder
    cashoutAvailable?: SortOrder
    firstCashoutAt?: SortOrder
    lastSuspendedAt?: SortOrder
    suspendedReason?: SortOrder
    source?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type MarketSumOrderByAggregateInput = {
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
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

  export type EnumMarketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketStatus | EnumMarketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketStatusWithAggregatesFilter<$PrismaModel> | $Enums.MarketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketStatusFilter<$PrismaModel>
    _max?: NestedEnumMarketStatusFilter<$PrismaModel>
  }

  export type EnumSelectionOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeFilter<$PrismaModel> | $Enums.SelectionOutcome
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

  export type MarketRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type MarketSelectionCountOrderByAggregateInput = {
    id?: SortOrder
    providerSelectionId?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    outcome?: SortOrder
    odds?: SortOrder
    oddsDisplay?: SortOrder
    status?: SortOrder
    probabilityPercent?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    originalOdds?: SortOrder
    lastChangedAt?: SortOrder
    lastChangedBy?: SortOrder
    isTrendingUp?: SortOrder
    isBestOffered?: SortOrder
    meta?: SortOrder
  }

  export type MarketSelectionAvgOrderByAggregateInput = {
    odds?: SortOrder
    probabilityPercent?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    originalOdds?: SortOrder
  }

  export type MarketSelectionMaxOrderByAggregateInput = {
    id?: SortOrder
    providerSelectionId?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    outcome?: SortOrder
    odds?: SortOrder
    oddsDisplay?: SortOrder
    status?: SortOrder
    probabilityPercent?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    originalOdds?: SortOrder
    lastChangedAt?: SortOrder
    lastChangedBy?: SortOrder
    isTrendingUp?: SortOrder
    isBestOffered?: SortOrder
  }

  export type MarketSelectionMinOrderByAggregateInput = {
    id?: SortOrder
    providerSelectionId?: SortOrder
    marketId?: SortOrder
    name?: SortOrder
    outcome?: SortOrder
    odds?: SortOrder
    oddsDisplay?: SortOrder
    status?: SortOrder
    probabilityPercent?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    originalOdds?: SortOrder
    lastChangedAt?: SortOrder
    lastChangedBy?: SortOrder
    isTrendingUp?: SortOrder
    isBestOffered?: SortOrder
  }

  export type MarketSelectionSumOrderByAggregateInput = {
    odds?: SortOrder
    probabilityPercent?: SortOrder
    handicapValue?: SortOrder
    totalLineValue?: SortOrder
    originalOdds?: SortOrder
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

  export type EnumLiveEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LiveEventType | EnumLiveEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLiveEventTypeFilter<$PrismaModel> | $Enums.LiveEventType
  }

  export type EnumEventStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventStatusNullableFilter<$PrismaModel> | $Enums.EventStatus | null
  }

  export type LiveMatchUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    minute?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    period?: SortOrder
    incidentData?: SortOrder
    playerName?: SortOrder
    teamSide?: SortOrder
    clockMinutes?: SortOrder
    stoppageMinutes?: SortOrder
    extraTime?: SortOrder
    matchStatusAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveMatchUpdateAvgOrderByAggregateInput = {
    minute?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    clockMinutes?: SortOrder
    stoppageMinutes?: SortOrder
  }

  export type LiveMatchUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    minute?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    period?: SortOrder
    playerName?: SortOrder
    teamSide?: SortOrder
    clockMinutes?: SortOrder
    stoppageMinutes?: SortOrder
    extraTime?: SortOrder
    matchStatusAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveMatchUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    minute?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    period?: SortOrder
    playerName?: SortOrder
    teamSide?: SortOrder
    clockMinutes?: SortOrder
    stoppageMinutes?: SortOrder
    extraTime?: SortOrder
    matchStatusAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LiveMatchUpdateSumOrderByAggregateInput = {
    minute?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    homeHalfScore?: SortOrder
    awayHalfScore?: SortOrder
    clockMinutes?: SortOrder
    stoppageMinutes?: SortOrder
  }

  export type EnumLiveEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LiveEventType | EnumLiveEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLiveEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LiveEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLiveEventTypeFilter<$PrismaModel>
    _max?: NestedEnumLiveEventTypeFilter<$PrismaModel>
  }

  export type EnumEventStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEventStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumEventStatusNullableFilter<$PrismaModel>
  }

  export type ProviderSyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    lastFullSyncAt?: SortOrder
    lastIncrementalSyncAt?: SortOrder
    nextSyncAt?: SortOrder
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    lastEventId?: SortOrder
    lastChangeId?: SortOrder
    state?: SortOrder
    syncErrors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSyncStateAvgOrderByAggregateInput = {
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    syncErrors?: SortOrder
  }

  export type ProviderSyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    lastFullSyncAt?: SortOrder
    lastIncrementalSyncAt?: SortOrder
    nextSyncAt?: SortOrder
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    lastEventId?: SortOrder
    lastChangeId?: SortOrder
    syncErrors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    lastFullSyncAt?: SortOrder
    lastIncrementalSyncAt?: SortOrder
    nextSyncAt?: SortOrder
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    lastEventId?: SortOrder
    lastChangeId?: SortOrder
    syncErrors?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSyncStateSumOrderByAggregateInput = {
    eventsCreated?: SortOrder
    marketsCreated?: SortOrder
    oddsUpdatedCount?: SortOrder
    syncErrors?: SortOrder
  }

  export type LeagueCreateNestedManyWithoutSportInput = {
    create?: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput> | LeagueCreateWithoutSportInput[] | LeagueUncheckedCreateWithoutSportInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutSportInput | LeagueCreateOrConnectWithoutSportInput[]
    createMany?: LeagueCreateManySportInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutSportInput = {
    create?: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput> | TeamCreateWithoutSportInput[] | TeamUncheckedCreateWithoutSportInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSportInput | TeamCreateOrConnectWithoutSportInput[]
    createMany?: TeamCreateManySportInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutSportInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type LeagueUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput> | LeagueCreateWithoutSportInput[] | LeagueUncheckedCreateWithoutSportInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutSportInput | LeagueCreateOrConnectWithoutSportInput[]
    createMany?: LeagueCreateManySportInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput> | TeamCreateWithoutSportInput[] | TeamUncheckedCreateWithoutSportInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSportInput | TeamCreateOrConnectWithoutSportInput[]
    createMany?: TeamCreateManySportInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LeagueUpdateManyWithoutSportNestedInput = {
    create?: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput> | LeagueCreateWithoutSportInput[] | LeagueUncheckedCreateWithoutSportInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutSportInput | LeagueCreateOrConnectWithoutSportInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutSportInput | LeagueUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: LeagueCreateManySportInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutSportInput | LeagueUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutSportInput | LeagueUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutSportNestedInput = {
    create?: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput> | TeamCreateWithoutSportInput[] | TeamUncheckedCreateWithoutSportInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSportInput | TeamCreateOrConnectWithoutSportInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutSportInput | TeamUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: TeamCreateManySportInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutSportInput | TeamUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutSportInput | TeamUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type EventUpdateManyWithoutSportNestedInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSportInput | EventUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSportInput | EventUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSportInput | EventUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LeagueUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput> | LeagueCreateWithoutSportInput[] | LeagueUncheckedCreateWithoutSportInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutSportInput | LeagueCreateOrConnectWithoutSportInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutSportInput | LeagueUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: LeagueCreateManySportInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutSportInput | LeagueUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutSportInput | LeagueUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput> | TeamCreateWithoutSportInput[] | TeamUncheckedCreateWithoutSportInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSportInput | TeamCreateOrConnectWithoutSportInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutSportInput | TeamUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: TeamCreateManySportInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutSportInput | TeamUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutSportInput | TeamUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput> | EventCreateWithoutSportInput[] | EventUncheckedCreateWithoutSportInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSportInput | EventCreateOrConnectWithoutSportInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSportInput | EventUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: EventCreateManySportInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSportInput | EventUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSportInput | EventUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LeagueCreateNestedManyWithoutCountryInput = {
    create?: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput> | LeagueCreateWithoutCountryInput[] | LeagueUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutCountryInput | LeagueCreateOrConnectWithoutCountryInput[]
    createMany?: LeagueCreateManyCountryInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutCountryInput = {
    create?: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput> | TeamCreateWithoutCountryInput[] | TeamUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCountryInput | TeamCreateOrConnectWithoutCountryInput[]
    createMany?: TeamCreateManyCountryInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type LeagueUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput> | LeagueCreateWithoutCountryInput[] | LeagueUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutCountryInput | LeagueCreateOrConnectWithoutCountryInput[]
    createMany?: LeagueCreateManyCountryInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput> | TeamCreateWithoutCountryInput[] | TeamUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCountryInput | TeamCreateOrConnectWithoutCountryInput[]
    createMany?: TeamCreateManyCountryInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type LeagueUpdateManyWithoutCountryNestedInput = {
    create?: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput> | LeagueCreateWithoutCountryInput[] | LeagueUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutCountryInput | LeagueCreateOrConnectWithoutCountryInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutCountryInput | LeagueUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: LeagueCreateManyCountryInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutCountryInput | LeagueUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutCountryInput | LeagueUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutCountryNestedInput = {
    create?: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput> | TeamCreateWithoutCountryInput[] | TeamUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCountryInput | TeamCreateOrConnectWithoutCountryInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCountryInput | TeamUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: TeamCreateManyCountryInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCountryInput | TeamUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCountryInput | TeamUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type LeagueUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput> | LeagueCreateWithoutCountryInput[] | LeagueUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutCountryInput | LeagueCreateOrConnectWithoutCountryInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutCountryInput | LeagueUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: LeagueCreateManyCountryInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutCountryInput | LeagueUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutCountryInput | LeagueUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput> | TeamCreateWithoutCountryInput[] | TeamUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCountryInput | TeamCreateOrConnectWithoutCountryInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCountryInput | TeamUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: TeamCreateManyCountryInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCountryInput | TeamUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCountryInput | TeamUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type SportCreateNestedOneWithoutLeaguesInput = {
    create?: XOR<SportCreateWithoutLeaguesInput, SportUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: SportCreateOrConnectWithoutLeaguesInput
    connect?: SportWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutLeaguesInput = {
    create?: XOR<CountryCreateWithoutLeaguesInput, CountryUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLeaguesInput
    connect?: CountryWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutLeagueInput = {
    create?: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput> | EventCreateWithoutLeagueInput[] | EventUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeagueInput | EventCreateOrConnectWithoutLeagueInput[]
    createMany?: EventCreateManyLeagueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput> | EventCreateWithoutLeagueInput[] | EventUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeagueInput | EventCreateOrConnectWithoutLeagueInput[]
    createMany?: EventCreateManyLeagueInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SportUpdateOneRequiredWithoutLeaguesNestedInput = {
    create?: XOR<SportCreateWithoutLeaguesInput, SportUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: SportCreateOrConnectWithoutLeaguesInput
    upsert?: SportUpsertWithoutLeaguesInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutLeaguesInput, SportUpdateWithoutLeaguesInput>, SportUncheckedUpdateWithoutLeaguesInput>
  }

  export type CountryUpdateOneWithoutLeaguesNestedInput = {
    create?: XOR<CountryCreateWithoutLeaguesInput, CountryUncheckedCreateWithoutLeaguesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLeaguesInput
    upsert?: CountryUpsertWithoutLeaguesInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutLeaguesInput, CountryUpdateWithoutLeaguesInput>, CountryUncheckedUpdateWithoutLeaguesInput>
  }

  export type EventUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput> | EventCreateWithoutLeagueInput[] | EventUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeagueInput | EventCreateOrConnectWithoutLeagueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLeagueInput | EventUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: EventCreateManyLeagueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLeagueInput | EventUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLeagueInput | EventUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput> | EventCreateWithoutLeagueInput[] | EventUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLeagueInput | EventCreateOrConnectWithoutLeagueInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLeagueInput | EventUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: EventCreateManyLeagueInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLeagueInput | EventUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLeagueInput | EventUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TeamCreatealiasesInput = {
    set: string[]
  }

  export type SportCreateNestedOneWithoutTeamsInput = {
    create?: XOR<SportCreateWithoutTeamsInput, SportUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SportCreateOrConnectWithoutTeamsInput
    connect?: SportWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutTeamsInput = {
    create?: XOR<CountryCreateWithoutTeamsInput, CountryUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTeamsInput
    connect?: CountryWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput> | EventCreateWithoutHomeTeamInput[] | EventUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHomeTeamInput | EventCreateOrConnectWithoutHomeTeamInput[]
    createMany?: EventCreateManyHomeTeamInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput> | EventCreateWithoutAwayTeamInput[] | EventUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAwayTeamInput | EventCreateOrConnectWithoutAwayTeamInput[]
    createMany?: EventCreateManyAwayTeamInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput> | EventCreateWithoutHomeTeamInput[] | EventUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHomeTeamInput | EventCreateOrConnectWithoutHomeTeamInput[]
    createMany?: EventCreateManyHomeTeamInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput> | EventCreateWithoutAwayTeamInput[] | EventUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAwayTeamInput | EventCreateOrConnectWithoutAwayTeamInput[]
    createMany?: EventCreateManyAwayTeamInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TeamUpdatealiasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SportUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<SportCreateWithoutTeamsInput, SportUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SportCreateOrConnectWithoutTeamsInput
    upsert?: SportUpsertWithoutTeamsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutTeamsInput, SportUpdateWithoutTeamsInput>, SportUncheckedUpdateWithoutTeamsInput>
  }

  export type CountryUpdateOneWithoutTeamsNestedInput = {
    create?: XOR<CountryCreateWithoutTeamsInput, CountryUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutTeamsInput
    upsert?: CountryUpsertWithoutTeamsInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutTeamsInput, CountryUpdateWithoutTeamsInput>, CountryUncheckedUpdateWithoutTeamsInput>
  }

  export type EventUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput> | EventCreateWithoutHomeTeamInput[] | EventUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHomeTeamInput | EventCreateOrConnectWithoutHomeTeamInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutHomeTeamInput | EventUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: EventCreateManyHomeTeamInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutHomeTeamInput | EventUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: EventUpdateManyWithWhereWithoutHomeTeamInput | EventUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput> | EventCreateWithoutAwayTeamInput[] | EventUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAwayTeamInput | EventCreateOrConnectWithoutAwayTeamInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAwayTeamInput | EventUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: EventCreateManyAwayTeamInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAwayTeamInput | EventUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAwayTeamInput | EventUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput> | EventCreateWithoutHomeTeamInput[] | EventUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHomeTeamInput | EventCreateOrConnectWithoutHomeTeamInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutHomeTeamInput | EventUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: EventCreateManyHomeTeamInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutHomeTeamInput | EventUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: EventUpdateManyWithWhereWithoutHomeTeamInput | EventUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput> | EventCreateWithoutAwayTeamInput[] | EventUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAwayTeamInput | EventCreateOrConnectWithoutAwayTeamInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAwayTeamInput | EventUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: EventCreateManyAwayTeamInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAwayTeamInput | EventUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAwayTeamInput | EventUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SportCreateNestedOneWithoutEventsInput = {
    create?: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SportCreateOrConnectWithoutEventsInput
    connect?: SportWhereUniqueInput
  }

  export type LeagueCreateNestedOneWithoutEventsInput = {
    create?: XOR<LeagueCreateWithoutEventsInput, LeagueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutEventsInput
    connect?: LeagueWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutHomeEventsInput = {
    create?: XOR<TeamCreateWithoutHomeEventsInput, TeamUncheckedCreateWithoutHomeEventsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeEventsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayEventsInput = {
    create?: XOR<TeamCreateWithoutAwayEventsInput, TeamUncheckedCreateWithoutAwayEventsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayEventsInput
    connect?: TeamWhereUniqueInput
  }

  export type MarketCreateNestedManyWithoutEventInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type LiveMatchUpdateCreateNestedManyWithoutEventInput = {
    create?: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput> | LiveMatchUpdateCreateWithoutEventInput[] | LiveMatchUpdateUncheckedCreateWithoutEventInput[]
    connectOrCreate?: LiveMatchUpdateCreateOrConnectWithoutEventInput | LiveMatchUpdateCreateOrConnectWithoutEventInput[]
    createMany?: LiveMatchUpdateCreateManyEventInputEnvelope
    connect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput> | LiveMatchUpdateCreateWithoutEventInput[] | LiveMatchUpdateUncheckedCreateWithoutEventInput[]
    connectOrCreate?: LiveMatchUpdateCreateOrConnectWithoutEventInput | LiveMatchUpdateCreateOrConnectWithoutEventInput[]
    createMany?: LiveMatchUpdateCreateManyEventInputEnvelope
    connect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SportUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: SportCreateOrConnectWithoutEventsInput
    upsert?: SportUpsertWithoutEventsInput
    connect?: SportWhereUniqueInput
    update?: XOR<XOR<SportUpdateToOneWithWhereWithoutEventsInput, SportUpdateWithoutEventsInput>, SportUncheckedUpdateWithoutEventsInput>
  }

  export type LeagueUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<LeagueCreateWithoutEventsInput, LeagueUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutEventsInput
    upsert?: LeagueUpsertWithoutEventsInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutEventsInput, LeagueUpdateWithoutEventsInput>, LeagueUncheckedUpdateWithoutEventsInput>
  }

  export type TeamUpdateOneWithoutHomeEventsNestedInput = {
    create?: XOR<TeamCreateWithoutHomeEventsInput, TeamUncheckedCreateWithoutHomeEventsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeEventsInput
    upsert?: TeamUpsertWithoutHomeEventsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeEventsInput, TeamUpdateWithoutHomeEventsInput>, TeamUncheckedUpdateWithoutHomeEventsInput>
  }

  export type TeamUpdateOneWithoutAwayEventsNestedInput = {
    create?: XOR<TeamCreateWithoutAwayEventsInput, TeamUncheckedCreateWithoutAwayEventsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayEventsInput
    upsert?: TeamUpsertWithoutAwayEventsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayEventsInput, TeamUpdateWithoutAwayEventsInput>, TeamUncheckedUpdateWithoutAwayEventsInput>
  }

  export type MarketUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutEventInput | MarketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutEventInput | MarketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutEventInput | MarketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type LiveMatchUpdateUpdateManyWithoutEventNestedInput = {
    create?: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput> | LiveMatchUpdateCreateWithoutEventInput[] | LiveMatchUpdateUncheckedCreateWithoutEventInput[]
    connectOrCreate?: LiveMatchUpdateCreateOrConnectWithoutEventInput | LiveMatchUpdateCreateOrConnectWithoutEventInput[]
    upsert?: LiveMatchUpdateUpsertWithWhereUniqueWithoutEventInput | LiveMatchUpdateUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: LiveMatchUpdateCreateManyEventInputEnvelope
    set?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    disconnect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    delete?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    connect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    update?: LiveMatchUpdateUpdateWithWhereUniqueWithoutEventInput | LiveMatchUpdateUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: LiveMatchUpdateUpdateManyWithWhereWithoutEventInput | LiveMatchUpdateUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: LiveMatchUpdateScalarWhereInput | LiveMatchUpdateScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutEventInput | MarketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutEventInput | MarketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutEventInput | MarketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput> | LiveMatchUpdateCreateWithoutEventInput[] | LiveMatchUpdateUncheckedCreateWithoutEventInput[]
    connectOrCreate?: LiveMatchUpdateCreateOrConnectWithoutEventInput | LiveMatchUpdateCreateOrConnectWithoutEventInput[]
    upsert?: LiveMatchUpdateUpsertWithWhereUniqueWithoutEventInput | LiveMatchUpdateUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: LiveMatchUpdateCreateManyEventInputEnvelope
    set?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    disconnect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    delete?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    connect?: LiveMatchUpdateWhereUniqueInput | LiveMatchUpdateWhereUniqueInput[]
    update?: LiveMatchUpdateUpdateWithWhereUniqueWithoutEventInput | LiveMatchUpdateUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: LiveMatchUpdateUpdateManyWithWhereWithoutEventInput | LiveMatchUpdateUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: LiveMatchUpdateScalarWhereInput | LiveMatchUpdateScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutMarketsInput = {
    create?: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarketsInput
    connect?: EventWhereUniqueInput
  }

  export type MarketSelectionCreateNestedManyWithoutMarketInput = {
    create?: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput> | MarketSelectionCreateWithoutMarketInput[] | MarketSelectionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: MarketSelectionCreateOrConnectWithoutMarketInput | MarketSelectionCreateOrConnectWithoutMarketInput[]
    createMany?: MarketSelectionCreateManyMarketInputEnvelope
    connect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
  }

  export type MarketSelectionUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput> | MarketSelectionCreateWithoutMarketInput[] | MarketSelectionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: MarketSelectionCreateOrConnectWithoutMarketInput | MarketSelectionCreateOrConnectWithoutMarketInput[]
    createMany?: MarketSelectionCreateManyMarketInputEnvelope
    connect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
  }

  export type EnumMarketTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarketType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumMarketStatusFieldUpdateOperationsInput = {
    set?: $Enums.MarketStatus
  }

  export type EventUpdateOneRequiredWithoutMarketsNestedInput = {
    create?: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarketsInput
    upsert?: EventUpsertWithoutMarketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMarketsInput, EventUpdateWithoutMarketsInput>, EventUncheckedUpdateWithoutMarketsInput>
  }

  export type MarketSelectionUpdateManyWithoutMarketNestedInput = {
    create?: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput> | MarketSelectionCreateWithoutMarketInput[] | MarketSelectionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: MarketSelectionCreateOrConnectWithoutMarketInput | MarketSelectionCreateOrConnectWithoutMarketInput[]
    upsert?: MarketSelectionUpsertWithWhereUniqueWithoutMarketInput | MarketSelectionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: MarketSelectionCreateManyMarketInputEnvelope
    set?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    disconnect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    delete?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    connect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    update?: MarketSelectionUpdateWithWhereUniqueWithoutMarketInput | MarketSelectionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: MarketSelectionUpdateManyWithWhereWithoutMarketInput | MarketSelectionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: MarketSelectionScalarWhereInput | MarketSelectionScalarWhereInput[]
  }

  export type MarketSelectionUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput> | MarketSelectionCreateWithoutMarketInput[] | MarketSelectionUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: MarketSelectionCreateOrConnectWithoutMarketInput | MarketSelectionCreateOrConnectWithoutMarketInput[]
    upsert?: MarketSelectionUpsertWithWhereUniqueWithoutMarketInput | MarketSelectionUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: MarketSelectionCreateManyMarketInputEnvelope
    set?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    disconnect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    delete?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    connect?: MarketSelectionWhereUniqueInput | MarketSelectionWhereUniqueInput[]
    update?: MarketSelectionUpdateWithWhereUniqueWithoutMarketInput | MarketSelectionUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: MarketSelectionUpdateManyWithWhereWithoutMarketInput | MarketSelectionUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: MarketSelectionScalarWhereInput | MarketSelectionScalarWhereInput[]
  }

  export type MarketCreateNestedOneWithoutSelectionsInput = {
    create?: XOR<MarketCreateWithoutSelectionsInput, MarketUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutSelectionsInput
    connect?: MarketWhereUniqueInput
  }

  export type EnumSelectionOutcomeFieldUpdateOperationsInput = {
    set?: $Enums.SelectionOutcome
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MarketUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: XOR<MarketCreateWithoutSelectionsInput, MarketUncheckedCreateWithoutSelectionsInput>
    connectOrCreate?: MarketCreateOrConnectWithoutSelectionsInput
    upsert?: MarketUpsertWithoutSelectionsInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutSelectionsInput, MarketUpdateWithoutSelectionsInput>, MarketUncheckedUpdateWithoutSelectionsInput>
  }

  export type EventCreateNestedOneWithoutLiveUpdatesInput = {
    create?: XOR<EventCreateWithoutLiveUpdatesInput, EventUncheckedCreateWithoutLiveUpdatesInput>
    connectOrCreate?: EventCreateOrConnectWithoutLiveUpdatesInput
    connect?: EventWhereUniqueInput
  }

  export type EnumLiveEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.LiveEventType
  }

  export type NullableEnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus | null
  }

  export type EventUpdateOneRequiredWithoutLiveUpdatesNestedInput = {
    create?: XOR<EventCreateWithoutLiveUpdatesInput, EventUncheckedCreateWithoutLiveUpdatesInput>
    connectOrCreate?: EventCreateOrConnectWithoutLiveUpdatesInput
    upsert?: EventUpsertWithoutLiveUpdatesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutLiveUpdatesInput, EventUpdateWithoutLiveUpdatesInput>, EventUncheckedUpdateWithoutLiveUpdatesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumMarketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketStatus | EnumMarketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketStatusFilter<$PrismaModel> | $Enums.MarketStatus
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

  export type NestedEnumMarketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarketStatus | EnumMarketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MarketStatus[] | ListEnumMarketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketStatusWithAggregatesFilter<$PrismaModel> | $Enums.MarketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketStatusFilter<$PrismaModel>
    _max?: NestedEnumMarketStatusFilter<$PrismaModel>
  }

  export type NestedEnumSelectionOutcomeFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeFilter<$PrismaModel> | $Enums.SelectionOutcome
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

  export type NestedEnumSelectionOutcomeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SelectionOutcome | EnumSelectionOutcomeFieldRefInput<$PrismaModel>
    in?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SelectionOutcome[] | ListEnumSelectionOutcomeFieldRefInput<$PrismaModel>
    not?: NestedEnumSelectionOutcomeWithAggregatesFilter<$PrismaModel> | $Enums.SelectionOutcome
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
    _max?: NestedEnumSelectionOutcomeFilter<$PrismaModel>
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

  export type NestedEnumLiveEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LiveEventType | EnumLiveEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLiveEventTypeFilter<$PrismaModel> | $Enums.LiveEventType
  }

  export type NestedEnumEventStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventStatusNullableFilter<$PrismaModel> | $Enums.EventStatus | null
  }

  export type NestedEnumLiveEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LiveEventType | EnumLiveEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LiveEventType[] | ListEnumLiveEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLiveEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LiveEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLiveEventTypeFilter<$PrismaModel>
    _max?: NestedEnumLiveEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEventStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEventStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumEventStatusNullableFilter<$PrismaModel>
  }

  export type LeagueCreateWithoutSportInput = {
    id?: string
    providerLeagueId: string
    name: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    country?: CountryCreateNestedOneWithoutLeaguesInput
    events?: EventCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutSportInput = {
    id?: string
    providerLeagueId: string
    name: string
    countryId?: string | null
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutSportInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput>
  }

  export type LeagueCreateManySportInputEnvelope = {
    data: LeagueCreateManySportInput | LeagueCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutSportInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    country?: CountryCreateNestedOneWithoutTeamsInput
    homeEvents?: EventCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutSportInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    homeEvents?: EventUncheckedCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutSportInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput>
  }

  export type TeamCreateManySportInputEnvelope = {
    data: TeamCreateManySportInput | TeamCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutSportInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    league: LeagueCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutSportInput = {
    id?: string
    providerEventId: string
    name: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutSportInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput>
  }

  export type EventCreateManySportInputEnvelope = {
    data: EventCreateManySportInput | EventCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type LeagueUpsertWithWhereUniqueWithoutSportInput = {
    where: LeagueWhereUniqueInput
    update: XOR<LeagueUpdateWithoutSportInput, LeagueUncheckedUpdateWithoutSportInput>
    create: XOR<LeagueCreateWithoutSportInput, LeagueUncheckedCreateWithoutSportInput>
  }

  export type LeagueUpdateWithWhereUniqueWithoutSportInput = {
    where: LeagueWhereUniqueInput
    data: XOR<LeagueUpdateWithoutSportInput, LeagueUncheckedUpdateWithoutSportInput>
  }

  export type LeagueUpdateManyWithWhereWithoutSportInput = {
    where: LeagueScalarWhereInput
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyWithoutSportInput>
  }

  export type LeagueScalarWhereInput = {
    AND?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
    OR?: LeagueScalarWhereInput[]
    NOT?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
    id?: StringFilter<"League"> | string
    providerLeagueId?: StringFilter<"League"> | string
    name?: StringFilter<"League"> | string
    sportId?: StringFilter<"League"> | string
    countryId?: StringNullableFilter<"League"> | string | null
    tier?: IntNullableFilter<"League"> | number | null
    active?: BoolFilter<"League"> | boolean
    isTop?: BoolFilter<"League"> | boolean
    createdAt?: DateTimeFilter<"League"> | Date | string
    updatedAt?: DateTimeFilter<"League"> | Date | string
    deletedAt?: DateTimeNullableFilter<"League"> | Date | string | null
  }

  export type TeamUpsertWithWhereUniqueWithoutSportInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutSportInput, TeamUncheckedUpdateWithoutSportInput>
    create: XOR<TeamCreateWithoutSportInput, TeamUncheckedCreateWithoutSportInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutSportInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutSportInput, TeamUncheckedUpdateWithoutSportInput>
  }

  export type TeamUpdateManyWithWhereWithoutSportInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutSportInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    providerTeamId?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    shortName?: StringNullableFilter<"Team"> | string | null
    logoUrl?: StringNullableFilter<"Team"> | string | null
    sportId?: StringFilter<"Team"> | string
    countryId?: StringNullableFilter<"Team"> | string | null
    aliases?: StringNullableListFilter<"Team">
  }

  export type EventUpsertWithWhereUniqueWithoutSportInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSportInput, EventUncheckedUpdateWithoutSportInput>
    create: XOR<EventCreateWithoutSportInput, EventUncheckedCreateWithoutSportInput>
  }

  export type EventUpdateWithWhereUniqueWithoutSportInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSportInput, EventUncheckedUpdateWithoutSportInput>
  }

  export type EventUpdateManyWithWhereWithoutSportInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSportInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    providerEventId?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    sportId?: StringFilter<"Event"> | string
    leagueId?: StringFilter<"Event"> | string
    homeTeamId?: StringNullableFilter<"Event"> | string | null
    awayTeamId?: StringNullableFilter<"Event"> | string | null
    homeTeamName?: StringNullableFilter<"Event"> | string | null
    awayTeamName?: StringNullableFilter<"Event"> | string | null
    homeScore?: IntNullableFilter<"Event"> | number | null
    awayScore?: IntNullableFilter<"Event"> | number | null
    homeHalfScore?: IntNullableFilter<"Event"> | number | null
    awayHalfScore?: IntNullableFilter<"Event"> | number | null
    extraTimeScore?: StringNullableFilter<"Event"> | string | null
    penaltyScore?: StringNullableFilter<"Event"> | string | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    kickoffAt?: DateTimeFilter<"Event"> | Date | string
    liveStartedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    liveUpdatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    firstHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    secondHalfStart?: DateTimeNullableFilter<"Event"> | Date | string | null
    minuteOfMatch?: IntNullableFilter<"Event"> | number | null
    injuryMinutes?: IntNullableFilter<"Event"> | number | null
    liveCoverageAvailable?: BoolNullableFilter<"Event"> | boolean | null
    liveStreamAvailable?: BoolNullableFilter<"Event"> | boolean | null
    streamUrl?: StringNullableFilter<"Event"> | string | null
    eventMeta?: JsonNullableFilter<"Event">
    isTop?: BoolNullableFilter<"Event"> | boolean | null
    isFeatured?: BoolNullableFilter<"Event"> | boolean | null
    oddsLastCheckedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    marketsCount?: IntFilter<"Event"> | number
    activeBetCount?: IntFilter<"Event"> | number
    settledAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    winner?: StringNullableFilter<"Event"> | string | null
    slug?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type LeagueCreateWithoutCountryInput = {
    id?: string
    providerLeagueId: string
    name: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutLeaguesInput
    events?: EventCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutCountryInput = {
    id?: string
    providerLeagueId: string
    name: string
    sportId: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutCountryInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput>
  }

  export type LeagueCreateManyCountryInputEnvelope = {
    data: LeagueCreateManyCountryInput | LeagueCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutCountryInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    sport: SportCreateNestedOneWithoutTeamsInput
    homeEvents?: EventCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutCountryInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    aliases?: TeamCreatealiasesInput | string[]
    homeEvents?: EventUncheckedCreateNestedManyWithoutHomeTeamInput
    awayEvents?: EventUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutCountryInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput>
  }

  export type TeamCreateManyCountryInputEnvelope = {
    data: TeamCreateManyCountryInput | TeamCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type LeagueUpsertWithWhereUniqueWithoutCountryInput = {
    where: LeagueWhereUniqueInput
    update: XOR<LeagueUpdateWithoutCountryInput, LeagueUncheckedUpdateWithoutCountryInput>
    create: XOR<LeagueCreateWithoutCountryInput, LeagueUncheckedCreateWithoutCountryInput>
  }

  export type LeagueUpdateWithWhereUniqueWithoutCountryInput = {
    where: LeagueWhereUniqueInput
    data: XOR<LeagueUpdateWithoutCountryInput, LeagueUncheckedUpdateWithoutCountryInput>
  }

  export type LeagueUpdateManyWithWhereWithoutCountryInput = {
    where: LeagueScalarWhereInput
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyWithoutCountryInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutCountryInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutCountryInput, TeamUncheckedUpdateWithoutCountryInput>
    create: XOR<TeamCreateWithoutCountryInput, TeamUncheckedCreateWithoutCountryInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutCountryInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutCountryInput, TeamUncheckedUpdateWithoutCountryInput>
  }

  export type TeamUpdateManyWithWhereWithoutCountryInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutCountryInput>
  }

  export type SportCreateWithoutLeaguesInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    teams?: TeamCreateNestedManyWithoutSportInput
    events?: EventCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutLeaguesInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    teams?: TeamUncheckedCreateNestedManyWithoutSportInput
    events?: EventUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutLeaguesInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutLeaguesInput, SportUncheckedCreateWithoutLeaguesInput>
  }

  export type CountryCreateWithoutLeaguesInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    teams?: TeamCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutLeaguesInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutLeaguesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutLeaguesInput, CountryUncheckedCreateWithoutLeaguesInput>
  }

  export type EventCreateWithoutLeagueInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutLeagueInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutLeagueInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput>
  }

  export type EventCreateManyLeagueInputEnvelope = {
    data: EventCreateManyLeagueInput | EventCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type SportUpsertWithoutLeaguesInput = {
    update: XOR<SportUpdateWithoutLeaguesInput, SportUncheckedUpdateWithoutLeaguesInput>
    create: XOR<SportCreateWithoutLeaguesInput, SportUncheckedCreateWithoutLeaguesInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutLeaguesInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutLeaguesInput, SportUncheckedUpdateWithoutLeaguesInput>
  }

  export type SportUpdateWithoutLeaguesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUpdateManyWithoutSportNestedInput
    events?: EventUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutLeaguesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    teams?: TeamUncheckedUpdateManyWithoutSportNestedInput
    events?: EventUncheckedUpdateManyWithoutSportNestedInput
  }

  export type CountryUpsertWithoutLeaguesInput = {
    update: XOR<CountryUpdateWithoutLeaguesInput, CountryUncheckedUpdateWithoutLeaguesInput>
    create: XOR<CountryCreateWithoutLeaguesInput, CountryUncheckedCreateWithoutLeaguesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutLeaguesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutLeaguesInput, CountryUncheckedUpdateWithoutLeaguesInput>
  }

  export type CountryUpdateWithoutLeaguesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutLeaguesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutLeagueInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutLeagueInput, EventUncheckedUpdateWithoutLeagueInput>
    create: XOR<EventCreateWithoutLeagueInput, EventUncheckedCreateWithoutLeagueInput>
  }

  export type EventUpdateWithWhereUniqueWithoutLeagueInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutLeagueInput, EventUncheckedUpdateWithoutLeagueInput>
  }

  export type EventUpdateManyWithWhereWithoutLeagueInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutLeagueInput>
  }

  export type SportCreateWithoutTeamsInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueCreateNestedManyWithoutSportInput
    events?: EventCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutTeamsInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueUncheckedCreateNestedManyWithoutSportInput
    events?: EventUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutTeamsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutTeamsInput, SportUncheckedCreateWithoutTeamsInput>
  }

  export type CountryCreateWithoutTeamsInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    leagues?: LeagueCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutTeamsInput = {
    id?: string
    code: string
    name: string
    flag?: string | null
    leagues?: LeagueUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutTeamsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutTeamsInput, CountryUncheckedCreateWithoutTeamsInput>
  }

  export type EventCreateWithoutHomeTeamInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    league: LeagueCreateNestedOneWithoutEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutHomeTeamInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutHomeTeamInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput>
  }

  export type EventCreateManyHomeTeamInputEnvelope = {
    data: EventCreateManyHomeTeamInput | EventCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutAwayTeamInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    league: LeagueCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAwayTeamInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAwayTeamInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput>
  }

  export type EventCreateManyAwayTeamInputEnvelope = {
    data: EventCreateManyAwayTeamInput | EventCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type SportUpsertWithoutTeamsInput = {
    update: XOR<SportUpdateWithoutTeamsInput, SportUncheckedUpdateWithoutTeamsInput>
    create: XOR<SportCreateWithoutTeamsInput, SportUncheckedCreateWithoutTeamsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutTeamsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutTeamsInput, SportUncheckedUpdateWithoutTeamsInput>
  }

  export type SportUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUpdateManyWithoutSportNestedInput
    events?: EventUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUncheckedUpdateManyWithoutSportNestedInput
    events?: EventUncheckedUpdateManyWithoutSportNestedInput
  }

  export type CountryUpsertWithoutTeamsInput = {
    update: XOR<CountryUpdateWithoutTeamsInput, CountryUncheckedUpdateWithoutTeamsInput>
    create: XOR<CountryCreateWithoutTeamsInput, CountryUncheckedCreateWithoutTeamsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutTeamsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutTeamsInput, CountryUncheckedUpdateWithoutTeamsInput>
  }

  export type CountryUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    leagues?: LeagueUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    leagues?: LeagueUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutHomeTeamInput, EventUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<EventCreateWithoutHomeTeamInput, EventUncheckedCreateWithoutHomeTeamInput>
  }

  export type EventUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutHomeTeamInput, EventUncheckedUpdateWithoutHomeTeamInput>
  }

  export type EventUpdateManyWithWhereWithoutHomeTeamInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type EventUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutAwayTeamInput, EventUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<EventCreateWithoutAwayTeamInput, EventUncheckedCreateWithoutAwayTeamInput>
  }

  export type EventUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutAwayTeamInput, EventUncheckedUpdateWithoutAwayTeamInput>
  }

  export type EventUpdateManyWithWhereWithoutAwayTeamInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type SportCreateWithoutEventsInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueCreateNestedManyWithoutSportInput
    teams?: TeamCreateNestedManyWithoutSportInput
  }

  export type SportUncheckedCreateWithoutEventsInput = {
    id?: string
    code: string
    name: string
    active?: boolean
    orderIndex?: number
    iconUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    leagues?: LeagueUncheckedCreateNestedManyWithoutSportInput
    teams?: TeamUncheckedCreateNestedManyWithoutSportInput
  }

  export type SportCreateOrConnectWithoutEventsInput = {
    where: SportWhereUniqueInput
    create: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
  }

  export type LeagueCreateWithoutEventsInput = {
    id?: string
    providerLeagueId: string
    name: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutLeaguesInput
    country?: CountryCreateNestedOneWithoutLeaguesInput
  }

  export type LeagueUncheckedCreateWithoutEventsInput = {
    id?: string
    providerLeagueId: string
    name: string
    sportId: string
    countryId?: string | null
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LeagueCreateOrConnectWithoutEventsInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutEventsInput, LeagueUncheckedCreateWithoutEventsInput>
  }

  export type TeamCreateWithoutHomeEventsInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    sport: SportCreateNestedOneWithoutTeamsInput
    country?: CountryCreateNestedOneWithoutTeamsInput
    awayEvents?: EventCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeEventsInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    awayEvents?: EventUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeEventsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeEventsInput, TeamUncheckedCreateWithoutHomeEventsInput>
  }

  export type TeamCreateWithoutAwayEventsInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    sport: SportCreateNestedOneWithoutTeamsInput
    country?: CountryCreateNestedOneWithoutTeamsInput
    homeEvents?: EventCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayEventsInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
    homeEvents?: EventUncheckedCreateNestedManyWithoutHomeTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayEventsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayEventsInput, TeamUncheckedCreateWithoutAwayEventsInput>
  }

  export type MarketCreateWithoutEventInput = {
    id?: string
    providerMarketId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: MarketSelectionCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutEventInput = {
    id?: string
    providerMarketId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    selections?: MarketSelectionUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutEventInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput>
  }

  export type MarketCreateManyEventInputEnvelope = {
    data: MarketCreateManyEventInput | MarketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type LiveMatchUpdateCreateWithoutEventInput = {
    id?: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
  }

  export type LiveMatchUpdateUncheckedCreateWithoutEventInput = {
    id?: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
  }

  export type LiveMatchUpdateCreateOrConnectWithoutEventInput = {
    where: LiveMatchUpdateWhereUniqueInput
    create: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput>
  }

  export type LiveMatchUpdateCreateManyEventInputEnvelope = {
    data: LiveMatchUpdateCreateManyEventInput | LiveMatchUpdateCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type SportUpsertWithoutEventsInput = {
    update: XOR<SportUpdateWithoutEventsInput, SportUncheckedUpdateWithoutEventsInput>
    create: XOR<SportCreateWithoutEventsInput, SportUncheckedCreateWithoutEventsInput>
    where?: SportWhereInput
  }

  export type SportUpdateToOneWithWhereWithoutEventsInput = {
    where?: SportWhereInput
    data: XOR<SportUpdateWithoutEventsInput, SportUncheckedUpdateWithoutEventsInput>
  }

  export type SportUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUpdateManyWithoutSportNestedInput
    teams?: TeamUpdateManyWithoutSportNestedInput
  }

  export type SportUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leagues?: LeagueUncheckedUpdateManyWithoutSportNestedInput
    teams?: TeamUncheckedUpdateManyWithoutSportNestedInput
  }

  export type LeagueUpsertWithoutEventsInput = {
    update: XOR<LeagueUpdateWithoutEventsInput, LeagueUncheckedUpdateWithoutEventsInput>
    create: XOR<LeagueCreateWithoutEventsInput, LeagueUncheckedCreateWithoutEventsInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutEventsInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutEventsInput, LeagueUncheckedUpdateWithoutEventsInput>
  }

  export type LeagueUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutLeaguesNestedInput
    country?: CountryUpdateOneWithoutLeaguesNestedInput
  }

  export type LeagueUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUpsertWithoutHomeEventsInput = {
    update: XOR<TeamUpdateWithoutHomeEventsInput, TeamUncheckedUpdateWithoutHomeEventsInput>
    create: XOR<TeamCreateWithoutHomeEventsInput, TeamUncheckedCreateWithoutHomeEventsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeEventsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeEventsInput, TeamUncheckedUpdateWithoutHomeEventsInput>
  }

  export type TeamUpdateWithoutHomeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    sport?: SportUpdateOneRequiredWithoutTeamsNestedInput
    country?: CountryUpdateOneWithoutTeamsNestedInput
    awayEvents?: EventUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    awayEvents?: EventUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUpsertWithoutAwayEventsInput = {
    update: XOR<TeamUpdateWithoutAwayEventsInput, TeamUncheckedUpdateWithoutAwayEventsInput>
    create: XOR<TeamCreateWithoutAwayEventsInput, TeamUncheckedCreateWithoutAwayEventsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayEventsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayEventsInput, TeamUncheckedUpdateWithoutAwayEventsInput>
  }

  export type TeamUpdateWithoutAwayEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    sport?: SportUpdateOneRequiredWithoutTeamsNestedInput
    country?: CountryUpdateOneWithoutTeamsNestedInput
    homeEvents?: EventUpdateManyWithoutHomeTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    homeEvents?: EventUncheckedUpdateManyWithoutHomeTeamNestedInput
  }

  export type MarketUpsertWithWhereUniqueWithoutEventInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutEventInput, MarketUncheckedUpdateWithoutEventInput>
    create: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutEventInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutEventInput, MarketUncheckedUpdateWithoutEventInput>
  }

  export type MarketUpdateManyWithWhereWithoutEventInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutEventInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: StringFilter<"Market"> | string
    providerMarketId?: StringFilter<"Market"> | string
    eventId?: StringFilter<"Market"> | string
    type?: EnumMarketTypeFilter<"Market"> | $Enums.MarketType
    name?: StringFilter<"Market"> | string
    specifiers?: JsonNullableFilter<"Market">
    handicapValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"Market"> | Decimal | DecimalJsLike | number | string | null
    period?: StringNullableFilter<"Market"> | string | null
    status?: EnumMarketStatusFilter<"Market"> | $Enums.MarketStatus
    displayedName?: StringNullableFilter<"Market"> | string | null
    cashoutAvailable?: BoolFilter<"Market"> | boolean
    firstCashoutAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    lastSuspendedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
    suspendedReason?: StringNullableFilter<"Market"> | string | null
    source?: StringNullableFilter<"Market"> | string | null
    openDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    closeDate?: DateTimeNullableFilter<"Market"> | Date | string | null
    createdAt?: DateTimeFilter<"Market"> | Date | string
    updatedAt?: DateTimeFilter<"Market"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Market"> | Date | string | null
  }

  export type LiveMatchUpdateUpsertWithWhereUniqueWithoutEventInput = {
    where: LiveMatchUpdateWhereUniqueInput
    update: XOR<LiveMatchUpdateUpdateWithoutEventInput, LiveMatchUpdateUncheckedUpdateWithoutEventInput>
    create: XOR<LiveMatchUpdateCreateWithoutEventInput, LiveMatchUpdateUncheckedCreateWithoutEventInput>
  }

  export type LiveMatchUpdateUpdateWithWhereUniqueWithoutEventInput = {
    where: LiveMatchUpdateWhereUniqueInput
    data: XOR<LiveMatchUpdateUpdateWithoutEventInput, LiveMatchUpdateUncheckedUpdateWithoutEventInput>
  }

  export type LiveMatchUpdateUpdateManyWithWhereWithoutEventInput = {
    where: LiveMatchUpdateScalarWhereInput
    data: XOR<LiveMatchUpdateUpdateManyMutationInput, LiveMatchUpdateUncheckedUpdateManyWithoutEventInput>
  }

  export type LiveMatchUpdateScalarWhereInput = {
    AND?: LiveMatchUpdateScalarWhereInput | LiveMatchUpdateScalarWhereInput[]
    OR?: LiveMatchUpdateScalarWhereInput[]
    NOT?: LiveMatchUpdateScalarWhereInput | LiveMatchUpdateScalarWhereInput[]
    id?: StringFilter<"LiveMatchUpdate"> | string
    eventId?: StringFilter<"LiveMatchUpdate"> | string
    type?: EnumLiveEventTypeFilter<"LiveMatchUpdate"> | $Enums.LiveEventType
    minute?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    homeHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    awayHalfScore?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    period?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    incidentData?: JsonNullableFilter<"LiveMatchUpdate">
    playerName?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    teamSide?: StringNullableFilter<"LiveMatchUpdate"> | string | null
    clockMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    stoppageMinutes?: IntNullableFilter<"LiveMatchUpdate"> | number | null
    extraTime?: BoolNullableFilter<"LiveMatchUpdate"> | boolean | null
    matchStatusAfter?: EnumEventStatusNullableFilter<"LiveMatchUpdate"> | $Enums.EventStatus | null
    createdAt?: DateTimeFilter<"LiveMatchUpdate"> | Date | string
  }

  export type EventCreateWithoutMarketsInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    league: LeagueCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    liveUpdates?: LiveMatchUpdateCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutMarketsInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    liveUpdates?: LiveMatchUpdateUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutMarketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
  }

  export type MarketSelectionCreateWithoutMarketInput = {
    id?: string
    providerSelectionId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUncheckedCreateWithoutMarketInput = {
    id?: string
    providerSelectionId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionCreateOrConnectWithoutMarketInput = {
    where: MarketSelectionWhereUniqueInput
    create: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput>
  }

  export type MarketSelectionCreateManyMarketInputEnvelope = {
    data: MarketSelectionCreateManyMarketInput | MarketSelectionCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutMarketsInput = {
    update: XOR<EventUpdateWithoutMarketsInput, EventUncheckedUpdateWithoutMarketsInput>
    create: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMarketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMarketsInput, EventUncheckedUpdateWithoutMarketsInput>
  }

  export type EventUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type MarketSelectionUpsertWithWhereUniqueWithoutMarketInput = {
    where: MarketSelectionWhereUniqueInput
    update: XOR<MarketSelectionUpdateWithoutMarketInput, MarketSelectionUncheckedUpdateWithoutMarketInput>
    create: XOR<MarketSelectionCreateWithoutMarketInput, MarketSelectionUncheckedCreateWithoutMarketInput>
  }

  export type MarketSelectionUpdateWithWhereUniqueWithoutMarketInput = {
    where: MarketSelectionWhereUniqueInput
    data: XOR<MarketSelectionUpdateWithoutMarketInput, MarketSelectionUncheckedUpdateWithoutMarketInput>
  }

  export type MarketSelectionUpdateManyWithWhereWithoutMarketInput = {
    where: MarketSelectionScalarWhereInput
    data: XOR<MarketSelectionUpdateManyMutationInput, MarketSelectionUncheckedUpdateManyWithoutMarketInput>
  }

  export type MarketSelectionScalarWhereInput = {
    AND?: MarketSelectionScalarWhereInput | MarketSelectionScalarWhereInput[]
    OR?: MarketSelectionScalarWhereInput[]
    NOT?: MarketSelectionScalarWhereInput | MarketSelectionScalarWhereInput[]
    id?: StringFilter<"MarketSelection"> | string
    providerSelectionId?: StringFilter<"MarketSelection"> | string
    marketId?: StringFilter<"MarketSelection"> | string
    name?: StringFilter<"MarketSelection"> | string
    outcome?: EnumSelectionOutcomeFilter<"MarketSelection"> | $Enums.SelectionOutcome
    odds?: DecimalFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string
    oddsDisplay?: StringNullableFilter<"MarketSelection"> | string | null
    status?: EnumMarketStatusFilter<"MarketSelection"> | $Enums.MarketStatus
    probabilityPercent?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    handicapValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    originalOdds?: DecimalNullableFilter<"MarketSelection"> | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: DateTimeNullableFilter<"MarketSelection"> | Date | string | null
    lastChangedBy?: StringNullableFilter<"MarketSelection"> | string | null
    isTrendingUp?: BoolFilter<"MarketSelection"> | boolean
    isBestOffered?: BoolFilter<"MarketSelection"> | boolean
    meta?: JsonNullableFilter<"MarketSelection">
  }

  export type MarketCreateWithoutSelectionsInput = {
    id?: string
    providerMarketId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutMarketsInput
  }

  export type MarketUncheckedCreateWithoutSelectionsInput = {
    id?: string
    providerMarketId: string
    eventId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MarketCreateOrConnectWithoutSelectionsInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutSelectionsInput, MarketUncheckedCreateWithoutSelectionsInput>
  }

  export type MarketUpsertWithoutSelectionsInput = {
    update: XOR<MarketUpdateWithoutSelectionsInput, MarketUncheckedUpdateWithoutSelectionsInput>
    create: XOR<MarketCreateWithoutSelectionsInput, MarketUncheckedCreateWithoutSelectionsInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutSelectionsInput, MarketUncheckedUpdateWithoutSelectionsInput>
  }

  export type MarketUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutMarketsNestedInput
  }

  export type MarketUncheckedUpdateWithoutSelectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateWithoutLiveUpdatesInput = {
    id?: string
    providerEventId: string
    name: string
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sport: SportCreateNestedOneWithoutEventsInput
    league: LeagueCreateNestedOneWithoutEventsInput
    homeTeam?: TeamCreateNestedOneWithoutHomeEventsInput
    awayTeam?: TeamCreateNestedOneWithoutAwayEventsInput
    markets?: MarketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutLiveUpdatesInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutLiveUpdatesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLiveUpdatesInput, EventUncheckedCreateWithoutLiveUpdatesInput>
  }

  export type EventUpsertWithoutLiveUpdatesInput = {
    update: XOR<EventUpdateWithoutLiveUpdatesInput, EventUncheckedUpdateWithoutLiveUpdatesInput>
    create: XOR<EventCreateWithoutLiveUpdatesInput, EventUncheckedCreateWithoutLiveUpdatesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutLiveUpdatesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutLiveUpdatesInput, EventUncheckedUpdateWithoutLiveUpdatesInput>
  }

  export type EventUpdateWithoutLiveUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutLiveUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type LeagueCreateManySportInput = {
    id?: string
    providerLeagueId: string
    name: string
    countryId?: string | null
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TeamCreateManySportInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    countryId?: string | null
    aliases?: TeamCreatealiasesInput | string[]
  }

  export type EventCreateManySportInput = {
    id?: string
    providerEventId: string
    name: string
    leagueId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LeagueUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: CountryUpdateOneWithoutLeaguesNestedInput
    events?: EventUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    country?: CountryUpdateOneWithoutTeamsNestedInput
    homeEvents?: EventUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    homeEvents?: EventUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
  }

  export type EventUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutSportInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeagueCreateManyCountryInput = {
    id?: string
    providerLeagueId: string
    name: string
    sportId: string
    tier?: number | null
    active?: boolean
    isTop?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TeamCreateManyCountryInput = {
    id?: string
    providerTeamId: string
    name: string
    shortName?: string | null
    logoUrl?: string | null
    sportId: string
    aliases?: TeamCreatealiasesInput | string[]
  }

  export type LeagueUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutLeaguesNestedInput
    events?: EventUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerLeagueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    tier?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    isTop?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: TeamUpdatealiasesInput | string[]
    sport?: SportUpdateOneRequiredWithoutTeamsNestedInput
    homeEvents?: EventUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    aliases?: TeamUpdatealiasesInput | string[]
    homeEvents?: EventUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayEvents?: EventUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerTeamId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sportId?: StringFieldUpdateOperationsInput | string
    aliases?: TeamUpdatealiasesInput | string[]
  }

  export type EventCreateManyLeagueInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    homeTeamId?: string | null
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateManyHomeTeamInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    awayTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventCreateManyAwayTeamInput = {
    id?: string
    providerEventId: string
    name: string
    sportId: string
    leagueId: string
    homeTeamId?: string | null
    homeTeamName?: string | null
    awayTeamName?: string | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    extraTimeScore?: string | null
    penaltyScore?: string | null
    status?: $Enums.EventStatus
    kickoffAt: Date | string
    liveStartedAt?: Date | string | null
    liveUpdatedAt?: Date | string | null
    firstHalfStart?: Date | string | null
    secondHalfStart?: Date | string | null
    minuteOfMatch?: number | null
    injuryMinutes?: number | null
    liveCoverageAvailable?: boolean | null
    liveStreamAvailable?: boolean | null
    streamUrl?: string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: boolean | null
    isFeatured?: boolean | null
    oddsLastCheckedAt?: Date | string | null
    marketsCount?: number
    activeBetCount?: number
    settledAt?: Date | string | null
    winner?: string | null
    slug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    awayTeam?: TeamUpdateOneWithoutAwayEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sport?: SportUpdateOneRequiredWithoutEventsNestedInput
    league?: LeagueUpdateOneRequiredWithoutEventsNestedInput
    homeTeam?: TeamUpdateOneWithoutHomeEventsNestedInput
    markets?: MarketUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    liveUpdates?: LiveMatchUpdateUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sportId?: StringFieldUpdateOperationsInput | string
    leagueId?: StringFieldUpdateOperationsInput | string
    homeTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    awayTeamName?: NullableStringFieldUpdateOperationsInput | string | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    extraTimeScore?: NullableStringFieldUpdateOperationsInput | string | null
    penaltyScore?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    kickoffAt?: DateTimeFieldUpdateOperationsInput | Date | string
    liveStartedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    liveUpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondHalfStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    minuteOfMatch?: NullableIntFieldUpdateOperationsInput | number | null
    injuryMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    liveCoverageAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    liveStreamAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventMeta?: NullableJsonNullValueInput | InputJsonValue
    isTop?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isFeatured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    oddsLastCheckedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marketsCount?: IntFieldUpdateOperationsInput | number
    activeBetCount?: IntFieldUpdateOperationsInput | number
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winner?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarketCreateManyEventInput = {
    id?: string
    providerMarketId: string
    type: $Enums.MarketType
    name: string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    period?: string | null
    status?: $Enums.MarketStatus
    displayedName?: string | null
    cashoutAvailable?: boolean
    firstCashoutAt?: Date | string | null
    lastSuspendedAt?: Date | string | null
    suspendedReason?: string | null
    source?: string | null
    openDate?: Date | string | null
    closeDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LiveMatchUpdateCreateManyEventInput = {
    id?: string
    type: $Enums.LiveEventType
    minute?: number | null
    homeScore?: number | null
    awayScore?: number | null
    homeHalfScore?: number | null
    awayHalfScore?: number | null
    period?: string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: string | null
    teamSide?: string | null
    clockMinutes?: number | null
    stoppageMinutes?: number | null
    extraTime?: boolean | null
    matchStatusAfter?: $Enums.EventStatus | null
    createdAt?: Date | string
  }

  export type MarketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: MarketSelectionUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    selections?: MarketSelectionUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerMarketId?: StringFieldUpdateOperationsInput | string
    type?: EnumMarketTypeFieldUpdateOperationsInput | $Enums.MarketType
    name?: StringFieldUpdateOperationsInput | string
    specifiers?: NullableJsonNullValueInput | InputJsonValue
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    displayedName?: NullableStringFieldUpdateOperationsInput | string | null
    cashoutAvailable?: BoolFieldUpdateOperationsInput | boolean
    firstCashoutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSuspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedReason?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    openDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LiveMatchUpdateUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveMatchUpdateUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LiveMatchUpdateUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLiveEventTypeFieldUpdateOperationsInput | $Enums.LiveEventType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayHalfScore?: NullableIntFieldUpdateOperationsInput | number | null
    period?: NullableStringFieldUpdateOperationsInput | string | null
    incidentData?: NullableJsonNullValueInput | InputJsonValue
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    teamSide?: NullableStringFieldUpdateOperationsInput | string | null
    clockMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    stoppageMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    extraTime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    matchStatusAfter?: NullableEnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSelectionCreateManyMarketInput = {
    id?: string
    providerSelectionId: string
    name: string
    outcome: $Enums.SelectionOutcome
    odds: Decimal | DecimalJsLike | number | string
    oddsDisplay?: string | null
    status?: $Enums.MarketStatus
    probabilityPercent?: Decimal | DecimalJsLike | number | string | null
    handicapValue?: Decimal | DecimalJsLike | number | string | null
    totalLineValue?: Decimal | DecimalJsLike | number | string | null
    originalOdds?: Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: Date | string | null
    lastChangedBy?: string | null
    isTrendingUp?: boolean
    isBestOffered?: boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MarketSelectionUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerSelectionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    outcome?: EnumSelectionOutcomeFieldUpdateOperationsInput | $Enums.SelectionOutcome
    odds?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    oddsDisplay?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMarketStatusFieldUpdateOperationsInput | $Enums.MarketStatus
    probabilityPercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    handicapValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalLineValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originalOdds?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    isTrendingUp?: BoolFieldUpdateOperationsInput | boolean
    isBestOffered?: BoolFieldUpdateOperationsInput | boolean
    meta?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SportCountOutputTypeDefaultArgs instead
     */
    export type SportCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SportCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeagueCountOutputTypeDefaultArgs instead
     */
    export type LeagueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeagueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketCountOutputTypeDefaultArgs instead
     */
    export type MarketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SportDefaultArgs instead
     */
    export type SportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeagueDefaultArgs instead
     */
    export type LeagueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeagueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketDefaultArgs instead
     */
    export type MarketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketSelectionDefaultArgs instead
     */
    export type MarketSelectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketSelectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LiveMatchUpdateDefaultArgs instead
     */
    export type LiveMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LiveMatchUpdateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProviderSyncStateDefaultArgs instead
     */
    export type ProviderSyncStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProviderSyncStateDefaultArgs<ExtArgs>

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