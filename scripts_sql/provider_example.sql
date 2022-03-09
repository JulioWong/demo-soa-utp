CREATE DATABASE `provider_example` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

CREATE TABLE `proposal` (
  `proposalid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `timestamp_created` timestamp NULL DEFAULT current_timestamp(),
  `timestamp_modified` timestamp NULL DEFAULT current_timestamp(),
  `imei` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `plate` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  PRIMARY KEY (`proposalid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO provider_example.proposal
(name, last_name, timestamp_created, timestamp_modified, imei, phone, address, plate, brand, model, anio)
VALUES(NULL, NULL, current_timestamp(), current_timestamp(), NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO provider_example.trips
(km, datetime_since, datetime_until, timestamp_created, timestamp_updated, proposalid)
VALUES(NULL, NULL, NULL, current_timestamp(), current_timestamp(), NULL);
