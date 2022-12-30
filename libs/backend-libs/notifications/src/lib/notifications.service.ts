import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { NotificationCreatedEvent } from "./events/notification-created.event";

@Injectable()
export class NotificationsService {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    async allCreatedNotifications() {
        const allNotifications = await this.prismaService.notification.findMany();
        return allNotifications;
    }

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
    async createNewNotification(payload: NotificationCreatedEvent) {
        const newNotifcation = await this.prismaService.notification.create({
            data: payload
        })

        return newNotifcation;
    }

    async removeReadNotification() {
        const readedNotifcations = await this.prismaService.notification.deleteMany({
            where: {
                isRead: true
            }
        });

        return readedNotifcations;
    }
}