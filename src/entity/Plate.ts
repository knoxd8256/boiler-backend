import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IPlate } from "../index.d";

export class Plate implements IPlate {
  constructor(
    name: string,
    tags: string[],
    repo: string,
    commands: string[],
    description: string
  ) {
    this._id = 0;
    this.name = name;
    this.tags = tags;
    this.repo = repo;
    this.description = description;
    this.commands = commands;
  }
  json(): Object {
    return {
      name: this.name,
      tags: this.tags,
      repo: this.repo,
      description: this.description,
      commands: this.commands,
    };
  }

  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  tags: string[];

  @Column()
  repo: string;

  @Column()
  description: string;

  @Column()
  commands: string[];
}
