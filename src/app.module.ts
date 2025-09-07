import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty' },
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      },
    }),
    DashboardModule,
  ],
})
export class AppModule {}
