import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Financials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  income: number;

  @Column({ name: 'current_month_expense' })
  currentMonthExpense: number;

  @Column({ name: 'expected_monthly_expense' })
  expectedMonthlyExpense: number;

  @Column()
  savings: number;

  @Column()
  goal: string;
}
