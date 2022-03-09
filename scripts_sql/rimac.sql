CREATE DATABASE `rimac_seguros` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `insurance` (
  `insuranceid` bigint(20) NOT NULL AUTO_INCREMENT,
  `anio` int(11) DEFAULT NULL,
  `chassis` varchar(255) DEFAULT NULL,
  `date_since` datetime DEFAULT NULL,
  `date_until` datetime DEFAULT NULL,
  `has_gas` bit(1) DEFAULT NULL,
  `imei` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `motor` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_contractor` varchar(255) DEFAULT NULL,
  `num_policy` varchar(255) DEFAULT NULL,
  `proposal_id` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`insuranceid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO rimac_seguros.insurance
(anio, chassis, date_since, date_until, has_gas, imei, last_name, motor, name, name_contractor, num_policy, proposal_id, phone, address)
VALUES(NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
