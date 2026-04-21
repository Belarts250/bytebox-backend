import { Injectable } from '@nestjs/common';

@Injectable()
export class FileActivityService {


  constructor(private readonly fileModel: any) {}


  async findByType(type: string) {
    return this.fileModel.find({ type });
  }

 
  async deleteFile(id: string) {
    return this.fileModel.findByIdAndDelete(id);
  }
}