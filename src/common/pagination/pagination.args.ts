export interface PaginationArgs {
  /**
   * 要跳过的记录数
   */
  skip?: number;
  /**
   * 当前页
   */
  after?: string;
  /**
   * 表示要返回的记录应该在哪个游标之前
   */
  before?: string;
  /**
   * 每页数量
   */
  first?: number;
  /**
   * 表示要返回的记录数量
   */
  last?: number;
}
