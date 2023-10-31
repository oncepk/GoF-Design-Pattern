export class DB {

    // object members
    id: number = 0;
    private constructor() { }

    // class members
    private static db: DB | undefined;
    static getIstance(): DB {
        if (!DB.db) {
            DB.db = new DB();
        }
        return DB.db;
    }

    private pool = 0;
    public connect(): boolean {
        if (this.pool < 5) {
            this.pool++;
            return true;
        }
        return false;
    }
}