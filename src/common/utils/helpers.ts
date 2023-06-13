/**
 * 根据depth生成递归树
 * @param depth
 * @returns
 */
export const generateInclude = (depth: number): { include: Record<"children", boolean> } => {
  if (depth <= 0) {
    return true as any;
  }
  return {
    include: {
      // @ts-ignore
      children: generateInclude(depth - 1)
    }
  };
};
