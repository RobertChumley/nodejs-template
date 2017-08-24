import Sequelize from 'sequelize';

class AirportDBSchema {
  constructor() {
    this.sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
    this.setup();
    // this.roles = ['Administrators', 'Site Administrator', 'Site Technician', 'Airline Admin', 'Ground Handler Admin', 'Ground Handler', 'Airline User'];
  }
  objectdb() {
    return this.sequelize;
  }
  setup() {
    this.Airport = this.sequelize.define('airport', {
      AirportId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      AirportIataCode: Sequelize.STRING,
      AirportIcaoCode: Sequelize.STRING,
      AirportName: Sequelize.STRING,
      AirportCity: Sequelize.STRING,
      RowStatusTypeId: Sequelize.INTEGER,
      CustomProperty: Sequelize.STRING,
      EditUserId: Sequelize.INTEGER,
      EditVersion: Sequelize.STRING,
      EditTime: Sequelize.STRING,
      EditHostName: Sequelize.STRING,
      EditHostAddress: Sequelize.STRING,
    });
    // this.Countries = this.sequelize.define('countries', {
    //   CountryCode: Sequelize.STRING,
    //   Name: Sequelize.STRING,
    //   SiteGroupId: Sequelize.INTEGER,
    //   LanguageCode: Sequelize.STRING, // refers to language table to be defined
    //   RowStatusTypeId: Sequelize.INTEGER,
    //   CustomProperty: Sequelize.STRING,
    //   EditUserId: Sequelize.INTEGER,
    //   EditVersion: Sequelize.STRING,
    //   EditTime: Sequelize.STRING,
    //   EditHostName: Sequelize.STRING,
    //   EditHostAddress: Sequelize.STRING,
    // });

    // this.airport.hasOne(this.countries);
  }

  async align() {
    try {
      await this.sequelize.sync();
    } catch (e) {}
  }
}

export default AirportDBSchema;
