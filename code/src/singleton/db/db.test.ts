import { DB } from "./db";

describe('db', () => {
    it('should be able to instantiate only one instace', () => {
        const db = DB.getIstance();
        db.id = 1;

        const db2 = DB.getIstance();
        expect(db2.id).toBe(1);
    });

    it('should be able to connect olny 5 times', () => {
        const db = DB.getIstance();
        for (let i = 0; i < 5; i++) {
            expect(db.connect()).toEqual(true);
        }
        expect(db.connect()).toEqual(false);
    });
});