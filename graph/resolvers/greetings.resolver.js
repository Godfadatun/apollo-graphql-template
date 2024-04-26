const resolvers = {
    Query: {
        greeting: () => 'Yo World!',
        dashboardCampaigns: () => ([
            {
                code: 'cmp_fedb0fbf312611eea',
                title: 'RefSoft Idea Test Campaign',
                description: 'This Campaign is meant to check the interest of people in this marketing utility tool',
                stats: {
                    leadCount: 45.102,
                    referralCount: 200.00,
                    conversionCount: 20.00,
                }
            },
            {
                code: 'cmp_fedb0fbf312611ee2',
                title: 'RefSoft Idea CrowdFunding Campaign',
                description: 'This Campaign is meant to get opinions on the product before/during development while raising funding if possible',
                stats: {
                    leadCount: 245.102,
                    referralCount: 320.00,
                    conversionCount: 220.00,
                }
            }
        ]),
    },
};
export default resolvers;
