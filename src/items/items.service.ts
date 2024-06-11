import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemInput, UpdateItemInput } from './dto/inputs';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly _itemsRepository: Repository<Item>,
  ) {}
  async create(createItemInput: CreateItemInput): Promise<Item> {
    const item = this._itemsRepository.create(createItemInput);
    return await this._itemsRepository.save(item);
  }

  async findAll(): Promise<Item[]> {
    return await this._itemsRepository.find();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this._itemsRepository.findOneBy({ id });
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async update(id: string, updateItemInput: UpdateItemInput): Promise<Item> {
    const item = await this._itemsRepository.preload(updateItemInput);
    if (!item) throw new NotFoundException('Item not found');
    return this._itemsRepository.save(item);
  }

  async remove(id: string) {
    // TODO: soft delete implementation
    const item = await this._itemsRepository.findOneBy({ id });
    if (!item) throw new NotFoundException('Item not found');
    this._itemsRepository.remove(item);

    return { ...item, id };
  }
}
