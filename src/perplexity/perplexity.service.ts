import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { FinancialsService } from 'src/financials/financials.service';
import { Repository } from 'typeorm';
import { Messages } from './entities/messages.entity';

@Injectable()
export class PerplexityService {
  constructor(
    private readonly financialsService: FinancialsService,
    @Inject('MESSAGES_REPOSITORY')
    private messagesRepository: Repository<Messages>,
  ) {}

  userFinancials = null;

  // TODO: When user management is implemented, fetch messages for specific user
  async loadConversation() {
    const conversationMessages = this.messagesRepository.find();
    return conversationMessages;
  }

  // TODO: Specify type for array of conversations
  async saveConversation(currentMessages: any) {
    // TODO: Update to save messages
    const messages = this.messagesRepository.create(currentMessages.messages);
    await this.messagesRepository.save(messages);

    console.log('Bulk insert completed successfully!');
  }

  // TODO: Specify type for chatCompletionsData
  async chatCompletions(chatCompletionsData: any) {
    console.log('This is outside', this.userFinancials);

    if (!this.userFinancials) {
      const userFinancials = await this.financialsService.getUserFinancials();
      this.userFinancials = userFinancials;
    }

    const systemMessage = {
      role: 'system',
      content: `You are an intelligent financial assistant designed to help users understand and manage their personal finances based on the data provided in this prompt and further by the user. When responding, aim to be clear, concise, and helpful. Additionally, be mindful of privacy and security, ensuring sensitive information is communicated in a secure and confidential manner. Following is the financial data of the user: Income - $${this.userFinancials.income}, Current Month Expense - $${this.userFinancials.currentMonthExpense}, Expected Monthly Expense - $${this.userFinancials.expectedMonthlyExpense}, Savings - $${this.userFinancials.savings}. Main Goal of the user is to ${this.userFinancials.goal}.`,
    };

    const data = {
      model: 'llama-3.1-sonar-small-128k-online',
      messages: chatCompletionsData.messages,
    };
    if (chatCompletionsData.length < 2) {
      data.messages.unshift(systemMessage);
    }

    const res = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.PPLX_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  }
}
