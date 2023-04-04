import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Record<string, any> = ctx.switchToHttp().getRequest();
  if (data) {
    return request.user?.[data as string];
  } else {
    return request.user;
  }
});
