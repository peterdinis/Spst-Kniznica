import { Injectable } from "@nestjs/common";
import { PrismaService } from "@spst-kniznica-project/backend-libs/database";
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class NotificationsService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly eventEmitter: EventEmitter2,
        private schedulerRegistry: SchedulerRegistry,
    ) {}

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

    async removeReadNotification() {
        const readedNotifcations = await this.prismaService.notification.deleteMany({
            where: {
                isRead: true
            }
        });

        return readedNotifcations;
    }
}