import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface IClientCreationAttr {
    id: number;
    client_id: number;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    location: string;
    status: string;
}

@Table({ tableName: "client" })
export class Client extends Model<Client, IClientCreationAttr> {

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
    client_id: number;
    
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
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

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
        defaultValue: true,
    })
    status: string;
}
