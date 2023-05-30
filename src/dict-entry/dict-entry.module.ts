import { Module } from "@nestjs/common";
import { DictEntryService } from "./dict-entry.service";
import { DictEntryResolver } from "./dict-entry.resolver";

@Module({
  providers: [DictEntryResolver, DictEntryService]
})
export class DictEntryModule {}
