import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ServiceType } from './service_types.model';

interface IMasterCreationAttr {
    id: number;
    master_id: number;
    username: string;
    firstName: string;
    lastName: string;
    phone_number: string;
    location: string;
    target_location: string;
    status: boolean;
    start_time: string;
    end_time: string;
    service_type_id: number;
    name_workshop: string;
    rating: number;
    last_state:string;
}

@Table({ tableName: "master" })
export class Master extends Model<Master, IMasterCreationAttr> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
    })
    master_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    target_location: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    status: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    start_time: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    end_time: string;

    @ForeignKey(()=>ServiceType)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    service_type_id: number;
    @BelongsTo(()=>ServiceType)
    service_type: ServiceType;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    name_workshop: string;

    @Column({
        type: DataType.FLOAT,
        defaultValue: 0,
    })
    rating: number;

    @Column({
        type: DataType.STRING,
    })
    last_state:string
}
