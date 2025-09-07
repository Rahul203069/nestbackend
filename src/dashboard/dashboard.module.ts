import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { PrismaModule } from 'src/prisma/prisma.module'; // Add this import

@Module({
  imports: [PrismaModule],  // Add PrismaModule here
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}