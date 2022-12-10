import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUser } from '../utils/auth-user';
import { StudentService } from '../student.service';
import { JwtPayload } from '../interfaces/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly studentService: StudentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "SOMERANDOM"
    });
  }

  async validate(payload: JwtPayload): Promise<AuthUser> {
    const user = await this.studentService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException("User is not authorized");
    }
    return user;
  }
}