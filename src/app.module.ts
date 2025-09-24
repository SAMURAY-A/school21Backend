import { Module, OnModuleInit, Logger } from '@nestjs/common'; 
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';   
import { SharedModule } from './common/shared.module'; 
import { ApiModule } from './api/api.module';
@Module({
  imports: [
    SharedModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'postgres',
      username: process.env.DB_NAME,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      autoLoadModels: true,
      synchronize: true,
    }),

    // SequelizeModule.forFeature([Dastur, DasturTranslation]), 
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      this.logger.log('✅ Database connection established successfully');
    } catch (error) {
      this.logger.error('❌ Database connection failed', error.stack);
    }
  }
}