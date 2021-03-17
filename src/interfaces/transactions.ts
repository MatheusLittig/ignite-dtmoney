export interface TransactionProps {
  name: string;
  value: number;
  category: string;
  date: string;
  type: 'deposit' | 'debt' | null
}