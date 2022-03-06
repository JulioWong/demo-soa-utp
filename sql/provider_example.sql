CREATE DATABASE `provider_example` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

CREATE TABLE `proposal` (
  `proposalid` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `timestamp_created` timestamp NULL DEFAULT current_timestamp(),
  `timestamp_modified` timestamp NULL DEFAULT current_timestamp(),
  `imei` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`proposalid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `trips` (
  `tripid` int(11) NOT NULL AUTO_INCREMENT,
  `km` float DEFAULT NULL,
  `datetime_since` datetime DEFAULT NULL,
  `datetime_until` datetime DEFAULT NULL,
  `timestamp_created` timestamp NULL DEFAULT current_timestamp(),
  `timestamp_updated` timestamp NULL DEFAULT current_timestamp(),
  `proposalid` int(11) DEFAULT NULL,
  PRIMARY KEY (`tripid`),
  KEY `trips_FK` (`proposalid`),
  CONSTRAINT `trips_FK` FOREIGN KEY (`proposalid`) REFERENCES `proposal` (`proposalid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


INSERT INTO proposal (nombre, apellido, timestamp_created, timestamp_modified, imei, phone, address) VALUES(NULL, NULL, current_timestamp(), current_timestamp(), NULL, NULL, NULL);
INSERT INTO trips (km, datetime_since, datetime_until, timestamp_created, timestamp_updated, proposalid) VALUES(NULL, NULL, NULL, current_timestamp(), current_timestamp(), NULL);
