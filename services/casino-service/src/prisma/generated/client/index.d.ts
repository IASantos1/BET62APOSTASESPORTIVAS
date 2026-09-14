
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
 * Model CasinoGame
 * 
 */
export type CasinoGame = $Result.DefaultSelection<Prisma.$CasinoGamePayload>
/**
 * Model CasinoGameFavorite
 * 
 */
export type CasinoGameFavorite = $Result.DefaultSelection<Prisma.$CasinoGameFavoritePayload>
/**
 * Model CasinoSession
 * 
 */
export type CasinoSession = $Result.DefaultSelection<Prisma.$CasinoSessionPayload>
/**
 * Model CasinoBet
 * 
 */
export type CasinoBet = $Result.DefaultSelection<Prisma.$CasinoBetPayload>
/**
 * Model CasinoJackpot
 * 
 */
export type CasinoJackpot = $Result.DefaultSelection<Prisma.$CasinoJackpotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CasinoGameCategory: {
  SLOTS: 'SLOTS',
  ROULETTE: 'ROULETTE',
  BLACKJACK: 'BLACKJACK',
  BACCARAT: 'BACCARAT',
  POKER: 'POKER',
  CRAPS: 'CRAPS',
  KENO: 'KENO',
  SCRATCH_CARDS: 'SCRATCH_CARDS',
  BINGO: 'BINGO',
  LIVE_DEALER: 'LIVE_DEALER',
  LIVE_ROULETTE: 'LIVE_ROULETTE',
  LIVE_BLACKJACK: 'LIVE_BLACKJACK',
  LIVE_BACCARAT: 'LIVE_BACCARAT',
  GAME_SHOW: 'GAME_SHOW',
  VIRTUAL_SPORTS: 'VIRTUAL_SPORTS',
  JACKPOT: 'JACKPOT',
  MEGA_WAYS: 'MEGA_WAYS'
};

export type CasinoGameCategory = (typeof CasinoGameCategory)[keyof typeof CasinoGameCategory]


export const CasinoProvider: {
  MOCK: 'MOCK',
  PGSOFT: 'PGSOFT',
  EVOLUTION: 'EVOLUTION',
  PRAGMATIC: 'PRAGMATIC',
  NETENT: 'NETENT',
  MICROGAMING: 'MICROGAMING',
  PLAYTECH: 'PLAYTECH',
  YGGDRASIL: 'YGGDRASIL',
  QUICKSPIN: 'QUICKSPIN',
  RED_TIGER: 'RED_TIGER',
  PLAY_N_GO: 'PLAY_N_GO',
  HABANERO: 'HABANERO',
  BOOMING: 'BOOMING'
};

export type CasinoProvider = (typeof CasinoProvider)[keyof typeof CasinoProvider]


export const CasinoGameStatus: {
  ACTIVE: 'ACTIVE',
  MAINTENANCE: 'MAINTENANCE',
  DISABLED: 'DISABLED',
  COMING_SOON: 'COMING_SOON'
};

export type CasinoGameStatus = (typeof CasinoGameStatus)[keyof typeof CasinoGameStatus]


export const CasinoSessionStatus: {
  INITIATED: 'INITIATED',
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  TIMED_OUT: 'TIMED_OUT',
  ERROR: 'ERROR',
  KYC_REQUIRED: 'KYC_REQUIRED',
  SELF_EXCLUDED: 'SELF_EXCLUDED'
};

export type CasinoSessionStatus = (typeof CasinoSessionStatus)[keyof typeof CasinoSessionStatus]


export const CasinoBetStatus: {
  PLACED: 'PLACED',
  WON: 'WON',
  LOST: 'LOST',
  PUSH: 'PUSH',
  VOID: 'VOID',
  FREE_SPIN: 'FREE_SPIN',
  BONUS_GAME: 'BONUS_GAME'
};

export type CasinoBetStatus = (typeof CasinoBetStatus)[keyof typeof CasinoBetStatus]


export const CasinoJackpotType: {
  PROGRESSIVE: 'PROGRESSIVE',
  LOCAL: 'LOCAL',
  NETWORK: 'NETWORK',
  DAILY_DROP: 'DAILY_DROP'
};

export type CasinoJackpotType = (typeof CasinoJackpotType)[keyof typeof CasinoJackpotType]

}

export type CasinoGameCategory = $Enums.CasinoGameCategory

export const CasinoGameCategory: typeof $Enums.CasinoGameCategory

export type CasinoProvider = $Enums.CasinoProvider

export const CasinoProvider: typeof $Enums.CasinoProvider

export type CasinoGameStatus = $Enums.CasinoGameStatus

export const CasinoGameStatus: typeof $Enums.CasinoGameStatus

export type CasinoSessionStatus = $Enums.CasinoSessionStatus

export const CasinoSessionStatus: typeof $Enums.CasinoSessionStatus

export type CasinoBetStatus = $Enums.CasinoBetStatus

export const CasinoBetStatus: typeof $Enums.CasinoBetStatus

export type CasinoJackpotType = $Enums.CasinoJackpotType

