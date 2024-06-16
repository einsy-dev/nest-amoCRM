import { Module } from '@nestjs/common';
import { AmocrmService } from './amocrm.service';

@Module({
	providers: [AmocrmService],
	exports: [AmocrmService],
})
export class AmocrmModule {}
