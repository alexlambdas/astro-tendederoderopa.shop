import type { StateAppDto } from "../../../server-common-module/domain/dtos/StateApp.dto"
import type { ConfigAppDto } from "../../../server-common-module/domain/dtos/ConfigApp.dto"

export type StateAppModuleDto = {
  fnBuildCommonState: (
    configAppDto: ConfigAppDto, 
    f: <T>(url: string) => Promise<T>,
  ) => Promise<StateAppDto>,
}