module.exports = {
    checkComments: async(req, res) => {
        const db = req.app.get('db');
        const comments = await db.comments.check_comments();
        res.status(200).send(comments)
    },
    findPost: async(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const [comment] = await db.comments.find_post(+id);
        if(comment){
            res.status(200).send(comment)
        } else {
            res.status(404).send('Could not locate the comment')
        }
    },
    postComment: async(req, res) => {
        const db = req.app.get('db');
        const {body} = req.body
        const {user_id} = req.session.user;
        const {post_id} = req.session.post;
        try {
            const comment = await db.comments.post_comment([body, user_id, post_id]);
            res.status(200).send(comment)
        } catch(err){
            console.log('Error adding comment', err)
            res.sendStatus(500)
        }
    },
    updateComment: async(req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const {body} = req.body;

        try {
            const comment = await db.comments.update_comment([+id, body]);
            res.status(200).send(comment)
        } catch (err) {
            console.log('Can not update comment', err);
            res.sendStatus(500);
        }
    },
    deleteComment: async(req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        try{
            const comment = await db.comments.delete_comment(+id);
            res.status(200).send(comment);
        } catch(err){
            console.log('Error deleting comment', err);
            res.sendStatus(500);
        }
    }
}