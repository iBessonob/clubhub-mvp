import { 
    addNewClub, 
    getClubs
} from '../controllers/clubController';

const routes = (app) => {
    app.route('/clubs')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getClubs)
    
    // POST endpoint
    .post(addNewClub);
}

export default routes;