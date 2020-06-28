export class BasePagedRes {
  readonly page!: number;

  readonly pageSize!: number;

  readonly nextPage?: number | null;

  readonly itemsCount?: number;

  readonly total!: number;
}
