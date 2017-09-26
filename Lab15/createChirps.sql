USE chirper;


CREATE TABLE chirps(
	id int NOT NULL AUTO_INCREMENT,
	message varchar (140) NOT NULL,
    user varchar (20) NOT NULL,
    timestamp datetime NOT NULL,
	PRIMARY KEY (id)
       );