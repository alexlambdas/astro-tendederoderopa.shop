import { fnConfigApp } from "./business/ConfigApp.service";
import type { ConfigAppModuleDto } from "./domain/dtos/ConfigAppModule.dto";

export default function(): ConfigAppModuleDto{
  return{
    fnConfigApp: fnConfigApp,
  }
}