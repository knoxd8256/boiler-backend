// Type definitions for Boiler.ts
// Project: Boiler.ts
// Definitions by: David Knox <https://github.com/knoxd8256>

import { ObjectID } from "mongodb";

export interface IPlate {
  _id?: string;
  name: string;
  tags: string[];
  repo: string;
  description: string;
  commands: string[];
}
