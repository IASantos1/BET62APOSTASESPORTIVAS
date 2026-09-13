export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
    correlationId?: string;
  };
  meta?: {
    timestamp: string;
    requestId: string;
    pagination?: PaginationResult<unknown>;
  };
}

export interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface Identifiable {
  id: string;
}

export interface Auditable {
  createdBy?: string | null;
  updatedBy?: string | null;
  deletedBy?: string | null;
}

export interface GeoLocation {
  country?: string;
  city?: string;
  region?: string;
  ipAddress?: string;
  latitude?: number;
  longitude?: number;
}

export interface DateRange {
  from?: Date;
  to?: Date;
}

export interface Money {
  amount: number;
  currency: string;
}

export interface KeyValuePair<K = string, V = unknown> {
  key: K;
  value: V;
}
