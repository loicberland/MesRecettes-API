
BEGIN;

INSERT INTO "roles"("name") VALUES
('user'),
('admin');

INSERT INTO "users" ("lastname","firstname","email","password","role_id") VALUES
('test','test','test@user.com','test',1),
('test','test','test@admin.com','test',2);

INSERT INTO "recipes" (
    "name",
    "tips",
    "nbr_persons",
    "cook_time",
    "preparation_time",
    "cook_unit",
    "preparation_unit",
    "picture_link",
    "users_id"
) VALUES
(
    'Clafoutis',
    'On peux remplacer les pruneaux par des pommes',
    8,
    10,
    25,
    'm',
    'm',
    'picture_link',
    2
),
(
    'Quiche Lorraine',
    '',
    2,
    10,
    45,
    'm',
    'm',
    'picture_link',
    1
);

INSERT INTO "ingredients"("name") VALUES
('Farine'),
('Sucre'),
('Oeuf'),
('Lait'),
('Pruneau'),
('Pate brisée'),
('Lardon'),
('Crème liquide'),
('Jambon blanc'),
('Poivre'),
('Paprika'),
('Fromage rapé'),
('Beurre');

INSERT INTO "units"("name") VALUES
('g'),
('cl'),
('pincée');

INSERT INTO "quantities"(
    "value",
    "ingredients_id",
    "recipes_id",
    "units_id"
) VALUES
(135,1,1,1),
(112,2,1,1),
(3,3,1,NULL),
(40,4,1,2),
(150,5,1,1),
(NULL,13,1,NULL),
(1,6,2,),
(4,3,2,),
(40,8,2,2),
(200,9,2,1),
(200,7,2,1),
(1,10,2,3),
(1,11,2,3),
(100,12,2,1);

INSERT INTO "steps"("order","description","recipes_id") VALUES
(1,'Préchauffer le four à 180',1),
(2,'Dans un saladier bien mélanger farines + sucres + oeufs ',1),
(3,'Verser le lait et bien mélanger',1),
(4,'Beurrer le moule pour qu\'il n\'accroche pas trop',1),
(5,'Verser le mélange dans le moule',1),
(6,'Disposer les pruneaux dénoyautés',1),
(6,'Placer au four',1),
(1,'Préchauffer le four à 225°',2),
(2,'Faire blanchier les lardons à la poele',2),
(3,'Dans un saladier mélanger les oeufs et la crème',2),
(4,'Découper le jambon blanc en petit morceaux',2),
(5,'Ajouter le jambon dans la préparation',2),
(6,'Ajouter les lardons blanchie',2),
(7,'Ajouter poivre et papikra et bien mélanger',2),
(8,'Ajouter un peu de formage rapé (environ 1/3)',2),
(9,'Dans un plat à tarte, déposer la pate brisée, faire des petits trou avec une fourchette dans la pate',2),
(10,'Verser la préparation et la recouvrir de fromage rapé',2),
(10,'Placer au four à 180°',2);

COMMIT;