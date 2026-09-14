
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
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model WalletLedgerEntry
 * 
 */
export type WalletLedgerEntry = $Result.DefaultSelection<Prisma.$WalletLedgerEntryPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Withdrawal
 * 
 */
export type Withdrawal = $Result.DefaultSelection<Prisma.$WithdrawalPayload>
/**
 * Model PendingWalletOperation
 * 
 */
export type PendingWalletOperation = $Result.DefaultSelection<Prisma.$PendingWalletOperationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LedgerEntryType: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

export type LedgerEntryType = (typeof LedgerEntryType)[keyof typeof LedgerEntryType]


export const LedgerAccountType: {
  USER_REAL_BALANCE: 'USER_REAL_BALANCE',
  USER_BONUS_BALANCE: 'USER_BONUS_BALANCE',
  HOUSE_BALANCE: 'HOUSE_BALANCE',
  HOUSE_RESERVE: 'HOUSE_RESERVE',
  PENDING_DEPOSITS: 'PENDING_DEPOSITS',
  PENDING_WITHDRAWALS: 'PENDING_WITHDRAWALS',
  PENDING_BETS: 'PENDING_BETS',
  BONUS_EXPENSE: 'BONUS_EXPENSE',
  CASINO_WINS_EXPENSE: 'CASINO_WINS_EXPENSE',
  FEES_INCOME: 'FEES_INCOME',
  CASHOUT_PAYMENTS: 'CASHOUT_PAYMENTS'
};

export type LedgerAccountType = (typeof LedgerAccountType)[keyof typeof LedgerAccountType]


export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  BET_PLACED: 'BET_PLACED',
  BET_SETTLED_WON: 'BET_SETTLED_WON',
  BET_SETTLED_LOST: 'BET_SETTLED_LOST',
  BET_SETTLED_HALF_WON: 'BET_SETTLED_HALF_WON',
  BET_SETTLED_HALF_LOST: 'BET_SETTLED_HALF_LOST',
  BET_SETTLED_VOID: 'BET_SETTLED_VOID',
  BET_CASHOUT: 'BET_CASHOUT',
  BONUS_GRANTED: 'BONUS_GRANTED',
  BONUS_RELEASED: 'BONUS_RELEASED',
  BONUS_EXPIRED: 'BONUS_EXPIRED',
  FREEBET_GRANTED: 'FREEBET_GRANTED',
  CASHOUT_FEE: 'CASHOUT_FEE',
  WITHDRAWAL_FEE: 'WITHDRAWAL_FEE',
  CASINO_BET: 'CASINO_BET',
  CASINO_WIN: 'CASINO_WIN',
  MANUAL_ADJUSTMENT: 'MANUAL_ADJUSTMENT',
  AFFILIATE_PAYMENT: 'AFFILIATE_PAYMENT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  REQUIRES_ACTION: 'REQUIRES_ACTION',
  UNDER_REVIEW: 'UNDER_REVIEW'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentProvider: {
  STRIPE: 'STRIPE',
  SKRILL: 'SKRILL',
  NETELLER: 'NETELLER',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYPAL: 'PAYPAL',
  PAYSAFE_CARD: 'PAYSAFE_CARD',
  APPLE_PAY: 'APPLE_PAY',
  GOOGLE_PAY: 'GOOGLE_PAY',
  MB_WAY: 'MB_WAY',
  MULTIBANCO: 'MULTIBANCO'
};

export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider]


export const PendingOperationType: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK'
};

export type PendingOperationType = (typeof PendingOperationType)[keyof typeof PendingOperationType]


export const ReservationType: {
  BET_PLACEMENT: 'BET_PLACEMENT',
  CASHOUT: 'CASHOUT',
  WITHDRAWAL_HOLD: 'WITHDRAWAL_HOLD',
  BONUS_HOLD: 'BONUS_HOLD'
};

export type ReservationType = (typeof ReservationType)[keyof typeof ReservationType]

}

export type LedgerEntryType = $Enums.LedgerEntryType

export const LedgerEntryType: typeof $Enums.LedgerEntryType

export type LedgerAccountType = $Enums.LedgerAccountType

export const LedgerAccountType: typeof $Enums.LedgerAccountType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentProvider = $Enums.PaymentProvider

export const PaymentProvider: typeof $Enums.PaymentProvider

export type PendingOperationType = $Enums.PendingOperationType

export const PendingOperationType: typeof $Enums.PendingOperationType

export type ReservationType = $Enums.ReservationType

