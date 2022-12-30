export class NotificationCreatedEvent {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly count: number,
        public readonly isRead = false,
        public readonly userId: number,
    ) {}
}