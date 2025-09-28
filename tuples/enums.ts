// enum OrderStatus {
//     PENDING,
//     SHIPPED,
//     DELIVERED,
//     RETURNED,
// }

enum OrderStatus {
    PENDING = 10,
    SHIPPED = 12,
    DELIVERED = 98,
    RETURNED = 68,
}

const status = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

enum Arrowkeys {
    UP = "up",
    DOWN = "down",
}
