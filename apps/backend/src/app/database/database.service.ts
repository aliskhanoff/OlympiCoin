
import { Injectable } from '@nestjs/common';
import { connection } from './connection';

@Injectable()
export class DatabaseService {

    public getConnection () {
        return connection
    }

}
