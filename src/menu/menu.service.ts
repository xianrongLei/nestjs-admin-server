import { Injectable } from "@nestjs/common";
import { CreateMenuInput } from "./dto/create-menu.input";
import { UpdateMenuInput } from "./dto/update-menu.input";
import { PrismaService } from "@/common/prisma/prisma.service";
import { Menu } from "@/types/graphql";
@Injectable()
export class MenusService {
  constructor(private readonly prisma: PrismaService) {
    this.prisma = prisma;
  }
  async create(createMenuInput: CreateMenuInput): Promise<Menu> {
    return await this.prisma.menu.create({
      data: createMenuInput
    });
  }

  findAll() {
    return `This action returns all menus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
