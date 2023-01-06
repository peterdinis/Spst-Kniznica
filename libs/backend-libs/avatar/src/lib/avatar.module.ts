import { Module } from '@nestjs/common';
import {PrismaModule} from "@spst-kniznica-project/backend-libs/database"
import { AvatarService } from './avatar.service';

@Module({
  imports: [PrismaModule],
  providers: [AvatarService],
  exports: [AvatarService],
})
export class AvatarModule {}
