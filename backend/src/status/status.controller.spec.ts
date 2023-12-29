import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

describe('StatusController', () => {
  let controller: StatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [StatusService],
    }).compile();

    controller = module.get<StatusController>(StatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET to v1/status should return 200', async () => {
    const response = await fetch('http://localhost:3336/api/v1/status');
    expect(response.status).toBe(200);

    const responseBody = await controller.status();
    expect(responseBody).toHaveProperty('updated_at');
    expect(responseBody).toHaveProperty('dependencies');
    expect(responseBody.dependencies).toHaveProperty('database');
    expect(responseBody.dependencies.database).toHaveProperty('version');
    expect(responseBody.dependencies.database).toHaveProperty(
      'opened_connections',
    );
    expect(responseBody.dependencies.database).toHaveProperty(
      'max_connections',
    );

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  });
});
