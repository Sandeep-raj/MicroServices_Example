import { Subjects, Publisher, PaymentCreatedEvent } from '@gittix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
