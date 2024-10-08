import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Master } from './master.model';

interface IServiceTypeCreationAttr {
    name: string;
    description: string;
}

@Table({ tableName: "service_type" })
export class ServiceType extends Model<ServiceType, IServiceTypeCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column({
        type: DataType.STRING,
    })
    description: string;

    @HasMany(()=>Master)
    masters:Master[];
}
