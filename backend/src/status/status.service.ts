import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  // create(createStatusDto: CreateStatusDto) {
  //   return 'This action adds a new status';
  // }

  status() {
    return `This action returns all status`;
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
