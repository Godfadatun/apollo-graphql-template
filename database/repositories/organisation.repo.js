const { Organisation } = require("../models").default;
const Repo = {
    async listOrganisation({ from, to, getUser = false, getTransaction = false, queryParams = null, selectOptions = [], transaction = null }) {
        const criteria = {};
        
        if (from || to) {
            criteria.created_at = {};
            if (from && Utils.isValidDate(from)) criteria.created_at[Op.gte] = from;
            if (to && Utils.isValidDate(to)) criteria.created_at[Op.lte] = to;
        }

        return Organisation.findAll({
            where: { ...queryParams, ...criteria },
            ...(selectOptions.length && { attributes: selectOptions.concat(["id", "code"]) }),
            order: [["created_at", "DESC"]],
        }, { transaction });
    },

    async getOrganisation({ getUser = false, getTransaction = false, queryParams = null, selectOptions = [], transaction = null }) {
        return Organisation.findOne({
            where: queryParams,
            ...(selectOptions.length && { attributes: selectOptions.concat(["id", "code"]) }),
        }, { transaction });
    },

    async updateOrganisation({ queryParams = null, updateFields, transaction = null }) {
        return Organisation.update({ ...updateFields }, { where: queryParams }, { transaction });
    },

    async createOrganisation({ queryParams, transaction }) {
        return Organisation.create(queryParams, { transaction });
    },
}

export default Repo;
