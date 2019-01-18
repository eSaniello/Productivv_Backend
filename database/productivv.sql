-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2019 at 02:56 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productivv`
--
CREATE DATABASE IF NOT EXISTS `productivv` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `productivv`;

-- --------------------------------------------------------

--
-- Table structure for table `cijferlijst`
--

CREATE TABLE `cijferlijst` (
  `cijferlijst_id` int(11) NOT NULL,
  `gebruikers_id` int(11) NOT NULL,
  `vak` varchar(2048) NOT NULL,
  `periode_1` double DEFAULT NULL,
  `periode_2` double DEFAULT NULL,
  `periode_3` double DEFAULT NULL,
  `periode_4` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gebruikers`
--

CREATE TABLE `gebruikers` (
  `gebruikers_id` int(11) NOT NULL,
  `gebruikers_naam` varchar(2048) NOT NULL,
  `voornaam` varchar(2048) NOT NULL,
  `achternaam` varchar(2048) NOT NULL,
  `email` varchar(2048) NOT NULL,
  `wachtwoord` varchar(2048) NOT NULL,
  `datum_aangemaakt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gebruikers`
--

INSERT INTO `gebruikers` (`gebruikers_id`, `gebruikers_naam`, `voornaam`, `achternaam`, `email`, `wachtwoord`, `datum_aangemaakt`) VALUES
(3, 'yawyaw', 'Shaniel', 'Samadhan', 'shaniel@samadhan.com', '123456', '2019-01-11 14:55:17'),
(4, 'Juan Rosa', 'Juan', 'Rosa', 'juan@rosa.com', 'ygdbiljwedugw', '2019-01-11 14:56:18');

-- --------------------------------------------------------

--
-- Table structure for table `rooster`
--

CREATE TABLE `rooster` (
  `rooster_id` int(11) NOT NULL,
  `gebruikers_id` int(11) NOT NULL,
  `blok` int(255) NOT NULL,
  `tijd` time NOT NULL,
  `maandag` varchar(2048) NOT NULL,
  `dinsdag` varchar(2048) NOT NULL,
  `woensdag` varchar(2048) NOT NULL,
  `donderdag` varchar(2048) NOT NULL,
  `vrijdag` varchar(2048) NOT NULL,
  `zaterdag` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `taken`
--

CREATE TABLE `taken` (
  `taak_id` int(11) NOT NULL,
  `gebruikers_id` int(11) NOT NULL,
  `titel` varchar(2048) NOT NULL,
  `omschrijving` varchar(2048) NOT NULL,
  `opleverings_datum` date NOT NULL,
  `prioriteit` varchar(2048) NOT NULL,
  `datum_aangemaakt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `compleet` tinyint(1) NOT NULL,
  `categorie` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cijferlijst`
--
ALTER TABLE `cijferlijst`
  ADD PRIMARY KEY (`cijferlijst_id`),
  ADD KEY `gebruikers_id` (`gebruikers_id`);

--
-- Indexes for table `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`gebruikers_id`);

--
-- Indexes for table `rooster`
--
ALTER TABLE `rooster`
  ADD PRIMARY KEY (`rooster_id`),
  ADD KEY `gebruikers_id` (`gebruikers_id`);

--
-- Indexes for table `taken`
--
ALTER TABLE `taken`
  ADD PRIMARY KEY (`taak_id`),
  ADD KEY `gebruikers_id` (`gebruikers_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cijferlijst`
--
ALTER TABLE `cijferlijst`
  MODIFY `cijferlijst_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `gebruikers_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rooster`
--
ALTER TABLE `rooster`
  MODIFY `rooster_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taken`
--
ALTER TABLE `taken`
  MODIFY `taak_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cijferlijst`
--
ALTER TABLE `cijferlijst`
  ADD CONSTRAINT `cijferlijst_ibfk_1` FOREIGN KEY (`gebruikers_id`) REFERENCES `gebruikers` (`gebruikers_id`);

--
-- Constraints for table `rooster`
--
ALTER TABLE `rooster`
  ADD CONSTRAINT `rooster_ibfk_1` FOREIGN KEY (`gebruikers_id`) REFERENCES `gebruikers` (`gebruikers_id`);

--
-- Constraints for table `taken`
--
ALTER TABLE `taken`
  ADD CONSTRAINT `taken_ibfk_1` FOREIGN KEY (`gebruikers_id`) REFERENCES `gebruikers` (`gebruikers_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
