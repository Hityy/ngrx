import { Request, Response, Router} from "express";
// import { router } from './auth';


// import { MongoClient, ObjectID , Db, Collection } from 'mongodb';
// const url = 'mongodb://localhost:27017/angular';

/* export async function connect(): Promise<Db> {
    return await MongoClient.connect(url); 
} */
const router: Router = Router();

export function errCatcher(asyncFn: () => Promise<any>,
                              req: Request, res: Response): void {
    asyncFn().then((dto => {
        res.status(200).json(dto);
    })).catch(error => {
        res.status(500).json({
            error: error.message
        });
    });
}
export function GET(url) {
    return (target, propertyKey, propertyDscriptror) => {
        router.get(url, errCatcher.bind(null, target[propertyKey]));
    };
}

export const authRoutes: Router = router;
