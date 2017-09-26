INSERT INTO `chirper`.`chirps`
(`message`,
`user`,
`timestamp`)
VALUES(
'yoyo',
'jim',
now());
SELECT `chirps`.`id`,
    `chirps`.`message`,
    `chirps`.`user`,
    `chirps`.`timestamp`
FROM `chirper`.`chirps`;

UPDATE `chirper`.`chirps`
SET

`message` = 'go'
WHERE `id` = 5;

DELETE FROM `chirper`.`chirps`
WHERE id = 5;


