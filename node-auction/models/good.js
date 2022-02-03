const Sequelize = require('sequelize');

module.exports = class Good extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Good',
            tableName: 'goods',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db){
        db.Good.belongsTo(db.User, { as: 'Owner' });
        db.Good.belongsTo(db.User, { as: 'Sold' });
        db.Good.hasMany(db.Auction);
    }
}

/*
    Model 구조
     - 상품명
     - 상품 사진
     - 시작 가격
    * User Model과 일대다 관계가 두 번 적용
     - 사용자가 여러 상품 등록이 가능해야 함, 사용자가 여러 상품을 낙찰이 가능해야 함
    * Auction Model과 일대다 관계
*/