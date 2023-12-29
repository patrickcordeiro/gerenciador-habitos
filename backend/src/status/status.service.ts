import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(private dataSource: DataSource) {}
  // create(createStatusDto: CreateStatusDto) {
  //   return 'This action adds a new status';
  // }

  async status() {
    const updatedAt = new Date().toISOString();
    const dbVersion = await this.dataSource
      .query('show server_version;')
      .then((value) => value[0].server_version);
    const dbOpenedConnections = await this.dataSource
      .query('SELECT count(distinct(numbackends))::int FROM pg_stat_database;')
      .then((value) => value[0].count);
    const dbMaxConnections = await this.dataSource
      .query('show max_connections;')
      .then((value) => value[0].max_connections);

    return {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: dbVersion,
          opened_connections: dbOpenedConnections,
          max_connections: dbMaxConnections,
        },
      },
    };
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} status`;
  // }

  // update(id: number, updateStatusDto: UpdateStatusDto) {
  //   return `This action updates a #${id} status`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} status`;
  // }
}
