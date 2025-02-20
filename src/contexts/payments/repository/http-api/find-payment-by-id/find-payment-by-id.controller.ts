import { Controller, Get, Param } from '@nestjs/common';

import { FindPaymentByIdUseCase } from 'src/contexts/payments/application/find-payment-by-id-use-case/find-payment-by-id.use-case';
import { PrimitivePayment } from 'src/contexts/payments/domain/payment';
import { FindPaymentByIdHttpDto } from './find-payment-by-id.http-dto';

@Controller('payments')
export class FindPaymentByIdController {
  constructor(private findPaymentByIdUseCase: FindPaymentByIdUseCase) {}

  @Get(':id')
  async run(
    @Param() params: FindPaymentByIdHttpDto,
  ): Promise<{ payment: PrimitivePayment }> {
    try {
      return this.findPaymentByIdUseCase.execute({ id: params.id });
    } catch (error) {
      throw error;
    }
  }
}
