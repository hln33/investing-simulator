# documentation for db schema

## Profile table
name: profile

| field         | type   | notes                                        | optional | default |
|---------------|--------|----------------------------------------------|----------|---------|
| profile_id    | string | auto-generated                               | yes      | auto    |
| username      | string | username cannot be empty. max length = 50    | no       |         |
| password_hash | string | password cannot be empty. max length = 50    | no       |         |
| points        | int    | The points that this account has accumulated | yes      | 0       |

## Portfolio table
name: portfolio

| field             | type   | notes                                     | optional | default |
|-------------------|--------|-------------------------------------------|----------|---------|
| portfolio_id      | string | auto-generated                            | yes      | auto    |
| portfolio_type    | string | can be either 'main' or 'competition'     | no       |         |
| base_balance      | float  | the starting balance NOT including profit | no       |         |
| investment_profit | float  | the amount gained/lost from investments   | yes      | 0       |
| fk_profile        | string | profile id of the profile                 | no       |         |
| fk_competition    | string | competition id of the competiton          | yes      | null    |


## Competition table
name: competition

| field           | type   | notes                               | optional | default |
|-----------------|--------|-------------------------------------|----------|---------|
| competition_id  | string | auto-generated                      | yes      | auto    |
| entry_points    | int    | min entry points to join            | yes      | -1      |
| max_num_players | int    | max number of players that can join | no       |         |
| start_balance   | float  | the starting balance of everyone    | no       |         |
| start_time      | Date   | the starting datetime               | no       |         |
| end_time        | Date   | the ending datetime                 | no       |         |

## Stock table
name: stock  
notes:
- this table should only be used for processing analytics
- for example when user needs realtime stock data use the api instead. dont update this table

| field           | type   | notes                                 | optional | default |
|-----------------|--------|---------------------------------------|----------|---------|
| symbol          | string | the symbol of the stock. max len = 10 | no       |         |
| price_per_share | float  | the price per each share (in USD?)    | no       |         |

## Owns table
name: owns

| field           | type   | notes                          | optional | default |
|-----------------|--------|--------------------------------|----------|---------|
| fk_portfolio    | string | the portfolio id               | no       |         |
| fk_stock        | float  | the stock symbol               | no       |         |
| num_shares      | int    | the number of shares purchased | no       |         |
| amount_invested | float  | the total amount purchased     | no       |         |

## Transaction table
name: transaction  
notes:
- when purchasing, the num_shares should be positive
- when selling, the num_shares should be negative
- when purchasing, the amount should be negative
- when selling, the amount should be positive

| field            | type   | notes                               | optional | default |
|------------------|--------|-------------------------------------|----------|---------|
| transaction_id   | string | auto-generated                      | yes      | auto    |
| num_shares       | int    | number of shares purchased/sold     | no       |         |
| amount           | float  | total amount                        | no       |         |
| transaction_time | Date   | the time the transaction took place | no       |         |
| fk_portfolio     | string | the portfolio id                    | no       |         |
| fk_stock         | string | the stock symbol                    | no       |         |


## History table
name: history

| field         | type   | notes                       | optional | default |
|---------------|--------|-----------------------------|----------|---------|
| history_id    | string | auto-generated              | yes      | auto    |
| balance       | float  | snapshot of the balance     | no       |         |
| snapshot_time | Date   | time the snapshot was taken | no       |         |
| fk_portfolio  | string | the portfolio id            | no       |         |

## Triggers
1. transaction: insert a transaction -> owns table is updated and balance is updated
2. owns: when num_shares = 0 -> the row is deleted

## Procedures
1. snapshot_balances(): takes a snapshot of all portfolios and inserts the snapshot into history
2. update_stock_values(symbol: varchar(10), price_per_share: float): updates the price_per_share of the stock
3. update_balances(): updates the balances of all portfolios after the stock prices have been updated

## Functions
1. compute_investment_gains(portfolio_id: string) returns the profit of the portfolio after stock prices have been updated. Pass the portfolio id as a argument.
