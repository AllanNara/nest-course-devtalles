import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  // ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from "./dto";

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCartById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  // @UsePipes( ValidationPipe )
  createCar(@Body() createCar: CreateCarDto) {
    return this.carsService.create(createCar);
  }

  @Patch('/:id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCar: UpdateCarDto) {
    return this.carsService.update(id, updateCar)
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id)
  }
}
