import type { StateAppModuleDto } from "./domain/dtos/StateAppModule.dto";
import { fnBuildCommonState } from "./business/StateApp.service";

export default function(): StateAppModuleDto{
  return{
    fnBuildCommonState: fnBuildCommonState,
  }
}