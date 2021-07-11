import { DataTypes, Model, InitOptions } from "sequelize";

class User extends Model {
  public static initialize(sequelize) {
    this.init(
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

export default User;
