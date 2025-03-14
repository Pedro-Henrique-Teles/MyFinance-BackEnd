import { Model } from 'sequelize';
import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { User } from './user.entity';

@Table({ tableName: 'account', timestamps: true })
export class Accounts extends Model<Accounts> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  bank_balance: number;
}
