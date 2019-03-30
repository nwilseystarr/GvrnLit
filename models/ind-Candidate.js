module.exports = function(sequelize, DataTypes) {
    var Candidate = sequelize.define("Candidate", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        current_position: DataTypes.STRING,
        state_name: DataTypes.STRING,
        curr_status: DataTypes.STRING,
        twitter_acct: DataTypes.STRING,
        fec_id: DataTypes.STRING,
    },
    {
        // disable the modification of candidate; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        tableName: "candidates"
      });
    return Candidate;
};