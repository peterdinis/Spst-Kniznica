import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { Admin } from "@prisma/client";

const AuthAdmin = createParamDecorator((_, ctx: ExecutionContext)=>{
    const request = ctx.switchToHttp().getRequest();
    const admin = request.user as Admin;
    delete admin.password;
    return admin;
})

export default AuthAdmin;