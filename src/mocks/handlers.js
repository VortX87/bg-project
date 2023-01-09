import { rest } from 'msw'

export const handlers = [

    rest.get('https://nc-games-server-kp.herokuapp.com/api/reviews/:review_id', (req, res, ctx) => {
        const { review_id } = req.params
        return res(
            ctx.status(200),
            ctx.json({
                "review": [
                    { id: review_id, title: 'testing title', designer: 'testing Designer', owner: 'testing owner', review_body: "testing reviewBody" }
                ]
            })
        )
    }),

    rest.get('https://nc-games-server-kp.herokuapp.com/api/reviews/:review_id/comments', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "comments": [
                    { body: 'testing title', author: 'testing author' }
                ]
            })
        )
    }),

    rest.get('https://nc-games-server-kp.herokuapp.com/api/categories', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ "categories": [{ slug: 'strategy' }, { slug: 'hidden-roles' }, { slug: 'dexterity' }, { slug: 'push-your-luck' }, { slug: 'roll-and-write' }, { slug: 'deck-building' }, { slug: 'engine-building' }] })
        )
    }),

    rest.get('https://nc-games-server-kp.herokuapp.com/api/reviews', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "reviews": [{
                    category: "hidden-roles",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                {
                    category: "dexterity",
                    owner: "jessjelly",
                    title: "Super Rhino Hero"
                },
                ]
            })

        )
    }),

]
