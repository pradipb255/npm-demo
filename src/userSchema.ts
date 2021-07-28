import { DataTypes, Model, InitOptions } from "sequelize";

class User extends Model {
  public id!: number;
  public uuid!: string;
  public allotted_phone!: bigint;
  public first_name!: Text;
  public second_name!: Text;
  public active!: number;

  public joining_date!: Date;
  public activation_date!: Date;
  public is_manager!: number;
  public profile_step!: number;
  public cluster_id!: number;
  public city!: number;
  public state!: number;
  public referral_code!: string;
  public otp!: number;
  public device_id!: Text;
  public firebase_token!: Text;
  public fcm_token!: Text;
  public address!: string;
  public latitude!: number;
  public longitude!: number;
  public is_major!: boolean;
  public gender!: number;
  public preferred_vertical_id!: number;
  public have_vehicle!: boolean;
  public vehicle_id!: number;
  public profile_img!: string;
  public dial_code!: string;
  public is_online!: boolean;
  public platform!: string;
  public selfie!: string;
  public ref_join!: number;
  public is_busy!: boolean;

  public initialize(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        uuid: {
          type: DataTypes.STRING,
        },
        allotted_phone: {
          type: new DataTypes.BIGINT(),
        },
        first_name: {
          type: new DataTypes.TEXT(),
          allowNull: true,
        },
        second_name: {
          type: new DataTypes.TEXT(),
          allowNull: true,
        },
        profile_step: {
          type: new DataTypes.INTEGER(),
          defaultValue: 0,
        },
        active: {
          type: new DataTypes.INTEGER(),
          defaultValue: 0,
        },
        joining_date: {
          type: new DataTypes.DATE(),
        },
        activation_date: {
          type: new DataTypes.DATE(),
        },
        is_manager: {
          type: new DataTypes.INTEGER(),
        },
        cluster_id: {
          type: new DataTypes.INTEGER(),
        },
        city: {
          type: new DataTypes.INTEGER(),
        },
        state: {
          type: new DataTypes.INTEGER(),
        },
        referral_code: {
          type: new DataTypes.STRING(8),
        },
        otp: {
          type: new DataTypes.INTEGER(),
        },
        device_id: {
          type: new DataTypes.TEXT(),
        },
        firebase_token: {
          type: new DataTypes.TEXT(),
        },
        fcm_token: {
          type: new DataTypes.TEXT(),
        },
        address: {
          type: new DataTypes.STRING(),
        },
        latitude: {
          type: new DataTypes.DOUBLE(),
        },
        longitude: {
          type: new DataTypes.DOUBLE(),
        },
        is_major: {
          type: DataTypes.BOOLEAN,
        },
        gender: {
          type: new DataTypes.INTEGER(),
        },
        preferred_vertical_id: {
          type: new DataTypes.INTEGER(),
        },
        have_vehicle: {
          type: DataTypes.BOOLEAN,
        },
        vehicle_id: {
          type: DataTypes.INTEGER,
        },
        is_online: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        profile_img: {
          type: new DataTypes.STRING(),
        },
        selfie: {
          type: new DataTypes.STRING(),
        },
        dial_code: {
          type: new DataTypes.STRING(),
        },
        platform: {
          type: new DataTypes.ENUM("android", "ios"),
          defaultValue: "android",
        },
        ref_join: {
          type: new DataTypes.INTEGER(),
          defaultValue: 0,
        },
        is_busy: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        tableName: "rider_info",
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  }
}

export default new User();
