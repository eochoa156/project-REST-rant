const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Hungry Hank',
        rant: false,
        stars: 5.0,
        content: 'Great! Would eat here again!'
    })

    place.comments.push(comment.id)

    await place.save()
    
    process.exit()
}

seed()
