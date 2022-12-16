import { Module } from '@nestjs/common';
import { SocialController } from './social.controller';
import { SocialService } from './social.service';
import { PrismaModule } from '@spst-kniznica-project/backend-libs/database';

@Module({
  imports: [PrismaModule],
  controllers: [SocialController],
  providers: [SocialService],
})
export class SocialModule {}
