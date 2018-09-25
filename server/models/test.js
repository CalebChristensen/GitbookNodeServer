module.exports = function (sequelize, DataTypes) { //module is exported to allow Sequelize to create the tests table from the tesdata column. We run an anonymous function that has two parameters "sequelize and "DataTypes. The function will return the value of what is create by sequelize.define.
    return sequelize.define('test', { //sequelize object to call the define method. .define() is a built in method that will map model properties into a table in Postgres. In the first argument of the define method, we pass the string "test". This will become a table called "tests" in Postgres. Our second argument of the define function is an object. Any key / Value pairs in the following object will become columns of the table.
        testdata: DataTypes.STRING  //testdata is a key in our model object that will be a column in our data base. DataTypes.STRING is our value for the testdata property. Because we define it as a string value in the model, any information to be held in that colum MUST be a string data=type. Remember that DataTypes is a parameter in the function brought in through Sequelize.
    });
};