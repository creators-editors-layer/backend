
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
 * Model submissions
 * 
 */
export type submissions = $Result.DefaultSelection<Prisma.$submissionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model workspace_members
 * 
 */
export type workspace_members = $Result.DefaultSelection<Prisma.$workspace_membersPayload>
/**
 * Model workspaces
 * 
 */
export type workspaces = $Result.DefaultSelection<Prisma.$workspacesPayload>
/**
 * Model youtube_channels
 * 
 */
export type youtube_channels = $Result.DefaultSelection<Prisma.$youtube_channelsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Submissions
 * const submissions = await prisma.submissions.findMany()
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
   * // Fetch zero or more Submissions
   * const submissions = await prisma.submissions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.submissions`: Exposes CRUD operations for the **submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submissions.findMany()
    * ```
    */
  get submissions(): Prisma.submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace_members`: Exposes CRUD operations for the **workspace_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspace_members
    * const workspace_members = await prisma.workspace_members.findMany()
    * ```
    */
  get workspace_members(): Prisma.workspace_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaces`: Exposes CRUD operations for the **workspaces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspaces.findMany()
    * ```
    */
  get workspaces(): Prisma.workspacesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youtube_channels`: Exposes CRUD operations for the **youtube_channels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Youtube_channels
    * const youtube_channels = await prisma.youtube_channels.findMany()
    * ```
    */
  get youtube_channels(): Prisma.youtube_channelsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    submissions: 'submissions',
    users: 'users',
    workspace_members: 'workspace_members',
    workspaces: 'workspaces',
    youtube_channels: 'youtube_channels'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "submissions" | "users" | "workspace_members" | "workspaces" | "youtube_channels"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      submissions: {
        payload: Prisma.$submissionsPayload<ExtArgs>
        fields: Prisma.submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findFirst: {
            args: Prisma.submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          findMany: {
            args: Prisma.submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          create: {
            args: Prisma.submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          createMany: {
            args: Prisma.submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.submissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          delete: {
            args: Prisma.submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          update: {
            args: Prisma.submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          deleteMany: {
            args: Prisma.submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.submissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>[]
          }
          upsert: {
            args: Prisma.submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$submissionsPayload>
          }
          aggregate: {
            args: Prisma.SubmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmissions>
          }
          groupBy: {
            args: Prisma.submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      workspace_members: {
        payload: Prisma.$workspace_membersPayload<ExtArgs>
        fields: Prisma.workspace_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspace_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspace_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          findFirst: {
            args: Prisma.workspace_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspace_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          findMany: {
            args: Prisma.workspace_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          create: {
            args: Prisma.workspace_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          createMany: {
            args: Prisma.workspace_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspace_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          delete: {
            args: Prisma.workspace_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          update: {
            args: Prisma.workspace_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          deleteMany: {
            args: Prisma.workspace_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspace_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspace_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>[]
          }
          upsert: {
            args: Prisma.workspace_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_membersPayload>
          }
          aggregate: {
            args: Prisma.Workspace_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace_members>
          }
          groupBy: {
            args: Prisma.workspace_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workspace_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspace_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Workspace_membersCountAggregateOutputType> | number
          }
        }
      }
      workspaces: {
        payload: Prisma.$workspacesPayload<ExtArgs>
        fields: Prisma.workspacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findFirst: {
            args: Prisma.workspacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findMany: {
            args: Prisma.workspacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          create: {
            args: Prisma.workspacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          createMany: {
            args: Prisma.workspacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          delete: {
            args: Prisma.workspacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          update: {
            args: Prisma.workspacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          deleteMany: {
            args: Prisma.workspacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          upsert: {
            args: Prisma.workspacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          aggregate: {
            args: Prisma.WorkspacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaces>
          }
          groupBy: {
            args: Prisma.workspacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesCountAggregateOutputType> | number
          }
        }
      }
      youtube_channels: {
        payload: Prisma.$youtube_channelsPayload<ExtArgs>
        fields: Prisma.youtube_channelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.youtube_channelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.youtube_channelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          findFirst: {
            args: Prisma.youtube_channelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.youtube_channelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          findMany: {
            args: Prisma.youtube_channelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>[]
          }
          create: {
            args: Prisma.youtube_channelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          createMany: {
            args: Prisma.youtube_channelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.youtube_channelsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>[]
          }
          delete: {
            args: Prisma.youtube_channelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          update: {
            args: Prisma.youtube_channelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          deleteMany: {
            args: Prisma.youtube_channelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.youtube_channelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.youtube_channelsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>[]
          }
          upsert: {
            args: Prisma.youtube_channelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$youtube_channelsPayload>
          }
          aggregate: {
            args: Prisma.Youtube_channelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYoutube_channels>
          }
          groupBy: {
            args: Prisma.youtube_channelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Youtube_channelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.youtube_channelsCountArgs<ExtArgs>
            result: $Utils.Optional<Youtube_channelsCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    submissions?: submissionsOmit
    users?: usersOmit
    workspace_members?: workspace_membersOmit
    workspaces?: workspacesOmit
    youtube_channels?: youtube_channelsOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    submissions: number
    workspace_members: number
    workspaces: number
    youtube_channels: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UsersCountOutputTypeCountSubmissionsArgs
    workspace_members?: boolean | UsersCountOutputTypeCountWorkspace_membersArgs
    workspaces?: boolean | UsersCountOutputTypeCountWorkspacesArgs
    youtube_channels?: boolean | UsersCountOutputTypeCountYoutube_channelsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountYoutube_channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: youtube_channelsWhereInput
  }


  /**
   * Count Type WorkspacesCountOutputType
   */

  export type WorkspacesCountOutputType = {
    submissions: number
    workspace_members: number
  }

  export type WorkspacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | WorkspacesCountOutputTypeCountSubmissionsArgs
    workspace_members?: boolean | WorkspacesCountOutputTypeCountWorkspace_membersArgs
  }

  // Custom InputTypes
  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspacesCountOutputType
     */
    select?: WorkspacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountWorkspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
  }


  /**
   * Count Type Youtube_channelsCountOutputType
   */

  export type Youtube_channelsCountOutputType = {
    submissions: number
    workspaces: number
  }

  export type Youtube_channelsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | Youtube_channelsCountOutputTypeCountSubmissionsArgs
    workspaces?: boolean | Youtube_channelsCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * Youtube_channelsCountOutputType without action
   */
  export type Youtube_channelsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Youtube_channelsCountOutputType
     */
    select?: Youtube_channelsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Youtube_channelsCountOutputType without action
   */
  export type Youtube_channelsCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
  }

  /**
   * Youtube_channelsCountOutputType without action
   */
  export type Youtube_channelsCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model submissions
   */

  export type AggregateSubmissions = {
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  export type SubmissionsMinAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    uploader_id: string | null
    youtube_channel_id: string | null
    title: string | null
    description: string | null
    video_url: string | null
    thumbnail_url: string | null
    original_video_filename: string | null
    original_thumbnail_filename: string | null
    youtube_video_id: string | null
    upload_status: string | null
    status: string | null
    submitted_at: Date | null
    approved_at: Date | null
    uploaded_to_youtube_at: Date | null
  }

  export type SubmissionsMaxAggregateOutputType = {
    id: string | null
    workspace_id: string | null
    uploader_id: string | null
    youtube_channel_id: string | null
    title: string | null
    description: string | null
    video_url: string | null
    thumbnail_url: string | null
    original_video_filename: string | null
    original_thumbnail_filename: string | null
    youtube_video_id: string | null
    upload_status: string | null
    status: string | null
    submitted_at: Date | null
    approved_at: Date | null
    uploaded_to_youtube_at: Date | null
  }

  export type SubmissionsCountAggregateOutputType = {
    id: number
    workspace_id: number
    uploader_id: number
    youtube_channel_id: number
    title: number
    description: number
    video_url: number
    thumbnail_url: number
    original_video_filename: number
    original_thumbnail_filename: number
    youtube_video_id: number
    upload_status: number
    status: number
    submitted_at: number
    approved_at: number
    uploaded_to_youtube_at: number
    _all: number
  }


  export type SubmissionsMinAggregateInputType = {
    id?: true
    workspace_id?: true
    uploader_id?: true
    youtube_channel_id?: true
    title?: true
    description?: true
    video_url?: true
    thumbnail_url?: true
    original_video_filename?: true
    original_thumbnail_filename?: true
    youtube_video_id?: true
    upload_status?: true
    status?: true
    submitted_at?: true
    approved_at?: true
    uploaded_to_youtube_at?: true
  }

  export type SubmissionsMaxAggregateInputType = {
    id?: true
    workspace_id?: true
    uploader_id?: true
    youtube_channel_id?: true
    title?: true
    description?: true
    video_url?: true
    thumbnail_url?: true
    original_video_filename?: true
    original_thumbnail_filename?: true
    youtube_video_id?: true
    upload_status?: true
    status?: true
    submitted_at?: true
    approved_at?: true
    uploaded_to_youtube_at?: true
  }

  export type SubmissionsCountAggregateInputType = {
    id?: true
    workspace_id?: true
    uploader_id?: true
    youtube_channel_id?: true
    title?: true
    description?: true
    video_url?: true
    thumbnail_url?: true
    original_video_filename?: true
    original_thumbnail_filename?: true
    youtube_video_id?: true
    upload_status?: true
    status?: true
    submitted_at?: true
    approved_at?: true
    uploaded_to_youtube_at?: true
    _all?: true
  }

  export type SubmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to aggregate.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionsMaxAggregateInputType
  }

  export type GetSubmissionsAggregateType<T extends SubmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmissions[P]>
      : GetScalarType<T[P], AggregateSubmissions[P]>
  }




  export type submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithAggregationInput | submissionsOrderByWithAggregationInput[]
    by: SubmissionsScalarFieldEnum[] | SubmissionsScalarFieldEnum
    having?: submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionsCountAggregateInputType | true
    _min?: SubmissionsMinAggregateInputType
    _max?: SubmissionsMaxAggregateInputType
  }

  export type SubmissionsGroupByOutputType = {
    id: string
    workspace_id: string | null
    uploader_id: string | null
    youtube_channel_id: string | null
    title: string
    description: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename: string | null
    original_thumbnail_filename: string | null
    youtube_video_id: string | null
    upload_status: string | null
    status: string | null
    submitted_at: Date | null
    approved_at: Date | null
    uploaded_to_youtube_at: Date | null
    _count: SubmissionsCountAggregateOutputType | null
    _min: SubmissionsMinAggregateOutputType | null
    _max: SubmissionsMaxAggregateOutputType | null
  }

  type GetSubmissionsGroupByPayload<T extends submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionsGroupByOutputType[P]>
        }
      >
    >


  export type submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    uploader_id?: boolean
    youtube_channel_id?: boolean
    title?: boolean
    description?: boolean
    video_url?: boolean
    thumbnail_url?: boolean
    original_video_filename?: boolean
    original_thumbnail_filename?: boolean
    youtube_video_id?: boolean
    upload_status?: boolean
    status?: boolean
    submitted_at?: boolean
    approved_at?: boolean
    uploaded_to_youtube_at?: boolean
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    uploader_id?: boolean
    youtube_channel_id?: boolean
    title?: boolean
    description?: boolean
    video_url?: boolean
    thumbnail_url?: boolean
    original_video_filename?: boolean
    original_thumbnail_filename?: boolean
    youtube_video_id?: boolean
    upload_status?: boolean
    status?: boolean
    submitted_at?: boolean
    approved_at?: boolean
    uploaded_to_youtube_at?: boolean
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspace_id?: boolean
    uploader_id?: boolean
    youtube_channel_id?: boolean
    title?: boolean
    description?: boolean
    video_url?: boolean
    thumbnail_url?: boolean
    original_video_filename?: boolean
    original_thumbnail_filename?: boolean
    youtube_video_id?: boolean
    upload_status?: boolean
    status?: boolean
    submitted_at?: boolean
    approved_at?: boolean
    uploaded_to_youtube_at?: boolean
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }, ExtArgs["result"]["submissions"]>

  export type submissionsSelectScalar = {
    id?: boolean
    workspace_id?: boolean
    uploader_id?: boolean
    youtube_channel_id?: boolean
    title?: boolean
    description?: boolean
    video_url?: boolean
    thumbnail_url?: boolean
    original_video_filename?: boolean
    original_thumbnail_filename?: boolean
    youtube_video_id?: boolean
    upload_status?: boolean
    status?: boolean
    submitted_at?: boolean
    approved_at?: boolean
    uploaded_to_youtube_at?: boolean
  }

  export type submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspace_id" | "uploader_id" | "youtube_channel_id" | "title" | "description" | "video_url" | "thumbnail_url" | "original_video_filename" | "original_thumbnail_filename" | "youtube_video_id" | "upload_status" | "status" | "submitted_at" | "approved_at" | "uploaded_to_youtube_at", ExtArgs["result"]["submissions"]>
  export type submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }
  export type submissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }
  export type submissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | submissions$usersArgs<ExtArgs>
    workspaces?: boolean | submissions$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | submissions$youtube_channelsArgs<ExtArgs>
  }

  export type $submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submissions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      workspaces: Prisma.$workspacesPayload<ExtArgs> | null
      youtube_channels: Prisma.$youtube_channelsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspace_id: string | null
      uploader_id: string | null
      youtube_channel_id: string | null
      title: string
      description: string | null
      video_url: string
      thumbnail_url: string
      original_video_filename: string | null
      original_thumbnail_filename: string | null
      youtube_video_id: string | null
      upload_status: string | null
      status: string | null
      submitted_at: Date | null
      approved_at: Date | null
      uploaded_to_youtube_at: Date | null
    }, ExtArgs["result"]["submissions"]>
    composites: {}
  }

  type submissionsGetPayload<S extends boolean | null | undefined | submissionsDefaultArgs> = $Result.GetResult<Prisma.$submissionsPayload, S>

  type submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionsCountAggregateInputType | true
    }

  export interface submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submissions'], meta: { name: 'submissions' } }
    /**
     * Find zero or one Submissions that matches the filter.
     * @param {submissionsFindUniqueArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends submissionsFindUniqueArgs>(args: SelectSubset<T, submissionsFindUniqueArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {submissionsFindUniqueOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends submissionsFindFirstArgs>(args?: SelectSubset<T, submissionsFindFirstArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindFirstOrThrowArgs} args - Arguments to find a Submissions
     * @example
     * // Get one Submissions
     * const submissions = await prisma.submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submissions.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionsWithIdOnly = await prisma.submissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends submissionsFindManyArgs>(args?: SelectSubset<T, submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submissions.
     * @param {submissionsCreateArgs} args - Arguments to create a Submissions.
     * @example
     * // Create one Submissions
     * const Submissions = await prisma.submissions.create({
     *   data: {
     *     // ... data to create a Submissions
     *   }
     * })
     * 
     */
    create<T extends submissionsCreateArgs>(args: SelectSubset<T, submissionsCreateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {submissionsCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends submissionsCreateManyArgs>(args?: SelectSubset<T, submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {submissionsCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submissions = await prisma.submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends submissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submissions.
     * @param {submissionsDeleteArgs} args - Arguments to delete one Submissions.
     * @example
     * // Delete one Submissions
     * const Submissions = await prisma.submissions.delete({
     *   where: {
     *     // ... filter to delete one Submissions
     *   }
     * })
     * 
     */
    delete<T extends submissionsDeleteArgs>(args: SelectSubset<T, submissionsDeleteArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submissions.
     * @param {submissionsUpdateArgs} args - Arguments to update one Submissions.
     * @example
     * // Update one Submissions
     * const submissions = await prisma.submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends submissionsUpdateArgs>(args: SelectSubset<T, submissionsUpdateArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {submissionsDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends submissionsDeleteManyArgs>(args?: SelectSubset<T, submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends submissionsUpdateManyArgs>(args: SelectSubset<T, submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {submissionsUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submissions = await prisma.submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionsWithIdOnly = await prisma.submissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends submissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submissions.
     * @param {submissionsUpsertArgs} args - Arguments to update or create a Submissions.
     * @example
     * // Update or create a Submissions
     * const submissions = await prisma.submissions.upsert({
     *   create: {
     *     // ... data to create a Submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submissions we want to update
     *   }
     * })
     */
    upsert<T extends submissionsUpsertArgs>(args: SelectSubset<T, submissionsUpsertArgs<ExtArgs>>): Prisma__submissionsClient<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submissions.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionsCountArgs>(
      args?: Subset<T, submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionsAggregateArgs>(args: Subset<T, SubmissionsAggregateArgs>): Prisma.PrismaPromise<GetSubmissionsAggregateType<T>>

    /**
     * Group by Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionsGroupByArgs} args - Group by arguments.
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
      T extends submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionsGroupByArgs['orderBy'] }
        : { orderBy?: submissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submissions model
   */
  readonly fields: submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends submissions$usersArgs<ExtArgs> = {}>(args?: Subset<T, submissions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends submissions$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, submissions$workspacesArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    youtube_channels<T extends submissions$youtube_channelsArgs<ExtArgs> = {}>(args?: Subset<T, submissions$youtube_channelsArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the submissions model
   */
  interface submissionsFieldRefs {
    readonly id: FieldRef<"submissions", 'String'>
    readonly workspace_id: FieldRef<"submissions", 'String'>
    readonly uploader_id: FieldRef<"submissions", 'String'>
    readonly youtube_channel_id: FieldRef<"submissions", 'String'>
    readonly title: FieldRef<"submissions", 'String'>
    readonly description: FieldRef<"submissions", 'String'>
    readonly video_url: FieldRef<"submissions", 'String'>
    readonly thumbnail_url: FieldRef<"submissions", 'String'>
    readonly original_video_filename: FieldRef<"submissions", 'String'>
    readonly original_thumbnail_filename: FieldRef<"submissions", 'String'>
    readonly youtube_video_id: FieldRef<"submissions", 'String'>
    readonly upload_status: FieldRef<"submissions", 'String'>
    readonly status: FieldRef<"submissions", 'String'>
    readonly submitted_at: FieldRef<"submissions", 'DateTime'>
    readonly approved_at: FieldRef<"submissions", 'DateTime'>
    readonly uploaded_to_youtube_at: FieldRef<"submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * submissions findUnique
   */
  export type submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findUniqueOrThrow
   */
  export type submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions findFirst
   */
  export type submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findFirstOrThrow
   */
  export type submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions findMany
   */
  export type submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * submissions create
   */
  export type submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a submissions.
     */
    data: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
  }

  /**
   * submissions createMany
   */
  export type submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * submissions createManyAndReturn
   */
  export type submissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to create many submissions.
     */
    data: submissionsCreateManyInput | submissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * submissions update
   */
  export type submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a submissions.
     */
    data: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
    /**
     * Choose, which submissions to update.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions updateMany
   */
  export type submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
  }

  /**
   * submissions updateManyAndReturn
   */
  export type submissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * submissions upsert
   */
  export type submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the submissions to update in case it exists.
     */
    where: submissionsWhereUniqueInput
    /**
     * In case the submissions found by the `where` argument doesn't exist, create a new submissions with this data.
     */
    create: XOR<submissionsCreateInput, submissionsUncheckedCreateInput>
    /**
     * In case the submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionsUpdateInput, submissionsUncheckedUpdateInput>
  }

  /**
   * submissions delete
   */
  export type submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    /**
     * Filter which submissions to delete.
     */
    where: submissionsWhereUniqueInput
  }

  /**
   * submissions deleteMany
   */
  export type submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionsWhereInput
    /**
     * Limit how many submissions to delete.
     */
    limit?: number
  }

  /**
   * submissions.users
   */
  export type submissions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * submissions.workspaces
   */
  export type submissions$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
  }

  /**
   * submissions.youtube_channels
   */
  export type submissions$youtube_channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    where?: youtube_channelsWhereInput
  }

  /**
   * submissions without action
   */
  export type submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    name: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    name: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    role: number
    name: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    name?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    name?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    role: string | null
    name: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
    submissions?: boolean | users$submissionsArgs<ExtArgs>
    workspace_members?: boolean | users$workspace_membersArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | users$youtube_channelsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "name" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | users$submissionsArgs<ExtArgs>
    workspace_members?: boolean | users$workspace_membersArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    youtube_channels?: boolean | users$youtube_channelsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
      workspace_members: Prisma.$workspace_membersPayload<ExtArgs>[]
      workspaces: Prisma.$workspacesPayload<ExtArgs>[]
      youtube_channels: Prisma.$youtube_channelsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string | null
      name: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends users$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, users$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_members<T extends users$workspace_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$workspace_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends users$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, users$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    youtube_channels<T extends users$youtube_channelsArgs<ExtArgs> = {}>(args?: Subset<T, users$youtube_channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.submissions
   */
  export type users$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * users.workspace_members
   */
  export type users$workspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    cursor?: workspace_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * users.workspaces
   */
  export type users$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    cursor?: workspacesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * users.youtube_channels
   */
  export type users$youtube_channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    where?: youtube_channelsWhereInput
    orderBy?: youtube_channelsOrderByWithRelationInput | youtube_channelsOrderByWithRelationInput[]
    cursor?: youtube_channelsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Youtube_channelsScalarFieldEnum | Youtube_channelsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model workspace_members
   */

  export type AggregateWorkspace_members = {
    _count: Workspace_membersCountAggregateOutputType | null
    _min: Workspace_membersMinAggregateOutputType | null
    _max: Workspace_membersMaxAggregateOutputType | null
  }

  export type Workspace_membersMinAggregateOutputType = {
    workspace_id: string | null
    user_id: string | null
    joined_at: Date | null
  }

  export type Workspace_membersMaxAggregateOutputType = {
    workspace_id: string | null
    user_id: string | null
    joined_at: Date | null
  }

  export type Workspace_membersCountAggregateOutputType = {
    workspace_id: number
    user_id: number
    joined_at: number
    _all: number
  }


  export type Workspace_membersMinAggregateInputType = {
    workspace_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Workspace_membersMaxAggregateInputType = {
    workspace_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Workspace_membersCountAggregateInputType = {
    workspace_id?: true
    user_id?: true
    joined_at?: true
    _all?: true
  }

  export type Workspace_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_members to aggregate.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspace_members
    **/
    _count?: true | Workspace_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workspace_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workspace_membersMaxAggregateInputType
  }

  export type GetWorkspace_membersAggregateType<T extends Workspace_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace_members[P]>
      : GetScalarType<T[P], AggregateWorkspace_members[P]>
  }




  export type workspace_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithAggregationInput | workspace_membersOrderByWithAggregationInput[]
    by: Workspace_membersScalarFieldEnum[] | Workspace_membersScalarFieldEnum
    having?: workspace_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workspace_membersCountAggregateInputType | true
    _min?: Workspace_membersMinAggregateInputType
    _max?: Workspace_membersMaxAggregateInputType
  }

  export type Workspace_membersGroupByOutputType = {
    workspace_id: string
    user_id: string
    joined_at: Date | null
    _count: Workspace_membersCountAggregateOutputType | null
    _min: Workspace_membersMinAggregateOutputType | null
    _max: Workspace_membersMaxAggregateOutputType | null
  }

  type GetWorkspace_membersGroupByPayload<T extends workspace_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workspace_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workspace_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workspace_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Workspace_membersGroupByOutputType[P]>
        }
      >
    >


  export type workspace_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_members"]>

  export type workspace_membersSelectScalar = {
    workspace_id?: boolean
    user_id?: boolean
    joined_at?: boolean
  }

  export type workspace_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspace_id" | "user_id" | "joined_at", ExtArgs["result"]["workspace_members"]>
  export type workspace_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type workspace_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }
  export type workspace_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    workspaces?: boolean | workspacesDefaultArgs<ExtArgs>
  }

  export type $workspace_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspace_members"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      workspaces: Prisma.$workspacesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspace_id: string
      user_id: string
      joined_at: Date | null
    }, ExtArgs["result"]["workspace_members"]>
    composites: {}
  }

  type workspace_membersGetPayload<S extends boolean | null | undefined | workspace_membersDefaultArgs> = $Result.GetResult<Prisma.$workspace_membersPayload, S>

  type workspace_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspace_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workspace_membersCountAggregateInputType | true
    }

  export interface workspace_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspace_members'], meta: { name: 'workspace_members' } }
    /**
     * Find zero or one Workspace_members that matches the filter.
     * @param {workspace_membersFindUniqueArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspace_membersFindUniqueArgs>(args: SelectSubset<T, workspace_membersFindUniqueArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspace_membersFindUniqueOrThrowArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspace_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, workspace_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindFirstArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspace_membersFindFirstArgs>(args?: SelectSubset<T, workspace_membersFindFirstArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindFirstOrThrowArgs} args - Arguments to find a Workspace_members
     * @example
     * // Get one Workspace_members
     * const workspace_members = await prisma.workspace_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspace_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, workspace_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspace_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspace_members
     * const workspace_members = await prisma.workspace_members.findMany()
     * 
     * // Get first 10 Workspace_members
     * const workspace_members = await prisma.workspace_members.findMany({ take: 10 })
     * 
     * // Only select the `workspace_id`
     * const workspace_membersWithWorkspace_idOnly = await prisma.workspace_members.findMany({ select: { workspace_id: true } })
     * 
     */
    findMany<T extends workspace_membersFindManyArgs>(args?: SelectSubset<T, workspace_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace_members.
     * @param {workspace_membersCreateArgs} args - Arguments to create a Workspace_members.
     * @example
     * // Create one Workspace_members
     * const Workspace_members = await prisma.workspace_members.create({
     *   data: {
     *     // ... data to create a Workspace_members
     *   }
     * })
     * 
     */
    create<T extends workspace_membersCreateArgs>(args: SelectSubset<T, workspace_membersCreateArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspace_members.
     * @param {workspace_membersCreateManyArgs} args - Arguments to create many Workspace_members.
     * @example
     * // Create many Workspace_members
     * const workspace_members = await prisma.workspace_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspace_membersCreateManyArgs>(args?: SelectSubset<T, workspace_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspace_members and returns the data saved in the database.
     * @param {workspace_membersCreateManyAndReturnArgs} args - Arguments to create many Workspace_members.
     * @example
     * // Create many Workspace_members
     * const workspace_members = await prisma.workspace_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspace_members and only return the `workspace_id`
     * const workspace_membersWithWorkspace_idOnly = await prisma.workspace_members.createManyAndReturn({
     *   select: { workspace_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspace_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, workspace_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace_members.
     * @param {workspace_membersDeleteArgs} args - Arguments to delete one Workspace_members.
     * @example
     * // Delete one Workspace_members
     * const Workspace_members = await prisma.workspace_members.delete({
     *   where: {
     *     // ... filter to delete one Workspace_members
     *   }
     * })
     * 
     */
    delete<T extends workspace_membersDeleteArgs>(args: SelectSubset<T, workspace_membersDeleteArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace_members.
     * @param {workspace_membersUpdateArgs} args - Arguments to update one Workspace_members.
     * @example
     * // Update one Workspace_members
     * const workspace_members = await prisma.workspace_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspace_membersUpdateArgs>(args: SelectSubset<T, workspace_membersUpdateArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspace_members.
     * @param {workspace_membersDeleteManyArgs} args - Arguments to filter Workspace_members to delete.
     * @example
     * // Delete a few Workspace_members
     * const { count } = await prisma.workspace_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspace_membersDeleteManyArgs>(args?: SelectSubset<T, workspace_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspace_members
     * const workspace_members = await prisma.workspace_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspace_membersUpdateManyArgs>(args: SelectSubset<T, workspace_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_members and returns the data updated in the database.
     * @param {workspace_membersUpdateManyAndReturnArgs} args - Arguments to update many Workspace_members.
     * @example
     * // Update many Workspace_members
     * const workspace_members = await prisma.workspace_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspace_members and only return the `workspace_id`
     * const workspace_membersWithWorkspace_idOnly = await prisma.workspace_members.updateManyAndReturn({
     *   select: { workspace_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspace_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, workspace_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace_members.
     * @param {workspace_membersUpsertArgs} args - Arguments to update or create a Workspace_members.
     * @example
     * // Update or create a Workspace_members
     * const workspace_members = await prisma.workspace_members.upsert({
     *   create: {
     *     // ... data to create a Workspace_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace_members we want to update
     *   }
     * })
     */
    upsert<T extends workspace_membersUpsertArgs>(args: SelectSubset<T, workspace_membersUpsertArgs<ExtArgs>>): Prisma__workspace_membersClient<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersCountArgs} args - Arguments to filter Workspace_members to count.
     * @example
     * // Count the number of Workspace_members
     * const count = await prisma.workspace_members.count({
     *   where: {
     *     // ... the filter for the Workspace_members we want to count
     *   }
     * })
    **/
    count<T extends workspace_membersCountArgs>(
      args?: Subset<T, workspace_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workspace_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workspace_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Workspace_membersAggregateArgs>(args: Subset<T, Workspace_membersAggregateArgs>): Prisma.PrismaPromise<GetWorkspace_membersAggregateType<T>>

    /**
     * Group by Workspace_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_membersGroupByArgs} args - Group by arguments.
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
      T extends workspace_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspace_membersGroupByArgs['orderBy'] }
        : { orderBy?: workspace_membersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspace_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspace_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspace_members model
   */
  readonly fields: workspace_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspace_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspace_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspace_members model
   */
  interface workspace_membersFieldRefs {
    readonly workspace_id: FieldRef<"workspace_members", 'String'>
    readonly user_id: FieldRef<"workspace_members", 'String'>
    readonly joined_at: FieldRef<"workspace_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workspace_members findUnique
   */
  export type workspace_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members findUniqueOrThrow
   */
  export type workspace_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members findFirst
   */
  export type workspace_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_members.
     */
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members findFirstOrThrow
   */
  export type workspace_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_members.
     */
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members findMany
   */
  export type workspace_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_members to fetch.
     */
    where?: workspace_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_members to fetch.
     */
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspace_members.
     */
    cursor?: workspace_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_members.
     */
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspace_members create
   */
  export type workspace_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a workspace_members.
     */
    data: XOR<workspace_membersCreateInput, workspace_membersUncheckedCreateInput>
  }

  /**
   * workspace_members createMany
   */
  export type workspace_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspace_members.
     */
    data: workspace_membersCreateManyInput | workspace_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspace_members createManyAndReturn
   */
  export type workspace_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * The data used to create many workspace_members.
     */
    data: workspace_membersCreateManyInput | workspace_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_members update
   */
  export type workspace_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a workspace_members.
     */
    data: XOR<workspace_membersUpdateInput, workspace_membersUncheckedUpdateInput>
    /**
     * Choose, which workspace_members to update.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members updateMany
   */
  export type workspace_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspace_members.
     */
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_members to update
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to update.
     */
    limit?: number
  }

  /**
   * workspace_members updateManyAndReturn
   */
  export type workspace_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * The data used to update workspace_members.
     */
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_members to update
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_members upsert
   */
  export type workspace_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the workspace_members to update in case it exists.
     */
    where: workspace_membersWhereUniqueInput
    /**
     * In case the workspace_members found by the `where` argument doesn't exist, create a new workspace_members with this data.
     */
    create: XOR<workspace_membersCreateInput, workspace_membersUncheckedCreateInput>
    /**
     * In case the workspace_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspace_membersUpdateInput, workspace_membersUncheckedUpdateInput>
  }

  /**
   * workspace_members delete
   */
  export type workspace_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    /**
     * Filter which workspace_members to delete.
     */
    where: workspace_membersWhereUniqueInput
  }

  /**
   * workspace_members deleteMany
   */
  export type workspace_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_members to delete
     */
    where?: workspace_membersWhereInput
    /**
     * Limit how many workspace_members to delete.
     */
    limit?: number
  }

  /**
   * workspace_members without action
   */
  export type workspace_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
  }


  /**
   * Model workspaces
   */

  export type AggregateWorkspaces = {
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  export type WorkspacesMinAggregateOutputType = {
    id: string | null
    name: string | null
    creator_id: string | null
    created_at: Date | null
    youtube_channel_id: string | null
  }

  export type WorkspacesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    creator_id: string | null
    created_at: Date | null
    youtube_channel_id: string | null
  }

  export type WorkspacesCountAggregateOutputType = {
    id: number
    name: number
    creator_id: number
    created_at: number
    youtube_channel_id: number
    _all: number
  }


  export type WorkspacesMinAggregateInputType = {
    id?: true
    name?: true
    creator_id?: true
    created_at?: true
    youtube_channel_id?: true
  }

  export type WorkspacesMaxAggregateInputType = {
    id?: true
    name?: true
    creator_id?: true
    created_at?: true
    youtube_channel_id?: true
  }

  export type WorkspacesCountAggregateInputType = {
    id?: true
    name?: true
    creator_id?: true
    created_at?: true
    youtube_channel_id?: true
    _all?: true
  }

  export type WorkspacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to aggregate.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacesMaxAggregateInputType
  }

  export type GetWorkspacesAggregateType<T extends WorkspacesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaces[P]>
      : GetScalarType<T[P], AggregateWorkspaces[P]>
  }




  export type workspacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithAggregationInput | workspacesOrderByWithAggregationInput[]
    by: WorkspacesScalarFieldEnum[] | WorkspacesScalarFieldEnum
    having?: workspacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacesCountAggregateInputType | true
    _min?: WorkspacesMinAggregateInputType
    _max?: WorkspacesMaxAggregateInputType
  }

  export type WorkspacesGroupByOutputType = {
    id: string
    name: string
    creator_id: string | null
    created_at: Date | null
    youtube_channel_id: string | null
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  type GetWorkspacesGroupByPayload<T extends workspacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
        }
      >
    >


  export type workspacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creator_id?: boolean
    created_at?: boolean
    youtube_channel_id?: boolean
    submissions?: boolean | workspaces$submissionsArgs<ExtArgs>
    workspace_members?: boolean | workspaces$workspace_membersArgs<ExtArgs>
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creator_id?: boolean
    created_at?: boolean
    youtube_channel_id?: boolean
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    creator_id?: boolean
    created_at?: boolean
    youtube_channel_id?: boolean
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectScalar = {
    id?: boolean
    name?: boolean
    creator_id?: boolean
    created_at?: boolean
    youtube_channel_id?: boolean
  }

  export type workspacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "creator_id" | "created_at" | "youtube_channel_id", ExtArgs["result"]["workspaces"]>
  export type workspacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | workspaces$submissionsArgs<ExtArgs>
    workspace_members?: boolean | workspaces$workspace_membersArgs<ExtArgs>
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workspacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
  }
  export type workspacesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | workspaces$usersArgs<ExtArgs>
    youtube_channels?: boolean | workspaces$youtube_channelsArgs<ExtArgs>
  }

  export type $workspacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspaces"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
      workspace_members: Prisma.$workspace_membersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
      youtube_channels: Prisma.$youtube_channelsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      creator_id: string | null
      created_at: Date | null
      youtube_channel_id: string | null
    }, ExtArgs["result"]["workspaces"]>
    composites: {}
  }

  type workspacesGetPayload<S extends boolean | null | undefined | workspacesDefaultArgs> = $Result.GetResult<Prisma.$workspacesPayload, S>

  type workspacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacesCountAggregateInputType | true
    }

  export interface workspacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspaces'], meta: { name: 'workspaces' } }
    /**
     * Find zero or one Workspaces that matches the filter.
     * @param {workspacesFindUniqueArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacesFindUniqueArgs>(args: SelectSubset<T, workspacesFindUniqueArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspaces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacesFindUniqueOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacesFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacesFindFirstArgs>(args?: SelectSubset<T, workspacesFindFirstArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacesFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspaces.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspaces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspacesFindManyArgs>(args?: SelectSubset<T, workspacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspaces.
     * @param {workspacesCreateArgs} args - Arguments to create a Workspaces.
     * @example
     * // Create one Workspaces
     * const Workspaces = await prisma.workspaces.create({
     *   data: {
     *     // ... data to create a Workspaces
     *   }
     * })
     * 
     */
    create<T extends workspacesCreateArgs>(args: SelectSubset<T, workspacesCreateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {workspacesCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacesCreateManyArgs>(args?: SelectSubset<T, workspacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {workspacesCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacesCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspaces.
     * @param {workspacesDeleteArgs} args - Arguments to delete one Workspaces.
     * @example
     * // Delete one Workspaces
     * const Workspaces = await prisma.workspaces.delete({
     *   where: {
     *     // ... filter to delete one Workspaces
     *   }
     * })
     * 
     */
    delete<T extends workspacesDeleteArgs>(args: SelectSubset<T, workspacesDeleteArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspaces.
     * @param {workspacesUpdateArgs} args - Arguments to update one Workspaces.
     * @example
     * // Update one Workspaces
     * const workspaces = await prisma.workspaces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacesUpdateArgs>(args: SelectSubset<T, workspacesUpdateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {workspacesDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspaces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacesDeleteManyArgs>(args?: SelectSubset<T, workspacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacesUpdateManyArgs>(args: SelectSubset<T, workspacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {workspacesUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspacesUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspaces.
     * @param {workspacesUpsertArgs} args - Arguments to update or create a Workspaces.
     * @example
     * // Update or create a Workspaces
     * const workspaces = await prisma.workspaces.upsert({
     *   create: {
     *     // ... data to create a Workspaces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspaces we want to update
     *   }
     * })
     */
    upsert<T extends workspacesUpsertArgs>(args: SelectSubset<T, workspacesUpsertArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspaces.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspacesCountArgs>(
      args?: Subset<T, workspacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspacesAggregateArgs>(args: Subset<T, WorkspacesAggregateArgs>): Prisma.PrismaPromise<GetWorkspacesAggregateType<T>>

    /**
     * Group by Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesGroupByArgs} args - Group by arguments.
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
      T extends workspacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacesGroupByArgs['orderBy'] }
        : { orderBy?: workspacesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workspacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspaces model
   */
  readonly fields: workspacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspaces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends workspaces$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_members<T extends workspaces$workspace_membersArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$workspace_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends workspaces$usersArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    youtube_channels<T extends workspaces$youtube_channelsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$youtube_channelsArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the workspaces model
   */
  interface workspacesFieldRefs {
    readonly id: FieldRef<"workspaces", 'String'>
    readonly name: FieldRef<"workspaces", 'String'>
    readonly creator_id: FieldRef<"workspaces", 'String'>
    readonly created_at: FieldRef<"workspaces", 'DateTime'>
    readonly youtube_channel_id: FieldRef<"workspaces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * workspaces findUnique
   */
  export type workspacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findUniqueOrThrow
   */
  export type workspacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findFirst
   */
  export type workspacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findFirstOrThrow
   */
  export type workspacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findMany
   */
  export type workspacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces create
   */
  export type workspacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to create a workspaces.
     */
    data: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
  }

  /**
   * workspaces createMany
   */
  export type workspacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces createManyAndReturn
   */
  export type workspacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaces update
   */
  export type workspacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to update a workspaces.
     */
    data: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
    /**
     * Choose, which workspaces to update.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces updateMany
   */
  export type workspacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspaces updateManyAndReturn
   */
  export type workspacesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspaces upsert
   */
  export type workspacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The filter to search for the workspaces to update in case it exists.
     */
    where: workspacesWhereUniqueInput
    /**
     * In case the workspaces found by the `where` argument doesn't exist, create a new workspaces with this data.
     */
    create: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
    /**
     * In case the workspaces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
  }

  /**
   * workspaces delete
   */
  export type workspacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter which workspaces to delete.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces deleteMany
   */
  export type workspacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to delete.
     */
    limit?: number
  }

  /**
   * workspaces.submissions
   */
  export type workspaces$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * workspaces.workspace_members
   */
  export type workspaces$workspace_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_members
     */
    select?: workspace_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_members
     */
    omit?: workspace_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_membersInclude<ExtArgs> | null
    where?: workspace_membersWhereInput
    orderBy?: workspace_membersOrderByWithRelationInput | workspace_membersOrderByWithRelationInput[]
    cursor?: workspace_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_membersScalarFieldEnum | Workspace_membersScalarFieldEnum[]
  }

  /**
   * workspaces.users
   */
  export type workspaces$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * workspaces.youtube_channels
   */
  export type workspaces$youtube_channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    where?: youtube_channelsWhereInput
  }

  /**
   * workspaces without action
   */
  export type workspacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
  }


  /**
   * Model youtube_channels
   */

  export type AggregateYoutube_channels = {
    _count: Youtube_channelsCountAggregateOutputType | null
    _min: Youtube_channelsMinAggregateOutputType | null
    _max: Youtube_channelsMaxAggregateOutputType | null
  }

  export type Youtube_channelsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    channel_id: string | null
    channel_name: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Youtube_channelsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    channel_id: string | null
    channel_name: string | null
    access_token: string | null
    refresh_token: string | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Youtube_channelsCountAggregateOutputType = {
    id: number
    user_id: number
    channel_id: number
    channel_name: number
    access_token: number
    refresh_token: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Youtube_channelsMinAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    channel_name?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Youtube_channelsMaxAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    channel_name?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Youtube_channelsCountAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    channel_name?: true
    access_token?: true
    refresh_token?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Youtube_channelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which youtube_channels to aggregate.
     */
    where?: youtube_channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_channels to fetch.
     */
    orderBy?: youtube_channelsOrderByWithRelationInput | youtube_channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: youtube_channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned youtube_channels
    **/
    _count?: true | Youtube_channelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Youtube_channelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Youtube_channelsMaxAggregateInputType
  }

  export type GetYoutube_channelsAggregateType<T extends Youtube_channelsAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutube_channels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutube_channels[P]>
      : GetScalarType<T[P], AggregateYoutube_channels[P]>
  }




  export type youtube_channelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: youtube_channelsWhereInput
    orderBy?: youtube_channelsOrderByWithAggregationInput | youtube_channelsOrderByWithAggregationInput[]
    by: Youtube_channelsScalarFieldEnum[] | Youtube_channelsScalarFieldEnum
    having?: youtube_channelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Youtube_channelsCountAggregateInputType | true
    _min?: Youtube_channelsMinAggregateInputType
    _max?: Youtube_channelsMaxAggregateInputType
  }

  export type Youtube_channelsGroupByOutputType = {
    id: string
    user_id: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Youtube_channelsCountAggregateOutputType | null
    _min: Youtube_channelsMinAggregateOutputType | null
    _max: Youtube_channelsMaxAggregateOutputType | null
  }

  type GetYoutube_channelsGroupByPayload<T extends youtube_channelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Youtube_channelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Youtube_channelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Youtube_channelsGroupByOutputType[P]>
            : GetScalarType<T[P], Youtube_channelsGroupByOutputType[P]>
        }
      >
    >


  export type youtube_channelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    channel_name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    submissions?: boolean | youtube_channels$submissionsArgs<ExtArgs>
    workspaces?: boolean | youtube_channels$workspacesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Youtube_channelsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtube_channels"]>

  export type youtube_channelsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    channel_name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtube_channels"]>

  export type youtube_channelsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    channel_name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["youtube_channels"]>

  export type youtube_channelsSelectScalar = {
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    channel_name?: boolean
    access_token?: boolean
    refresh_token?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type youtube_channelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "channel_id" | "channel_name" | "access_token" | "refresh_token" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["youtube_channels"]>
  export type youtube_channelsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | youtube_channels$submissionsArgs<ExtArgs>
    workspaces?: boolean | youtube_channels$workspacesArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | Youtube_channelsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type youtube_channelsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type youtube_channelsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $youtube_channelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "youtube_channels"
    objects: {
      submissions: Prisma.$submissionsPayload<ExtArgs>[]
      workspaces: Prisma.$workspacesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      channel_id: string
      channel_name: string
      access_token: string
      refresh_token: string
      expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["youtube_channels"]>
    composites: {}
  }

  type youtube_channelsGetPayload<S extends boolean | null | undefined | youtube_channelsDefaultArgs> = $Result.GetResult<Prisma.$youtube_channelsPayload, S>

  type youtube_channelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<youtube_channelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Youtube_channelsCountAggregateInputType | true
    }

  export interface youtube_channelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['youtube_channels'], meta: { name: 'youtube_channels' } }
    /**
     * Find zero or one Youtube_channels that matches the filter.
     * @param {youtube_channelsFindUniqueArgs} args - Arguments to find a Youtube_channels
     * @example
     * // Get one Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends youtube_channelsFindUniqueArgs>(args: SelectSubset<T, youtube_channelsFindUniqueArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Youtube_channels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {youtube_channelsFindUniqueOrThrowArgs} args - Arguments to find a Youtube_channels
     * @example
     * // Get one Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends youtube_channelsFindUniqueOrThrowArgs>(args: SelectSubset<T, youtube_channelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Youtube_channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsFindFirstArgs} args - Arguments to find a Youtube_channels
     * @example
     * // Get one Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends youtube_channelsFindFirstArgs>(args?: SelectSubset<T, youtube_channelsFindFirstArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Youtube_channels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsFindFirstOrThrowArgs} args - Arguments to find a Youtube_channels
     * @example
     * // Get one Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends youtube_channelsFindFirstOrThrowArgs>(args?: SelectSubset<T, youtube_channelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Youtube_channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findMany()
     * 
     * // Get first 10 Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtube_channelsWithIdOnly = await prisma.youtube_channels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends youtube_channelsFindManyArgs>(args?: SelectSubset<T, youtube_channelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Youtube_channels.
     * @param {youtube_channelsCreateArgs} args - Arguments to create a Youtube_channels.
     * @example
     * // Create one Youtube_channels
     * const Youtube_channels = await prisma.youtube_channels.create({
     *   data: {
     *     // ... data to create a Youtube_channels
     *   }
     * })
     * 
     */
    create<T extends youtube_channelsCreateArgs>(args: SelectSubset<T, youtube_channelsCreateArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Youtube_channels.
     * @param {youtube_channelsCreateManyArgs} args - Arguments to create many Youtube_channels.
     * @example
     * // Create many Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends youtube_channelsCreateManyArgs>(args?: SelectSubset<T, youtube_channelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Youtube_channels and returns the data saved in the database.
     * @param {youtube_channelsCreateManyAndReturnArgs} args - Arguments to create many Youtube_channels.
     * @example
     * // Create many Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Youtube_channels and only return the `id`
     * const youtube_channelsWithIdOnly = await prisma.youtube_channels.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends youtube_channelsCreateManyAndReturnArgs>(args?: SelectSubset<T, youtube_channelsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Youtube_channels.
     * @param {youtube_channelsDeleteArgs} args - Arguments to delete one Youtube_channels.
     * @example
     * // Delete one Youtube_channels
     * const Youtube_channels = await prisma.youtube_channels.delete({
     *   where: {
     *     // ... filter to delete one Youtube_channels
     *   }
     * })
     * 
     */
    delete<T extends youtube_channelsDeleteArgs>(args: SelectSubset<T, youtube_channelsDeleteArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Youtube_channels.
     * @param {youtube_channelsUpdateArgs} args - Arguments to update one Youtube_channels.
     * @example
     * // Update one Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends youtube_channelsUpdateArgs>(args: SelectSubset<T, youtube_channelsUpdateArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Youtube_channels.
     * @param {youtube_channelsDeleteManyArgs} args - Arguments to filter Youtube_channels to delete.
     * @example
     * // Delete a few Youtube_channels
     * const { count } = await prisma.youtube_channels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends youtube_channelsDeleteManyArgs>(args?: SelectSubset<T, youtube_channelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends youtube_channelsUpdateManyArgs>(args: SelectSubset<T, youtube_channelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Youtube_channels and returns the data updated in the database.
     * @param {youtube_channelsUpdateManyAndReturnArgs} args - Arguments to update many Youtube_channels.
     * @example
     * // Update many Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Youtube_channels and only return the `id`
     * const youtube_channelsWithIdOnly = await prisma.youtube_channels.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends youtube_channelsUpdateManyAndReturnArgs>(args: SelectSubset<T, youtube_channelsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Youtube_channels.
     * @param {youtube_channelsUpsertArgs} args - Arguments to update or create a Youtube_channels.
     * @example
     * // Update or create a Youtube_channels
     * const youtube_channels = await prisma.youtube_channels.upsert({
     *   create: {
     *     // ... data to create a Youtube_channels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Youtube_channels we want to update
     *   }
     * })
     */
    upsert<T extends youtube_channelsUpsertArgs>(args: SelectSubset<T, youtube_channelsUpsertArgs<ExtArgs>>): Prisma__youtube_channelsClient<$Result.GetResult<Prisma.$youtube_channelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Youtube_channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsCountArgs} args - Arguments to filter Youtube_channels to count.
     * @example
     * // Count the number of Youtube_channels
     * const count = await prisma.youtube_channels.count({
     *   where: {
     *     // ... the filter for the Youtube_channels we want to count
     *   }
     * })
    **/
    count<T extends youtube_channelsCountArgs>(
      args?: Subset<T, youtube_channelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Youtube_channelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Youtube_channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Youtube_channelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Youtube_channelsAggregateArgs>(args: Subset<T, Youtube_channelsAggregateArgs>): Prisma.PrismaPromise<GetYoutube_channelsAggregateType<T>>

    /**
     * Group by Youtube_channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {youtube_channelsGroupByArgs} args - Group by arguments.
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
      T extends youtube_channelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: youtube_channelsGroupByArgs['orderBy'] }
        : { orderBy?: youtube_channelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, youtube_channelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutube_channelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the youtube_channels model
   */
  readonly fields: youtube_channelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for youtube_channels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__youtube_channelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends youtube_channels$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, youtube_channels$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaces<T extends youtube_channels$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, youtube_channels$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the youtube_channels model
   */
  interface youtube_channelsFieldRefs {
    readonly id: FieldRef<"youtube_channels", 'String'>
    readonly user_id: FieldRef<"youtube_channels", 'String'>
    readonly channel_id: FieldRef<"youtube_channels", 'String'>
    readonly channel_name: FieldRef<"youtube_channels", 'String'>
    readonly access_token: FieldRef<"youtube_channels", 'String'>
    readonly refresh_token: FieldRef<"youtube_channels", 'String'>
    readonly expires_at: FieldRef<"youtube_channels", 'DateTime'>
    readonly created_at: FieldRef<"youtube_channels", 'DateTime'>
    readonly updated_at: FieldRef<"youtube_channels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * youtube_channels findUnique
   */
  export type youtube_channelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter, which youtube_channels to fetch.
     */
    where: youtube_channelsWhereUniqueInput
  }

  /**
   * youtube_channels findUniqueOrThrow
   */
  export type youtube_channelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter, which youtube_channels to fetch.
     */
    where: youtube_channelsWhereUniqueInput
  }

  /**
   * youtube_channels findFirst
   */
  export type youtube_channelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter, which youtube_channels to fetch.
     */
    where?: youtube_channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_channels to fetch.
     */
    orderBy?: youtube_channelsOrderByWithRelationInput | youtube_channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for youtube_channels.
     */
    cursor?: youtube_channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of youtube_channels.
     */
    distinct?: Youtube_channelsScalarFieldEnum | Youtube_channelsScalarFieldEnum[]
  }

  /**
   * youtube_channels findFirstOrThrow
   */
  export type youtube_channelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter, which youtube_channels to fetch.
     */
    where?: youtube_channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_channels to fetch.
     */
    orderBy?: youtube_channelsOrderByWithRelationInput | youtube_channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for youtube_channels.
     */
    cursor?: youtube_channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of youtube_channels.
     */
    distinct?: Youtube_channelsScalarFieldEnum | Youtube_channelsScalarFieldEnum[]
  }

  /**
   * youtube_channels findMany
   */
  export type youtube_channelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter, which youtube_channels to fetch.
     */
    where?: youtube_channelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of youtube_channels to fetch.
     */
    orderBy?: youtube_channelsOrderByWithRelationInput | youtube_channelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing youtube_channels.
     */
    cursor?: youtube_channelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` youtube_channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` youtube_channels.
     */
    skip?: number
    distinct?: Youtube_channelsScalarFieldEnum | Youtube_channelsScalarFieldEnum[]
  }

  /**
   * youtube_channels create
   */
  export type youtube_channelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * The data needed to create a youtube_channels.
     */
    data: XOR<youtube_channelsCreateInput, youtube_channelsUncheckedCreateInput>
  }

  /**
   * youtube_channels createMany
   */
  export type youtube_channelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many youtube_channels.
     */
    data: youtube_channelsCreateManyInput | youtube_channelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * youtube_channels createManyAndReturn
   */
  export type youtube_channelsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * The data used to create many youtube_channels.
     */
    data: youtube_channelsCreateManyInput | youtube_channelsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * youtube_channels update
   */
  export type youtube_channelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * The data needed to update a youtube_channels.
     */
    data: XOR<youtube_channelsUpdateInput, youtube_channelsUncheckedUpdateInput>
    /**
     * Choose, which youtube_channels to update.
     */
    where: youtube_channelsWhereUniqueInput
  }

  /**
   * youtube_channels updateMany
   */
  export type youtube_channelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update youtube_channels.
     */
    data: XOR<youtube_channelsUpdateManyMutationInput, youtube_channelsUncheckedUpdateManyInput>
    /**
     * Filter which youtube_channels to update
     */
    where?: youtube_channelsWhereInput
    /**
     * Limit how many youtube_channels to update.
     */
    limit?: number
  }

  /**
   * youtube_channels updateManyAndReturn
   */
  export type youtube_channelsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * The data used to update youtube_channels.
     */
    data: XOR<youtube_channelsUpdateManyMutationInput, youtube_channelsUncheckedUpdateManyInput>
    /**
     * Filter which youtube_channels to update
     */
    where?: youtube_channelsWhereInput
    /**
     * Limit how many youtube_channels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * youtube_channels upsert
   */
  export type youtube_channelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * The filter to search for the youtube_channels to update in case it exists.
     */
    where: youtube_channelsWhereUniqueInput
    /**
     * In case the youtube_channels found by the `where` argument doesn't exist, create a new youtube_channels with this data.
     */
    create: XOR<youtube_channelsCreateInput, youtube_channelsUncheckedCreateInput>
    /**
     * In case the youtube_channels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<youtube_channelsUpdateInput, youtube_channelsUncheckedUpdateInput>
  }

  /**
   * youtube_channels delete
   */
  export type youtube_channelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
    /**
     * Filter which youtube_channels to delete.
     */
    where: youtube_channelsWhereUniqueInput
  }

  /**
   * youtube_channels deleteMany
   */
  export type youtube_channelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which youtube_channels to delete
     */
    where?: youtube_channelsWhereInput
    /**
     * Limit how many youtube_channels to delete.
     */
    limit?: number
  }

  /**
   * youtube_channels.submissions
   */
  export type youtube_channels$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submissions
     */
    select?: submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the submissions
     */
    omit?: submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: submissionsInclude<ExtArgs> | null
    where?: submissionsWhereInput
    orderBy?: submissionsOrderByWithRelationInput | submissionsOrderByWithRelationInput[]
    cursor?: submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionsScalarFieldEnum | SubmissionsScalarFieldEnum[]
  }

  /**
   * youtube_channels.workspaces
   */
  export type youtube_channels$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    cursor?: workspacesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * youtube_channels without action
   */
  export type youtube_channelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the youtube_channels
     */
    select?: youtube_channelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the youtube_channels
     */
    omit?: youtube_channelsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: youtube_channelsInclude<ExtArgs> | null
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


  export const SubmissionsScalarFieldEnum: {
    id: 'id',
    workspace_id: 'workspace_id',
    uploader_id: 'uploader_id',
    youtube_channel_id: 'youtube_channel_id',
    title: 'title',
    description: 'description',
    video_url: 'video_url',
    thumbnail_url: 'thumbnail_url',
    original_video_filename: 'original_video_filename',
    original_thumbnail_filename: 'original_thumbnail_filename',
    youtube_video_id: 'youtube_video_id',
    upload_status: 'upload_status',
    status: 'status',
    submitted_at: 'submitted_at',
    approved_at: 'approved_at',
    uploaded_to_youtube_at: 'uploaded_to_youtube_at'
  };

  export type SubmissionsScalarFieldEnum = (typeof SubmissionsScalarFieldEnum)[keyof typeof SubmissionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    name: 'name',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Workspace_membersScalarFieldEnum: {
    workspace_id: 'workspace_id',
    user_id: 'user_id',
    joined_at: 'joined_at'
  };

  export type Workspace_membersScalarFieldEnum = (typeof Workspace_membersScalarFieldEnum)[keyof typeof Workspace_membersScalarFieldEnum]


  export const WorkspacesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    creator_id: 'creator_id',
    created_at: 'created_at',
    youtube_channel_id: 'youtube_channel_id'
  };

  export type WorkspacesScalarFieldEnum = (typeof WorkspacesScalarFieldEnum)[keyof typeof WorkspacesScalarFieldEnum]


  export const Youtube_channelsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    channel_id: 'channel_id',
    channel_name: 'channel_name',
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Youtube_channelsScalarFieldEnum = (typeof Youtube_channelsScalarFieldEnum)[keyof typeof Youtube_channelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type submissionsWhereInput = {
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    id?: UuidFilter<"submissions"> | string
    workspace_id?: UuidNullableFilter<"submissions"> | string | null
    uploader_id?: UuidNullableFilter<"submissions"> | string | null
    youtube_channel_id?: UuidNullableFilter<"submissions"> | string | null
    title?: StringFilter<"submissions"> | string
    description?: StringNullableFilter<"submissions"> | string | null
    video_url?: StringFilter<"submissions"> | string
    thumbnail_url?: StringFilter<"submissions"> | string
    original_video_filename?: StringNullableFilter<"submissions"> | string | null
    original_thumbnail_filename?: StringNullableFilter<"submissions"> | string | null
    youtube_video_id?: StringNullableFilter<"submissions"> | string | null
    upload_status?: StringNullableFilter<"submissions"> | string | null
    status?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    uploaded_to_youtube_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    workspaces?: XOR<WorkspacesNullableScalarRelationFilter, workspacesWhereInput> | null
    youtube_channels?: XOR<Youtube_channelsNullableScalarRelationFilter, youtube_channelsWhereInput> | null
  }

  export type submissionsOrderByWithRelationInput = {
    id?: SortOrder
    workspace_id?: SortOrderInput | SortOrder
    uploader_id?: SortOrderInput | SortOrder
    youtube_channel_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    video_url?: SortOrder
    thumbnail_url?: SortOrder
    original_video_filename?: SortOrderInput | SortOrder
    original_thumbnail_filename?: SortOrderInput | SortOrder
    youtube_video_id?: SortOrderInput | SortOrder
    upload_status?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    uploaded_to_youtube_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
    youtube_channels?: youtube_channelsOrderByWithRelationInput
  }

  export type submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: submissionsWhereInput | submissionsWhereInput[]
    OR?: submissionsWhereInput[]
    NOT?: submissionsWhereInput | submissionsWhereInput[]
    workspace_id?: UuidNullableFilter<"submissions"> | string | null
    uploader_id?: UuidNullableFilter<"submissions"> | string | null
    youtube_channel_id?: UuidNullableFilter<"submissions"> | string | null
    title?: StringFilter<"submissions"> | string
    description?: StringNullableFilter<"submissions"> | string | null
    video_url?: StringFilter<"submissions"> | string
    thumbnail_url?: StringFilter<"submissions"> | string
    original_video_filename?: StringNullableFilter<"submissions"> | string | null
    original_thumbnail_filename?: StringNullableFilter<"submissions"> | string | null
    youtube_video_id?: StringNullableFilter<"submissions"> | string | null
    upload_status?: StringNullableFilter<"submissions"> | string | null
    status?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    uploaded_to_youtube_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    workspaces?: XOR<WorkspacesNullableScalarRelationFilter, workspacesWhereInput> | null
    youtube_channels?: XOR<Youtube_channelsNullableScalarRelationFilter, youtube_channelsWhereInput> | null
  }, "id">

  export type submissionsOrderByWithAggregationInput = {
    id?: SortOrder
    workspace_id?: SortOrderInput | SortOrder
    uploader_id?: SortOrderInput | SortOrder
    youtube_channel_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    video_url?: SortOrder
    thumbnail_url?: SortOrder
    original_video_filename?: SortOrderInput | SortOrder
    original_thumbnail_filename?: SortOrderInput | SortOrder
    youtube_video_id?: SortOrderInput | SortOrder
    upload_status?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    submitted_at?: SortOrderInput | SortOrder
    approved_at?: SortOrderInput | SortOrder
    uploaded_to_youtube_at?: SortOrderInput | SortOrder
    _count?: submissionsCountOrderByAggregateInput
    _max?: submissionsMaxOrderByAggregateInput
    _min?: submissionsMinOrderByAggregateInput
  }

  export type submissionsScalarWhereWithAggregatesInput = {
    AND?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    OR?: submissionsScalarWhereWithAggregatesInput[]
    NOT?: submissionsScalarWhereWithAggregatesInput | submissionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"submissions"> | string
    workspace_id?: UuidNullableWithAggregatesFilter<"submissions"> | string | null
    uploader_id?: UuidNullableWithAggregatesFilter<"submissions"> | string | null
    youtube_channel_id?: UuidNullableWithAggregatesFilter<"submissions"> | string | null
    title?: StringWithAggregatesFilter<"submissions"> | string
    description?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    video_url?: StringWithAggregatesFilter<"submissions"> | string
    thumbnail_url?: StringWithAggregatesFilter<"submissions"> | string
    original_video_filename?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    original_thumbnail_filename?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    youtube_video_id?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    upload_status?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    status?: StringNullableWithAggregatesFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    approved_at?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
    uploaded_to_youtube_at?: DateTimeNullableWithAggregatesFilter<"submissions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    workspaces?: WorkspacesListRelationFilter
    youtube_channels?: Youtube_channelsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
    workspace_members?: workspace_membersOrderByRelationAggregateInput
    workspaces?: workspacesOrderByRelationAggregateInput
    youtube_channels?: youtube_channelsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    role?: StringNullableFilter<"users"> | string | null
    name?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    workspaces?: WorkspacesListRelationFilter
    youtube_channels?: Youtube_channelsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type workspace_membersWhereInput = {
    AND?: workspace_membersWhereInput | workspace_membersWhereInput[]
    OR?: workspace_membersWhereInput[]
    NOT?: workspace_membersWhereInput | workspace_membersWhereInput[]
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    joined_at?: DateTimeNullableFilter<"workspace_members"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }

  export type workspace_membersOrderByWithRelationInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    workspaces?: workspacesOrderByWithRelationInput
  }

  export type workspace_membersWhereUniqueInput = Prisma.AtLeast<{
    workspace_id_user_id?: workspace_membersWorkspace_idUser_idCompoundUniqueInput
    AND?: workspace_membersWhereInput | workspace_membersWhereInput[]
    OR?: workspace_membersWhereInput[]
    NOT?: workspace_membersWhereInput | workspace_membersWhereInput[]
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    joined_at?: DateTimeNullableFilter<"workspace_members"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    workspaces?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
  }, "workspace_id_user_id">

  export type workspace_membersOrderByWithAggregationInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrderInput | SortOrder
    _count?: workspace_membersCountOrderByAggregateInput
    _max?: workspace_membersMaxOrderByAggregateInput
    _min?: workspace_membersMinOrderByAggregateInput
  }

  export type workspace_membersScalarWhereWithAggregatesInput = {
    AND?: workspace_membersScalarWhereWithAggregatesInput | workspace_membersScalarWhereWithAggregatesInput[]
    OR?: workspace_membersScalarWhereWithAggregatesInput[]
    NOT?: workspace_membersScalarWhereWithAggregatesInput | workspace_membersScalarWhereWithAggregatesInput[]
    workspace_id?: UuidWithAggregatesFilter<"workspace_members"> | string
    user_id?: UuidWithAggregatesFilter<"workspace_members"> | string
    joined_at?: DateTimeNullableWithAggregatesFilter<"workspace_members"> | Date | string | null
  }

  export type workspacesWhereInput = {
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    name?: StringFilter<"workspaces"> | string
    creator_id?: UuidNullableFilter<"workspaces"> | string | null
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    youtube_channel_id?: StringNullableFilter<"workspaces"> | string | null
    submissions?: SubmissionsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    youtube_channels?: XOR<Youtube_channelsNullableScalarRelationFilter, youtube_channelsWhereInput> | null
  }

  export type workspacesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    creator_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    youtube_channel_id?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
    workspace_members?: workspace_membersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    youtube_channels?: youtube_channelsOrderByWithRelationInput
  }

  export type workspacesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    name?: StringFilter<"workspaces"> | string
    creator_id?: UuidNullableFilter<"workspaces"> | string | null
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    youtube_channel_id?: StringNullableFilter<"workspaces"> | string | null
    submissions?: SubmissionsListRelationFilter
    workspace_members?: Workspace_membersListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    youtube_channels?: XOR<Youtube_channelsNullableScalarRelationFilter, youtube_channelsWhereInput> | null
  }, "id">

  export type workspacesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    creator_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    youtube_channel_id?: SortOrderInput | SortOrder
    _count?: workspacesCountOrderByAggregateInput
    _max?: workspacesMaxOrderByAggregateInput
    _min?: workspacesMinOrderByAggregateInput
  }

  export type workspacesScalarWhereWithAggregatesInput = {
    AND?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    OR?: workspacesScalarWhereWithAggregatesInput[]
    NOT?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workspaces"> | string
    name?: StringWithAggregatesFilter<"workspaces"> | string
    creator_id?: UuidNullableWithAggregatesFilter<"workspaces"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"workspaces"> | Date | string | null
    youtube_channel_id?: StringNullableWithAggregatesFilter<"workspaces"> | string | null
  }

  export type youtube_channelsWhereInput = {
    AND?: youtube_channelsWhereInput | youtube_channelsWhereInput[]
    OR?: youtube_channelsWhereInput[]
    NOT?: youtube_channelsWhereInput | youtube_channelsWhereInput[]
    id?: UuidFilter<"youtube_channels"> | string
    user_id?: UuidFilter<"youtube_channels"> | string
    channel_id?: StringFilter<"youtube_channels"> | string
    channel_name?: StringFilter<"youtube_channels"> | string
    access_token?: StringFilter<"youtube_channels"> | string
    refresh_token?: StringFilter<"youtube_channels"> | string
    expires_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    created_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    workspaces?: WorkspacesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type youtube_channelsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    channel_name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    submissions?: submissionsOrderByRelationAggregateInput
    workspaces?: workspacesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type youtube_channelsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channel_id?: string
    user_id_channel_id?: youtube_channelsUser_idChannel_idCompoundUniqueInput
    AND?: youtube_channelsWhereInput | youtube_channelsWhereInput[]
    OR?: youtube_channelsWhereInput[]
    NOT?: youtube_channelsWhereInput | youtube_channelsWhereInput[]
    user_id?: UuidFilter<"youtube_channels"> | string
    channel_name?: StringFilter<"youtube_channels"> | string
    access_token?: StringFilter<"youtube_channels"> | string
    refresh_token?: StringFilter<"youtube_channels"> | string
    expires_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    created_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    submissions?: SubmissionsListRelationFilter
    workspaces?: WorkspacesListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "channel_id" | "user_id_channel_id">

  export type youtube_channelsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    channel_name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: youtube_channelsCountOrderByAggregateInput
    _max?: youtube_channelsMaxOrderByAggregateInput
    _min?: youtube_channelsMinOrderByAggregateInput
  }

  export type youtube_channelsScalarWhereWithAggregatesInput = {
    AND?: youtube_channelsScalarWhereWithAggregatesInput | youtube_channelsScalarWhereWithAggregatesInput[]
    OR?: youtube_channelsScalarWhereWithAggregatesInput[]
    NOT?: youtube_channelsScalarWhereWithAggregatesInput | youtube_channelsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"youtube_channels"> | string
    user_id?: UuidWithAggregatesFilter<"youtube_channels"> | string
    channel_id?: StringWithAggregatesFilter<"youtube_channels"> | string
    channel_name?: StringWithAggregatesFilter<"youtube_channels"> | string
    access_token?: StringWithAggregatesFilter<"youtube_channels"> | string
    refresh_token?: StringWithAggregatesFilter<"youtube_channels"> | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"youtube_channels"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"youtube_channels"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"youtube_channels"> | Date | string | null
  }

  export type submissionsCreateInput = {
    id?: string
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
    users?: usersCreateNestedOneWithoutSubmissionsInput
    workspaces?: workspacesCreateNestedOneWithoutSubmissionsInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateInput = {
    id?: string
    workspace_id?: string | null
    uploader_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type submissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutSubmissionsNestedInput
    workspaces?: workspacesUpdateOneWithoutSubmissionsNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateManyInput = {
    id?: string
    workspace_id?: string | null
    uploader_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type submissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersCreateInput = {
    joined_at?: Date | string | null
    users: usersCreateNestedOneWithoutWorkspace_membersInput
    workspaces: workspacesCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateInput = {
    workspace_id: string
    user_id: string
    joined_at?: Date | string | null
  }

  export type workspace_membersUpdateInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWorkspace_membersNestedInput
    workspaces?: workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersCreateManyInput = {
    workspace_id: string
    user_id: string
    joined_at?: Date | string | null
  }

  export type workspace_membersUpdateManyMutationInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersUncheckedUpdateManyInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users?: usersCreateNestedOneWithoutWorkspacesInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
    youtube_channel_id?: string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneWithoutWorkspacesNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesCreateManyInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
    youtube_channel_id?: string | null
  }

  export type workspacesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type youtube_channelsCreateInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutYoutube_channelsInput
    workspaces?: workspacesCreateNestedManyWithoutYoutube_channelsInput
    users: usersCreateNestedOneWithoutYoutube_channelsInput
  }

  export type youtube_channelsUncheckedCreateInput = {
    id?: string
    user_id: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutYoutube_channelsInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutYoutube_channelsInput
  }

  export type youtube_channelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutYoutube_channelsNestedInput
    workspaces?: workspacesUpdateManyWithoutYoutube_channelsNestedInput
    users?: usersUpdateOneRequiredWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutYoutube_channelsNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsCreateManyInput = {
    id?: string
    user_id: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type youtube_channelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type youtube_channelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type WorkspacesNullableScalarRelationFilter = {
    is?: workspacesWhereInput | null
    isNot?: workspacesWhereInput | null
  }

  export type Youtube_channelsNullableScalarRelationFilter = {
    is?: youtube_channelsWhereInput | null
    isNot?: youtube_channelsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type submissionsCountOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    uploader_id?: SortOrder
    youtube_channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    thumbnail_url?: SortOrder
    original_video_filename?: SortOrder
    original_thumbnail_filename?: SortOrder
    youtube_video_id?: SortOrder
    upload_status?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
    approved_at?: SortOrder
    uploaded_to_youtube_at?: SortOrder
  }

  export type submissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    uploader_id?: SortOrder
    youtube_channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    thumbnail_url?: SortOrder
    original_video_filename?: SortOrder
    original_thumbnail_filename?: SortOrder
    youtube_video_id?: SortOrder
    upload_status?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
    approved_at?: SortOrder
    uploaded_to_youtube_at?: SortOrder
  }

  export type submissionsMinOrderByAggregateInput = {
    id?: SortOrder
    workspace_id?: SortOrder
    uploader_id?: SortOrder
    youtube_channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    video_url?: SortOrder
    thumbnail_url?: SortOrder
    original_video_filename?: SortOrder
    original_thumbnail_filename?: SortOrder
    youtube_video_id?: SortOrder
    upload_status?: SortOrder
    status?: SortOrder
    submitted_at?: SortOrder
    approved_at?: SortOrder
    uploaded_to_youtube_at?: SortOrder
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type SubmissionsListRelationFilter = {
    every?: submissionsWhereInput
    some?: submissionsWhereInput
    none?: submissionsWhereInput
  }

  export type Workspace_membersListRelationFilter = {
    every?: workspace_membersWhereInput
    some?: workspace_membersWhereInput
    none?: workspace_membersWhereInput
  }

  export type WorkspacesListRelationFilter = {
    every?: workspacesWhereInput
    some?: workspacesWhereInput
    none?: workspacesWhereInput
  }

  export type Youtube_channelsListRelationFilter = {
    every?: youtube_channelsWhereInput
    some?: youtube_channelsWhereInput
    none?: youtube_channelsWhereInput
  }

  export type submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspace_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type youtube_channelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type WorkspacesScalarRelationFilter = {
    is?: workspacesWhereInput
    isNot?: workspacesWhereInput
  }

  export type workspace_membersWorkspace_idUser_idCompoundUniqueInput = {
    workspace_id: string
    user_id: string
  }

  export type workspace_membersCountOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type workspace_membersMaxOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type workspace_membersMinOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type workspacesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    youtube_channel_id?: SortOrder
  }

  export type workspacesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    youtube_channel_id?: SortOrder
  }

  export type workspacesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    creator_id?: SortOrder
    created_at?: SortOrder
    youtube_channel_id?: SortOrder
  }

  export type youtube_channelsUser_idChannel_idCompoundUniqueInput = {
    user_id: string
    channel_id: string
  }

  export type youtube_channelsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    channel_name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type youtube_channelsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    channel_name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type youtube_channelsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    channel_name?: SortOrder
    access_token?: SortOrder
    refresh_token?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubmissionsInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<workspacesCreateWithoutSubmissionsInput, workspacesUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutSubmissionsInput
    connect?: workspacesWhereUniqueInput
  }

  export type youtube_channelsCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<youtube_channelsCreateWithoutSubmissionsInput, youtube_channelsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutSubmissionsInput
    connect?: youtube_channelsWhereUniqueInput
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

  export type usersUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSubmissionsInput
    upsert?: usersUpsertWithoutSubmissionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSubmissionsInput, usersUpdateWithoutSubmissionsInput>, usersUncheckedUpdateWithoutSubmissionsInput>
  }

  export type workspacesUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<workspacesCreateWithoutSubmissionsInput, workspacesUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutSubmissionsInput
    upsert?: workspacesUpsertWithoutSubmissionsInput
    disconnect?: workspacesWhereInput | boolean
    delete?: workspacesWhereInput | boolean
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutSubmissionsInput, workspacesUpdateWithoutSubmissionsInput>, workspacesUncheckedUpdateWithoutSubmissionsInput>
  }

  export type youtube_channelsUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<youtube_channelsCreateWithoutSubmissionsInput, youtube_channelsUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutSubmissionsInput
    upsert?: youtube_channelsUpsertWithoutSubmissionsInput
    disconnect?: youtube_channelsWhereInput | boolean
    delete?: youtube_channelsWhereInput | boolean
    connect?: youtube_channelsWhereUniqueInput
    update?: XOR<XOR<youtube_channelsUpdateToOneWithWhereWithoutSubmissionsInput, youtube_channelsUpdateWithoutSubmissionsInput>, youtube_channelsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type submissionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspace_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type workspacesCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type youtube_channelsCreateNestedManyWithoutUsersInput = {
    create?: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput> | youtube_channelsCreateWithoutUsersInput[] | youtube_channelsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutUsersInput | youtube_channelsCreateOrConnectWithoutUsersInput[]
    createMany?: youtube_channelsCreateManyUsersInputEnvelope
    connect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
  }

  export type submissionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspace_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type workspacesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type youtube_channelsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput> | youtube_channelsCreateWithoutUsersInput[] | youtube_channelsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutUsersInput | youtube_channelsCreateOrConnectWithoutUsersInput[]
    createMany?: youtube_channelsCreateManyUsersInputEnvelope
    connect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
  }

  export type submissionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutUsersInput | submissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutUsersInput | submissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutUsersInput | submissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspace_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutUsersInput | workspace_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutUsersInput | workspace_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutUsersInput | workspace_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type workspacesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type youtube_channelsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput> | youtube_channelsCreateWithoutUsersInput[] | youtube_channelsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutUsersInput | youtube_channelsCreateOrConnectWithoutUsersInput[]
    upsert?: youtube_channelsUpsertWithWhereUniqueWithoutUsersInput | youtube_channelsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: youtube_channelsCreateManyUsersInputEnvelope
    set?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    disconnect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    delete?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    connect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    update?: youtube_channelsUpdateWithWhereUniqueWithoutUsersInput | youtube_channelsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: youtube_channelsUpdateManyWithWhereWithoutUsersInput | youtube_channelsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: youtube_channelsScalarWhereInput | youtube_channelsScalarWhereInput[]
  }

  export type submissionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput> | submissionsCreateWithoutUsersInput[] | submissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutUsersInput | submissionsCreateOrConnectWithoutUsersInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutUsersInput | submissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: submissionsCreateManyUsersInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutUsersInput | submissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutUsersInput | submissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspace_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput> | workspace_membersCreateWithoutUsersInput[] | workspace_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutUsersInput | workspace_membersCreateOrConnectWithoutUsersInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutUsersInput | workspace_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspace_membersCreateManyUsersInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutUsersInput | workspace_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutUsersInput | workspace_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type workspacesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: workspacesCreateManyUsersInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type youtube_channelsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput> | youtube_channelsCreateWithoutUsersInput[] | youtube_channelsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutUsersInput | youtube_channelsCreateOrConnectWithoutUsersInput[]
    upsert?: youtube_channelsUpsertWithWhereUniqueWithoutUsersInput | youtube_channelsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: youtube_channelsCreateManyUsersInputEnvelope
    set?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    disconnect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    delete?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    connect?: youtube_channelsWhereUniqueInput | youtube_channelsWhereUniqueInput[]
    update?: youtube_channelsUpdateWithWhereUniqueWithoutUsersInput | youtube_channelsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: youtube_channelsUpdateManyWithWhereWithoutUsersInput | youtube_channelsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: youtube_channelsScalarWhereInput | youtube_channelsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutWorkspace_membersInput = {
    create?: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_membersInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutWorkspace_membersInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_membersInput
    connect?: workspacesWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutWorkspace_membersNestedInput = {
    create?: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_membersInput
    upsert?: usersUpsertWithoutWorkspace_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkspace_membersInput, usersUpdateWithoutWorkspace_membersInput>, usersUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_membersInput
    upsert?: workspacesUpsertWithoutWorkspace_membersInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutWorkspace_membersInput, workspacesUpdateWithoutWorkspace_membersInput>, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type submissionsCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput> | submissionsCreateWithoutWorkspacesInput[] | submissionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutWorkspacesInput | submissionsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: submissionsCreateManyWorkspacesInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspace_membersCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput
    connect?: usersWhereUniqueInput
  }

  export type youtube_channelsCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<youtube_channelsCreateWithoutWorkspacesInput, youtube_channelsUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutWorkspacesInput
    connect?: youtube_channelsWhereUniqueInput
  }

  export type submissionsUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput> | submissionsCreateWithoutWorkspacesInput[] | submissionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutWorkspacesInput | submissionsCreateOrConnectWithoutWorkspacesInput[]
    createMany?: submissionsCreateManyWorkspacesInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
  }

  export type submissionsUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput> | submissionsCreateWithoutWorkspacesInput[] | submissionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutWorkspacesInput | submissionsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutWorkspacesInput | submissionsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: submissionsCreateManyWorkspacesInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutWorkspacesInput | submissionsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutWorkspacesInput | submissionsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspace_membersUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutWorkspacesInput | workspace_membersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type usersUpdateOneWithoutWorkspacesNestedInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput
    upsert?: usersUpsertWithoutWorkspacesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkspacesInput, usersUpdateWithoutWorkspacesInput>, usersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type youtube_channelsUpdateOneWithoutWorkspacesNestedInput = {
    create?: XOR<youtube_channelsCreateWithoutWorkspacesInput, youtube_channelsUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: youtube_channelsCreateOrConnectWithoutWorkspacesInput
    upsert?: youtube_channelsUpsertWithoutWorkspacesInput
    disconnect?: youtube_channelsWhereInput | boolean
    delete?: youtube_channelsWhereInput | boolean
    connect?: youtube_channelsWhereUniqueInput
    update?: XOR<XOR<youtube_channelsUpdateToOneWithWhereWithoutWorkspacesInput, youtube_channelsUpdateWithoutWorkspacesInput>, youtube_channelsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type submissionsUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput> | submissionsCreateWithoutWorkspacesInput[] | submissionsUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutWorkspacesInput | submissionsCreateOrConnectWithoutWorkspacesInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutWorkspacesInput | submissionsUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: submissionsCreateManyWorkspacesInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutWorkspacesInput | submissionsUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutWorkspacesInput | submissionsUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput> | workspace_membersCreateWithoutWorkspacesInput[] | workspace_membersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: workspace_membersCreateOrConnectWithoutWorkspacesInput | workspace_membersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    createMany?: workspace_membersCreateManyWorkspacesInputEnvelope
    set?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    disconnect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    delete?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    connect?: workspace_membersWhereUniqueInput | workspace_membersWhereUniqueInput[]
    update?: workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput | workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: workspace_membersUpdateManyWithWhereWithoutWorkspacesInput | workspace_membersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
  }

  export type submissionsCreateNestedManyWithoutYoutube_channelsInput = {
    create?: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput> | submissionsCreateWithoutYoutube_channelsInput[] | submissionsUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutYoutube_channelsInput | submissionsCreateOrConnectWithoutYoutube_channelsInput[]
    createMany?: submissionsCreateManyYoutube_channelsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspacesCreateNestedManyWithoutYoutube_channelsInput = {
    create?: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput> | workspacesCreateWithoutYoutube_channelsInput[] | workspacesUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutYoutube_channelsInput | workspacesCreateOrConnectWithoutYoutube_channelsInput[]
    createMany?: workspacesCreateManyYoutube_channelsInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutYoutube_channelsInput = {
    create?: XOR<usersCreateWithoutYoutube_channelsInput, usersUncheckedCreateWithoutYoutube_channelsInput>
    connectOrCreate?: usersCreateOrConnectWithoutYoutube_channelsInput
    connect?: usersWhereUniqueInput
  }

  export type submissionsUncheckedCreateNestedManyWithoutYoutube_channelsInput = {
    create?: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput> | submissionsCreateWithoutYoutube_channelsInput[] | submissionsUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutYoutube_channelsInput | submissionsCreateOrConnectWithoutYoutube_channelsInput[]
    createMany?: submissionsCreateManyYoutube_channelsInputEnvelope
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
  }

  export type workspacesUncheckedCreateNestedManyWithoutYoutube_channelsInput = {
    create?: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput> | workspacesCreateWithoutYoutube_channelsInput[] | workspacesUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutYoutube_channelsInput | workspacesCreateOrConnectWithoutYoutube_channelsInput[]
    createMany?: workspacesCreateManyYoutube_channelsInputEnvelope
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type submissionsUpdateManyWithoutYoutube_channelsNestedInput = {
    create?: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput> | submissionsCreateWithoutYoutube_channelsInput[] | submissionsUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutYoutube_channelsInput | submissionsCreateOrConnectWithoutYoutube_channelsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutYoutube_channelsInput | submissionsUpsertWithWhereUniqueWithoutYoutube_channelsInput[]
    createMany?: submissionsCreateManyYoutube_channelsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutYoutube_channelsInput | submissionsUpdateWithWhereUniqueWithoutYoutube_channelsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutYoutube_channelsInput | submissionsUpdateManyWithWhereWithoutYoutube_channelsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspacesUpdateManyWithoutYoutube_channelsNestedInput = {
    create?: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput> | workspacesCreateWithoutYoutube_channelsInput[] | workspacesUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutYoutube_channelsInput | workspacesCreateOrConnectWithoutYoutube_channelsInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutYoutube_channelsInput | workspacesUpsertWithWhereUniqueWithoutYoutube_channelsInput[]
    createMany?: workspacesCreateManyYoutube_channelsInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutYoutube_channelsInput | workspacesUpdateWithWhereUniqueWithoutYoutube_channelsInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutYoutube_channelsInput | workspacesUpdateManyWithWhereWithoutYoutube_channelsInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutYoutube_channelsNestedInput = {
    create?: XOR<usersCreateWithoutYoutube_channelsInput, usersUncheckedCreateWithoutYoutube_channelsInput>
    connectOrCreate?: usersCreateOrConnectWithoutYoutube_channelsInput
    upsert?: usersUpsertWithoutYoutube_channelsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutYoutube_channelsInput, usersUpdateWithoutYoutube_channelsInput>, usersUncheckedUpdateWithoutYoutube_channelsInput>
  }

  export type submissionsUncheckedUpdateManyWithoutYoutube_channelsNestedInput = {
    create?: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput> | submissionsCreateWithoutYoutube_channelsInput[] | submissionsUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: submissionsCreateOrConnectWithoutYoutube_channelsInput | submissionsCreateOrConnectWithoutYoutube_channelsInput[]
    upsert?: submissionsUpsertWithWhereUniqueWithoutYoutube_channelsInput | submissionsUpsertWithWhereUniqueWithoutYoutube_channelsInput[]
    createMany?: submissionsCreateManyYoutube_channelsInputEnvelope
    set?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    disconnect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    delete?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    connect?: submissionsWhereUniqueInput | submissionsWhereUniqueInput[]
    update?: submissionsUpdateWithWhereUniqueWithoutYoutube_channelsInput | submissionsUpdateWithWhereUniqueWithoutYoutube_channelsInput[]
    updateMany?: submissionsUpdateManyWithWhereWithoutYoutube_channelsInput | submissionsUpdateManyWithWhereWithoutYoutube_channelsInput[]
    deleteMany?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
  }

  export type workspacesUncheckedUpdateManyWithoutYoutube_channelsNestedInput = {
    create?: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput> | workspacesCreateWithoutYoutube_channelsInput[] | workspacesUncheckedCreateWithoutYoutube_channelsInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutYoutube_channelsInput | workspacesCreateOrConnectWithoutYoutube_channelsInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutYoutube_channelsInput | workspacesUpsertWithWhereUniqueWithoutYoutube_channelsInput[]
    createMany?: workspacesCreateManyYoutube_channelsInputEnvelope
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutYoutube_channelsInput | workspacesUpdateWithWhereUniqueWithoutYoutube_channelsInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutYoutube_channelsInput | workspacesUpdateManyWithWhereWithoutYoutube_channelsInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type usersCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSubmissionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
  }

  export type workspacesCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users?: usersCreateNestedOneWithoutWorkspacesInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
    youtube_channel_id?: string | null
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutSubmissionsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutSubmissionsInput, workspacesUncheckedCreateWithoutSubmissionsInput>
  }

  export type youtube_channelsCreateWithoutSubmissionsInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workspaces?: workspacesCreateNestedManyWithoutYoutube_channelsInput
    users: usersCreateNestedOneWithoutYoutube_channelsInput
  }

  export type youtube_channelsUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    user_id: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    workspaces?: workspacesUncheckedCreateNestedManyWithoutYoutube_channelsInput
  }

  export type youtube_channelsCreateOrConnectWithoutSubmissionsInput = {
    where: youtube_channelsWhereUniqueInput
    create: XOR<youtube_channelsCreateWithoutSubmissionsInput, youtube_channelsUncheckedCreateWithoutSubmissionsInput>
  }

  export type usersUpsertWithoutSubmissionsInput = {
    update: XOR<usersUpdateWithoutSubmissionsInput, usersUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<usersCreateWithoutSubmissionsInput, usersUncheckedCreateWithoutSubmissionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSubmissionsInput, usersUncheckedUpdateWithoutSubmissionsInput>
  }

  export type usersUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutSubmissionsInput = {
    update: XOR<workspacesUpdateWithoutSubmissionsInput, workspacesUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<workspacesCreateWithoutSubmissionsInput, workspacesUncheckedCreateWithoutSubmissionsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutSubmissionsInput, workspacesUncheckedUpdateWithoutSubmissionsInput>
  }

  export type workspacesUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneWithoutWorkspacesNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type youtube_channelsUpsertWithoutSubmissionsInput = {
    update: XOR<youtube_channelsUpdateWithoutSubmissionsInput, youtube_channelsUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<youtube_channelsCreateWithoutSubmissionsInput, youtube_channelsUncheckedCreateWithoutSubmissionsInput>
    where?: youtube_channelsWhereInput
  }

  export type youtube_channelsUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: youtube_channelsWhereInput
    data: XOR<youtube_channelsUpdateWithoutSubmissionsInput, youtube_channelsUncheckedUpdateWithoutSubmissionsInput>
  }

  export type youtube_channelsUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: workspacesUpdateManyWithoutYoutube_channelsNestedInput
    users?: usersUpdateOneRequiredWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: workspacesUncheckedUpdateManyWithoutYoutube_channelsNestedInput
  }

  export type submissionsCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
    workspaces?: workspacesCreateNestedOneWithoutSubmissionsInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutUsersInput = {
    id?: string
    workspace_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type submissionsCreateOrConnectWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput>
  }

  export type submissionsCreateManyUsersInputEnvelope = {
    data: submissionsCreateManyUsersInput | submissionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workspace_membersCreateWithoutUsersInput = {
    joined_at?: Date | string | null
    workspaces: workspacesCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateWithoutUsersInput = {
    workspace_id: string
    joined_at?: Date | string | null
  }

  export type workspace_membersCreateOrConnectWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    create: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput>
  }

  export type workspace_membersCreateManyUsersInputEnvelope = {
    data: workspace_membersCreateManyUsersInput | workspace_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type workspacesCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    youtube_channel_id?: string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesCreateManyUsersInputEnvelope = {
    data: workspacesCreateManyUsersInput | workspacesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type youtube_channelsCreateWithoutUsersInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutYoutube_channelsInput
    workspaces?: workspacesCreateNestedManyWithoutYoutube_channelsInput
  }

  export type youtube_channelsUncheckedCreateWithoutUsersInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutYoutube_channelsInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutYoutube_channelsInput
  }

  export type youtube_channelsCreateOrConnectWithoutUsersInput = {
    where: youtube_channelsWhereUniqueInput
    create: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput>
  }

  export type youtube_channelsCreateManyUsersInputEnvelope = {
    data: youtube_channelsCreateManyUsersInput | youtube_channelsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type submissionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutUsersInput, submissionsUncheckedUpdateWithoutUsersInput>
    create: XOR<submissionsCreateWithoutUsersInput, submissionsUncheckedCreateWithoutUsersInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutUsersInput, submissionsUncheckedUpdateWithoutUsersInput>
  }

  export type submissionsUpdateManyWithWhereWithoutUsersInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type submissionsScalarWhereInput = {
    AND?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    OR?: submissionsScalarWhereInput[]
    NOT?: submissionsScalarWhereInput | submissionsScalarWhereInput[]
    id?: UuidFilter<"submissions"> | string
    workspace_id?: UuidNullableFilter<"submissions"> | string | null
    uploader_id?: UuidNullableFilter<"submissions"> | string | null
    youtube_channel_id?: UuidNullableFilter<"submissions"> | string | null
    title?: StringFilter<"submissions"> | string
    description?: StringNullableFilter<"submissions"> | string | null
    video_url?: StringFilter<"submissions"> | string
    thumbnail_url?: StringFilter<"submissions"> | string
    original_video_filename?: StringNullableFilter<"submissions"> | string | null
    original_thumbnail_filename?: StringNullableFilter<"submissions"> | string | null
    youtube_video_id?: StringNullableFilter<"submissions"> | string | null
    upload_status?: StringNullableFilter<"submissions"> | string | null
    status?: StringNullableFilter<"submissions"> | string | null
    submitted_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    approved_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
    uploaded_to_youtube_at?: DateTimeNullableFilter<"submissions"> | Date | string | null
  }

  export type workspace_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    update: XOR<workspace_membersUpdateWithoutUsersInput, workspace_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<workspace_membersCreateWithoutUsersInput, workspace_membersUncheckedCreateWithoutUsersInput>
  }

  export type workspace_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: workspace_membersWhereUniqueInput
    data: XOR<workspace_membersUpdateWithoutUsersInput, workspace_membersUncheckedUpdateWithoutUsersInput>
  }

  export type workspace_membersUpdateManyWithWhereWithoutUsersInput = {
    where: workspace_membersScalarWhereInput
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type workspace_membersScalarWhereInput = {
    AND?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
    OR?: workspace_membersScalarWhereInput[]
    NOT?: workspace_membersScalarWhereInput | workspace_membersScalarWhereInput[]
    workspace_id?: UuidFilter<"workspace_members"> | string
    user_id?: UuidFilter<"workspace_members"> | string
    joined_at?: DateTimeNullableFilter<"workspace_members"> | Date | string | null
  }

  export type workspacesUpsertWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    update: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesUpdateWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    data: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
  }

  export type workspacesUpdateManyWithWhereWithoutUsersInput = {
    where: workspacesScalarWhereInput
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyWithoutUsersInput>
  }

  export type workspacesScalarWhereInput = {
    AND?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    OR?: workspacesScalarWhereInput[]
    NOT?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    name?: StringFilter<"workspaces"> | string
    creator_id?: UuidNullableFilter<"workspaces"> | string | null
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    youtube_channel_id?: StringNullableFilter<"workspaces"> | string | null
  }

  export type youtube_channelsUpsertWithWhereUniqueWithoutUsersInput = {
    where: youtube_channelsWhereUniqueInput
    update: XOR<youtube_channelsUpdateWithoutUsersInput, youtube_channelsUncheckedUpdateWithoutUsersInput>
    create: XOR<youtube_channelsCreateWithoutUsersInput, youtube_channelsUncheckedCreateWithoutUsersInput>
  }

  export type youtube_channelsUpdateWithWhereUniqueWithoutUsersInput = {
    where: youtube_channelsWhereUniqueInput
    data: XOR<youtube_channelsUpdateWithoutUsersInput, youtube_channelsUncheckedUpdateWithoutUsersInput>
  }

  export type youtube_channelsUpdateManyWithWhereWithoutUsersInput = {
    where: youtube_channelsScalarWhereInput
    data: XOR<youtube_channelsUpdateManyMutationInput, youtube_channelsUncheckedUpdateManyWithoutUsersInput>
  }

  export type youtube_channelsScalarWhereInput = {
    AND?: youtube_channelsScalarWhereInput | youtube_channelsScalarWhereInput[]
    OR?: youtube_channelsScalarWhereInput[]
    NOT?: youtube_channelsScalarWhereInput | youtube_channelsScalarWhereInput[]
    id?: UuidFilter<"youtube_channels"> | string
    user_id?: UuidFilter<"youtube_channels"> | string
    channel_id?: StringFilter<"youtube_channels"> | string
    channel_name?: StringFilter<"youtube_channels"> | string
    access_token?: StringFilter<"youtube_channels"> | string
    refresh_token?: StringFilter<"youtube_channels"> | string
    expires_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    created_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"youtube_channels"> | Date | string | null
  }

  export type usersCreateWithoutWorkspace_membersInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkspace_membersInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkspace_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
  }

  export type workspacesCreateWithoutWorkspace_membersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutWorkspacesInput
    users?: usersCreateNestedOneWithoutWorkspacesInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutWorkspace_membersInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
    youtube_channel_id?: string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutWorkspace_membersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
  }

  export type usersUpsertWithoutWorkspace_membersInput = {
    update: XOR<usersUpdateWithoutWorkspace_membersInput, usersUncheckedUpdateWithoutWorkspace_membersInput>
    create: XOR<usersCreateWithoutWorkspace_membersInput, usersUncheckedCreateWithoutWorkspace_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkspace_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkspace_membersInput, usersUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type usersUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type workspacesUpsertWithoutWorkspace_membersInput = {
    update: XOR<workspacesUpdateWithoutWorkspace_membersInput, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
    create: XOR<workspacesCreateWithoutWorkspace_membersInput, workspacesUncheckedCreateWithoutWorkspace_membersInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutWorkspace_membersInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutWorkspace_membersInput, workspacesUncheckedUpdateWithoutWorkspace_membersInput>
  }

  export type workspacesUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneWithoutWorkspacesNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutWorkspace_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type submissionsCreateWithoutWorkspacesInput = {
    id?: string
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
    users?: usersCreateNestedOneWithoutSubmissionsInput
    youtube_channels?: youtube_channelsCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    uploader_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type submissionsCreateOrConnectWithoutWorkspacesInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput>
  }

  export type submissionsCreateManyWorkspacesInputEnvelope = {
    data: submissionsCreateManyWorkspacesInput | submissionsCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type workspace_membersCreateWithoutWorkspacesInput = {
    joined_at?: Date | string | null
    users: usersCreateNestedOneWithoutWorkspace_membersInput
  }

  export type workspace_membersUncheckedCreateWithoutWorkspacesInput = {
    user_id: string
    joined_at?: Date | string | null
  }

  export type workspace_membersCreateOrConnectWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    create: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput>
  }

  export type workspace_membersCreateManyWorkspacesInputEnvelope = {
    data: workspace_membersCreateManyWorkspacesInput | workspace_membersCreateManyWorkspacesInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    youtube_channels?: youtube_channelsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkspacesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
  }

  export type youtube_channelsCreateWithoutWorkspacesInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutYoutube_channelsInput
    users: usersCreateNestedOneWithoutYoutube_channelsInput
  }

  export type youtube_channelsUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    user_id: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutYoutube_channelsInput
  }

  export type youtube_channelsCreateOrConnectWithoutWorkspacesInput = {
    where: youtube_channelsWhereUniqueInput
    create: XOR<youtube_channelsCreateWithoutWorkspacesInput, youtube_channelsUncheckedCreateWithoutWorkspacesInput>
  }

  export type submissionsUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutWorkspacesInput, submissionsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<submissionsCreateWithoutWorkspacesInput, submissionsUncheckedCreateWithoutWorkspacesInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutWorkspacesInput, submissionsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type submissionsUpdateManyWithWhereWithoutWorkspacesInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type workspace_membersUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    update: XOR<workspace_membersUpdateWithoutWorkspacesInput, workspace_membersUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<workspace_membersCreateWithoutWorkspacesInput, workspace_membersUncheckedCreateWithoutWorkspacesInput>
  }

  export type workspace_membersUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: workspace_membersWhereUniqueInput
    data: XOR<workspace_membersUpdateWithoutWorkspacesInput, workspace_membersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type workspace_membersUpdateManyWithWhereWithoutWorkspacesInput = {
    where: workspace_membersScalarWhereInput
    data: XOR<workspace_membersUpdateManyMutationInput, workspace_membersUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type usersUpsertWithoutWorkspacesInput = {
    update: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type usersUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    youtube_channels?: youtube_channelsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type youtube_channelsUpsertWithoutWorkspacesInput = {
    update: XOR<youtube_channelsUpdateWithoutWorkspacesInput, youtube_channelsUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<youtube_channelsCreateWithoutWorkspacesInput, youtube_channelsUncheckedCreateWithoutWorkspacesInput>
    where?: youtube_channelsWhereInput
  }

  export type youtube_channelsUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: youtube_channelsWhereInput
    data: XOR<youtube_channelsUpdateWithoutWorkspacesInput, youtube_channelsUncheckedUpdateWithoutWorkspacesInput>
  }

  export type youtube_channelsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutYoutube_channelsNestedInput
    users?: usersUpdateOneRequiredWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutYoutube_channelsNestedInput
  }

  export type submissionsCreateWithoutYoutube_channelsInput = {
    id?: string
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
    users?: usersCreateNestedOneWithoutSubmissionsInput
    workspaces?: workspacesCreateNestedOneWithoutSubmissionsInput
  }

  export type submissionsUncheckedCreateWithoutYoutube_channelsInput = {
    id?: string
    workspace_id?: string | null
    uploader_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type submissionsCreateOrConnectWithoutYoutube_channelsInput = {
    where: submissionsWhereUniqueInput
    create: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput>
  }

  export type submissionsCreateManyYoutube_channelsInputEnvelope = {
    data: submissionsCreateManyYoutube_channelsInput | submissionsCreateManyYoutube_channelsInput[]
    skipDuplicates?: boolean
  }

  export type workspacesCreateWithoutYoutube_channelsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersCreateNestedManyWithoutWorkspacesInput
    users?: usersCreateNestedOneWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutYoutube_channelsInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutYoutube_channelsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput>
  }

  export type workspacesCreateManyYoutube_channelsInputEnvelope = {
    data: workspacesCreateManyYoutube_channelsInput | workspacesCreateManyYoutube_channelsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutYoutube_channelsInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersCreateNestedManyWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutYoutube_channelsInput = {
    id?: string
    email: string
    role?: string | null
    name?: string | null
    created_at?: Date | string | null
    submissions?: submissionsUncheckedCreateNestedManyWithoutUsersInput
    workspace_members?: workspace_membersUncheckedCreateNestedManyWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutYoutube_channelsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutYoutube_channelsInput, usersUncheckedCreateWithoutYoutube_channelsInput>
  }

  export type submissionsUpsertWithWhereUniqueWithoutYoutube_channelsInput = {
    where: submissionsWhereUniqueInput
    update: XOR<submissionsUpdateWithoutYoutube_channelsInput, submissionsUncheckedUpdateWithoutYoutube_channelsInput>
    create: XOR<submissionsCreateWithoutYoutube_channelsInput, submissionsUncheckedCreateWithoutYoutube_channelsInput>
  }

  export type submissionsUpdateWithWhereUniqueWithoutYoutube_channelsInput = {
    where: submissionsWhereUniqueInput
    data: XOR<submissionsUpdateWithoutYoutube_channelsInput, submissionsUncheckedUpdateWithoutYoutube_channelsInput>
  }

  export type submissionsUpdateManyWithWhereWithoutYoutube_channelsInput = {
    where: submissionsScalarWhereInput
    data: XOR<submissionsUpdateManyMutationInput, submissionsUncheckedUpdateManyWithoutYoutube_channelsInput>
  }

  export type workspacesUpsertWithWhereUniqueWithoutYoutube_channelsInput = {
    where: workspacesWhereUniqueInput
    update: XOR<workspacesUpdateWithoutYoutube_channelsInput, workspacesUncheckedUpdateWithoutYoutube_channelsInput>
    create: XOR<workspacesCreateWithoutYoutube_channelsInput, workspacesUncheckedCreateWithoutYoutube_channelsInput>
  }

  export type workspacesUpdateWithWhereUniqueWithoutYoutube_channelsInput = {
    where: workspacesWhereUniqueInput
    data: XOR<workspacesUpdateWithoutYoutube_channelsInput, workspacesUncheckedUpdateWithoutYoutube_channelsInput>
  }

  export type workspacesUpdateManyWithWhereWithoutYoutube_channelsInput = {
    where: workspacesScalarWhereInput
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyWithoutYoutube_channelsInput>
  }

  export type usersUpsertWithoutYoutube_channelsInput = {
    update: XOR<usersUpdateWithoutYoutube_channelsInput, usersUncheckedUpdateWithoutYoutube_channelsInput>
    create: XOR<usersCreateWithoutYoutube_channelsInput, usersUncheckedCreateWithoutYoutube_channelsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutYoutube_channelsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutYoutube_channelsInput, usersUncheckedUpdateWithoutYoutube_channelsInput>
  }

  export type usersUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutUsersNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type submissionsCreateManyUsersInput = {
    id?: string
    workspace_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type workspace_membersCreateManyUsersInput = {
    workspace_id: string
    joined_at?: Date | string | null
  }

  export type workspacesCreateManyUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    youtube_channel_id?: string | null
  }

  export type youtube_channelsCreateManyUsersInput = {
    id?: string
    channel_id: string
    channel_name: string
    access_token: string
    refresh_token: string
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type submissionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: workspacesUpdateOneWithoutSubmissionsNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersUpdateWithoutUsersInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: workspacesUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateWithoutUsersInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersUncheckedUpdateManyWithoutUsersInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type youtube_channelsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutYoutube_channelsNestedInput
    workspaces?: workspacesUpdateManyWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutYoutube_channelsNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutYoutube_channelsNestedInput
  }

  export type youtube_channelsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel_id?: StringFieldUpdateOperationsInput | string
    channel_name?: StringFieldUpdateOperationsInput | string
    access_token?: StringFieldUpdateOperationsInput | string
    refresh_token?: StringFieldUpdateOperationsInput | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateManyWorkspacesInput = {
    id?: string
    uploader_id?: string | null
    youtube_channel_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type workspace_membersCreateManyWorkspacesInput = {
    user_id: string
    joined_at?: Date | string | null
  }

  export type submissionsUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutSubmissionsNestedInput
    youtube_channels?: youtube_channelsUpdateOneWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_channel_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersUpdateWithoutWorkspacesInput = {
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWorkspace_membersNestedInput
  }

  export type workspace_membersUncheckedUpdateWithoutWorkspacesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_membersUncheckedUpdateManyWithoutWorkspacesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    joined_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsCreateManyYoutube_channelsInput = {
    id?: string
    workspace_id?: string | null
    uploader_id?: string | null
    title: string
    description?: string | null
    video_url: string
    thumbnail_url: string
    original_video_filename?: string | null
    original_thumbnail_filename?: string | null
    youtube_video_id?: string | null
    upload_status?: string | null
    status?: string | null
    submitted_at?: Date | string | null
    approved_at?: Date | string | null
    uploaded_to_youtube_at?: Date | string | null
  }

  export type workspacesCreateManyYoutube_channelsInput = {
    id?: string
    name: string
    creator_id?: string | null
    created_at?: Date | string | null
  }

  export type submissionsUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutSubmissionsNestedInput
    workspaces?: workspacesUpdateOneWithoutSubmissionsNestedInput
  }

  export type submissionsUncheckedUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type submissionsUncheckedUpdateManyWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspace_id?: NullableStringFieldUpdateOperationsInput | string | null
    uploader_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: StringFieldUpdateOperationsInput | string
    thumbnail_url?: StringFieldUpdateOperationsInput | string
    original_video_filename?: NullableStringFieldUpdateOperationsInput | string | null
    original_thumbnail_filename?: NullableStringFieldUpdateOperationsInput | string | null
    youtube_video_id?: NullableStringFieldUpdateOperationsInput | string | null
    upload_status?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    submitted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploaded_to_youtube_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspacesUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUpdateManyWithoutWorkspacesNestedInput
    users?: usersUpdateOneWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submissions?: submissionsUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_members?: workspace_membersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateManyWithoutYoutube_channelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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