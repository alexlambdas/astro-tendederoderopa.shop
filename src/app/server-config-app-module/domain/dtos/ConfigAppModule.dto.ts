import type { ConfigAppDto } from "../../../server-common-module/domain/dtos/ConfigApp.dto"

export type ConfigAppModuleDto = {
  fnConfigApp: () => ConfigAppDto;
}