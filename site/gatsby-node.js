exports.createPages = ({ actions }) => {
    const { createPage } =  actions;

    createPage({
        path: '/custom',
        component: require.resolve('./src/templates/custom.js'),
        context: {
            title: 'custo page',
            meta: {
                description: 'A cust page w context'
            }
        }
    })
}