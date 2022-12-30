import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";

@Injectable()
export class NotificationsService {
    constructor(private readonly prismaService: PrismaService) {}

    async displayUserNotifications(userId: number) {
        const allUsersNotifcations = await this.prismaService.notification.findMany({
             where: { 
                userId
             }
        });

        return allUsersNotifcations;
    }

    async markNotificationAsRead(notificationId: number) {
        const markedNotifcation = await this.prismaService.notification.update({
            where: {
                id: notificationId,
            },

            data: {
                isRead: true
            }
        });

        return markedNotifcation;
    }
}