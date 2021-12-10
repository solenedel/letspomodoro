-- Seeds file for Postgres database

-- USERS TABLE

INSERT INTO users (username, email, password)
VALUES ('Mario', 'mario@mail.com', '$2b$10$ZfXRl//yJqXnrRux3Jj9iusNSynWo15bHKC4bClYpHAj8rwq2a3yq');

INSERT INTO users (username, email, password)
VALUES ('Luigi', 'luigi@mail.com', '$2b$10$jcT0ZhOD8glb/W3jbehst.e4jTDqUSr5QUex2d5keg3dNWKIvtxpm');

-- POSTS TABLE

INSERT INTO posts (user_id, text, likes)
VALUES(1, 'This is Mario first post', 5);

INSERT INTO posts (user_id, text, likes)
VALUES(1, 'This is Mario second post', 2);


INSERT INTO posts (user_id, text, likes)
VALUES(2, 'This is Luigi first post', 10);

INSERT INTO posts (user_id, text, likes)
VALUES(2, 'This is Luigi second post', 3);

