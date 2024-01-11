import CommonModule from "./server-common-module/Common.module";
import ConfigAppModule from "./server-config-app-module/ConfigApp.module";
import StateAppModule from "./server-state-app-module/StateApp.module";
import type { ConfigAppDto } from "./server-common-module/domain/dtos/ConfigApp.dto";
import type { StateAppDto } from "./server-common-module/domain/dtos/StateApp.dto";

let configAppObj: ConfigAppDto;
let stateAppObj: StateAppDto;

export async function fnInitApp(): Promise<void>{
  const fnHttpCall = CommonModule().fnHttpCall;
  configAppObj = ConfigAppModule().fnConfigApp();
  stateAppObj = await StateAppModule().fnBuildCommonState(configAppObj,fnHttpCall);
}

export function fnGetConfigAppObj(): ConfigAppDto{
  return configAppObj;
}

export function fnGetStateAppObj(): StateAppDto{
  return stateAppObj;
}