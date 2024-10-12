import { Body, Controller, Get, Post } from '@nestjs/common';
import { PerplexityService } from './perplexity.service';

@Controller('perplexity')
export class PerplexityController {
  constructor(private readonly perplexityService: PerplexityService) {}
  @Post('/chat-completions')
  async chatCompletions(@Body() chatCompletionsData: any) {
    return this.perplexityService.chatCompletions(chatCompletionsData);
  }

  @Post('/save-conversation')
  async saveConversation(@Body() currentMessages: any) {
    return this.perplexityService.saveConversation(currentMessages);
  }

  @Get('load-conversation')
  async loadConversation() {
    return this.perplexityService.loadConversation();
  }
}
