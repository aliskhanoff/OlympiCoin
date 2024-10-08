
import { Injectable } from '@nestjs/common';
import { connection } from './connection';
import { Kysely } from 'kysely';

@Injectable()
export class DatabaseService {

    public getConnection<DbModel> () {
        return new Kysely<DbModel>({
            dialect: connection
        })
    }

}
