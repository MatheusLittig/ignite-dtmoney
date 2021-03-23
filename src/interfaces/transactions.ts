export interface TransactionProps {
  id: number;
  name: string;
  value: number;
  category: string;
  date: string | Date;
  type: string | null
}