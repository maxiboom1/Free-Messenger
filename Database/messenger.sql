-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2023 at 07:19 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `messenger`
--
CREATE DATABASE IF NOT EXISTS `messenger` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `messenger`;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `messageId` int(11) NOT NULL,
  `messageDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `messageBody` varchar(5000) NOT NULL,
  `senderUserId` int(11) NOT NULL,
  `recipientUserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`messageId`, `messageDate`, `messageBody`, `senderUserId`, `recipientUserId`) VALUES
(1, '2023-02-17 19:51:14', 'Hello Bart, This is Homer!\r\nHRU? :)', 3, 2),
(2, '2023-02-17 19:51:54', 'Hi Homer, its Bart, im fine, and you?', 2, 3),
(3, '2023-02-17 19:52:54', 'Hi Bart, Its Alex, how do you do?', 1, 2),
(4, '2023-02-17 20:05:38', 'Glad to head you, Bart, my problemmatic son!', 3, 2),
(9, '2023-02-17 21:45:49', 'Hello Assaf, this is Alex  how are you?', 1, 9),
(11, '2023-02-17 22:04:41', 'hiiii', 1, 4),
(12, '2023-02-17 22:05:50', 'Hello Assaf, this is Alex ?', 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `isOnline` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `username`, `password`, `isOnline`) VALUES
(1, 'Alex', 'Samih-zade', 'maxiboom', '123456', 0),
(2, 'Bart', 'Simpson', 'bart1', '123456', 0),
(3, 'Homer', 'Simpson', 'homer1', '123456', 0),
(4, 'Anna', 'Vekselman', 'anna1', '123456', 0),
(5, 'Dima', 'whoKnows', 'dima11', '123456', 0),
(9, 'Assaf', 'Fink', 'cute-kitten1', '123456', 1),
(10, 'Eitan', 'Kohen', 'Eitan1', '123456', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`messageId`),
  ADD KEY `senderUserId` (`senderUserId`),
  ADD KEY `recipientUserId` (`recipientUserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `messageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderUserId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`recipientUserId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
