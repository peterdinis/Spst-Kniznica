import { Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Notifications")
@Controller("notifications")
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @ApiOperation({
        summary: "All notifcations"
    })
    @ApiOkResponse()
    @Get("/")
    async allNotifications() {
        return await this.notificationsService.allCreatedNotifications()
    }

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
    @ApiOkResponse()
    @Put("/:notifcationId/read")
    async readNotifcation(@Param("notifcationId") notificationId: number) {
        return await this.notificationsService.markNotificationAsRead(notificationId);
    }


    @ApiOperation({
        summary: "Removed all notifcations with status isRead=true"
    })
    @ApiOkResponse()
    @Delete("/readed")
    async deleteReadedNotifications() {
        return await this.notificationsService.removeReadNotification();
    }
}