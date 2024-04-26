module.exports = (connection, Sequelize) => {
  const schema = {
    value: Sequelize.STRING,
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      onUpdate: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  };
  return connection.define("Status", schema, { timestamps: false });
};

module.exports.STATUSES = {
  ACTIVE: 1,
  INACTIVE: 2,
  PAUSE: 3,
  FREEZE: 4,
  BLOCKED: 5,
  VERIFIED: 6,
  UNVERIFIED: 7,
  INVITED: 8,
  CANCELLED: 9,
  DELETED: 10,
  PENDING: 11,
  APPROVED: 12,
  REJECTED: 13,
  SUCCESS: 14,
  FAILED: 15,
  DECLINED: 16,
  PAID: 17,
  PROCESSING: 18,
  PROCESSED: 19,
  REVERSED: 20,
  CLOSED: 21,
  VERIFYING: 22,
  COMPLETED: 23,
  PUBLISHED: 24,
  UNPUBLISHED: 25,
  CONVERTED: 26,
  VISITED: 27,
};
