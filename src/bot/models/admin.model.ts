import { Table, Column, Model, DataType } from 'sequelize-typescript';

interface IAdminCreationAttr {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    phone_number: string;
    location: string;
    status: boolean;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {

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
        type: DataType.BOOLEAN,
        defaultValue: true,
    })
    status: boolean;
}