export const ReservationType: typeof $Enums.ReservationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Wallets
 * const wallets = await prisma.wallet.findMany()
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
   * // Fetch zero or more Wallets
   * const wallets = await prisma.wallet.findMany()
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
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs>;

  /**
   * `prisma.walletLedgerEntry`: Exposes CRUD operations for the **WalletLedgerEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletLedgerEntries
    * const walletLedgerEntries = await prisma.walletLedgerEntry.findMany()
    * ```
    */
  get walletLedgerEntry(): Prisma.WalletLedgerEntryDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs>;

  /**
   * `prisma.withdrawal`: Exposes CRUD operations for the **Withdrawal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Withdrawals
    * const withdrawals = await prisma.withdrawal.findMany()
    * ```
    */
  get withdrawal(): Prisma.WithdrawalDelegate<ExtArgs>;

  /**
   * `prisma.pendingWalletOperation`: Exposes CRUD operations for the **PendingWalletOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PendingWalletOperations
    * const pendingWalletOperations = await prisma.pendingWalletOperation.findMany()
    * ```
    */
  get pendingWalletOperation(): Prisma.PendingWalletOperationDelegate<ExtArgs>;
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
    Wallet: 'Wallet',
    WalletLedgerEntry: 'WalletLedgerEntry',
    Transaction: 'Transaction',
    Deposit: 'Deposit',
    Withdrawal: 'Withdrawal',
    PendingWalletOperation: 'PendingWalletOperation'
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
      modelProps: "wallet" | "walletLedgerEntry" | "transaction" | "deposit" | "withdrawal" | "pendingWalletOperation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      WalletLedgerEntry: {
        payload: Prisma.$WalletLedgerEntryPayload<ExtArgs>
        fields: Prisma.WalletLedgerEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletLedgerEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletLedgerEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          findFirst: {
            args: Prisma.WalletLedgerEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletLedgerEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          findMany: {
            args: Prisma.WalletLedgerEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>[]
          }
          create: {
            args: Prisma.WalletLedgerEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          createMany: {
            args: Prisma.WalletLedgerEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletLedgerEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>[]
          }
          delete: {
            args: Prisma.WalletLedgerEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          update: {
            args: Prisma.WalletLedgerEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          deleteMany: {
            args: Prisma.WalletLedgerEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletLedgerEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletLedgerEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletLedgerEntryPayload>
          }
          aggregate: {
            args: Prisma.WalletLedgerEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletLedgerEntry>
          }
          groupBy: {
            args: Prisma.WalletLedgerEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletLedgerEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletLedgerEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WalletLedgerEntryCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Withdrawal: {
        payload: Prisma.$WithdrawalPayload<ExtArgs>
        fields: Prisma.WithdrawalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WithdrawalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WithdrawalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findFirst: {
            args: Prisma.WithdrawalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WithdrawalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          findMany: {
            args: Prisma.WithdrawalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          create: {
            args: Prisma.WithdrawalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          createMany: {
            args: Prisma.WithdrawalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WithdrawalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>[]
          }
          delete: {
            args: Prisma.WithdrawalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          update: {
            args: Prisma.WithdrawalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          deleteMany: {
            args: Prisma.WithdrawalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WithdrawalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WithdrawalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WithdrawalPayload>
          }
          aggregate: {
            args: Prisma.WithdrawalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWithdrawal>
          }
          groupBy: {
            args: Prisma.WithdrawalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WithdrawalCountArgs<ExtArgs>
            result: $Utils.Optional<WithdrawalCountAggregateOutputType> | number
          }
        }
      }
      PendingWalletOperation: {
        payload: Prisma.$PendingWalletOperationPayload<ExtArgs>
        fields: Prisma.PendingWalletOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingWalletOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingWalletOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          findFirst: {
            args: Prisma.PendingWalletOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingWalletOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          findMany: {
            args: Prisma.PendingWalletOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>[]
          }
          create: {
            args: Prisma.PendingWalletOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          createMany: {
            args: Prisma.PendingWalletOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingWalletOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>[]
          }
          delete: {
            args: Prisma.PendingWalletOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          update: {
            args: Prisma.PendingWalletOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          deleteMany: {
            args: Prisma.PendingWalletOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingWalletOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendingWalletOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingWalletOperationPayload>
          }
          aggregate: {
            args: Prisma.PendingWalletOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendingWalletOperation>
          }
          groupBy: {
            args: Prisma.PendingWalletOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingWalletOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingWalletOperationCountArgs<ExtArgs>
            result: $Utils.Optional<PendingWalletOperationCountAggregateOutputType> | number
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
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    ledgerEntries: number
    transactions: number
    deposits: number
    withdrawals: number
    pendingOperations: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgerEntries?: boolean | WalletCountOutputTypeCountLedgerEntriesArgs
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
    deposits?: boolean | WalletCountOutputTypeCountDepositsArgs
    withdrawals?: boolean | WalletCountOutputTypeCountWithdrawalsArgs
    pendingOperations?: boolean | WalletCountOutputTypeCountPendingOperationsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletLedgerEntryWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountDepositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountPendingOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingWalletOperationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    realBalance: number | null
    bonusBalance: number | null
    withdrawableBalance: Decimal | null
    pendingDeposits: number | null
    pendingWithdrawals: number | null
    reservedBets: number | null
    reservedCashouts: number | null
    totalDeposited: Decimal | null
    totalWithdrawn: Decimal | null
    totalTurnover: Decimal | null
    totalWagered: number | null
    totalWon: number | null
    totalLost: number | null
    totalBonusGranted: number | null
    totalBonusWagered: number | null
    totalBonusReleased: number | null
    kycLevelApplied: number | null
  }

  export type WalletSumAggregateOutputType = {
    realBalance: number | null
    bonusBalance: number | null
    withdrawableBalance: Decimal | null
    pendingDeposits: number | null
    pendingWithdrawals: number | null
    reservedBets: number | null
    reservedCashouts: number | null
    totalDeposited: Decimal | null
    totalWithdrawn: Decimal | null
    totalTurnover: Decimal | null
    totalWagered: number | null
    totalWon: number | null
    totalLost: number | null
    totalBonusGranted: number | null
    totalBonusWagered: number | null
    totalBonusReleased: number | null
    kycLevelApplied: number | null
  }

  export type WalletMinAggregateOutputType = {
    userId: string | null
    currency: string | null
    realBalance: number | null
    bonusBalance: number | null
    withdrawableBalance: Decimal | null
    pendingDeposits: number | null
    pendingWithdrawals: number | null
    reservedBets: number | null
    reservedCashouts: number | null
    lastDepositAt: Date | null
    totalDeposited: Decimal | null
    totalWithdrawn: Decimal | null
    totalTurnover: Decimal | null
    totalWagered: number | null
    totalWon: number | null
    totalLost: number | null
    totalBonusGranted: number | null
    totalBonusWagered: number | null
    totalBonusReleased: number | null
    isFrozen: boolean | null
    frozenReason: string | null
    frozenAt: Date | null
    frozenBy: string | null
    kycLevelApplied: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    userId: string | null
    currency: string | null
    realBalance: number | null
    bonusBalance: number | null
    withdrawableBalance: Decimal | null
    pendingDeposits: number | null
    pendingWithdrawals: number | null
    reservedBets: number | null
    reservedCashouts: number | null
    lastDepositAt: Date | null
    totalDeposited: Decimal | null
    totalWithdrawn: Decimal | null
    totalTurnover: Decimal | null
    totalWagered: number | null
    totalWon: number | null
    totalLost: number | null
    totalBonusGranted: number | null
    totalBonusWagered: number | null
    totalBonusReleased: number | null
    isFrozen: boolean | null
    frozenReason: string | null
    frozenAt: Date | null
    frozenBy: string | null
    kycLevelApplied: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    userId: number
    currency: number
    realBalance: number
    bonusBalance: number
    withdrawableBalance: number
    pendingDeposits: number
    pendingWithdrawals: number
    reservedBets: number
    reservedCashouts: number
    lastDepositAt: number
    totalDeposited: number
    totalWithdrawn: number
    totalTurnover: number
    totalWagered: number
    totalWon: number
    totalLost: number
    totalBonusGranted: number
    totalBonusWagered: number
    totalBonusReleased: number
    isFrozen: number
    frozenReason: number
    frozenAt: number
    frozenBy: number
    kycLevelApplied: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    realBalance?: true
    bonusBalance?: true
    withdrawableBalance?: true
    pendingDeposits?: true
    pendingWithdrawals?: true
    reservedBets?: true
    reservedCashouts?: true
    totalDeposited?: true
    totalWithdrawn?: true
    totalTurnover?: true
    totalWagered?: true
    totalWon?: true
    totalLost?: true
    totalBonusGranted?: true
    totalBonusWagered?: true
    totalBonusReleased?: true
    kycLevelApplied?: true
  }

  export type WalletSumAggregateInputType = {
    realBalance?: true
    bonusBalance?: true
    withdrawableBalance?: true
    pendingDeposits?: true
    pendingWithdrawals?: true
    reservedBets?: true
    reservedCashouts?: true
    totalDeposited?: true
    totalWithdrawn?: true
    totalTurnover?: true
    totalWagered?: true
    totalWon?: true
    totalLost?: true
    totalBonusGranted?: true
    totalBonusWagered?: true
    totalBonusReleased?: true
    kycLevelApplied?: true
  }

  export type WalletMinAggregateInputType = {
    userId?: true
    currency?: true
    realBalance?: true
    bonusBalance?: true
    withdrawableBalance?: true
    pendingDeposits?: true
    pendingWithdrawals?: true
    reservedBets?: true
    reservedCashouts?: true
    lastDepositAt?: true
    totalDeposited?: true
    totalWithdrawn?: true
    totalTurnover?: true
    totalWagered?: true
    totalWon?: true
    totalLost?: true
    totalBonusGranted?: true
    totalBonusWagered?: true
    totalBonusReleased?: true
    isFrozen?: true
    frozenReason?: true
    frozenAt?: true
    frozenBy?: true
    kycLevelApplied?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    userId?: true
    currency?: true
    realBalance?: true
    bonusBalance?: true
    withdrawableBalance?: true
    pendingDeposits?: true
    pendingWithdrawals?: true
    reservedBets?: true
    reservedCashouts?: true
    lastDepositAt?: true
    totalDeposited?: true
    totalWithdrawn?: true
    totalTurnover?: true
    totalWagered?: true
    totalWon?: true
    totalLost?: true
    totalBonusGranted?: true
    totalBonusWagered?: true
    totalBonusReleased?: true
    isFrozen?: true
    frozenReason?: true
    frozenAt?: true
    frozenBy?: true
    kycLevelApplied?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WalletCountAggregateInputType = {
    userId?: true
    currency?: true
    realBalance?: true
    bonusBalance?: true
    withdrawableBalance?: true
    pendingDeposits?: true
    pendingWithdrawals?: true
    reservedBets?: true
    reservedCashouts?: true
    lastDepositAt?: true
    totalDeposited?: true
    totalWithdrawn?: true
    totalTurnover?: true
    totalWagered?: true
    totalWon?: true
    totalLost?: true
    totalBonusGranted?: true
    totalBonusWagered?: true
    totalBonusReleased?: true
    isFrozen?: true
    frozenReason?: true
    frozenAt?: true
    frozenBy?: true
    kycLevelApplied?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    userId: string
    currency: string
    realBalance: number
    bonusBalance: number
    withdrawableBalance: Decimal
    pendingDeposits: number
    pendingWithdrawals: number
    reservedBets: number
    reservedCashouts: number
    lastDepositAt: Date | null
    totalDeposited: Decimal
    totalWithdrawn: Decimal
    totalTurnover: Decimal
    totalWagered: number
    totalWon: number
    totalLost: number
    totalBonusGranted: number
    totalBonusWagered: number
    totalBonusReleased: number
    isFrozen: boolean
    frozenReason: string | null
    frozenAt: Date | null
    frozenBy: string | null
    kycLevelApplied: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    currency?: boolean
    realBalance?: boolean
    bonusBalance?: boolean
    withdrawableBalance?: boolean
    pendingDeposits?: boolean
    pendingWithdrawals?: boolean
    reservedBets?: boolean
    reservedCashouts?: boolean
    lastDepositAt?: boolean
    totalDeposited?: boolean
    totalWithdrawn?: boolean
    totalTurnover?: boolean
    totalWagered?: boolean
    totalWon?: boolean
    totalLost?: boolean
    totalBonusGranted?: boolean
    totalBonusWagered?: boolean
    totalBonusReleased?: boolean
    isFrozen?: boolean
    frozenReason?: boolean
    frozenAt?: boolean
    frozenBy?: boolean
    kycLevelApplied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ledgerEntries?: boolean | Wallet$ledgerEntriesArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    deposits?: boolean | Wallet$depositsArgs<ExtArgs>
    withdrawals?: boolean | Wallet$withdrawalsArgs<ExtArgs>
    pendingOperations?: boolean | Wallet$pendingOperationsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    currency?: boolean
    realBalance?: boolean
    bonusBalance?: boolean
    withdrawableBalance?: boolean
    pendingDeposits?: boolean
    pendingWithdrawals?: boolean
    reservedBets?: boolean
    reservedCashouts?: boolean
    lastDepositAt?: boolean
    totalDeposited?: boolean
    totalWithdrawn?: boolean
    totalTurnover?: boolean
    totalWagered?: boolean
    totalWon?: boolean
    totalLost?: boolean
    totalBonusGranted?: boolean
    totalBonusWagered?: boolean
    totalBonusReleased?: boolean
    isFrozen?: boolean
    frozenReason?: boolean
    frozenAt?: boolean
    frozenBy?: boolean
    kycLevelApplied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    userId?: boolean
    currency?: boolean
    realBalance?: boolean
    bonusBalance?: boolean
    withdrawableBalance?: boolean
    pendingDeposits?: boolean
    pendingWithdrawals?: boolean
    reservedBets?: boolean
    reservedCashouts?: boolean
    lastDepositAt?: boolean
    totalDeposited?: boolean
    totalWithdrawn?: boolean
    totalTurnover?: boolean
    totalWagered?: boolean
    totalWon?: boolean
    totalLost?: boolean
    totalBonusGranted?: boolean
    totalBonusWagered?: boolean
    totalBonusReleased?: boolean
    isFrozen?: boolean
    frozenReason?: boolean
    frozenAt?: boolean
    frozenBy?: boolean
    kycLevelApplied?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgerEntries?: boolean | Wallet$ledgerEntriesArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    deposits?: boolean | Wallet$depositsArgs<ExtArgs>
    withdrawals?: boolean | Wallet$withdrawalsArgs<ExtArgs>
    pendingOperations?: boolean | Wallet$pendingOperationsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      ledgerEntries: Prisma.$WalletLedgerEntryPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      deposits: Prisma.$DepositPayload<ExtArgs>[]
      withdrawals: Prisma.$WithdrawalPayload<ExtArgs>[]
      pendingOperations: Prisma.$PendingWalletOperationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      currency: string
      realBalance: number
      bonusBalance: number
      withdrawableBalance: Prisma.Decimal
      pendingDeposits: number
      pendingWithdrawals: number
      reservedBets: number
      reservedCashouts: number
      lastDepositAt: Date | null
      totalDeposited: Prisma.Decimal
      totalWithdrawn: Prisma.Decimal
      totalTurnover: Prisma.Decimal
      totalWagered: number
      totalWon: number
      totalLost: number
      totalBonusGranted: number
      totalBonusWagered: number
      totalBonusReleased: number
      isFrozen: boolean
      frozenReason: string | null
      frozenAt: Date | null
      frozenBy: string | null
      kycLevelApplied: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const walletWithUserIdOnly = await prisma.wallet.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `userId`
     * const walletWithUserIdOnly = await prisma.wallet.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ledgerEntries<T extends Wallet$ledgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findMany"> | Null>
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    deposits<T extends Wallet$depositsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$depositsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany"> | Null>
    withdrawals<T extends Wallet$withdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany"> | Null>
    pendingOperations<T extends Wallet$pendingOperationsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$pendingOperationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Wallet model
   */ 
  interface WalletFieldRefs {
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly currency: FieldRef<"Wallet", 'String'>
    readonly realBalance: FieldRef<"Wallet", 'Float'>
    readonly bonusBalance: FieldRef<"Wallet", 'Float'>
    readonly withdrawableBalance: FieldRef<"Wallet", 'Decimal'>
    readonly pendingDeposits: FieldRef<"Wallet", 'Float'>
    readonly pendingWithdrawals: FieldRef<"Wallet", 'Float'>
    readonly reservedBets: FieldRef<"Wallet", 'Float'>
    readonly reservedCashouts: FieldRef<"Wallet", 'Float'>
    readonly lastDepositAt: FieldRef<"Wallet", 'DateTime'>
    readonly totalDeposited: FieldRef<"Wallet", 'Decimal'>
    readonly totalWithdrawn: FieldRef<"Wallet", 'Decimal'>
    readonly totalTurnover: FieldRef<"Wallet", 'Decimal'>
    readonly totalWagered: FieldRef<"Wallet", 'Float'>
    readonly totalWon: FieldRef<"Wallet", 'Float'>
    readonly totalLost: FieldRef<"Wallet", 'Float'>
    readonly totalBonusGranted: FieldRef<"Wallet", 'Float'>
    readonly totalBonusWagered: FieldRef<"Wallet", 'Float'>
    readonly totalBonusReleased: FieldRef<"Wallet", 'Float'>
    readonly isFrozen: FieldRef<"Wallet", 'Boolean'>
    readonly frozenReason: FieldRef<"Wallet", 'String'>
    readonly frozenAt: FieldRef<"Wallet", 'DateTime'>
    readonly frozenBy: FieldRef<"Wallet", 'String'>
    readonly kycLevelApplied: FieldRef<"Wallet", 'Int'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
    readonly deletedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet.ledgerEntries
   */
  export type Wallet$ledgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    where?: WalletLedgerEntryWhereInput
    orderBy?: WalletLedgerEntryOrderByWithRelationInput | WalletLedgerEntryOrderByWithRelationInput[]
    cursor?: WalletLedgerEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletLedgerEntryScalarFieldEnum | WalletLedgerEntryScalarFieldEnum[]
  }

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet.deposits
   */
  export type Wallet$depositsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Wallet.withdrawals
   */
  export type Wallet$withdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    cursor?: WithdrawalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Wallet.pendingOperations
   */
  export type Wallet$pendingOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    where?: PendingWalletOperationWhereInput
    orderBy?: PendingWalletOperationOrderByWithRelationInput | PendingWalletOperationOrderByWithRelationInput[]
    cursor?: PendingWalletOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingWalletOperationScalarFieldEnum | PendingWalletOperationScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model WalletLedgerEntry
   */

  export type AggregateWalletLedgerEntry = {
    _count: WalletLedgerEntryCountAggregateOutputType | null
    _avg: WalletLedgerEntryAvgAggregateOutputType | null
    _sum: WalletLedgerEntrySumAggregateOutputType | null
    _min: WalletLedgerEntryMinAggregateOutputType | null
    _max: WalletLedgerEntryMaxAggregateOutputType | null
  }

  export type WalletLedgerEntryAvgAggregateOutputType = {
    amount: number | null
    runningBalanceAfter: number | null
  }

  export type WalletLedgerEntrySumAggregateOutputType = {
    amount: number | null
    runningBalanceAfter: number | null
  }

  export type WalletLedgerEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    entryType: $Enums.LedgerEntryType | null
    accountType: $Enums.LedgerAccountType | null
    amount: number | null
    currency: string | null
    runningBalanceAfter: number | null
    transactionType: $Enums.TransactionType | null
    referenceId: string | null
    referenceType: string | null
    externalReferenceId: string | null
    note: string | null
    operatedBy: string | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletLedgerEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    entryType: $Enums.LedgerEntryType | null
    accountType: $Enums.LedgerAccountType | null
    amount: number | null
    currency: string | null
    runningBalanceAfter: number | null
    transactionType: $Enums.TransactionType | null
    referenceId: string | null
    referenceType: string | null
    externalReferenceId: string | null
    note: string | null
    operatedBy: string | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletLedgerEntryCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    walletCurrency: number
    entryType: number
    accountType: number
    amount: number
    currency: number
    runningBalanceAfter: number
    transactionType: number
    referenceId: number
    referenceType: number
    externalReferenceId: number
    note: number
    metadata: number
    operatedBy: number
    correlationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletLedgerEntryAvgAggregateInputType = {
    amount?: true
    runningBalanceAfter?: true
  }

  export type WalletLedgerEntrySumAggregateInputType = {
    amount?: true
    runningBalanceAfter?: true
  }

  export type WalletLedgerEntryMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    entryType?: true
    accountType?: true
    amount?: true
    currency?: true
    runningBalanceAfter?: true
    transactionType?: true
    referenceId?: true
    referenceType?: true
    externalReferenceId?: true
    note?: true
    operatedBy?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletLedgerEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    entryType?: true
    accountType?: true
    amount?: true
    currency?: true
    runningBalanceAfter?: true
    transactionType?: true
    referenceId?: true
    referenceType?: true
    externalReferenceId?: true
    note?: true
    operatedBy?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletLedgerEntryCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    entryType?: true
    accountType?: true
    amount?: true
    currency?: true
    runningBalanceAfter?: true
    transactionType?: true
    referenceId?: true
    referenceType?: true
    externalReferenceId?: true
    note?: true
    metadata?: true
    operatedBy?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletLedgerEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletLedgerEntry to aggregate.
     */
    where?: WalletLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgerEntries to fetch.
     */
    orderBy?: WalletLedgerEntryOrderByWithRelationInput | WalletLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletLedgerEntries
    **/
    _count?: true | WalletLedgerEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletLedgerEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletLedgerEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletLedgerEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletLedgerEntryMaxAggregateInputType
  }

  export type GetWalletLedgerEntryAggregateType<T extends WalletLedgerEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletLedgerEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletLedgerEntry[P]>
      : GetScalarType<T[P], AggregateWalletLedgerEntry[P]>
  }




  export type WalletLedgerEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletLedgerEntryWhereInput
    orderBy?: WalletLedgerEntryOrderByWithAggregationInput | WalletLedgerEntryOrderByWithAggregationInput[]
    by: WalletLedgerEntryScalarFieldEnum[] | WalletLedgerEntryScalarFieldEnum
    having?: WalletLedgerEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletLedgerEntryCountAggregateInputType | true
    _avg?: WalletLedgerEntryAvgAggregateInputType
    _sum?: WalletLedgerEntrySumAggregateInputType
    _min?: WalletLedgerEntryMinAggregateInputType
    _max?: WalletLedgerEntryMaxAggregateInputType
  }

  export type WalletLedgerEntryGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    walletCurrency: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId: string | null
    note: string | null
    metadata: JsonValue | null
    operatedBy: string | null
    correlationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WalletLedgerEntryCountAggregateOutputType | null
    _avg: WalletLedgerEntryAvgAggregateOutputType | null
    _sum: WalletLedgerEntrySumAggregateOutputType | null
    _min: WalletLedgerEntryMinAggregateOutputType | null
    _max: WalletLedgerEntryMaxAggregateOutputType | null
  }

  type GetWalletLedgerEntryGroupByPayload<T extends WalletLedgerEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletLedgerEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletLedgerEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletLedgerEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WalletLedgerEntryGroupByOutputType[P]>
        }
      >
    >


  export type WalletLedgerEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    entryType?: boolean
    accountType?: boolean
    amount?: boolean
    currency?: boolean
    runningBalanceAfter?: boolean
    transactionType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    externalReferenceId?: boolean
    note?: boolean
    metadata?: boolean
    operatedBy?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletLedgerEntry"]>

  export type WalletLedgerEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    entryType?: boolean
    accountType?: boolean
    amount?: boolean
    currency?: boolean
    runningBalanceAfter?: boolean
    transactionType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    externalReferenceId?: boolean
    note?: boolean
    metadata?: boolean
    operatedBy?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletLedgerEntry"]>

  export type WalletLedgerEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    entryType?: boolean
    accountType?: boolean
    amount?: boolean
    currency?: boolean
    runningBalanceAfter?: boolean
    transactionType?: boolean
    referenceId?: boolean
    referenceType?: boolean
    externalReferenceId?: boolean
    note?: boolean
    metadata?: boolean
    operatedBy?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletLedgerEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type WalletLedgerEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $WalletLedgerEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletLedgerEntry"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      walletCurrency: string
      entryType: $Enums.LedgerEntryType
      accountType: $Enums.LedgerAccountType
      amount: number
      currency: string
      runningBalanceAfter: number
      transactionType: $Enums.TransactionType
      referenceId: string
      referenceType: string
      externalReferenceId: string | null
      note: string | null
      metadata: Prisma.JsonValue | null
      operatedBy: string | null
      correlationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["walletLedgerEntry"]>
    composites: {}
  }

  type WalletLedgerEntryGetPayload<S extends boolean | null | undefined | WalletLedgerEntryDefaultArgs> = $Result.GetResult<Prisma.$WalletLedgerEntryPayload, S>

  type WalletLedgerEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletLedgerEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletLedgerEntryCountAggregateInputType | true
    }

  export interface WalletLedgerEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletLedgerEntry'], meta: { name: 'WalletLedgerEntry' } }
    /**
     * Find zero or one WalletLedgerEntry that matches the filter.
     * @param {WalletLedgerEntryFindUniqueArgs} args - Arguments to find a WalletLedgerEntry
     * @example
     * // Get one WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletLedgerEntryFindUniqueArgs>(args: SelectSubset<T, WalletLedgerEntryFindUniqueArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WalletLedgerEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletLedgerEntryFindUniqueOrThrowArgs} args - Arguments to find a WalletLedgerEntry
     * @example
     * // Get one WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletLedgerEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletLedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WalletLedgerEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryFindFirstArgs} args - Arguments to find a WalletLedgerEntry
     * @example
     * // Get one WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletLedgerEntryFindFirstArgs>(args?: SelectSubset<T, WalletLedgerEntryFindFirstArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WalletLedgerEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryFindFirstOrThrowArgs} args - Arguments to find a WalletLedgerEntry
     * @example
     * // Get one WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletLedgerEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletLedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WalletLedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletLedgerEntries
     * const walletLedgerEntries = await prisma.walletLedgerEntry.findMany()
     * 
     * // Get first 10 WalletLedgerEntries
     * const walletLedgerEntries = await prisma.walletLedgerEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletLedgerEntryWithIdOnly = await prisma.walletLedgerEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletLedgerEntryFindManyArgs>(args?: SelectSubset<T, WalletLedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WalletLedgerEntry.
     * @param {WalletLedgerEntryCreateArgs} args - Arguments to create a WalletLedgerEntry.
     * @example
     * // Create one WalletLedgerEntry
     * const WalletLedgerEntry = await prisma.walletLedgerEntry.create({
     *   data: {
     *     // ... data to create a WalletLedgerEntry
     *   }
     * })
     * 
     */
    create<T extends WalletLedgerEntryCreateArgs>(args: SelectSubset<T, WalletLedgerEntryCreateArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WalletLedgerEntries.
     * @param {WalletLedgerEntryCreateManyArgs} args - Arguments to create many WalletLedgerEntries.
     * @example
     * // Create many WalletLedgerEntries
     * const walletLedgerEntry = await prisma.walletLedgerEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletLedgerEntryCreateManyArgs>(args?: SelectSubset<T, WalletLedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletLedgerEntries and returns the data saved in the database.
     * @param {WalletLedgerEntryCreateManyAndReturnArgs} args - Arguments to create many WalletLedgerEntries.
     * @example
     * // Create many WalletLedgerEntries
     * const walletLedgerEntry = await prisma.walletLedgerEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletLedgerEntries and only return the `id`
     * const walletLedgerEntryWithIdOnly = await prisma.walletLedgerEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletLedgerEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletLedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WalletLedgerEntry.
     * @param {WalletLedgerEntryDeleteArgs} args - Arguments to delete one WalletLedgerEntry.
     * @example
     * // Delete one WalletLedgerEntry
     * const WalletLedgerEntry = await prisma.walletLedgerEntry.delete({
     *   where: {
     *     // ... filter to delete one WalletLedgerEntry
     *   }
     * })
     * 
     */
    delete<T extends WalletLedgerEntryDeleteArgs>(args: SelectSubset<T, WalletLedgerEntryDeleteArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WalletLedgerEntry.
     * @param {WalletLedgerEntryUpdateArgs} args - Arguments to update one WalletLedgerEntry.
     * @example
     * // Update one WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletLedgerEntryUpdateArgs>(args: SelectSubset<T, WalletLedgerEntryUpdateArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WalletLedgerEntries.
     * @param {WalletLedgerEntryDeleteManyArgs} args - Arguments to filter WalletLedgerEntries to delete.
     * @example
     * // Delete a few WalletLedgerEntries
     * const { count } = await prisma.walletLedgerEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletLedgerEntryDeleteManyArgs>(args?: SelectSubset<T, WalletLedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletLedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletLedgerEntries
     * const walletLedgerEntry = await prisma.walletLedgerEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletLedgerEntryUpdateManyArgs>(args: SelectSubset<T, WalletLedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletLedgerEntry.
     * @param {WalletLedgerEntryUpsertArgs} args - Arguments to update or create a WalletLedgerEntry.
     * @example
     * // Update or create a WalletLedgerEntry
     * const walletLedgerEntry = await prisma.walletLedgerEntry.upsert({
     *   create: {
     *     // ... data to create a WalletLedgerEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletLedgerEntry we want to update
     *   }
     * })
     */
    upsert<T extends WalletLedgerEntryUpsertArgs>(args: SelectSubset<T, WalletLedgerEntryUpsertArgs<ExtArgs>>): Prisma__WalletLedgerEntryClient<$Result.GetResult<Prisma.$WalletLedgerEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WalletLedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryCountArgs} args - Arguments to filter WalletLedgerEntries to count.
     * @example
     * // Count the number of WalletLedgerEntries
     * const count = await prisma.walletLedgerEntry.count({
     *   where: {
     *     // ... the filter for the WalletLedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends WalletLedgerEntryCountArgs>(
      args?: Subset<T, WalletLedgerEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletLedgerEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletLedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletLedgerEntryAggregateArgs>(args: Subset<T, WalletLedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetWalletLedgerEntryAggregateType<T>>

    /**
     * Group by WalletLedgerEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletLedgerEntryGroupByArgs} args - Group by arguments.
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
      T extends WalletLedgerEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletLedgerEntryGroupByArgs['orderBy'] }
        : { orderBy?: WalletLedgerEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletLedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletLedgerEntry model
   */
  readonly fields: WalletLedgerEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletLedgerEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletLedgerEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WalletLedgerEntry model
   */ 
  interface WalletLedgerEntryFieldRefs {
    readonly id: FieldRef<"WalletLedgerEntry", 'String'>
    readonly userId: FieldRef<"WalletLedgerEntry", 'String'>
    readonly walletId: FieldRef<"WalletLedgerEntry", 'String'>
    readonly walletCurrency: FieldRef<"WalletLedgerEntry", 'String'>
    readonly entryType: FieldRef<"WalletLedgerEntry", 'LedgerEntryType'>
    readonly accountType: FieldRef<"WalletLedgerEntry", 'LedgerAccountType'>
    readonly amount: FieldRef<"WalletLedgerEntry", 'Float'>
    readonly currency: FieldRef<"WalletLedgerEntry", 'String'>
    readonly runningBalanceAfter: FieldRef<"WalletLedgerEntry", 'Float'>
    readonly transactionType: FieldRef<"WalletLedgerEntry", 'TransactionType'>
    readonly referenceId: FieldRef<"WalletLedgerEntry", 'String'>
    readonly referenceType: FieldRef<"WalletLedgerEntry", 'String'>
    readonly externalReferenceId: FieldRef<"WalletLedgerEntry", 'String'>
    readonly note: FieldRef<"WalletLedgerEntry", 'String'>
    readonly metadata: FieldRef<"WalletLedgerEntry", 'Json'>
    readonly operatedBy: FieldRef<"WalletLedgerEntry", 'String'>
    readonly correlationId: FieldRef<"WalletLedgerEntry", 'String'>
    readonly createdAt: FieldRef<"WalletLedgerEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"WalletLedgerEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletLedgerEntry findUnique
   */
  export type WalletLedgerEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgerEntry to fetch.
     */
    where: WalletLedgerEntryWhereUniqueInput
  }

  /**
   * WalletLedgerEntry findUniqueOrThrow
   */
  export type WalletLedgerEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgerEntry to fetch.
     */
    where: WalletLedgerEntryWhereUniqueInput
  }

  /**
   * WalletLedgerEntry findFirst
   */
  export type WalletLedgerEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgerEntry to fetch.
     */
    where?: WalletLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgerEntries to fetch.
     */
    orderBy?: WalletLedgerEntryOrderByWithRelationInput | WalletLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletLedgerEntries.
     */
    cursor?: WalletLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletLedgerEntries.
     */
    distinct?: WalletLedgerEntryScalarFieldEnum | WalletLedgerEntryScalarFieldEnum[]
  }

  /**
   * WalletLedgerEntry findFirstOrThrow
   */
  export type WalletLedgerEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgerEntry to fetch.
     */
    where?: WalletLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgerEntries to fetch.
     */
    orderBy?: WalletLedgerEntryOrderByWithRelationInput | WalletLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletLedgerEntries.
     */
    cursor?: WalletLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletLedgerEntries.
     */
    distinct?: WalletLedgerEntryScalarFieldEnum | WalletLedgerEntryScalarFieldEnum[]
  }

  /**
   * WalletLedgerEntry findMany
   */
  export type WalletLedgerEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter, which WalletLedgerEntries to fetch.
     */
    where?: WalletLedgerEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletLedgerEntries to fetch.
     */
    orderBy?: WalletLedgerEntryOrderByWithRelationInput | WalletLedgerEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletLedgerEntries.
     */
    cursor?: WalletLedgerEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletLedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletLedgerEntries.
     */
    skip?: number
    distinct?: WalletLedgerEntryScalarFieldEnum | WalletLedgerEntryScalarFieldEnum[]
  }

  /**
   * WalletLedgerEntry create
   */
  export type WalletLedgerEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletLedgerEntry.
     */
    data: XOR<WalletLedgerEntryCreateInput, WalletLedgerEntryUncheckedCreateInput>
  }

  /**
   * WalletLedgerEntry createMany
   */
  export type WalletLedgerEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletLedgerEntries.
     */
    data: WalletLedgerEntryCreateManyInput | WalletLedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletLedgerEntry createManyAndReturn
   */
  export type WalletLedgerEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WalletLedgerEntries.
     */
    data: WalletLedgerEntryCreateManyInput | WalletLedgerEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletLedgerEntry update
   */
  export type WalletLedgerEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletLedgerEntry.
     */
    data: XOR<WalletLedgerEntryUpdateInput, WalletLedgerEntryUncheckedUpdateInput>
    /**
     * Choose, which WalletLedgerEntry to update.
     */
    where: WalletLedgerEntryWhereUniqueInput
  }

  /**
   * WalletLedgerEntry updateMany
   */
  export type WalletLedgerEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletLedgerEntries.
     */
    data: XOR<WalletLedgerEntryUpdateManyMutationInput, WalletLedgerEntryUncheckedUpdateManyInput>
    /**
     * Filter which WalletLedgerEntries to update
     */
    where?: WalletLedgerEntryWhereInput
  }

  /**
   * WalletLedgerEntry upsert
   */
  export type WalletLedgerEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletLedgerEntry to update in case it exists.
     */
    where: WalletLedgerEntryWhereUniqueInput
    /**
     * In case the WalletLedgerEntry found by the `where` argument doesn't exist, create a new WalletLedgerEntry with this data.
     */
    create: XOR<WalletLedgerEntryCreateInput, WalletLedgerEntryUncheckedCreateInput>
    /**
     * In case the WalletLedgerEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletLedgerEntryUpdateInput, WalletLedgerEntryUncheckedUpdateInput>
  }

  /**
   * WalletLedgerEntry delete
   */
  export type WalletLedgerEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
    /**
     * Filter which WalletLedgerEntry to delete.
     */
    where: WalletLedgerEntryWhereUniqueInput
  }

  /**
   * WalletLedgerEntry deleteMany
   */
  export type WalletLedgerEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletLedgerEntries to delete
     */
    where?: WalletLedgerEntryWhereInput
  }

  /**
   * WalletLedgerEntry without action
   */
  export type WalletLedgerEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletLedgerEntry
     */
    select?: WalletLedgerEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletLedgerEntryInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amountAmount: number | null
    feeAmount: number | null
    netAmountAmount: number | null
    riskScore: number | null
    kycLevelAtTime: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amountAmount: number | null
    feeAmount: number | null
    netAmountAmount: number | null
    riskScore: number | null
    kycLevelAtTime: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    type: $Enums.TransactionType | null
    amountAmount: number | null
    amountCurrency: string | null
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    externalId: string | null
    referenceId: string | null
    referenceType: string | null
    initiatedBy: string | null
    processedAt: Date | null
    failureReason: string | null
    note: string | null
    riskScore: number | null
    kycLevelAtTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    type: $Enums.TransactionType | null
    amountAmount: number | null
    amountCurrency: string | null
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    status: $Enums.PaymentStatus | null
    provider: $Enums.PaymentProvider | null
    externalId: string | null
    referenceId: string | null
    referenceType: string | null
    initiatedBy: string | null
    processedAt: Date | null
    failureReason: string | null
    note: string | null
    riskScore: number | null
    kycLevelAtTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    walletCurrency: number
    type: number
    amountAmount: number
    amountCurrency: number
    feeAmount: number
    feeCurrency: number
    netAmountAmount: number
    netAmountCurrency: number
    status: number
    provider: number
    externalId: number
    referenceId: number
    referenceType: number
    initiatedBy: number
    processedAt: number
    failureReason: number
    note: number
    metadata: number
    riskScore: number
    kycLevelAtTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amountAmount?: true
    feeAmount?: true
    netAmountAmount?: true
    riskScore?: true
    kycLevelAtTime?: true
  }

  export type TransactionSumAggregateInputType = {
    amountAmount?: true
    feeAmount?: true
    netAmountAmount?: true
    riskScore?: true
    kycLevelAtTime?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    type?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    status?: true
    provider?: true
    externalId?: true
    referenceId?: true
    referenceType?: true
    initiatedBy?: true
    processedAt?: true
    failureReason?: true
    note?: true
    riskScore?: true
    kycLevelAtTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    type?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    status?: true
    provider?: true
    externalId?: true
    referenceId?: true
    referenceType?: true
    initiatedBy?: true
    processedAt?: true
    failureReason?: true
    note?: true
    riskScore?: true
    kycLevelAtTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    type?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    status?: true
    provider?: true
    externalId?: true
    referenceId?: true
    referenceType?: true
    initiatedBy?: true
    processedAt?: true
    failureReason?: true
    note?: true
    metadata?: true
    riskScore?: true
    kycLevelAtTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    walletCurrency: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    status: $Enums.PaymentStatus
    provider: $Enums.PaymentProvider | null
    externalId: string | null
    referenceId: string | null
    referenceType: string | null
    initiatedBy: string | null
    processedAt: Date | null
    failureReason: string | null
    note: string | null
    metadata: JsonValue | null
    riskScore: number | null
    kycLevelAtTime: number
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    type?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    status?: boolean
    provider?: boolean
    externalId?: boolean
    referenceId?: boolean
    referenceType?: boolean
    initiatedBy?: boolean
    processedAt?: boolean
    failureReason?: boolean
    note?: boolean
    metadata?: boolean
    riskScore?: boolean
    kycLevelAtTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    withdrawal?: boolean | Transaction$withdrawalArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    type?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    status?: boolean
    provider?: boolean
    externalId?: boolean
    referenceId?: boolean
    referenceType?: boolean
    initiatedBy?: boolean
    processedAt?: boolean
    failureReason?: boolean
    note?: boolean
    metadata?: boolean
    riskScore?: boolean
    kycLevelAtTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    type?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    status?: boolean
    provider?: boolean
    externalId?: boolean
    referenceId?: boolean
    referenceType?: boolean
    initiatedBy?: boolean
    processedAt?: boolean
    failureReason?: boolean
    note?: boolean
    metadata?: boolean
    riskScore?: boolean
    kycLevelAtTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    deposit?: boolean | Transaction$depositArgs<ExtArgs>
    withdrawal?: boolean | Transaction$withdrawalArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      deposit: Prisma.$DepositPayload<ExtArgs> | null
      withdrawal: Prisma.$WithdrawalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      walletCurrency: string
      type: $Enums.TransactionType
      amountAmount: number
      amountCurrency: string
      feeAmount: number | null
      feeCurrency: string | null
      netAmountAmount: number | null
      netAmountCurrency: string | null
      status: $Enums.PaymentStatus
      provider: $Enums.PaymentProvider | null
      externalId: string | null
      referenceId: string | null
      referenceType: string | null
      initiatedBy: string | null
      processedAt: Date | null
      failureReason: string | null
      note: string | null
      metadata: Prisma.JsonValue | null
      riskScore: number | null
      kycLevelAtTime: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deposit<T extends Transaction$depositArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$depositArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    withdrawal<T extends Transaction$withdrawalArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$withdrawalArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly walletId: FieldRef<"Transaction", 'String'>
    readonly walletCurrency: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amountAmount: FieldRef<"Transaction", 'Float'>
    readonly amountCurrency: FieldRef<"Transaction", 'String'>
    readonly feeAmount: FieldRef<"Transaction", 'Float'>
    readonly feeCurrency: FieldRef<"Transaction", 'String'>
    readonly netAmountAmount: FieldRef<"Transaction", 'Float'>
    readonly netAmountCurrency: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'PaymentStatus'>
    readonly provider: FieldRef<"Transaction", 'PaymentProvider'>
    readonly externalId: FieldRef<"Transaction", 'String'>
    readonly referenceId: FieldRef<"Transaction", 'String'>
    readonly referenceType: FieldRef<"Transaction", 'String'>
    readonly initiatedBy: FieldRef<"Transaction", 'String'>
    readonly processedAt: FieldRef<"Transaction", 'DateTime'>
    readonly failureReason: FieldRef<"Transaction", 'String'>
    readonly note: FieldRef<"Transaction", 'String'>
    readonly metadata: FieldRef<"Transaction", 'Json'>
    readonly riskScore: FieldRef<"Transaction", 'Float'>
    readonly kycLevelAtTime: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.deposit
   */
  export type Transaction$depositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
  }

  /**
   * Transaction.withdrawal
   */
  export type Transaction$withdrawalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    where?: WithdrawalWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amountAmount: number | null
    feeAmount: number | null
    netAmountAmount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amountAmount: number | null
    feeAmount: number | null
    netAmountAmount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    transactionId: string | null
    amountAmount: number | null
    amountCurrency: string | null
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    provider: $Enums.PaymentProvider | null
    providerTransactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentMethodType: string | null
    paymentMethodLast4: string | null
    paymentMethodBrand: string | null
    returnUrl: string | null
    confirmedAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    ipAddress: string | null
    riskCheckBypassed: boolean | null
    appliedBonusId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    transactionId: string | null
    amountAmount: number | null
    amountCurrency: string | null
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    provider: $Enums.PaymentProvider | null
    providerTransactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentMethodType: string | null
    paymentMethodLast4: string | null
    paymentMethodBrand: string | null
    returnUrl: string | null
    confirmedAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    ipAddress: string | null
    riskCheckBypassed: boolean | null
    appliedBonusId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    walletCurrency: number
    transactionId: number
    amountAmount: number
    amountCurrency: number
    feeAmount: number
    feeCurrency: number
    netAmountAmount: number
    netAmountCurrency: number
    provider: number
    providerTransactionId: number
    status: number
    paymentMethodType: number
    paymentMethodLast4: number
    paymentMethodBrand: number
    returnUrl: number
    providerRawRequest: number
    providerRawResponse: number
    confirmedAt: number
    failedAt: number
    failureReason: number
    ipAddress: number
    riskCheckBypassed: number
    appliedBonusId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amountAmount?: true
    feeAmount?: true
    netAmountAmount?: true
  }

  export type DepositSumAggregateInputType = {
    amountAmount?: true
    feeAmount?: true
    netAmountAmount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    provider?: true
    providerTransactionId?: true
    status?: true
    paymentMethodType?: true
    paymentMethodLast4?: true
    paymentMethodBrand?: true
    returnUrl?: true
    confirmedAt?: true
    failedAt?: true
    failureReason?: true
    ipAddress?: true
    riskCheckBypassed?: true
    appliedBonusId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    provider?: true
    providerTransactionId?: true
    status?: true
    paymentMethodType?: true
    paymentMethodLast4?: true
    paymentMethodBrand?: true
    returnUrl?: true
    confirmedAt?: true
    failedAt?: true
    failureReason?: true
    ipAddress?: true
    riskCheckBypassed?: true
    appliedBonusId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    feeAmount?: true
    feeCurrency?: true
    netAmountAmount?: true
    netAmountCurrency?: true
    provider?: true
    providerTransactionId?: true
    status?: true
    paymentMethodType?: true
    paymentMethodLast4?: true
    paymentMethodBrand?: true
    returnUrl?: true
    providerRawRequest?: true
    providerRawResponse?: true
    confirmedAt?: true
    failedAt?: true
    failureReason?: true
    ipAddress?: true
    riskCheckBypassed?: true
    appliedBonusId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    feeAmount: number | null
    feeCurrency: string | null
    netAmountAmount: number | null
    netAmountCurrency: string | null
    provider: $Enums.PaymentProvider
    providerTransactionId: string | null
    status: $Enums.PaymentStatus
    paymentMethodType: string | null
    paymentMethodLast4: string | null
    paymentMethodBrand: string | null
    returnUrl: string | null
    providerRawRequest: JsonValue | null
    providerRawResponse: JsonValue | null
    confirmedAt: Date | null
    failedAt: Date | null
    failureReason: string | null
    ipAddress: string | null
    riskCheckBypassed: boolean
    appliedBonusId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    provider?: boolean
    providerTransactionId?: boolean
    status?: boolean
    paymentMethodType?: boolean
    paymentMethodLast4?: boolean
    paymentMethodBrand?: boolean
    returnUrl?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    confirmedAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    ipAddress?: boolean
    riskCheckBypassed?: boolean
    appliedBonusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    provider?: boolean
    providerTransactionId?: boolean
    status?: boolean
    paymentMethodType?: boolean
    paymentMethodLast4?: boolean
    paymentMethodBrand?: boolean
    returnUrl?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    confirmedAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    ipAddress?: boolean
    riskCheckBypassed?: boolean
    appliedBonusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    feeAmount?: boolean
    feeCurrency?: boolean
    netAmountAmount?: boolean
    netAmountCurrency?: boolean
    provider?: boolean
    providerTransactionId?: boolean
    status?: boolean
    paymentMethodType?: boolean
    paymentMethodLast4?: boolean
    paymentMethodBrand?: boolean
    returnUrl?: boolean
    providerRawRequest?: boolean
    providerRawResponse?: boolean
    confirmedAt?: boolean
    failedAt?: boolean
    failureReason?: boolean
    ipAddress?: boolean
    riskCheckBypassed?: boolean
    appliedBonusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      walletCurrency: string
      transactionId: string
      amountAmount: number
      amountCurrency: string
      feeAmount: number | null
      feeCurrency: string | null
      netAmountAmount: number | null
      netAmountCurrency: string | null
      provider: $Enums.PaymentProvider
      providerTransactionId: string | null
      status: $Enums.PaymentStatus
      paymentMethodType: string | null
      paymentMethodLast4: string | null
      paymentMethodBrand: string | null
      returnUrl: string | null
      providerRawRequest: Prisma.JsonValue | null
      providerRawResponse: Prisma.JsonValue | null
      confirmedAt: Date | null
      failedAt: Date | null
      failureReason: string | null
      ipAddress: string | null
      riskCheckBypassed: boolean
      appliedBonusId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Deposit model
   */ 
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly userId: FieldRef<"Deposit", 'String'>
    readonly walletId: FieldRef<"Deposit", 'String'>
    readonly walletCurrency: FieldRef<"Deposit", 'String'>
    readonly transactionId: FieldRef<"Deposit", 'String'>
    readonly amountAmount: FieldRef<"Deposit", 'Float'>
    readonly amountCurrency: FieldRef<"Deposit", 'String'>
    readonly feeAmount: FieldRef<"Deposit", 'Float'>
    readonly feeCurrency: FieldRef<"Deposit", 'String'>
    readonly netAmountAmount: FieldRef<"Deposit", 'Float'>
    readonly netAmountCurrency: FieldRef<"Deposit", 'String'>
    readonly provider: FieldRef<"Deposit", 'PaymentProvider'>
    readonly providerTransactionId: FieldRef<"Deposit", 'String'>
    readonly status: FieldRef<"Deposit", 'PaymentStatus'>
    readonly paymentMethodType: FieldRef<"Deposit", 'String'>
    readonly paymentMethodLast4: FieldRef<"Deposit", 'String'>
    readonly paymentMethodBrand: FieldRef<"Deposit", 'String'>
    readonly returnUrl: FieldRef<"Deposit", 'String'>
    readonly providerRawRequest: FieldRef<"Deposit", 'Json'>
    readonly providerRawResponse: FieldRef<"Deposit", 'Json'>
    readonly confirmedAt: FieldRef<"Deposit", 'DateTime'>
    readonly failedAt: FieldRef<"Deposit", 'DateTime'>
    readonly failureReason: FieldRef<"Deposit", 'String'>
    readonly ipAddress: FieldRef<"Deposit", 'String'>
    readonly riskCheckBypassed: FieldRef<"Deposit", 'Boolean'>
    readonly appliedBonusId: FieldRef<"Deposit", 'String'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
    readonly updatedAt: FieldRef<"Deposit", 'DateTime'>
    readonly deletedAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Withdrawal
   */

  export type AggregateWithdrawal = {
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  export type WithdrawalAvgAggregateOutputType = {
    amountAmount: number | null
    kycLevelAtRequest: number | null
    riskScore: number | null
  }

  export type WithdrawalSumAggregateOutputType = {
    amountAmount: number | null
    kycLevelAtRequest: number | null
    riskScore: number | null
  }

  export type WithdrawalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    transactionId: string | null
    amountAmount: number | null
    amountCurrency: string | null
    provider: $Enums.PaymentProvider | null
    providerPayoutId: string | null
    status: $Enums.PaymentStatus | null
    requestedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectionReason: string | null
    processedAt: Date | null
    failedAt: Date | null
    kycLevelAtRequest: number | null
    riskScore: number | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WithdrawalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    walletId: string | null
    walletCurrency: string | null
    transactionId: string | null
    amountAmount: number | null
    amountCurrency: string | null
    provider: $Enums.PaymentProvider | null
    providerPayoutId: string | null
    status: $Enums.PaymentStatus | null
    requestedAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectionReason: string | null
    processedAt: Date | null
    failedAt: Date | null
    kycLevelAtRequest: number | null
    riskScore: number | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type WithdrawalCountAggregateOutputType = {
    id: number
    userId: number
    walletId: number
    walletCurrency: number
    transactionId: number
    amountAmount: number
    amountCurrency: number
    provider: number
    providerPayoutId: number
    status: number
    beneficiaryAccountJson: number
    requestedAt: number
    approvedAt: number
    approvedBy: number
    rejectedAt: number
    rejectedBy: number
    rejectionReason: number
    processedAt: number
    failedAt: number
    kycLevelAtRequest: number
    pendingDocumentIds: number
    riskScore: number
    correlationId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type WithdrawalAvgAggregateInputType = {
    amountAmount?: true
    kycLevelAtRequest?: true
    riskScore?: true
  }

  export type WithdrawalSumAggregateInputType = {
    amountAmount?: true
    kycLevelAtRequest?: true
    riskScore?: true
  }

  export type WithdrawalMinAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    provider?: true
    providerPayoutId?: true
    status?: true
    requestedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectionReason?: true
    processedAt?: true
    failedAt?: true
    kycLevelAtRequest?: true
    riskScore?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WithdrawalMaxAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    provider?: true
    providerPayoutId?: true
    status?: true
    requestedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectionReason?: true
    processedAt?: true
    failedAt?: true
    kycLevelAtRequest?: true
    riskScore?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type WithdrawalCountAggregateInputType = {
    id?: true
    userId?: true
    walletId?: true
    walletCurrency?: true
    transactionId?: true
    amountAmount?: true
    amountCurrency?: true
    provider?: true
    providerPayoutId?: true
    status?: true
    beneficiaryAccountJson?: true
    requestedAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectionReason?: true
    processedAt?: true
    failedAt?: true
    kycLevelAtRequest?: true
    pendingDocumentIds?: true
    riskScore?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type WithdrawalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawal to aggregate.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Withdrawals
    **/
    _count?: true | WithdrawalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WithdrawalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WithdrawalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WithdrawalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WithdrawalMaxAggregateInputType
  }

  export type GetWithdrawalAggregateType<T extends WithdrawalAggregateArgs> = {
        [P in keyof T & keyof AggregateWithdrawal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWithdrawal[P]>
      : GetScalarType<T[P], AggregateWithdrawal[P]>
  }




  export type WithdrawalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WithdrawalWhereInput
    orderBy?: WithdrawalOrderByWithAggregationInput | WithdrawalOrderByWithAggregationInput[]
    by: WithdrawalScalarFieldEnum[] | WithdrawalScalarFieldEnum
    having?: WithdrawalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WithdrawalCountAggregateInputType | true
    _avg?: WithdrawalAvgAggregateInputType
    _sum?: WithdrawalSumAggregateInputType
    _min?: WithdrawalMinAggregateInputType
    _max?: WithdrawalMaxAggregateInputType
  }

  export type WithdrawalGroupByOutputType = {
    id: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId: string | null
    status: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonValue
    requestedAt: Date
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectionReason: string | null
    processedAt: Date | null
    failedAt: Date | null
    kycLevelAtRequest: number
    pendingDocumentIds: string[]
    riskScore: number | null
    correlationId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: WithdrawalCountAggregateOutputType | null
    _avg: WithdrawalAvgAggregateOutputType | null
    _sum: WithdrawalSumAggregateOutputType | null
    _min: WithdrawalMinAggregateOutputType | null
    _max: WithdrawalMaxAggregateOutputType | null
  }

  type GetWithdrawalGroupByPayload<T extends WithdrawalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WithdrawalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WithdrawalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
            : GetScalarType<T[P], WithdrawalGroupByOutputType[P]>
        }
      >
    >


  export type WithdrawalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    provider?: boolean
    providerPayoutId?: boolean
    status?: boolean
    beneficiaryAccountJson?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectionReason?: boolean
    processedAt?: boolean
    failedAt?: boolean
    kycLevelAtRequest?: boolean
    pendingDocumentIds?: boolean
    riskScore?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    provider?: boolean
    providerPayoutId?: boolean
    status?: boolean
    beneficiaryAccountJson?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectionReason?: boolean
    processedAt?: boolean
    failedAt?: boolean
    kycLevelAtRequest?: boolean
    pendingDocumentIds?: boolean
    riskScore?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["withdrawal"]>

  export type WithdrawalSelectScalar = {
    id?: boolean
    userId?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    transactionId?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    provider?: boolean
    providerPayoutId?: boolean
    status?: boolean
    beneficiaryAccountJson?: boolean
    requestedAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectionReason?: boolean
    processedAt?: boolean
    failedAt?: boolean
    kycLevelAtRequest?: boolean
    pendingDocumentIds?: boolean
    riskScore?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type WithdrawalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type WithdrawalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $WithdrawalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Withdrawal"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      walletId: string
      walletCurrency: string
      transactionId: string
      amountAmount: number
      amountCurrency: string
      provider: $Enums.PaymentProvider
      providerPayoutId: string | null
      status: $Enums.PaymentStatus
      beneficiaryAccountJson: Prisma.JsonValue
      requestedAt: Date
      approvedAt: Date | null
      approvedBy: string | null
      rejectedAt: Date | null
      rejectedBy: string | null
      rejectionReason: string | null
      processedAt: Date | null
      failedAt: Date | null
      kycLevelAtRequest: number
      pendingDocumentIds: string[]
      riskScore: number | null
      correlationId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["withdrawal"]>
    composites: {}
  }

  type WithdrawalGetPayload<S extends boolean | null | undefined | WithdrawalDefaultArgs> = $Result.GetResult<Prisma.$WithdrawalPayload, S>

  type WithdrawalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WithdrawalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WithdrawalCountAggregateInputType | true
    }

  export interface WithdrawalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Withdrawal'], meta: { name: 'Withdrawal' } }
    /**
     * Find zero or one Withdrawal that matches the filter.
     * @param {WithdrawalFindUniqueArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WithdrawalFindUniqueArgs>(args: SelectSubset<T, WithdrawalFindUniqueArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Withdrawal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WithdrawalFindUniqueOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WithdrawalFindUniqueOrThrowArgs>(args: SelectSubset<T, WithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Withdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WithdrawalFindFirstArgs>(args?: SelectSubset<T, WithdrawalFindFirstArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Withdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindFirstOrThrowArgs} args - Arguments to find a Withdrawal
     * @example
     * // Get one Withdrawal
     * const withdrawal = await prisma.withdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WithdrawalFindFirstOrThrowArgs>(args?: SelectSubset<T, WithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Withdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany()
     * 
     * // Get first 10 Withdrawals
     * const withdrawals = await prisma.withdrawal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WithdrawalFindManyArgs>(args?: SelectSubset<T, WithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Withdrawal.
     * @param {WithdrawalCreateArgs} args - Arguments to create a Withdrawal.
     * @example
     * // Create one Withdrawal
     * const Withdrawal = await prisma.withdrawal.create({
     *   data: {
     *     // ... data to create a Withdrawal
     *   }
     * })
     * 
     */
    create<T extends WithdrawalCreateArgs>(args: SelectSubset<T, WithdrawalCreateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Withdrawals.
     * @param {WithdrawalCreateManyArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WithdrawalCreateManyArgs>(args?: SelectSubset<T, WithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Withdrawals and returns the data saved in the database.
     * @param {WithdrawalCreateManyAndReturnArgs} args - Arguments to create many Withdrawals.
     * @example
     * // Create many Withdrawals
     * const withdrawal = await prisma.withdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Withdrawals and only return the `id`
     * const withdrawalWithIdOnly = await prisma.withdrawal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WithdrawalCreateManyAndReturnArgs>(args?: SelectSubset<T, WithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Withdrawal.
     * @param {WithdrawalDeleteArgs} args - Arguments to delete one Withdrawal.
     * @example
     * // Delete one Withdrawal
     * const Withdrawal = await prisma.withdrawal.delete({
     *   where: {
     *     // ... filter to delete one Withdrawal
     *   }
     * })
     * 
     */
    delete<T extends WithdrawalDeleteArgs>(args: SelectSubset<T, WithdrawalDeleteArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Withdrawal.
     * @param {WithdrawalUpdateArgs} args - Arguments to update one Withdrawal.
     * @example
     * // Update one Withdrawal
     * const withdrawal = await prisma.withdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WithdrawalUpdateArgs>(args: SelectSubset<T, WithdrawalUpdateArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Withdrawals.
     * @param {WithdrawalDeleteManyArgs} args - Arguments to filter Withdrawals to delete.
     * @example
     * // Delete a few Withdrawals
     * const { count } = await prisma.withdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WithdrawalDeleteManyArgs>(args?: SelectSubset<T, WithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Withdrawals
     * const withdrawal = await prisma.withdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WithdrawalUpdateManyArgs>(args: SelectSubset<T, WithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Withdrawal.
     * @param {WithdrawalUpsertArgs} args - Arguments to update or create a Withdrawal.
     * @example
     * // Update or create a Withdrawal
     * const withdrawal = await prisma.withdrawal.upsert({
     *   create: {
     *     // ... data to create a Withdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Withdrawal we want to update
     *   }
     * })
     */
    upsert<T extends WithdrawalUpsertArgs>(args: SelectSubset<T, WithdrawalUpsertArgs<ExtArgs>>): Prisma__WithdrawalClient<$Result.GetResult<Prisma.$WithdrawalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Withdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalCountArgs} args - Arguments to filter Withdrawals to count.
     * @example
     * // Count the number of Withdrawals
     * const count = await prisma.withdrawal.count({
     *   where: {
     *     // ... the filter for the Withdrawals we want to count
     *   }
     * })
    **/
    count<T extends WithdrawalCountArgs>(
      args?: Subset<T, WithdrawalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WithdrawalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WithdrawalAggregateArgs>(args: Subset<T, WithdrawalAggregateArgs>): Prisma.PrismaPromise<GetWithdrawalAggregateType<T>>

    /**
     * Group by Withdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WithdrawalGroupByArgs} args - Group by arguments.
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
      T extends WithdrawalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WithdrawalGroupByArgs['orderBy'] }
        : { orderBy?: WithdrawalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Withdrawal model
   */
  readonly fields: WithdrawalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Withdrawal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WithdrawalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Withdrawal model
   */ 
  interface WithdrawalFieldRefs {
    readonly id: FieldRef<"Withdrawal", 'String'>
    readonly userId: FieldRef<"Withdrawal", 'String'>
    readonly walletId: FieldRef<"Withdrawal", 'String'>
    readonly walletCurrency: FieldRef<"Withdrawal", 'String'>
    readonly transactionId: FieldRef<"Withdrawal", 'String'>
    readonly amountAmount: FieldRef<"Withdrawal", 'Float'>
    readonly amountCurrency: FieldRef<"Withdrawal", 'String'>
    readonly provider: FieldRef<"Withdrawal", 'PaymentProvider'>
    readonly providerPayoutId: FieldRef<"Withdrawal", 'String'>
    readonly status: FieldRef<"Withdrawal", 'PaymentStatus'>
    readonly beneficiaryAccountJson: FieldRef<"Withdrawal", 'Json'>
    readonly requestedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly approvedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly approvedBy: FieldRef<"Withdrawal", 'String'>
    readonly rejectedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly rejectedBy: FieldRef<"Withdrawal", 'String'>
    readonly rejectionReason: FieldRef<"Withdrawal", 'String'>
    readonly processedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly failedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly kycLevelAtRequest: FieldRef<"Withdrawal", 'Int'>
    readonly pendingDocumentIds: FieldRef<"Withdrawal", 'String[]'>
    readonly riskScore: FieldRef<"Withdrawal", 'Float'>
    readonly correlationId: FieldRef<"Withdrawal", 'String'>
    readonly createdAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly updatedAt: FieldRef<"Withdrawal", 'DateTime'>
    readonly deletedAt: FieldRef<"Withdrawal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Withdrawal findUnique
   */
  export type WithdrawalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findUniqueOrThrow
   */
  export type WithdrawalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal findFirst
   */
  export type WithdrawalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findFirstOrThrow
   */
  export type WithdrawalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawal to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Withdrawals.
     */
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal findMany
   */
  export type WithdrawalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter, which Withdrawals to fetch.
     */
    where?: WithdrawalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Withdrawals to fetch.
     */
    orderBy?: WithdrawalOrderByWithRelationInput | WithdrawalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Withdrawals.
     */
    cursor?: WithdrawalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Withdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Withdrawals.
     */
    skip?: number
    distinct?: WithdrawalScalarFieldEnum | WithdrawalScalarFieldEnum[]
  }

  /**
   * Withdrawal create
   */
  export type WithdrawalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to create a Withdrawal.
     */
    data: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
  }

  /**
   * Withdrawal createMany
   */
  export type WithdrawalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Withdrawal createManyAndReturn
   */
  export type WithdrawalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Withdrawals.
     */
    data: WithdrawalCreateManyInput | WithdrawalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Withdrawal update
   */
  export type WithdrawalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The data needed to update a Withdrawal.
     */
    data: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
    /**
     * Choose, which Withdrawal to update.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal updateMany
   */
  export type WithdrawalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Withdrawals.
     */
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyInput>
    /**
     * Filter which Withdrawals to update
     */
    where?: WithdrawalWhereInput
  }

  /**
   * Withdrawal upsert
   */
  export type WithdrawalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * The filter to search for the Withdrawal to update in case it exists.
     */
    where: WithdrawalWhereUniqueInput
    /**
     * In case the Withdrawal found by the `where` argument doesn't exist, create a new Withdrawal with this data.
     */
    create: XOR<WithdrawalCreateInput, WithdrawalUncheckedCreateInput>
    /**
     * In case the Withdrawal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WithdrawalUpdateInput, WithdrawalUncheckedUpdateInput>
  }

  /**
   * Withdrawal delete
   */
  export type WithdrawalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
    /**
     * Filter which Withdrawal to delete.
     */
    where: WithdrawalWhereUniqueInput
  }

  /**
   * Withdrawal deleteMany
   */
  export type WithdrawalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Withdrawals to delete
     */
    where?: WithdrawalWhereInput
  }

  /**
   * Withdrawal without action
   */
  export type WithdrawalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Withdrawal
     */
    select?: WithdrawalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WithdrawalInclude<ExtArgs> | null
  }


  /**
   * Model PendingWalletOperation
   */

  export type AggregatePendingWalletOperation = {
    _count: PendingWalletOperationCountAggregateOutputType | null
    _avg: PendingWalletOperationAvgAggregateOutputType | null
    _sum: PendingWalletOperationSumAggregateOutputType | null
    _min: PendingWalletOperationMinAggregateOutputType | null
    _max: PendingWalletOperationMaxAggregateOutputType | null
  }

  export type PendingWalletOperationAvgAggregateOutputType = {
    amountAmount: number | null
  }

  export type PendingWalletOperationSumAggregateOutputType = {
    amountAmount: number | null
  }

  export type PendingWalletOperationMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    walletCurrency: string | null
    userId: string | null
    operationType: $Enums.PendingOperationType | null
    amountAmount: number | null
    amountCurrency: string | null
    reservationType: $Enums.ReservationType | null
    lockedAt: Date | null
    lockExpiresAt: Date | null
    releasedAt: Date | null
    appliedAt: Date | null
    referenceId: string | null
    referenceType: string | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendingWalletOperationMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    walletCurrency: string | null
    userId: string | null
    operationType: $Enums.PendingOperationType | null
    amountAmount: number | null
    amountCurrency: string | null
    reservationType: $Enums.ReservationType | null
    lockedAt: Date | null
    lockExpiresAt: Date | null
    releasedAt: Date | null
    appliedAt: Date | null
    referenceId: string | null
    referenceType: string | null
    correlationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendingWalletOperationCountAggregateOutputType = {
    id: number
    walletId: number
    walletCurrency: number
    userId: number
    operationType: number
    amountAmount: number
    amountCurrency: number
    reservationType: number
    lockedAt: number
    lockExpiresAt: number
    releasedAt: number
    appliedAt: number
    referenceId: number
    referenceType: number
    correlationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PendingWalletOperationAvgAggregateInputType = {
    amountAmount?: true
  }

  export type PendingWalletOperationSumAggregateInputType = {
    amountAmount?: true
  }

  export type PendingWalletOperationMinAggregateInputType = {
    id?: true
    walletId?: true
    walletCurrency?: true
    userId?: true
    operationType?: true
    amountAmount?: true
    amountCurrency?: true
    reservationType?: true
    lockedAt?: true
    lockExpiresAt?: true
    releasedAt?: true
    appliedAt?: true
    referenceId?: true
    referenceType?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendingWalletOperationMaxAggregateInputType = {
    id?: true
    walletId?: true
    walletCurrency?: true
    userId?: true
    operationType?: true
    amountAmount?: true
    amountCurrency?: true
    reservationType?: true
    lockedAt?: true
    lockExpiresAt?: true
    releasedAt?: true
    appliedAt?: true
    referenceId?: true
    referenceType?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendingWalletOperationCountAggregateInputType = {
    id?: true
    walletId?: true
    walletCurrency?: true
    userId?: true
    operationType?: true
    amountAmount?: true
    amountCurrency?: true
    reservationType?: true
    lockedAt?: true
    lockExpiresAt?: true
    releasedAt?: true
    appliedAt?: true
    referenceId?: true
    referenceType?: true
    correlationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PendingWalletOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingWalletOperation to aggregate.
     */
    where?: PendingWalletOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingWalletOperations to fetch.
     */
    orderBy?: PendingWalletOperationOrderByWithRelationInput | PendingWalletOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingWalletOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingWalletOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingWalletOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PendingWalletOperations
    **/
    _count?: true | PendingWalletOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingWalletOperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingWalletOperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingWalletOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingWalletOperationMaxAggregateInputType
  }

  export type GetPendingWalletOperationAggregateType<T extends PendingWalletOperationAggregateArgs> = {
        [P in keyof T & keyof AggregatePendingWalletOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendingWalletOperation[P]>
      : GetScalarType<T[P], AggregatePendingWalletOperation[P]>
  }




  export type PendingWalletOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingWalletOperationWhereInput
    orderBy?: PendingWalletOperationOrderByWithAggregationInput | PendingWalletOperationOrderByWithAggregationInput[]
    by: PendingWalletOperationScalarFieldEnum[] | PendingWalletOperationScalarFieldEnum
    having?: PendingWalletOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingWalletOperationCountAggregateInputType | true
    _avg?: PendingWalletOperationAvgAggregateInputType
    _sum?: PendingWalletOperationSumAggregateInputType
    _min?: PendingWalletOperationMinAggregateInputType
    _max?: PendingWalletOperationMaxAggregateInputType
  }

  export type PendingWalletOperationGroupByOutputType = {
    id: string
    walletId: string
    walletCurrency: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType: $Enums.ReservationType
    lockedAt: Date | null
    lockExpiresAt: Date | null
    releasedAt: Date | null
    appliedAt: Date | null
    referenceId: string | null
    referenceType: string | null
    correlationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PendingWalletOperationCountAggregateOutputType | null
    _avg: PendingWalletOperationAvgAggregateOutputType | null
    _sum: PendingWalletOperationSumAggregateOutputType | null
    _min: PendingWalletOperationMinAggregateOutputType | null
    _max: PendingWalletOperationMaxAggregateOutputType | null
  }

  type GetPendingWalletOperationGroupByPayload<T extends PendingWalletOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingWalletOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingWalletOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingWalletOperationGroupByOutputType[P]>
            : GetScalarType<T[P], PendingWalletOperationGroupByOutputType[P]>
        }
      >
    >


  export type PendingWalletOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    userId?: boolean
    operationType?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    reservationType?: boolean
    lockedAt?: boolean
    lockExpiresAt?: boolean
    releasedAt?: boolean
    appliedAt?: boolean
    referenceId?: boolean
    referenceType?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingWalletOperation"]>

  export type PendingWalletOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    userId?: boolean
    operationType?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    reservationType?: boolean
    lockedAt?: boolean
    lockExpiresAt?: boolean
    releasedAt?: boolean
    appliedAt?: boolean
    referenceId?: boolean
    referenceType?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendingWalletOperation"]>

  export type PendingWalletOperationSelectScalar = {
    id?: boolean
    walletId?: boolean
    walletCurrency?: boolean
    userId?: boolean
    operationType?: boolean
    amountAmount?: boolean
    amountCurrency?: boolean
    reservationType?: boolean
    lockedAt?: boolean
    lockExpiresAt?: boolean
    releasedAt?: boolean
    appliedAt?: boolean
    referenceId?: boolean
    referenceType?: boolean
    correlationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PendingWalletOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type PendingWalletOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $PendingWalletOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PendingWalletOperation"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      walletCurrency: string
      userId: string
      operationType: $Enums.PendingOperationType
      amountAmount: number
      amountCurrency: string
      reservationType: $Enums.ReservationType
      lockedAt: Date | null
      lockExpiresAt: Date | null
      releasedAt: Date | null
      appliedAt: Date | null
      referenceId: string | null
      referenceType: string | null
      correlationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pendingWalletOperation"]>
    composites: {}
  }

  type PendingWalletOperationGetPayload<S extends boolean | null | undefined | PendingWalletOperationDefaultArgs> = $Result.GetResult<Prisma.$PendingWalletOperationPayload, S>

  type PendingWalletOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PendingWalletOperationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PendingWalletOperationCountAggregateInputType | true
    }

  export interface PendingWalletOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PendingWalletOperation'], meta: { name: 'PendingWalletOperation' } }
    /**
     * Find zero or one PendingWalletOperation that matches the filter.
     * @param {PendingWalletOperationFindUniqueArgs} args - Arguments to find a PendingWalletOperation
     * @example
     * // Get one PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingWalletOperationFindUniqueArgs>(args: SelectSubset<T, PendingWalletOperationFindUniqueArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PendingWalletOperation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PendingWalletOperationFindUniqueOrThrowArgs} args - Arguments to find a PendingWalletOperation
     * @example
     * // Get one PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingWalletOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingWalletOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PendingWalletOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationFindFirstArgs} args - Arguments to find a PendingWalletOperation
     * @example
     * // Get one PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingWalletOperationFindFirstArgs>(args?: SelectSubset<T, PendingWalletOperationFindFirstArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PendingWalletOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationFindFirstOrThrowArgs} args - Arguments to find a PendingWalletOperation
     * @example
     * // Get one PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingWalletOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingWalletOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PendingWalletOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PendingWalletOperations
     * const pendingWalletOperations = await prisma.pendingWalletOperation.findMany()
     * 
     * // Get first 10 PendingWalletOperations
     * const pendingWalletOperations = await prisma.pendingWalletOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendingWalletOperationWithIdOnly = await prisma.pendingWalletOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendingWalletOperationFindManyArgs>(args?: SelectSubset<T, PendingWalletOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PendingWalletOperation.
     * @param {PendingWalletOperationCreateArgs} args - Arguments to create a PendingWalletOperation.
     * @example
     * // Create one PendingWalletOperation
     * const PendingWalletOperation = await prisma.pendingWalletOperation.create({
     *   data: {
     *     // ... data to create a PendingWalletOperation
     *   }
     * })
     * 
     */
    create<T extends PendingWalletOperationCreateArgs>(args: SelectSubset<T, PendingWalletOperationCreateArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PendingWalletOperations.
     * @param {PendingWalletOperationCreateManyArgs} args - Arguments to create many PendingWalletOperations.
     * @example
     * // Create many PendingWalletOperations
     * const pendingWalletOperation = await prisma.pendingWalletOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingWalletOperationCreateManyArgs>(args?: SelectSubset<T, PendingWalletOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PendingWalletOperations and returns the data saved in the database.
     * @param {PendingWalletOperationCreateManyAndReturnArgs} args - Arguments to create many PendingWalletOperations.
     * @example
     * // Create many PendingWalletOperations
     * const pendingWalletOperation = await prisma.pendingWalletOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PendingWalletOperations and only return the `id`
     * const pendingWalletOperationWithIdOnly = await prisma.pendingWalletOperation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingWalletOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingWalletOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PendingWalletOperation.
     * @param {PendingWalletOperationDeleteArgs} args - Arguments to delete one PendingWalletOperation.
     * @example
     * // Delete one PendingWalletOperation
     * const PendingWalletOperation = await prisma.pendingWalletOperation.delete({
     *   where: {
     *     // ... filter to delete one PendingWalletOperation
     *   }
     * })
     * 
     */
    delete<T extends PendingWalletOperationDeleteArgs>(args: SelectSubset<T, PendingWalletOperationDeleteArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PendingWalletOperation.
     * @param {PendingWalletOperationUpdateArgs} args - Arguments to update one PendingWalletOperation.
     * @example
     * // Update one PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingWalletOperationUpdateArgs>(args: SelectSubset<T, PendingWalletOperationUpdateArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PendingWalletOperations.
     * @param {PendingWalletOperationDeleteManyArgs} args - Arguments to filter PendingWalletOperations to delete.
     * @example
     * // Delete a few PendingWalletOperations
     * const { count } = await prisma.pendingWalletOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingWalletOperationDeleteManyArgs>(args?: SelectSubset<T, PendingWalletOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PendingWalletOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PendingWalletOperations
     * const pendingWalletOperation = await prisma.pendingWalletOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingWalletOperationUpdateManyArgs>(args: SelectSubset<T, PendingWalletOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PendingWalletOperation.
     * @param {PendingWalletOperationUpsertArgs} args - Arguments to update or create a PendingWalletOperation.
     * @example
     * // Update or create a PendingWalletOperation
     * const pendingWalletOperation = await prisma.pendingWalletOperation.upsert({
     *   create: {
     *     // ... data to create a PendingWalletOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PendingWalletOperation we want to update
     *   }
     * })
     */
    upsert<T extends PendingWalletOperationUpsertArgs>(args: SelectSubset<T, PendingWalletOperationUpsertArgs<ExtArgs>>): Prisma__PendingWalletOperationClient<$Result.GetResult<Prisma.$PendingWalletOperationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PendingWalletOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationCountArgs} args - Arguments to filter PendingWalletOperations to count.
     * @example
     * // Count the number of PendingWalletOperations
     * const count = await prisma.pendingWalletOperation.count({
     *   where: {
     *     // ... the filter for the PendingWalletOperations we want to count
     *   }
     * })
    **/
    count<T extends PendingWalletOperationCountArgs>(
      args?: Subset<T, PendingWalletOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingWalletOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PendingWalletOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingWalletOperationAggregateArgs>(args: Subset<T, PendingWalletOperationAggregateArgs>): Prisma.PrismaPromise<GetPendingWalletOperationAggregateType<T>>

    /**
     * Group by PendingWalletOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingWalletOperationGroupByArgs} args - Group by arguments.
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
      T extends PendingWalletOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingWalletOperationGroupByArgs['orderBy'] }
        : { orderBy?: PendingWalletOperationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingWalletOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingWalletOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PendingWalletOperation model
   */
  readonly fields: PendingWalletOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PendingWalletOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingWalletOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PendingWalletOperation model
   */ 
  interface PendingWalletOperationFieldRefs {
    readonly id: FieldRef<"PendingWalletOperation", 'String'>
    readonly walletId: FieldRef<"PendingWalletOperation", 'String'>
    readonly walletCurrency: FieldRef<"PendingWalletOperation", 'String'>
    readonly userId: FieldRef<"PendingWalletOperation", 'String'>
    readonly operationType: FieldRef<"PendingWalletOperation", 'PendingOperationType'>
    readonly amountAmount: FieldRef<"PendingWalletOperation", 'Float'>
    readonly amountCurrency: FieldRef<"PendingWalletOperation", 'String'>
    readonly reservationType: FieldRef<"PendingWalletOperation", 'ReservationType'>
    readonly lockedAt: FieldRef<"PendingWalletOperation", 'DateTime'>
    readonly lockExpiresAt: FieldRef<"PendingWalletOperation", 'DateTime'>
    readonly releasedAt: FieldRef<"PendingWalletOperation", 'DateTime'>
    readonly appliedAt: FieldRef<"PendingWalletOperation", 'DateTime'>
    readonly referenceId: FieldRef<"PendingWalletOperation", 'String'>
    readonly referenceType: FieldRef<"PendingWalletOperation", 'String'>
    readonly correlationId: FieldRef<"PendingWalletOperation", 'String'>
    readonly createdAt: FieldRef<"PendingWalletOperation", 'DateTime'>
    readonly updatedAt: FieldRef<"PendingWalletOperation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PendingWalletOperation findUnique
   */
  export type PendingWalletOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter, which PendingWalletOperation to fetch.
     */
    where: PendingWalletOperationWhereUniqueInput
  }

  /**
   * PendingWalletOperation findUniqueOrThrow
   */
  export type PendingWalletOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter, which PendingWalletOperation to fetch.
     */
    where: PendingWalletOperationWhereUniqueInput
  }

  /**
   * PendingWalletOperation findFirst
   */
  export type PendingWalletOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter, which PendingWalletOperation to fetch.
     */
    where?: PendingWalletOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingWalletOperations to fetch.
     */
    orderBy?: PendingWalletOperationOrderByWithRelationInput | PendingWalletOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingWalletOperations.
     */
    cursor?: PendingWalletOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingWalletOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingWalletOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingWalletOperations.
     */
    distinct?: PendingWalletOperationScalarFieldEnum | PendingWalletOperationScalarFieldEnum[]
  }

  /**
   * PendingWalletOperation findFirstOrThrow
   */
  export type PendingWalletOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter, which PendingWalletOperation to fetch.
     */
    where?: PendingWalletOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingWalletOperations to fetch.
     */
    orderBy?: PendingWalletOperationOrderByWithRelationInput | PendingWalletOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PendingWalletOperations.
     */
    cursor?: PendingWalletOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingWalletOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingWalletOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PendingWalletOperations.
     */
    distinct?: PendingWalletOperationScalarFieldEnum | PendingWalletOperationScalarFieldEnum[]
  }

  /**
   * PendingWalletOperation findMany
   */
  export type PendingWalletOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter, which PendingWalletOperations to fetch.
     */
    where?: PendingWalletOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PendingWalletOperations to fetch.
     */
    orderBy?: PendingWalletOperationOrderByWithRelationInput | PendingWalletOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PendingWalletOperations.
     */
    cursor?: PendingWalletOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PendingWalletOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PendingWalletOperations.
     */
    skip?: number
    distinct?: PendingWalletOperationScalarFieldEnum | PendingWalletOperationScalarFieldEnum[]
  }

  /**
   * PendingWalletOperation create
   */
  export type PendingWalletOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a PendingWalletOperation.
     */
    data: XOR<PendingWalletOperationCreateInput, PendingWalletOperationUncheckedCreateInput>
  }

  /**
   * PendingWalletOperation createMany
   */
  export type PendingWalletOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PendingWalletOperations.
     */
    data: PendingWalletOperationCreateManyInput | PendingWalletOperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PendingWalletOperation createManyAndReturn
   */
  export type PendingWalletOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PendingWalletOperations.
     */
    data: PendingWalletOperationCreateManyInput | PendingWalletOperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PendingWalletOperation update
   */
  export type PendingWalletOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a PendingWalletOperation.
     */
    data: XOR<PendingWalletOperationUpdateInput, PendingWalletOperationUncheckedUpdateInput>
    /**
     * Choose, which PendingWalletOperation to update.
     */
    where: PendingWalletOperationWhereUniqueInput
  }

  /**
   * PendingWalletOperation updateMany
   */
  export type PendingWalletOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PendingWalletOperations.
     */
    data: XOR<PendingWalletOperationUpdateManyMutationInput, PendingWalletOperationUncheckedUpdateManyInput>
    /**
     * Filter which PendingWalletOperations to update
     */
    where?: PendingWalletOperationWhereInput
  }

  /**
   * PendingWalletOperation upsert
   */
  export type PendingWalletOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the PendingWalletOperation to update in case it exists.
     */
    where: PendingWalletOperationWhereUniqueInput
    /**
     * In case the PendingWalletOperation found by the `where` argument doesn't exist, create a new PendingWalletOperation with this data.
     */
    create: XOR<PendingWalletOperationCreateInput, PendingWalletOperationUncheckedCreateInput>
    /**
     * In case the PendingWalletOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingWalletOperationUpdateInput, PendingWalletOperationUncheckedUpdateInput>
  }

  /**
   * PendingWalletOperation delete
   */
  export type PendingWalletOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
    /**
     * Filter which PendingWalletOperation to delete.
     */
    where: PendingWalletOperationWhereUniqueInput
  }

  /**
   * PendingWalletOperation deleteMany
   */
  export type PendingWalletOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PendingWalletOperations to delete
     */
    where?: PendingWalletOperationWhereInput
  }

  /**
   * PendingWalletOperation without action
   */
  export type PendingWalletOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendingWalletOperation
     */
    select?: PendingWalletOperationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingWalletOperationInclude<ExtArgs> | null
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


  export const WalletScalarFieldEnum: {
    userId: 'userId',
    currency: 'currency',
    realBalance: 'realBalance',
    bonusBalance: 'bonusBalance',
    withdrawableBalance: 'withdrawableBalance',
    pendingDeposits: 'pendingDeposits',
    pendingWithdrawals: 'pendingWithdrawals',
    reservedBets: 'reservedBets',
    reservedCashouts: 'reservedCashouts',
    lastDepositAt: 'lastDepositAt',
    totalDeposited: 'totalDeposited',
    totalWithdrawn: 'totalWithdrawn',
    totalTurnover: 'totalTurnover',
    totalWagered: 'totalWagered',
    totalWon: 'totalWon',
    totalLost: 'totalLost',
    totalBonusGranted: 'totalBonusGranted',
    totalBonusWagered: 'totalBonusWagered',
    totalBonusReleased: 'totalBonusReleased',
    isFrozen: 'isFrozen',
    frozenReason: 'frozenReason',
    frozenAt: 'frozenAt',
    frozenBy: 'frozenBy',
    kycLevelApplied: 'kycLevelApplied',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const WalletLedgerEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    walletCurrency: 'walletCurrency',
    entryType: 'entryType',
    accountType: 'accountType',
    amount: 'amount',
    currency: 'currency',
    runningBalanceAfter: 'runningBalanceAfter',
    transactionType: 'transactionType',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    externalReferenceId: 'externalReferenceId',
    note: 'note',
    metadata: 'metadata',
    operatedBy: 'operatedBy',
    correlationId: 'correlationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletLedgerEntryScalarFieldEnum = (typeof WalletLedgerEntryScalarFieldEnum)[keyof typeof WalletLedgerEntryScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    walletCurrency: 'walletCurrency',
    type: 'type',
    amountAmount: 'amountAmount',
    amountCurrency: 'amountCurrency',
    feeAmount: 'feeAmount',
    feeCurrency: 'feeCurrency',
    netAmountAmount: 'netAmountAmount',
    netAmountCurrency: 'netAmountCurrency',
    status: 'status',
    provider: 'provider',
    externalId: 'externalId',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    initiatedBy: 'initiatedBy',
    processedAt: 'processedAt',
    failureReason: 'failureReason',
    note: 'note',
    metadata: 'metadata',
    riskScore: 'riskScore',
    kycLevelAtTime: 'kycLevelAtTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    walletCurrency: 'walletCurrency',
    transactionId: 'transactionId',
    amountAmount: 'amountAmount',
    amountCurrency: 'amountCurrency',
    feeAmount: 'feeAmount',
    feeCurrency: 'feeCurrency',
    netAmountAmount: 'netAmountAmount',
    netAmountCurrency: 'netAmountCurrency',
    provider: 'provider',
    providerTransactionId: 'providerTransactionId',
    status: 'status',
    paymentMethodType: 'paymentMethodType',
    paymentMethodLast4: 'paymentMethodLast4',
    paymentMethodBrand: 'paymentMethodBrand',
    returnUrl: 'returnUrl',
    providerRawRequest: 'providerRawRequest',
    providerRawResponse: 'providerRawResponse',
    confirmedAt: 'confirmedAt',
    failedAt: 'failedAt',
    failureReason: 'failureReason',
    ipAddress: 'ipAddress',
    riskCheckBypassed: 'riskCheckBypassed',
    appliedBonusId: 'appliedBonusId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const WithdrawalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    walletId: 'walletId',
    walletCurrency: 'walletCurrency',
    transactionId: 'transactionId',
    amountAmount: 'amountAmount',
    amountCurrency: 'amountCurrency',
    provider: 'provider',
    providerPayoutId: 'providerPayoutId',
    status: 'status',
    beneficiaryAccountJson: 'beneficiaryAccountJson',
    requestedAt: 'requestedAt',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    rejectedAt: 'rejectedAt',
    rejectedBy: 'rejectedBy',
    rejectionReason: 'rejectionReason',
    processedAt: 'processedAt',
    failedAt: 'failedAt',
    kycLevelAtRequest: 'kycLevelAtRequest',
    pendingDocumentIds: 'pendingDocumentIds',
    riskScore: 'riskScore',
    correlationId: 'correlationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type WithdrawalScalarFieldEnum = (typeof WithdrawalScalarFieldEnum)[keyof typeof WithdrawalScalarFieldEnum]


  export const PendingWalletOperationScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    walletCurrency: 'walletCurrency',
    userId: 'userId',
    operationType: 'operationType',
    amountAmount: 'amountAmount',
    amountCurrency: 'amountCurrency',
    reservationType: 'reservationType',
    lockedAt: 'lockedAt',
    lockExpiresAt: 'lockExpiresAt',
    releasedAt: 'releasedAt',
    appliedAt: 'appliedAt',
    referenceId: 'referenceId',
    referenceType: 'referenceType',
    correlationId: 'correlationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PendingWalletOperationScalarFieldEnum = (typeof PendingWalletOperationScalarFieldEnum)[keyof typeof PendingWalletOperationScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'LedgerEntryType'
   */
  export type EnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType'>
    


  /**
   * Reference to a field of type 'LedgerEntryType[]'
   */
  export type ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerEntryType[]'>
    


  /**
   * Reference to a field of type 'LedgerAccountType'
   */
  export type EnumLedgerAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerAccountType'>
    


  /**
   * Reference to a field of type 'LedgerAccountType[]'
   */
  export type ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerAccountType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentProvider'
   */
  export type EnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider'>
    


  /**
   * Reference to a field of type 'PaymentProvider[]'
   */
  export type ListEnumPaymentProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentProvider[]'>
    


  /**
   * Reference to a field of type 'PendingOperationType'
   */
  export type EnumPendingOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PendingOperationType'>
    


  /**
   * Reference to a field of type 'PendingOperationType[]'
   */
  export type ListEnumPendingOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PendingOperationType[]'>
    


  /**
   * Reference to a field of type 'ReservationType'
   */
  export type EnumReservationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationType'>
    


  /**
   * Reference to a field of type 'ReservationType[]'
   */
  export type ListEnumReservationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationType[]'>
    
  /**
   * Deep Input Types
   */


  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    userId?: StringFilter<"Wallet"> | string
    currency?: StringFilter<"Wallet"> | string
    realBalance?: FloatFilter<"Wallet"> | number
    bonusBalance?: FloatFilter<"Wallet"> | number
    withdrawableBalance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFilter<"Wallet"> | number
    pendingWithdrawals?: FloatFilter<"Wallet"> | number
    reservedBets?: FloatFilter<"Wallet"> | number
    reservedCashouts?: FloatFilter<"Wallet"> | number
    lastDepositAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    totalDeposited?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFilter<"Wallet"> | number
    totalWon?: FloatFilter<"Wallet"> | number
    totalLost?: FloatFilter<"Wallet"> | number
    totalBonusGranted?: FloatFilter<"Wallet"> | number
    totalBonusWagered?: FloatFilter<"Wallet"> | number
    totalBonusReleased?: FloatFilter<"Wallet"> | number
    isFrozen?: BoolFilter<"Wallet"> | boolean
    frozenReason?: StringNullableFilter<"Wallet"> | string | null
    frozenAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    frozenBy?: StringNullableFilter<"Wallet"> | string | null
    kycLevelApplied?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    ledgerEntries?: WalletLedgerEntryListRelationFilter
    transactions?: TransactionListRelationFilter
    deposits?: DepositListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    pendingOperations?: PendingWalletOperationListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    userId?: SortOrder
    currency?: SortOrder
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    lastDepositAt?: SortOrderInput | SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    isFrozen?: SortOrder
    frozenReason?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    frozenBy?: SortOrderInput | SortOrder
    kycLevelApplied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ledgerEntries?: WalletLedgerEntryOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    deposits?: DepositOrderByRelationAggregateInput
    withdrawals?: WithdrawalOrderByRelationAggregateInput
    pendingOperations?: PendingWalletOperationOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    userId_currency?: WalletUserIdCurrencyCompoundUniqueInput
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    userId?: StringFilter<"Wallet"> | string
    currency?: StringFilter<"Wallet"> | string
    realBalance?: FloatFilter<"Wallet"> | number
    bonusBalance?: FloatFilter<"Wallet"> | number
    withdrawableBalance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFilter<"Wallet"> | number
    pendingWithdrawals?: FloatFilter<"Wallet"> | number
    reservedBets?: FloatFilter<"Wallet"> | number
    reservedCashouts?: FloatFilter<"Wallet"> | number
    lastDepositAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    totalDeposited?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFilter<"Wallet"> | number
    totalWon?: FloatFilter<"Wallet"> | number
    totalLost?: FloatFilter<"Wallet"> | number
    totalBonusGranted?: FloatFilter<"Wallet"> | number
    totalBonusWagered?: FloatFilter<"Wallet"> | number
    totalBonusReleased?: FloatFilter<"Wallet"> | number
    isFrozen?: BoolFilter<"Wallet"> | boolean
    frozenReason?: StringNullableFilter<"Wallet"> | string | null
    frozenAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    frozenBy?: StringNullableFilter<"Wallet"> | string | null
    kycLevelApplied?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Wallet"> | Date | string | null
    ledgerEntries?: WalletLedgerEntryListRelationFilter
    transactions?: TransactionListRelationFilter
    deposits?: DepositListRelationFilter
    withdrawals?: WithdrawalListRelationFilter
    pendingOperations?: PendingWalletOperationListRelationFilter
  }, "userId_currency">

  export type WalletOrderByWithAggregationInput = {
    userId?: SortOrder
    currency?: SortOrder
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    lastDepositAt?: SortOrderInput | SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    isFrozen?: SortOrder
    frozenReason?: SortOrderInput | SortOrder
    frozenAt?: SortOrderInput | SortOrder
    frozenBy?: SortOrderInput | SortOrder
    kycLevelApplied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    currency?: StringWithAggregatesFilter<"Wallet"> | string
    realBalance?: FloatWithAggregatesFilter<"Wallet"> | number
    bonusBalance?: FloatWithAggregatesFilter<"Wallet"> | number
    withdrawableBalance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatWithAggregatesFilter<"Wallet"> | number
    pendingWithdrawals?: FloatWithAggregatesFilter<"Wallet"> | number
    reservedBets?: FloatWithAggregatesFilter<"Wallet"> | number
    reservedCashouts?: FloatWithAggregatesFilter<"Wallet"> | number
    lastDepositAt?: DateTimeNullableWithAggregatesFilter<"Wallet"> | Date | string | null
    totalDeposited?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatWithAggregatesFilter<"Wallet"> | number
    totalWon?: FloatWithAggregatesFilter<"Wallet"> | number
    totalLost?: FloatWithAggregatesFilter<"Wallet"> | number
    totalBonusGranted?: FloatWithAggregatesFilter<"Wallet"> | number
    totalBonusWagered?: FloatWithAggregatesFilter<"Wallet"> | number
    totalBonusReleased?: FloatWithAggregatesFilter<"Wallet"> | number
    isFrozen?: BoolWithAggregatesFilter<"Wallet"> | boolean
    frozenReason?: StringNullableWithAggregatesFilter<"Wallet"> | string | null
    frozenAt?: DateTimeNullableWithAggregatesFilter<"Wallet"> | Date | string | null
    frozenBy?: StringNullableWithAggregatesFilter<"Wallet"> | string | null
    kycLevelApplied?: IntWithAggregatesFilter<"Wallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Wallet"> | Date | string | null
  }

  export type WalletLedgerEntryWhereInput = {
    AND?: WalletLedgerEntryWhereInput | WalletLedgerEntryWhereInput[]
    OR?: WalletLedgerEntryWhereInput[]
    NOT?: WalletLedgerEntryWhereInput | WalletLedgerEntryWhereInput[]
    id?: StringFilter<"WalletLedgerEntry"> | string
    userId?: StringFilter<"WalletLedgerEntry"> | string
    walletId?: StringFilter<"WalletLedgerEntry"> | string
    walletCurrency?: StringFilter<"WalletLedgerEntry"> | string
    entryType?: EnumLedgerEntryTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerAccountType
    amount?: FloatFilter<"WalletLedgerEntry"> | number
    currency?: StringFilter<"WalletLedgerEntry"> | string
    runningBalanceAfter?: FloatFilter<"WalletLedgerEntry"> | number
    transactionType?: EnumTransactionTypeFilter<"WalletLedgerEntry"> | $Enums.TransactionType
    referenceId?: StringFilter<"WalletLedgerEntry"> | string
    referenceType?: StringFilter<"WalletLedgerEntry"> | string
    externalReferenceId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    note?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"WalletLedgerEntry">
    operatedBy?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    correlationId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
  }

  export type WalletLedgerEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    entryType?: SortOrder
    accountType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    runningBalanceAfter?: SortOrder
    transactionType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    externalReferenceId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    operatedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
  }

  export type WalletLedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletLedgerEntryWhereInput | WalletLedgerEntryWhereInput[]
    OR?: WalletLedgerEntryWhereInput[]
    NOT?: WalletLedgerEntryWhereInput | WalletLedgerEntryWhereInput[]
    userId?: StringFilter<"WalletLedgerEntry"> | string
    walletId?: StringFilter<"WalletLedgerEntry"> | string
    walletCurrency?: StringFilter<"WalletLedgerEntry"> | string
    entryType?: EnumLedgerEntryTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerAccountType
    amount?: FloatFilter<"WalletLedgerEntry"> | number
    currency?: StringFilter<"WalletLedgerEntry"> | string
    runningBalanceAfter?: FloatFilter<"WalletLedgerEntry"> | number
    transactionType?: EnumTransactionTypeFilter<"WalletLedgerEntry"> | $Enums.TransactionType
    referenceId?: StringFilter<"WalletLedgerEntry"> | string
    referenceType?: StringFilter<"WalletLedgerEntry"> | string
    externalReferenceId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    note?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"WalletLedgerEntry">
    operatedBy?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    correlationId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
  }, "id">

  export type WalletLedgerEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    entryType?: SortOrder
    accountType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    runningBalanceAfter?: SortOrder
    transactionType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    externalReferenceId?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    operatedBy?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletLedgerEntryCountOrderByAggregateInput
    _avg?: WalletLedgerEntryAvgOrderByAggregateInput
    _max?: WalletLedgerEntryMaxOrderByAggregateInput
    _min?: WalletLedgerEntryMinOrderByAggregateInput
    _sum?: WalletLedgerEntrySumOrderByAggregateInput
  }

  export type WalletLedgerEntryScalarWhereWithAggregatesInput = {
    AND?: WalletLedgerEntryScalarWhereWithAggregatesInput | WalletLedgerEntryScalarWhereWithAggregatesInput[]
    OR?: WalletLedgerEntryScalarWhereWithAggregatesInput[]
    NOT?: WalletLedgerEntryScalarWhereWithAggregatesInput | WalletLedgerEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    userId?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    walletId?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    walletCurrency?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    entryType?: EnumLedgerEntryTypeWithAggregatesFilter<"WalletLedgerEntry"> | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeWithAggregatesFilter<"WalletLedgerEntry"> | $Enums.LedgerAccountType
    amount?: FloatWithAggregatesFilter<"WalletLedgerEntry"> | number
    currency?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    runningBalanceAfter?: FloatWithAggregatesFilter<"WalletLedgerEntry"> | number
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"WalletLedgerEntry"> | $Enums.TransactionType
    referenceId?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    referenceType?: StringWithAggregatesFilter<"WalletLedgerEntry"> | string
    externalReferenceId?: StringNullableWithAggregatesFilter<"WalletLedgerEntry"> | string | null
    note?: StringNullableWithAggregatesFilter<"WalletLedgerEntry"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"WalletLedgerEntry">
    operatedBy?: StringNullableWithAggregatesFilter<"WalletLedgerEntry"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"WalletLedgerEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletLedgerEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WalletLedgerEntry"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    walletCurrency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amountAmount?: FloatFilter<"Transaction"> | number
    amountCurrency?: StringFilter<"Transaction"> | string
    feeAmount?: FloatNullableFilter<"Transaction"> | number | null
    feeCurrency?: StringNullableFilter<"Transaction"> | string | null
    netAmountAmount?: FloatNullableFilter<"Transaction"> | number | null
    netAmountCurrency?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableFilter<"Transaction"> | $Enums.PaymentProvider | null
    externalId?: StringNullableFilter<"Transaction"> | string | null
    referenceId?: StringNullableFilter<"Transaction"> | string | null
    referenceType?: StringNullableFilter<"Transaction"> | string | null
    initiatedBy?: StringNullableFilter<"Transaction"> | string | null
    processedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    failureReason?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    riskScore?: FloatNullableFilter<"Transaction"> | number | null
    kycLevelAtTime?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    deposit?: XOR<DepositNullableRelationFilter, DepositWhereInput> | null
    withdrawal?: XOR<WithdrawalNullableRelationFilter, WithdrawalWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    type?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrderInput | SortOrder
    feeCurrency?: SortOrderInput | SortOrder
    netAmountAmount?: SortOrderInput | SortOrder
    netAmountCurrency?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    initiatedBy?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    kycLevelAtTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    deposit?: DepositOrderByWithRelationInput
    withdrawal?: WithdrawalOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    walletCurrency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amountAmount?: FloatFilter<"Transaction"> | number
    amountCurrency?: StringFilter<"Transaction"> | string
    feeAmount?: FloatNullableFilter<"Transaction"> | number | null
    feeCurrency?: StringNullableFilter<"Transaction"> | string | null
    netAmountAmount?: FloatNullableFilter<"Transaction"> | number | null
    netAmountCurrency?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableFilter<"Transaction"> | $Enums.PaymentProvider | null
    externalId?: StringNullableFilter<"Transaction"> | string | null
    referenceId?: StringNullableFilter<"Transaction"> | string | null
    referenceType?: StringNullableFilter<"Transaction"> | string | null
    initiatedBy?: StringNullableFilter<"Transaction"> | string | null
    processedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    failureReason?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    riskScore?: FloatNullableFilter<"Transaction"> | number | null
    kycLevelAtTime?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    deposit?: XOR<DepositNullableRelationFilter, DepositWhereInput> | null
    withdrawal?: XOR<WithdrawalNullableRelationFilter, WithdrawalWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    type?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrderInput | SortOrder
    feeCurrency?: SortOrderInput | SortOrder
    netAmountAmount?: SortOrderInput | SortOrder
    netAmountCurrency?: SortOrderInput | SortOrder
    status?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    initiatedBy?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    kycLevelAtTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    walletId?: StringWithAggregatesFilter<"Transaction"> | string
    walletCurrency?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amountAmount?: FloatWithAggregatesFilter<"Transaction"> | number
    amountCurrency?: StringWithAggregatesFilter<"Transaction"> | string
    feeAmount?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    feeCurrency?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    netAmountAmount?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    netAmountCurrency?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Transaction"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableWithAggregatesFilter<"Transaction"> | $Enums.PaymentProvider | null
    externalId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    referenceId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    referenceType?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    initiatedBy?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    note?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Transaction">
    riskScore?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    kycLevelAtTime?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    walletId?: StringFilter<"Deposit"> | string
    walletCurrency?: StringFilter<"Deposit"> | string
    transactionId?: StringFilter<"Deposit"> | string
    amountAmount?: FloatFilter<"Deposit"> | number
    amountCurrency?: StringFilter<"Deposit"> | string
    feeAmount?: FloatNullableFilter<"Deposit"> | number | null
    feeCurrency?: StringNullableFilter<"Deposit"> | string | null
    netAmountAmount?: FloatNullableFilter<"Deposit"> | number | null
    netAmountCurrency?: StringNullableFilter<"Deposit"> | string | null
    provider?: EnumPaymentProviderFilter<"Deposit"> | $Enums.PaymentProvider
    providerTransactionId?: StringNullableFilter<"Deposit"> | string | null
    status?: EnumPaymentStatusFilter<"Deposit"> | $Enums.PaymentStatus
    paymentMethodType?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodLast4?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodBrand?: StringNullableFilter<"Deposit"> | string | null
    returnUrl?: StringNullableFilter<"Deposit"> | string | null
    providerRawRequest?: JsonNullableFilter<"Deposit">
    providerRawResponse?: JsonNullableFilter<"Deposit">
    confirmedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failureReason?: StringNullableFilter<"Deposit"> | string | null
    ipAddress?: StringNullableFilter<"Deposit"> | string | null
    riskCheckBypassed?: BoolFilter<"Deposit"> | boolean
    appliedBonusId?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrderInput | SortOrder
    feeCurrency?: SortOrderInput | SortOrder
    netAmountAmount?: SortOrderInput | SortOrder
    netAmountCurrency?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrderInput | SortOrder
    paymentMethodLast4?: SortOrderInput | SortOrder
    paymentMethodBrand?: SortOrderInput | SortOrder
    returnUrl?: SortOrderInput | SortOrder
    providerRawRequest?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    riskCheckBypassed?: SortOrder
    appliedBonusId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    wallet?: WalletOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    userId?: StringFilter<"Deposit"> | string
    walletId?: StringFilter<"Deposit"> | string
    walletCurrency?: StringFilter<"Deposit"> | string
    amountAmount?: FloatFilter<"Deposit"> | number
    amountCurrency?: StringFilter<"Deposit"> | string
    feeAmount?: FloatNullableFilter<"Deposit"> | number | null
    feeCurrency?: StringNullableFilter<"Deposit"> | string | null
    netAmountAmount?: FloatNullableFilter<"Deposit"> | number | null
    netAmountCurrency?: StringNullableFilter<"Deposit"> | string | null
    provider?: EnumPaymentProviderFilter<"Deposit"> | $Enums.PaymentProvider
    providerTransactionId?: StringNullableFilter<"Deposit"> | string | null
    status?: EnumPaymentStatusFilter<"Deposit"> | $Enums.PaymentStatus
    paymentMethodType?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodLast4?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodBrand?: StringNullableFilter<"Deposit"> | string | null
    returnUrl?: StringNullableFilter<"Deposit"> | string | null
    providerRawRequest?: JsonNullableFilter<"Deposit">
    providerRawResponse?: JsonNullableFilter<"Deposit">
    confirmedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failureReason?: StringNullableFilter<"Deposit"> | string | null
    ipAddress?: StringNullableFilter<"Deposit"> | string | null
    riskCheckBypassed?: BoolFilter<"Deposit"> | boolean
    appliedBonusId?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }, "id" | "transactionId">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrderInput | SortOrder
    feeCurrency?: SortOrderInput | SortOrder
    netAmountAmount?: SortOrderInput | SortOrder
    netAmountCurrency?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerTransactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrderInput | SortOrder
    paymentMethodLast4?: SortOrderInput | SortOrder
    paymentMethodBrand?: SortOrderInput | SortOrder
    returnUrl?: SortOrderInput | SortOrder
    providerRawRequest?: SortOrderInput | SortOrder
    providerRawResponse?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    riskCheckBypassed?: SortOrder
    appliedBonusId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    userId?: StringWithAggregatesFilter<"Deposit"> | string
    walletId?: StringWithAggregatesFilter<"Deposit"> | string
    walletCurrency?: StringWithAggregatesFilter<"Deposit"> | string
    transactionId?: StringWithAggregatesFilter<"Deposit"> | string
    amountAmount?: FloatWithAggregatesFilter<"Deposit"> | number
    amountCurrency?: StringWithAggregatesFilter<"Deposit"> | string
    feeAmount?: FloatNullableWithAggregatesFilter<"Deposit"> | number | null
    feeCurrency?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    netAmountAmount?: FloatNullableWithAggregatesFilter<"Deposit"> | number | null
    netAmountCurrency?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    provider?: EnumPaymentProviderWithAggregatesFilter<"Deposit"> | $Enums.PaymentProvider
    providerTransactionId?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Deposit"> | $Enums.PaymentStatus
    paymentMethodType?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    paymentMethodLast4?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    paymentMethodBrand?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    returnUrl?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    providerRawRequest?: JsonNullableWithAggregatesFilter<"Deposit">
    providerRawResponse?: JsonNullableWithAggregatesFilter<"Deposit">
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Deposit"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Deposit"> | Date | string | null
    failureReason?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    riskCheckBypassed?: BoolWithAggregatesFilter<"Deposit"> | boolean
    appliedBonusId?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Deposit"> | Date | string | null
  }

  export type WithdrawalWhereInput = {
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    walletId?: StringFilter<"Withdrawal"> | string
    walletCurrency?: StringFilter<"Withdrawal"> | string
    transactionId?: StringFilter<"Withdrawal"> | string
    amountAmount?: FloatFilter<"Withdrawal"> | number
    amountCurrency?: StringFilter<"Withdrawal"> | string
    provider?: EnumPaymentProviderFilter<"Withdrawal"> | $Enums.PaymentProvider
    providerPayoutId?: StringNullableFilter<"Withdrawal"> | string | null
    status?: EnumPaymentStatusFilter<"Withdrawal"> | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonFilter<"Withdrawal">
    requestedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectionReason?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    kycLevelAtRequest?: IntFilter<"Withdrawal"> | number
    pendingDocumentIds?: StringNullableListFilter<"Withdrawal">
    riskScore?: FloatNullableFilter<"Withdrawal"> | number | null
    correlationId?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }

  export type WithdrawalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    provider?: SortOrder
    providerPayoutId?: SortOrderInput | SortOrder
    status?: SortOrder
    beneficiaryAccountJson?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    kycLevelAtRequest?: SortOrder
    pendingDocumentIds?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    wallet?: WalletOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type WithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: WithdrawalWhereInput | WithdrawalWhereInput[]
    OR?: WithdrawalWhereInput[]
    NOT?: WithdrawalWhereInput | WithdrawalWhereInput[]
    userId?: StringFilter<"Withdrawal"> | string
    walletId?: StringFilter<"Withdrawal"> | string
    walletCurrency?: StringFilter<"Withdrawal"> | string
    amountAmount?: FloatFilter<"Withdrawal"> | number
    amountCurrency?: StringFilter<"Withdrawal"> | string
    provider?: EnumPaymentProviderFilter<"Withdrawal"> | $Enums.PaymentProvider
    providerPayoutId?: StringNullableFilter<"Withdrawal"> | string | null
    status?: EnumPaymentStatusFilter<"Withdrawal"> | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonFilter<"Withdrawal">
    requestedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectionReason?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    kycLevelAtRequest?: IntFilter<"Withdrawal"> | number
    pendingDocumentIds?: StringNullableListFilter<"Withdrawal">
    riskScore?: FloatNullableFilter<"Withdrawal"> | number | null
    correlationId?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    transaction?: XOR<TransactionRelationFilter, TransactionWhereInput>
  }, "id" | "transactionId">

  export type WithdrawalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    provider?: SortOrder
    providerPayoutId?: SortOrderInput | SortOrder
    status?: SortOrder
    beneficiaryAccountJson?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    processedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    kycLevelAtRequest?: SortOrder
    pendingDocumentIds?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: WithdrawalCountOrderByAggregateInput
    _avg?: WithdrawalAvgOrderByAggregateInput
    _max?: WithdrawalMaxOrderByAggregateInput
    _min?: WithdrawalMinOrderByAggregateInput
    _sum?: WithdrawalSumOrderByAggregateInput
  }

  export type WithdrawalScalarWhereWithAggregatesInput = {
    AND?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    OR?: WithdrawalScalarWhereWithAggregatesInput[]
    NOT?: WithdrawalScalarWhereWithAggregatesInput | WithdrawalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Withdrawal"> | string
    userId?: StringWithAggregatesFilter<"Withdrawal"> | string
    walletId?: StringWithAggregatesFilter<"Withdrawal"> | string
    walletCurrency?: StringWithAggregatesFilter<"Withdrawal"> | string
    transactionId?: StringWithAggregatesFilter<"Withdrawal"> | string
    amountAmount?: FloatWithAggregatesFilter<"Withdrawal"> | number
    amountCurrency?: StringWithAggregatesFilter<"Withdrawal"> | string
    provider?: EnumPaymentProviderWithAggregatesFilter<"Withdrawal"> | $Enums.PaymentProvider
    providerPayoutId?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Withdrawal"> | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonWithAggregatesFilter<"Withdrawal">
    requestedAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
    rejectedBy?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
    kycLevelAtRequest?: IntWithAggregatesFilter<"Withdrawal"> | number
    pendingDocumentIds?: StringNullableListFilter<"Withdrawal">
    riskScore?: FloatNullableWithAggregatesFilter<"Withdrawal"> | number | null
    correlationId?: StringNullableWithAggregatesFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Withdrawal"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Withdrawal"> | Date | string | null
  }

  export type PendingWalletOperationWhereInput = {
    AND?: PendingWalletOperationWhereInput | PendingWalletOperationWhereInput[]
    OR?: PendingWalletOperationWhereInput[]
    NOT?: PendingWalletOperationWhereInput | PendingWalletOperationWhereInput[]
    id?: StringFilter<"PendingWalletOperation"> | string
    walletId?: StringFilter<"PendingWalletOperation"> | string
    walletCurrency?: StringFilter<"PendingWalletOperation"> | string
    userId?: StringFilter<"PendingWalletOperation"> | string
    operationType?: EnumPendingOperationTypeFilter<"PendingWalletOperation"> | $Enums.PendingOperationType
    amountAmount?: FloatFilter<"PendingWalletOperation"> | number
    amountCurrency?: StringFilter<"PendingWalletOperation"> | string
    reservationType?: EnumReservationTypeFilter<"PendingWalletOperation"> | $Enums.ReservationType
    lockedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    lockExpiresAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    referenceId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    referenceType?: StringNullableFilter<"PendingWalletOperation"> | string | null
    correlationId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    createdAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
    updatedAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
  }

  export type PendingWalletOperationOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    userId?: SortOrder
    operationType?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    reservationType?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    lockExpiresAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
  }

  export type PendingWalletOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendingWalletOperationWhereInput | PendingWalletOperationWhereInput[]
    OR?: PendingWalletOperationWhereInput[]
    NOT?: PendingWalletOperationWhereInput | PendingWalletOperationWhereInput[]
    walletId?: StringFilter<"PendingWalletOperation"> | string
    walletCurrency?: StringFilter<"PendingWalletOperation"> | string
    userId?: StringFilter<"PendingWalletOperation"> | string
    operationType?: EnumPendingOperationTypeFilter<"PendingWalletOperation"> | $Enums.PendingOperationType
    amountAmount?: FloatFilter<"PendingWalletOperation"> | number
    amountCurrency?: StringFilter<"PendingWalletOperation"> | string
    reservationType?: EnumReservationTypeFilter<"PendingWalletOperation"> | $Enums.ReservationType
    lockedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    lockExpiresAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    referenceId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    referenceType?: StringNullableFilter<"PendingWalletOperation"> | string | null
    correlationId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    createdAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
    updatedAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
  }, "id">

  export type PendingWalletOperationOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    userId?: SortOrder
    operationType?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    reservationType?: SortOrder
    lockedAt?: SortOrderInput | SortOrder
    lockExpiresAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    appliedAt?: SortOrderInput | SortOrder
    referenceId?: SortOrderInput | SortOrder
    referenceType?: SortOrderInput | SortOrder
    correlationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PendingWalletOperationCountOrderByAggregateInput
    _avg?: PendingWalletOperationAvgOrderByAggregateInput
    _max?: PendingWalletOperationMaxOrderByAggregateInput
    _min?: PendingWalletOperationMinOrderByAggregateInput
    _sum?: PendingWalletOperationSumOrderByAggregateInput
  }

  export type PendingWalletOperationScalarWhereWithAggregatesInput = {
    AND?: PendingWalletOperationScalarWhereWithAggregatesInput | PendingWalletOperationScalarWhereWithAggregatesInput[]
    OR?: PendingWalletOperationScalarWhereWithAggregatesInput[]
    NOT?: PendingWalletOperationScalarWhereWithAggregatesInput | PendingWalletOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PendingWalletOperation"> | string
    walletId?: StringWithAggregatesFilter<"PendingWalletOperation"> | string
    walletCurrency?: StringWithAggregatesFilter<"PendingWalletOperation"> | string
    userId?: StringWithAggregatesFilter<"PendingWalletOperation"> | string
    operationType?: EnumPendingOperationTypeWithAggregatesFilter<"PendingWalletOperation"> | $Enums.PendingOperationType
    amountAmount?: FloatWithAggregatesFilter<"PendingWalletOperation"> | number
    amountCurrency?: StringWithAggregatesFilter<"PendingWalletOperation"> | string
    reservationType?: EnumReservationTypeWithAggregatesFilter<"PendingWalletOperation"> | $Enums.ReservationType
    lockedAt?: DateTimeNullableWithAggregatesFilter<"PendingWalletOperation"> | Date | string | null
    lockExpiresAt?: DateTimeNullableWithAggregatesFilter<"PendingWalletOperation"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"PendingWalletOperation"> | Date | string | null
    appliedAt?: DateTimeNullableWithAggregatesFilter<"PendingWalletOperation"> | Date | string | null
    referenceId?: StringNullableWithAggregatesFilter<"PendingWalletOperation"> | string | null
    referenceType?: StringNullableWithAggregatesFilter<"PendingWalletOperation"> | string | null
    correlationId?: StringNullableWithAggregatesFilter<"PendingWalletOperation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PendingWalletOperation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PendingWalletOperation"> | Date | string
  }

  export type WalletCreateInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryCreateNestedManyWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    deposits?: DepositCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    deposits?: DepositUncheckedCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    deposits?: DepositUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateManyInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WalletUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletLedgerEntryCreateInput = {
    id?: string
    userId: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutLedgerEntriesInput
  }

  export type WalletLedgerEntryUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type WalletLedgerEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerEntryCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    deposit?: DepositCreateNestedOneWithoutTransactionInput
    withdrawal?: WithdrawalCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposit?: DepositUncheckedCreateNestedOneWithoutTransactionInput
    withdrawal?: WithdrawalUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    deposit?: DepositUpdateOneWithoutTransactionNestedInput
    withdrawal?: WithdrawalUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUncheckedUpdateOneWithoutTransactionNestedInput
    withdrawal?: WithdrawalUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    wallet: WalletCreateNestedOneWithoutDepositsInput
    transaction: TransactionCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet?: WalletUpdateOneRequiredWithoutDepositsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalCreateInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    wallet: WalletCreateNestedOneWithoutWithdrawalsInput
    transaction: TransactionCreateNestedOneWithoutWithdrawalInput
  }

  export type WithdrawalUncheckedCreateInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WithdrawalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet?: WalletUpdateOneRequiredWithoutWithdrawalsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutWithdrawalNestedInput
  }

  export type WithdrawalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalCreateManyInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WithdrawalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingWalletOperationCreateInput = {
    id?: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutPendingOperationsInput
  }

  export type PendingWalletOperationUncheckedCreateInput = {
    id?: string
    walletId: string
    walletCurrency: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingWalletOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutPendingOperationsNestedInput
  }

  export type PendingWalletOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingWalletOperationCreateManyInput = {
    id?: string
    walletId: string
    walletCurrency: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingWalletOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingWalletOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type WalletLedgerEntryListRelationFilter = {
    every?: WalletLedgerEntryWhereInput
    some?: WalletLedgerEntryWhereInput
    none?: WalletLedgerEntryWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type WithdrawalListRelationFilter = {
    every?: WithdrawalWhereInput
    some?: WithdrawalWhereInput
    none?: WithdrawalWhereInput
  }

  export type PendingWalletOperationListRelationFilter = {
    every?: PendingWalletOperationWhereInput
    some?: PendingWalletOperationWhereInput
    none?: PendingWalletOperationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WalletLedgerEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WithdrawalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendingWalletOperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletUserIdCurrencyCompoundUniqueInput = {
    userId: string
    currency: string
  }

  export type WalletCountOrderByAggregateInput = {
    userId?: SortOrder
    currency?: SortOrder
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    lastDepositAt?: SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    isFrozen?: SortOrder
    frozenReason?: SortOrder
    frozenAt?: SortOrder
    frozenBy?: SortOrder
    kycLevelApplied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    kycLevelApplied?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    userId?: SortOrder
    currency?: SortOrder
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    lastDepositAt?: SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    isFrozen?: SortOrder
    frozenReason?: SortOrder
    frozenAt?: SortOrder
    frozenBy?: SortOrder
    kycLevelApplied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    userId?: SortOrder
    currency?: SortOrder
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    lastDepositAt?: SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    isFrozen?: SortOrder
    frozenReason?: SortOrder
    frozenAt?: SortOrder
    frozenBy?: SortOrder
    kycLevelApplied?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    realBalance?: SortOrder
    bonusBalance?: SortOrder
    withdrawableBalance?: SortOrder
    pendingDeposits?: SortOrder
    pendingWithdrawals?: SortOrder
    reservedBets?: SortOrder
    reservedCashouts?: SortOrder
    totalDeposited?: SortOrder
    totalWithdrawn?: SortOrder
    totalTurnover?: SortOrder
    totalWagered?: SortOrder
    totalWon?: SortOrder
    totalLost?: SortOrder
    totalBonusGranted?: SortOrder
    totalBonusWagered?: SortOrder
    totalBonusReleased?: SortOrder
    kycLevelApplied?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType
  }

  export type EnumLedgerAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerAccountType | EnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerAccountTypeFilter<$PrismaModel> | $Enums.LedgerAccountType
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
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

  export type WalletRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type WalletLedgerEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    entryType?: SortOrder
    accountType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    runningBalanceAfter?: SortOrder
    transactionType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    externalReferenceId?: SortOrder
    note?: SortOrder
    metadata?: SortOrder
    operatedBy?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletLedgerEntryAvgOrderByAggregateInput = {
    amount?: SortOrder
    runningBalanceAfter?: SortOrder
  }

  export type WalletLedgerEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    entryType?: SortOrder
    accountType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    runningBalanceAfter?: SortOrder
    transactionType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    externalReferenceId?: SortOrder
    note?: SortOrder
    operatedBy?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletLedgerEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    entryType?: SortOrder
    accountType?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    runningBalanceAfter?: SortOrder
    transactionType?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    externalReferenceId?: SortOrder
    note?: SortOrder
    operatedBy?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletLedgerEntrySumOrderByAggregateInput = {
    amount?: SortOrder
    runningBalanceAfter?: SortOrder
  }

  export type EnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
  }

  export type EnumLedgerAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerAccountType | EnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerAccountTypeFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
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

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null
  }

  export type DepositNullableRelationFilter = {
    is?: DepositWhereInput | null
    isNot?: DepositWhereInput | null
  }

  export type WithdrawalNullableRelationFilter = {
    is?: WithdrawalWhereInput | null
    isNot?: WithdrawalWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    type?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    initiatedBy?: SortOrder
    processedAt?: SortOrder
    failureReason?: SortOrder
    note?: SortOrder
    metadata?: SortOrder
    riskScore?: SortOrder
    kycLevelAtTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amountAmount?: SortOrder
    feeAmount?: SortOrder
    netAmountAmount?: SortOrder
    riskScore?: SortOrder
    kycLevelAtTime?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    type?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    initiatedBy?: SortOrder
    processedAt?: SortOrder
    failureReason?: SortOrder
    note?: SortOrder
    riskScore?: SortOrder
    kycLevelAtTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    type?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    status?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    initiatedBy?: SortOrder
    processedAt?: SortOrder
    failureReason?: SortOrder
    note?: SortOrder
    riskScore?: SortOrder
    kycLevelAtTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amountAmount?: SortOrder
    feeAmount?: SortOrder
    netAmountAmount?: SortOrder
    riskScore?: SortOrder
    kycLevelAtTime?: SortOrder
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

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
  }

  export type EnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type TransactionRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    provider?: SortOrder
    providerTransactionId?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    paymentMethodLast4?: SortOrder
    paymentMethodBrand?: SortOrder
    returnUrl?: SortOrder
    providerRawRequest?: SortOrder
    providerRawResponse?: SortOrder
    confirmedAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    ipAddress?: SortOrder
    riskCheckBypassed?: SortOrder
    appliedBonusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amountAmount?: SortOrder
    feeAmount?: SortOrder
    netAmountAmount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    provider?: SortOrder
    providerTransactionId?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    paymentMethodLast4?: SortOrder
    paymentMethodBrand?: SortOrder
    returnUrl?: SortOrder
    confirmedAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    ipAddress?: SortOrder
    riskCheckBypassed?: SortOrder
    appliedBonusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    feeAmount?: SortOrder
    feeCurrency?: SortOrder
    netAmountAmount?: SortOrder
    netAmountCurrency?: SortOrder
    provider?: SortOrder
    providerTransactionId?: SortOrder
    status?: SortOrder
    paymentMethodType?: SortOrder
    paymentMethodLast4?: SortOrder
    paymentMethodBrand?: SortOrder
    returnUrl?: SortOrder
    confirmedAt?: SortOrder
    failedAt?: SortOrder
    failureReason?: SortOrder
    ipAddress?: SortOrder
    riskCheckBypassed?: SortOrder
    appliedBonusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amountAmount?: SortOrder
    feeAmount?: SortOrder
    netAmountAmount?: SortOrder
  }

  export type EnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WithdrawalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    provider?: SortOrder
    providerPayoutId?: SortOrder
    status?: SortOrder
    beneficiaryAccountJson?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectionReason?: SortOrder
    processedAt?: SortOrder
    failedAt?: SortOrder
    kycLevelAtRequest?: SortOrder
    pendingDocumentIds?: SortOrder
    riskScore?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WithdrawalAvgOrderByAggregateInput = {
    amountAmount?: SortOrder
    kycLevelAtRequest?: SortOrder
    riskScore?: SortOrder
  }

  export type WithdrawalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    provider?: SortOrder
    providerPayoutId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectionReason?: SortOrder
    processedAt?: SortOrder
    failedAt?: SortOrder
    kycLevelAtRequest?: SortOrder
    riskScore?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WithdrawalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    transactionId?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    provider?: SortOrder
    providerPayoutId?: SortOrder
    status?: SortOrder
    requestedAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectionReason?: SortOrder
    processedAt?: SortOrder
    failedAt?: SortOrder
    kycLevelAtRequest?: SortOrder
    riskScore?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type WithdrawalSumOrderByAggregateInput = {
    amountAmount?: SortOrder
    kycLevelAtRequest?: SortOrder
    riskScore?: SortOrder
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

  export type EnumPendingOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PendingOperationType | EnumPendingOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPendingOperationTypeFilter<$PrismaModel> | $Enums.PendingOperationType
  }

  export type EnumReservationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationTypeFilter<$PrismaModel> | $Enums.ReservationType
  }

  export type PendingWalletOperationCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    userId?: SortOrder
    operationType?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    reservationType?: SortOrder
    lockedAt?: SortOrder
    lockExpiresAt?: SortOrder
    releasedAt?: SortOrder
    appliedAt?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingWalletOperationAvgOrderByAggregateInput = {
    amountAmount?: SortOrder
  }

  export type PendingWalletOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    userId?: SortOrder
    operationType?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    reservationType?: SortOrder
    lockedAt?: SortOrder
    lockExpiresAt?: SortOrder
    releasedAt?: SortOrder
    appliedAt?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingWalletOperationMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    walletCurrency?: SortOrder
    userId?: SortOrder
    operationType?: SortOrder
    amountAmount?: SortOrder
    amountCurrency?: SortOrder
    reservationType?: SortOrder
    lockedAt?: SortOrder
    lockExpiresAt?: SortOrder
    releasedAt?: SortOrder
    appliedAt?: SortOrder
    referenceId?: SortOrder
    referenceType?: SortOrder
    correlationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendingWalletOperationSumOrderByAggregateInput = {
    amountAmount?: SortOrder
  }

  export type EnumPendingOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PendingOperationType | EnumPendingOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPendingOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.PendingOperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPendingOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumPendingOperationTypeFilter<$PrismaModel>
  }

  export type EnumReservationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReservationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationTypeFilter<$PrismaModel>
    _max?: NestedEnumReservationTypeFilter<$PrismaModel>
  }

  export type WalletLedgerEntryCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput> | WalletLedgerEntryCreateWithoutWalletInput[] | WalletLedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletLedgerEntryCreateOrConnectWithoutWalletInput | WalletLedgerEntryCreateOrConnectWithoutWalletInput[]
    createMany?: WalletLedgerEntryCreateManyWalletInputEnvelope
    connect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutWalletInput = {
    create?: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput> | DepositCreateWithoutWalletInput[] | DepositUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutWalletInput | DepositCreateOrConnectWithoutWalletInput[]
    createMany?: DepositCreateManyWalletInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type WithdrawalCreateNestedManyWithoutWalletInput = {
    create?: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput> | WithdrawalCreateWithoutWalletInput[] | WithdrawalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutWalletInput | WithdrawalCreateOrConnectWithoutWalletInput[]
    createMany?: WithdrawalCreateManyWalletInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type PendingWalletOperationCreateNestedManyWithoutWalletInput = {
    create?: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput> | PendingWalletOperationCreateWithoutWalletInput[] | PendingWalletOperationUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PendingWalletOperationCreateOrConnectWithoutWalletInput | PendingWalletOperationCreateOrConnectWithoutWalletInput[]
    createMany?: PendingWalletOperationCreateManyWalletInputEnvelope
    connect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
  }

  export type WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput> | WalletLedgerEntryCreateWithoutWalletInput[] | WalletLedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletLedgerEntryCreateOrConnectWithoutWalletInput | WalletLedgerEntryCreateOrConnectWithoutWalletInput[]
    createMany?: WalletLedgerEntryCreateManyWalletInputEnvelope
    connect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput> | DepositCreateWithoutWalletInput[] | DepositUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutWalletInput | DepositCreateOrConnectWithoutWalletInput[]
    createMany?: DepositCreateManyWalletInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type WithdrawalUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput> | WithdrawalCreateWithoutWalletInput[] | WithdrawalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutWalletInput | WithdrawalCreateOrConnectWithoutWalletInput[]
    createMany?: WithdrawalCreateManyWalletInputEnvelope
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
  }

  export type PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput> | PendingWalletOperationCreateWithoutWalletInput[] | PendingWalletOperationUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PendingWalletOperationCreateOrConnectWithoutWalletInput | PendingWalletOperationCreateOrConnectWithoutWalletInput[]
    createMany?: PendingWalletOperationCreateManyWalletInputEnvelope
    connect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletLedgerEntryUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput> | WalletLedgerEntryCreateWithoutWalletInput[] | WalletLedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletLedgerEntryCreateOrConnectWithoutWalletInput | WalletLedgerEntryCreateOrConnectWithoutWalletInput[]
    upsert?: WalletLedgerEntryUpsertWithWhereUniqueWithoutWalletInput | WalletLedgerEntryUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletLedgerEntryCreateManyWalletInputEnvelope
    set?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    disconnect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    delete?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    connect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    update?: WalletLedgerEntryUpdateWithWhereUniqueWithoutWalletInput | WalletLedgerEntryUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletLedgerEntryUpdateManyWithWhereWithoutWalletInput | WalletLedgerEntryUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletLedgerEntryScalarWhereInput | WalletLedgerEntryScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutWalletNestedInput = {
    create?: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput> | DepositCreateWithoutWalletInput[] | DepositUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutWalletInput | DepositCreateOrConnectWithoutWalletInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutWalletInput | DepositUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: DepositCreateManyWalletInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutWalletInput | DepositUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutWalletInput | DepositUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type WithdrawalUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput> | WithdrawalCreateWithoutWalletInput[] | WithdrawalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutWalletInput | WithdrawalCreateOrConnectWithoutWalletInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutWalletInput | WithdrawalUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WithdrawalCreateManyWalletInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutWalletInput | WithdrawalUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutWalletInput | WithdrawalUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type PendingWalletOperationUpdateManyWithoutWalletNestedInput = {
    create?: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput> | PendingWalletOperationCreateWithoutWalletInput[] | PendingWalletOperationUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PendingWalletOperationCreateOrConnectWithoutWalletInput | PendingWalletOperationCreateOrConnectWithoutWalletInput[]
    upsert?: PendingWalletOperationUpsertWithWhereUniqueWithoutWalletInput | PendingWalletOperationUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: PendingWalletOperationCreateManyWalletInputEnvelope
    set?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    disconnect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    delete?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    connect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    update?: PendingWalletOperationUpdateWithWhereUniqueWithoutWalletInput | PendingWalletOperationUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: PendingWalletOperationUpdateManyWithWhereWithoutWalletInput | PendingWalletOperationUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: PendingWalletOperationScalarWhereInput | PendingWalletOperationScalarWhereInput[]
  }

  export type WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput> | WalletLedgerEntryCreateWithoutWalletInput[] | WalletLedgerEntryUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletLedgerEntryCreateOrConnectWithoutWalletInput | WalletLedgerEntryCreateOrConnectWithoutWalletInput[]
    upsert?: WalletLedgerEntryUpsertWithWhereUniqueWithoutWalletInput | WalletLedgerEntryUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletLedgerEntryCreateManyWalletInputEnvelope
    set?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    disconnect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    delete?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    connect?: WalletLedgerEntryWhereUniqueInput | WalletLedgerEntryWhereUniqueInput[]
    update?: WalletLedgerEntryUpdateWithWhereUniqueWithoutWalletInput | WalletLedgerEntryUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletLedgerEntryUpdateManyWithWhereWithoutWalletInput | WalletLedgerEntryUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletLedgerEntryScalarWhereInput | WalletLedgerEntryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput> | DepositCreateWithoutWalletInput[] | DepositUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutWalletInput | DepositCreateOrConnectWithoutWalletInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutWalletInput | DepositUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: DepositCreateManyWalletInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutWalletInput | DepositUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutWalletInput | DepositUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type WithdrawalUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput> | WithdrawalCreateWithoutWalletInput[] | WithdrawalUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WithdrawalCreateOrConnectWithoutWalletInput | WithdrawalCreateOrConnectWithoutWalletInput[]
    upsert?: WithdrawalUpsertWithWhereUniqueWithoutWalletInput | WithdrawalUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WithdrawalCreateManyWalletInputEnvelope
    set?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    disconnect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    delete?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    connect?: WithdrawalWhereUniqueInput | WithdrawalWhereUniqueInput[]
    update?: WithdrawalUpdateWithWhereUniqueWithoutWalletInput | WithdrawalUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WithdrawalUpdateManyWithWhereWithoutWalletInput | WithdrawalUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
  }

  export type PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput> | PendingWalletOperationCreateWithoutWalletInput[] | PendingWalletOperationUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: PendingWalletOperationCreateOrConnectWithoutWalletInput | PendingWalletOperationCreateOrConnectWithoutWalletInput[]
    upsert?: PendingWalletOperationUpsertWithWhereUniqueWithoutWalletInput | PendingWalletOperationUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: PendingWalletOperationCreateManyWalletInputEnvelope
    set?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    disconnect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    delete?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    connect?: PendingWalletOperationWhereUniqueInput | PendingWalletOperationWhereUniqueInput[]
    update?: PendingWalletOperationUpdateWithWhereUniqueWithoutWalletInput | PendingWalletOperationUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: PendingWalletOperationUpdateManyWithWhereWithoutWalletInput | PendingWalletOperationUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: PendingWalletOperationScalarWhereInput | PendingWalletOperationScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: WalletCreateOrConnectWithoutLedgerEntriesInput
    connect?: WalletWhereUniqueInput
  }

  export type EnumLedgerEntryTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerEntryType
  }

  export type EnumLedgerAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerAccountType
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type WalletUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: WalletCreateOrConnectWithoutLedgerEntriesInput
    upsert?: WalletUpsertWithoutLedgerEntriesInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutLedgerEntriesInput, WalletUpdateWithoutLedgerEntriesInput>, WalletUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type DepositCreateNestedOneWithoutTransactionInput = {
    create?: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionInput
    connect?: DepositWhereUniqueInput
  }

  export type WithdrawalCreateNestedOneWithoutTransactionInput = {
    create?: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WithdrawalCreateOrConnectWithoutTransactionInput
    connect?: WithdrawalWhereUniqueInput
  }

  export type DepositUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionInput
    connect?: DepositWhereUniqueInput
  }

  export type WithdrawalUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WithdrawalCreateOrConnectWithoutTransactionInput
    connect?: WithdrawalWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider | null
  }

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    upsert?: WalletUpsertWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTransactionsInput, WalletUpdateWithoutTransactionsInput>, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type DepositUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionInput
    upsert?: DepositUpsertWithoutTransactionInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutTransactionInput, DepositUpdateWithoutTransactionInput>, DepositUncheckedUpdateWithoutTransactionInput>
  }

  export type WithdrawalUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WithdrawalCreateOrConnectWithoutTransactionInput
    upsert?: WithdrawalUpsertWithoutTransactionInput
    disconnect?: WithdrawalWhereInput | boolean
    delete?: WithdrawalWhereInput | boolean
    connect?: WithdrawalWhereUniqueInput
    update?: XOR<XOR<WithdrawalUpdateToOneWithWhereWithoutTransactionInput, WithdrawalUpdateWithoutTransactionInput>, WithdrawalUncheckedUpdateWithoutTransactionInput>
  }

  export type DepositUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DepositCreateOrConnectWithoutTransactionInput
    upsert?: DepositUpsertWithoutTransactionInput
    disconnect?: DepositWhereInput | boolean
    delete?: DepositWhereInput | boolean
    connect?: DepositWhereUniqueInput
    update?: XOR<XOR<DepositUpdateToOneWithWhereWithoutTransactionInput, DepositUpdateWithoutTransactionInput>, DepositUncheckedUpdateWithoutTransactionInput>
  }

  export type WithdrawalUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: WithdrawalCreateOrConnectWithoutTransactionInput
    upsert?: WithdrawalUpsertWithoutTransactionInput
    disconnect?: WithdrawalWhereInput | boolean
    delete?: WithdrawalWhereInput | boolean
    connect?: WithdrawalWhereUniqueInput
    update?: XOR<XOR<WithdrawalUpdateToOneWithWhereWithoutTransactionInput, WithdrawalUpdateWithoutTransactionInput>, WithdrawalUncheckedUpdateWithoutTransactionInput>
  }

  export type WalletCreateNestedOneWithoutDepositsInput = {
    create?: XOR<WalletCreateWithoutDepositsInput, WalletUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutDepositsInput
    connect?: WalletWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutDepositInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumPaymentProviderFieldUpdateOperationsInput = {
    set?: $Enums.PaymentProvider
  }

  export type WalletUpdateOneRequiredWithoutDepositsNestedInput = {
    create?: XOR<WalletCreateWithoutDepositsInput, WalletUncheckedCreateWithoutDepositsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutDepositsInput
    upsert?: WalletUpsertWithoutDepositsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutDepositsInput, WalletUpdateWithoutDepositsInput>, WalletUncheckedUpdateWithoutDepositsInput>
  }

  export type TransactionUpdateOneRequiredWithoutDepositNestedInput = {
    create?: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutDepositInput
    upsert?: TransactionUpsertWithoutDepositInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutDepositInput, TransactionUpdateWithoutDepositInput>, TransactionUncheckedUpdateWithoutDepositInput>
  }

  export type WithdrawalCreatependingDocumentIdsInput = {
    set: string[]
  }

  export type WalletCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<WalletCreateWithoutWithdrawalsInput, WalletUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutWithdrawalsInput
    connect?: WalletWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutWithdrawalInput = {
    create?: XOR<TransactionCreateWithoutWithdrawalInput, TransactionUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutWithdrawalInput
    connect?: TransactionWhereUniqueInput
  }

  export type WithdrawalUpdatependingDocumentIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WalletUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<WalletCreateWithoutWithdrawalsInput, WalletUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutWithdrawalsInput
    upsert?: WalletUpsertWithoutWithdrawalsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutWithdrawalsInput, WalletUpdateWithoutWithdrawalsInput>, WalletUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type TransactionUpdateOneRequiredWithoutWithdrawalNestedInput = {
    create?: XOR<TransactionCreateWithoutWithdrawalInput, TransactionUncheckedCreateWithoutWithdrawalInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutWithdrawalInput
    upsert?: TransactionUpsertWithoutWithdrawalInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutWithdrawalInput, TransactionUpdateWithoutWithdrawalInput>, TransactionUncheckedUpdateWithoutWithdrawalInput>
  }

  export type WalletCreateNestedOneWithoutPendingOperationsInput = {
    create?: XOR<WalletCreateWithoutPendingOperationsInput, WalletUncheckedCreateWithoutPendingOperationsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPendingOperationsInput
    connect?: WalletWhereUniqueInput
  }

  export type EnumPendingOperationTypeFieldUpdateOperationsInput = {
    set?: $Enums.PendingOperationType
  }

  export type EnumReservationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReservationType
  }

  export type WalletUpdateOneRequiredWithoutPendingOperationsNestedInput = {
    create?: XOR<WalletCreateWithoutPendingOperationsInput, WalletUncheckedCreateWithoutPendingOperationsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPendingOperationsInput
    upsert?: WalletUpsertWithoutPendingOperationsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutPendingOperationsInput, WalletUpdateWithoutPendingOperationsInput>, WalletUncheckedUpdateWithoutPendingOperationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLedgerEntryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeFilter<$PrismaModel> | $Enums.LedgerEntryType
  }

  export type NestedEnumLedgerAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerAccountType | EnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerAccountTypeFilter<$PrismaModel> | $Enums.LedgerAccountType
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerEntryType | EnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerEntryType[] | ListEnumLedgerEntryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerEntryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerEntryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerEntryTypeFilter<$PrismaModel>
  }

  export type NestedEnumLedgerAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerAccountType | EnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerAccountType[] | ListEnumLedgerAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerAccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerAccountTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
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

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentProviderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableFilter<$PrismaModel> | $Enums.PaymentProvider | null
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

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentProviderNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderFilter<$PrismaModel> | $Enums.PaymentProvider
  }

  export type NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentProvider | EnumPaymentProviderFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentProvider[] | ListEnumPaymentProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentProviderWithAggregatesFilter<$PrismaModel> | $Enums.PaymentProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentProviderFilter<$PrismaModel>
    _max?: NestedEnumPaymentProviderFilter<$PrismaModel>
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

  export type NestedEnumPendingOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PendingOperationType | EnumPendingOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPendingOperationTypeFilter<$PrismaModel> | $Enums.PendingOperationType
  }

  export type NestedEnumReservationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationTypeFilter<$PrismaModel> | $Enums.ReservationType
  }

  export type NestedEnumPendingOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PendingOperationType | EnumPendingOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PendingOperationType[] | ListEnumPendingOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPendingOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.PendingOperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPendingOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumPendingOperationTypeFilter<$PrismaModel>
  }

  export type NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationType | EnumReservationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationType[] | ListEnumReservationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReservationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationTypeFilter<$PrismaModel>
    _max?: NestedEnumReservationTypeFilter<$PrismaModel>
  }

  export type WalletLedgerEntryCreateWithoutWalletInput = {
    id?: string
    userId: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerEntryUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerEntryCreateOrConnectWithoutWalletInput = {
    where: WalletLedgerEntryWhereUniqueInput
    create: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput>
  }

  export type WalletLedgerEntryCreateManyWalletInputEnvelope = {
    data: WalletLedgerEntryCreateManyWalletInput | WalletLedgerEntryCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutWalletInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposit?: DepositCreateNestedOneWithoutTransactionInput
    withdrawal?: WithdrawalCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposit?: DepositUncheckedCreateNestedOneWithoutTransactionInput
    withdrawal?: WithdrawalUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutWalletInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepositCreateOrConnectWithoutWalletInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput>
  }

  export type DepositCreateManyWalletInputEnvelope = {
    data: DepositCreateManyWalletInput | DepositCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type WithdrawalCreateWithoutWalletInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transaction: TransactionCreateNestedOneWithoutWithdrawalInput
  }

  export type WithdrawalUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WithdrawalCreateOrConnectWithoutWalletInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput>
  }

  export type WithdrawalCreateManyWalletInputEnvelope = {
    data: WithdrawalCreateManyWalletInput | WithdrawalCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type PendingWalletOperationCreateWithoutWalletInput = {
    id?: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingWalletOperationUncheckedCreateWithoutWalletInput = {
    id?: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendingWalletOperationCreateOrConnectWithoutWalletInput = {
    where: PendingWalletOperationWhereUniqueInput
    create: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput>
  }

  export type PendingWalletOperationCreateManyWalletInputEnvelope = {
    data: PendingWalletOperationCreateManyWalletInput | PendingWalletOperationCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type WalletLedgerEntryUpsertWithWhereUniqueWithoutWalletInput = {
    where: WalletLedgerEntryWhereUniqueInput
    update: XOR<WalletLedgerEntryUpdateWithoutWalletInput, WalletLedgerEntryUncheckedUpdateWithoutWalletInput>
    create: XOR<WalletLedgerEntryCreateWithoutWalletInput, WalletLedgerEntryUncheckedCreateWithoutWalletInput>
  }

  export type WalletLedgerEntryUpdateWithWhereUniqueWithoutWalletInput = {
    where: WalletLedgerEntryWhereUniqueInput
    data: XOR<WalletLedgerEntryUpdateWithoutWalletInput, WalletLedgerEntryUncheckedUpdateWithoutWalletInput>
  }

  export type WalletLedgerEntryUpdateManyWithWhereWithoutWalletInput = {
    where: WalletLedgerEntryScalarWhereInput
    data: XOR<WalletLedgerEntryUpdateManyMutationInput, WalletLedgerEntryUncheckedUpdateManyWithoutWalletInput>
  }

  export type WalletLedgerEntryScalarWhereInput = {
    AND?: WalletLedgerEntryScalarWhereInput | WalletLedgerEntryScalarWhereInput[]
    OR?: WalletLedgerEntryScalarWhereInput[]
    NOT?: WalletLedgerEntryScalarWhereInput | WalletLedgerEntryScalarWhereInput[]
    id?: StringFilter<"WalletLedgerEntry"> | string
    userId?: StringFilter<"WalletLedgerEntry"> | string
    walletId?: StringFilter<"WalletLedgerEntry"> | string
    walletCurrency?: StringFilter<"WalletLedgerEntry"> | string
    entryType?: EnumLedgerEntryTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFilter<"WalletLedgerEntry"> | $Enums.LedgerAccountType
    amount?: FloatFilter<"WalletLedgerEntry"> | number
    currency?: StringFilter<"WalletLedgerEntry"> | string
    runningBalanceAfter?: FloatFilter<"WalletLedgerEntry"> | number
    transactionType?: EnumTransactionTypeFilter<"WalletLedgerEntry"> | $Enums.TransactionType
    referenceId?: StringFilter<"WalletLedgerEntry"> | string
    referenceType?: StringFilter<"WalletLedgerEntry"> | string
    externalReferenceId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    note?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    metadata?: JsonNullableFilter<"WalletLedgerEntry">
    operatedBy?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    correlationId?: StringNullableFilter<"WalletLedgerEntry"> | string | null
    createdAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
    updatedAt?: DateTimeFilter<"WalletLedgerEntry"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    walletCurrency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amountAmount?: FloatFilter<"Transaction"> | number
    amountCurrency?: StringFilter<"Transaction"> | string
    feeAmount?: FloatNullableFilter<"Transaction"> | number | null
    feeCurrency?: StringNullableFilter<"Transaction"> | string | null
    netAmountAmount?: FloatNullableFilter<"Transaction"> | number | null
    netAmountCurrency?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumPaymentStatusFilter<"Transaction"> | $Enums.PaymentStatus
    provider?: EnumPaymentProviderNullableFilter<"Transaction"> | $Enums.PaymentProvider | null
    externalId?: StringNullableFilter<"Transaction"> | string | null
    referenceId?: StringNullableFilter<"Transaction"> | string | null
    referenceType?: StringNullableFilter<"Transaction"> | string | null
    initiatedBy?: StringNullableFilter<"Transaction"> | string | null
    processedAt?: DateTimeNullableFilter<"Transaction"> | Date | string | null
    failureReason?: StringNullableFilter<"Transaction"> | string | null
    note?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    riskScore?: FloatNullableFilter<"Transaction"> | number | null
    kycLevelAtTime?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutWalletInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutWalletInput, DepositUncheckedUpdateWithoutWalletInput>
    create: XOR<DepositCreateWithoutWalletInput, DepositUncheckedCreateWithoutWalletInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutWalletInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutWalletInput, DepositUncheckedUpdateWithoutWalletInput>
  }

  export type DepositUpdateManyWithWhereWithoutWalletInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutWalletInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    walletId?: StringFilter<"Deposit"> | string
    walletCurrency?: StringFilter<"Deposit"> | string
    transactionId?: StringFilter<"Deposit"> | string
    amountAmount?: FloatFilter<"Deposit"> | number
    amountCurrency?: StringFilter<"Deposit"> | string
    feeAmount?: FloatNullableFilter<"Deposit"> | number | null
    feeCurrency?: StringNullableFilter<"Deposit"> | string | null
    netAmountAmount?: FloatNullableFilter<"Deposit"> | number | null
    netAmountCurrency?: StringNullableFilter<"Deposit"> | string | null
    provider?: EnumPaymentProviderFilter<"Deposit"> | $Enums.PaymentProvider
    providerTransactionId?: StringNullableFilter<"Deposit"> | string | null
    status?: EnumPaymentStatusFilter<"Deposit"> | $Enums.PaymentStatus
    paymentMethodType?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodLast4?: StringNullableFilter<"Deposit"> | string | null
    paymentMethodBrand?: StringNullableFilter<"Deposit"> | string | null
    returnUrl?: StringNullableFilter<"Deposit"> | string | null
    providerRawRequest?: JsonNullableFilter<"Deposit">
    providerRawResponse?: JsonNullableFilter<"Deposit">
    confirmedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
    failureReason?: StringNullableFilter<"Deposit"> | string | null
    ipAddress?: StringNullableFilter<"Deposit"> | string | null
    riskCheckBypassed?: BoolFilter<"Deposit"> | boolean
    appliedBonusId?: StringNullableFilter<"Deposit"> | string | null
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    updatedAt?: DateTimeFilter<"Deposit"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Deposit"> | Date | string | null
  }

  export type WithdrawalUpsertWithWhereUniqueWithoutWalletInput = {
    where: WithdrawalWhereUniqueInput
    update: XOR<WithdrawalUpdateWithoutWalletInput, WithdrawalUncheckedUpdateWithoutWalletInput>
    create: XOR<WithdrawalCreateWithoutWalletInput, WithdrawalUncheckedCreateWithoutWalletInput>
  }

  export type WithdrawalUpdateWithWhereUniqueWithoutWalletInput = {
    where: WithdrawalWhereUniqueInput
    data: XOR<WithdrawalUpdateWithoutWalletInput, WithdrawalUncheckedUpdateWithoutWalletInput>
  }

  export type WithdrawalUpdateManyWithWhereWithoutWalletInput = {
    where: WithdrawalScalarWhereInput
    data: XOR<WithdrawalUpdateManyMutationInput, WithdrawalUncheckedUpdateManyWithoutWalletInput>
  }

  export type WithdrawalScalarWhereInput = {
    AND?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    OR?: WithdrawalScalarWhereInput[]
    NOT?: WithdrawalScalarWhereInput | WithdrawalScalarWhereInput[]
    id?: StringFilter<"Withdrawal"> | string
    userId?: StringFilter<"Withdrawal"> | string
    walletId?: StringFilter<"Withdrawal"> | string
    walletCurrency?: StringFilter<"Withdrawal"> | string
    transactionId?: StringFilter<"Withdrawal"> | string
    amountAmount?: FloatFilter<"Withdrawal"> | number
    amountCurrency?: StringFilter<"Withdrawal"> | string
    provider?: EnumPaymentProviderFilter<"Withdrawal"> | $Enums.PaymentProvider
    providerPayoutId?: StringNullableFilter<"Withdrawal"> | string | null
    status?: EnumPaymentStatusFilter<"Withdrawal"> | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonFilter<"Withdrawal">
    requestedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    approvedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    approvedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Withdrawal"> | string | null
    rejectionReason?: StringNullableFilter<"Withdrawal"> | string | null
    processedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
    kycLevelAtRequest?: IntFilter<"Withdrawal"> | number
    pendingDocumentIds?: StringNullableListFilter<"Withdrawal">
    riskScore?: FloatNullableFilter<"Withdrawal"> | number | null
    correlationId?: StringNullableFilter<"Withdrawal"> | string | null
    createdAt?: DateTimeFilter<"Withdrawal"> | Date | string
    updatedAt?: DateTimeFilter<"Withdrawal"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Withdrawal"> | Date | string | null
  }

  export type PendingWalletOperationUpsertWithWhereUniqueWithoutWalletInput = {
    where: PendingWalletOperationWhereUniqueInput
    update: XOR<PendingWalletOperationUpdateWithoutWalletInput, PendingWalletOperationUncheckedUpdateWithoutWalletInput>
    create: XOR<PendingWalletOperationCreateWithoutWalletInput, PendingWalletOperationUncheckedCreateWithoutWalletInput>
  }

  export type PendingWalletOperationUpdateWithWhereUniqueWithoutWalletInput = {
    where: PendingWalletOperationWhereUniqueInput
    data: XOR<PendingWalletOperationUpdateWithoutWalletInput, PendingWalletOperationUncheckedUpdateWithoutWalletInput>
  }

  export type PendingWalletOperationUpdateManyWithWhereWithoutWalletInput = {
    where: PendingWalletOperationScalarWhereInput
    data: XOR<PendingWalletOperationUpdateManyMutationInput, PendingWalletOperationUncheckedUpdateManyWithoutWalletInput>
  }

  export type PendingWalletOperationScalarWhereInput = {
    AND?: PendingWalletOperationScalarWhereInput | PendingWalletOperationScalarWhereInput[]
    OR?: PendingWalletOperationScalarWhereInput[]
    NOT?: PendingWalletOperationScalarWhereInput | PendingWalletOperationScalarWhereInput[]
    id?: StringFilter<"PendingWalletOperation"> | string
    walletId?: StringFilter<"PendingWalletOperation"> | string
    walletCurrency?: StringFilter<"PendingWalletOperation"> | string
    userId?: StringFilter<"PendingWalletOperation"> | string
    operationType?: EnumPendingOperationTypeFilter<"PendingWalletOperation"> | $Enums.PendingOperationType
    amountAmount?: FloatFilter<"PendingWalletOperation"> | number
    amountCurrency?: StringFilter<"PendingWalletOperation"> | string
    reservationType?: EnumReservationTypeFilter<"PendingWalletOperation"> | $Enums.ReservationType
    lockedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    lockExpiresAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    appliedAt?: DateTimeNullableFilter<"PendingWalletOperation"> | Date | string | null
    referenceId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    referenceType?: StringNullableFilter<"PendingWalletOperation"> | string | null
    correlationId?: StringNullableFilter<"PendingWalletOperation"> | string | null
    createdAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
    updatedAt?: DateTimeFilter<"PendingWalletOperation"> | Date | string
  }

  export type WalletCreateWithoutLedgerEntriesInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    deposits?: DepositCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutLedgerEntriesInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    deposits?: DepositUncheckedCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutLedgerEntriesInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
  }

  export type WalletUpsertWithoutLedgerEntriesInput = {
    update: XOR<WalletUpdateWithoutLedgerEntriesInput, WalletUncheckedUpdateWithoutLedgerEntriesInput>
    create: XOR<WalletCreateWithoutLedgerEntriesInput, WalletUncheckedCreateWithoutLedgerEntriesInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutLedgerEntriesInput, WalletUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type WalletUpdateWithoutLedgerEntriesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    deposits?: DepositUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutLedgerEntriesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateWithoutTransactionsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryCreateNestedManyWithoutWalletInput
    deposits?: DepositCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    deposits?: DepositUncheckedCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
  }

  export type DepositCreateWithoutTransactionInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    wallet: WalletCreateNestedOneWithoutDepositsInput
  }

  export type DepositUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepositCreateOrConnectWithoutTransactionInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
  }

  export type WithdrawalCreateWithoutTransactionInput = {
    id?: string
    userId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    wallet: WalletCreateNestedOneWithoutWithdrawalsInput
  }

  export type WithdrawalUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WithdrawalCreateOrConnectWithoutTransactionInput = {
    where: WithdrawalWhereUniqueInput
    create: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
  }

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUpdateManyWithoutWalletNestedInput
    deposits?: DepositUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type DepositUpsertWithoutTransactionInput = {
    update: XOR<DepositUpdateWithoutTransactionInput, DepositUncheckedUpdateWithoutTransactionInput>
    create: XOR<DepositCreateWithoutTransactionInput, DepositUncheckedCreateWithoutTransactionInput>
    where?: DepositWhereInput
  }

  export type DepositUpdateToOneWithWhereWithoutTransactionInput = {
    where?: DepositWhereInput
    data: XOR<DepositUpdateWithoutTransactionInput, DepositUncheckedUpdateWithoutTransactionInput>
  }

  export type DepositUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet?: WalletUpdateOneRequiredWithoutDepositsNestedInput
  }

  export type DepositUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalUpsertWithoutTransactionInput = {
    update: XOR<WithdrawalUpdateWithoutTransactionInput, WithdrawalUncheckedUpdateWithoutTransactionInput>
    create: XOR<WithdrawalCreateWithoutTransactionInput, WithdrawalUncheckedCreateWithoutTransactionInput>
    where?: WithdrawalWhereInput
  }

  export type WithdrawalUpdateToOneWithWhereWithoutTransactionInput = {
    where?: WithdrawalWhereInput
    data: XOR<WithdrawalUpdateWithoutTransactionInput, WithdrawalUncheckedUpdateWithoutTransactionInput>
  }

  export type WithdrawalUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    wallet?: WalletUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type WithdrawalUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalletCreateWithoutDepositsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryCreateNestedManyWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutDepositsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutDepositsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutDepositsInput, WalletUncheckedCreateWithoutDepositsInput>
  }

  export type TransactionCreateWithoutDepositInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    withdrawal?: WithdrawalCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutDepositInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    withdrawal?: WithdrawalUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutDepositInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
  }

  export type WalletUpsertWithoutDepositsInput = {
    update: XOR<WalletUpdateWithoutDepositsInput, WalletUncheckedUpdateWithoutDepositsInput>
    create: XOR<WalletCreateWithoutDepositsInput, WalletUncheckedCreateWithoutDepositsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutDepositsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutDepositsInput, WalletUncheckedUpdateWithoutDepositsInput>
  }

  export type WalletUpdateWithoutDepositsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutDepositsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TransactionUpsertWithoutDepositInput = {
    update: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
    create: XOR<TransactionCreateWithoutDepositInput, TransactionUncheckedCreateWithoutDepositInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutDepositInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutDepositInput, TransactionUncheckedUpdateWithoutDepositInput>
  }

  export type TransactionUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    withdrawal?: WithdrawalUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    withdrawal?: WithdrawalUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type WalletCreateWithoutWithdrawalsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryCreateNestedManyWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    deposits?: DepositCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutWithdrawalsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    deposits?: DepositUncheckedCreateNestedManyWithoutWalletInput
    pendingOperations?: PendingWalletOperationUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutWithdrawalsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutWithdrawalsInput, WalletUncheckedCreateWithoutWithdrawalsInput>
  }

  export type TransactionCreateWithoutWithdrawalInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
    deposit?: DepositCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutWithdrawalInput = {
    id?: string
    userId: string
    walletId: string
    walletCurrency: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deposit?: DepositUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutWithdrawalInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWithdrawalInput, TransactionUncheckedCreateWithoutWithdrawalInput>
  }

  export type WalletUpsertWithoutWithdrawalsInput = {
    update: XOR<WalletUpdateWithoutWithdrawalsInput, WalletUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<WalletCreateWithoutWithdrawalsInput, WalletUncheckedCreateWithoutWithdrawalsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutWithdrawalsInput, WalletUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type WalletUpdateWithoutWithdrawalsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    deposits?: DepositUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutWithdrawalsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutWalletNestedInput
    pendingOperations?: PendingWalletOperationUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type TransactionUpsertWithoutWithdrawalInput = {
    update: XOR<TransactionUpdateWithoutWithdrawalInput, TransactionUncheckedUpdateWithoutWithdrawalInput>
    create: XOR<TransactionCreateWithoutWithdrawalInput, TransactionUncheckedCreateWithoutWithdrawalInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutWithdrawalInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutWithdrawalInput, TransactionUncheckedUpdateWithoutWithdrawalInput>
  }

  export type TransactionUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
    deposit?: DepositUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutWithdrawalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    walletCurrency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type WalletCreateWithoutPendingOperationsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryCreateNestedManyWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
    deposits?: DepositCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutPendingOperationsInput = {
    userId: string
    currency?: string
    realBalance?: number
    bonusBalance?: number
    withdrawableBalance?: Decimal | DecimalJsLike | number | string
    pendingDeposits?: number
    pendingWithdrawals?: number
    reservedBets?: number
    reservedCashouts?: number
    lastDepositAt?: Date | string | null
    totalDeposited?: Decimal | DecimalJsLike | number | string
    totalWithdrawn?: Decimal | DecimalJsLike | number | string
    totalTurnover?: Decimal | DecimalJsLike | number | string
    totalWagered?: number
    totalWon?: number
    totalLost?: number
    totalBonusGranted?: number
    totalBonusWagered?: number
    totalBonusReleased?: number
    isFrozen?: boolean
    frozenReason?: string | null
    frozenAt?: Date | string | null
    frozenBy?: string | null
    kycLevelApplied?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedCreateNestedManyWithoutWalletInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
    deposits?: DepositUncheckedCreateNestedManyWithoutWalletInput
    withdrawals?: WithdrawalUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutPendingOperationsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutPendingOperationsInput, WalletUncheckedCreateWithoutPendingOperationsInput>
  }

  export type WalletUpsertWithoutPendingOperationsInput = {
    update: XOR<WalletUpdateWithoutPendingOperationsInput, WalletUncheckedUpdateWithoutPendingOperationsInput>
    create: XOR<WalletCreateWithoutPendingOperationsInput, WalletUncheckedCreateWithoutPendingOperationsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutPendingOperationsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutPendingOperationsInput, WalletUncheckedUpdateWithoutPendingOperationsInput>
  }

  export type WalletUpdateWithoutPendingOperationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
    deposits?: DepositUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutPendingOperationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    realBalance?: FloatFieldUpdateOperationsInput | number
    bonusBalance?: FloatFieldUpdateOperationsInput | number
    withdrawableBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pendingDeposits?: FloatFieldUpdateOperationsInput | number
    pendingWithdrawals?: FloatFieldUpdateOperationsInput | number
    reservedBets?: FloatFieldUpdateOperationsInput | number
    reservedCashouts?: FloatFieldUpdateOperationsInput | number
    lastDepositAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDeposited?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWithdrawn?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalTurnover?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalWagered?: FloatFieldUpdateOperationsInput | number
    totalWon?: FloatFieldUpdateOperationsInput | number
    totalLost?: FloatFieldUpdateOperationsInput | number
    totalBonusGranted?: FloatFieldUpdateOperationsInput | number
    totalBonusWagered?: FloatFieldUpdateOperationsInput | number
    totalBonusReleased?: FloatFieldUpdateOperationsInput | number
    isFrozen?: BoolFieldUpdateOperationsInput | boolean
    frozenReason?: NullableStringFieldUpdateOperationsInput | string | null
    frozenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frozenBy?: NullableStringFieldUpdateOperationsInput | string | null
    kycLevelApplied?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: WalletLedgerEntryUncheckedUpdateManyWithoutWalletNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
    deposits?: DepositUncheckedUpdateManyWithoutWalletNestedInput
    withdrawals?: WithdrawalUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletLedgerEntryCreateManyWalletInput = {
    id?: string
    userId: string
    entryType: $Enums.LedgerEntryType
    accountType: $Enums.LedgerAccountType
    amount: number
    currency: string
    runningBalanceAfter: number
    transactionType: $Enums.TransactionType
    referenceId: string
    referenceType: string
    externalReferenceId?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyWalletInput = {
    id?: string
    userId: string
    type: $Enums.TransactionType
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    status?: $Enums.PaymentStatus
    provider?: $Enums.PaymentProvider | null
    externalId?: string | null
    referenceId?: string | null
    referenceType?: string | null
    initiatedBy?: string | null
    processedAt?: Date | string | null
    failureReason?: string | null
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: number | null
    kycLevelAtTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepositCreateManyWalletInput = {
    id?: string
    userId: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    feeAmount?: number | null
    feeCurrency?: string | null
    netAmountAmount?: number | null
    netAmountCurrency?: string | null
    provider?: $Enums.PaymentProvider
    providerTransactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentMethodType?: string | null
    paymentMethodLast4?: string | null
    paymentMethodBrand?: string | null
    returnUrl?: string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: Date | string | null
    failedAt?: Date | string | null
    failureReason?: string | null
    ipAddress?: string | null
    riskCheckBypassed?: boolean
    appliedBonusId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type WithdrawalCreateManyWalletInput = {
    id?: string
    userId: string
    transactionId: string
    amountAmount: number
    amountCurrency: string
    provider: $Enums.PaymentProvider
    providerPayoutId?: string | null
    status?: $Enums.PaymentStatus
    beneficiaryAccountJson: JsonNullValueInput | InputJsonValue
    requestedAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectionReason?: string | null
    processedAt?: Date | string | null
    failedAt?: Date | string | null
    kycLevelAtRequest?: number
    pendingDocumentIds?: WithdrawalCreatependingDocumentIdsInput | string[]
    riskScore?: number | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PendingWalletOperationCreateManyWalletInput = {
    id?: string
    userId: string
    operationType: $Enums.PendingOperationType
    amountAmount: number
    amountCurrency: string
    reservationType?: $Enums.ReservationType
    lockedAt?: Date | string | null
    lockExpiresAt?: Date | string | null
    releasedAt?: Date | string | null
    appliedAt?: Date | string | null
    referenceId?: string | null
    referenceType?: string | null
    correlationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletLedgerEntryUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerEntryUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletLedgerEntryUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entryType?: EnumLedgerEntryTypeFieldUpdateOperationsInput | $Enums.LedgerEntryType
    accountType?: EnumLedgerAccountTypeFieldUpdateOperationsInput | $Enums.LedgerAccountType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    runningBalanceAfter?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    referenceId?: StringFieldUpdateOperationsInput | string
    referenceType?: StringFieldUpdateOperationsInput | string
    externalReferenceId?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    operatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUpdateOneWithoutTransactionNestedInput
    withdrawal?: WithdrawalUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deposit?: DepositUncheckedUpdateOneWithoutTransactionNestedInput
    withdrawal?: WithdrawalUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    provider?: NullableEnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    initiatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    kycLevelAtTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepositUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    feeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    feeCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    netAmountAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    netAmountCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethodType?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodLast4?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodBrand?: NullableStringFieldUpdateOperationsInput | string | null
    returnUrl?: NullableStringFieldUpdateOperationsInput | string | null
    providerRawRequest?: NullableJsonNullValueInput | InputJsonValue
    providerRawResponse?: NullableJsonNullValueInput | InputJsonValue
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    riskCheckBypassed?: BoolFieldUpdateOperationsInput | boolean
    appliedBonusId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: TransactionUpdateOneRequiredWithoutWithdrawalNestedInput
  }

  export type WithdrawalUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WithdrawalUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    provider?: EnumPaymentProviderFieldUpdateOperationsInput | $Enums.PaymentProvider
    providerPayoutId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    beneficiaryAccountJson?: JsonNullValueInput | InputJsonValue
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kycLevelAtRequest?: IntFieldUpdateOperationsInput | number
    pendingDocumentIds?: WithdrawalUpdatependingDocumentIdsInput | string[]
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingWalletOperationUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingWalletOperationUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingWalletOperationUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumPendingOperationTypeFieldUpdateOperationsInput | $Enums.PendingOperationType
    amountAmount?: FloatFieldUpdateOperationsInput | number
    amountCurrency?: StringFieldUpdateOperationsInput | string
    reservationType?: EnumReservationTypeFieldUpdateOperationsInput | $Enums.ReservationType
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    referenceType?: NullableStringFieldUpdateOperationsInput | string | null
    correlationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WalletCountOutputTypeDefaultArgs instead
     */
    export type WalletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletDefaultArgs instead
     */
    export type WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletLedgerEntryDefaultArgs instead
     */
    export type WalletLedgerEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletLedgerEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepositDefaultArgs instead
     */
    export type DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepositDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WithdrawalDefaultArgs instead
     */
    export type WithdrawalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WithdrawalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PendingWalletOperationDefaultArgs instead
     */
    export type PendingWalletOperationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PendingWalletOperationDefaultArgs<ExtArgs>

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