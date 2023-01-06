import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class AvatarService {
    constructor(private readonly prismaService: PrismaService) {}
    // Later add cloudinary here
    async uploadAvatar(dataBuffer: Buffer, filename: string) {
        const newFile = await this.prismaService.avatar.create({
            data: {
                data: dataBuffer,
                filename,
            }
          })
          return newFile;
    }

    async getOneAvatar(fileId: number) {
        const file = await this.prismaService.avatar.findFirst({
            where: {
                id: fileId
            }
        })

        return file;
    }
}