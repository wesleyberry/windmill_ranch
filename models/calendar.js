module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        event: DataTypes.STRING,
        year: DataTypes.INTEGER,
        month: DataTypes.INTEGER,
        day: DataTypes.INTEGER,
        start: DataTypes.STRING,
        end: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Event;
}