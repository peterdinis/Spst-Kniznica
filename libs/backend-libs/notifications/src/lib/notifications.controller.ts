import { Controller, Get, Param, Put } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";

@Controller("notifications")
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @ApiOperation({
        summary: "Display user notifications"
    })
    @ApiOkResponse()
    @Get("/:userId")
    async userNotifcation(@Param("userId") userId: number) {
        return await this.notificationsService.displayUserNotifications(userId);
    }

    @ApiOperation({
        summary: "Marked notifcation as read"
    })
    @Put("/:notifcationId/read")
    async readNotifcation(@Param("notifcationId") notificationId: number) {
        return await this.notificationsService.markNotificationAsRead(notificationId);
    }
}