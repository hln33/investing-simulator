
/**
 * @todo Should remove this file once prisma has been tested and runs successfully
 */
const { Pool } = require('pg');
const md5 = require('md5');

const POSTGRES_LOCAL = 'postgres://mathew:768355@localhost/cmpt372';

var pool = new Pool({
    connectionString: POSTGRES_LOCAL
});

async function isValidCredentials(username, password) {
    const findUserWithCredentials = `
        select * 
        from profile 
        where username = $1 and password_hash = $2
    `;
    var result = await pool.query(findUserWithCredentials, [username, md5(password)]);
    return result.rowCount == 1;
}

async function createUserProfile(username, password) {
    const createProfileQuery = `
        insert into profile (username, password_hash) 
        values ($1, $2) 
        returning profile_id
    `;
    var result;
    try {
        result = await pool.query(createProfileQuery, [ username, md5(password) ]);
    } catch (err) {
        return false;
    }

    var profileId = result.rows[0]['profile_id'];

    // console.log(profileId);

    const createPortfolioQuery = `
        insert into portfolio(portfolio_type, base_balance, fk_profile) 
        values ($1, $2, $3)
        returning portfolio_id
    `;

    result = await pool.query(createPortfolioQuery, [ 'main', 10000, profileId ]);

    var portfolioId = result.rows[0]['portfolio_id'];
    return portfolioId;
}

async function getBalanceHistory(portfolioId) {
    const historyQuery = `
        select h.snapshot_time as time, h.balance as balance
        from (
            select *
            from portfolio
            where portfolio_id = $1
        ) as p
        inner join history h on p.portfolio_id = h.fk_portfolio
        order by h.snapshot_time
    `;

    var result;
    try {
        result = await pool.query(historyQuery, [ portfolioId ]);
    } catch (err) {
        return false;
    }

    console.log(result.rows);

    return result.rows;
}

async function insertTime() {
    await pool.query('insert into testing (t_date) values ($1)', [new Date()]);
}


// getBalanceHistory('d86de3ec-659f-43e6-862a-2652571d7bce')
insertTime()
    .then(res => {
        if (res) {
            console.log('ok');
        } else {
            console.log('failed');
        }
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        process.exit(0);
    });

