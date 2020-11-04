--
-- SQL queries on Monopoly database
--
--@Author: Leo Kim (sk79)
--@date: 23/10/20
--


------------------------------
--       Exercise 8.1        -
------------------------------

-- a
SELECT *
  FROM Game
  ORDER BY time DESC
  ;

-- b
SELECT *
  FROM Game
  WHERE (time >= DATE_TRUNC('week', CURRENT_TIMESTAMP - interval '1 week'))
  ;

-- c
SELECT *
  FROM Player
  WHERE name IS NOT NULL
 ;

-- d
SELECT playerID
  FROM PlayerGame
  WHERE score > 2000
  ;

-- e
SELECT *
  FROM Player
  WHERE emailAddress like '%gmail%'
  ;

------------------------------
--       Exercise 8.2        -
------------------------------

-- a
SELECT score
  FROM PlayerGame as P1, Player as P2
  WHERE name = 'The King'
    AND P2.ID = P1.playerID
  ORDER BY score DESC
  ;

-- b
SELECT name
  FROM PlayerGame as P1, Game as P2, Player as P3
  WHERE time = '2006-06-28 13:20:00'
    AND P1.playerID = P3.ID
    AND P1.gameID = P2.ID
  ;
-- c
/* It compares IDs within Player table and returs ID that is greater.
*/

-- d
/* Joining a table to itself can be used in situations where comparing rows within the same table or querying hierachical data.
*/