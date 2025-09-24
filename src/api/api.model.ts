import { Table, Column, Model, DataType, Unique } from 'sequelize-typescript';

@Table({ tableName: 'api_comments' })
export class ApiComment extends Model<ApiComment> {
  @Unique
  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  comment: string;
}