export const CasinoJackpotType: typeof $Enums.CasinoJackpotType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CasinoGames
 * const casinoGames = await prisma.casinoGame.findMany()
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
   * // Fetch zero or more CasinoGames
   * const casinoGames = await prisma.casinoGame.findMany()
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
   * `prisma.casinoGame`: Exposes CRUD operations for the **CasinoGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoGames
    * const casinoGames = await prisma.casinoGame.findMany()
    * ```
    */
  get casinoGame(): Prisma.CasinoGameDelegate<ExtArgs>;

  /**
   * `prisma.casinoGameFavorite`: Exposes CRUD operations for the **CasinoGameFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoGameFavorites
    * const casinoGameFavorites = await prisma.casinoGameFavorite.findMany()
    * ```
    */
  get casinoGameFavorite(): Prisma.CasinoGameFavoriteDelegate<ExtArgs>;

  /**
   * `prisma.casinoSession`: Exposes CRUD operations for the **CasinoSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoSessions
    * const casinoSessions = await prisma.casinoSession.findMany()
    * ```
    */
  get casinoSession(): Prisma.CasinoSessionDelegate<ExtArgs>;

  /**
   * `prisma.casinoBet`: Exposes CRUD operations for the **CasinoBet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoBets
    * const casinoBets = await prisma.casinoBet.findMany()
    * ```
    */
  get casinoBet(): Prisma.CasinoBetDelegate<ExtArgs>;

  /**
   * `prisma.casinoJackpot`: Exposes CRUD operations for the **CasinoJackpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CasinoJackpots
    * const casinoJackpots = await prisma.casinoJackpot.findMany()
    * ```
    */
  get casinoJackpot(): Prisma.CasinoJackpotDelegate<ExtArgs>;
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
    CasinoGame: 'CasinoGame',
    CasinoGameFavorite: 'CasinoGameFavorite',
    CasinoSession: 'CasinoSession',
    CasinoBet: 'CasinoBet',
    CasinoJackpot: 'CasinoJackpot'
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
      modelProps: "casinoGame" | "casinoGameFavorite" | "casinoSession" | "casinoBet" | "casinoJackpot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CasinoGame: {
        payload: Prisma.$CasinoGamePayload<ExtArgs>
        fields: Prisma.CasinoGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          findFirst: {
            args: Prisma.CasinoGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          findMany: {
            args: Prisma.CasinoGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>[]
          }
          create: {
            args: Prisma.CasinoGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          createMany: {
            args: Prisma.CasinoGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>[]
          }
          delete: {
            args: Prisma.CasinoGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          update: {
            args: Prisma.CasinoGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          deleteMany: {
            args: Prisma.CasinoGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGamePayload>
          }
          aggregate: {
            args: Prisma.CasinoGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoGame>
          }
          groupBy: {
            args: Prisma.CasinoGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoGameCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoGameCountAggregateOutputType> | number
          }
        }
      }
      CasinoGameFavorite: {
        payload: Prisma.$CasinoGameFavoritePayload<ExtArgs>
        fields: Prisma.CasinoGameFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoGameFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoGameFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          findFirst: {
            args: Prisma.CasinoGameFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoGameFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          findMany: {
            args: Prisma.CasinoGameFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>[]
          }
          create: {
            args: Prisma.CasinoGameFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          createMany: {
            args: Prisma.CasinoGameFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoGameFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>[]
          }
          delete: {
            args: Prisma.CasinoGameFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          update: {
            args: Prisma.CasinoGameFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          deleteMany: {
            args: Prisma.CasinoGameFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoGameFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoGameFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoGameFavoritePayload>
          }
          aggregate: {
            args: Prisma.CasinoGameFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoGameFavorite>
          }
          groupBy: {
            args: Prisma.CasinoGameFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoGameFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoGameFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoGameFavoriteCountAggregateOutputType> | number
          }
        }
      }
      CasinoSession: {
        payload: Prisma.$CasinoSessionPayload<ExtArgs>
        fields: Prisma.CasinoSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          findFirst: {
            args: Prisma.CasinoSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          findMany: {
            args: Prisma.CasinoSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>[]
          }
          create: {
            args: Prisma.CasinoSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          createMany: {
            args: Prisma.CasinoSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>[]
          }
          delete: {
            args: Prisma.CasinoSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          update: {
            args: Prisma.CasinoSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          deleteMany: {
            args: Prisma.CasinoSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoSessionPayload>
          }
          aggregate: {
            args: Prisma.CasinoSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoSession>
          }
          groupBy: {
            args: Prisma.CasinoSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoSessionCountAggregateOutputType> | number
          }
        }
      }
      CasinoBet: {
        payload: Prisma.$CasinoBetPayload<ExtArgs>
        fields: Prisma.CasinoBetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoBetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoBetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          findFirst: {
            args: Prisma.CasinoBetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoBetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          findMany: {
            args: Prisma.CasinoBetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>[]
          }
          create: {
            args: Prisma.CasinoBetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          createMany: {
            args: Prisma.CasinoBetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoBetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>[]
          }
          delete: {
            args: Prisma.CasinoBetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          update: {
            args: Prisma.CasinoBetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          deleteMany: {
            args: Prisma.CasinoBetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoBetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoBetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoBetPayload>
          }
          aggregate: {
            args: Prisma.CasinoBetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoBet>
          }
          groupBy: {
            args: Prisma.CasinoBetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoBetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoBetCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoBetCountAggregateOutputType> | number
          }
        }
      }
      CasinoJackpot: {
        payload: Prisma.$CasinoJackpotPayload<ExtArgs>
        fields: Prisma.CasinoJackpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CasinoJackpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CasinoJackpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          findFirst: {
            args: Prisma.CasinoJackpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CasinoJackpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          findMany: {
            args: Prisma.CasinoJackpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>[]
          }
          create: {
            args: Prisma.CasinoJackpotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          createMany: {
            args: Prisma.CasinoJackpotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CasinoJackpotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>[]
          }
          delete: {
            args: Prisma.CasinoJackpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          update: {
            args: Prisma.CasinoJackpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          deleteMany: {
            args: Prisma.CasinoJackpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CasinoJackpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CasinoJackpotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasinoJackpotPayload>
          }
          aggregate: {
            args: Prisma.CasinoJackpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCasinoJackpot>
          }
          groupBy: {
            args: Prisma.CasinoJackpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CasinoJackpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CasinoJackpotCountArgs<ExtArgs>
            result: $Utils.Optional<CasinoJackpotCountAggregateOutputType> | number
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
   * Count Type CasinoGameCountOutputType
   */

  export type CasinoGameCountOutputType = {
    favorites: number
    sessions: number
    bets: number
  }

  export type CasinoGameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | CasinoGameCountOutputTypeCountFavoritesArgs
    sessions?: boolean | CasinoGameCountOutputTypeCountSessionsArgs
    bets?: boolean | CasinoGameCountOutputTypeCountBetsArgs
  }

  // Custom InputTypes
  /**
   * CasinoGameCountOutputType without action
   */
  export type CasinoGameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameCountOutputType
     */
    select?: CasinoGameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasinoGameCountOutputType without action
   */
  export type CasinoGameCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoGameFavoriteWhereInput
  }

  /**
   * CasinoGameCountOutputType without action
   */
  export type CasinoGameCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoSessionWhereInput
  }

  /**
   * CasinoGameCountOutputType without action
   */
  export type CasinoGameCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoBetWhereInput
  }


  /**
   * Count Type CasinoSessionCountOutputType
   */

  export type CasinoSessionCountOutputType = {
    bets: number
  }

  export type CasinoSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | CasinoSessionCountOutputTypeCountBetsArgs
  }

  // Custom InputTypes
  /**
   * CasinoSessionCountOutputType without action
   */
  export type CasinoSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSessionCountOutputType
     */
    select?: CasinoSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CasinoSessionCountOutputType without action
   */
  export type CasinoSessionCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoBetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CasinoGame
   */

  export type AggregateCasinoGame = {
    _count: CasinoGameCountAggregateOutputType | null
    _avg: CasinoGameAvgAggregateOutputType | null
    _sum: CasinoGameSumAggregateOutputType | null
    _min: CasinoGameMinAggregateOutputType | null
    _max: CasinoGameMaxAggregateOutputType | null
  }

  export type CasinoGameAvgAggregateOutputType = {
    rtp: Decimal | null
    minBet: Decimal | null
    maxBet: Decimal | null
    maxWinMultiplier: Decimal | null
    lines: number | null
    reels: number | null
    popularTrendScore: number | null
    totalRoundsPlayed: number | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    seededHouseEdgePercent: Decimal | null
  }

  export type CasinoGameSumAggregateOutputType = {
    rtp: Decimal | null
    minBet: Decimal | null
    maxBet: Decimal | null
    maxWinMultiplier: Decimal | null
    lines: number | null
    reels: number | null
    popularTrendScore: number | null
    totalRoundsPlayed: bigint | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    seededHouseEdgePercent: Decimal | null
  }

  export type CasinoGameMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    providerGameId: string | null
    name: string | null
    slug: string | null
    category: $Enums.CasinoGameCategory | null
    provider: $Enums.CasinoProvider | null
    status: $Enums.CasinoGameStatus | null
    rtp: Decimal | null
    volatility: string | null
    minBet: Decimal | null
    maxBet: Decimal | null
    maxWinMultiplier: Decimal | null
    lines: number | null
    reels: number | null
    hasFreeSpins: boolean | null
    hasJackpot: boolean | null
    hasBonusBuy: boolean | null
    hasLiveDealer: boolean | null
    thumbUrl: string | null
    bannerUrl: string | null
    isNew: boolean | null
    isHot: boolean | null
    isFeatured: boolean | null
    popularTrendScore: number | null
    totalRoundsPlayed: bigint | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    lastWinAt: Date | null
    seededHouseEdgePercent: Decimal | null
    providerUrlDeepLink: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CasinoGameMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    providerGameId: string | null
    name: string | null
    slug: string | null
    category: $Enums.CasinoGameCategory | null
    provider: $Enums.CasinoProvider | null
    status: $Enums.CasinoGameStatus | null
    rtp: Decimal | null
    volatility: string | null
    minBet: Decimal | null
    maxBet: Decimal | null
    maxWinMultiplier: Decimal | null
    lines: number | null
    reels: number | null
    hasFreeSpins: boolean | null
    hasJackpot: boolean | null
    hasBonusBuy: boolean | null
    hasLiveDealer: boolean | null
    thumbUrl: string | null
    bannerUrl: string | null
    isNew: boolean | null
    isHot: boolean | null
    isFeatured: boolean | null
    popularTrendScore: number | null
    totalRoundsPlayed: bigint | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    lastWinAt: Date | null
    seededHouseEdgePercent: Decimal | null
    providerUrlDeepLink: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CasinoGameCountAggregateOutputType = {
    id: number
    providerId: number
    providerGameId: number
    name: number
    slug: number
    category: number
    provider: number
    status: number
    rtp: number
    volatility: number
    minBet: number
    maxBet: number
    maxWinMultiplier: number
    lines: number
    reels: number
    hasFreeSpins: number
    hasJackpot: number
    hasBonusBuy: number
    hasLiveDealer: number
    gameConfig: number
    thumbUrl: number
    bannerUrl: number
    lobbyTags: number
    languages: number
    countriesBlocked: number
    isNew: number
    isHot: number
    isFeatured: number
    popularTrendScore: number
    totalRoundsPlayed: number
    totalWagered: number
    totalPayout: number
    lastWinAt: number
    seededHouseEdgePercent: number
    providerUrlDeepLink: number
    createdBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CasinoGameAvgAggregateInputType = {
    rtp?: true
    minBet?: true
    maxBet?: true
    maxWinMultiplier?: true
    lines?: true
    reels?: true
    popularTrendScore?: true
    totalRoundsPlayed?: true
    totalWagered?: true
    totalPayout?: true
    seededHouseEdgePercent?: true
  }

  export type CasinoGameSumAggregateInputType = {
    rtp?: true
    minBet?: true
    maxBet?: true
    maxWinMultiplier?: true
    lines?: true
    reels?: true
    popularTrendScore?: true
    totalRoundsPlayed?: true
    totalWagered?: true
    totalPayout?: true
    seededHouseEdgePercent?: true
  }

  export type CasinoGameMinAggregateInputType = {
    id?: true
    providerId?: true
    providerGameId?: true
    name?: true
    slug?: true
    category?: true
    provider?: true
    status?: true
    rtp?: true
    volatility?: true
    minBet?: true
    maxBet?: true
    maxWinMultiplier?: true
    lines?: true
    reels?: true
    hasFreeSpins?: true
    hasJackpot?: true
    hasBonusBuy?: true
    hasLiveDealer?: true
    thumbUrl?: true
    bannerUrl?: true
    isNew?: true
    isHot?: true
    isFeatured?: true
    popularTrendScore?: true
    totalRoundsPlayed?: true
    totalWagered?: true
    totalPayout?: true
    lastWinAt?: true
    seededHouseEdgePercent?: true
    providerUrlDeepLink?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CasinoGameMaxAggregateInputType = {
    id?: true
    providerId?: true
    providerGameId?: true
    name?: true
    slug?: true
    category?: true
    provider?: true
    status?: true
    rtp?: true
    volatility?: true
    minBet?: true
    maxBet?: true
    maxWinMultiplier?: true
    lines?: true
    reels?: true
    hasFreeSpins?: true
    hasJackpot?: true
    hasBonusBuy?: true
    hasLiveDealer?: true
    thumbUrl?: true
    bannerUrl?: true
    isNew?: true
    isHot?: true
    isFeatured?: true
    popularTrendScore?: true
    totalRoundsPlayed?: true
    totalWagered?: true
    totalPayout?: true
    lastWinAt?: true
    seededHouseEdgePercent?: true
    providerUrlDeepLink?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CasinoGameCountAggregateInputType = {
    id?: true
    providerId?: true
    providerGameId?: true
    name?: true
    slug?: true
    category?: true
    provider?: true
    status?: true
    rtp?: true
    volatility?: true
    minBet?: true
    maxBet?: true
    maxWinMultiplier?: true
    lines?: true
    reels?: true
    hasFreeSpins?: true
    hasJackpot?: true
    hasBonusBuy?: true
    hasLiveDealer?: true
    gameConfig?: true
    thumbUrl?: true
    bannerUrl?: true
    lobbyTags?: true
    languages?: true
    countriesBlocked?: true
    isNew?: true
    isHot?: true
    isFeatured?: true
    popularTrendScore?: true
    totalRoundsPlayed?: true
    totalWagered?: true
    totalPayout?: true
    lastWinAt?: true
    seededHouseEdgePercent?: true
    providerUrlDeepLink?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CasinoGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoGame to aggregate.
     */
    where?: CasinoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGames to fetch.
     */
    orderBy?: CasinoGameOrderByWithRelationInput | CasinoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoGames
    **/
    _count?: true | CasinoGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasinoGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasinoGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoGameMaxAggregateInputType
  }

  export type GetCasinoGameAggregateType<T extends CasinoGameAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoGame[P]>
      : GetScalarType<T[P], AggregateCasinoGame[P]>
  }




  export type CasinoGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoGameWhereInput
    orderBy?: CasinoGameOrderByWithAggregationInput | CasinoGameOrderByWithAggregationInput[]
    by: CasinoGameScalarFieldEnum[] | CasinoGameScalarFieldEnum
    having?: CasinoGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoGameCountAggregateInputType | true
    _avg?: CasinoGameAvgAggregateInputType
    _sum?: CasinoGameSumAggregateInputType
    _min?: CasinoGameMinAggregateInputType
    _max?: CasinoGameMaxAggregateInputType
  }

  export type CasinoGameGroupByOutputType = {
    id: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status: $Enums.CasinoGameStatus
    rtp: Decimal
    volatility: string | null
    minBet: Decimal
    maxBet: Decimal
    maxWinMultiplier: Decimal | null
    lines: number | null
    reels: number | null
    hasFreeSpins: boolean
    hasJackpot: boolean
    hasBonusBuy: boolean
    hasLiveDealer: boolean
    gameConfig: JsonValue | null
    thumbUrl: string | null
    bannerUrl: string | null
    lobbyTags: string[]
    languages: string[]
    countriesBlocked: string[]
    isNew: boolean
    isHot: boolean
    isFeatured: boolean
    popularTrendScore: number | null
    totalRoundsPlayed: bigint
    totalWagered: Decimal
    totalPayout: Decimal
    lastWinAt: Date | null
    seededHouseEdgePercent: Decimal | null
    providerUrlDeepLink: string | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CasinoGameCountAggregateOutputType | null
    _avg: CasinoGameAvgAggregateOutputType | null
    _sum: CasinoGameSumAggregateOutputType | null
    _min: CasinoGameMinAggregateOutputType | null
    _max: CasinoGameMaxAggregateOutputType | null
  }

  type GetCasinoGameGroupByPayload<T extends CasinoGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoGameGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoGameGroupByOutputType[P]>
        }
      >
    >


  export type CasinoGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    providerGameId?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    provider?: boolean
    status?: boolean
    rtp?: boolean
    volatility?: boolean
    minBet?: boolean
    maxBet?: boolean
    maxWinMultiplier?: boolean
    lines?: boolean
    reels?: boolean
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: boolean
    thumbUrl?: boolean
    bannerUrl?: boolean
    lobbyTags?: boolean
    languages?: boolean
    countriesBlocked?: boolean
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: boolean
    totalRoundsPlayed?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    lastWinAt?: boolean
    seededHouseEdgePercent?: boolean
    providerUrlDeepLink?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    favorites?: boolean | CasinoGame$favoritesArgs<ExtArgs>
    sessions?: boolean | CasinoGame$sessionsArgs<ExtArgs>
    bets?: boolean | CasinoGame$betsArgs<ExtArgs>
    _count?: boolean | CasinoGameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoGame"]>

  export type CasinoGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    providerGameId?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    provider?: boolean
    status?: boolean
    rtp?: boolean
    volatility?: boolean
    minBet?: boolean
    maxBet?: boolean
    maxWinMultiplier?: boolean
    lines?: boolean
    reels?: boolean
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: boolean
    thumbUrl?: boolean
    bannerUrl?: boolean
    lobbyTags?: boolean
    languages?: boolean
    countriesBlocked?: boolean
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: boolean
    totalRoundsPlayed?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    lastWinAt?: boolean
    seededHouseEdgePercent?: boolean
    providerUrlDeepLink?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["casinoGame"]>

  export type CasinoGameSelectScalar = {
    id?: boolean
    providerId?: boolean
    providerGameId?: boolean
    name?: boolean
    slug?: boolean
    category?: boolean
    provider?: boolean
    status?: boolean
    rtp?: boolean
    volatility?: boolean
    minBet?: boolean
    maxBet?: boolean
    maxWinMultiplier?: boolean
    lines?: boolean
    reels?: boolean
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: boolean
    thumbUrl?: boolean
    bannerUrl?: boolean
    lobbyTags?: boolean
    languages?: boolean
    countriesBlocked?: boolean
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: boolean
    totalRoundsPlayed?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    lastWinAt?: boolean
    seededHouseEdgePercent?: boolean
    providerUrlDeepLink?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CasinoGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | CasinoGame$favoritesArgs<ExtArgs>
    sessions?: boolean | CasinoGame$sessionsArgs<ExtArgs>
    bets?: boolean | CasinoGame$betsArgs<ExtArgs>
    _count?: boolean | CasinoGameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasinoGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CasinoGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoGame"
    objects: {
      favorites: Prisma.$CasinoGameFavoritePayload<ExtArgs>[]
      sessions: Prisma.$CasinoSessionPayload<ExtArgs>[]
      bets: Prisma.$CasinoBetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      providerGameId: string
      name: string
      slug: string
      category: $Enums.CasinoGameCategory
      provider: $Enums.CasinoProvider
      status: $Enums.CasinoGameStatus
      rtp: Prisma.Decimal
      volatility: string | null
      minBet: Prisma.Decimal
      maxBet: Prisma.Decimal
      maxWinMultiplier: Prisma.Decimal | null
      lines: number | null
      reels: number | null
      hasFreeSpins: boolean
      hasJackpot: boolean
      hasBonusBuy: boolean
      hasLiveDealer: boolean
      gameConfig: Prisma.JsonValue | null
      thumbUrl: string | null
      bannerUrl: string | null
      lobbyTags: string[]
      languages: string[]
      countriesBlocked: string[]
      isNew: boolean
      isHot: boolean
      isFeatured: boolean
      popularTrendScore: number | null
      totalRoundsPlayed: bigint
      totalWagered: Prisma.Decimal
      totalPayout: Prisma.Decimal
      lastWinAt: Date | null
      seededHouseEdgePercent: Prisma.Decimal | null
      providerUrlDeepLink: string | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["casinoGame"]>
    composites: {}
  }

  type CasinoGameGetPayload<S extends boolean | null | undefined | CasinoGameDefaultArgs> = $Result.GetResult<Prisma.$CasinoGamePayload, S>

  type CasinoGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoGameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoGameCountAggregateInputType | true
    }

  export interface CasinoGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoGame'], meta: { name: 'CasinoGame' } }
    /**
     * Find zero or one CasinoGame that matches the filter.
     * @param {CasinoGameFindUniqueArgs} args - Arguments to find a CasinoGame
     * @example
     * // Get one CasinoGame
     * const casinoGame = await prisma.casinoGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoGameFindUniqueArgs>(args: SelectSubset<T, CasinoGameFindUniqueArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoGame that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoGameFindUniqueOrThrowArgs} args - Arguments to find a CasinoGame
     * @example
     * // Get one CasinoGame
     * const casinoGame = await prisma.casinoGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoGameFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFindFirstArgs} args - Arguments to find a CasinoGame
     * @example
     * // Get one CasinoGame
     * const casinoGame = await prisma.casinoGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoGameFindFirstArgs>(args?: SelectSubset<T, CasinoGameFindFirstArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFindFirstOrThrowArgs} args - Arguments to find a CasinoGame
     * @example
     * // Get one CasinoGame
     * const casinoGame = await prisma.casinoGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoGameFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoGames
     * const casinoGames = await prisma.casinoGame.findMany()
     * 
     * // Get first 10 CasinoGames
     * const casinoGames = await prisma.casinoGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoGameWithIdOnly = await prisma.casinoGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoGameFindManyArgs>(args?: SelectSubset<T, CasinoGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoGame.
     * @param {CasinoGameCreateArgs} args - Arguments to create a CasinoGame.
     * @example
     * // Create one CasinoGame
     * const CasinoGame = await prisma.casinoGame.create({
     *   data: {
     *     // ... data to create a CasinoGame
     *   }
     * })
     * 
     */
    create<T extends CasinoGameCreateArgs>(args: SelectSubset<T, CasinoGameCreateArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoGames.
     * @param {CasinoGameCreateManyArgs} args - Arguments to create many CasinoGames.
     * @example
     * // Create many CasinoGames
     * const casinoGame = await prisma.casinoGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoGameCreateManyArgs>(args?: SelectSubset<T, CasinoGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoGames and returns the data saved in the database.
     * @param {CasinoGameCreateManyAndReturnArgs} args - Arguments to create many CasinoGames.
     * @example
     * // Create many CasinoGames
     * const casinoGame = await prisma.casinoGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoGames and only return the `id`
     * const casinoGameWithIdOnly = await prisma.casinoGame.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoGameCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoGame.
     * @param {CasinoGameDeleteArgs} args - Arguments to delete one CasinoGame.
     * @example
     * // Delete one CasinoGame
     * const CasinoGame = await prisma.casinoGame.delete({
     *   where: {
     *     // ... filter to delete one CasinoGame
     *   }
     * })
     * 
     */
    delete<T extends CasinoGameDeleteArgs>(args: SelectSubset<T, CasinoGameDeleteArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoGame.
     * @param {CasinoGameUpdateArgs} args - Arguments to update one CasinoGame.
     * @example
     * // Update one CasinoGame
     * const casinoGame = await prisma.casinoGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoGameUpdateArgs>(args: SelectSubset<T, CasinoGameUpdateArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoGames.
     * @param {CasinoGameDeleteManyArgs} args - Arguments to filter CasinoGames to delete.
     * @example
     * // Delete a few CasinoGames
     * const { count } = await prisma.casinoGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoGameDeleteManyArgs>(args?: SelectSubset<T, CasinoGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoGames
     * const casinoGame = await prisma.casinoGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoGameUpdateManyArgs>(args: SelectSubset<T, CasinoGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoGame.
     * @param {CasinoGameUpsertArgs} args - Arguments to update or create a CasinoGame.
     * @example
     * // Update or create a CasinoGame
     * const casinoGame = await prisma.casinoGame.upsert({
     *   create: {
     *     // ... data to create a CasinoGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoGame we want to update
     *   }
     * })
     */
    upsert<T extends CasinoGameUpsertArgs>(args: SelectSubset<T, CasinoGameUpsertArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameCountArgs} args - Arguments to filter CasinoGames to count.
     * @example
     * // Count the number of CasinoGames
     * const count = await prisma.casinoGame.count({
     *   where: {
     *     // ... the filter for the CasinoGames we want to count
     *   }
     * })
    **/
    count<T extends CasinoGameCountArgs>(
      args?: Subset<T, CasinoGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoGameAggregateArgs>(args: Subset<T, CasinoGameAggregateArgs>): Prisma.PrismaPromise<GetCasinoGameAggregateType<T>>

    /**
     * Group by CasinoGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameGroupByArgs} args - Group by arguments.
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
      T extends CasinoGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoGameGroupByArgs['orderBy'] }
        : { orderBy?: CasinoGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoGame model
   */
  readonly fields: CasinoGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favorites<T extends CasinoGame$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGame$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends CasinoGame$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGame$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findMany"> | Null>
    bets<T extends CasinoGame$betsArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGame$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CasinoGame model
   */ 
  interface CasinoGameFieldRefs {
    readonly id: FieldRef<"CasinoGame", 'String'>
    readonly providerId: FieldRef<"CasinoGame", 'String'>
    readonly providerGameId: FieldRef<"CasinoGame", 'String'>
    readonly name: FieldRef<"CasinoGame", 'String'>
    readonly slug: FieldRef<"CasinoGame", 'String'>
    readonly category: FieldRef<"CasinoGame", 'CasinoGameCategory'>
    readonly provider: FieldRef<"CasinoGame", 'CasinoProvider'>
    readonly status: FieldRef<"CasinoGame", 'CasinoGameStatus'>
    readonly rtp: FieldRef<"CasinoGame", 'Decimal'>
    readonly volatility: FieldRef<"CasinoGame", 'String'>
    readonly minBet: FieldRef<"CasinoGame", 'Decimal'>
    readonly maxBet: FieldRef<"CasinoGame", 'Decimal'>
    readonly maxWinMultiplier: FieldRef<"CasinoGame", 'Decimal'>
    readonly lines: FieldRef<"CasinoGame", 'Int'>
    readonly reels: FieldRef<"CasinoGame", 'Int'>
    readonly hasFreeSpins: FieldRef<"CasinoGame", 'Boolean'>
    readonly hasJackpot: FieldRef<"CasinoGame", 'Boolean'>
    readonly hasBonusBuy: FieldRef<"CasinoGame", 'Boolean'>
    readonly hasLiveDealer: FieldRef<"CasinoGame", 'Boolean'>
    readonly gameConfig: FieldRef<"CasinoGame", 'Json'>
    readonly thumbUrl: FieldRef<"CasinoGame", 'String'>
    readonly bannerUrl: FieldRef<"CasinoGame", 'String'>
    readonly lobbyTags: FieldRef<"CasinoGame", 'String[]'>
    readonly languages: FieldRef<"CasinoGame", 'String[]'>
    readonly countriesBlocked: FieldRef<"CasinoGame", 'String[]'>
    readonly isNew: FieldRef<"CasinoGame", 'Boolean'>
    readonly isHot: FieldRef<"CasinoGame", 'Boolean'>
    readonly isFeatured: FieldRef<"CasinoGame", 'Boolean'>
    readonly popularTrendScore: FieldRef<"CasinoGame", 'Int'>
    readonly totalRoundsPlayed: FieldRef<"CasinoGame", 'BigInt'>
    readonly totalWagered: FieldRef<"CasinoGame", 'Decimal'>
    readonly totalPayout: FieldRef<"CasinoGame", 'Decimal'>
    readonly lastWinAt: FieldRef<"CasinoGame", 'DateTime'>
    readonly seededHouseEdgePercent: FieldRef<"CasinoGame", 'Decimal'>
    readonly providerUrlDeepLink: FieldRef<"CasinoGame", 'String'>
    readonly createdBy: FieldRef<"CasinoGame", 'String'>
    readonly createdAt: FieldRef<"CasinoGame", 'DateTime'>
    readonly updatedAt: FieldRef<"CasinoGame", 'DateTime'>
    readonly deletedAt: FieldRef<"CasinoGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasinoGame findUnique
   */
  export type CasinoGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGame to fetch.
     */
    where: CasinoGameWhereUniqueInput
  }

  /**
   * CasinoGame findUniqueOrThrow
   */
  export type CasinoGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGame to fetch.
     */
    where: CasinoGameWhereUniqueInput
  }

  /**
   * CasinoGame findFirst
   */
  export type CasinoGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGame to fetch.
     */
    where?: CasinoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGames to fetch.
     */
    orderBy?: CasinoGameOrderByWithRelationInput | CasinoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoGames.
     */
    cursor?: CasinoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoGames.
     */
    distinct?: CasinoGameScalarFieldEnum | CasinoGameScalarFieldEnum[]
  }

  /**
   * CasinoGame findFirstOrThrow
   */
  export type CasinoGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGame to fetch.
     */
    where?: CasinoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGames to fetch.
     */
    orderBy?: CasinoGameOrderByWithRelationInput | CasinoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoGames.
     */
    cursor?: CasinoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoGames.
     */
    distinct?: CasinoGameScalarFieldEnum | CasinoGameScalarFieldEnum[]
  }

  /**
   * CasinoGame findMany
   */
  export type CasinoGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGames to fetch.
     */
    where?: CasinoGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGames to fetch.
     */
    orderBy?: CasinoGameOrderByWithRelationInput | CasinoGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoGames.
     */
    cursor?: CasinoGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGames.
     */
    skip?: number
    distinct?: CasinoGameScalarFieldEnum | CasinoGameScalarFieldEnum[]
  }

  /**
   * CasinoGame create
   */
  export type CasinoGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * The data needed to create a CasinoGame.
     */
    data: XOR<CasinoGameCreateInput, CasinoGameUncheckedCreateInput>
  }

  /**
   * CasinoGame createMany
   */
  export type CasinoGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoGames.
     */
    data: CasinoGameCreateManyInput | CasinoGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoGame createManyAndReturn
   */
  export type CasinoGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoGames.
     */
    data: CasinoGameCreateManyInput | CasinoGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoGame update
   */
  export type CasinoGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * The data needed to update a CasinoGame.
     */
    data: XOR<CasinoGameUpdateInput, CasinoGameUncheckedUpdateInput>
    /**
     * Choose, which CasinoGame to update.
     */
    where: CasinoGameWhereUniqueInput
  }

  /**
   * CasinoGame updateMany
   */
  export type CasinoGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoGames.
     */
    data: XOR<CasinoGameUpdateManyMutationInput, CasinoGameUncheckedUpdateManyInput>
    /**
     * Filter which CasinoGames to update
     */
    where?: CasinoGameWhereInput
  }

  /**
   * CasinoGame upsert
   */
  export type CasinoGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * The filter to search for the CasinoGame to update in case it exists.
     */
    where: CasinoGameWhereUniqueInput
    /**
     * In case the CasinoGame found by the `where` argument doesn't exist, create a new CasinoGame with this data.
     */
    create: XOR<CasinoGameCreateInput, CasinoGameUncheckedCreateInput>
    /**
     * In case the CasinoGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoGameUpdateInput, CasinoGameUncheckedUpdateInput>
  }

  /**
   * CasinoGame delete
   */
  export type CasinoGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
    /**
     * Filter which CasinoGame to delete.
     */
    where: CasinoGameWhereUniqueInput
  }

  /**
   * CasinoGame deleteMany
   */
  export type CasinoGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoGames to delete
     */
    where?: CasinoGameWhereInput
  }

  /**
   * CasinoGame.favorites
   */
  export type CasinoGame$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    where?: CasinoGameFavoriteWhereInput
    orderBy?: CasinoGameFavoriteOrderByWithRelationInput | CasinoGameFavoriteOrderByWithRelationInput[]
    cursor?: CasinoGameFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasinoGameFavoriteScalarFieldEnum | CasinoGameFavoriteScalarFieldEnum[]
  }

  /**
   * CasinoGame.sessions
   */
  export type CasinoGame$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    where?: CasinoSessionWhereInput
    orderBy?: CasinoSessionOrderByWithRelationInput | CasinoSessionOrderByWithRelationInput[]
    cursor?: CasinoSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasinoSessionScalarFieldEnum | CasinoSessionScalarFieldEnum[]
  }

  /**
   * CasinoGame.bets
   */
  export type CasinoGame$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    where?: CasinoBetWhereInput
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    cursor?: CasinoBetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasinoBetScalarFieldEnum | CasinoBetScalarFieldEnum[]
  }

  /**
   * CasinoGame without action
   */
  export type CasinoGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGame
     */
    select?: CasinoGameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameInclude<ExtArgs> | null
  }


  /**
   * Model CasinoGameFavorite
   */

  export type AggregateCasinoGameFavorite = {
    _count: CasinoGameFavoriteCountAggregateOutputType | null
    _min: CasinoGameFavoriteMinAggregateOutputType | null
    _max: CasinoGameFavoriteMaxAggregateOutputType | null
  }

  export type CasinoGameFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    favoritedAt: Date | null
  }

  export type CasinoGameFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    favoritedAt: Date | null
  }

  export type CasinoGameFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    favoritedAt: number
    _all: number
  }


  export type CasinoGameFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    favoritedAt?: true
  }

  export type CasinoGameFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    favoritedAt?: true
  }

  export type CasinoGameFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    favoritedAt?: true
    _all?: true
  }

  export type CasinoGameFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoGameFavorite to aggregate.
     */
    where?: CasinoGameFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGameFavorites to fetch.
     */
    orderBy?: CasinoGameFavoriteOrderByWithRelationInput | CasinoGameFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoGameFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGameFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGameFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoGameFavorites
    **/
    _count?: true | CasinoGameFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoGameFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoGameFavoriteMaxAggregateInputType
  }

  export type GetCasinoGameFavoriteAggregateType<T extends CasinoGameFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoGameFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoGameFavorite[P]>
      : GetScalarType<T[P], AggregateCasinoGameFavorite[P]>
  }




  export type CasinoGameFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoGameFavoriteWhereInput
    orderBy?: CasinoGameFavoriteOrderByWithAggregationInput | CasinoGameFavoriteOrderByWithAggregationInput[]
    by: CasinoGameFavoriteScalarFieldEnum[] | CasinoGameFavoriteScalarFieldEnum
    having?: CasinoGameFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoGameFavoriteCountAggregateInputType | true
    _min?: CasinoGameFavoriteMinAggregateInputType
    _max?: CasinoGameFavoriteMaxAggregateInputType
  }

  export type CasinoGameFavoriteGroupByOutputType = {
    id: string
    userId: string
    gameId: string
    favoritedAt: Date
    _count: CasinoGameFavoriteCountAggregateOutputType | null
    _min: CasinoGameFavoriteMinAggregateOutputType | null
    _max: CasinoGameFavoriteMaxAggregateOutputType | null
  }

  type GetCasinoGameFavoriteGroupByPayload<T extends CasinoGameFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoGameFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoGameFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoGameFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoGameFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type CasinoGameFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    favoritedAt?: boolean
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoGameFavorite"]>

  export type CasinoGameFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    favoritedAt?: boolean
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoGameFavorite"]>

  export type CasinoGameFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    favoritedAt?: boolean
  }

  export type CasinoGameFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }
  export type CasinoGameFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }

  export type $CasinoGameFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoGameFavorite"
    objects: {
      game: Prisma.$CasinoGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameId: string
      favoritedAt: Date
    }, ExtArgs["result"]["casinoGameFavorite"]>
    composites: {}
  }

  type CasinoGameFavoriteGetPayload<S extends boolean | null | undefined | CasinoGameFavoriteDefaultArgs> = $Result.GetResult<Prisma.$CasinoGameFavoritePayload, S>

  type CasinoGameFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoGameFavoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoGameFavoriteCountAggregateInputType | true
    }

  export interface CasinoGameFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoGameFavorite'], meta: { name: 'CasinoGameFavorite' } }
    /**
     * Find zero or one CasinoGameFavorite that matches the filter.
     * @param {CasinoGameFavoriteFindUniqueArgs} args - Arguments to find a CasinoGameFavorite
     * @example
     * // Get one CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoGameFavoriteFindUniqueArgs>(args: SelectSubset<T, CasinoGameFavoriteFindUniqueArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoGameFavorite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoGameFavoriteFindUniqueOrThrowArgs} args - Arguments to find a CasinoGameFavorite
     * @example
     * // Get one CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoGameFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoGameFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoGameFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteFindFirstArgs} args - Arguments to find a CasinoGameFavorite
     * @example
     * // Get one CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoGameFavoriteFindFirstArgs>(args?: SelectSubset<T, CasinoGameFavoriteFindFirstArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoGameFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteFindFirstOrThrowArgs} args - Arguments to find a CasinoGameFavorite
     * @example
     * // Get one CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoGameFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoGameFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoGameFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoGameFavorites
     * const casinoGameFavorites = await prisma.casinoGameFavorite.findMany()
     * 
     * // Get first 10 CasinoGameFavorites
     * const casinoGameFavorites = await prisma.casinoGameFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoGameFavoriteWithIdOnly = await prisma.casinoGameFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoGameFavoriteFindManyArgs>(args?: SelectSubset<T, CasinoGameFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoGameFavorite.
     * @param {CasinoGameFavoriteCreateArgs} args - Arguments to create a CasinoGameFavorite.
     * @example
     * // Create one CasinoGameFavorite
     * const CasinoGameFavorite = await prisma.casinoGameFavorite.create({
     *   data: {
     *     // ... data to create a CasinoGameFavorite
     *   }
     * })
     * 
     */
    create<T extends CasinoGameFavoriteCreateArgs>(args: SelectSubset<T, CasinoGameFavoriteCreateArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoGameFavorites.
     * @param {CasinoGameFavoriteCreateManyArgs} args - Arguments to create many CasinoGameFavorites.
     * @example
     * // Create many CasinoGameFavorites
     * const casinoGameFavorite = await prisma.casinoGameFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoGameFavoriteCreateManyArgs>(args?: SelectSubset<T, CasinoGameFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoGameFavorites and returns the data saved in the database.
     * @param {CasinoGameFavoriteCreateManyAndReturnArgs} args - Arguments to create many CasinoGameFavorites.
     * @example
     * // Create many CasinoGameFavorites
     * const casinoGameFavorite = await prisma.casinoGameFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoGameFavorites and only return the `id`
     * const casinoGameFavoriteWithIdOnly = await prisma.casinoGameFavorite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoGameFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoGameFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoGameFavorite.
     * @param {CasinoGameFavoriteDeleteArgs} args - Arguments to delete one CasinoGameFavorite.
     * @example
     * // Delete one CasinoGameFavorite
     * const CasinoGameFavorite = await prisma.casinoGameFavorite.delete({
     *   where: {
     *     // ... filter to delete one CasinoGameFavorite
     *   }
     * })
     * 
     */
    delete<T extends CasinoGameFavoriteDeleteArgs>(args: SelectSubset<T, CasinoGameFavoriteDeleteArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoGameFavorite.
     * @param {CasinoGameFavoriteUpdateArgs} args - Arguments to update one CasinoGameFavorite.
     * @example
     * // Update one CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoGameFavoriteUpdateArgs>(args: SelectSubset<T, CasinoGameFavoriteUpdateArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoGameFavorites.
     * @param {CasinoGameFavoriteDeleteManyArgs} args - Arguments to filter CasinoGameFavorites to delete.
     * @example
     * // Delete a few CasinoGameFavorites
     * const { count } = await prisma.casinoGameFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoGameFavoriteDeleteManyArgs>(args?: SelectSubset<T, CasinoGameFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoGameFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoGameFavorites
     * const casinoGameFavorite = await prisma.casinoGameFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoGameFavoriteUpdateManyArgs>(args: SelectSubset<T, CasinoGameFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoGameFavorite.
     * @param {CasinoGameFavoriteUpsertArgs} args - Arguments to update or create a CasinoGameFavorite.
     * @example
     * // Update or create a CasinoGameFavorite
     * const casinoGameFavorite = await prisma.casinoGameFavorite.upsert({
     *   create: {
     *     // ... data to create a CasinoGameFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoGameFavorite we want to update
     *   }
     * })
     */
    upsert<T extends CasinoGameFavoriteUpsertArgs>(args: SelectSubset<T, CasinoGameFavoriteUpsertArgs<ExtArgs>>): Prisma__CasinoGameFavoriteClient<$Result.GetResult<Prisma.$CasinoGameFavoritePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoGameFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteCountArgs} args - Arguments to filter CasinoGameFavorites to count.
     * @example
     * // Count the number of CasinoGameFavorites
     * const count = await prisma.casinoGameFavorite.count({
     *   where: {
     *     // ... the filter for the CasinoGameFavorites we want to count
     *   }
     * })
    **/
    count<T extends CasinoGameFavoriteCountArgs>(
      args?: Subset<T, CasinoGameFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoGameFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoGameFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoGameFavoriteAggregateArgs>(args: Subset<T, CasinoGameFavoriteAggregateArgs>): Prisma.PrismaPromise<GetCasinoGameFavoriteAggregateType<T>>

    /**
     * Group by CasinoGameFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoGameFavoriteGroupByArgs} args - Group by arguments.
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
      T extends CasinoGameFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoGameFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: CasinoGameFavoriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoGameFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoGameFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoGameFavorite model
   */
  readonly fields: CasinoGameFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoGameFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoGameFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends CasinoGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGameDefaultArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CasinoGameFavorite model
   */ 
  interface CasinoGameFavoriteFieldRefs {
    readonly id: FieldRef<"CasinoGameFavorite", 'String'>
    readonly userId: FieldRef<"CasinoGameFavorite", 'String'>
    readonly gameId: FieldRef<"CasinoGameFavorite", 'String'>
    readonly favoritedAt: FieldRef<"CasinoGameFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasinoGameFavorite findUnique
   */
  export type CasinoGameFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGameFavorite to fetch.
     */
    where: CasinoGameFavoriteWhereUniqueInput
  }

  /**
   * CasinoGameFavorite findUniqueOrThrow
   */
  export type CasinoGameFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGameFavorite to fetch.
     */
    where: CasinoGameFavoriteWhereUniqueInput
  }

  /**
   * CasinoGameFavorite findFirst
   */
  export type CasinoGameFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGameFavorite to fetch.
     */
    where?: CasinoGameFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGameFavorites to fetch.
     */
    orderBy?: CasinoGameFavoriteOrderByWithRelationInput | CasinoGameFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoGameFavorites.
     */
    cursor?: CasinoGameFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGameFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGameFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoGameFavorites.
     */
    distinct?: CasinoGameFavoriteScalarFieldEnum | CasinoGameFavoriteScalarFieldEnum[]
  }

  /**
   * CasinoGameFavorite findFirstOrThrow
   */
  export type CasinoGameFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGameFavorite to fetch.
     */
    where?: CasinoGameFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGameFavorites to fetch.
     */
    orderBy?: CasinoGameFavoriteOrderByWithRelationInput | CasinoGameFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoGameFavorites.
     */
    cursor?: CasinoGameFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGameFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGameFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoGameFavorites.
     */
    distinct?: CasinoGameFavoriteScalarFieldEnum | CasinoGameFavoriteScalarFieldEnum[]
  }

  /**
   * CasinoGameFavorite findMany
   */
  export type CasinoGameFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CasinoGameFavorites to fetch.
     */
    where?: CasinoGameFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoGameFavorites to fetch.
     */
    orderBy?: CasinoGameFavoriteOrderByWithRelationInput | CasinoGameFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoGameFavorites.
     */
    cursor?: CasinoGameFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoGameFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoGameFavorites.
     */
    skip?: number
    distinct?: CasinoGameFavoriteScalarFieldEnum | CasinoGameFavoriteScalarFieldEnum[]
  }

  /**
   * CasinoGameFavorite create
   */
  export type CasinoGameFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a CasinoGameFavorite.
     */
    data: XOR<CasinoGameFavoriteCreateInput, CasinoGameFavoriteUncheckedCreateInput>
  }

  /**
   * CasinoGameFavorite createMany
   */
  export type CasinoGameFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoGameFavorites.
     */
    data: CasinoGameFavoriteCreateManyInput | CasinoGameFavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoGameFavorite createManyAndReturn
   */
  export type CasinoGameFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoGameFavorites.
     */
    data: CasinoGameFavoriteCreateManyInput | CasinoGameFavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasinoGameFavorite update
   */
  export type CasinoGameFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a CasinoGameFavorite.
     */
    data: XOR<CasinoGameFavoriteUpdateInput, CasinoGameFavoriteUncheckedUpdateInput>
    /**
     * Choose, which CasinoGameFavorite to update.
     */
    where: CasinoGameFavoriteWhereUniqueInput
  }

  /**
   * CasinoGameFavorite updateMany
   */
  export type CasinoGameFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoGameFavorites.
     */
    data: XOR<CasinoGameFavoriteUpdateManyMutationInput, CasinoGameFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which CasinoGameFavorites to update
     */
    where?: CasinoGameFavoriteWhereInput
  }

  /**
   * CasinoGameFavorite upsert
   */
  export type CasinoGameFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the CasinoGameFavorite to update in case it exists.
     */
    where: CasinoGameFavoriteWhereUniqueInput
    /**
     * In case the CasinoGameFavorite found by the `where` argument doesn't exist, create a new CasinoGameFavorite with this data.
     */
    create: XOR<CasinoGameFavoriteCreateInput, CasinoGameFavoriteUncheckedCreateInput>
    /**
     * In case the CasinoGameFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoGameFavoriteUpdateInput, CasinoGameFavoriteUncheckedUpdateInput>
  }

  /**
   * CasinoGameFavorite delete
   */
  export type CasinoGameFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
    /**
     * Filter which CasinoGameFavorite to delete.
     */
    where: CasinoGameFavoriteWhereUniqueInput
  }

  /**
   * CasinoGameFavorite deleteMany
   */
  export type CasinoGameFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoGameFavorites to delete
     */
    where?: CasinoGameFavoriteWhereInput
  }

  /**
   * CasinoGameFavorite without action
   */
  export type CasinoGameFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoGameFavorite
     */
    select?: CasinoGameFavoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoGameFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model CasinoSession
   */

  export type AggregateCasinoSession = {
    _count: CasinoSessionCountAggregateOutputType | null
    _avg: CasinoSessionAvgAggregateOutputType | null
    _sum: CasinoSessionSumAggregateOutputType | null
    _min: CasinoSessionMinAggregateOutputType | null
    _max: CasinoSessionMaxAggregateOutputType | null
  }

  export type CasinoSessionAvgAggregateOutputType = {
    totalRounds: number | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    maxWinDuringSession: Decimal | null
  }

  export type CasinoSessionSumAggregateOutputType = {
    totalRounds: number | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    maxWinDuringSession: Decimal | null
  }

  export type CasinoSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    playerToken: string | null
    sessionStatus: $Enums.CasinoSessionStatus | null
    providerSessionReference: string | null
    walletId: string | null
    currency: string | null
    startedAt: Date | null
    endedAt: Date | null
    totalRounds: number | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    maxWinDuringSession: Decimal | null
    ipAddress: string | null
    device: string | null
    userAgent: string | null
    geoCountry: string | null
    closedReason: string | null
    closedBy: string | null
    correlationId: string | null
  }

  export type CasinoSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    playerToken: string | null
    sessionStatus: $Enums.CasinoSessionStatus | null
    providerSessionReference: string | null
    walletId: string | null
    currency: string | null
    startedAt: Date | null
    endedAt: Date | null
    totalRounds: number | null
    totalWagered: Decimal | null
    totalPayout: Decimal | null
    maxWinDuringSession: Decimal | null
    ipAddress: string | null
    device: string | null
    userAgent: string | null
    geoCountry: string | null
    closedReason: string | null
    closedBy: string | null
    correlationId: string | null
  }

  export type CasinoSessionCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    playerToken: number
    sessionStatus: number
    providerSessionReference: number
    walletId: number
    currency: number
    startedAt: number
    endedAt: number
    totalRounds: number
    totalWagered: number
    totalPayout: number
    maxWinDuringSession: number
    ipAddress: number
    device: number
    userAgent: number
    geoCountry: number
    closedReason: number
    closedBy: number
    correlationId: number
    playerBalanceSnapshots: number
    _all: number
  }


  export type CasinoSessionAvgAggregateInputType = {
    totalRounds?: true
    totalWagered?: true
    totalPayout?: true
    maxWinDuringSession?: true
  }

  export type CasinoSessionSumAggregateInputType = {
    totalRounds?: true
    totalWagered?: true
    totalPayout?: true
    maxWinDuringSession?: true
  }

  export type CasinoSessionMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playerToken?: true
    sessionStatus?: true
    providerSessionReference?: true
    walletId?: true
    currency?: true
    startedAt?: true
    endedAt?: true
    totalRounds?: true
    totalWagered?: true
    totalPayout?: true
    maxWinDuringSession?: true
    ipAddress?: true
    device?: true
    userAgent?: true
    geoCountry?: true
    closedReason?: true
    closedBy?: true
    correlationId?: true
  }

  export type CasinoSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playerToken?: true
    sessionStatus?: true
    providerSessionReference?: true
    walletId?: true
    currency?: true
    startedAt?: true
    endedAt?: true
    totalRounds?: true
    totalWagered?: true
    totalPayout?: true
    maxWinDuringSession?: true
    ipAddress?: true
    device?: true
    userAgent?: true
    geoCountry?: true
    closedReason?: true
    closedBy?: true
    correlationId?: true
  }

  export type CasinoSessionCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    playerToken?: true
    sessionStatus?: true
    providerSessionReference?: true
    walletId?: true
    currency?: true
    startedAt?: true
    endedAt?: true
    totalRounds?: true
    totalWagered?: true
    totalPayout?: true
    maxWinDuringSession?: true
    ipAddress?: true
    device?: true
    userAgent?: true
    geoCountry?: true
    closedReason?: true
    closedBy?: true
    correlationId?: true
    playerBalanceSnapshots?: true
    _all?: true
  }

  export type CasinoSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoSession to aggregate.
     */
    where?: CasinoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoSessions to fetch.
     */
    orderBy?: CasinoSessionOrderByWithRelationInput | CasinoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoSessions
    **/
    _count?: true | CasinoSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasinoSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasinoSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoSessionMaxAggregateInputType
  }

  export type GetCasinoSessionAggregateType<T extends CasinoSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoSession[P]>
      : GetScalarType<T[P], AggregateCasinoSession[P]>
  }




  export type CasinoSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoSessionWhereInput
    orderBy?: CasinoSessionOrderByWithAggregationInput | CasinoSessionOrderByWithAggregationInput[]
    by: CasinoSessionScalarFieldEnum[] | CasinoSessionScalarFieldEnum
    having?: CasinoSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoSessionCountAggregateInputType | true
    _avg?: CasinoSessionAvgAggregateInputType
    _sum?: CasinoSessionSumAggregateInputType
    _min?: CasinoSessionMinAggregateInputType
    _max?: CasinoSessionMaxAggregateInputType
  }

  export type CasinoSessionGroupByOutputType = {
    id: string
    userId: string
    gameId: string
    playerToken: string | null
    sessionStatus: $Enums.CasinoSessionStatus
    providerSessionReference: string | null
    walletId: string | null
    currency: string
    startedAt: Date
    endedAt: Date | null
    totalRounds: number
    totalWagered: Decimal
    totalPayout: Decimal
    maxWinDuringSession: Decimal | null
    ipAddress: string | null
    device: string | null
    userAgent: string | null
    geoCountry: string | null
    closedReason: string | null
    closedBy: string | null
    correlationId: string | null
    playerBalanceSnapshots: JsonValue | null
    _count: CasinoSessionCountAggregateOutputType | null
    _avg: CasinoSessionAvgAggregateOutputType | null
    _sum: CasinoSessionSumAggregateOutputType | null
    _min: CasinoSessionMinAggregateOutputType | null
    _max: CasinoSessionMaxAggregateOutputType | null
  }

  type GetCasinoSessionGroupByPayload<T extends CasinoSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoSessionGroupByOutputType[P]>
        }
      >
    >


  export type CasinoSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playerToken?: boolean
    sessionStatus?: boolean
    providerSessionReference?: boolean
    walletId?: boolean
    currency?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalRounds?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    maxWinDuringSession?: boolean
    ipAddress?: boolean
    device?: boolean
    userAgent?: boolean
    geoCountry?: boolean
    closedReason?: boolean
    closedBy?: boolean
    correlationId?: boolean
    playerBalanceSnapshots?: boolean
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
    bets?: boolean | CasinoSession$betsArgs<ExtArgs>
    _count?: boolean | CasinoSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoSession"]>

  export type CasinoSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playerToken?: boolean
    sessionStatus?: boolean
    providerSessionReference?: boolean
    walletId?: boolean
    currency?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalRounds?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    maxWinDuringSession?: boolean
    ipAddress?: boolean
    device?: boolean
    userAgent?: boolean
    geoCountry?: boolean
    closedReason?: boolean
    closedBy?: boolean
    correlationId?: boolean
    playerBalanceSnapshots?: boolean
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoSession"]>

  export type CasinoSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    playerToken?: boolean
    sessionStatus?: boolean
    providerSessionReference?: boolean
    walletId?: boolean
    currency?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalRounds?: boolean
    totalWagered?: boolean
    totalPayout?: boolean
    maxWinDuringSession?: boolean
    ipAddress?: boolean
    device?: boolean
    userAgent?: boolean
    geoCountry?: boolean
    closedReason?: boolean
    closedBy?: boolean
    correlationId?: boolean
    playerBalanceSnapshots?: boolean
  }

  export type CasinoSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
    bets?: boolean | CasinoSession$betsArgs<ExtArgs>
    _count?: boolean | CasinoSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CasinoSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }

  export type $CasinoSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoSession"
    objects: {
      game: Prisma.$CasinoGamePayload<ExtArgs>
      bets: Prisma.$CasinoBetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameId: string
      playerToken: string | null
      sessionStatus: $Enums.CasinoSessionStatus
      providerSessionReference: string | null
      walletId: string | null
      currency: string
      startedAt: Date
      endedAt: Date | null
      totalRounds: number
      totalWagered: Prisma.Decimal
      totalPayout: Prisma.Decimal
      maxWinDuringSession: Prisma.Decimal | null
      ipAddress: string | null
      device: string | null
      userAgent: string | null
      geoCountry: string | null
      closedReason: string | null
      closedBy: string | null
      correlationId: string | null
      playerBalanceSnapshots: Prisma.JsonValue | null
    }, ExtArgs["result"]["casinoSession"]>
    composites: {}
  }

  type CasinoSessionGetPayload<S extends boolean | null | undefined | CasinoSessionDefaultArgs> = $Result.GetResult<Prisma.$CasinoSessionPayload, S>

  type CasinoSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoSessionCountAggregateInputType | true
    }

  export interface CasinoSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoSession'], meta: { name: 'CasinoSession' } }
    /**
     * Find zero or one CasinoSession that matches the filter.
     * @param {CasinoSessionFindUniqueArgs} args - Arguments to find a CasinoSession
     * @example
     * // Get one CasinoSession
     * const casinoSession = await prisma.casinoSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoSessionFindUniqueArgs>(args: SelectSubset<T, CasinoSessionFindUniqueArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoSessionFindUniqueOrThrowArgs} args - Arguments to find a CasinoSession
     * @example
     * // Get one CasinoSession
     * const casinoSession = await prisma.casinoSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionFindFirstArgs} args - Arguments to find a CasinoSession
     * @example
     * // Get one CasinoSession
     * const casinoSession = await prisma.casinoSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoSessionFindFirstArgs>(args?: SelectSubset<T, CasinoSessionFindFirstArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionFindFirstOrThrowArgs} args - Arguments to find a CasinoSession
     * @example
     * // Get one CasinoSession
     * const casinoSession = await prisma.casinoSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoSessions
     * const casinoSessions = await prisma.casinoSession.findMany()
     * 
     * // Get first 10 CasinoSessions
     * const casinoSessions = await prisma.casinoSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoSessionWithIdOnly = await prisma.casinoSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoSessionFindManyArgs>(args?: SelectSubset<T, CasinoSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoSession.
     * @param {CasinoSessionCreateArgs} args - Arguments to create a CasinoSession.
     * @example
     * // Create one CasinoSession
     * const CasinoSession = await prisma.casinoSession.create({
     *   data: {
     *     // ... data to create a CasinoSession
     *   }
     * })
     * 
     */
    create<T extends CasinoSessionCreateArgs>(args: SelectSubset<T, CasinoSessionCreateArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoSessions.
     * @param {CasinoSessionCreateManyArgs} args - Arguments to create many CasinoSessions.
     * @example
     * // Create many CasinoSessions
     * const casinoSession = await prisma.casinoSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoSessionCreateManyArgs>(args?: SelectSubset<T, CasinoSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoSessions and returns the data saved in the database.
     * @param {CasinoSessionCreateManyAndReturnArgs} args - Arguments to create many CasinoSessions.
     * @example
     * // Create many CasinoSessions
     * const casinoSession = await prisma.casinoSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoSessions and only return the `id`
     * const casinoSessionWithIdOnly = await prisma.casinoSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoSession.
     * @param {CasinoSessionDeleteArgs} args - Arguments to delete one CasinoSession.
     * @example
     * // Delete one CasinoSession
     * const CasinoSession = await prisma.casinoSession.delete({
     *   where: {
     *     // ... filter to delete one CasinoSession
     *   }
     * })
     * 
     */
    delete<T extends CasinoSessionDeleteArgs>(args: SelectSubset<T, CasinoSessionDeleteArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoSession.
     * @param {CasinoSessionUpdateArgs} args - Arguments to update one CasinoSession.
     * @example
     * // Update one CasinoSession
     * const casinoSession = await prisma.casinoSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoSessionUpdateArgs>(args: SelectSubset<T, CasinoSessionUpdateArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoSessions.
     * @param {CasinoSessionDeleteManyArgs} args - Arguments to filter CasinoSessions to delete.
     * @example
     * // Delete a few CasinoSessions
     * const { count } = await prisma.casinoSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoSessionDeleteManyArgs>(args?: SelectSubset<T, CasinoSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoSessions
     * const casinoSession = await prisma.casinoSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoSessionUpdateManyArgs>(args: SelectSubset<T, CasinoSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoSession.
     * @param {CasinoSessionUpsertArgs} args - Arguments to update or create a CasinoSession.
     * @example
     * // Update or create a CasinoSession
     * const casinoSession = await prisma.casinoSession.upsert({
     *   create: {
     *     // ... data to create a CasinoSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoSession we want to update
     *   }
     * })
     */
    upsert<T extends CasinoSessionUpsertArgs>(args: SelectSubset<T, CasinoSessionUpsertArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionCountArgs} args - Arguments to filter CasinoSessions to count.
     * @example
     * // Count the number of CasinoSessions
     * const count = await prisma.casinoSession.count({
     *   where: {
     *     // ... the filter for the CasinoSessions we want to count
     *   }
     * })
    **/
    count<T extends CasinoSessionCountArgs>(
      args?: Subset<T, CasinoSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoSessionAggregateArgs>(args: Subset<T, CasinoSessionAggregateArgs>): Prisma.PrismaPromise<GetCasinoSessionAggregateType<T>>

    /**
     * Group by CasinoSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoSessionGroupByArgs} args - Group by arguments.
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
      T extends CasinoSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoSessionGroupByArgs['orderBy'] }
        : { orderBy?: CasinoSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoSession model
   */
  readonly fields: CasinoSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends CasinoGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGameDefaultArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bets<T extends CasinoSession$betsArgs<ExtArgs> = {}>(args?: Subset<T, CasinoSession$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CasinoSession model
   */ 
  interface CasinoSessionFieldRefs {
    readonly id: FieldRef<"CasinoSession", 'String'>
    readonly userId: FieldRef<"CasinoSession", 'String'>
    readonly gameId: FieldRef<"CasinoSession", 'String'>
    readonly playerToken: FieldRef<"CasinoSession", 'String'>
    readonly sessionStatus: FieldRef<"CasinoSession", 'CasinoSessionStatus'>
    readonly providerSessionReference: FieldRef<"CasinoSession", 'String'>
    readonly walletId: FieldRef<"CasinoSession", 'String'>
    readonly currency: FieldRef<"CasinoSession", 'String'>
    readonly startedAt: FieldRef<"CasinoSession", 'DateTime'>
    readonly endedAt: FieldRef<"CasinoSession", 'DateTime'>
    readonly totalRounds: FieldRef<"CasinoSession", 'Int'>
    readonly totalWagered: FieldRef<"CasinoSession", 'Decimal'>
    readonly totalPayout: FieldRef<"CasinoSession", 'Decimal'>
    readonly maxWinDuringSession: FieldRef<"CasinoSession", 'Decimal'>
    readonly ipAddress: FieldRef<"CasinoSession", 'String'>
    readonly device: FieldRef<"CasinoSession", 'String'>
    readonly userAgent: FieldRef<"CasinoSession", 'String'>
    readonly geoCountry: FieldRef<"CasinoSession", 'String'>
    readonly closedReason: FieldRef<"CasinoSession", 'String'>
    readonly closedBy: FieldRef<"CasinoSession", 'String'>
    readonly correlationId: FieldRef<"CasinoSession", 'String'>
    readonly playerBalanceSnapshots: FieldRef<"CasinoSession", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CasinoSession findUnique
   */
  export type CasinoSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter, which CasinoSession to fetch.
     */
    where: CasinoSessionWhereUniqueInput
  }

  /**
   * CasinoSession findUniqueOrThrow
   */
  export type CasinoSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter, which CasinoSession to fetch.
     */
    where: CasinoSessionWhereUniqueInput
  }

  /**
   * CasinoSession findFirst
   */
  export type CasinoSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter, which CasinoSession to fetch.
     */
    where?: CasinoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoSessions to fetch.
     */
    orderBy?: CasinoSessionOrderByWithRelationInput | CasinoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoSessions.
     */
    cursor?: CasinoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoSessions.
     */
    distinct?: CasinoSessionScalarFieldEnum | CasinoSessionScalarFieldEnum[]
  }

  /**
   * CasinoSession findFirstOrThrow
   */
  export type CasinoSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter, which CasinoSession to fetch.
     */
    where?: CasinoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoSessions to fetch.
     */
    orderBy?: CasinoSessionOrderByWithRelationInput | CasinoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoSessions.
     */
    cursor?: CasinoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoSessions.
     */
    distinct?: CasinoSessionScalarFieldEnum | CasinoSessionScalarFieldEnum[]
  }

  /**
   * CasinoSession findMany
   */
  export type CasinoSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter, which CasinoSessions to fetch.
     */
    where?: CasinoSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoSessions to fetch.
     */
    orderBy?: CasinoSessionOrderByWithRelationInput | CasinoSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoSessions.
     */
    cursor?: CasinoSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoSessions.
     */
    skip?: number
    distinct?: CasinoSessionScalarFieldEnum | CasinoSessionScalarFieldEnum[]
  }

  /**
   * CasinoSession create
   */
  export type CasinoSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CasinoSession.
     */
    data: XOR<CasinoSessionCreateInput, CasinoSessionUncheckedCreateInput>
  }

  /**
   * CasinoSession createMany
   */
  export type CasinoSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoSessions.
     */
    data: CasinoSessionCreateManyInput | CasinoSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoSession createManyAndReturn
   */
  export type CasinoSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoSessions.
     */
    data: CasinoSessionCreateManyInput | CasinoSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasinoSession update
   */
  export type CasinoSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CasinoSession.
     */
    data: XOR<CasinoSessionUpdateInput, CasinoSessionUncheckedUpdateInput>
    /**
     * Choose, which CasinoSession to update.
     */
    where: CasinoSessionWhereUniqueInput
  }

  /**
   * CasinoSession updateMany
   */
  export type CasinoSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoSessions.
     */
    data: XOR<CasinoSessionUpdateManyMutationInput, CasinoSessionUncheckedUpdateManyInput>
    /**
     * Filter which CasinoSessions to update
     */
    where?: CasinoSessionWhereInput
  }

  /**
   * CasinoSession upsert
   */
  export type CasinoSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CasinoSession to update in case it exists.
     */
    where: CasinoSessionWhereUniqueInput
    /**
     * In case the CasinoSession found by the `where` argument doesn't exist, create a new CasinoSession with this data.
     */
    create: XOR<CasinoSessionCreateInput, CasinoSessionUncheckedCreateInput>
    /**
     * In case the CasinoSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoSessionUpdateInput, CasinoSessionUncheckedUpdateInput>
  }

  /**
   * CasinoSession delete
   */
  export type CasinoSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    /**
     * Filter which CasinoSession to delete.
     */
    where: CasinoSessionWhereUniqueInput
  }

  /**
   * CasinoSession deleteMany
   */
  export type CasinoSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoSessions to delete
     */
    where?: CasinoSessionWhereInput
  }

  /**
   * CasinoSession.bets
   */
  export type CasinoSession$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    where?: CasinoBetWhereInput
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    cursor?: CasinoBetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CasinoBetScalarFieldEnum | CasinoBetScalarFieldEnum[]
  }

  /**
   * CasinoSession without action
   */
  export type CasinoSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
  }


  /**
   * Model CasinoBet
   */

  export type AggregateCasinoBet = {
    _count: CasinoBetCountAggregateOutputType | null
    _avg: CasinoBetAvgAggregateOutputType | null
    _sum: CasinoBetSumAggregateOutputType | null
    _min: CasinoBetMinAggregateOutputType | null
    _max: CasinoBetMaxAggregateOutputType | null
  }

  export type CasinoBetAvgAggregateOutputType = {
    wageredAmount: Decimal | null
    linesBet: number | null
    stakePerLine: Decimal | null
    payoutAmount: Decimal | null
    netResult: Decimal | null
    jackpotContribution: Decimal | null
    jackpotWin: Decimal | null
    freeSpinsTriggered: number | null
  }

  export type CasinoBetSumAggregateOutputType = {
    wageredAmount: Decimal | null
    linesBet: number | null
    stakePerLine: Decimal | null
    payoutAmount: Decimal | null
    netResult: Decimal | null
    jackpotContribution: Decimal | null
    jackpotWin: Decimal | null
    freeSpinsTriggered: number | null
  }

  export type CasinoBetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    gameId: string | null
    providerRef: string | null
    roundRef: string | null
    status: $Enums.CasinoBetStatus | null
    wageredAmount: Decimal | null
    wageredCurrency: string | null
    linesBet: number | null
    stakePerLine: Decimal | null
    payoutAmount: Decimal | null
    netResult: Decimal | null
    betType: string | null
    jackpotContribution: Decimal | null
    jackpotWin: Decimal | null
    placedAt: Date | null
    settledAt: Date | null
    settledBy: string | null
    initialSeed: string | null
    resultSeed: string | null
    freeSpinsTriggered: number | null
    bonusRoundTriggered: boolean | null
    gambleFeatureUsed: boolean | null
    gambleResult: string | null
    correlationId: string | null
    deletedAt: Date | null
  }

  export type CasinoBetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    gameId: string | null
    providerRef: string | null
    roundRef: string | null
    status: $Enums.CasinoBetStatus | null
    wageredAmount: Decimal | null
    wageredCurrency: string | null
    linesBet: number | null
    stakePerLine: Decimal | null
    payoutAmount: Decimal | null
    netResult: Decimal | null
    betType: string | null
    jackpotContribution: Decimal | null
    jackpotWin: Decimal | null
    placedAt: Date | null
    settledAt: Date | null
    settledBy: string | null
    initialSeed: string | null
    resultSeed: string | null
    freeSpinsTriggered: number | null
    bonusRoundTriggered: boolean | null
    gambleFeatureUsed: boolean | null
    gambleResult: string | null
    correlationId: string | null
    deletedAt: Date | null
  }

  export type CasinoBetCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    gameId: number
    providerRef: number
    roundRef: number
    status: number
    wageredAmount: number
    wageredCurrency: number
    linesBet: number
    stakePerLine: number
    payoutAmount: number
    netResult: number
    betType: number
    jackpotContribution: number
    jackpotWin: number
    placedAt: number
    settledAt: number
    settledBy: number
    initialSeed: number
    resultSeed: number
    finalRevealSnapshot: number
    resultSymbols: number
    winningLines: number
    freeSpinsTriggered: number
    bonusRoundTriggered: number
    gambleFeatureUsed: number
    gambleResult: number
    correlationId: number
    providerRawRequest: number
    providerRawResponse: number
    deletedAt: number
    _all: number
  }


  export type CasinoBetAvgAggregateInputType = {
    wageredAmount?: true
    linesBet?: true
    stakePerLine?: true
    payoutAmount?: true
    netResult?: true
    jackpotContribution?: true
    jackpotWin?: true
    freeSpinsTriggered?: true
  }

  export type CasinoBetSumAggregateInputType = {
    wageredAmount?: true
    linesBet?: true
    stakePerLine?: true
    payoutAmount?: true
    netResult?: true
    jackpotContribution?: true
    jackpotWin?: true
    freeSpinsTriggered?: true
  }

  export type CasinoBetMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    gameId?: true
    providerRef?: true
    roundRef?: true
    status?: true
    wageredAmount?: true
    wageredCurrency?: true
    linesBet?: true
    stakePerLine?: true
    payoutAmount?: true
    netResult?: true
    betType?: true
    jackpotContribution?: true
    jackpotWin?: true
    placedAt?: true
    settledAt?: true
    settledBy?: true
    initialSeed?: true
    resultSeed?: true
    freeSpinsTriggered?: true
    bonusRoundTriggered?: true
    gambleFeatureUsed?: true
    gambleResult?: true
    correlationId?: true
    deletedAt?: true
  }

  export type CasinoBetMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    gameId?: true
    providerRef?: true
    roundRef?: true
    status?: true
    wageredAmount?: true
    wageredCurrency?: true
    linesBet?: true
    stakePerLine?: true
    payoutAmount?: true
    netResult?: true
    betType?: true
    jackpotContribution?: true
    jackpotWin?: true
    placedAt?: true
    settledAt?: true
    settledBy?: true
    initialSeed?: true
    resultSeed?: true
    freeSpinsTriggered?: true
    bonusRoundTriggered?: true
    gambleFeatureUsed?: true
    gambleResult?: true
    correlationId?: true
    deletedAt?: true
  }

  export type CasinoBetCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    gameId?: true
    providerRef?: true
    roundRef?: true
    status?: true
    wageredAmount?: true
    wageredCurrency?: true
    linesBet?: true
    stakePerLine?: true
    payoutAmount?: true
    netResult?: true
    betType?: true
    jackpotContribution?: true
    jackpotWin?: true
    placedAt?: true
    settledAt?: true
    settledBy?: true
    initialSeed?: true
    resultSeed?: true
    finalRevealSnapshot?: true
    resultSymbols?: true
    winningLines?: true
    freeSpinsTriggered?: true
    bonusRoundTriggered?: true
    gambleFeatureUsed?: true
    gambleResult?: true
    correlationId?: true
    providerRawRequest?: true
    providerRawResponse?: true
    deletedAt?: true
    _all?: true
  }

  export type CasinoBetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoBet to aggregate.
     */
    where?: CasinoBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoBets to fetch.
     */
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoBets
    **/
    _count?: true | CasinoBetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasinoBetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasinoBetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoBetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoBetMaxAggregateInputType
  }

  export type GetCasinoBetAggregateType<T extends CasinoBetAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoBet[P]>
      : GetScalarType<T[P], AggregateCasinoBet[P]>
  }




  export type CasinoBetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoBetWhereInput
    orderBy?: CasinoBetOrderByWithAggregationInput | CasinoBetOrderByWithAggregationInput[]
    by: CasinoBetScalarFieldEnum[] | CasinoBetScalarFieldEnum
    having?: CasinoBetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoBetCountAggregateInputType | true
    _avg?: CasinoBetAvgAggregateInputType
    _sum?: CasinoBetSumAggregateInputType
    _min?: CasinoBetMinAggregateInputType
    _max?: CasinoBetMaxAggregateInputType
  }

  export type CasinoBetGroupByOutputType = {
    id: string
    userId: string
    sessionId: string | null
    gameId: string
    providerRef: string | null
    roundRef: string | null
    status: $Enums.CasinoBetStatus
    wageredAmount: Decimal
    wageredCurrency: string
    linesBet: number | null
    stakePerLine: Decimal | null
    payoutAmount: Decimal | null
    netResult: Decimal | null
    betType: string | null
    jackpotContribution: Decimal | null
    jackpotWin: Decimal | null
    placedAt: Date
    settledAt: Date | null
    settledBy: string | null
    initialSeed: string | null
    resultSeed: string | null
    finalRevealSnapshot: JsonValue | null
    resultSymbols: JsonValue | null
    winningLines: JsonValue | null
    freeSpinsTriggered: number | null
    bonusRoundTriggered: boolean | null
    gambleFeatureUsed: boolean | null
    gambleResult: string | null
    correlationId: string | null
    providerRawRequest: JsonValue | null
    providerRawResponse: JsonValue | null
    deletedAt: Date | null
    _count: CasinoBetCountAggregateOutputType | null
    _avg: CasinoBetAvgAggregateOutputType | null
    _sum: CasinoBetSumAggregateOutputType | null
    _min: CasinoBetMinAggregateOutputType | null
    _max: CasinoBetMaxAggregateOutputType | null
  }

  type GetCasinoBetGroupByPayload<T extends CasinoBetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoBetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoBetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoBetGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoBetGroupByOutputType[P]>
        }
      >
    >


  export type CasinoBetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    gameId?: boolean
    providerRef?: boolean
    roundRef?: boolean
    status?: boolean
    wageredAmount?: boolean
    wageredCurrency?: boolean
    linesBet?: boolean
    stakePerLine?: boolean
    payoutAmount?: boolean
    netResult?: boolean
    betType?: boolean
    jackpotContribution?: boolean
    jackpotWin?: boolean
    placedAt?: boolean
    settledAt?: boolean
    settledBy?: boolean
    initialSeed?: boolean
    resultSeed?: boolean
    finalRevealSnapshot?: boolean
    resultSymbols?: boolean
    winningLines?: boolean
    freeSpinsTriggered?: boolean
    bonusRoundTriggered?: boolean
    gambleFeatureUsed?: boolean
    gambleResult?: boolean
    correlationId?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    deletedAt?: boolean
    session?: boolean | CasinoBet$sessionArgs<ExtArgs>
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoBet"]>

  export type CasinoBetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    gameId?: boolean
    providerRef?: boolean
    roundRef?: boolean
    status?: boolean
    wageredAmount?: boolean
    wageredCurrency?: boolean
    linesBet?: boolean
    stakePerLine?: boolean
    payoutAmount?: boolean
    netResult?: boolean
    betType?: boolean
    jackpotContribution?: boolean
    jackpotWin?: boolean
    placedAt?: boolean
    settledAt?: boolean
    settledBy?: boolean
    initialSeed?: boolean
    resultSeed?: boolean
    finalRevealSnapshot?: boolean
    resultSymbols?: boolean
    winningLines?: boolean
    freeSpinsTriggered?: boolean
    bonusRoundTriggered?: boolean
    gambleFeatureUsed?: boolean
    gambleResult?: boolean
    correlationId?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    deletedAt?: boolean
    session?: boolean | CasinoBet$sessionArgs<ExtArgs>
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["casinoBet"]>

  export type CasinoBetSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    gameId?: boolean
    providerRef?: boolean
    roundRef?: boolean
    status?: boolean
    wageredAmount?: boolean
    wageredCurrency?: boolean
    linesBet?: boolean
    stakePerLine?: boolean
    payoutAmount?: boolean
    netResult?: boolean
    betType?: boolean
    jackpotContribution?: boolean
    jackpotWin?: boolean
    placedAt?: boolean
    settledAt?: boolean
    settledBy?: boolean
    initialSeed?: boolean
    resultSeed?: boolean
    finalRevealSnapshot?: boolean
    resultSymbols?: boolean
    winningLines?: boolean
    freeSpinsTriggered?: boolean
    bonusRoundTriggered?: boolean
    gambleFeatureUsed?: boolean
    gambleResult?: boolean
    correlationId?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    deletedAt?: boolean
  }

  export type CasinoBetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CasinoBet$sessionArgs<ExtArgs>
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }
  export type CasinoBetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CasinoBet$sessionArgs<ExtArgs>
    game?: boolean | CasinoGameDefaultArgs<ExtArgs>
  }

  export type $CasinoBetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoBet"
    objects: {
      session: Prisma.$CasinoSessionPayload<ExtArgs> | null
      game: Prisma.$CasinoGamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      sessionId: string | null
      gameId: string
      providerRef: string | null
      roundRef: string | null
      status: $Enums.CasinoBetStatus
      wageredAmount: Prisma.Decimal
      wageredCurrency: string
      linesBet: number | null
      stakePerLine: Prisma.Decimal | null
      payoutAmount: Prisma.Decimal | null
      netResult: Prisma.Decimal | null
      betType: string | null
      jackpotContribution: Prisma.Decimal | null
      jackpotWin: Prisma.Decimal | null
      placedAt: Date
      settledAt: Date | null
      settledBy: string | null
      initialSeed: string | null
      resultSeed: string | null
      finalRevealSnapshot: Prisma.JsonValue | null
      resultSymbols: Prisma.JsonValue | null
      winningLines: Prisma.JsonValue | null
      freeSpinsTriggered: number | null
      bonusRoundTriggered: boolean | null
      gambleFeatureUsed: boolean | null
      gambleResult: string | null
      correlationId: string | null
      providerRawRequest: Prisma.JsonValue | null
      providerRawResponse: Prisma.JsonValue | null
      deletedAt: Date | null
    }, ExtArgs["result"]["casinoBet"]>
    composites: {}
  }

  type CasinoBetGetPayload<S extends boolean | null | undefined | CasinoBetDefaultArgs> = $Result.GetResult<Prisma.$CasinoBetPayload, S>

  type CasinoBetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoBetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoBetCountAggregateInputType | true
    }

  export interface CasinoBetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoBet'], meta: { name: 'CasinoBet' } }
    /**
     * Find zero or one CasinoBet that matches the filter.
     * @param {CasinoBetFindUniqueArgs} args - Arguments to find a CasinoBet
     * @example
     * // Get one CasinoBet
     * const casinoBet = await prisma.casinoBet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoBetFindUniqueArgs>(args: SelectSubset<T, CasinoBetFindUniqueArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoBet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoBetFindUniqueOrThrowArgs} args - Arguments to find a CasinoBet
     * @example
     * // Get one CasinoBet
     * const casinoBet = await prisma.casinoBet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoBetFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoBetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoBet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetFindFirstArgs} args - Arguments to find a CasinoBet
     * @example
     * // Get one CasinoBet
     * const casinoBet = await prisma.casinoBet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoBetFindFirstArgs>(args?: SelectSubset<T, CasinoBetFindFirstArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoBet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetFindFirstOrThrowArgs} args - Arguments to find a CasinoBet
     * @example
     * // Get one CasinoBet
     * const casinoBet = await prisma.casinoBet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoBetFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoBetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoBets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoBets
     * const casinoBets = await prisma.casinoBet.findMany()
     * 
     * // Get first 10 CasinoBets
     * const casinoBets = await prisma.casinoBet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoBetWithIdOnly = await prisma.casinoBet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoBetFindManyArgs>(args?: SelectSubset<T, CasinoBetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoBet.
     * @param {CasinoBetCreateArgs} args - Arguments to create a CasinoBet.
     * @example
     * // Create one CasinoBet
     * const CasinoBet = await prisma.casinoBet.create({
     *   data: {
     *     // ... data to create a CasinoBet
     *   }
     * })
     * 
     */
    create<T extends CasinoBetCreateArgs>(args: SelectSubset<T, CasinoBetCreateArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoBets.
     * @param {CasinoBetCreateManyArgs} args - Arguments to create many CasinoBets.
     * @example
     * // Create many CasinoBets
     * const casinoBet = await prisma.casinoBet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoBetCreateManyArgs>(args?: SelectSubset<T, CasinoBetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoBets and returns the data saved in the database.
     * @param {CasinoBetCreateManyAndReturnArgs} args - Arguments to create many CasinoBets.
     * @example
     * // Create many CasinoBets
     * const casinoBet = await prisma.casinoBet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoBets and only return the `id`
     * const casinoBetWithIdOnly = await prisma.casinoBet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoBetCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoBetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoBet.
     * @param {CasinoBetDeleteArgs} args - Arguments to delete one CasinoBet.
     * @example
     * // Delete one CasinoBet
     * const CasinoBet = await prisma.casinoBet.delete({
     *   where: {
     *     // ... filter to delete one CasinoBet
     *   }
     * })
     * 
     */
    delete<T extends CasinoBetDeleteArgs>(args: SelectSubset<T, CasinoBetDeleteArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoBet.
     * @param {CasinoBetUpdateArgs} args - Arguments to update one CasinoBet.
     * @example
     * // Update one CasinoBet
     * const casinoBet = await prisma.casinoBet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoBetUpdateArgs>(args: SelectSubset<T, CasinoBetUpdateArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoBets.
     * @param {CasinoBetDeleteManyArgs} args - Arguments to filter CasinoBets to delete.
     * @example
     * // Delete a few CasinoBets
     * const { count } = await prisma.casinoBet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoBetDeleteManyArgs>(args?: SelectSubset<T, CasinoBetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoBets
     * const casinoBet = await prisma.casinoBet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoBetUpdateManyArgs>(args: SelectSubset<T, CasinoBetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoBet.
     * @param {CasinoBetUpsertArgs} args - Arguments to update or create a CasinoBet.
     * @example
     * // Update or create a CasinoBet
     * const casinoBet = await prisma.casinoBet.upsert({
     *   create: {
     *     // ... data to create a CasinoBet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoBet we want to update
     *   }
     * })
     */
    upsert<T extends CasinoBetUpsertArgs>(args: SelectSubset<T, CasinoBetUpsertArgs<ExtArgs>>): Prisma__CasinoBetClient<$Result.GetResult<Prisma.$CasinoBetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetCountArgs} args - Arguments to filter CasinoBets to count.
     * @example
     * // Count the number of CasinoBets
     * const count = await prisma.casinoBet.count({
     *   where: {
     *     // ... the filter for the CasinoBets we want to count
     *   }
     * })
    **/
    count<T extends CasinoBetCountArgs>(
      args?: Subset<T, CasinoBetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoBetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoBetAggregateArgs>(args: Subset<T, CasinoBetAggregateArgs>): Prisma.PrismaPromise<GetCasinoBetAggregateType<T>>

    /**
     * Group by CasinoBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoBetGroupByArgs} args - Group by arguments.
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
      T extends CasinoBetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoBetGroupByArgs['orderBy'] }
        : { orderBy?: CasinoBetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoBetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoBet model
   */
  readonly fields: CasinoBetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoBet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoBetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends CasinoBet$sessionArgs<ExtArgs> = {}>(args?: Subset<T, CasinoBet$sessionArgs<ExtArgs>>): Prisma__CasinoSessionClient<$Result.GetResult<Prisma.$CasinoSessionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    game<T extends CasinoGameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CasinoGameDefaultArgs<ExtArgs>>): Prisma__CasinoGameClient<$Result.GetResult<Prisma.$CasinoGamePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CasinoBet model
   */ 
  interface CasinoBetFieldRefs {
    readonly id: FieldRef<"CasinoBet", 'String'>
    readonly userId: FieldRef<"CasinoBet", 'String'>
    readonly sessionId: FieldRef<"CasinoBet", 'String'>
    readonly gameId: FieldRef<"CasinoBet", 'String'>
    readonly providerRef: FieldRef<"CasinoBet", 'String'>
    readonly roundRef: FieldRef<"CasinoBet", 'String'>
    readonly status: FieldRef<"CasinoBet", 'CasinoBetStatus'>
    readonly wageredAmount: FieldRef<"CasinoBet", 'Decimal'>
    readonly wageredCurrency: FieldRef<"CasinoBet", 'String'>
    readonly linesBet: FieldRef<"CasinoBet", 'Int'>
    readonly stakePerLine: FieldRef<"CasinoBet", 'Decimal'>
    readonly payoutAmount: FieldRef<"CasinoBet", 'Decimal'>
    readonly netResult: FieldRef<"CasinoBet", 'Decimal'>
    readonly betType: FieldRef<"CasinoBet", 'String'>
    readonly jackpotContribution: FieldRef<"CasinoBet", 'Decimal'>
    readonly jackpotWin: FieldRef<"CasinoBet", 'Decimal'>
    readonly placedAt: FieldRef<"CasinoBet", 'DateTime'>
    readonly settledAt: FieldRef<"CasinoBet", 'DateTime'>
    readonly settledBy: FieldRef<"CasinoBet", 'String'>
    readonly initialSeed: FieldRef<"CasinoBet", 'String'>
    readonly resultSeed: FieldRef<"CasinoBet", 'String'>
    readonly finalRevealSnapshot: FieldRef<"CasinoBet", 'Json'>
    readonly resultSymbols: FieldRef<"CasinoBet", 'Json'>
    readonly winningLines: FieldRef<"CasinoBet", 'Json'>
    readonly freeSpinsTriggered: FieldRef<"CasinoBet", 'Int'>
    readonly bonusRoundTriggered: FieldRef<"CasinoBet", 'Boolean'>
    readonly gambleFeatureUsed: FieldRef<"CasinoBet", 'Boolean'>
    readonly gambleResult: FieldRef<"CasinoBet", 'String'>
    readonly correlationId: FieldRef<"CasinoBet", 'String'>
    readonly providerRawRequest: FieldRef<"CasinoBet", 'Json'>
    readonly providerRawResponse: FieldRef<"CasinoBet", 'Json'>
    readonly deletedAt: FieldRef<"CasinoBet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasinoBet findUnique
   */
  export type CasinoBetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter, which CasinoBet to fetch.
     */
    where: CasinoBetWhereUniqueInput
  }

  /**
   * CasinoBet findUniqueOrThrow
   */
  export type CasinoBetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter, which CasinoBet to fetch.
     */
    where: CasinoBetWhereUniqueInput
  }

  /**
   * CasinoBet findFirst
   */
  export type CasinoBetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter, which CasinoBet to fetch.
     */
    where?: CasinoBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoBets to fetch.
     */
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoBets.
     */
    cursor?: CasinoBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoBets.
     */
    distinct?: CasinoBetScalarFieldEnum | CasinoBetScalarFieldEnum[]
  }

  /**
   * CasinoBet findFirstOrThrow
   */
  export type CasinoBetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter, which CasinoBet to fetch.
     */
    where?: CasinoBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoBets to fetch.
     */
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoBets.
     */
    cursor?: CasinoBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoBets.
     */
    distinct?: CasinoBetScalarFieldEnum | CasinoBetScalarFieldEnum[]
  }

  /**
   * CasinoBet findMany
   */
  export type CasinoBetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter, which CasinoBets to fetch.
     */
    where?: CasinoBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoBets to fetch.
     */
    orderBy?: CasinoBetOrderByWithRelationInput | CasinoBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoBets.
     */
    cursor?: CasinoBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoBets.
     */
    skip?: number
    distinct?: CasinoBetScalarFieldEnum | CasinoBetScalarFieldEnum[]
  }

  /**
   * CasinoBet create
   */
  export type CasinoBetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * The data needed to create a CasinoBet.
     */
    data: XOR<CasinoBetCreateInput, CasinoBetUncheckedCreateInput>
  }

  /**
   * CasinoBet createMany
   */
  export type CasinoBetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoBets.
     */
    data: CasinoBetCreateManyInput | CasinoBetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoBet createManyAndReturn
   */
  export type CasinoBetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoBets.
     */
    data: CasinoBetCreateManyInput | CasinoBetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CasinoBet update
   */
  export type CasinoBetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * The data needed to update a CasinoBet.
     */
    data: XOR<CasinoBetUpdateInput, CasinoBetUncheckedUpdateInput>
    /**
     * Choose, which CasinoBet to update.
     */
    where: CasinoBetWhereUniqueInput
  }

  /**
   * CasinoBet updateMany
   */
  export type CasinoBetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoBets.
     */
    data: XOR<CasinoBetUpdateManyMutationInput, CasinoBetUncheckedUpdateManyInput>
    /**
     * Filter which CasinoBets to update
     */
    where?: CasinoBetWhereInput
  }

  /**
   * CasinoBet upsert
   */
  export type CasinoBetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * The filter to search for the CasinoBet to update in case it exists.
     */
    where: CasinoBetWhereUniqueInput
    /**
     * In case the CasinoBet found by the `where` argument doesn't exist, create a new CasinoBet with this data.
     */
    create: XOR<CasinoBetCreateInput, CasinoBetUncheckedCreateInput>
    /**
     * In case the CasinoBet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoBetUpdateInput, CasinoBetUncheckedUpdateInput>
  }

  /**
   * CasinoBet delete
   */
  export type CasinoBetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
    /**
     * Filter which CasinoBet to delete.
     */
    where: CasinoBetWhereUniqueInput
  }

  /**
   * CasinoBet deleteMany
   */
  export type CasinoBetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoBets to delete
     */
    where?: CasinoBetWhereInput
  }

  /**
   * CasinoBet.session
   */
  export type CasinoBet$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoSession
     */
    select?: CasinoSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoSessionInclude<ExtArgs> | null
    where?: CasinoSessionWhereInput
  }

  /**
   * CasinoBet without action
   */
  export type CasinoBetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoBet
     */
    select?: CasinoBetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CasinoBetInclude<ExtArgs> | null
  }


  /**
   * Model CasinoJackpot
   */

  export type AggregateCasinoJackpot = {
    _count: CasinoJackpotCountAggregateOutputType | null
    _avg: CasinoJackpotAvgAggregateOutputType | null
    _sum: CasinoJackpotSumAggregateOutputType | null
    _min: CasinoJackpotMinAggregateOutputType | null
    _max: CasinoJackpotMaxAggregateOutputType | null
  }

  export type CasinoJackpotAvgAggregateOutputType = {
    currentAmount: Decimal | null
    seedAmount: Decimal | null
    maxCapAmount: Decimal | null
    contributionPercentOfBet: Decimal | null
    triggerAmount: Decimal | null
    lastWinAmount: Decimal | null
    triggerChancePerMillion: number | null
  }

  export type CasinoJackpotSumAggregateOutputType = {
    currentAmount: Decimal | null
    seedAmount: Decimal | null
    maxCapAmount: Decimal | null
    contributionPercentOfBet: Decimal | null
    triggerAmount: Decimal | null
    lastWinAmount: Decimal | null
    triggerChancePerMillion: number | null
  }

  export type CasinoJackpotMinAggregateOutputType = {
    id: string | null
    type: $Enums.CasinoJackpotType | null
    name: string | null
    currency: string | null
    currentAmount: Decimal | null
    seedAmount: Decimal | null
    maxCapAmount: Decimal | null
    contributionPercentOfBet: Decimal | null
    triggerAmount: Decimal | null
    lastWinAt: Date | null
    lastWinAmount: Decimal | null
    lastWinnerId: string | null
    triggerChancePerMillion: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasinoJackpotMaxAggregateOutputType = {
    id: string | null
    type: $Enums.CasinoJackpotType | null
    name: string | null
    currency: string | null
    currentAmount: Decimal | null
    seedAmount: Decimal | null
    maxCapAmount: Decimal | null
    contributionPercentOfBet: Decimal | null
    triggerAmount: Decimal | null
    lastWinAt: Date | null
    lastWinAmount: Decimal | null
    lastWinnerId: string | null
    triggerChancePerMillion: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CasinoJackpotCountAggregateOutputType = {
    id: number
    type: number
    name: number
    currency: number
    currentAmount: number
    seedAmount: number
    maxCapAmount: number
    contributionPercentOfBet: number
    triggerAmount: number
    lastWinAt: number
    lastWinAmount: number
    lastWinnerId: number
    triggerChancePerMillion: number
    enabled: number
    gameIds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CasinoJackpotAvgAggregateInputType = {
    currentAmount?: true
    seedAmount?: true
    maxCapAmount?: true
    contributionPercentOfBet?: true
    triggerAmount?: true
    lastWinAmount?: true
    triggerChancePerMillion?: true
  }

  export type CasinoJackpotSumAggregateInputType = {
    currentAmount?: true
    seedAmount?: true
    maxCapAmount?: true
    contributionPercentOfBet?: true
    triggerAmount?: true
    lastWinAmount?: true
    triggerChancePerMillion?: true
  }

  export type CasinoJackpotMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    currency?: true
    currentAmount?: true
    seedAmount?: true
    maxCapAmount?: true
    contributionPercentOfBet?: true
    triggerAmount?: true
    lastWinAt?: true
    lastWinAmount?: true
    lastWinnerId?: true
    triggerChancePerMillion?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasinoJackpotMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    currency?: true
    currentAmount?: true
    seedAmount?: true
    maxCapAmount?: true
    contributionPercentOfBet?: true
    triggerAmount?: true
    lastWinAt?: true
    lastWinAmount?: true
    lastWinnerId?: true
    triggerChancePerMillion?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CasinoJackpotCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    currency?: true
    currentAmount?: true
    seedAmount?: true
    maxCapAmount?: true
    contributionPercentOfBet?: true
    triggerAmount?: true
    lastWinAt?: true
    lastWinAmount?: true
    lastWinnerId?: true
    triggerChancePerMillion?: true
    enabled?: true
    gameIds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CasinoJackpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoJackpot to aggregate.
     */
    where?: CasinoJackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoJackpots to fetch.
     */
    orderBy?: CasinoJackpotOrderByWithRelationInput | CasinoJackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CasinoJackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoJackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoJackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CasinoJackpots
    **/
    _count?: true | CasinoJackpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CasinoJackpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CasinoJackpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CasinoJackpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CasinoJackpotMaxAggregateInputType
  }

  export type GetCasinoJackpotAggregateType<T extends CasinoJackpotAggregateArgs> = {
        [P in keyof T & keyof AggregateCasinoJackpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasinoJackpot[P]>
      : GetScalarType<T[P], AggregateCasinoJackpot[P]>
  }




  export type CasinoJackpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CasinoJackpotWhereInput
    orderBy?: CasinoJackpotOrderByWithAggregationInput | CasinoJackpotOrderByWithAggregationInput[]
    by: CasinoJackpotScalarFieldEnum[] | CasinoJackpotScalarFieldEnum
    having?: CasinoJackpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CasinoJackpotCountAggregateInputType | true
    _avg?: CasinoJackpotAvgAggregateInputType
    _sum?: CasinoJackpotSumAggregateInputType
    _min?: CasinoJackpotMinAggregateInputType
    _max?: CasinoJackpotMaxAggregateInputType
  }

  export type CasinoJackpotGroupByOutputType = {
    id: string
    type: $Enums.CasinoJackpotType
    name: string
    currency: string
    currentAmount: Decimal
    seedAmount: Decimal
    maxCapAmount: Decimal | null
    contributionPercentOfBet: Decimal
    triggerAmount: Decimal | null
    lastWinAt: Date | null
    lastWinAmount: Decimal | null
    lastWinnerId: string | null
    triggerChancePerMillion: number | null
    enabled: boolean
    gameIds: string[]
    createdAt: Date
    updatedAt: Date
    _count: CasinoJackpotCountAggregateOutputType | null
    _avg: CasinoJackpotAvgAggregateOutputType | null
    _sum: CasinoJackpotSumAggregateOutputType | null
    _min: CasinoJackpotMinAggregateOutputType | null
    _max: CasinoJackpotMaxAggregateOutputType | null
  }

  type GetCasinoJackpotGroupByPayload<T extends CasinoJackpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CasinoJackpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CasinoJackpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CasinoJackpotGroupByOutputType[P]>
            : GetScalarType<T[P], CasinoJackpotGroupByOutputType[P]>
        }
      >
    >


  export type CasinoJackpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    currency?: boolean
    currentAmount?: boolean
    seedAmount?: boolean
    maxCapAmount?: boolean
    contributionPercentOfBet?: boolean
    triggerAmount?: boolean
    lastWinAt?: boolean
    lastWinAmount?: boolean
    lastWinnerId?: boolean
    triggerChancePerMillion?: boolean
    enabled?: boolean
    gameIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["casinoJackpot"]>

  export type CasinoJackpotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    currency?: boolean
    currentAmount?: boolean
    seedAmount?: boolean
    maxCapAmount?: boolean
    contributionPercentOfBet?: boolean
    triggerAmount?: boolean
    lastWinAt?: boolean
    lastWinAmount?: boolean
    lastWinnerId?: boolean
    triggerChancePerMillion?: boolean
    enabled?: boolean
    gameIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["casinoJackpot"]>

  export type CasinoJackpotSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    currency?: boolean
    currentAmount?: boolean
    seedAmount?: boolean
    maxCapAmount?: boolean
    contributionPercentOfBet?: boolean
    triggerAmount?: boolean
    lastWinAt?: boolean
    lastWinAmount?: boolean
    lastWinnerId?: boolean
    triggerChancePerMillion?: boolean
    enabled?: boolean
    gameIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CasinoJackpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CasinoJackpot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.CasinoJackpotType
      name: string
      currency: string
      currentAmount: Prisma.Decimal
      seedAmount: Prisma.Decimal
      maxCapAmount: Prisma.Decimal | null
      contributionPercentOfBet: Prisma.Decimal
      triggerAmount: Prisma.Decimal | null
      lastWinAt: Date | null
      lastWinAmount: Prisma.Decimal | null
      lastWinnerId: string | null
      triggerChancePerMillion: number | null
      enabled: boolean
      gameIds: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["casinoJackpot"]>
    composites: {}
  }

  type CasinoJackpotGetPayload<S extends boolean | null | undefined | CasinoJackpotDefaultArgs> = $Result.GetResult<Prisma.$CasinoJackpotPayload, S>

  type CasinoJackpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CasinoJackpotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CasinoJackpotCountAggregateInputType | true
    }

  export interface CasinoJackpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CasinoJackpot'], meta: { name: 'CasinoJackpot' } }
    /**
     * Find zero or one CasinoJackpot that matches the filter.
     * @param {CasinoJackpotFindUniqueArgs} args - Arguments to find a CasinoJackpot
     * @example
     * // Get one CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CasinoJackpotFindUniqueArgs>(args: SelectSubset<T, CasinoJackpotFindUniqueArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CasinoJackpot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CasinoJackpotFindUniqueOrThrowArgs} args - Arguments to find a CasinoJackpot
     * @example
     * // Get one CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CasinoJackpotFindUniqueOrThrowArgs>(args: SelectSubset<T, CasinoJackpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CasinoJackpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotFindFirstArgs} args - Arguments to find a CasinoJackpot
     * @example
     * // Get one CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CasinoJackpotFindFirstArgs>(args?: SelectSubset<T, CasinoJackpotFindFirstArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CasinoJackpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotFindFirstOrThrowArgs} args - Arguments to find a CasinoJackpot
     * @example
     * // Get one CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CasinoJackpotFindFirstOrThrowArgs>(args?: SelectSubset<T, CasinoJackpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CasinoJackpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CasinoJackpots
     * const casinoJackpots = await prisma.casinoJackpot.findMany()
     * 
     * // Get first 10 CasinoJackpots
     * const casinoJackpots = await prisma.casinoJackpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const casinoJackpotWithIdOnly = await prisma.casinoJackpot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CasinoJackpotFindManyArgs>(args?: SelectSubset<T, CasinoJackpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CasinoJackpot.
     * @param {CasinoJackpotCreateArgs} args - Arguments to create a CasinoJackpot.
     * @example
     * // Create one CasinoJackpot
     * const CasinoJackpot = await prisma.casinoJackpot.create({
     *   data: {
     *     // ... data to create a CasinoJackpot
     *   }
     * })
     * 
     */
    create<T extends CasinoJackpotCreateArgs>(args: SelectSubset<T, CasinoJackpotCreateArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CasinoJackpots.
     * @param {CasinoJackpotCreateManyArgs} args - Arguments to create many CasinoJackpots.
     * @example
     * // Create many CasinoJackpots
     * const casinoJackpot = await prisma.casinoJackpot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CasinoJackpotCreateManyArgs>(args?: SelectSubset<T, CasinoJackpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CasinoJackpots and returns the data saved in the database.
     * @param {CasinoJackpotCreateManyAndReturnArgs} args - Arguments to create many CasinoJackpots.
     * @example
     * // Create many CasinoJackpots
     * const casinoJackpot = await prisma.casinoJackpot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CasinoJackpots and only return the `id`
     * const casinoJackpotWithIdOnly = await prisma.casinoJackpot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CasinoJackpotCreateManyAndReturnArgs>(args?: SelectSubset<T, CasinoJackpotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CasinoJackpot.
     * @param {CasinoJackpotDeleteArgs} args - Arguments to delete one CasinoJackpot.
     * @example
     * // Delete one CasinoJackpot
     * const CasinoJackpot = await prisma.casinoJackpot.delete({
     *   where: {
     *     // ... filter to delete one CasinoJackpot
     *   }
     * })
     * 
     */
    delete<T extends CasinoJackpotDeleteArgs>(args: SelectSubset<T, CasinoJackpotDeleteArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CasinoJackpot.
     * @param {CasinoJackpotUpdateArgs} args - Arguments to update one CasinoJackpot.
     * @example
     * // Update one CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CasinoJackpotUpdateArgs>(args: SelectSubset<T, CasinoJackpotUpdateArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CasinoJackpots.
     * @param {CasinoJackpotDeleteManyArgs} args - Arguments to filter CasinoJackpots to delete.
     * @example
     * // Delete a few CasinoJackpots
     * const { count } = await prisma.casinoJackpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CasinoJackpotDeleteManyArgs>(args?: SelectSubset<T, CasinoJackpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CasinoJackpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CasinoJackpots
     * const casinoJackpot = await prisma.casinoJackpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CasinoJackpotUpdateManyArgs>(args: SelectSubset<T, CasinoJackpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CasinoJackpot.
     * @param {CasinoJackpotUpsertArgs} args - Arguments to update or create a CasinoJackpot.
     * @example
     * // Update or create a CasinoJackpot
     * const casinoJackpot = await prisma.casinoJackpot.upsert({
     *   create: {
     *     // ... data to create a CasinoJackpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CasinoJackpot we want to update
     *   }
     * })
     */
    upsert<T extends CasinoJackpotUpsertArgs>(args: SelectSubset<T, CasinoJackpotUpsertArgs<ExtArgs>>): Prisma__CasinoJackpotClient<$Result.GetResult<Prisma.$CasinoJackpotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CasinoJackpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotCountArgs} args - Arguments to filter CasinoJackpots to count.
     * @example
     * // Count the number of CasinoJackpots
     * const count = await prisma.casinoJackpot.count({
     *   where: {
     *     // ... the filter for the CasinoJackpots we want to count
     *   }
     * })
    **/
    count<T extends CasinoJackpotCountArgs>(
      args?: Subset<T, CasinoJackpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CasinoJackpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CasinoJackpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CasinoJackpotAggregateArgs>(args: Subset<T, CasinoJackpotAggregateArgs>): Prisma.PrismaPromise<GetCasinoJackpotAggregateType<T>>

    /**
     * Group by CasinoJackpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CasinoJackpotGroupByArgs} args - Group by arguments.
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
      T extends CasinoJackpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CasinoJackpotGroupByArgs['orderBy'] }
        : { orderBy?: CasinoJackpotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CasinoJackpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCasinoJackpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CasinoJackpot model
   */
  readonly fields: CasinoJackpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CasinoJackpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CasinoJackpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CasinoJackpot model
   */ 
  interface CasinoJackpotFieldRefs {
    readonly id: FieldRef<"CasinoJackpot", 'String'>
    readonly type: FieldRef<"CasinoJackpot", 'CasinoJackpotType'>
    readonly name: FieldRef<"CasinoJackpot", 'String'>
    readonly currency: FieldRef<"CasinoJackpot", 'String'>
    readonly currentAmount: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly seedAmount: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly maxCapAmount: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly contributionPercentOfBet: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly triggerAmount: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly lastWinAt: FieldRef<"CasinoJackpot", 'DateTime'>
    readonly lastWinAmount: FieldRef<"CasinoJackpot", 'Decimal'>
    readonly lastWinnerId: FieldRef<"CasinoJackpot", 'String'>
    readonly triggerChancePerMillion: FieldRef<"CasinoJackpot", 'Int'>
    readonly enabled: FieldRef<"CasinoJackpot", 'Boolean'>
    readonly gameIds: FieldRef<"CasinoJackpot", 'String[]'>
    readonly createdAt: FieldRef<"CasinoJackpot", 'DateTime'>
    readonly updatedAt: FieldRef<"CasinoJackpot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CasinoJackpot findUnique
   */
  export type CasinoJackpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter, which CasinoJackpot to fetch.
     */
    where: CasinoJackpotWhereUniqueInput
  }

  /**
   * CasinoJackpot findUniqueOrThrow
   */
  export type CasinoJackpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter, which CasinoJackpot to fetch.
     */
    where: CasinoJackpotWhereUniqueInput
  }

  /**
   * CasinoJackpot findFirst
   */
  export type CasinoJackpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter, which CasinoJackpot to fetch.
     */
    where?: CasinoJackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoJackpots to fetch.
     */
    orderBy?: CasinoJackpotOrderByWithRelationInput | CasinoJackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoJackpots.
     */
    cursor?: CasinoJackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoJackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoJackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoJackpots.
     */
    distinct?: CasinoJackpotScalarFieldEnum | CasinoJackpotScalarFieldEnum[]
  }

  /**
   * CasinoJackpot findFirstOrThrow
   */
  export type CasinoJackpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter, which CasinoJackpot to fetch.
     */
    where?: CasinoJackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoJackpots to fetch.
     */
    orderBy?: CasinoJackpotOrderByWithRelationInput | CasinoJackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CasinoJackpots.
     */
    cursor?: CasinoJackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoJackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoJackpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CasinoJackpots.
     */
    distinct?: CasinoJackpotScalarFieldEnum | CasinoJackpotScalarFieldEnum[]
  }

  /**
   * CasinoJackpot findMany
   */
  export type CasinoJackpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter, which CasinoJackpots to fetch.
     */
    where?: CasinoJackpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CasinoJackpots to fetch.
     */
    orderBy?: CasinoJackpotOrderByWithRelationInput | CasinoJackpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CasinoJackpots.
     */
    cursor?: CasinoJackpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CasinoJackpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CasinoJackpots.
     */
    skip?: number
    distinct?: CasinoJackpotScalarFieldEnum | CasinoJackpotScalarFieldEnum[]
  }

  /**
   * CasinoJackpot create
   */
  export type CasinoJackpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * The data needed to create a CasinoJackpot.
     */
    data: XOR<CasinoJackpotCreateInput, CasinoJackpotUncheckedCreateInput>
  }

  /**
   * CasinoJackpot createMany
   */
  export type CasinoJackpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CasinoJackpots.
     */
    data: CasinoJackpotCreateManyInput | CasinoJackpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoJackpot createManyAndReturn
   */
  export type CasinoJackpotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CasinoJackpots.
     */
    data: CasinoJackpotCreateManyInput | CasinoJackpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CasinoJackpot update
   */
  export type CasinoJackpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * The data needed to update a CasinoJackpot.
     */
    data: XOR<CasinoJackpotUpdateInput, CasinoJackpotUncheckedUpdateInput>
    /**
     * Choose, which CasinoJackpot to update.
     */
    where: CasinoJackpotWhereUniqueInput
  }

  /**
   * CasinoJackpot updateMany
   */
  export type CasinoJackpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CasinoJackpots.
     */
    data: XOR<CasinoJackpotUpdateManyMutationInput, CasinoJackpotUncheckedUpdateManyInput>
    /**
     * Filter which CasinoJackpots to update
     */
    where?: CasinoJackpotWhereInput
  }

  /**
   * CasinoJackpot upsert
   */
  export type CasinoJackpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * The filter to search for the CasinoJackpot to update in case it exists.
     */
    where: CasinoJackpotWhereUniqueInput
    /**
     * In case the CasinoJackpot found by the `where` argument doesn't exist, create a new CasinoJackpot with this data.
     */
    create: XOR<CasinoJackpotCreateInput, CasinoJackpotUncheckedCreateInput>
    /**
     * In case the CasinoJackpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CasinoJackpotUpdateInput, CasinoJackpotUncheckedUpdateInput>
  }

  /**
   * CasinoJackpot delete
   */
  export type CasinoJackpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
    /**
     * Filter which CasinoJackpot to delete.
     */
    where: CasinoJackpotWhereUniqueInput
  }

  /**
   * CasinoJackpot deleteMany
   */
  export type CasinoJackpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CasinoJackpots to delete
     */
    where?: CasinoJackpotWhereInput
  }

  /**
   * CasinoJackpot without action
   */
  export type CasinoJackpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CasinoJackpot
     */
    select?: CasinoJackpotSelect<ExtArgs> | null
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


  export const CasinoGameScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    providerGameId: 'providerGameId',
    name: 'name',
    slug: 'slug',
    category: 'category',
    provider: 'provider',
    status: 'status',
    rtp: 'rtp',
    volatility: 'volatility',
    minBet: 'minBet',
    maxBet: 'maxBet',
    maxWinMultiplier: 'maxWinMultiplier',
    lines: 'lines',
    reels: 'reels',
    hasFreeSpins: 'hasFreeSpins',
    hasJackpot: 'hasJackpot',
    hasBonusBuy: 'hasBonusBuy',
    hasLiveDealer: 'hasLiveDealer',
    gameConfig: 'gameConfig',
    thumbUrl: 'thumbUrl',
    bannerUrl: 'bannerUrl',
    lobbyTags: 'lobbyTags',
    languages: 'languages',
    countriesBlocked: 'countriesBlocked',
    isNew: 'isNew',
    isHot: 'isHot',
    isFeatured: 'isFeatured',
    popularTrendScore: 'popularTrendScore',
    totalRoundsPlayed: 'totalRoundsPlayed',
    totalWagered: 'totalWagered',
    totalPayout: 'totalPayout',
    lastWinAt: 'lastWinAt',
    seededHouseEdgePercent: 'seededHouseEdgePercent',
    providerUrlDeepLink: 'providerUrlDeepLink',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CasinoGameScalarFieldEnum = (typeof CasinoGameScalarFieldEnum)[keyof typeof CasinoGameScalarFieldEnum]


  export const CasinoGameFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    favoritedAt: 'favoritedAt'
  };

  export type CasinoGameFavoriteScalarFieldEnum = (typeof CasinoGameFavoriteScalarFieldEnum)[keyof typeof CasinoGameFavoriteScalarFieldEnum]


  export const CasinoSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    playerToken: 'playerToken',
    sessionStatus: 'sessionStatus',
    providerSessionReference: 'providerSessionReference',
    walletId: 'walletId',
    currency: 'currency',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    totalRounds: 'totalRounds',
    totalWagered: 'totalWagered',
    totalPayout: 'totalPayout',
    maxWinDuringSession: 'maxWinDuringSession',
    ipAddress: 'ipAddress',
    device: 'device',
    userAgent: 'userAgent',
    geoCountry: 'geoCountry',
    closedReason: 'closedReason',
    closedBy: 'closedBy',
    correlationId: 'correlationId',
    playerBalanceSnapshots: 'playerBalanceSnapshots'
  };

  export type CasinoSessionScalarFieldEnum = (typeof CasinoSessionScalarFieldEnum)[keyof typeof CasinoSessionScalarFieldEnum]


  export const CasinoBetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    gameId: 'gameId',
    providerRef: 'providerRef',
    roundRef: 'roundRef',
    status: 'status',
    wageredAmount: 'wageredAmount',
    wageredCurrency: 'wageredCurrency',
    linesBet: 'linesBet',
    stakePerLine: 'stakePerLine',
    payoutAmount: 'payoutAmount',
    netResult: 'netResult',
    betType: 'betType',
    jackpotContribution: 'jackpotContribution',
    jackpotWin: 'jackpotWin',
    placedAt: 'placedAt',
    settledAt: 'settledAt',
    settledBy: 'settledBy',
    initialSeed: 'initialSeed',
    resultSeed: 'resultSeed',
    finalRevealSnapshot: 'finalRevealSnapshot',
    resultSymbols: 'resultSymbols',
    winningLines: 'winningLines',
    freeSpinsTriggered: 'freeSpinsTriggered',
    bonusRoundTriggered: 'bonusRoundTriggered',
    gambleFeatureUsed: 'gambleFeatureUsed',
    gambleResult: 'gambleResult',
    correlationId: 'correlationId',
    providerRawRequest: 'providerRawRequest',
    providerRawResponse: 'providerRawResponse',
    deletedAt: 'deletedAt'
  };

  export type CasinoBetScalarFieldEnum = (typeof CasinoBetScalarFieldEnum)[keyof typeof CasinoBetScalarFieldEnum]


  export const CasinoJackpotScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    currency: 'currency',
    currentAmount: 'currentAmount',
    seedAmount: 'seedAmount',
    maxCapAmount: 'maxCapAmount',
    contributionPercentOfBet: 'contributionPercentOfBet',
    triggerAmount: 'triggerAmount',
    lastWinAt: 'lastWinAt',
    lastWinAmount: 'lastWinAmount',
    lastWinnerId: 'lastWinnerId',
    triggerChancePerMillion: 'triggerChancePerMillion',
    enabled: 'enabled',
    gameIds: 'gameIds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CasinoJackpotScalarFieldEnum = (typeof CasinoJackpotScalarFieldEnum)[keyof typeof CasinoJackpotScalarFieldEnum]


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
   * Reference to a field of type 'CasinoGameCategory'
   */
  export type EnumCasinoGameCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoGameCategory'>
    


  /**
   * Reference to a field of type 'CasinoGameCategory[]'
   */
  export type ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoGameCategory[]'>
    


  /**
   * Reference to a field of type 'CasinoProvider'
   */
  export type EnumCasinoProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoProvider'>
    


  /**
   * Reference to a field of type 'CasinoProvider[]'
   */
  export type ListEnumCasinoProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoProvider[]'>
    


  /**
   * Reference to a field of type 'CasinoGameStatus'
   */
  export type EnumCasinoGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoGameStatus'>
    


  /**
   * Reference to a field of type 'CasinoGameStatus[]'
   */
  export type ListEnumCasinoGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoGameStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CasinoSessionStatus'
   */
  export type EnumCasinoSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoSessionStatus'>
    


  /**
   * Reference to a field of type 'CasinoSessionStatus[]'
   */
  export type ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoSessionStatus[]'>
    


  /**
   * Reference to a field of type 'CasinoBetStatus'
   */
  export type EnumCasinoBetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoBetStatus'>
    


  /**
   * Reference to a field of type 'CasinoBetStatus[]'
   */
  export type ListEnumCasinoBetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoBetStatus[]'>
    


  /**
   * Reference to a field of type 'CasinoJackpotType'
   */
  export type EnumCasinoJackpotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoJackpotType'>
    


  /**
   * Reference to a field of type 'CasinoJackpotType[]'
   */
  export type ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CasinoJackpotType[]'>
    


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


  export type CasinoGameWhereInput = {
    AND?: CasinoGameWhereInput | CasinoGameWhereInput[]
    OR?: CasinoGameWhereInput[]
    NOT?: CasinoGameWhereInput | CasinoGameWhereInput[]
    id?: StringFilter<"CasinoGame"> | string
    providerId?: StringFilter<"CasinoGame"> | string
    providerGameId?: StringFilter<"CasinoGame"> | string
    name?: StringFilter<"CasinoGame"> | string
    slug?: StringFilter<"CasinoGame"> | string
    category?: EnumCasinoGameCategoryFilter<"CasinoGame"> | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFilter<"CasinoGame"> | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFilter<"CasinoGame"> | $Enums.CasinoGameStatus
    rtp?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    volatility?: StringNullableFilter<"CasinoGame"> | string | null
    minBet?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: DecimalNullableFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    lines?: IntNullableFilter<"CasinoGame"> | number | null
    reels?: IntNullableFilter<"CasinoGame"> | number | null
    hasFreeSpins?: BoolFilter<"CasinoGame"> | boolean
    hasJackpot?: BoolFilter<"CasinoGame"> | boolean
    hasBonusBuy?: BoolFilter<"CasinoGame"> | boolean
    hasLiveDealer?: BoolFilter<"CasinoGame"> | boolean
    gameConfig?: JsonNullableFilter<"CasinoGame">
    thumbUrl?: StringNullableFilter<"CasinoGame"> | string | null
    bannerUrl?: StringNullableFilter<"CasinoGame"> | string | null
    lobbyTags?: StringNullableListFilter<"CasinoGame">
    languages?: StringNullableListFilter<"CasinoGame">
    countriesBlocked?: StringNullableListFilter<"CasinoGame">
    isNew?: BoolFilter<"CasinoGame"> | boolean
    isHot?: BoolFilter<"CasinoGame"> | boolean
    isFeatured?: BoolFilter<"CasinoGame"> | boolean
    popularTrendScore?: IntNullableFilter<"CasinoGame"> | number | null
    totalRoundsPlayed?: BigIntFilter<"CasinoGame"> | bigint | number
    totalWagered?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    lastWinAt?: DateTimeNullableFilter<"CasinoGame"> | Date | string | null
    seededHouseEdgePercent?: DecimalNullableFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: StringNullableFilter<"CasinoGame"> | string | null
    createdBy?: StringNullableFilter<"CasinoGame"> | string | null
    createdAt?: DateTimeFilter<"CasinoGame"> | Date | string
    updatedAt?: DateTimeFilter<"CasinoGame"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CasinoGame"> | Date | string | null
    favorites?: CasinoGameFavoriteListRelationFilter
    sessions?: CasinoSessionListRelationFilter
    bets?: CasinoBetListRelationFilter
  }

  export type CasinoGameOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerGameId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    rtp?: SortOrder
    volatility?: SortOrderInput | SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrderInput | SortOrder
    lines?: SortOrderInput | SortOrder
    reels?: SortOrderInput | SortOrder
    hasFreeSpins?: SortOrder
    hasJackpot?: SortOrder
    hasBonusBuy?: SortOrder
    hasLiveDealer?: SortOrder
    gameConfig?: SortOrderInput | SortOrder
    thumbUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    lobbyTags?: SortOrder
    languages?: SortOrder
    countriesBlocked?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isFeatured?: SortOrder
    popularTrendScore?: SortOrderInput | SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    lastWinAt?: SortOrderInput | SortOrder
    seededHouseEdgePercent?: SortOrderInput | SortOrder
    providerUrlDeepLink?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    favorites?: CasinoGameFavoriteOrderByRelationAggregateInput
    sessions?: CasinoSessionOrderByRelationAggregateInput
    bets?: CasinoBetOrderByRelationAggregateInput
  }

  export type CasinoGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    providerId_providerGameId?: CasinoGameProviderIdProviderGameIdCompoundUniqueInput
    AND?: CasinoGameWhereInput | CasinoGameWhereInput[]
    OR?: CasinoGameWhereInput[]
    NOT?: CasinoGameWhereInput | CasinoGameWhereInput[]
    providerId?: StringFilter<"CasinoGame"> | string
    providerGameId?: StringFilter<"CasinoGame"> | string
    name?: StringFilter<"CasinoGame"> | string
    category?: EnumCasinoGameCategoryFilter<"CasinoGame"> | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFilter<"CasinoGame"> | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFilter<"CasinoGame"> | $Enums.CasinoGameStatus
    rtp?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    volatility?: StringNullableFilter<"CasinoGame"> | string | null
    minBet?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: DecimalNullableFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    lines?: IntNullableFilter<"CasinoGame"> | number | null
    reels?: IntNullableFilter<"CasinoGame"> | number | null
    hasFreeSpins?: BoolFilter<"CasinoGame"> | boolean
    hasJackpot?: BoolFilter<"CasinoGame"> | boolean
    hasBonusBuy?: BoolFilter<"CasinoGame"> | boolean
    hasLiveDealer?: BoolFilter<"CasinoGame"> | boolean
    gameConfig?: JsonNullableFilter<"CasinoGame">
    thumbUrl?: StringNullableFilter<"CasinoGame"> | string | null
    bannerUrl?: StringNullableFilter<"CasinoGame"> | string | null
    lobbyTags?: StringNullableListFilter<"CasinoGame">
    languages?: StringNullableListFilter<"CasinoGame">
    countriesBlocked?: StringNullableListFilter<"CasinoGame">
    isNew?: BoolFilter<"CasinoGame"> | boolean
    isHot?: BoolFilter<"CasinoGame"> | boolean
    isFeatured?: BoolFilter<"CasinoGame"> | boolean
    popularTrendScore?: IntNullableFilter<"CasinoGame"> | number | null
    totalRoundsPlayed?: BigIntFilter<"CasinoGame"> | bigint | number
    totalWagered?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    lastWinAt?: DateTimeNullableFilter<"CasinoGame"> | Date | string | null
    seededHouseEdgePercent?: DecimalNullableFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: StringNullableFilter<"CasinoGame"> | string | null
    createdBy?: StringNullableFilter<"CasinoGame"> | string | null
    createdAt?: DateTimeFilter<"CasinoGame"> | Date | string
    updatedAt?: DateTimeFilter<"CasinoGame"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CasinoGame"> | Date | string | null
    favorites?: CasinoGameFavoriteListRelationFilter
    sessions?: CasinoSessionListRelationFilter
    bets?: CasinoBetListRelationFilter
  }, "id" | "slug" | "providerId_providerGameId">

  export type CasinoGameOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerGameId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    rtp?: SortOrder
    volatility?: SortOrderInput | SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrderInput | SortOrder
    lines?: SortOrderInput | SortOrder
    reels?: SortOrderInput | SortOrder
    hasFreeSpins?: SortOrder
    hasJackpot?: SortOrder
    hasBonusBuy?: SortOrder
    hasLiveDealer?: SortOrder
    gameConfig?: SortOrderInput | SortOrder
    thumbUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    lobbyTags?: SortOrder
    languages?: SortOrder
    countriesBlocked?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isFeatured?: SortOrder
    popularTrendScore?: SortOrderInput | SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    lastWinAt?: SortOrderInput | SortOrder
    seededHouseEdgePercent?: SortOrderInput | SortOrder
    providerUrlDeepLink?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CasinoGameCountOrderByAggregateInput
    _avg?: CasinoGameAvgOrderByAggregateInput
    _max?: CasinoGameMaxOrderByAggregateInput
    _min?: CasinoGameMinOrderByAggregateInput
    _sum?: CasinoGameSumOrderByAggregateInput
  }

  export type CasinoGameScalarWhereWithAggregatesInput = {
    AND?: CasinoGameScalarWhereWithAggregatesInput | CasinoGameScalarWhereWithAggregatesInput[]
    OR?: CasinoGameScalarWhereWithAggregatesInput[]
    NOT?: CasinoGameScalarWhereWithAggregatesInput | CasinoGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoGame"> | string
    providerId?: StringWithAggregatesFilter<"CasinoGame"> | string
    providerGameId?: StringWithAggregatesFilter<"CasinoGame"> | string
    name?: StringWithAggregatesFilter<"CasinoGame"> | string
    slug?: StringWithAggregatesFilter<"CasinoGame"> | string
    category?: EnumCasinoGameCategoryWithAggregatesFilter<"CasinoGame"> | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderWithAggregatesFilter<"CasinoGame"> | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusWithAggregatesFilter<"CasinoGame"> | $Enums.CasinoGameStatus
    rtp?: DecimalWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    volatility?: StringNullableWithAggregatesFilter<"CasinoGame"> | string | null
    minBet?: DecimalWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: DecimalNullableWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    lines?: IntNullableWithAggregatesFilter<"CasinoGame"> | number | null
    reels?: IntNullableWithAggregatesFilter<"CasinoGame"> | number | null
    hasFreeSpins?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    hasJackpot?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    hasBonusBuy?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    hasLiveDealer?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    gameConfig?: JsonNullableWithAggregatesFilter<"CasinoGame">
    thumbUrl?: StringNullableWithAggregatesFilter<"CasinoGame"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"CasinoGame"> | string | null
    lobbyTags?: StringNullableListFilter<"CasinoGame">
    languages?: StringNullableListFilter<"CasinoGame">
    countriesBlocked?: StringNullableListFilter<"CasinoGame">
    isNew?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    isHot?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"CasinoGame"> | boolean
    popularTrendScore?: IntNullableWithAggregatesFilter<"CasinoGame"> | number | null
    totalRoundsPlayed?: BigIntWithAggregatesFilter<"CasinoGame"> | bigint | number
    totalWagered?: DecimalWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string
    lastWinAt?: DateTimeNullableWithAggregatesFilter<"CasinoGame"> | Date | string | null
    seededHouseEdgePercent?: DecimalNullableWithAggregatesFilter<"CasinoGame"> | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: StringNullableWithAggregatesFilter<"CasinoGame"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"CasinoGame"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CasinoGame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CasinoGame"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CasinoGame"> | Date | string | null
  }

  export type CasinoGameFavoriteWhereInput = {
    AND?: CasinoGameFavoriteWhereInput | CasinoGameFavoriteWhereInput[]
    OR?: CasinoGameFavoriteWhereInput[]
    NOT?: CasinoGameFavoriteWhereInput | CasinoGameFavoriteWhereInput[]
    id?: StringFilter<"CasinoGameFavorite"> | string
    userId?: StringFilter<"CasinoGameFavorite"> | string
    gameId?: StringFilter<"CasinoGameFavorite"> | string
    favoritedAt?: DateTimeFilter<"CasinoGameFavorite"> | Date | string
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
  }

  export type CasinoGameFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    favoritedAt?: SortOrder
    game?: CasinoGameOrderByWithRelationInput
  }

  export type CasinoGameFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameId?: CasinoGameFavoriteUserIdGameIdCompoundUniqueInput
    AND?: CasinoGameFavoriteWhereInput | CasinoGameFavoriteWhereInput[]
    OR?: CasinoGameFavoriteWhereInput[]
    NOT?: CasinoGameFavoriteWhereInput | CasinoGameFavoriteWhereInput[]
    userId?: StringFilter<"CasinoGameFavorite"> | string
    gameId?: StringFilter<"CasinoGameFavorite"> | string
    favoritedAt?: DateTimeFilter<"CasinoGameFavorite"> | Date | string
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
  }, "id" | "userId_gameId">

  export type CasinoGameFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    favoritedAt?: SortOrder
    _count?: CasinoGameFavoriteCountOrderByAggregateInput
    _max?: CasinoGameFavoriteMaxOrderByAggregateInput
    _min?: CasinoGameFavoriteMinOrderByAggregateInput
  }

  export type CasinoGameFavoriteScalarWhereWithAggregatesInput = {
    AND?: CasinoGameFavoriteScalarWhereWithAggregatesInput | CasinoGameFavoriteScalarWhereWithAggregatesInput[]
    OR?: CasinoGameFavoriteScalarWhereWithAggregatesInput[]
    NOT?: CasinoGameFavoriteScalarWhereWithAggregatesInput | CasinoGameFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoGameFavorite"> | string
    userId?: StringWithAggregatesFilter<"CasinoGameFavorite"> | string
    gameId?: StringWithAggregatesFilter<"CasinoGameFavorite"> | string
    favoritedAt?: DateTimeWithAggregatesFilter<"CasinoGameFavorite"> | Date | string
  }

  export type CasinoSessionWhereInput = {
    AND?: CasinoSessionWhereInput | CasinoSessionWhereInput[]
    OR?: CasinoSessionWhereInput[]
    NOT?: CasinoSessionWhereInput | CasinoSessionWhereInput[]
    id?: StringFilter<"CasinoSession"> | string
    userId?: StringFilter<"CasinoSession"> | string
    gameId?: StringFilter<"CasinoSession"> | string
    playerToken?: StringNullableFilter<"CasinoSession"> | string | null
    sessionStatus?: EnumCasinoSessionStatusFilter<"CasinoSession"> | $Enums.CasinoSessionStatus
    providerSessionReference?: StringNullableFilter<"CasinoSession"> | string | null
    walletId?: StringNullableFilter<"CasinoSession"> | string | null
    currency?: StringFilter<"CasinoSession"> | string
    startedAt?: DateTimeFilter<"CasinoSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CasinoSession"> | Date | string | null
    totalRounds?: IntFilter<"CasinoSession"> | number
    totalWagered?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: DecimalNullableFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"CasinoSession"> | string | null
    device?: StringNullableFilter<"CasinoSession"> | string | null
    userAgent?: StringNullableFilter<"CasinoSession"> | string | null
    geoCountry?: StringNullableFilter<"CasinoSession"> | string | null
    closedReason?: StringNullableFilter<"CasinoSession"> | string | null
    closedBy?: StringNullableFilter<"CasinoSession"> | string | null
    correlationId?: StringNullableFilter<"CasinoSession"> | string | null
    playerBalanceSnapshots?: JsonNullableFilter<"CasinoSession">
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
    bets?: CasinoBetListRelationFilter
  }

  export type CasinoSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playerToken?: SortOrderInput | SortOrder
    sessionStatus?: SortOrder
    providerSessionReference?: SortOrderInput | SortOrder
    walletId?: SortOrderInput | SortOrder
    currency?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    geoCountry?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    closedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    playerBalanceSnapshots?: SortOrderInput | SortOrder
    game?: CasinoGameOrderByWithRelationInput
    bets?: CasinoBetOrderByRelationAggregateInput
  }

  export type CasinoSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerToken?: string
    AND?: CasinoSessionWhereInput | CasinoSessionWhereInput[]
    OR?: CasinoSessionWhereInput[]
    NOT?: CasinoSessionWhereInput | CasinoSessionWhereInput[]
    userId?: StringFilter<"CasinoSession"> | string
    gameId?: StringFilter<"CasinoSession"> | string
    sessionStatus?: EnumCasinoSessionStatusFilter<"CasinoSession"> | $Enums.CasinoSessionStatus
    providerSessionReference?: StringNullableFilter<"CasinoSession"> | string | null
    walletId?: StringNullableFilter<"CasinoSession"> | string | null
    currency?: StringFilter<"CasinoSession"> | string
    startedAt?: DateTimeFilter<"CasinoSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CasinoSession"> | Date | string | null
    totalRounds?: IntFilter<"CasinoSession"> | number
    totalWagered?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: DecimalNullableFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"CasinoSession"> | string | null
    device?: StringNullableFilter<"CasinoSession"> | string | null
    userAgent?: StringNullableFilter<"CasinoSession"> | string | null
    geoCountry?: StringNullableFilter<"CasinoSession"> | string | null
    closedReason?: StringNullableFilter<"CasinoSession"> | string | null
    closedBy?: StringNullableFilter<"CasinoSession"> | string | null
    correlationId?: StringNullableFilter<"CasinoSession"> | string | null
    playerBalanceSnapshots?: JsonNullableFilter<"CasinoSession">
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
    bets?: CasinoBetListRelationFilter
  }, "id" | "playerToken">

  export type CasinoSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playerToken?: SortOrderInput | SortOrder
    sessionStatus?: SortOrder
    providerSessionReference?: SortOrderInput | SortOrder
    walletId?: SortOrderInput | SortOrder
    currency?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    geoCountry?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    closedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    playerBalanceSnapshots?: SortOrderInput | SortOrder
    _count?: CasinoSessionCountOrderByAggregateInput
    _avg?: CasinoSessionAvgOrderByAggregateInput
    _max?: CasinoSessionMaxOrderByAggregateInput
    _min?: CasinoSessionMinOrderByAggregateInput
    _sum?: CasinoSessionSumOrderByAggregateInput
  }

  export type CasinoSessionScalarWhereWithAggregatesInput = {
    AND?: CasinoSessionScalarWhereWithAggregatesInput | CasinoSessionScalarWhereWithAggregatesInput[]
    OR?: CasinoSessionScalarWhereWithAggregatesInput[]
    NOT?: CasinoSessionScalarWhereWithAggregatesInput | CasinoSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoSession"> | string
    userId?: StringWithAggregatesFilter<"CasinoSession"> | string
    gameId?: StringWithAggregatesFilter<"CasinoSession"> | string
    playerToken?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    sessionStatus?: EnumCasinoSessionStatusWithAggregatesFilter<"CasinoSession"> | $Enums.CasinoSessionStatus
    providerSessionReference?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    walletId?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    currency?: StringWithAggregatesFilter<"CasinoSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"CasinoSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"CasinoSession"> | Date | string | null
    totalRounds?: IntWithAggregatesFilter<"CasinoSession"> | number
    totalWagered?: DecimalWithAggregatesFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalWithAggregatesFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: DecimalNullableWithAggregatesFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    device?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    geoCountry?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    closedReason?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    closedBy?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"CasinoSession"> | string | null
    playerBalanceSnapshots?: JsonNullableWithAggregatesFilter<"CasinoSession">
  }

  export type CasinoBetWhereInput = {
    AND?: CasinoBetWhereInput | CasinoBetWhereInput[]
    OR?: CasinoBetWhereInput[]
    NOT?: CasinoBetWhereInput | CasinoBetWhereInput[]
    id?: StringFilter<"CasinoBet"> | string
    userId?: StringFilter<"CasinoBet"> | string
    sessionId?: StringNullableFilter<"CasinoBet"> | string | null
    gameId?: StringFilter<"CasinoBet"> | string
    providerRef?: StringNullableFilter<"CasinoBet"> | string | null
    roundRef?: StringNullableFilter<"CasinoBet"> | string | null
    status?: EnumCasinoBetStatusFilter<"CasinoBet"> | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFilter<"CasinoBet"> | string
    linesBet?: IntNullableFilter<"CasinoBet"> | number | null
    stakePerLine?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    netResult?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    betType?: StringNullableFilter<"CasinoBet"> | string | null
    jackpotContribution?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFilter<"CasinoBet"> | Date | string
    settledAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
    settledBy?: StringNullableFilter<"CasinoBet"> | string | null
    initialSeed?: StringNullableFilter<"CasinoBet"> | string | null
    resultSeed?: StringNullableFilter<"CasinoBet"> | string | null
    finalRevealSnapshot?: JsonNullableFilter<"CasinoBet">
    resultSymbols?: JsonNullableFilter<"CasinoBet">
    winningLines?: JsonNullableFilter<"CasinoBet">
    freeSpinsTriggered?: IntNullableFilter<"CasinoBet"> | number | null
    bonusRoundTriggered?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleFeatureUsed?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleResult?: StringNullableFilter<"CasinoBet"> | string | null
    correlationId?: StringNullableFilter<"CasinoBet"> | string | null
    providerRawRequest?: JsonNullableFilter<"CasinoBet">
    providerRawResponse?: JsonNullableFilter<"CasinoBet">
    deletedAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
    session?: XOR<CasinoSessionNullableRelationFilter, CasinoSessionWhereInput> | null
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
  }

  export type CasinoBetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    roundRef?: SortOrderInput | SortOrder
    status?: SortOrder
    wageredAmount?: SortOrder
    wageredCurrency?: SortOrder
    linesBet?: SortOrderInput | SortOrder
    stakePerLine?: SortOrderInput | SortOrder
    payoutAmount?: SortOrderInput | SortOrder
    netResult?: SortOrderInput | SortOrder
    betType?: SortOrderInput | SortOrder
    jackpotContribution?: SortOrderInput | SortOrder
    jackpotWin?: SortOrderInput | SortOrder
    placedAt?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledBy?: SortOrderInput | SortOrder
    initialSeed?: SortOrderInput | SortOrder
    resultSeed?: SortOrderInput | SortOrder
    finalRevealSnapshot?: SortOrderInput | SortOrder
    resultSymbols?: SortOrderInput | SortOrder
    winningLines?: SortOrderInput | SortOrder
    freeSpinsTriggered?: SortOrderInput | SortOrder
    bonusRoundTriggered?: SortOrderInput | SortOrder
    gambleFeatureUsed?: SortOrderInput | SortOrder
    gambleResult?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    providerRawRequest?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    session?: CasinoSessionOrderByWithRelationInput
    game?: CasinoGameOrderByWithRelationInput
  }

  export type CasinoBetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerRef?: string
    AND?: CasinoBetWhereInput | CasinoBetWhereInput[]
    OR?: CasinoBetWhereInput[]
    NOT?: CasinoBetWhereInput | CasinoBetWhereInput[]
    userId?: StringFilter<"CasinoBet"> | string
    sessionId?: StringNullableFilter<"CasinoBet"> | string | null
    gameId?: StringFilter<"CasinoBet"> | string
    roundRef?: StringNullableFilter<"CasinoBet"> | string | null
    status?: EnumCasinoBetStatusFilter<"CasinoBet"> | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFilter<"CasinoBet"> | string
    linesBet?: IntNullableFilter<"CasinoBet"> | number | null
    stakePerLine?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    netResult?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    betType?: StringNullableFilter<"CasinoBet"> | string | null
    jackpotContribution?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFilter<"CasinoBet"> | Date | string
    settledAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
    settledBy?: StringNullableFilter<"CasinoBet"> | string | null
    initialSeed?: StringNullableFilter<"CasinoBet"> | string | null
    resultSeed?: StringNullableFilter<"CasinoBet"> | string | null
    finalRevealSnapshot?: JsonNullableFilter<"CasinoBet">
    resultSymbols?: JsonNullableFilter<"CasinoBet">
    winningLines?: JsonNullableFilter<"CasinoBet">
    freeSpinsTriggered?: IntNullableFilter<"CasinoBet"> | number | null
    bonusRoundTriggered?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleFeatureUsed?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleResult?: StringNullableFilter<"CasinoBet"> | string | null
    correlationId?: StringNullableFilter<"CasinoBet"> | string | null
    providerRawRequest?: JsonNullableFilter<"CasinoBet">
    providerRawResponse?: JsonNullableFilter<"CasinoBet">
    deletedAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
    session?: XOR<CasinoSessionNullableRelationFilter, CasinoSessionWhereInput> | null
    game?: XOR<CasinoGameRelationFilter, CasinoGameWhereInput>
  }, "id" | "providerRef">

  export type CasinoBetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    providerRef?: SortOrderInput | SortOrder
    roundRef?: SortOrderInput | SortOrder
    status?: SortOrder
    wageredAmount?: SortOrder
    wageredCurrency?: SortOrder
    linesBet?: SortOrderInput | SortOrder
    stakePerLine?: SortOrderInput | SortOrder
    payoutAmount?: SortOrderInput | SortOrder
    netResult?: SortOrderInput | SortOrder
    betType?: SortOrderInput | SortOrder
    jackpotContribution?: SortOrderInput | SortOrder
    jackpotWin?: SortOrderInput | SortOrder
    placedAt?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    settledBy?: SortOrderInput | SortOrder
    initialSeed?: SortOrderInput | SortOrder
    resultSeed?: SortOrderInput | SortOrder
    finalRevealSnapshot?: SortOrderInput | SortOrder
    resultSymbols?: SortOrderInput | SortOrder
    winningLines?: SortOrderInput | SortOrder
    freeSpinsTriggered?: SortOrderInput | SortOrder
    bonusRoundTriggered?: SortOrderInput | SortOrder
    gambleFeatureUsed?: SortOrderInput | SortOrder
    gambleResult?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    providerRawRequest?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CasinoBetCountOrderByAggregateInput
    _avg?: CasinoBetAvgOrderByAggregateInput
    _max?: CasinoBetMaxOrderByAggregateInput
    _min?: CasinoBetMinOrderByAggregateInput
    _sum?: CasinoBetSumOrderByAggregateInput
  }

  export type CasinoBetScalarWhereWithAggregatesInput = {
    AND?: CasinoBetScalarWhereWithAggregatesInput | CasinoBetScalarWhereWithAggregatesInput[]
    OR?: CasinoBetScalarWhereWithAggregatesInput[]
    NOT?: CasinoBetScalarWhereWithAggregatesInput | CasinoBetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoBet"> | string
    userId?: StringWithAggregatesFilter<"CasinoBet"> | string
    sessionId?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    gameId?: StringWithAggregatesFilter<"CasinoBet"> | string
    providerRef?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    roundRef?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    status?: EnumCasinoBetStatusWithAggregatesFilter<"CasinoBet"> | $Enums.CasinoBetStatus
    wageredAmount?: DecimalWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringWithAggregatesFilter<"CasinoBet"> | string
    linesBet?: IntNullableWithAggregatesFilter<"CasinoBet"> | number | null
    stakePerLine?: DecimalNullableWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: DecimalNullableWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    netResult?: DecimalNullableWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    betType?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    jackpotContribution?: DecimalNullableWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: DecimalNullableWithAggregatesFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeWithAggregatesFilter<"CasinoBet"> | Date | string
    settledAt?: DateTimeNullableWithAggregatesFilter<"CasinoBet"> | Date | string | null
    settledBy?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    initialSeed?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    resultSeed?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    finalRevealSnapshot?: JsonNullableWithAggregatesFilter<"CasinoBet">
    resultSymbols?: JsonNullableWithAggregatesFilter<"CasinoBet">
    winningLines?: JsonNullableWithAggregatesFilter<"CasinoBet">
    freeSpinsTriggered?: IntNullableWithAggregatesFilter<"CasinoBet"> | number | null
    bonusRoundTriggered?: BoolNullableWithAggregatesFilter<"CasinoBet"> | boolean | null
    gambleFeatureUsed?: BoolNullableWithAggregatesFilter<"CasinoBet"> | boolean | null
    gambleResult?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"CasinoBet"> | string | null
    providerRawRequest?: JsonNullableWithAggregatesFilter<"CasinoBet">
    providerRawResponse?: JsonNullableWithAggregatesFilter<"CasinoBet">
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CasinoBet"> | Date | string | null
  }

  export type CasinoJackpotWhereInput = {
    AND?: CasinoJackpotWhereInput | CasinoJackpotWhereInput[]
    OR?: CasinoJackpotWhereInput[]
    NOT?: CasinoJackpotWhereInput | CasinoJackpotWhereInput[]
    id?: StringFilter<"CasinoJackpot"> | string
    type?: EnumCasinoJackpotTypeFilter<"CasinoJackpot"> | $Enums.CasinoJackpotType
    name?: StringFilter<"CasinoJackpot"> | string
    currency?: StringFilter<"CasinoJackpot"> | string
    currentAmount?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    maxCapAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    triggerAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: DateTimeNullableFilter<"CasinoJackpot"> | Date | string | null
    lastWinAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: StringNullableFilter<"CasinoJackpot"> | string | null
    triggerChancePerMillion?: IntNullableFilter<"CasinoJackpot"> | number | null
    enabled?: BoolFilter<"CasinoJackpot"> | boolean
    gameIds?: StringNullableListFilter<"CasinoJackpot">
    createdAt?: DateTimeFilter<"CasinoJackpot"> | Date | string
    updatedAt?: DateTimeFilter<"CasinoJackpot"> | Date | string
  }

  export type CasinoJackpotOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrderInput | SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrderInput | SortOrder
    lastWinAt?: SortOrderInput | SortOrder
    lastWinAmount?: SortOrderInput | SortOrder
    lastWinnerId?: SortOrderInput | SortOrder
    triggerChancePerMillion?: SortOrderInput | SortOrder
    enabled?: SortOrder
    gameIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasinoJackpotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CasinoJackpotWhereInput | CasinoJackpotWhereInput[]
    OR?: CasinoJackpotWhereInput[]
    NOT?: CasinoJackpotWhereInput | CasinoJackpotWhereInput[]
    type?: EnumCasinoJackpotTypeFilter<"CasinoJackpot"> | $Enums.CasinoJackpotType
    name?: StringFilter<"CasinoJackpot"> | string
    currency?: StringFilter<"CasinoJackpot"> | string
    currentAmount?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    maxCapAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    triggerAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: DateTimeNullableFilter<"CasinoJackpot"> | Date | string | null
    lastWinAmount?: DecimalNullableFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: StringNullableFilter<"CasinoJackpot"> | string | null
    triggerChancePerMillion?: IntNullableFilter<"CasinoJackpot"> | number | null
    enabled?: BoolFilter<"CasinoJackpot"> | boolean
    gameIds?: StringNullableListFilter<"CasinoJackpot">
    createdAt?: DateTimeFilter<"CasinoJackpot"> | Date | string
    updatedAt?: DateTimeFilter<"CasinoJackpot"> | Date | string
  }, "id">

  export type CasinoJackpotOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrderInput | SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrderInput | SortOrder
    lastWinAt?: SortOrderInput | SortOrder
    lastWinAmount?: SortOrderInput | SortOrder
    lastWinnerId?: SortOrderInput | SortOrder
    triggerChancePerMillion?: SortOrderInput | SortOrder
    enabled?: SortOrder
    gameIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CasinoJackpotCountOrderByAggregateInput
    _avg?: CasinoJackpotAvgOrderByAggregateInput
    _max?: CasinoJackpotMaxOrderByAggregateInput
    _min?: CasinoJackpotMinOrderByAggregateInput
    _sum?: CasinoJackpotSumOrderByAggregateInput
  }

  export type CasinoJackpotScalarWhereWithAggregatesInput = {
    AND?: CasinoJackpotScalarWhereWithAggregatesInput | CasinoJackpotScalarWhereWithAggregatesInput[]
    OR?: CasinoJackpotScalarWhereWithAggregatesInput[]
    NOT?: CasinoJackpotScalarWhereWithAggregatesInput | CasinoJackpotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CasinoJackpot"> | string
    type?: EnumCasinoJackpotTypeWithAggregatesFilter<"CasinoJackpot"> | $Enums.CasinoJackpotType
    name?: StringWithAggregatesFilter<"CasinoJackpot"> | string
    currency?: StringWithAggregatesFilter<"CasinoJackpot"> | string
    currentAmount?: DecimalWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    maxCapAmount?: DecimalNullableWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string
    triggerAmount?: DecimalNullableWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: DateTimeNullableWithAggregatesFilter<"CasinoJackpot"> | Date | string | null
    lastWinAmount?: DecimalNullableWithAggregatesFilter<"CasinoJackpot"> | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: StringNullableWithAggregatesFilter<"CasinoJackpot"> | string | null
    triggerChancePerMillion?: IntNullableWithAggregatesFilter<"CasinoJackpot"> | number | null
    enabled?: BoolWithAggregatesFilter<"CasinoJackpot"> | boolean
    gameIds?: StringNullableListFilter<"CasinoJackpot">
    createdAt?: DateTimeWithAggregatesFilter<"CasinoJackpot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CasinoJackpot"> | Date | string
  }

  export type CasinoGameCreateInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteCreateNestedManyWithoutGameInput
    sessions?: CasinoSessionCreateNestedManyWithoutGameInput
    bets?: CasinoBetCreateNestedManyWithoutGameInput
  }

  export type CasinoGameUncheckedCreateInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteUncheckedCreateNestedManyWithoutGameInput
    sessions?: CasinoSessionUncheckedCreateNestedManyWithoutGameInput
    bets?: CasinoBetUncheckedCreateNestedManyWithoutGameInput
  }

  export type CasinoGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUpdateManyWithoutGameNestedInput
    sessions?: CasinoSessionUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUncheckedUpdateManyWithoutGameNestedInput
    sessions?: CasinoSessionUncheckedUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameCreateManyInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CasinoGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoGameFavoriteCreateInput = {
    id?: string
    userId: string
    favoritedAt?: Date | string
    game: CasinoGameCreateNestedOneWithoutFavoritesInput
  }

  export type CasinoGameFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    gameId: string
    favoritedAt?: Date | string
  }

  export type CasinoGameFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: CasinoGameUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type CasinoGameFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoGameFavoriteCreateManyInput = {
    id?: string
    userId: string
    gameId: string
    favoritedAt?: Date | string
  }

  export type CasinoGameFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoGameFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoSessionCreateInput = {
    id?: string
    userId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    game: CasinoGameCreateNestedOneWithoutSessionsInput
    bets?: CasinoBetCreateNestedManyWithoutSessionInput
  }

  export type CasinoSessionUncheckedCreateInput = {
    id?: string
    userId: string
    gameId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CasinoSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    game?: CasinoGameUpdateOneRequiredWithoutSessionsNestedInput
    bets?: CasinoBetUpdateManyWithoutSessionNestedInput
  }

  export type CasinoSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CasinoSessionCreateManyInput = {
    id?: string
    userId: string
    gameId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoBetCreateInput = {
    id?: string
    userId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
    session?: CasinoSessionCreateNestedOneWithoutBetsInput
    game: CasinoGameCreateNestedOneWithoutBetsInput
  }

  export type CasinoBetUncheckedCreateInput = {
    id?: string
    userId: string
    sessionId?: string | null
    gameId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoBetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: CasinoSessionUpdateOneWithoutBetsNestedInput
    game?: CasinoGameUpdateOneRequiredWithoutBetsNestedInput
  }

  export type CasinoBetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoBetCreateManyInput = {
    id?: string
    userId: string
    sessionId?: string | null
    gameId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoBetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoBetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoJackpotCreateInput = {
    id?: string
    type: $Enums.CasinoJackpotType
    name: string
    currency?: string
    currentAmount: Decimal | DecimalJsLike | number | string
    seedAmount: Decimal | DecimalJsLike | number | string
    maxCapAmount?: Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: Decimal | DecimalJsLike | number | string
    triggerAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinAt?: Date | string | null
    lastWinAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: string | null
    triggerChancePerMillion?: number | null
    enabled?: boolean
    gameIds?: CasinoJackpotCreategameIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasinoJackpotUncheckedCreateInput = {
    id?: string
    type: $Enums.CasinoJackpotType
    name: string
    currency?: string
    currentAmount: Decimal | DecimalJsLike | number | string
    seedAmount: Decimal | DecimalJsLike | number | string
    maxCapAmount?: Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: Decimal | DecimalJsLike | number | string
    triggerAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinAt?: Date | string | null
    lastWinAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: string | null
    triggerChancePerMillion?: number | null
    enabled?: boolean
    gameIds?: CasinoJackpotCreategameIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasinoJackpotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCasinoJackpotTypeFieldUpdateOperationsInput | $Enums.CasinoJackpotType
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxCapAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    triggerAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWinAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    triggerChancePerMillion?: NullableIntFieldUpdateOperationsInput | number | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gameIds?: CasinoJackpotUpdategameIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoJackpotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCasinoJackpotTypeFieldUpdateOperationsInput | $Enums.CasinoJackpotType
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxCapAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    triggerAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWinAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    triggerChancePerMillion?: NullableIntFieldUpdateOperationsInput | number | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gameIds?: CasinoJackpotUpdategameIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoJackpotCreateManyInput = {
    id?: string
    type: $Enums.CasinoJackpotType
    name: string
    currency?: string
    currentAmount: Decimal | DecimalJsLike | number | string
    seedAmount: Decimal | DecimalJsLike | number | string
    maxCapAmount?: Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: Decimal | DecimalJsLike | number | string
    triggerAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinAt?: Date | string | null
    lastWinAmount?: Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: string | null
    triggerChancePerMillion?: number | null
    enabled?: boolean
    gameIds?: CasinoJackpotCreategameIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CasinoJackpotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCasinoJackpotTypeFieldUpdateOperationsInput | $Enums.CasinoJackpotType
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxCapAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    triggerAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWinAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    triggerChancePerMillion?: NullableIntFieldUpdateOperationsInput | number | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gameIds?: CasinoJackpotUpdategameIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoJackpotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumCasinoJackpotTypeFieldUpdateOperationsInput | $Enums.CasinoJackpotType
    name?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    currentAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxCapAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    contributionPercentOfBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    triggerAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastWinAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    triggerChancePerMillion?: NullableIntFieldUpdateOperationsInput | number | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    gameIds?: CasinoJackpotUpdategameIdsInput | string[]
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

  export type EnumCasinoGameCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameCategory | EnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameCategoryFilter<$PrismaModel> | $Enums.CasinoGameCategory
  }

  export type EnumCasinoProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoProvider | EnumCasinoProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoProviderFilter<$PrismaModel> | $Enums.CasinoProvider
  }

  export type EnumCasinoGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameStatus | EnumCasinoGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameStatusFilter<$PrismaModel> | $Enums.CasinoGameStatus
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type CasinoGameFavoriteListRelationFilter = {
    every?: CasinoGameFavoriteWhereInput
    some?: CasinoGameFavoriteWhereInput
    none?: CasinoGameFavoriteWhereInput
  }

  export type CasinoSessionListRelationFilter = {
    every?: CasinoSessionWhereInput
    some?: CasinoSessionWhereInput
    none?: CasinoSessionWhereInput
  }

  export type CasinoBetListRelationFilter = {
    every?: CasinoBetWhereInput
    some?: CasinoBetWhereInput
    none?: CasinoBetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CasinoGameFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasinoSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasinoBetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CasinoGameProviderIdProviderGameIdCompoundUniqueInput = {
    providerId: string
    providerGameId: string
  }

  export type CasinoGameCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerGameId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    rtp?: SortOrder
    volatility?: SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrder
    lines?: SortOrder
    reels?: SortOrder
    hasFreeSpins?: SortOrder
    hasJackpot?: SortOrder
    hasBonusBuy?: SortOrder
    hasLiveDealer?: SortOrder
    gameConfig?: SortOrder
    thumbUrl?: SortOrder
    bannerUrl?: SortOrder
    lobbyTags?: SortOrder
    languages?: SortOrder
    countriesBlocked?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isFeatured?: SortOrder
    popularTrendScore?: SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    lastWinAt?: SortOrder
    seededHouseEdgePercent?: SortOrder
    providerUrlDeepLink?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoGameAvgOrderByAggregateInput = {
    rtp?: SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrder
    lines?: SortOrder
    reels?: SortOrder
    popularTrendScore?: SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    seededHouseEdgePercent?: SortOrder
  }

  export type CasinoGameMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerGameId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    rtp?: SortOrder
    volatility?: SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrder
    lines?: SortOrder
    reels?: SortOrder
    hasFreeSpins?: SortOrder
    hasJackpot?: SortOrder
    hasBonusBuy?: SortOrder
    hasLiveDealer?: SortOrder
    thumbUrl?: SortOrder
    bannerUrl?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isFeatured?: SortOrder
    popularTrendScore?: SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    lastWinAt?: SortOrder
    seededHouseEdgePercent?: SortOrder
    providerUrlDeepLink?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoGameMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerGameId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    provider?: SortOrder
    status?: SortOrder
    rtp?: SortOrder
    volatility?: SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrder
    lines?: SortOrder
    reels?: SortOrder
    hasFreeSpins?: SortOrder
    hasJackpot?: SortOrder
    hasBonusBuy?: SortOrder
    hasLiveDealer?: SortOrder
    thumbUrl?: SortOrder
    bannerUrl?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isFeatured?: SortOrder
    popularTrendScore?: SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    lastWinAt?: SortOrder
    seededHouseEdgePercent?: SortOrder
    providerUrlDeepLink?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoGameSumOrderByAggregateInput = {
    rtp?: SortOrder
    minBet?: SortOrder
    maxBet?: SortOrder
    maxWinMultiplier?: SortOrder
    lines?: SortOrder
    reels?: SortOrder
    popularTrendScore?: SortOrder
    totalRoundsPlayed?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    seededHouseEdgePercent?: SortOrder
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

  export type EnumCasinoGameCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameCategory | EnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CasinoGameCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoGameCategoryFilter<$PrismaModel>
    _max?: NestedEnumCasinoGameCategoryFilter<$PrismaModel>
  }

  export type EnumCasinoProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoProvider | EnumCasinoProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoProviderWithAggregatesFilter<$PrismaModel> | $Enums.CasinoProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoProviderFilter<$PrismaModel>
    _max?: NestedEnumCasinoProviderFilter<$PrismaModel>
  }

  export type EnumCasinoGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameStatus | EnumCasinoGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoGameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoGameStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoGameStatusFilter<$PrismaModel>
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type CasinoGameRelationFilter = {
    is?: CasinoGameWhereInput
    isNot?: CasinoGameWhereInput
  }

  export type CasinoGameFavoriteUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: string
  }

  export type CasinoGameFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type CasinoGameFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type CasinoGameFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    favoritedAt?: SortOrder
  }

  export type EnumCasinoSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoSessionStatus | EnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoSessionStatusFilter<$PrismaModel> | $Enums.CasinoSessionStatus
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

  export type CasinoSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playerToken?: SortOrder
    sessionStatus?: SortOrder
    providerSessionReference?: SortOrder
    walletId?: SortOrder
    currency?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    geoCountry?: SortOrder
    closedReason?: SortOrder
    closedBy?: SortOrder
    correlationId?: SortOrder
    playerBalanceSnapshots?: SortOrder
  }

  export type CasinoSessionAvgOrderByAggregateInput = {
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrder
  }

  export type CasinoSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playerToken?: SortOrder
    sessionStatus?: SortOrder
    providerSessionReference?: SortOrder
    walletId?: SortOrder
    currency?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    geoCountry?: SortOrder
    closedReason?: SortOrder
    closedBy?: SortOrder
    correlationId?: SortOrder
  }

  export type CasinoSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    playerToken?: SortOrder
    sessionStatus?: SortOrder
    providerSessionReference?: SortOrder
    walletId?: SortOrder
    currency?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrder
    ipAddress?: SortOrder
    device?: SortOrder
    userAgent?: SortOrder
    geoCountry?: SortOrder
    closedReason?: SortOrder
    closedBy?: SortOrder
    correlationId?: SortOrder
  }

  export type CasinoSessionSumOrderByAggregateInput = {
    totalRounds?: SortOrder
    totalWagered?: SortOrder
    totalPayout?: SortOrder
    maxWinDuringSession?: SortOrder
  }

  export type EnumCasinoSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoSessionStatus | EnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoSessionStatusFilter<$PrismaModel>
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

  export type EnumCasinoBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoBetStatus | EnumCasinoBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoBetStatusFilter<$PrismaModel> | $Enums.CasinoBetStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CasinoSessionNullableRelationFilter = {
    is?: CasinoSessionWhereInput | null
    isNot?: CasinoSessionWhereInput | null
  }

  export type CasinoBetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    gameId?: SortOrder
    providerRef?: SortOrder
    roundRef?: SortOrder
    status?: SortOrder
    wageredAmount?: SortOrder
    wageredCurrency?: SortOrder
    linesBet?: SortOrder
    stakePerLine?: SortOrder
    payoutAmount?: SortOrder
    netResult?: SortOrder
    betType?: SortOrder
    jackpotContribution?: SortOrder
    jackpotWin?: SortOrder
    placedAt?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    initialSeed?: SortOrder
    resultSeed?: SortOrder
    finalRevealSnapshot?: SortOrder
    resultSymbols?: SortOrder
    winningLines?: SortOrder
    freeSpinsTriggered?: SortOrder
    bonusRoundTriggered?: SortOrder
    gambleFeatureUsed?: SortOrder
    gambleResult?: SortOrder
    correlationId?: SortOrder
    providerRawRequest?: SortOrder
    providerRawResponse?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoBetAvgOrderByAggregateInput = {
    wageredAmount?: SortOrder
    linesBet?: SortOrder
    stakePerLine?: SortOrder
    payoutAmount?: SortOrder
    netResult?: SortOrder
    jackpotContribution?: SortOrder
    jackpotWin?: SortOrder
    freeSpinsTriggered?: SortOrder
  }

  export type CasinoBetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    gameId?: SortOrder
    providerRef?: SortOrder
    roundRef?: SortOrder
    status?: SortOrder
    wageredAmount?: SortOrder
    wageredCurrency?: SortOrder
    linesBet?: SortOrder
    stakePerLine?: SortOrder
    payoutAmount?: SortOrder
    netResult?: SortOrder
    betType?: SortOrder
    jackpotContribution?: SortOrder
    jackpotWin?: SortOrder
    placedAt?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    initialSeed?: SortOrder
    resultSeed?: SortOrder
    freeSpinsTriggered?: SortOrder
    bonusRoundTriggered?: SortOrder
    gambleFeatureUsed?: SortOrder
    gambleResult?: SortOrder
    correlationId?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoBetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    gameId?: SortOrder
    providerRef?: SortOrder
    roundRef?: SortOrder
    status?: SortOrder
    wageredAmount?: SortOrder
    wageredCurrency?: SortOrder
    linesBet?: SortOrder
    stakePerLine?: SortOrder
    payoutAmount?: SortOrder
    netResult?: SortOrder
    betType?: SortOrder
    jackpotContribution?: SortOrder
    jackpotWin?: SortOrder
    placedAt?: SortOrder
    settledAt?: SortOrder
    settledBy?: SortOrder
    initialSeed?: SortOrder
    resultSeed?: SortOrder
    freeSpinsTriggered?: SortOrder
    bonusRoundTriggered?: SortOrder
    gambleFeatureUsed?: SortOrder
    gambleResult?: SortOrder
    correlationId?: SortOrder
    deletedAt?: SortOrder
  }

  export type CasinoBetSumOrderByAggregateInput = {
    wageredAmount?: SortOrder
    linesBet?: SortOrder
    stakePerLine?: SortOrder
    payoutAmount?: SortOrder
    netResult?: SortOrder
    jackpotContribution?: SortOrder
    jackpotWin?: SortOrder
    freeSpinsTriggered?: SortOrder
  }

  export type EnumCasinoBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoBetStatus | EnumCasinoBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoBetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoBetStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoBetStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumCasinoJackpotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoJackpotType | EnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel> | $Enums.CasinoJackpotType
  }

  export type CasinoJackpotCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrder
    lastWinAt?: SortOrder
    lastWinAmount?: SortOrder
    lastWinnerId?: SortOrder
    triggerChancePerMillion?: SortOrder
    enabled?: SortOrder
    gameIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasinoJackpotAvgOrderByAggregateInput = {
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrder
    lastWinAmount?: SortOrder
    triggerChancePerMillion?: SortOrder
  }

  export type CasinoJackpotMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrder
    lastWinAt?: SortOrder
    lastWinAmount?: SortOrder
    lastWinnerId?: SortOrder
    triggerChancePerMillion?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasinoJackpotMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    currency?: SortOrder
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrder
    lastWinAt?: SortOrder
    lastWinAmount?: SortOrder
    lastWinnerId?: SortOrder
    triggerChancePerMillion?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CasinoJackpotSumOrderByAggregateInput = {
    currentAmount?: SortOrder
    seedAmount?: SortOrder
    maxCapAmount?: SortOrder
    contributionPercentOfBet?: SortOrder
    triggerAmount?: SortOrder
    lastWinAmount?: SortOrder
    triggerChancePerMillion?: SortOrder
  }

  export type EnumCasinoJackpotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoJackpotType | EnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoJackpotTypeWithAggregatesFilter<$PrismaModel> | $Enums.CasinoJackpotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel>
    _max?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel>
  }

  export type CasinoGameCreatelobbyTagsInput = {
    set: string[]
  }

  export type CasinoGameCreatelanguagesInput = {
    set: string[]
  }

  export type CasinoGameCreatecountriesBlockedInput = {
    set: string[]
  }

  export type CasinoGameFavoriteCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput> | CasinoGameFavoriteCreateWithoutGameInput[] | CasinoGameFavoriteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoGameFavoriteCreateOrConnectWithoutGameInput | CasinoGameFavoriteCreateOrConnectWithoutGameInput[]
    createMany?: CasinoGameFavoriteCreateManyGameInputEnvelope
    connect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
  }

  export type CasinoSessionCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput> | CasinoSessionCreateWithoutGameInput[] | CasinoSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutGameInput | CasinoSessionCreateOrConnectWithoutGameInput[]
    createMany?: CasinoSessionCreateManyGameInputEnvelope
    connect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
  }

  export type CasinoBetCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput> | CasinoBetCreateWithoutGameInput[] | CasinoBetUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutGameInput | CasinoBetCreateOrConnectWithoutGameInput[]
    createMany?: CasinoBetCreateManyGameInputEnvelope
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
  }

  export type CasinoGameFavoriteUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput> | CasinoGameFavoriteCreateWithoutGameInput[] | CasinoGameFavoriteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoGameFavoriteCreateOrConnectWithoutGameInput | CasinoGameFavoriteCreateOrConnectWithoutGameInput[]
    createMany?: CasinoGameFavoriteCreateManyGameInputEnvelope
    connect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
  }

  export type CasinoSessionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput> | CasinoSessionCreateWithoutGameInput[] | CasinoSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutGameInput | CasinoSessionCreateOrConnectWithoutGameInput[]
    createMany?: CasinoSessionCreateManyGameInputEnvelope
    connect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
  }

  export type CasinoBetUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput> | CasinoBetCreateWithoutGameInput[] | CasinoBetUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutGameInput | CasinoBetCreateOrConnectWithoutGameInput[]
    createMany?: CasinoBetCreateManyGameInputEnvelope
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCasinoGameCategoryFieldUpdateOperationsInput = {
    set?: $Enums.CasinoGameCategory
  }

  export type EnumCasinoProviderFieldUpdateOperationsInput = {
    set?: $Enums.CasinoProvider
  }

  export type EnumCasinoGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.CasinoGameStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CasinoGameUpdatelobbyTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CasinoGameUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CasinoGameUpdatecountriesBlockedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CasinoGameFavoriteUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput> | CasinoGameFavoriteCreateWithoutGameInput[] | CasinoGameFavoriteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoGameFavoriteCreateOrConnectWithoutGameInput | CasinoGameFavoriteCreateOrConnectWithoutGameInput[]
    upsert?: CasinoGameFavoriteUpsertWithWhereUniqueWithoutGameInput | CasinoGameFavoriteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoGameFavoriteCreateManyGameInputEnvelope
    set?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    disconnect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    delete?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    connect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    update?: CasinoGameFavoriteUpdateWithWhereUniqueWithoutGameInput | CasinoGameFavoriteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoGameFavoriteUpdateManyWithWhereWithoutGameInput | CasinoGameFavoriteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoGameFavoriteScalarWhereInput | CasinoGameFavoriteScalarWhereInput[]
  }

  export type CasinoSessionUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput> | CasinoSessionCreateWithoutGameInput[] | CasinoSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutGameInput | CasinoSessionCreateOrConnectWithoutGameInput[]
    upsert?: CasinoSessionUpsertWithWhereUniqueWithoutGameInput | CasinoSessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoSessionCreateManyGameInputEnvelope
    set?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    disconnect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    delete?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    connect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    update?: CasinoSessionUpdateWithWhereUniqueWithoutGameInput | CasinoSessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoSessionUpdateManyWithWhereWithoutGameInput | CasinoSessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoSessionScalarWhereInput | CasinoSessionScalarWhereInput[]
  }

  export type CasinoBetUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput> | CasinoBetCreateWithoutGameInput[] | CasinoBetUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutGameInput | CasinoBetCreateOrConnectWithoutGameInput[]
    upsert?: CasinoBetUpsertWithWhereUniqueWithoutGameInput | CasinoBetUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoBetCreateManyGameInputEnvelope
    set?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    disconnect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    delete?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    update?: CasinoBetUpdateWithWhereUniqueWithoutGameInput | CasinoBetUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoBetUpdateManyWithWhereWithoutGameInput | CasinoBetUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
  }

  export type CasinoGameFavoriteUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput> | CasinoGameFavoriteCreateWithoutGameInput[] | CasinoGameFavoriteUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoGameFavoriteCreateOrConnectWithoutGameInput | CasinoGameFavoriteCreateOrConnectWithoutGameInput[]
    upsert?: CasinoGameFavoriteUpsertWithWhereUniqueWithoutGameInput | CasinoGameFavoriteUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoGameFavoriteCreateManyGameInputEnvelope
    set?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    disconnect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    delete?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    connect?: CasinoGameFavoriteWhereUniqueInput | CasinoGameFavoriteWhereUniqueInput[]
    update?: CasinoGameFavoriteUpdateWithWhereUniqueWithoutGameInput | CasinoGameFavoriteUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoGameFavoriteUpdateManyWithWhereWithoutGameInput | CasinoGameFavoriteUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoGameFavoriteScalarWhereInput | CasinoGameFavoriteScalarWhereInput[]
  }

  export type CasinoSessionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput> | CasinoSessionCreateWithoutGameInput[] | CasinoSessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutGameInput | CasinoSessionCreateOrConnectWithoutGameInput[]
    upsert?: CasinoSessionUpsertWithWhereUniqueWithoutGameInput | CasinoSessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoSessionCreateManyGameInputEnvelope
    set?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    disconnect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    delete?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    connect?: CasinoSessionWhereUniqueInput | CasinoSessionWhereUniqueInput[]
    update?: CasinoSessionUpdateWithWhereUniqueWithoutGameInput | CasinoSessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoSessionUpdateManyWithWhereWithoutGameInput | CasinoSessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoSessionScalarWhereInput | CasinoSessionScalarWhereInput[]
  }

  export type CasinoBetUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput> | CasinoBetCreateWithoutGameInput[] | CasinoBetUncheckedCreateWithoutGameInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutGameInput | CasinoBetCreateOrConnectWithoutGameInput[]
    upsert?: CasinoBetUpsertWithWhereUniqueWithoutGameInput | CasinoBetUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: CasinoBetCreateManyGameInputEnvelope
    set?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    disconnect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    delete?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    update?: CasinoBetUpdateWithWhereUniqueWithoutGameInput | CasinoBetUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: CasinoBetUpdateManyWithWhereWithoutGameInput | CasinoBetUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
  }

  export type CasinoGameCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<CasinoGameCreateWithoutFavoritesInput, CasinoGameUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutFavoritesInput
    connect?: CasinoGameWhereUniqueInput
  }

  export type CasinoGameUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<CasinoGameCreateWithoutFavoritesInput, CasinoGameUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutFavoritesInput
    upsert?: CasinoGameUpsertWithoutFavoritesInput
    connect?: CasinoGameWhereUniqueInput
    update?: XOR<XOR<CasinoGameUpdateToOneWithWhereWithoutFavoritesInput, CasinoGameUpdateWithoutFavoritesInput>, CasinoGameUncheckedUpdateWithoutFavoritesInput>
  }

  export type CasinoGameCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CasinoGameCreateWithoutSessionsInput, CasinoGameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutSessionsInput
    connect?: CasinoGameWhereUniqueInput
  }

  export type CasinoBetCreateNestedManyWithoutSessionInput = {
    create?: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput> | CasinoBetCreateWithoutSessionInput[] | CasinoBetUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutSessionInput | CasinoBetCreateOrConnectWithoutSessionInput[]
    createMany?: CasinoBetCreateManySessionInputEnvelope
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
  }

  export type CasinoBetUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput> | CasinoBetCreateWithoutSessionInput[] | CasinoBetUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutSessionInput | CasinoBetCreateOrConnectWithoutSessionInput[]
    createMany?: CasinoBetCreateManySessionInputEnvelope
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
  }

  export type EnumCasinoSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CasinoSessionStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CasinoGameUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CasinoGameCreateWithoutSessionsInput, CasinoGameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutSessionsInput
    upsert?: CasinoGameUpsertWithoutSessionsInput
    connect?: CasinoGameWhereUniqueInput
    update?: XOR<XOR<CasinoGameUpdateToOneWithWhereWithoutSessionsInput, CasinoGameUpdateWithoutSessionsInput>, CasinoGameUncheckedUpdateWithoutSessionsInput>
  }

  export type CasinoBetUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput> | CasinoBetCreateWithoutSessionInput[] | CasinoBetUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutSessionInput | CasinoBetCreateOrConnectWithoutSessionInput[]
    upsert?: CasinoBetUpsertWithWhereUniqueWithoutSessionInput | CasinoBetUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CasinoBetCreateManySessionInputEnvelope
    set?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    disconnect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    delete?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    update?: CasinoBetUpdateWithWhereUniqueWithoutSessionInput | CasinoBetUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CasinoBetUpdateManyWithWhereWithoutSessionInput | CasinoBetUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
  }

  export type CasinoBetUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput> | CasinoBetCreateWithoutSessionInput[] | CasinoBetUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CasinoBetCreateOrConnectWithoutSessionInput | CasinoBetCreateOrConnectWithoutSessionInput[]
    upsert?: CasinoBetUpsertWithWhereUniqueWithoutSessionInput | CasinoBetUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CasinoBetCreateManySessionInputEnvelope
    set?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    disconnect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    delete?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    connect?: CasinoBetWhereUniqueInput | CasinoBetWhereUniqueInput[]
    update?: CasinoBetUpdateWithWhereUniqueWithoutSessionInput | CasinoBetUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CasinoBetUpdateManyWithWhereWithoutSessionInput | CasinoBetUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
  }

  export type CasinoSessionCreateNestedOneWithoutBetsInput = {
    create?: XOR<CasinoSessionCreateWithoutBetsInput, CasinoSessionUncheckedCreateWithoutBetsInput>
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutBetsInput
    connect?: CasinoSessionWhereUniqueInput
  }

  export type CasinoGameCreateNestedOneWithoutBetsInput = {
    create?: XOR<CasinoGameCreateWithoutBetsInput, CasinoGameUncheckedCreateWithoutBetsInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutBetsInput
    connect?: CasinoGameWhereUniqueInput
  }

  export type EnumCasinoBetStatusFieldUpdateOperationsInput = {
    set?: $Enums.CasinoBetStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CasinoSessionUpdateOneWithoutBetsNestedInput = {
    create?: XOR<CasinoSessionCreateWithoutBetsInput, CasinoSessionUncheckedCreateWithoutBetsInput>
    connectOrCreate?: CasinoSessionCreateOrConnectWithoutBetsInput
    upsert?: CasinoSessionUpsertWithoutBetsInput
    disconnect?: CasinoSessionWhereInput | boolean
    delete?: CasinoSessionWhereInput | boolean
    connect?: CasinoSessionWhereUniqueInput
    update?: XOR<XOR<CasinoSessionUpdateToOneWithWhereWithoutBetsInput, CasinoSessionUpdateWithoutBetsInput>, CasinoSessionUncheckedUpdateWithoutBetsInput>
  }

  export type CasinoGameUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<CasinoGameCreateWithoutBetsInput, CasinoGameUncheckedCreateWithoutBetsInput>
    connectOrCreate?: CasinoGameCreateOrConnectWithoutBetsInput
    upsert?: CasinoGameUpsertWithoutBetsInput
    connect?: CasinoGameWhereUniqueInput
    update?: XOR<XOR<CasinoGameUpdateToOneWithWhereWithoutBetsInput, CasinoGameUpdateWithoutBetsInput>, CasinoGameUncheckedUpdateWithoutBetsInput>
  }

  export type CasinoJackpotCreategameIdsInput = {
    set: string[]
  }

  export type EnumCasinoJackpotTypeFieldUpdateOperationsInput = {
    set?: $Enums.CasinoJackpotType
  }

  export type CasinoJackpotUpdategameIdsInput = {
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

  export type NestedEnumCasinoGameCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameCategory | EnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameCategoryFilter<$PrismaModel> | $Enums.CasinoGameCategory
  }

  export type NestedEnumCasinoProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoProvider | EnumCasinoProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoProviderFilter<$PrismaModel> | $Enums.CasinoProvider
  }

  export type NestedEnumCasinoGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameStatus | EnumCasinoGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameStatusFilter<$PrismaModel> | $Enums.CasinoGameStatus
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumCasinoGameCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameCategory | EnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameCategory[] | ListEnumCasinoGameCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameCategoryWithAggregatesFilter<$PrismaModel> | $Enums.CasinoGameCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoGameCategoryFilter<$PrismaModel>
    _max?: NestedEnumCasinoGameCategoryFilter<$PrismaModel>
  }

  export type NestedEnumCasinoProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoProvider | EnumCasinoProviderFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoProvider[] | ListEnumCasinoProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoProviderWithAggregatesFilter<$PrismaModel> | $Enums.CasinoProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoProviderFilter<$PrismaModel>
    _max?: NestedEnumCasinoProviderFilter<$PrismaModel>
  }

  export type NestedEnumCasinoGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoGameStatus | EnumCasinoGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoGameStatus[] | ListEnumCasinoGameStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoGameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoGameStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoGameStatusFilter<$PrismaModel>
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumCasinoSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoSessionStatus | EnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoSessionStatusFilter<$PrismaModel> | $Enums.CasinoSessionStatus
  }

  export type NestedEnumCasinoSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoSessionStatus | EnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoSessionStatus[] | ListEnumCasinoSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoSessionStatusFilter<$PrismaModel>
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

  export type NestedEnumCasinoBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoBetStatus | EnumCasinoBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoBetStatusFilter<$PrismaModel> | $Enums.CasinoBetStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumCasinoBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoBetStatus | EnumCasinoBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoBetStatus[] | ListEnumCasinoBetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.CasinoBetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoBetStatusFilter<$PrismaModel>
    _max?: NestedEnumCasinoBetStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumCasinoJackpotTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoJackpotType | EnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel> | $Enums.CasinoJackpotType
  }

  export type NestedEnumCasinoJackpotTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CasinoJackpotType | EnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CasinoJackpotType[] | ListEnumCasinoJackpotTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCasinoJackpotTypeWithAggregatesFilter<$PrismaModel> | $Enums.CasinoJackpotType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel>
    _max?: NestedEnumCasinoJackpotTypeFilter<$PrismaModel>
  }

  export type CasinoGameFavoriteCreateWithoutGameInput = {
    id?: string
    userId: string
    favoritedAt?: Date | string
  }

  export type CasinoGameFavoriteUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    favoritedAt?: Date | string
  }

  export type CasinoGameFavoriteCreateOrConnectWithoutGameInput = {
    where: CasinoGameFavoriteWhereUniqueInput
    create: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput>
  }

  export type CasinoGameFavoriteCreateManyGameInputEnvelope = {
    data: CasinoGameFavoriteCreateManyGameInput | CasinoGameFavoriteCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type CasinoSessionCreateWithoutGameInput = {
    id?: string
    userId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetCreateNestedManyWithoutSessionInput
  }

  export type CasinoSessionUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CasinoSessionCreateOrConnectWithoutGameInput = {
    where: CasinoSessionWhereUniqueInput
    create: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput>
  }

  export type CasinoSessionCreateManyGameInputEnvelope = {
    data: CasinoSessionCreateManyGameInput | CasinoSessionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type CasinoBetCreateWithoutGameInput = {
    id?: string
    userId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
    session?: CasinoSessionCreateNestedOneWithoutBetsInput
  }

  export type CasinoBetUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    sessionId?: string | null
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoBetCreateOrConnectWithoutGameInput = {
    where: CasinoBetWhereUniqueInput
    create: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput>
  }

  export type CasinoBetCreateManyGameInputEnvelope = {
    data: CasinoBetCreateManyGameInput | CasinoBetCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type CasinoGameFavoriteUpsertWithWhereUniqueWithoutGameInput = {
    where: CasinoGameFavoriteWhereUniqueInput
    update: XOR<CasinoGameFavoriteUpdateWithoutGameInput, CasinoGameFavoriteUncheckedUpdateWithoutGameInput>
    create: XOR<CasinoGameFavoriteCreateWithoutGameInput, CasinoGameFavoriteUncheckedCreateWithoutGameInput>
  }

  export type CasinoGameFavoriteUpdateWithWhereUniqueWithoutGameInput = {
    where: CasinoGameFavoriteWhereUniqueInput
    data: XOR<CasinoGameFavoriteUpdateWithoutGameInput, CasinoGameFavoriteUncheckedUpdateWithoutGameInput>
  }

  export type CasinoGameFavoriteUpdateManyWithWhereWithoutGameInput = {
    where: CasinoGameFavoriteScalarWhereInput
    data: XOR<CasinoGameFavoriteUpdateManyMutationInput, CasinoGameFavoriteUncheckedUpdateManyWithoutGameInput>
  }

  export type CasinoGameFavoriteScalarWhereInput = {
    AND?: CasinoGameFavoriteScalarWhereInput | CasinoGameFavoriteScalarWhereInput[]
    OR?: CasinoGameFavoriteScalarWhereInput[]
    NOT?: CasinoGameFavoriteScalarWhereInput | CasinoGameFavoriteScalarWhereInput[]
    id?: StringFilter<"CasinoGameFavorite"> | string
    userId?: StringFilter<"CasinoGameFavorite"> | string
    gameId?: StringFilter<"CasinoGameFavorite"> | string
    favoritedAt?: DateTimeFilter<"CasinoGameFavorite"> | Date | string
  }

  export type CasinoSessionUpsertWithWhereUniqueWithoutGameInput = {
    where: CasinoSessionWhereUniqueInput
    update: XOR<CasinoSessionUpdateWithoutGameInput, CasinoSessionUncheckedUpdateWithoutGameInput>
    create: XOR<CasinoSessionCreateWithoutGameInput, CasinoSessionUncheckedCreateWithoutGameInput>
  }

  export type CasinoSessionUpdateWithWhereUniqueWithoutGameInput = {
    where: CasinoSessionWhereUniqueInput
    data: XOR<CasinoSessionUpdateWithoutGameInput, CasinoSessionUncheckedUpdateWithoutGameInput>
  }

  export type CasinoSessionUpdateManyWithWhereWithoutGameInput = {
    where: CasinoSessionScalarWhereInput
    data: XOR<CasinoSessionUpdateManyMutationInput, CasinoSessionUncheckedUpdateManyWithoutGameInput>
  }

  export type CasinoSessionScalarWhereInput = {
    AND?: CasinoSessionScalarWhereInput | CasinoSessionScalarWhereInput[]
    OR?: CasinoSessionScalarWhereInput[]
    NOT?: CasinoSessionScalarWhereInput | CasinoSessionScalarWhereInput[]
    id?: StringFilter<"CasinoSession"> | string
    userId?: StringFilter<"CasinoSession"> | string
    gameId?: StringFilter<"CasinoSession"> | string
    playerToken?: StringNullableFilter<"CasinoSession"> | string | null
    sessionStatus?: EnumCasinoSessionStatusFilter<"CasinoSession"> | $Enums.CasinoSessionStatus
    providerSessionReference?: StringNullableFilter<"CasinoSession"> | string | null
    walletId?: StringNullableFilter<"CasinoSession"> | string | null
    currency?: StringFilter<"CasinoSession"> | string
    startedAt?: DateTimeFilter<"CasinoSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CasinoSession"> | Date | string | null
    totalRounds?: IntFilter<"CasinoSession"> | number
    totalWagered?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: DecimalNullableFilter<"CasinoSession"> | Decimal | DecimalJsLike | number | string | null
    ipAddress?: StringNullableFilter<"CasinoSession"> | string | null
    device?: StringNullableFilter<"CasinoSession"> | string | null
    userAgent?: StringNullableFilter<"CasinoSession"> | string | null
    geoCountry?: StringNullableFilter<"CasinoSession"> | string | null
    closedReason?: StringNullableFilter<"CasinoSession"> | string | null
    closedBy?: StringNullableFilter<"CasinoSession"> | string | null
    correlationId?: StringNullableFilter<"CasinoSession"> | string | null
    playerBalanceSnapshots?: JsonNullableFilter<"CasinoSession">
  }

  export type CasinoBetUpsertWithWhereUniqueWithoutGameInput = {
    where: CasinoBetWhereUniqueInput
    update: XOR<CasinoBetUpdateWithoutGameInput, CasinoBetUncheckedUpdateWithoutGameInput>
    create: XOR<CasinoBetCreateWithoutGameInput, CasinoBetUncheckedCreateWithoutGameInput>
  }

  export type CasinoBetUpdateWithWhereUniqueWithoutGameInput = {
    where: CasinoBetWhereUniqueInput
    data: XOR<CasinoBetUpdateWithoutGameInput, CasinoBetUncheckedUpdateWithoutGameInput>
  }

  export type CasinoBetUpdateManyWithWhereWithoutGameInput = {
    where: CasinoBetScalarWhereInput
    data: XOR<CasinoBetUpdateManyMutationInput, CasinoBetUncheckedUpdateManyWithoutGameInput>
  }

  export type CasinoBetScalarWhereInput = {
    AND?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
    OR?: CasinoBetScalarWhereInput[]
    NOT?: CasinoBetScalarWhereInput | CasinoBetScalarWhereInput[]
    id?: StringFilter<"CasinoBet"> | string
    userId?: StringFilter<"CasinoBet"> | string
    sessionId?: StringNullableFilter<"CasinoBet"> | string | null
    gameId?: StringFilter<"CasinoBet"> | string
    providerRef?: StringNullableFilter<"CasinoBet"> | string | null
    roundRef?: StringNullableFilter<"CasinoBet"> | string | null
    status?: EnumCasinoBetStatusFilter<"CasinoBet"> | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFilter<"CasinoBet"> | string
    linesBet?: IntNullableFilter<"CasinoBet"> | number | null
    stakePerLine?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    netResult?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    betType?: StringNullableFilter<"CasinoBet"> | string | null
    jackpotContribution?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: DecimalNullableFilter<"CasinoBet"> | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFilter<"CasinoBet"> | Date | string
    settledAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
    settledBy?: StringNullableFilter<"CasinoBet"> | string | null
    initialSeed?: StringNullableFilter<"CasinoBet"> | string | null
    resultSeed?: StringNullableFilter<"CasinoBet"> | string | null
    finalRevealSnapshot?: JsonNullableFilter<"CasinoBet">
    resultSymbols?: JsonNullableFilter<"CasinoBet">
    winningLines?: JsonNullableFilter<"CasinoBet">
    freeSpinsTriggered?: IntNullableFilter<"CasinoBet"> | number | null
    bonusRoundTriggered?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleFeatureUsed?: BoolNullableFilter<"CasinoBet"> | boolean | null
    gambleResult?: StringNullableFilter<"CasinoBet"> | string | null
    correlationId?: StringNullableFilter<"CasinoBet"> | string | null
    providerRawRequest?: JsonNullableFilter<"CasinoBet">
    providerRawResponse?: JsonNullableFilter<"CasinoBet">
    deletedAt?: DateTimeNullableFilter<"CasinoBet"> | Date | string | null
  }

  export type CasinoGameCreateWithoutFavoritesInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: CasinoSessionCreateNestedManyWithoutGameInput
    bets?: CasinoBetCreateNestedManyWithoutGameInput
  }

  export type CasinoGameUncheckedCreateWithoutFavoritesInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: CasinoSessionUncheckedCreateNestedManyWithoutGameInput
    bets?: CasinoBetUncheckedCreateNestedManyWithoutGameInput
  }

  export type CasinoGameCreateOrConnectWithoutFavoritesInput = {
    where: CasinoGameWhereUniqueInput
    create: XOR<CasinoGameCreateWithoutFavoritesInput, CasinoGameUncheckedCreateWithoutFavoritesInput>
  }

  export type CasinoGameUpsertWithoutFavoritesInput = {
    update: XOR<CasinoGameUpdateWithoutFavoritesInput, CasinoGameUncheckedUpdateWithoutFavoritesInput>
    create: XOR<CasinoGameCreateWithoutFavoritesInput, CasinoGameUncheckedCreateWithoutFavoritesInput>
    where?: CasinoGameWhereInput
  }

  export type CasinoGameUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: CasinoGameWhereInput
    data: XOR<CasinoGameUpdateWithoutFavoritesInput, CasinoGameUncheckedUpdateWithoutFavoritesInput>
  }

  export type CasinoGameUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: CasinoSessionUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: CasinoSessionUncheckedUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameCreateWithoutSessionsInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteCreateNestedManyWithoutGameInput
    bets?: CasinoBetCreateNestedManyWithoutGameInput
  }

  export type CasinoGameUncheckedCreateWithoutSessionsInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteUncheckedCreateNestedManyWithoutGameInput
    bets?: CasinoBetUncheckedCreateNestedManyWithoutGameInput
  }

  export type CasinoGameCreateOrConnectWithoutSessionsInput = {
    where: CasinoGameWhereUniqueInput
    create: XOR<CasinoGameCreateWithoutSessionsInput, CasinoGameUncheckedCreateWithoutSessionsInput>
  }

  export type CasinoBetCreateWithoutSessionInput = {
    id?: string
    userId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
    game: CasinoGameCreateNestedOneWithoutBetsInput
  }

  export type CasinoBetUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    gameId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoBetCreateOrConnectWithoutSessionInput = {
    where: CasinoBetWhereUniqueInput
    create: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput>
  }

  export type CasinoBetCreateManySessionInputEnvelope = {
    data: CasinoBetCreateManySessionInput | CasinoBetCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CasinoGameUpsertWithoutSessionsInput = {
    update: XOR<CasinoGameUpdateWithoutSessionsInput, CasinoGameUncheckedUpdateWithoutSessionsInput>
    create: XOR<CasinoGameCreateWithoutSessionsInput, CasinoGameUncheckedCreateWithoutSessionsInput>
    where?: CasinoGameWhereInput
  }

  export type CasinoGameUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CasinoGameWhereInput
    data: XOR<CasinoGameUpdateWithoutSessionsInput, CasinoGameUncheckedUpdateWithoutSessionsInput>
  }

  export type CasinoGameUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUncheckedUpdateManyWithoutGameNestedInput
    bets?: CasinoBetUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CasinoBetUpsertWithWhereUniqueWithoutSessionInput = {
    where: CasinoBetWhereUniqueInput
    update: XOR<CasinoBetUpdateWithoutSessionInput, CasinoBetUncheckedUpdateWithoutSessionInput>
    create: XOR<CasinoBetCreateWithoutSessionInput, CasinoBetUncheckedCreateWithoutSessionInput>
  }

  export type CasinoBetUpdateWithWhereUniqueWithoutSessionInput = {
    where: CasinoBetWhereUniqueInput
    data: XOR<CasinoBetUpdateWithoutSessionInput, CasinoBetUncheckedUpdateWithoutSessionInput>
  }

  export type CasinoBetUpdateManyWithWhereWithoutSessionInput = {
    where: CasinoBetScalarWhereInput
    data: XOR<CasinoBetUpdateManyMutationInput, CasinoBetUncheckedUpdateManyWithoutSessionInput>
  }

  export type CasinoSessionCreateWithoutBetsInput = {
    id?: string
    userId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    game: CasinoGameCreateNestedOneWithoutSessionsInput
  }

  export type CasinoSessionUncheckedCreateWithoutBetsInput = {
    id?: string
    userId: string
    gameId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoSessionCreateOrConnectWithoutBetsInput = {
    where: CasinoSessionWhereUniqueInput
    create: XOR<CasinoSessionCreateWithoutBetsInput, CasinoSessionUncheckedCreateWithoutBetsInput>
  }

  export type CasinoGameCreateWithoutBetsInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteCreateNestedManyWithoutGameInput
    sessions?: CasinoSessionCreateNestedManyWithoutGameInput
  }

  export type CasinoGameUncheckedCreateWithoutBetsInput = {
    id?: string
    providerId: string
    providerGameId: string
    name: string
    slug: string
    category: $Enums.CasinoGameCategory
    provider: $Enums.CasinoProvider
    status?: $Enums.CasinoGameStatus
    rtp: Decimal | DecimalJsLike | number | string
    volatility?: string | null
    minBet?: Decimal | DecimalJsLike | number | string
    maxBet?: Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: Decimal | DecimalJsLike | number | string | null
    lines?: number | null
    reels?: number | null
    hasFreeSpins?: boolean
    hasJackpot?: boolean
    hasBonusBuy?: boolean
    hasLiveDealer?: boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: string | null
    bannerUrl?: string | null
    lobbyTags?: CasinoGameCreatelobbyTagsInput | string[]
    languages?: CasinoGameCreatelanguagesInput | string[]
    countriesBlocked?: CasinoGameCreatecountriesBlockedInput | string[]
    isNew?: boolean
    isHot?: boolean
    isFeatured?: boolean
    popularTrendScore?: number | null
    totalRoundsPlayed?: bigint | number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    lastWinAt?: Date | string | null
    seededHouseEdgePercent?: Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    favorites?: CasinoGameFavoriteUncheckedCreateNestedManyWithoutGameInput
    sessions?: CasinoSessionUncheckedCreateNestedManyWithoutGameInput
  }

  export type CasinoGameCreateOrConnectWithoutBetsInput = {
    where: CasinoGameWhereUniqueInput
    create: XOR<CasinoGameCreateWithoutBetsInput, CasinoGameUncheckedCreateWithoutBetsInput>
  }

  export type CasinoSessionUpsertWithoutBetsInput = {
    update: XOR<CasinoSessionUpdateWithoutBetsInput, CasinoSessionUncheckedUpdateWithoutBetsInput>
    create: XOR<CasinoSessionCreateWithoutBetsInput, CasinoSessionUncheckedCreateWithoutBetsInput>
    where?: CasinoSessionWhereInput
  }

  export type CasinoSessionUpdateToOneWithWhereWithoutBetsInput = {
    where?: CasinoSessionWhereInput
    data: XOR<CasinoSessionUpdateWithoutBetsInput, CasinoSessionUncheckedUpdateWithoutBetsInput>
  }

  export type CasinoSessionUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    game?: CasinoGameUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type CasinoSessionUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoGameUpsertWithoutBetsInput = {
    update: XOR<CasinoGameUpdateWithoutBetsInput, CasinoGameUncheckedUpdateWithoutBetsInput>
    create: XOR<CasinoGameCreateWithoutBetsInput, CasinoGameUncheckedCreateWithoutBetsInput>
    where?: CasinoGameWhereInput
  }

  export type CasinoGameUpdateToOneWithWhereWithoutBetsInput = {
    where?: CasinoGameWhereInput
    data: XOR<CasinoGameUpdateWithoutBetsInput, CasinoGameUncheckedUpdateWithoutBetsInput>
  }

  export type CasinoGameUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUpdateManyWithoutGameNestedInput
    sessions?: CasinoSessionUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerGameId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: EnumCasinoGameCategoryFieldUpdateOperationsInput | $Enums.CasinoGameCategory
    provider?: EnumCasinoProviderFieldUpdateOperationsInput | $Enums.CasinoProvider
    status?: EnumCasinoGameStatusFieldUpdateOperationsInput | $Enums.CasinoGameStatus
    rtp?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volatility?: NullableStringFieldUpdateOperationsInput | string | null
    minBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxBet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinMultiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lines?: NullableIntFieldUpdateOperationsInput | number | null
    reels?: NullableIntFieldUpdateOperationsInput | number | null
    hasFreeSpins?: BoolFieldUpdateOperationsInput | boolean
    hasJackpot?: BoolFieldUpdateOperationsInput | boolean
    hasBonusBuy?: BoolFieldUpdateOperationsInput | boolean
    hasLiveDealer?: BoolFieldUpdateOperationsInput | boolean
    gameConfig?: NullableJsonNullValueInput | InputJsonValue
    thumbUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    lobbyTags?: CasinoGameUpdatelobbyTagsInput | string[]
    languages?: CasinoGameUpdatelanguagesInput | string[]
    countriesBlocked?: CasinoGameUpdatecountriesBlockedInput | string[]
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    popularTrendScore?: NullableIntFieldUpdateOperationsInput | number | null
    totalRoundsPlayed?: BigIntFieldUpdateOperationsInput | bigint | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastWinAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seededHouseEdgePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    providerUrlDeepLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: CasinoGameFavoriteUncheckedUpdateManyWithoutGameNestedInput
    sessions?: CasinoSessionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type CasinoGameFavoriteCreateManyGameInput = {
    id?: string
    userId: string
    favoritedAt?: Date | string
  }

  export type CasinoSessionCreateManyGameInput = {
    id?: string
    userId: string
    playerToken?: string | null
    sessionStatus?: $Enums.CasinoSessionStatus
    providerSessionReference?: string | null
    walletId?: string | null
    currency?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalRounds?: number
    totalWagered?: Decimal | DecimalJsLike | number | string
    totalPayout?: Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: Decimal | DecimalJsLike | number | string | null
    ipAddress?: string | null
    device?: string | null
    userAgent?: string | null
    geoCountry?: string | null
    closedReason?: string | null
    closedBy?: string | null
    correlationId?: string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoBetCreateManyGameInput = {
    id?: string
    userId: string
    sessionId?: string | null
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoGameFavoriteUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoGameFavoriteUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoGameFavoriteUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    favoritedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CasinoSessionUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetUpdateManyWithoutSessionNestedInput
  }

  export type CasinoSessionUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
    bets?: CasinoBetUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CasinoSessionUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    playerToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionStatus?: EnumCasinoSessionStatusFieldUpdateOperationsInput | $Enums.CasinoSessionStatus
    providerSessionReference?: NullableStringFieldUpdateOperationsInput | string | null
    walletId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalRounds?: IntFieldUpdateOperationsInput | number
    totalWagered?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPayout?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxWinDuringSession?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    geoCountry?: NullableStringFieldUpdateOperationsInput | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    closedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    playerBalanceSnapshots?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CasinoBetUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    session?: CasinoSessionUpdateOneWithoutBetsNestedInput
  }

  export type CasinoBetUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoBetUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoBetCreateManySessionInput = {
    id?: string
    userId: string
    gameId: string
    providerRef?: string | null
    roundRef?: string | null
    status?: $Enums.CasinoBetStatus
    wageredAmount: Decimal | DecimalJsLike | number | string
    wageredCurrency?: string
    linesBet?: number | null
    stakePerLine?: Decimal | DecimalJsLike | number | string | null
    payoutAmount?: Decimal | DecimalJsLike | number | string | null
    netResult?: Decimal | DecimalJsLike | number | string | null
    betType?: string | null
    jackpotContribution?: Decimal | DecimalJsLike | number | string | null
    jackpotWin?: Decimal | DecimalJsLike | number | string | null
    placedAt?: Date | string
    settledAt?: Date | string | null
    settledBy?: string | null
    initialSeed?: string | null
    resultSeed?: string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: number | null
    bonusRoundTriggered?: boolean | null
    gambleFeatureUsed?: boolean | null
    gambleResult?: string | null
    correlationId?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: Date | string | null
  }

  export type CasinoBetUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    game?: CasinoGameUpdateOneRequiredWithoutBetsNestedInput
  }

  export type CasinoBetUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CasinoBetUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    providerRef?: NullableStringFieldUpdateOperationsInput | string | null
    roundRef?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCasinoBetStatusFieldUpdateOperationsInput | $Enums.CasinoBetStatus
    wageredAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    wageredCurrency?: StringFieldUpdateOperationsInput | string
    linesBet?: NullableIntFieldUpdateOperationsInput | number | null
    stakePerLine?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payoutAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    netResult?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    betType?: NullableStringFieldUpdateOperationsInput | string | null
    jackpotContribution?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    jackpotWin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    placedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    settledBy?: NullableStringFieldUpdateOperationsInput | string | null
    initialSeed?: NullableStringFieldUpdateOperationsInput | string | null
    resultSeed?: NullableStringFieldUpdateOperationsInput | string | null
    finalRevealSnapshot?: NullableJsonNullValueInput | InputJsonValue
    resultSymbols?: NullableJsonNullValueInput | InputJsonValue
    winningLines?: NullableJsonNullValueInput | InputJsonValue
    freeSpinsTriggered?: NullableIntFieldUpdateOperationsInput | number | null
    bonusRoundTriggered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleFeatureUsed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gambleResult?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CasinoGameCountOutputTypeDefaultArgs instead
     */
    export type CasinoGameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoGameCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoSessionCountOutputTypeDefaultArgs instead
     */
    export type CasinoSessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoSessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoGameDefaultArgs instead
     */
    export type CasinoGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoGameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoGameFavoriteDefaultArgs instead
     */
    export type CasinoGameFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoGameFavoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoSessionDefaultArgs instead
     */
    export type CasinoSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoBetDefaultArgs instead
     */
    export type CasinoBetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoBetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CasinoJackpotDefaultArgs instead
     */
    export type CasinoJackpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CasinoJackpotDefaultArgs<ExtArgs>

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