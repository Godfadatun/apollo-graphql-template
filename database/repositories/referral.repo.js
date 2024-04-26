const { Referral } = require("../models").default;
const Repo = {
    async listReferral({ from, to, getUser = false, getTransaction = false, queryParams = null, selectOptions = [], transaction = null }) {
        const criteria = {};
        
        if (from || to) {
            criteria.created_at = {};
            if (from && Utils.isValidDate(from)) criteria.created_at[Op.gte] = from;
            if (to && Utils.isValidDate(to)) criteria.created_at[Op.lte] = to;
        }

        return Referral.findAll({
            where: { ...queryParams, ...criteria },
            ...(selectOptions.length && { attributes: selectOptions.concat(["id", "code"]) }),
            order: [["created_at", "DESC"]],
        }, { transaction });
    },

    async getReferral({ getUser = false, getTransaction = false, queryParams = null, selectOptions = [], transaction = null }) {
        return Referral.findOne({
            where: queryParams,
            ...(selectOptions.length && { attributes: selectOptions.concat(["id", "code"]) }),
        }, { transaction });
    },

    async updateReferral({ queryParams = null, updateFields, transaction = null }) {
        return Referral.update({ ...updateFields }, { where: queryParams }, { transaction });
    },

    async createReferral({ queryParams, transaction }) {
        return Organisation.create(queryParams, { transaction });
    },
}

export default Repo;
